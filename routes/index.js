var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	//渲染广告数据
	var ads=[
		{
			url:"javascript:void(0);",
			imgSrc:"/img/cache/1.jpg",
		},
		{
			url:"javascript:void(0);",
			imgSrc:"/img/cache/2.jpg",
		},
		{
			url:"javascript:void(0);",
			imgSrc:"/img/cache/3.jpg",
		}
	];
	//渲染课程数据
	var classes=[
		{
			link:"javascript:void(0);",
			banner:"/img/cache/4.jpg",
			activeTitle:"CSS深入理解之vertical-align",
			update:"21小时",
			people:"571",
			hoverTitle:"跟着大牛学习vertical-align属性",
			hoverUpdate:"9-1",
			classTime:"1小时49分"
		},
		{
			link:"javascript:void(0);",
			banner:"/img/cache/5.jpg",
			activeTitle:"PyConChina 2015 中国大会 北京场",
			update:"1天",
			people:"3354",
			hoverTitle:"干货分享尽在PyConChina2015大会 ",
			hoverUpdate:"17-1",
			classTime:"5小时30分"
		},
		{
			link:"javascript:void(0);",
			banner:"/img/cache/6.jpg",
			activeTitle:"CSS深入理解之vertical-align",
			update:"21小时",
			people:"571",
			hoverTitle:"跟着大牛学习vertical-align属性",
			hoverUpdate:"17-1",
			classTime:"5小时30分"
		},
		{
			link:"javascript:void(0);",
			banner:"/img/cache/7.jpg",
			activeTitle:"CSS深入理解之vertical-align",
			update:"21小时",
			people:"571",
			hoverTitle:"跟着大牛学习vertical-align属性",
			hoverUpdate:"17-1",
			classTime:"5小时30分"
		},
		{
			link:"javascript:void(0);",
			banner:"/img/cache/8.jpg",
			activeTitle:"CSS深入理解之vertical-align",
			update:"21小时",
			people:"571",
			hoverTitle:"跟着大牛学习vertical-align属性",
			hoverUpdate:"17-1",
			classTime:"5小时30分"
		},
		{
			link:"javascript:void(0);",
			banner:"/img/cache/9.jpg",
			activeTitle:"CSS深入理解之vertical-align",
			update:"21小时",
			people:"571",
			hoverTitle:"跟着大牛学习vertical-align属性",
			hoverUpdate:"17-1",
			classTime:"5小时30分"
		},
		{
			link:"javascript:void(0);",
			banner:"/img/cache/10.jpg",
			activeTitle:"CSS深入理解之vertical-align",
			update:"21小时",
			people:"571",
			hoverTitle:"跟着大牛学习vertical-align属性",
			hoverUpdate:"17-1",
			classTime:"5小时30分"
		},
		{
			link:"javascript:void(0);",
			banner:"/img/cache/11.jpg",
			activeTitle:"CSS深入理解之vertical-align",
			update:"21小时",
			people:"571",
			hoverTitle:"跟着大牛学习vertical-align属性",
			hoverUpdate:"17-1",
			classTime:"5小时30分"
		}
	];
  res.render('index', {
  	title: '慕课网,仿站制作',
  	ads:ads,
  	cls:classes
  });
});

/*GET search page*/
router.get('/search',function(req,res){
	if(req.query.word){
		res.render('search',{
			title:"搜索|"+req.query.word,
			content:'搜索内容:'+req.query.word
		});
	}
});

module.exports = router;
