import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import image from "./img/cine.png";

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
      setdataLoaded(true)
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
          <img src ={image} style={{width : "560px"}} alt="PosterImage" className="logo"/>
          </header>
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
                      <p className="date"><strong>Date de sortie : </strong>{movieInfo.release_date}</p>
                      <p className="time"><strong>Durée du film : </strong>{movieInfo.runtime} minutes </p>
                      
                      <div className="catégorie"><p><strong>Catégorie(s) :</strong></p>{movieInfo.genres.map((genre) =>
                        <p className='genres'>{genre.name}</p>
                      )}
                      </div>
                      <div className="productionCompagnie" ><span><strong>Compagnie de production :</strong></span>{movieInfo.production_companies.map((company) =>
                        
                        <span  id="prod"className='genres'> {company.name}, {company.origin_country} ;</span>
                        
                        )}
                      </div>
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
          
        </div>
    </body>
  );
}

export default MoviePage;