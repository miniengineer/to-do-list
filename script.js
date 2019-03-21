//Object to authenticate tasks

var arrayToDo = [];
var arrayDone = [];
var currentTask = {};


function addToDo() {
  //edge case for empty string
  if( $("#input").val() == "" ) {
    alert("Please enter a task");
  };
  //edge case to check if the task already exist
  for(var i = 0; i < arrayToDo.length; i++) {
    if( $("#input").val() === arrayToDo[i].taskTitle ) {
      return false;
    };
  };
  //add task to the array, so we can track it
  arrayToDo.push({taskTitle: $("#input").val(), taskStatus: "to do" });
  var $li = $("<li class=\"task-item\"><input type=\"checkbox\" class=\"checkbox\"></button>" + "<p class=\"new-task\">" + $("#input").val() + "</p>" + "</li>");
  //put it in the beginning of list
  $("#list").prepend($li);
  //clear imputted value
  $("#input").val("");
  //delete task when clicked on
  $li.find("p.new-task").click( function() {
    //remember the task to find it in array
    currentTask = $li.text();
    //check in which array it is stored and remove it from there
    if(arrayToDo.find( function(element) {
      return element.taskTitle === currentTask;
    }) === undefined) {
      arrayDone.splice(arrayToDo.indexOf(currentTask),1);
    }
    arrayToDo.splice(arrayToDo.indexOf(currentTask),1);
    $li.addClass("cross-out-text");
    setTimeout(function (){
      $li.addClass(".checkbox").remove();
    },800);
  });
//Move tasks to Done section when checked
$li.find("input.checkbox").click( function() {
  //remove from ToDo array
  var memo = $li.text();
  currentTask = arrayToDo.find(function(element) {
    return element.taskTitle === memo;
  });
  arrayToDo.splice(arrayToDo.indexOf(currentTask),1);
  //push to done array
  arrayDone.push({taskTitle: $li.text(), taskStatus: "done" });
  $li.prependTo("#done-tasks-list");
});
};

//Press enter to add new task

$("#input").keypress( function() {
  //trigger if the key is enter
  if( event.type == "keypress" && event.which === 13 ) {
    //add new task
    if( addToDo() === false ) {
      return alert("This task already exists, please add another task!");
    };
 };
});

//Press button to add new task

$(".add-task").click( function() {
    //add new task
    if( addToDo() === false ) {
      return alert("This task already exists, please add another task!");
    };
});

// for(var i = 0; i < array.length; i++) {
//   array.push({taskTitle: $("#input").val(), taskStatus: "task-item" });
//   if( JSON.stringify(array[0]) === JSON.stringify(array[i]) ) {
//     alert("This task already exists, please add another task!");
//   };
// };
