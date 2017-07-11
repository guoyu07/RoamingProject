var express = require('express');

var app = express();

var port = 80;//端口号

var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended:true }) );

app.listen(port,function(){
	console.log("端口号为：" + port);
});

app.use(express.static('public'));


//PC端
//-------------路由区-------------
var contr = require('./route/control.js');


//-----------------pub.html-Start----------------
//页面首次加载的Ajax
app.get('/loadPub_ajax',contr.loadPub_ajax);



//-----------------pub.html-End----------------



//-----------------pubSearch.html-Start----------------
//地区查询
app.post('/dest_addr',contr.dest_addr);

//酒店查询
app.post('/pub_list',contr.pub_list);

//-----------------pubSearch.html-End----------------
//页面载入时的信息
app.get('/pub_info',contr.pub_info)


//----------------jl_pubDetails.html-Start----------------



//----------------jl_pubDetails.html-End----------------

//----------------卿鹏----------------

//注册——查询——qp
app.post("/postseachuser_PC",contr.postseachuser_PC);
//注册——添加新用户——qp
app.post("/postadduser_PC",contr.postadduser_PC);
//登录——qp
app.post("/postloginuser_PC",contr.postloginuser_PC);
//评论——qp
app.post("/posttalk_PC",contr.posttalk_PC);
//刷新页面——qp
app.post("/postupdata_PC",contr.postupdata_PC);
//点赞——qp
app.post("/postdianzan",contr.postdianzan);





