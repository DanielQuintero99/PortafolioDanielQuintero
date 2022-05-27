let projects=[
  {
    "name":"Shiro&Kuro",
     "description":"E-Comerce",
    "technologies":[
      {"name":"url(./social-media/icons/react.png)"},
      {"name":"url(./social-media/icons/react-router.png)"},
      {"name":"url(./social-media/icons/bootstrap-react.png)"},
      {"name":"url(./social-media/icons/bootstrap.png)"},
      {"name":"url(./social-media/icons/firebase.png)"},
      {"name":"url(./social-media/icons/git.png"},
      {"name":"url(./social-media/icons/github.png)"},
    ],
    "image":"url(../images/TcT-Store-Web-View.png)",
    "link":"https://tct-store.web.app",
    "github":"https://github.com/DanielQuintero99/appcquintero"
  },
  {
    "name":"Coupon Simulator",
     "description":"E-Comerce",
    "technologies":[
      {"name":"url(./social-media/icons/html-5.png)"},
      {"name":"url(./social-media/icons/css-3.png)"},
      {"name":"url(./social-media/icons/js.png)"},
      {"name":"url(./social-media/icons/bootstrap.png)"},
      {"name":"url(./social-media/icons/git.png)"},
      {"name":"url(./social-media/icons/github.png)"}
    ],
    "image":"url(../images/coupon-simulator.png)",
    "link":"https://danielquintero99.github.io/SimuladorDeCupones/",
    "github":"https://github.com/DanielQuintero99/SimuladorDeCupones"
  },
  {
    "name":"Daniel Quintero",
     "description":"Personal Website",
    "technologies":[
      {"name":"url(./social-media/icons/html-5.png)"},
      {"name":"url(./social-media/icons/css-3.png)"},
      {"name":"url(./social-media/icons/js.png)"},
      {"name":"url(./social-media/icons/sass.png)"},
      {"name":"url(./social-media/icons/bootstrap.png)"},
      {"name":"url(./social-media/icons/git.png)"},
      {"name":"url(./social-media/icons/github.png)"}
    ],
    "image":"url(../images/daniel-quintero.png)",
    "link":"https://danielquintero99.github.io/PortafolioDanielQuintero/",
    "github":"https://github.com/DanielQuintero99/PortafolioDanielQuintero"
  },
  {
    "name":"English Valentina",
     "description":"Language Learning",
    "technologies":[
      {"name":"url(./social-media/icons/html-5.png)"},
      {"name":"url(./social-media/icons/css-3.png)"},
      {"name":"url(./social-media/icons/sass.png)"},
      {"name":"url(./social-media/icons/bootstrap.png)"},
      {"name":"url(./social-media/icons/git.png)"},
      {"name":"url(./social-media/icons/github.png)"}
    ],
    "image":"url(../images/english-valentina.png)",
    "link":"https://danielquintero99.github.io/English-Valentina/",
    "github":"https://github.com/DanielQuintero99/English-Valentina"
  },
  {
    "name":"ChocBerries",
     "description":"Landing Page",
    "technologies":[
      {"name":"url(./social-media/icons/html-5.png)"},
      {"name":"url(./social-media/icons/css-3.png)"},
      {"name":"url(./social-media/icons/sass.png)"},
      {"name":"url(./social-media/icons/bootstrap.png)"},
      {"name":"url(./social-media/icons/git.png)"},
      {"name":"url(./social-media/icons/github.png)"}
    ],
    "image":"url(../images/chocberries.png)",
    "link":"https://danielquintero99.github.io/ChocBerries/",
    "github":"https://github.com/DanielQuintero99/ChocBerries"
  },
  {
    "name":"Fuerza Natural",
     "description":"Landing Page",
    "technologies":[
      {"name":"url(./social-media/icons/wordpress.png)"},
      {"name":"url(./social-media/icons/elementor.webp)"},
    ],
    "image":"url(../images/fuerza-natural.png",
    "link":"https://fuerzanaturalcol.com",
    "github":""
  }
]
funParagraph();
showProjecst()
function showProjecst(){
  let projectsContainer=document.getElementById("projectsContainer");
  projects.forEach((project)=>{
    let projectItem=document.createElement("div");
    projectItem.setAttribute("class","cardProject");
    projectItem.setAttribute("style","background-image:"+project.image);
    let technologies=project.technologies;
    projectItem.innerHTML=
    `
    <div class="cardContent">
      <h3 class="cardTitle">
             ${project.name}
          </h3>
          <span class="cardSubtitle">${project.description}</span>
          <div class="technologies">
            ${technologies.map((technology)=>{
              let technologyItem=document.createElement("div");
              technologyItem.setAttribute("class","technologyItem");
              technologyItem.setAttribute("style","background-image:"+technology.name);
              return technologyItem.outerHTML;
            }).join("")}

         </div>
          <a href=${project.link} class="cardDescription">
            <span class="cardLinks" > Go </span>
          </a>
          <a class="cardDescription">
          <br>
          <span class="cardLinks" > Repository </span>
        </a>
      </div>
 
    `
    projectsContainer.appendChild(projectItem);
  })

}
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
   const music=document.getElementById("audio");
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
       funText.innerHTML = `Throw ya set in the air (come on) Wave it around like ya just don't care Throw ya set in the air (throw it up homes!) Wave it around like ya just don't care It's time to exit that busta c&@$#/° Get ya hands out ya pockets and your finga on the trigga Let one fly, we don't die, we multiply Throw yo set up in the sky I ask you kid cause you can't fuck wit this c&@$#/° when I got the Glock ya betta duck quick Cause I ain't havin' it If ya got ya gat ya betta start grabbin' it I can handle it Soy numero uno, mero mero You know I run wit Muggs and the perro Firin up that heater When I'm throwin' up a set I got my nina millemeter Los scandalous, killafornia`;
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
