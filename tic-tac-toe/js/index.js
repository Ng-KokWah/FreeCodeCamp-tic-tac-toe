var player1turn = true;
var player2turn = false;
var playerchoice1, playerchoice2, oorx1, oorx2;
var oorx3, oorx4, oorx5, oorx6;
var aiturn = false;
var aishape;
var humanshape;
var player1shape;
var player2shape;

function load() {
  document.getElementById("hide").style.display = "none";
  document.getElementById("oneplayer").style.display = "none";
  document.getElementById("twoplayer").style.display = "none";
}

function players1() {
  document.getElementById("player1").checked = true;
  document.getElementById("player2").checked = false;
  document.getElementById("oneplayer").style.display = "block";
  document.getElementById("twoplayer").style.display = "none";
}

function players2() {
  document.getElementById("player2").checked = true;
  document.getElementById("player1").checked = false;
  document.getElementById("oneplayer").style.display = "none";
  document.getElementById("twoplayer").style.display = "block";
}

function oorx1() {
document.getElementById("oorx1").checked = true;
  document.getElementById("oorx2").checked = false;
}

function oorx2() {
document.getElementById("oorx2").checked = true;
  document.getElementById("oorx1").checked = false;
}

function oorx3() {
  if(document.getElementById("oorx5").checked == true) {
    alert("Player 1 already chose that! Choose something else!");
    document.getElementById("oorx3").checked = false;
  }
  else {
    document.getElementById("oorx3").checked = true;
    document.getElementById("oorx4").checked = false;
  }
}

function oorx4() {
  if(document.getElementById("oorx6").checked == true) {
    alert("Player 1 already chose that! Choose something else!");
    document.getElementById("oorx4").checked = false;
  }
  else {
    document.getElementById("oorx4").checked = true;
    document.getElementById("oorx3").checked = false;
  }
}

function oorx5() {
  if(document.getElementById("oorx3").checked == true) {
    alert("Player 1 already chose that! Choose something else!");
    document.getElementById("oorx5").checked = false;
  }
  else {
    document.getElementById("oorx5").checked = true;
    document.getElementById("oorx6").checked = false;
  }
}

function oorx6() {
  if(document.getElementById("oorx4").checked == true) {
    alert("Player 1 already chose that! Choose something else!");
    document.getElementById("oorx6").checked = false;
  }
  else {
    document.getElementById("oorx6").checked = true;
    document.getElementById("oorx5").checked = false;
  }
}

function validate() {
  playerchoice1 = document.getElementById("player1").checked;
  playerchoice2 = document.getElementById("player2").checked;
  
  if(playerchoice1 == true) {
    oorx1 = document.getElementById("oorx1").checked;
    oorx2 = document.getElementById("oorx2").checked;
    if(oorx1 == true) {
      humanshape = "O";
      aishape = "X";
      document.getElementById("starting").style.display = "none";
      document.getElementById("hide").style.display = "block";
      setInterval(function() {
        checkwin();
      }, 1000);
      setInterval(function() {
        aimove();
      }, 1000);
    }
    else if(oorx2 == true) {
      humanshape = "X";
      aishape = "O";
      document.getElementById("starting").style.display = "none";
      document.getElementById("hide").style.display = "block";
      setInterval(function() {
        checkwin();
      }, 1000);
      setInterval(function() {
        aimove();
      }, 1000);
    }
    else {
      alert("Please Make Your Choice To Continue!");
    }
  }
  else {
    oorx3 = document.getElementById("oorx3").checked;
    oorx4 = document.getElementById("oorx4").checked;
    oorx5 = document.getElementById("oorx5").checked;
    oorx6 = document.getElementById("oorx6").checked;
    if(oorx3 == true && (oorx5 == true || oorx6 == true)) {
      player1shape = "O";
      player2shape = "X";
      if(oorx5 == true) {
        player1shape = "X";
        player2shape = "O";
        document.getElementById("starting").style.display = "none";
        document.getElementById("hide").style.display = "block";
        setInterval(function() {
        checkwin();
      }, 1000);
      }
      else if(oorx6 == true) {
        player1shape = "O";
        player2shape = "X";
        document.getElementById("starting").style.display = "none";
        document.getElementById("hide").style.display = "block";
        setInterval(function() {
        checkwin();
      }, 1000);
      }
    }
    else if(oorx4 == true && (oorx5 == true || oorx6 == true)) {
       player1shape = "X";
      player2shape = "O";
      if(oorx5 == true) {
        player1shape = "X";
        player2shape = "O";
        document.getElementById("starting").style.display = "none";
        document.getElementById("hide").style.display = "block";
        setInterval(function() {
        checkwin();
      }, 1000);
      }
      else if(oorx6 == true) {
        player1shape = "O";
        player2shape = "X";
        document.getElementById("starting").style.display = "none";
        document.getElementById("hide").style.display = "block";
        setInterval(function() {
        checkwin();
      }, 1000);
      }
    }
    else {
      alert("Please Make Your Choice To Continue!");
    }
  }
}

