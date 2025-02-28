import React, { useState } from 'react';
import '../components/Style.css';
import { useNavigate } from 'react-router-dom';

// Import images explicitly
import rawFoodImg from '../assets/raw-food.png';
import cookedFoodImg from '../assets/cooked-food.png';
import packedFoodImg from '../assets/packed-food.png';

const Donate = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true);

    setTimeout(() => {
      alert("Thanks for donating food!"); // Show alert message
      navigate('/home'); // Navigate to the home page
      setLoading(false);
    }, 1500); // Simulate processing time
  };

  return (
    <div className="donate-container">
      <div className="donate-form">
        <p className="logo">
          <b className="donate-highlight"><u>Food Donate</u></b>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="foodname">Food Name:</label>
            <input type="text" id="foodname" name="foodname" required />
          </div>

          <div className="form-group">
            <label>Meal Type:</label>
            <div className="radio-group">
              <input type="radio" name="meal" id="veg" value="veg" required />
              <label htmlFor="veg" aria-label="Vegetarian">Veg</label>

              <input type="radio" name="meal" id="nonveg" value="Non-veg" required />
              <label htmlFor="nonveg" aria-label="Non-Vegetarian">Non-Veg</label>
            </div>
          </div>

          <div className="form-group">
            <label>Select the Category:</label>
            <div className="image-radio-group">
              {[ 
                { id: "raw-food", src: rawFoodImg, alt: "Raw Food" },
                { id: "cooked-food", src: cookedFoodImg, alt: "Cooked Food" },
                { id: "packed-food", src: packedFoodImg, alt: "Packed Food" }
              ].map(({ id, src, alt }) => (
                <div key={id} className="image-radio">
                  <input type="radio" id={id} name="image-choice" value={id} required />
                  <label htmlFor={id}>
                    <img src={src} alt={alt} />
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Quantity (person):</label>
            <input type="number" id="quantity" name="quantity" min="1" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phoneno">Phone No:</label>
            <input 
              type="tel" 
              id="phoneno" 
              name="phoneno" 
              pattern="[0-9]{10}" 
              placeholder="Enter 10-digit phone number" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="district">District:</label>
            <select id="district" name="district" required>
              <option value="" disabled selected>Select your district</option>
              <option value="chennai">Chennai</option>
              <option value="coimbatore">Coimbatore</option>
              <option value="madurai">Madurai</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" rows="3" required></textarea>
          </div>

          <div className="btn-container">
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;
