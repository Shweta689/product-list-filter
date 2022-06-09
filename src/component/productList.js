import React from "react";
import SearchView from "./searchView";
import ProductTable from "./productTable";

function ProductList({ products }) {
  return (
    <>
      <SearchView />
      <ProductTable products={products} />
    </>
  );
}
export default ProductList;
