// //4 main parts to 
// 1creating template(s)
// 2reference and compile
// 3pass the object yto compile handle bars
// 4add the new compiled elements(s) to the dom

// reference
var source = $('#blog-posts').html();

//compile the source market 
var template = Handlebars.compile(source);

// pass the object to 
var blogData = {
	title: 'what did i eat for lunch',
	post: 'I ate pizza'};


var fullTemplate = template(blogData);

$('body').append(fullTemplate);


