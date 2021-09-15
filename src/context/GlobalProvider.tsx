import React, { useReducer } from "react";
import { addInput, addResult, clearAll, updateParenteses } from "./actions";
import { GlobalContextType, ParentesesType } from "./actionTypes";
import GlobalContext, { initialState } from "./globalContext";
import reducer from "./reducer";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  const value: GlobalContextType = {
    state,
    clearAll:()=>dispatch(clearAll()),
    getInput: (key: string) => dispatch(addInput(key)),
    getResult: (result: string) => dispatch(addResult(result)),
    updateParenteses: (updated: ParentesesType) =>
      dispatch(updateParenteses(updated)),
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
