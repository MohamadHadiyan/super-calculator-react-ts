interface IProps {
  value: string;
  isOpen: boolean;
  numOpen: number;
  numClose: number;
}
const getParentes = ({ value, isOpen, numOpen, numClose }: IProps) => {
  if (
    (value.slice(-1).match(/\d/g) && !isOpen) ||
    (value.slice(-1) === ")" && !isOpen)
  ) {
    return {
      value: value + "+(",
      isOpen: true,
      numOpen: numOpen + 1,
      numClose,
    };
  } else if (
    (value.slice(-1).match(/\d/g) && isOpen && numOpen > numClose) ||
    (value.slice(-1) === ")" && isOpen && numOpen > numClose)
  ) {
    return {
      value: value + ")",
      isOpen: !(numClose + 1 === numOpen),
      numOpen,
      numClose: numClose + 1,
    };
  } else if (value.slice(-1) === "(" && isOpen && numOpen > numClose) {
    return { value: value + "(", isOpen: true, numOpen: numOpen + 1, numClose };
  } else if (numOpen === numClose && !isOpen) {
    return { value: value + "(", isOpen: true, numOpen: numOpen + 1, numClose };
  } else {
    return { value: value + "(", isOpen: true, numOpen: numOpen + 1, numClose };
  }
};

export default getParentes;
