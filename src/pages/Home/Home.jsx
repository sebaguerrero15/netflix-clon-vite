import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_icon from "../../assets/play_icon.png"
import info_icon from "../../assets/info_icon.png"
import TitleCards from "../../components/TitleCards/TitleCards"

const Home = () => {
  return (
    <div className='home'>
        <Navbar />
        <div className="hero">
        <img src={hero_banner} alt="wallpaper-home" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="logo-pelicula" className="caption-img" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur hic consequuntur quis accusamus rerum quo illo ipsa, molestias laboriosam ratione. Doloremque, quidem aliquid? Sunt dicta reiciendis quis numquam quo debitis!</p>
          <div className="hero-btns">
            <button className="btn"><img src={play_icon} alt="boton-play" />Play</button>
            <button className="btn dark-btn"><img src={info_icon} alt="boton-info" />Más Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Series Populares"} category={"series"} />
      <TitleCards title={"Peliculas Populares"} category={"peliculas"}/>
      <TitleCards title={"Mas Populares"} category={"mas-populares"} />
      <TitleCards title={"Mejor Calificadas"} category={"mejor-calificadas"}/>
      </div>
      <Footer />
    </div> 
  )
}

export default Home