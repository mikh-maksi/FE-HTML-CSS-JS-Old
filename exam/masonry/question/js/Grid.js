(function() {

	/*Masonry FOR MQ*/
	window.addEventListener('resize', function() {
		masonryPosition();
	});	

	/*Grid*/
	var firstWidth = document.documentElement.offsetWidth;

	function masonryPosition() {
	
		var currentWidth = document.documentElement.offsetWidth;
		if (firstWidth > 1007 && currentWidth <= 1007) {
			masonryInit();
				console.log('1 - '+ +firstWidth +' '+ +currentWidth);
		} 

		if (firstWidth < 1007 && currentWidth >= 1007) {
				console.log('2 - '+ +currentWidth);
			masonryInit();
		}
		firstWidth = currentWidth;
	}

	function masonryInit() {
		var gridItems = document.querySelectorAll('.Activity .grid__item');
		console.log(gridItems);

		for (var i = 0; i < gridItems.length; i++) {
			gridItems[i].style.top = 0;
			gridItems[i].style.left = 0;
		}

		var grid = document.querySelector('.Activity .grid');
		var gridWidth = grid.clientWidth;
		var value = gridWidth / 3;


		try {
			var msnr = new Masonry(grid, {
				itemSelector: '.grid__item',
		  		columnWidth: value
			});	
		} catch(e) {
			console.log('Masonry is absent');
		}
	}

	masonryInit();	
})();