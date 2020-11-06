$(document).ready(function () {
    console.log("running jquery...");
    $("#showNewTaskForm").click(function () {
        $("#addNewTaskActionForm").show();
    });

    $("#addNewTaskActionForm").submit(function(event){
        console.log("poser sa teraz");
        event.preventDefault();
        
        $("#personalPanel").prepend("<h2>ha ha ha</h2>");
    });
});

// function showNewTaskAction() {
//     var x = document.getElementById("addNewTaskActionForm");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

function addNewTaskAction() {
    console.log("pridavame cez formular novy task");
    // vytvor nove prvky
    var newSection = document.createElement("section");
    var newTaskHeader = document.createElement("header");
    var newTaskDescription = document.createElement("p");
    // // ziskaj udaje od uzivatela
    var taskName = document.getElementById("taskName").value;
    var taskDescription = document.getElementById("taskDescription").value;
    console.log("meno tasku: " + taskName);
    console.log("popis tasku:" + taskDescription);

    var newTaskNameText = document.createTextNode("nieco fajne");
    var newTaskDescriptionText = document.createTextNode("tiez dobre daco");

    console.log(newTaskNameText);
    console.log(newTaskDescriptionText);

    newTaskHeader.appendChild(newTaskNameText);
    newTaskDescription.appendChild(newTaskDescriptionText);
    newSection.appendChild(newTaskHeader);
    //newSection.appendChild(newTaskDescription);

    var personalPanel = document.getElementById("section1");
    
    console.log(personalPanel.childNodes);
    personalPanel.appendChild(newSection);
    document.body.appendChild(personalPanel);

    let p = document.createElement("h2");
document.body.appendChild(p);
    

    


    console.log("malo by byt hotovo teraz...");
}