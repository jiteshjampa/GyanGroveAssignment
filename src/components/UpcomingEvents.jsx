import React, { useEffect, useState } from "react";
import axios from "axios";
import location from "../images/location.png";
import loadingimage from "../images/loading.png";
const UpcomingEvents = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [image, setimage] = useState(); // Initialize to 0 instead of 1

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (page > 0 && page < 6) {
          const response = await axios.get(
            `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`
          );

          setData((prevData) => [...prevData, ...response.data.events]);
        }
      } catch (error) {
        console.error(error.message);
      }
      if (data) setLoading(false);
    };

    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleString("default", {
      month: "long",
    })} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <div className="relative -top-40 pl-4  flex  justify-center items-center  flex-col pr-4">
      <h1 className="font-Inter font-bold mb-4 mt-4 flex self-start">
        Upcoming Events{" ->"}
      </h1>
      <div className="grid grid-cols-3  gap-8 sm:grid-cols-1 lm:grid-cols-2 w-[90%]">
        {data.map((event, index) => (
          <div
            className="flex flex-col border-2 rounded-md border-[#d4d1d1] text-xs justify-center "
            key={index}
          >
            <div
              className=" h-40 flex    text-white  font-Inter  rounded-2xl  mt-4 mb-4"
              style={{
                backgroundImage: `url(https://drive.google.com/thumbnail?id=${
                  event.imgUrl.split("/")[5]
                }&sz=w1000)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="  flex items-end justify-center  w-full ls:-translate-y-2 t:-translate-y-3">
                <div className="bg-black bg-opacity-50 px-2 w-[91%] py-2 md:ml-0 ">
                  {formatDate(event.date)}
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-Inter font-bold mb-3 ml-3">
                {event.eventName}
              </h1>
            </div>
            <div className="flex justify-between font-Inter font-bold text-[#989090] p-2 t1:flex-col">
              <div className="flex justify-start items-center">
                <img src={location} alt="location" className="w-3 h-5 mr-1" />
                <span>{event.cityName}</span>
              </div>
              <div className="flex justify-end items-center">
                <span>{event.weather + " | "}</span>
                <span>{+Math.round(event.distanceKm) + "Km"}</span>
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-center items-center">
            <img
              src={loadingimage}
              alt="loading"
              className="animate-spin  w-28 flex justify-center items-center"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
