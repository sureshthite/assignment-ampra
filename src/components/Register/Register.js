import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';

class Register extends Component {

	handleRegister = () => {
		this.props.history.push('/login');
	}

	render() {
		return (
			<Container>
				<Row className="login-box">
					<Col sm="12" md={{ size: 6, offset: 3 }}>
						<Card>
							<CardBody>
								<h2>Register</h2>
								<br />
								<Form className="form">
									<Col>
										<FormGroup>
											<Label>First Name</Label>
											<Input type="text" name="firstName" />
										</FormGroup>
									</Col>
									<Col>
										<FormGroup>
											<Label>Last Name</Label>
											<Input type="text" name="lastName" />
										</FormGroup>
									</Col>
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
									<Col>
										<FormGroup>
											<Label>Confirm Password</Label>
											<Input type="password" name="password" />
										</FormGroup>
									</Col>
									<br />
									<Button color="primary" onClick={this.handleRegister}>Submit</Button>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Register;