'use strict';

const odata = import('odata');

const base = 'http://odata-devci.smartdrivesystems.com/CoreOLTP_CommonEntities';
/*
https://www.npmjs.com/package/odata

 */

class Args {
    constructor(arg) {
        this.ent = arg.ent;
        this.sel = arg.sel;
        this.filter = arg.filter;
        this.top = arg.top;
    }

    get query() {
        let url = this.ent;
        let delim = '?';
        if (this.sel) {
            url += `${delim}$select=${this.sel}`;
            delim = '&'
        }
        if (this.filter) {
            url += `${delim}$filter=${this.filter}`;
            delim = '&'
        }
        if (this.top) {
            url += `${delim}$top=${this.top}`;
        }
        return url;
    }this.filter
}

//let a = new Args({ent: "Site", sel: "a,b"});
let a = new Args({ent: "Site"});
console.log(a.query);


odata().config({
    endpoint: base
});

function read(arg) {
    let url = ent;
    let delim = '?';
    console.log(url);
    odata(url).get((data) => {
            console.log(data);
        }
    );
}

// search is not supported
// function search(ent, q) {
//     let url = `${ent}?$search=${q}`;
//     console.log(url);
//     odata(url).get((data) => {
//             console.log(data);
//         }
//     );
// }

// get('Site', '', 2);

//get('Site', "ContactFirstName eq 'Ramesh'", 3);

//http://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part2-url-conventions/odata-v4.0-errata03-os-part2-url-conventions-complete.html#_Toc444868693
//http://host/service/Customers?$filter=contains(CompanyName,'Alfreds')

// works - case insensitive
//get('Site', '', "contains(ContactFirstName,'Ram')", 3);

//get('Site', 'Id,ContactFirstName,ContactLastName', "contains(ContactFirstName,'Ram')", 3);

//get('Site', "startswith(ContactFirstName,'Ram')", 3);


//search('Site', "Ramesh");

// get('Site');

//filter('Site', 'AddressId eq 25947');

//filter('Site', "ContactFirstName eq 'Ramesh'");


/*

 { Id: 1,
    ParentId: 2,
    CompanyId: 1,
    AddressId: 25947,
    ContactEmailId: 654,
    ContactWorkPhoneId: 4082,
    ContactHomePhoneId: 3537,
    ContactMobilePhoneId: 4628,
    ContactFirstName: 'Ramesh',
    ContactMiddleName: 'K',
    ContactLastName: 'Kasavaraju',
    SiteName: 'Orphan',
    SiteDescription: '',
    IsActive: true,
    CreatedBy: 0,
    CreatedDate: '2007-05-01T00:00:00-07:00',
    ModifiedBy: 0,
    ModifiedDate: '2012-03-17T10:07:20.047-07:00',
    LegacyCorpID: null,
    LegacyCorpDivID: 1,
    TimeZoneId: null,
    ERPAccountNumber: 'SMA0002-0000',
    IsActiveChangedOn: '2011-02-05T09:17:26.713-08:00',
    AdjustDST: true,
    Level: 2,
    EthernetEnabled: false },

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
  FirstHealthMessageDate: null }
*/

