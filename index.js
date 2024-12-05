const titleElement = document.getElementById("page-title");
titleElement.style.color = "red";
console.log(titleElement);
// for getting elements based on id

const famContacts = document.getElementsByClassName("family");
console.log(famContacts);
// getting elements based on class name

console.log(famContacts[1]);
// getting class name through array

const allContacts = document.getElementsByTagName("p");
console.log(allContacts);
//getting through tag name

const firstWorkContact = document.querySelector(".work");
console.log(firstWorkContact);

const thirdBtn = document.querySelector("div button:nth-child(1)");
console.log(thirdBtn);

const allBtns = document.querySelectorAll("button");
console.log(allBtns);

const pj = document.querySelector("#topic");
topic.innerHTML = "<p>This is my message i need <b>sleep</b></p>";
console.log(pj.innerHTML);

const paragraph = document.querySelector("p");

console.log(paragraph.innerText);
console.log(paragraph.textContent);

const example1 = document.querySelector("#inner-text");
const example2 = document.querySelector("#textContent");
console.log(example1, example2);

let address = `
  ABC Street,
  Spintex Road,
  Accra,
  Ghana.
`;
example1.innerText = address;
example2.textContent = address;
console.log(example1, example2);

const imageElement = document.querySelector("img");
console.log(imageElement.getAttribute("alt"));

console.log("BEFORE:", imageElement.getAttribute("src"));
imageElement.setAttribute("src", "new-image.jpg");
console.log("AFTER:", imageElement.getAttribute("src"));

console.log("BEFORE:", imageElement.getAttribute("height"));
imageElement.setAttribute("height", "200");
console.log("AFTER:", imageElement.getAttribute("height"));

const header = document.querySelector("h1");
header.style.backgroundColor = "blue";
header.style.backgroundColor = "";
console.log(header.style);

console.log(header.className);
header.className = "title";

const jollofParagraph = document.querySelector("p");
console.log(jollofParagraph.classList);

jollofParagraph.classList.add("fav", "tasty");

console.log(jollofParagraph.classList);

const italicizedText = document.getElementById("italics");
console.log(italicizedText.parentNode.parentNode);

const container = document.getElementById("container");
console.log(container);

const containerChildren = container.children;
console.log(containerChildren);

const containerChildrenNodes = container.childNodes;
console.log(containerChildrenNodes)

 const myBut = document.getElementById("myButton")
 console.log(myBut);

  myButton.addEventListener("click",()=>{
  alert("Button Clicked")
})

