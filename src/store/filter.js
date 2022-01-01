import { createSlice } from "@reduxjs/toolkit";
const initState = {
  isOpen: false,
  isEmpty: true,
  filterCategoriesElementsArr: [],
  focused: false,
  filterCategories: []
};
const FilterSlice = createSlice({
  name: "filter",
  initialState: initState,
  reducers: {
    toggleIsOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    toggleIsEmpty: (state) => {
      state.isEmpty = !state.isEmpty;
    },
    toggleFocus: (state) => {
      state.focused = !state.focused;
    },
    addCategory: (state, action) => {
      state.filterCategoriesElementsArr.push(action.payload);
    },
    deleteCateg: (state, action) => {
      const index = state.filterCategoriesElementsArr.indexOf(action.payload);
      state.filterCategoriesElementsArr.splice(index, 1);
    },
    clearCategs: (state) => {
      state.filterCategoriesElementsArr = [];
      state.filterCategories = [];
    },
    setFilterCategory: (state, action) => {
      state.filterCategories.push(action.payload);
    },
    deleteFilterCategory: (state, action) => {
      const index = state.filterCategories.indexOf(action.payload);
      state.filterCategories.splice(index, 1);
    }
  }
});
export const {
  toggleIsEmpty,
  toggleIsOpen,
  toggleFocus,
  addCategory,
  deleteCateg,
  clearCategs,
  setFilterCategory,
  deleteFilterCategory
} = FilterSlice.actions;
export default FilterSlice.reducer;
