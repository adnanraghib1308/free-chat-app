const roomList = document.getElementById("room");

var options = ["1", "2", "3", "4", "5"];
console.log("helllooooo");
console.log(options.length);
for(let i= 0;i<options.length;++i){
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    roomList.appendChild(el);
}

function openForm() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')
  var popup = document.getElementById('popup');
  popup.classList.toggle('active')
 // document.getElementById("myForm").style.display = "block";
}

function createRoom() {
  console.log("room created");
}



