var BusMallImage = function(fileName) {
    this.fileName = fileName;
    this.label = fileName.split('.')[0];
    this.y = 0;
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

var rounds = 0;

function getChartLabel(event) {
    var target = event.target.src;
    // console.log(target);
    var splitImgSrc = target.split('/');
    var nameOfImg = splitImgSrc[splitImgSrc.length -1];
    // console.log(nameOfImg);
    var chartLabel = nameOfImg.split('.');
    // console.log(chartLabel[0]);
    showThreeImages();

    for(var i = 0; i < images.length; i++) {
        if(nameOfImg == images[i].fileName) { // ask == vs ===
            images[i].y++;
            rounds++;
            chart.render();
        }
    }
    function toLocalStorage(){
       
        var localChartLabel = chartLabel;
        var stringLocalChart = JSON.stringify(localChartLabel);
        console.log( stringLocalChart);
        var store = localStorage.getItem(localChartLabel);
        var stringStore = JSON.stringify(store);
        localStorage.setItem(stringStore, stringLocalChart);
        


    }
    toLocalStorage();
}  

    
    function showThreeImages() {
        var container = document.getElementById("img-container");
        
        if(rounds < 14) {
            // console.log(rounds);
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
        
            while (image1.src === image2.src) {   //////////While loop that compares the first two images//////////////
                // console.log('Images 1, 2 or 3 were the same');
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
            
            while (image2.src === image3.src) { //////////While loop that compares the second and third images//////////////
                // console.log('Images 2 and 3 were the same');
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
    

        
     window.addEventListener('load', showThreeImages);
        
  



