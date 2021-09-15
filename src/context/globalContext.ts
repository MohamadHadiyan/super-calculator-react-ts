import { createContext } from "react";
import { GlobalContextType } from "./actionTypes";

export const initialState: GlobalContextType = {
  state: {
    input: "",
    result: "",
    parenteses: {
      isOpen: false,
      numOpen: 0,
      numClose: 0,
    },
  },
  clearAll:()=>{},
  getInput: () => {},
  getResult: () => {},
  updateParenteses:()=>{}
};

// GlobalContext
const GlobalContext = createContext<GlobalContextType>(initialState);

export default GlobalContext;
