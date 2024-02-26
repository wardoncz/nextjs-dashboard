import React from "react";
import styles from "../page.module.css";
import Baloo from 'next/font/local'
const baloo = Baloo({ src: '../Baloo-Regular-webfont.woff' })
const classes = `${baloo.className} ${styles.textInput}`

export class InputPass extends React.Component {
    componentDidMount() {
        const inputPass = document.querySelector("#password")

        inputPass.addEventListener("focusin", function () {
            inputPass.classList.add(`${styles.inputFocused}`)
        })

        inputPass.addEventListener("focusout", function () {
            inputPass.classList.remove(`${styles.inputFocused}`)
        })
    }

    render() {
        return (
            <input type="password" id="password" placeholder="Password" className={classes}></input>
        )
    }
}