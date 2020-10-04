import React from "react";
import "./App.css";
import { connect } from "react-redux";

function App({
  age,
  history,
  onAgeUp,
  onAgeDown,
  handleOnClick,
  a,
  b,
  updateA,
  updateB,
}) {
  return (
    <div className="App">
      <div>
        <div>
          Age : <span>{age}</span>
        </div>
        <button onClick={onAgeUp}>Age Up</button>
        <button onClick={onAgeDown}>Age Down</button>
        <div>History</div>
        <div>
          <ul>
            {history.map((element) => (
              <li key={element.id} onClick={() => handleOnClick(element.id)}>
                {element.age}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <div>
          <span>{a}</span>
          <button onClick={() => updateA(b)}>Update a</button>
        </div>
        <div>
          <span>{b}</span>
          <button onClick={() => updateB(a)}>Update b</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    age: state.r.age,
    history: state.r.history,
    a: state.rA.a,
    b: state.rB.b,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => {
      dispatch({ type: "AGE_UP", value: 1 });
    },
    onAgeDown: () => {
      dispatch({ type: "AGE_DOWN", value: 1 });
    },
    handleOnClick: (val) => {
      dispatch({ type: "DELETE_ITEM", value: val });
    },
    updateA: (val) => {
      dispatch({ type: "UPDATE_A", value: val });
    },
    updateB: (val) => {
      dispatch({ type: "UPDATE_B", value: val });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
