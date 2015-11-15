define(['jquery', 
        'common/util', 
        'common/mod_util',
        'dynamicshow/dynamicshow_tab1',
        'dynamicshow/dynamicshow_tab2'], function($, util, mod_util, DynamicshowTab1, DynamicshowTab2) {
	//load css file
	util.loadcss('res/css/dynamicshow.css');
	
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
		options.moduleName = 'dynamicshow';
		options.moduleContentTitle = 'UBI 模拟系统 - 动态展示';
		options.moduleColor = 'darkBlue';
		options.tabs = [];
		var tab1 = {
			icon: '',
			title: '演讲',
			callback: function() {
				//清空内容
				$('.sub-module').html("");
				//填充此tab需要初始化的内容
				DynamicshowTab1.init();
			}
		};
		var tab2 = {
			icon: '',
			title: '问答',
			callback: function() {
				//清空内容
				$('.sub-module').html("");
				//填充此tab需要初始化的内容
				DynamicshowTab2.init();
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