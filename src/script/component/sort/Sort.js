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
			TypeId:1,
			selectValue:true
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
			TypeId:data.TypeId,
			selectValue:true
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
	            	var TypeId;
	            	if(this.props.location.query.TypeId!=undefined){
						TypeId=this.props.location.query.TypeId;
					}else{
						TypeId=localStorage.getItem("TypeId");
					}
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
		                    this.refs.scroller.resetLoadStatus(true)
		                     
		                }    
		            })
	            }}
				>
					<TopLine queryId={this.props.location.query.TypeId!="undefined"?this.props.location.query.TypeId:1} onFatherLi={this.getTyidValue.bind(this)}/>
					<Sort_List TypeIdData={this.state.TypeIdData} />
				</Scroller>
			</div>
		)
	}
	componentDidMount(){
		if(this.props.location.query.TypeId!=undefined){
			var TypeId=this.props.location.query.TypeId;
		}else{
			var TypeId=1;
		}
		fetch("/sortdata/products/category/ajaxselect?id="+TypeId+"&currPage=1")
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