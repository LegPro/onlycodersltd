import React from 'react';
import Row from '../utility/row.jsx';
import Column from '../utility/column.jsx';

function Badge() {
  return (
                 <div className="col-12 ">
                        <Row className="col-12">
                            Badge
                        </Row>

                        <Row className="col-12 mt-3">
                            <Column className="col-12 ">
                                <div className="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="html">
                                        <div class="grp">
                                            <img className="img-logo" src="/assets/images/badge/b1.png" />
                                        </div>
                                    </div>
                                    <div className="ms-2 me-auto">
                                      <div className="fw-bold">
                                          <span>Globe Trotter</span>
                                      </div>
                                      <span className="small">Has joined at least 10 different groups</span>
                                    </div>
                                </div>
                                <hr />
                            </Column>
                        </Row>
                </div>
  );
}

export default Badge;