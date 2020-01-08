import React, { Component } from "react";
import "./module.style.css";

class index extends Component {
  constructor() {
    super();
    this.state = {
      capital: [
        {
          id: 1,
          name: "Filipino",
          shares: "879,422,181",
          percentage: "86.81"
        },
        {
          id: 2,
          name: "Foreign",
          shares: "133,187,819",
          percentage: "13.19"
        },
        {
          id: 3,
          name: "Treasury Share",
          shares: "0",
          percentage: "0"
        }
      ],
      percentage: [
        {
          id: 1,
          name: "Total Number of Shares owned by Public",
          shares: "380,884,555",
          percentage: "37.71"
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
          shares: "105",
          percentage: "0"
        }
      ]
    };
  }
  ConvertToNum() {
    var str = this.state.capital.map(({ shares }) => shares);
    var sum = 0;
    str.map(share => {
      console.log(share)
      var res = share.replace(/,/g, "");
      res = parseInt(res);
      sum += res;
      console.log(res, typeof res, sum);
    })

    return sum;
  }

  render() {
    
    
    return (
      <div className="container marginshare">
        <div className="row justify-content-center mb-4">
          <p className="heading">
            <u>Shareholding Structure</u>
          </p>
        </div>
        <div className="row mb-5">
          <p>
            NIHAO MINERAL RESOURCES INTERNATIONAL, INC <br></br>
            SHAREHOLDING STRUCTURE as of December 31, 2018 <br></br>
            AUTHORIZED CAPITAL STOCK: <br></br>
            1,010,000,000 shares divided into Php 1.00 per value
          </p>
        </div>

        <div className="row">
          <p>ISSUED PAID-UP CAPITAL</p>
        </div>

        <table class="table table-bordered tablestyle">
          <tr>
            <td></td>
            <td>Number of Shares</td>
            <td>% of Issued Shares</td>
          </tr>

          {this.state.capital.map(capital => (
            <tr>
              <td>{capital.name}</td>
              <td>{capital.shares}</td>
              <td>{capital.percentage}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{this.ConvertToNum()}</td>
            <td>{this.state.capital.percentage}</td>
          </tr>
        </table>

        <div className="row">
          <p>PUBLIC OWNERSHIP PERCENTAGE</p>
        </div>
        <table class="table table-bordered tablestyle">
          <tr>
            <td>Category of Shareholders</td>
            <td>Number of Shares</td>
            <td>% of Issued Shares</td>
          </tr>

          {this.state.percentage.map(percentage => (
            <tr>
              <td>{percentage.name}</td>
              <td>{percentage.shares}</td>
              <td>{percentage.percentage}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default index;
