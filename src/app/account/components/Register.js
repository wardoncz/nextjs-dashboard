import React from "react";

export class Register extends React.Component {
    constructor(props) {
        super(props)

        this.registerOnClick = this.onClick.bind(this)
    }

    onClick() {
        const register = document.getElementById("register")
        const name = document.getElementById("name")
        const formHeader = document.getElementById("formHeader")
        const formContainer = document.getElementById("formContainer")
        const submit = document.getElementById("submit")

        if (register.textContent == "Register"){
            formHeader.textContent = "REGISTER"
            name.style.display = "flex"
            formContainer.style.height = "480px"
            register.textContent = "Login"
            submit.textContent = "Register"
        }
        else {
            formHeader.textContent = "LOGIN"
            name.style.display = "none"
            formContainer.style.height = "400px"
            register.textContent = "Register"
            submit.textContent = "Sign in"
        }
    }

    render() {
        return (
            <a href="#" id="register" onClick={this.registerOnClick}>Register</a>
        )
    }
}