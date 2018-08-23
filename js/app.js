var BusMallImage = function(fileName) {
    this.fileName = fileName;
}

var images = []; 
images.push(new BusMallImage('bag.jpg'));
images.push(new BusMallImage('banana.jpg'));
images.push(new BusMallImage('boots.jpg'));
images.push(new BusMallImage('chair.jpg'));
images.push(new BusMallImage('cthulhu.jpg'));
images.push(new BusMallImage('dragon.jpg'));
images.push(new BusMallImage('pen.jpg'));
images.push(new BusMallImage('scissors.jpg'));
images.push(new BusMallImage('shark.jpg'));
images.push(new BusMallImage('sweep.jpg'));
images.push(new BusMallImage('unicorn.jpg'));
images.push(new BusMallImage('usb.jpg'));
images.push(new BusMallImage('water_can.jpg'));
images.push(new BusMallImage('wine_glass.jpg'));

console.log(images);



function showThreeImages() {
    var container = document.getElementById("img-container");
    container.innerText = '';
    var image = document.createElement('img');
    var printedPics = [];
    var index = generateRandom(0, images.length);
    image.setAttribute('src', './img/' + images[index].fileName);
    image.addEventListener('click', clickedPic);
    container.appendChild(image);
    printedPics.push(image);


    image = document.createElement('img');
    index = generateRandom(0, images.length);
    image.setAttribute('src', './img/' + images[index].fileName);
    image.addEventListener('click', clickedPic);
    container.appendChild(image);
    printedPics.push(image);


    image = document.createElement('img');
    index = generateRandom(0, images.length);
    image.setAttribute('src', './img/' + images[index].fileName);
    image.addEventListener('click', clickedPic)
    container.appendChild(image);
    printedPics.push(image);
    

    console.log(printedPics);
    console.log(printedPics[0].currentSrc);
    console.log(printedPics[0].src);

}



function generateRandom(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

function clickedPic(event) {
        showThreeImages()
    }

    window.addEventListener('load', showThreeImages);