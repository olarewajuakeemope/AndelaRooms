var data;

function populatePage() {
    data = JSON.parse(localStorage.getItem('rooms'));
    var newOutput = "";
    for (var i in data) {
      newOutput += "<h2>" + data[i][0].name + "</h2>";
          for (var j = 0; j < data[i].length; j++) {
           var availability = "";
           if(data[i][j].available) {
            availability = "<button class='available' id='" + 
            data[i][j].number + 
            "' onClick='toggleAvailability(this);'>Available";
          }else {
            availability = "<button class='unavailable' id='" + 
            data[i][j].number + "' onClick='toggleAvailability(this);'>Unvailable";
          }
           newOutput += "<table><tr><td>Room" + data[i][j].number + "</td> <td> " + 
           availability + "</button></td></tr></table>";
          }
    }
    $(".availables").html(newOutput);
}

 function toggleAvailability(buttonClicked){
    var newOutput = "";
    for (var i in data) {
          for (var j = 0; j < data[i].length; j++) {
           if(buttonClicked.id === data[i][j].number){
           	if(buttonClicked.innerText === "Available"){
              data[i][j].available = false;
              updateLocalStorage(data);
              updateButton(buttonClicked, true);
           	}else{
           	  data[i][j].available = true;
           	  updateLocalStorage(data);
           	  updateButton(buttonClicked, false);
           	}    	
           }
          }
    }
 }

 function updateLocalStorage(data){
  localStorage.setItem('rooms', JSON.stringify(data));
 }

 function updateButton(buttonClicked, isAvailable){
  if (isAvailable) {
    $(buttonClicked).removeClass("available").addClass('unavailable');
    buttonClicked.innerText = "Unavailable";
  }else{
    $(buttonClicked).removeClass("unavailable").addClass('available');
    buttonClicked.innerText = "Available";
  }
 }

 populatePage();