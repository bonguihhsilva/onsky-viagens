"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PackageTile } from "@/components/PackageTile";
import { Reveal } from "@/components/Reveal";
import { filterPackages, packageFilters, type PackageFilter, type PackageSort } from "@/lib/data";
import { waLink } from "@/lib/site";
import type { TravelPackage } from "@/lib/types";
import styles from "./pacotes.module.css";

type Props = {
  packages: TravelPackage[];
};

const isFilter = (v: string | null): v is PackageFilter => packageFilters.some((f) => f.value === v);

function hrefFor(filter: PackageFilter, sort: PackageSort) {
  const params = new URLSearchParams();
  if (filter !== "todos") params.set("tipo", filter);
  if (sort !== "saida") params.set("ordem", sort);
  const qs = params.toString();
  return qs ? `/pacotes?${qs}` : "/pacotes";
}

function Catalog({ packages, filter, sort }: Props & { filter: PackageFilter; sort: PackageSort }) {
  const list = filterPackages(packages, filter, sort);
  const activeLabel = packageFilters.find((f) => f.value === filter)?.label ?? "Todos";

  return (
    <div className={styles.catalog}>
      <div className={styles.toolbar}>
        <nav aria-label="Filtrar pacotes">
          <ul className={styles.filters}>
            {packageFilters.map((f) => (
              <li key={f.value}>
                <Link
                  href={hrefFor(f.value, sort)}
                  className={styles.chip}
                  aria-current={f.value === filter ? "true" : undefined}
                  scroll={false}
                >
                  {f.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.sort}>
          <span>Ordenar:</span>
          <Link href={hrefFor(filter, "saida")} aria-current={sort === "saida" ? "true" : undefined} scroll={false}>
            próximas saídas
          </Link>
          <Link href={hrefFor(filter, "preco")} aria-current={sort === "preco" ? "true" : undefined} scroll={false}>
            menor preço
          </Link>
        </p>
      </div>

      <p className={styles.count} aria-live="polite">
        {list.length} {list.length === 1 ? "pacote" : "pacotes"}
        {filter !== "todos" && <> em {activeLabel.toLowerCase()}</>}
      </p>

      {list.length > 0 ? (
        <ul className={styles.grid}>
          {list.map((pkg, i) => (
            <Reveal as="li" key={pkg.slug} index={i % 3}>
              <PackageTile pkg={pkg} priority={i < 3} />
            </Reveal>
          ))}
        </ul>
      ) : (
        <div className={styles.empty}>
          <h2>Nenhum pacote nesse filtro por enquanto.</h2>
          <p>
            Novas saídas entram toda semana. Enquanto isso, podemos montar uma viagem sob medida para você.
          </p>
          <div className={styles.emptyActions}>
            <Link href="/pacotes" className="btn btn-outline">
              Ver todos os pacotes
            </Link>
            <a
              href={waLink(`Olá, Onsky! Procuro um pacote de ${activeLabel.toLowerCase()}. Podem me ajudar?`)}
              className="arrow-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Pedir um roteiro sob medida</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function CatalogFromUrl({ packages }: Props) {
  const params = useSearchParams();
  const tipo = params.get("tipo");
  const filter: PackageFilter = isFilter(tipo) ? tipo : "todos";
  const sort: PackageSort = params.get("ordem") === "preco" ? "preco" : "saida";
  return <Catalog packages={packages} filter={filter} sort={sort} />;
}

// Static export: the prerendered HTML shows every package; the URL filter applies on hydration.
export function PackageCatalog({ packages }: Props) {
  return (
    <Suspense fallback={<Catalog packages={packages} filter="todos" sort="saida" />}>
      <CatalogFromUrl packages={packages} />
    </Suspense>
  );
}
