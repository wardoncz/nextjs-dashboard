"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { NavBtn } from "./components/NavBtn";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.home}>
        <div className={styles.bg}>
          <Image src="/bg-game-transformed.jpeg" width="2048" height="1280" alt="Background"></Image>
        </div>
        <div className={styles.bgBlur}></div>
        <a className={styles.logo} href="#"></a>
        <a className={styles.profileIcon} href="#"></a>
        <NavBtn/>
        <nav className={styles.nav} id="nav">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">GAMES</a>
          <a href="#">CHAT</a>
          <a href="#">FAQ</a>
          <a href="#">ACCOUNT</a>
        </nav>
        <div className={styles.centerBox}>
          <header className={styles.aboutHeader}>
            <h1>ARCADE ALLIES</h1>
            <div></div>
            <p>is a web platform that connects you with gamers who love the same PC games as you do. You can find, chat, and play with your game mates from all over the world. Join Arcade allies and have more fun gaming.</p>
            <a href="#">GET STARTED</a>
            <a href="#">LEARN MORE</a>
          </header>
          <div className={styles.stats}>
            <h1>STATS</h1>
            <div className={styles.line}></div>
            <div className={styles.statsCont}>
              <a>
                <h1>100</h1>
                <h2>TOTAL PLAYERS</h2>
              </a>
              <a className={styles.statsOnline}>
                <h1>24</h1>
                <h2>ONLINE PLAYERS</h2>
              </a>
              <a className={styles.statsGames}>
                <h1>20+</h1>
                <h2>GAMES</h2>
              </a>
              <a className={styles.statsRatings}>
                <h1>4.9</h1>
                <h2>PLAYER RATINGS</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}