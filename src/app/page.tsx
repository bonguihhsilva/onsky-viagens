import Image from "next/image";
import Link from "next/link";
import { FronteiraMap } from "@/components/FronteiraMap";
import { WhatsAppIcon } from "@/components/Icons";
import { Journey } from "@/components/Journey";
import { PackageTile } from "@/components/PackageTile";
import { Reveal } from "@/components/Reveal";
import { getPackages, getTours, testimonials } from "@/lib/data";
import { formatPrice, site, waLink } from "@/lib/site";
import styles from "./home.module.css";

const curated = ["gramado-e-canela", "maceio-e-maragogi", "buenos-aires", "cancun-lua-de-mel", "santiago-e-valle-nevado"];

const credentials = [
  { title: `Desde ${site.since}`, text: "em Foz do Iguaçu, na Av. Garibaldi" },
  { title: `Mais de ${site.travelers}`, text: "viajantes atendidos" },
  { title: "Suporte 24h", text: "durante toda a viagem" },
  { title: "Brasil e exterior", text: "pacotes e roteiros sob medida" },
];

const services = [
  {
    title: "Pacotes nacionais",
    text: "Serra, praia e cidades brasileiras, com aéreo saindo de Foz.",
    href: "/pacotes?tipo=nacional",
    cta: "Ver pacotes nacionais",
  },
  {
    title: "Pacotes internacionais",
    text: "América do Sul, Caribe, Estados Unidos e Europa, com documentação orientada.",
    href: "/pacotes?tipo=internacional",
    cta: "Ver pacotes internacionais",
  },
  {
    title: "Passeios na tríplice fronteira",
    text: "Cataratas, Itaipu, Parque das Aves e Paraguai, com busca no hotel.",
    href: "/passeios-foz",
    cta: "Ver passeios em Foz",
  },
  {
    title: "Roteiros sob medida",
    text: "Lua de mel, viagens em grupo, formaturas: montamos do zero, no seu ritmo.",
    href: waLink("Olá, Onsky! Quero um roteiro sob medida. Destino: ___ Época: ___ Pessoas: ___"),
    cta: "Pedir um roteiro",
    external: true,
  },
];

