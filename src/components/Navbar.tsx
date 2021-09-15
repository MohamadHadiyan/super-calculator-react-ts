import React, { useContext } from "react";
import GlobalContext from "../context/globalContext";
import { checkInput } from "../functions/checkInput";
import { AdvancedCalculator, BackSpace, History, Ruler } from "./Icons";

const Navbar = () => {
  const { state, updateParenteses, getInput } = useContext(GlobalContext);
  const handleRemove = () => {
    const lastkey = state.input.slice(-1);
    const parentes = state.parenteses;

    if (lastkey === "(") {
      updateParenteses({
        ...parentes,
        numClose: parentes.numClose + 1,
        isOpen: parentes.numClose + 1 !== parentes.numOpen,
      });
    } else if (lastkey === ")") {
      updateParenteses({
        ...parentes,
        numOpen: parentes.numOpen + 1,
        isOpen: parentes.numOpen + 1 !== parentes.numOpen,
      });
    }
    const newValue = state.input.slice(0, -1);

    getInput(checkInput(newValue));
  };

  return (
    <div className="navbar">
      <div>
        <button>
          <History />
        </button>
        <button>
          <Ruler />
        </button>
        <button>
          <AdvancedCalculator />
        </button>
      </div>
      <button onClick={handleRemove}>
        <BackSpace />
      </button>
    </div>
  );
};

export default Navbar;
