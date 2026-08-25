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

  // 下拉菜单：点击主按钮跳转到万能播放器区块；子菜单项（Windows/Android）可点开
  const dropdowns = document.querySelectorAll(".nav__dropdown");
  dropdowns.forEach((dd) => {
    const btn = dd.querySelector(".nav__dropbtn");
    const menu = dd.querySelector(".nav__menu");
    btn.addEventListener("click", (e) => {
      // 桌面端 hover 已能展开子菜单；点击按钮本身跳转到对应区块
      const target = btn.getAttribute("data-target");
      if (target) {
        e.preventDefault();
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
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

  // 汉堡菜单：移动端展开/收起导航
  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");
  if (burger && navLinks) {
    burger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = navLinks.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
    });
    // 点击菜单内任意链接后收起
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      })
    );
    // 点击菜单外部收起
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

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
