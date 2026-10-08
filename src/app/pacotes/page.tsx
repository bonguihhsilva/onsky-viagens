import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { getPackages } from "@/lib/data";
import { waLink } from "@/lib/site";
import { PackageCatalog } from "./PackageCatalog";
import styles from "./pacotes.module.css";

export const metadata: Metadata = {
  title: "Pacotes de viagem",
  description: "Pacotes nacionais e internacionais saindo de Foz do Iguaçu, com preço, datas e roteiro completos.",
};

export default async function PacotesPage() {
  const packages = await getPackages();

  return (
    <>
      <PageIntro eyebrow="Pacotes" title={<>Escolha com calma. <em>Reserve em um minuto.</em></>}>
        <p>
          Valores por pessoa em quarto duplo, com o que está incluso à vista. Não achou o destino que procura?
          Montamos o roteiro com você.
        </p>
      </PageIntro>

      <div className="wrap">
        <PackageCatalog packages={packages} />

        <aside className={styles.custom}>
          <h2>Não encontrou seu destino?</h2>
          <p>Viagem de formatura, aniversário de casamento, grupo da igreja: montamos o roteiro do zero.</p>
          <a
            className="btn btn-primary"
            href={waLink("Olá, Onsky! Quero um roteiro personalizado. Destino: ___ Época: ___ Pessoas: ___")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir roteiro personalizado
          </a>
        </aside>
      </div>
    </>
  );
}
