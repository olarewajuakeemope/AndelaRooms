(function() {
var data = (localStorage.getItem('rooms')) ? JSON.parse(localStorage.getItem('rooms')):{};
  $.getJSON("js/rooms.json", function(rooms) {
    localStorage.setItem('rooms', JSON.stringify(rooms));
    var newObj = rooms.meetings;
    var newOutput = "";
    for (var i in rooms) {
      if(i=="games") newObj = rooms.games;
      else if(i=="quiettime") newObj = rooms.quiettime;
      else if(i=="learning") newObj = rooms.learning;
      else if(i=="working") newObj = rooms.working;

      newOutput += "<h2>" + newObj[0].name + "</h2>";
          for (var j = 0; j < newObj.length; j++) {
           var availability = "<button class='unavailable'>Unavailable";
           if(newObj[j].available) availability = "<button class='available' id='" + newObj[j].number + "' onClick='toggleAvailability(this);'>Available";
           newOutput += "<table><tr><td>Room" + newObj[j].number + "</td> <td> " + availability + "</button></td></tr></table>";
          }
    }
    $(".availables").html(newOutput);
  })

})();

 function toggleAvailability(buttonClicked){
  $.getJSON("js/rooms.json", function(rooms) {

    var newObj = rooms.meetings;
    var newOutput = "";
    for (var i in rooms) {
      if(i=="games") newObj = rooms.games;
      else if(i=="quiettime") newObj = rooms.quiettime;
      else if(i=="learning") newObj = rooms.learning;
      else if(i=="working") newObj = rooms.working;
          for (var j = 0; j < newObj.length; j++) {
           if(buttonClicked.id === newObj[j].number){
           	if(buttonClicked.innerText === "Available"){
              newObj[j].available = false;
              $(buttonClicked).removeClass("available").addClass('unavailable');
              buttonClicked.innerText = "Unavailable"
           	}else{
           	  newObj[j].available = true;
           	  $(buttonClicked).removeClass("unavailable").addClass('available');
           	  buttonClicked.innerText = "Available"
           	}    	
           }
          }
    }
  })
 }