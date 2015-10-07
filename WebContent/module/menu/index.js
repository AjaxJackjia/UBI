define(['jquery', 'metro', 'common/util', 'common/tile_util'], function($, metro, util, tileUtil) {
	//load css file
	util.loadcss('res/css/menu.css');
	
	var _appTitle = 'UBI Simulation System';
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
		$groupTitle_intro.html('Introduction');
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
			             "res/images/menu/1.jpg",
			             "res/images/menu/2.jpg",
			             "res/images/menu/3.jpg",
			             "res/images/menu/4.jpg",
			             "res/images/menu/5.jpg"
			           ]
		}));
		
		$tileGroupContainer_intro.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-indigo",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "Timeline",
			tileContent: "icon",
			iconName: "mif-calendar",
			
			//click
			clickFunc: function() {
				location.href="index.html?module=introduction&tab=1";
			}
		}));
		
		$tileGroupContainer_intro.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-small", 
			bgColor: "bg-yellow",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "Tom",
			tileContent: "image",
			imageStyle: "image",
			imageUrl: "res/images/menu/5.jpg",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=introduction&tab=1";
			}
		}));
		
		$tileGroupContainer_intro.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-small", 
			bgColor: "bg-yellow",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "Lucy",
			tileContent: "image",
			imageStyle: "image",
			imageUrl: "res/images/menu/1.jpg",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=introduction&tab=1";
			}
		}));
		
		$tileGroupContainer_intro.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-small", 
			bgColor: "bg-yellow",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "Rose",
			tileContent: "image",
			imageStyle: "image",
			imageUrl: "res/images/menu/2.jpg",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=introduction&tab=1";
			}
		}));
		
		$tileGroupContainer_intro.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-small", 
			bgColor: "bg-yellow",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "Jack",
			tileContent: "image",
			imageStyle: "image",
			imageUrl: "res/images/menu/4.jpg",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=introduction&tab=1";
			}
		}));
		
		$tileGroupContainer_intro.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-green",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "Project Introduction",
			tileContent: "image",
			imageStyle: "slideCover",
			imageUrl: "res/images/menu/4.jpg",
			coverText: "这是项目简介", 
			coverColor: "op-lightOrange", 
			slideDirection: "slide-up",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=introduction&tab=1";
			}
		}));
		
		/*
		 * Insurance Charges tile group
		 * */
		var $tileGroup_charge = $('<div class="tile-group double">');
		var $groupTitle_charge = $('<span class="tile-group-title">');
		$groupTitle_charge.html('Insurance Charges');
		var $tileGroupContainer_charge = $('<div class="tile-container">');
		
		$tileGroup_charge.append($groupTitle_charge);
		$tileGroup_charge.append($tileGroupContainer_charge);
		$tileArea.append($tileGroup_charge);
		
		/*
		 * tile container tiles
		 * */
		$tileGroupContainer_charge.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-cyan",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "charge #1",
			tileContent: "icon",
			iconName: "mif-paypal", 
				
			//click
			clickFunc: function() {
				location.href="index.html?module=charges&tab=1";
			}
		}));
		
		$tileGroupContainer_charge.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-lightRed",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "charge #2",
			tileContent: "icon",
			iconName: "mif-chart-pie",
			
			//click
			clickFunc: function() {
				location.href="index.html?module=charges&tab=1";
			}
		}));
		
		$tileGroupContainer_charge.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-green",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "charge #3",
			tileContent: "image",
			imageStyle: "slideCover",
			imageUrl: "res/images/menu/2.jpg",
			coverText: "这是项目简介", 
			coverColor: "op-lightOrange", 
			slideDirection: "slide-right-2",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=charges&tab=1";
			}
		}));
		
		$tileGroupContainer_charge.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-green",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "charge #4",
			tileContent: "image",
			imageStyle: "slideCover",
			imageUrl: "res/images/menu/3.jpg",
			coverText: "这是项目简介", 
			coverColor: "op-lightOrange", 
			slideDirection: "slide-left-2",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=charges&tab=1";
			}
		}));
		
		$tileGroupContainer_charge.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-cobalt",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "charge #5",
			tileContent: "icon",
			iconName: "mif-chart-bars",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=charges&tab=1";
			}
		}));
		
		/*
		 * Compensation tile group
		 * */
		var $tileGroup_cps = $('<div class="tile-group double">');
		var $groupTitle_cps = $('<span class="tile-group-title">');
		$groupTitle_cps.html('Compensation');
		var $tileGroupContainer_cps = $('<div class="tile-container">');
		
		$tileGroup_cps.append($groupTitle_cps);
		$tileGroup_cps.append($tileGroupContainer_cps);
		$tileArea.append($tileGroup_cps);
		
		/*
		 * tile container tiles
		 * */
		$tileGroupContainer_cps.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-teal",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "Compensation #0",
			tileContent: "icon",
			iconName: "mif-calculator2", 
				
			//click
			clickFunc: function() {
				location.href="index.html?module=compensation&tab=1";
			}
		}));
		
		$tileGroupContainer_cps.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-green",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "compensation #1",
			tileContent: "image",
			imageStyle: "slideCover",
			imageUrl: "res/images/menu/2.jpg",
			coverText: "这是项目简介", 
			coverColor: "op-lightOrange", 
			slideDirection: "slide-left-2",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=compensation&tab=1";
			}
		}));
		
		$tileGroupContainer_cps.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-blue",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "compensation #2",
			tileContent: "icon",
			iconName: "mif-chart-line", 
			
			//click
			clickFunc: function() {
				location.href="index.html?module=compensation&tab=1";
			}
		}));
		
		$tileGroupContainer_cps.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-blue",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "compensation #3",
			tileContent: "icon",
			iconName: "mif-chart-dots", 
				
			//click
			clickFunc: function() {
				location.href="index.html?module=compensation&tab=1";
			}
		}));
		
		$tileGroupContainer_cps.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile", 
			bgColor: "bg-green",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "compensation #4",
			tileContent: "image",
			imageStyle: "slideCover",
			imageUrl: "res/images/menu/2.jpg",
			coverText: "这是项目简介", 
			coverColor: "op-lightOrange", 
			slideDirection: "slide-right-2",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=compensation&tab=1";
			}
		}));
		
		/*
		 * Data Analysis tile group
		 * */
		var $tileGroup_da = $('<div class="tile-group double">');
		var $groupTitle_da = $('<span class="tile-group-title">');
		$groupTitle_da.html('Data Analysis');
		var $tileGroupContainer_da = $('<div class="tile-container">');
		
		$tileGroup_da.append($groupTitle_da);
		$tileGroup_da.append($tileGroupContainer_da);
		$tileArea.append($tileGroup_da);
		
		/*
		 * tile container tiles
		 * */
		$tileGroupContainer_da.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-red",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "Analysis #1",
			tileContent: "icon",
			iconName: "mif-paper-plane",
				
			//click
			clickFunc: function() {
				location.href="index.html?module=analysis&tab=1";
			}
		}));
		
		$tileGroupContainer_da.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-darkBrown",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "Analysis #2",
			tileContent: "icon",
			iconName: "mif-spinner4 mif-ani-spin",
			
			//click
			clickFunc: function() {
				location.href="index.html?module=analysis&tab=1";
			}
		}));
		
		$tileGroupContainer_da.append(tileUtil.createTile({
			//tile classes
			tileSize: "tile-wide", 
			bgColor: "bg-darkPink",     
			fgColor: "fg-white", 

			//tile content
			tileLabel: "Analysis #3",
			tileContent: "icon",
			iconName: "mif-calculator",
				
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
