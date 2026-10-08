import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Journey } from "@/components/Journey";
import { PackageTile } from "@/components/PackageTile";
import { ReservePanel } from "@/components/ReservePanel";
import { getPackage, getPackages, startingPrice } from "@/lib/data";
import { formatPrice } from "@/lib/site";
import styles from "./detalhe.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const all = await getPackages();
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pkg = await getPackage((await params).slug);
  if (!pkg) return { title: "Pacote não encontrado" };
  return {
    title: `${pkg.title}, ${pkg.nights} noites`,
    description: pkg.summary,
    openGraph: { images: [pkg.image] },
  };
}

export default async function PacotePage({ params }: Props) {
  const pkg = await getPackage((await params).slug);
  if (!pkg) notFound();

  const price = startingPrice(pkg);
  const others = (await getPackages()).filter((p) => p.slug !== pkg.slug);
  const related = [
    ...others.filter((p) => p.category === pkg.category),
    ...others.filter((p) => p.category !== pkg.category),
  ].slice(0, 3);

  return (
    <article>
      <header className={`wrap ${styles.head}`}>
        <nav aria-label="Você está em" className={styles.crumbs}>
          <Link href="/pacotes">Pacotes</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/pacotes?tipo=${pkg.category}`}>
            {pkg.category === "nacional" ? "Nacionais" : "Internacionais"}
          </Link>
        </nav>
        <div className={styles.titleRow}>
          <div>
            <p className={styles.place}>
              {pkg.destination}, {pkg.country}
            </p>
            <h1>{pkg.title}</h1>
          </div>
          <p className={styles.hook}>{pkg.hook}</p>
        </div>
        <dl className={styles.facts}>
          <div>
            <dt>Duração</dt>
            <dd>
              {pkg.nights} noites, {pkg.nights + 1} dias
            </dd>
          </div>
          <div>
            <dt>Saída</dt>
            <dd>{pkg.departureFrom}</dd>
          </div>
          <div>
            <dt>A partir de</dt>
            <dd className="price">{price !== null ? `${formatPrice(price)} por pessoa` : "Sob consulta"}</dd>
          </div>
        </dl>
      </header>

      <div className={styles.cover}>
        <Image src={pkg.image} alt={pkg.imageAlt} fill priority sizes="100vw" />
      </div>

      <div className={`wrap ${styles.layout}`}>
        <div className={styles.content}>
          <section aria-labelledby="sobre-pacote">
            <h2 id="sobre-pacote">A viagem</h2>
            <p className={styles.summary}>{pkg.summary}</p>
          </section>

          <section aria-labelledby="roteiro">
            <h2 id="roteiro">Roteiro</h2>
            <ol className={styles.itinerary}>
              {pkg.itinerary.map((day) => (
                <li key={day.day}>
                  <span className={styles.day}>{day.day}</span>
                  <div>
                    <h3>{day.title}</h3>
                    <p>{day.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="inclui" className={styles.includes}>
            <div>
              <h2 id="inclui">O que está incluído</h2>
              <ul className={styles.yes}>
                {pkg.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Não está incluído</h2>
              <ul className={styles.no}>
                {pkg.excludes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="acompanhamento" className={styles.care}>
            <h2 id="acompanhamento">Com você do começo ao fim</h2>
            <p>
              Ao reservar, uma pessoa da nossa equipe fica responsável pela sua viagem e acompanha cada etapa.
            </p>
            <Journey variant="compact" />
          </section>
        </div>

        <div className={styles.side}>
          <ReservePanel
            title={pkg.title}
            nights={pkg.nights}
            departures={pkg.departures}
            maxInstallments={pkg.maxInstallments}
          />
        </div>
      </div>

      <div className={styles.mobileBar}>
        <p>
          <span>{price !== null ? "A partir de" : "Datas e valores"}</span>
          <strong className="price">{price !== null ? formatPrice(price) : "Sob consulta"}</strong>
        </p>
        <a href="#reservar" className="btn btn-primary">
          {price !== null ? "Escolher data" : "Consultar"}
        </a>
      </div>

      {related.length > 0 && (
        <section className={`wrap ${styles.related}`} aria-labelledby="relacionados">
          <div className={styles.relatedBox}>
            <h2 id="relacionados">Você também pode gostar</h2>
            <ul>
              {related.map((p) => (
                <li key={p.slug}>
                  <PackageTile pkg={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
