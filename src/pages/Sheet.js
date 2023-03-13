import React, { useState } from "react";
import axios from "axios";

//const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
//const API_KEY = process.env.REACT_APP_API_KEY;

const sendDataToSheet = (data) => {
  axios
    .post(
      `https://sheets.googleapis.com/v4/spreadsheets/1gflwHKHcOuX2xl6XorwrRjSMyE9Xl4n4JNpUyABORcA/values/A1:C1?valueInputOption=RAW&key=AIzaSyD-wS_wk0P3cPPxPUgYVSj77XZzblvL5IA`,
      {
        values: [[data.name, data.email, data.message]],
      }
    )
    .then((response) => {
      console.log("Data sent successfully: ", response);
    })
    .catch((error) => {
      console.error("Error sending data: ", error);
    });
};

const Sheet = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form data: ", formData);
    sendDataToSheet(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Sheet;
