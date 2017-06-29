$(function(){

	$("header").hover(function(){
		$('header .two_nav').dropdown('toggle');
	});
		
	
	var hLength = $(".left_tab h2").length;
	for(var i=0;i<hLength;i++){
		if(i<=1){
			$(".left .left_tab h2:eq("+i+")").next().show();
			$(".left .left_tab h2:eq("+i+")").addClass("addbacktwo");
		}
		if(i>1){
			$(".left .left_tab h2:eq("+i+")").next().hide();
			$(".left .left_tab h2:eq("+i+")").addClass("addback");
		}
	}
	

		$(".left .left_tab h2").click(function(){
			if($(this).next().is(":hidden")){
				$(this).next().show("slow");
				$(this).removeClass("addback");
				$(this).addClass("addbacktwo");
			}else{
				$(this).next().hide("slow");
				$(this).removeClass("addbacktwo");
				$(this).addClass("addback");
			}
		});				
			
//		$(".buttons .visible-xs").click(function(){
//			$(".left").toggle();
//		});
		$(".buttons .visible-xs").click(function(){
			var lef = $(".left").position().left;
			if(lef >= 0){
				$(".left").animate({
					left:'-30rem'
				});
			}else{
				$(".left").animate({
					left:0
				});
			};
		});
		
//		console.log($("#div_0").offset().left);
		//拖动边框改变大小
		var offsetLeft,offsetTop,timer,mouse_x,mouse_y,margin_left,margin_top;
		var to_x,to_y;
		
		function drag(id,type){
			var item = document.getElementById(id);
			document.onmousemove = function(e){
				var e = e||window.event;
				//鼠标到页面边缘的x距离和y距离
				mouse_x = e.pageX;
				mouse_y = e.pageY;
			};
			item.onmousedown = function(){
				//当前元素到文档边缘的距离
				offsetLeft = item.offsetLeft;
				offsetTop = item.offsetTop;
				
				//鼠标当前位置到当前元素的位置
				margin_top = mouse_y - offsetTop;
				margin_left = mouse_x - offsetLeft
				
				timer = setInterval(function(){
					if(timer){
						var max_width = 800,max_height = 600;
						to_y = mouse_y - margin_top;
					}
				},5);
			}
		}
		//调用函数，沿y轴变动
		drag("div_0","y");
})



