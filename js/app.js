particlesJS(
{
    particles: {
        number: {
            value: 35,
            density: {
                enable: true,
                value_area: 500,
            },
        },
        color: {
            value: "#660085",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.4,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3.5,
            random: true,
            anim: {
                enable: false,
                speed: 80,
                size_min:5 ,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 300,
            color: "#00d9ff",
            opacity: 0.23,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "random",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "none",
            },
            onclick: {
                enable: false,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 800,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 800,
                size: 80,
                duration: 2,
                opacity: 0.8,
                speed: 3,
            },
            repulse: {
                distance: 400,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
}
);