export default async function Home() {
  const [all, tours] = await Promise.all([getPackages(), getTours()]);
  const picks = curated.map((slug) => all.find((p) => p.slug === slug)).filter((p) => p !== undefined);
  const [feature, ...rest] = picks;
  const [lead, ...others] = testimonials;
  const years = new Date().getFullYear() - site.since;

  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-titulo">
        <div className={`wrap ${styles.heroFrame}`}>
          <div className={styles.heroText}>
            <p className={`eyebrow ${styles.onNavy}`}>Onsky Viagens e Turismo · Foz do Iguaçu</p>
            <h1 id="hero-titulo">
              Você só precisa <em>aproveitar</em> a viagem.
            </h1>
            <p className={styles.heroLead}>
              Somos uma agência de Foz do Iguaçu que planeja viagens no Brasil, no exterior e passeios na
              tríplice fronteira. Do primeiro contato ao retorno, uma pessoa da nossa equipe cuida de cada
              detalhe.
            </p>
            <div className={styles.heroActions}>
              <Link href="#quem-somos" className="btn btn-light">
                Conheça a Onsky
              </Link>
              <Link href="/pacotes" className={styles.heroLink}>
                Ver pacotes →
              </Link>
            </div>
          </div>
          <figure className={styles.heroMedia}>
            <Image
              src="/img/hero.jpg"
              alt="Viajante olhando pela janela do avião um mar de nuvens ao entardecer"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </figure>
          <ul className={styles.credentials} aria-label="A Onsky em números">
            {credentials.map((c) => (
              <li key={c.title}>
                <strong>{c.title}</strong>
                <span>{c.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="quem-somos" className={styles.about} aria-labelledby="sobre-titulo">
        <div className={`wrap ${styles.aboutGrid}`}>
          <Reveal className={styles.aboutText}>
            <p className="eyebrow">Quem somos</p>
            <h2 id="sobre-titulo">Uma agência de Foz, com endereço e gente de verdade.</h2>
            <p>
              Há {years} anos planejamos viagens a partir da Vila A, em Foz do Iguaçu. Mais de {site.travelers}{" "}
              viajantes já passaram por aqui: casais em lua de mel, famílias inteiras, grupos de amigos e quem
              viajava sozinho pela primeira vez.
            </p>
            <p>
              Você pode passar na agência para tomar um café e conversar sobre o roteiro, ou resolver tudo pelo
              WhatsApp. Do jeito que for mais fácil para você.
            </p>
            <Link href="/sobre" className="arrow-link">
              <span>Nossa história</span>
            </Link>
          </Reveal>
          <Reveal className={styles.aboutMedia} index={1}>
            <Image
              src="/img/planejamento.jpg"
              alt="Mesa de planejamento com passaporte, câmera e mapa"
              fill
              sizes="(max-width: 860px) 100vw, 45vw"
            />
          </Reveal>
        </div>

        <div className="wrap">
          <Reveal className={styles.services}>
            <h2 className={styles.servicesTitle}>O que fazemos</h2>
            <ol>
              {services.map((s, i) => (
                <li key={s.title}>
                  <span className={styles.serviceNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  {s.external ? (
                    <a href={s.href} className="arrow-link" target="_blank" rel="noopener noreferrer">
                      <span>{s.cta}</span>
                    </a>
                  ) : (
                    <Link href={s.href} className="arrow-link">
                      <span>{s.cta}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className={styles.journey} aria-labelledby="jornada-titulo">
        <div className="wrap">
          <Reveal className={styles.journeyHead}>
            <p className={`eyebrow ${styles.onNavy}`}>Como cuidamos de você</p>
            <h2 id="jornada-titulo">
              Acompanhamos você do primeiro contato <em>ao retorno.</em>
            </h2>
            <p>
              Agência boa não some depois da venda. Cada viagem tem uma pessoa da equipe responsável por ela,
              com nome, telefone e WhatsApp, do planejamento até você chegar em casa.
            </p>
          </Reveal>
          <Journey />
        </div>
      </section>

      <section className={styles.showcase} aria-labelledby="vitrine-titulo">
        <div className="wrap">
          <Reveal className={styles.sectionHead}>
            <p className="eyebrow">Pacotes da temporada</p>
            <h2 id="vitrine-titulo">Viagens com preço, data e roteiro à vista.</h2>
            <p className={styles.sectionIntro}>
              Escolha com calma: cada pacote mostra o que inclui, o que não inclui e o valor por pessoa. Quando
              decidir, a reserva leva um minuto.
            </p>
          </Reveal>

          <div className={styles.showcasePanel}>
            {feature && (
              <Reveal>
                <PackageTile pkg={feature} size="feature" />
              </Reveal>
            )}

            <ul className={styles.showcaseGrid}>
              {rest.map((pkg, i) => (
                <Reveal as="li" key={pkg.slug} index={i}>
                  <PackageTile pkg={pkg} />
                </Reveal>
              ))}
            </ul>

            <p className={styles.showcaseMore}>
              <Link href="/pacotes" className="btn btn-outline">
                Ver todos os {all.length} pacotes
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.foz} aria-labelledby="foz-titulo">
        <div className={styles.fozImage}>
          <Image
            src="/img/foz.jpg"
            alt="Cataratas do Iguaçu sob céu de tempestade, com a mata atlântica em primeiro plano"
            fill
            sizes="100vw"
          />
        </div>
        <div className={`wrap ${styles.fozGrid}`}>
          <Reveal className={styles.fozPanel}>
            <p className="eyebrow">Tríplice fronteira</p>
            <h2 id="foz-titulo">Nossa casa é aqui. Três países em um só dia.</h2>
            <p className={styles.fozIntro}>
              Conhecemos cada trilha, fila e atalho da região. Buscamos você no hotel e cuidamos da aduana nos
              passeios pela Argentina e pelo Paraguai.
            </p>
            <ul className={styles.tourList}>
              {tours.slice(0, 5).map((tour) => (
                <li key={tour.slug}>
                  <Link href={`/passeios-foz#${tour.slug}`}>
                    <span className={styles.tourName}>{tour.title}</span>
                    <span className={styles.tourMeta}>{tour.duration}</span>
                    <span className={`${styles.tourPrice} price`}>{formatPrice(tour.price)}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/passeios-foz" className="arrow-link">
              <span>Todos os passeios</span>
            </Link>
          </Reveal>
          <Reveal className={styles.fozMap} index={1}>
            <FronteiraMap />
          </Reveal>
        </div>
      </section>

      {lead && (
        <section className={styles.voices} aria-labelledby="depoimentos-titulo">
          <div className={`wrap ${styles.voicesGrid}`}>
            <h2 id="depoimentos-titulo" className="visually-hidden">
              O que dizem nossos viajantes
            </h2>
            <Reveal as="figure" className={styles.leadQuote}>
              <blockquote>
                <p>{lead.quote}</p>
              </blockquote>
              <figcaption>
                {lead.name} <span>· {lead.trip}</span>
              </figcaption>
            </Reveal>
            <div className={styles.otherQuotes}>
              {others.map((t, i) => (
                <Reveal as="figure" key={t.name} index={i + 1}>
                  <blockquote>
                    <p>{t.quote}</p>
                  </blockquote>
                  <figcaption>
                    {t.name} <span>· {t.trip}</span>
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={styles.closing} aria-labelledby="fechamento-titulo">
        <div className={`wrap ${styles.closingInner}`}>
          <div>
            <h2 id="fechamento-titulo">
              Para onde <em>vamos?</em>
            </h2>
            <p>
              Conte o destino, a época e quem vai junto. Respondemos no mesmo dia útil com opções e valores, sem
              compromisso.
            </p>
          </div>
          <div className={styles.closingActions}>
            <a
              className="btn btn-primary"
              href={waLink("Olá, Onsky! Quero planejar uma viagem. Destino: ___ Época: ___ Pessoas: ___")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              Planejar pelo WhatsApp
            </a>
            <Link href="/contato" className="arrow-link">
              <span>Ou visite a agência: {site.address}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
