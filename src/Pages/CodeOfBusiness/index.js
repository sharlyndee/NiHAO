import React, { Component } from "react";
import "./module.style.css";
import NavBar from "../../Components/NavBar";
import Footer from "../../Pages/Footer";

class index extends Component {
  render() {
    return (
      <div className="overflow">
        <NavBar />

        <div className="container-fluid downloadmargin ">
          <div className="row">
            <div className="col-6">
              <h4>
                Code of Business Conduct and Ethics
              </h4>
            </div>
            <div className="col-3">
              <button>DOWNLOAD</button>
            </div>
            <hr></hr>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default index;
