get_cdrs = function (dptr = null, arvl = null) {
	var result = [];
	var reg_tmp;

	// Format arvl
	if (typeof arvl === 'string' || arvl instanceof String) {
		if (arvl.length == 4) { arvl = arvl.substring(1,4); }
		if (arvl.length != 3) { arvl = null; }
	} else { arvl = null; }

	// Format dptr
	if (typeof dptr === 'string' || dptr instanceof String) {
		if (dptr.length == 4) { dptr = dptr.substring(1,4); }
		if (dptr.length != 3) { dptr = null; }
	} else { dptr = null; }

	// set regex
	if (arvl == null) {
		if (dptr == null) { return null; }
		else { reg_tmp = new RegExp("([A-Z]{3}" + dptr + "[A-Z\\d]{2})\\\\t([CK][A-Z]{3})\\\\t([CK][A-Z]{3})\\\\t[^\\\\]*\\\\t([^\\\\]*)\\\\t[^\\\\]*\\\\t[^\\\\]*\\\\t[^\\\\]*\\\\t([YN]*)\\\\t([^\\\\]*)\\\\t([\\d]*)\\\\n"); }
	} else {
		if (dptr == null) { reg_tmp = new RegExp("(" + arvl + "[A-Z\\d]{5})\\\\t([CK][A-Z]{3})\\\\t([CK][A-Z]{3})\\\\t[^\\\\]*\\\\t([^\\\\]*)\\\\t[^\\\\]*\\\\t[^\\\\]*\\\\t[^\\\\]*\\\\t([YN]*)\\\\t([^\\\\]*)\\\\t([\\d]*)\\\\n");
		} else { reg_tmp = new RegExp("(" + arvl + dptr + "[A-Z\\d]{2})\\\\t([CK][A-Z]{3})\\\\t([CK][A-Z]{3})\\\\t[^\\\\]*\\\\t([^\\\\]*)\\\\t[^\\\\]*\\\\t[^\\\\]*\\\\t[^\\\\]*\\\\t([YN]*)\\\\t([^\\\\]*)\\\\t([\\d]*)\\\\n"); }
	}
}

var reg_tmp = new RegExp("([A-Z]{8})\\\\t");
console.log(reg_tmp.test($("#outbound").val()));
while(null != (z = reg_tmp.exec($("#outbound").val()))) {
	//console.log(z);	
}
