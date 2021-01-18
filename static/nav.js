$(function(){
	nav();
});

/**
 * 监听浏览器变化，刷新页面
 **/
window.onresize = function() {
    location.reload();
}

/**
 * 使用方法，在html中加入下面的标签，
 * <!-- 导航 -->
 * <nav class="nav_load"></nav>
 **/
function nav () {
	$(".nav_load").append(
		"<!-- 打开导航按钮 -->" + 
		"<div class='nav_show'>" + 
			"<button type='button' class='btn btn-md btn-default' onclick='nav_show()'><span class='glyphicon glyphicon-th-large'></span></button>" + 
		"</div>" + 
		
		"<!-- 导航栏内容 -->" + 
		"<div class='nav_content'>" + 
			"<!-- 关闭按钮 -->" + 
			"<div class='nav_hide'>" + 
				"<p><i>倾城の陌</i><span class='glyphicon glyphicon-remove' onclick='nav_hide()'></span></p>" + 
			"</div>" + 
		
			"<!-- 头像 -->" + 
			"<div class='nav_photo'>" + 
				"<img src='https://suzengxin.github.io/images/photo.jpg' class='img-circle'>" + 
			"</div>" + 
			
			"<!-- 导航标签 -->" + 
			"<div class='panel-group' id='nav_title'>" + 
				"<!-- 首页 -->" + 
				"<div class='panel panel-default'>" + 
					"<div class='panel-heading'>" + 
						"<p class='panel-title'>" + 
							"<a data-parent='nav_title' href='/'><span class='glyphicon glyphicon-home'></span>首<span></span>页</a>" + 
						"</p>" + 
					"</div>" + 
				"</div>" + 
				
				"<!-- 博客 -->" + 
				"<div class='panel panel-default'>" + 
					"<div class='panel-heading'>" + 
						"<p class='panel-title'>" + 
							"<a data-parent='nav_blog' href='/html/blog'><span class='glyphicon glyphicon-list-alt'></span>博<span></span>客</a>" + 
						"</p>" + 
					"</div>" + 
				"</div>" +
				
				"<!-- 编辑 -->" + 
				"<div class='panel panel-default'>" + 
					"<div class='panel-heading'>" + 
						"<p class='panel-title'>" + 
							"<a data-parent='nav_editor' href='/html/editor'><span class='glyphicon glyphicon-pencil'></span>编<span></span>辑</a>" + 
						"</p>" + 
					"</div>" + 
				"</div>" +
				
				"<!-- WEB -->" + 
				"<div class='panel panel-default'>" + 
					"<div class='panel-heading'>" + 
						"<p class='panel-title'>" + 
							"<a data-toggle='collapse' data-parent='nav_title' href='#nav_title_web'>WEB精选内容</a>" + 
						"</p>" + 
					"</div>" + 
					"<div id='nav_title_web' class='panel-collapse collapse'>" + 
						"<div class='panel-body'>" + 
							"<ol>" + 
								"<li onclick='location=\"/html/web/rose\"'><span class='glyphicon glyphicon-heart'></span>玫<span></span>瑰</li>" + 
							"</ol>" + 
						"</div>" + 
					"</div>" + 
				"</div>" + 
			"</div>" + 
			"<!-- 导航标签END -->" + 
		"</div>" + 
		"<!-- 导航栏内容END -->"
	);
}

function nav_show() {
	$(".nav_show").fadeOut(0);
	$(".nav_content").fadeIn(1000);
};

function nav_hide() {
	$(".nav_content").animate({
		width: 'toggle'
	}, 300, function() {$(".nav_show").fadeIn(500);});
};