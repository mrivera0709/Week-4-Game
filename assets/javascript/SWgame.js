$(document).ready(function() 
{
//-------------------------------------------------
//Character Attributes 
var sidious =        						 //Sidious --------
	{
	initialAttack: 10,
	attack:	10,
	counter: 15,
	HP: 175,
	selectedChar:false,
	selectedEnemy:false,
	}

var vader =       			    			 //Vader --------
	{
	initialAttack: 12,
	attack:	12,
	counter: 19,
	HP: 125,
	selectedChar: false,
	selectedEnemy: false,
	}

var yoda =          			     		  //Yoda --------
	{
	initialAttack: 9,
	attack:	9,
	counter: 12,
	HP: 200,
	selectedChar: false,
	selectedEnemy: false,
	}

var luke =          			     		  //Luke --------
	{
	initialAttack: 7,
	attack:	7,
	counter: 20,
	HP: 195,
	selectedChar: false,
	selectedEnemy: false,
	}

//-------------------------------------------------
//Create a staging area for the selected character
var yourCharacter =   		//Your Character --------
	{
	initialAttack: null,
	attack:	null,
	counter: null,
	HP: null,
	selectedChar: true,
	selectedEnemy: false,
	}

//-------------------------------------------------
//Create a staging area for the selected enemy	
var yourEnemy = 				      //Your Enemy --------
	{
	attack:	null,
	counter: null,
	HP: null,
	selectedChar: true,
	selectedEnemy: false,
	}

//-------------------------------------------------
//Display attributes
var update = function() 
	{
	$("#sidiousAttack").html(sidious.attack);
	$("#sidiousHP").html(sidious.HP);
	$("#sidiousCounter").html(sidious.counter);
	$("#vaderAttack").html(vader.attack);
	$("#vaderHP").html(vader.HP);
	$("#vaderCounter").html(vader.counter);
	$("#yodaAttack").html(yoda.attack);
	$("#yodaHP").html(yoda.HP);
	$("#yodaCounter").html(yoda.counter);
	$("#lukeAttack").html(luke.attack);
	$("#lukeHP").html(luke.HP);
	$("#lukeCounter").html(luke.counter);
	}

update();
//-------------------------------------------------
//Character Selections  NEED TO TURN INTO A FOR LOOP FOR CHARACTER SELECTION AND ENEMY SELECTION
$("#sidious").click( function()
	{
	//Place your character into the "yourChar" div
	//CURRENTLY SET TO ONLY ALLOW SIDIOUS to be selected
	$("#sidious").appendTo("#yourChar");
	sidious.selectedChar=true;
	
	//Make the "Your character" attributes match the attributes of the selected character
	yourCharacter.initialAttack = sidious.initialAttack;
	yourCharacter.attack = sidious.attack;
	yourCharacter.HP = sidious.HP;
	
	//Display Your Character attributes
	$("#yourCharAttack").html(yourCharacter.attack);
	$("#yourCharHP").html(yourCharacter.HP);
	
	//When clicked after You character is selected, move to Your Enemy div and update Enemy Attributes
	$("#vader").click( function()
		{
		$("#vader").appendTo("#yourEnemy");
		vader.selectedEnemy=true;
		yoda.selectedEnemy=false;
		luke.selectedEnemy=false;
		sidious.selectedEnemy=false;
		yourEnemy.counter = vader.counter;
		yourEnemy.HP = vader.HP;
		$("#yourEnemyAttack").html(yourEnemy.counter);
		$("#yourEnemyHP").html(yourEnemy.HP);
		})
		
	//When clicked after You character is selected, move to Your Enemy div and update Enemy Attributes
	$("#yoda").click( function()
		{
		$("#yoda").appendTo("#yourEnemy");
		vader.selectedEnemy=false;
		yoda.selectedEnemy=true;
		luke.selectedEnemy=false;
		sidious.selectedEnemy=false;
		yourEnemy.counter = yoda.counter;
		yourEnemy.HP = yoda.HP;
		$("#yourEnemyAttack").html(yourEnemy.counter);
		$("#yourEnemyHP").html(yourEnemy.HP);
		})
	
	//When clicked after You character is selected, move to Your Enemy div and update Enemy Attributes	
	$("#luke").click( function()
		{
		$("#luke").appendTo("#yourEnemy");
		vader.selectedEnemy=false;
		yoda.selectedEnemy=false;
		luke.selectedEnemy=true;
		sidious.selectedEnemy=false;
		yourEnemy.counter = luke.counter;
		yourEnemy.HP = luke.HP;
		$("#yourEnemyAttack").html(yourEnemy.counter);
		$("#yourEnemyHP").html(yourEnemy.HP);
		
		})
	
	})
//-------------------------------------------------
//Clicking Attack 
$("#attack").click( function()
	{
	//Calculate damage to both sides and update stats displayed
	console.log("---------------------------------------")
	console.log("Attack:"+ yourCharacter.attack);
	yourEnemy.HP -= yourCharacter.attack;
	$("#yourEnemyHP").html(yourEnemy.HP);
	console.log("Enemy HP:"+ yourEnemy.HP);
	yourCharacter.HP -= yourEnemy.counter;
	$("#yourCharHP").html(yourCharacter.HP);
	console.log("Your Current HP:"+ yourCharacter.HP);
	yourCharacter.attack += yourCharacter.initialAttack;
	$("#yourCharAttack").html(yourCharacter.attack);
	console.log("New Attack:"+ yourCharacter.attack);
	$("#yourEnemyAttack").html(yourEnemy.counter);
	update();
	
	//Upon enemy death, remove character from Your Enemy div and refresh stats to zero	
	if (yourEnemy.HP < 1)
			{
			$("#yourEnemy").empty();
			yourEnemy.counter= 0;
			yourEnemy.HP = 0;	
			$("#yourEnemyAttack").html(yourEnemy.counter);
			$("#yourEnemyHP").html(yourEnemy.HP);
			}	
	
	//Upon character death, remove character from Your CHaracter div and refresh stats to zero			
	else if (yourCharacter.HP < 1)
			{
			$("#yourChar").empty();
			yourCharacter.attack = 0;
			yourCharacter.HP = 0;	
			$("#yourCharAttack").html(yourCharacter.attack);
			$("#yourCharHP").html(yourCharacter.HP);
			}
	
	
	
	
	
	})






})