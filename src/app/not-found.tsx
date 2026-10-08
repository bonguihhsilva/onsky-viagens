import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export default function NotFound() {
  return (
    <div style={{ paddingBottom: "var(--space-section)" }}>
      <PageIntro eyebrow="Página não encontrada" title={<>Esse destino <em>saiu do roteiro.</em></>}>
        <p>O endereço pode ter mudado ou o pacote não está mais disponível.</p>
        <p style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-lg)", alignItems: "center" }}>
          <Link href="/pacotes" className="btn btn-primary">
            Ver pacotes disponíveis
          </Link>
          <Link href="/" className="arrow-link">
            <span>Página inicial</span>
          </Link>
        </p>
      </PageIntro>
    </div>
  );
}
