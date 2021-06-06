import "virtual:windi.css";

const element = document.getElementById("container");

const logEvent = false;

element.addEventListener("compositionstart", (event) => {
  console.log("compositionstart", event.data, logEvent ? event : " ");
});
element.addEventListener("compositionupdate", (event) => {
  console.log("compositionupdate", event.data, logEvent ? event : " ");
});
element.addEventListener("compositionend", (event) => {
  console.log("compositionend", event.data, logEvent ? event : " ");
});
element.addEventListener("input", (_event) => {
  const event = _event as InputEvent;
  console.log(
    "input",
    event.inputType,
    event.isComposing,
    event.data,
    logEvent ? event : " "
  );
});
element.addEventListener("change", (_event) => {
  const event = _event as InputEvent;
  console.log(
    "change",
    event.inputType,
    event.isComposing,
    event.data,
    logEvent ? event : " "
  );
});
element.addEventListener("keydown", (event) => {
  console.log("keydown", event.key, event.isComposing, logEvent ? event : " ");
});
element.addEventListener("keyup", (event) => {
  console.log("keydown", event.key, event.isComposing, logEvent ? event : " ");
});
