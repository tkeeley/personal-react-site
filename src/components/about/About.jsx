import "./about.css";
import Cartoon from "../../img/cartoon.jpeg";
import meAbout from "../../img/tim1.jpeg";


const About = () => {
  return (
    <div>
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <h1 className="a-title sm" style={{display:"none"}}>About Me</h1>
        <div className="a-card">
        <img src={meAbout} alt="" className="i-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title lg">About Me</h1>
        <p className="a-sub">
        I'm Tim. I'm a Web Developer/Designer/Digital Marketing Content Creator with a passion for photography 📸.
        </p>
        <p className="a-desc">
        When I'm not creating inventions that might one day take over the world, you will find me playing with my awesome daughter. If you follow me on social media you'll see we love southern Jersey and spend as much time there as possible. Ocean City NJ is one of our favorite places to be! We spend lots of time there in the off season and exploring the beaches and surrounding beach towns. You can follow all my OC adventures through my<a href="https://www.theocnjlife.com" target="_blank" rel="noreferrer"> <span className="ocnjlink">theOCNJlife</span></a> project.
        </p>
        <div className="a-callout lg">
          <img src={Cartoon} alt="" className="a-callout-img" />
          <div className="a-callout-texts">
            <h4 className="a-callout-title">Check out some of my work</h4>
            <p className="a-callout-desc">
            Please feel free to take a look at the work I do for my company <a href="https://www.cupocode.com" target="_blank" rel="noreferrer">Cup O Code</a>, see of my work in my <a href="https://www.timkeeley.com/portfolio" target="_blank">Portfolio</a> check out my <a href="https://www.timkeeley.com/resume" target="_blank" rel="noreferrer">Résumé</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="a-callout sm" style={{display:"none"}}>
          <img src={Cartoon} alt="" className="a-callout-img" />
          <div className="a-callout-texts">
            <h4 className="a-callout-title">Check out some of my work</h4>
            <p className="a-callout-desc">
            Please feel free to take a look at the work I do for my company <a href="https://www.cupocode.com" target="_blank" rel="noreferrer">Cup O Code</a>, see of my work in my <a href="https://www.timkeeley.com/portfolio" target="_blank" rel="noreferrer">Portfolio</a> check out my <a href="https://www.timkeeley.com/resume" target="_blank" rel="noreferrer">Resume</a>.
            </p>
          </div>
        </div>
        </div>
    
  );
};

export default About;
