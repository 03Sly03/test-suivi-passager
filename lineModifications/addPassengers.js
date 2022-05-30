let datas = require('../datas/datas');
let line = datas.line;

module.exports = function addPassengers(name, getOn, getOut) {
    for (const object of line) {
        object.folder.forEach(townName => {
            townName.folder.forEach(busStopName => {
                if (name === busStopName.name && getOn && getOut) {
                    busStopName.passengersGetOnBus = getOn;
                    busStopName.passengersGetOutBus = getOut;
                } else if (name === busStopName.name && getOut) {
                    busStopName.passengersGetOutBus = getOut;
                } else if (name === busStopName.name && getOn) {
                    busStopName.passengersGetOnBus = getOn;
                }
            });
        })
    }
}
