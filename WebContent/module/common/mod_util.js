define(['jquery', 'common/util'], function($, util) {
	
	/*
	 * create module container template, 
	 * options format: 
	 * 
	 * {
	 * 		moduleName: 'analysis',
	 * 		moduleContentTitle: 'UBI - analysis',
	 * 		moduleColor: 'red',
	 * 		tabs: [ //sidebar tabs
	 * 			{
	 * 				icon: 'xxx',
	 * 				title: 'xxx',
	 * 				callback: function() {
	 * 					//TODO
	 * 				}
	 * 			},
	 *			{
	 * 				icon: 'xxx',
	 * 				title: 'xxx',
	 * 				callback: function() {
	 * 					//TODO
	 * 				}
	 * 			},
	 *			{
	 * 				icon: 'xxx',
	 * 				title: 'xxx',
	 * 				callback: function() {
	 * 					//TODO
	 * 				}
	 * 			}
	 * 		]
	 * }
	 * 
	 * */
	var createModuleContainer = function(p_options) {
		var _moduleName = null;
		var _moduleContentTitle = null;
		var _moduleColor = null;
		var _tabs = null;
		
		/*
		 * check parameters
		 * */
		if(util.attrIsValid(p_options, "moduleName")) {
			_moduleName = p_options.moduleName;
		}else{
			throw new Error("[create module container] invalid option - moduleName");
		}
		
		if(util.attrIsValid(p_options, "moduleContentTitle")) {
			_moduleContentTitle = p_options.moduleContentTitle;
		}else{
			throw new Error("[create module container] invalid option - moduleContentTitle");
		}
		
		if(util.attrIsValid(p_options, "moduleColor")) {
			_moduleColor = p_options.moduleColor;
		}else{
			throw new Error("[create module container] invalid option - moduleColor");
		}
		
		if(util.attrIsValid(p_options, "tabs")) {
			_tabs = p_options.tabs;
		}else{
			throw new Error("[create module container] invalid option - tabs");
		}
		
		/*
		 * module container
		 * */
		var $moduleContainer = $('<div class="'+ _moduleName +' flex-grid no-responsive-future">');
		var $row = $('<div class="row">');
		$moduleContainer.addClass('bg-' + _moduleColor); 
		$moduleContainer.addClass('fg-white');
		$moduleContainer.css("display", "none");
		$moduleContainer.append($row);
		
		/*
		 * side bar
		 * */
		var $sidebarContainer = $('<div class="sidebar cell size-x100">');
		$sidebarContainer.addClass('bg-'+ _moduleColor);
		$sidebarContainer.addClass('fg-white');
		$row.append($sidebarContainer);
		
		var $sidebar = $('<ul>');
		$sidebarContainer.append($sidebar);
		
		for(var tabIndex = 0; tabIndex<_tabs.length; tabIndex++) {
			var _tabOption = _tabs[tabIndex];
			var _$tabEle = _createTabItem(
				_tabOption.icon, 
				_tabOption.title,
				_moduleColor,
				_tabOption.callback
			);
			$sidebar.append(_$tabEle);
		}
		
		/*
		 * tab content
		 * */
		var $contentContainer = $('<div class="content cell auto-size bg-white fg-'+ _moduleColor +'">');
		$row.append($contentContainer);
		
		/*
		 * back button
		 * */
		var $backBtn = $('<button class="back button cycle-button">');
		$backBtn.append($('<div class="mif-arrow-left fg-'+ _moduleColor +'">'));
		$backBtn.click(function() {
			location.href="index.html";
		});
		
		/*
		 * content title 
		 * */
		var $contentTitle = $('<div class="title">');
		$contentTitle.append($backBtn);
		$contentTitle.append($('<h1 class="title-content">'+ _moduleContentTitle +'</h1>'));
		$contentContainer.append($contentTitle);
		
		/*
		 * sub module content
		 * */
		var $subModuleContent = $('<div class="sub-module">');
		$contentContainer.append($subModuleContent);
		
		return $moduleContainer;
	};
	
	function _createTabItem(p_icon, p_title, p_color, p_click_callback) {
		var $tab = $('<li><div class="tab-div">');
		$tab.find('.tab-div').append($('<div class="'+ p_icon +' mif-2x icon">'));
		$tab.find('.tab-div').append($('<div class="title">'+ p_title +'</div>'));
		
		$tab.click(function() {
			//remove all active class
			$('.sidebar > ul li > .tab-div').removeClass('bg-white');
			$('.sidebar > ul li > .tab-div').removeClass('fg-' + p_color);
			
			$tab.find('.tab-div').addClass('bg-white');
			$tab.find('.tab-div').addClass('fg-' + p_color);
			
			if(typeof (p_click_callback) === 'function') {
				p_click_callback();
			}
		});
		
		return $tab;
	};
	
	/*
	 * select tab with certain index
	 * */
	var selectTab = function(p_tabIndex) {
		var $tabs = $('.sidebar > ul li > .tab-div');
		//start from 1
		if(1 <= p_tabIndex && p_tabIndex <= $tabs.length) {
			$($tabs[p_tabIndex-1]).click();
		}else{
			$($tabs[0]).click();
		}
	};
	
	return {
		createModuleContainer: createModuleContainer,
		selectTab: selectTab
	}
});