const nameInput = document.querySelector("#name-input");
const container = document.querySelector("#container");
const loader = document.querySelector("#loader");
let username = "잠둘기";
nameInput.onkeydown = (e) => {
  if (e.key === "Enter") {
    username = e.target.value ? e.target.value : username;
    container.style.display = "flex";
    setTimeout(() => {
      container.classList.add("act");
    }, 0);
    loader.style.display = "none";
  }
};
