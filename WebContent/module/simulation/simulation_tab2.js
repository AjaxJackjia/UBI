define(['jquery', 'common/util'], function($, util) {

	var init = function() {
		var $subModule = $('.sub-module');
		
		$subModule.append('<h3>Model 2. Progressive (优驾保)</h3>');
		
		$subModule.append('<p></p>');
		
		var tab_tpl = 
			'<ul class="tabs">' + 
			'	<li id="tab1" class="tab1 tab">基本描述</li>' +
			'	<li id="tab2" class="tab2 tab">用户</li>' +
			'	<li id="tab3" class="tab3 tab">公司</li>' +
			'</ul>' +
			'<div class="tabs-content">' +
			'	<div class="tab1 content">1</div>' + 
			'	<div class="tab2 content">2</div>' + 
			'	<div class="tab3 content">3</div>' + 
			'</div>';
		
		$subModule.append(tab_tpl);
		
		//tab click event
		$('.sub-module > .tabs > .tab').on('click', function(event) {
			$('.sub-module > .tabs > .tab').removeClass('active');
			$(event.target).addClass('active');
			
			$('.sub-module > .tabs-content > .content').hide();
			var targetClassName = $(event.target).attr('id');
			$('.sub-module > .tabs-content').find('.' + targetClassName).show();
		});
		
		//init tab
		$($('.tab1')[0]).click();
	};
	
	var tab1Content = function() {
		
	};
	
	
//	error: RPC failed; result=55, HTTP code = 200
//	fatal: The remote end hung up unexpectedly
//	fatal: The remote end hung up unexpectedly

	
	return {
		init: init
	}
});