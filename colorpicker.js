const colorPickerInput = document.getElementById("color-picker-input");
const body = document.querySelector("body")

// variable to store the selected color
let color;

colorPickerInput.addEventListener('input',(e)=>{
    // log the selected color value
    console.log(e.target.value)
    // store the selected color
    color = e.target.value
})

document.addEventListener("keypress",(e)=>{
//   when enter is pressed,apply the selected color to the background
if(e.key === "Enter"){
    body.style.backgroundColor = color;
}
});

// Get reference to the word counter element
const wordCounterText = document.getElementById("word-counter-textarea");
console.log(wordCounterText);
const count = document.getElementById("word-count")
console.log(count)
const btn = document.getElementById("start-count-btn")
console.log(btn)

// Variables to store the word count and textarea value
let wordCounterValue = 0;
let wordCounterTextValue ="";

// listen for clicks on the start counting button
wordCounterText.addEventListener("input",(e)=>{
    console.log(e.target.value)
    wordCounterTextValue = e.target.value;
});

// Add click event listener to the start count button
btn.addEventListener("click", () => {
  // split the textarea value  by spaces and count the words
  wordCounterValue = wordCounterTextValue.split(" ").length;
  // update the word count display text
  count.textContent = `Word Count: ${wordCounterValue}`;
  // log the word count to the console
  console.log(wordCounterValue);
});


