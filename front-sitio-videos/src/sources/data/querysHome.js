const axios = require('axios');

async function queryVideos() {

	try {
		const url = 'http://localhost:3000/api/videos'
		const response = await axios.get(url);
		return response.data.Videos
	} catch (error) {
		console.error(error);
	}


}

// queryVideos();

export default queryVideos;