(function () {

  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const accIcons = $$('.accordion__icon');
  const accContents = $$('.accordion__item--content');

  console.log(accIcons);

  accIcons.forEach((icon, index) => {
    icon.addEventListener('click', (e) => {
      e.target.classList.toggle('down');

      accIcons.forEach((i, idx) => {
        if (idx !== index) {
          if (accIcons[idx].classList.contains('down')) {
            accIcons[idx].classList.remove('down');
          }
          accContents[idx].style.padding = '0 20px';
          accContents[idx].style.maxHeight = null;
        }
      })


      const currentContent = accContents[index];
      if (currentContent.style.maxHeight) {
        currentContent.style.maxHeight = null;
        currentContent.style.padding = '0 20px';
      } else {
        currentContent.style.padding = '10px 20px';
        currentContent.style.maxHeight = (currentContent.scrollHeight + 20) + "px"
      }
    })
  });

})()
