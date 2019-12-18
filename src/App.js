import React, { Component } from "react";
import "./App.css";
import OurBusiness from "./Pages/OurBusiness";
import OurCompany from "./Pages/OurCompany";
import NavBar from "./Components/NavBar"
import SectionBackground from "./Components/SectionBackground";

import Boards from "./Pages/BoardOfDirectors";
import OrgChart from "./Pages/OrgChart";
import Shareholding from "./Pages/Shareholding";
import Footer from "./Pages/Footer";

class App extends Component {
  render() {
    return (
      <div className="overflow">
        <SectionBackground>
          <NavBar />
        </SectionBackground>
        <OurBusiness />
        <OurCompany />
        <Boards />
        <OrgChart />
        <Shareholding />
        <Footer />
      </div>
    );
  }
}
export default App;
