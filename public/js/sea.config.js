seajs.config({
	// 别名配置
	alias: {
		'seajs-text' : '/sea-modules/seajs/seajs-text/1.0.3/seajs-text',
		'seajs-combo': '/sea-modules/seajs/seajs-combo/1.0.0/seajs-combo',
		// 'jquery'     : '/sea-modules/jquery/jquery/1.9.1/jquery',
		'store'      : '/sea-modules/gallery/store/1.3.14/store',
		'underscore' : '/sea-modules/gallery/underscore/1.3.14/underscore',
		'moment'     : '/sea-modules/gallery/moment/2.3.1/moment',

		'jquery'     : '/lib/jquery/1.9.1/jquery',
		'util'       : '/lib/util/0.1.0/util',
		'jwplayer'   : '/lib/jwplayer/1.0.0/jwplayer',
		'doT'        : '/lib/dot/1.0.0/doT',
		'socket.io'  : '/lib/socket.io/1.3.5/socket.io.min',
		'ace'        : '/lib/ace/1.0.0/ace',

		'drag'       : '/component/base/drag/drag',
		'tab'        : '/component/base/tab/tab',
		'scroll_load': '/component/base/scroll_load/scroll_load',

		'common'     : '/component/logic/common/common',
		'login'      : '/component/logic/login/login',
		'login_sns'  : '/component/logic/login/login-regist',
		'chat'       : '/component/logic/chat/im',
		'player'     : '/component/logic/player/player',
		'ceditor'    : '/component/logic/ceditor/ceditor', //主提交编辑器
		'publish'    : '/component/logic/publish/publish',

		'show_data'  : '/page/course/common/show_data',
		'codeEditor' : '/page/course/common/code_editor',  //基本查看代码
	    'Module-layer' : '/lib/layer/1.6.0/layer.min.js',
        'placeholder': '/component/base/placeholder/placeholder.js'
	},

	// 路径配置
	paths: {
		'lib': '/lib',
		'util': '/component/base/util'
	},

	// 变量配置
	vars: {
		'locale': 'zh-cn'
	},

	// 映射配置
	map: [
		['http://example.com/js/app/', 'http://localhost/js/app/']
	],

	// 预加载项

	preload: ['jquery'],
	//preload: ['jquery', 'seajs-text', 'seajs-combo'],

	// 调试模式
	debug: true,

	// Sea.js 的基础路径
	//base: 'http://example.com/path/to/base/',

	// 文件编码
	charset: 'utf-8'
});
