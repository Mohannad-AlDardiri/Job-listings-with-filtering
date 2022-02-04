import React from "react";
import { useDispatch, useSelector } from "react-redux";
import filterIcon from "../Jobs/images/filter.png";
import { toggleIsOpen, toggleFocus, clearCategs } from "../../store/filter";
import FilterCategory from "./FilterCategory";
import CategoriesList from "./CategoriesList.js";

const Filter = () => {
  const GlobalState = useSelector((state) => state);
  const Dispatch = useDispatch();

  let id = 20;
  return (
    <div className="filter-container">
      {/* show filter div whin filter icon is clicked  */}
      {GlobalState.filter.isOpen && (
        <div
          tabIndex="0"
          className="filter"
          data-testid="filterEL"
          onFocus={() => Dispatch(toggleFocus())}
        >
          <div className="filter-categories" id="filter-categories">
            {/* loaping in categories array for show them  */}
            {GlobalState.filter.filterCategoriesElementsArr.map((categ) => (
              <FilterCategory id={id++}>{categ}</FilterCategory>
            ))}
          </div>
          {/* show and hide clear btn if there is a categories elements */}
          {GlobalState.filter.filterCategoriesElementsArr.length !== 0 && (
            <button
              className="clear-categs"
              onClick={() => Dispatch(clearCategs())}
            >
              Clear
            </button>
          )}
        </div>
      )}
      {/* show categories list when filter div is opend and focused  */}
      {GlobalState.filter.focused && GlobalState.filter.isOpen && (
        <CategoriesList />
      )}
      <img
        src={filterIcon}
        alt="filter-icon"
        className="filter-icon"
        onClick={() => {
          Dispatch(toggleIsOpen());
        }}
      />
    </div>
  );
};
export default Filter;
