import React from "react";
import "@assets/css/component/Feed.css"
import Row from '../utility/row.jsx';
import Column from '../utility/column.jsx';

function Feed() {
  return (
    <div className="d-flex bd-highlight col-12 border rounded white ">
      <Row className="col-12 w-100 h-50 p-2">
        <Column className="col-6 d-flex justify-content-between align-items-start mt-2 ms-4"><div>All Updates</div></Column>
        <Column className="col-6 d-flex justify-content-between align-items-center ms-5">
          <div>
          <div className="form-group ">
            <div class="show white w-25">show</div>
            <select className="form-control form-select white" id="demo">
              <option defaultValue>Everything</option>
              <option>Recent</option>
              <option>Past</option>
            </select>
          </div>
          </div>
        </Column>
      </Row>
    </div>
  );
}

export default Feed;