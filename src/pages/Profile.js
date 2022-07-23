import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../firebase.config";
import { FaEdit, FaArrowAltCircleRight } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { motion } from "framer-motion";
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from "firebase/firestore";
import ListingItem from "../components/ListingItem";
// import Profilepic from "../Pics/Profilepic";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  //useeffect for getting data
  useEffect(() => {
    const fetchUserListings = async () => {
      const listingRef = collection(db, "listings");
      const q = query(
        listingRef,
        where("useRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );
      const querySnap = await getDocs(q);
      console.log(querySnap);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      console.log(listings);
      setListings(listings);
      setLoading(false);
    };
    fetchUserListings();
  }, [auth.currentUser.uid]);
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  const logoutHandler = () => {
    auth.signOut();
    toast.success("Successfully Logout");
    navigate('/signin');
  };

  //onChange
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  //submit handler
  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, { name });
        toast.success("User Updated!");
      }
    } catch (error) {
      console.log(error);
      toast("Something Went Wrong");
    }
  };

  //delete handler
  const onDelete = async (listingId) => {
    if (window.confirm('Are You Sure  want to delete ?')) {
      // await deleteDoc(doc, (db, "listings", listingId));
      await deleteDoc(doc(db, "listings", listingId));
      const updatedListings = listings.filter(
        (listing) => listing.id !== listingId
      );
      setListings(updatedListings);
      toast.success("Listing Deleted Successfully");
    }
  };

  //edit handler
  const onEdit = (listingId) => {
    navigate(`/editlisting/${listingId}`);
  };
  return (
    <Layout>
      <div className='profile'>

      <header className="profileHeader">
        <h4 className='pageHeader sin'>Profile Details</h4>
        <motion.button className="logOut" onClick={logoutHandler}
        whileHover={{
          scale: 1.1,
        }}>
          Logout
        </motion.button>
      </header>
      <main>
        <div  style={{display:"flex"}}>
      <div>
          <div className='profileDetailsHeader'>
          <p className='profileDetailsText'>Personal Details</p>
          <motion.p
            className='changePersonalDetails'
            onClick={() => {
              changeDetails && onSubmit()
              setChangeDetails((prevState) => !prevState)
            }}
            whileHover={{
              scale: 1.2,
            }}
          >
            {changeDetails ? 'Done' : 'Edit'}
          </motion.p>
        </div>
          
        
        <div className='profileCard'>
          <form>
            <input
              type='text'
              id='name'
              className={!changeDetails ? 'profileName' : 'profileNameActive'}
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
            />
            <input
              type='text'
              id='email'
              className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        
      </div>
      <div className="sellORrent">
      <Link to='/create-listing' className='createListing'>
          <img src={"https://house-marketplace.vercel.app/static/media/homeIcon.09f28a71.svg"} alt='home' />
          <p className="sellorrent">Sell or rent your home</p>
          <img src={"https://house-marketplace.vercel.app/static/media/keyboardArrowRightIcon.8cee54be.svg"} alt='arrow right' />
        </Link>
      </div>
      </div>
      {/* <Profilepic style={{marginLeft:"40px",alignItems:"center", justifyContent:"center",width:"70%"}}/> */}
      </div>
      <div className="listcontainer">
        {listings && listings?.length > 0 && (
          <>
            <motion.h5 className="yourprolistings sin" initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }} style={{fontFamily:"Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"}}>Your Listings</motion.h5>
            <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}>
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                  onDelete={() => onDelete(listing.id)}
                  onEdit={() => onEdit(listing.id)}
                />
              ))}
            </motion.div>
          </>
          
        )}
      
      
      </div>
      </main>
      </div>
      
    </Layout>
    
  );
};

export default Profile;
