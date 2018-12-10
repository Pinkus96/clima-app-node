//const axios = require("axios");
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Direccion de la ciudad para ontener el clima",
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));*/

getInfor(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));





/*let encodeUrl = encodeURI(argv.direccion)

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    .then(resp => {

        let location = resp.data.results[0];
        let coors = location.geometry.location;

        console.log(`Direccion: ${location.formatted_address}`);
        console.log(`Latitud: ${coors.lat}`);
        console.log(`Longitud: ${coors.lng}`);
        //console.log(resp.data);
        //console.log(resp.status);
    })
    .catch(e => console.log("ERROR!!! ", e));*/