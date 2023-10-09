import React from 'react';
import Row from '../utility/row.jsx';
import Column from '../utility/column.jsx';

function Member() {
  return (
                <div className="col-12 ">
                        <Row className="col-12">
                            Newest Member
                        </Row>

                        <Row className="col-12 mt-3">
                            <Column className="col-12 ">
                                <div className="list-group-item d-flex justify-content-between align-items-start">
                                   <span className="badge bg-primary rounded-pill">
                                       <img className="img-logo" src="/assets/images/avatar/1.png" />
                                   </span>
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
                                   <span className="badge bg-primary rounded-pill">
                                       <img className="img-logo" src="/assets/images/avatar/4.png" />
                                   </span>
                                  <div className="ms-2 me-auto">
                                    <div className="fw-bold">
                                        <span>
                                            Johny Depp
                                        </span>
                                    </div>
                                    <span className="small">@jeddI</span>
                                  </div>
                                </div>
                            </Column>
                        </Row>

                        <Row className="col-12 mt-3">
                            <Column className="col-12 ">
                                <div className="list-group-item d-flex justify-content-between align-items-start">
                                   <span className="badge bg-primary rounded-pill">
                                       <img className="img-logo" src="/assets/images/avatar/3.png" />
                                   </span>
                                  <div className="ms-2 me-auto">
                                    <div className="fw-bold">
                                        <span>
                                            Angelina Jolie
                                        </span>
                                    </div>
                                    <span className="small">@jolia</span>
                                  </div>
                                </div>
                            </Column>
                        </Row>
                        <Row className="col-12 mt-3">
                            <Column className="col-12 ">
                                <div className="list-group-item d-flex justify-content-between align-items-start">
                                   <span className="badge bg-primary rounded-pill">
                                       <img className="img-logo" src="/assets/images/avatar/5.png" />
                                   </span>
                                  <div className="ms-2 me-auto">
                                    <div className="fw-bold">
                                        <span>
                                            Tom Cruise
                                        </span>
                                    </div>
                                    <span className="small">@crutem</span>
                                  </div>
                                </div>
                            </Column>
                        </Row>
                        <Row className="col-12 mt-3">
                            <Column className="col-12 ">
                                <div className="list-group-item d-flex justify-content-between align-items-start">
                                   <span className="badge bg-primary rounded-pill">
                                       <img className="img-logo" src="/assets/images/avatar/2.png" />
                                   </span>
                                  <div className="ms-2 me-auto">
                                    <div className="fw-bold">
                                        <span>
                                            Kate Winslet
                                        </span>
                                    </div>
                                    <span className="small">@winkate</span>
                                  </div>
                                </div>
                            </Column>
                        </Row>

                </div>
  );
}

export default Member;
