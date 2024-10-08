const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

function addTask(){
    if(inputBox.value == ""){
        alert("You Must Write Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(event){
    if(event.target.tagName == "LI"){
        event.target.classList.toggle("checked");
        saveData();
    } else if(event.target.tagName == "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data1", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data1");
}

showData();