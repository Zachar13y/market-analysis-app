

var BusMallImage = function(fileName) {
    this.fileName = fileName;
}

var images = []; 
images.push(new BusMallImage('bag.jpg'));
images.push(new BusMallImage('banana.jpg'));
images.push(new BusMallImage('boots.jpg'));
// images.push(new BusMallImage('chair.jpg'));
// images.push(new BusMallImage('cthulhu.jpg'));
// images.push(new BusMallImage('dragon.jpg'));
// images.push(new BusMallImage('pen.jpg'));
// images.push(new BusMallImage('scissors.jpg'));
// images.push(new BusMallImage('shark.jpg'));
// images.push(new BusMallImage('sweep.jpg'));
// images.push(new BusMallImage('unicorn.jpg'));
// images.push(new BusMallImage('usb.jpg'));
// images.push(new BusMallImage('water_can.jpg'));
// images.push(new BusMallImage('wine_glass.jpg'));


function showThreeImages() {
    var container = document.getElementById("img-container");
    container.innerText = '';
    var image1 = document.createElement('img');
    var printedPics = [];
    var index = generateRandom(0, images.length);

    image1.setAttribute('src', './img/' + images[index].fileName);
    var getPartOfString = image1.src.substring(0, getPartOfString.indexOf("mg"));
    // getPartOfString = getPartOfString.substring(0, getPartOfString.indexOf('mg'));
    console.log(getPartOfString);

    image1.addEventListener('click', clickedPic);
    container.appendChild(image1);
    printedPics.push(image1);

    var image2 = document.createElement('img');
    index = generateRandom(0, images.length);
    image2.setAttribute('src', './img/' + images[index].fileName);

    while (image1.src === image2.src) {   //////////While loop that compares the first two images//////////////
        console.log('Images 1 and 2 were the same');
        var changeIndex = generateRandom(0, images.length);
        image2.src = ('./img/' + images[changeIndex].fileName);
    };

    image2.addEventListener('click', clickedPic);
    container.appendChild(image2);
    printedPics.push(image2);


    image3 = document.createElement('img');
    index = generateRandom(0, images.length);
    image3.setAttribute('src', './img/' + images[index].fileName);

    while (image2.src === image3.src) { //////////While loop that compares the second and third images//////////////
        console.log('Images 2 and 3 were the same');
        var changepic = generateRandom(0, images.length);
        image2.src = ('./img/' + images[changepic].fileName);
    };

    image3.addEventListener('click', clickedPic);
    container.appendChild(image3);
    printedPics.push(image3);

    
    // while (image1 === image3) {
    //     console.log('1 and 3 were the same!');
    //     var changeEnds = generateRandom(0, images.length);
    //     image3.src = ('./img/' + images[changeEnds].fileName);
    // }

}



function generateRandom(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

// function getNameOfPic(src) {
//     return src.split('/')[8];
// }
// console.log(getNameOfPic);


function clickedPic(event) {
        console.log(event.target.src);
        showThreeImages();
    };
    

window.addEventListener('load', showThreeImages);

// var picVote = [];

// for (var i=0; i<images.length; i++){
// for (var imageI=0; imageI<images.length; imageI++){

// }

