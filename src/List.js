import React from "react";

const List = (props) => {
  const { name, age, image } = props.data;
  // console.log(image.split("/")[image.split("/").length - 1]);

  return (
    <div className="person">
      <img src={image} alt={image.split("/")[image.split("/").length - 1]} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default List;
