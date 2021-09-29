const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  return a * a + b * b;
}

function calculateHypotenuse() {
  if (sides[0].value === "" || sides[1].value === "") {
    outputEl.textContent = "Both the fields are mandatory 🙄";
  }
  else if (Number(sides[0].value) === 0 || Number(sides[1].value) === 0) {
    outputEl.textContent = "Value cannot be zero 🙄";
  } else {
    let sumOfSquares = calculateSumOfSquares(
      Number(sides[0].value),
      Number(sides[1].value)
    );
    const lengthOfHypotenuse = Math.abs(Math.sqrt(sumOfSquares));
    outputEl.textContent = "The length of hypotenuse is " + lengthOfHypotenuse.toFixed(2);
  }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
