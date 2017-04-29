import React,{Component} from "react";
import Banner from "./Banner";
import Store_line from "./store_line";
import TwoBox from "./TwoBox";
import StoreTwo from "./storeTwo";
import TwoColumn from "./TwoColumn";
import {Link} from "react-router";
import Scroller from '../../../component_dev/scroller/src';
import Loading,{loading} from '../../../component_dev/loading/src'
export default class Content extends Component{
	constructor(props){
		super(props)
		this.state={
			datalist:[]
		}
	}
	componentWillMount(){
		loading.show({
			text:"小匠正在加载中..."
		})
	}
	render(){
		return(
			<div className="index_content">
				<Scroller 
				extraClass={"yo-scroller-a"} 
				scrollX={false} 
				scrollY={true}
				ref="scroller"
				useLoadMore={true}
				onLoad={()=>{
					if(this.state.datalist.length==0){
						this.setState({
							datalist:[
							<TwoColumn title="推荐·衬衣" typeId="1"/>,
							<TwoColumn title="推荐·裤装" typeId="3"/>,
							<TwoColumn title="推荐·马甲" typeId="5"/>,
							<TwoColumn title="推荐·羊绒衫" typeId="9"/>,
							<TwoColumn title="推荐·箱包" typeId="7"/>,
							<TwoColumn title="推荐·个户" typeId="8"/>,
							<TwoColumn title="推荐·家纺" typeId="11"/>]
						})
						this.refs.scroller.stopLoading(true);
					}else{
						this.refs.scroller.resetLoadStatus(false);
					}
				}}
				>
					<Banner />
					<Store_line />
					<TwoBox />
					<StoreTwo uri="tao_img_src" title="推荐·套西" />
					<StoreTwo uri="dayi_img_src" title="推荐·大衣" />
					{this.state.datalist}
				</Scroller>
			</div>
		)
	}
}