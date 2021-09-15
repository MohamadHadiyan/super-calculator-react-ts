import * as types from "./actionTypes";

export default function reducer(
  state: types.InitialStateType,
  action: types.AppType
): types.InitialStateType {
  console.log(action);
  switch (action.type) {
    case types.CLEAR_ALL:
      return action.payload;
    case types.GET_INPUT:
      return { ...state, input: action.payload };
    case types.GET_RESULT:
      return { ...state, result: action.payload };
    case types.UPDATE_PARENTESES:
      return { ...state, parenteses: action.payload };
    default:
      return state;
  }
}
