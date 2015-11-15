define(['jquery', 'common/util'], function($, util) {

	var init = function() {
		var $subModule = $('.sub-module');
		
		$subModule.append('<h3>Model 2. Progressive (优驾保)</h3>');
		
		$subModule.append('<p></p>');
	};
	
	return {
		init: init
	}
});