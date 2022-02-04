import React from "react";
import removeIcon from "../Jobs/images/icon-remove.svg";
import { useDispatch } from 'react-redux'
import { deleteCateg, deleteFilterCategory } from "../../store/filter";

const FilterCategory = ({ children, id }) => {
  const Dispatch = useDispatch();
  const DeleteCategHundler = (children) => {
    Dispatch(deleteCateg(children));
    Dispatch(deleteFilterCategory(children))
  }
  return (
    <div className="category-container" data-testid={`category_${id}`} key={id++}>
      <div>{children}</div>
      <img src={removeIcon} alt="remove icon" className="cursor-pointer" onClick={() =>  DeleteCategHundler(children)} />
    </div>
  );
};

export default FilterCategory;
