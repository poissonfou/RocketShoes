import "./Footer.css";
import arrow from "../../assets/icon-arrow.svg";
import video from "../../assets/img-video.png";

function Footer() {
  return (
    <footer>
      <img src={video} alt="video thumbnail" />

      <div className="socials">
        <p>FACEBOOK</p>
        <p>INSTAGRAM</p>
        <p>YOUTUBE</p>
        <p>TWITTER</p>
      </div>

      <div className="explore">
        <p>EXPLORE</p>
        <img src={arrow} alt="arrow icon" />
      </div>
    </footer>
  );
}

export default Footer;
