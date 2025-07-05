var main = document.querySelector(".body")
var cursor = document.querySelector(".cursor")
var card = document.querySelector(".card")


document.addEventListener("mousemove", function(dets){
    let scale = 1;
    let opacity = 0; 

    if (dets.target.closest(".img")){
        opacity = 1;
        scale = 3;
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





// SIDEBAR
// SIDEBAR
// SIDEBAR
// SIDEBAR
// SIDEBAR
// SIDEBAR
var menu = document.querySelector(".nav i")
var cross = document.querySelector(".sidebar i")


var tl = gsap.timeline()

gsap.set(".sidebar", {  opacity: 0,});

tl.to(".sidebar", {
  opacity: 1,

  right: 0,
  duration: 0.6,
})

tl.from(".sidebar h4", {
  x: 80,
  duration: .6,
  stagger: .3,
  opacity: 0,
})





tl.pause()

menu.addEventListener("click", function(){
  tl.play()

})
cross.addEventListener("click", function(){
  tl.reverse()

})






// FUNCTION FOR TEXT SPLIT/REVEAL ANMATION
// FUNCTION FOR TEXT SPLIT/REVEAL ANMATION
// FUNCTION FOR TEXT SPLIT/REVEAL ANMATION
// FUNCTION FOR TEXT SPLIT/REVEAL ANMATION
// FUNCTION FOR TEXT SPLIT/REVEAL ANMATION









function animateText(selector) {
  const el = document.querySelector(selector);

  el.innerHTML = el.textContent
    .split('')
    .map(char => char === ' ' ? `<span>&nbsp;</span>` : `<span>${char}</span>`)
    .join('');

  const spans = el.querySelectorAll('span');


  gsap.set(spans, { y: 100 });
  gsap.to(spans, {
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'back.out',
    scrollTrigger: selector === '.heading2' ? { 
      trigger: el, 
      // markers: true,
      start: 'top 70%' } 
      : null
  });
}

animateText('.heading1');
animateText('.heading2');






// CARD
// CARD
// CARD
// CARD
// CARD
// CARD

function animateCardTextp(cardTextp) {
  gsap.set(cardTextp, { y: 70, opacity: 0})

  gsap.to(cardTextp, {
    opacity: 1, 
    y: 0,
    delay: 1.3,
    duration: .7,
    ease: 'back.out',
  })
}
function animateCardTexth2(cardTexth2) {
  gsap.set(cardTexth2, { y: -100, opacity: 0})

  gsap.to(cardTexth2, {
    opacity: 1, 
    y: 0,
    duration: 1,
    delay: 1.5,
    ease: 'back.out',
  })
}


animateCardTexth2('.content h2');
animateCardTextp('.content p');





document.querySelectorAll('.card').forEach((card, index) => {
  const isScrollTriggered = index >= 2; // Cards 3 and 4 (index 2, 3)
  
  gsap.from(card.querySelector('.img'), {
    scaleX: 0,
    transformOrigin: 'left',
    delay: isScrollTriggered ? 0 : 0.5,
    duration: 1.5,
    ease: 'back.out',
    scrollTrigger: isScrollTriggered ? {
      trigger: card,
      // markers: true,
      start: 'top 80%',
    } : null
  });

  gsap.from(card.querySelector('.img img'), {
    x: -800,
    duration: 1,
    delay: isScrollTriggered ? 0 : 0.8,
    ease: 'power2.out',
    scrollTrigger: isScrollTriggered ? {
      trigger: card,
      // markers: true,
      start: 'top 80%',
    } : null
  });
});

// Your existing animateText and cursor code remains unchanged























