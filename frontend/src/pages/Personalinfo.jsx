import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PersonalInfo() {
  const [name, setname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [fullcarname, setFullcarname] = useState('');
  const [driverChoice, setDriverChoice] = useState('');
  const [licen, setlicen] = useState('');
  const [pick, setPick] = useState('');
  const [drop, setDrop] = useState('');
  const [days, setDays] = useState('');
  const [when, setWhen] = useState('');
  const [tym, setTym] = useState('');
  const [clr, setClr] = useState('');
  const [car, setCar] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation (as before)
    if (name.trim() === '') {
        alert('Please enter a name');
        return;
    }
    if (phone.trim() === '' || phone.length !== 10) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
    if (email.trim() === '') {
        alert('Please enter an email address');
        return;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    if (area.trim() === '') {
        alert('Enter area name');
        return;
    }
    if (city.trim() === '') {
        alert('Enter your city');
        return;
    }
    if (pincode.trim() === '') {
        alert('Please enter pincode');
        return;
    }
    if (state.trim() === '') {
        alert('Please select state');
        return;
    }

    const orderData = {
        name,
        phone,
        area,
        city,
        pincode,
        state,
        fullcarname,
        driverChoice,
        licen,
        pick,
        drop,
        days,
        when,
        tym,
        clr,
        car,
        msg
    };

    try {
        const response = await fetch('http://localhost:3001/api/orders', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message); 
            navigate('/myorder'); 
            handleReset(); 
        } else {
            alert('Error saving order: ' + data.error);
        }
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Network error. Please try again.');
    }
};

  const handleReset = () => {
    setname('');
    setPhone('');
    setEmail('');
    setArea('');
    setCity('');
    setPincode('');
    setState('');
    setFullcarname('');
    setDriverChoice('');
    setlicen('');
    setPick('');
    setDrop('');
    setDays('');
    setWhen('');
    setTym('');
    setClr('');
    setCar('');
    setMsg('');
  };

  return (
    <div className="personalinfowrap">
      <div>
        <ul className="nav-list">
          <li><a href="Home">Home</a></li>
          <li><a href="product">Cars</a></li>
          <li><a href="Myprofile">My Profile</a></li>
          <li><a href="orderdetails">My Order</a></li>
        </ul>
      </div>

      <section className="info-section">
        <h2>Basic Information</h2>
        <form className="personal-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name<span>*</span></label>
          <input value={name} onChange={(e) => setname(e.target.value)} placeholder="Enter full name" id="name" type="text" required />

          <label htmlFor="phone">Phone Number<span>*</span></label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter 10-digit number" id="phone" type="number" required />

          <label htmlFor="email">E-mail<span>*</span></label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Gmail" id="email" required />

          <label htmlFor="area">Area<span>*</span></label>
          <input value={area} onChange={(e) => setArea(e.target.value)} type="text" id="area" placeholder="Enter your Area" required />

          <label htmlFor="city">City<span>*</span></label>
          <input value={city} onChange={(e) => setCity(e.target.value)} type="text" id="city" placeholder="Enter your City" required />

          <label htmlFor="pincode">Pincode<span>*</span></label>
          <input value={pincode} onChange={(e) => setPincode(e.target.value)} maxLength="6" pattern="\d*" type="text" id="pincode" placeholder="Enter your Pincode" required />

          <label htmlFor="state">State<span>*</span></label>
          <select value={state} onChange={(e) => setState(e.target.value)} className="state-dropdown" id="state" required>
            <option value="">Select State</option>
            <option value="tamilnadu">Tamilnadu</option>
            <option value="others">Other State</option>
          </select>

          <h2>Car Details</h2>

          <label htmlFor="carName">Chosen Car Name<span>*</span></label>
          <input value={fullcarname} onChange={(e) => setFullcarname(e.target.value)} placeholder="Enter the chosen car name" id="carName" type="text" required />

          <label htmlFor="driver">Driver<span>*</span></label>
          <select className="state-dropdown" id="driver" required value={driverChoice} onChange={(e) => setDriverChoice(e.target.value)}>
            <option value="">Select</option>
            <option value="need">Need(extra charge)</option>
            <option value="noneed">No need</option>
          </select>

          {driverChoice === 'noneed' && (
            <>
              <label htmlFor="licenseNumber">License Number<span>*</span></label>
              <input value={licen} onChange={(e) => setlicen(e.target.value)} type="text" id="licenseNumber" placeholder="Enter your License Number" required />
            </>
          )}

          <label htmlFor="pickaddress">Pickup Address<span>*</span></label>
          <input value={pick} onChange={(e) => setPick(e.target.value)} type="text" id="pickaddress" placeholder="Enter complete address" required />

          <label htmlFor="dropaddress">Drop Address<span>*</span></label>
          <input value={drop} onChange={(e) => setDrop(e.target.value)} type="text" id="dropaddress" placeholder="Enter complete address" required />

          <label htmlFor="days">Days<span>*</span></label>
          <input value={days} onChange={(e) => setDays(e.target.value)} type="number" id="days" placeholder="Enter how many days you need the car" required />

          <label htmlFor="date">When<span>*</span></label>
          <input value={when} onChange={(e) => setWhen(e.target.value)} type="date" id="date" required />

          <label htmlFor="time">Time<span>*</span></label>
          <input value={tym} onChange={(e) => setTym(e.target.value)} type="time" id="time" required />

          <label htmlFor="color">Color<span>*</span></label>
          <select value={clr} onChange={(e) => setClr(e.target.value)} id="color" className="state-dropdown" required>
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="brown">Maroon</option>
            <option value="silver">Silver</option>
            <option value="blue">Blue</option>
            <option value="anycolor">Any color</option>
          </select>

          <label htmlFor="chosenCar">Chosen Car<span>*</span></label>
          <select value={car} onChange={(e) => setCar(e.target.value)} id="chosenCar" className="state-dropdown" required>
            <option value="">Select a car</option>
            <option value="aa">Alcazar</option>
            <option value="aaa">Alto K10</option>
            <option value="g">Grand Vitara</option>
            <option value="h">Hyundai Creta</option>
            <option value="hh">Hyundai Verna</option>
            <option value="i">i20</option>
            <option value="ii">Innova Hycross</option>
            <option value="k">Kia Carnival</option>
            <option value="kk">Kia Seltos</option>
            <option value="kkk">Kwid</option>
            <option value="l">Land Rover Defender</option>
            <option value="m">Marazzo</option>
            <option value="mm">Maruti Suzuki XL6</option>
            <option value="mmm">MG Cornet EV</option>
            <option value="n">Nexon</option>
            <option value="q">Qute RE60</option>
            <option value="s">Scorpio N</option>
            <option value="ss">Swift</option>
            <option value="t">Tiago</option>
            <option value="tt">Thar</option>
            <option value="x">XUV700</option>
          </select>

          <label htmlFor="specificMessage">Any Specific Message</label>
          <textarea
            className="txtar"
            id="specificMessage"
            placeholder="Write any specific requests, instructions or notes here..."
            rows="4"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>

          <div className="button-container">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
            <button type="button" onClick={() => navigate('/product')}>Back</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default PersonalInfo;
