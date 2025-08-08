import React from 'react';

const Experience = () => (
  <section className="resume-section" id="experience">
    <div className="resume-section-content text-start">
      <h3 className="mb-5">Experience</h3>
      {[
        { title: 'Senior Web Developer', org: 'Intelitec Solutions', desc: 'Bring to the table...', period: 'March 2013 - Present' },
        { title: 'Web Developer', org: 'Intelitec Solutions', desc: 'Capitalize on low hanging fruit...', period: 'December 2011 - March 2013' },
        { title: 'Junior Web Designer', org: 'Shout! Media Productions', desc: 'Podcasting operational change...', period: 'July 2010 - December 2011' },
        { title: 'Web Design Intern', org: 'Shout! Media Productions', desc: 'Collaboratively administrate...', period: 'September 2008 - June 2010' },
      ].map((exp, idx) => (
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={idx}>
          <div className="flex-grow-1">
            <h3 className="mb-0">{exp.title}</h3>
            <div className="subheading mb-3">{exp.org}</div>
            <p>{exp.desc}</p>
          </div>
          <div className="flex-shrink-0"><span className="text-primary">{exp.period}</span></div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
