//global vars
const forest = document.getElementById("forest");

var treeP = 0.5;
var animalP = 0.03;
var specialsP = 0.01;

var rows = 8;
var cols = 15;

var animals = ["🐒", "🦆", "🐅", "🐎", "🦌", "🦌", "🦌", "🐖", "🐐", "🐘", "🦙", "🦏", "🐇", "🐿", "🐿", "🐿", "🐿", "🐿", "🐿", "🦇", "🦔", "🦃", "🐓", "🐤", "🐦", "🦅", "🦉", "🐢", "🐍", "🦋", "🐜🐜🐜", "🐝", "🐞", "🦗"];
var trees = ["🌳", "🌳", "🌳", "🌳", "🌳", "🌳", "🌲", "🌴", "🎋", "🥦", "🌵", "🌾", "🌳", "🌱", "🌳", "🍄"];
var specials = ["🎄", "🕷️🕸️", "🕸️🕷️", "🏕️", "🐾", "🦕"];

//get a random thing for the forest, from above percentages
function getRandomForestItem(){
  var num = Math.random();
  
  //0 - treeP % will be those. each additional bit, empty space at the end.
  if(num < treeP){
    var thingType = Math.floor(Math.random() * trees.length);
    console.log(thingType)
    return trees[thingType];
  }else if(num < treeP + animalP){
    var thingType = Math.floor(Math.random() * animals.length);
    console.log(thingType)
    return animals[thingType];
  }else if(num < treeP + animalP + specialsP){
    var thingType = Math.floor(Math.random() * specials.length);
    console.log(thingType)
    return specials[thingType];
  }
  else{
    //empty space is good.
    return "    "
  }
}

//main generate function
function grow() {
  
  var forestString = "";
  var i, j;
  
  //loop through a 2D array 
  forest.innerText = "hello"
  for(i = 0; i < rows; i++){
    for(j = 0; j < cols; j++){
      forestString += getRandomForestItem();
    }
    forestString += "\n";
  }
  //forest done.
  
  forest.innerText = forestString;
};


//grow by default for every page load
grow();

