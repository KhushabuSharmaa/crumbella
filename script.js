
function swiper1() {
  var swiper1 = new Swiper(".mySwiper1", {
    effect: "cards",
    grabCursor: true,
  });
}

function swiper2() {
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function swiperLeftElem() {
  gsap.from(".swiper-left-elem .swiper-wrapper", {
    translateX: "-170px",
    translateY: "100px",
    duration: 1,
    scrollTrigger: {
      trigger: ".swiper-left-elem",
      scroller: "body",
      scrub: true,
    }
  })
}
function swiperRightElem() {
  gsap.from(".swiper-right-elem img", {
    translateX: "120px",
    translateY: "100px",
    duration: 1,
    scrollTrigger: {
      trigger: ".swiper-right-elem",
      scroller: "body",
      scrub: true,
    }
  })
}
swiper1()
swiper2()
swiperRightElem()
swiperLeftElem()
