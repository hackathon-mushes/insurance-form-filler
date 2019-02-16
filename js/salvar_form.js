window.onload = function(){
  let botao_salvar = document.getElementById('botao_salvar');

  botao_salvar.onclick = function(element) {
    var dados = document.getElementById("myForm").elements;
    // alert(dados[0].name);

    //Criação do dicionário com o valor dos elementos
    for (var i = 0; i < dados.length; i++) {
      var nome = dados[i].name
      var valor = dados[i].value
      chrome.storage.sync.set({nome:valor}); //Salva elementos
      // alert(dados[i].name);
    };
  };
};
