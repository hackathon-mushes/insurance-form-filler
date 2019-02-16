  let changeColor = document.getElementById('applyform');

  // chrome.storage.sync.get('color', function(data) {
  //   changeColor.style.backgroundColor = '#000000';
  //   changeColor.setAttribute('value', '#000000');
  // });

  changeColor.onclick = function(element) {
    alert("hi")
  	changeColor.style.backgroundColor = '#000000';
    changeColor.setAttribute('value', '#000000');
    
    // let color = element.target.value;
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //   chrome.tabs.executeScript(
    //       tabs[0].id,
    //       {code: 'document.body.style.backgroundColor = "' + color + '";'});
    // });
  };