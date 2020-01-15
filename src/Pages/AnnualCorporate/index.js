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
                    <h4><u>Annual Corporate Governance Report</u></h4>
                    <div className="row">
                        <div className="col-9">
                            <p>Integrated Annual Corporate Governance Reports</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-9">
                            <p>Annual Corporate Governance Report for year 2017</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-9">
                            <p>Annual Corporate Governance Report for year 2016</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-9">
                            <p>Annual Corporate Governance Report for year 2015</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-9">
                            <p>Annual Corporate Governance Report for year 2014</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-9">
                            <p>Annual Corporate Governance Report for year 2012</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <Footer />
                


            </div>
        )
    }
}

export default index
