// declarando botones
let register = document.getElementById('button-registro');

const beginRegister = () => {
  location.href = '../src/views/view1.html';
};
register.addEventListener('click', beginRegister);