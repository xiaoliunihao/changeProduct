import React,{Component} from "react";
import Scroller from '../../../component_dev/scroller/src';
import List from '../../../component_dev/list/src';
import Loading,{loading} from '../../../component_dev/loading/src'
export default class Sort_List extends Component{
	constructor(props){
		super(props)
		this.state={
			sortDataList:[{}]
		}
	}

	isEmptyObject(e) {
	    var t;
	    for (t in e)
	        return !1;
	    return !0
	  }
	render(){
		if(this.props.TypeIdData.length!=0){
			this.state.sortDataList=this.props.TypeIdData;
		}
		return(
			<div className="products_type">
				<ul id="product_box">
					<List
					ref="list"
					dataSource={this.state.sortDataList}
					renderItem={(value,i)=>{
						if(!this.isEmptyObject(value)){
					        return (
					            <li className="pro_img_box">
							        <div className="product_img">
							            <img height="218" src={"http://www.fanjiangdz.com/image/"+value.filepath} />
							        </div>
							        <div className="product_intro">
							           <span>{value.name}</span>
							           <span>{value.categoryPLName}</span>
							        </div>
							        <div className="product_sign">{value.manufacturer}</div>
							        <div className="product_price">{value.price}.00</div>
							    </li>
					        )
					    }
				    }}
					>
				    	
				    </List>
				</ul>
			</div>
		)
	}
	
}