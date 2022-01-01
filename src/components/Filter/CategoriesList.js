import React from "react";
import { FilterCategories } from "../Jobs/JobsCards";
import { useDispatch } from "react-redux";
import { addCategory, setFilterCategory } from "../../store/filter";

const CategoriesList = () => {
  const Dispatch = useDispatch();

  //  to delete the redundant elements
  const FilterCategoriesarr = FilterCategories.filter((c, index) => {
    return FilterCategories.indexOf(c) === index;
  });

  const AddCategoryHundler = (categ) => {
    Dispatch(addCategory(categ));
    Dispatch(setFilterCategory(categ));
  };
  // to generate a unique key
  let id = 0;
  return (
    <ul className="categories-list">
      {FilterCategoriesarr.map((categ) => (
        <li key={id++} onClick={() => AddCategoryHundler(categ)}>
          {categ}
        </li>
      ))}
    </ul>
  );
};
export default CategoriesList;
