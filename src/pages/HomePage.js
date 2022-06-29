import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Layout from "./../components/Layout/Layout";
import { motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  const img1 =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const img2 =
    "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const navigat = useNavigate();
  return (
    <Layout>
      <div className="container mt-3">
        <Slider />
        <div className="row">
          <motion.h1
            style={{
              marginTop: "30px",
              marginBottom: "30px",
              fontFamily: "Lobster",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <b>
              <i style={{ marginLeft: "30px" }}>Category</i>
            </b>
          </motion.h1>

          <motion.div
            className="col-md-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <motion.div
              className="Imagecontainer"
              style={{ marginLeft: "30px", width: "400px" }}
              whileHover={{
                scale: 1.1,
              }}
            >
              <img
                src={img1}
                alt="Rent"
                style={{
                  width: "85%",
                  borderRadius: "20px",
                  border: "4px solid #98AFC7",
                }}
              />
              <motion.button
                className="btn"
                onClick={() => navigate("/category/rent")}
              >
                TO RENT
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            className="col-md-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
          >
            <motion.div
              className="Imagecontainer"
              style={{ marginLeft: "30px" }}
              whileHover={{
                scale: 1.1,
              }}
            >
              <img
                src={img2}
                alt="Rent"
                style={{
                  width: "85%",
                  borderRadius: "20px",
                  border: "4px solid #98AFC7",
                }}
              />
              <button
                className="btn"
                onClick={() => navigate("/category/sale")}
              >
                TO SALE
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
