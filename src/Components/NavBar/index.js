import React, { Component } from "react";
import search from "../../Assets/search.png";
import "./module.style.css";

export class index extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bghome">
          <nav class="w-100 navbar position-fixed navbar-expand-lg  border p-4 ">
            <div className="logo">
              <p className='marg'>
                <b>NiHAO MINERAL RESOURCES </b>
                <br></br>I N T E R N A T I O N A L &nbsp; I N C.
              </p>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <div className="col-3 offset-1">
                  <li class="nav-item active">
                    <a class="nav-link navstyle" href="google.com">
                      HOME <span class="sr-only">(current)</span>
                    </a>
                  </li>
                </div>

                <div className="col-3 ">
                  <li class="nav-item active">
                    <a class="nav-link navstyle" href="google.com">
                      NEWS
                    </a>
                  </li>
                </div>

                <div className="col-6 navstyle">
                  <li class="nav-item active">
                    <a class="nav-link" href="google.com">
                      INVESTOR RELATIONS
                    </a>
                  </li>
                </div>

                <div className="col-4 navstyle">
                  <li class="nav-item active">
                    <a class="nav-link" href="google.com">
                      DOWNLOADABLES
                    </a>
                  </li>
                </div>

                <div className="col-4 navstyle">
                  <li class="nav-item active">
                    <a class="nav-link" href="google.com">
                      CONTACT US
                    </a>
                  </li>
                </div>
              </ul>

              <div className="col-4 offset-4">
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

export default index;
