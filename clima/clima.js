const axios = require('axios');

const getClima = async(lat, lng) => {
	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=37b8e754209a554a1387a08777a7d472&units=metric`);

	return resp.data.main.temp;
}

module.exports = {
	getClima
}