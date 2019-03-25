//Press enter to add new task

$("#input").keypress(function() {
  //trigger if the key is enter
  if( event.type == "keypress" && event.which === 13 ) {
    // add new task
    addTask($(this).val());
 };
});

//Press button to add new task

$(".add-task").click(function() {
  addTask($("#input").val());
});

const allTasks = [];
var lastTaskId = 0;

function addTask(task) {
  allTasks.push({title: task, isDone: false, id: lastTaskId++});
  render();
  $("#input").val("");
}

function render() {
  $("#tasks, #done-tasks-list").empty();
  for(var i = 0; i < allTasks.length; i++) {
    if(allTasks[i].isDone === true) {
      $("#done-tasks-list").prepend(`<li data-id="${allTasks[i].id}" class="task"><label>
      <input type="image" src="images/done-icon.svg" class="icon">
      <span class="new-task"> ${allTasks[i].title} </span></label></li>`);

    } else {
      $("#tasks").prepend(`<li data-id="${allTasks[i].id}" class="task"><label>
      <input type="checkbox" class="checkbox">
      <span class="new-task"> ${allTasks[i].title} </span></label></li>`);
    };
  };
  // move to Done section
  $("li.task .checkbox").click(function(e) {
    var id = $(this).closest(".task").data("id");
    var thisTask = allTasks.find(function(e) {
      return e.id == id;
    });
    thisTask.isDone = true;
    render();
  });
}
