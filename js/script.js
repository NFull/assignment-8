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
  if (sum >= 15) resultLabel = 'A';
  else if (sum >= 10) resultLabel = 'B';
  else if (sum >= 5) resultLabel = 'C';
  else resultLabel = 'D';

  container.style.display = 'block';
  textResult.textContent = `With a score of ${sum}, your result is: ${resultLabel}`;
}

const showBtn = document.getElementById('show-result');
if (showBtn) showBtn.addEventListener('click', displayResult);
