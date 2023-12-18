import React from "react";

const SearchBar = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        value={props.value}
        onChange={(e) => props.setSearchValue(e.target.value)}
        className="form-control"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBar;
