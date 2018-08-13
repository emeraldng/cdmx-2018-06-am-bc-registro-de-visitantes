let db = firebase.firestore(); // Variable que inicializa Firestore
let storage = firebase.storage();
let blobURL = '';

let sendBtn = document.getElementById('send-form-btn');


sendBtn.addEventListener('click', () => {
  let completeNameValue = document.getElementById('fullname').value;
  let emailValue = document.getElementById('email').value;
  let companyValue = document.getElementById('company').value;
  let dateTime = firebase.firestore.FieldValue.serverTimestamp();
  // var myJSON = JSON.stringify(obj);

  // console.log(dateTime);

  if (companyValue === '' || emailValue === ' ' || completeNameValue === '') {
    alert('Es necesario llenar todos los campos');
  } else {
    db.collection('visitors').add({
      visitor: completeNameValue,
      email: emailValue,
      company: companyValue,
      foto: '',
      // asunto: asuntoValue,
      fecha: dateTime
    })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
        alert('¡Gracias! Bienvenido a TERMINAL 1');
        // window.location.assign('../index.html');
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };
});

