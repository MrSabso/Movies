import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./Search";

const Cards = () => {
  const [movie, setMovie] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-3/4 m-auto">
      <Search search={searchQuery} setSearch={setSearchQuery} setMovie={setMovie} />
      <div className="mt-20">
        <h2 className="text-white flex justify-center text-4xl uppercase font-jersey tracking-[4px] mb-10">
          Top rated movies
        </h2>
        <Slider {...settings}>
          {movie.map((val, index) => (
            <div key={index} className="bg-white h-[450px] text-black rounded-xl">
              <div className="h-56 rounded-t-xl bg-indigo-800 flex justify-center items-center">
                <img
                  src={val.Poster}
                  alt={val.Title}
                  className="h-44 w-44 rounded-full"
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{val.Title}</p>
                <p>{val.Year}</p>
                <button className="bg-indigo-800 text-white text-lg px-6 py-1 rounded-xl">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Cards;
