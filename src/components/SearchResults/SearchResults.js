import React, { useEffect, useState } from "react";
import SearchQuotes from "../SearchQuotes/SearchQuotes";
import ResultRows from "../ResultRows/ResultRows";
import { useHistory } from "react-router-dom";

import "./SearchResults.css";
const SearchResults = () => {
  const history = useHistory();
  const [searchParams, setSearchParams] = useState({
    quoteFrom: "",
    quoteTo: "",
    quoteMode: "",
    quoteDate: "",
  });

  useEffect(() => {
    if (history.location.search.length > 0) {
      handleURLChanges();
    }
    // eslint-disable-next-line
  }, [history]);
  const handleURLChanges = ()=>{
    const query = new URLSearchParams(history.location.search);
      let _params = {
        quoteFrom: query.get("from"),
        quoteTo: query.get("to"),
        quoteMode: query.get("mode"),
        quoteDate: query.get("date"),
      };
      setSearchParams({..._params})
  }
  const updateSearchData = ()=>{
    handleURLChanges();
  }
  return (
    <div className="container">
      <SearchQuotes searchData={searchParams} onSearchChange={updateSearchData} />
      <ResultRows searchData={searchParams} />
    </div>
  );
};

export default SearchResults;
