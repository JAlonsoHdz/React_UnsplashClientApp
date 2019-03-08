import React from 'react';
import Particles from 'react-particles-js';

const ParticleComponent = () => {
    return (
        <Particles 
        params={{
            "particles": {
                "number": {
                    "value": 20
                },
                "size": {
                    "value": 3
                }
            },
              interactivity: {
                detect_on: "window",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: false,
                    mode: "bubble"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
        }}/>
    );
}

export default ParticleComponent;