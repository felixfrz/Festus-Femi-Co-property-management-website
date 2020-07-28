const button2 = document.querySelector(".Submit2");
const button1 = document.querySelector(".Submit1");
const popup = document.querySelector(".popup-container");

//X closing button
const close = document.querySelector(".popup-close");

button2.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});


button1.addEventListener("click", () => {
  popup.style.display = "block";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});
