import "./Player.css"
import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Player = () => {

const {id} = useParams();
const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTMwYTUwYjc0YjM5NTRkYWZhZjA2MzUzZWIwZTgxZSIsInN1YiI6IjYzZDU1NDY2MjBlNmE1MDBkNTQzNTk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jO2ePiqe7i1yrC9WyBmWXVuSqi0YB5kQjWCUERLtV1U'
    }
  };

  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-MX`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  }, [])
  
  


  return (
    <div className="player">
      <img src={back_arrow_icon} alt="volver-atras-icono" onClick={() => {navigate(-2)}} />
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder="0" allowFullScreen></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.typeof}</p>
        </div>
    </div>
  )
}

export default Player