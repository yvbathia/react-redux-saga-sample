const initState = {
  a: 1,
};

const reducerA = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "UPDATE_A":
      return {
        ...state,
        a: state.a + action.value,
      };

    default:
      return newState;
  }
};

export default reducerA;
