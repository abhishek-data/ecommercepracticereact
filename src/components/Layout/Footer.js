import "../pages/PageStyle.css";
import facebook from "../../Image/Facebook Logo.png";
import youtube from "../../Image/YouTube Logo.png";
import spotify from "../../Image/Spotify Logo.png";

const Footer = (props) => {
  return (
    <footer className="main-footer">
      <div className="container main-footer-container">
        <h3 className="band-name">Indian Ocean</h3>
        <ul className="nav footer-nav">
          <li>
            <a to="route" href="https://www.youtube.com" target="_blank">
              <img src={youtube} />
            </a>
          </li>
          <li>
            <a href="https://www.spotify.com" target="_blank">
              <img src={spotify} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <img src={facebook} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
