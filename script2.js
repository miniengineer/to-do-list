//Press enter to add new task

$("#input").keypress(function() {
  //trigger if the key is enter
  if( event.type == "keypress" && event.which === 13 ) {
    // if task don't exsists in to-do => add new task
    addTask($(this).val());
 }
});

//Press button to add new task

$(".add-task").click(function() {
  addTask($("#input").val());
});

//variables necessary for render function

const allTasks = [];
var lastTaskId = 0;

//adding a task

function addTask(task) {
  //edge case for empty string
  if(task === "") {
    return alert("please enter a task");
  }
  //get rid of white space
  task = task.trim();
  //check if task already exists in to-do list
  let currentTask = allTasks.find(e => e.title === task && e.status === "toDo");
  if(currentTask !== undefined) {
    return alert("This task already exists");
  } else {
    allTasks.push({title: task, status: "toDo", id: lastTaskId++});
    render();
    $("#input").val("");
  }
}

//render

function render() {
  //clear everything
  $("#tasks, #done-tasks-list").empty();
  //decide whether it's done or a new task and prepend accordingly
  for(var i = 0; i < allTasks.length; i++) {
    //if task is checked move to done section
    if(allTasks[i].status === "done") {
      $("#done-tasks-list").prepend(`<li data-id="${allTasks[i].id}" class="task"><label>
      <input type="image" src="images/done-icon.svg" class="icon">
      <span class="new-task"> ${allTasks[i].title} </span></label></li>`);
    } else if(allTasks[i].status === "toDo") {
      //if it's new move to to-do-list
      $("#tasks").prepend(`<li data-id="${allTasks[i].id}" class="task"><label>
      <input type="checkbox" class="checkbox">
      <span class="new-task"> ${allTasks[i].title} </span></label></li>`);
    }
  };
  // move to done section when checked
  $("li.task .checkbox").click(function(e) {
    var id = $(this).closest(".task").data("id");
    var thisTask = allTasks.find(e => e.id == id);
    thisTask.status = "done";
    render();
  });
  //remove task when clicked on
  $(".new-task").click(function(e) {
    var id = $(this).closest(".task").data("id");
    var thisTask = allTasks.find(e => e.id == id);
    thisTask.status = "toDeletion";
    //don't forget to remove it from array of tasks
    allTasks.splice(allTasks.indexOf(thisTask),1);
    render();
  });
}
