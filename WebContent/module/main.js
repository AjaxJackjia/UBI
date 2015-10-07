require.config({
	paths: {
		'jquery': '../lib/jquery/dist/jquery.min',
		'metro': '../lib/metro/build/js/metro.min'
	},

	shim : {
	    'metro' : {
	    	deps : [ 'jquery' ],
	    	exports : 'metro'
	    }
	}  
});

require(['common/util'], function(util) {
	util.loadcss('res/css/main.css');
	
	//main.js 根据navigator href来管理整个js模块的加载情况
	var params = util.resolveUrlParams();
	var module = params.hasOwnProperty('module') ? params.module : 'menu';
	console.log('current module: ' + module);
	
	require([module+'/index'], function(mod){
		mod.init(params);
	});
});
