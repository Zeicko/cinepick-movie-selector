import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
// const getVideo = (path) => `https://www.youtube.com/watch?v=${path}`;

function MoviePage() {
  const params = useParams()
  const [movieInfo, setMovieInfo] = useState({});
  const [dataloaded, setdataLoaded] = useState(false);
  // const [similarMovie, setSimilarMovie] = useState([0]);




  useEffect(() =>{
    const api = axios.create({ baseURL: BASE_URL });
    api.get(`/movie/${params.id}`, { params: { api_key } })
    .then((res) => {
      console.log(res.data)
      setMovieInfo(res.data)
      setdataLoaded(true);
      // setSimilarMovie(res.data);
    });
    // api.get(`/movie/${params.id}/similar`, { params: { api_key }})
    // .then((res) => {
    //   setSimilarMovie(res.data);
    // });
    // eslint-disable-next-line
  }, []);
  if (!dataloaded) {
    return <div>Loading...</div>
  } 
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
                      {movieInfo.genres.map((genre) =>
                        <p className='genres'> {genre.name} </p>
                      )}
                      {movieInfo.production_countries.map((country) =>
                        <p className='genres'> {country.iso_3166_1} </p>
                      )}
                      {movieInfo.production_companies.map((company) =>
                        <div>
                        <p className='genres'> {company.name} </p>
                        <p className='genres'> {company.origin_country} </p>  
                        </div>
                        )}
                    </div>
                    <div className="divsynopsis">
                        <h3>Synopsis</h3>
                        {movieInfo.overview}
                        {movieInfo.homepage}
                        {movieInfo.vote_average}
                        
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