import React, { Component } from 'react'
import "./module.style.css";
import NavBar from "../../Components/NavBar";
import SectionBackground from "../../Components/SectionBackground";
import Footer from "../../Pages/Footer";




class index extends Component {
    render() {
        return (
            <div className="overflow">
                <SectionBackground>
                    <NavBar />
                    <div className="container mar text-center">
                        <h3 className="white">Nihao Mineral Resources International, Inc</h3>
                        <p className="white">1505 Princeton Street, corner Shaw Boulevard, Barangay Wack-Wack, Greenhills East,</p>
                        <p className="white">Mandaluyong City</p>
                        <p className="white">Telephone number: (02) 8823-3158</p>
                        <p className="white">Telefax: (02) 8856-2013</p>
                        <p className="white">Email Address: nihao.8888@yahoo.com</p>
                    </div>
                </SectionBackground>
                <Footer />
               
            </div>
        )
    }
}

export default index
