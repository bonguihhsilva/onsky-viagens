import Image from "next/image";
import Link from "next/link";
import { site, waLink } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.brand}>
          <Image src="/img/logo-onsky.png" alt="Onsky Viagens e Turismo" width={139} height={162} />
          <p>
            Agência de viagens em Foz do Iguaçu desde {site.since}. Do primeiro contato ao retorno, com você em
            cada etapa.
          </p>
        </div>

        <nav aria-label="Rodapé" className={styles.col}>
          <h2>Viagens</h2>
          <ul>
            <li><Link href="/pacotes?tipo=nacional">Pacotes nacionais</Link></li>
            <li><Link href="/pacotes?tipo=internacional">Pacotes internacionais</Link></li>
            <li><Link href="/pacotes?tipo=lua-de-mel">Lua de mel</Link></li>
            <li><Link href="/passeios-foz">Passeios em Foz</Link></li>
          </ul>
        </nav>

        <nav aria-label="Institucional" className={styles.col}>
          <h2>Onsky</h2>
          <ul>
            <li><Link href="/sobre">Como cuidamos de você</Link></li>
            <li><Link href="/contato">Contato e endereço</Link></li>
          </ul>
        </nav>

        <address className={styles.col}>
          <h2>Atendimento</h2>
          <ul>
            <li>
              <a href={waLink("Olá, Onsky!")} target="_blank" rel="noopener noreferrer">
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>{site.address}</li>
            <li>{site.city}</li>
            <li className={styles.muted}>{site.hours}</li>
          </ul>
        </address>
      </div>

      <div className={`wrap ${styles.base}`}>
        <p>© {year} Onsky Viagens e Turismo</p>
        <p className={styles.muted}>Valores por pessoa em quarto duplo, sujeitos a disponibilidade.</p>
      </div>
    </footer>
  );
}
