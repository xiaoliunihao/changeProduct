import React,{Component} from "react";
import Header from "../commen/Header";
var titleName=""
export default class Register extends Component{
	titleBindHtml(list){
		switch(list){
			case "/content":titleName="定制生活---首页";break;
			case "/sort":titleName="定制生活---分类页";break;
			case "/book_valume":titleName="定制生活---预约页";break;
			case "/register":titleName="定制生活---注册页";break;
			case "/login":titleName="定制生活---登录页";break;
		}
		return titleName;
	}
	backReturn(){
		this.props.router.goBack()
	}
	render(){
		return(
			<div className="register">
			   <div className="regis_header">
			      <Header returnBack={this.backReturn.bind(this)} title={this.titleBindHtml(this.props.location.pathname)} isShowBack={true}/>
			   </div>
			   <div className="regis_content">
			       <div className="reg_box">
						<div className="Logo_img">
						     <div className="logo_img_resign">
						         <img src="./img/logobgImg.png"/>
						     </div>
						</div>
						<div className="input_box">
							<div className="input_tax">
								<input className="your_name" type="text" placeholder="请输入用户名" />
							    <input className="your_password" type="password" placeholder="请输入密码" />
							    <input className="your_confir_pass" type="password" placeholder="确认密码" />
							</div>
						</div>
						<div className="register_btn">
						    <input className="yo-btn register_button" value="注册" type="button"/>
						</div>
					</div>
			   </div>
			</div>
		)
	}
}