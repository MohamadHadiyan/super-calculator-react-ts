interface INegate {
  value: string;
  numOpen: number;
  numClose: number;
}

const negate = ({ value, numOpen, numClose }: INegate) => {
  if (value.slice(-1).match(/\d+/g)) {
    const negative = value.match(/\(-\d+(\.\d+)?/g);
    const arr = value.match(/\d+(\.\d+)?/g);
    if (
      negative &&
      arr &&
      value.lastIndexOf(negative[negative.length - 1]) ===
        value.lastIndexOf("(-" + arr[arr.length - 1])
    ) {
      // (-1+3+4 => (-1+3+(-4
      // 1+(-2 => 1+2
      // (-1 => 1
      let index = value.lastIndexOf(negative[negative.length - 1]);
      let setValue = value.slice(0, index) + value.slice(index + 2);
      return {
        value: setValue,
        numOpen,
        numClose: numClose + 1,
        isOpen: !(numClose + 1 === numOpen),
      };
    } else if (arr && value.slice(-1).match(/\d+/)) {
      // 1+2 => 1+(-2
      let num = arr[arr.length - 1];
      let index = value.lastIndexOf(num);
      let setValue = value.slice(0, index) + "(-" + num;
      return { value: setValue, numOpen: numOpen + 1, numClose, isOpen: true };
    }
  }

  const isExist = value.match(/\(-/g);
  if (value.slice(-1) === ")") {
    // 1+(-2+1) => 1+(-2+1)+(-
    return {
      value: value + "+(-",
      numOpen: numOpen + 1,
      numClose,
      isOpen: true,
    };
  } else if (isExist && value.slice(-2) === "(-") {
    // (-  => ""
    let index = value.lastIndexOf(isExist[isExist.length - 1]);
    return {
      value: value.slice(0, index),
      numOpen,
      numClose: numClose + 1,
      isOpen: !(numClose + 1 === numOpen),
    };
  } else {
    // ""  => (-
    return {
      value: value + "(-",
      numOpen: numOpen + 1,
      numClose,
      isOpen: true,
    };
  }
};

export default negate;
