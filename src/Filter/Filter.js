import React from 'react';
import './Filter.css';

function Filter({ handleInput, handleToggle, sortEarliestFirst }) {
  return (
    <div className="filter">
      <input id="name-input"
        className="filter__input"
        type="text"
        placeholder="Filter by worker name..."
        onChange={handleInput}
      />
      <div className="toggle">
        <span className="toggle__text">Earliest first</span>
        <div className="toggle__switch-outer"
          onClick={handleToggle}
          id="deadline-input"
        >
          <div className={sortEarliestFirst
            ? "toggle__switch-inner--earliest"
            : "toggle__switch-inner--latest"}
          />
        </div>
        <span className="toggle__text">Latest first</span>
      </div>
    </div>
  )
}

export default Filter;
