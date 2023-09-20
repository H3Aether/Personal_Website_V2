const slides = document.querySelectorAll('.slide');
const scrollingDuration = 1000;
var is_scrolling = false;
var scrolling_promise = Promise.resolve();
var last_scrollY = 0;

async function scrollToSlide(slide_index){
    const documentHeight = document.body.clientHeight;
    window.scroll(0, slide_index*documentHeight/numTabs);
    is_scrolling = true;
    console.log('scrolling to slide ' + slide_index + '...');
    await new Promise(resolve => setTimeout(resolve, scrollingDuration));
    is_scrolling = false;
}

async function scrollToNextSlide(backwards=false){
    if (is_scrolling) return;
    const scrollY = window.scrollY;
    const documentHeight = document.body.clientHeight;
    const currentSlide = parseInt(scrollY / documentHeight * numTabs);
    backwards && currentSlide > 0 ? await scrollToSlide(currentSlide-1) : 0;
    !backwards && currentSlide < numTabs-1 ? await scrollToSlide(currentSlide+1) : 0;
}

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    if (scrollY < last_scrollY){ // scrolling up
        scrollToNextSlide(true);
    } else { // scrolling down
        scrollToNextSlide();
    }
});

slides.forEach((slide, index) => {
    const documentHeight = document.body.clientHeight;
    console.log(index*documentHeight/numTabs);
});