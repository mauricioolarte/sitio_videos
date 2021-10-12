import React from 'react';
import { useParams } from 'react-router-dom'

function SearchVideo() {

	let { id } = useParams();

	return (
		<>

			<h1>search video</h1>


		</>
	)


}

export default SearchVideo;