document.addEventListener('DOMContentLoaded', function() {
    var new_form = document.getElementById('new_form_button');
    // onClick's logic below:
    new_form.addEventListener('new_form', function() {
      console.log('hello')
      alert('hi')
    });
});
