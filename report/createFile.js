const fs = require('fs');

module.exports = function createFile(fileDatas, fileNmane) {
    let newFileDatas = "Arrêt,Montées,Descentes,Nombre de passagers \n" + fileDatas;
    let path = `${fileNmane}.csv`;
    // fs.writeFileSync(path, newFileDatas);
    fs.writeFile(path, newFileDatas, (error) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log(`file "${fileNmane}" created succesfully !`);
        }
    })
}