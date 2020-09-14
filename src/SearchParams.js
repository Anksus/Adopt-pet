import React from "react";
const SearchParams = () => {
  const location = "Seattle,WA";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" placeholder="Location" value={location} />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
