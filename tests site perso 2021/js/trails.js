var cursorContainer = document.getElementById('cursor-container');
var countOfTrailElements = document.querySelectorAll('.single-trail-element').length;

getRandomRGBValue = () => {
    return Math.round(- Math.random() * (1 - 255) + 1);
};

onmousemove = (e) => {
    countOfTrailElements = document.querySelectorAll('.single-trail-element').length;
    if(countOfTrailElements > 500){
        cursorContainer.removeChild(cursorContainer.firstChild);
    }
    console.log("mouse location:", e.clientX, e.clientY, countOfTrailElements);

    let newTrailElement = document.createElement('div');
    newTrailElement.setAttribute('class', 'single-trail-element');
    newTrailElement.setAttribute('style', `top: ${e.clientY - 40}px; left: ${e.clientX - 75}px; background-color: rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()});`);
    cursorContainer.appendChild(newTrailElement);
};