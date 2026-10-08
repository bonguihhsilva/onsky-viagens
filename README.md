# Onsky Viagens

Site da Onsky Viagens e Turismo (Foz do Iguaçu): vitrine de pacotes nacionais e internacionais, passeios na tríplice fronteira e reserva via WhatsApp.

Next.js 15 (export estático) · React 19 · TypeScript · CSS Modules.

## Rodar

```bash
npm install
npm run dev
```

## Deploy

Push em `master` dispara `.github/workflows/pages.yml`, que gera o export estático com `NEXT_PUBLIC_BASE_PATH=/<repo>` e publica no GitHub Pages. Para domínio próprio na raiz, gere sem a variável.

## Antes de ir para produção

- `src/lib/data.ts`: pacotes, passeios e preços são **provisórios**. Depoimentos estão ocultos até haver avaliações reais.
- `src/lib/site.ts`: confirmar número do WhatsApp.
- A prévia no GitHub Pages sai com `noindex`.
- Fase 2 (painel admin): schema em `supabase/schema.sql`.

Contexto de design: `PRODUCT.md`, `DESIGN.md`. Créditos das fotos: `public/img/CREDITOS.md`.
