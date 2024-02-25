import React from "react";
import styles from "../page.module.css";

export class NavBtn extends React.Component {
    constructor(props) {
        super(props)

        this.navOnClick = this.onClick.bind(this)
    }

    onClick() {
        document.querySelector("#navBtn").onclick = () => {
            if (document.querySelector("nav").classList.contains(`${styles.opened}`)) {
                document.querySelector("nav").classList.remove(`${styles.opened}`)
            } else {
                document.querySelector("nav").classList.add(`${styles.opened}`)
            }
        }
    }

    render() {
        return (
            <a className={styles.navBtn} id="navBtn" onClick={this.navOnClick}>MENU</a>
        )
    }
}