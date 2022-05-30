let datas = require('../datas/datas');
let line = datas.line;
let saveBusStop = require('./saveBusStop');

module.exports = function updateBusStop(numb, townName, busStopName, time) {
    let folder = {
        type: 'bus stop',
        town: '',
        name: '',
        lineId: 0,
        time: '',
        passengersGetOnBus: 0,
        passengersGetOutBus: 0,
        passengersIn: 0
    };
    saveBusStop(line, numb, folder, townName, busStopName, time)
}