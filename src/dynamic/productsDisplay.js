import products from "../static/products";
import { writable, get } from "svelte/store";

// PRODUCTS DISPLAY //////////////////////////////////////
export const productsDisplay = writable(products);
export const sortedProducts = writable(products);
export const filteredProducts = writable(products);

// SORT FUNCTIONS /////////////////////////////////////////
export function productsSort(sortBy) {
  let compare;
  if (sortBy === "az") {
    compare = function(a, b) {
      if (a.name > b.name) {
        return 1;
      } else if (a.name === b.name) {
        return 0;
      } else {
        return -1;
      }
    }
  }
  else if (sortBy === "za") {
    compare = function(a,b) {
      if (a.name < b.name) {
        return 1;
      } else if (a.name === b.name) {
        return 0;
      } else {
        return -1;
      }
    };
  }
  else if (sortBy === "low") {
    compare = function(a, b) {
      if (a.price > b.price) {
        return 1;
      } else if (a.price === b.price) {
        return 0;
      } else {
        return -1;
      }
    };
  }
  else if (sortBy === "high") {
    compare = function(a, b) {
      if (a.price < b.price) {
        return 1;
      } else if (a.price === b.price) {
        return 0;
      } else {
        return -1;
      }
    };
  }
  sortedProducts.set(get(sortedProducts).sort(compare));
};

// FILTER FUNCTION ///////////////////////////////////
// export function productsFilter(categories) {
//   const temp = [];
//   products.forEach(product => {
//     if
//   });
// }