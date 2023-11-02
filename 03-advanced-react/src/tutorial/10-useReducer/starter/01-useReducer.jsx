import React, { useReducer, useRef } from "react";
import { data } from "../../../data";

const defaultState = {
  people: data,
  removed: false,
};

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [],removed:true };
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data,removed:false };
  } else if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter((person) => {
      return person.id != action.payload.id;
    });
    return { ...state, people: newPeople, removed: true };
  } else {
    throw new Error(`No Matching "${action.type}" - action type`);
  }
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  return (
    <>
      <ul>
        {state.people.map((person) => {
          const { id, name } = person;
          return (
            <li key={id}>
              <h4>{name}</h4>
              <button
                className="btn"
                onClick={() => dispatch({ type: REMOVE_ITEM, payload: { id } })}
              >
                <h6> Remove</h6>
              </button>
            </li>
          );
        })}
      </ul>
      {state.removed && (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => dispatch({ type: RESET_LIST })}
        >
          <h5>Reset</h5>
        </button>
      )}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => dispatch({ type: CLEAR_LIST })}
      >
        <h5>Clear</h5>
      </button>
    </>
  );
};

export default ReducerBasics;
