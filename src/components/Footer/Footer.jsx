import "./Footer.css"
import youtube_icon from "../../assets/youtube_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-icons">
          <img src={youtube_icon} alt="youtube-icono" />
          <img src={twitter_icon} alt="twitter-icono" />
          <img src={instagram_icon} alt="instagram-icono" />
          <img src={facebook_icon} alt="facebook-icono" />
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Audio Description</li>
          <li>Terminos y Condiciones</li>
          <li>Contactanos</li>
        </ul>
        <p className="copyright-text">© 2024 Netflix</p>
    </div>
  )
}

export default Footer