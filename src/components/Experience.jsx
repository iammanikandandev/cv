import React from "react";

const Experience = () => (
  <section className="p-5 bg-light" id="experience" aria-labelledby="experience-title">
    <div className="text-start">

      <header>
        <h3 className="mb-5 fw-medium" id="experience-title">
          Work Experience
        </h3>
      </header>

      {/* Experience 1 */}
      <article className="mb-5">
        <div className="d-flex justify-content-between flex-wrap">
          <div>
            <h4 className="mb-1">Senior Front-End Developer</h4>
            <p className="mb-2 fw-semibold">
              MOBO Media Private Limited, Tamil Nadu
            </p>
          </div>

          <p className="h6 text-muted">2020 – Present</p>
        </div>

      <ul className="list-group list-group-flush list-style col-lg-11">
        {[
          "Delivered scalable web applications while improving development workflow and project delivery efficiency.",
          
          "Developed reusable UI components using React.js and Bootstrap to enhance user experience and interface consistency.",
          
          "Integrated RESTful APIs with Laravel backend services to enable seamless data communication across applications.",
          
          "Customized Shopify themes & built responsive UI components, Handling Storefront API ,enhancing usability & visual consistency across storefronts.",
          
          "Optimized frontend performance using lazy loading, code splitting, and performance analysis tools.",
          
          "Implemented responsive and cross-browser compatible interfaces to ensure consistent experiences across devices."
        ].map((item, idx) => (
          <li key={idx} className="list-group-item border-0 pb-0">
            {item}
          </li>
        ))}
      </ul>
      </article>

      {/* Experience 2 */}
      <article className="mb-5">
        <div className="d-flex justify-content-between flex-wrap">
          <div>
            <h4 className="mb-1">Digital Product Lead</h4>
            <p className="mb-2 fw-semibold">
              Yaha Life Private Limited, Pondicherry
            </p>
          </div>

          <p className="h6 text-muted">2018 – 2020</p>
        </div>

        <ul className="list-group list-group-flush col-lg-11 list-style">
          <li className="list-group-item border-0 pb-0">
            Led development of web applications that increased platform engagement by 25%.
          </li>

          <li className="list-group-item border-0 pb-0">
            Coordinated cross-functional teams to streamline development workflows, improving delivery speed by 20%.
          </li>

          <li className="list-group-item border-0 pb-0">
            Managed multiple concurrent projects, maintaining 100% on-time delivery while ensuring high product quality.
          </li>
        </ul>
      </article>

      {/* Experience 3 */}
      <article className="mb-5">
        <div className="d-flex justify-content-between flex-wrap">
          <div>
            <h4 className="mb-1">Web Developer & Designer</h4>
            <p className="mb-2 fw-semibold">
              Eclat Technologies, Pondicherry
            </p>
          </div>

          <p className="h6 text-muted">2016 – 2018</p>
        </div>

        <ul className="list-group list-group-flush col-lg-11 list-style">
          <li className="list-group-item border-0 pb-0">
            Developed responsive websites using HTML5, CSS3, JavaScript, and Bootstrap.
          </li>

          <li className="list-group-item border-0 pb-0">
            Created high-fidelity UI mockups in Adobe Photoshop, helping stakeholders visualize final product designs.
          </li>
        </ul>
      </article>

      {/* Experience 4 */}
      <article className="mb-5">
        <div className="d-flex justify-content-between flex-wrap">
          <div>
            <h4 className="mb-1">Quality Controller (QC)</h4>
            <p className="mb-2 fw-semibold">
              HTC Global Services, Chennai
            </p>
          </div>

          <p className="h6 text-muted">2014 – 2016</p>
        </div>

        <ul className="list-group list-group-flush col-lg-11 list-style">
          <li className="list-group-item border-0">
            Conducted quality assurance testing for digital products, ensuring compliance with technical and project standards.
          </li>
        </ul>
      </article>

      {/* Key Achievements */}
      <div className="card shadow-sm rounded-3 mb-4">
        <div className="card-header bg-dark text-white py-3">
          <h5 className="mb-0 text-muted">
            <i className="bi bi-trophy-fill me-2 text-muted"></i>
            Key Achievements
          </h5>
        </div>

        <div className="card-body p-3">
          <ul className="list-group list-group-flush">

            <li className="list-group-item border-0 ps-1">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Successfully delivered 15+ web applications including React.js, Next.js platforms and e-commerce systems.
            </li>

            <li className="list-group-item border-0 ps-1">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Maintained a 95% client satisfaction rate through consistent product quality and on-time delivery.
            </li>

            <li className="list-group-item border-0 ps-1">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Optimized development workflows, reducing project timelines by 20%.
            </li>

            <li className="list-group-item border-0 ps-1">
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              Expertise in React.js, Next.js, Shopify, Bootstrap 5, Tailwind CSS, JavaScript, and jQuery.
            </li>

          </ul>
        </div>
      </div>

    </div>
  </section>
);

export default Experience;