const axios = require("axios");

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=710a393104e85f40bd61c2987e18382b`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}