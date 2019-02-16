window.onload = function(){
  let botao_salvar = document.getElementById('botao_salvar');

  botao_salvar.onclick = function(element) {
    var dados = new FormData(document.querySelector('form'));
    alert(document.getElementsByName("estado_origem")[0].value);

  //   chrome.storage.sync.set({"estado_origem":document.getElementsByName("estado_origem")[0].value,
  //                           "destino_nacional":document.getElementsByName("destino_nacional")[0].value,
  //                           "estado_origem":document.getElementsByName("estado_origem")[0].value,
  //                           "estado_origem":document.getElementsByName("estado_origem")[0].value,
  //                           "estado_origem":document.getElementsByName("estado_origem")[0].value,
  //                           "estado_origem":document.getElementsByName("estado_origem")[0].value,}
  // })

  };
};
