var BusMallImage = function(fileName, y, label ) {
    this.fileName = fileName;
    this.y = y;
    this.label = label;
}

var images = []; 
images.push(new BusMallImage('bag.jpg', 0, "Bag"));
images.push(new BusMallImage('banana.jpg', 0, "Banana"));
images.push(new BusMallImage('boots.jpg', 0, "Boots"));
images.push(new BusMallImage('chair.jpg', 0, "Chair"));
images.push(new BusMallImage('cthulhu.jpg', 0, "Cthulhu"));
images.push(new BusMallImage('dragon.jpg', 0, "Dragon"));
images.push(new BusMallImage('pen.jpg', 0, "Pen"));
images.push(new BusMallImage('scissors.jpg', 0, "Scissors"));
images.push(new BusMallImage('shark.jpg', 0, "Shark"));
images.push(new BusMallImage('sweep.jpg', 0, "Sweep"));
images.push(new BusMallImage('unicorn.jpg', 0, "Unicorn"));
images.push(new BusMallImage('usb.jpg', 0, "USB"));
images.push(new BusMallImage('water_can.jpg', 0, "Water Can"));
images.push(new BusMallImage('wine_glass.jpg', 0, "Wine Glass"));

var rounds = 0;

function getChartLabel(event) {
    var target = event.target.src;
    var splitImgSrc = target.split('/');
    var nameOfImg = splitImgSrc[splitImgSrc.length -1];
    var chartLabel = nameOfImg.split('.');
    showThreeImages();
    
    for(var i = 0; i < images.length; i++) {
       if(nameOfImg == images[i].fileName) { 
           images[i].y++;
           rounds++;
           newChart();
        }
    }
    localStorage.setItem('images', JSON.stringify(images));
}  


function showThreeImages() {
    var container = document.getElementById("img-container");
    
    if(rounds < 14) {
        container.innerText = '';
        var printedPics = [];
        var image1 = document.createElement('img');
        var index = generateRandom(0, images.length);
        image1.setAttribute('src', './img/' + images[index].fileName);
        image1.addEventListener('click', getChartLabel);
        container.appendChild(image1);
        printedPics.push(image1);
        var image2 = document.createElement('img');
        index = generateRandom(0, images.length);
        image2.setAttribute('src', './img/' + images[index].fileName);
    
        while (image1.src === image2.src) {
            var changeIndex = generateRandom(0, images.length);
            image2.src = ('./img/' + images[changeIndex].fileName);
            image3.src = ('./img/' + images[changeIndex].fileName);
        };
    
        image2.addEventListener('click', getChartLabel);
        container.appendChild(image2);
        printedPics.push(image2);
        
        image3 = document.createElement('img');
        index = generateRandom(0, images.length);
        image3.setAttribute('src', './img/' + images[index].fileName);
        
        while (image2.src === image3.src) {
            var changepic = generateRandom(0, images.length);
            image3.src = ('./img/' + images[changepic].fileName);
        };
        
        image3.addEventListener('click', getChartLabel);
        container.appendChild(image3);
        printedPics.push(image3);

    } else {
        container.innerText = ' ';
        var button = document.createElement('button');
        container.appendChild(button);
        button.setAttribute('onclick', 'location.reload()');
        button.innerText = "Reset The Game";
    }
}
    
function generateRandom(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

function checkLocal(){
    var storeLocal = JSON.parse(localStorage.getItem('images'));
    if(storeLocal != null){
        images = [];
        for(var i = 0; i < storeLocal.length; i++){
            var store = storeLocal[i];
            images.push(new BusMallImage(store.fileName, store.y, store.label));
        }
    }
}

window.addEventListener('load', checkLocal);
window.addEventListener('load', showThreeImages);

