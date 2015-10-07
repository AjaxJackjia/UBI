define(['jquery', 
        'common/util', 
        'common/mod_util',
        'analysis/analysis_mod1',
        'analysis/analysis_mod2',
        'analysis/analysis_mod3'], function($, util, mod_util, mod1, mod2, mod3) {
	//load css file
	util.loadcss('res/css/analysis.css');
	
	var _params = {};
	var _$moduleContainer = null;
	
	var init = function(p_params) {
		_params = p_params;
		
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
		options.moduleName = 'analysis';
		options.moduleContentTitle = 'UBI - Data Analysis';
		options.moduleColor = 'darkCobalt';
		options.tabs = [];
		var tab1 = {
			icon: 'mif-cogs',
			title: 'cogs',
			callback: function() {
				console.log('This is tab1!');
				mod1.initSubModule();
			}
		};
		var tab2 = {
			icon: 'mif-cogs',
			title: 'cogs',
			callback: function() {
				console.log('This is tab2!');
				mod2.initSubModule();
			}
		};
		var tab3 = {
			icon: 'mif-cogs',
			title: 'cogs',
			callback: function() {
				console.log('This is tab3!');
				mod3.initSubModule();
			}
		};
		options.tabs.push(tab1);
		options.tabs.push(tab2);
		options.tabs.push(tab3);
		
		return mod_util.createModuleContainer(options);
	};
	
	return {
		init: init
	}
});