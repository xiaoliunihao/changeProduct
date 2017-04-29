import React,{Component} from "react";
import Header from "./commen/Header";
import Footer from "./commen/Footer";
let titleName=""
export default class Index extends Component{

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
	render(){
		return(
			
			<div className="index_container">
				<Header title={this.titleBindHtml(this.props.location.pathname)} isShowBack={false}/>
				{this.props.children}
				<Footer/>
			</div>
		)
	}
}


