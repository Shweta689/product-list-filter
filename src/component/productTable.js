import React from "react";
import Header from "./header";
import ProductCategory from "./productCategory";
import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  let components = [];
  let temp = null;
  components.push(<Header />);
  products.forEach((product) => {
    if (temp !== product.category) {
      components.push(<ProductCategory productCategory={product.category} />);
    }
    temp = product.category;
    components.push(<ProductRow product={product} />);
  });

  return (
    <>
      <table>
        <tbody>{components}</tbody>
      </table>
    </>
  );
}
export default ProductTable;
