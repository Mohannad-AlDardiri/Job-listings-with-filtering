import React from "react";
import store from "../../../store";
import { Provider } from "react-redux";
import { render, screen, prettyDOM, fireEvent} from "@testing-library/react";
import Filter from "../Filter.js";
import Jobs from "../../Jobs/Jobs";
describe("filter div and categories List appearing and disappearing", () => {
  test("should filter appear when img clicked", async () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const img = screen.getByAltText(/filter-icon/i);
    img.click();
    const FilterElement = screen.getByTestId(/filterEL/i);

    expect(FilterElement).toBeInTheDocument();
  });
  it("should filter div disapear when img double clicked", () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const img = screen.getByAltText(/filter-icon/i);
    img.click();
    const FilterElement = screen.queryByTestId(/filterEL/i);
    img.click();
    expect(FilterElement).not.toBeInTheDocument();
  });
  it("should filter categs list apper when filter is focused", () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const FilterElement = screen.getByTestId(/filterEL/i);
    FilterElement.focus();
    const categsList = screen.getByTestId(/categories_list/i);
    expect(categsList).toBeInTheDocument();
  });
  it("should filter categs list disapear when filter is double focused", async () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );

    const FilterElement = screen.getByTestId(/filterEL/i);
    FilterElement.focus();
    FilterElement.focus();
    const categsList = screen.queryByTestId(/categories_list/i);
    expect(categsList).not.toBeInTheDocument();
  });
  it("should categs list disapear when img double clicked", async () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const img = screen.getByAltText(/filter-icon/i);
    const FilterElement = screen.getByTestId(/filterEL/i);
    FilterElement.focus();
    img.click();
    const categsList = screen.queryByTestId(/categories_list/i);

    expect(categsList).not.toBeInTheDocument();
  });
});
describe("add & delete categories", () => {
  test("should add categ when list item click", () => {
    render(
      <Provider store={store}>
        <Jobs />
      </Provider>
    );
    const img = screen.getByAltText(/filter-icon/i);
    img.click();
    // const FilterElement = screen.getByTestId(/filterEL/i);
    // const categsList = screen.getByTestId("categories_list");
    const FrontEnd_item = screen.getByTestId("categories_list_item_10");
    FrontEnd_item.click();
    let FrontEnd_categ = screen.getByTestId("category_20");

    expect(FrontEnd_item).toBeInTheDocument();
  });
  test("should Add 3 categs when 3 list items clicked", () => {
    render(
      <Provider store={store}>
        <Jobs />
      </Provider>
    );

    const FilterElement = screen.getByTestId(/filterEL/i);
    const categsList = screen.getByTestId("categories_list");

    screen.getByTestId("categories_list_item_14").click();
    screen.getByTestId("categories_list_item_16").click();
    let categories = screen.getAllByTestId(/category/i);
    expect(categories.length).toBe(3);
  });
  test("should ClearEL appear when add categ", () => {
    render(
      <Provider store={store}>
        <Jobs />
      </Provider>
    );
    const img = screen.getByAltText(/filter-icon/i);
    const FilterElement = screen.getByTestId(/filterEL/i);
    const categsList = screen.getByTestId("categories_list");
    const FrontEnd_item = screen.getByTestId("categories_list_item_10");
    FrontEnd_item.click();
    let clearEl = screen.getByText(/Clear/i);

    expect(clearEl).toBeInTheDocument();
  });
  test("should delete categ when X clicked", () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    const FilterElement = screen.getByTestId(/filterEL/i);
    const DeleteImg = screen.getAllByAltText(/remove icon/i)[0];
    DeleteImg.click();
    let categories = screen.getAllByTestId(/category/i);
    expect(categories.length).toBe(3);
  });
  it("should ClearEL disapper when delete categs", () => {
    render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );
    // const DeleteIconsArr = screen.getAllByAltText(/remove icon/i);
    screen.getAllByAltText(/remove icon/i)[0].click()
    screen.getAllByAltText(/remove icon/i)[0].click()
    screen.getAllByAltText(/remove icon/i)[0].click()

    let categories = screen.queryAllByTestId(/category/i);
    expect(categories.length).toBe(0);
  });
});
