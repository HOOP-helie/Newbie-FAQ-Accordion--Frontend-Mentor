const questions_btn = document.querySelectorAll(".question-btn");
const question = document.querySelectorAll(".question");

question.forEach((q) => {
  q.addEventListener("click", function (e) {
    e.target.parentNode.classList.toggle("active");
  });
});

questions_btn.forEach((btn) => {
  btn.addEventListener("keyup", function (e) {
    if (e.code == "Space" || e.code == "Enter") {
      e.target.classList.toggle("active");
    }
  });
});
