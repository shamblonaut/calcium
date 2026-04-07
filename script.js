let digits = document.querySelectorAll(".btn-num");
let result = document.querySelector(".result");
let clear = document.getElementById("btn-clear");

digits.forEach((digit) => {
  digit.addEventListener("click", (event) => {
    if (result.textContent === "0") {
      result.textContent = "";
    }

    result.textContent += digit.textContent;
  });
});

clear.addEventListener("click", (event) => {
  result.textContent = "0";
});
