module.exports = function busAssigned(vehicle, lineNumber) {
    for (object of vehicle) {

        if (object.type === 'bus') {
            if (object.affectation === `line ${lineNumber}`) {
                theBus = object.name
            }
        } else {
            busAssigned(object.folder, lineNumber);
        }
    }
}