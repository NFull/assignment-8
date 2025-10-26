console.log("script.js connected!");


let buttons = document.querySelectorAll("#questions button");

let userAnswers = {}
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    	
    let buttonID = button.dataset.buttonid
    let response = button.dataset.answer;
    userAnswers[buttonID] = response;
    console.log(userAnswers);
    
  });
});

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    buttons.forEach(function(btn) {
      btn.classList.remove("selected");
    });
    button.classList.add("selected");
    
    
    let answer = button.getAttribute("data-answer");
    
  });
});


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

const showBtn = document.getElementById('show-result');
if (showBtn) showBtn.addEventListener('click', displayResult);
