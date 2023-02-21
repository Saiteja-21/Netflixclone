import "./Banner.css";
 import { useState, useEffect } from "react";
 import axios from "axios";
 import requests from "../../request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  
  
  useEffect(() => {

    axios.get(requests.fetchNetflixOriginals)
    .then(res=>{
      //console.log(res)
       setMovie(res.data.results[Math.floor(Math.random()*19)])
       console.log(res.data.results[0]);
    
    })
   
   
   
  },[]);

  return (
    <div >
      <header className="banner" style={{backgroundImage:`URL(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}}>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.name}
        </h1>
        <button className="banner__button">Play</button>
        <button className="banner__button">My Lists</button>
        <p className="banner__description">{movie.overview}</p>
      </div>
      </header>
   </div>
    

  );

      };
export default Banner;
