let now = new Date().getHours();

function assignColor() {
  var startTime = 9;
  var endTime = 17;
  for (x = startTime; x <= endTime; x++) {
    var styleClass;
    if (x < now) {
      styleClass = "past-color";
    } else if (x == now) {
      styleClass = "present-color";
    } else if (x > now) {
      styleClass = "future-color";
    }
    $("#note-" + x).addClass(styleClass);
    document.getElementById(x.toString()).addEventListener("click", updateText);

    var textBoxValue = localStorage.getItem("text-" +x);
    document.querySelector("#note-" + x).value = textBoxValue;
  }
}
assignColor();

function updateText(e) {
    var id = e.srcElement.id;
    localStorage.setItem("text-"+id , document.querySelector("#note-"+id).value);
}



