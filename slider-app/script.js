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

showSlide(index)

document.querySelector(".fa-circle-arrow-left").addEventListener("click", function(){
    index--;
    showSlide(index)
    console.log(index);
})
document.querySelector(".fa-circle-arrow-right").addEventListener("click", function(){
    index++;
    showSlide(index)
    console.log(index);
})

function  showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1
    }
    if (i >= slaytCount) {
        index = 0
    }

    console.log(i);

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models
    [index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}