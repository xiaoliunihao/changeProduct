import React,{Component} from "react";
import PubHeader from "../commen/PubHeader";
import {Link} from "react-router";
export default class StoreTwo extends Component{
	constructor(props){
		super(props)
		this.state={
			storeList:[]
		}
	}
	getImg_srcList(list){
		return list.map((value,index)=>{
			return(
				<li>
					<Link to={"/storeDetail?id="+value.id}>
						<img src={value.srclink} alt="" />
					</Link>
				</li>
			)
		})
	}
	render(){
		return (
			<div className="product_tao tu_img_product">
				<PubHeader title={this.props.title} idValue={this.props.typeId}/>
				<ul>
					{this.getImg_srcList(this.state.storeList)}
				</ul>
			</div>
		)
	}
	componentDidMount(){
		fetch("http://10.17.152.161:3000/"+this.props.uri)
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				storeList:res.src
			})
		})
	}
}
