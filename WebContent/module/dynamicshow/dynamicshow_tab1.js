define(['jquery', 'common/util'], function($, util) {

	var init = function() {
		var $subModule = $('.sub-module');
		
		var pdf_url = '<a class="ppt-src" href="res/file/test.ppt" target="_blank">演示PPT地址</a>';
		$subModule.append(pdf_url);
		
		var pdf = 
			'<object class="pdf-obj" classid="clsid:CA8A9780-280D-11CF-A24D-444553540000" width="100%" height="95%" border="0">' + 
			'	<param name="_Version" value="65539">' + 
			'	<param name="_ExtentX" value="20108">' + 
			'	<param name="_ExtentY" value="10866">' + 
			'	<param name="_StockProps" value="0">' + 
			'	<param name="SRC" value="res/file/test.pdf">' +
			'	<object data="res/file/test.pdf" type="application/pdf" width="100%" height="95%"></object>' + 
			'</object>';
		$subModule.append(pdf);
	};
	
	return {
		init: init
	}
});