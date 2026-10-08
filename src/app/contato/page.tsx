import type { Metadata } from "next";
import { WhatsAppIcon } from "@/components/Icons";
import { PageIntro } from "@/components/PageIntro";
import { site, waLink } from "@/lib/site";
import styles from "./contato.module.css";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Onsky pelo WhatsApp ou visite a agência na Av. Garibaldi, em Foz do Iguaçu.",
};

const mapQuery = encodeURIComponent(`${site.address}, ${site.city}`);

export default function ContatoPage() {
  return (
    <>
      <PageIntro eyebrow="Contato" title={<>Fale com quem vai <em>cuidar da sua viagem.</em></>}>
        <p>Pelo WhatsApp é mais rápido. Se preferir conversar pessoalmente, a agência fica na Vila A.</p>
      </PageIntro>

      <div className="wrap">
        <div className={styles.grid}>
          <ul className={styles.channels}>
            <li>
              <span className={styles.label}>WhatsApp</span>
              <a
                href={waLink("Olá, Onsky! Vim pelo site.")}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.big}
              >
                {site.phoneDisplay}
              </a>
              <a
                className="btn btn-primary"
                href={waLink("Olá, Onsky! Vim pelo site.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                Iniciar conversa
              </a>
            </li>
            <li>
              <span className={styles.label}>Endereço</span>
              <address className={styles.address}>
                <span className={styles.big}>{site.street}</span>
                <span className={styles.mid}>
                  {site.district} · {site.city}
                </span>
              </address>
              <a
                className="arrow-link"
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Como chegar</span>
              </a>
            </li>
            <li>
              <span className={styles.label}>Horário</span>
              <p className={styles.mid}>{site.hours}</p>
              <p className={styles.small}>Clientes em viagem têm suporte 24h pelo WhatsApp.</p>
            </li>
          </ul>

          <div className={styles.map}>
            <iframe
              title={`Mapa: ${site.address}, ${site.city}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
}
