document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.getElementById("openModal");
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("closeModal");

    openButton.addEventListener("click", function(event) {
        event.preventDefault(); 
        modal.showModal();
    });

    closeButton.addEventListener("click", function() {
        modal.close();
    });
});


function enviar() {
    var elementos = document.querySelectorAll('#formulario .input');

    elementos.forEach(function(elemento) {
        elemento.value = '';
    });

    var modal = document.getElementById('modal');
    if (modal.open) {
        modal.close();
    }
}
//nav
function loginpag() {
    window.location.href = "../urbancity_login_cadastro/login.html"
}

function cadastro() {
    window.location.href = "../urbancity_login_cadastro/cadastro.html"
}

