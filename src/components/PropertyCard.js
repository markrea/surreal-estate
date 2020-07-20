import React from "react"; 
import PropTypes from "prop-types";
import "../styles/PropertyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath } from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property">
      <header>
        <div className="title">{title}</div>
        <div className="city">{city}</div>
      </header>
      <section>
        <div className="type">{type}</div>
        <div className="bedrooms">
          <FontAwesomeIcon icon={faBed} /> {bedrooms}
        </div>
        <div className="bathrooms">
          {" "}
          <FontAwesomeIcon icon={faBath} /> {bathrooms}
        </div>
        <div className="price">£{price}</div>
      </section>
      <footer>
        <button className="email">
          <a className="email-text" href={`mailto:${email}`} >
          Enquire about this property
          </a>
        </button>
      </footer>
    </div>
  );
};

PropertyCard.propTypes = {
  listings: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    bathrooms: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default PropertyCard;
