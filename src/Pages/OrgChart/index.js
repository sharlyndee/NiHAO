import React, { Component } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import "./module.style.css";

class index extends Component {
  render() {
    return (
      <div className="container marginorg">
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

        <div className="row justify-content-center margincorpo">
          <h1>
            <u>Corporate Structure</u>
          </h1>
        </div>
        <div className="chart">
          <Tree
            lineWidth={"2px"}
            lineColor={"gray"}
            label={<div className="orgNi orgchart">NiHao Mineral Resources International, Inc </div>}
          >
            <TreeNode
              label={<div className="orgchart">Mina Tiera Garcia, <br></br> Inc. (100%) </div>}
            ></TreeNode>
            <TreeNode
              label={<div className="orgchart">Bountiful Geomines, <br></br> Inc. (100%) </div>}
            ></TreeNode>
            <TreeNode
              label={<div className="orgchart">Oregalore, <br></br> Inc. (100%) </div>}
            >
              <TreeNode
                label={<div className="orgchart">Masbate13 <br></br> Philippines, Inc. (100%) </div>}
              ></TreeNode>
            </TreeNode>
          </Tree>
        </div>
      </div>
    );
  }
}

export default index;
