import React,{Component} from "react";
import Scroller from '../../../component_dev/scroller/src';
import Loading,{loading} from '../../../component_dev/loading/src'
export default class BookContent extends Component{
	constructor(props){
		super(props)
		this.state={
			province:[]
		}
	}
	getProvince(list){
		return list.length>0?list.map((value,index)=>{
			return(
				<option value={value.id}>{value.areaName}</option>
			)
		}):[<option></option>];
	}
	abc(data){
		return data
	}
	getCity(){
		var getProId=this.refs.province.value;
		let headers = new Headers({
	      'Content-Type': 'application/x-www-form-urlencoded'
	    })
		
		fetch("/sortdata/products/getElementArea?callback=abc",{
			method: 'POST',
			jsonpCallback: 'jsonp',
		    headers: headers,
		    body:"{'pid':"+getProId+"}"
		})
		.then((response)=>{
			response.json()
		})
		.then((res)=>{
			console.log(res)
		})
		.catch(function(e){
			alert(e)
		})
	}
	getArea(){
		
	}
	
	render(){
		
		return(
			<Scroller
			extraClass={"yo-scroller-book"} 
			scrollX={false} 
			scrollY={true}
			>
				<div>
					<div className="book_header">
						<img src="./img/banner_b.png" />
					</div>
					<div className="user_news">
						<div className="user_txt">
							基本信息
						</div>
						<div className="user_input">
							<input className="user_enterName" ref="userName" type="text" placeholder="请输入姓名"/>
							<input className="user_enterTel" ref="password" type="text" placeholder="请输入电话"/>
						</div>
						
					</div>
					<div className="user_news user_address">
						<div className="user_txt">
							量体地址
						</div>
						<div className="user_input user_select">
							<div className="select_box">
								<select ref="province" className="province" onChange={this.getCity.bind(this)}>
									<option>请选择省</option>
									{this.getProvince(this.state.province)}
								</select>
								<select ref="city" className="city" onchange={this.getArea()}>
									<option>请选择市</option>
								</select>
								<select ref="area" className="area">
									<option>请选择区</option>
								</select>
							</div>
							<div className="textarea_box">
							    <textarea ref="text_area" className="text_area" placeholder="请输入详细地址"></textarea>
							</div>
						</div>
					</div>
					<div className="user_news user_time">
						<div className="users_time">
							<span>量体时间</span>
							<span className="make_time">上午09:00-14:00，下午14:00-19:00</span>
						</div>
						<div className="user_bottom_box">
							<div className="user_input text_news">
								<ul>
								    <li>今天上午</li>
								    <li>明天上午</li>
								    <li>后天上午</li>
								    <li>今天下午</li>
								    <li>明天下午</li>
								    <li>后天下午</li>
								</ul>
								
							</div>
							<div className="book_time">
							    <div>客服来电</div>
							    <div>预约时间</div>
							</div>
						</div>
					</div>
					<div className="user_news user_body">
						<div className="user_txt">
							量体顾问
						</div>
						<div className="body_make">
							<div className="make_adviser">随机分配量体顾问</div>
						</div>
					</div>
				</div>
			</Scroller>
			
		)
	}
	componentDidMount(){
		fetch("/indexList/province")
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				province:res.province
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