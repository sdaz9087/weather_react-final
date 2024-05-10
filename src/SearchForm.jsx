import React from "react";
import "./SearchForm.css";

export default function SearchForm(props) {
  return (
    <form id="search-form" onSubmit={props.handleSubmit} className="m-auto">
      <div className="input-group ">
        <input
          type="search"
          onChange={props.changeCity}
          className="form-control bg-transparent border border-secondary"
          placeholder="Enter a city.."
          aria-label="Enter a city.."
          aria-describedby="button-addon2"
          id="searchField"
        />
        <input
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
          value="Search"
        />
      </div>
    </form>
  );
}
