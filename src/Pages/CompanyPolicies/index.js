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
                    <h4><u>Company Policies</u></h4>
                    <div className="row">
                        <div className="col-11">
                            <p>
                                Whistle-blowing policy <br />  <br />

                                The Company has no specific whistle blowing policy  <br /> <br />

                                Conflict of Interest Policy <br /> <br />

                                Employees have a duty of loyalty to the Company and are therefore expected to always 
                                act in the Company’s best interests. A conflict arises when the personal interests or 
                                activities of an employee influence or have the potential to influence the exercise of 
                                his or her judgment in the performance of his or her duties. Conflicts of interest and 
                                even the appearance of a conflict of interest may compromise the Company’s reputation 
                                and must be avoided.  <br /> <br />

                                Nevertheless, the Company also respects its employees' right to privacy in their personal 
                                activities and financial affairs. It is the responsibility of each employee to ensure that 
                                his or her personal conduct complies with the following principles and make the proper disclosures, 
                                whenever applicable, to allow the Company to determine and address conflicts of interests issues.  <br /> <br />

                                Insider Trading Policy  <br /> <br />

                                The Company is committed to protecting security holder investments and expects all employees to  
                                comply with the applicable reporting obligations and trading restrictions imposed by the Company, 
                                the Securities and Exchange Commission or the Philippine Stock Exchange.  Employees who are in possession 
                                of material information about the Company must not trade in securities of the Company until such information 
                                is generally and publicly available.  Providing inside information to others who then trade on it is also 
                                strictly prohibited.  Employees should make themselves familiar with the Corporation's Trading and Disclosure 
                                Policies.  <br /> <br />

                                Related Party Transaction Policy  <br /> <br />

                                The Board of Directors is mandated to formulate and implement policies and procedures that would ensure 
                                the integrity and transparency of related party transactions between and among the Corporation, joint ventures,
                                 subsidiaries, associates, affiliates, major shareholders, officers and directors, including their spouses, 
                                 children and dependent siblings and parents, and of interlocking director relationships by members of the Board;  <br /> <br />

                                Possible and actual conflicts of interest between the Company and the Board and Management must be identified in 
                                all transactions and contracts entered into by the Company.  In case such exists and it is determined that the 
                                contract or transaction is vital or beneficial the Company, the approval process must be in consonance with certain 
                                standards on Related Party Transactions.  <br /> <br />

                                The Company recognizes that Related Party Transactions can present potential or actual conflicts of interest and 
                                may raise questions about whether such transactions are consistent with the Company’s and its stockholders’ best 
                                interests. Policies mandating the review and approval of Related Party Transactions should be adopted in order to 
                                set forth the procedures under which certain transactions must be reviewed and approved or ratified.  <br /> <br />

                                Policy and Data relating to health, safety and welfare of employees, including company sponsored trainings  <br /> <br />

                                The Company values the diversity of its employees, customers and suppliers and is committed to providing equal 
                                treatment in all aspects of the business. Abusive, harassing or offensive conduct is unacceptable, whether verbal,
                                 physical, visual or otherwise. The Company will not tolerate any conduct that is discriminatory or harassing or 
                                 which otherwise compromises an individual's human rights.  <br /> <br />

                                The Company complies with all applicable health and safety laws and regulations as part of its commitment to providing
                                 its employees with a safe and healthy work environment. In this regard, employees are expected to work in a safe manner
                                  with due regard for their personal safety as well as that of their co-workers.  <br />
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
