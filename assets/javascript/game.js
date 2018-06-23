
// an array of legends names and corresponding images / textual hints
var tcuLegends = [
{legend: "Sammy Baugh", image: "assets/images/sammyBaugh.jpg",
hint: "Told he could play three sports (football, baseball, & basketball), he came to TCU & was named an Football All American in 1935 & 1936.  He also led TCU to two bowl game wins; including a 3 to 2 victory over LSU in the 1936 Sugar Bowl, TCU's first National Championship."},
{legend: "Ladanian Tomlinson", image: "assets/images/LT.jpg",
hint: "Set what once was an NCAA record breaking 406 yards against UTEP. His 2,158 yards in 2000 led the nation in rushing & placed as the fourth best rushing season in NCAA history (at the time)."},
{legend: "Bob Lilly", image: "assets/images/bobLilly.jpg",
hint: "Nicknamed Tiger by his teammates at TCU, but would later become known as Mr. Cowboy. A consensus All American as a senior in 1960 & later inducted into the College Football Hall of Fame in 1980."},
{legend: "Davey OBrien", image: "assets/images/daveyObrien.jpg",
hint: "He won TCU's first Heisman while leading his team to an undefeated season & a National Championship. An award in his name is presented annually to the best Quarterback in College Football."},
{legend: "Jim Swink", image: "assets/images/jimSwink.jpg",
hint: "The Rusk Rambler. He is remembered as one of the all time greatest running backs in Southwest Conference history, & led the Horned Frogs to consecutive conference championships in 1955 & 1956, which resulted in trips to the Cotton Bowl Classic."},
{legend: "Ki Aldrich", image: "assets/images/kiAldrich.jpg",
hint: "He was an All American at center for TCU & the number 1 overall pick in the 1939 NFL Draft. His senior year, 1938, the Horned Frogs won the National Championship; finishing 11 and 0, winning the Sugar Bowl."},
{legend: "Jerry Hughes", image: "assets/images/jerryHughes.jpg",
hint: "A RB turned DE, his 15.0 sacks in 2008 led the nation & were good for second all time in school history. He was only the second Frog to earn two time consensus first team All America honors."},
{legend: "Andy Dalton", image: "assets/images/andyDalton.jpg",
hint: "A three time bowl game MVP (Texas Bowl, Rose Bowl, Poinsettia Bowl). A record of 42 and 7 as the starter, including two BCS Bowl berths & a Rose Bowl championship & a two time MWC Player of the Year."},
{legend: "Josh Doctson", image: "assets/images/joshDoctson.jpg",
hint: "A former 'walk on' at TCU, he left TCU holding the school record in all but one recieving category, career receptions (catching 1 less than the record). Missing several games due to injury as a Senior, he still ended the year with school records of 79 receptions for 1,327 yards & 14 touchdowns."},
{legend: "Raymond Matthews", image: "assets/images/raymondMatthews.jpg",
hint: "Nicknamed 'Rags', he was All American at TCU in the 1920s, playing end on both offense and defense. He was named to the All Time All SWC Team in 1969, and was elected to the College Football Hall of Fame in 1971."},
{legend: "Aaron Schobel", image: "assets/images/aaronSchobel.jpg",
hint: "His 31.0 career sacks remain a TCU career record for sacks. He also set a then school record for sacks in a single season when he registered 10.0 in 1999."},
{legend: "Bo Schobel", image: "assets/images/boSchobel.jpg",
hint: "He set the single season sack record with 17.0 QB sacks in 2003. His 120 yards lost on tackles that same year were second best in school history as well."},
{legend: "Kenneth Davis", image: "assets/images/kennethDavis.jpg",
hint: "He earned first team All American honors as a Junior, rushing for 1,611 yards (#3 in the NCAA) and 16 touchdowns. He finished his career with a then school record 2,904 yards & 24 rushing touchdowns."},
{legend: "Jason Verrett", image: "assets/images/jasonVerrett.jpg",
hint: "Graduating high school with no college scholarship offers, he opted to attend a Junior College before making his way to TCU. Voted All Big 12 in 2012 and 2013 and First team All American in 2013, he finished his Senior year named Co Big 12 Defensive POY & ranked by ESPN as the No. 1 player in the Big 12."},
{legend: "Larry Brown", image: "assets/images/larryBrown.jpg",
hint: "Best known for his MVP performance in Super Bowl XXX in which he intercepted two passes to help Dallas win its (& his) third Championship. He was the first cornerback to ever win the Super Bowl MVP trophy."},
{legend: "Tank Carder", image: "assets/images/tankCarder.jpg",
hint: "Helped lead what is arguably the best team in school history as TCU beat Wisconsin in the Rose Bowl. He was named game MVP & earned Mountain West Defensive Player of the Year honors."},
{legend: "Mike Renfro", image: "assets/images/mikeRenfro.jpg",
hint: "Left school in 1977 as TCUs all time leading receiver with 2,739 yards in his four year career. He also finishied with 162 career receptions, good for third best in school history."},
{legend: "Trevone Boykin", image: "assets/images/trevoneBoykin.jpg",
hint: "A fixture atop every TCU passing record with the exception of one. He also hold records for 7th most rushing touchdowns in a career and 10th most receptions in a single game at TCU."},
{legend: "Gary Patterson", image: "assets/images/gP.jpg",
hint: "The winningest coach in Horned Frogs' history, leading TCU to countless top 25 finishes including six top 10 rankings. A proven winner in three conferences he is also the recipient of 21 Coach of the year awards."},
{legend: "Dutch Meyer", image: "assets/images/dutchMeyer.jpg",
hint: "He coached TCU to two national championships, three SWC championships, a Heisman winner, two Sugar Bowls, one Cotton Bowl, and four top 20 finishes. A coach truly ahead of his time, his short passing game turned TCU into an unstoppable force like nothing else seen from his era."},
];


