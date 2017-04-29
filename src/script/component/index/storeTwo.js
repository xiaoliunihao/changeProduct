import React,{Component} from "react";
import PubHeader from "../commen/PubHeader";
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
					<img src={value} alt="" />
				</li>
			)
		})
	}
	render(){
		return (
			<div className="product_tao tu_img_product">
				<PubHeader title={this.props.title} />
				<ul>
					{this.getImg_srcList(this.state.storeList)}
				</ul>
			</div>
		)
	}
	componentDidMount(){
		fetch("http://localhost:3000/"+this.props.uri)
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				storeList:res.src
			})
		})
	}
}
