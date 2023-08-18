console.log('This is a popup!');

// var port = chrome.runtime.connectNative('com.holon.chrome_native_messenger');

// port.onMessage.addListener(function(msg) {
//     console.log(msg);
// });

const message = {
	"Encrypted": false,
	"EventType": "Scan",
	"Sensor": "Browser",
	"Payload": [
		{
			"Patient Name": "Medicare 1 Test",
			"MRN": "26235",
			"Date Of Birth": "05/01/1975",
			"Gender": "F",
			"Payers": [
				{
					"active": true,
					"claimNumber": "",
					"groupNumber": "",
					"insuranceType": "",
					"name": "MEDICARE-GA (MEDICARE)",
					"policyNumber": "3AY1GD6KF11",
					"startDate": "",
					"phone": "(877) 567-7271",
					"street1": "PO BOX 100306",
					"street2": "",
					"city": "COLUMBIA",
					"state": "SC",
					"zip": "29202-3306"
				},
				{
					"active": true,
					"claimNumber": "",
					"groupNumber": "",
					"insuranceType": "",
					"name": "MEDICAID-MA - ACO - COMMUNITY CARE COOPERATIVE (MEDICAID)",
					"policyNumber": "33234423",
					"startDate": "",
					"phone": "(800) 841-2900",
					"street1": "PO BOX 120010",
					"street2": "",
					"city": "BOSTON",
					"state": "MA",
					"zip": "02112-0010"
				},
				{
					"active": false,
					"claimNumber": "",
					"groupNumber": "",
					"insuranceType": "",
					"name": "ALIGNED COMMUNITY PHYSICIANS - AETNA (MEDICARE REPLACEMENT/ADVANTAGE - HMO)",
					"policyNumber": "R332551",
					"startDate": "",
					"phone": "(888) 975-3246",
					"street1": "PO BOX 8330",
					"street2": "",
					"city": "LA VERNE",
					"state": "CA",
					"zip": "91750-8330"
				}
			],
			"ConfigName": "AthenaNet",
			"ConfigVersion": "",
			"firstName": "Medicare 1",
			"lastName": "Test"
		}
	]
};
const message1 = {"text":"test1"};
const message2 = {"text":"test2"};

chrome.runtime.sendNativeMessage('com.holon.chrome_native_messenger',message1);
chrome.runtime.sendNativeMessage('com.holon.chrome_native_messenger',message2);
chrome.runtime.sendNativeMessage('com.holon.chrome_native_messenger',message);

//port.postMessage(message1);
//port.postMessage(message2);
//port.postMessage(message);