import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./Productcontext";
// import { type } from "@testing-library/user-event/dist/type";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
      text: "",
      category: "all",
      company: "all",
      color: "all",
    },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  /////////set grid view//

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  };

  ////////////////set list view

  const setListView = () => {
    return dispatch({ type: "SET_ListVIEW" });
  };

  // sorting function

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  /////////////update the filter value

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  /// to clear filters

  const clearFilters = () => dispatch({ type: "CLEAR_FILTERS" });

  // sorting products

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
