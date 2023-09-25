const skillsTitles = document.getElementsByClassName('skills-columns')[0].getElementsByTagName('h3');
const skillsAreShown = new Array(skillsTitles.length).fill(false);

for (let i = 0; i < skillsTitles.length; i++) {
    skillsTitles[i].addEventListener('click', function () {
        if (skillsAreShown[i]) {
            skillsTitles[i].nextElementSibling.style.display = 'none';
            skillsTitles[i].firstElementChild.style.transform = "rotate(0deg)";
            skillsAreShown[i] = false;
        } else {
            skillsTitles[i].nextElementSibling.style.display = 'block';
            skillsTitles[i].firstElementChild.style.transform = "rotate(-180deg)";
            skillsAreShown[i] = true;
        }
    });
}