// Function to produce a random 'new' legend (& corresponding image) at the beginning/restart of the game.
function newLegend() {
    return tcuLegends[Math.floor(Math.random() * tcuLegends.length)];
}

// variables to be referenced
var currentLegend; // empty var for legend that will be guessed
var displayString= ''; // empty variable to display strings of ...
var lettersGuessed = []; // empty array of letters guessed
var remainingLetters = 0;
var ponyUp = 0; // wrong guesses, are you a SMU fan?
var win_lose_message; // win or lose message

// pulling html elements
var displayLegend = document.getElementById('displayLegend');
var displayHint = document.getElementById('displayHint');
var imageLegend = document.getElementById('imageLegend');
var letters_Guessed = document.getElementById('letters_Guessed');
var remaining_Letters = document.getElementById('remainingLetters');
var ponyUpLevel = document.getElementById('ponyUp');

function start() {
    currentLegend = newLegend();
    console.log(currentLegend);
    displayString = '';
    lettersGuessed = [];
    ponyUp = 0;
    remainingLetters = 0;


    // creating the "_" to take the place of the letters of the currentLegend
    for (var i = 0; i < currentLegend.legend.length; i++) { // Loop through all characters in the string.
        // Using charAt to get the letters in each legend name
        // if there is NOT a " " (empty space) then put a "_" instead
        if (currentLegend.legend.charAt(i) !== " ") { 
            displayString += "_";
            remainingLetters += 1;
        }
        // if there is a " " then display a " " 
        else {
            displayString += " ";
        }
    }
    
    // setting text content of current legend to appear according to above if/else statement at start/restart
    displayLegend.textContent = displayString;
    // setting text content of html element #displayHint to current legend hint
    displayHint.textContent = currentLegend.hint;
    // remainingLetters = currentLegend.length;
    ponyUpLevel.innerHTML = ponyUp;
    remaining_Letters.innerHTML = remainingLetters;
}

document.onkeyup = function(event) {
    // console.log(event.key);
    
    for (var i = 0; i < lettersGuessed.length; i++) {
        if (lettersGuessed[i] === event.key) {
            console.log("already guessed");
            return;
        }
      }
      
    // Add this letter to the already guessed letters array
      lettersGuessed.push(event.key);
      var newLetter = document.getElementById("letters_Guessed");
      newLetter.innerHTML = "<p>" + lettersGuessed + "</p>";

    // was the letter in one of the lengend's names?
    var tempstr = '';
    var newLetter = false;


    for (var i = 0; i < currentLegend.legend.length; i++) {
        console.log("currentLegend.legend = " + currentLegend.legend);
        console.log(currentLegend.legend.charAt(i).toUpperCase(), event.key);
        if ((currentLegend.legend.charAt(i).toUpperCase() == event.key) ||
            (currentLegend.legend.charAt(i).toLowerCase() == event.key)) {
            tempstr += currentLegend.legend.charAt(i);
            remainingLetters--; 
            newLetter = true;
        }
        else {
            console.log("else");
            tempstr += displayString.charAt(i);
        }
    }

    var currentImage = currentLegend.image;

    if (newLetter === false) {
        ponyUp++;
        if (ponyUp === 6) {
            win_lose_message = '<button class="btn" onclick="start()">You must be a Pony in disguise. Try Again?</button>';
            displayHint.innerHTML = win_lose_message;
            imageLegend.src = "assets/images/smu_mustangs.png";
        }
    }

    console.log(tempstr);
    displayString = tempstr;
    displayLegend.textContent = displayString;
    ponyUpLevel.innerHTML = ponyUp;
    remaining_Letters.innerHTML = remainingLetters;

    if (remainingLetters === 0) {
        win_lose_message = '<button class="btn" onclick="start()">Go Frogs!! Play Again?!</button>';
        displayHint.innerHTML = win_lose_message;
        imageLegend.src = currentImage;
    }

}

start();