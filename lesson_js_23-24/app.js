requirejs.config({
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min'
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		},
		'tmpl': {
			exports: 'tmpl'
		}
	}
});

require(
	['script', 'tmpl', 'jquery'],
	function(script, tmpl, jQuery){
		$(function(){
			var firstToDoList = ['HTML 5', 'CSS 3', 'JavaScript'];
			var model = new Model(firstToDoList);
			var view = new View(model);
			var controller = new Controller(model, view);
		});
	}
);