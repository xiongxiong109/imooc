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
			oArr[i].isRun=false;
		}
		//检测滚动
		$(window).on('scroll',checkScroll);
		$(window).trigger('scroll');
		function checkScroll(){
			var scrollTop=$(window).height()+$(window).scrollTop();
			for(var i=0;i<oArr.length;i++){
				if(scrollTop>=$(oArr[i]).offset().top+$(oArr[i]).height()/8){
					if(!oArr[i].isRun){
						if(i==oArr.length){
							$(window).off('scroll',checkScroll);
						}
						oArr[i].isRun=true;
						runAnimate(oArr[i]);
					}
				}
			}
		}
		//执行动画
		function runAnimate(obj){
			switch(obj.index){
				case 0:
					var oImgs=$(obj).find('img');
					oImgs.css('position','relative');
					oImgs.each(function(idx,ele){
						$(ele).css({'top':10+8*idx,'opacity':0});
						$(ele).delay(idx*200).animate({'top':0,'opacity':1},500,'swing');
					});break;
				case 1:
					var $star=$(obj).find('.star');
					var $txt=$(obj).find('.text1');
					var $video=$(obj).find('.video');
					$star.css('opacity',0)
					.delay(500)
					.animate({'opacity':1});
					$txt
					.css({'top':150,'opacity':0})
					.delay(180)
					.animate({'opacity':1,'top':164});
					$video
					.css({'opacity':0,'top':0})
					.delay(100)
					.animate({'opacity':1,'top':-31},600);
					break;
				case 2:
					var cmp=$(obj).find('.computer');
					var txt=$(obj).find('.text2');
					cmp.css({'top':0}).animate({'opacity':1,'top':-26},400,'swing');
					txt.delay(80).animate({'opacity':1},600);
					break;
				case 3:
					var calendar=$(obj).find('.calendar');
					var rocket=$(obj).find('.rockets');
					var smoke=$(obj).find('.smoke');
					var txt=$(obj).find('.text3');
					txt.animate({'opacity':1},400);
					calendar.animate({'opacity':1},400);
					rocket.css('top',0).delay(100).animate({'opacity':1 ,'top':-46},300);
					smoke.delay(350).animate({'opacity':1},400);
					break;
				case 4:
					var txt=$(obj).find('.text4');
					var hand=$(obj).find('.hand');
					var icon=$(obj).find('.icon');
					txt.animate({'opacity':1});
					hand.css('top',0).delay(80).animate({'opacity':1,'top':-30},400,'swing');
					icon.delay(300).animate({'opacity':1},400,'swing');
					break;
				case 5:
					var btn=$(obj).find('.join-btn');
					btn.css({'position':'relative','top':50,'opacity':0})
					.delay(200)
					.animate({'top':0,'opacity':1},400,'swing');
			}
		}
	})();

	//慕课大家庭
	(function(){
		var oWrap=$(".mooc-family");
		var lgMask=$(".family-mask");
		var lgTxt=$(".family-text");
		var wTimer=null;
		//wrap
		oWrap.on('mouseenter',function(){
			wTimer=setTimeout(function(){
				lgMask.fadeOut(200);
				lgTxt.fadeOut(200);
			},200);
		})
		.on('mouseleave',function(){
			clearTimeout(wTimer);
			lgMask.fadeIn(200);
			lgTxt.fadeIn(200);
		});

		//li
		var oHoverLis=$(".family-teacher, .student-list li");
		oHoverLis.each(function(idx,ele){
			ele.timer=null;
			var msk=$(ele).find('.list-mask');
			var info=$(ele).find('.family-info');
			$(ele).on('mouseenter',function(){
				msk.fadeOut(200);
				ele.timer=setTimeout(function(){
					info.fadeIn();
				},800);
			})
			.on('mouseleave',function(){
				msk.fadeIn(200);
				info.fadeOut();
				clearTimeout(ele.timer);
			});

		});
	})();

	//安卓二维码
	(function(){
		$(".download-barcode").hover(function(){
			$(".slide-code").css({'bottom':116,'opacity':1});
			$(".slide-mobile").css({'bottom':-14,'opacity':0});
		},function(){
			$(".slide-code").css({'bottom':86,'opacity':0});
			$(".slide-mobile").css({'bottom':0,'opacity':1});
		});
	})();
});