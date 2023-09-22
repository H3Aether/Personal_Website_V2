const tabs = document.getElementsByClassName('header-tab');
const slides = document.getElementsByClassName('slide');
const mobileTabs = document.getElementsByClassName('header-tab-mobile');
const numTabs = tabs.length;
const activeTabMobile = document.getElementsByClassName('header-menu-active-tab')[0];
const mobileMenu = document.getElementsByClassName('mobile-menu-container')[0];
const mobileMenuOpacifier = document.getElementsByClassName('mobile-menu-opacifier')[0];
const mobileMenuIcon = document.getElementsByClassName('header-menu-mobile-icon')[0].getElementsByTagName('svg')[0];
var mobile_menu_is_displayed = false;

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('header-tab-selected')[0];
    current.classList.remove('header-tab-selected');
    this.classList.add('header-tab-selected');
    scrollToSlide(i);
  });
  mobileTabs[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('header-tab-selected')[1];
    current.classList.remove('header-tab-selected');
    this.classList.add('header-tab-selected');
    scrollToSlide(i);
    toggleMobileMenu();
  });
}

function selectTab(tab_index){
    const current = document.getElementsByClassName('header-tab-selected')[0];
    current.classList.remove('header-tab-selected');
    tabs[tab_index].classList.add('header-tab-selected');
}

function selectMobileTab(tab_index){
    const current = document.getElementsByClassName('header-tab-selected')[1];
    current.classList.remove('header-tab-selected');
    mobileTabs[tab_index].classList.add('header-tab-selected');
}

function scrollToSlide(slide_index){
  const documentHeight = Array.from(slides).slice(0, slide_index).reduce((acc, tab) => acc + tab.clientHeight, 0);
  window.scrollTo({
    top: documentHeight,
    behavior: "smooth"
  });
}

function toggleMobileMenu(){
  mobile_menu_is_displayed ? mobileMenu.style.transform = "translateY(-100%)" : mobileMenu.style.transform = "translateY(0)";
  mobile_menu_is_displayed ? mobileMenuOpacifier.style.display = "none" : mobileMenuOpacifier.style.display = "block";
  mobile_menu_is_displayed ? mobileMenuIcon.style.transform = "rotate(0deg)" : mobileMenuIcon.style.transform = "rotate(-180deg)";
  mobile_menu_is_displayed = !mobile_menu_is_displayed;
}


window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const documentHeight = document.body.clientHeight;
    const currentSlide = parseInt(scrollY / documentHeight * numTabs + 0.33);
    selectTab(currentSlide);
    selectMobileTab(currentSlide);
    activeTabMobile.innerText = tabs[currentSlide].innerText;
});

mobileMenuOpacifier.addEventListener('click', function(){
  toggleMobileMenu();
});