import React,{Component} from "react";
import Login_List from "./login_list";
import Loading,{loading} from '../../../component_dev/loading/src';
import Scroller from '../../../component_dev/scroller/src';
import {Link} from "react-router";
export default class LoginSuccess extends Component{
	constructor(props){
		super(props)
		this.state={
			name:localStorage.getItem("username"),
			password:localStorage.getItem("password")
		}
	}
	componentWillMount(){
		loading.show({
			text:"小匠正在加载中..."
		})
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
								<div className="all_right yo-ico"><Link to="/allList">&#xf0343;</Link></div>
							</div>
							<div className="all_row">
								<ul className="all_row_list">
									<li className="content_have" enterType="0">
										<Link to="/allList?id=1">
											<div className="no_pay">
												<img src="./img/yiyuyue.png" />
											</div>
											<div className="ok_make">已预约</div>
										</Link>
									</li>
									<li className="border_short"></li>
									<li className="content_have" enterType="1">
										<Link to="/allList?id=2">
											<div className="no_pay">
												<img src="./img/jinxingzhong.png" />
											</div>
											<div className="ok_make">进行中</div>
										</Link>
									</li>
									<li className="border_short"></li>
									<li className="content_have" enterType="2">
										<Link to="/allList?id=3">
											<div className="no_pay">
												<img src="./img/daifukuan.png" />
											</div>
											<div className="ok_make">待付款</div>
										</Link>
									</li>
									<li className="border_short"></li>
									<li className="content_have" enterType="3">
										<Link to="/allList?id=4">	
											<div className="no_pay">
												<img src="./img/yiwancheng.png" />
											</div>
											<div className="ok_make">已完成</div>
										</Link>
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