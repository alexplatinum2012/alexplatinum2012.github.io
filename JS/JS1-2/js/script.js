
function isInteger (a) {
  if (a % 1 == 0) return true;

  return false;
}

function pow(a, x) {
  if (isInteger(a)) {
    if (x == 2) return (a * a);

    for (var i = 1, y = a; i < x; i++) {
      y *= a;
    }
    return y;
  }

  return "Number isn't Integer";
}

function insAnyStrXTimes (x) {
  var arr = [];

  for (var i = 0; i < x; i++)
    arr.push(prompt('Insert any name!'));

  return arr;
}

function compareName (name, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (name == arr[i]) {
      alert (name + ", you're logged in sucsessfully");
      return;
    }
  }
  alert ("The name you are entered not found!");
}

var arr = insAnyStrXTimes(5);
var nameToCompare = prompt ('Type name to compare!');
compareName(nameToCompare, arr);
