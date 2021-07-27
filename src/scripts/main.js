'use strict';

const sidebar = document.querySelector('.headline');
const toggler = document.querySelector('#nav-toggler');
const label = document.querySelector('.nav__toggler-label');

toggler.addEventListener('click', () => {
  sidebar.classList.toggle('headline--active');
  label.classList.toggle('nav__toggler--close');
});

const form = document.querySelector('.subscribe__form');
const inputs = document.querySelectorAll('.subscribe__form-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
