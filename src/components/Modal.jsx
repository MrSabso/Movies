import { X } from "lucide-react";
import { useEffect, useState } from "react";

const Modal = ({ movie, onClose }) => {
  const [movieDetails, setMovieDetails] = useState(movie);

  const getMovieDetails = async () => {
    try {
      const URL = `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=652ed1e2`;
      const response = await fetch(URL);
      const finalData = await response.json();
      setMovieDetails(finalData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-indigo-600 rounded-xl p-6 flex flex-col gap-4 items-center max-w-[100vh] mx-4 max-h-[90vh] overflow-hidden text-white shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white"
        >
          <X size={30} />
        </button>
        <h1 className="text-2xl font-bold text-center">{movieDetails.Title}</h1>
        <img
          src={movieDetails.Poster}
          alt={movieDetails.Title}
          className="rounded-lg w-full max-w-xs"
        />
        <p className="text-sm text-center">
          <span className="font-semibold">Movie Plot:</span> {movieDetails.Plot}
        </p>
        <p>
            <span className="font-semibold">actors:</span> {movieDetails.Actors}
        </p>
      </div>
    </div>
  );
};

export default Modal;
