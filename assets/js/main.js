const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

// ============================ when stycky header active ==============================
window.addEventListener("scroll", function () {
  let header = select("header", true);
  header.forEach((h) => h.classList.toggle("sticky", window.scrollY > 0));
});

// ============================ when toggle clicked ==============================
const toggle = select(".toggle"),
  toggleIcon = select(".toggle__icon", true),
  toglleClose = select(".toglle__close", true),
  navbarEvent = select(".navbar__event", true);

toggle.addEventListener("click", function () {
  navbarEvent.forEach((nv) => {
    nv.classList.add("active");
  });
  toggleIcon.forEach((ti) => {
    ti.addEventListener("click", function () {
      navbarEvent.forEach((nv) => {
        nv.classList.remove("active");
      });
    });
  });
  toglleClose.forEach((tc) => {
    tc.addEventListener("click", function () {
      navbarEvent.forEach((nv) => {
        nv.classList.remove("active");
      });
    });
  });
});

// ========================== clip path active with mousemove =================================
let pos = document.documentElement;
pos.addEventListener("mousemove", function (e) {
  pos.style.setProperty("--x", e.pageX + "px");
  pos.style.setProperty("--y", e.pageY + "px");
});

// ========================== main black is none at load =================================
function beforeMouseMove() {
  let mb = select(".main-black");
  mb.style.display = "none";
  document.addEventListener("mousemove", function () {
    mb.style.display = "block";
  });
}

window.addEventListener("load", function () {
  let mb = select(".main-black");
  mb.style.display = "none";
  this.setTimeout(() => {
    mb.style.display = "block";
    beforeMouseMove();
  }, 500);
});
