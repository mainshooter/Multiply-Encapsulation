function multiplyModule() {

  function startMultiply() {
    var firstNumber = select("input[name='firstNumber']").value;
    var secondNumber = select("input[name='secondNumber']").value;

    if (firstNumber !== '' && secondNumber !== '') {
      multiply();
    }

    function multiply() {
      firstNumber = parseFloat(firstNumber);
      secondNumber = parseFloat(secondNumber);

      var uitkomst = firstNumber * secondNumber;

      placeResult(uitkomst);
    }

    function placeResult(result) {
      select("#result").innerHTML = "De uitkomst is: " + result;
    }

  }

  select("#multiply").addEventListener('click', function(){ startMultiply(); });
}

function select(element) {
  return(document.querySelector(element));
}
function selectAll(elements) {
  return(document.querySelectorAll(elements));
}
