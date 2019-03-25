//Object to authenticate tasks

var ToDo = [];
var memo = "";
var index;


function addToDo() {
  //edge case for empty string
  if( $("#input").val() == "" ) {
    alert("Please enter a task");
  };
  var task = $("#input").val();
  console.log(task);
  //edge case to check if the task already exist
  for(var i = 0; i < ToDo.length; i++) {
    if( $("#input").val() === ToDo[i].taskTitle ) {
      return false;
    };
  };
  //add task to the array, so we can track it
  ToDo.push({taskTitle: $("#input").val(), isDone: false });
  var $li = $("<li class=\"task-item\"><label><input type=\"checkbox\" class=\"checkbox\"><span class=\"new-task\">" + $("#input").val() + "</span></label></li>");
  //put it in the beginning of list
  $("#list").prepend($li);
  //clear imputted value
  $("#input").val("");
  //delete task when clicked on
  $li.find(".new-task").click(function() {
    //find and delete task from array
    memo = $li.text();
    index = ToDo.findIndex(function(e) {
      return e.taskTitle === memo;
    })
    ToDo.splice(index,1);
    $li.addClass("cross-out-text");
    setTimeout(function (){
      $li.addClass(".checkbox").remove();
    },800);
  });
//Add event listener to checkbox
$li.find("input.checkbox").click(function() {
  //change isDone to true
  memo = $li.text();
  index = ToDo.findIndex(function(e) {
    return e.taskTitle === memo;
  });
  ToDo[index].isDone = true;
  //Move tasks to Done section
  $li.prependTo("#done-tasks-list");
});
};

//Press enter to add new task

$("#input").keypress(function() {
  //trigger if the key is enter
  if( event.type == "keypress" && event.which === 13 ) {
    //add new task
    if( addToDo() === false ) {
      return alert("This task already exists, please add another task!");
    };
 };
});

//Press button to add new task

$(".add-task").click(function() {
    //add new task
    if( addToDo() === false ) {
      return alert("This task already exists, please add another task!");
    };
});
