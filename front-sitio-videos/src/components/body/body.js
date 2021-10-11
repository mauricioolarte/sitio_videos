import './body.css'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Home from '../home/templateHome';


function Body() {
	return (
		<>
			<Container className='body_heigth' fluid>
				<Row>
					<Col sm={3}>
						<ul>
							<li>
								<h4>Agregar video</h4>
								<div>


								</div>
							</li>
							<li>
								<h4>Modificar video</h4>
							</li>
							<li>
								<h4>settings</h4>
							</li>
						</ul>



					</Col>
					<Col sm={9}>
						<Home></Home>


					</Col>

				</Row>




			</Container>


		</>
	)
}

export default Body;