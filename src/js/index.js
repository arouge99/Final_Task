import '../scss/style.scss'

console.log('It works!')

const equipSwiper = new Swiper('.mySwiperEquip', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.equip-pagination',
      clickable: true,
    },
    // optional nett:
    keyboard: { enabled: true },
    a11y: { enabled: true },
    breakpoints: {
      480: { spaceBetween: 14 },
      640: { spaceBetween: 16 }
    }
  });


  const brandsSwiper = new Swiper('.mySwiperBrands', {
    // Zeige mehrere Cards im View – passt sich an
    slidesPerView: 'auto',
    spaceBetween: 12,
    centeredSlides: false,

    // Pagination
    pagination: {
      el: '.brands-pagination',
      clickable: true,
    },

    // Nur für Mobile nutzen (siehe CSS unten); hier optional Breakpoints:
    breakpoints: {
      480: { spaceBetween: 14 },
      640: { spaceBetween: 16 },
    }
  });



  document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector("[data-sidebar]");
    const openBtn = document.querySelector(".menu-toggle"); // dein Menü-Button
    const closeBtn = document.querySelector(".sidebar-close"); // das X in der Sidebar
    const overlay = document.createElement("div");
  
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
  
    // Sidebar öffnen
    openBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    });
  
    // Sidebar schließen (X-Button)
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  
    // Sidebar schließen (Overlay-Klick)
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
  