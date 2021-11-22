import React from "react";

const List = (props) => {
  const { id, name, age, image } = props.data;

  return (
    <div className="person">
      <img src={image} alt="" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default List;
