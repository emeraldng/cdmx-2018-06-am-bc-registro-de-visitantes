let db = firebase.firestore(); // Variable que inicializa Firestore
let storage = firebase.storage();
let blobURL = '';

let sendBtn = document.getElementById('send-form-btn');

// captura de canvas
let player = document.getElementById('player');
let snapshotCanvas = document.getElementById('snapshot');
let captureButton = document.getElementById('capture');
let videoTracks;
let canvas = document.getElementById('snapshot');

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
    let datosCanvas = canvas.toDataURL('image/png');
    let imageUrl = document.getElementById('canvas-image').src = datosCanvas;
    (console.log(imageUrl));
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
// console.log(canvas);
// Converts canvas to an image
// function convertCanvasToImage(canvas) {
// var image = new Image();
// image.src = canvas.toDataURL('image/png');
// console.log(image);

// }