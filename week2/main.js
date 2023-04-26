/*
find an Image
add 100 image elements with a random position
    get a random position: x and y value that are within the bounds of our container
    create an img element
    set the src of the element
    add class of .clicker
        .clicker {
            position:absolute;
            left: var(--left);
            top: var(--top);
        }
    set --top and --left to the random position (sync).
    add a click listener
When an image is clicked:
    remove the image
    decrement counter
    check to see if all images are gone.
*/
const totalClickers = 5;
let remainingClickers = totalClickers;
let startTime = Date.now();
const boardWidth = 600;
const boardHeight = 400;
const board = document.querySelector("#board");
const remainingEl = document.querySelector("#remain");

// position element in the DOM
function sync(dom, pos) {
  dom.style.setProperty("--left", `${pos.x}px`);
  dom.style.setProperty("--top", `${pos.y}px`);
}

function generatePos() {
  const pos = {};
  pos.x = Math.random() * (boardWidth - 25);
  pos.y = Math.random() * (boardHeight - 25);
  return pos;
}

function createClicker() {
  const clicker = document.createElement("div");
  const pos = generatePos();
  clicker.classList.add("clicker");
  sync(clicker, pos);
  board.append(clicker);
  clicker.addEventListener("click", clickHandler);
}

function destroyClicker(el) {
  el.remove();
  remainingClickers--;
}

function clickHandler(e) {
  console.log(e.target);
  destroyClicker(e.target);
  remainingEl.textContent = remainingClickers;
  console.log(remainingClickers);
  if (remainingClickers == 0) {
    console.log("done!");
  }
}

function init() {
  for (let i = 0; i < totalClickers; i++) {
    createClicker();
  }
  remainingEl.textContent = remainingClickers;
}

init();
