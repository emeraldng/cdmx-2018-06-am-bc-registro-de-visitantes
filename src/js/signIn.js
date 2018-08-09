let db = firebase.firestore(); // Variable que inicializa Firestore

let emailAdmin = document.getElementById('email-admin');
let passwordAdmin = document.getElementById('password-admin');
let logInBtnAdmin = document.getElementById('log-in-btn-admin');

const registroAdmin = () =>{
  if (emailAdmin.value === 'administrador@coworking.com' && passwordAdmin.value === 'registro123') {
    location.href = '../views/registros.html';
  } else {
    alert('El usuario y/o la contraseña son incorrectos');
  }
};

logInBtnAdmin.addEventListener('click', registroAdmin);