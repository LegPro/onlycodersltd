import React from 'react';
import Row from '../utility/row.jsx';
import Column from '../utility/column.jsx';
function FeedList() {
  return (
                 <div className="col-12 white p-3 mt-4">
                   <Row className="col-12 ">
                       Popular Member
                   </Row>
                   <Row className="col-12 mt-3">
                       <Column className="col-12 ">
                           <div className="list-group-item d-flex justify-content-between align-items-start">
                              <div >
                              <span className="badge bg-primary rounded-pill">
                                  <img className="img-logo" src="/assets/images/feed/f1.png" />
                              </span>
                              </div>
                             <div className="ms-2 me-auto">
                               <div className="fw-bold">
                                   <span>
                                       Mariana Valintena
                                       <span className="ms-1 badge rounded-pill blue">
                                            <i className="bi bi-check2 "></i>
                                       </span>
                                       <span className="ms-1 badge rounded-pill bg-primary">
                                            Pro Member
                                       </span>
                                       <span className="small"> replied to the topic </span>
                                       Welcome to the Cosplayers Group Forum!
                                       <span className="small"> in the forum </span>
                                       Cosplayers Group Forum
                                   </span>
                               </div>
                              <span className="small1"> 1 Year ago </span> <br />
                             </div>
                           </div>

                           <div>
                           <span className="small"> Hello Everyone! </span>
                           </div>
                           <hr />
                           <div>
                                <div className="d-flex bd-highlight">
                                  <div className="p-2 flex-grow-1 bd-highlight"><span>😝 1</span></div>
                                  <div className="p-2 bd-highlight"> <span className="">0 comment</span></div>
                                  <div className="p-2 bd-highlight"><span>0 stories</span></div>
                                </div>
                           </div>
                       </Column>
                   </Row>

                 </div>

    );
  }

  export default FeedList;