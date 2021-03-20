import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function MoviePage() {
  const params = useParams()
  const [data, setData] = useState({title : "" });

  const api = axios.create({ baseURL: BASE_URL });

  useEffect(() =>{
    api.get(`/movie/${params.id}`, { params: { api_key } })
    .then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className ="grid">
          { data.title }
        </div>
      </header>
    </div>
  );
}

export default MoviePage;