import DownloadItem from "../DownloadItem";
import "./presentation.scss";
import moon from "../assets/pictures/icons/moon.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Presentation() {

  useEffect(() => {
    Aos.init({duration:2000});
}, []);

  return (
    <div className="presentation-container" id="a-propos">
      <svg
        className="rocket-logo"
        width="50px"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 511.001 511.001"
        enableBackground="new 0 0 511.001 511.001"
      >
        <path
          fill="grey"
          d="m255.5,112c-30.603,0-55.5,24.897-55.5,55.5s24.897,55.5 55.5,55.5 55.5-24.897 55.5-55.5-24.897-55.5-55.5-55.5zm0,96c-22.332,0-40.5-18.168-40.5-40.5s18.168-40.5 40.5-40.5 40.5,18.168 40.5,40.5-18.168,40.5-40.5,40.5z"
        />
        <path
          fill="grey"
          d="m255.5,144c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5c4.687,0 8.5,3.813 8.5,8.5 0,4.142 3.358,7.5 7.5,7.5s7.5-3.358 7.5-7.5c0-12.958-10.542-23.5-23.5-23.5z"
        />
        <path
          fill="grey"
          d="m379.812,379.735l-47.586-74.389c6.599-64.006 10.774-118.875 10.774-145.846 0-55.897-22.646-95.938-41.644-119.686-20.605-25.756-41.134-38.228-41.998-38.746-2.375-1.425-5.343-1.425-7.718,0-0.864,0.518-21.393,12.99-41.998,38.746-18.996,23.748-41.642,63.789-41.642,119.686 0,26.972 4.176,81.841 10.774,145.847l-47.595,74.403c-7.313,11.491-11.179,24.765-11.179,38.387v85.363c0,3.17 1.993,5.998 4.979,7.063 0.825,0.295 1.677,0.437 2.52,0.437 2.207,0 4.354-0.976 5.806-2.751l61.127-74.71c4.242,12.573 16.146,21.461 29.812,21.461h23.756v48.5c0,4.142 3.358,7.5 7.5,7.5s7.5-3.358 7.5-7.5v-48.5h23.756c13.667,0 25.57-8.888 29.813-21.461l61.126,74.71c1.453,1.775 3.599,2.751 5.806,2.751 0.843,0 1.695-0.143 2.52-0.437 2.985-1.065 4.979-3.894 4.979-7.063v-85.363c1.13687e-13-13.621-3.865-26.895-11.188-38.402zm-244.812,38.402c0-10.764 3.055-21.253 8.824-30.318l37.479-58.59c2.98,27.433 6.342,56.046 9.959,84.496l-56.262,68.764v-64.352zm151.757,21.863h-23.757v-128.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v128.5h-23.756c-8.239,0-15.259-6.183-16.328-14.381-5.233-40.141-9.991-81.017-13.915-118.782-0.013-0.282-0.043-0.561-0.087-0.838-6.677-64.385-10.914-119.611-10.914-146.499 0-29.053 6.373-56.004 18.975-80.5h61.525c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-52.83c3.17-4.892 6.603-9.677 10.312-14.346 13.88-17.468 27.928-28.459 34.516-33.129 8.182,5.813 27.891,21.447 44.697,47.475h-4.695c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5 7.5,7.5h13.369c10.977,21.359 19.131,48.117 19.131,80.5 0,26.887-4.237,82.116-10.914,146.502-0.043,0.273-0.073,0.548-0.086,0.826-3.924,37.767-8.682,78.646-13.916,118.791-1.069,8.199-8.088,14.381-16.327,14.381zm89.243,42.489l-56.262-68.765c3.618-28.45 6.979-57.063 9.959-84.496l37.469,58.575c5.779,9.081 8.833,19.57 8.833,30.333v64.353z"
        />
      </svg>
      <img className="moon-class" src={moon} alt=""/>
      <div className="text-about">
        <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">À Propos :</h2>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            Suite à une licence de philosophie, je décide de me lancer dans le
            digital et plus précisément dans la rédaction web et le SEO. Après
            plusieurs années dans ce domaine, j'ai eu envie de creuser de nouveaux
            sujets et connaître de nouveaux challenges. C'est en 2020 que je
            commence à me pencher sur les rudiments l'intégration. L'intérêt
            grandissant et l'envie d'en faire mon nouveau métier s'impose
            rapidement. C'est la raison pour laquelle j'intègre la formation de
            Développeur Web de l'école O'clock (promotion Valkyrie 2021). Durant cette formation je décide de m'orienter vers le language React.{" "}
          </p>
        <DownloadItem />
      </div>
    </div>
  );
}

export default Presentation;
