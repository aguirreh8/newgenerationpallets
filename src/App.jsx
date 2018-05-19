import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () =>(
	<Router>
		<Wrapper>
			<Header /> 
			<Route path="/" component={Home} />
			<Route path="/contact" component={Contact} />
			<Footer />
		</Wrapper>
	</Router>
);

export default App;
