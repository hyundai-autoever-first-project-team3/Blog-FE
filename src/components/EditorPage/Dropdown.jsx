import React from "react";
import { ReactSVG } from "react-svg";
import Arrowdown from "../../assets/Arrow down.svg";

const Dropdown = ({ name = null, value, options, placeholder, onChange }) => {
  return (
    <div className="relative w-full">
      <select
        value={name === "algorithm" ? options[value] : value}
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-orange-200"
        onChange={onChange}
      >
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={name === "algorithm" ? index + 1 : option}>
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 flex items-center px-2 pointer-events-none right-1">
        <ReactSVG
          src={Arrowdown}
          beforeInjection={(svg) => {
            svg.classList.add("text-gray-700");
            svg.setAttribute("style", "fill: currentColor");
          }}
        />
      </div>
    </div>
  );
};

export default Dropdown;
