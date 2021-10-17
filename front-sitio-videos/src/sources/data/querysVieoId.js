const axios = require('axios');

async function queryVideoId(id) {

	try {
		const url = 'http://localhost:3000/api/videos/' + id
		const response = await axios.get(url);
		return response.data
	} catch (error) {
		console.error(error);
	}


}

// queryVideoId('616487140e244c1e181dbcec');

export default queryVideoId;