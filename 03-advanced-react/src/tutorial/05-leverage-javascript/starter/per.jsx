import React from "react";
import avatar from "../../../assets/default-avatar.svg";

export const Person = (props) => {
  const { name, nickname, images } = props;
  const img = images?.[0]?.small?.url || avatar;
  const nkname = nickname ? nickname : "Aloo";
  return (
    <li>
      <h1>{name}</h1>
      <h2>{nkname}</h2>
      <img src={img} alt={name} style={{ width: "50px" }} />
    </li>
  );
};
