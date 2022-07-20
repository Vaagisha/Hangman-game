
let collectionOfWords = {
  0:"GALAXY",
  1:"FUNNY",
  2:"CRYPTO",
  3:"LIVERPOOL",
  4:"JAZZ",
  5:"WALMART",
  6:"CYCLE",
  7:"GOSSIP",
  8:"PNEUMONIA",
  9:"MELANCHOLY",
  10:"ZOMBIE",
  11:"ASTRONAUT",
  12:"ANTARCTICA",
  13:"CHELSEA",
  14:"LAMBDA",
  15:"ITERATOR",
  16:"ALGORITHM",
  17:"PLACEMENT",
  18:"INSPECTION",
  19:"MANCHESTER",
  20:"ENGINEER",
  21:"UNICORN",
  22:"OLYMPIC",
  23:"FRAMEWORK",
  24:"METAVERSE",
  25:"DATABASE",
};

let collectionOfHints = {
  0:"RELATED TO SPACE",
  1:"HUMOROUS",
  2:"HOT TOPIC OF THIS TIME",
  3:"A FOOTBALL CLUB",
  4:"A MUSIC GENRE",
  5:"A FAMOUS IT COMPANY",
  6:"REPETITION",
  7:"IDLE TALK",
  8:"A DISEASE",
  9:"SAD / A FEELING OF SADNESS",
  10:"AN IMAGINATION",
  11:"SPACEMAN",
  12:"A CONTINENT",
  13:"A FOOTBALL CLUB",
  14:"VERY POPULAR IN PHYSICS",
  15:"TRAVERSE",
  16:"INSTRUCTIONS",
  17:"A WORD COMMON IN ENGINEERING",
  18:"EXAMINE",
  19:"THE FIRST INDUSTRIALISED CITY, IN ENGLAND",
  20:"A FIELD OF SCIENCE",
  21:"STARTUPS",
  22:"AN ATHLETIC CONTEST",
  23:"STRUCTURE",
  24:"VIRTUAL WORLD",
  25:"ORGANISED COLLECTION",
};

//FUNCTION FOR THE REPRESENTATION OF THE WORD
let x,j;
function representWord(){
  x = Math.floor(Math.random() * 26);
  j = 0;
 //console.log(collectionOfWords[x]);
for(let i = 0; i < collectionOfWords[x].length; i++){
   document.getElementById(`${i}`).innerHTML = "_";
    //console.log("_");
}
while(j < 2){
    i = Math.floor(Math.random() * collectionOfWords[x].length);
    if(document.getElementById(`${i}`).innerHTML === "_"){
      document.getElementById(`${i}`).innerHTML = collectionOfWords[x][i];
      j++;}
  }
}
representWord();

//FUNCTION TO SET TIME
let timeVariable = 90;
let timeOut = setInterval(timeInterval,1000);
function timeInterval(){
  if(timeVariable == 0){
    setTimeout(function() {
      alert(`YOU LOST:(\nBETTER LUCK NEXT TIME\nTHE WORD WAS : ${collectionOfWords[x]}`);
},10);
    clearInterval(timeOut);
  }
  document.getElementById("time").innerHTML=`TIME : ${timeVariable}`;
  timeVariable--;
  //console.log("---time1---",timeVariable);
}

//FUNCTION FOR TAKING INPUT AND FOR MATCHING
let count1 = 0, count2 = 0;
function takeLetter(obj){
  let  elementId = obj.id, flag = 0;
  var str1 = document.getElementById(`${elementId}`).innerHTML; 
  document.getElementById(`${elementId}`).disabled = "true";
  for(let i = 0; i < collectionOfWords[x].length; i++){
    if(str1 == collectionOfWords[x][i] && document.getElementById(`${i}`).innerHTML === "_"){
      console.log('----in print')
      document.getElementById(`${i}`).innerHTML = str1;
      count1++;
      //console.log("c1: str: ",count1,str1);
    }
    else{
      flag++;
    }
    console.log('----', flag, count1, count2);
     if( count1 == collectionOfWords[x].length - 2){
      //  console.log('----in alert')
        setTimeout(function() {
  	    alert("YOU WIN!!!!!!!");
  },10);
        clearInterval(timeOut);
        window.location.reload();
        break;
      }
      if(flag >= collectionOfWords[x].length){
        count2++;
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
     // console.log("c2: ",count2);
      switch(count2){
        case 1:
          ctx.moveTo(0,200);
          ctx.lineTo(150,200);
          ctx.stroke();
          ctx.moveTo(10,10);
          ctx.lineTo(10,200);
          ctx.stroke();
          break;
        case 2:
          ctx.moveTo(0,10);
          ctx.lineTo(50,10);
          ctx.stroke();
          break;
        case 3:
          ctx.beginPath();
          ctx.arc(50, 40, 15, 0, 2 * Math.PI);
          ctx.stroke();
          break;
        case 4:
          ctx.moveTo(50,55);
          ctx.lineTo(50,85);
          ctx.stroke();
          break;
        case 5:
          ctx.moveTo(50,70);
          ctx.lineTo(70,65);
          ctx.stroke();
          ctx.moveTo(50,70);
          ctx.lineTo(30,65);
          ctx.stroke();
          break;
        case 6:
          ctx.moveTo(50,85);
          ctx.lineTo(70,95);
          ctx.stroke();
          break;
        case 7:
          ctx.moveTo(50,85);
          ctx.lineTo(30,95);
          ctx.stroke();
          break;
        case 8:  
          ctx.moveTo(50,10);
          ctx.lineTo(50,25);
          ctx.stroke();
          setTimeout(function() {
            alert(`YOU LOST:(\nBETTER LUCK NEXT TIME\nTHE WORD WAS : ${collectionOfWords[x]}`);
      },10);
          clearInterval(timeOut);

          break;
        default:
          alert("YOU LOST:(\nBETTER LUCK NEXT TIME");
          break;
      }
     }
    }
}
// console.log(count1);

//FUNCTION FOR THE HINT BUTTON
function hint(){
  document.getElementById("hint").disabled = "true";
  document.getElementById("description").innerHTML = "HINT:  "+collectionOfHints[x];
  console.log(collectionOfHints[x]);
}

