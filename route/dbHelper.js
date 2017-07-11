
var mysql = require('mysql');

var mainMysql = require('./dbConfig.js');

//-----------------pub.html-Start----------------
//页面首次加载的Ajax
exports.loadPub_ajax = function(res){
    var sql = "select dest_d.id_d,dest_d.name_d,spot_s.img_s"+
        " from dest_d"+
        " left join spot_s"+
        " on dest_d.id_d = spot_s.dest_key"+
        " group by dest_d.id_d"+
        " order by dest_d.id_d asc;";

    mainMysql.querySQL(sql,function(data){
        res.json(data);
    });
}

//-----------------pub.html-End----------------

//-----------------pubSearch.html-Start----------------
//地区列表
exports.dest_addr = function(res){
    var sql = "select id_d,name_d from dest_d order by id_d asc;";
    mainMysql.querySQL(sql,function(data){
        res.json(data);
    });
}

//酒店列表
exports.pub_list = function(res,arr_data){
    var sql = "select * from pub_p where " + arr_data[0] + "and" +  arr_data[1] + ";";
    mainMysql.querySQL(sql,function(data){
        res.json(data);
    });
}

//-----------------pubSearch.html-End----------------


//----------------jl_pubDetails.html-Start----------------
//页面载入时的信息
exports.pub_info = function(pub_id,res){
    var sql = "select * from pub_p where id_p = ?;";
    mainMysql.querySQLAgmen(sql,[pub_id],function(data){
        res.json(data);
    });
}


//----------------jl_pubDetails.html-End----------------


//----------------卿鹏----------------

var mysql = require("mysql");

var MianMysql1;

//链接数据库(第一步)
exports.open = myopen;
function myopen(){
    MianMysql1 = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mtour_db"
    })
}


//PC端


//注册
//注册-查询用户是否存在
exports.postseachuser_PC_db = function(name,res){
    var sql="select * from user_u where phone_u=?;";
    MianMysql1.query(sql,[name],function(error,data){
        if(error){
            console.log(error);
            res.send("系统错误");
        }else{
            console.log(data);
            res.send(data);
        }
    });
};
//注册-添加新用户
exports.postadduser_PC_db = function(name,pass,res){
    var sql="INSERT into user_u (phone_u,pass_u) VALUES (?,?);";
    MianMysql1.query(sql,[name,pass],function(error,data){
        if(error){
            console.log(error);
            res.send("系统错误");
        }else{
            console.log(data);
            res.send(data);
        }
    });
};
//登录——qp
exports.postloginuser_PC_db = function(name,pass,res){
    var sql="select * from user_u where phone_u=? and pass_u=?";
    MianMysql1.query(sql,[name,pass],function(error,data){
        if(error){
            console.log(error);
            res.send("系统错误");
        }else{
            console.log(data);
            res.send(data);
        }
    });
};
//评论——qp
exports.posttalk_PC_db = function(face,name,time,num,talk,res){
    var sql="INSERT INTO talk (userFace,userName,userTalk,userTime,userNum) VALUES (?,?,?,?,?);";
    MianMysql1.query(sql,[face,name,talk,time,num],function(error,data){
        if(error){
            console.log(error);
            res.send("系统错误");
        }else{
            console.log(data);
            res.send(data);
        }
    });
};
//刷新——qp
exports.postupdata_PC_db = function(req,res){
    var sql="select * from talk ORDER BY id_t DESC;";
    MianMysql1.query(sql,[],function(error,data){
        if(error){
            console.log(error);
            res.send("系统错误");
        }else{
            console.log("排序"+data);
            res.send(data);
        }
    });
};
//点赞——qp
exports.postdianzan_db = function(id,res){
    var sql="UPDATE talk set userNum=(userNum+1) WHERE id_t=?;";
    MianMysql1.query(sql,[id],function(error,data){
        if(error){
            console.log(error);
            res.send("系统错误");
        }else{
            console.log("排序"+data);
            res.send(data);
        }
    });
};

//李梦辉
//景点列表
exports.spotSeeDB = function(sql,res){
    mainMysql1.query(sql,function(error,data){
        if(!error){
            res.render('spotList.hbs',{ dataArr:data },
                function(errorHbs,dataHbs){
                    if(!errorHbs) {
                        res.send(dataHbs);
                    }else{
                        res.send("出错了");
                    }
                });
        }
    });
};
exports.end = myend;
function myend(){
    MianMysql1.end();
}




















