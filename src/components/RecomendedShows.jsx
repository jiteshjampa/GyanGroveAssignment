import React, { useEffect, useState, useRef, Children } from "react";
import axios from "axios";
import location from "../images/whitelocation.png";
import loadingimage from "../images/loading.png";
const RecommendedShows = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
        );

        setData(response.data.events);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setLoading]);

  return (
    <div className="relative -top-40   flex justify-center items-center">
      <div className="flex flex-col w-[90%]  overflow-hidden ">
        <h1 className="text-white font-Inter font-semibold mb-4">
          Recommended Shows {" ->"}
        </h1>
        <div className="flex animation ">
          <div className="flex  w-full ">
            {data.map((event, index) => (
              <div
                key={event.eventName}
                className={`flex flex-col justify-end items-stretch p-6  leading-6 font-Inter   text-white h-80 text-xs `}
                style={{
                  minWidth: "300px",
                  maxWidth: "400px",
                  backgroundImage: `url(https://drive.google.com/thumbnail?id=${
                    event.imgUrl.split("/")[5]
                  }&sz=w1000)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }} // Adjust min and max width as needed
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-bold">{event.eventName}</h2>
                  </div>
                  <div>
                    <span>{event.date.split("T")[0]}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img src={location} alt="location" className="w-5 h-6" />
                    <span>{event.cityName}</span>
                  </div>
                  <div>
                    <span>{event.weather + " | "}</span>
                    <span>{+Math.round(event.distanceKm) + "Km"}</span>
                  </div>
                </div>
              </div>
            ))}
            {data.map((event, index) => (
              <div
                key={event.eventName}
                className={`flex flex-col justify-end items-stretch p-6  leading-6 font-Inter   text-white h-80 text-xs `}
                style={{
                  minWidth: "300px",
                  maxWidth: "400px",
                  backgroundImage: `url(https://drive.google.com/thumbnail?id=${
                    event.imgUrl.split("/")[5]
                  }&sz=w1000)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }} // Adjust min and max width as needed
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-bold">{event.eventName}</h2>
                  </div>
                  <div>
                    <span>{event.date.split("T")[0]}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <img src={location} alt="location" className="w-5 h-6" />
                    <span>{event.cityName}</span>
                  </div>
                  <div>
                    <span>{event.weather + " | "}</span>
                    <span>{+Math.round(event.distanceKm) + "Km"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default RecommendedShows;
