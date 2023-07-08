let checkBtn = document.querySelector(".check-button");
let errorDiv = document.querySelector("#error-div");
let nextBtn = document.querySelector(".next-btn");
let cashArea = document.querySelectorAll(".cash-area");
let resultArea = document.querySelectorAll(".result-area");
let bill = document.querySelector(`input[name=bill-amount]`);
let cash = document.querySelector(`input[name=cash-given]`);
const checkChange = () => {
  errorDiv.innerHTML = "";
  let billAmount = bill.value;
  let cashGiven = cash.value;
  if (cashGiven == "") {
    errorDiv.style.color = "red";
    errorDiv.innerHTML = "Please enter cash given";
  } else if (cashGiven < 0) {
    errorDiv.style.color = "red";
    errorDiv.innerHTML = "Cash Given cannot be less than 0";
  } else {
    billAmount = Number(billAmount);
    cashGiven = Number(cashGiven);
    if (billAmount < 0 || cashGiven < 0) {
      errorDiv.style.color = "red";
      errorDiv.innerHTML = "Please enter valid values";
    } else if (billAmount <= cashGiven) {
      errorDiv.style.color = "";
      calculate(cashGiven - billAmount);
    } else if (billAmount > cashGiven) {
      errorDiv.style.color = "";
      errorDiv.innerHTML = "Do you wanna wash plates?";
    } else {
      errorDiv.style.color = "red";
      errorDiv.innerHTML = "Please enter valid values";
    }
  }
};

const calculate = (number) => {
  resultArea.forEach((ele) => (ele.style.display = "block"));
  let notes = [2000, 500, 200,100,50, 20, 10, 5,2, 1];
  for (let i = 0; i < notes.length; i++) {
    console.log(number / notes[i]);
    let count = Math.floor(number / notes[i]);
    let note = notes[i].toString();
    document.getElementById(note).innerText = count;
    number = number % notes[i];
  }
};

const handleNext = () => {
  let billAmount = bill.value;
  if (billAmount == "") {
    errorDiv.style.color = "red";
    errorDiv.innerHTML = "Please enter Bill Amount";
  } else if (billAmount < 0) {
    errorDiv.style.color = "red";
    errorDiv.innerHTML = "Bill Amount cannot be less than 0";
  } else {
    nextBtn.style.display = "none";
    cashArea.forEach((ele) => (ele.style.display = "block"));
    checkBtn.style.display = "block";
    errorDiv.innerHTML = "";
  }
};
nextBtn.addEventListener("click", handleNext);
checkBtn.addEventListener("click", checkChange);
