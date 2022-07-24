import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Layout from "./../components/Layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const img1 =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const img2 =
    "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  const navigat = useNavigate();
  return (
    <Layout className="container">
      <div className="m-0 w-90">
        <Slider />
        <div >
          <motion.h1
            style={{
              textAlign: "center",
              marginTop: "30px",
              marginBottom: "30px",
              fontFamily: "Lobster",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // transition={{ delay: 1.5, duration: 1.5 }}
          >
            <p
              className="sin1"
              style={{
                fontFamily:
                  "Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif",
              }}
            >
              {" "}
              Category{" "}
            </p>
          </motion.h1>
          <div className="exploreCategories">
            <Link to="/category/rent">
              <motion.img src={img1} alt="rent" className="exploreCategoryImg"whileHover={{
                  scale: 1.1,
                }} />
              <motion.button
                className="btn"
                onClick={() => navigate("/category/rent")}
              >
                <strong> FOR RENT</strong>
              </motion.button>
            </Link>

            <Link to="/category/sale">
              <motion.img
                src={img2}
                alt="sell"
                className="exploreCategoryImg img2"
                whileHover={{
                  scale: 1.1,
                }}
              />
              <motion.button
                className="btn"
                onClick={() => navigate("/category/sale")}
              >
                <strong> FOR SALE</strong>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
