

// Wait until the DOM is ready to be manipulated
document.addEventListener("DOMContentLoaded", function () {

  // yes radio button
  const yesOption = document.querySelector("#yes");

  // no radio button
  const noOption = document.querySelector("#no");

  // text to display thank you message
  const message = document.querySelector("#ratingMessage");

  // show message when yes is clicked 
  yesOption.addEventListener("click", function () {
    message.textContent = "Thanks! We are glad you recommend it ❤︎"; //heart icon from https://emojicombos.com/heart
  });

  // show message when no is clicked 
  noOption.addEventListener("click", function () {
    message.textContent = "Thanks! We appreciate the feedback. ❤︎"; //heart icon from https://emojicombos.com/heart
  });

});
