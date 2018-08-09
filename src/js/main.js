import { domainToASCII } from "url";

console.log("hola");

let db = firebase.firestore(); // Variable que inicializa Firestore

let completeNameInput = document.getElementById('complete-name');
let emailInput = document.getElementById('email');
let companyInput = document.getElementById('company');
let asuntoInput = document.getElementById('asunto');
let sendBtn = document.getElementById('send-form-btn');


sendBtn.addEventListener('click', () => {
  if (companyInput.value === '' || emailInput.value === ' ' || companyInput.value === '') {
    alert('Es necesario llenar todos los campos');
  } else {
    let completeNameValue= document.getElementById('complete-name').value;
    let emailValue = document.getElementById('email').value;
    let companyValue = document.getElementById('company').value;
    let asuntoValue = document.getElementById('asunto').value;
    db.collection('visitors').add({
      visitor: completeNameValue,
      email: emailValue,
      company: companyValue,
      foto: '',
      asunto: asuntoValue,
      time: Date(asuntoValue)
    })
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };
});

//funcion 








//Funciones para la camara y foto.
var player = document.getElementById('player'); 
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');
var videoTracks;

var handleSuccess = function(stream) {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
};

captureButton.addEventListener('click', function() {
  var context = snapshot.getContext('2d');
  console.log(context);
  // Draw the video frame to the canvas.
  var foto = context.drawImage(player, 0, 0, snapshotCanvas.width, 
    snapshotCanvas.height);
  // Stop all video streams.
  videoTracks.forEach(function(track) {
    track.stop();
  });
});

navigator.mediaDevices.getUserMedia({video: true})
  .then(handleSuccess);
