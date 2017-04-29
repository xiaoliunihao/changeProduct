import React,{Component} from "react";
import Carousel from "../../../component_dev/carousel/src/index";
import Loading,{loading} from '../../../component_dev/loading/src'
export default class Banner extends Component{
	constructor(props){
		super(props)
		this.state={
			banner_img:[]
		}
	}
	getImg_src(list){
		return list.length>0?list.map((value,index)=>{
			return(
				<li className="item"><img className="img" src={value} /></li> 
			)
		}):[<div />];
	}
	render(){
		return (
			<Carousel extraClass="yo-carousel-a">
			     {this.getImg_src(this.state.banner_img)}
			</Carousel>
		)
	}
	componentDidMount(){
		fetch("/indexList/index_banner")
		.then((response)=>response.json())
		.then((res)=>{
			var banner_src=res.src;
			this.setState({
				banner_img:banner_src
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
