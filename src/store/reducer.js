const initState = {
  age: 21,
  history: [],
  a: 1,
  b: 1,
};

const reducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "AGE_UP_ASYNC":
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value,
        }),
      };
    case "AGE_DOWN":
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age - action.value,
        }),
      };
    case "DELETE_ITEM":
      return {
        ...state,
        history: state.history.filter((element) => element.id !== action.value),
      };
    default:
      return newState;
  }
};

export default reducer;
