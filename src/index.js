
require('normalize.css/normalize.css');
require('./styles/index.scss');
require('./assets/d.json');
require('./assets/waves.json');

import lottie from 'lottie-web';
import AOS from 'aos';
import 'aos/dist/aos.css';
import lozad from 'lozad';

const observer = lozad();
observer.observe();

AOS.init();


document.addEventListener("DOMContentLoaded", () => {

      lottie.loadAnimation({
        container: document.getElementById('d'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'd.json' // the path to the animation json
      });


      lottie.loadAnimation({
        container: document.getElementById('waves'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'waves.json' // the path to the animation json
      });



});
