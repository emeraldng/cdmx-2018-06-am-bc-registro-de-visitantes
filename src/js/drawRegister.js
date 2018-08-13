let db = firebase.firestore(); // Variable que inicializa Firestore
let tableBody = document.getElementById('table-body');

// funcion para pintar los registros de los visitantes
db.collection('visitors').orderBy('fecha', 'desc').get().then(querySnapshot => {
  querySnapshot.forEach((doc) => {
    // console.log(doc.data().fecha);
    let visitorName = doc.data().visitor;
    // ${doc.data().date.slice(0,22)}
    let dateTime = doc.data().fecha;
    let companyName = doc.data().company;
    let visitedPerson = doc.data().employee;
    let email = doc.data().email;
    let photo = doc.data().foto;
    tableBody.innerHTML += `<tr>
                                  <td>      
                                 <img src="" id="canvas-image" alt="">
                                  </td>
                                  <td class="td-name">${visitorName}</td>
                                  <td translate="yes" >${dateTime}</td>
                                  <td>${visitedPerson}</td>
                                  <td class="td-company">${companyName}</td>
                                  <td class="td-email">${email}</td>
                                  <td>
                                  <form id="contact-form" method="POST" action="https://formspree.io/${email}">
                                  <div class="form-group center-block">
                                  <label for="inputName"></label>
                                  <input type="text" class="input-field col s12" id="inputName" placeholder="Host Name" name="name">${companyName}
                                  </div>
                    
                                  <div class="form-group center-block">
                                  <label for="inputMessage"></label>
                                  <textarea id="inputMessage" class="input-field col s12" rows="10" placeholder="Notifiación" name="message">Hola ${companyName}, tu invitadx ${visitorName} ha llegado a recepción. Recíbelo con una sonrisa.
                                  Att: Terminal1 </textarea>
                                  </div>
                   
                                  <div class="text-center">
                                  <button class="btn btn-default" type="submit" id="email-submit-btn" value="Send">
                                  Notificar
                                  </button>
                                  </div>
                                  <span></span>
                                  </form>
                                  </td>
                                  

                                  </tr>`;
  });
});

