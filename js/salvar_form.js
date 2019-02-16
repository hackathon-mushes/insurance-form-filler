window.onload = function(){
  let botao_salvar = document.getElementById('botao_salvar');

  botao_salvar.onclick = function(element) {
    var dados = document.getElementById("myForm").elements;

    var obj = {}

    //Criação do dicionário com o valor dos elementos
    for (var i = 0; i < dados.length; i++) {
      var nome = dados[i].name
      var valor = dados[i].value
      if (dados[i].type == "radio") {
        if (dados[i].checked) {
          chrome.storage.sync.set({[nome]:valor}); //Salva elementos
        } else {
          // dont save
        }
      } else {
        if (dados[i].type == "checkbox") {
          if(dados[i].checked) {
            valor = true
          } else {
            valor = false
          }
        }
        chrome.storage.sync.set({[nome]:valor}); //Salva elementos
      }

      obj[nome] = valor
    };

    chrome.storage.sync.set({'profile':obj})

    chrome.storage.sync.get('profile', function(result){
      console.log(result)
    } )
  };
};
