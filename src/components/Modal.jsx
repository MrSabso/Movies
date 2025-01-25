import { X } from "lucide-react";

const Modal = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-indigo-600 rounded-xl px-10 py-8 flex flex-col gap-5 items-center max-w-4xl w-full mx-4 text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white"
        >
          <X size={30} />
        </button>
        <h1 className="text-4xl font-extrabold">{movie.Title}</h1>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="rounded-xl w-full max-w-sm"
        />
        <p className="text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
          ligula at turpis tincidunt. (Replace with actual description if
          available)
        </p>
      </div>
    </div>
  );
};

export default Modal;
