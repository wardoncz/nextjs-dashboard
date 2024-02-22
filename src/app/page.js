import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.home}>
        <div className={styles.bgBlur}></div>
        <a className={styles.logo} href="#"></a>
        <a className={styles.profileIcon} href="#"></a>
        <nav className={styles.nav}>
        <a href="#">HOME</a>
        <a href="#">HOME</a>
        <a href="#">HOME</a>
        <a href="#">HOME</a>
        </nav>
        <header className={styles.header}>
          <h1>ARCADE ALLIES</h1>
          <div></div>
          <p>Arcade allies is a web platform that connects you with gamers who love the same PC games as you do. You can find, chat, and play with your game mates from all over the world. Join Arcade allies and have more fun gaming.</p>
        </header>
      </div>
    </main>
  );
}
