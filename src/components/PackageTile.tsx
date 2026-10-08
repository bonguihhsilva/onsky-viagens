import Image from "next/image";
import Link from "next/link";
import { nextDeparture, startingPrice } from "@/lib/data";
import { formatDate, formatPrice } from "@/lib/site";
import type { TravelPackage } from "@/lib/types";
import styles from "./PackageTile.module.css";

type Props = {
  pkg: TravelPackage;
  size?: "feature" | "regular";
  className?: string;
  priority?: boolean;
};

export function PackageTile({ pkg, size = "regular", className = "", priority }: Props) {
  const price = startingPrice(pkg);
  const next = nextDeparture(pkg);
  const sizes = size === "feature" ? "(max-width: 760px) 100vw, 60vw" : "(max-width: 760px) 100vw, 33vw";

  return (
    <article className={`${styles.tile} ${styles[size]} ${className}`}>
      <Link href={`/pacotes/${pkg.slug}`} className={styles.link}>
        <div className={styles.media}>
          <Image src={pkg.image} alt={pkg.imageAlt} fill sizes={sizes} priority={priority} />
          <span className={styles.badge}>{pkg.category === "nacional" ? "Nacional" : "Internacional"}</span>
        </div>
        <div className={styles.body}>
          <p className={styles.meta}>
            {pkg.destination}, {pkg.country} · {pkg.nights} noites
          </p>
          <h3 className={styles.title}>{pkg.title}</h3>
          {size === "feature" && <p className={styles.hook}>{pkg.hook}</p>}
          <p className={styles.price}>
            {price !== null ? (
              <>
                <span className={styles.from}>a partir de</span>{" "}
                <strong className="price">{formatPrice(price)}</strong>{" "}
                <span className={styles.from}>por pessoa</span>
              </>
            ) : (
              <span className={styles.from}>Datas e valores sob consulta</span>
            )}
          </p>
          {next && <p className={styles.next}>Próxima saída: {formatDate(next.date)}</p>}
        </div>
      </Link>
    </article>
  );
}
