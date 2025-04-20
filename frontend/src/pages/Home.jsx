import React from 'react';

function Home() {
  return (
    <div className="bg-image">
      <div className="intro-page">
        <div id="headd">
            <h1 className="ziyoname">Ziyozi Car Rental</h1>
            <p className='quote'>Rent Car As Your Trip Friend</p>
          
        </div>

        <button className='homebutt' type="button" onClick={() => window.location.href = 'Login'}>
          Let's Take and Go
        </button>
      </div>

    
      <section className='brandsname'>
        <h2>Available Brands:</h2>
        <div id="brands">
          <h1>Toyota</h1>
          <h1>Honda</h1>
          <h1>Maruti Suzuki</h1>
          <h1>Audi</h1>
          <h1>Mercedes</h1>
          <h1>Tata</h1>
          <h1>Renault</h1>
          <h1>MG</h1>
          <h1>Mahindra</h1>
        
        </div>
      </section>

    
      <footer className='foot'>
        <div className="ccontainer">
          <h2>Contact Us</h2>
          <p>
(+91) 9876543210
ziyozi.carrental@gmail.com 
          </p>
        </div>
        <div className="ccontainer">
          <h2>Address</h2>
          <p>
123/2 A, 
Anna Nagar,
Chennai.
          </p>
        </div>
        <div className="ccontainer">
          <h2>Follow Us</h2>
          <div id="icons">
            <a href="facebook.com" className="fa fa-facebook"></a>
            <a href="instagram.com" className="fa fa-twitter"></a>
            <a href="twitter.com" className="fa fa-instagram"></a>
          </div>
        </div>
      </footer>

      <div id="Copyrights">
        © 2025 Ziyozi Car Rental. All Rights Reserved.
      </div>
    </div>
  );
}

export default Home;
