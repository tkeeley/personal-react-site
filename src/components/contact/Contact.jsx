import "./contact.css";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Html from "../../img/html.png";
import Css from "../../img/css.png";
import Js from "../../img/js.png";
import Php from "../../img/php.png";
import Wp from "../../img/wp.png";
import ReactLogo from "../../img/react.png";
import Svelte from "../../img/svelte.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="skills">
          <img src={Html} alt="html" />
          <img src={Css} alt="css" />
          <img src={Js} alt="js" />
          <img src={Php} alt="php" />
          <img src={Wp} alt="wp" />
          <img src={ReactLogo} alt="react" />
          <img src={Svelte} alt="svelte" />
        </div>
        <div className="c-left">
          <h1 className="c-title">Let's create something together!</h1>
          <a href="mailto:tim@timkeeley.com"><FontAwesomeIcon icon={faEnvelope} />tim@timkeeley.com</a>
        </div>
      </div>
      <p className="copy">
      &#169; {new Date().getFullYear()} Tim Keeley<br/>
      Website build on React <FontAwesomeIcon icon={faReact} />
      </p> 
    </div>
  );
};

export default Contact;
