import React,{Component} from "react";
import ResignBox from "./resignBox";
import ResignBoxNo from "./resignBoxNo";
import Header from "../commen/Header";
import Scroller from '../../../component_dev/scroller/src';
import Loading,{loading} from '../../../component_dev/loading/src'
var titleName=""
export default class AllList extends Component{
	constructor(props){
		super(props)
		var ariseIndex;
		var ariseIndexNo;
		if(this.props.location.query.id==undefined){
			ariseIndex=0;
			ariseIndexNo=0;
		}else{
			switch(this.props.location.query.id){
		        case "1":ariseIndex=0;break;
		        case "2":ariseIndex=1;break;
		        case "3":ariseIndex=2;break;
		        case "4":ariseIndex=3;break;
		    }
		    switch(this.props.location.query.id){
		        case "1":ariseIndexNo=0;break;
		        case "2":ariseIndexNo=0;break;
		        case "3":ariseIndexNo=0;break;
		        case "4":ariseIndexNo=1;break;
		    }
		}
		this.state = {
		    curArise:"down_container hide",
		    curAriseNo:"down_container hide",
		    curArr:["已预约","进行中","待付款","已完成"],
		    curArr1:["待付款","已完成"],
		    resignData:[],
		    ariseIndex:ariseIndex,
		    resignDataNo:[],
		    ariseIndexNo:ariseIndexNo
	    }
	}
	slectValue(list){
		return list.length>0?list.map((value,index)=>{
			return(
				<li><span onClick={this.selectSpan.bind(this,index)} className={index==this.state.ariseIndex?"spanactive":""}>{value}</span></li>
			)
		}):[<div />];
	}
	selectSpan(index,event){
		var uri;
		switch(event.target.innerHTML){
			case "已预约":uri="/indexList/order_appointment";break;
			case "进行中":uri="/indexList/order_conduct";break;
			case "待付款":uri="/indexList/order_wait";break;
			case "已完成":uri="/indexList/order_paySuccess";break;
		}
		fetch(uri)
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				resignData:res.result,
				ariseIndex:index
			})
		})
		.catch(function(e){
			alert(e)
		})
		
	}
	slectValue1(list){
		return list.length>0?list.map((value,index)=>{
			return(
				<li><span onClick={this.selectSpan1.bind(this,index)} className={"wait_pay "+(index==this.state.ariseIndexNo?"spanactive":"")}>{value}</span></li>
			)
		}):[<div />];
	}
	selectSpan1(index,event){
		console.log(event.target.innerHTML)
		var uri;
		switch(event.target.innerHTML){
			case "待付款":uri="/indexList/noorder_wait";break;
			case "已完成":uri="/indexList/noorder_paySuccess";break;
		}
		fetch(uri)
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				resignDataNo:res.result,
				ariseIndexNo:index
			})
		})
		.catch(function(e){
			alert(e)
		})
	}
	titleBindHtml(list){
		switch(list){
			case "/content":titleName="定制生活---首页";break;
			case "/sort":titleName="定制生活---分类页";break;
			case "/book_valume":titleName="定制生活---预约页";break;
			case "/brand":titleName="定制生活---面料页";break;
			case "/login":titleName="定制生活---登录页";break;
			case "/allList":titleName="定制生活---全部订单";break;
		}
		return titleName;
	}
	backReturn(){
		this.props.router.goBack()
	}
	ariseBox(){
		if(this.state.curArise=="down_container hide"){
			this.setState({
				curArise:"down_container arise"
			})
		}else{
			this.setState({
				curArise:"down_container hide"
			})
		}
	}
	ariseBoxNo(){
		console.log(this.state.curAriseNo)
		if(this.state.curAriseNo=="down_container hide"){
			this.setState({
				curAriseNo:"down_container block"
			})
		}else{
			this.setState({
				curAriseNo:"down_container hide"
			})
		}
	}
	componentWillMount(){
		loading.show({
			text:"小匠正在加载中..."
		})
	}
	render(){
		return(
			<div className="allList">
				<div className="all_header">
					<Header returnBack={this.backReturn.bind(this)} title={this.titleBindHtml(this.props.location.pathname)} isShowBack={true}/>
				    
				</div>
				<div className="custom_class">
			    	<Scroller
			    	extraClass="yo-scroller-alllist"
					scrollX={false} 
					scrollY={true}
			    	>
						<div className="custom_class_title custom_class_title1" onClick={this.ariseBox.bind(this)}>
							<span className="span_class">定制类订单</span>
							<span className="down_list"></span>
						</div>
						<div className={this.state.curArise}>
							<div className="down_list_content">
								<ul className="list_content_header tap_list_content">
									{this.slectValue(this.state.curArr)}
								</ul>
								<div className="list_detail" id="resign_data">
									<ResignBox dataResign={this.state.resignData}/>
								</div>
							</div>
						</div>
						<div className="no_custom_class">
							<div className="custom_class_title Nocustom_class_title" onClick={this.ariseBoxNo.bind(this)}>
								<span className="span_class">非定制类订单</span>
								<span className="down_list"></span>
							</div>
							<div className={this.state.curAriseNo}>
								<div className="down_list_content">
									<ul className="list_content_header wait_content_header">
										{this.slectValue1(this.state.curArr1)}
									</ul>
									<div className="no_resign" id="no_container">
										<ResignBoxNo  dataResignNo={this.state.resignDataNo}/>
								    </div>	
								</div>
							</div>
						</div>
					</Scroller>
				</div>
			</div>
		)
	}
	componentDidMount(){
		var uriUrl;
		var uriUrlNo;
		if(this.props.location.query.id==undefined){
			uriUrl="/indexList/noorder_wait";
			uriUrlNo="/indexList/noorder_wait";
		}else{
		    switch(this.props.location.query.id){
		        case "1":uriUrl="/indexList/order_appointment";break;
		        case "2":uriUrl="/indexList/order_conduct";break;
		        case "3":uriUrl="/indexList/order_wait";break;
		        case "4":uriUrl="/indexList/order_paySuccess";break;
		    }
		    switch(this.props.location.query.id){
		        case "1":uriUrlNo="/indexList/noorder_wait";break;
		        case "2":uriUrlNo="/indexList/noorder_wait";break;
		        case "3":uriUrlNo="/indexList/noorder_wait";break;
		        case "4":uriUrlNo="/indexList/noorder_paySuccess";break;
		    }
		}
		fetch(uriUrl)
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				resignData:res.result
			})
			setTimeout(function(){
				loading.hide()
			},1000)
		})
		.catch(function(e){
			alert(e)
		})
		fetch(uriUrlNo)
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				resignDataNo:res.result
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