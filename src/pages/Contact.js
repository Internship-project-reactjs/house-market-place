import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import MsgPic from "../Pics/MsgPic";
const Contact = () => {
  const [message, setMessage] = useState("");
  const [landlord, setLandlord] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, "users", params.landlordId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Unble to ftech data");
      }
    };
    getLandlord();
  }, [params.landlordId]);
  return (
    <Layout>
      <h1 className='pageHeader sin ' style={{marginBottom:"20px",marginTop:"3rem",fontFamily:"Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif",fontWeight:"600"}}>Contact Us</h1>
      <div className="container mt-4 d-flex">
        <div className="w-50">
          {landlord !== "" && (
            <main>
              <h3>Name : {landlord?.name}</h3>

              <div className="form-floating">
                <textarea
                  style={{height:"150px",width:"49vw"}}
                  className="form-control  tarea"
                  placeholder="Leave a comment here"
                  value={message}
                  id="message"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <label htmlFor="floatingTextarea"> Your message</label>
              </div>
              <a
                href={`mailto:${landlord.email}?Subject=${searchParams.get(
                  "listingName"
                )}&body=${message}`}
              >
                <button className="btn btn-primary mt-3">Send Message</button>
              </a>
            </main>
          )}
        </div>
        <MsgPic/>
      </div>
    </Layout>
  );
};

export default Contact;
