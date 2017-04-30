import React,{Component} from "react";

import BrandList from "./BrandList";

import Scroller from '../../../component_dev/scroller/src'
import Loading,{loading} from '../../../component_dev/loading/src'
export default class Brand extends Component{
	componentWillMount(){
		loading.show({
			text:"小匠正在加载中..."
		})
	}
	render(){
		return(
			<div className="m-brand">
				<Scroller 
				scrollX={false} 
				scrollY={true}
				extraClass="yo-scroller-abc">
						<div className="brandFabric">
							<img src="http://www.fanjiangdz.com/weixin/newpublic/images/wxmater01.jpg"/>
						</div>
						<BrandList />
				</Scroller>
			</div>
		)
	}
	
}