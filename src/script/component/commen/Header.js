import React,{Component} from "react";
export default class Header extends Component{
	goBack(){
		this.props.returnBack()
	}
	render(){
		return(
			<header className="yo-header">
				<h2 className="title">{this.props.title}</h2>
				<a className={`regret yo-ico ${this.props.isShowBack?'':'hide'}`} onClick={this.goBack.bind(this)}><span>返回</span></a>
			</header>
		)
	}
}
