const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const container = document.querySelector(".container");
  const successMsgContainer = document.querySelector(".success-msg-container");
  container.classList.add("hided");
  successMsgContainer.classList.remove("hided");
  console.log(email);
});
