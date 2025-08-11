import "../css/style.css";
import "../css/carousel.css";
import logo from "/logo.jpg";
import wppIcon from "../images/icons/whatsapp.svg";
import instagramIcon from "../images/icons/instagram.svg";
import party from "../images/icons/confete.png";
import Carousel from "./carousel.js";
import SubmitWpp from "./mensageWpp.js";

function instagramPage() {
  document.querySelector("#instagram-button").addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/felicitafestasrio/";
  });
}
function siteKitsParty() {
  document.querySelector("#btnSite").addEventListener("click", () => {
    window.location.href = "https://kitfesta.netlify.app/";
  });
}

const { html, init, auto } = Carousel();

document.querySelector("#app").innerHTML = `

<div id="container">

  <div id="content">

    <div id="mainContainer">

      <div id="containerWelcome">
        <img src="${logo}" alt="logo" width="150" />
        <h1>Seja bem vindo!</h1>
      </div>

        <button id="whatsapp-button" >
          <img src="${wppIcon}" alt="logo whatsapp" width="40" />
            Whatsapp
        </button>

        <button id="instagram-button" >
          <img src="${instagramIcon}" alt="logo whatsapp" width="40" />
            Instagram      
          </button>
        
        <button id="btnSite">
            <img src="${party}" alt="logo whatsapp" width="40" />
            Kits Festa
        </button>
    </div>

      
      
      <div id="carousel">
      ${html}
      </div>
  
  </div>
</div>
`;

init();
auto(true);
SubmitWpp();
instagramPage();
siteKitsParty();
