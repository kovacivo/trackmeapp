function addNewTask(event) {

    console.log("opening modal window");

    // Get the modal
    var modal = document.getElementById("newTask");

    // Get the button that opens the modal
    var btn = document.getElementById("add_to_personal");

    console.log("tlacitko bolo:" + event.target.id);


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    // btn.onclick = function() {
    //     modal.style.display = "block";
    // }

    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};

function editExistingTask(event) {
    console.log("editing existing task");
    // Get the modal
    var modal = document.getElementById("existingTask");

    //console.log(event.target.id);
    // Get the button that opens the modal
    var sec = document.getElementById(event);
    console.log(event);
    console.log(sec);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    // sec.onclick = function() {
    //     modal.style.display = "block";
    // }

    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


}

function addNewTaskAction(event) {
    // zabran formularu aby hned submitol - inak sa to cele strati
    event.preventDefault();

    var personalPanel = document.getElementById("personalPanel");
    
    // zisti IDcko predosleho tasku a potom pri vytvarani noveho prirad nove, dalsie v poradi
    var lastSectionId = personalPanel.getElementsByTagName("section")[personalPanel.getElementsByTagName("section").length - 1].id;
    var lastId = lastSectionId.replace('section','');
    lastId++;

    // vytvor nove prvky pre novy task - teda section a v ramci nej header a paragraf
    var newSection = document.createElement("section");
    newSection.onclick = function(){editExistingTask(this.id)};
    newSection.setAttribute("id", "section" + lastId);
    var newTaskHeader = document.createElement("header");
    newTaskHeader.className = "task-title";
    var newTaskDescription = document.createElement("p");
    newTaskDescription.className = "task-description";

    // ziskaj udaje od uzivatela pre nazov tasku a jeho popis
    var taskName = document.getElementById("taskName").value;
    var taskDescription = document.getElementById("taskDescription").value;
    
    // vytvor prvky/nody pre popisy
    var newTaskNameText = document.createTextNode(taskName);
    var newTaskDescriptionText = document.createTextNode(taskDescription);

    // poskladaj kocky do seba - ako LEGO
    newTaskHeader.appendChild(newTaskNameText);
    newTaskDescription.appendChild(newTaskDescriptionText);
    newSection.appendChild(newTaskHeader);
    newSection.appendChild(newTaskDescription);

    // vloz tento novy task (sekciu) na koniec pred tlacitko na pridavanie novych veci
    personalPanel.insertBefore(newSection, showNewTaskFormButton);

    // schovaj/zbal formular na tvorbu noveho tasku
    var addNewTaskActionForm = document.getElementById("addNewTaskActionForm");
    addNewTaskActionForm.style.display = "none";   
}

function showNewTaskButtonAction(){
    var newTaskForm = document.getElementById("addNewTaskActionForm");
  if (newTaskForm.style.display === "none") {
    newTaskForm.style.display = "block";
  } else {
    newTaskForm.style.display = "none";
  }
}