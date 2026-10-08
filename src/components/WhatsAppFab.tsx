import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";
import styles from "./WhatsAppFab.module.css";

export function WhatsAppFab() {
  return (
    <a
      className={styles.fab}
      href={waLink("Olá, Onsky! Vim pelo site e tenho uma dúvida.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Tirar dúvidas pelo WhatsApp"
    >
      <WhatsAppIcon />
      <span>Dúvidas?</span>
    </a>
  );
}
