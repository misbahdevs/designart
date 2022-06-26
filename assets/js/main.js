(function () {
  // function help
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(el, all).addEventListener(type, listener);
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  const onload = (el, listener) => {
    el.addEventListener("load", listener);
  };

  /* 
  base
  */

  // ============================ when stycky header active ==============================
  const stickyHeaderActive = () => {
    let header = select("header", true);
    header.forEach((h) => h.classList.toggle("sticky", window.scrollY > 0));
  };
  onscroll(window, stickyHeaderActive);

  // ============================ when toggle clicked ==============================
  const navbarEvent = select(".navbar__event", true);

  const navActive = () => {
    navbarEvent.forEach((nv) => {
      nv.classList.add("active");
    });
    on(
      "click",
      ".toggle__icon",
      function () {
        navbarEvent.forEach((nv) => {
          nv.classList.remove("active");
        });
      },
      true
    );
    on(
      "click",
      ".toglle__close",
      function () {
        navbarEvent.forEach((nv) => {
          nv.classList.remove("active");
        });
      },
      true
    );
  };
  on("click", ".toggle", navActive);

  // ========================== clip path active with mousemove =================================
  const clipPath = () => {
    let pos = document.documentElement;
    pos.addEventListener("mousemove", function (e) {
      pos.style.setProperty("--x", e.pageX + "px");
      pos.style.setProperty("--y", e.pageY + "px");
    });
  };
  clipPath();

  // ========================== main black is none at load =================================
  function beforeMouseMove() {
    let mb = select(".main-black");
    mb.style.display = "none";
    document.addEventListener("mousemove", function () {
      mb.style.display = "block";
    });
  }

  onload(window, function () {
    let mb = select(".main-black");
    mb.style.display = "none";
    this.setTimeout(() => {
      mb.style.display = "block";
      beforeMouseMove();
    }, 500);
  });

  // =========================== session active =============================
  const togleTog = select(".toglle__tog", true);

  // ========================= setting aos ===========================
  const aos_init = () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  };
  onload(window, aos_init);
})();
