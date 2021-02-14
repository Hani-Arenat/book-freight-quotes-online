import React ,{Fragment} from 'react'
import SearchContainer from "../components/Container/Container";
import HeaderImage from "../assets/header-bg.jpg";
import "../App.css";

const Index = ()=> {
  return (
    <Fragment>
      <div className="App">
      <div className="page-header" style={{ backgroundImage: `url(${HeaderImage})` }}>
        <SearchContainer />
      </div>
    </div>
    </Fragment>
  );
}

export default Index;
