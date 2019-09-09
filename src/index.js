
require('normalize.css/normalize.css');
require('./styles/index.scss');
require('./assets/d.json');
require('./assets/github.json');
// require('./assets/bear.gif');
require('./assets/waves.json');
import lottie from 'lottie-web';

document.addEventListener("DOMContentLoaded", () => {

  
      lottie.loadAnimation({
        container: document.getElementById('d'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'd.json' // the path to the animation json
      });


      lottie.loadAnimation({
        container: document.getElementById('git'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'github.json' // the path to the animation json
      });

      lottie.loadAnimation({
        container: document.getElementById('waves'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'waves.json' // the path to the animation json
      });


      // lottie.addEventListener("mouseenter", function () {
      //   lottie.play();
      //   });

      //   lottie.addEventListener("mouseleave", function () {
      //   lottie.stop();
      // });
});
