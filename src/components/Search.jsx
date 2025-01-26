import React, { useEffect } from 'react'
const Search = ({ search, setSearch, setMovie }) => {

    const fetchMovie = async (query = "marvel") => {
          const URL = `https://www.omdbapi.com/?s=${query}&apikey=652ed1e2`;
          const response = await fetch(URL);
          const finalData = await response.json();
          setMovie(finalData.Search || []);
      };
    
      useEffect(() => {
        fetchMovie();
      }, []);
    
      const handleSubmit = (e) => {
        e.preventDefault(); 
        if (search.trim()) {
          fetchMovie(search);
        }
      };

  return (
    <form
      className="py-11 flex items-center justify-center gap-2"
      onSubmit={handleSubmit}
    >
      <h3 className="mr-4 text-2xl text-white">
        Find your favourite movies here
      </h3>
      <input
        className="bg-white text-[#5a3e2b] font-inherit border-none rounded-full px-8 py-3 font-bold text-lg"
        type="text"
        placeholder="Movies..."
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-white text-[#5a3e2b] font-inherit border-none rounded-full px-8 py-3 font-bold text-lg cursor-pointer"
        type="submit"
      >
        Search
      </button>
    </form>
  )
}

export default Search
