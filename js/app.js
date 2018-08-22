var BusMallImage = function(fileName) {
    this.fileName = fileName;
}

var images = []; 
images.push(new BusMallImage('bag.jpg'));
images.push(new BusMallImage('banana.jpg'));
images.push(new BusMallImage('boots.jpg'));
images.push(new BusMallImage('banana.jpg'));
images.push(new BusMallImage('banana.jpg'));
images.push(new BusMallImage('banana.jpg'));
images.push(new BusMallImage('banana.jpg'));
images.push(new BusMallImage('banana.jpg'));
images.push(new BusMallImage('banana.jpg'));
images.push(new BusMallImage('banana.jpg'));
// ('chair.jpg');
// ('cthulhu.jpg');
// ('dragon.jpg');
// ('pen.jpg');
// ('scissors.jpg');
// ('shark.jpg');
// ('sweep.jpg');
// ('unicorn.jpg');
// ('usb.jpg');
// ('water_can.jpg');
// ('wine_glass.jpg');

    console.log(images);

    function showThreeImages() {
        var container = document.getElementById("img-container");
        container.innerText = '';
        var image = document.createElement('img');
        image.setAttribute('src', './img/' + images[0].fileName);
        container.appendChild(image);
    }
    showThreeImages();

