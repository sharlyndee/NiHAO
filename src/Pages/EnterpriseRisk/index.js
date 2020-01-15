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
                    <h4><u>Enterprise Risk Management</u></h4>
                    <div className="row">
                        <div className="col-11">
                    <p>
                        The Company’s Risk Management System <br /> <br />

                        The Board and its subsidiaries recognize the importance of identifying and controlling various risks to prevent undue or 
                        uncalculated negative impact on the Company. The Board also recognizes that risk oversight, implementation of comprehensive 
                        controls and assurance processes are a core function of the Board. <br /> <br />

                        The Risk Management Committee shall operationalize a Risk Management Program which shall be guided by the following: <br /> <br />

                        1. Establish risk profile and determine external and internal factors which can influence the Company’s risk profile; <br />
                        2. Identify and characterize specific threats/ risks;<br />
                        3. Assess the vulnerability of critical assets to specific threats/ risks;<br />
                        4. Determine the risks (i.e. expected likelihood and consequences of specific threats/ risks on specific assets;<br />
                        5. Identify ways on how to minimize said threats/ risks; <br />
                        6. Prioritize risk reduction measures based on strategy; <br />
                        7. Implement and monitor <br />
                        8. Assess effectiveness, conduct reviews and evaluation and make necessary adjustments <br />

                        The Risk Management Program shall be reviewed annually and all material changes to the Company’s risk profile shall be noted. 
                        To assist the Risk Management Committee in conducting the annual review, management and key executives are required to report to the Committee on: <br /><br />

                        1. any material risks identified; <br />
                        2. how the risks are being managed; <br />
                        3. the implementation of any risk management or internal control system; and <br />
                        4. whether any breaches of the risk management policies have occurred during the period. <br />
                        </p>
                        </div>
                    </div>
                </div>
                <Footer />
              


            </div>
        )
    }
}

export default index
