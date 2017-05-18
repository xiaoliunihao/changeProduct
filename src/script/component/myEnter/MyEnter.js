import React,{Component} from "react";
import Header from "../commen/Header";
import Loading,{loading} from '../../../component_dev/loading/src'
var titleName="";
import Scroller from '../../../component_dev/scroller/src';
export default class MyEnter extends Component{
	titleBindHtml(list){
		switch(list){
			case "/content":titleName="定制生活---首页";break;
			case "/sort":titleName="定制生活---分类页";break;
			case "/book_valume":titleName="定制生活---预约页";break;
			case "/brand":titleName="定制生活---面料页";break;
			case "/login":titleName="定制生活---登录页";break;
			case "/myEnter":titleName="定制生活---我的推荐";break;
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
			<div className="myEnter">
				<div className="myEnter_header">
					<Header returnBack={this.backReturn.bind(this)} title={this.titleBindHtml(this.props.location.pathname)} isShowBack={true}/>
				</div>
				<div className="myEnterContent">
					<Scroller
					extraClass={"yo-scroller-Enter"} 
					scrollX={false} 
					scrollY={true}
					>
						<div className="recom_box">
							<div className="recom_header">
								<img src="./img/t_nav1.png" />
							</div>
							<div className="div_img">
								<div className="div_img_center">
									<span>我的推荐码:</span>
									<span>FJTJ8888814</span>
								</div>
							</div>
							<div className="winning">
								<div className="winning_box">
									<ul className="winning_top">
										<li>
											<span>已成功邀请好友</span>
											<span>0人</span>
										</li>
										<li>
											<span>我获得的奖励</span>
											<span>0.00元</span>
										</li>
									</ul>
									<div className="winning_bot">
										<div className="winning_bot_box">
											<div className="btn_gofriend">邀请好友</div>
										</div>
									</div>
								</div>
							</div>
							<div className="txt_intro">
								<p>推荐有礼活动说明</p>
								<div className="txt_intro_para para_per">参与方式</div>
								<div className="txt_intro_para para_first">
									1、消费者关注“凡匠定制”微信公众号，注册为商城会员，同时获得推荐码。可在任何渠道向他人推荐“凡匠定制”平台并邀请注册微信商城会员。
								</div>
								<div className="txt_intro_para">
									2、消费者在朋友圈点击好友分享页面获得推荐码，完成信息填写后，点击“预约美女上门量体”可等待服装顾问与您沟通时间为您上门定制服装。费用结算时使用该推荐码，可立减100元。
								</div>
								<div className="txt_intro_para">
									3、受邀者产生消费同时，邀请人可获得消费金额的百分之五返额到个人钱包账户中（不可提现，可抵扣定制费）。
								</div>
								<div className="txt_intro_para para_per">
									个人钱包现金使用规则
								</div>
								<div className="txt_intro_para">
									1、通过推荐他人获得的邀请现金可依次累加。
								</div>
								<div className="txt_intro_para">
									1、通过推荐他人获得的邀请现金可依次累加。
								</div>
								<div className="txt_intro_para para_per">
									活动细则
								</div>
								<div className="txt_intro_para">
									在法律允许范围内，活动最终解释权归“凡匠定制”平台所有。
								</div>
							</div>
						</div>
					</Scroller>
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