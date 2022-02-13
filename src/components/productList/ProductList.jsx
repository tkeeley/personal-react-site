import "./productList.css";
import Product from "../product/Product";
import { websites } from "../../data";
import { photography } from "../../data";
import { design } from "../../data";


const ProductList = () => {
  return (
    <div className="pw" id="portfolio">
      <div className="pw-texts">
      <h1 className="pw-title">View my work<span className="brandColor">.</span></h1>
        <p className="pw-desc">
          I hope you enjoy these examples of some of my work. <br /> 
          From website design/development to photography/videography to graphic design/digital ad creation - I enjoy the process of creating a digital experience for real world situations and events.
        </p>
      </div>
      <h4 className="pw-title">Websites<span className="brandColor">.</span></h4>
      <div className="pw-list websites">
        {websites.map((item) => (
          <Product key={item.id} 
          img={item.img} 
          // link={item.link}
           />
        ))}
      </div>
      
      <h4 className="pw-title">Photography<span className="brandColor">.</span></h4>
      <div className="pw-list photography">
        {photography.map((item) => (
          <Product key={item.id} 
          img={item.img} 
          // link={item.link}
           />
        ))}
      </div>
      
      <h4 className="pw-title videos">Videos<span className="brandColor">.</span></h4>
      <div className="pw-list vid-grid">
      <iframe width="1190" height="315" src="https://www.youtube.com/embed/GWgLzhI64QA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/BjbU4BuQn14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/xnfRdaD8h9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hqA4rfsYO3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VY3fAnBe4XU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VDfWCOLnNIU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      <h4 className="pw-title">Design<span className="brandColor">.</span></h4>
      <div className="pw-list design">
        {design.map((item) => (
          <Product key={item.id} 
          img={item.img} 
          // link={item.link}
           />
        ))}
      </div>

    </div>
  );
};

export default ProductList;
