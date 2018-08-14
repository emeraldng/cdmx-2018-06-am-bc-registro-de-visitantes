let db = firebase.firestore(); // Variable que inicializa Firestore
let tableBody = document.getElementById('table-body');

// funcion para pintar los registros de los visitantes
db.collection('visitors').orderBy('fecha', 'desc').get().then(querySnapshot => {
  querySnapshot.forEach((doc) => {
    let visitorName = doc.data().visitor;
    let dateTime = doc.data().fecha;
    let visitedPerson = doc.data().visitado;
    let companyName = doc.data().company;
    let email = doc.data().email;
    let photo = doc.data().foto;
    let correoEmpleado = doc.data().correoempleado;
    tableBody.innerHTML += `<tr>
                                  <td = "td-class">      
                                 <img src="" id="canvas-image" alt="">
                                  </td>
                                  <td class="td-class">${visitorName}</td>
                                  <td class="td-class" >${dateTime}</td>
                                  <td class ="td-class">${visitedPerson}</td>
                                  <td class="td-class">${companyName}</td>
                                  <td class="td-class">${email}</td>
                                  <td>
                                  <form id="contact-form" method="POST" action="https://formspree.io/${correoEmpleado}">
                              
                    
                                  <div class="form-group center-block">
                                  <label for="inputMessage"></label>
                                  <textarea id="inputMessage" class="input-field col s12" rows="10" placeholder="Notifiación" name="message">Estimado(a) ${visitedPerson}, tu invitado(a) ${visitorName} ha llegado a Terminal 1. Cualquier inconveniente comunícate a la ext. 120
                                  Atte: Terminal1 </textarea>
                                  </div>
                   
                                  <div class="text-center">
                                  <button class="btn btn-default" type="submit" id="email-submit-btn" value="Send">
                                  Notificar
                                  </button>
                                  </div>
                                  <span></span>
                                  </form>
                                  </td>
                                  <td>
                                  <button type="button" id="button">PDF Credencial
            </button>
                                  </td>
                                  </tr>`;
  });
});
