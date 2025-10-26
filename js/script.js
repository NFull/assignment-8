console.log("script.js connected!");

// Select all buttons within the #questions container //
let buttons = document.querySelectorAll("#questions button");

// Object to store user answers //
let userAnswers = {}
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    	
    let buttonID = button.dataset.buttonid
    let response = button.dataset.answer;
    userAnswers[buttonID] = response;
    console.log(userAnswers);
    
  });
});

// Add event listeners to buttons for selection styling //
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    buttons.forEach(function(btn) {
      btn.classList.remove("selected");
    });
    button.classList.add("selected");
    
    let answer = button.getAttribute("data-answer");
    
  });
});

// Function to calculate and display result //
function displayResult() {
  const container = document.getElementById('result-container');
  const textResult = document.getElementById('result-text');

  const answers = Object.values(userAnswers || {}).map(v => Number(v) || 0);
  const sum = answers.reduce((acc, cur) => acc + cur, 0);

  if (answers.length < 5) {
    textResult.textContent = 'Please answer all questions before viewing your score!';
    container.style.display = 'block';
    return;
  }

  let resultLabel;
  if (sum == 20) resultLabel = 'Plain Rice! \n You dont seem to have much going on, just like plain rice';
  else if (sum >= 15) resultLabel = 'Pocky! \n You are a nice balance of fun and simplicity';
  else if (sum >= 10) resultLabel = 'Lays Classic! \n You appreciate the simple things in life, but still like a bit of flavor';
  else if (sum > 5) resultLabel = 'Cheetos! \n You enjoy a bit of excitement and crunch in your life!';
  else if (sum == 5) resultLabel = 'Takis! \n You have a bold and outgoing personality, with a hint of spice!';
  else resultLabel = 'Are you sure you answered the questions correctly...?';

  container.style.display = 'block';
  textResult.textContent = `Your result: ${resultLabel} (Score: ${sum})`;
}

// Attach event listener to the show result button //
const showBtn = document.getElementById('show-result');
if (showBtn) showBtn.addEventListener('click', displayResult);
