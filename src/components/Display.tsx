import React, { useCallback, useContext, useEffect, useRef } from "react";
import GlobalContext from "../context/globalContext";
import { checkInput } from "../functions/checkInput";
import calculateOperations from "../functions/oprations";

const Display = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { state, getInput, getResult } = useContext(GlobalContext);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [state.input]);

  const calculate = useCallback(() => {
    // Replace (- to (0- for negative numbers
    const input = state.input.replaceAll(/\(-/g, "(0-");
    // String to array
    const arr = input
      .replace(/\+|-|×|÷|%|\(|\)|\d+((’?(\.)?\d+)+)?/g, (str) => "," + str)
      .split(",")
      .filter((item) => item);

    const operations = ["×", "÷", "%", "+", "-", "("];
    if (operations.includes(arr[arr.length - 1])) return;

    // To currency format
    let newInput = calculateOperations(arr).replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      "$1’"
    );

    if (state.result !== newInput) getResult(newInput);
  }, [getResult, state.input, state.result]);

  useEffect(() => {
    const reg = /\+|-|×|÷|%|\(|\)/g;
    if (reg.test(state.input)) calculate();
  }, [calculate, state.input]);

  const handleFocus = () => {
    if (!inputRef.current) return;
    const elem = inputRef.current;
    elem.selectionStart = elem.selectionEnd = state.input.length;
  };

  useEffect(() => {
    if (inputRef.current) {
      const elm = inputRef.current;
      if (state.input.length > 25) {
        elm.style.fontSize = "22px";
      } else if (state.input.length > 20) {
        elm.style.fontSize = "25px";
      } else if (state.input.length > 15) {
        elm.style.fontSize = "30px";
      } else if (state.input.length > 10) {
        elm.style.fontSize = "35px";
      }
    }
  }, [state.input.length]);

  return (
    <div className="display">
      <textarea
        ref={inputRef}
        value={state.input}
        onChange={(e) => getInput(checkInput(e.target.value))}
        onFocus={handleFocus}
      />
      <label>{state.result === "NaN" ? "Invalid format" : state.result}</label>
    </div>
  );
};

export default Display;
