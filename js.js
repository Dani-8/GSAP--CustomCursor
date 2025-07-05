var main = document.querySelector(".body")
var cursor = document.querySelector(".cursor")
var img = document.querySelector(".img")


document.addEventListener("mousemove", function(dets){
    let scale = 1;
    let opacity = 0; // Default: hide cursor

    if (dets.target.closest(".img")){
        opacity = 1; // Show cursor on .img
        scale = 3; // Check if over .img
        cursor.innerHTML = dets.target.closest(".img") ? '<i class="fa-solid fa-arrow-right"></i>' : "";

    }else{
        cursor.innerHTML = ""
    }



    gsap.to(cursor, {
        x:dets.x,
        y:dets.y,
        scale: scale,
        opacity: opacity,
        duration:0.6,
        ease: "back.out"
        

    })

})




gsap.from('.img img', {
    y: 800,
    duration: 1,

})






// First Heading: GSAP letter-by-letter reveal  
const heading1 = document.querySelector('.heading1');
const text1 = heading1.textContent;
heading1.innerHTML = text1.split('').map(char => `<span>${char}</span>`).join('');


const spans1 = heading1.querySelectorAll('span');
gsap.set(spans1, { y: 100 });
gsap.to(spans1, {
  y: 0,
  stagger: 0.1,
  duration: 0.5,
  ease: 'back.out'
});


// Second Heading: Scroll-triggered GSAP reveal
const heading2 = document.querySelector('.heading2');
const text2 = heading2.textContent;
heading2.innerHTML = text2.split('').map(char => `<span>${char}</span>`).join('');

gsap.registerPlugin(ScrollTrigger);

const spans2 = heading2.querySelectorAll('span');
gsap.set(spans2, { y: 100 });

gsap.to(spans2, {
  y: 0,
  stagger: 0.1,
  duration: 0.5,
  ease: 'back.out',
  scrollTrigger: {
    markers: true,
    trigger: heading2,
    start: 'top 70%',
    bottom: 'bottom 80%',
  }
});
























