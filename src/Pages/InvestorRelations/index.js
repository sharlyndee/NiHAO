import React, { Component } from 'react'
import "./module.style.css";
import NavBar from "../../Components/NavBar";
import Footer from "../../Pages/Footer";
import Stockholders from "../../Pages/InvestorRelationStockholders";




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

     

    }
  }
    render() {
        return (
          <div className="container-fluid overflow">
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
                <tr className="text-center">
                  <td></td>
                  <td>Number of Shares</td>
                  <td>% of Issued Shares</td>
                </tr>

                {this.state.foreign.map(foreign => (
                  <tr>
                    <td>{foreign.name}</td>
                    <td className="text-center">{foreign.shares}</td>
                    <td className="text-center">{foreign.percentage}</td>
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
              <tr className="text-center">
                <td>Category of Shareholders</td>
                <td>Number of Shares</td>
                <td>% of Issued Shares</td>
              </tr>

              {this.state.publicowner.map(publicowner => (
                <tr>
                  <td>{publicowner.name}</td>
                  <td className="text-center" >{publicowner.shares}</td>
                  <td className="text-center">{publicowner.percentage}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
              </tr>
              </table>
              


              <div className='row'>
                <p>SHAREHOLDERS OWNING 5 PERCENT OR MORE as of December 31, 2018</p>
              </div>

              <table class="table table-bordered tablestyle">
                <tr className="text-center">
                  <td>Shareholder</td>
                  <td>Nationality</td>
                  <td>Number of Shares</td>
                  <td>% of Issued Shares</td>

                </tr>

                {this.state.shareholders.map(shareholders => (
                  <tr>
                    <td>{shareholders.name}</td>
                    <td className="text-center">{shareholders.nationality}</td>
                    <td className="text-center">{shareholders.shares}</td>
                    <td className="text-center">{shareholders.percentage}</td>

                  </tr>
                ))}
                
              </table>


              <div className='row'>
                <p>BENEFICIAL OWNERS OWNING 5 PERCENT OR MORE as of December 31, 2018</p>
              </div>

              <table class="table table-bordered tablestyle">
                <tr className="text-center">
                  <td>Shareholder</td>
                  <td>Number of Shares</td>
                  <td>% of Issued Shares</td>

                </tr>

                {this.state.owners.map(owners => (
                  <tr>
                    <td>{owners.shareholder}</td>
                    <td className="text-center">{owners.shares}</td>
                    <td className="text-center">{owners.percentage}</td>

                  </tr>
                ))}
              </table>

              <p>
                The shares of NIHAO MINERAL RESOURCES INTERNATIONAL, INC. are listed and traded in the Philippine 
                Stock Exchange under the code of NI.
              </p>
              <Stockholders />

            </div>

            <Footer />

          </div>
        );
    }
}

export default InvestorRelations
