function validateForm(form) {
  var theUsername = form.username.value;
  var thePassword = form.password.value;

  $.getJSON("js/user.json", function(user) {
    if (theUsername === user.username && thePassword === user.password) {
      
      window.open("manager.html");
    } else {
      window.open("user.html");
    }
  })
}
