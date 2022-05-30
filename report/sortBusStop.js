module.exports = function sortBusStop(line, numb) {
    for (object of line) {
        if (object.type === 'bus stop') {
            if (object.lineId === `line ${numb}`) {
                busStopArray.push(object);
                busStopArray.sort(function (a, b) {
                    return new Date('1970/01/01 ' + a.time) - new Date('1970/01/01 ' + b.time);
                });
            }
        } else {
            sortBusStop(object.folder, numb);
        }
    }
}
