document.addEventListener("DOMContentLoaded", function () {

  const yesOption = document.querySelector("#yes");

  const noOption = document.querySelector("#no");

  const message = document.querySelector("#ratingMessage");

  yesOption.addEventListener("click", function () {
    message.textContent = "Thanks! We are glad you recommend it ❤︎"; //heart icon from https://emojicombos.com/heart
  });

  noOption.addEventListener("click", function () {
    message.textContent = "Thanks! We appreciate the feedback. ❤︎"; //heart icon from https://emojicombos.com/heart
  });

});
