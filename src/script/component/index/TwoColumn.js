import React,{Component} from "react";
import PubHeader from "../commen/PubHeader";
export default class TwoColumn extends Component{
	constructor(props){
		super(props)
		this.state={
			storeDataList:[]
		}
	}
	getDataLine(list){
		return list.map((value,index)=>{
			return(
				<div className="product_a">
					<div className="top_product">
						<img src={"http://www.fanjiangdz.com/image/"+value.filepath} />
					</div>
					<div className="news_product">
						<h1>{value.name}{value.categoryPLName}</h1>
						<p className="sign_p">{value.manufacturer}</p>
						<p className="sign_price">{value.price}</p>
					</div>
				</div>
			)
		})
	}

	render(){
		return (
			<div className="product_tao">
				<PubHeader title={this.props.title} />
				<div className="product_list">
					{this.getDataLine(this.state.storeDataList)}
				</div>
			</div>
		)
	}
	componentDidMount(){
		fetch("/indexList/index")
		.then((response)=>response.json())
		.then((res)=>{
			let dataArr=[];
			let typeId=this.props.typeId;
			for(var i=0;i<res.data.length;i++){
				if((res.data[i].categoryPL)==typeId){
					if(dataArr.length>=2){
						break;
					}else{
						dataArr.push(res.data[i])
					}
				}
			}
			this.setState({
				storeDataList:dataArr
			})
		})
		.catch(function(e){
			alert(e)
		})
	}
	
}
