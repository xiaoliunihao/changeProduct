import React,{Component} from "react";
import Loading,{loading} from '../../../component_dev/loading/src'
import {Link} from "react-router";
export default class Login_List extends Component{
	constructor(props){
		super(props)
		this.state={
			loginList:[]
		}
	}
	login_list(list){
		return list.length>0?list.map((value,index)=>{
			return(
				<Link to={value.to}>
					<li style={{background:'url('+value.src+') no-repeat 0.15rem center',backgroundSize:"0.18rem 0.15rem"}}>
						<span className="coupon">{value.name}</span>
						<span className="yo-ico">&#xf0343;</span>
					</li>
				</Link>
			)
		}):[<div />];
	}
	render(){
		return(
			<ul className="orderList">
				{this.login_list(this.state.loginList)}
			</ul>
		)
	}
	componentDidMount(){
		fetch("/indexList/login_list")
		.then((response)=>response.json())
		.then((res)=>{
			var list=res.list;
			this.setState({
				loginList:list
			})
			setTimeout(function(){
				loading.hide()
			},1000)
		})
		.catch(function(e){
			alert(e)
		})
	}
}