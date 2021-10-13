import React from 'react';
import { useParams } from 'react-router-dom'

function EditVideo() {
	let { id } = useParams();
	return (
		<>

			<h1 className="mt-3 text-center">view video</h1>


		</>
	)


}

export default EditVideo;