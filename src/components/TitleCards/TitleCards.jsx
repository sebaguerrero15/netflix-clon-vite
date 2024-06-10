import "./TitleCards.css"
import cards_data from "../../assets/cards/Cards_data"
import { useRef, useEffect } from "react"

const TitleCards = ({title, category}) => {

  const cardsRef = useRef()

  const handlewheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY
  }

  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handlewheel)
  }, [])

  
  return (
    <div className="title-cards">
       <h2>{title?title:"Selección para ti"}</h2>
        <div className="card-list" ref={cardsRef}>
          {cards_data.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.image} alt="imagen-pelicula" />
              <p>{card.name}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default TitleCards