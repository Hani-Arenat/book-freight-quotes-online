import React, { useEffect, useState } from "react";
import RowItem from "../RowItem/RowItem";
import "./ResultRows.css";
import { useHistory } from "react-router-dom";

const ResultRows = ({ searchData }) => {
  const history = useHistory();
  const [sortType, setSortType] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredData, setFilteredData] = useState(null);
  const [filters, setFilters] = useState([]);
  const [data, setData] = useState([
    {
      name: "solution 1",
      price: "700",
      mode: "mode 1",
      duration: "40",
    },
    {
      name: "solution 2",
      price: "900",
      mode: "mode 2",
      duration: "10",
    },
    {
      name: "solution 3",
      price: "400",
      mode: "mode 3",
      duration: "15",
    },
    {
      name: "solution 4",
      price: "500",
      mode: "mode 4",
      duration: "20",
    },
    {
      name: "solution 5",
      price: "600",
      mode: "mode 5",
      duration: "25",
    },
    {
      name: "solution 6",
      price: "100",
      mode: "mode 5",
      duration: "55",
    },
    {
      name: "solution 7",
      price: "100",
      mode: "mode 5",
      duration: "80",
    },
    {
      name: "solution 8",
      price: "90",
      mode: "mode 4",
      duration: "77",
    },
  ]);

  useEffect(() => {
    if (history.location.search.length > 0) {
      // eslint-disable-next-line
      let newParams = {
        quoteFrom: searchData.quoteFrom,
        quoteTo: searchData.quoteTo,
        quoteMode: searchData.quoteMode,
        quoteDate: searchData.quoteDate,
      };
      // here we make api call to get new data based on the new search data
    }
    // eslint-disable-next-line
  }, [searchData]);

  useEffect(() => {
    let _filters = [...new Set(data.map((el) => el.mode))];
    setFilters(_filters);
    // eslint-disable-next-line
  }, [data]);

  const handleSortOnChange = (e) => {
    const { value } = e.target;
    setSortType(value);
    let myData = filteredData ? [...filteredData] : [...data];
    myData = myData.sort((a, b) => a[value] - b[value]);

    if(filteredData){
      setFilteredData([...myData]);
    }else{
      setData([...myData]);
    }
  };
  const handleFilterOnChange = (e) => {
    const { value } = e.target;
    setSelectedFilter(value);
    if (value === "none") {
      setFilteredData(null);
      return;
    }
    let myData = [...data];
    myData = myData.filter((el) => el.mode === value);
    setFilteredData([...myData]);
  };
  return (
    <div className="results-container">
      {filteredData
        ? filteredData.map((item, index) => {
            return <RowItem key={index} {...item} />;
          })
        : data.map((item, index) => {
            return <RowItem key={index} {...item} />;
          })}
      <div className="sort-container">
        <span>Sort by </span>
        <select
          name="sort"
          id="sort"
          value={sortType}
          onChange={handleSortOnChange}
        >
          <option value="" disabled>
            Choose option
          </option>
          <option value="price">price</option>
          <option value="duration">duration</option>
        </select>
      </div>
      <div className="filter-container">
        <span>Filter by </span>
        <select
          name="filter"
          id="filter"
          value={selectedFilter}
          onChange={handleFilterOnChange}
        >
          <option value="none">None</option>
          {filters.map((el, index) => {
            return (
              <option key={index} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ResultRows;
