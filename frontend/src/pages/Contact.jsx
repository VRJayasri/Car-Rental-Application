import React from 'react';

function Contact() {
  return (
    <div>
          <div className="header">
  <div className="brand">
    <span>Ziyo</span>zi Car Rental
  </div>
  <ul className="nav-list">
    <li><a href="Home">Home</a></li>
    <li><a href="About">About</a></li>
    <li><a href="Product">Available Cars</a></li>
  </ul>
</div>
      <div className="google-map">
      <iframe
  title="Ziyozi Car Rental Location Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.67673764725!2d80.14085937484289!3d13.056236787266979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261ec894cae4d%3A0x3a4aaa21b9bb9079!2sFlipkart%20warehouse!5e0!3m2!1sen!2sin!4v1712032683365!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>

      <h1 style={{ textAlign: 'center' }}>CONTACT US</h1>

      <h2 style={{ color: 'grey', textAlign: 'center' }}>
        Contact us: +91 7418649192<br />
        e-mail: ziyozi@gmail.com<br />
        Address: 12B, Ganga Nagar,<br />
        Flipkart Warehouse,<br />
        Chennai,<br />
        Tamil Nadu.
      </h2>
    </div>
  );
}

export default Contact;
