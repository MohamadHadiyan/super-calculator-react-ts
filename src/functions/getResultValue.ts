const getResultValue = (array: string[]) => {
  if (array.length === 0) return "";

  let res = 0;
  let op = "+";

  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      op = array[i];
      continue;
    }

    switch (op) {
      case "+":
        res += +array[i];
        break;
      case "-":
        res -= +array[i];
        break;
      case "÷":
        res /= +array[i];
        break;
      case "×":
        res *= +array[i];
        break;
      case "%":
        res %= +array[i];
        break;
      default:
        res += +array[i];
    }
  }

  return res + "";
};

export default getResultValue;
