import React from "react";
import SearchQuotes from "../SearchQuotes/SearchQuotes";

import './Container.css'
const Container = () => {
  return (
    <div className='page-container'>
      <h1>Book Freight Quotes Online</h1>
      <SearchQuotes />
    </div>
  );
};

export default Container;
