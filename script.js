let digits = document.querySelectorAll(".btn-num");
let result = document.querySelector(".result");

digits.forEach((digit) => {
  digit.addEventListener("click", (event) => {
    if (result.textContent === "0") {
      result.textContent = "";
    }

    result.textContent += digit.textContent;
  });
});
