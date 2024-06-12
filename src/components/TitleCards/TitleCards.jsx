import "./TitleCards.css"
import { useRef, useEffect, useState } from "react"
import { Link } from "react-router-dom";

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef()
  const imageUrl = "https://image.tmdb.org/t/p/w500/"

  const handlewheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTMwYTUwYjc0YjM5NTRkYWZhZjA2MzUzZWIwZTgxZSIsInN1YiI6IjYzZDU1NDY2MjBlNmE1MDBkNTQzNTk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jO2ePiqe7i1yrC9WyBmWXVuSqi0YB5kQjWCUERLtV1U'
    }
  };
  

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing?"}?language=es-MX&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handlewheel)
  }, [])

  
  return (
    <div className="title-cards">
       <h2>{title?title:"Selección para ti"}</h2>
        <div className="card-list" ref={cardsRef}>
          {apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`${imageUrl}${card.backdrop_path}`} alt="imagen-pelicula" />
              <p>{card.original_title}</p>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default TitleCards