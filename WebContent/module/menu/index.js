define(['jquery', 'metro', 'common/util', 'common/tile_util'], function($, metro, util, tileUtil) {
	//load css file
	util.loadcss('res/css/menu.css');
	
	var _appTitle = 'UBI 模拟系统';
	var _$menu = null;
	
	/*
	 * module initialization
	 * */
	var init = function() {
		if(_$menu === null) {
			_$menu = _createMenu();
			$('.container').append(_$menu);
		}
		
		_menuLoading();
	}
	
	/*
	 * menu loading preparation and animation
	 * */
	var _menuLoading = function() {
		if(_$menu !== null) {
			_$menu.show();
			
			//set tile area width
			_setTilesAreaSize();
            _addMouseWheel();
			
            //loading animation
			_tilesLoadingAnimation();
		}
	};
	
	var _tilesLoadingAnimation = function() {
		var tiles = $(".tile, .tile-small, .tile-sqaure, .tile-wide, .tile-large, .tile-big, .tile-super");

        $.each(tiles, function(){
            var tile = $(this);
            setTimeout(function(){
                tile.css({
                    opacity: 1,
                    "-webkit-transform": "scale(1)",
                    "transform": "scale(1)",
                    "-webkit-transition": ".5s",
                    "transition": ".5s"
                });
            }, Math.floor(Math.random()*500));
        });

        setTimeout(function(){
        	$(".tile-group").animate({
                left: 0
            }, {
            	speed: "fast"
            });
        }, 100);
	};
	
	var _setTilesAreaSize = function(){
        var groups = $(".tile-group");
        var tileAreaWidth = 80;
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        
        $.each(groups, function(i, t){
            if (width <= 640) {
                tileAreaWidth = width;
            } else {
                tileAreaWidth += $(t).outerWidth() + 80;
            }
        });
        $(".tile-area").css({
            width: tileAreaWidth
        });
    };
    
    var _addMouseWheel = function (){
    	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    	if(width <= 640) return;
    	
        $("body").mousewheel(function(event, delta, deltaX, deltaY){
            var page = $(document);
            var scroll_value = delta * 50;
            page.scrollLeft(page.scrollLeft() - scroll_value);
            return false;
        });
    };
	
	/*
	 * menu distroy animation
	 * */
	var _menuDistroy = function() {
		if(_$menu !== null) {
			_$menu.hide();
			_$menu.remove();
			_$menu == null;
		}
	};
	
	/*
	 * create menu with tiles
	 * */
	var _createMenu = function() {
		/*
		 * tile area settings
		 * */
		var $tileArea = $('<div class="menu tile-area">');
		$tileArea.addClass('fg-white'); 
		$tileArea.addClass('tile-area-scheme-dark');
		$tileArea.css("display", "none");

		/*
		 * tile area title
		 * */
		var $tileAreaTitle = $('<div class="tile-area-title">');
		$tileAreaTitle.html(_appTitle);
		$tileArea.append($tileAreaTitle);
		
		/*
		 * Introduction tile group
		 * */
		var $tileGroup_intro = $('<div class="tile-group double">');
		var $groupTitle_intro = $('<span class="tile-group-title">');
		$groupTitle_intro.html('基本介绍');
		var $tileGroupContainer_intro = $('<div class="tile-container">');
		
		$tileGroup_intro.append($groupTitle_intro);
		$tileGroup_intro.append($tileGroupContainer_intro);
		$tileArea.append($tileGroup_intro);
		
		/*
		 * tile container tiles
		 * */
		$tileGroupContainer_intro.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-yellow",
			fgColor: "fg-white", 
			effect: "slideRight",

			//tile content
			tileLabel: " ",
			tileContent: "image",
			imageStyle: "imageEffect",
			imageUrls: [ 
			             "res/images/menu/introduction_1.jpg",
			             "res/images/menu/introduction_2.jpg",
			             "res/images/menu/introduction_3.jpg",
			             "res/images/menu/introduction_4.jpg"
			           ]
		}));
		
		$tileGroupContainer_intro.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-indigo",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "商务创新与计算实验室",
			tileContent: "icon",
			iconName: "mif-chrome",
			
			//click
			clickFunc: function() {
				location.href="index.html?module=introduction&tab=2";
			}
		}));
		
		$tileGroupContainer_intro.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-yellow",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: " ",
			tileContent: "image",
			imageStyle: "image",
			imageUrl: "res/images/menu/prof_jlzhao.jpg",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=introduction&tab=3";
			}
		}));
		
		$tileGroupContainer_intro.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-green",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "UBI项目简介",
			tileContent: "image",
			imageStyle: "slideCover",
			imageUrl: "res/images/menu/ubi_cover.jpg",
			coverText: "UBI就是Usage Based Insurance，基于驾驶行为而定保费的保险，保费取决于驾驶时间、地点、驾驶方式等综合指标考量，为记录驾驶员的上述行为并关联理赔金额，参加UBI的车主都会在车上安装UBI车载智能盒子。", 
			coverColor: "op-lightOrange", 
			slideDirection: "slide-up",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=introduction&tab=1";
			}
		}));
		
		/*
		 * 动态展示 tile group
		 * */
		var $tileGroup_dynamic_show = $('<div class="tile-group double">');
		var $groupTitle_dynamic_show = $('<span class="tile-group-title">');
		$groupTitle_dynamic_show.html('动态展示');
		var $tileGroupContainer_dynamic_show = $('<div class="tile-container">');
		
		$tileGroup_dynamic_show.append($groupTitle_dynamic_show);
		$tileGroup_dynamic_show.append($tileGroupContainer_dynamic_show);
		$tileArea.append($tileGroup_dynamic_show);
		
		/*
		 * tile container tiles
		 * */
		$tileGroupContainer_dynamic_show.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-cyan",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "演讲",
			tileContent: "icon",
			iconName: "mif-display", 
				
			//click
			clickFunc: function() {
				location.href="index.html?module=dynamicshow&tab=1";
			}
		}));
		
		$tileGroupContainer_dynamic_show.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-lightRed",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "问答",
			tileContent: "icon",
			iconName: "mif-bubbles", 
				
			//click
			clickFunc: function() {
				location.href="index.html?module=dynamicshow&tab=2";
			}
		}));
		
		/*
		 * Simulation tile group
		 * */
		var $tileGroup_simu = $('<div class="tile-group double">');
		var $groupTitle_simu = $('<span class="tile-group-title">');
		$groupTitle_simu.html('Simulation');
		var $tileGroupContainer_simu = $('<div class="tile-container">');
		
		$tileGroup_simu.append($groupTitle_simu);
		$tileGroup_simu.append($tileGroupContainer_simu);
		$tileArea.append($tileGroup_simu);
		
		/*
		 * tile container tiles
		 * */
		$tileGroupContainer_simu.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-teal",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "里程保",
			tileContent: "icon",
			iconName: "mif-calculator2", 
				
			//click
			clickFunc: function() {
				location.href="index.html?module=simulation&tab=1";
			}
		}));
		
		$tileGroupContainer_simu.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-green",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: " ",
			tileContent: "image",
			imageStyle: "slideCover",
			imageUrl: "res/images/menu/youjiabao.jpg",
			coverText: "优驾保, 定制化你的保险优惠策略,为您的车保更加省钱!", 
			coverColor: "op-lightOrange", 
			slideDirection: "slide-left-2"
		}));
		
		$tileGroupContainer_simu.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-blue",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "优驾保",
			tileContent: "icon",
			iconName: "mif-chart-line", 
			
			//click
			clickFunc: function() {
				location.href="index.html?module=simulation&tab=2";
			}
		}));
		
		$tileGroupContainer_simu.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-green",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "返现保",
			tileContent: "icon",
			iconName: "mif-chart-dots", 
				
			//click
			clickFunc: function() {
				location.href="index.html?module=simulation&tab=3";
			}
		}));
		
		$tileGroupContainer_simu.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-green",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: " ",
			tileContent: "image",
			imageStyle: "slideCover",
			imageUrl: "res/images/menu/fanxianbao.jpg",
			coverText: "返现保, 开的越好,赚的越多!", 
			coverColor: "op-lightOrange", 
			slideDirection: "slide-right-2"
		}));
		
		/*
		 * 案例展示 tile group
		 * */
		var $tileGroup_caseshow = $('<div class="tile-group double">');
		var $groupTitle_caseshow = $('<span class="tile-group-title">');
		$groupTitle_caseshow.html('案例展示');
		var $tileGroupContainer_caseshow = $('<div class="tile-container">');
		
		$tileGroup_caseshow.append($groupTitle_caseshow);
		$tileGroup_caseshow.append($tileGroupContainer_caseshow);
		$tileArea.append($tileGroup_caseshow);
		
		/*
		 * tile container tiles
		 * */
		$tileGroupContainer_caseshow.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-red",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "案例 #1",
			tileContent: "icon",
			iconName: "mif-paper-plane",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=analysis&tab=1";
			}
		}));
		
		$tileGroupContainer_caseshow.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-darkBrown",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "案例 #2",
			tileContent: "icon",
			iconName: "mif-drive-eta",
			
			//click
			clickFunc: function() {
				location.href="index.html?module=analysis&tab=1";
			}
		}));
		
		$tileGroupContainer_caseshow.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-darkPink",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "案例 #3",
			tileContent: "icon",
			iconName: "mif-location",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=analysis&tab=1";
			}
		}));
		
		/*
		 * UBI使用说明 tile group
		 * */
		var $tileGroup_instruction= $('<div class="tile-group double">');
		var $groupTitle_instruction = $('<span class="tile-group-title">');
		$groupTitle_instruction.html('UBI使用说明');
		var $tileGroupContainer_instruction = $('<div class="tile-container">');
		
		$tileGroup_instruction.append($groupTitle_instruction);
		$tileGroup_instruction.append($tileGroupContainer_instruction);
		$tileArea.append($tileGroup_instruction);
		
		/*
		 * tile container tiles
		 * */
		$tileGroupContainer_instruction.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-teal",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "立即注册",
			tileContent: "icon",
			iconName: "mif-user",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=analysis&tab=1";
			}
		}));
		
		$tileGroupContainer_instruction.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-darkCobalt",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "使用方式",
			tileContent: "icon",
			iconName: "mif-question",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=analysis&tab=1";
			}
		}));
		
		return $tileArea;
	};
	
	return {
		init: init
	}
});
