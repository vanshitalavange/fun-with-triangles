const sides = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");

function getProduct(base, height) {
  let product = 0.5 * base * height;
  return product;
}
function calculateAreaOfTriangle() {
  if((sides[0].value)===""||sides[1].value===""){
    outputEl.textContent = "Both the fields are mandatory🙄";
  }
  else if(Number(sides[0].value)===0||Number(sides[1].value)===0){
    outputEl.textContent = "Value cannot be zero🙄";
  }
  else{
  let area = getProduct(Number(sides[0].value), Number(sides[1].value));
  outputEl.textContent = "The area is " + area;
  }
}

areaBtn.addEventListener("click", calculateAreaOfTriangle);
