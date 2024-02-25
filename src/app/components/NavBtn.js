import React from "react";
import styles from "../page.module.css";

export class NavBtn extends React.Component {
    constructor(props) {
        super(props)

        this.navOnClick = this.onClick.bind(this)
    }

    onClick() {
        const navBtn = document.querySelector("#navBtn")
        const nav = document.querySelector("nav");
        
        if (nav.classList.contains(`${styles.opened}`)) {
            nav.classList.remove(`${styles.opened}`)
            navBtn.classList.remove(`${styles.change}`)
        } else {
            nav.classList.add(`${styles.opened}`)
            navBtn.classList.add(`${styles.change}`)
        }
    }

    render() {
        return (
            <a className={styles.navBtn} id="navBtn" onClick={this.navOnClick}>
                <span></span>
                <span></span>
                <span></span>
            </a>
        )
    }
}