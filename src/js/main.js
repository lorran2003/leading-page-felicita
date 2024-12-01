import "../css/style.css";
import "../css/carousel.css";
import logo from "/logo.jpg";
import wppLogo from "../images/icons/whatsapp.svg";
import shop from "../images/icons/bag-fill.svg";
import bg from "../images/plano_de_fundo.jpeg";
import bgDesktop from "../images/fundo-dourado-desktop.avif";
import Carousel from "./carousel.js";
import SubmitWpp from "./mensageWpp.js";

const { html, init,auto } = Carousel();

const widthView = window.innerWidth;

document.querySelector("#app").innerHTML = `

<div id="container">

  <div id="bgImage">
      <img src="${widthView > 430 ? bgDesktop : bg}" alt="logo" />
  </div>

  <div id="content">

    <div id="containerWelcome">
      <img src="${logo}" alt="logo" width="150" />
      <h1>Seja bem vindo!</h1>
    </div>

    <div id="mainContainer">

      <button id="whatsapp-button" >
        <img src="${wppLogo}" alt="logo whatsapp" width="40" />
          Whatsapp
      </button>
      
      <button id="btnSite" disabled>
          <img src="${shop}" alt="logo whatsapp" width="40" />
          Site
      </button>

      <div id="carousel">
          ${html}
      </div>

    </div>

  </div>

</div>
`;

init();
auto(true);
SubmitWpp();