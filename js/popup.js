let new_form_button = document.getElementById('new_form_button');
let apply_form_button = document.getElementById('apply_form_button');



  new_form_button.onclick = function(element) {
    chrome.tabs.create({url: chrome.runtime.getURL('html/form.html')});
    new_form_button.style.backgroundColor = '#000000';
    new_form_button.setAttribute('value', '#000000');

  };

  apply_form_button.onclick = function(element) {

    chrome.storage.sync.get('profile', function(result){
      console.log(result)

      message = {
        'command':'apply-form',
        'values':result
      }

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
          // console.log(response.farewell);
        });
      });

    });
      
  };