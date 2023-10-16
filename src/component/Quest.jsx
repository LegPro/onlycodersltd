import React from "react";
import Row from "../utility/row.jsx";
import Column from "../utility/column.jsx";
import { motion } from "framer-motion";

function Quest() {
  return (
    <div className="col-12 ">
      <motion.div animate={{ y: [0, 100, 0] }}>
        <Row className="col-12">Quest</Row>
        <Row className="col-12 mt-3">
          <Column className="col-12 ">
            <div className="list-group-item d-flex justify-content-between align-items-start">
              <div className="html">
                <div className="grp">
                  <img className="img-logo" src="/assets/images/quest/q1.png" />
                </div>
              </div>
              <div className="ms-2 me-auto ">
                <div className="fw-bold">
                  <span>Posting Machine</span>
                </div>
                <span className="small">
                  Posted more than 20 profiles activities in one day
                </span>
              </div>
            </div>
            <hr />
          </Column>
        </Row>
      </motion.div>
    </div>
  );
}

export default Quest;
