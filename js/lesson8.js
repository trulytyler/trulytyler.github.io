/*Create a Checklist: Independent Practice

You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Through jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to strikeout).
- Each new item added by the user needs to also have the "complete task" link at the end.
- Bonus: when user completes an item, remove that item from the current list and add it to a completed list below. Do not show this list unless the there are completed items.
- Bonus 2: add the ability to restore items from the completed list to the first list.

*/

/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- Change the value of the element with the name id to be whatever the user inputs when page first loads.
  get user value
  find element
  add user value to element
- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#fav-list" list.
- Clear the input box when the user clicks the button.
- Bonus: only add item if the input box is not blank (hint: check innerHTML property)

*/






//echanging name to userinputted name
window.onload = function() {
  var your_name = prompt("What is your name?"),
      button,
      thing_list;
      //line above confuses me
  console.log(your_name);
  document.getElementById('name').innerHTML = your_name;
//clearing the box - event.preventDefault();
  button = document.getElementById('new-thing-button');
  button.onclick = function(event){
  event.preventDefault();
  var userInput = document.getElementById('new-thing').value;
  console.log(userInput)
//warning for empty box - also saying if theres no input added after alert it will be empty
  if (userInput === ''){
    alert("you must enter a value into the list")
    
    } else {
    
    MyApp.add_to_list(userInput);
    document.getElementById('new-thing').value = '';
    }
  }
};
//the part where the adding occurs
MyApp = {};

MyApp.add_to_list = function(list) {
    // ul 
    var favlist = document.getElementById('fav-list');
    //create li element
    var entry = document.createElement('li');
    //assign argument value
    var text = document.createTextNode(list);
    entry.appendChild(text);
    favlist.appendChild(entry);

}

// notes:
// so we first started by getElementById 'name' and then taking our variable user input
// which was created to store the data from the prompt using innerHTML. 

// then this updated the name on the div

// then we created another code 




