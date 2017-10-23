function $coins() {
	
  var coinSixteen,coinEight,coinFour,coinTwo,coinOne, userNum;
  coinSixteen=0;
  coinEight=0;
  coinFour=0;
  coinTwo=0;
  coinOne=0;
  userNum=0;
  
  while (userNum<20 || userNum>100) {
    alert("Please enter a number between 20 and 100 (inclusive)")
    userNum=parseInt(prompt("Number: "),10)	
  }
    
  
  if (userNum%16==0) {
    coinSixteen+=userNum/16;
	userNum-=coinSixteen*16;
  }
  
  else if (userNum%16!=0) {
    coinSixteen+=Math.floor(userNum/16);
	userNum-=coinSixteen*16;
  }  
  
  if (userNum%8==0) {
	coinEight+=userNum/8;
	userNum-=coinEight*8;  
  }
  
  else if (userNum%8!=0) {
	coinEight+=Math.floor(userNum/8);
	userNum-=coinEight*8;  
  }
  
  if (userNum%4==0) {
	coinFour+=userNum/4; 
	userNum-=coinFour*4;	
  }
  
  else if (userNum%4!=0) {
	coinFour+=Math.floor(userNum/4);
    userNum-=coinFour*4;	  
  }
  
  if (userNum%2==0) {
	coinTwo+=userNum/2;  
	userNum-=coinTwo*2;
  }
  
  else if (userNum%2!=0) {
	coinTwo+=Math.floor(userNum/2);
    userNum-=coinTwo*2;	
  }
  
  coinOne+=userNum;
  
  document.write("sixteen: "+coinSixteen+"<br/>eight: "+coinEight+"<br/>four: "+coinFour+"<br/>two: "+coinTwo+"<br/>one: "+coinOne);  
}