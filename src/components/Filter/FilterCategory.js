import React from "react";
import removeIcon from "../Jobs/images/icon-remove.svg";
import { useDispatch } from 'react-redux'
import { deleteCateg, deleteFilterCategory } from "../../store/filter";

const FilterCategory = ({ children }) => {
  const Dispatch = useDispatch();
  const DeleteCategHundler = (children) => {
    Dispatch(deleteCateg(children));
    Dispatch(deleteFilterCategory(children))
  }
  let id = 0;
  return (
    <div className="category-container" key={id++}>
      <div>{children}</div>
      <img src={removeIcon} alt="remove icon" className="cursor-pointer" onClick={() =>  DeleteCategHundler(children)} />
    </div>
  );
};

export default FilterCategory;
