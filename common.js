'use strict'


{
  
  const hamburger = document.getElementById('hamburger');
  const hamburgerTop = document.getElementById('hamburger-top');
  const hamburgerBottom = document.getElementById('hamburger-bottom');
  const hamburgerContent = document.getElementById('hamburger-content');
  const hamburgerListOne = document.getElementById('content-item-one');
  const hamburgerListTwo = document.getElementById('content-item-two');
  const footer = document.getElementById('footer');
  const main = document.getElementById('main');
  const copyright = document.getElementById('copyright');
  const banner = document.getElementById('banner');
  const footerLogo = document.getElementById('footer-logo');



  hamburger.addEventListener('click', () => {
    hamburgerTop.classList.toggle('js-hamburger-top');
    hamburgerBottom.classList.toggle('js-hamburger-bottom');
    hamburgerContent.classList.toggle('js-hamburger-content');
    hamburgerListOne.classList.toggle('js-content-item');
    hamburgerListTwo.classList.toggle('js-content-item');
    main.classList.toggle('js-main');
    footer.classList.toggle('js-footer');
    copyright.classList.toggle('js-copyright');
    banner.classList.toggle('js-banner');
    footerLogo.classList.toggle('js-footer-logo');
  });
}