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
    var modal = document.getElementById("myModal");

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

function addNewTaskAction() {
    console.log("pridavame cez formular novy task");
}