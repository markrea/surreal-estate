import React from "react";
import { Link } from "react-router-dom"
import "../styles/SideBar.css";

const SideBar = () => {
  return (
    <div>
      <Link className="sidebar-link" to={`/?query={"city":"Manchester"}`}>Manchester</Link>
      <Link className="sidebar-link" to={`/?query={"city":"Liverpool"}`}>Liverpool</Link>
      <Link className="sidebar-link" to={`/?query={"city":"Sheffield"}`}>Sheffield</Link>
      <Link className="sidebar-link" to={`/?query={"city":"Leeds"}`}>Leeds</Link>
    </div>
  );
};


export default SideBar;
