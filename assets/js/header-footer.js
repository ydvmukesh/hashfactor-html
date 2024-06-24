setTimeout(function(){
  const menu = document.querySelector(".menu");
  const menuMain = menu.querySelector(".menu-main");
  const goBack = menu.querySelector(".go-back");
  const menuTrigger = document.querySelector(".mobile-menu-trigger");
  const closeMenu = menu.querySelector(".mobile-menu-close");
  let subMenu;
  menuMain.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) {
      return;
    }
    if (e.target.closest(".menu-item-has-children")) {
      const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
    }
  });
  goBack.addEventListener("click", () => {
    hideSubMenu();
  });
  menuTrigger.addEventListener("click", () => {
    toggleMenu();
  });
  closeMenu.addEventListener("click", () => {
    toggleMenu();
  });
  document.querySelector(".menu-overlay").addEventListener("click", () => {
    toggleMenu();
  });
  function toggleMenu() {
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
  }
  function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle =
      hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
  }
  function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() => {
      subMenu.classList.remove("active");
    }, 300);
    menu.querySelector(".current-menu-title").innerHTML = "";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
  }
  window.onresize = function () {
    if (this.innerWidth > 991) {
      if (menu.classList.contains("active")) {
        toggleMenu();
      }
    }
  };
  
},500)
// footer js
setTimeout(function() {
  document.querySelectorAll(".nav-footer .nav-footer-title").forEach(function(element) {
      element.addEventListener("click", function() {
          var parent = this.parentElement;
          if (parent.classList.contains("open")) {
              parent.classList.remove("open");
          } else {
              parent.classList.add("open");
          }
      });
  });
}, 500);

setTimeout(function() {
// document.addEventListener("DOMContentLoaded", function() {
  var year = new Date();
  document.getElementById("currentYear").innerHTML = year.getFullYear();
// });
}, 2000);