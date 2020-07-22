import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/Properties.css";

import axios from "axios";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: false });
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing`)
      .then(({ data }) => setProperties(data))
      .catch((err) => {
        setAlert({
          message: "Unable to find properties.",
          isSuccess: true,
        });
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className="property-body">
      <SideBar />
      
      <div className="property-cards">
      <Alert message={alert.message} success={alert.isSuccess} />
      <div className="cards">
        {properties.map((property) => (
          <div key={property._id} className="card">
            <PropertyCard {...property} />
          </div>
        ))}
      
      </div>
       
      </div>
    </div>
  );
};

export default Properties;
