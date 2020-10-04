const initState = {
    b: 1,
  };
  
  const reducerB = (state = initState, action) => {
    const newState = { ...state };
    switch (action.type) {
      case "UPDATE_B":
        return {
          ...state,
          b: action.value + state.b,
        };
  
      default:
        return newState;
    }
  };
  
  export default reducerB;
  