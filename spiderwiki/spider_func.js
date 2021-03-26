var ucfirst = function (str) {
	return str.toLowerCase().replace(/^\w/, c => c.toUpperCase());
}

String.prototype.ucfirst = function () {
	return this.toLowerCase().replace(/^\w/, c => c.toUpperCase());
}

Array.prototype.unique = function() {
	return this.filter(function (value, index, self) {
			return self.indexOf(value) === index;
		});
}

String.prototype.replaceAll = function(str1 = "", str2 = "") {
	var net = 0;
	var result = this;
	while (result.includes(str1) && net < 200) {
		result = result.replace(str1, str2);
		net++;
	}
	return result;
}

String.prototype.contains = function(valueToFind, fromIndex = null) {
	console.log('WARNING: Use "INCLUDES" instead of "CONTAINS"');
	if (fromIndex === null) {
		return this.includes(valueToFind);
	}
	return this.includes(valueToFind, fromIndex);
}

function sanitize_custom(str = "") {
	return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
