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
        <a href="#">ABOUT US</a>
        <a href="#">GAMES</a>
        <a href="#">CHAT</a>
        <a href="#">FAQ</a>
        </nav>
        <header className={styles.header}>
          <h1>ARCADE ALLIES</h1>
          <div></div>
          <p>is a web platform that connects you with gamers who love the same PC games as you do. You can find, chat, and play with your game mates from all over the world. Join Arcade allies and have more fun gaming.</p>
          <a href="#">GET STARTED</a>
          <a href="#" style={{left:"170px"}}>LEARN MORE</a>
        </header>
      </div>
    </main>
  );
}
