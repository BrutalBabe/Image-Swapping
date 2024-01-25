

window.addEventListener("load", inializePage);

var first;
var second;
var firstArr = [];
var secArr = [];
var main;
var mainImage;

function inializePage()
{
   mainImage = document.createElement('img');

   main = document.getElementById("main-image");

   mainImage.src = "./first/main.JPG";

   main.appendChild(mainImage);

   first = document.getElementById("first");
   second = document.getElementById("second");

   for(i=0; i < 5; i++){
      firstArr.push("./first/" + i + ".jpg");
   }
   for(i=0; i < 5; i++){
      secArr.push("./second/" + i + ".jpg");
   }

   createArray();
}

function createArray()
{
  for(i=0; i < firstArr.length; i++){
      var img = document.createElement('img');
      
      img.setAttribute( 'onclick', 'swap(this)');

      img.src = firstArr[i];
     
      main.addEventListener("dblclick", itemClicked);
     
      first.appendChild(img);

   }
}

function itemClicked (e)
{
first.remove();

for(i=0; i < secArr.length; i++){
   var img = document.createElement('img');

   img.setAttribute( 'onclick', 'swap(this)');
   img.src = secArr[i];


   main.addEventListener("dblclick", createArray);
   second.appendChild(img);

}


}function swap(img) {
        mainImage.src = img.src;
    }




function msg() {
}