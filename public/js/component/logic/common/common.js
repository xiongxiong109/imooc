define(function(require,exports,module){
	//公共部分js

	//全局搜索部分
	$(".search-btn").on('click',function(){
		var searchStr=$(".search-input").val();
		if( !searchStr ){
			window.location.reload();
		}
		else{
			window.location.href="/search?word="+searchStr;
		}
	});
});