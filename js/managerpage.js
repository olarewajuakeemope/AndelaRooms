(function() {

  $.getJSON("js/rooms.json", function(rooms) {

    var newObj = rooms.meetings;
    var newOutput = "";
    for (var i in rooms) {
      if(i=="games") newObj = rooms.games;
      else if(i=="quiettime") newObj = rooms.quiettime;
      else if(i=="learning") newObj = rooms.learning;
      else if(i=="working") newObj = rooms.working;

      newOutput += "<h2>" + newObj[0].name + "</h2>";
          for (var j = 0; j < newObj.length; j++) {
           newOutput += "<table><tr><td>Room" + newObj[j].number + "</td> <td>Available " + newObj[j].available + "</td></tr></table>";
          }
    }
    $(".availables").html(newOutput);
  })
})();
