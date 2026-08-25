// 导航栏滚动阴影 + 下拉菜单 + 滚动进场动画
(function () {
  "use strict";

  // 滚动时给导航添加边框阴影
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (window.scrollY > 8) nav.style.boxShadow = "0 8px 24px rgba(0,0,0,.35)";
    else nav.style.boxShadow = "none";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 下拉菜单：点击按钮切换展开（键盘/移动端友好），点击外部关闭
  const dropdowns = document.querySelectorAll(".nav__dropdown");
  dropdowns.forEach((dd) => {
    const btn = dd.querySelector(".nav__dropbtn");
    const menu = dd.querySelector(".nav__menu");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = dd.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // 点击菜单项后关闭
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        dd.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      })
    );
  });
  document.addEventListener("click", () => {
    dropdowns.forEach((dd) => {
      dd.classList.remove("is-open");
      dd.querySelector(".nav__dropbtn").setAttribute("aria-expanded", "false");
    });
  });

  // 进场动画：观察 .section / .card / .split / .sub 元素
  const targets = document.querySelectorAll(".section, .card, .split, .step, .dl, .sub");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "none";
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity .6s ease, transform .6s ease";
    io.observe(el);
  });
})();
