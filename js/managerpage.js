var data;
(function() {
  $.getJSON("js/rooms.json", function(rooms) {
    if (!localStorage.getItem('rooms')) {
    	localStorage.setItem('rooms', JSON.stringify(rooms));
    }
    data = JSON.parse(localStorage.getItem('rooms'));
    var newOutput = "";
    for (var i in data) {
      newOutput += "<h2>" + data[i][0].name + "</h2>";
          for (var j = 0; j < data[i].length; j++) {
           var availability = "<button class='unavailable'>Unavailable";
           if(data[i][j].available) availability = "<button class='available' id='" + data[i][j].number + "' onClick='toggleAvailability(this);'>Available";
           newOutput += "<table><tr><td>Room" + data[i][j].number + "</td> <td> " + availability + "</button></td></tr></table>";
          }
    }
    $(".availables").html(newOutput);
  })

})();

 function toggleAvailability(buttonClicked){
    var newOutput = "";
    for (var i in data) {
          for (var j = 0; j < data[i].length; j++) {
           if(buttonClicked.id === data[i][j].number){
           	if(buttonClicked.innerText === "Available"){
              data[i][j].available = false;
              localStorage.setItem('rooms', JSON.stringify(data));
              $(buttonClicked).removeClass("available").addClass('unavailable');
              buttonClicked.innerText = "Unavailable"
           	}else{
           	  data[i][j].available = true;
           	  localStorage.setItem('rooms', JSON.stringify(data));
           	  $(buttonClicked).removeClass("unavailable").addClass('available');
           	  buttonClicked.innerText = "Available"
           	}    	
           }
          }
    }
 }