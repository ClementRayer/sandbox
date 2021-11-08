var imageContainer = document.getElementById('image-container');
var numberOfImages = 50;

addImage = () => {
    for(i = 0; i < numberOfImages; i++){
        j = 0;
        setTimeout( () => {
            j++;
            var newImage = document.createElement('img');
            newImage.setAttribute('src', 'img/alo.png');
            newImage.setAttribute('style', `margin-top: -${j * 0.3}px; margin-left: ${j}px;`);
            imageContainer.appendChild(newImage);
        }, i * 0.3);
    };
};

removeImage = () => {
    for(k = 0; k < numberOfImages; k++){
        l = 0;
        setTimeout( () => {
            l++;
            imageContainer.lastChild.remove();
        }, k * 0.3);
    };
};

imageContainer.addEventListener('mouseenter', addImage);
imageContainer.addEventListener('mouseleave', removeImage);