define(function(require,exports,module){
	require('common');

	// showSlides
	var showSlide={
		timer:null,//轮播图定时器
		iCur:0,//起始点
		doms:null,
		interval:4000,//自动播放延时
		isRunning:false,
		init:function(){
			var s=this;
			$dom=s.getDom();
			s.doms=$dom;
			var $li=s.doms.sliders.eq(0);
			clearInterval(s.timer);
			$li.fadeIn(1000,function(){
				$li.addClass('active');
				s.doms.btns.eq($li.index()).addClass('active');
				s.bindEvent();
				s.timer=setInterval(function(){
					s.doms.nxt.trigger('click');
				},s.interval);
			});
		},
		slideImg:function(){
			var s=this;
			s.doms.sliders.stop().fadeOut(800);
			s.doms.sliders.eq(s.iCur).fadeIn(800,function(){
				s.isRunning=false;
			});
			s.doms.btns.removeClass('active');
			s.doms.btns.eq(s.iCur).addClass('active');
		},
		bindEvent:function(){
			var s=this;
			//next btn
			s.doms.nxt.on('click',function(){
				if(!s.isRunning){
					s.isRunning=true;
					if(s.iCur>=s.doms.sliders.length-1){
						s.iCur=0;
					}
					else{
						s.iCur++;
					}
					s.slideImg();
				}
			});
			//prev btn
			s.doms.prev.on('click',function(){
				if(!s.isRunning){
					s.isRunning=true;
					if(s.iCur<=0){
						s.iCur=s.doms.sliders.length-1;
					}
					else{
						s.iCur--;
					}
					s.slideImg();
				}
			});
			//hover
			s.doms.wrap.hover(
				function(){
				clearInterval(s.timer);
			},function(){
				clearInterval(s.timer);
				s.timer=setInterval(function(){
					s.doms.nxt.trigger('click');
				},s.interval);
			});

			//button
			s.doms.btns.on('click',function(){
				if(!$(this).hasClass('active')){
					s.iCur=$(this).index();
					s.slideImg();
				}
			});
		},
		//获取元素
		getDom:function(){
			return {
				sliders:$(".slide-box li"),
				prev:$(".slide-control").find('.slide-prev'),
				nxt:$(".slide-control").find('.slide-next'),
				btns:$(".slide-btn").find('span'),
				wrap:$(".slider-wrap")
			}
		}
	}
	showSlide.init();

	//showScrolls,滚动动画
	(function(){
		var oArr=$(".index-box");
		for(var i=0;i<oArr.length;i++){
			oArr[i].index=i;
		}
		$(window).on('scroll',checkScroll);
		$(window).trigger('scroll');
		//检测滚动
		function checkScroll(){
			var scrollTop=$(window).height()+$(window).scrollTop();
			if(!oArr.length){
				$(window).off('scroll',checkScroll);
			}
			else{
				for(var i=0;i<oArr.length;i++){
					if(scrollTop>=$(oArr[i]).offset().top){
						runAnimate(oArr[i]);
						oArr.splice(i,1);
						break;
					}
				}
			}
		}
		//执行动画
		function runAnimate(obj){
			switch(obj.index){
				case 0:{
					var oImgs=$(obj).find('img');
					oImgs.css('position','relative');
					oImgs.each(function(idx,ele){
						$(ele).css({
							'top':10+8*idx,
							'opacity':0
						});
						$(ele).delay(idx*200).animate({
							'top':0,
							'opacity':1
						},500,'swing');
					});
					break;
				}
			}
		}
	})();
});