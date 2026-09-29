toggle_cd = function () {
	$("#cd_details").toggle();
	$("#cd_button").text(($("#cd_button").html().includes("Show")) ? 'Hide Details' : 'Show Details');
}

compute = function(str_override = "") {
	var output = "Check the input box and make sure you pasted the right thing.";
	var reg;
	var narrow_ci_min = 10;
	var narrow_ci_max = 80;
	var wide_ci_min = 40;
	var wide_ci_max = 300;
	var exc_regex = /\n\!\n/g;
	var fkeystxt = ((str_override != 0 && str_override.trim().length > 0) ? str_override : $("#outbound").val());
	var routes_arr = {'faa_pref' : null, 'non_rnav' : null, 'cdrs' : {} };
	var mr_text = ((mandatory_routes_checked) ? " // Mandatory Routes checked" : "");

	if ($("#outbound").val() == "debug") {
		debug_mode = !debug_mode;
		$("#total").html('<br/> Debug mode: ' + (debug_mode ? "ON" : "OFF"));
		return;
	}

	$("#ob_copy").val($("#outbound").val());
	$("#total").html("");
	rega = /TOW\n(\d+)\n(\d+)\n([^\n]*)\nLDW\n(\d+)\n(\d+)\n/g;
	regb = /light\n\n([A-Z]{4})\n+[^\n]+\n[^\n]+\n\n[^\n]+\n\n([A-Z]{4})[\s\S]+AA[LT]([\dA-Z]+)\n\!\nC I\:[^\(]+\([^\s]+\s([^\,\n\.]+)[\,\n\.][^\n]*\n[\s\S]+\)\n([A-Za-z0-9]{3})\nMEL/g;
	
	// ATCSCC CDRS
	// https://www.fly.faa.gov/rmt/cdm_operational_coded_departur.jsp
	regc = /\d\t([^\t]{8})\t([A-Z]{4})\t([A-Z]{4})\t[^\t]*\t([^\t]+)\t[^\t]*\t[^\t]*\t[^\t]*\t([YN])\t(\d)\t/g;

/* OBSOLETE
	// Decs route page
	regz = /[DI][\d]+\s+\d+\s[A-Z]\s[A-Z]\s[A-Z][^\n]+\n\s*ARTC TEXT/g;
*/

	// Airway
	regy = /\<(\d+)\s\<(K\d)\s\<([^\s]+)\s/g;

	// VAA App
	regw = /(PERMANENT AIRPORT ANALYSIS)/g;

	// Briefing || Fuel Burn
	regv = /PAGE\s[^\n]+([A-Z]{4})\-([A-Z]{4})\sAA[LT]([^\n]+)\n[\s\S]+682\-315\-\d{2}(\d{2})[\s\S]+PLAN\sARR\sFUEL\s(\d+)\s(\d+)\n\-+\n([\s\S]+)ON TIME ANALYSIS\n\-+\n/g;

	// All CDRs doc // FAA download
	regu = /RCode\tOrig\tDest\tDepFix\tRoute String\tDCNTR\tACNTR\tTCNTRs\tCoordReq\tPlay\tNavEqp/g;

	// CCCZ
	regt = /\d+\/\d+\s([A-Z]{3})\-([A-Z]{3})/g;

	// get_routes OR xxx_departures
	regr = /case \"([A-Z]{3})\"\:[^\n]+Updated\s*([\d\-]{10})/g;

	// dex all list
	regq = /[^\n]+[idce]ae\n[^\-]+ \- \([A-Za-z\d\,\s]+\) \[[^\]]\]/g;

	// LAWS inputs
	regp = /DISP MLW \d+\//g;

	// TODO: Coordinate conversion
	
	var testing = false;
	var land_wgt_limited = false;
	var tmp_rslt = regb.exec(fkeystxt);

	// For Testing Station Info
	// XXXYYY | x = dptr | y = arr
	// xxx - YYY | x = dptr | y = arr
	var tmp_strlen = fkeystxt.replaceAll(" ","").replaceAll("-","").length;
	if (tmp_strlen == 6 || tmp_strlen == 9) {
		fkeystxt = fkeystxt.replaceAll("-","").replaceAll(" ","").toUpperCase();
		testing = true;
	}

	// LAWS input
	if (fkeystxt.includes("DISP MLW")) {
		if (regp.exec(fkeystxt) != null) {
			$("#total").html('<br/>' + format_laws(fkeystxt));
			return;
		}
	}

	// CCCZ table
	if (fkeystxt.includes("QUALITY CONTROL DISPLAY") || fkeystxt.includes("END-OF-DISPLAY")) {
		if (regt.exec(fkeystxt) != null) {
			var tmp_output_arr = [];
			var tmp_output_arr_2 = [];
			var tmp_check_for_duplicates = {};
			while (null != (z = regt.exec(fkeystxt))) {
				if (tmp_check_for_duplicates[(z[1] + "-" + z[2])] != 1) {
					tmp_output_arr.push((z[1] + "-" + z[2]));
					tmp_check_for_duplicates[(z[1] + "-" + z[2])] = 1;
				}
				if (tmp_check_for_duplicates[z[1]] != 1) {
					tmp_output_arr_2.push(z[1]);
					tmp_check_for_duplicates[z[1]] = 1;
				}
				if (tmp_check_for_duplicates[z[2]] != 1) {
					tmp_output_arr_2.push(z[2]);
					tmp_check_for_duplicates[z[2]] = 1;
				}
			}
			tmp_output_arr.sort();
			tmp_output_arr_2.sort();

			var desk_reg = /FD(\d{2})\s/g;
			var desk_info = desk_reg.exec(fkeystxt);

			// TODO: "PM" hard coded

			$("#total").html('<br/>' + get_turnover(desk_info[1], "PM") + '<br/><br/>' +
				'<textarea rows="8" cols="80">' + tmp_output_arr.join("\n") + '</textarea><br/><br/>' +
				'<textarea rows="8" cols="80">' + tmp_output_arr_2.join("\n") + '</textarea>');
			return;
		}
	} // End of CCCZ Table

	// Electronic Turnover
	if (fkeystxt.includes("Dispatch Desk Electronic Turnover")) {
		$("#total").html(electronic_turnover_parse(fkeystxt));
		return;
	}

	// Edcts
	if (fkeystxt.includes("ATC DELAYS FOR DESK")) {
		$("#total").html(edct_parse(fkeystxt));
		return;
	}

	// All CDRs Doc
	if (fkeystxt.includes("RCode") || fkeystxt.includes("DepFix")) {
		if (regu.exec(fkeystxt) != null) {
			$("#total").html(cdrdoc_parse(fkeystxt, true));
			return;
		}
	}

	// xxx_departures page OR get_routes.js
	if (fkeystxt.includes("Faa Pref Route") && fkeystxt.includes('result += "<br/>')) {
		if (regr.exec(fkeystxt) != null) {
			$("#total").html(check_page_for_errors(fkeystxt));
			return;
		}
	}

	// dex all list
	if (regq.exec(fkeystxt) != null && debug) {
		$("#total").html(dex_parse(fkeystxt));
		return;
	}

	if ((result = regc.exec(fkeystxt)) != null) {
		// ATSCC CDR page ONLY
		output = cdr_parse(fkeystxt);
		$("#total").html('<br/>' + output);
		return;
	} else if ((result = regw.exec(fkeystxt)) != null) {
		output = vaa_parse(fkeystxt);
	} else if ((result = regv.exec(fkeystxt)) != null) {
		output = briefing_parse(fkeystxt);
	} else if (testing || ((result = rega.exec(fkeystxt)) != null)) {
		var mlwa = 7777;
		var mlwb = 7777;
		if (!testing && !safe_mode) {
			mlwa = parseInt(result[2]) - parseInt(result[1]); // Takeoff weight buffer
			mlwb = parseInt(result[5]) - parseInt(result[4]); // Landing weight buffer
			land_wgt_limited = ((mlwa < mlwb) ? false : true);
			if (result[3] == "E") { // Using Method 1
				mlwa = mlwb;
			}
		}

		// Get ac_type
		var ac_type = (testing ? "321R" : (safe_mode ? "321R" : get_ac_type(tmp_rslt[5])));
		if (testing && tmp_strlen == 9) {
			var tmp_tmp_act = get_ac_type(fkeystxt.slice(-3));
			ac_type = ((tmp_tmp_act == null) ? "321R" : tmp_tmp_act)
		}

		output = "MTOW SPREAD: ";
		var reg_ci = /C\sI\:(\d+)[^\d]/g;
		if (mlwa < mlwb) {
			output += '<span style="color:';
			if (mlwa <= 2000) {
				output += 'red';
			} else if (mlwa < 4000) {
				output += 'orange';
			} else {
				output += 'green';
			}
			output += '"><b>' + ((mlwa > 9999) ? "10K+" : mlwa) + "</b></span>";
			if (mlwa <= 5000) {
				output += "&nbsp;&nbsp;&nbsp;<b>Takeoff Wgt Rstr</b>";
				if ((ci_res = reg_ci.exec(fkeystxt)) != null) {
					var ci_int = parseInt(ci_res);
					if (["319S", "H319", "319W", "A320", "H205", "738M", "738K", "738R", "321T", "321X", "A321", "321E", "321K", "321R", "321N"].includes(ac_type)) {
						// Narrow Body
						if (ci_int > 20) {
							output += "<br/><b style='color:yellow'>CI is " + ci_int + " - consider lowering to increase MTOW spread (min " + narrow_ci_min + ")</b>";
						}
					} else if (["B772", "773W", "7878", "7879", "789P"].includes(ac_type)) {
						// Wide Body
						if (ci_int > 50) {
							output += "<br/><b style='color:yellow'>CI is " + ci_int + " - consider lowering to increase MTOW spread (min " + wide_ci_min + ")</b>";
						}
					}
				}
			}
		} else {
			output += '<span style="color:';
			if (mlwb <= 2000) {
				output += 'red';
			} else if (mlwb < 4000) {
				output += 'orange';
			} else {
				output += 'green';
			}
			output += '"><b>' + ((mlwb > 9999) ? "10K+" : mlwb) + "</b></span>";
			if (mlwb <= 5000) {
				 output += "&nbsp;&nbsp;&nbsp;<b>Land Wgt Rstr</b>";
				if ((ci_res = reg_ci.exec(fkeystxt)) != null) {
					var ci_int = parseInt(ci_res);
					if (["319S", "H319", "319W", "A320", "H205", "738M", "738K", "738R", "321T", "A321", "321E", "321K", "321R", "321N", "321X"].includes(ac_type)) {
						// Narrow Body
						if (ci_int > 20) {
							output += "<br/><b style='color:yellow'>CI is " + ci_int + " - consider lowering to increase MTOW spread (min " + narrow_ci_min + ")</b>";
						}
					} else if (["B772", "773W", "7878", "7879", "789P"].includes(ac_type)) {
						// Wide Body
						if (ci_int > 50) {
							output += "<br/><b style='color:yellow'>CI is " + ci_int + " - consider lowering to increase MTOW spread (min " + wide_ci_min + ")</b>";
						}
					}
				}
			}
			if (!testing && result[3] == "E" && !land_wgt_limited) {
				output += "&nbsp;&nbsp;&nbsp;<b style='color:orange'>Method 1 in use</b>";
			}
		}
		if (!safe_mode) {
			if (["A321", "321K", "321R", "321N", "321X"].includes(ac_type)) { // 321T and A321E (Neos) are ok
				reg_fob = /TOTAL[^\d]*(\d+)[^\d]/g;
				var unnecessary_var = reg_fob.exec(fkeystxt);
				if (ac_type == "321X") {
					if (unnecessary_var[1] >= 40500 && unnecessary_var[1] < 45200) {
						output += "<br/><b style='color:red'>321X fuel load cannot be between 40,600 and 45,100 lbs (Cur FOB " + parseInt(unnecessary_var[1]) + ") Must add or remove fuel (remark '\/XL')</b>"; // A321XLR RCT Fueling Requirement Comply Message Jan 16, 2026
					} else if (unnecessary_var[1] >= 37500 && unnecessary_var[1] < 40500) {
						output += "<br/><b style='color:orange'>321X fuel penalty above FOB 40,600. (" + (40600 - parseInt(unnecessary_var[1])) + " lbs from cutoff)</b>"; // A321XLR RCT Fueling Requirement Comply Message Jan 16, 2026
					}
				} else if (ac_type == "321X" && unnecessary_var[1] > 38500 && unnecessary_var[1] < 45200) {
					output += "<br/><b style='color:orange'>321X fuel load cannot be between 40,600 and 45,100 lbs (Cur FOB " + parseInt(unnecessary_var[1]) + ")</b>"; // A321XLR RCT Fueling Requirement Comply Message Jan 16, 2026
				} else if (unnecessary_var && parseInt(unnecessary_var[1]) > 47000) {
					output += "<br/><b style='color:" + ((parseInt(unnecessary_var[1]) > 49000) ? "red" : "orange") + "'>A321 balance issues when FOB above 47000 lbs (Cur FOB " + parseInt(unnecessary_var[1]) + " - Coordinate with loads)</b>";
				}
			}
		}
	} else if (debug_mode) {
		console.log("regb parse error");
	}
	if (testing || (tmp_rslt !== null && !safe_mode)) {
		/*
	 	*	1 - Dptr Station
	 	*	2 - Arvl Station
	   	*	3 - Flt Number
		* 	4 - Captain
	   	*	5 - Tail Number
		*/
		if (testing) {
			result = [null,
				fkeystxt.substring(0, 3).toUpperCase(),
				fkeystxt.substring(3, 6).toUpperCase(),
				7777,
				"TESTING",
				((fkeystxt.length == 9) ? fkeystxt.slice(-3) : "850")
			];
		} else {
			result = tmp_rslt;
		}

/* LEFT BOX */

		output = '<div class="container text-left" style="margin:0;padding:5"><div class="row"><div class="col-6">' + result[3] + '&nbsp;&nbsp;&nbsp;' +
			(is_domestic(result[1], false) ? ('<span style="cursor:pointer" onclick="$(\'#dom_fir\').toggle()">' + result[1] + '</span><span id="dom_fir" style="display:none">&nbsp;&nbsp;(' + get_fir(result[1]) + ")</span>") : (convert_iata(result[1]) + '&nbsp;/&nbsp;' + convert_icao(result[1]))) +
			'&nbsp;&nbsp;&nbsp;' + result[5] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + result[4] + "<br/>" + output;

		// Unrecognized Airport or ARTCC
		if (convert_iata(result[1]).localeCompare("XXX") == 0 || convert_icao(result[1]).localeCompare("XXXX") == 0) {
			// Unrecognized Dprt Station
			output += '<br/><b style="color:red">Station Code "' + result[1] + '" not recognized<\/b>';
		}
		if (convert_iata(result[2]).localeCompare("XXX") == 0 || convert_icao(result[2]).localeCompare("XXXX") == 0) {
			// Unrecognized Dprt Station
			output += '<br/><b style="color:red">Station Code "' + result[2] + '" not recognized<\/b>';
		}

		// Approach Category
		output += "<br/>" + ac_type + "&nbsp;&nbsp;&nbsp;CAT ";
		if (["319S", "H319", "319W", "A320", "H205", "B772"].includes(ac_type)) {
			// Cat C
			output += "C"; // 121-141 Kts
			if (["H319","A321","321T","321K"].includes(ac_type)) {
				output += "&nbsp;&nbsp;<b style='color:orange'>100/162NM<\/b>";
			}
		} else if (["738M", "738K", "738R", "321T", "A321", "321E", "321K", "321R", "321N", "321X", "773W", "7878", "7879", "789P"].includes(ac_type)) {
			if (ac_type == "738R") { // TODO: Toggle Cat C/D conditions // or show on hover
				// SFP - Cat C under certain conditions
				output += "C / D&nbsp;&nbsp;<button id='cd_button' onclick=\"toggle_cd()\">Show Details<\/button>" +
					"<div id='cd_details' style='display:none;border:1px solid black;margin:2px;width:75%'>C - [flaps 40 straight-in]<br/> D - [circle-to-land]<\/div>";
				if (["H319","A321","321T","321K"].includes(ac_type)) {
					output += "<br/>&nbsp;&nbsp;<b style='color:orange'>100/162NM<\/b>";
				}
			} else {
				// Cat D
				output += "D"; // 141-165 Kts
				if (["H319","A321","321T","321K"].includes(ac_type)) {
					output += "&nbsp;&nbsp;<b style='color:orange'>100/162NM<\/b>";
				}
			}
		} else { output += "Unknown"; }

		// Cost Index
		output += "<br/>&nbsp;ci: ";
		if (["319S", "H319", "319W", "A320", "H205", "738M", "738K", "738R", "321T", "A321", "321E", "321K", "321R", "321N", "321X"].includes(ac_type)) {
			// Narrow Body
			output += narrow_ci_min + " - " + narrow_ci_max + " (lower/slower/lighter)";
		} else if (["B772", "773W", "7878", "7879", "789P"].includes(ac_type)) {
			// Wide Body
			output += wide_ci_min + " - " + wide_ci_max + " (lower/slower/lighter)";
		} else { output += "Unknown"; }

		// Tanker | Ferry Fuel
		if (!safe_mode) {
			regc = /(\d+)\t\d+\:\d+\tH\n+TOTAL/g;
			if ((tmpregc= regc.exec(fkeystxt)) != null) {
				output += "<br/>Ferry Fuel: <b>" + tmpregc[1] + "</b>";
			}
		}

/* RIGHT BOX */
		output += '</div><div class="col-6" style="border:2px solid black;font-size:12px">';
		output += get_right_box_info(result[1], result[2], result[5], ac_type);
		output += "<br/>" + result[1] + " FIR: " + get_fir(result[1]) + " | Cutoff TODO";
		output += '</div></div></div>';
		
/* FP NOTES */

		// A320 max autoland
		if (["A320","H205"].includes(ac_type)) {
			var ab_no = parseInt(tmp_rslt[5]);
			if (ab_no < 126 || (ab_no > 128 && ab_no < 663) || ab_no > 680) {
				// Max Autoland 2500 ft MSL
				output += "<b style='color:orange'>Max Autoland 2500 ft MSL<\/b><br/>";
			}
		}

		// Non-scheduled flight
		if (result[3] > 8999 && result[3] < 10000) {
			// Reminder to amend flight type if non-scheduled
			output += "<br/><b>Change flight type in ATC filing for all non-scheduled flights (Click envelope, flight type dropdown -> 'N')</b>";
			output += "<br/><b style='color:orange'>CLP needs to know number and position of catering carts</b>";
			if (result[1] == "KDCA" || result[2] == "KDCA") {
				// Reminder to contact TSA for unscheduled DCA flights
				output += "<br/><b style='color:red'>DCA TSA must be contacted at least one hour prior to departure for non-scheduled operations (DPM 5.6.1)</b>";
			}
		}
		// Check for DCT and No STAR
		var reg_getsidstar = /([A-Z]{4})\n\n\nRW[\d\sA-Z]+\-([^\n]+)\n[^\:]+([A-Z]{4})\n\n\nRW[\d\sA-Z]+\-([^\n]+)\n/g;
		while(null != (zz = reg_getsidstar.exec(fkeystxt))) {
			if (["DCT","No SID"].includes(zz[2].trim())) {
				if (!dctSIDok.includes(result[1])) {
					output += "<br/><b style='color:orange'>Verify SID is correct. 'DCT' or 'No SID' set.<\/b>";
				}
			}
			if (["DCT","No STAR"].includes(zz[4].trim())) {
				if (!dctSTARok.includes(result[2])) {
					output += "<br/><b style='color:orange'>Verify STAR is correct. 'DCT' or 'No STAR' set.<\/b>";
				}
			}
		}
	} else if (debug_mode && (safe_mode || ((rega.exec(fkeystxt) != null) && (regb.exec(fkeystxt) != null)))) {
		console.log("flifo parse error");
	}

	// Routes
	//if (regz.exec(fkeystxt) == null && (testing || (rega.exec(fkeystxt) != null))) {
	if (result !== null) {
		output = get_routes(result[1], result[2], result[5], ac_type, output);
		$("#outbound").val("");
		if (debug_mode && !safe_mode) {
			var today = new Date();
			var tmp_today_str = String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0') + "-" + String(today.getFullYear());
			regad = /\<\!\-\-\sUpdated\s([\d\-]+)\s([A-Z]*)\s*\-\-\>/g;
			if (!output.includes("ATCSCC FAQ")) {
				if ((tmp_xad = regad.exec(output)) !== null) {
					var tmp_date_obj = new Date(tmp_xad[1]);
					$("#outbound").val("Updated " + tmp_xad[1] +
						((fkeystxt.includes("ATCSCC FAQ")) ? "" : ("\nInfo " + Math.ceil((Date.now() - tmp_date_obj) / 86400000) + " Days Old"))
					);
				}
			}
			var tmp_textarea_tabs = ((["CLT","DFW","LAX","MIA","ORD","PHX"].includes(((result[1].length > 3) ? convert_iata(result[1]) : result[1]))) ? "\n\t\t\t" : "\n\t\t\t\t\t");
			output += '<br/><br/><button id=\"button_toggle_input_boxes\" onclick=\"toggle_input_boxes()\">' + (input_boxes_shown ? 'Hide' : 'Show') + ' Input Boxes</button>';
			output += '<div id="input_boxes">';

			// 3 input boxes: [green, red, xxx]
			output += '<hr>Route: <input id=\'3box_route\' style=\'width:25%\' value=\'YYY\' onchange=\'update_rte_text()\'>';
			output += '&nbsp;&nbsp;&nbsp;&nbsp;Desc: <input id=\'3box_desc\' style=\'width:25%\' value=\'XXX\' onchange=\'update_rte_text()\'>';
			output += '&nbsp;&nbsp;&nbsp;&nbsp;Desc BR: <input id=\'3box_desc2\' style=\'width:25%\' value=\'<br\/>XXX\' readonly>';
			output += '<br/><span style=\"color:green\"> (Ok to File)</span>: <input id=\'newroute_oktofile\' style=\'width:75%\' value=\'' +
				'result += \"<br/>XXX<span style=\\\"color:green\\\"> (Ok to File)<\/span>: <input style=\\\"width:75%\\\" value=\\\"YYY\\\" readonly>\";' +
				'\' readonly>';
			output += '<br/><span style=\"color:red\"> (Coord Req)</span>: <input id=\'newroute_coordreq\' style=\'width:75%\' value=\'' +
				'result += \"<br/>XXX<span style=\\\"color:red\\\"> (Coord Req)<\/span>: <input style=\\\"width:75%\\\" value=\\\"YYY\\\" readonly>\";' +
				'\' readonly>';
			output += '<br/>XXX: <input id=\'newroute_xxx\' style=\'width:75%\' value=\'' +
				'result += \"<br/><input style=\\\"width:75%\\\" value=\\\"YYY\\\" readonly>\";' +
				'\' readonly>';
			// Bottom text box
			// output += '<br/><br/><input style=\'width:75%\' value=\'case "' + convert_iata(result[2]) + '": // Updated ' + tmp_today_str + mr_text + '\' readonly>';
			// output += '<br/><input style=\'width:75%\' value=\'result += \"<!-- Updated ' + tmp_today_str + (mandatory_routes_checked ? " M" : " ") + 'P -->\";\' readonly>';
			output += '<hr><textarea rows="8" cols="80"> // ';
			if (result[1].length == 8) { // CDR page
				/* 1 - CDR name XXXYYY11
				** 2 - dptr [usually icao / 4 letters]
				** 3 - arvl [usually icao / 4 letters]
				** 4 - route string
				** 5 - coord rqd (Y/N)
				** 6 - Nav eqpt as integer
				*/
				output += ((result[2].length == 3) ? result[2] : convert_iata(result[2])) + '-' + ((result[3].length == 3) ? result[3] : convert_iata(result[3]));
			} else { // Route page
				/* 1 - dptr [usually icao / 3 letters]
				** 2 - arvl [usually icao / 3 letters]
				** 3 - flight number
				** 4 - Capt Name
				** 5 - tail number
				*/
				output += ((result[1].length == 3) ? result[1] : convert_iata(result[1])) + '-' + ((result[2].length == 3) ? result[2] : convert_iata(result[2]));
			}
			output += ' // Updated ' + tmp_today_str + mr_text + tmp_textarea_tabs +
				'result += "<!-- Updated ' + tmp_today_str + (mandatory_routes_checked ? " M" : " ") + 'P -->";</textarea>';
				// + tmp_textarea_tabs + 'result += "<br/><br/><b>Faa Pref Route:</b>";</textarea>';
			output += '<br/><button onclick=\"toggle_mandatory_routes()\">Turn ' + (mandatory_routes_checked ? "OFF" : "ON") + ' Mandatory Routes</button>';
			/*
			output += 'FKeys Page: <textarea id="outbound2" rows="5"></textarea>&nbsp;';
			output += '<textarea id="ob_copy2" rows="5" hidden></textarea>&nbsp;&nbsp';
			output += '<button id="go_button2" onclick="compute()">Go</button>&nbsp;&nbsp;
			*/

			// Faa Pref
			output += '<br/><hr><br/><input id=\'input_faapref_default\' style=\'width:75%\' value=\'' + ((tog_faapref) ? '' : '// ') + 'result += \"<br/><br/><b>Faa Pref Route:</b>\";' + ((tog_faapref) ? '' :  ' // No FAA Pref route as of ' + tmp_today_str) + '\' readonly>';
			output += '&nbsp;&nbsp;<button id=\'button_faapref_default\' onclick=\"toggle_faa_pref()\">' + ((tog_faapref) ? 'No FAA pref' : 'Remove Pref Rte Comments') + '</button>';

			// CDRs
			output += '<br/><input id=\'input_cdrroutes_default\' style=\'width:75%\' value=\'' + ((tog_cdrroutes) ? '' : '// ') + 'result += \"<br/><br/><b>CDRS</b>\";' + ((tog_cdrroutes) ? '' : ' // No CDRs as of ' + tmp_today_str) + '\' readonly>';
			output += '&nbsp;&nbsp;<button id=\'button_cdrroutes_default\' onclick=\"toggle_cdr_routes()\">' + ((tog_cdrroutes) ? 'No CDRs listed' : 'Remove CDR Comments') + '</button>';

			output += '<br/><br/><button onclick="clear_input(0)">Clear</button>&nbsp;&nbsp;<button onclick="restore_last()">Refresh/Run Previous</button><br/>';
			output += '</div>';
		}
	}

	if (result !== null) {
		output = change_flow_str(((result[1].length == 3) ? result[1] : convert_iata(result[1])), flows[((result[1].length == 3) ? result[1] : convert_iata(result[1]))], output);
		output = change_flow_str(((result[2].length == 3) ? result[2] : convert_iata(result[2])), flows[((result[2].length == 3) ? result[2] : convert_iata(result[2]))], output);
	}

	$("#total").html('<br/>' + output);
	/*
	if (result != null && (rega.exec(fkeystxt) != null) && (regb.exec(fkeystxt) != null)) {
		change_flow(((result[1].length == 4) ? (result[1].substr(1, 4)) : result[1]), flows[((result[1].length == 4) ? (result[1].substr(1, 4)) : result[1])], true);
		change_flow(((result[2].length == 4) ? (result[2].substr(1, 4)) : result[2]), flows[((result[2].length == 4) ? (result[2].substr(1, 4)) : result[2])], true);
	}
	*/
	if (!input_boxes_shown) { $("#input_boxes").hide(); }
}
