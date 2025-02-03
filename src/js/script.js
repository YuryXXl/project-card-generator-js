// Add your code here

const suits = [`♥️`, `♦️`, `♠`, `♣`];
const values = [
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
  `10`,
  `J`,
  `Q`,
  `K`,
  `A`,
];

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

const value1Element = document.querySelector(".value1");
const value2Element = document.querySelector(".value2");
const suitElement = document.querySelector(".suit");

suitElement.textContent = suits[randomIndex(suits)];
value1Element.textContent = values[randomIndex(values)];
value2Element.textContent === value1Element.textContent
  ? (value2Element.textContent = values[randomIndex(values)])
  : (value2Element.textContent = value1Element.textContent);

if (suitElement.textContent === "♥️" || suitElement.textContent === "♦️") {
  value1Element.style.color = "red";
  value2Element.style.color = "red";
}

if (
  value1Element.textContent === "A" ||
  value1Element.textContent === "K" ||
  value1Element.textContent === "Q" ||
  value1Element.textContent === "J"
) {
  suitElement.style.backgroundColor = "lightgray";
}
