import React,{Component} from "react";
import Scroller from '../../../component_dev/scroller/src';
import Loading,{loading} from '../../../component_dev/loading/src';
localStorage.setItem("TypeId",1);
export default class TopLine extends Component{
	constructor(props){
		super(props)
		this.state = {
		    curIndex:0,
	        liLine: ["套西","单西","裤装","大衣","马甲","衬衫","箱包","个户","羊绒衫","家纺"]
	    }
	}
	getClickValue(index,event){
		loading.show({
			text:"小匠正在加载中..."
		})
		var liValue=event.target.innerHTML;
		var TypeId="";
		switch(liValue){
			case "套西":TypeId="1";break;
			case "单西":TypeId="2";break;
			case "裤装":TypeId="3";break;
			case "大衣":TypeId="4";break;
			case "马甲":TypeId="5";break;
			case "衬衫":TypeId="6";break;
			case "箱包":TypeId="7";break;
			case "个户":TypeId="8";break;
			case "羊绒衫":TypeId="9";break;
			case "家纺":TypeId="11";break;
		}
		this.props.onFatherLi({TypeId:TypeId})
		localStorage.setItem("TypeId",TypeId);
		this.setState({
			curIndex:index
		})
	}
	selectTypeId(list){
		return list.map((value,index)=>{
			return(
				<li>
					<span><i onClick={this.getClickValue.bind(this,index)} className={index==this.state.curIndex?"border_active":""}>{value}</i></span>
				</li>
			)
		})
	}
	
	render(){
		return(
           <div className="topLine line_scroll">
           		<Scroller
       			extraClass="yo-scroller-d"
       			scrollX={true} 
				scrollY={false}
       			>
           		<ul>
					{this.selectTypeId(this.state.liLine)}
				</ul>
				</Scroller>
           </div>
		)
	}
}
