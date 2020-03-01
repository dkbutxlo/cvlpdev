
require('normalize.css/normalize.css');
require('./styles/index.scss');
require('./assets/d.json');

// require('./assets/waves.json');
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import lottie from 'lottie-web';
import AOS from 'aos';
import 'aos/dist/aos.css';



AOS.init();


document.onmousemove = function(e) {
      document.body.style.setProperty("--x", e.clientX + "px");
      document.body.style.setProperty("--y", e.clientY + "px");
    };

    const analytics = Analytics({
      app: 'awesome-app',
      plugins: [
        googleAnalytics({
          trackingId: 'UA-159238801-1'
        })
      ]
    })
    
    /* Track a page view */
    analytics.page()

document.addEventListener("DOMContentLoaded", () => {

      lottie.loadAnimation({
        container: document.getElementById('d'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'd.json' // the path to the animation json
      });


      var clickableElements = document.querySelectorAll(".clickable");
      clickableElements.forEach(elm => {
        elm.addEventListener("mouseover", function() {
          document.body.classList.add("link-hovered");
        });
        elm.addEventListener("mouseleave", function() {
          document.body.classList.remove("link-hovered");
        });
      });
      var ctaElements = document.querySelectorAll(".cta");
      ctaElements.forEach(elm => {
        elm.addEventListener("mouseover", function() {
          document.body.classList.add("cta-hovered");
        });
        elm.addEventListener("mouseleave", function() {
          document.body.classList.remove("cta-hovered");
        });
      });

      if( typeof console === 'object' ) {
        console.log(
            '\n' +
            'Hi there, fellow developer! Thanks for visiting.\n' +
            'I’d love to hear what you think about my website :)\n' +
            '\n' +
            '— © Dawid Butelo.de 2019\n'
        );
    }
});
