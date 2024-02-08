const notesContainer = document.querySelector(".notes-container");
const createButton = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
    console.log("show updated content");
}
showNotes();

function updateStorage(){
    console.log("Updating storage");
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createButton.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(event){
    console.log("Click event fired");
    if(event.target.tagName=== "IMG"){
        event.target.parentElement.remove();
        updateStorage();

    }else if(event.target.tagName === "p"){
        // notes= document.querySelectorAll(".input-box")
        // notes.forEach(nt=>{
        //     nt.onkeyup = function(){
        //         updateStorage();
        //     }
        // })
        event.target.onkeyup = function () {
            updateStorage();
        };
    }
})
 
document.addEventListener("keydown", event =>{
    console.log("Keydown event fired");
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
        updateStorage();
    }
})

