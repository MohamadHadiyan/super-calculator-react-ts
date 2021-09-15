import React, { useContext } from "react";
import GlobalContext from "../context/globalContext";
import { checkInput } from "../functions/checkInput";
import getParentes from "../functions/getParentes";
import negate from "../functions/negate";
import Button from "./Button";

const Keyboards = () => {
  const { state, updateParenteses, getInput, getResult,clearAll } =
    useContext(GlobalContext);
  const { isOpen, numOpen, numClose } = state.parenteses;
  const oprators = ["()", "%", "÷", "×", "-", "+"];
  const keys = [
    ["C", "()", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["+/-", "0", ",", "="],
  ];

  const handleKey = (key: string) => {
    switch (key) {
      case "C":
        clearAll();
        break;
      case "=":
        if (state.result) getInput(checkInput(state.result));
        getResult("");
        break;
      case ",":
        if (!state.input.slice(-1).match(/\d+/g)) {
          getInput(checkInput(state.input + "0."));
        } else {
          getInput(checkInput(state.input + "."));
        }
        break;
      case "+/-":
        const neg = negate({ value: state.input, numOpen, numClose });
        getInput(checkInput(neg.value));
        updateParenteses({
          isOpen: neg.isOpen,
          numOpen: neg.numOpen,
          numClose: neg.numClose,
        });
        break;
      case "()":
        const res = getParentes({
          value: state.input,
          isOpen,
          numOpen,
          numClose,
        });
        getInput(checkInput(res.value));
        updateParenteses({
          isOpen: res.isOpen,
          numOpen: res.numOpen,
          numClose: res.numClose,
        });
        break;
      default:
        getInput(checkInput(state.input + key));
        break;
    }
  };

  return (
    <div className="keyboards">
      {keys.map((arr, index) => (
        <div key={index}>
          {arr.map((item, i) => (
            <Button
              key={i}
              pattern={
                item === "C"
                  ? "clear"
                  : item === "="
                  ? "equality"
                  : oprators.includes(item)
                  ? "oprator"
                  : "number"
              }
              onClick={() => handleKey(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboards;
