
// https://www.thepolyglotdeveloper.com/2017/03/javascript-libraries-in-a-typescript-application-revisited/

 // npm install @types/request --save
 // npm install @types/request-promise --save

 import * as rp from "request-promise";

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

