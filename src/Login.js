import firebase from './Firebase'

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        document.getElementById("button").disabled = true;
    } else if (validateEmail(email)) {
        document.getElementById("button").disabled = false;
    }
    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
}

function login() {
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "../html/home.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário nao encontrado";
    }
    return error.message;
}

const form = {
    email: () => document.getElementById("email"),
    password: () => document.getElementById("password"),
} 

export { isEmailValid, login };