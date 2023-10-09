import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><i className="bi bi-shop-window"></i><span className="ms-4">SAMPLE PAGE </span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item ms-4">
              <a className="nav-link " href="#"><i className="bi bi-grid"></i>
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link active" href="#">Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown ms-4">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Features</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Feature 1</a>
                <a className="dropdown-item" href="#">Feature 2</a>
              </div>
            </li>
            <li className="nav-item dropdown ms-4">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">More</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
            <li className="nav-item d-flex ms-4">
                <form className="d-flex flex-row position-relative ms-5  ">
                    <input type="search" className="ms-5 form-control searchbar flex-grow-1" id="srch" placeholder="Enter your search here..." />
                    <button className="btn btn-outline-success border-0 position-absolute end-0" type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            </li>
          </ul>
          <form className="d-flex ms-4">
            <button className="btn btn-secondary my-2 my-sm-0 bg-info" type="submit">Login</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

