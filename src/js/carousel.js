import left from "../images/icons/chevron-left.svg";
import right from "../images/icons/chevron-right.svg";
import stich from "../images/carousel/stich.jpg";
import vingadores from "../images/carousel/vingadores.jpg";
import menie from "../images/carousel/menie.jpg";
import cars from "../images/carousel/cars.jpg";
import divertidaMente from "../images/carousel/divertida_mente.jpg";

export default function Carousel() {
  let currentSlide = 0;
  const images = [stich, vingadores, menie, cars, divertidaMente];

  function changeSlide(direction) {
    const carouselInner = document.querySelector("#carousel-inner");
    const totalSlides = images.length;

    currentSlide += direction;

    if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    }

    const offset = -currentSlide * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
  }

  function initCarousel() {
    const prevButton = document.querySelector("#prev-button");
    const nextButton = document.querySelector("#next-button");

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        changeSlide(-1);
        autoSlider(false);
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        changeSlide(1);
        autoSlider(false);
      });
    }
  }

  let autoSlideInterval; 

  function autoSlider(play) {
    if (play) {
      
      if (!autoSlideInterval) {
        autoSlideInterval = setInterval(() => {
          changeSlide(1); // 
        }, 3000);
      }
    } else {
      
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }
  }

  const carouselHTML = `  
    <div class="carousel">
      <div id="carousel-inner" class="carousel-inner">
        ${images
          .map(
            (img, index) => `
          <div class="carousel-item">
            <img src="${img}" alt="Image ${index + 1}">
          </div>
        `
          )
          .join("")}
      </div>
      
      <div class="carousel-controls">
        <button id="prev-button">
          <img src="${left}" width="40" alt="Anterior">
        </button>
        
        <button id="next-button">
          <img src="${right}" width="40" alt="Próximo">
        </button>
      </div>
    </div>
  `;

  return {
    html: carouselHTML,
    init: initCarousel,
    auto: autoSlider,
  };
}
