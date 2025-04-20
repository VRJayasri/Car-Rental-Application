import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/VRJayasri/CarRental/refs/heads/main/carrental.json")
      .then((res) => setProducts(res.data.cars));
  }, []);

  console.log(products);

  const searchProduct = products.filter((product) => {
    return Object.keys(product).some((key) =>
      product[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });
  const Truncate = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + "...";
  };
  return (
    <>
      <section className="productt">
      <div className="headerr">
  <div className="brand">
    <span>Ziyo</span>zi Car Rental
  </div>
  <ul className="nav-list">
    <li><a href="/">Home</a></li>
    <li><a href="About">About</a></li>
    <li><a href="Contact">Contact</a></li>
    <li><a href="Myprofile">My Profile</a></li>
    <li><a href="Myorder">My Order</a></li>
  </ul>
        
</div>
<div className="marquee-container">
      <p>*Offer Available! 10% Discount for more than 3 days</p>
    </div>
        
        <div className="containerr">
          <input
            className="product-input"
            placeholder="Search by car, Price, Milage, Fuel type, Seats"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="gridd">
            {searchProduct.map((product) => (
              <div className="card" key={product.id}>
                <img
                  className="card-image"
                  src={product.image}
                  alt={product.name}
                />
                <div className="card-body">
                  <h5
                    className="card-names"
                    title={product.name.length >= 50 ? product.name : null}
                  >
                    {Truncate(product.name, 55)}
                  </h5>
                  <p className="card-details">
                    {Truncate(product.details, 55)}
                  </p>
                  <p className="card-price">Rs{product.price_per_day}</p>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="rentbut">
  <button className="rentbutt">{product.button_text}</button>
</a>            
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
