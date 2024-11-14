/*
for (let i = 1; i<=10; i++) {
    for (let j = 1; j<=10; j++) {
        console.log(i + 'x' + j + '=' + (i*j));
    }
    console.log('-  -  -  -  -  -  -  -  -  -');
}
*/




/*
let answer = prompt('How are you today?').toLowerCase();

if (answer == 'not fine' || answer == 'i am bad' || answer == 'i am very bad') {
    alert('hmmm')
};
*/




/*
let number = prompt('Please enter a number!');
let result = true;

for (let i = 2; i <= (number/2); i++) {
    if (number%i == 0) {
        result = false;
    };
};

if (result) {
    alert('Bu bir asal sayıdır.');
} else {
    alert('Bu bir asal sayı değildir.');
}
*/




let word = 'Tıkla';
let word2 = 'Teşekkürler';
let isChanged = false;

function myFunction() {
    let element = document.getElementById('wordss');

    if (isChanged) {
        element.innerHTML = word; 
        isChanged = false;
    } else {
        element.innerHTML = word2;
        isChanged = true;
    }
};