var whichone = "";
var counter = 0;
function clicked(whichone) {
  if(playerchoice1 == true) {
    if(player1turn == true) {
      //check if the place was clicked before
      if(document.getElementById(whichone).innerHTML == "X" || document.getElementById(whichone).innerHTML == "O"){
        alert("Invalid Move!");
      }
      else {
        document.getElementById(whichone).innerHTML = humanshape;
      player1turn = false;
      aiturn = true;
        counter++;
      }
    }
  }
  else {
    if(player1turn == true) {
      //check if the place was clicked before
      if(document.getElementById(whichone).innerHTML == "X" || document.getElementById(whichone).innerHTML == "O"){
        alert("Invalid Move!");
      }
      else {
      document.getElementById(whichone).innerHTML = player1shape;
      player1turn = false;
      player2turn = true;
        counter++;
      }
    }
    else {
      //check if the place was clicked before
      if(document.getElementById(whichone).innerHTML == "X" || document.getElementById(whichone).innerHTML == "O"){
        alert("Invalid Move!");
      }
      else {
      document.getElementById(whichone).innerHTML = player2shape;
      player2turn = false;
      player1turn = true;
        counter++;
      }
    }
  }
}

var allids = ["one1", "two1", "three1", "one2", "two2", "three2", "one3", "two3", "three3"];
function reset() {
  for(var i=0; i<allids.length; i++) {
    document.getElementById(allids[i]).innerHTML = "";
  }
  if(playerchoice1 == true) {
    player1turn = true;
    aiturn = false;
    counter = 0;
  }
  else {
    player1turn = true;
    player2turn = false;
    counter = 0;
  }
}

function aimove() {
  if(playerchoice1 == true) {
    if(aiturn) {
      //call the function to make ai move
      var n = Math.floor((Math.random() * 9) + 1);
      while(document.getElementById(allids[n]).innerHTML == "X" || document.getElementById(allids[n]).innerHTML == "O") {
        n = Math.floor((Math.random() * 9) + 1);
      }
      document.getElementById(allids[n]).innerHTML = aishape;
      player1turn = true;
      aiturn = false;
      counter++;
    }
  }
}

