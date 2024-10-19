'use strict';

const categories = document.querySelector('.work__categories');
const projectsContainer = document.querySelector('.projects');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click', (e) => {
  const selectedFilter = e.target.getAttribute('data-category');

  if (selectedFilter == null) return; //클릭된 요소가 ul인 경우 무시.

  //active 카테고리 메뉴 재설정
  showActiveCategoryCount(e.target);

  //선택된 필터의 프로젝트만 보여주기
  filterProjects(selectedFilter);
});

function showActiveCategoryCount(clickedButton) {
  const prevActiveButton = document.querySelector('.active.category');
  prevActiveButton.classList.remove('active');
  clickedButton.classList.add('active');
}

function filterProjects(category) {
  projectsContainer.classList.add('pre_effect');
  setTimeout(() => {
    projectsContainer.classList.remove('pre_effect');
  }, 300);

  projects.forEach((project) => {
    if (
      category === 'all' ||
      category === project.getAttribute('data-category')
    ) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}
