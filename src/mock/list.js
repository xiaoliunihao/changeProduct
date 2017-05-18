var tao_img_src=require("./taoxi.json")
var dayi_img_src=require("./dayi.json")
var index=require("./index.json")
var index_banner=require("./index_banner.json")
var province=require("./province.json")
var login_list=require("./login_list.json")
var order_appointment=require("./order_appointment.json")
var order_conduct=require("./order_conduct.json")
var order_wait=require("./order_wait.json")
var order_paySuccess=require("./order_paySuccess.json")

var noorder_wait=require("./noorder_wait.json")
var noorder_paySuccess=require("./noorder_paySuccess.json")

module.exports=function(){
	return {
		"tao_img_src":tao_img_src,
		"dayi_img_src":dayi_img_src,
		"index":index,
		"index_banner":index_banner,
		"province":province,
		"login_list":login_list,
		
		"order_appointment":order_appointment,
		"order_conduct":order_conduct,
		"order_wait":order_wait,
		"order_paySuccess":order_paySuccess,
		
		"noorder_wait":noorder_wait,
		"noorder_paySuccess":noorder_paySuccess
		
	}
}
