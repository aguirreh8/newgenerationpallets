import React from "react";
import "./Header.css";

const Header = () => (
	<nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{paddingRight: "80px", paddingLeft: "80px"}}>
		<span className="navbar-brand">New Generation Pallets Inc</span>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
			<ul className="navbar-nav">
				<li className="nav-item">
					<a className="site-link" href="/">Home</a>
				</li>
				<li className="nav-item">
					<a className="site-link" href="/products">Products</a>
				</li>
				<li className="nav-item">
					<a className="site-link" href="/contact">Contact</a>
				</li>
			</ul>
		</div>
	</nav>
)

export default Header;