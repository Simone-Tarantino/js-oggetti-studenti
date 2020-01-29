// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function() {

  var student = {
    'name' : 'Bart',
    'surname' : 'Simpson',
    'age' : 10
  };

  for (var info in student) {
    console.log(student[info]);
  }

  var studentsList = [
    {
      'name' : 'Milhouse',
      'surname' : 'Van Houten',
      'age' : 10
    },
    {
      'name' : 'Ralph',
      'surname' : 'Winchester',
      'age' : 9
    },
    {
      'name' : 'Secco',
      'surname' : 'Jones',
      'age' : 19
    }

  ];

  for (var i = 0; i < studentsList.length; i++) {
    console.log(studentsList[i].name + ' ' + studentsList[i].surname);
  }

});
