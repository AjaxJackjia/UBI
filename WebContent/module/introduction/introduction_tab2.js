define(['jquery', 'common/util'], function($, util) {

	var init = function() {
		var $subModule = $('.sub-module');
		
		$subModule.append('<h3>香港城市大学深圳研究院 - 商务创新与计算实验室</h3>');
		$subModule.append('<h3>Lab on Enterprise Process Innovation and Computing</h3>');
		$subModule.append('<h4>实验室主任: 香港城市大学资讯系统学系 赵建良 讲座教授</h4>');
		$subModule.append('<hr/>');
		
		$subModule.append('<p>商务创新与计算实验室（简称EPIC实验室: <a href="www.epiclab.org">www.epiclab.org</a>）致力于商业流程相关课题的研究，包括：商业流程建模、商业流程设计、工作流自动化、组织知识传播、高效率企业沟通等。这些研究课题存在于各种各样的商业背景中，比如开放/社区源代码开发、遗留系统的重构、金融智能、面向服务的计算等等。</p>');
		$subModule.append('<p>EPIC实验室的负责人赵建良教授是香港城市大学信息系统学系的系主任和首席教授。他在加州大学伯克利分校哈斯商学院获得硕士和博士学位，长期致力于美国、香港和中国大陆的信息技术和电子商务领域的研究，特别关注于工作流技术及其在知识传播中的应用、在线学习、供应链管理、组织绩效管理、服务计算等。赵建良教授曾主持了多次的国际会议。2005年，因为他在商业流程管理和服务计算领域的杰出工作，他被授予“IBM学院奖”。2009年，他受聘为教育部颁发的清华大学“长江学者”讲座教授。</p>');
		$subModule.append('<p>EPIC实验室的研究项目分别获得了香港政府，美国国家科学基金会，SAP和一些著名公司的资助。</p>');
		
		
		var img_tpl = 
			'<div class="image-container bordered image-format-square" style="width: 500px;">' + 
			'	<div class="frame">' + 
			'		<img src="res/images/introduction/epic_lab.jpg" />' + 
			'	</div>' + 
			'</div>';
		$subModule.append(img_tpl);
	};
	
	return {
		init: init
	}
});