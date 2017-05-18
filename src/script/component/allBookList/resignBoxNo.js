import React,{Component} from "react";
export default class ResignBoxNo extends Component{
	constructor(props){
		super(props)
		this.state={
			ResignDataNo:[{}]
		}
	}
	getResignDataNo(list){
		return list.map((value,index)=>{
			return(
				<div className="makeListExample1">
				   <div className="list_detail">
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
					<div className="list_paygo">
						<div className="list_paygo_left">
							<span className="list_paygo_moneyTxt">订单金额:</span>
							<span className="list_paygo_money">{value.money}</span>
						</div>	
						<div className="list_paygo_right">
							<span className="detail_small">订单详情</span>
							<span className="confir_small">确认付款</span>
						</div>	
					</div>
				</div>
			)
		})
	}
	render(){
		this.state.ResignDataNo=this.props.dataResignNo
		return(
			<div>
				{this.getResignDataNo(this.state.ResignDataNo)}
			</div>
			
		)
	}
}