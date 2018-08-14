var player = document.getElementById('player');
var snapshotCanvas = document.getElementById('snapshot');
var captureButton = document.getElementById('capture');

var handleSuccess = function (stream) {
    // Attach the video stream to the video element and autoplay.
    player.srcObject = stream;
};

captureButton.addEventListener('click', function () {
    var context = snapshot.getContext('2d');
    // Draw the video frame to the canvas.
    context.drawImage(player, 0, 0, snapshotCanvas.width,
        snapshotCanvas.height);
});

navigator.mediaDevices.getUserMedia({
        video: true
    })
    .then(handleSuccess);


//to create a URL    
var canvas = document.getElementById('snapshot');
var dataURL = canvas.toDataURL("image/jpeg");
console.log(dataURL);

var unicode = atob(dataURL);
console.log(unicode);
