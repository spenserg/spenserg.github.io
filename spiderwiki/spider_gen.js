<script>
	function parse_gen(str) {
		var result = [];
		if (str.includes('familyTitle') && str.includes('scrollToTop')) {
			str = str.split('familyTitle')[1].split('scrollToTop')[0];
			var spec_split = str.split("speciesTitle");

			// Gen Info
			var rx1 = /genusTitle\"\>Gen\.\s\<strong\>\<i\>([^\<]+)\<\/i\>\<\/strong\>([^\<]+)\<span\sclass\=\"lsid\"\>\[urn\:lsid\:nmbe\.ch\:spidergen\:(\d+)\]/g;
			var tmp_res = rx1.exec(spec_split[0]);
			result['name'] = tmp_res[1].trim();
			result['auth'] = tmp_res[2].trim();
			result['lsid'] = tmp_res[3].trim();
		}
		return result;
	}
</script>
