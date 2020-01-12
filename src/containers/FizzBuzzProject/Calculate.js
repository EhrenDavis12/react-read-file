export function GetFizzBuzz({ min, max }) {
  let result = [];
  let currentPos = 0;
  for (let i = parseInt(min); i <= parseInt(max); i++) {
    result[currentPos] = { key: i, value: Calculate(i) };
    currentPos++;
  }
  return result;
}

const Calculate = number => {
  let result = "";

  if (number % 3 === 0) result = "Fizz";
  if (number % 5 === 0) result += "Buzz";
  if (result === "") result = `${number}`;
  return result;
};
