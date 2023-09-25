const ageSpan = document.getElementById('age');
const birthDate = new Date(2001, 11, 20); // 20/12/2001. Month is 0-indexed
const today = new Date();

var age = today.getFullYear() - birthDate.getFullYear();
if (today.getMonth() < birthDate.getMonth()){
    age--;
} else if (today.getMonth() == birthDate.getMonth() && today.getDate() < birthDate.getDate()){
    age--;
}

ageSpan.innerText = age;