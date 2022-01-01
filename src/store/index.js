import { configureStore}  from "@reduxjs/toolkit";
import filter from "./filter";


const Store = configureStore({
  reducer: { filter: filter }
});
export default Store;
