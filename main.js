//Create an input field in your DOM. Give it an id of message.
//Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
//Give each article a different border color.
//Write an event listener that listens for the keyup event on the input field.
//The event handler function should update the textContent property of both sections.

//"container" contains text input field and both output fields
let fieldEl = document.getElementById("container");

//"box1" and "box2" are the text output fields (i.e. the 2 article elements)
let one = document.getElementById("box1");
let two = document.getElementById("box2");

fieldEl.addEventListener("keyup", function (event) {
  console.log(event);
  one.textContent = event.target.value;
  two.textContent = event.target.value;
});