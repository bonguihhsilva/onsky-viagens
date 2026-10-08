import type { Metadata } from "next";
import Image from "next/image";
import { FronteiraMap } from "@/components/FronteiraMap";
import { WhatsAppIcon } from "@/components/Icons";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { getTours } from "@/lib/data";
import { formatPrice, waLink } from "@/lib/site";
import styles from "./passeios.module.css";

export const metadata: Metadata = {
  title: "Passeios em Foz do Iguaçu",
  description:
    "Cataratas do lado brasileiro e argentino, Itaipu, Parque das Aves, Macuco Safari e compras no Paraguai, com busca no hotel.",
};

export default async function PasseiosPage() {
  const tours = await getTours();

  return (
    <>
      <PageIntro eyebrow="Passeios em Foz" title={<>Três países, <em>um só roteiro.</em></>}>
        <p>
          Buscamos você no hotel, cuidamos dos ingressos e da aduana. Combine passeios no mesmo dia e a gente
          organiza os horários.
        </p>
      </PageIntro>

      <div className="wrap">
        <div className={styles.overviewBox}>
          <FronteiraMap />
          <div className={styles.tips}>
            <h2>Antes de ir</h2>
            <ul>
              <li>
                <strong>Documentos.</strong> Para Argentina e Paraguai, leve RG com menos de 10 anos ou passaporte.
                Menores precisam de autorização se não estiverem com os dois responsáveis.
              </li>
              <li>
                <strong>Melhor época.</strong> As Cataratas ficam mais volumosas entre dezembro e março. Em julho, o
                céu limpo rende as melhores fotos.
              </li>
              <li>
                <strong>Combinações.</strong> Cataratas BR com Parque das Aves no mesmo dia; lado argentino pede um
                dia inteiro.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ol className={`wrap ${styles.list}`}>
        {tours.map((tour, i) => (
          <Reveal as="li" key={tour.slug} className={styles.tour}>
            <div className={styles.media} id={tour.slug}>
              <Image
                src={tour.image}
                alt={tour.imageAlt}
                fill
                sizes="(max-width: 860px) 100vw, 45vw"
                priority={i === 0}
              />
            </div>
            <div className={styles.body}>
              <p className={styles.meta}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {tour.country} · {tour.duration}
              </p>
              <h2>{tour.title}</h2>
              <p className={styles.summary}>{tour.summary}</p>
              <ul className={styles.includes} aria-label="Incluso">
                {tour.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {tour.note && <p className={styles.note}>{tour.note}</p>}
              <div className={styles.buy}>
                <p>
                  <strong className="price">{formatPrice(tour.price)}</strong>
                  <span> por pessoa</span>
                </p>
                <a
                  className="btn btn-primary"
                  href={waLink(
                    `Olá, Onsky! Quero reservar o passeio *${tour.title}*.\nData: ___\nPessoas: ___\nHotel: ___`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  Reservar
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      <section className={`wrap ${styles.combo}`}>
        <div className={styles.comboBox}>
          <h2>Vai ficar alguns dias em Foz?</h2>
          <p>Montamos um roteiro de 2 a 4 dias com todos os passeios, transfers e hotel, num valor fechado.</p>
          <a
            className="btn btn-light"
            href={waLink("Olá, Onsky! Vou ficar alguns dias em Foz e quero um roteiro completo. Datas: ___ Pessoas: ___")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Montar meu roteiro em Foz
          </a>
        </div>
      </section>
    </>
  );
}
