const submit = document.getElementById("submit-data");
var objectUrl;

submit.addEventListener("click", e => {
    e.preventDefault()
    username = document.getElementById("input-username").value;
    email = document.getElementById("input-email").value;
    admin = document.getElementById("input-admin").checked;
    
    const usersTable = document.getElementById("users");

    var x;
    for (x = 0; x < document.getElementById("usersbody").rows.length; x++) {     
        if (document.getElementById("usersbody").rows[x].cells[0].innerHTML === username) {
            document.getElementById("usersbody").rows[x].cells[1].innerHTML = email;
            document.getElementById("usersbody").rows[x].cells[2].innerHTML = admin ? "X" : "-";
            return
        };
    }

    let row = usersTable.insertRow(-1);
    
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = username;
    cell2.innerHTML = email;
    cell3.innerHTML = admin ? "X" : "-";

    var imgElement = document.createElement('img');
    console.log(`objecturl: ${objectUrl}`)
    imgElement.src = objectUrl;
    imgElement.width = 64;
    imgElement.height = 64;

    cell4.appendChild(imgElement);
});

const empty = document.getElementById("empty-table");

empty.addEventListener("click", e => {
    document.getElementById('usersbody').innerHTML = '';
});

// source for most of snippet below: https://stackoverflow.com/a/8904008

var _URL = window.URL || window.webkitURL;
var inputImage = document.getElementById('input-image');

inputImage.addEventListener('change', function (e) {
    var file = this.files[0];
    if (file) {
        var img = new Image();
        objectUrl = _URL.createObjectURL(file);
        img.onload = function () {
            if (this.width !== 64 || this.height !== 64) {
                alert("Dimensions are not 64x64!");
                _URL.revokeObjectURL(objectUrl);
                inputImage.value = null;
            }
        };
    }
});
