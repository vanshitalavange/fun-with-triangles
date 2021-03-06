const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}

function isTriangle() {
  if (
    inputs[0].value === "" ||
    inputs[1].value === "" ||
    inputs[2].value === ""
  ) {
    outputEl.textContent = "All the fields are mandatory 🙄";
  } 
  else if(Number(inputs[0].value)===0 ||Number(inputs[2].value)===0 ||Number(inputs[2].value)===0){
    outputEl.textContent = "Value cannot be zero 🙄";
  }
  else {
    const sumOfAngles = calculateSumOfAngles(
      Number(inputs[0].value),
      Number(inputs[1].value),
      Number(inputs[2].value)
    );
    if (sumOfAngles === 180) {
      outputEl.textContent = "The angles form a triangle 😀";
    } else {
      outputEl.textContent = "The angles don't form a triangle 🥴";
    }
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
