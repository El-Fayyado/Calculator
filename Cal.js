function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function submitCalculation() {
  const expression = document.getElementById("display").value;

  try {
    const result = eval(expression);
    document.getElementById("display").value = result;

    // Fill hidden form fields
    // document.getElementById("expressionInput").value = expression;
    // document.getElementById("resultInput").value = result;

    // Submit the form to PHP
    // document.getElementById("calcForm").submit();
  } catch {
    document.getElementById("display").value = "Error";
  }
}function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
