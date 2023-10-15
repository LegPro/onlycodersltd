import React from 'react';
import Row from '../utility/row.jsx';
import Column from '../utility/column.jsx';
function FeedList() {
  return (
                 <div className="col-12 white p-3 mt-4">
                   <Row className="col-12 mt-3">
                       <Column className="col-12 ">
                           <div className="list-group-item d-flex justify-content-between align-items-start">
                              <div class="html">
                                <div class="bar">
                                    <div class="circle"> 
                                        <div class="mask mask100">
                                        </div>
                                        <img className="img-logo" src="/assets/images/feed/f1.png" />
                                    </div>
                                </div>
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
                                       <span className="small"> posted on update </span>
                                   </span>
                               </div>
                              <span className="small1"> 2 Year ago </span> <br />
                             </div>
                           </div>

                           <div>
                           <span className="small"> <a href="https://www.twitchtv.tv/blizzard">https://www.twitchtv.tv/blizzard</a> </span>
                           </div>
                           <div>
                                <img className="img" src="/assets/images/feed/bb1.png" />
                           </div>
                           <hr />
                           <div>
                                <div className="d-flex bd-highlight">
                                  <div className="p-2 flex-grow-1 bd-highlight"><span>🤪 100</span></div>
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