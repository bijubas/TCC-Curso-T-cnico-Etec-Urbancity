function pesquisa() {
    let endereco=document.getElementById("buscar")
    let valorinput=endereco.value
    console.log("ola", valorinput);
}

function api() { 
    const apiUrl="https://656ff79509586eff6640890c.mockapi.io/busc/enderecos";
    fetch(apiUrl)
  .then(response => { 
    if (!response.ok) {
      throw new Error(`Erro de rede: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Dados da API:', data);
  })
  .catch(error => {
    console.error('Erro na requisição:', error);
  });
}

