function time() {
  $("#today-time").empty(); 
  let currentTime = moment().format("hh:mm:ss");
  $("#today-time").append(currentTime);
}
setInterval(time, 1000)


let currentDay = moment().format("MMM Do, YYYY");
$("#today-date").append(currentDay);

let now = new Date().getHours();

function assignColor() {
  let startTime = 9;
  let endTime = 17;
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

    let textBoxValue = localStorage.getItem("text-" + x);
    document.querySelector("#note-" + x).value = textBoxValue;
  }
}
assignColor();

function updateText(e) {
  let id = e.srcElement.id;
  localStorage.setItem(
    "text-" + id,
    document.querySelector("#note-" + id).value
  );
}
