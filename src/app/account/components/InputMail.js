import React from "react";
import styles from "../page.module.css";
import Baloo from 'next/font/local'
const baloo = Baloo({ src: '../Baloo-Regular-webfont.woff' })
const classes = `${baloo.className} ${styles.textInput}`

export class InputMail extends React.Component {
    componentDidMount() {
        const inputPass = document.querySelector("#email")

        inputPass.addEventListener("focusin", function () {
            inputPass.classList.add(`${styles.inputFocused}`)
        })

        inputPass.addEventListener("focusout", function () {
            inputPass.classList.remove(`${styles.inputFocused}`)
        })
    }

    render() {
        return (
            <input type="email" id="email" placeholder="Email" className={classes}></input>
        )
    }
}