const form = document.querySelector("form");
const sign_up = document.querySelector(".container");
const success = document.querySelector(".success-msg-container");
const submittedEmail = document.querySelector(".submitted-email");
const dismiss = document.querySelector(".dismiss");

function swithSections() {
  sign_up.classList.toggle("hided");
  success.classList.toggle("hided");
}

function updateSucessMsg(email) {
  submittedEmail.textContent = email;
}

function isValidEmail(val) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return val.match(mailformat);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.querySelector("#email").value.toString();
  if (isValidEmail(email)) {
    updateSucessMsg(email);
    swithSections();
  }
});

dismiss.addEventListener("click", (e) => {
  updateSucessMsg("");
  swithSections();
});
