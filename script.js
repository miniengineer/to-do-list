//Press enter to add new task

$("#input").keypress( function() {
  //trigger if the key is enter
  if( event.type == "keypress" && event.which === 13 ) {
    //add new task
    var $li = $("<li class=\"task-item\"><input type=\"checkbox\" class=\"done\"></button>" + $("#input").val() + "</li>");
    //put it in the beginning of list
    $("#list").prepend($li);
    //clear imputted value
    $("#input").val("");
    $li.find("input.done").click( function() {
      $li.addClass("cross-out-text");
      setTimeout(function (){
        $li.addClass(".done").remove();
      },800);
    });
  };
});

//Press button to add new task

$(".add-task").click( function() {
    //add new task
    var $li = $("<li class=\"task-item\"><input type=\"checkbox\" class=\"done\"></button>" + $("#input").val() + "</li>");
    //put it in the beginning of list
    $("#list").prepend($li);
    //clear imputted value
    $("#input").val("");
    $li.find("input.done").click( function() {
      $li.addClass("cross-out-text");
      setTimeout(function (){
        $li.addClass(".done").remove();
      },800);
    });
});
