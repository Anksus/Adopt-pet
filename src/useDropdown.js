import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setstate] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase}`;

  const DropDown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id="id"
        value={state}
        onChange={(e) => setstate(e.target.value)}
        onBlur={(e) => setstate(e.target.value)}
        disabled={options.length === 0}
      >
        <option>ALL</option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, DropDown, setstate];
};

export default useDropdown;
