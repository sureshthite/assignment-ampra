import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Dashboard from '../Dashboard/Dashboard';
import Brand from '../../static/images/logo.jpg';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		}
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		let { isOpen } = this.state;
		return (
			<Router>
				<Navbar color="dark" dark expand="md" className="ml-auto">
					<Link to="/" className="navbar-brand"><img src={Brand} width="50" alt="Ampra Solutions" /></Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link className="nav-link" to="/">Home</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="/">About Us</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="/">Contact Us</Link>
							</NavItem>
							<NavItem>
								<Link className="nav-link" to="/login">Login</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>

				<Switch>
					<Route exact path='/' component={Home} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</Router>
		);
	}
}

export default Header;