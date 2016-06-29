$(document).ready(function() {
  // create object instance of my Firebase database
  var myDBReference = new Firebase('https://supertest-4733c.firebaseio.com/');

  var sourceTemplate = $('#list-template').html();
  var template = Handlebars.compile(sourceTemplate);

  // define submit event listener/handler
  $('#calculation-form').submit(function(event) {
    // prevents page refresh
    event.preventDefault();

    // grab user input
    var calculation = $('#calculation').val();



    var calculationReference = myDBReference.child('calculation');
    calculationReference.push({
      calculation: calculation
    });
  });

  // Read functionality
  myDBReference.child('calculation').on('child_added', function(results) {
    results.forEach(function(calculation) {

      var data = {
        calculation: calculation.val(),
        id: results.key()
      };

      var templateHTML = template(data);

      var $templateHTML = $(templateHTML);

      $templateHTML.click(function() {
        var calculationId = $(this).data('id');
        deleteCalculation(calculationId);
      })
      $('#calculation-list').append($templateHTML);
    });
  });

  // // Update Functionality
  // function updateMessage(id, message) {
  //   var messageReference = new Firebase('https://supertest-4733c.firebaseio.com/messages/' + id);

  //   messageReference.update({
  //     message: 'fu man shu'
  //   });

  // }

  // Delete functionality
  function deleteCalculation(id, calculation) {
    var calculationReference = new Firebase('https://supertest-4733c.firebaseio.com//messages/' + id);

    calculationReference.remove();
  }

});

