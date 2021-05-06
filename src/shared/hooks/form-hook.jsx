import { useCallback, useReducer } from "react";

//Reducer Actions
const INPUT_CHANGE = "INPUT_CHANGE";
const SET_DATA = "SET_DATA";

//Reducer form Function
const formReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      let formValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formValid = formValid && action.isValid;
        } else {
          formValid = formValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formValid,
      };
    case SET_DATA:
      return {
        inputs: action.inputs,
        isValid: action.formValidity,
      };
    default:
      return state;
  }
};

export const useForm = (initalInput, initalFormValidty) => {
  const initalState = {
    inputs: initalInput,
    isValid: initalFormValidty,
  };

  const [formState, dispatch] = useReducer(formReducer, initalState);

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: INPUT_CHANGE,
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: SET_DATA,
      inputs: inputData,
      formValidity: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
