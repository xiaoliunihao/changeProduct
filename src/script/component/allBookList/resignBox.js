import React,{Component} from "react";
export default class ResignBox extends Component{
	constructor(props){
		super(props)
		this.state={
			ResignDataList:[{}]
		}
	}
	getResignDataLine(list){
		return list.map((value,index)=>{
			return(
				<div className="makeListExample">
					<div className="list_detail_header">
						<span className="list_ordernumber">订单编号:</span>
						<span className="list_number">{value.orderList}</span>
						<span className="list_as">{value.appointment}</span>
					</div>
					<div className="list_detail_content">
						<div className="list_line">
							<span className="list_line_name">{value.name}</span>
							<span className="list_line_tel">{value.tel_phone}</span>
						</div>
						<div className="detail_address">
							{value.address}
						</div>
						<div className="order_time">
							<div className="order_time_left">订单时间:</div>
							<div className="order_time_right">{value.order_time}</div>
						</div>
					</div>
				</div>
			)
		})
	}
	render(){
		this.state.ResignDataList=this.props.dataResign
		return(
			<div>
				{this.getResignDataLine(this.state.ResignDataList)}
			</div>
		)
	}
}