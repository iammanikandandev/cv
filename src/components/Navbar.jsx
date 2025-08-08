import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Clarence Taylor</span>
      <span className="d-none d-lg-block">
        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile-3.webp" alt="Profile" title="Profile" />
      </span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
       <ul className="navbar-nav">
          {[
            { label: 'About', href: 'about' },
            { label: 'Experience', href: 'experience' },
            { label: 'Technical Skills', href: 'technical-skills' },
            { label: 'Highlighted Projects', href: 'highlighted-projects' },
            { label: 'Education', href: 'education' },
          ].map((item) => (
            <li className="nav-item SMN_effect-15" key={item.href}>
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                className="nav-link js-scroll-trigger fw-medium text-uppercase cursor-pointer"
                activeClass="active"
                spy={true}
                offset={-0}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

    </div>
  </nav>
);

export default Navbar;
