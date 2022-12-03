var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/'
    },
    {
        name : 'Mazda CX-3',
        image : './img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/'
    },
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings ={
    duration : "2000",
    random   : false
}

init(settings)

document.querySelector(".fa-circle-arrow-left").addEventListener("click", function(){
    index--;
    showSlide(index);
})
document.querySelector(".fa-circle-arrow-right").addEventListener("click", function(){
    index++;
    showSlide(index)
})

document.querySelectorAll(".arrow").forEach(item => {
    item.addEventListener("mouseenter", () => {
        clearInterval(interval)
    } )
})

document.querySelectorAll(".arrow").forEach(item => {
    item.addEventListener("mouseleave", () => {
        init(settings)
    })
})

function init(settings){

    var prev;

    interval = setInterval(function(){

        if (settings.random){
            //random index
            do {
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index
        }else {
            //artan index
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index)
            console.log(index);
            index++;
        }

        showSlide(index)
    },settings.duration)
}

function  showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1
    }
    if (i >= slaytCount) {
        index = 0
    }


    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models
    [index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}