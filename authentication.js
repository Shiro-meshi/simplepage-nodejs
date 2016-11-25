/* Use UTF-8 to operate this file*/
/*
 * 此模块处理权限相关问题，包括获取token、更改密码、更改权限之类
 * */
var express=require('express');
var data=require('./datasource');
var router=express.Router();
/*
* login() 对req里面
* */
function login(req,resp){

}
function logout(req,resp) {

}
function validate(req,resp,next){
    console.log("Received validation req");
    next();
}
router.use(validate);
router.post('/login',login);
router.post('/logout',logout);
router.post('/renew',login);
module.exports=router;
