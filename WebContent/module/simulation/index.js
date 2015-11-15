define(['jquery', 
        'common/util', 
        'common/mod_util',
        'simulation/simulation_tab1',
        'simulation/simulation_tab2',
        'simulation/simulation_tab3'], function($, util, mod_util, SimulationTab1, SimulationTab2, SimulationTab3) {
	//load css file
	util.loadcss('res/css/simulation.css');
	
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
		options.moduleName = 'simulation';
		options.moduleContentTitle = 'UBI 模拟系统 - Simulation';
		options.moduleColor = 'darkBlue';
		options.tabs = [];
		var tab1 = {
			icon: '',
			title: '里程保',
			callback: function() {
				//清空内容
				$('.sub-module').html("");
				//填充此tab需要初始化的内容
				SimulationTab1.init();
			}
		};
		var tab2 = {
			icon: '',
			title: '优驾保',
			callback: function() {
				//清空内容
				$('.sub-module').html("");
				//填充此tab需要初始化的内容
				SimulationTab2.init();
			}
		};
		var tab3 = {
				icon: '',
				title: '返现保',
				callback: function() {
					//清空内容
					$('.sub-module').html("");
					//填充此tab需要初始化的内容
					SimulationTab3.init();
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