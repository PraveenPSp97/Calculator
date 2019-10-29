var first = "";
var second = "";
let op = "";
let answer = "";

dis = document.getElementById("display");
sec = false;
let result1 = "";
let h = document.getElementById("history");
function history() {
  h.innerHTML = first + op + second;
}
function Operand(a) {
  if (sec == false) {
    first += a;

    console.log(first);
  } else {
    second += a;
    console.log(second);
  }
  history();
}

function operator(b) {
  if (first == "" && op == "" && second == "") {
    first = b;
    console.log(first);
  } else if (first != "" && op != "" && second == "") {
    second = b;
  } else if (first != "" && op == "") {
    op = b;
    sec = true;
  } else if (first != "" && second != "" && op != "") {
    result();
    console.log("ans called");
    ans();
    op = b;
  } else {
    dis.innerHTML = "ERROR";
  }
  history();
}
function result() {
  let x = op;
  let p = first;
  let q = second;

  if (x == "+") {
    result1 = Number(first) + Number(second);
  } else if (first == "" && second == "") {
    result1 = "errror";
  } else if (op == "-") {
    result1 = Number(first) - Number(second);
  } else if (op == "*") {
    result1 = Number(first) * Number(second);
  } else {
    result1 = Number(first) / Number(second);
  }
  answer = result1;

  if (result1 != "") {
    dis.innerHTML = result1;
  } else {
    result1 = "error";
    dis.innerHTML(result1);
  }

  clear1();
  h.innerHTML = p + x + q;
  // history();
}
function clear1() {
  first = "";
  second = "";
  sec = false;
  op = "";
  result1 = "";
  history();
  // dis.innerHTML = "   ";
}
function other(a) {
  if (first != "" && second == "") {
    op = a;
    sec = true;
    console.log(op);
  } else if (first != "" && second != "" && op != "") {
    result();
    console.log("ans called");
    ans();
    op = a;
  } else {
    dis.innerHTML = "ERROR";
  }
  history();
}
function del() {
  if (sec) {
    second = second.substring(0, second.length - 1);
  } else {
    first = first.substring(0, first.length - 1);
  }
  history();
}
function ans() {
  first = answer;
  history();
  sec = true;
}
