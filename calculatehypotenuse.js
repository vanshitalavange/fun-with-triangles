const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputEl = document.querySelector('#output');

console.log("yassssssss");

function calculateSumOfSquares(a,b){
    return a*a+b*b;
}



function calculateHypotenuse(){
    console.log("ya");
   
  let sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
   outputEl.textContent = "The length of hypotenuse is "+lengthOfHypotenuse;

}


hypotenuseBtn.addEventListener("click",calculateHypotenuse);