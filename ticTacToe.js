var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var box4 = document.querySelector('.box4');
var box5 = document.querySelector('.box5');
var box6 = document.querySelector('.box6');
var box7 = document.querySelector('.box7');
var box8 = document.querySelector('.box8');
var box9 = document.querySelector('.box9');

var XorOTurn = document.querySelector('.turn');
var confirmTurn = document.querySelector('.confirmTurn');
var turnOrWin = document.querySelector('.turnOrWin');
var restartTheGame = document.querySelector('.restart');
var errorOfSelection = document.querySelector('.errorSelection');
var count = 0;
var preClick;
var currentSelection;
var prevSelection;
var turnCount = 0;
var restart = false;
var cat = 0;
document.addEventListener('click', function(e) {
  if (restart == true) {
    return;
  }
  if (e.target.tagName.toLowerCase() === "th") {
    let tr = e.target.closest('tr');
    // kkeps a count, useful later on
    count += 1;
    // stores all the values of the target
    let thTable = e.target;
    XorOTurn = document.querySelector('.turn');
    // gets the current selection
    currentSelection = e.target;
    // calls a function for the turn and selected square
    turn(XorOTurn, e);
    // stores the value of the 'previous click'. stored after function is called
    preClick = thTable;
    // stores the class name of the previous selected square. stored after function is called
    prevSelection = thTable.classList[0];
  }
});

function turn(XorOTurn, e) {
  // add a variable with the turn and smth else
  if (e.target.innerText == "") {
    e.target.classList.add('selected');
    errorOfSelection.style.display = 'none';
    e.target.innerHTML = XorOTurn.innerText;
    confirmTurn.style.display = 'initial';
    if (count > 1) {
      preClick.classList.remove('selected');
      preClick.innerHTML = "";
    }
  } else if (e.target.innerText != "") {
    if (currentSelection.classList[0] == prevSelection) {
      if (count > 0) {
        count -= 1;
      }
      return;
    } else {
      errorOfSelection.style.display = 'initial';
      confirmTurn.style.display = 'none';
      if (count > 1) {
        preClick.innerHTML = "";
        preClick.classList.remove('selected');
      }
      e.target.classList.remove('selected');
      count = 0;
    }
  }
}

confirmTurn.addEventListener("click", function(){
  newTurn(XorOTurn, currentSelection);
});

async function newTurn(XorOTurn, currentSelection) {
  if (currentSelection.classList.contains('occupied') == false) {
    if (XorOTurn.innerText == 'X') {
      currentSelection.innerHTML = 'X';
      currentSelection.classList.add('occupied');
      currentSelection.classList.remove('selected');
      await win(XorOTurn);
      XorOTurn.innerHTML = 'O';
      count = 0;
      return XorOTurn;
    } else {
      currentSelection.innerHTML = 'O';
      currentSelection.classList.add('occupied');
      currentSelection.classList.remove('selected');
      await win(XorOTurn);
      XorOTurn.innerHTML = 'X';
      count = 0;
      return XorOTurn;
    }
  }
}


function win(XorOTurn) {
  cat +=1;
  if (box1.innerText == XorOTurn.innerText && box2.innerText == XorOTurn.innerText && box3.innerText == XorOTurn.innerText) {
    turnOrWin.innerHTML = XorOTurn.innerText + ' wins!';
    restartTheGame.style.display = 'initial';
    confirmTurn.style.display = 'none';
    restart = true;
  } else if (box4.innerText == XorOTurn.innerText && box5.innerText == XorOTurn.innerText && box6.innerText == XorOTurn.innerText) {
    turnOrWin.innerHTML = XorOTurn.innerText + ' wins!';
    restartTheGame.style.display = 'initial';
    confirmTurn.style.display = 'none';
    restart = true;
  } else if (box7.innerText == XorOTurn.innerText && box8.innerText == XorOTurn.innerText && box9.innerText == XorOTurn.innerText) {
    turnOrWin.innerHTML = XorOTurn.innerText + ' wins!';
    restartTheGame.style.display = 'initial';
    confirmTurn.style.display = 'none';
    restart = true;
  } else if (box1.innerText == XorOTurn.innerText && box4.innerText == XorOTurn.innerText && box7.innerText == XorOTurn.innerText) {
    turnOrWin.innerHTML = XorOTurn.innerText + ' wins!';
    restartTheGame.style.display = 'initial';
    confirmTurn.style.display = 'none';
    restart = true;
  } else if (box2.innerText == XorOTurn.innerText && box5.innerText == XorOTurn.innerText && box8.innerText == XorOTurn.innerText) {
    turnOrWin.innerHTML = XorOTurn.innerText + ' wins!';
    restartTheGame.style.display = 'initial';
    confirmTurn.style.display = 'none';
    restart = true;
  } else if (box3.innerText == XorOTurn.innerText && box6.innerText == XorOTurn.innerText && box9.innerText == XorOTurn.innerText) {
    turnOrWin.innerHTML = XorOTurn.innerText + ' wins!';
    restartTheGame.style.display = 'initial';
    confirmTurn.style.display = 'none';
    restart = true;
  } else if (box1.innerText == XorOTurn.innerText && box5.innerText == XorOTurn.innerText && box9.innerText == XorOTurn.innerText) {
    turnOrWin.innerHTML = XorOTurn.innerText + ' wins!';
    restartTheGame.style.display = 'initial';
    confirmTurn.style.display = 'none';
    restart = true;
  } else if (box3.innerText == XorOTurn.innerText && box5.innerText == XorOTurn.innerText && box7.innerText == XorOTurn.innerText) {
    turnOrWin.innerHTML = XorOTurn.innerText + ' wins!';
    restartTheGame.style.display = 'initial';
    confirmTurn.style.display = 'none';
    restart = true;
  } else if (cat == 9) {
    turnOrWin.innerHTML = "Cat";
    restartTheGame.style.display = 'initial';
    confirmTurn.style.display = 'none';
    restart = true;
  }
}
function restartGame() {
  var clearValues = document.querySelectorAll('th');
  for (j = 0; j < clearValues.length; j++) {
    clearValues[j].innerHTML = "";
    clearValues[j].classList.remove('occupied');
  }
  turnOrWin.innerHTML = "<span class=\"turn\">X</span>'s Turn";
  restartTheGame.style.display = 'none'
  cat = 0;
  restart = false;
}