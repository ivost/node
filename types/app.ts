
// https://www.thepolyglotdeveloper.com/2017/03/javascript-libraries-in-a-typescript-application-revisited/

import * as base64 from "base-64";
import * as utf8 from "utf8";
// import * as Promise from "bluebird";

var str = "Ivo Stoyanov";
var bytes = utf8.encode(str);
var encodedStr = base64.encode(bytes);
console.log(encodedStr);

 // npm install @types/base-64 @types/utf8 --save

 // npm install @types/request --save
 // npm install @types/request-promise --save

 import * as rp from "request-promise";

//let url = "http://www.google.com";

const url = "http://odata-devci.smartdrivesystems.com/CoreOLTP_CommonEntities/" +
    "Camera(122517)?" +
    "$select=" +
    "Id,CompanyId,SiteId,CurrentCameraStateId," +
    "CameraSN,Model,Description" +
    "&" +
    "$expand=" +
    "CurrentCameraState($select=CameraStateName)," +
    "CameraFirmwareVersion($select=FirmwareVersion)," +
    "Company($select=CompanyName)," +
    "Site($select=IsActive,SiteName,SiteDescription)"
;

console.log("Reading from " + url);

rp(url)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

