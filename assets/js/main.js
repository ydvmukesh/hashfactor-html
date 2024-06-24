document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const modal = document.getElementById("modal");
    // Load header.html
    fetch("header.html")
      .then((response) => response.text())
      .then((data) => {
        header.innerHTML = data;
      })
      .catch((error) => console.error("Error loading header:", error));
    // Load footer.html
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => {
        footer.innerHTML = data;
      })
      .catch((error) => console.error("Error loading footer:", error));
    fetch("modal.html")
      .then((response) => response.text())
      .then((data) => {
        modal.innerHTML = data;
      })
      .catch((error) => console.error("Error loading footer:", error));
});
//----------------------------------------------------------- accordian js=------------------------------------
const items = document.querySelectorAll(".accordion button");
    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');
      for (var i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }
      if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }
    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener('click', toggleAccordion);
    }
    // --------------------------------------------tab js--------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    var tabs = document.querySelectorAll('.tabs li');
    var tabContents = document.querySelectorAll('.tab-content');
    var tabsContainer = document.querySelector('.tabs');
    var leftArrow = document.querySelector('.left-arrow');
    var rightArrow = document.querySelector('.right-arrow');
    var isDown = false;
    var startX, scrollLeft;
  function checkArrows() {
        if (tabsContainer.scrollLeft === 0) {
            leftArrow.classList.add('hidden');
        } else {
            leftArrow.classList.remove('hidden');
        }
    if (tabsContainer.scrollLeft + tabsContainer.clientWidth + 1 >= tabsContainer.scrollWidth) {
          rightArrow.classList.add('hidden');
      } else {
          rightArrow.classList.remove('hidden');
      }
    }
  function scrollToTab(tab) {
        var tabId = tab.getAttribute('data-tab');
        tabs.forEach(function (tab) {
            tab.classList.remove('current');
        });
        tabContents.forEach(function (content) {
            content.classList.remove('current');
        });
        tab.classList.add('current');
        document.getElementById(tabId).classList.add('current');
        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  function moveToNextTab() {
        var currentIndex = Array.from(tabs).findIndex(tab => tab.classList.contains('current'));
        var nextIndex = (currentIndex + 1) % tabs.length;
        var nextTab = tabs[nextIndex];
        scrollToTab(nextTab);
        checkArrows();
    }
  tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            if (this.classList.contains('current')) {
                moveToNextTab();
            } else {
                scrollToTab(this);
            }
        });
    });
  tabsContainer.addEventListener('mousedown', function (e) {
        isDown = true;
        tabsContainer.classList.add('active');
        startX = e.pageX - tabsContainer.offsetLeft;
        scrollLeft = tabsContainer.scrollLeft;
    });
  tabsContainer.addEventListener('mouseleave', function () {
        isDown = false;
        tabsContainer.classList.remove('active');
    });
  tabsContainer.addEventListener('mouseup', function () {
        isDown = false;
        tabsContainer.classList.remove('active');
    });
  tabsContainer.addEventListener('mousemove', function (e) {
        if (!isDown) return;
        e.preventDefault();
        var x = e.pageX - tabsContainer.offsetLeft;
        var walk = (x - startX) * 3; //scroll-fast
        tabsContainer.scrollLeft = scrollLeft - walk;
        checkArrows();
    });
  leftArrow.addEventListener('click', function () {
        tabsContainer.scrollBy({ left: -200, behavior: 'smooth' });
        setTimeout(checkArrows, 300); // Timeout to wait for the scroll to complete
    });
  rightArrow.addEventListener('click', function () {
        tabsContainer.scrollBy({ left: 200, behavior: 'smooth' });
        setTimeout(checkArrows, 300); // Timeout to wait for the scroll to complete
    });
  tabsContainer.addEventListener('scroll', checkArrows);
    window.addEventListener('resize', checkArrows);
  // Initial check to hide arrows if necessary
    checkArrows();
});

//------------------------------------ modal------------------------------
setTimeout(()=>{
  function initModals() {
    var cb = document.querySelectorAll(".close-btn");
    for (var i = 0; i < cb.length; i++) {
      cb[i].addEventListener("click", function() {
        var dia = this.closest(".modal");
        dia.style.opacity = 0;
        dia.style.zIndex = -1;
        document.body.classList.remove("modal-open");
      });
    }
    var mt = document.querySelectorAll(".modal-toggle");
    for (var i = 0; i < mt.length; i++) {
      mt[i].addEventListener("click", function() {
        var targetId = this.getAttribute("data-target");
        var target = document.getElementById(targetId);
        target.style.opacity = 1;
        target.style.zIndex = 9999;
        document.body.classList.add("modal-open");
      });
    }
  }
  // Call the function to initialize the modals
  initModals();
},2000)
// ----------------------------scroll to js-------------------------------
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
  setTimeout(()=>{
    let scrollBtn = document.getElementById("scrollToTopBtn");
  addEventListener('scroll', function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
}, 1000)  



