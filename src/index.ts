import "virtual:windi.css";

const element = document.getElementById("container");

element.addEventListener("compositionstart", (event) => {
  console.log("compositionstart", event.data, event);
});
element.addEventListener("compositionupdate", (event) => {
  console.log("compositionupdate", event.data, event);
});
element.addEventListener("compositionend", (event) => {
  console.log("compositionend", event.data, event);
});
element.addEventListener("input", (_event) => {
  const event = _event as InputEvent;
  console.log("input", event.inputType, event.isComposing, event.data, event);
});
element.addEventListener("change", (_event) => {
  const event = _event as InputEvent;
  console.log("change", event.inputType, event.isComposing, event.data, event);
});
