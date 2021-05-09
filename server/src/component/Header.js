import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
    <div className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          <span className="fs-4">Simple header</span>
          </Link>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <Link href="/" className="nav-link text-secondary">
                <img className="bi d-block mx-auto mb-1" width="24" height="24"></img>
                Home
              </Link>
            </li>
            
            <li>
              <Link href="/order" className="nav-link text-white">
                <img className="bi d-block mx-auto mb-1" width="24" height="24"></img>
                Orders
              </Link>
            </li>
            <li>
              <Link href="/order" className="nav-link text-white">
                <img className="bi d-block mx-auto mb-1" width="24" height="24"></img>
                Products
              </Link>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <img className="bi d-block mx-auto mb-1" width="24" height="24"></img>
                Customers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
   
    </header>
  );
}

export default Header;
