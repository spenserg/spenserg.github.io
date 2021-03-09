<script>
	function parse_gen (str) {
		var result = {};
		if (str.includes('familyTitle') && str.includes('scrollToTop')) {
			str = str.split('ym-wbox')[1].split('scrollToTop')[0];
			var spec_split = str.split("speciesTitle");
			var tmp_res = [];

			// Family Info
			var rx2 = /familyTitle\"\>\s*\<strong\>Family\:([^\<]+)\<\/strong\>([^\<]+)\<span\sclass\=\"lsid\"\>\[urn\:lsid\:nmbe\.ch\:spiderfam\:(\d+)\]\<\/span\>\s+\<a\shref\=\"\/familydetail\/(\d+)\"/;
			tmp_res = rx2.exec(spec_split[0]);
			if (tmp_res !== null) {
				result['fam_name'] = tmp_res[1].trim();
				result['fam_auth'] = tmp_res[2].split(",")[0].trim();
				result['fam_year'] = tmp_res[2].split(",")[1].trim();
				result['fam_lsid'] = tmp_res[3].trim();
				result['fam_nmbe_id'] = tmp_res[4].trim();
			} else { console.log("ERROR: Fam Info Parse Failed"); console.log('"' + spec_split[0] + '"'); }

			// Gen Info
			var rx1 = /genusTitle\"\>Gen\.\s\<strong\>\<i\>([^\<]+)\<\/i\>\<\/strong\>([^\<]+)\<span\sclass\=\"lsid\"\>\[urn\:lsid\:nmbe\.ch\:spidergen\:(\d+)\]\<\/span\>\s*\<span\sclass\=\"lsid\"\>\<a\shref\=\"\/genusdetail\/(\d+)\"/;
			tmp_res = rx1.exec(spec_split[0])
			if (tmp_res !== null) {
				result['name'] = tmp_res[1].trim();
				result['auth'] = tmp_res[2].split(",")[0].trim();
				result['year'] = tmp_res[2].split(",")[1].trim();
				result['lsid'] = tmp_res[3].trim();
				result['nmbe_id'] = tmp_res[4].trim();
			} else { console.log("ERROR: Gen Info Parse Failed"); console.log('"' + spec_split[0] + '"'); }

			// Gen Transferred
			if (spec_split[0].includes("Transferred to other")) {
				rx1 = /\<i\>([^\<]+)\<\/i\>([^\<]+)\s--\ssee[\s\n]*\<a\shref\=\"\/genus\/(\d+)\/([^\"]+)\"/;
				var xfr = [];
				var t_split = spec_split[0].split("Transferred to other genera:<br>")[1].split("In synonymy")[0].split("<br>");
				for (var i = 0; i < (t_split.length - 1); i++) {
					tmp_res = rx1.exec(t_split[i]);
					if (tmp_res !== null) {
						xfr.push({
							'name':tmp_res[1].trim(),
							'auth':tmp_res[2].trim(),
							'xfer_to_name':tmp_res[4],
							'xfer_to_nmbe_id':tmp_res[3]
						});
					} else { console.log("ERROR: Transferred Info Parse Failed"); console.log('"' + t_split[i] + '"'); }
				}
				result['transferred'] = xfr;
			}

			// Gen Synonyms
			if (spec_split[0].includes("In synonymy")) {
				var t_syns = spec_split[0].split("In synonymy:<br>")[1].split("genusTitle")[0].split("<br>");
				if (t_syns) {
					var synonyms = [];
					rx1 = /\<b\>\<i\>([^\<]+)\<\/i\>\<\/b\>([^\,]+)\,\s*(\d{4})[^\=]+\=[^\=]+\=\"\/genus\/\d+\/[^\"]+\"\>\<b\>\<i\>[^\<]+\<\/i\>\<\/b\>\<\/a\>[^\,]+\,\s*\d{4}\s*\(\<a\shref\=\"\/reference\/(\d+)\"\>[^\<]+\<\/a\>\:*([^\)]+)\)/
					for (var i = 0; i < (t_syns.length - 1); i++) {
						tmp_res = rx1.exec(t_syns[i]);
						if (tmp_res !== null) {
							synonyms.push({
								'name':tmp_res[1],
						 		'auth':tmp_res[2].trim(),
					 			'year':tmp_res[3].trim(),
								'ref_id':tmp_res[4],
								'ref_page':tmp_res[5]
							});
						} else { console.log("ERROR: Gen Synonym Info Parse Failed"); console.log('"' + t_syns[i] + '"'); }
					}
					result['synonyms'] = synonyms;
				} else { console.log("ERROR: Gen Synonym Parse Failed"); console.log('"' + spec_split[0] + '"'); }
			}

			// Species
			rx1 = /\<a[\n\s]*href\=\"\/species\/(\d+)\/[^\"]+\"\>\<strong\>\<i\>([^\<]+)\<\/i\>\<\/strong\>\<\/a\>([^\<]+)\<([^\=]+)\=\"specInfo\"\>\s*\|[^\|]+\|([^\[]+)\[urn\:lsid\:nmbe\.ch\:spidersp\:(\d+)\]/
			result['species'] = [];
			for (var i = 1; i < spec_split.length; i++) {
				tmp_res = rx1.exec(spec_split[i]);
				if (tmp_res !== null) {
					result['species'].push({
						'nmbe_id':tmp_res[1],
						'name':tmp_res[2].trim(),
						'auth':tmp_res[3].trim(),
						'type':tmp_res[4].includes("*"),
						'location':tmp_res[5].replaceAll("&nbsp;", "").trim(),
						'lsid':tmp_res[6]
					});
				} else { console.log("ERROR: Spec Info Parse Failed"); console.log('"' + spec_split[i] + '"'); }
			}
		}
		return result;
	}
</script>
