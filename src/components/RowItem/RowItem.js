import React, { Fragment } from "react";

import './RowItem.css'
const Container = ({name,price,mode,duration}) => {
  return (
    <Fragment>
      <div className='row-item'>
        <span>{name}</span>
        <span>{price} USD</span>
        <span>{mode}</span>
        <span>{duration} day</span>
        <button className='book-now-btn'>BOOK NOW!</button>
      </div>
    </Fragment>
  );
};

export default Container;
