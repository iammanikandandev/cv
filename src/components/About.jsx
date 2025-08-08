import React from 'react';

const About = () => (
  <section
    className="resume-section bg-theme-1 text-start p-5"
    id="about"
    aria-labelledby="about-title"
  >
    <div
      className="resume-section-content col-lg-10"
      itemScope
      itemType="https://schema.org/Person"
    >
      <header>
        <h1 className="text-muted h3 mb-1" id="about-title" itemProp="name">
          Manikandan S
        </h1>
        <h2 className="text-muted display-6" itemProp="jobTitle">
          Senior Front-End Web Developer
        </h2>
      </header>

      <section className="mt-5" aria-labelledby="summary-title">
        <h3 className="text-muted mb-2 h4" id="summary-title">Professional Summary</h3>
        <p className="text-muted fs-5" itemProp="description">
          Experienced <span className='fw-semibold'>Senior Front-End Developer</span> with 9+ years of expertise in
          designing and developing scalable, responsive web applications. Skilled in 
          <span className='fw-semibold'>front-end and back-end technologies</span>, <span className='fw-semibold'>UI/UX principles</span>,
          and cross-functional collaboration to deliver high-quality digital solutions aligned with
          business objectives.
        </p>
      </section>

      <address className="mt-4" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
        <ul className="list-group">
        
          <li className="list-group-item bg-transparent text-muted ps-0 border-0">
            <i className="bi bi-envelope-fill me-3" aria-hidden="true"></i>
            <a
              href="mailto:iammanikandan90@gmail.com"
              itemProp="email"
              className="text-decoration-none text-muted"
            >
              iammanikandan90@gmail.com
            </a>
          </li>

         <li className="list-group-item bg-transparent text-muted ps-0 border-0">
            <i className="bi bi-telephone-fill me-3" aria-hidden="true"></i>
            <a href="tel:+919942210770" itemProp="telephone" className="text-decoration-none text-muted">
              +91 9942210770
            </a>
          </li>

          <li className="list-group-item bg-transparent text-muted ps-0 border-0">
            <i className="bi bi-linkedin me-3" aria-hidden="true"></i>
            <a
              href="https://www.linkedin.com/in/ms90/"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
              className="text-decoration-none text-muted"
            >
              linkedin.com/in/ms90
            </a>
          </li>
          <li className="list-group-item bg-transparent text-muted ps-0 border-0">
            <i className="bi bi-globe-americas me-3" aria-hidden="true"></i>
            <a
              href="http://iammanikandan.ct.ws/"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="url"
              className="text-decoration-none text-muted"
            >
              iammanikandan.ct.ws
            </a>
          </li>
          <li className="list-group-item bg-transparent text-muted ps-0 border-0">
            <i className="bi bi-github me-3" aria-hidden="true"></i>
            <a
              href="https://github.com/iammanikandandev"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
              className="text-decoration-none text-muted"
            >
              github.com/iammanikandandev
            </a>
          </li>
        </ul>
      </address>
    </div>
  </section>
);

export default About;
