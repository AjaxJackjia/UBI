define(['jquery', 'common/util'], function($, util) {

	var init = function() {
		var $subModule = $('.sub-module');
		
		var title = '<h3>Q & A</h3>';
		$subModule.append(title);
		
		var contentContainer = 
			'<div id="chat_container">' +
			'	<div class="message self"> ' + 
			'		<div class="message-text">请问里程保最近有什么优惠政策?</div>' +
			'	</div>' + 
			'	<div class="message other"> ' + 
			'		<div class="message-text">亲爱的XXX,最近里程保没有什么优惠政策.</div>' +
			'	</div>' + 
			'</div>';
		$subModule.append(contentContainer);
		
		var sendContainer = 
			'<div id="send_container" class="input-control textarea" data-role="input" data-text-auto-resize="true" data-text-max-height="200">' +
			'    <textarea></textarea>' + 
			'</div>';
		$subModule.append(sendContainer);
		
		var sendBtn = '<button id="send_btn" class="button primary">发送</button>';
		$subModule.append(sendBtn);
	};
	
	return {
		init: init
	}
});