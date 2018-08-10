// const db = firebase.firestore();
// window.createUser = () => {
//   // Declaramos una var que guarde el value del TextArea
//   let postFromUser = document.getElementById('commentArea').value;


//   db.collection('publicaciones').add({
//     post: postFromUser,
//     date: Date(postFromUser),
//     user_like: 0,

//   })
//     .then(function(docRef) {
//       console.log('Document written with ID: ', docRef.id);
//       // Esto hace que la TextArea se reinicie una vez dado click en "SEND"
//       document.getElementById('commentArea').value = '';
//     })
//     .catch(function(error) {
//       console.error('Error adding document: ', error);
//     });
// };
//       // Esto hace que la TextArea se reinicie una vez dado click en "SEND"
//       // document.getElementById("postFromUser").value = "";
// // Pintando post del usuario
// db.collection('publicaciones').onSnapshot((querySnapshot) => {

//   cardDeComentario.innerHTML = '';
//   querySnapshot.forEach((doc) => {
//     cardDeComentario.innerHTML += `
//                                         <link rel="stylesheet" href="css/main.css">
//                                         <div class="card white darken-1">
//                                           <div class="card-content black-text col s10 m8 l9">
//                                           <div class="row">
//                                       <div class="col s8 m9 l9">
//                                             <span class="card-title generated">anonymous said:</span>
//                                             <p class="user-comment">${doc.data().post}</p>
//                                             <p class="comment-date right">${doc.data().date.slice(0, 21)}</p>
//                                             <div class="row center">
//                                             <a class="waves-effect waves-light btn-small color-change created" onclick="deletePost('${doc.id}')"><i class="far fa-trash-alt"></i></a>
//                                             <a class="waves-effect waves-light btn-small color-change created" onclick="edit('${doc.id}', '${doc.data().post}')"><i class="far fa-edit"></i></a>
//                                             <a class="waves-effect waves-light btn-small color-change created" onclick="feelU('${doc.id}')"><i class="fas fa-heart"></i><span class="like-num"> ${doc.data().user_like}</span></a>
//                                             </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     `;
//   });
// });
// // Borando post del usuario
// window.deletePost = (id) => {
//   db.collection('publicaciones').doc(id).delete().then(function() {
//     console.log('Document successfully deleted!');
//   }).catch(function(error) {
//     console.error('Error removing document: ', error);
//   });
// };
// // Editando Post de Usuario.
// window.edit = (id, postFromUser) => {
//   document.getElementById('commentArea').value = postFromUser;
//   let botonEditar = btnSendComment;
//   botonEditar.innerHTML = 'EDITAR';
//   botonEditar.onclick = function() {
//     let washingtonRef = db.collection('publicaciones').doc(id);
//     // Set the "capital" field of the city 'DC'
//     let postFromUser = document.getElementById('commentArea').value;
//     return washingtonRef.update({
//       post: postFromUser
//     })
//       .then(function() {
//         console.log('Document successfully updated!');
//       })
//       .catch(function(error) {
//         // The document probably doesn't exist.
//         console.error('Error updating document: ', error);
//       });
//   };
// };

// // Get Likes
// window.feelU = (id) => {
//   let countRef = db.collection('publicaciones').doc(id);
//   db.runTransaction((transaction) => {
//     return transaction.get(countRef)
//       .then((countDoc) => {
//         if (!countDoc.exists) {
//           throw 'Document doesnt exist';
//         }
//         let newCount = countDoc.data().user_like + 1;
//         if (newCount >= 0) {
//           transaction.update(countRef, {user_like: newCount});
//           return newCount;
//         } else {
//           return Promise.reject('Sorry');
//         }
//       });
//   })
//     .then((newCount) => {
//       console.log('like increased to', newCount);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };


// // Mobile Sidenav
// document.addEventListener('DOMContentLoaded', function() {
//   let elems = document.querySelectorAll('.sidenav');
//   let instances = M.Sidenav.init(elems);
// });
// let collapsibleElem = document.querySelector('.collapsible');
// let collapsibleInstance = M.Collapsible.init(collapsibleElem);

