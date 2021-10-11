const axios = require('axios');

async function queryVideos() {

	try {
		const url = 'http://localhost:8080/api/videos'
		const response = await axios.get(url);
		console.log(response.data.videos)
		return response.data.Videos
	} catch (error) {
		console.error(error);
	}


}

// queryVideos();

export default queryVideos;