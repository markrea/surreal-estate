import React, { useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "1",
      bathrooms: "1",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      <form onSubmit={handleAddProperty}>
        <div className="input-fields">
        <label className="label" htmlFor="title">
          Property Description
          <input
            className="form-field"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
            placeholder="e.g. One bedroom Flat"
          />
        </label>

        <br />
        <label className="label" htmlFor="city">
          City
          <select
            className="form-field"
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>

        <br />
        <label className="label" htmlFor="Type">
          Type
          <select
            className="form-field"
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <br />
        <label className="label" htmlFor="bedrooms">
          Bedrooms
          <select
            className="form-field"
            id="bedrroms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6+">6+</option>
          </select>
        </label>
        <br />
        <label className="label" htmlFor="bathrooms">
          Bathrooms
          <select
            className="form-field"
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
        </label>
        <br />
        <label className="label" htmlFor="price">
          Price
          <input
            className="form-field"
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
            type="number"
            placeholder="£"
          />
        </label>
        <br />
        <label  className="label" htmlFor="email">
          Email
          <input
            className="form-field"
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
            type="email"
            placeholder="e.g. yourname@account.com"
          />
        </label>
        
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
