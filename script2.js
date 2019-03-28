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
  let currentTask = allTasks.find(e => e.title === task && e.isDone === false);
  if(currentTask !== undefined) {
    return alert("This task already exists");
  } else {
    allTasks.push({title: task, isDone: false, id: lastTaskId++});
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
    if(allTasks[i].isDone === true) {
      $("#done-tasks-list").prepend(`<li data-id="${allTasks[i].id}" class="task"><label>
      <input type="image" src="images/done-icon.svg" class="icon">
      <span class="new-task"> ${allTasks[i].title} </span></label></li>`);
    } else {
      //if it's new, move to to-do-list
      $("#tasks").prepend(`<li data-id="${allTasks[i].id}" class="task"><label>
      <input type="checkbox" class="checkbox">
      <span class="new-task"> ${allTasks[i].title} </span></label></li>`);
    }
  };
  // add click event to change status to done
  $("li.task .checkbox").click(function(e) {
    var id = $(this).closest(".task").data("id");
    var thisTask = allTasks.find(e => e.id == id);
    thisTask.isDone = true;
    render();
  });
  //add click event to remove task
  $(".new-task").click(function(e) {
    allTasks.splice(allTasks.indexOf(this),1);
    render();
  });
}
