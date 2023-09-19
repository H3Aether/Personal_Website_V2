const tabs = document.getElementsByClassName('header-tab');
const numTabs = tabs.length;

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('header-tab-selected');
    current[0].classList.remove('header-tab-selected');
    this.classList.add('header-tab-selected');
    const documentHeight = document.body.clientHeight;
    scroll(0, i/numTabs * documentHeight);
  });
}

function selectTab(tab_index){
    const current = document.getElementsByClassName('header-tab-selected');
    current[0].classList.remove('header-tab-selected');
    tabs[tab_index].classList.add('header-tab-selected');
}

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const documentHeight = document.body.clientHeight;
    const currentSlide = Math.min(parseInt(scrollY / documentHeight * numTabs), numTabs-1);
    selectTab(currentSlide);
});