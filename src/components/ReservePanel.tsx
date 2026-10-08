"use client";

import { useState } from "react";
import { formatDate, formatDateShort, formatInstallment, formatPrice, waLink } from "@/lib/site";
import type { Departure } from "@/lib/types";
import { WhatsAppIcon } from "./Icons";
import styles from "./ReservePanel.module.css";

type Props = {
  title: string;
  nights: number;
  departures: Departure[];
  maxInstallments: number;
};

const MIN_TRAVELERS = 1;
const MAX_TRAVELERS = 10;

export function ReservePanel({ title, nights, departures, maxInstallments }: Props) {
  const firstAvailable = departures.find((d) => !d.soldOut);
  const [date, setDate] = useState(firstAvailable?.date ?? "");
  const [travelers, setTravelers] = useState(2);

  const selected = departures.find((d) => d.date === date);
  const total = selected ? selected.pricePerPerson * travelers : 0;
  const soldOutDates = departures.filter((d) => d.soldOut);

  if (!firstAvailable) {
    const waitlist = soldOutDates.length > 0;
    return (
      <aside className={styles.panel} id="reservar" aria-labelledby="reservar-titulo">
        <h2 id="reservar-titulo" className={styles.heading}>
          {waitlist ? "Saídas esgotadas" : "Datas sob consulta"}
        </h2>
        <p className={styles.note}>
          {waitlist
            ? "As vagas desta temporada acabaram. Avisamos você assim que abrirmos novas datas."
            : "Este roteiro é montado nas datas que funcionam para você. Conte quando quer viajar e mandamos as opções com valores."}
        </p>
        <a
          className={`btn btn-primary ${styles.cta}`}
          href={waLink(`Olá, Onsky! Tenho interesse no pacote *${title}* (${nights} noites). Quais datas e valores vocês têm?`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          {waitlist ? "Avise-me de novas datas" : "Consultar datas"}
        </a>
      </aside>
    );
  }

  const message = [
    `Olá, Onsky! Quero reservar o pacote *${title}* (${nights} noites).`,
    `Saída: ${formatDateShort(date)}`,
    `Viajantes: ${travelers}`,
    `Valor estimado: ${formatPrice(total)}`,
    "Podem confirmar a disponibilidade?",
  ].join("\n");

  return (
    <aside className={styles.panel} id="reservar" aria-labelledby="reservar-titulo">
      <h2 id="reservar-titulo" className={styles.heading}>
        Reserve sua saída
      </h2>

      <fieldset className={styles.dates}>
        <legend>Data de saída</legend>
        {departures.map((d) => (
          <label key={d.date} className={styles.date} data-soldout={d.soldOut || undefined}>
            <input
              type="radio"
              name="saida"
              value={d.date}
              checked={date === d.date}
              disabled={d.soldOut}
              onChange={() => setDate(d.date)}
            />
            <span className={styles.dateLabel}>{formatDate(d.date)}</span>
            <span className={`${styles.datePrice} price`}>
              {d.soldOut ? "Esgotado" : formatPrice(d.pricePerPerson)}
            </span>
          </label>
        ))}
      </fieldset>

      <div className={styles.travelers}>
        <span id="viajantes-label">Viajantes</span>
        <div className={styles.stepper} role="group" aria-labelledby="viajantes-label">
          <button
            type="button"
            onClick={() => setTravelers((n) => Math.max(MIN_TRAVELERS, n - 1))}
            disabled={travelers <= MIN_TRAVELERS}
            aria-label="Remover viajante"
          >
            −
          </button>
          <output aria-live="polite">{travelers}</output>
          <button
            type="button"
            onClick={() => setTravelers((n) => Math.min(MAX_TRAVELERS, n + 1))}
            disabled={travelers >= MAX_TRAVELERS}
            aria-label="Adicionar viajante"
          >
            +
          </button>
        </div>
      </div>

      <div className={styles.total} aria-live="polite">
        <span>Total estimado</span>
        <strong className="price">{formatPrice(total)}</strong>
        <small>
          ou {maxInstallments}x de {formatInstallment(total / maxInstallments)} sem juros
        </small>
      </div>

      <a className={`btn btn-primary ${styles.cta}`} href={waLink(message)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon />
        Reservar pelo WhatsApp
      </a>
      <p className={styles.note}>
        A mensagem já vai com data, viajantes e valor. Confirmamos a disponibilidade e enviamos o contrato. Nada é
        cobrado antes disso.
      </p>
      {travelers > 4 && (
        <p className={styles.note}>Para grupos, podemos ter condições especiais. Pergunte na conversa.</p>
      )}
    </aside>
  );
}
