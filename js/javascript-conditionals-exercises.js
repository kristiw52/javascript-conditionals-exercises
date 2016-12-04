function addOutput(value) {
  var output = document.getElementById("output");

  if (output) {
    var paragraph = document.createElement("p");
    paragraph.innerText = value;

    output.appendChild(paragraph);
  } else {
    alert("element with id \"output\" not found!");
  }
}
