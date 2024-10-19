'use strict';
const headerMenus = Array.from(
  document.querySelectorAll('.header__menu__item')
);
const sectionIds = headerMenus.map((menu) => menu.getAttribute('href'));
const sections = sectionIds.map((id) => document.querySelector(id));
const sectionsVisibility = sectionIds.map(() => false);
let currentActiveMenu = headerMenus[0];

const options = {
  rootMargin: '-10% 0px 0px 0px',
  threshold: [0, 0.95],
};
const intersectionObserver = new IntersectionObserver(
  observerCallback,
  options
);
sections.forEach((section) => intersectionObserver.observe(section));

function observerCallback(entries) {
  entries.forEach((entry) => {
    const index = sections.indexOf(entry.target);
    const lastIndex = sectionsVisibility.length - 1;
    // console.log(
    //   index,
    //   entry.target.id,
    //   entry.intersectionRatio,
    //   entry.isIntersecting
    // );

    sectionsVisibility[index] = entry.isIntersecting;

    const shouldSelectLastSection =
      index === lastIndex && entry.intersectionRatio > 0.9;

    const activeIndex = shouldSelectLastSection
      ? lastIndex
      : getFirstIntersectionIndex(sectionsVisibility);

    selectHeaderMenu(activeIndex);
  });
}

function getFirstIntersectionIndex(sectionsVisibility) {
  const fisrtIndex = sectionsVisibility.indexOf(true);
  return fisrtIndex > -1 ? fisrtIndex : 0;
}

function selectHeaderMenu(index) {
  const updatedActiveMenu = headerMenus[index];
  currentActiveMenu.classList.remove('active');
  updatedActiveMenu.classList.add('active');
  currentActiveMenu = updatedActiveMenu;
}
