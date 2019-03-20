//Press enter to add new task

$("#input").keypress( function() {
  //trigger if the key is enter
  if( event.type == "keypress" && event.which === 13 ) {

    //add new task
    var $li = $("<li class=\"task-item\"><input type=\"checkbox\" class=\"checkbox\"></button>" + "<p class=\"new-task\">" + $("#input").val() + "</p>" + "</li>");

    //put it in the beginning of list
    $("#list").prepend($li);

    //clear imputted value
    $("#input").val("");

    //delete task when clicked on
    $li.find("p.new-task").click( function() {
      $li.addClass("cross-out-text");
      setTimeout(function (){
        $li.addClass(".checkbox").remove();
      },800);
    });
  };

  //Move tasks to Done section when checked
  $li.find("input.checkbox").click( function() {
    $li.prependTo("#done-tasks-list");
  });
});

//Press button to add new task

$(".add-task").click( function() {
    //add new task
    var $li = $("<li class=\"task-item\"><input type=\"checkbox\" class=\"checkbox\"></button>" + "<p class=\"new-task\">" + $("#input").val() + "</p>" + "</li>");

    //put it in the beginning of list
    $("#list").prepend($li);

    //clear imputted value
    $("#input").val("");

    //delete task when clicked on
    $li.find("p.new-task").click( function() {
      $li.addClass("cross-out-text");
      setTimeout(function (){
        $li.addClass(".checkbox").remove();
      },800);
    });

    //Move tasks to Done section when checked
    $li.find("input.checkbox").click( function() {
      $li.prependTo("#done-tasks-list");
    });
});
