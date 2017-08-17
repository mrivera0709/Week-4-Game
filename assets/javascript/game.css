
//------------------------------------------------------------
//Set and display inital values for Wins and Losses
var wins = 0;
	$("#wins").text(wins);
var losses = 0;
	$("#losses").text(losses);
	
//------------------------------------------------------------
// Set the target number as a random number between 19 and 120
	// Set Minimum and maximum values for the target score
	var minNumber = 120;
	var maxNumber = 19
	
	//Create a function that chooses a random number between the minimum and maximum values
	var targetNumber = randomNumberFromRange(minNumber, maxNumber);

	function randomNumberFromRange(min,max)
		{
 		return Math.floor(Math.random()*(max-min+1)+min);
		}

	//Display Target Number
	$("#target").text(targetNumber);

	//Set initial value for current score and display
	var counter = 0;
	$("#current").text(counter);

//------------------------------------------------------------ 
//Assign random values to the 4 crystals
	var uniqueRandoms = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
	var numRandoms = 4;
	function makeUniqueRandom() 
		{
    // refill the array if needed
    if (!uniqueRandoms.length) 
    	{
      for (var i = 0; i < numRandoms; i++) 
        {
        uniqueRandoms.push(i);
        }
    	}
  	var index = Math.floor(Math.random() * uniqueRandoms.length);
  	var val = uniqueRandoms[index];

    // now remove that value from the array
  	uniqueRandoms.splice(index, 1);

  	return val;

		}
		
	//Assign random value to each crystal
  $("#crystal1").attr("data-crystalvalue", makeUniqueRandom() );
  $("#crystal2").attr("data-crystalvalue", makeUniqueRandom() );
  $("#crystal3").attr("data-crystalvalue", makeUniqueRandom() );
  $("#crystal4").attr("data-crystalvalue", makeUniqueRandom() );
	

//------------------------------------------------------------ 
//Restart Function
var restartButton = function ()
	{
	wins = 0;
	$("#wins").text(wins);
	losses = 0;
	$("#losses").text(losses);
	}

//------------------------------------------------------------ 
//Hide/Show Rules Function
$("#hide").click( function()
	{
  $("#rules").hide("slow");
  });
  
$("#show").click( function()
	{
  $("#rules").show("slow");
  });
  
//------------------------------------------------------------   	
 // Create function that will compare target score to current score after every button click
$(".crystal").on("click", function() 
  	{
    
    //Grab value of attribute and convert to integer
    var crystalValue = ($(this).attr("data-crystalvalue"));
    
    crystalValue = parseInt(crystalValue);
    
    //Add Crystal value to current score
    counter += crystalValue;
    
    //Consol Log Crystal Value and Current Score
    console.log("----------------------------------");
    console.log("Crystal Value : " + crystalValue);
    console.log("Current Score : " + counter);
    
    //Update Current Score in Page
    $("#current").text(counter);
    
    //Win scenario
    if (counter === targetNumber) 
    	{
      wins++;
      $("#wins").text(wins);
      counter = 0;
    	}
    	
    //Loss scenario	
    else if (counter >= targetNumber) 
    	{
      losses++;
      $("#losses").text(losses);
      counter = 0;
    	}
		});
