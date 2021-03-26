import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import image from "./img/cine.png";
import gang from "./img/GS.png"



const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;



function HomePage() {
  const [movies, setMovies] = useState({});
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (filter === ""){
      axios.get(`${BASE_URL}/movie/upcoming`, { params: { api_key, page }  })
      .then((res) => {
        setMovies(res.data);
      });
    } else {
      axios.get(`${BASE_URL}/search/movie`, { params: { api_key, query : filter }  })
      .then((res) => {
        setMovies(res.data);
      });
    }
  }, [filter, page]);


  // useEffect(() => {
  //   const filteredMovies = movies.filter((movie) => {
  //     return movie.title.toLowerCase().includes(filter.toLowerCase());
      
  //   });
    
  //   setPrintedMovies(filteredMovies)
  // }, [movies, filter]);


  return (
    <body>
      <header className="App-header">
      <img src ={image} style={{width : "560px"}} alt="PosterImage" className="logo"/>
        <nav>
          <ul className="list">
            <li className="items">Accueil</li>
            <li className="items">Catalogue</li>
            <li className="items">Nouveautés</li>
            <li className="item_Espace">Mon Espace</li>
          </ul>
          <button className="btn">BTN</button>
        </nav>
      </header>
      <input  className ="searchBar" value = {filter} placeholder ="Rechercher votre film" key="inputMovie" onChange= { (e) => { setFilter(e.target.value)} } />
      <img src></img>
      {movies.results &&
        <div className ="grid">
          {movies.results.map(({ title, poster_path, id , release_date}) => (
            <div className="item" key = {id}>
                
                <Link to={ `/movie/${id}` }>
                    <img style = {{borderRadius : "20px"}}className="posterPicture" src={ getImage(poster_path) } alt ="PosterImage"/>
                </Link>
                <p style={{color: "#FFFFFF"}}>{ title }</p>
              {release_date}
            </div>
          ))}
        </div>
      }
      
      { filter === "" && 
        <div className="slider">
          {page > 1 && <button onClick={()=> {setPage(page - 1)}}>Précédent</button>}
          <span>{movies.page}</span>
            {page < movies.total_pages && <button className="btn2" onClick={()=> {setPage(page + 1)}}>Suivant</button>}
        </div>
      }
      <div className='wavemoving'>
      </div>
    </body>
  );
}

export default HomePage;