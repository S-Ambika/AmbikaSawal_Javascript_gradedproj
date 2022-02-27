/*
   Waiting page to load html elements first
 */


window.onload = () => {
    const task = document.querySelector("#addTask");

    let items = document.getElementById("items");
    let submit = document.getElementById("submit");

    let editItem = null;

    task.addEventListener("submit", addTask);
    items.addEventListener("click", removeTask);

    document.getElementById("show_message").innerHTML = "No Task added!";

    document.getElementById("show_message")
        .style.display = "block";


    setTimeout(function() {
        document.getElementById("show_message")
            .style.display = " none ";
    }, 2000);
};


/*
   Adding Task on click of button
   Also checking if user is clicking for edit or for adding new Tak
 */

function addTask(e) {
    e.preventDefault();

    if (submit.value != "Add Tasks") {
        console.log("Hello");

        editItem.target.parentNode.childNodes[0].innerHTML = document.getElementById("item").value;

        submit.value = "Add Tasks";
        document.getElementById("item").value = "";

        document.getElementById("show_message").innerHTML = "Task edited successfully!";

        document.getElementById("show_message")
            .style.display = "block";

        setTimeout(function() {
            document.getElementById("show_message")
                .style.display = "none";
        }, 3000);

        return false;
    }

    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else
        document.getElementById("item").value = "";



    let li = document.createElement("li");
    li.className = "list-group-item";


    let text = document.createElement("h5");

    text.id =
        "li_text";

    text.appendChild(document.createTextNode(newItem));


    let editButton = document.createElement("button");

    editButton.className =
        "edit";

    editButton.appendChild(document.createTextNode("Edit"));
    let deleteButton = document.createElement("button");

    deleteButton.className =
        "delete";

    deleteButton.appendChild(document.createTextNode("Delete"));

    li.appendChild(text);
    li.appendChild(editButton);
    li.appendChild(deleteButton);


    items.appendChild(li);
}

/*
   Removing Task on click of Delete
   Also confirming from user for deletion
 */


function removeTask(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm("Do you want to delete your task?")) {
            let li = e.target.parentNode;
            items.removeChild(li);
            document.getElementById("show_message").innerHTML = "Task deleted successfully!";

            document.getElementById("show_message")
                .style.display = "block";

            setTimeout(function() {
                document.getElementById("show_message")
                    .style.display = "none";
            }, 3000);

        }
    }
    if (e.target.classList.contains("edit")) {
        document.getElementById("item").value =
            e.target.parentNode.childNodes[0].innerHTML;
        // console.log(e.target.parentNode.childNodes[0].innerHTML);
        submit.value = "EDIT";
        editItem = e;
    }
}