
// olingo / apache odatajs
// https://github.com/ODataOrg/home-samples/blob/master/snippets/olingo-odata-client-for-javascript.md
const odatajs = require('odatajs');

const url = 'http://odata-devci.smartdrivesystems.com/CoreOLTP_CommonEntities/' +
    'Camera(122517)?' +
    '$select=' +
    'Id,CompanyId,SiteId,CurrentCameraStateId,' +
    'CameraSN,Model,Description' +
    '&' +
    '$expand=' +
    'CurrentCameraState($select=CameraStateName),' +
    'CameraFirmwareVersion($select=FirmwareVersion),' +
    'Company($select=CompanyName),' +
    'Site($select=IsActive,SiteName,SiteDescription)'
;

//const url = 'http://odata-devci.smartdrivesystems.com/CoreOLTP_CommonEntities/Camera(122517)?$expand=CameraFirmwareVersion,CurrentCameraState';
// http://odata-devci.smartdrivesystems.com/CoreOLTP_CommonEntities/Camera(122517)?$expand=CameraFirmwareVersion,CurrentCameraState

/*
http://services.odata.org/V4/Northwind/Northwind.svc/Customers
?$select=CustomerID&$expand=Orders($select=OrderID;$expand=Order_Details($select=UnitPrice))
 */

const odata = odatajs.oData; 

/*
<static> read(urlOrRequest, success, error, handler, httpClient, metadata)
Reads data from the specified URL.
 */
odata.read(url, (res) => {
  	console.log(res);
  }, (err) => {
        console.error(err.response.body);
    }
);

/*

const url = 'http://odata-devci.smartdrivesystems.com/CoreOLTP_CommonEntities/' +
    'Camera(122517)?' +
    '$select=' +
    'Id,CompanyId,SiteId,CurrentCameraStateId,' +
    'CameraSN,Model,Description' +
    '&' +
    '$expand=' +
    'CurrentCameraState($select=CameraStateName),' +
    'CameraFirmwareVersion($select=FirmwareVersion),' +
    'Company($select=CompanyName),' +
    'Site($select=IsActive,SiteName,SiteDescription)'



{ '@odata.context': 'http://odata-devci.smartdrivesystems.com/CoreOLTP_CommonEntities/$metadata#Camera(Id,CompanyId,SiteId,CurrentCameraStateId,CameraSN,Model,Description,CurrentCameraState(CameraStateName),CameraFirmwareVersion(FirmwareVersion),Company(CompanyName),Site(IsActive,SiteName,SiteDescription))/$entity',
  Id: 122517,
  CompanyId: 1,
  SiteId: 1,
  CurrentCameraStateId: 2,
  CameraSN: 'LCGCB201',
  Model: 'SR4',
  Description: null,
  CurrentCameraState: { CameraStateName: 'Inventory' },
  CameraFirmwareVersion: { FirmwareVersion: '4.00.00' },
  Company: { CompanyName: 'SmartDrive' },
  Site: { IsActive: true, SiteName: 'Orphan', SiteDescription: '' } }



//var serviceRoot = "http://services.odata.org/V4/TripPinServiceRW/";
// http://services.odata.org/V4/(S(ckeyheuipbtyxyq1vlgfdno3))/TripPinServiceRW/

var serviceRoot = "http://services.odata.org/V4/(S(ckeyheuipbtyxyq1vlgfdno3))/TripPinServiceRW/";

var headers = { "Content-Type": "application/json", Accept: "application/json" };
var request = {
    requestUri: serviceRoot + "People?$top=2&$filter=Trips/any(d:d/Budget gt 3000)",
    method: "GET",
    headers: headers,
    data: null
};

odatajs.oData.request(
    request,
    function (data, response) {
        var filtedPeople = data.value;
        var FirstName = filtedPeople[0].FirstName;
        console.log("FirstName: " + FirstName);
    },
    function (err) {
        console.log("Fail: ", err);
    }
);
*/

/*

{ '@odata.context': 'http://odata-devci.smartdrivesystems.com/CoreOLTP_CommonEntities/$metadata#Camera/$entity',
  Id: 122517,
  CompanyId: 1,
  SiteId: 1,
  CurrentCameraStateId: 2,
  CameraSN: 'LCGCB201',
  Model: 'SR4',
  DateManufactured: '2016-03-16T00:00:00-07:00',
  LastStateTransitionHistoryId: 987929,
  Description: null,
  CreatedBy: 394862,
  CreatedDate: '2017-08-08T12:31:21-07:00',
  ModifiedBy: 394862,
  ModifiedDate: '2017-08-08T12:31:21-07:00',
  LegacySmartDriveUnitID: null,
  UseFlippedVideo: false,
  SIMNumber: '',
  CameraFirmwareVersionId: 325,
  ECUVinNo: null,
  CellularId: null,
  SubscriptionId: null,
  ActualSetpointIteration: null,
  SetpointsChanged: false,
  CameraRemoteIP: null,
  CameraInstallationTypeId: 1,
  CameraConfigurationStatusId: 1,
  CameraConfigurationStatusModifiedDate: null,
  FirstHealthMessageDate: null,
  CameraFirmwareVersion:
   { Id: 325,
     FirmwareVersion: '4.00.00',
     CameraHardwareVersionId: 6,
     IsSupported: true },
  CurrentCameraState: { Id: 2, CameraStateName: 'Inventory', CameraStateOrder: 8 } }

*/

