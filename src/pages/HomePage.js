import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import Layout from "./../components/Layout/Layout";
import { motion } from "framer-motion";
import RentPic from "../Pics/RentPic";
import SellPic from "../Pics/SellPic";
import { Link } from "react-router-dom";

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
            <p className="sin1" style={{fontFamily:"Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"}}> Category </p>
          </motion.h1>
          <div className='exploreCategories'>
          <Link to='/category/rent'>
            <img
              src={img1}
              alt='rent'
              className='exploreCategoryImg'
            />
            <motion.button
                  className="btn"
                  onClick={() => navigate("/category/rent")}
                >
                 <strong> FOR RENT</strong>
                </motion.button>
          </Link>
          
          
          <Link to='/category/sale'>
            
            <motion.img
              src={img2}
              alt='sell'
              className='exploreCategoryImg'
              
              
            />
            <motion.button
                  className="btn"
                  onClick={() => navigate("/category/sale")}
                >
                 <strong> FOR SALE</strong>
                </motion.button>
          </Link>
          
        </div>
                
          {/* <div
            className="d-flex align-items-center justify-content-center allimage"
            style={{ width: "100vw" }}
          >
            <motion.div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "50vw" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              <motion.div
                className="Imagecontainer"
                
                style={{ width: "500px", cursor: "pointer" }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <img
                  src={img1}
                  alt="Rent"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    
                  }}
                /> */}
                {/* <motion.button
                  className="btn"
                  onClick={() => navigate("/category/rent")}
                >
                  FOR RENT
                </motion.button> */}
                
              {/* </motion.div>
            </motion.div> */}

            {/* <motion.div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "50vw" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              <motion.div
                className="Imagecontainer"
                
                style={{ width: "50vw", cursor: "pointer" }}
                whileHover={{
                  scale: 1.1,
                }}
              >
                <img
                  src={img2}
                  alt="Rent"
                  style={{
                    width: "100%",
                    borderRadius: "20px",
                    
                  }}
                /> */}
                {/* <button
                  className="btn"
                  onClick={() => navigate("/category/sale")}
                >
                  FOR SALE
                </button> */}

                
              {/* </motion.div>
            </motion.div> */}
          </div>
        </div>
      {/* </div> */}
    </Layout>
  );
};

export default HomePage;
