import React from "react";

import "./Card.scss";

const Card = (props: any) => {
  return <div className="card">{props.children}</div>;
};
export default Card;
