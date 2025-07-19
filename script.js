function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}



<!DOCTYPE html>
<html>
<head>
  <title>Backspace Test</title>
</head>
<body>
  <input type="text" id="display" value="12345" readonly />
  <button onclick="backspace()">⌫</button>

  <script>
    function backspace() {
      const display = document.getElementById("display");
      display.value = display.value.slice(0, -1);
    }
  </script>
</body>
</html>
