import React, { Component } from "react";

const List = (props) => {
  const { genres, valueProperty, textProperty, onItemSelect, selectedItem } =
    props;
  console.log(selectedItem);
  return (
    <ul className="list-group">
      {genres.map((item) => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

List.defaultProps = {
  textProperty: "genre",
  valueProperty: "id",
};

export default List;
