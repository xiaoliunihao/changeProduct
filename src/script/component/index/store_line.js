import React,{Component} from "react";
import List from '../../../component_dev/list/src';
import Scroller from '../../../component_dev/scroller/src';
export default class Store_line extends Component{
	render(){
		return (
			<div className="line_img">
				<Scroller extraClass={"yo-scroller-b"} scrollX={true} scrollY={false}>
					<ul>
						<li id="1">
						    <div className="tupian">
						    	<div>
						    		<img src="/img/dan.png" />
						    	</div>
						    </div>
							<span>套西</span>
						</li>
						<li id="2">
						 	<div className="tupian">
						    	<div>
						    		<img src="/img/taoxi.png" />
						    	</div>
						    </div>
							<span>单西</span>
						</li>
						<li id="3">
						 	<div className="tupian">
						    	<div>
						    		<img src="/img/kuzhuang.png" />
						    	</div>
						    </div>
							<span>裤装</span>
						</li>
						<li id="4">
						 	<div className="tupian">
						    	<div>
						    		<img src="/img/dan.png" />
						    	</div>
						    </div>
							<span>大衣</span>
						</li>
						<li id="5">
						 	<div className="tupian">
						    	<div>
						    		<img src="/img/majia.png" />
						    	</div>
						    </div>
							<span>马甲</span>
						</li>
						<li id="6">
						 	<div className="tupian">
						    	<div>
						    		<img src="/img/chen.png" />
						    	</div>
						    </div>
							<span>衬衫</span>
						</li>
						<li id="7">
						 	<div className="tupian">
						    	<div>
						    		<img src="/img/danrongshan.png" />
						    	</div>
						    </div>
							<span>羊绒衫</span>
						</li>
						<li id="8">
						 	<div className="tupian">
						    	<div>
						    		<img src="/img/gehu.png" />
						    	</div>
						    </div>
							<span>个户</span>
						</li>
						<li id="9">
						 	<div className="tupian">
						    	<div>
						    		<img src="/img/xiangbao.png" />
						    	</div>
						    </div>
							<span>箱包</span>
						</li>
						<li id="11">
						 	<div className="tupian">
						    	<div>
						    		<img src="/img/jiafang.png" />
						    	</div>
						    </div>
							<span>家纺</span>
						</li>
					</ul>
				</Scroller>
			</div>
		)
	}
}
