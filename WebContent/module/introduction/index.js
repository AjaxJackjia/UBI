define(['jquery', 
        'common/util', 
        'common/mod_util',
        'introduction/introduction_tab1',
        'introduction/introduction_tab2',
        'introduction/introduction_tab3'], function($, util, mod_util, IntroductionTab1, IntroductionTab2, IntroductionTab3) {
	//load css file
	util.loadcss('res/css/introduction.css');
	
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
			_$moduleContainer.show();
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
		options.moduleName = 'introduction';
		options.moduleContentTitle = 'UBI 模拟系统 - 基本介绍';
		options.moduleColor = 'darkBlue';
		options.tabs = [];
		var tab1 = {
			icon: '',
			title: '项目介绍',
			callback: function() {
				//清空内容
				$('.sub-module').html("");
				//填充此tab需要初始化的内容
				IntroductionTab1.init();
			}
		};
		var tab2 = {
			icon: '',
			title: '实验室',
			callback: function() {
				//清空内容
				$('.sub-module').html("");
				//填充此tab需要初始化的内容
				IntroductionTab2.init();
			}
		};
		var tab3 = {
			icon: '',
			title: '人员',
			callback: function() {
				//清空内容
				$('.sub-module').html("");
				//填充此tab需要初始化的内容
				IntroductionTab3.init();
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