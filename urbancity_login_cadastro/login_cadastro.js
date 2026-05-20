document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.getElementById("openModal");
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("closeModal");

    openButton.addEventListener("click", function(event) {
        
        modal.showModal();
    });

    closeButton.addEventListener("click", function() {
        modal.close();
    });
});

//nav
function loginpag() {
    window.location.href = "../urbancity_login_cadastro/login.html"
}

function cadastro() {
    window.location.href = "../urbancity_login_cadastro/cadastro.html"
}
//dados do firebase
const firebaseConfig = {
    apiKey: "AIzaSyC8jMP5MpjfPNo2Hs5gW970EL88N6v-Jxs",
    authDomain: "autenticacaocomemail-ee31a.firebaseapp.com",
    projectId: "autenticacaocomemail-ee31a",
    storageBucket: "autenticacaocomemail-ee31a.appspot.com",
    messagingSenderId: "852906035435",
    appId: "1:852906035435:web:85295e9e94ccb04c0356ae"
    };
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            window.location.href = "../urbancity_pagina/pagina_inicial.html";
        }
    });

