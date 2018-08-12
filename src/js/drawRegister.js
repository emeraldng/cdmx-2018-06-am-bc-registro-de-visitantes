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
    // let photo = doc.data().foto;
    tableBody.innerHTML += `<tr>
                                  <td>
                                  <img id="img2" src="https://static1.squarespace.com/static/547384c2e4b080be34ce3327/t/5971455b29687f358e530dca/1500600429512/b1a1f8d84eaf97f14027d988ed7a4f60--katya-zamolodchikova-tgirls+b.jpg?format=1500w">
                                  </td>
                                  <td class="td-name">${visitorName}</td>
                                  <td translate="yes" >${dateTime}</td>
                                  <td class="td-company">${companyName}</td>
                                  <td class="td-email">${email}</td>
                                  </tr>`;
  });
});
