// window.addEventListener('scroll', function() {
//     document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
//   });


// window.addEventListener('scroll', () {

//     let screenTwo = document.querySelector('.wrapper-screen2')

//     if (window.pageYOffset > '200px') {
//         screenTwo.style.background = 'red'
//     }else{
//         alert('error')
//     }

// })

window.onscroll = function () {
  let header = document.querySelector('.header')
  let swipe = document.querySelector('.swipe-up')

  if (window.pageYOffset > 500) {
    swipe.classList.add('swipe-up-active')
    header.classList.add('header-active')
  } else {
    header.classList.remove('header-active');
    swipe.classList.remove('swipe-up-active')
  }

  let screen2 = document.querySelector('.wrapper-screen2');

  if (window.pageYOffset > 150) {
    screen2.classList.add('active__screen2');
  } else {
    screen2.classList.remove('active__screen2');
  }


  let screen3 = document.querySelector('.main__screen-three')

  if (window.pageYOffset > 550) {
    screen3.classList.add('active__screen3');
  } else {
    screen3.classList.remove('active__screen3');
  }

  let screen4 = document.querySelector('.want-seewrapper')

  if (window.pageYOffset > 1300) {
    screen4.classList.add('active__screen4');
  } else {
    screen4.classList.remove('active__screen4');
  }

  let screen5 = document.querySelector('.screen-five__container')

  if (window.pageYOffset > 1700) {
    screen5.classList.add('active__screen5');
  } else {
    screen5.classList.remove('active__screen5');
  }

  let screen6 = document.querySelector('.maps__container')

  if (window.pageYOffset > 2200) {
    screen6.classList.add('active__screen6');
  } else {
    screen6.classList.remove('active__screen6');
  }

};

const menuLinks = document.querySelectorAll('.Acolor[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onLinkClick);
  });

  function onLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }

}

let burger = document.querySelector('.header__container__burger')
let screenBurger = document.querySelector('.screen-burger')
let links = document.querySelector('.header__container__links')

burger.onclick = () => {
  screenBurger.classList.toggle('burger-active')
  // links.style.transform = 'translate(50%,50%)'
  links.classList.toggle('links-active')
  // burger.onclick = () => {
  //   screen4.classList.remove('burger-active');
  // }
  // burger.onclick = () => {
  //   links.style.display = 'none'
  // }
}
links.onclick = () => {
  screenBurger.classList.remove('burger-active')
  links.classList.remove('links-active')
}




let inpp = document.querySelector('.question__inp')
let inpp1 = document.querySelector('.question__inp1')
let inp1 = document.querySelector('.block2__inp1')
let inp = document.querySelector('.block2__inp')

inpp.onfocus = () => {
  inpp.style.background = '#D4C17F'
}
inpp.onblur = () => {
  inpp.style.background = '#aeafb171'
}
inpp1.onfocus = () => {
  inpp1.style.background = '#D4C17F'
}
inpp1.onblur = () => {
  inpp1.style.background = '#aeafb171'
}

inp.onfocus = () => {
  inp.style.background = '#D4C17F'
}
inp.onblur = () => {
  inp.style.background = '#aeafb171'
}
inp1.onfocus = () => {
  inp1.style.background = '#D4C17F'
}
inp1.onblur = () => {
  inp1.style.background = '#aeafb171'
}


let goTopBtn = document.querySelector('.swipe-up')

// window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

// function trackScroll() {
//   var scrolled = window.pageYOffset;
//   var coords = document.documentElement.clientHeight;

//   if (scrolled > coords) {
//     goTopBtn.classList.add('back_to_top-show');
//   }
//   if (scrolled < coords) {
//     goTopBtn.classList.remove('back_to_top-show');
//   }
// }

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}

(function () {

  // function trackScroll() {
  //   var scrolled = window.pageYOffset;
  //   var coords = document.documentElement.clientHeight;
     
  //   if (scrolled > coords) {
  //     goTopBtn.classList.add('back_to_top-show');
  //   }
  //   if (scrolled < coords) {
  //     goTopBtn.classList.remove('back_to_top-show');
  //   }
  // }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  let goTopBtn = document.querySelector('.back_to_top');

  // window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
});
