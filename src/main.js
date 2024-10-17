'use strict';

//페이지 아래로 스크롤시 Header에 다크 스타일링
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('dark');
  } else {
    header.classList.remove('dark');
  }
});

//페이지 아래로 스크롤시 화살표 버튼 나타나기
const intro = document.querySelector('#intro');
const arrowUpBtn = document.querySelector('.arrow_up');
document.addEventListener('scroll', () => {
  if (window.scrollY > intro.offsetHeight / 2) {
    arrowUpBtn.classList.add('visible');
  } else {
    arrowUpBtn.classList.remove('visible');
  }
});
