		(function( $ ) {
			var lL;
			$.fn.Pl = function(options) {
			var elem = this; //получаем объект
			
			elem.click(function(event){
			event.preventDefault();
			lL = this.href;
			$("body").fadeOut(1000, redirectPage);		
			});
		
			function redirectPage() {
				window.location = lL;
			}
		};		
		})(jQuery);
