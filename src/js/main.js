let db = firebase.firestore(); // Variable que inicializa Firestore
let sendBtn = document.getElementById('send-form-btn');
let select = document.getElementById('person-select');
let empleado;
let correo;
// captura de canvas
let player = document.getElementById('player');
let snapshotCanvas = document.getElementById('snapshot');
let captureButton = document.getElementById('capture');
let videoTracks;
let canvas = document.getElementById('snapshot');
let CanvasUrl;
const handleSuccess = function(stream) {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
};

captureButton.addEventListener('click', () => {
  let context = snapshot.getContext('2d');
  console.log(context);
  if (context) {
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, snapshotCanvas.width,
      snapshotCanvas.height);
    canvasUrl = canvas.toDataURL('image/png');
    (console.log(canvasUrl));
    // Stop all video streams.
    videoTracks.forEach(track => {
      track.stop();
    });
  }
});

navigator.mediaDevices.getUserMedia({
  video: true
})
  .then(handleSuccess);


sendBtn.addEventListener('click', () => {
  let completeNameValue = document.getElementById('fullname').value;
  let emailValue = document.getElementById('email').value;
  let companyValue = document.getElementById('company').value;
  let dateTime = firebase.firestore.FieldValue.serverTimestamp();

  // var myJSON = JSON.stringify(obj);

  // console.log(dateTime);
  if (emailValue === ' ' || completeNameValue === '' || companyValue === '') {
    alert('Es necesario llenar todos los campos');
  } else {
    db.collection('visitors').add({
      visitor: completeNameValue,
      email: emailValue,
      company: companyValue,
      visitado: empleado,
      correoempleado: correo,
      fecha: dateTime,
      foto: canvasUrl
    })
   
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
        alert('¡Gracias! Bienvenido a TERMINAL 1');
        window.location.assign('../index.html');
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };
});

select.addEventListener('change', () => {
  let selectPerson = select.options[select.selectedIndex].value;
  empleado = selectPerson;
  if (selectPerson === 'Diana Carrillo') {
    db.collection('Empresa').add({
      employee: selectPerson,
      email: 'dianacarrillo.psic@outlook.com'
    });
    correo = 'dianacarrillo.psic@outlook.com';
    // console.log(correo);
  } else if (selectPerson === 'Lex Hernández') {
    db.collection('Empresa').add({
      employee: selectPerson,
      email: 'coder.lexsh@gmail.com'
    });
    correo = 'coder.lexsh@gmail.com';
  } else if (selectPerson === 'Empleado') {
    db.collection('Empresa').add({
      employee: selectPerson,
      email: 'empresaterminal1@gmail.com'
    });
    correo = 'empresaterminal1@gmail.com';
  } else if (selectPerson === 'Diana Esmeralda') {
    db.collection('Empresa').add({
      employee: selectPerson,
      email: 'ifglitterthen@gmail.com'
    });
    correo = 'ifglitterthen@gmail.com';
  };
});

// console.log(canvas);
// Converts canvas to an image
// function convertCanvasToImage(canvas) {
// var image = new Image();
// image.src = canvas.toDataURL('image/png');
// console.log(image);
