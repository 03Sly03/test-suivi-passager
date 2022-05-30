module.exports = function saveBusStop(line, numb, folder, townName, busStopName, time) {
    for (const object of line) {
        if (object.type === 'town') {
            if (object.name === townName) {
                folder['town'] = townName,
                folder['name'] = busStopName,
                folder['lineId'] = `line ${numb}`,
                folder['time'] = time,
                object.folder.push(folder);
            }
        } else {
            saveBusStop(object.folder, numb, folder, townName, busStopName, time);
        }
    }
}