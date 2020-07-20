import React, { useState, useEffect } from "react";
import {useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/Properties.css";

import axios from "axios";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "", isSuccess: true });
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing`)
      .then(({ data }) => setProperties(data))
      .catch((err) => {
        setAlert({
          message: "Unable to find properties.",
          isSuccess: false,
        });
      });
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/PropertyListing${search}`)
    .then(({data}) => setProperties(data))
    .catch(err => console.log(err));
  }, [search]);

  return (
    <div className="property-body">
      <SideBar />
      {properties.map((property) => (
        <div key={property._id} className="col">
          <PropertyCard {...property} />
        </div>
      ))}
      <Alert message={alert.message} success={alert.isSuccess} />
    </div>
  );
};

export default Properties;
