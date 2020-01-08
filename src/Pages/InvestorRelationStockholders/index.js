import React, { Component } from 'react'
import "./module.style.css";


export class index extends Component {
    constructor() {
        super();
        this.state = {
            topstockholder: [
                {
                    id: 1,
                    stockholder: "PCD Nominee Corporation (Filipino)",
                    shares: "544,438,078",
                    percentage: "53.91"
                },
                {
                    id: 2,
                    stockholder: "Jerry C. Angping",
                    shares: "327,100,000",
                    percentage: "32.39"
                },
                {
                    id: 3,
                    stockholder: "San-Ho Cheng",
                    shares: "55,000,000",
                    percentage: "5.45"
                },
                {
                    id: 4,
                    stockholder: "PCD Nominee Corporation (Foreign)",
                    shares: "42,832,087",
                    percentage: "4.24"
                },
                {
                    id: 5,
                    stockholder: "Macquarie Bank Limited",
                    shares: "33,000,000",
                    percentage: "3.27"
                },
                {
                    id: 6,
                    stockholder: "Chia Kim Teck",
                    shares: "2,349,732",
                    percentage: "0.23"
                },
                {
                    id: 7,
                    stockholder: "Diana Kaye Angping",
                    shares: "1,000,000",
                    percentage: "0.10"
                },
                {
                    id: 8,
                    stockholder: "Jerry C. Angpingg ITF Christian Angping",
                    shares: "1,000,000",
                    percentage: "0.10"
                },
                {
                    id: 9,
                    stockholder: "Jerry C. Angpingg ITF John Isaac Angping",
                    shares: "1,000,000",
                    percentage: "0.10"
                },
                {
                    id: 10,
                    stockholder: "Ma. Rhodora V. Angping",
                    shares: "1,000,000",
                    percentage: "0.10"
                },
                {
                    id: 11,
                    stockholder: "Michael T. Defensor",
                    shares: "160,000",
                    percentage: "0.10"
                },
                {
                    id: 12,
                    stockholder: "Jose Mariano Crisostomo",
                    shares: "100,000",
                    percentage: "0.01"
                },
                {
                    id: 13,
                    stockholder: "Leoben Luis T. Evangelista",
                    shares: "100,000",
                    percentage: "0.01"
                },
                {
                    id: 14,
                    stockholder: "Fe G. Fong",
                    shares: "100,000",
                    percentage: "0.01"
                },
                {
                    id: 15,
                    stockholder: "Ma. Carla Remedios E. Miranda",
                    shares: "100,000",
                    percentage: "0.01"
                },
                {
                    id: 16,
                    stockholder: "Howard C. Saavedra",
                    shares: "100,000",
                    percentage: "0.01"
                },
                {
                    id: 17,
                    stockholder: "Nicanor S. Jorge",
                    shares: "80,000",
                    percentage: "0.01"
                },
                {
                    id: 18,
                    stockholder: "Daniel C. Go",
                    shares: "50,000",
                    percentage: "0.00"
                },
                {
                    id: 19,
                    stockholder: "Bobby S. Gonzales",
                    shares: "50,000",
                    percentage: "0.00"
                },
                {
                    id: 20,
                    stockholder: "Roxanne Lee",
                    shares: "50,000",
                    percentage: "0.00"
                }

            ]
        }
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <p>LIST OF TOP TWENTY (20) STOCKHOLDERS AS OF DECEMBER 31, 2018</p>
                </div>

                <table class="table table-bordered tablestyle">
                    <tr className="text-center">
                        <td></td>
                        <td>Stockholder</td>
                        <td>Number of Shares</td>
                        <td>% of Issued Shares</td>

                    </tr>

                    {this.state.topstockholder.map(topstockholder => (
                        <tr>
                            <td className="text-center">{topstockholder.id}</td>
                            <td>{topstockholder.stockholder}</td>
                            <td className="text-center">{topstockholder.shares}</td>
                            <td className="text-center">{topstockholder.percentage}</td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td></td>
                        <td>Sub-Total</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Other Stockholders</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><b>TOTAL</b></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Less: Treasury Share</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><b>TOTAL ISSUED AND OUTSTANDING SHARES</b></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>


            </div>
        )
    }
}

export default index
