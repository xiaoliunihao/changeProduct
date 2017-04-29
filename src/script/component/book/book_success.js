import React,{Component} from "react";
import Header from "../commen/Header";
import Loading,{loading} from '../../../component_dev/loading/src'
let titleName=""
export default class Book_Success extends Component{
	backReturn(){
		this.props.router.goBack()
	}
	titleBindHtml(list){
		switch(list){
			case "/content":titleName="定制生活---首页";break;
			case "/sort":titleName="定制生活---分类页";break;
			case "/book_valume":titleName="定制生活---预约页";break;
			case "/brand":titleName="定制生活---面料页";break;
			case "/login":titleName="定制生活---登录页";break;
			case "/book_success":titleName="定制生活---预约成功";break;
		}
		return titleName;
	}
	returnIndexEnter(){
		this.props.router.push("/")
	}
	componentWillMount(){
		loading.show({
			text:"小匠正在加载中..."
		})
	}
	render(){
		return(
			<div className="success_content">
				<div className="suc_Header">
					<Header returnBack={this.backReturn.bind(this)} title={this.titleBindHtml(this.props.location.pathname)} isShowBack={true}/>
				</div>
				<div className="sub_Content">
					<div className="success_container">
						<div className="success_bg">
							<img src="./img/bgSuccessImg.png" />
						</div>
						<div className="hello_success">恭喜您预约成功</div>
						<div className="txt_success">量体师将尽快与您取得联系，帮您上门量体</div>
						<div className="btn_success">
							<div className="center_btn_success" onClick={this.returnIndexEnter.bind(this)}>返回凡匠定制平台</div>
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