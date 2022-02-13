import "./intro.css";
import Me from "../../img/me.png";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Intro = () => {
  return (
    <div>
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Tim Keeley</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Digital Ad Designer</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">Digital Marketer</div>
              <div className="i-title-item">Photographer</div>
            </div>
          </div>
          <p className="i-desc">
          I'm Tim. I'm a Web Developer Designer and Digital Marketing Content Creator. I am always trying to learn new skills and stay ahead of the technology curve. Whether I'm working with a team or on my own, I enjoy the problem solving and creative process of developing a new product or solution.
          </p>
          <div className="social-icons">
          <a href="https://facebook.com/hi.im.TimKeeley" target="_blank" rel="noreferrer" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.instagram.com/tim_keeley" target="_blank" rel="noreferrer" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com/in/timothykeeley" target="_blank" rel="noreferrer" aria-label="Linkedin"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
     <div className="m-border-bottom"></div>
     </div>
  );
};

export default Intro;
