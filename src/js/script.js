// Add your code here

const suits = ["♥️", "♦️", "♠", "♣"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

const suit1Element = document.querySelector(".suit1");
const suit2Element = document.querySelector(".suit2");
const valueElement = document.querySelector(".value");

suit1Element.textContent = suits[randomIndex(suits)];
suit2Element.textContent === suit1Element.textContent
  ? (suit2Element.textContent = suits[randomIndex(suits)])
  : (suit2Element.textContent = suit1Element.textContent);
valueElement.textContent = values[randomIndex(values)] + suit1Element.textContent;
