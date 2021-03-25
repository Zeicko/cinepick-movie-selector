import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image from "./img/cine.png";


const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;



function HomePage() {
  const [movies, setMovies] = useState([]);
  const [printedMovies, setPrintedMovies] = useState([]);
  const [filter, setFilter] = useState("");


  useEffect(() => {
    axios.get(`${BASE_URL}/movie/upcoming`, { params: { api_key, page:2 }  })
    .then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  
  
  useEffect(() => {
    if (filter === ""){
      setPrintedMovies(movies)
    } else {
      axios.get(`${BASE_URL}/search/movie`, { params: { api_key, query : filter }  })
      .then((res) => {
        setPrintedMovies(res.data.results);
      });
    }
  }, [movies, filter]);


  // useEffect(() => {
  //   const filteredMovies = movies.filter((movie) => {
  //     return movie.title.toLowerCase().includes(filter.toLowerCase());
      
  //   });
    
  //   setPrintedMovies(filteredMovies)
  // }, [movies, filter]);


  return (
    <body>
      <header className="App-header">
        <nav>
          <ul className="list">
            <li className="items">Accueil</li>
            <li className="items">Catalogue</li>
            <li className="items">Nouveautés</li>
          </ul>
          <button className="btn">BTN</button>
        </nav>
      </header>
      <input  className ="searchBar" value = {filter} placeholder ="Search your movie" key="inputMovie" onChange= { (e) => { setFilter(e.target.value)} } />
      <div className ="grid">
        {printedMovies.map(({ title, poster_path, id , release_date}) => (
          <div className="item" key = {id}>
              <p style={{color: "#FFFFFF"}}>{ title }</p>
              <Link to={ `/movie/${id}` }>
                  <img style = {{borderRadius : "20px"}}className="posterPicture" src={ getImage(poster_path) } alt ="PosterImage"/>
              </Link>
            {release_date}
          </div>
        ))}
      </div>
      
    </body>
  );
}

export default HomePage;