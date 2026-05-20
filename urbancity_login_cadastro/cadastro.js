import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyC8jMP5MpjfPNo2Hs5gW970EL88N6v-Jxs",
authDomain: "autenticacaocomemail-ee31a.firebaseapp.com",
projectId: "autenticacaocomemail-ee31a",
storageBucket: "autenticacaocomemail-ee31a.appspot.com",
messagingSenderId: "852906035435",
appId: "1:852906035435:web:85295e9e94ccb04c0356ae"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

document.getElementById('criar').addEventListener('click', function(){
    const email = document.getElementById('email').value
    const password = document.getElementById('senha').value

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;

        alert("Criado com sucesso")
        window.location.href = "../urbancity_pagina/pagina_inicial.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert("Erro de alguma coisa")
    });
})
