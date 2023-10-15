import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@assets/css/component/Sidebar.css"
function Sidebar() {
const links = document.querySelectorAll(".nav-link");

  return (
   <div className="container-fluid ">
       <div className="row ">
           <div className="col-sm-auto bg-light sticky-left  ">
               <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-left">
                   <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                       <li className="nav-item">
                                       <a href="#" className="nav-link py-3 px-2 active" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="break" >
                                         <i className="bi bi-file-break"></i>
                                       </a>
                                     </li>
                       <li className="nav-item">
                           <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="person">
                               <i className="bi bi-person"></i>
                           </a>
                       </li>
                       <li className="nav-item">
                           <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="people">
                               <i className="bi bi-people"></i>
                           </a>
                       </li>
                       <li>
                           <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="camera">
                               <i className="bi bi-camera-reels"></i>
                           </a>
                       </li>
                       <li>
                           <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="star">
                               <i className="bi bi-star"></i>
                           </a>
                       </li>
                       <li>
                           <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="menu">
                               <i className="bi bi-menu-down"></i>
                           </a>
                       </li>
                       <li>
                           <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="gem">
                              <i className="bi bi-gem"></i>
                           </a>
                       </li>
                       <li>
                           <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="card">
                              <i className="bi bi-card-list"></i>
                           </a>
                       </li>

                       <li>
                           <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="chat">
                              <i className="bi bi-chat-right-text"></i>
                           </a>
                       </li>

                       <li>
                           <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="basket">
                              <i className="bi bi-basket"></i>
                           </a>
                       </li>
                       <li>
                           <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="tablet">
                              <i className="bi bi-tablet"></i>
                           </a>
                       </li>
                   </ul>
               </div>
           </div>
           <div className="col-sm p-3 min-vh-100">
           </div>
       </div>
   </div>
  );
}

export default Sidebar;