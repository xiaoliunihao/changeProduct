import React,{Component} from "react";
import Header from "../commen/Header";
import Toast from '../../../component_dev/toast/src'
import Loading,{loading} from '../../../component_dev/loading/src'
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
	resterBtn(){
		let username = this.refs.username.value;
		let password = this.refs.password.value;
		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		})
		fetch("/mylogin/users/registor", {
			method: 'POST',
			headers: headers,
			body: `customername=${username}&password=${password}`
		})
		.then((response) => response.json())
		.then(res => {
			console.log(res)
			if ((res.username)=='') {
				this.refs.username.value="";
				this.refs.password.value="";
				Toast.show("该用户名已经存在！",2000);
			} else {
				if((res.register)=="ok"){
					this.props.router.push("/login")
				}else{
					Toast.show("注册失败",2000);
				}
				
			}
		})
		.catch(e => {
			console.log(e)
		})
	}
	componentWillMount(){
		loading.show({
			text:"小匠正在加载中..."
		})
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
								<input ref="username" className="your_name" type="text" placeholder="请输入用户名" />
							    <input ref="password" className="your_password" type="password" placeholder="请输入密码" />
							    <input className="your_confir_pass" type="password" placeholder="确认密码" />
							</div>
						</div>
						<div className="register_btn">
						    <input className="yo-btn register_button" onClick={this.resterBtn.bind(this)} value="注册" type="button"/>
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