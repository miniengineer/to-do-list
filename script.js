// $(".add-task").click( function() {
//   $("#list").prepend("<li class=\"task-item\"><input type=\"checkbox\" class=\"done\"></button>" + $("#input").val() + "</li>");
//   $("input.done").click( function() {
//     console.log('Adding class');
//     var $todo = $(this).closest('li');
//     $todo.addClass("delete-text");
//     setTimeout(function (){
//       console.log('Removing a todo');
//       $todo.addClass(".done").remove();
//     },800);
//   });
// });

$(".add-task").click( function() {
  var $li = $("<li class=\"task-item\"><input type=\"checkbox\" class=\"done\"></button>" + $("#input").val() + "</li>");
  $("#list").prepend($li);
  //clear imputted value
  $("#input").val(" ");
  $li.find("input.done").click( function() {
    $li.addClass("delete-text");
    setTimeout(function (){
      $li.addClass(".done").remove();
    },800);
  });
});
