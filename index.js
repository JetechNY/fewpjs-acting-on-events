// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

console.log(dodger.style.left); // "180px"
console.log(dodger.style.bottom); // "0px"
console.log(dodger.style.right); //

dodger.style.bottom = "0px";

document.addEventListener("keydown", function(e) {
    console.log(e.key);
});

// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers);

//     dodger.style.left = `${left - 10}px`;
//   }
// });

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowRight") {
//       let rightNumbers = dodger.style.left.replace("px", "");
//       let right = parseInt(rightNumbers);
  
//       dodger.style.left = `${right + 10}px`;
//     }
//   });

  function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers);
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }

  function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    let right = parseInt(rightNumbers);
    if (right < 360) {
      dodger.style.left = `${right + 10}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });

//   document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowRight") {
//       moveDodgerRight();
//     }
//   });