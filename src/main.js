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
