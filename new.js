/*var num = new Array();
for( var i=0; i < 5; i++){
    num[i] = parseInt(prompt("Enter a Number :"));
}
var sum= 0;
for( var i=0; i<5; i++){
    document.write(num[i]);
    sum= sum + num[i];
}
document.write("sum = " + sum);*/
//var names = ["anis", "keya", "poran", "joglu", "bulu"]
//console.log(names)

//names.shift();
//console.log(names)

//names.unshift("sagor");
//console.log(names);


//names.splice(2,0, "Karim" , "Rahim");
//console.log(names);

//names.splice(1,2);
//console.log(names);

//var newArray = names.slice(1,2);
//console.log(newArray);
//var sortNames = names.sort();
//console.log(sortNames);

//var numbers = [20, 5 ,25, 40, 3];
//numbers.sort(function(a,b){
   // return b-a;
//});
//console.log(numbers);

// constructor

/*function Student(name, age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
    
//function in inside
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student("Tuhin",23 , 3.92,["Bengali","Hindi","English"]);
var student2 = new Student("shakil", 24, 4.00,["Bengali","Hindi","English"]);


student1.display();
student2.display();*/

// Guessing game
// Guess is number from 1 to 5
// Generate a random number between 1 to 5
// if the guess number matches random number; then show message won lost
// Run the game 5 times
// show the number of wons and losts2

/*var numofWon = 0;
var numofLost = 0;

for(var i=1; i<=5; i++){
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));
    var randomNumber= Math.floor(Math.random()*5) +1;
    
    if(guessNumber==randomNumber){
        console.log("you have won");
        numofWon++;
    }
    else{
        console.log("You have lost. Random number was " + randomNumber);
        numofLost++;
    }
}

document.write("Number of won =" + numofWon + "<br>" );

document.write("Number of won =" + numofLost + "<br>" );*/