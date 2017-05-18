import React,{Component} from "react";
import {Link} from "react-router";
export default class TwoBox extends Component{
	render(){
		return (
			<div className="content_div">
				<div className="zhuce_Btn">
					<Link to="/register">
						<img src="/img/zhuceImg.jpg" alt="" />
					</Link>
				</div>
				<div>
					<img src="/img/tuijian.jpg" alt="" />
				</div>
			</div>
		)
	}
}
