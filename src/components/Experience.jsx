import React from 'react';

const Experience = () => (
  <section
    className="p-5 bg-light"
    id="experience"
    aria-labelledby="experience-title"
  >
    <div className=" text-start">
      <header>
        <h3 className="mb-5 fw-medium" id="experience-title">
          Work Experience
        </h3>
      </header>

      {/* Experience 1 */}
      <article itemScope itemType="https://schema.org/JobPosting" className="mb-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-0" itemProp="title">Senior Front-End Web Developer</h4>
            <p className="mb-2" itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">MOBO Media Private Limited</span>, Tamil Nadu
            </p>
          </div>
          <div>
            <p className="h6">
              <time dateTime="2020" itemProp="datePosted">2020</time> –{" "}
              <time dateTime="2025" itemProp="validThrough">Present</time>
            </p>
          </div>
        </div>
        <ul className="list-group list-group-flush list-style  col-lg-11" itemProp="description">
          {[
            "Led a team of 5 developers in building scalable web applications, improving project delivery speed by 20%.",
            "Designed and developed responsive UI components using ReactJS and Bootstrap, enhancing UX by 30%.",
            "Collaborated with backend teams to implement RESTful APIs, resulting in a 25% increase in system efficiency.",
            "Developed & maintained user-centric e-commerce apps, boosting user engagement by 30% and conversions by 20%.",
            "Improved load times by 50% using Google PageSpeed Insights, WebPageTest, and GTmetrix.",
            "Ensured seamless experiences across browsers and devices, leading to a 15% increase in retention."
          ].map((item, idx) => (
            <li key={idx} className="list-group-item border-0  pb-0">{item}</li>
          ))}
        </ul>
      </article>

      {/* Experience 2 */}
      <article itemScope itemType="https://schema.org/JobPosting" className="mb-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-0" itemProp="title">Digital Product Lead</h4>
            <p className="mb-2" itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">Yaha Life Private Limited</span>, Pondicherry
            </p>
          </div>
          <div>
            <p className="h6">
              <time dateTime="2018" itemProp="datePosted">2018</time> –{" "}
              <time dateTime="2020" itemProp="validThrough">2020</time>
            </p>
          </div>
        </div>
        <ul className="list-group list-group-flush col-lg-11 list-style" itemProp="description">
          <li className="list-group-item border-0  pb-0">
            Spearheaded the creation and management of web applications, boosting user engagement and functionality, contributing to a 25% increase in active users.
          </li>
          <li className="list-group-item border-0  pb-0">
            Fostered collaboration across multi-disciplinary teams, streamlining development processes, which resulted in 20% faster project delivery without compromising on quality.
          </li>
          <li className="list-group-item border-0  pb-0">
            Successfully managed multiple projects simultaneously, meeting tight deadlines and delivering 100% on-time project completion while maintaining high quality.
          </li>
        </ul>
      </article>

      {/* Experience 3 */}
      <article itemScope itemType="https://schema.org/JobPosting" className="mb-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-0" itemProp="title">Web Developer & Designer</h4>
            <p className="mb-2" itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">Eclat Technologies</span>, Pondicherry
            </p>
          </div>
          <div>
            <p className="h6">
              <time dateTime="2016" itemProp="datePosted">2016</time> –{" "}
              <time dateTime="2018" itemProp="validThrough">2018</time>
            </p>
          </div>
        </div>
        <ul className="list-group list-group-flush  col-lg-11 list-style" itemProp="description">
          <li className="list-group-item border-0  pb-0 ">
            Built and deployed responsive websites using HTML5, CSS3, Bootstrap 5, and modern frameworks.
          </li>
          <li className="list-group-item border-0  pb-0">
            Created high-fidelity mockups using Adobe Photoshop, incorporating mobile device previews to help clients visualize the final design before development.
          </li>
        </ul>
      </article>

      {/* Experience 4 */}
      <article itemScope itemType="https://schema.org/JobPosting" className="mb-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-0" itemProp="title">Quality Controller (QC)</h4>
            <p className="mb-2" itemProp="hiringOrganization" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">HTC Global Services</span>, Chennai
            </p>
          </div>
          <div>
            <p className="h6">
              <time dateTime="2014" itemProp="datePosted">2014</time> –{" "}
              <time dateTime="2016" itemProp="validThrough">2016</time>
            </p>
          </div>
        </div>
        <ul className="list-group list-group-flush col-lg-11 list-style" itemProp="description">
          <li className="list-group-item border-0 ">
            Performed quality assurance checks for digital and technical products, ensuring adherence to project specifications and standards.
          </li>
        </ul>
      </article>





<div className="card shadow-sm rounded-3 mb-4">
  <div className="card-header text-white py-3">
    <h5 className="mb-0"><i className="bi bi-trophy-fill me-2"></i>Key Achievements</h5>
  </div>
  <div className="card-body p-3">
    <ul className="list-group list-group-flush">
      <li className="list-group-item border-0 ps-1">
        <i className="bi bi-check-circle-fill text-success me-2"></i>
        Successfully led and delivered 15+ web projects, including 2+ major ReactJS-based applications.
      </li>
      <li className="list-group-item border-0  ps-1">
        <i className="bi bi-check-circle-fill text-success me-2"></i>
        Maintained a 95% client satisfaction rate through consistent quality and timely delivery.
      </li>
      <li className="list-group-item border-0  ps-1">
        <i className="bi bi-check-circle-fill text-success me-2"></i>
        Enhanced development workflows and processes, reducing project timelines by 20%.
      </li>
      <li className="list-group-item border-0  ps-1">
        <i className="bi bi-check-circle-fill text-success me-2"></i>
        Skilled in ReactJS, Shopify (Basic), Bootstrap 5, Tailwind CSS, JavaScript, and jQuery.
      </li>
    </ul>
  </div>
</div>




    </div>
  </section>
);

export default Experience;