// // IMG Uploader
// let uploader = document.getElementById('uploader');
// let fileButton = document.getElementById('fileButton');

// fileButton.addEventListener('change', function(ev) {
//   // Get file
//   let file = ev.target.files[0];
//   // Storage ref
//   let storageRef = firebase.storage().ref('user/' + file.name);
//   // Upload file
//   let uploadTask = storageRef.put(file);
//   let storage = firebase.storage().ref();
//   // Update progress
//   uploadTask.on('state_changed',
//     progress = (snapshot) => {
//       let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       uploader.value = percentage;
//       console.log(uploader.value);
//       let snap = snapshot;
//       return snap;
//       // console.log(snapshot);
//     },
//     error = (err) => {},
//     success = () => {
//       const getImgUrl = function() {
//         storage.child('user/' + file.name).getDownloadURL().then(function(url) {
//           return url;
//         }).catch(function(error) {
//           // Handle any errors here
//         });
//       };
//       getImgUrl();
//     }
//   );
// });


// //////////////
// let config = {
//     apiKey: 'AIzaSyAdd49IO1IpLA7KU2VcZithm89dPb_YxlU',
//     authDomain: 'registrousuarios-1c6e3.firebaseapp.com',
//     databaseURL: 'https://registrousuarios-1c6e3.firebaseio.com',
//     projectId: 'registrousuarios-1c6e3',
//     storageBucket: 'registrousuarios-1c6e3.appspot.com',
//     messagingSenderId: '615254550849'
//   };
  
//   firebase.initializeApp(config);
//   let db = firebase.firestore();
//   let storage = firebase.storage();
//   let blobURL = '';
//       // WebCamera Functionality 
//       let handleSuccess = function(stream) {
//         // Attach the video stream to the video element and autoplay.
//         player.srcObject = stream;
//         videoTracks = stream.getVideoTracks();
      
//       captureButton.addEventListener('click', function() {
//         let context = snapshot.getContext('2d');
//         // Draw the video frame to the canvas.
//         context.drawImage(player, 0, 0, snapshotCanvas.width, 
//           snapshotCanvas.height);
//         videoTracks.forEach(function(track) {
//       track.stop();
//       });
  
//       // console.log(context.createImageData());
//       //   const finalBlob = snapshotCanvas.toBlob(function(blob) {
//       //     return blob;
//       //   });
//       //   console.log("Final blob:", finalBlob);
//       // });
  
//         snapshotCanvas.toBlob(function(blob) {
//           let newImg = document.createElement('img'),
//             url = URL.createObjectURL(blob);
//             blobURL += url;
//             console.log(url)
//             let ref = firebase.storage().ref('fotos/');
//             ref.put(blob).then(function(snapshot) {
//               console.log('Uploaded a blob or file!');
//             });
//         });
//       });
//     } 
//       navigator.mediaDevices.getUserMedia({video: true})
//         .then(handleSuccess)
        
//   // Send Form
//   btnSend.addEventListener('click', (ev) => {
//     event.preventDefault(ev);
//     let userNameValue = userName.value;
//     let userLastNameValue = userLastName.value;
//     let userEmailValue = userEmail.value;
//     let userNumberValue = userNumber.value;
  
//     if (form.checkValidity() === true) {
//       let dbRef = db.collection('user').add({
//         name: userNameValue,
//         last_name: userLastNameValue,
//         email: userEmailValue,
//         number: userNumberValue,
//         blob: blobURL
//       }).then(function(docRef) {
//         console.log('Document written with ID: ', docRef.id);
//       })
//         .catch(function(error) {
//           console.error('Error adding document: ', error);
//         });
//     } else {
//       form.reportValidity();
//     }
//   });
  
//   console.log(blobURL);
  
//   // Get Data from Database
//   db.collection("user").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         //console.log(doc.id, " => ", doc.data());
//         console.log(doc.data().blob);
//          newImg = document.createElement('img');
//         newImg.src = doc.data().blob;
//       document.body.appendChild(newImg);
//     });
//   });