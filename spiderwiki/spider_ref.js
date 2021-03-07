<script>
	function parse_auth (str) {
		var result = [];
		var z = str.split(/[\&\,]+/);
		if (z.length <= 6) {
			for (var i = 0; i < z.length; i++) {
				result[((i % 2 == 1) ? 'first' : 'last') + ((z.length > 2) ? (Math.floor(i/2)+1) : "")] = z[i].trim();
			}
		} else {
			// et al
			result['last1'] = z[0].trim();
			result['first1'] = z[1].trim();
			result['display-authors'] = "etal";
		}
		return result;
	}

	function parse_ref (src) {
		var result = [];
		var reg1 = /([^\(]+)\([^\d]*(\d{4})[^\)]*\)[^a-zA-Z]*([^\.]+)\.([\S\s]*)/g;
		var x1;
		var dx;
		if (x1 = reg1.exec(src)) {
			result = parse_auth(x1[1]);
			result['year'] = x1[2].trim();
			result['title'] = x1[3].trim();

			// DOI
			var doi_reg = /doi\:([^\s]+)\s*/g;
			if (dx = doi_reg.exec(x1[4])) {
				result['doi'] = dx[1].trim();
			}

			if (x1[4].includes("In:")) {
				// TODO
				console.log("in");
			} else {
				// Average citation
				ac_reg = /(\d+)\((\d+)\)\s*\:\s*(\d+\s*\-*\s*\d*)/g;
				if (dx = ac_reg.exec(x1[4])) {
					result['volume'] = dx[1].trim();
					result['issue'] = dx[2].trim();
					result["page" + ((dx[3].includes("-")) ? "" : "s")] = dx[3].trim().replace("-", "–");
				}
			}
		}
		return result;
	}
</script>
