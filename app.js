// app.js
import { add, subtract, multiply, divide } from './math.js';

document.getElementById('addBtn').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').innerText = `Result: ${add(num1, num2)}`;
});

document.getElementById('subtractBtn').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').innerText = `Result: ${subtract(num1, num2)}`;
});

document.getElementById('multiplyBtn').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').innerText = `Result: ${multiply(num1, num2)}`;
});

document.getElementById('divideBtn').addEventListener('click', () => {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  document.getElementById('result').innerText = `Result: ${divide(num1, num2)}`;
});
