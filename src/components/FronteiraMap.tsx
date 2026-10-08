import styles from "./FronteiraMap.module.css";

const places = [
  { name: "Itaipu", x: 176, y: 62, anchor: "start" as const, dx: 12 },
  { name: "Foz do Iguaçu", x: 222, y: 196, anchor: "start" as const, dx: 12, city: true },
  { name: "Ciudad del Este", x: 128, y: 196, anchor: "end" as const, dx: -12, city: true },
  { name: "Marco das Três Fronteiras", x: 168, y: 262, anchor: "end" as const, dx: -12 },
  { name: "Puerto Iguazú", x: 196, y: 300, anchor: "start" as const, dx: 12, city: true },
  { name: "Cataratas do Iguaçu", x: 352, y: 292, anchor: "end" as const, dx: 4, dy: -14, highlight: true },
];

export function FronteiraMap() {
  return (
    <figure className={styles.map}>
      <svg
        viewBox="0 0 400 420"
        role="img"
        aria-labelledby="mapa-titulo mapa-desc"
        className={styles.svg}
      >
        <title id="mapa-titulo">Mapa esquemático da tríplice fronteira</title>
        <desc id="mapa-desc">
          O rio Paraná separa o Paraguai, a oeste, do Brasil e da Argentina. O rio Iguaçu separa o Brasil, ao
          norte, da Argentina, ao sul. Os dois rios se encontram no Marco das Três Fronteiras. As Cataratas
          ficam no rio Iguaçu, a leste, e Itaipu no rio Paraná, ao norte.
        </desc>

        <text x="58" y="120" className={styles.country}>PARAGUAI</text>
        <text x="262" y="110" className={styles.country}>BRASIL</text>
        <text x="250" y="390" className={styles.country}>ARGENTINA</text>

        <path
          className={styles.river}
          d="M182 0 C 176 60, 170 90, 172 140 S 160 220, 168 262 S 150 360, 160 420"
        />
        <path
          className={styles.river}
          d="M400 318 C 372 312, 362 290, 340 292 S 300 300, 270 290 S 220 280, 196 272 S 176 262, 168 262"
        />
        <path className={styles.bridge} d="M140 196 L 210 196" />

        <text x="184" y="20" className={styles.riverLabel}>rio Paraná</text>
        <text x="300" y="320" className={styles.riverLabel}>rio Iguaçu</text>

        {places.map((p) => (
          <g key={p.name} className={p.highlight ? styles.highlight : undefined}>
            <circle cx={p.x} cy={p.y} r={p.city ? 3.5 : 5} className={p.city ? styles.city : styles.poi} />
            <text x={p.x + p.dx} y={p.y + (("dy" in p && p.dy) || 4)} textAnchor={p.anchor} className={styles.place}>
              {p.name}
            </text>
          </g>
        ))}
      </svg>
      <figcaption>Tudo a menos de 40 minutos do centro de Foz.</figcaption>
    </figure>
  );
}
