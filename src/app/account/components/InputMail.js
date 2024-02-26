import React from "react";
import styles from "../page.module.css";
import Baloo from 'next/font/local'
const baloo = Baloo({ src: '../Baloo-Regular-webfont.woff' })
const classes = `${baloo.className} ${styles.textInput}`

export class InputMail extends React.Component {
    componentDidMount() {
        const inputMail = document.querySelector("#email")

        inputMail.addEventListener("focusin", function () {
            inputMail.classList.add(`${styles.inputFocused}`)
        })

        inputMail.addEventListener("focusout", function () {
            inputMail.classList.remove(`${styles.inputFocused}`)
        })
    }

    render() {
        return (
            <input type="email" id="email" placeholder="Email" className={classes} required></input>
        )
    }
}