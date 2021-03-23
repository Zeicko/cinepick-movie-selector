import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image from "./img/cine.png";


const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;



function HomePage() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState([]);


  useEffect(() =>{
    const api = axios.create({ baseURL: BASE_URL });
    api.get("/movie/upcoming", { params: { api_key, page:2 }  })
    .then((res) => {
      setMovies(res.data.results);
    });
  }, []);


  const onChangelistener = (e) => {

  }

  return (
    <body>
      <header className="App-header">
        <img src ={image} style={{width : "560px"}} alt="PosterImage" className="logo"/>
      </header>
      <input value = "" placeholder ="Search your movie" key="random1" onChange= { onChangelistener } />
      <div className ="grid">
        {movies.map(({ title, poster_path, id }) => (
          <div className="item">
              <p style={{color: "#FFFFFF"}}>{ title }</p>
              <Link to={ `/movie/${id}` }>
                  <img style = {{borderRadius : "20px"}}classname="posterPicture" src={ getImage(poster_path) } alt ="PosterImage"/>
              </Link>
          </div>
        ))}
      </div>
      
    </body>
  );
}

export default HomePage;