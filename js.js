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

    }else if(dets.target.closest(".card")){
        opacity = 1;
        scale = 1;
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
  el.innerHTML = el.textContent.split('').map(char => `<span>${char}</span>`).join('');
  const spans = el.querySelectorAll('span');
  gsap.set(spans, { y: 100 });
  gsap.to(spans, {
    y: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'back.out',
    scrollTrigger: selector === '.heading2' ? {
        trigger: el, 
        markers: true,
        start: 'top 70%' 
      } : null
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


// var cardText = document.querySelector(".content p")


gsap.from('.img img', {
    y: 800,
    duration: 1,

})

animateText(".content p");

// console.log(cardText);

































