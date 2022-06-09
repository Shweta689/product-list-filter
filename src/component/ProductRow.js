import React from "react";

function ProductRow({ product }) {
  const color = product.stocked ? "inherit" : "red";
  console.log(product, "909");
  return (
    <>
      <tr>
        <td style={{ color }}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}
export default ProductRow;
