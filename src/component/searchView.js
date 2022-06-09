import React from "react";

function SearchView() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <input type="text" placeholder="Search Here" />
        </div>
      </div>
      <div className="row mx">
        <input type="checkbox"></input>
        <span className="labelText">Only Shows Products in Stock</span>
      </div>
    </>
  );
}
export default SearchView;
