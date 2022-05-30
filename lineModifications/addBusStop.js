let datas = require('../datas/datas');
let line = datas.line;

module.exports = function addBusStop(numb, townName, busStopName, time) {
    let form = {
        type: 'town',
        name: '',
        folder: []
    };
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
    for (const object of line) {
        if (object.type === 'line' && object.number === numb) {
            form['name'] = townName,
            folder['town'] = townName,
            folder['name'] = busStopName,
            folder['lineId'] = `line ${numb}`,
            folder['time'] = time,
            form['folder'] = [folder],
            object.folder.push(form)
        }
    }
}