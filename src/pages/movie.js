import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
const getVideo = (path) => `https://www.youtube.com/watch?v=${path}`;

function MoviePage() {
  const params = useParams()
  const [movieInfo, setMovieInfo] = useState({ title : "" });


  useEffect(() =>{
    const api = axios.create({ baseURL: BASE_URL });
    api.get(`/movie/${params.id}`, { params: { api_key } })
    .then((res) => {
      setMovieInfo(res.data);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className ="grid">
          {/* <img  className ="backGround" src = {getImage(movieInfo.backdrop_path)} alt = "Background" /> */}
          <div className = "MainTitle">
          {movieInfo.title}
          </div>

          {/* <img src = { getImage(movieInfo.poster_path) } alt ="Poster"/>
          {movieInfo.release_date}
          {movieInfo.popularity}
          {movieInfo.overview} */}
          <p>Date de sortie : {movieInfo.release_date}</p>
          <p>Durée du film : {movieInfo.runtime} minutes </p> 

        </div>
      </header>
    </div>
  );
}

export default MoviePage;