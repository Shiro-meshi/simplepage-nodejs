/*
* 抽象数据接口,sqlite3版本
* */
var sqlite=require("sqlite3");
/*
* User接口 实现用户数据相关
* */
var User=function (data){
    this.data=data;
};

User.prototype.data={};
User.findById=function (id,callback) {
};

exports.User=User;
