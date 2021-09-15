import * as actionTypes from "./actionTypes";

export const clearAll = (): actionTypes.IClearAllType => {
  return {
    type: actionTypes.CLEAR_ALL,
    payload: {
      input: "",
      result: "",
      parenteses: {
        isOpen: false,
        numOpen: 0,
        numClose: 0,
      },
    },
  };
};

export const addInput = (key: string): actionTypes.IGetInputType => {
  return {
    type: actionTypes.GET_INPUT,
    payload: key,
  };
};

export const addResult = (result: string): actionTypes.IGetResultType => {
  return {
    type: actionTypes.GET_RESULT,
    payload: result,
  };
};

export const updateParenteses = (
  updated: actionTypes.ParentesesType
): actionTypes.IUpdateParentesesType => {
  const _updated: actionTypes.ParentesesType =
    updated.isOpen === false
      ? { ...updated, numOpen: 0, numClose: 0 }
      : updated;

  return {
    type: actionTypes.UPDATE_PARENTESES,
    payload: _updated,
  };
};
