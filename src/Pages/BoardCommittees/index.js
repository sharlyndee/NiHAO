import React, { Component } from 'react'
import "./module.style.css";
import NavBar from "../../Components/NavBar";
import Footer from "../../Pages/Footer";




class index extends Component {
    constructor() {
        super();
        this.state = {
            audit: [
                {
                    id: 1,
                    name: "Leonardo B. Cua",
                    position: "Chairman"
                },
                {
                    id: 2,
                    name: "Antonio Victoriano F. Gregorio III",
                    position: "Member"
                },
                {
                    id: 3,
                    name: "Manuel G. Ong",
                    position: "Member"
                },

            ],
            governance: [
                {
                    id: 1,
                    name: "Manuel G. Ong",
                    position: "Chairman"
                },
                {
                    id: 2,
                    name: "Job Adrian M. Ambrosio",
                    position: "Member"
                },
                {
                    id: 3,
                    name: "Martin Antonio G. Zamora",
                    position: "Member"
                },

            ],
            compensation: [
                {
                    id: 1,
                    name: "Manuel G. Ong",
                    position: "Chairman"
                },
                {
                    id: 2,
                    name: "Antonio Victoriano F. Gregorio III",
                    position: "Member"
                },
                {
                    id: 3,
                    name: "Martin Antonio G. Zamora",
                    position: "Member"
                },

            ],
            nomination: [
                {
                    id: 1,
                    name: "Manuel G. Ong",
                    position: "Chairman"
                },
                {
                    id: 2,
                    name: "Antonio Victoriano F. Gregorio III",
                    position: "Member"
                },
                {
                    id: 3,
                    name: "Michael T. Defensor",
                    position: "Member"
                },

            ],
            risk: [
                {
                    id: 1,
                    name: "Manuel G. Ong",
                    position: "Chairman"
                },
                {
                    id: 2,
                    name: "Antonio Victoriano F. Gregorio III",
                    position: "Member"
                },
                {
                    id: 3,
                    name: "Martin Antonio G. Zamora",
                    position: "Member"
                },

            ],

        }
    }
    render() {
        return (
            <div className="overflow">
                <NavBar />

                <div className="container-fluid downloadmargin ">
                    <h4><u>Board Committees</u></h4>
                    <div className="row">
                        <div className="col-9">
                            <p>Audit Committee</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-9">
                            <p>Governance Committee</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-9">
                            <p>Risk Management Committee</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-9">
                            <p>Compensation Committee</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-9">
                            <p>Nomination Committee</p>
                        </div>
                        <div className="col-3">
                            <button>DOWNLOAD</button>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="row mt-5 mb-5">
                        <h4><u>Board Committee Members</u></h4>
                    </div>
                    <table class="table table-bordered tablestyle tablewidth">
                        <tr>
                            <td>Audit Committee</td>
                        </tr>
                        {this.state.audit.map(audit => (
                            <tr>
                                <td>{audit.name}</td>
                                <td className="text-center">{audit.position}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>Governance Committee</td>
                        </tr>
                        {this.state.governance.map(governance => (
                            <tr>
                                <td>{governance.name}</td>
                                <td className="text-center">{governance.position}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>Compensation Committee</td>
                        </tr>
                        {this.state.compensation.map(compensation => (
                            <tr>
                                <td>{compensation.name}</td>
                                <td className="text-center">{compensation.position}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>Nomination Committee</td>
                        </tr>
                        {this.state.nomination.map(nomination => (
                            <tr>
                                <td>{nomination.name}</td>
                                <td className="text-center">{nomination.position}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>Risk Management Committee</td>
                        </tr>
                        {this.state.risk.map(risk => (
                            <tr>
                                <td>{risk.name}</td>
                                <td className="text-center">{risk.position}</td>
                            </tr>
                        ))}
                        </table>
                </div>
                <Footer />
                


            </div>
        )
    }
}

export default index
