import React,{Component} from "react";
export default class PubHeader extends Component{
	render(){
		return(
			<div className="title_tao" value="1" onclick="click_href(this)">
				<div className="title_header">
					<div className="title_left">
						<div className="sign_img">
							<div className="img_tao">
								<img src="/img/taoSmall.jpg" />
							</div>
						</div>
						<div className="sign_text">
							{this.props.title}
						</div>
					</div>
					<div className="right_btn">
						<a>
							<div>更多</div>
							<div className="yo-ico">&#xf0343;</div>
						</a>
					</div>
				</div>
			</div>
		)
	}
}
