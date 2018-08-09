// declarando botones
let register = document.getElementById('button-registro');
let signInHerf = document.getElementById('sign-in-herf');

const beginRegister = () => {
  location.href = '../src/views/view1.html';
};
register.addEventListener('click', beginRegister);

const signInPage = () =>{
  // location.href = '../src/views/view2.html';
  console.log('holi');
};
signInHerf.addEventListener('click', signInPage);