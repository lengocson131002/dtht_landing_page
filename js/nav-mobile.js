(function () {
  let isOpen = false;
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const navMobile = $('.nav__mobile');
  const navItems = $$('.nav__item');

  const openNav = () => {
    navMobile.style.transform = 'translateX(0)';
    isOpen = true;
  }
  const closeNav = () => {
    navMobile.style.transform = 'translateX(110%)';
    isOpen = false;
  }
  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      closeNav();
    })
  })


  console.log(navMobile);
  $('.btn__open--nav').addEventListener('click', (e) => {
    e.stopPropagation();
    openNav()
  })
  $('.btn__close--nav').addEventListener('click', (e) => {
    e.stopPropagation();
    closeNav();
  })

  document.addEventListener('click', (e) => {
    let isClickInsideElement = navMobile.contains(e.target);
    console.log(isClickInsideElement);
    if (isOpen && !isClickInsideElement) {
      closeNav();
    }
  })
})();