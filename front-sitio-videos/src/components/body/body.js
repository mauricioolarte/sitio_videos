import './body.css'
import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Home from '../pages/home/templateHome';
import ContactPage from '../pages/contact/contact';
import AboutPage from '../pages/about/about';
import SearchVideo from '../pages/search/searchVideo';
import CreateVideo from '../pages/create/createVideo';
import ViewVideo from '../pages/viewVideo/viewVideo';
import EditVideo from '../pages/editVideo/editVideo';
import ErrorPage from '../pages/errorPage/errorPage';


function Body() {
	return (
		<>
			<Router>
				<Container className='body_heigth' fluid>
					<Row>
						<Col sm={3}>
							<ul>
								<li>
									<h4><Link to="/create">Agregar video</Link></h4>
									<div>
									</div>
								</li>
								<li>
									<h4><Link to="/search">Search video</Link></h4>
								</li>
							</ul>
						</Col>
						<Col sm={9}>

							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/create" component={CreateVideo} />
								<Route exact path="/view/:id" component={ViewVideo} />
								<Route exact path="/editVideo/:id" component={EditVideo} />
								<Route exact path="/search" component={SearchVideo} />
								<Route exact path="/contact" component={ContactPage} />
								<Route exact path="/about" component={AboutPage} />
								<Route component={ErrorPage} />
							</Switch>

						</Col>
					</Row>
				</Container>

			</Router>
		</>
	)
}

export default Body;