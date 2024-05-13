const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");

//Convert Data
const romanArabic = [
    { roman: "M", arabic: 1000, digits: 4 },
    { roman: "CM", arabic: 900, digits: 3 },
    { roman: "D", arabic: 500, digits: 3 },
    { roman: "CD", arabic: 400, digits: 3 },
    { roman: "C", arabic: 100, digits: 3 },
    { roman: "XC", arabic: 90, digits: 2 },
    { roman: "L", arabic: 50, digits: 2 },
    { roman: "XL", arabic: 40, digits: 2 },
    { roman: "X", arabic: 10, digits: 2 },
    { roman: "IX", arabic: 9, digits: 1 },
    { roman: "V", arabic: 5, digits: 1 },
    { roman: "IV", arabic: 4, digits: 1 },
    { roman: "I", arabic: 1, digits: 1 }
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
  let numArr = number.split("").reverse();
  let result = "";

  numArr.forEach((number, index) => {

    const filterData = romanArabic.filter((data) => data.digits === (index + 1));

    let numberDigits = parseInt(number += "0".repeat(index));
    let checkAddOutput = false;
    filterData.forEach((data) => {

      if(data.arabic === numberDigits){
                result += data.roman.split("").length > 1 ? data.roman.split("").reverse().join("") : data.roman;
                checkAddOutput = true;
      }

    });

    let rep = 0;
    let fixResult = "";


if(!checkAddOutput){

    if(numberDigits.toString().split("").length === 4){

      rep = numberDigits.toString().split("")[0] - filterData[0].arabic.toString().split("")[0];
      fixResult = filterData[0].roman + filterData[0].roman.repeat(rep);
      result += fixResult.split("").reverse().join("");
    
    } else if(numberDigits < filterData[0].arabic && numberDigits > filterData[1].arabic){

      rep = numberDigits.toString().split("")[0] - filterData[1].arabic.toString().split("")[0];
      fixResult = filterData[1].roman + filterData[3].roman.repeat(rep);
      result += fixResult.split("").reverse().join("");

    } else if (numberDigits < filterData[2].arabic && numberDigits > filterData[3].arabic) {

      rep = numberDigits.toString().split("")[0] - filterData[3].arabic.toString().split("")[0];
      fixResult = filterData[3].roman + filterData[3].roman.repeat(rep);
      result += fixResult.split("").reverse().join("");

    }
}
  });


  return result.split("").reverse().join("");
};

