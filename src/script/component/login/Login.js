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
	submit() {
		let username = this.refs.username1.value;
		let password = this.refs.password1.value;
		this.setState({Popup :false});
		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		})
		fetch("/mylogin/users/registor", {
			method: 'POST',
			headers: headers,
			body: `username=${username}&password=${password}`
		})
		.then((response) => response.json())
			.then(res => {
				if (res.username) {
				Toast.show("恭喜注册成功！",2000);
				this.refs.username1.value="";
				this.refs.password1.value="";
				} else {
					Toast.show("用户名已存在","2000");
				}
			})
			.catch(e => {
				console.log(e)
			})
	}

	loginForm(){
		let username = this.refs.username.value;
		let password = this.refs.password.value;

		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		})

		fetch("/mylogin/users/login", {
			method: 'POST',
			headers: headers,
			body: `username=${username}&password=${password}`
		})
		.then((response) => response.json())
		.then(res => {
			console.log(res)
			if ((res.username)!='') {
				console.log(res.username);
				localStorage.setItem( "username",username)
				this.refs.username.value="";
				this.refs.password.value="";
				Toast.show("登录成功！",2000);
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