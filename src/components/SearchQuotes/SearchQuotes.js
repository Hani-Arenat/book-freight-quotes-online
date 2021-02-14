import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./SearchQuotes.css";
const SearchQuotes = ({searchData, onSearchChange}) => {
  const history = useHistory();

  const [quoteSearchOptions, setQuoteSearchOptions] = useState({
    quoteFrom: "",
    quoteTo: "",
    quoteMode: "",
    quoteDate: "",
  });

  useEffect(() => {
    if (history.location.search.length > 0) {
    let newParams = {
      quoteFrom: searchData.quoteFrom,
      quoteTo: searchData.quoteTo,
      quoteMode: searchData.quoteMode,
      quoteDate: searchData.quoteDate,
    };
    
    setQuoteSearchOptions({ ...newParams });
  }
    // eslint-disable-next-line
  }, [searchData]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setQuoteSearchOptions((prev) => ({ ...prev, [name]: value }));
  };
  const handleSearch = () => {
    history.push({
      pathname: "/search",
      search: `from=${quoteSearchOptions.quoteFrom}&to=${quoteSearchOptions.quoteTo}&mode=${quoteSearchOptions.quoteMode}&date=${quoteSearchOptions.quoteDate}`,
    });
    if(onSearchChange){
      onSearchChange();
    }
  };
  return (
    <div className="body-container">
      <div className="select-container">
        <p>From</p>
        <select
          name="quoteFrom"
          id="quoteFrom"
          className="select"
          value={quoteSearchOptions.quoteFrom}
          onChange={handleOnChange}
        >
          <option value="" disabled>
            Picked up place
          </option>
          <option value="canberra">Canberra</option>
          <option value="vienna">Vienna</option>
          <option value="brasilia">Brasilia</option>
        </select>
      </div>
      <div className="select-container">
        <p>To</p>
        <select
          name="quoteTo"
          id="quoteTo"
          className="select"
          value={quoteSearchOptions.quoteTo}
          onChange={handleOnChange}
        >
          <option value="" disabled>
            Dropp off place
          </option>
          <option value="beijing">Beijing</option>
          <option value="prague">Prague</option>
          <option value="cairo">Cairo</option>
        </select>
      </div>
      <div className="select-container">
        <p>Mode</p>
        <select
          name="quoteMode"
          id="quoteMode"
          className="select"
          value={quoteSearchOptions.quoteMode}
          onChange={handleOnChange}
        >
          <option value="" disabled>
            Freight mode
          </option>
          <option value="container">Container</option>
          <option value="trucks">Trucks</option>
          <option value="planes">Planes</option>
        </select>
      </div>
      <div className="select-container">
        <p>pickup date</p>
        <input
          type="date"
          id="quoteDate"
          name="quoteDate"
          className="select-date"
          value={quoteSearchOptions.quoteDate}
          onChange={handleOnChange}
        />
      </div>

      <button className="btn-submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchQuotes;
