exports.insertNasLocationData = function (db) {
    'use strict';
    var DataStore = require('nedb'),
        uuidUtils = require('../../javascript/utils/uuid-utils').uuidUtils;

    db.nasLocations = new DataStore();
    db.nasLocations.ensureIndex({ fieldName: 'id', unique: true, sparse: true });

    db.nasLocations.insert({ id: uuidUtils.generate(), computerName: "serverZero", serverIp: "192.11.03.2", shareName: "shared" });
    db.nasLocations.insert({ id: uuidUtils.generate(), computerName: "Super Server", serverIp: "203.0.113.254", shareName: "dev001" });
    db.nasLocations.insert({ id: uuidUtils.generate(), computerName: "Operator", serverIp: "22.231.113.64", shareName: "sys111" });
    db.nasLocations.insert({ id: uuidUtils.generate(), computerName: "No Signature", serverIp: "194.66.82.11.", shareName: "rfcW" });
    db.nasLocations.insert({ id: uuidUtils.generate(), computerName: "Neo Zero", serverIp: " 203.0.113.0/24", shareName: "drive-01" });
    db.nasLocations.insert({ id: uuidUtils.generate(), computerName: "ProtoServer", serverIp: "198.44.103.5", shareName: "drive-aa" });
    db.nasLocations.insert({ id: uuidUtils.generate(), computerName: "consult01", serverIp: "11.22.103.5", shareName: "utils" });
    db.nasLocations.insert({ id: uuidUtils.generate(), computerName: "56 zero four", serverIp: "204.17.5.128", shareName: "utils-01" });
    db.nasLocations.insert({ id: uuidUtils.generate(), computerName: "ZuluSix", serverIp: "204.17.5.192", shareName: "utils-02" });
    db.nasLocations.insert({ id: uuidUtils.generate(), computerName: "S2SysServices", serverIp: "192.17.5.20", shareName: "beta-share" });
    db.nasLocations.insert({ id: uuidUtils.generate(), computerName: "twentyScore", serverIp: "216.27.61.137", shareName: "ff" });
    db.nasLocations.insert({ id: uuidUtils.generate(), computerName: "buckTwenty", serverIp: "216.11.61.137", shareName: "peco-sec" });
};