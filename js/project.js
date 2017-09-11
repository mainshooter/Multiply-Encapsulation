/**
 * The multiplyModule
 */
function multiplyModule() {
  var output;

  /**
   * [Gets all the values and send it to the next function]
   */
  function startMultiply() {
    var firstNumber = select("input[name='firstNumber']").value;
    var secondNumber = select("input[name='secondNumber']").value;

    if (firstNumber !== '' && secondNumber !== '') {
      multiply();
    }

    /**
     * multiply the 2 numbers and runs the place result
     * @return {[type]} [description]
     */
    function multiply() {
      firstNumber = parseFloat(firstNumber);
      secondNumber = parseFloat(secondNumber);

      output = firstNumber * secondNumber;

      placeResult();
    }

    function placeResult() {
      select("#result").innerHTML = "De uitkomst is: " + output;
    }

  }

  select("#multiply").addEventListener('click', function(){ startMultiply(); });
}

/**
 * Selects one element
 * @param  {[stirng]} element [The selector for the element]
 * @return {[DOM]}         [The selected element]
 */
function select(element) {
  return(document.querySelector(element));
}
function selectAll(elements) {
  return(document.querySelectorAll(elements));
}
