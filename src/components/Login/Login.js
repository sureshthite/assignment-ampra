import React, { Component } from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";

class Login extends Component {

	handleLogin = () => {
		this.props.history.push('/dashboard');
	}

	render() {
		return (
			<Container>
				<Row className="login-box">
					<Col sm="12" md={{ size: 6, offset: 3 }}>
						<Card>
							<CardBody>
								<h2>Log In</h2>
								<br />
								<Form className="form">
									<Col>
										<FormGroup>
											<Label>Email</Label>
											<Input type="email" name="email" />
										</FormGroup>
									</Col>
									<Col>
										<FormGroup>
											<Label>Password</Label>
											<Input type="password" name="password" />
										</FormGroup>
									</Col>
									<br />
									<Button color="primary" onClick={this.handleLogin}>Submit</Button>
									<Link to="/" className="forgot-text" style={{ textDecoration: "none" }}>Forgot Password?</Link>
								</Form>
								<br />
								Don't have a account? <Link to="/register" className="register-text" style={{ textDecoration: "none" }}>click here</Link>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Login;