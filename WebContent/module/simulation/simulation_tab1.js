define(['jquery', 'common/util'], function($, util) {

	var init = function() {
		var $subModule = $('.sub-module');
		
		$subModule.append('<h3>Model 1. Metromile (里程保)</h3>');
		
		$subModule.append('<p>Point：顾客将会在购买保险时按预定驾驶里程得到相应优惠</p>');
		
		$subModule.append('<p class="title-style">表1 Pricing of Metromile</p>');
		var table_tpl =
			'<table class="table striped hovered border bordered">' + 
			'<thead>' + 
		    '    <tr>' + 
		    '        <th>Killometers</th>' + 
		    '        <th>Discount</th>' + 
		    '        <th>Tradition</th>' + 
		    '        <th>Pricing of Metromile</th>' + 
		    '        <th>Saving</th>' + 
		    '    </tr>' + 
		    '</thead>' + 
		    '<tbody>';
		table_tpl += tableRow({
			col1: '1~4000',
			col2: '50%',
			col3: '2000',
			col4: '1000',
			col5: '1000'
		});
		table_tpl += tableRow({
			col1: '4001~8000',
			col2: '33%',
			col3: '2000',
			col4: '1340',
			col5: '660'
		});
		table_tpl += tableRow({
			col1: '8001~12000',
			col2: '28%',
			col3: '2000',
			col4: '1440',
			col5: '560'
		});
		table_tpl += tableRow({
			col1: '12001~16000',
			col2: '20%',
			col3: '2000',
			col4: '1600',
			col5: '400'
		});
		table_tpl += tableRow({
			col1: '16001~20000',
			col2: '50%',
			col3: '2000',
			col4: '1780',
			col5: '220'
		});
		table_tpl += tableRow({
			col1: '20001~24000',
			col2: '5%',
			col3: '2000',
			col4: '1900',
			col5: '100'
		});
		table_tpl += 
			'</tbody>' + 
			'</table>';
		
		$subModule.append(table_tpl);
		
		//$subModule.append('<p class="title-style">图1 Pring Model优惠趋势图</p>');
		$subModule.append(image("res/images/simulation/pricing_model.png"));
		$subModule.append('<p>分析：车辆是由各种零部件组成的一个组合体，其运行是一个复杂的、千变万化的过程，车辆的技术状况会在运行过程中不断发生变化，随着形势里程的增加，各零部件的磨损、腐蚀和老化程度也会越来越严重，从而导致各零部件配合出现偏差，车况也也越来越差，交通事故率也会同步上升。通过查找文献资料数据，建立交通事故损失额与里程数的均衡关系模型，得出里程数每增加1%，交通事故损失额将增加5.41%。具体关系如图2所示。</p>');
		
		$subModule.append('<p class="title-style">图2 行驶里程与事故率关系</p>');
		$subModule.append(image("res/images/simulation/mile_accident.png"));
		$subModule.append('<p>通过以上分析，车辆的形式里程与其风险状况具有很强的关联性，相同的车辆在保险年度内行驶里程越多，出事故的可能性也就越大。</p>');
	};
	
	var tableRow = function(data) {
		var tpl = 
			'<tr>' + 
            '    <td>' + data.col1 + '</td>' + 
            '    <td>' + data.col2 + '</td>' + 
            '    <td>' + data.col3 + '</td>' + 
            '    <td>' + data.col4 + '</td>' + 
            '    <td>' + data.col5 + '</td>' + 
            '</tr>';
		return tpl;
	};
	
	var image = function(src) {
		var img_tpl = 
			'<div class="image-container bordered image-format-square">' + 
			'	<div class="frame">' + 
			'		<img src="'+ src +'" />' + 
			'	</div>' + 
			'</div>';
		return img_tpl;
	}
	
	return {
		init: init
	}
});