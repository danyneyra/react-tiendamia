import styles from "./Hero.module.css";

export default function Hero(props) {
  return (
    <>
      <section className={styles["hero-section"]}>
        <article className={styles["hero-title"]}>
          <span className={styles["hero-span"]}>{props.first}</span>
          <span className={styles["hero-span"]}>{props.second}</span>
        </article>
      </section>
    </>
  );
}
