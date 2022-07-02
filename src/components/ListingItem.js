import React from "react";
import { Link } from "react-router-dom";
import { FaBed, FaBath } from "react-icons/fa";
import { motion } from "framer-motion";
const ListingItem = ({ listing, id, onDelete, onEdit }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center p-2">
        <div className="card category-link mb-2 p-3" style={{ width: "800px" }}>
          <Link to={`/category/${listing.type}/${id}`}>
            <div className="row container p-2">
              <div className="col-md-5">
                <img
                  src={listing.imgUrls[0]}
                  className="img-thumbnail"
                  alt={listing.name}
                  height={200}
                  width={300}
                />
              </div>
              <div className="col-md-5">
                <p>{listing.location}</p>
                <h2>{listing.name}</h2>
                <p>
                  RS :{" "}
                  {listing.offer
                    ? listing.discountedPrice
                    : listing.regularPrice}{" "}
                  {listing.type === "rent" && " / Month"}
                </p>
                <p>
                  <FaBed /> &nbsp;
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} Bedrooms`
                    : "1 Bedreoom"}
                </p>
                <p>
                  <FaBath /> &nbsp;
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} Bathrooms`
                    : "1 Bathroom"}
                </p>
              </div>
            </div>
          </Link>
          <div>
            {onDelete && (
              <motion.button
                className="btn btn-danger mx-2"
                onClick={() => onDelete(listing.id,listing.name)}
                whileHover={{
                  scale: 1.1,
                }}
              >
                Delete Listing
              </motion.button>
            )}
            {onEdit && (
              <motion.button
                className="btn btn-info ms-3"
                onClick={() => onEdit(listing.id)}
                whileHover={{
                  scale: 1.1,
                }}
              >
                Edit Listing
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingItem;
