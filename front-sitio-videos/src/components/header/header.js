import React, { useState, useEffect } from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';



function Header() {

	let usuario = ''
	if (localStorage.getItem('usuario')) {
		usuario = JSON.parse(localStorage.getItem('usuario'))

	} else {
		usuario = { nombre: '' }
	}
	const [nombre, setNombre] = useState(usuario.nombre);


	useEffect(() => {
		if (localStorage.getItem('usuario') && nombre === '') {
			const usuario = JSON.parse(localStorage.getItem('usuario'))
			setNombre(usuario.nombre)
		}

	}, [nombre])

	function handleLogout() {
		localStorage.removeItem('usuario')
		setNombre('')
	}

	return (


		<>
			<Navbar bg="light" expand="lg" className="m-1 pl-4">
				<Navbar.Brand href="#">Videos - Project</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="mr-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
					</Nav>
					<nav className="ms-auto">
						{
							!localStorage.getItem('usuario') ? (<>
								<Button variant="outline-success" style={{ width: '6rem' }} className="m-1"><a href="/login"> login</a></Button>
								<Button variant="outline-success" style={{ width: '6rem' }} className="m-1"><a href="/register"> Register</a>  </Button>
							</>) : (<>
								<p>{nombre}</p>
								<Button variant="outline-success" style={{ width: '6rem' }} className="m-1" onClick={handleLogout}>Logout</Button>
							</>)
						}

					</nav>


				</Navbar.Collapse>
			</Navbar>
		</>



	)
}

export default Header;