// functie pt culori random
function rgbColors() {

  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);

  return `rgb(${x}, ${y}, ${z})`;

}
const paraInfo = document.querySelector("p");
const mainBody = document.querySelector("body");
const container = document.querySelector(".container");
const prompter = parseInt(prompt("Insert a grid layout number."));
const divColumnStorage = [];



if (isNaN(prompter)) {

  alert("Not a number. Refresh and try again.");
}

else if (prompter <= 0) {
  alert("A grid can't be smaller than 1x1, for obvious reasons.")
}

else {

  if (prompter > 40) {
      alert(`The (flex-based) grid may behave erratically if it's bigger than 40x40. Current value: ${prompter}`);
  }

      // CREARE ROW-URI
    for (let i = 1; i <= prompter; i++) {

      const divRow = document.createElement("div");
      divRow.classList.add("row");
      divRow.style.outline = "2px dotted red";

      container.appendChild(divRow);

        // CREARE COLOANE SI CULORI RGB PE HOVER
        for (let j = 1; j <= prompter; j++) {

          const divColumn = document.createElement("div");
          divColumn.classList.add("column");
          divColumn.style.outline = "2px dotted red";

          divColumn.addEventListener("mouseover", function() {

            if (!divColumn.style.backgroundColor) {
      
              const randomizer = rgbColors();
              divColumn.style.backgroundColor = randomizer;

            }   

          });

          divColumnStorage.push(divColumn);
          divRow.appendChild(divColumn);

        }

    }

    // CREARE BUTON DE RESET
    const buttonRGB = document.createElement("button");
    buttonRGB.style.padding = "5px";
    buttonRGB.style.margin = "10px";
    buttonRGB.textContent = "Reset RGB";

    buttonRGB.addEventListener("click", function() {

      alert("The sketch will reset - (RGB Mode)");

      divColumnStorage.forEach(column => {

        column.style.backgroundColor = "";
        paraInfo.textContent = "Current mode: RGB";

      });

    });

    mainBody.appendChild(buttonRGB);
  
}