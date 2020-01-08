import React, { Component } from 'react'
import NavBar from "../../Components/NavBar";
import Footer from "../../Pages/Footer";
import "./module.style.css";




class index extends Component {
    render() {
        return (
          <div className="overflow">
            <NavBar />
            <div className="container-fluid margin">
             
            </div>
            <Footer className="footmargin"/>
          </div>
        );
    }
}

export default index
