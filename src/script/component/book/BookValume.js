import React,{Component} from "react";
import Header from "../commen/Header";
import BookContent from "./book_content";
import Loading,{loading} from '../../../component_dev/loading/src'
let titleName=""
export default class BookValume extends Component{
	titleBindHtml(list){
		switch(list){
			case "/content":titleName="定制生活---首页";break;
			case "/sort":titleName="定制生活---分类页";break;
			case "/book_valume":titleName="定制生活---预约页";break;
			case "/brand":titleName="定制生活---面料页";break;
			case "/login":titleName="定制生活---登录页";break;
		}
		return titleName;
	}
	backReturn(){
		this.props.router.goBack()
	}
	submitFormData(){
		this.props.router.push("/book_success")
	}
	componentWillMount(){
		loading.show({
			text:"小匠正在加载中..."
		})
	}
	render(){
		console.log(this)
		return(
			<div className="book_contain">
				<div className="book_header">
					<Header returnBack={this.backReturn.bind(this)} title={this.titleBindHtml(this.props.location.pathname)} isShowBack={true}/>
				</div>
				<div className="book_content">
					<BookContent/>
				</div>
				<div className="book_footer" onClick={this.submitFormData.bind(this)}>
					预约美女量体上门
				</div>
			</div>
		)
	}
}