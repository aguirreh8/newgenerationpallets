import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () =>(
	<Router>
		<Wrapper>
			<Header />
			<Hero />
			<Switch> 
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact} />
			</Switch>
			<Footer />
		</Wrapper>
	</Router>
);

export default App;
