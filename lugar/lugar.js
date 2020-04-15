const axios = require('axios');

const getLugarLatLng = async(dir) => {
	const encodedURL = encodeURI(dir);

	const instance = axios.create({
	  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
	  headers: {'x-rapidapi-key': 'f029988454msh4979b8cc44d507bp166923jsn06e55e55e004'}
	});

	const resp = await instance.get();

	if(resp.data.Results.length == 0){
		throw new Error (`No hay resultados para la dirección ${direccion}`);
	}

	const data = resp.data.Results[0];
	const direccion = data.name;
	const lat = data.lat;
	const lng = data.lon;

	return {
		direccion, lat, lng
	}
}

module.exports = {
	getLugarLatLng
}
