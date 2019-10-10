
require('normalize.css/normalize.css');
require('./styles/index.scss');
require('./assets/d.json');
// require('./assets/waves.json');

import lottie from 'lottie-web';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import lozad from 'lozad';
import luxy from 'luxy.js';

// const observer = lozad();
// observer.observe();

AOS.init();
luxy.init();

document.onmousemove = function(e) {
      document.body.style.setProperty("--x", e.clientX + "px");
      document.body.style.setProperty("--y", e.clientY + "px");
    };

var clickableElements = document.querySelectorAll(".clickable");


document.addEventListener("DOMContentLoaded", () => {

      lottie.loadAnimation({
        container: document.getElementById('d'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'd.json' // the path to the animation json
      });
      lottie.loadAnimation({
        container: document.getElementById('pc'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'pc.json' // the path to the animation json
      });
      //
      //
      // lottie.loadAnimation({
      //   container: document.getElementById('waves'), // the dom element that will contain the animation
      //   renderer: 'svg',
      //   loop: false,
      //   autoplay: true,
      //   path: 'waves.json' // the path to the animation json
      // });
      
      clickableElements.forEach(elm => {
        elm.addEventListener("mouseover", function() {
          document.body.classList.add("link-hovered");
        });
        elm.addEventListener("mouseleave", function() {
          document.body.classList.remove("link-hovered");
        });
      });


});
