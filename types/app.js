"use strict";
// https://www.thepolyglotdeveloper.com/2017/03/javascript-libraries-in-a-typescript-application-revisited/
Object.defineProperty(exports, "__esModule", { value: true });
var base64 = require("base-64");
var utf8 = require("utf8");
// import * as Promise from "bluebird";
var str = "Ivo Stoyanov";
var bytes = utf8.encode(str);
var encodedStr = base64.encode(bytes);
console.log(encodedStr);
// npm install @types/base-64 @types/utf8 --save
// npm install @types/request --save
// npm install @types/request-promise --save
var rp = require("request-promise");
//let url = "http://www.google.com";
var url = "http://odata-devci.smartdrivesystems.com/CoreOLTP_CommonEntities/" +
    "Camera(122517)?" +
    "$select=" +
    "Id,CompanyId,SiteId,CurrentCameraStateId," +
    "CameraSN,Model,Description" +
    "&" +
    "$expand=" +
    "CurrentCameraState($select=CameraStateName)," +
    "CameraFirmwareVersion($select=FirmwareVersion)," +
    "Company($select=CompanyName)," +
    "Site($select=IsActive,SiteName,SiteDescription)";
console.log("Reading from " + url);
rp(url)
    .then(function (data) {
    console.log(data);
})
    .catch(function (err) {
    console.log(err);
});
