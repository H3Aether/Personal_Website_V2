// INITIALIZATION
const indicatorsContainer = document.getElementsByClassName('projects-carousel-indicators')[0];
const numProjects = document.getElementsByClassName('project').length;
const projectsPerPage = 2;
const numPages = Math.ceil(numProjects / projectsPerPage);

for (let i = 0; i < numPages; i++) {
    const indicator = document.createElement('div');
    indicator.classList.add('project-indicator');
    if (i == 0) indicator.classList.add('indicator-selected');
    indicatorsContainer.appendChild(indicator);
}

const indicators = document.getElementsByClassName('project-indicator');
const projectsCarousel = document.getElementsByClassName('projects-carousel')[0];
const projectWidth = document.getElementsByClassName('project')[0].clientWidth;
const numIndicators = indicators.length;

function selectIndicator(indicator_index){
    const current = document.getElementsByClassName('indicator-selected')[0];
    current.classList.remove('indicator-selected');
    indicators[indicator_index].classList.add('indicator-selected');
}

projectsCarousel.addEventListener('scroll', function () {
    const scrollX = projectsCarousel.scrollLeft;
    const currentPage = parseInt(scrollX / (projectWidth*projectsPerPage) + 0.5);
    selectIndicator(currentPage);
});