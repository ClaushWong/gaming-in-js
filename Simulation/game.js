var maxHP, currentHP;
var user = [];
var enemy = [];
var userLevelSystem = [];
var enemyLevelSystem = [];
var userLevel = 1;
var enemyLevel = 1;
var n = 20;
var m = 40;

function userPreSet(x,y,z,a,b){
  userLevelSystem[x] = [];
    userLevelSystem[x].maxHP = y;
    userLevelSystem[x].currentHP = z;
    userLevelSystem[x].baseAttack = a;
    userLevelSystem[x].baseDefend = b;
}

function enemyPreSet(x,y,z,a,b){
  enemyLevelSystem[x] = [];
    enemyLevelSystem[x].maxHP = y;
    enemyLevelSystem[x].currentHP = z;
    enemyLevelSystem[x].baseAttack = a;
    enemyLevelSystem[x].baseDefend = b;
}

for ( var x = 0 ; x < 50 ; x++ ){
  userBase = 10;
  enemyBase = 5;
  userPreSet( x , x * n , x * n , userBase * ( x + 1 ) , Math.floor( ( userBase / 2 ) ) * ( x + 1 ) );
  enemyPreSet( x , x * m , x * m , enemyBase * ( x + 1 ) , Math.floor( ( enemyBase / 2 ) ) * ( x + 1 )  );
  m += 10;
  n += 10 ;
}

// for ( var y = 0 ; y < 50 ; y++ ){
//   enemyBase = 5;
//   enemyPreSet( y , y + m , y + m , enemyBase * ( y + 1 ) , Math.floor( ( enemyBase / 2 ) ) * ( u + 1 )  );
//   m += 10;
// }

function userFunction(){
  user.name = "Amore d' Espair";
  user.age = 23;
  user.level = userLevel;
  user.maxHealth = userLevelSystem[userLevel].maxHP;
  user.currentHealth = userLevelSystem[userLevel].currentHP;
  user.baseAttack = userLevelSystem[userLevel].baseAttack;
  user.baseDefend = userLevelSystem[userLevel].baseDefend;
}

function enemyFunction(){
  enemy.name = "Random Passenger"
  enemy.level = enemyLevel;
  enemy.maxHealth = enemyLevelSystem[enemyLevel].maxHP;
  enemy.currentHealth = enemyLevelSystem[enemyLevel].currentHP;
  enemy.baseAttack = enemyLevelSystem[enemyLevel].baseAttack;
  enemy.baseDefend = enemyLevelSystem[enemyLevel].baseDefend;
}

function checkAllHP() {
  if ( user.currentHealth <= 0  && enemy.currentHealth > 0 ){
    console.log("You lose.");
    javascript_abort();
  }
  if ( user.currentHealth > 0 && enemy.currentHealth <= 0 ){
    console.log("You win.");
    javascript_abort()
  }
}

function javascript_abort(){
   throw new Error('This is not an error. This is just to end the game by using force.');
}

userFunction();
enemyFunction();

function execute(){
  //Game process
  var oper = prompt("Enter command. 1.Atk  2.Def  3.Run  4.Stats");
  if ( oper == 1 ){
    console.log("Player attack " + enemy.name + " .");
    enemy.currentHealth -= ( user.baseAttack - enemy.baseDefend );
    checkAllHP();
    console.log( enemy.name + " attack player.");
    user.currentHealth -= ( enemy.baseAttack - user.baseDefend );
  }
  else if ( oper == 2 ){
    console.log("Player defend.");
    var userNewDefend = user.baseDefend * 2 ;
    console.log("Player attacked by enemy " + enemy.name + " .");
    user.currentHealth -= ( enemy.baseAttack - userNewDefend );
  }
  else if ( oper == 3 ){
    console.log("Player fail to run.");
    console.log("Player attacked by " + enemy.name + " .");
    user.currentHealth -= ( enemy.baseAttack - user.baseDefend );
  }
  else if ( oper == 4 ){
    alert("Player HP = " + user.currentHealth + "      Enemy HP = " + enemy.currentHealth );
  }
  else {
    alert("Error occur.");
    user.currentHealth -= ( enemy.baseAttack - user.baseDefend );
  }

  //End game
  if ( user.currentHealth <= 0  && enemy.currentHealth > 0 ){
    console.log("You lose.");
  }
  else if ( user.currentHealth > 0 && enemy.currentHealth <= 0 ){
    console.log("You win.");
  }
  else {
    execute();
  }
}
