
funParagraph();
function funParagraph() {
   let aboutMeSection=document.getElementById("aboutMeSection");
   let particles=document.getElementById("particles-js");
   let handleFun = document.getElementById("fun");
   let handleFunOff=document.createElement("button");
    handleFunOff.innerHTML="Off";
   let funText = document.getElementById("funText");
   const music=new Audio("/images/funTime.mp3");
   handleFun.addEventListener("click", function() {
       funText.className = "aboutMeFun";
       funText.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum porro, saepe sunt assumenda eligendi consectetur nostrum cupiditate eum blanditiis error perspiciatis labore tenetur vero animi, praesentium eius quae dolor dicta! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, quasi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus eos corporis molestias repudiandae? Aliquid accusantium fugit iure? Hic, numquam debitis harum totam quod ipsa quae ducimus, iusto similique, commodi eligendi! ";
       particles.setAttribute("class", "particles-js");
         music.play();
         music.loop =true;
       handleFun.style.display = "none";
    //    aboutMeSection.style.backgroundColor = "black";
       aboutMeSection.appendChild(handleFunOff);
       
   })
   handleFunOff.addEventListener("click", function() {
    funText.className = "mainTextAbout";
    funText.innerHTML = `I am Daniel, a developer ready to help you make your dream website come true!
    I am an International Finance professional who found in programming a passion. And with that feeling, I am committed to carry out my work in a detailed and accurate way. `;
    handleFun.style.display = "block";
    aboutMeSection.removeChild(handleFunOff);
    music.pause();
}) 
}
