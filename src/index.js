
require('normalize.css/normalize.css');
require('./styles/index.scss');


document.addEventListener("DOMContentLoaded", () => {

    lottie.loadAnimation({
        container: '.lottiecont', // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/8306-programming-animation.json' // the path to the animation json
      });
    
});


