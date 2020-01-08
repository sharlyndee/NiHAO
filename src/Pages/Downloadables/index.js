import React, { Component } from 'react'
import "./module.style.css";
import NavBar from "../../Components/NavBar";
import Footer from "../../Pages/Footer";



class index extends Component {
    render() {
        return (
            <div className="overflow">
                <NavBar />

                <div className="container-fluid downloadmargin ">
                    <h4><u>Manual on Corporate Governance</u></h4>
                    <div className="row">
                        <div className="col-9">
                        <p>Manual on Corporate Governance 2017</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-9">
                            <p>Manual on Corporate Governance as of December 31, 2014</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-9">
                            <p>Manual on Corporate Governance as of July 24, 2014</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                </div>
                <Footer />

                            
            </div>
        )
    }
}

export default index
