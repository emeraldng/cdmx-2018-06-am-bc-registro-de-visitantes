let db = firebase.firestore(); // Variable que inicializa Firestore
let storage = firebase.storage();
let blobURL = '';

let sendBtn = document.getElementById('send-form-btn');
let cardDelVisitante = document.getElementById('card-del-visitante');

// captura de canvas
let player = document.getElementById('player');
let snapshotCanvas = document.getElementById('snapshot');
let captureButton = document.getElementById('capture');
let videoTracks;

sendBtn.addEventListener('click', () => {
  let completeNameValue = document.getElementById('fullname').value;
  let emailValue = document.getElementById('email').value;
  let companyValue = document.getElementById('company').value;
  let dateTime = firebase.firestore.FieldValue.serverTimestamp();
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
        // window.location.assign('../views/registros.html');
      })
      .catch(function(error) {
        console.error('Error adding document: ', error);
      });
  };
  // pintarRegistrados();
});


//Funcion para generar PDF para credencial del visitante

// function genPDF () {
//     let doc = new jsPDF();
    
//     doc.txt(20,20, 'Aquí van los datos del VISITANTE!');
//     doc.addPage();
//     doc.save('Test.pdf')
// }

// funcion para pintar los registros de los visitantes

// db.collection('visitors').onSnapshot((querySnapshot) => {
//   // carddelvisitante.innerHTML = '';
//   querySnapshot.forEach((doc) => {
//     carddelvisitante.innerHTML += `<div class="row">
//                                         <div class="col s12 m7">
//                                           <div class="card">
//                                          <div class="card-image">
//                                          <img src="https://theme.express/minutes/images/quote/2.jpg">
//                                          <span class="card-title">${doc.data().visitor}</span>
//                                           </div>
//                                           <div class="card-content">
//                                           <p>${doc.data().fecha}</p>
//                                           <p>${doc.data().company}</p>
//                                           <p>${doc.data().asunto}</p>
//                                          </div>
//                                           <div class="card-action">
//                                           <a href="#">This is a link</a>
//                                           </div>
//                                           </div>
//                                           </div>
//                                           </div>`;
//   });
// });


const handleSuccess = function(stream) {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
};

captureButton.addEventListener('click', function() {
  let context = snapshot.getContext('2d');
  console.log(context);
  // Draw the video frame to the canvas.
  let foto = context.drawImage(player, 0, 0, snapshotCanvas.width,
    snapshotCanvas.height);
  // Stop all video streams.
  videoTracks.forEach(function(track) {
    track.stop();
  });
});

navigator.mediaDevices.getUserMedia({
  video: true
})
  .then(handleSuccess);

var canvas = document.getElementById('canvas');
//var dataURL = canvas.toDataURL();
//console.log(dataURL);
