const firebaseConfig = {
    apiKey: "AIzaSyC8jMP5MpjfPNo2Hs5gW970EL88N6v-Jxs",
    authDomain: "autenticacaocomemail-ee31a.firebaseapp.com",
    projectId: "autenticacaocomemail-ee31a",
    storageBucket: "autenticacaocomemail-ee31a.appspot.com",
    messagingSenderId: "852906035435",
    appId: "1:852906035435:web:85295e9e94ccb04c0356ae"
    };
    firebase.initializeApp(firebaseConfig);
    
     function logout(){
            firebase.auth().signOut().then(() => {
                window.location.href="../urbancity_paginainicial/urbancity.html";
            }).catch(() => {
                alert("Erro ao fazer logout!");
            })
        }