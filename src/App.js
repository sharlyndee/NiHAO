import React, { Component } from "react";
import "./App.css";
import OurBusiness from "./Pages/OurBusiness";
import OurCompany from "./Pages/OurCompany";
import NavBar from "./Components/NavBar"
import Boards from "./Pages/BoardOfDirectors";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <OurBusiness />
        <OurCompany />
        <Boards/>
      </div>
    );
  }
}
export default App;
