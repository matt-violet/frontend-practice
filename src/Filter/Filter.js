import React from 'react';
import './Filter.css';

function Filter() {
  return (
    <div className="filter">
      <input className="filter__input" type="text" placeholder="Filter by worker name..."/>
      <div className="toggle">
        <span className="toggle__text">Earliest first</span>
        <div className="toggle__switch-outer">
          <div className="toggle__switch-inner"/>
        </div>
        <span className="toggle__text">Latest first</span>
      </div>
    </div>
  )
}

export default Filter;
