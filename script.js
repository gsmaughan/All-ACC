window.onload = function loaded(){

    const players = [
        {
            name: "Marvin_Bagley",
            school: "Duke",
            image: "./images/marvinBagley.jpg"
        },
        {
            name: "Jerome_Robinson",
            school: "Boston College",
            image: "./images/jeromeRobinson.jpg"
        },
        {
            name: "Luke_Maye",
            school: "UNC",
            image: "./images/lukeMaye.jpg"
        },
        {
            name: "Joel_Berry",
            school: "UNC",
            image: "./images/joelBerry.jpg"
        },
        {
            name: "Kyle_Guy",
            school: "UVA",
            image: "./images/kyleGuy.jpg"
        },
        {
            name: "Tyus_Battle",
            school: "Syracuse",
            image: "./images/tyusBattle.jpg"
        },
        {
            name: "Marcquise_Reed",
            school: "Clemson",
            image: "./images/marcquiseReed.jpg"
        },
        {
            name: "Devon_Hall",
            school: "UVA",
            image: "./images/devonHall.jpg"
        },
        {
            name: "Wendell_Carter,_Jr",
            school: "Duke",
            image: "./images/wendellCarter.jpg"
        },
        {
            name: "Justin_Robinson",
            school: "Virginia Tech",
            image:"./images/justinRobinson.jpg"
        },
        {
            name: "Grayson_Allen",
            school: "Duke",
            image: "./images/graysonAllen.jpg"
        },
        {
            name: "Matt_Farrell",
            school: "Notre Dame",
            image: "./images/mattFarrell.jpg"
        },
        {
            name: "Ty_Jerome",
            school: "UVA",
            image: "./images/tyJerome.jpg"
        },
        {
            name: "Josh_Okogie",
            school: "Georgia Tech",
            image: "./images/joshOkogie.jpg"
        },
        {
            name: "Omer_Yurtseven",
            school: "NCSU",
            image: "./images/omerYurtseven.jpg"
        }
    ];

console.log('players', players);

    var firstTeam = ["Marvin_Bagley", "Jerome_Robinson", "Luke_Maye", "Joel_Berry", "Kyle_Guy"];
    var secondTeam = ["Tyus_Battle", "Marcquise_Reed", "Devon_Hall", "Wendell_Carter,_Jr", "Justin_Robinson"];
    // var thirdTeam = ["Grayson Allen", "Matt Farrell", "Ty Jerome", "Josh Okogie", "Omer Yurtseven"];

    var shuffled = shuffle(players);
    showImage(shuffled);
    console.log('shuffled', shuffled);
    
    

    // showNames(shuffled);

    function showImage(shuffled){
        
        for(var i = 0; i < shuffled.length; i++){
            // console.log('shuffled[i].name', shuffled[i].name);
           
            
            var name = shuffled[i].name;
            
            if(firstTeam.includes(name) ){
                $('#firstTeam').append('<img src=' + shuffled[i].image + ' id=' + shuffled[i].name + '>');
                console.log('First Team',name);
            }
            else if(secondTeam.includes(name) ){
                $('#secondTeam').append('<img src=' + shuffled[i].image + ' id=' + shuffled[i].name + '>');
            }
            else{
                $('#thirdTeam').append('<img src=' + shuffled[i].image + ' id=' + shuffled[i].name + '>');
            }
        }
        

    }// end showImage

// var chosenPlayers = players;
console.log(players);



var j = 0;
var correct = 0;
var wrong = 0;

var playerName = players[j].name;
playerName = playerName.replace(/_/g, " ");

$('#name').html(playerName);




$("img").on("click", function()
{
    // Do stuff, get id of image perhaps?
    var chosenName = $(this).attr("id");

    if(players[j].name == chosenName){
        
        correct++;
        $('#correct').html("Correct:  " + correct);
        j++;
        if (j == 15){
            $('#name').html("Thanks for playing");
            $('#name').attr("style", "color: black");
            $('#info').attr("style", "background-color: red");
            return;
        }
        playerName = players[j].name;
        playerName = playerName.replace(/_/g, " ");
        $('#name').html(playerName);

    }
    else{
        
        wrong++;
        $('#wrong').html("Wrong:  " + wrong);
        j++;
        if (j == 15){
            $('#name').html("Thanks for playing");
            $('#name').attr("style", "color: black");
            $('#info').attr("style", "background-color: red");
            return;
        }
        playerName = players[j].name;
        playerName = playerName.replace(/_/g, " ");
        $('#name').html(playerName);

    }
    
    
});




    function shuffle(array){

        var currentIndex = array.length, temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

}//end onload