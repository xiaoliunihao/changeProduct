import React,{Component} from "react";
import Login_List from "./login_list";
import Scroller from '../../../component_dev/scroller/src';
export default class LoginSuccess extends Component{
	constructor(props){
		super(props)
		this.state={
			name:localStorage.getItem("username"),
			password:localStorage.getItem("password")
		}
	}
	render(){
		if (localStorage.getItem('username')) {
			return(
				<div className="login_success">
					<Scroller
					extraClass={"yo-scroller-list"} 
					scrollX={false} 
					scrollY={true}
					>
					    <div className="suc_header">
							<div className="wear_img">
								<div className="center_img">
									<img src="./img/fanTitleImg.png" />
									<ul className="bot_line">
										<li className="per_name">{this.state.name}</li>
										<li className="per_tel">{this.state.password}</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="all_list">
							<div className="all_title">
								<div className="title_left">
									<img src="./img/bookTxt.png" />
								</div>
								<div className="list_txt">全部订单</div>
								<div className="all_right yo-ico">&#xf0343;</div>
							</div>
							<div className="all_row">
								<ul className="all_row_list">
									<li className="content_have" enterType="0">
										<div className="no_pay">
											<img src="./img/yiyuyue.png" />
										</div>
										<div className="ok_make">已预约</div>
									</li>
									<li className="border_short"></li>
									<li className="content_have" enterType="1">
										<div className="no_pay">
											<img src="./img/jinxingzhong.png" />
										</div>
										<div className="ok_make">进行中</div>
									</li>
									<li className="border_short"></li>
									<li className="content_have" enterType="2">
										<div className="no_pay">
											<img src="./img/daifukuan.png" />
										</div>
										<div className="ok_make">待付款</div>
									</li>
									<li className="border_short"></li>
									<li className="content_have" enterType="3">
										<div className="no_pay">
											<img src="./img/yiwancheng.png" />
										</div>
										<div className="ok_make">已完成</div>
									</li>
								</ul>
							</div>
						</div>
						<Login_List />
					</Scroller>
				</div>
			)
		}else{
			this.props.router.push("/login")
		}
	}
}