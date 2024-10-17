'use strict';

//페이지 아래로 스크롤시 Header에 다크 스타일링
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight && window.innerWidth > 768) {
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

//페이지 아래로 스크롤시 첫 섹션 fade out
document.addEventListener('scroll', () => {
  if (window.scrollY < intro.offsetHeight) {
    intro.style.opacity = 1 - window.scrollY / intro.offsetHeight;
  }
});

//모바일 네비게이션 메뉴 토글버튼
const menuToggleBtn = document.querySelector('.mobile__toggle_btn');
const headerMenu = document.querySelector('.header__menu');

menuToggleBtn.addEventListener('click', (e) => {
  headerMenu.classList.toggle('open');
  e.stopPropagation();
});
document.addEventListener('click', (e) => {
  if (e.target !== menuToggleBtn) {
    headerMenu.classList.remove('open');
  }
});
