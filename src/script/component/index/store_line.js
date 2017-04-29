import React,{Component} from "react";
import List from '../../../component_dev/list/src';
import Scroller from '../../../component_dev/scroller/src';
import {Link} from "react-router";
export default class Store_line extends Component{
	render(){
		return (
			<div className="line_img">
				<Scroller extraClass={"yo-scroller-b"} scrollX={true} scrollY={false}>
					<ul>
						<li id="1">
							<Link to="/sort?TypeId=1">
							    <div className="tupian">
							    	<div>
							    		<img src="/img/dan.png" />
							    	</div>
							    </div>
								<span>套西</span>
							</Link>
						</li>
						<li id="2">
							<Link to="/sort?TypeId=2">
							 	<div className="tupian">
							    	<div>
							    		<img src="/img/taoxi.png" />
							    	</div>
							    </div>
								<span>单西</span>
							</Link>
						</li>
						<li id="3">
							<Link to="/sort?TypeId=3">
							 	<div className="tupian">
							    	<div>
							    		<img src="/img/kuzhuang.png" />
							    	</div>
							    </div>
								<span>裤装</span>
							</Link>
						</li>
						<li id="4">
							<Link to="/sort?TypeId=4">
							 	<div className="tupian">
							    	<div>
							    		<img src="/img/dan.png" />
							    	</div>
							    </div>
								<span>大衣</span>
							</Link>
						</li>
						<li id="5">
							<Link to="/sort?TypeId=5">
							 	<div className="tupian">
							    	<div>
							    		<img src="/img/majia.png" />
							    	</div>
							    </div>
								<span>马甲</span>
							</Link>
						</li>
						<li id="6">
							<Link to="/sort?TypeId=6">
							 	<div className="tupian">
							    	<div>
							    		<img src="/img/chen.png" />
							    	</div>
							    </div>
								<span>衬衫</span>
							</Link>
						</li>
						<li id="9">
							<Link to="/sort?TypeId=9">
							 	<div className="tupian">
							    	<div>
							    		<img src="/img/danrongshan.png" />
							    	</div>
							    </div>
								<span>羊绒衫</span>
							</Link>
						</li>
						<li id="8">
							<Link to="/sort?TypeId=8">
							 	<div className="tupian">
							    	<div>
							    		<img src="/img/gehu.png" />
							    	</div>
							    </div>
								<span>个户</span>
							</Link>
						</li>
						<li id="7">
							<Link to="/sort?TypeId=7">
							 	<div className="tupian">
							    	<div>
							    		<img src="/img/xiangbao.png" />
							    	</div>
							    </div>
								<span>箱包</span>
							</Link>
							</li>
						<li id="11">
							<Link to="/sort?TypeId=11">
							 	<div className="tupian">
							    	<div>
							    		<img src="/img/jiafang.png" />
							    	</div>
							    </div>
								<span>家纺</span>
							</Link>
						</li>
					</ul>
				</Scroller>
			</div>
		)
	}
}
