import React, { Component } from "react";
import search from "../../Assets/search.png";
import { Link } from "react-router-dom";
import "./module.style.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <nav class="w-100 navbar fixed-top navbar-expand-sm border ">
            <div className="logo">
              <p className="marg">
                <b>NiHAO MINERAL RESOURCES </b>
                <br></br>I N T E R N A T I O N A L &nbsp; I N C.
              </p>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <div className="col-2 offset-3">
                  <li class="nav-item active">
                    <Link to="/" class="nav-link navstyle">
                      <span class="sr-only">(current)</span>
                      HOME
                    </Link>
                  </li>
                </div>

                <div className="col-3 ">
                  <li class="nav-item active">
                    <Link to="/news" class="nav-link navstyle">
                      NEWS
                    </Link>
                  </li>
                </div>

                <div className="col-4 navstyle">
                  <li class="nav-item active">
                    <Link to="/investorrelations" class="nav-link">
                      INVESTOR RELATIONS
                    </Link>
                  </li>
                </div>

                <div className="col-3 navstyle">
                  <li class="nav-item active">
                    <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                      DOWNLOADABLES
                  </button>
                     
                      <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                      </div>
                    </div>
                  </li>
                </div>

                <div className="col-3 navstyle">
                  <li class="nav-item active">
                   
                    <Link to="/contactus" class="nav-link"> CONTACT US</Link>
                    
                  </li>
                </div>
              </ul>

              <div className="col-1 ">
                <button className="btn" type="submit">
                  <img src={search} alt=""></img>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
