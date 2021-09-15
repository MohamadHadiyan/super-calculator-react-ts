import getResultValue from "./getResultValue";

const calculateParentheses = (array: string[]) => {
  const open = "(";
  const close = ")";
  let openIndex = array.indexOf(open);
  let closeIndex = array.indexOf(close);

  if (openIndex === -1 && closeIndex === -1) return array;

  let clone = [...array];
  let isOpen = true;

  while (isOpen === true) {
    const lastOpen = clone.lastIndexOf(open);
    let newArr = clone.slice(lastOpen);

    const nums = clone.join("").match(/\d+/g);
    const numIndex = clone.indexOf(nums ? nums[0] : "_");

    if (numIndex === -1)
      return clone.filter((item) => item !== "(" && item !== ")");

    const firstClose = newArr.indexOf(close);
    const cIndex = firstClose !== -1 ? firstClose + 1 : clone.length - lastOpen;
    const select = clone
      .splice(lastOpen, cIndex)
      .filter((item) => item !== "(" && item !== ")");

    clone.splice(lastOpen, 0, calc(select)[0]);
    clone = clone.filter((item) => item !== "");

    if (clone.indexOf("(") === -1 && clone.indexOf(")") === -1) isOpen = false;
  }

  return clone;
};

const calc = (array: string[]) => {
  if (array.length === 0) return array;

  // Get copy and Remove "’" numbers
  const clone = array.map((item) => item.replace(/’/g, ""));
  const operations: string[] = [];

  operations.push(...clone.filter((item) => item.match(/×|÷|%/g)));
  operations.push(...clone.filter((item) => item.match(/\+|-/g)));

  while (operations.length > 0) {
    let index = clone.indexOf(operations[0]);
    const select = clone.slice(index - 1, index + 2);

    clone.splice(index - 1, 3, getResultValue(select));
    operations.shift();
  }

  return clone;
};

const calculateOperations = (array: string[]) => {
  return getResultValue(calc(calculateParentheses(array)));
};

export default calculateOperations;
