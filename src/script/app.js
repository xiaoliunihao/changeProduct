require("../style/app.scss");
import React from "react"
import ReactDom from "react-dom"
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'
import Index from "./component/Index"
import Index_Content from './component/index/Content'
import Sort from './component/sort/Sort'
import BookValume from './component/book/BookValume'
import Brand from './component/brand/Brand'
import Login from './component/login/Login'
import Book_Success from './component/book/book_success'
import StoreDetail from './component/storeDetail/StoreDetail'
import Register from './component/login/register'
import LoginSuccess from './component/login/LoginSuccess'
import AllList from './component/allBookList/AllList'
import Reduce from './component/reduce/Reduce'
import Address from './component/address/Address'
import ChangePass from './component/changePass/ChangePass'
import DataBody from './component/dataBody/DataBody'
import HiCustom from './component/hiCustom/HiCustom'
import MakeGood from './component/makeGood/MakeGood'
import MyEnter from './component/myEnter/MyEnter'
ReactDom.render(
	<Router history={hashHistory}>
	    <Route path="/" component={Index}>
	      <IndexRedirect to="/content" />
	      <Route path="content" component={Index_Content} />
	      <Route path="sort" component={Sort} />
	      <Route path="brand" component={Brand} />
	      <Route path="login" component={Login} />
	      <Route path="login_success" component={LoginSuccess} />
	    </Route>
	    <Route path="/storeDetail" component={StoreDetail}></Route>
		<Route path="/book_valume" component={BookValume} />
		<Route path="/book_success" component={Book_Success} />
		<Route path="/register" component={Register} />
		<Route path="/allList" component={AllList} />
		<Route path="/reduce" component={Reduce} />
		<Route path="/myEnter" component={MyEnter} />
		<Route path="/address" component={Address} />
		<Route path="/dataBody" component={DataBody} />
		<Route path="/hiCustom" component={HiCustom} />
		<Route path="/makeGood" component={MakeGood} />
		<Route path="/changePass" component={ChangePass} />
	</Router>
	,
	document.getElementById("root")
	)