gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

gsap
  .timeline()
  .to("body", {
    opacity: 1,
  })
  .from(
    ".bg_img",
    {
      scale: 2,
      duration: 1,
      ease: "expo",
    },
    0
  )
  .from(
    ".icon_cols > div",
    {
      opacity: 0,
      stagger: 0.2,
      y: 5,
    },
    0.2
  )
  .fromTo(
    ".top_right .card",
    {
      yPercent: 130,
    },
    {
      yPercent: 75,
      duration: 0.6,
      onComplete: () => {
        gsap.to(".top_right .card", {
          yPercent: 0,
          scrollTrigger: {
            trigger: "body",
            start: "0%",
          },
        });
      },
    },
    0.3
  )
  .from("#offer", {
    opacity: 0,
  });

gsap.from(".offer_row .card", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".offer_row",
    toggleActions: "play none none reverse",
  },
});

gsap.to("#whyUs .img_col img", {
  scale: 1.2,
  scrollTrigger: {
    trigger: "#whyUs",
    scrub: true,
  },
});

document.querySelectorAll(".scroll_to").forEach((a) => {
  a.addEventListener("click", function () {
    console.log(a.dataset.target);
    gsap.to(window, { scrollTo: a.dataset.target });
  });
});

if (window.innerWidth > 767 && window.innerWidth <= 1530) {
  var offsets = document.getElementById("enquire").getBoundingClientRect();
  var top = offsets.top;
  var left = offsets.left;
  // console.log("Left="+left)

  var offsets = document.getElementById("leftimage");
  var offsetWidth = offsets.offsetWidth;
  // console.log("offsetWidth="+offsetWidth)
  var margin = left - offsetWidth-38;
  var divrifht = document.getElementById("smartLabel_sec");
  divrifht.style.marginLeft = margin + "px";
}

if (window.innerWidth > 1531 && window.innerWidth <= 1999) {
    var offsets = document.getElementById("enquire").getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
    // console.log("Left="+left)
  
    var offsets = document.getElementById("leftimage");
    var offsetWidth = offsets.offsetWidth;
    // console.log("offsetWidth="+offsetWidth)
    var margin = left - offsetWidth-10;
    var divrifht = document.getElementById("smartLabel_sec");
    divrifht.style.marginLeft = margin + "px";
  }

  if (window.innerWidth > 1999 && window.innerWidth <= 3000) {
    var offsets = document.getElementById("enquire").getBoundingClientRect();
    var top = offsets.top;
    var left = offsets.left;
    // console.log("Left="+left)
  
    var offsets = document.getElementById("leftimage");
    var offsetWidth = offsets.offsetWidth;
    // console.log("offsetWidth="+offsetWidth)
    var margin = left - offsetWidth-230;
    var divrifht = document.getElementById("smartLabel_sec");
    divrifht.style.marginLeft = margin + "px";
  }

