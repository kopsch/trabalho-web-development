const close = document.querySelector(".close");
const background = document.querySelector("#background");
const showButton = document.querySelector(".show__button");

showButton.addEventListener("click", () => {
  background.classList.toggle("hidden");
});

close.addEventListener("click", () => {
  background.classList.toggle("hidden");
  answerBox.removeChild(answerBox.firstChild);
});
