// $(document).ready(function() {
//   // create object instance of my Firebase database
//   var myDBReference = new Firebase('https://supertest-4733c.firebaseio.com/');

//   var sourceTemplate = $('#list-template').html();
//   var template = Handlebars.compile(sourceTemplate);

//   // define submit event listener/handler
//   $('#message-form').submit(function(event) {
//     // prevents page refresh
//     event.preventDefault();

//     // grab user input
//     var message = $('#message').val();
//     var calculation = $('#calculation').val();



//     var messagesReference = myDBReference.child('messages');
//     messagesReference.push({
//       message: message
//     });
//   });

//   // Read functionality
//   myDBReference.child('messages').on('child_added', function(results) {
//     results.forEach(function(message) {

//       var data = {
//         message: message.val(),
//         id: results.key()
//       };

//       var templateHTML = template(data);

//       var $templateHTML = $(templateHTML);

//       $templateHTML.click(function() {
//         var messageId = $(this).data('id');
//         deleteMessage(messageId);
//       })
//       $('#messages-list').append($templateHTML);
//     });
//   });

//   // // Update Functionality
//   // function updateMessage(id, message) {
//   //   var messageReference = new Firebase('https://supertest-4733c.firebaseio.com/messages/' + id);

//   //   messageReference.update({
//   //     message: 'fu man shu'
//   //   });

//   // }

//   // Delete functionality
//   function deleteMessage(id, message) {
//     var messageReference = new Firebase('https://supertest-4733c.firebaseio.com//messages/' + id);

//     messageReference.remove();
//   }

// });
