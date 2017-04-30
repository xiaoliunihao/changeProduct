import React,{Component} from "react";
import {Link} from "react-router";
import Popup  from '../../../component_dev/popup/src'
import Loading,{loading} from '../../../component_dev/loading/src'
import Toast from '../../../component_dev/toast/src'
export default class Login extends Component{
	constructor(props) {
		super(props)
		this.state={
			Popup:false
		}
	}
	componentWillMount(){
		loading.show({
			text:"小匠正在加载中..."
		})
	}
	loginForm(){
		let username = this.refs.username.value;
		let password = this.refs.password.value;

		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		})

		fetch("/mylogin/users/reload", {
			method: 'POST',
			headers: headers,
			body: `customername=${username}&password=${password}`
		})
		.then((response) => response.json())
		.then(res => {
			console.log(res)
			if (res.load=="ok") {
				localStorage.setItem("username",username);
				localStorage.setItem("password",password)
				this.refs.username.value="";
				this.refs.password.value="";
				Toast.show("登录成功！",1000);
				console.log(this.props.router.push("/login_success"))
			} else {
				Toast.show("此账号不存在!",2000);
			}
		})
		.catch(e => {
			console.log(e)
		})
	}
	
	render(){
		return(
			<div className="login_container">

				<div className="Login_img">
					<img src="http://www.fanjiangdz.com/weixin/newpublic/images/logobgImg.png"/>
				</div>
				<div className="PeronMess">
					<input type="text" placeholder="用户名"  className="PhoneNum" ref="username"/>
					<input type="password" placeholder="密码" className="Password" ref="password"/>
				</div>
				<div className="Registor_Mess">
					<Link to="/register">
						<b className="registor">点此快速注册</b>
					</Link>
				</div>
				<div className="Login_Mess">
					<button className="login" onClick={this.loginForm.bind(this)}>登录</button>
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