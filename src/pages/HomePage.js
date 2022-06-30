import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Layout from "./../components/Layout/Layout";
import { motion } from "framer-motion";
import RentPic from "../Pics/RentPic";
import SellPic from "../Pics/SellPic";

const HomePage = () => {
  const navigate = useNavigate();
  const img1 =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const img2 =
    "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const navigat = useNavigate();
  return (
    <Layout>
      <div className="m-0 w-100">
        <Slider />
        <div className="row">
          <motion.h1
            style={{
              textAlign: "center",
              marginTop: "30px",
              marginBottom: "30px",
              fontFamily: "Lobster",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <h1 style={{fontFamily:"'Francois One', sans-serif"}}>Category</h1>
          </motion.h1>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "100vw" }}
          >
            <motion.div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "50vw" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              <motion.div
                className="Imagecontainer"
                onClick={() => navigate("/category/rent")}
                style={{ width: "500px", cursor: "pointer" }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                {/* <img
                  src={img1}
                  alt="Rent"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    border: "4px solid #98AFC7",
                  }}
                />
                <motion.button
                  className="btn"
                  onClick={() => navigate("/category/rent")}
                >
                  TO RENT
                </motion.button> */}
                <RentPic />
                <h5 style={{ fontFamily: "M PLUS 1p', sans-serif", textAlign:"center",marginTop:"10px",marginLeft:"20px" }}>
                  Click Here For Rent
                </h5>
              </motion.div>
            </motion.div>

            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "50vw" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              <div
                className="Imagecontainer"
                onClick={() => navigate("/category/rent")}
                style={{ width: "50vw", cursor: "pointer" }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                {/* <img
                  src={img2}
                  alt="Rent"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    border: "4px solid #98AFC7",
                  }}
                />
                <button
                  className="btn"
                  onClick={() => navigate("/category/sale")}
                >
                  TO SALE
                </button> */}
                <h1 style={{ fontFamily: "Yantramanav, sans-serif" }}>
                  For Rent{" "}
                </h1>
                <h2 style={{ fontFamily: "M PLUS 1p', sans-serif" }}>
                  Rent Your Dream House Here{" "}
                </h2>
              </div>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "100vw" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "50vw" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              <div
                className="Imagecontainer"
                onClick={() => navigate("/category/sale")}
                style={{ width: "500px", cursor: "pointer" }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                {/* <img
                  src={img1}
                  alt="Rent"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    border: "4px solid #98AFC7",
                  }}
                />
                <motion.button
                  className="btn"
                  onClick={() => navigate("/category/rent")}
                >
                  TO RENT
                </motion.button> */}
                <h1 style={{ fontFamily: "Yantramanav, sans-serif" }}>
                  {" "}
                  For Sale{" "}
                </h1>
                <h2 style={{ fontFamily: "M PLUS 1p', sans-serif" }}>
                  Sale Your Dream House Here{" "}
                </h2>
              </div>
            </div>

            <motion.div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "50vw" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              <motion.div
                className="Imagecontainer"
                onClick={() => navigate("/category/sale")}
                style={{ width: "50vw", cursor: "pointer" }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                {/* <img
                  src={img2}
                  alt="Rent"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    border: "4px solid #98AFC7",
                  }}
                />
                <button
                  className="btn"
                  onClick={() => navigate("/category/sale")}
                >
                  TO SALE
                </button> */}

                <SellPic/>
                <h5 style={{ fontFamily: "M PLUS 1p', sans-serif", textAlign:"center",marginTop:"10px", marginLeft:"20px" }}>
                  Click Here For Sale
                </h5>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
