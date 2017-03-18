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

if (!localStorage.getItem('rooms')) {
  getRoomJsonFile();
}

function getRoomJsonFile(){
  $.getJSON("js/rooms.json", function(rooms) {
    createLocalStorage(rooms);
  })
}

function createLocalStorage(rooms){
  localStorage.setItem('rooms', JSON.stringify(rooms));
}