export const checkInput = (input: string) => {
  // Last key
  const key = input.slice(-1);
  // One key before the last key
  const prevKey = input.slice(-2)[0];

  const operations = ["%", "÷", "×", "-", "+", "/", "*"];
  const reg = /[a-zA-Z]+|\s|[~!@#$&{}[\]<>|_\\`"':;]/g;
  const float = /\d+\.\d+(’\d+)+\d+/g;
  const currency = /(\d)(?=(\d{3})+(?!\d))/g;
  const isOperate = operations.indexOf(prevKey) !== -1;
  const isNum = operations.indexOf(key) !== -1;

  // First key is operator
  const firstIsOperate = operations.includes(input[0]);
  // Prev key is Parentes
  const prevIsParentes =
    prevKey === "(" && operations.indexOf(key) !== -1 && key !== "-";

  // Prevent operator duplication
  let newInput = isOperate && isNum ? input.slice(0, -2) + key : input;

  // Prevent other characters
  newInput = newInput.replace(reg, "");

  // Currency system
  // Split numbers by "’"
  newInput = newInput.split("’").join("").replace(currency, "$1’");

  // Remove "’" from float numbers
  let floatPoint = newInput.match(float);
  if (floatPoint) {
    for (let num of floatPoint) {
      newInput = newInput.replace(float, num.replace(/’/g, ""));
    }
  }

  return firstIsOperate || prevIsParentes ? newInput.slice(0, -1) : newInput;
};
