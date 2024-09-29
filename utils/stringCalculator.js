// function return string calculations
function stringCalculator(string) {
  let inputString = string;
  if (string === "") return 0;
  let delimiter = /[\n,]/;
  if (string.startsWith("//")) {
    const parts = string.split("\n");
    delimiter = new RegExp(`${parts[0][2]}`);
    inputString = parts[1];
  }

  const numbbers = inputString.split(delimiter).map(Number);

  const negetiveNum = numbbers.filter((number) => number < 0);
  if (negetiveNum.length > 0) {
    throw new Error(`negative numbers not allowed : ${negetiveNum.join(", ")}`);
  }
  return numbbers.reduce((sum, num) => sum + num, 0);
}

module.exports = stringCalculator;
