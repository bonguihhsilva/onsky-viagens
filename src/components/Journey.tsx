import { Reveal } from "./Reveal";
import styles from "./Journey.module.css";

const stops = [
  {
    title: "Primeiro contato",
    text: "Uma conversa sem pressa para entender quem viaja, o orçamento e o que faria essa viagem valer a pena.",
  },
  {
    title: "Roteiro sob medida",
    text: "Montamos voos, hotel e passeios no seu ritmo, e ajustamos até ficar do jeito que você imaginou.",
  },
  {
    title: "Documentos e reservas",
    text: "Checklist de passaporte, visto, vacinas e seguro. Você recebe tudo organizado num só lugar.",
  },
  {
    title: "Embarque",
    text: "Check-in feito, assentos escolhidos e um lembrete na véspera com horários e o que levar.",
  },
  {
    title: "Durante a viagem",
    text: "Suporte 24h pelo WhatsApp. Voo atrasou, mala sumiu, mudou de ideia? É só chamar.",
  },
  {
    title: "Retorno",
    text: "Transfer até sua casa e uma conversa na volta para saber como foi e já pensar na próxima.",
  },
];

type Props = {
  variant?: "full" | "compact";
};

export function Journey({ variant = "full" }: Props) {
  return (
    <Reveal className={`${styles.journey} ${styles[variant]}`}>
      <ol className={styles.stops}>
        {stops.map((stop, i) => (
          <li key={stop.title} className={styles.stop} style={{ "--n": i } as React.CSSProperties}>
            <span className={styles.marker} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{stop.title}</h3>
            {variant === "full" && <p>{stop.text}</p>}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
