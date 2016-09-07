'use strict';
var test_answers = localStorage.getItem('two');
var text_answer = localStorage.getItem('three');

$(document).ready(function() {
  var $textAddModal = $('#modal_form');
  $textAddModal.append( text_answer );
// open modal window
	$('#go-to').click( function(event){
		event.preventDefault();
		$('#overlay').fadeIn(400,
		 	function(){
        // start all input
      var $allInputs =  $('input[type=checkbox]');
      var testStr = "";
      for (var i = 0; i < $allInputs.length; i++){
        if ($allInputs[i].checked == true){
          testStr += "1";
        }else{testStr += "0";}
      }

      $('#modal_form').append( '<h3 id="res">' + 'Ваш ответ - ' + //add result
      (testStr == test_answers) + '</h3>');                   //test to window
				$('#modal_form')
					.css('display', 'block')
					.animate({opacity: 1, top: '20%'}, 200);
		});
	});
// close modal window
	$('#modal_close, #overlay').click( function(){
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){ // after animation
          $('input[type=checkbox]').attr('checked',false); //reset forms
          $('#res').remove();                              // reset result
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400);
				}
			);
	});

});
