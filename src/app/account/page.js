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
        <a className={styles.logo} href="./"></a>
        <a className={styles.profileIcon}></a>
        <NavBtn/>
        <nav className={styles.nav} id="nav">
          <a href="./">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">GAMES</a>
          <a href="#">CHAT</a>
          <a href="#">FAQ</a>
          <a href="#">ACCOUNT</a>
        </nav>
        <div className={styles.loginContainer}>
          <h1>LOGIN</h1>
          <form>
            <input type="email" id="email" placeholder="Email"></input>
            <input type="password" id="password" placeholder="Password"></input>

            <div className={styles.options}>
                <input type="checkbox" id="rememberMe"></input>
                <label>Remember me</label>
                <a href="#">Forgot Password</a>
            </div>
            <button type="submit">Sign in</button>
            <p>Dont have an account? <a href="">Register</a></p>
          </form>
        </div>
      </div>
    </main>
  );
}