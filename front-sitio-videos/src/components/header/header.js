import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



function Header() {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#">Videos - Project</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="mr-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="#action1">Home</Nav.Link>
						<Nav.Link href="#action2">About</Nav.Link>

						<Nav.Link href="#" disabled>
							Contacto
      			</Nav.Link>
					</Nav>
					<Form className="d-flex ms-auto">
						<FormControl
							type="search"
							placeholder="Search"
							className="mr-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</>



	)
}


export default Header;