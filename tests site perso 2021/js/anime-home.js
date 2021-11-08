///////////////////////////////////////
// HOME CIRCLES ANIMATION
// Setting a basic background on load
var circleOne = document.getElementById('circle-one');
var circleTwo = document.getElementById('circle-two');
var circleThree = document.getElementById('circle-three');

setInitialBackgroundCircles = () =>{
    circleOne.setAttribute('style', 'background: radial-gradient(rgba(255,0,0,0.3) 0%, rgba(192,92,188,0.3) 100%)');
    circleTwo.setAttribute('style', 'background: radial-gradient(rgba(0,255,0,0.3) 0%, rgba(100,92,192,0.3) 100%)');
    circleThree.setAttribute('style', 'background: radial-gradient(rgba(0,0,255,0.3) 0%, rgba(122, 108, 80, 0.3) 100%)');
}

window.onload = setInitialBackgroundCircles();

// Animation core
var backgroundCirclesColor = anime.timeline({
    easing: 'linear',
    direction: 'alternate',
    loop: true
})
.add({ 
    targets: '#circle-one',
    duration: function(){
        var durationOne = anime.random(800, 3000);
        return durationOne;
    },
    keyframes: [
        {background: 'radial-gradient(rgba(0,0,0,0.5) 0%, rgba(255,0,255,1) 100%)'},
        {background: 'radial-gradient(rgba(60,120,200,1) 0%, rgba(34,92,10,1) 100%)'}
    ]
}, 0)
.add({ 
    targets: '#circle-two',
    duration: function(){
        var durationTwo = anime.random(800, 3000);
        return durationTwo;
    },
    keyframes: [
        {background: 'radial-gradient(rgba(74,183,22,1) 0%, rgba(100,92,192,1) 100%)'},
        {background: 'radial-gradient(rgba(143,34,200,1) 0%, rgba(180,240,46,1) 100%)'}
    ],
    delay: 333
}, 0)
.add({ 
    targets: '#circle-three',
    duration: function(){
        var durationThree = anime.random(800, 3000);
        return durationThree;
    },
    keyframes: [
        {background: 'radial-gradient(rgba(22,183,183,1) 0%, rgba(122, 108, 80, 1) 100%)'},
        {background: 'radial-gradient(rgba(250,30,70,.7) 0%, rgba(255, 10, 220, .7) 100%)'}
    ],
    delay: 666
}, 0)