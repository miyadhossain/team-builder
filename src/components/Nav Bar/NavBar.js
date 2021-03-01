import React from 'react';

const NavBar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand auctionNav" href="#"><span className="auction">Team Builder</span></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav px-5">
                  <li className="nav-item auction-hover">
                    <a className="nav-link auction-nav-link" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item auction-hover">
                    <a className="nav-link auction-nav-link" href="#product">Players</a>
                  </li>
                  <li className="nav-item auction-hover">
                    <a className="nav-link auction-nav-link" href="#">Auction</a>
                  </li>
                  <li className="nav-item auction-hover">
                    <a className="nav-link auction-nav-link" href="#">About</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
};

export default NavBar;