
funParagraph();
function funParagraph() {
   let aboutMeSection=document.getElementById("aboutMeSection");
   let particles=document.getElementById("particles-js");
   let handleFun = document.getElementById("fun");
   let handleFunOff=document.createElement("button");
   let funTitle=document.getElementsByClassName("mainTittleAbout")
   let funSubTitle=document.getElementsByClassName("mainSubtittleAbout")
    handleFunOff.innerHTML="Turn Off";
    handleFunOff.setAttribute("class","funButon")
   let funText = document.getElementById("funText");
   const music=new Audio("/images/funTime.mp3");
   handleFun.addEventListener("click", function() {
    particlesJS(
        {
            "particles": {
              "number": {
                "value": 80,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#eb0000"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#000000",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }
    );
       funTitle[0].innerHTML="Let one fly"
       funSubTitle[0].innerHTML="We don't die, We multiply Throw yo set up in the sky"
       funText.className = "aboutMeFun";
       funText.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum porro, saepe sunt assumenda eligendi consectetur nostrum cupiditate eum blanditiis error perspiciatis labore tenetur vero animi, praesentium eius quae dolor dicta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus eos corporis molestias repudiandae? Aliquid accusantium fugit iure? Hic, numquam debitis harum totam quod ipsa quae ducimus, iusto similique, commodi eligendi! ";
       particles.setAttribute("class", "particles-jsOn");
       aboutMeSection.setAttribute("style", "backdrop-filter: blur(5px)");
         music.play();
         music.loop =true;
       handleFun.style.display = "none";
       aboutMeSection.appendChild(handleFunOff);     
   })
   handleFunOff.addEventListener("click", function() {
    funTitle[0].innerHTML="About Me";
    funSubTitle[0].innerHTML="Welcome";
    funText.className = "mainTextAbout";
    funText.innerHTML = `I am Daniel, a developer ready to help you make your dream website come true!
    I am an International Finance professional who found in programming a passion. And with that feeling, I am committed to carry out my work in a detailed and accurate way. `;
    handleFun.style.display = "block";
    aboutMeSection.removeChild(handleFunOff);
    music.pause();
}) 
}
