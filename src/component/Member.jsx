import React from "react";
import Row from "../utility/row.jsx";
import Column from "../utility/column.jsx";
import { motion } from "framer-motion";

function Member() {
  return (
    <div className="col-12 ">
      <motion.div animate={{ y: [0, 100, 0] }}>
        <Row className="col-12">Newest Member</Row>

        <Row className="col-12 mt-3">
          <Column className="col-12 ">
            <div className="list-group-item d-flex justify-content-between align-items-start">
              <div className="html">
                <div className="bar">
                  <div className="circle">
                    <div className="mask"></div>
                    <img
                      className="img-logo"
                      src="/assets/images/avatar/1.png"
                    />
                    <div className=" poly small  d-flex align-items-center justify-content-center">
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <span>
                    Peter Parker
                    <span className="ms-1 badge rounded-pill blue">
                      <i className="bi bi-check2 "></i>
                    </span>
                  </span>
                </div>
                <span className="small"> @pparker </span>
              </div>
            </div>
          </Column>
        </Row>
        <Row className="col-12 mt-3">
          <Column className="col-12 ">
            <div className="list-group-item d-flex justify-content-between align-items-start">
              <div className="html">
                <div className="bar">
                  <div className="circle">
                    <div className="mask mask100"></div>
                    <img
                      className="img-logo"
                      src="/assets/images/avatar/4.png"
                    />
                    <div className=" poly small  d-flex align-items-center justify-content-center">
                      <span>4</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <span>Johny Depp</span>
                </div>
                <span className="small">@jeddI</span>
              </div>
            </div>
          </Column>
        </Row>

        <Row className="col-12 mt-3">
          <Column className="col-12 ">
            <div className="list-group-item d-flex justify-content-between align-items-start">
              <div className="html">
                <div className="bar">
                  <div className="circle">
                    <div className="mask"></div>
                    <img
                      className="img-logo"
                      src="/assets/images/avatar/3.png"
                    />
                    <div className=" poly small  d-flex align-items-center justify-content-center">
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <span>Angelina Jolie</span>
                </div>
                <span className="small">@jolia</span>
              </div>
            </div>
          </Column>
        </Row>
        <Row className="col-12 mt-3">
          <Column className="col-12 ">
            <div className="list-group-item d-flex justify-content-between align-items-start">
              <div className="html">
                <div className="bar">
                  <div className="circle">
                    <div className="mask"></div>
                    <img
                      className="img-logo"
                      src="/assets/images/avatar/5.png"
                    />
                    <div className=" poly small  d-flex align-items-center justify-content-center">
                      <span>1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <span>Tom Cruise</span>
                </div>
                <span className="small">@crutem</span>
              </div>
            </div>
          </Column>
        </Row>
        <Row className="col-12 mt-3">
          <Column className="col-12 ">
            <div className="list-group-item d-flex justify-content-between align-items-start">
              <div className="html">
                <div className="bar">
                  <div className="circle">
                    <div className="mask mask2"></div>
                    <img
                      className="img-logo"
                      src="/assets/images/avatar/2.png"
                    />
                    <div className=" poly small  d-flex align-items-center justify-content-center">
                      <span>2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <span>Kate Winslet</span>
                </div>
                <span className="small">@winkate</span>
              </div>
            </div>
          </Column>
        </Row>
      </motion.div>
    </div>
  );
}

export default Member;
