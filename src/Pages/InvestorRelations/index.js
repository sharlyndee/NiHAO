import React, { Component } from 'react'
import "./module.style.css";
import NavBar from "../../Components/NavBar";
import Footer from "../../Pages/Footer";



class InvestorRelations extends Component {
  constructor() {
    super();
    this.state = {
      foreign: [
        {
          id: 1,
          name: "Filipino",
          shares: "879,422,181",
          percentage: "86.81"
        },
        {
          id: 2,
          name: "Foreign-OWNERSHIP Level",
          shares: "133,187,819",
          percentage: "13.19"
        },
        {
          id: 3,
          name: "Foreign-OWNERSHIP Limit",
          shares: " ",
          percentage: "40.00"
        },
      ],

      publicowner: [
        {
          id: 1,
          name: "Total Number of Shares owned by Public",
          shares: "380,115,445",
          percentage:"37.71"
        },
        {
          id: 2,
          name: "Total Number of Non-Public Shares",
          shares: "629,115,445",
          percentage: "62.29"
        },
        {
          id: 3,
          name: "Number of Shareholder",
          shares: "",
          percentage: "105"
        },
      ],
      shareholders: [
        {
          id: 1,
          name: "PCD Nominee Corp",
          nationality: "Filipino/Foreign",
          shares: "587,270,165",
          percentage:"58.15"
        },
        {
          id: 2,
          name: "Jerry C. Angpingg",
          nationality: "Filipino",
          shares: "327,100,000",
          percentage: "32.39"
        },
        {
          id: 3,
          name: "San-Ho Cheng",
          nationality: "Filipino",
          shares: "55,000,000",
          percentage: "5.45"
        },
      ],

      owners: [
        {
          id: 1,
          shareholder: "AP Securities, Inc",
          shares: "295,574,101",
          percentage:"29.27"
        },
        {
          id: 2,
          shareholder: "Premium Securities, Inc",
          shares: "73,802,900",
          percentage: "7.21"
        },
      ],

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
        },
         
      ]

    }
  }
    render() {
        return (
          <div className="container-fluid">
            <NavBar />
            <div className="container-fluid contmargin">

              <div className="row margininvestor overflow">
              <h2>
                <u>Investor Relations Programs</u>
              </h2>
            </div>
              <div className="row mt-5">
                <p>TOTAL OUTSTANDING SHARES</p> <br></br>
                
              </div>
              <div className='row'>
                <p>1,010,000,000 shares divided into Php 1.00 per value</p>
              </div>

              <div className='row'>
                <p>FOREIGN OWNERSHIP PERCENTAGE as of December 13, 2018</p>
              </div>

              <table class="table table-bordered tablestyle">
                <tr>
                  <td></td>
                  <td>Number of Shares</td>
                  <td>% of Issued Shares</td>
                </tr>

                {this.state.foreign.map(foreign => (
                  <tr>
                    <td>{foreign.name}</td>
                    <td>{foreign.shares}</td>
                    <td>{foreign.percentage}</td>
                  </tr>
                ))}
                <tr>
                  <td>Total</td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            


            <div className='row'>
              <p>FOREIGN OWNERSHIP PERCENTAGE as of December 13, 2018</p>
            </div>

            <table class="table table-bordered tablestyle">
              <tr>
                <td></td>
                <td>Number of Shares</td>
                <td>% of Issued Shares</td>
              </tr>

              {this.state.publicowner.map(publicowner => (
                <tr>
                  <td>{publicowner.name}</td>
                  <td>{publicowner.shares}</td>
                  <td>{publicowner.percentage}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
              </tr>
            </table>
            </div>

            <Footer />

          </div>
        );
    }
}

export default InvestorRelations
