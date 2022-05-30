let sortBusStop = require('./sortBusStop');
let busAssigned = require('./busAssigned');
let datas = require('../datas/datas');
let line = datas.line;
let vehicle = datas.vehicle;

module.exports = function lineReport(numb) {
    let report = "";
    let passengersIn = 0;
    busStopArray = [];
    sortBusStop(line, numb);
    theBus = '';
    busAssigned(vehicle, numb);
    for (const object of line) {
        if (object.type === 'line' && object.number === numb) {
            busStopArray.forEach(busStopName => {
                lastPassengersIn = passengersIn;
                passengersIn = passengersIn + (busStopName.passengersGetOnBus - busStopName.passengersGetOutBus);
                busStopName.passengersIn = passengersIn;
                if (busStopName.passengersIn < 0) {
                    console.log(
busStopName.name, ` => ERROR ! Incorrect data entry \n
    - ${lastPassengersIn} étaient dans le bus,\n
    - ${busStopName.passengersGetOnBus} sont montés,\n
    - ${busStopName.passengersGetOutBus} sont sorties, \n
Il ne peut y avoir plus de personnes qui descendent, que de personnes qui montent !
                    `);
                    passengersIn = 0;
                }
                report += `${busStopName.name}, ${busStopName.passengersGetOnBus}, ${busStopName.passengersGetOutBus}, ${passengersIn} \n`;
            })
        };
    }
//     console.log(
// `\n Le Rapport de la ligne ${numb}: \n\n`,
// report,
// "\n", `dans cette ligne, le bus affecté est : ${theBus}`,
// "\n\n -----------------------------\n"
//     );
    return report;
}