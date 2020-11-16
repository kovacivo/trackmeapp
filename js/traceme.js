function editExistingTask(event) {
    console.log("editing existing task");
    // Get the modal
    // var modal = document.getElementById("existingTask");

    //console.log(event.target.id);
    // Get the button that opens the modal
    // var sec = document.getElementById(event);
    // console.log(event);
    // console.log(sec);

    // var activities = document.getElementsByClassName("activities");
    // console.log(activities);

    // Get the <span> element that closes the modal
    // var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    // sec.onclick = function() {
    //     modal.style.display = "block";
    // }

    // modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    //     modal.style.display = "none";
    // }

    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }


    // create and show dialog box here





    const openEls = document.querySelectorAll("[data-open]");
    const closeEls = document.querySelectorAll("[data-close]");
    const isVisible = "is-visible";

    for (const el of openEls) {
        el.addEventListener("click", function() {
            const modalId = this.dataset.open;
            document.getElementById(modalId).classList.add(isVisible);
        });
    }

    for (const el of closeEls) {
        el.addEventListener("click", function() {
            this.parentElement.parentElement.parentElement.classList.remove(isVisible);
        });
    }

    document.addEventListener("click", e => {
        if (e.target == document.querySelector(".modal.is-visible")) {
            document.querySelector(".modal.is-visible").classList.remove(isVisible);
        }
    });

    document.addEventListener("keyup", e => {
        // if we press the ESC
        if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
            document.querySelector(".modal.is-visible").classList.remove(isVisible);
        }
    });


}

function addNewTaskAction(event) {
    // zabran formularu aby hned submitol - inak sa to cele strati
    event.preventDefault();

    var personalPanel = document.getElementById("personalPanel");

    // zisti IDcko predosleho tasku a potom pri vytvarani noveho prirad nove, dalsie v poradi
    var lastSectionId = personalPanel.getElementsByTagName("section")[personalPanel.getElementsByTagName("section").length - 1].id;
    var lastId = lastSectionId.replace('section', '');
    lastId++;

    // vytvor nove prvky pre novy task - teda section a v ramci nej header a paragraf
    var newSection = document.createElement("section");
    newSection.onclick = function() { editExistingTask(this.id) };
    newSection.setAttribute("id", "section" + lastId);
    var newTaskHeader = document.createElement("header");
    newTaskHeader.className = "task-title";

    // add actions part
    var newSpanActions = document.createElement("span");
    newSpanActions.className = "actions";

    // done action
    var newDoneActionLink = document.createElement("a");
    newDoneActionLink.setAttribute("href", "");
    var newDoneAction = document.createElement("i");
    newDoneAction.className = "fa fa-check";
    newDoneActionLink.appendChild(newDoneAction);

    // in-progress action
    var newProgressActionLink = document.createElement("a");
    newProgressActionLink.setAttribute("href", "");
    var newProgressAction = document.createElement("i");
    newProgressAction.className = "fa fa-tasks";
    newProgressActionLink.appendChild(newProgressAction);

    // archive action
    var newArchiveActionLink = document.createElement("a");
    newArchiveActionLink.setAttribute("href", "");
    var newArchiveAction = document.createElement("i");
    newArchiveAction.className = "fa fa-archive";
    newArchiveActionLink.appendChild(newArchiveAction);

    // delete action
    var newDeleteActionLink = document.createElement("a");
    newDeleteActionLink.setAttribute("href", "");
    var newDeleteAction = document.createElement("i");
    newDeleteAction.className = "fa fa-trash";
    newDeleteActionLink.appendChild(newDeleteAction);



    newSpanActions.appendChild(newDoneActionLink);
    newSpanActions.appendChild(newProgressActionLink);
    newSpanActions.appendChild(newArchiveActionLink);
    newSpanActions.appendChild(newDeleteActionLink);


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
    newTaskHeader.appendChild(newSpanActions);
    newTaskDescription.appendChild(newTaskDescriptionText);
    newSection.appendChild(newTaskHeader);
    newSection.appendChild(newTaskDescription);

    // vloz tento novy task (sekciu) na koniec pred tlacitko na pridavanie novych veci
    personalPanel.insertBefore(newSection, showNewTaskFormButton);

    // schovaj/zbal formular na tvorbu noveho tasku
    var addNewTaskActionForm = document.getElementById("addNewTaskActionForm");
    addNewTaskActionForm.style.display = "none";
}

function showNewTaskButtonAction() {
    var newTaskForm = document.getElementById("addNewTaskActionForm");
    if (newTaskForm.style.display === "none") {
        newTaskForm.style.display = "block";
    } else {
        newTaskForm.style.display = "none";
    }
}