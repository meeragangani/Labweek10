
import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        address: "",
        address2: "",
        city: "",
        province: "",
        postalCode: "",
        agree: false,
    });

    const [submittedData, setSubmittedData] = useState(null);

    const provinces = [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Nova Scotia",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmittedData({ ...formData });
    };

    return (
        <div className="page">
            <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: #f2f4f8;
        }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 30px 15px;
        }

        .form-container, .result-container {
          width: 100%;
          max-width: 550px;
          background: white;
          padding: 35px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          margin-bottom: 25px;
        }

        h1, h2 {
          text-align: center;
          color: #26364a;
        }

        .subtitle {
          text-align: center;
          color: #777;
          margin-bottom: 25px;
        }

        label {
          display: block;
          margin: 15px 0 7px;
          font-weight: 600;
          color: #333;
        }

        input, select {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 15px;
           background-color: white;
           color:black;
        }

        input:focus, select:focus {
          outline: none;
          border-color: #3867d6;
        }
        select option {
  color: black;
  background-color: white;
}

        .terms {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 22px 0;
        }

        .terms input {
          width: auto;
        }

        .terms label {
          margin: 0;
          font-weight: normal;
        }

        .terms a {
          color: #3867d6;
        }

        button {
          width: 100%;
          padding: 13px;
          background:green;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }

        button:hover {
          background: #254fae;
        }
        .result-container {
  width: 100%;
  max-width: 550px;
  margin: 25px auto;
  padding: 25px;
  background-color: #f0fff4;
  border: 3px solid green;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 128, 0, 0.15);
}

        .result-container h2 {
          margin-bottom: 25px;
           color: #16803c;
           text-align: center;
        }

        .result-row {
          padding: 12px 0;
          border-bottom: 1px solid #eee;
          color: #333;
          overflow-wrap: anywhere;
        }

        .result-row strong {
          display: inline-block;
          min-width: 135px;
          color: #16803c;
        }
      

@media (max-width: 500px) {
  .name-email-row {
    flex-direction: column;
  }
}

        .success {
          text-align: center;
          color: green;
          font-weight: bold;
          margin-bottom: 15px;
        }
      `}</style>

            <form className="form-container" onSubmit={handleSubmit}>
                <h1>Data Entry Form</h1>
               
                <div className="name-email-row">
                    <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                        />
                    </div>

                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                    <div className="form-group">
                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    placeholder="Street address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                        />
                    </div>
                </div>
                <label>Address 2 (Optional)</label>
                <input
                    type="text"
                    name="address2"
                    placeholder="Apartment, suite, unit, etc."
                    value={formData.address2}
                    onChange={handleChange}
                />

                <label>City</label>
                <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />

                <label>Province</label>
                <select
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                   
                    required
                >
                    <option value="">Choose..</option>
                    {provinces.map((province) => (
                        <option key={province} value={province}>
                            {province}
                        </option>
                    ))}
                </select>

                <label>Postal Code</label>
                <input
                    type="text"
                    name="postalCode"
                    placeholder="Example: N9A 1A1"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                />

                <div className="terms">
                    <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="agree">
                      Agree Terms & Condition?
                    </label>
                </div>

                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div className="result-container">
                    

                    <div className="result-row">
                        <strong>Email:</strong> {submittedData.email}
                    </div>

                    <div className="result-row">
                        <strong>Full Name:</strong> {submittedData.name}
                    </div>

                    <div className="result-row">
                        <strong>Address:</strong> {submittedData.address}
                    </div>

                 

                    <div className="result-row">
                        <strong>City:</strong> {submittedData.city}
                    </div>

                    <div className="result-row">
                        <strong>Province:</strong> {submittedData.province}
                    </div>

                    <div className="result-row">
                        <strong>Postal Code:</strong> {submittedData.postalCode}
                    </div>

                   
                </div>
            )}
        </div>
    );
}

export default App;
