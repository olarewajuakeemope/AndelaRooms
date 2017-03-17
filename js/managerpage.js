(function() {
  $.getJSON("js/rooms.json", function(rooms) {
    var newOutput = "";
    for (var i = 0; i < rooms.length; i++) {
      newOutput += "<h2>"rooms[i].name"</h2>";
          for (var j = 0; j < rooms[i].length; j++) {
           newOutput += "<table><tr><td>Room" rooms[i][j].number "</td> <td>Available" rooms[i][j].available "</td></tr></table>";
          }
    }
    $(".available").html(newOutput);
  })
})();
