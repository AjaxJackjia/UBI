define(['jquery', 'common/util'], function($, util) {

	var init = function() {
		var $subModule = $('.sub-module');
		
		var staff1 = staffIntro({
			img: 'res/images/introduction/prof_jlzhao.jpg',
			name: '赵建良',
			title: '香港城市大学资讯系统学系 讲座教授',
			bio: 'Dr. J. Leon Zhao is Chair Professor and Head of the Department of Information Systems at City University of Hong Kong. He was Interim Head and Eller Professor in MIS, University of Arizona and taught previously at HKUST and College of William and Mary, respectively. He holds Ph.D. and M.S. degrees from the Haas School of Business, UC Berkeley, M.S. degree from UC Davis, and B.S. degree from Beijing Institute of Agricultural Mechanization. His research is on information technology and management, with a particular focus on workflow technology and applications in knowledge distribution, e-learning, supply chain management, organizational performance management, and services computing. Leon\'s research has been supported by NSF, SAP, and other sponsors. Leon has been associate editor of ACM Transactions on MIS, Information Systems Research, IEEE Transactions on Services Computing, Decision Support Systems, Electronic Commerce Research and Applications, International Journal of Business Process Integration and Management, International Journal of Web and Grid Services, and International Journal of Web Services Research and is on the editorial board of Journal of Database Management. He has co-edited over ten special issues in various IS journals. Leon has been a chair or program chair for numerous conferences including the 2012 IEEE International Conference on Service Economics, the 2011 CIO Symposium, International Conference on Information Systems, the 2010 International Conference on Design Science Research in Information Systems and Technology, the 2009 IEEE International Conference on Services Computing, the 2008 IEEE Symposium on Advanced Management of Information for Globalized Enterprises (AMIGE\'08), the 2008 Arizona Exposium on Frontiers of Information Technology and Applications (FITA\'08), the 2007 China Summer Workshop on Information Management (CSWIM\'07), the 2006 IEEE Conference on Services Computing (SCC\'06), the 2005 Workshop on Information Technology and Systems (WITS\'05), and the 2003 Workshop on E-Business (WEB\'03) among others. He received an IBM Faculty Award in 2005 for his work in business process management and services computing. He received IBM Faculty Award in 2005 and National "Chang Jiang Scholars" Chair Professorship at Tsinghua University in 2009.'
		});
		
		var staff2 = staffIntro({
			img: 'res/images/introduction/default_user.png',
			name: '范少坤 PhD',
			title: '教师',
			bio: 'Nothing '
		});
		
		var staff3 = staffIntro({
			img: 'res/images/introduction/default_user.png',
			name: '康乐乐 PhD',
			title: '教师',
			bio: 'Nothing '
		});
		
		var staff4 = staffIntro({
			img: 'res/images/introduction/default_user.png',
			name: '吴记 PhD',
			title: '教师',
			bio: 'Nothing '
		});
		
		var staff5 = staffIntro({
			img: 'res/images/introduction/default_user.png',
			name: 'Heon (韩国)',
			title: '博士后',
			bio: 'Nothing '
		});
		
		$subModule.append('<h3>项目负责人:</h3><hr/>');
		$subModule.append(staff1);
		$subModule.append('<h3>教师:</h3><hr/>');
		$subModule.append(staff2);
		$subModule.append(staff3);
		$subModule.append(staff4);
		$subModule.append('<h3>博士后:</h3><hr/>');
		$subModule.append(staff5);
		$subModule.append('<h3>博士及硕士研究生:</h3><hr/>');
	};
	
	var staffIntro = function(data) {
		var tpl = 
			'<div class="staff-introduction">' + 
			'	<div class="photo">' +
			'		<div class="image-container bordered image-format-square">' + 
			'			<div class="frame">' + 
			'				<img src="' + data.img + '" />' + 
			'			</div>' + 
			'		</div>' + 
			'	</div>' + 
			'	<div class="title">' + 
			'		<h3 class="no-wrap"> ' + data.name + ' </h3>' + 
			'		<h5 class="no-wrap"> ' + data.title + ' </h5>' + 
			'	</div>' + 
			'</div>' + 
			'<div class="staff-bio text-normal padding20 bg-white no-phone">' + data.bio + '</div>';
		
		return tpl;
	};
	
	return {
		init: init
	}
});