(function () {

  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const tabItems = $$('.product__tab');
  const tabContents = $$('.product__images--inner');
  const showBtns = $$('.show__product');


  const showProduct = (index) => {
    tabItems.forEach((i, idx) => {
      tabItems[index].classList.toggle('tab__active');

      if (idx !== index) {
        tabItems[idx].classList.remove('tab__active');
      }

      tabContents[idx].classList.remove('product__active');
    })

    tabContents[index].classList.add('product__active');
  }

  showBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      showProduct(index);
    })
  })

  tabItems.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      showProduct(index);
    })
  })

})()