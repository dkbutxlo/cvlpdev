
require('normalize.css/normalize.css');
require('./styles/index.scss');
require('./assets/8306-programming-animation.json'); 
import lottie from 'lottie-web';

document.addEventListener("DOMContentLoaded", () => {
    lottie.loadAnimation({
        container: document.getElementById('bm'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '8306-programming-animation.json' // the path to the animation json
      });
});


