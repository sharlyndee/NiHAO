import React, { Component } from "react";
import "./App.css";
import OurBusiness from "./Pages/OurBusiness";
import OurCompany from "./Pages/OurCompany";
import NavBar from "./Components/NavBar"
import Boards from "./Pages/BoardOfDirectors";
import OrgChart from "./Pages/OrgChart";



class App extends Component {
  render() {
    return (
      <div className='overflow'>
        <NavBar />
        <OurBusiness />
        <OurCompany />
        <Boards />
        <OrgChart/>
      </div>
    );
  }
}
export default App;
