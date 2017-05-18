import React,{Component} from "react";
import Header from "../commen/Header";
import Loading,{loading} from '../../../component_dev/loading/src'
var titleName=""
export default class Reduce extends Component{
	titleBindHtml(list){
		switch(list){
			case "/content":titleName="定制生活---首页";break;
			case "/sort":titleName="定制生活---分类页";break;
			case "/book_valume":titleName="定制生活---预约页";break;
			case "/brand":titleName="定制生活---面料页";break;
			case "/login":titleName="定制生活---登录页";break;
			case "/reduce":titleName="定制生活---我的优惠劵";break;
		}
		return titleName;
	}
	backReturn(){
		this.props.router.goBack()
	}
	componentWillMount(){
		loading.show({
			text:"小匠正在加载中..."
		})
	}
	render(){
		return(
			<div className="reduce">
				<div className="reduce_header">
					<Header returnBack={this.backReturn.bind(this)} title={this.titleBindHtml(this.props.location.pathname)} isShowBack={true}/>
				</div>
				<div className="reduce_content">
					<div className="reduce_container">
						<ul className="reduce_header">
							<li className="reduce_active" value="no">未使用</li>
							<li value="have">已使用</li>
							<li value="timeout">未过期</li>
						</ul>
						<div className="reduce_box">
							<div className="reduce_body">
								<div className="reduce_list reduce_list_no">
									<div className="rectangle">
										<div className="distribution">
											<div className="coupon">注册有礼券</div>
											<div className="coupon_txt">
												<span>￥</span>
												<span className="monty_value">500</span>
												<span>（注册有礼券-订单满4500元可用）</span>
											</div>
											<div className="coupon_time">
												<span>到期时间:</span>
												<span>2017-12-13</span>
											</div>
										</div>
									</div>
									<div className="rectangle">
										<div className="distribution">
											<div className="coupon">注册有礼券</div>
											<div className="coupon_txt">
												<span>￥</span>
												<span className="monty_value">200</span>
												<span>（注册有礼券-订单满2500元可用）</span>
											</div>
											<div className="coupon_time">
												<span>到期时间:</span>
												<span>2017-12-13</span>
											</div>
										</div>
									</div>
									<div className="rectangle">
										<div className="distribution">
											<div className="coupon">注册有礼券</div>
											<div className="coupon_txt">
												<span>￥</span>
												<span className="monty_value">160</span>
												<span>（注册有礼券-订单满1000元可用）</span>
											</div>
											<div className="coupon_time">
												<span>到期时间:</span>
												<span>2017-12-13</span>
											</div>
										</div>
									</div>
									<div className="rectangle">
										<div className="distribution">
											<div className="coupon">注册有礼券</div>
											<div className="coupon_txt">
												<span>￥</span>
												<span className="monty_value">100</span>
												<span>（注册有礼券-订单满600元可用）</span>
											</div>
											<div className="coupon_time">
												<span>到期时间:</span>
												<span>2017-12-13</span>
											</div>
										</div>
									</div>
									<div className="rectangle">
										<div className="distribution">
											<div className="coupon">注册有礼券</div>
											<div className="coupon_txt">
												<span>￥</span>
												<span className="monty_value">50</span>
												<span>（注册有礼券-订单满300元可用）</span>
											</div>
											<div className="coupon_time">
												<span>到期时间:</span>
												<span>2017-12-13</span>
											</div>
										</div>
									</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	componentDidMount(){
		setTimeout(function(){
			loading.hide()
		},1000)
	}
}