import React from 'react';

const HighlightedProjects = () => (
  <section className="resume-section p-5 text-start" id="highlighted-projects" style={{ textAlign: 'left' }}>
    <div className="resume-section-content">
       <header>
        <h3 className="mb-5 fw-medium" style={{ textAlign: 'left' }}>
          Highlighted projects
        </h3>
      </header>

      {/* Project 4 */}
      <div>
        <h5 className="fw-medium" style={{ textAlign: 'left' }}>#1 RentX.online </h5>
        <p className="mb-2">
          Developed a Modern Admin Dashboard for RentX.com & RentX.online
          I designed and implemented responsive, intuitive admin dashboards for two platforms RentX.com and RentX.online enabling streamlined management of luxury transportation bookings. The dashboards deliver user‑friendly interfaces, dynamic forms, and powerful tools that mirror the seamless experience you’d expect from platforms like RentX.
        </p>
        <p className="mb-1 fw-semibold">Key Features:</p>
        <ul className="ms-4">
          <li>Real-Time Booking Management: Instantly access and manage active and historical bookings.</li>
          <li>Advanced Data Handling: Search, filter, sort, and update records with ease.</li>
          <li>Responsive Design: Fully adaptive layout supporting mobile and desktop workflows.</li>
          <li>Integrated Tools: Google Maps API for location tracking, Typesense-powered search for fast filtering.</li>
        </ul>
        <p className="mb-1 fw-semibold">Technologies:</p>
        <ul className="ms-4">
          <li>Frontend: HTML5, CSS3, JavaScript, jQuery, Bootstrap 5</li>
          <li>Backend: Core PHP, Laravel, Typesense, Google Maps API</li>
        </ul>
      </div>

      {/* Project 1 */}
      <div className="mb-4">
        <h5 className="fw-medium" style={{ textAlign: 'left' }}>#2 Partycentral</h5>
        <p className="mb-2">
          Partycentral is a UK-based e-commerce event services platform—a central hub where customers browse, compare, and book venue, entertainment, décor, catering, and other event services through a trusted network of vetted suppliers across the UK
        </p>
        <p className="mb-1 fw-semibold">Key Features:</p>
        <ul className="ms-4">
          <li>Effortless, intuitive navigation—enabling users to filter vendors by category, event type, location, and budget.</li>
          <li>Side‑by‑side vendor comparison tools—help users evaluate services and pricing at a glance.</li>
          <li>Streamlined booking workflows—including quote requests, vendor selection, and secure checkout links via WhatsApp or email.</li>
          <li>Mobile‑friendly responsiveness—ensuring a smooth experience on any device.</li>
        </ul>
        <p className="mb-1 fw-semibold">Technologies:</p>
        <ul className="ms-4">
          <li>Frontend: HTML5, CSS3, JavaScript, jQuery, Bootstrap 5</li>
          <li>Backend: PHP, Laravel, Typesense</li>
        </ul>
      </div>

      {/* Project 2 */}
      <div className="mb-4">
        <h5 className="fw-medium" style={{ textAlign: 'left' }}>#3 Add to Cart</h5>
        <p className="mb-2">
         Add to Cart is a UK-based e‑commerce marketplace that curates a wide range of independent seller shops into a single, user-friendly platform—making browsing and shopping simple and seamless for consumers across the UK
        </p>
        <p className="mb-1 fw-semibold">Key Features:</p>
        <ul className="ms-4">
          <li>Curated Marketplace: A wide range of independent seller shops in one place.</li>
          <li>User-Friendly Interface: Intuitive design for seamless browsing and shopping.</li>
          <li>Secure Transactions: Robust security measures for safe online shopping.</li>
          <li>Personalized Recommendations: Tailored product suggestions based on user preferences.</li>
        </ul>
        <p className="mb-1 fw-semibold">Technologies:</p>
        <ul className="ms-4">
          <li>Frontend: HTML5, CSS3, JavaScript, jQuery, Bootstrap 5</li>
          <li>Backend: Laravel, Typesense</li>
        </ul>
      </div>

      {/* Project 3 */}
      <div>
        <h5 className="fw-medium" style={{ textAlign: 'left' }}>#4 Bookingcentral and Afh.cloud</h5>
        <p className="mb-2">
          Developed admin dashboard solutions for Bookingcentral and Afh.cloud, focused on creating responsive, user-friendly
          interfaces and advanced data management capabilities. The projects involved building and enhancing admin dashboard-related
          pages, forms, and interactive features tailored to the platforms' specific requirements.
        </p>
        <p className="mb-1 fw-semibold">Key Features:</p>
        <ul className="ms-4">
          <li>Responsive Design: Adapts seamlessly to various screen sizes and devices.</li>
          <li>Data Visualization: Interactive charts and graphs for insightful analytics.</li>
          <li>User Management: Role-based access control and user activity tracking.</li>
          <li>Customizable Dashboard: Widgets and layouts tailored to user preferences.</li>
        </ul>
        <p className="mb-1 fw-semibold">Technologies:</p>
        <ul className="ms-4">
          <li>Frontend: HTML5, CSS3, JavaScript, jQuery, Bootstrap 5</li>
          <li>Backend: Core PHP, Laravel, Typesense, Google Maps API</li>
        </ul>
      </div>
    </div>
  </section>
);

export default HighlightedProjects;
