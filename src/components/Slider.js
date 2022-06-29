import React, { useState, useEffect } from "react";
import { db } from "../firebase.config";
import {
  collection,
  getDoc,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import SwipeCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Spinner from "./Spinner";

//config
SwipeCore.use([EffectCoverflow, Pagination]);

const Slider = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigat = useNavigate();
  const userPic =
    "https://openclipart.org/download/247319/abstract-user-flat-3.svg";

  useEffect(() => {
    const fetchListings = async () => {
      const listingRef = collection(db, "listings");
      const q = query(listingRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setLoading(false);
      setListings(listings);
    };
    fetchListings();
    console.log(listings === null ? "loading" : listings);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div >
        {listings === null ? (
          <Spinner />
        ) : (
          <div
            id="carouselExampleDark"
            className="carousel carousel-light slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={3}
                aria-label="Slide 4"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={4}
                aria-label="Slide 5"
              />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={3000}>
                  <img
                    src={listings[0].data.imgUrls[0]}
                    className="d-block w-100"
                    height={450}
                    width='100vw'
                    alt={listings[0].data.name}
                  />
                </div>
              {listings.map(({data, id }) => (
                <div
                  className="carousel-item"
                  data-bs-interval={3000}
                  key={id}
                  onClick={() => {
                    navigat(`/category/${data.type}/${id}`);
                  }}
                >
                  <h6 className="carousel-caption d-none d-md-block">
                    {/* <img alt="user pic" src={userPic} height={35} width={35} /> */}
                    <span className="ms-2"> {data.name}</span>
                  </h6>
                  <img
                    className="d-block w-100"
                    src={data.imgUrls[0]}
                    height={450}
                    width="100vw"
                    alt={data.name}
                  />
                </div>
              ))}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Slider;

// <Swiper
// effect={"coverflow"}
// grabCursor={true}
// centeredSlides={true}
// slidesPerView={1}
// coverflowEffect={{
//   rotate: 50,
//   stretch: 0,
//   depth: 100,
//   modifier: 1,
//   slideShadows: true,
// }}
// pagination={true}
// className="mySwipe"
// >
// {listings.map(({ data, id }) => (
//   <SwiperSlide
//     key={id}
//     onClick={() => {
//       navigat(`/category/${data.type}/${id}`);
//     }}
//   >
//     <h6 className="bg-info text-light p-2 m-0 ">
//       <img alt="user pic" src={userPic} height={35} width={35} />
//       <span className="ms-2"> {data.name}</span>
//     </h6>
//     <img
//       src={data.imgUrls[0]}
//       height={400}
//       width={1100}
//       alt={data.name}
//     />
//   </SwiperSlide>
// ))}
// </Swiper>
