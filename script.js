const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");

//Convert Data
const romanArabic = [
    { roman: "M", arabic: 1000 },
    { roman: "CM", arabic: 900 },
    { roman: "D", arabic: 500 },
    { roman: "CD", arabic: 400 },
    { roman: "C", arabic: 100 },
    { roman: "XC", arabic: 90 },
    { roman: "L", arabic: 50 },
    { roman: "XL", arabic: 40 },
    { roman: "X", arabic: 10 },
    { roman: "IX", arabic: 9 },
    { roman: "V", arabic: 5 },
    { roman: "IV", arabic: 4 },
    { roman: "I", arabic: 1 }
];



convertBtn.addEventListener("click", () => {
  const number = numberInput.value;
  if(validateInput(number)){
    output.innerText = convertToRoman(number);
  }
})

//Validate number
const validateInput = (input) => {
  if(input === ""){
    output.innerText = "Please enter a valid number"
    return false;
  } else if (input <= -1){
    output.innerText = "Please enter a number greater than or equal to 1"
    return false;
  } else if (input >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999"
    return false;
  } else {
    return true;
  }
};

//Logic
const convertToRoman = (number) => {
  let romanNumber = "";
  
  romanArabic.forEach(item => {
    while(number >= item.arabic){
      romanNumber += item.roman;
      number -= item.arabic;
    }
  });

  return romanNumber;
};
