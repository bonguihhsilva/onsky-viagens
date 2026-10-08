# Design

## Visual Theme
Creme e tinta azul. Lê como um material impresso de agência sob medida: fotografia decisiva, títulos em serifa de alto contraste, muito espaço. Cena: mãe de Foz, 21h, no sofá com o celular, comparando com calma uma viagem cara. Tema claro.

Referências: Black Tomato, Aman.com, Condé Nast Traveler.

## Color (strategy: Committed)
| Token | Valor | Papel |
|---|---|---|
| `--paper` | `oklch(0.948 0.024 84)` | fundo creme base |
| `--paper-2` | `oklch(0.918 0.032 80)` | faixas secundárias |
| `--surface` | `oklch(0.982 0.011 88)` | painéis marfim que ancoram conteúdo (vitrine, serviços, Foz, fechamento) |
| `--navy` | `oklch(0.3221 0.0674 255.27)` | azul do logo (#1A3455); seções drench, rodapé |
| `--navy-deep` | `oklch(0.26 0.055 256)` | fundo mais profundo |
| `--sky` | `oklch(0.6176 0.1377 238.35)` | azul-céu do logo; só detalhes sobre azul-tinta |
| `--terra` | `oklch(0.52 0.135 38)` | terra roxa; CTAs, foco |
| `--ink` | `oklch(0.25 0.035 258)` | texto |
| `--ink-soft` | `oklch(0.45 0.03 258)` | texto secundário |

Azul-tinta cobre ~35% da superfície. Terra roxa só em ações.

## Typography
- Display: **Gloock** (peso único 400, sem itálico). Ênfase por cor, nunca itálico/negrito sintético (`font-synthesis: none`).
- Texto/UI: **Albert Sans**, 400 a 600.
- Trocado de Bodoni Moda em 2026-10-08: hairlines finas demais, leitura frágil.
- Escala fluida em títulos (`clamp`), corpo fixo 17px.

## Signature
"A jornada Onsky": linha de rota com 6 paradas (primeiro contato → roteiro → documentos e reservas → embarque → durante a viagem → retorno). Grande na home/sobre, compacta em cada pacote.

Mapa esquemático da tríplice fronteira (rios Paraná e Iguaçu) na seção de Foz.

## Motion
ease-out-expo, entradas de 600 a 800ms, revelações com leve blur. Tudo desligado com `prefers-reduced-motion`.

## Home (institucional primeiro)
Herói ancorado (painel azul-tinta + foto + faixa de credenciais) → Quem somos + O que fazemos → Como cuidamos (jornada) → Pacotes da temporada → Tríplice fronteira → Depoimentos → Fechamento. Conteúdo agrupado em painéis marfim com fio, nada flutuando solto no fundo.

## Components
Botão primário terra (texto papel), botão secundário com contorno azul-tinta, links com seta. Sem cards com sombra; agrupamento por espaço e fio.
