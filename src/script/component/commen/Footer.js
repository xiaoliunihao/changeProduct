import React,{Component} from "react";
import {Link} from "react-router";
export default class Footer extends Component{
	render(){
		return(
			<div className="footer">
				<ul>
					<li><Link to="/content" activeClassName="active"><i className="yo-ico">&#xe604;</i>首页</Link></li>
					<li><Link to="/sort" activeClassName="active"><i className="yo-ico">&#xe66f;</i>分类</Link></li>
					<li className="yuyue_img"><Link to="/book_valume" activeClassName="active"><i className="yo-ico make_img">&#xe60b;</i>预约量体</Link></li>
					<li><Link to="/brand" activeClassName="active"><i className="yo-ico">&#xe60d;</i>品牌</Link></li>
					<li><Link to="/login" activeClassName="active"><i className="yo-ico">&#xe623;</i>我的</Link></li>
				</ul>
			</div>
		)
	}
}