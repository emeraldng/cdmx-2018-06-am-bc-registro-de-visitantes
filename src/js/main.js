let db = firebase.firestore(); // Variable que inicializa Firestore
let storage = firebase.storage();
let blobURL = '';
let nameInput = document.getElementById('name');
let lastnameInput = document.getElementById('lastname');
let emailInput = document.getElementById('email');
let companyInput = document.getElementById('company');
let sendBtn = document.getElementById('send-form-btn');

// captura de canvas
let player = document.getElementById('player');
let snapshotCanvas = document.getElementById('snapshot');
let captureButton = document.getElementById('capture');
let videoTracks;

sendBtn.addEventListener('click', () => {
  if (companyInput.value === '' || emailInput.value === ' ' || companyInput.value === '') {
    alert('Es necesario llenar todos los campos');
  } else {
    db.collection('visitors').add({
      name: nameInput.value,
      lastname: lastnameInput.value,
      email: emailInput.value,
      company: companyInput.value,
      foto: '',
      // blob: bloburl
    })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
      });
  };
});

let handleSuccess = stream => {
  // Attach the video stream to the video element and autoplay.
  player.srcObject = stream;
  videoTracks = stream.getVideoTracks();
};

captureButton.addEventListener('click', () => {
  let context = snapshot.getContext('2d');
  console.log(context);
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, snapshotCanvas.width,
    snapshotCanvas.height);
  // Stop all video streams.
  videoTracks.forEach(function(track) {
    track.stop();
  });

  snapshotCanvas.toBlob(blob => {
    let newPicture = document.createElement('img'),
      url = URL.createObjectURL(blob);
    newPicture.src = url;
    console.log(newPicture.src);
    // let ref = firebase.storage().ref('fotos-de-visitantes/');
    // ref.put(blob).then(function(snapshot) {
    //   console.log('ya se subió');
    // });
  });
});

navigator.mediaDevices.getUserMedia({
  video: true
})
  .then(handleSuccess);