define(['jquery', 'common/util', 'common/mod_util'], function($, util, mod_util) {
	//load css file
	util.loadcss('res/css/compensation.css');
	
	var _params = {};
	var _$moduleContainer = null;
	
	var init = function(p_params) {
		params = p_params;
		
		if(_$moduleContainer === null) {
			_$moduleContainer = _createModuleContainer();
			$('.container').append(_$moduleContainer);
			
			/*
			 * select tab
			 * */
			var tabIndex = util.attrIsValid(_params, 'tab') ? _params.tab : 0;
			mod_util.selectTab(tabIndex);
		}
		
		_moduleLoading();
	};
	
	/*
	 * module loading animation
	 * */
	var _moduleLoading = function() {
		if(_$moduleContainer !== null) {
			_$moduleContainer.fadeIn();
		}
	};
	
	/*
	 * module distroy animation
	 * */
	var _moduleDistroy = function() {
		if(_$moduleContainer !== null) {
			_$moduleContainer.remove();
			_$moduleContainer == null;
		}
	};
	
	var _createModuleContainer = function() {
		/*
		 * module container options
		 * */
		var options = {};
		options.moduleName = 'compensation';
		options.moduleContentTitle = 'UBI - Compensation';
		options.moduleColor = 'blue';
		options.tabs = [];
		var tab1 = {
			icon: 'mif-apps',
			title: 'apps',
			callback: function() {
				console.log('This is tab1!');
			}
		};
		var tab2 = {
			icon: 'mif-apps',
			title: 'apps',
			callback: function() {
				console.log('This is tab2!');
			}
		};
		options.tabs.push(tab1);
		options.tabs.push(tab2);
		
		return mod_util.createModuleContainer(options);
	};
	
	return {
		init: init
	}
});