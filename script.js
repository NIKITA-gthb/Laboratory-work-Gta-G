//Виведення тексту
function printTextWithSize(text, size) {
    const textElement = document.createElement('div');
    textElement.textContent = text;
    textElement.style.fontSize = size;
    textElement.style.margin = '20px';
    document.body.appendChild(textElement);
}
printTextWithSize('Дякую що цікавитесь!', '20px'); 


//Картинка що стрибає
function startMovingImage() {
    const img = document.createElement('img');
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrD_I0rrNmET3YJH3py4rRAFBH5VYB_lZtCrdD_AZ-Dw&s'; 
    img.style.position = 'fixed';
    img.style.width = '30px';
    img.style.zIndex = '9999';
    document.body.appendChild(img);

    setInterval(() => {
        const x = Math.random() * (window.innerWidth - 30);
        const y = Math.random() * (window.innerHeight - 30);
        img.style.left = x + 'px';
        img.style.top = y + 'px';
    }, 1000);
}
startMovingImage();


// Зміна розміру всіх <p>
function resizeAllParagraphs() {
    const paragraphs = document.getElementsByTagName('p');
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontSize = '15px';
    }
}
resizeAllParagraphs();


//Годинник
function createTextClock() {
    const clockDiv = document.createElement('div');
    clockDiv.style.fontWeight = 'bold';
    clockDiv.style.fontSize = '20px';
    clockDiv.style.textAlign = 'center';
    clockDiv.style.padding = '10px';
    clockDiv.style.backgroundColor = 'white';
    
    document.body.insertBefore(clockDiv, document.body.firstChild);

    setInterval(() => {
        const now = new Date();
        clockDiv.textContent = "Поточний час: " + now.toLocaleTimeString();
    }, 1000);
}
createTextClock();


// Ефект витирання
function fadeOutElement() {
    const fadeDiv = document.createElement('div');
    fadeDiv.textContent = 'Добрий День';
    fadeDiv.style.backgroundColor = 'purple';
    fadeDiv.style.padding = '20px';
    fadeDiv.style.margin = '20px';
    fadeDiv.style.fontWeight = 'bold';
    document.body.insertBefore(fadeDiv, document.body.firstChild);

    let opacity = 1;
    const timer = setInterval(() => {
        if (opacity <= 0.1) {
            clearInterval(timer);
            fadeDiv.style.display = 'none';
        }
        fadeDiv.style.opacity = opacity;
        opacity -= 0.1;
    }, 500);
}
fadeOutElement();