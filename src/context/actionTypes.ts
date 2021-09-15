export const CLEAR_ALL= "CLEAR_ALL";
export const GET_INPUT = "GET_INPUT";
export const GET_RESULT = "GET_RESULT";
export const UPDATE_PARENTESES = "UPDATE_PARENTESES";

export type ParentesesType = {
  isOpen: boolean;
  numOpen: number;
  numClose: number;
};

export type InitialStateType = {
  input: string;
  result: string;
  parenteses: ParentesesType;
};

export type GlobalContextType = {
  state: InitialStateType;
  clearAll:() => void;
  getInput: (input: string) => void;
  getResult: (result: string) => void;
  updateParenteses:(updatedParenteses:ParentesesType) => void;
};

export interface IClearAllType {
  type: typeof CLEAR_ALL;
  payload: InitialStateType;
}

export interface IGetInputType {
  type: typeof GET_INPUT;
  payload: string;
}

export interface IGetResultType {
  type: typeof GET_RESULT;
  payload: string;
}

export interface IUpdateParentesesType {
  type: typeof UPDATE_PARENTESES;
  payload: ParentesesType;
}


export type AppType = IClearAllType| IGetInputType | IGetResultType | IUpdateParentesesType;
