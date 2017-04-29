import React,{Component} from "react";

import BrandList from "./BrandList";

import Scroller from '../../../component_dev/scroller/src'


export default class Brand extends Component{
	render(){
		return(
			<div className="m-brand">
				<Scroller extraClass="yo-scroller-abc">
						<div className="brandFabric">
							<img src="http://www.fanjiangdz.com/weixin/newpublic/images/wxmater01.jpg"/>
						</div>
						<BrandList />
				</Scroller>
			</div>
		)
	}
}