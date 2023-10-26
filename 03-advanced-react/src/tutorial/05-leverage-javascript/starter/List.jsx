import React from "react";
import { Person } from "./per";
import { people } from "../../../data";

const List = () => {
  return (
    <>
      <ul>
        {people.map((input) => {
          return <Person {...input} key={input.id}></Person>;
        })}
      </ul>
    </>
  );
};

export default List;
