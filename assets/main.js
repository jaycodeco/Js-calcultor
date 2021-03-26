//#region  variables

var screen = document.getElementById("screenText");
var num1,
  num2,
  turn = false,
  cpt = false,
  op = "";

//#endregion

//#region saving operands
function save_to_var() {
  if (turn == false) {
    num1 = screen.innerText * 1;
  } else {
    num2 = screen.innerText * 1;
  }

  console.log(turn);
  turn = !turn;
  console.log(turn);
}

//#endregion

//#region resetting data

function calc_clear() {
  num1 = 0;
  num2 = 0;
  turn = false;
  cpt = false;
  op = "";
}

//#endregion

//#region percentage action

function calc_Percentile() {
  var tmp = (screen.innerText * 1) / 100;
  screen.innerHTML = tmp;
}

//#endregion

//#region clearing screen

function wipe() {
  screen.innerHTML = "";
}

//#endregion

//#region signChange

function calc_sign_change() {
  if (screen.innerText[0] == "-") screen.innerHTML = screen.innerText * 1 * -1;
  else screen.innerHTML = "-" + screen.innerText;
}

//#endregion

//#region computing ans

function compute_ans() {
  var ans;
  save_to_var();
  if (op == "+") ans = num1 + num2;
  else if (op == "-") ans = num1 - num2;
  else if (op == "/") ans = num1 / num2;
  else if (op == "x") ans = num1 * num2;
  else ans = num1;

  calc_clear();
  screen.innerHTML = ans;
  cpt = true;
  num1 = ans;
}

//#endregion

//#region pressing numbers

function tap(x) {
  if (cpt == true) {
    wipe();
    cpt = false;
  }
  screen.innerHTML += x;
}

//#endregion

//#region set op

function set_op(x) {
  if (op != "") {
    compute_ans();
    turn = true;
  } else {
    save_to_var();
    wipe();
  }
  op = x;
}

//#endregion