function checkwin() {
  var one = document.getElementById(allids[0]).innerHTML, two = document.getElementById(allids[1]).innerHTML, three = document.getElementById(allids[2]).innerHTML, four = document.getElementById(allids[3]).innerHTML, five = document.getElementById(allids[4]).innerHTML, six = document.getElementById(allids[5]).innerHTML, seven = document.getElementById(allids[6]).innerHTML, eight = document.getElementById(allids[7]).innerHTML, nine = document.getElementById(allids[8]).innerHTML;
  
  
  
  if(playerchoice1 == true) {
    if(one == humanshape && two == humanshape && three == humanshape) {
        alert("The winner is player! Restarting...");
        reset();
    }
    
    else if(one == aishape && two == aishape && three == aishape) {
        alert("You lost, ai won! Restarting...");
        reset();
    }
  
    else if(four == humanshape && five == humanshape && six == humanshape) {
        alert("The winner is player! Restarting...");
        reset();
    }
    
    else if(four == aishape && five == aishape && six == aishape) {
        alert("You lost, ai won! Restarting...");
        reset();
    }
  
    else if(seven == humanshape && eight == humanshape && nine == humanshape) {
        alert("The winner is player! Restarting...");
        reset();
    }
    
    else if(seven == aishape && eight == aishape && nine == aishape) {
        alert("You lost, ai won! Restarting...");
        reset();
    }
  
    else if(one == humanshape && four == humanshape && seven == humanshape) {
        alert("The winner is player! Restarting...");
        reset();
    }
    
    else if(one == aishape && four == aishape && seven == aishape) {
        alert("You lost, ai won! Restarting...");
        reset();
    }
    
    else if(two == humanshape && five == humanshape && eight == humanshape) {
        alert("The winner is player! Restarting...");
        reset();
    }
    
    else if(two == aishape && five == aishape && eight == aishape) {
        alert("You lost, ai won! Restarting...");
        reset();
    }
  
    else if(three == humanshape && six == humanshape && nine == humanshape) {
        alert("The winner is player! Restarting...");
        reset();
    }
    
    else if(three == aishape && six == aishape && nine == aishape) {
        alert("You lost, ai won! Restarting...");
        reset();
    }
  
    else if(one == humanshape && five == humanshape && nine == humanshape) {
        alert("The winner is player! Restarting...");
        reset();
    }
    
    else if(one == aishape && five == aishape && nine == aishape) {
        alert("You lost, ai won! Restarting...");
        reset();
    }
  
    else if(three == humanshape && five == humanshape && seven == humanshape) {
        alert("The winner is player! Restarting...");
        reset();
    }
    
    else if(three == aishape && five == aishape && seven == aishape) {
        alert("You lost, ai won! Restarting...");
        reset();
    }
    
    else if(counter == 9) {
      alert("The game is a tie! Restarting...");
      counter = 0;
      reset();
    }
  }
  else {
    if(one == player1shape && two == player1shape && three == player1shape) {
        alert("The winner is player 1! Restarting...");
        reset();
    }
    
    else if(one == player2shape && two == player2shape && three == player2shape) {
        alert("The winner is player 2! Restarting...");
        reset();
    }
  
    else if(four == player1shape && five == player1shape && six == player1shape) {
        alert("The winner is player 1! Restarting...");
        reset();
    }
    
    else if(four == player2shape && five == player2shape && six == player2shape) {
        alert("The winner is player 2! Restarting...");
        reset();
    }
  
    else if(seven == player1shape && eight == player1shape && nine == player1shape) {
        alert("The winner is player 1! Restarting...");
        reset();
    }
    
    else if(seven == player2shape && eight == player2shape && nine == player2shape) {
        alert("The winner is player 2! Restarting...");
        reset();
    }
  
    else if(one == player1shape && four == player1shape && seven == player1shape) {
        alert("The winner is player 1! Restarting...");
        reset();
    }
    
    else if(one == player2shape && four == player2shape && seven == player2shape) {
        alert("The winner is player 2! Restarting...");
        reset();
    }
    
    else if(two == player1shape && five == player1shape && eight == player1shape) {
        alert("The winner is player 1! Restarting...");
        reset();
    }
    
    else if(two == player2shape && five == player2shape && eight == player2shape) {
        alert("The winner is player 2! Restarting...");
        reset();
    }
  
    else if(three == player1shape && six == player1shape && nine == player1shape) {
        alert("The winner is player 1! Restarting...");
        reset();
    }
    
    else if(three == player2shape && six == player2shape && nine == player2shape) {
       alert("The winner is player 2! Restarting...");
        reset();
    }
  
    else if(one == player1shape && five == player1shape && nine == player1shape) {
        alert("The winner is player 1! Restarting...");
        reset();
    }
    
    else if(one == player2shape && five == player2shape && nine == player2shape) {
        alert("The winner is player 2! Restarting...");
        reset();
    }
  
    else if(three == player1shape && five == player1shape && seven == player1shape) {
         alert("The winner is player 1! Restarting...");
        reset();
    }
    
    else if(three == player2shape && five == player2shape && seven == player2shape) {
        alert("The winner is player 2! Restarting...");
        reset();
    }
    
    else if(counter == 9) {
      alert("The game is a tie! Restarting...");
      counter = 0;
      reset();
    }
  }
}