import React, { Component } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import "./module.style.css";

class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center ">
          <h1 className="mb-5 mt-5 ">
            <u>Organizational Chart</u>
          </h1>
        </div>
        <div className="chart">
          <Tree
            lineWidth={"2px"}
            lineColor={"gray"}
            label={<div className="orgchart">Board of Directors </div>}
          >
            <TreeNode label={<div className="orgchart">President </div>}>
              <TreeNode
                label={
                  <div className="orgchart">
                    Chief Finance <br></br> Officer
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="orgchart">
                      Accounting <br></br> Department
                    </div>
                  }
                ></TreeNode>
              </TreeNode>
              <TreeNode
                label={<div className="orgchart">Information Officers </div>}
              >
                <TreeNode
                  label={
                    <div className="orgchart">
                      Investor Relations & <br></br> Compliance Department
                    </div>
                  }
                ></TreeNode>
              </TreeNode>
              <TreeNode
                label={<div className="orgchart">COO/Vice President </div>}
              >
                <TreeNode
                  label={<div className="orgchart">Operations Department</div>}
                ></TreeNode>
                <TreeNode
                  label={
                    <div className="orgchart">
                      Tenements and <br></br> Permitting Department
                    </div>
                  }
                ></TreeNode>
              </TreeNode>
            </TreeNode>
          </Tree>
        </div>

        <div className="row justify-content-center mt-5">
          <h1>Corporate Structure</h1>
        </div>
      </div>
    );
  }
}

export default index;
