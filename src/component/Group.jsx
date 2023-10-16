import React from "react";
import Row from "../utility/row.jsx";
import Column from "../utility/column.jsx";
import { motion } from "framer-motion";

function Group() {
  return (
    <div className="col-12 ">
      <motion.div animate={{ y: [0, 100, 0] }}>
        <Row className="col-12">Popular Groups</Row>
        <Row className="col-12 mt-3">
          <Column className="col-10 ">
            <div className="list-group-item d-flex justify-content-between align-items-start">
              <div className="html">
                <div className="grp">
                  <img
                    className="img-logo"
                    src="/assets/images/group_icons/g1.png"
                  />
                </div>
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <span>Street Artists</span>
                </div>
                <span className="small">4 members</span>
              </div>
            </div>
          </Column>
          <Column className="col-2 justify-content-center ms-2">
            <div>
              <span>
                <i className="bi bi-globe brown "></i>
              </span>
            </div>
          </Column>
        </Row>
        <Row className="col-12 mt-3">
          <Column className="col-10 ">
            <div className="list-group-item d-flex justify-content-between align-items-start">
              <div className="html">
                <div className="grp">
                  <img
                    className="img-logo"
                    src="/assets/images/group_icons/g2.png"
                  />
                </div>
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <span>Cosplayers of the world</span>
                </div>
                <span className="small">3 members</span>
              </div>
            </div>
          </Column>
          <Column className="col-2 justify-content-center ms-2">
            <div>
              <span>
                <i className="bi bi-globe brown "></i>
              </span>
            </div>
          </Column>
        </Row>
        <Row className="col-12 mt-3">
          <Column className="col-10 ">
            <div className="list-group-item d-flex justify-content-between align-items-start">
              <div className="html">
                <div className="grp">
                  <img
                    className="img-logo"
                    src="/assets/images/group_icons/g3.png"
                  />
                </div>
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <span>Stream Designer</span>
                </div>
                <span className="small">3 members</span>
              </div>
            </div>
          </Column>
          <Column className="col-2 justify-content-center ms-2">
            <div>
              <span>
                <i className="bi bi-globe brown "></i>
              </span>
            </div>
          </Column>
        </Row>
        <Row className="col-12 mt-3">
          <Column className="col-10 ">
            <div className="list-group-item d-flex justify-content-between align-items-start">
              <div className="html">
                <div className="grp">
                  <img
                    className="img-logo"
                    src="/assets/images/group_icons/g4.png"
                  />
                </div>
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <span>Gaming Watchtower</span>
                </div>
                <span className="small">3 members</span>
              </div>
            </div>
          </Column>
          <Column className="col-2 justify-content-center ms-2">
            <div>
              <span>
                <i className="bi bi-shield-lock brown "></i>
              </span>
            </div>
          </Column>
        </Row>
        <Row className="col-12 mt-3">
          <Column className="col-10 ">
            <div className="list-group-item d-flex justify-content-between align-items-start">
              <div className="html">
                <div className="grp">
                  <img
                    className="img-logo"
                    src="/assets/images/group_icons/g5.png"
                  />
                </div>
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <span>Living in Japan</span>
                </div>
                <span className="small">2 members</span>
              </div>
            </div>
          </Column>
          <Column className="col-2 justify-content-center ms-2">
            <div>
              <span>
                <i className="bi bi-globe brown "></i>
              </span>
            </div>
          </Column>
        </Row>
      </motion.div>
    </div>
  );
}

export default Group;
