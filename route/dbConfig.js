const mysql = require('mysql');

/*读取mysqlConfig.json文件*/
const fs = require('fs');
const file = __dirname + "/mysqlConfig.json";

const jsonResult = JSON.parse(fs.readFileSync( file).toString());

const myPool = mysql.createPool(jsonResult.mySql);

//执行SQL语句的公有方法
exports.querySQL = function(sql,reFun){
    myPool.getConnection(function(err,connection){
        connection.query(sql,function(err,result){
            if (err) throw err;
            reFun(result);
            connection.release();  // 释放数据库连接
        });
    });
}

exports.querySQLAgmen = function(sql,arr,reFun){
    myPool.getConnection(function(err,connection){
        connection.query(sql,arr,function(err,result){
            if (err) throw err;
            reFun(result);
            connection.release();  // 释放数据库连接
        });
    });
}
