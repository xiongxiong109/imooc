var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '慕课网,仿站制作' });
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
