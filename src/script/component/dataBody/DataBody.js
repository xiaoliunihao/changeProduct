import React,{Component} from "react";
import Header from "../commen/Header";
import Loading,{loading} from '../../../component_dev/loading/src'
var titleName="";
import {Link} from "react-router";
export default class DataBody extends Component{
	titleBindHtml(list){
		switch(list){
			case "/content":titleName="定制生活---首页";break;
			case "/sort":titleName="定制生活---分类页";break;
			case "/book_valume":titleName="定制生活---预约页";break;
			case "/brand":titleName="定制生活---面料页";break;
			case "/login":titleName="定制生活---登录页";break;
			case "/dataBody":titleName="定制生活---量体数据";break;
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
			<div className="dataBody">
				<div className="dataBody_header">
					<Header returnBack={this.backReturn.bind(this)} title={this.titleBindHtml(this.props.location.pathname)} isShowBack={true}/>
				</div>
				<div className="dataBody_content">
					<div className="volume_data">
						暂无量体数据
					</div>
					<div className="volume_data">
						想查看您的量体数据吗？预约美女着装顾问为您上门量体吧
					</div>
					<div className="goMake">
						<Link to="/book_valume">
							<div className="goBtn">立即预约</div>
						</Link>
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