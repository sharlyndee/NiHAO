import React, { Component } from 'react'
import "./module.style.css";


class index extends Component {
    constructor() {
        super();
        this.state = {
            capital: [
                {
                    id: 1,
                    name: '  ',
                    shares: 'Number of Shares',
                    percentage: '% of Issued Shares'
                },
                {
                    id: 2,
                    name: 'Filipino',
                    shares: '876,812,181',
                    percentage:'86.81'
                },
                {
                    id: 3,
                    name: 'Foreign',
                    shares: '133,187,819',
                    percentage: '13.19'
                },
                {
                    id: 4,
                    name: 'Treasury Share',
                    shares: '0',
                    percentage: '0'
                },
                


            ]
        }
    }
    render() {
        return (
            <div className='container margin'>
                <div className='row justify-content-center mb-4'>
                    <p className='heading'><u>Shareholding Structure</u></p>
                </div>
                <div className='row mb-5'>
                    <p>
                        NIHAO MINERAL RESOURCES INTERNATIONAL, INC <br></br>
                        SHAREHOLDING STRUCTURE as of December 31, 2018 <br></br>
                        AUTHORIZED CAPITAL STOCK: <br></br>
                        1,010,000,000 shares divided into Php 1.00 per value
                    </p>
                </div>

                <div className='row'>
                    <p>ISSUED PAID-UP CAPITAL</p>
                </div>
                           
                <table class="table table-bordered  tablestyle ">
                    <thead>
                        <tr>
                            <th scope="col">   </th>
                            <th scope="col">Number of Shares</th>
                            <th scope="col">% of Issued Shares</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Filipino</th>
                            <td>876,812,181</td>
                            <td>86.81</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">Foreign</th>
                            <td>133,187,819</td>
                            <td>13.19</td>
                            
                        </tr>
                        <tr>
                            <th scope="row">Treasury Share</th>
                            <td >0</td>
                            <td>0</td>
                        </tr>

                        <tr>
                            <th scope="row">Total</th>
                            <td >1,010,000,000</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>

                <div className='row'>
                    <p>PUBLIC OWNERSHIP PERCENTAGE</p>
                </div>

                <table class="table table-bordered  tablestyle ">
                    <thead>
                        <tr>
                            <th scope="col"> Category of Shareholders  </th>
                            <th scope="col">Number of Shares</th>
                            <th scope="col">% of Issued Shares</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Total Number of Shares owned by Public</th>
                            <td>380,884,555</td>
                            <td>37.71</td>

                        </tr>
                        <tr>
                            <th scope="row">Total Number of Non-Public Shares</th>
                            <td>629,115,445</td>
                            <td>62.29</td>

                        </tr>
                        <tr>
                            <th scope="row">Number of Shareholder</th>
                            <td >105</td>
                            <td>0</td>
                        </tr>

                        
                    </tbody>
                </table>
            
                 </div>   
    
           
        )
    }
}

export default index
