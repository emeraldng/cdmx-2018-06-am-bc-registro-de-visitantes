let db = firebase.firestore(); // Variable que inicializa Firestore
let tableBody = document.getElementById('table-body');

// funcion para pintar los registros de los visitantes
db.collection('visitors').get().then(querySnapshot => {
  querySnapshot.forEach((doc) => {
    console.log(doc.data().fecha);
    
    let visitorName = doc.data().visitor;
    let dateTime = doc.data().fecha;
    let companyName = doc.data().company;
    let email = doc.data().email;
    let photo = doc.data().foto;
    tableBody.innerHTML += `<tr>
                                  <td>
                                 <img src="" id="canvas-image" alt="">
                                  </td>
                                  <td class="td-name">${visitorName}</td>
                                  <td translate="yes" >${dateTime}</td>
                                  <td class="td-company">${companyName}</td>
                                  <td class="td-email">${email}</td>
                                  </tr>`;
  });
});
