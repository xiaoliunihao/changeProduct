import React,{Component} from "react";
import Sort_List from "./Sort_List";
import TopLine from "./topLine";
import Scroller from '../../../component_dev/scroller/src';
import Loading,{loading} from '../../../component_dev/loading/src';
export default class Sort extends Component{
	constructor(props){
		super(props)
		this.state={
			currPage:1,
			newFirstData:[],
			TypeIdData:[],
			TypeId:1
		}
	}
	componentWillMount(){
		loading.show({
			text:"小匠正在加载中..."
		})
	}
	getTyidValue(data){
		this.setState({
			currPage:1,
			TypeId:data.TypeId
		})
		fetch("/sortdata/products/category/ajaxselect?id="+data.TypeId+"&currPage=1")
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				TypeIdData:res.data
			})
			loading.hide();
		})
		.catch(function(e){
			alert(e)
		})
		
	}
	render(){
		
		return(
			<div className="m-sort">
				<Scroller 
				ref="scroller"
				extraClass="yo-scroller-c"
				scrollX={false} 
				scrollY={true}
				useLoadMore={true}
	            onLoad={()=>{
	              	var TypeId=localStorage.getItem("TypeId");
	              	this.state.currPage++;
		            fetch("/sortdata/products/category/ajaxselect?id="+TypeId+"&currPage="+this.state.currPage)
		                .then((response)=>response.json())
		                .then((res)=>{
		                if (res.data.length > 0) {
		                    this.setState({
		                      TypeIdData: this.state.TypeIdData.concat(res.data)
		                    })
		                    this.refs.scroller.stopLoading(true);
		                } else {
		                    this.refs.scroller.resetLoadStatus(false);
		                }
		            })
	            }}
				>
					<TopLine onFatherLi={this.getTyidValue.bind(this)}/>
					<Sort_List TypeIdData={this.state.TypeIdData} />
				</Scroller>
			</div>
		)
	}
	componentDidMount(){
		fetch("/sortdata/products/category/ajaxselect?id=1&currPage=1")
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				TypeIdData:res.data
			})
			loading.hide()
		})
		.catch(function(e){
			alert(e)
		})
	}
	
}