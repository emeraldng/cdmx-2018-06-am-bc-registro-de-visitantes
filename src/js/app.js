// declarando botones
let register = document.getElementById('button-registro');
let signInHerf = document.getElementById('sign-in-herf');

const beginRegister = () => {
  location.href = '../src/views/form.html';
};
register.addEventListener('click', beginRegister);
