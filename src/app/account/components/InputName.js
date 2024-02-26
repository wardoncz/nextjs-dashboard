import React from "react";
import styles from "../page.module.css";

import Baloo from 'next/font/local'
const baloo = Baloo({ src: '../Baloo-Regular-webfont.woff' })
const classes = `${baloo.className} ${styles.textInput} ${styles.nameInput}`

export class InputName extends React.Component {
    componentDidMount() {
        const inputName = document.querySelector("#name")

        inputName.addEventListener("focusin", function () {
            inputName.classList.add(`${styles.inputFocused}`)
        })

        inputName.addEventListener("focusout", function () {
            inputName.classList.remove(`${styles.inputFocused}`)
        })
    }

    render() {
        return (
            <input type="text" id="name" placeholder="Nickname" className={classes} required></input>
        )
    }
}