
var dbHelper = require('./dbHelper.js');

//-----------------pub.html-Start----------------
//页面首次加载的Ajax
exports.loadPub_ajax = function(req,res){
    dbHelper.loadPub_ajax(res);
}

//-----------------pub.html-End----------------


//-----------------pubSearch.html-Start----------------
//地区查询
exports.dest_addr = function(req,res){
    dbHelper.dest_addr(res);
}

//酒店查询
exports.pub_list = function(req,res){
    var json_data = req.body;

    var arr_data = [];

    //id判断
    if(json_data.addr_id > 0){
        arr_data.push(" pub_dest_key = " + json_data.addr_id + " ");
    }else{
        arr_data.push(" pub_dest_key like '%' ");
    }

    //地区判断
    if(json_data.pub_name.length > 0){
        var str = json_data.pub_name.split('').join("%");
        arr_data.push(" name_p like '%" + str + "%' ");
    }else{
        arr_data.push(" name_p like '%' ");
    }

    dbHelper.pub_list(res,arr_data);
}

//-----------------pubSearch.html-End----------------
exports.pub_info = function(req,res){
    var pub_id = parseInt(req.query.pub_id);
    dbHelper.pub_info(pub_id,res);
}

//----------------jl_pubDetails.html-Start----------------


//----------------jl_pubDetails.html-End----------------


//----------------卿鹏----------------

var db = require("./dbHelper.js");

//PC端

//注册——查询——qp
exports.postseachuser_PC = function(req,res){
    console.log("进到control了1PC");
    var name = req.body.text1;
    console.log(name);
    db.open();
    db.postseachuser_PC_db(name,res);
    db.end();
};
//注册——添加新用户——qp
exports.postadduser_PC = function(req,res){
    console.log("进到control了2PC");
    var name = req.body.text1,
        pass=req.body.text2;
    db.open();
    db.postadduser_PC_db(name,pass,res);
    db.end();
};
//登录——qp
exports.postloginuser_PC = function(req,res){
    console.log("进到control了3PC");
    var name = req.body.text1,
        pass = req.body.text2;
    db.open();
    db.postloginuser_PC_db(name,pass,res);
    db.end();
};


//评论——qp
exports.posttalk_PC = function(req,res){
    console.log("进到control了1");
    var face = req.body.text1,
        name = req.body.text2,
        talk = req.body.text3,
        time = req.body.text4,
        num = req.body.text5;

    db.open();
    db.posttalk_db(face,name,talk,time,num,res);
    db.end();
};
//刷新——qp
exports.postupdata_PC = function(req,res){
    console.log("进到control了5");
    db.open();
    db.postupdata_PC_db(req,res);
    db.end();
};
//点赞——qp
exports.postdianzan = function(req,res){
    console.log("进到control了5");
    var id = req.body.text1;
    db.open();
    db.postdianzan_db(id,res);
    db.end();
};

//李梦辉
exports.spotSee = function(res,req){
    db.open();
    var sql = "select * from spot_s where dest_key=1;";
    db.spotSeeDB(sql,req);
    db.end();
};

//images
exports.images = function(req,res){
    console.log("图片");
    res.send(dstPath[0].path);
};