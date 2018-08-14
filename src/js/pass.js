$('#button').click(function() {
  var doc = new jsPDF();
            

  var name = $('#fullname').val();
  var company = $('#email').val();
  var department = $('#company').val();
  var title = $('#title').val();

  doc.setFontSize(26);
  doc.setTextColor(92, 76, 76);

  doc.text(23, 81, name);
  doc.text(23, 122, company);
  doc.text(23, 162, department);
  // doc.text(23, 202, title);
  doc.save('CredencialVisitante.pdf');
