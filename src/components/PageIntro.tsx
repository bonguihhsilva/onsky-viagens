import styles from "./PageIntro.module.css";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
};

export function PageIntro({ eyebrow, title, children }: Props) {
  return (
    <header className={`wrap ${styles.intro}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children && <div className={styles.text}>{children}</div>}
    </header>
  );
}
