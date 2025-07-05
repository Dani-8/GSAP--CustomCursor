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
    duration: 1,
    ease: 'back.out',
  })
}
function animateCardTexth2(cardTexth2) {
  gsap.set(cardTexth2, { y: -100, opacity: 0})

  gsap.to(cardTexth2, {
    opacity: 1, 
    y: 0,
    duration: 1,
    ease: 'back.out',
  })
}

gsap.from('.img img', {
    y: 800,
    duration: 1,

})

animateCardTexth2('.content h2');
animateCardTextp('.content p');


































