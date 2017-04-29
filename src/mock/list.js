var tao_img_src=require("./taoxi.json")
var dayi_img_src=require("./dayi.json")
var index=require("./index.json")
var index_banner=require("./index_banner.json")
var province=require("./province.json")
module.exports=function(){
	return {
		"tao_img_src":tao_img_src,
		"dayi_img_src":dayi_img_src,
		"index":index,
		"index_banner":index_banner,
		"province":province
	}
}
