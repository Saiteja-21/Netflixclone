 import { useState, useEffect } from "react";
 import axios from "axios";
 import "./Row.css";
import YouTube from "react-youtube";
 import movieTrailer from "movie-trailer";

 
 //const baseUrl = "https://image.tmdb.org/t/p/original";
 const Row = (props) => {
  console.log(props.isLargeRow)
 
   
  const [movies, setMovies] = useState([]);
   const [trailerUrl, setTrailerUrl] = useState("");
 console.log(props.title);
  useEffect(() => {
    axios.get(props.fetchUrl)
    .then(res=>{
      
     setMovies(res.data.results)
     console.log(res.data.results)

    })

  }, [props.fetchUrl]);
  const opts = {
    height: "390",
    width: "740",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    
    <div className="row">
        <h2>
      {props.title} 
    </h2>
    <div className="row__posters">
      {movies.map((ele)=>
        <img className={"row__poster" }  onClick={()=>handleClick(ele) } src={`https://image.tmdb.org/t/p/original/${props.isLargeRow?ele.poster_path:ele.backdrop_path}`} alt="not found"/>
      )}
    
    </div>
    {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={opts}
          className="youtube" // defaults -> null
        />
      )}{" "} 
   
    </div>
   
    
   
  );
};

export default Row;

