import React from 'react';



  const skillsData = {
    'Front-End Development': [
      'React.js',
      'Next.js',
      'Redux Toolkit',
      'JavaScript',
      'jQuery',
      'Bootstrap 5',
      'Tailwind CSS'
    ],
    'Backend & Databases': [
      'Core PHP',
      'Laravel (Basic)',
      'Typesense', 
      'MySQL'
    ],
    'CMS & E-Commerce Platforms': [
      'WordPress',
      'Shopify'
    ],
    'Design & Media Tools': [
      'Adobe Photoshop',
      'Adobe Premiere Pro'
    ]
  };



const Skills = () => (


<section className="resume-section p-5 bg-white" id="technical-skills" itemScope itemType="https://schema.org/ItemList">
  <div className="resume-section-content text-start">
    <header className="mb-4">
    

      <header>
        <h3 className="mb-5 fw-medium">
          Technical Expertise
        </h3>
      </header>

      <meta itemProp="itemListOrder" content="Unordered" />
    </header>

    <div className="row">
   

         {Object.entries(skillsData).map(([category, items], index) => (
            <div key={index} className="mb-4 col-lg-6 ">
              <div className='card h-100 p-3'>
              <h5 className=" mb-2  border-0">{category}</h5>
              <ul className="list-group list-group-flush  border-0">
                {items.map((skill, idx) => (
                  <li key={idx} className="list-group-item border-0 ps-0 fw-semibold">
                    <i className="bi bi-arrow-right-circle-fill me-2"></i>
                    {skill}</li>
                ))}
              </ul>
                </div>
            </div>
          ))}
      
    </div>
  </div>
</section>



);

export default Skills;
