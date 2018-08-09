let db = firebase.firestore(); // Variable que inicializa Firestore

let completeNameInput = document.getElementById('complete-name');
let emailInput = document.getElementById('email');
let companyInput = document.getElementById('company');
let sendBtn = document.getElementById('send-form-btn');

sendBtn.addEventListener('click', () => {
  if (companyInput.value === '' || emailInput.value === ' ' || companyInput.value === '') {
    alert('Es necesario llenar todos los campos');
  } else {
    db.collection('visitors').add({
      visitor: completeNameInput.value,
      email: emailInput.value,
      company: companyInput.value
    })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      });
  };
});