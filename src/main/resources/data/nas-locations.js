exports.insertNasLocations = function (db) {
    'use strict';

    db.insert({ id:1, computerName: "serverZero", serverIp: "192.11.03.2", shareName: "shared" });
    db.insert({ id:2, computerName: "serverZero", serverIp: "192.11.03.2", shareName: "shared" });
};