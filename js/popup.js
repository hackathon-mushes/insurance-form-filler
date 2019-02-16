  let new_form_button = document.getElementById('new_form_button');


  // chrome.storage.sync.get('color', function(data) {
  //   changeColor.style.backgroundColor = '#000000';
  //   changeColor.setAttribute('value', '#000000');
  // });

  new_form_button.onclick = function(element) {
    chrome.tabs.create({url: chrome.runtime.getURL('html/form.html')});
  	new_form_button.style.backgroundColor = '#000000';
    new_form_button.setAttribute('value', '#000000');

    // let color = element.target.value;
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //   chrome.tabs.executeScript(
    //       tabs[0].id,
    //       {code: 'document.body.style.backgroundColor = "' + color + '";'});
    // });
  };
