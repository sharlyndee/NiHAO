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
                    <h4><u>Corporate Social Responsibility</u></h4>
                
                <p>
                    NiHAO created and implemented a social development and management program whose objectives are: <br />
                    1. Community empowerment; <br /> 
                    2. To meet the minimum basic needs of the mining communities and enhance human welfare;<br /> 
                    3. To assist in the establishment of a self-sustained livelihood projects;  <br/> 
                    4. To provide construction materials and ensure availability of heavy equipment for various local social infrastructure projects;<br />
                    5. To assist in the preservation and protection of the communities’ socio-cultural values
                </p>
                <p className="mt-5">
                        Examples of actual programs being/ to be implemented: <br />
                        1. Skills training on driving and heavy equipment operation <br />
                        2. Training & micro-financing on mushroom production<br />
                        3. Training & micro-financing on handicraft making<br />
                        4. Training & micro-financing on baking and pastry<br />
                        5. Training & micro-financing production <br />
                        6. Training on entrepreneurship <br />
                        7. Training on fish production <br />
                        8. Furniture making (micro-financing) <br />
                        9. Hollow blocks making (micro-financing) <br />
                        10, Micro-financing of feeds <br />
                        11. Construction of drainage, canal <br />
                        12. Maintenance of river flood control <br />
                        13. Improvements in the Baranggay Hall <br />
                        14. Construction of small bridge <br />
                        15. Improvement of day care center <br />
                        16. Salary subsidy of daycare teachers <br />
                        17. Scholarship grants <br />
                        18. Provision of school supplies <br />
                        19. Assistance to school activities <br />
                        20. Completion and provision of water system facility <br />
                        21, Medical, Dental Mission <br />
                        22. Establishment of a Botika ng Baranggay <br />
                        23. Assistance to sports <br />
                        24. Vegetable gardening <br />
                        25. Provision of health instruments/ apparatus   <br />   
                </p>
                   
                </div>
                <Footer/>


            </div>
        )
    }
}

export default index
