const titleDiv = document.getElementById("titleDiv");
const greetWorldButton = document.getElementById("my-button");
const addTextButton = document.getElementById("add-data");

greetWorldButton.addEventListener("click", e => {
    console.log("hello world")
    titleDiv.innerHTML = '<h1>Moi maailma</p>';
})

addTextButton.addEventListener("click", e => {
    const textList = document.getElementById("text-list");

    let newNote = document.createElement("li");

    newNote.innerHTML = document.getElementById("note-field").value;

    textList.appendChild(newNote)
})

