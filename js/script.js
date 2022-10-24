'use strict';

const tipZero = document.querySelector('.tip-0');
const tipOne = document.querySelector('.tip-1');
const tipTwo = document.querySelector('.tip-2');
const tipThree = document.querySelector('.tip-3');
const tipFour = document.querySelector('.tip-4');

const tipPerEle = document.querySelector('.result-tip-per');
const totalPerEle = document.querySelector('.result-total-per');
const billTotalEle = document.querySelector('.result-total-bill');

let tipPercent, billInput, numPeople;

function init() {
  switchTip(0);
  tipPercent = 0;
  billInput = 0;
  numPeople = 1;

  document.getElementById('input-bill').value = '';
  document.getElementById('numberPeople').value = '';
  tipPerEle.textContent = `$0.00`;
  totalPerEle.textContent = `$0.00`;
  billTotalEle.textContent = `$0.00`;
  document.querySelector('.custom-tip').value = '';
  document.querySelector('.error-bill').textContent = '';
  document.querySelector('.error-people').textContent = '';
}
init();

// Function to style selected tip
function switchTip(tipNum) {
  tipZero.classList.remove('tip-active');
  tipOne.classList.remove('tip-active');
  tipTwo.classList.remove('tip-active');
  tipThree.classList.remove('tip-active');
  tipFour.classList.remove('tip-active');
  document.querySelector(`.tip-${tipNum}`).classList.add('tip-active');
}

tipZero.addEventListener('click', function () {
  switchTip(0);
});
tipOne.addEventListener('click', function () {
  switchTip(1);
});
tipTwo.addEventListener('click', function () {
  switchTip(2);
});
tipThree.addEventListener('click', function () {
  switchTip(3);
});
tipFour.addEventListener('click', function () {
  switchTip(4);
});

function submitform() {
  // Get values from user
  tipPercent = Number(
    document.querySelector('input[name="tip%"]:checked').value
  );
  billInput = Number(document.getElementById('input-bill').value);
  numPeople = Number(document.getElementById('numberPeople').value);

  console.log(tipPercent, billInput);
  inputValidation();
  return false;
}

function inputValidation() {
  let errors = 0;
  let billRegex = /^[1-9]\d*(\.\d+)?$/;
  let intRegex = /^[1-9][0-9]*$/;

  if (!billRegex.test(billInput)) {
    document.querySelector('.error-bill').textContent =
      'Please enter valid number';
    errors++;
  } else document.querySelector('.error-bill').textContent = '';
  if (!intRegex.test(numPeople)) {
    document.querySelector('.error-people').textContent = 'Cannot be zero';
    errors++;
  } else document.querySelector('.error-people').textContent = '';

  if (errors === 0) {
    getOutput();
  }
}

function getOutput() {
  const tipAmount = tipPercent * billInput;
  const tipPerPerson = tipAmount / numPeople;
  const totalPerPerson = (billInput + tipAmount) / numPeople;
  const totalBill = billInput + tipAmount;
  console.log(tipPerPerson);

  tipPerEle.textContent = `$${tipPerPerson.toFixed(2)}`;
  totalPerEle.textContent = `$${totalPerPerson.toFixed(2)}`;
  billTotalEle.textContent = `$${totalBill.toFixed(2)}`;
}
