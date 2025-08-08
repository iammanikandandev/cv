import React from 'react';

const Education = () => (
  <section className="resume-section p-5 text-start" id="education">
    <div className="resume-section-content">
      <h3 className="mb-5">Education</h3>
      {[
        { school: 'M.R. Arts & Science College, Bharathidasan University, Trichy', degree: 'M.Sc. in Information Technology ',  period: '2011 – 2013' },
        { degree: 'BCA', school: 'M.R. Arts & Science College, Bharathidasan University, Trichy',  period: '2008 – 2011' },
      ].map((edu, idx) => (
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={idx}>
          <div className="flex-grow-1">
            
            <div className="subheading mb-1">{edu.degree}</div>
            <h5 className="mb-0 fw-normal">{edu.school}</h5>
            
           </div>
          <div className="flex-shrink-0 h6"><time dateTime="{edu.period}" className="text-primary">{edu.period}</time></div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
