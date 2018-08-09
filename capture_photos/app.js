console.log("HOLA!");


(function(){
    var video = document.getElementById('video'),
    vendorUrl = window.URL || window.webkitURL;

    navigator.getMedia = (navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);
                        
   navigator.getMedia ({
       video: true,
       audio: false
   }, function(stream){
       video.src = window.URL.createObjectURL(stream);
       video.play();
   }, function (error){
       console.log("error!");
       
   });                     
}) ();