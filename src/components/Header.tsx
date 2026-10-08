"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";
import styles from "./Header.module.css";

const nav = [
  { href: "/pacotes", label: "Pacotes" },
  { href: "/passeios-foz", label: "Passeios em Foz" },
  { href: "/sobre", label: "Como cuidamos" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={styles.header} data-scrolled={scrolled} data-open={open}>
      <div className={`wrap ${styles.bar}`}>
        <Link href="/" className={styles.logo} aria-label="Onsky Viagens, página inicial">
          <Image src="/img/logo-onsky.png" alt="" width={139} height={162} priority />
        </Link>

        <nav aria-label="Principal" className={styles.desktopNav}>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className={`btn btn-outline ${styles.cta}`}
          href={waLink("Olá, Onsky! Gostaria de ajuda para planejar uma viagem.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon />
          Falar com a equipe
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.burger} aria-hidden="true" />
          <span>{open ? "Fechar" : "Menu"}</span>
        </button>
      </div>

      <div id="menu-mobile" className={styles.mobilePanel} hidden={!open}>
        <nav aria-label="Principal (celular)" className="wrap">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-primary"
            href={waLink("Olá, Onsky! Gostaria de ajuda para planejar uma viagem.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
