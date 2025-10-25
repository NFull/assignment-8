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

