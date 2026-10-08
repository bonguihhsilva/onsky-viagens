import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Journey } from "@/components/Journey";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import { site, waLink } from "@/lib/site";
import styles from "./sobre.module.css";

export const metadata: Metadata = {
  title: "Como cuidamos de você",
  description:
    "A Onsky acompanha cada viagem do primeiro contato até o retorno. Conheça nossa forma de trabalhar.",
};

const promises = [
  {
    title: "Uma pessoa responsável",
    text: "Sua viagem tem nome e sobrenome do nosso lado. Você não repete a história a cada atendente.",
  },
  {
    title: "Preço sem surpresa",
    text: "O que está e o que não está incluído fica escrito antes de qualquer pagamento.",
  },
  {
    title: "Resposta no mesmo dia",
    text: "Em horário comercial, respondemos no mesmo dia útil. Durante a viagem, a qualquer hora.",
  },
  {
    title: "Problema é com a gente",
    text: "Voo cancelado, overbooking, mala extraviada: quem corre atrás é a Onsky, não você.",
  },
];

export default function SobrePage() {
  const years = new Date().getFullYear() - site.since;

  return (
    <>
      <PageIntro eyebrow="Como cuidamos de você" title={<>Você viaja. <em>A gente cuida do resto.</em></>}>
        <p>
          A Onsky nasceu em Foz do Iguaçu em {site.since} com uma ideia simples: viagem bem feita é aquela em que
          o cliente só precisa aproveitar.
        </p>
      </PageIntro>

      <section className={`wrap ${styles.section}`} aria-labelledby="historia">
        <div className={styles.storyBox}>
          <div className={styles.cover}>
            <Image
              src="/img/planejamento.jpg"
              alt="Passaporte, câmera fotográfica e mapa sobre a mesa durante o planejamento de uma viagem"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 50vw"
            />
          </div>
          <div className={styles.storyText}>
            <h2 id="historia">Nossa história</h2>
            <p>
              São {years} anos planejando viagens a partir da Av. Garibaldi, em Foz. Mais de {site.travelers}{" "}
              viajantes passaram por aqui: casais em lua de mel, famílias com crianças pequenas, avós realizando a
              primeira viagem internacional, grupos de amigos.
            </p>
            <p>
              Morar na tríplice fronteira ensina a receber bem. É isso que levamos para cada roteiro, seja um fim
              de semana em Gramado ou duas semanas na Europa: atenção aos detalhes que fazem a viagem ser
              tranquila.
            </p>
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.section}`} aria-labelledby="jornada">
        <div className={styles.journeyBox}>
          <h2 id="jornada">As seis etapas da sua viagem</h2>
          <Journey />
        </div>
      </section>

      <section className={`wrap ${styles.section}`} aria-labelledby="compromissos">
        <div className={styles.promisesBox}>
          <h2 id="compromissos">Nossos compromissos</h2>
          <ol>
            {promises.map((p, i) => (
              <Reveal as="li" key={p.title} index={i}>
                <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className={`wrap ${styles.section} ${styles.last}`} aria-labelledby="visite">
        <div className={styles.visitBox}>
          <div>
            <h2 id="visite">Passe para um café.</h2>
            <p>
              {site.address}, {site.city}. {site.hours}.
            </p>
          </div>
          <div className={styles.visitActions}>
            <a
              className="btn btn-primary"
              href={waLink("Olá, Onsky! Quero agendar uma conversa na agência.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar uma conversa
            </a>
            <Link href="/contato" className="arrow-link">
              <span>Ver no mapa</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
