import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
// const getVideo = (path) => `https://www.youtube.com/watch?v=${path}`;

function MoviePage() {
  const params = useParams()
  const [movieInfo, setMovieInfo] = useState({ title : "", genres : [] });
  const [dataloaded, setdataLoaded] = useState(false);




  useEffect(() =>{
    const api = axios.create({ baseURL: BASE_URL });
    api.get(`/movie/${params.id}`, { params: { api_key } })
    .then((res) => {
      setMovieInfo(res.data);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <body className="bodymovie">
        <div className="App">
          <header className="App-header">
            <div className ="container">
              {/* <img  className ="backGround" src = {getImage(movieInfo.backdrop_path)} alt = "Background" /> */}
              <div className = "MainTitle">
                <div className="flextitle">
                  {movieInfo.title}
                </div>
              </div>
              <div className="divbox">
                <div className="maindiv">
                  <div className="second div">
                    <img src = { getImage(movieInfo.poster_path) } alt ="Poster"/>

                    </div>
                  <div className="third-div">
                    <div className="divNumber">
                      <p>Date de sortie : {movieInfo.release_date}</p>
                      <p>Durée du film : {movieInfo.runtime} minutes </p>
                      <p>{movieInfo.status}</p>
                       {movieInfo.genres[1].name}
                    </div>
                    <div className="divsynopsis">
                        <h3>Synopsis</h3>
                        {movieInfo.overview}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
    </body>
  );
}

export default MoviePage;