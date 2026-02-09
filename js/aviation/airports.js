/* 
* TODO
*
vaa_parse = function (fkeystxt = "") {
	// Structural
	rega = /STRUCT WT (\d+\.*\d*) LB\n/g;
	var struct_parse = rega.exec(fkeystxt);
	structural = parseFloat(struct_parse[1]).toFixed(1);
	console.log(structural);

	// Result
	var result = "<br/>Dry: " + structural + "<br/>Wet: " + structural;
	return result;
}
*/

airport_extra = function (flows = {}, dptr = "XXX", arvl = "XXX", tail = null, ac_type = null, result = "") {
	dptr = ((dptr.length == 4) ? (dptr.substr(1, 4)) : dptr);
	arvl = ((arvl.length == 4) ? (arvl.substr(1, 4)) : arvl);
	flows = ((Object.keys(flows).length == 0) ? {"ABQ":0,"ATL":0,"BZN":0,"DFW":0,"DTW":0,"ELP":0,"FCA":0,"IAH":0,"JAC":0,"LAX":0,"MCO":0,"MIA":0,"MSO":0,"PSP":0,"RNO":0,"SAN":0,"SBP":0,"SFO":0,"SJC":0,"SLC":0,"SMF":0,"SNA":0,"TUS":0} : flows);

	// A012
	if (is_atwelve(arvl)) { result += "<br/><b>" + arvl + " is an A012 Airport<\/b>"; }
	
	// Weather Cameras
	var tmp_cams = get_weather_cams(arvl);
	if (tmp_cams.length > 0) {
		if (tmp_cams[0].length > 0) { // At least one item in array
			if (tmp_cams[0][0].length > 0) { // First item is not default: ["", ""]
				result += "<br/>Live Weathercams: ";
				for (let i = 0; i < tmp_cams.length; i++) {
					result += "<a href='" + tmp_cams[i][0] + "' target='_blank'>" + tmp_cams[i][1] + "</a>&nbsp;&nbsp;";
				}
			}
		}
	}

	// 27K for 737-NGs
	if (["738K", "738R"].includes(ac_type) && ["BDL","BJX","BOS","BUR","BZN","DCA","DEN","GUA","HDN","LAS","LGA","MDE","MEX","PHX","PSP","QRO","RDU","RNO","RTB","SBA","SBP","SJO","SJU","SNA","STT","SXM"].includes(dptr)) {
		result += "<br/><b>" + dptr + " - 27K Available for N" + tail + "<\/b>";
	}
	// A321 IAE Non-Sharklet Thrust Bump
	if (["PHX","DEN","LAS","CLT"].includes(dptr)) {
		if (["507","508","510","519","521","523","524","534","535","536","537","538","539","540","542","543","544","545","546","549","551","552","553","554","556","557","558","559","560","561","562","563","567","568","572","573","575","576","578","579","580","581","582","583","584","585","586","587","912","913","914","915","916","917","918","919","920","921","922","923","924","925","926","927","970","971","972","973","974","975","976","977","978","979","980","981","982"].includes(tail)) {
			// Source: FOS COMMAND "TC*10"
			result += "<br/><b>" + dptr + " - Thrust Bump Available for N" + tail + "<\/b>";
		}
	}

	var show_flow_info = "";
	switch(dptr) {
		case "ABQ":
			result += "<br/><br/>ABQ Flow: <button type='button' id='ABQ_standard_left' class='btn" + ((flows['ABQ'] == 0) ? " selected" : "") + "' onclick='change_flow(\"ABQ\", 0)'>East</button>&nbsp;&nbsp;<button type='button' id='ABQ_standard_right' class='btn" + ((flows['ABQ'] == 1) ? " selected" : "") + "' onclick='change_flow(\"ABQ\", 1)'>West</button>";
			show_flow_info = "East Rwy8: GRZZZ, JEMEZ, MNZNO, RDRNR<br/>West Rwy26: ADYOS, ATOMK, BOSQE, DOOKK, FYSTA";
			break;
		case "BFL":
			result += "<br/><br/>BFL - 12R/30L N/A, see 10-7A";
			break;
		case "BOI":
			result += "<br/><br/>Run VAA above 30C";
			break;
		case "BTV":
			result += "<br/><br/>BTV - Rwy15 limited due to terrain/ Tower will accommodate rwy33 with tailwind";
			break;
		case "BUR":
			result += "<br/><br/>BUR - ATC prefers Rwy15, even with a tailwind";
			break;
		case "BZN":
			result += "<br/><br/>BZN - Run VAA above 25C; Rwy30 is about 3k lbs better";
			result += "<br/><br/>BZN Flow: <button type='button' id='BZN_standard_left' class='btn" + ((flows['BZN'] == 0) ? " selected" : "") + "' onclick='change_flow(\"BZN\", 0)'>SE Rwy 12</button>&nbsp;&nbsp;<button type='button' id='BZN_standard_right' class='btn" + ((flows['BZN'] == 1) ? " selected" : "") + "' onclick='change_flow(\"BZN\", 1)'>NW Rwy 30</button>";
			show_flow_info = "NW Rwy30: MEADO<br/>SE Rwy12: BGSKY, BOBKT";
			break;
		case "CLT":
			// show_flow_info = "North Rwy36C/36R<br/>South Rwy18C/18L";
			break;
		case "COS":
			result += "<br/><br/>COS - LAWS above 10C";
			result += "<br/>COS - Rwy31 N/A, see 10-7A-1";
			break;
		case "DCA":
			result += "<br/><br/>Curfew rstr 2200L - 0659L";
			var tmp_mtow = get_dca_mtow(ac_type, tail);
			if (tmp_mtow != null) { result += "<br/>" + tmp_mtow; }
			break;
		case "DEN":
			result += "<br/><br/>Run VAA when hot"; // TODO How hot? Source?
			break;
		case "DFW":
			// show_flow_info = "North Rwy36R/35L<br/>South Rwy18L/17R";
			break;
		case "EGE":
			result += "<br/><br/>EGE - Rwy 25 is preferred, even with tailwind";
			result += "<br/>EGE - VAA 25X for icing conditions 1000 - 10,000 Feet";
			result += "<br/>EGE - ARFF manages snow plow ops and notams";
			break;
		case "ELP":
			result += "<br/><br/>ELP Flow: <button type='button' id='ELP_standard_left' class='btn" + ((flows['ELP'] == 0) ? " selected" : "") + "' onclick='change_flow(\"ELP\", 0)'>SW Rwy 22</button>&nbsp;&nbsp;<button type='button' id='ELP_standard_right' class='btn" + ((flows['ELP'] == 1) ? " selected" : "") + "' onclick='change_flow(\"ELP\", 1)'>NE Rwy 4</button>";
			show_flow_info = "SW Rwy22: ATKNN<br/>NE Rwy4: JCOXX<br/>BOTH: LATVE, NEVUE, TDOWN";
			break;
		case "EYW":
			result += "<br/><br/>EYW - Check VAA if wet or departing Rwy 9";
			result += "<br/>EYW - Tailwind N/A (1kt is about 10k lbs penalty)";
			result += "<br/>EYW - Max crosswind 20 knots, see 10-7A-1";
			result += "<br/>Wet/Dry definitions FOM 2.1.6";
			break;
		case "FAT":
			result += "<br/><br/>FAT - Run VAA if departing Rwy29L";
			break;
		case "GJT":
			result += "<br/><br/>GJT - Run VAA above 25C";
			break;
		case "IAH":
			result += "<br/><br/>IAH Flow: <button type='button' id='IAH_standard_left' class='btn" + ((flows['IAH'] == 0) ? " selected" : "") + "' onclick='change_flow(\"IAH\", 0)'>West</button>&nbsp;&nbsp;<button type='button' id='IAH_standard_right' class='btn" + ((flows['IAH'] == 1) ? " selected" : "") + "' onclick='change_flow(\"IAH\", 1)'>East</button>";
			// show_flow_info = "NW Rwy33: <br/>SE Rwy15: BNDTO, GUMBY, PITZZ<br/>ALL: FLYZA, INDIE, LURIC, MMUGS, RITAA, STRYA, STYCK, WYLSN";
			break;
		case "JAC":
			result += "<br/><br/>JAC - Tailwind or Contaminated Rwy takeoff N/A";
			result += "<br/>JAC - Always check VAA, Rwy19 is better";
			result += "<br/><br/>JAC Flow: <button type='button' id='JAC_standard_left' class='btn" + ((flows['JAC'] == 0) ? " selected" : "") + "' onclick='change_flow(\"JAC\", 0)'>South</button>&nbsp;&nbsp;<button type='button' id='JAC_standard_right' class='btn" + ((flows['JAC'] == 1) ? " selected" : "") + "' onclick='change_flow(\"JAC\", 1)'>North</button>";
			show_flow_info = "S Rwy19: ALPIN, TETON<br/>N Rwy1: DIVYD, GEYSR";
			break;
		case "LAX":
			result += "<br/><br/>LAX curfew 2100L - 0700L, see <a href=\"https://www.lawa.org/media/30137\" target=\"_blank\">KLAX Noise Abatement Procedures<\/a>";
			if (ac_type.includes("321")) {
				result += "<br/>A321 - File OSHNN instead of ORKAS";
			} else {
				result += "<br/>Departures after 2100L, file OSHNN instead of ORKAS";
			}
			result += "<br/><br/>LAX Flow: <button type='button' id='LAX_standard_left' class='btn" + ((flows['LAX'] == 0) ? " selected" : "") + "' onclick='change_flow(\"LAX\", 0)'>West</button>&nbsp;&nbsp;<button type='button' id='LAX_standard_right' class='btn" + ((flows['LAX'] == 1) ? " selected" : "") + "' onclick='change_flow(\"LAX\", 1)'>East</button>";
			show_flow_info = "West Rwy24L/25R<br/>E Rwy 6R/7L: LAXX/GARDY/TRTON";
			break;
		case "LGA":
/* TODO Im pretty sure pier weights arent a thing anymore
			if (ac_type == "738M") {
				result += "<br/><br/>B737 MAX acft are not subject to pier weights";
			}
			break;
*/
		case "MIA":
			// result += "<br/><br/>MIA - GLADZ EAST FLOW // BNGOS WEST FLOW"; // TODO: Is this still a thing?
			break;
		case "MRY":
			result += "<br/><br/>MRY - Run VAA if departing Rwy 10R";
			break;
		case "MSO":
			result += "<br/><br/>MSO Flow: <button type='button' id='MSO_standard_left' class='btn" + ((flows['MSO'] == 0) ? " selected" : "") + "' onclick='change_flow(\"MSO\", 0)'>SE Rwy 12</button>&nbsp;&nbsp;<button type='button' id='MSO_standard_right' class='btn" + ((flows['MSO'] == 1) ? " selected" : "") + "' onclick='change_flow(\"MSO\", 1)'>NW Rwy 30</button>";
			show_flow_info = "NW Rwy30: DIDLY<br/>SE Rwy 12: MZULA, VICTO";
			break;
		case "MTJ":
			result += "<br/><br/>MTJ - Rwy 13/31 N/A"; // TODO: Source?
			break;
		case "ORD":
			// show_flow_info = "West Rwy28R/22L<br/>East Rwy9R/10L";
			break;
		case "PHX":
			result += "<br/><br/>PHX - Make sure flow matches TPS; Usually departing into the sun (East in AMs, West in PMs)";
			result += "<br/>PHX - Rwy 26/8 usually available for dptr (operational necessity) if tower notified in advance";
			// show_flow_info = "West Rwy25R<br/>East Rwy7L";
			break;
		case "PSP":
			result += "<br/><br/>PSP - Run VAA for Rwy 31L";
			result += "<br/><br/>PSP Flow: <button type='button' id='PSP_standard_left' class='btn" + ((flows['PSP'] == 0) ? " selected" : "") + "' onclick='change_flow(\"PSP\", 0)'>South</button>&nbsp;&nbsp;<button type='button' id='PSP_standard_right' class='btn" + ((flows['PSP'] == 1) ? " selected" : "") + "' onclick='change_flow(\"PSP\", 1)'>North</button>";
			show_flow_info = "North Rwy31L: HWRRD, YUCCA<br/>South Rwy 13R: IKNOE, JEEON, LGANN";
			break;
		case "RDM":
			result += "<br/><br/>RDM - Rwy11/29 N/A for A320 and non-sharklet A321, see 10-7A-2";
			break;
		case "RNO":
			result += "<br/><br/>RNO - Use 10-7 Pages and SIDS for takeoff mins";
			result += "<br/>RNO - Max climb gradient 525 feet per NM; Some south departures exceed 525 ft/nm (see 10-7C)";
			result += "<br/><br/>RNO Flow: <button type='button' id='RNO_standard_left' class='btn" + ((flows['RNO'] == 0) ? " selected" : "") + "' onclick='change_flow(\"RNO\", 0)'>South</button>&nbsp;&nbsp;<button type='button' id='RNO_standard_right' class='btn" + ((flows['RNO'] == 1) ? " selected" : "") + "' onclick='change_flow(\"RNO\", 1)'>North</button>";
			show_flow_info = "North Rwy35L: ALPYN<br/>South Rwy17R: ZEFFR";
			break;
		case "SAN":
			result += "<br/><br/>SAN - East Flow (Rwy9): Takeoff Mins 600-2 // BORDER SID lower mins";
			result += "<br/>SAN - Curfew rstr: Takeoff prohibited 2330L - 0630L";
			// TODO
			// result += "<br/><br/>SAN Landing: <button type='button' id='SAN_standard_left' class='btn" + ((flows['SAN'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SAN\", 0)'>West Rwy27</button>&nbsp;&nbsp;<button type='button' id='SAN_standard_right' class='btn" + ((flows['SAN'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SAN\", 1)'>East Rwy9</button>";
			break;
		case "SBA":
			result += "<br/><br/>SBA - Always run VAA; Rwy 25 is about 2k lbs worse.";
			result += "<br/>SBA - Tailwind takeoff N/A. Check NOTAMs for crane penalty";
			break;
		case "SBP":
			result += "<br/><br/>SBP - Mountains off Rwy11; Watch winds and run VAA";
			result += "<br/><br/>SBP Flow: <button type='button' id='SBP_standard_left' class='btn" + ((flows['SBP'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SBP\", 0)'>East Rwy 11</button>&nbsp;&nbsp;<button type='button' id='SBP_standard_right' class='btn" + ((flows['SBP'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SBP\", 1)'>West Rwy 29</button>";
			show_flow_info = "West Rwy29: CREPE<br/>East Rwy11: AVILA, WYNNR";
			break;
		case "SFO":
			result += "<br/>";
			if (["P798", "N787", "E787","B772","W773"].includes(ac_type)) {
				result += "<br/>Rwy19L N/A and rwy19R N/A for B787 and B777 (See comply memo)";
			}
			result += "<br/>SFO curfew (2100-0700L): Dptrs to northeast use NIITE";
			result += "<br/><br/>SFO Dptg: <button type='button' id='SFO_standard_left' class='btn" + ((flows['SFO'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SFO\", 0)'>1L/1R</button>" +
				"&nbsp;&nbsp;<button type='button' id='SFO_standard_middle' class='btn" + ((flows['SFO'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SFO\", 1)'>28L/28R</button>" +
				"&nbsp;&nbsp;<button type='button' id='SFO_standard_right' class='btn" + ((flows['SFO'] == 2) ? " selected" : "") + "' onclick='change_flow(\"SFO\", 2)'>10LR/19LR</button>";
			result += "<br/>Make sure SID matches rwy in use. TRUKN is good on all runways;";
			show_flow_info = "Rwy 1L/1R: NIITE, SEGUL, SSTIK<br/>Rwy28: GNNRR, NIITE, SEGUL, SNTNA, WESLA<br/>Rwy19: SAHEY";
			break;
		case "SJC":
			result += "<br/><br/>SJC - Curfew rstr: 2330-0630L (see 10-9A), 30 min extension possible";
			result += "<br/>SJC - B737 MAX and A32F NEO exempt from curfew (see 10-7A-2)";
			result += "<br/><br/>SJC Flow: <button type='button' id='SJC_standard_left' class='btn" + ((flows['SJC'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SJC\", 0)'>North</button>&nbsp;&nbsp;<button type='button' id='SJC_standard_right' class='btn" + ((flows['SJC'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SJC\", 1)'>South</button>";
			show_flow_info = "South Rwy12: ALMDN, BMRNG, TECKY<br/>North Rwy30: LOUPE, SJC3, SPTNS";
			break;
		case "SLC":
			result += "<br/><br/>SLC - Run VAA in summer";
			result += "<br/><br/>SLC Flow: <button type='button' id='SLC_standard_left' class='btn" + ((flows['SLC'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SLC\", 0)'>North</button>&nbsp;&nbsp;<button type='button' id='SLC_standard_right' class='btn" + ((flows['SLC'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SLC\", 1)'>South</button>";
			show_flow_info = "North Rwy34/35: ARCHZ, SEVYR<br/>South Rwy16: ZIONZ<br/>Both: RUGGD, DEZRT";
			break;
		case "SMF":
			result += "<br/><br/>SMF - Run VAA above 25C";
			result += "<br/><br/>SMF Flow: <button type='button' id='SMF_standard_left' class='btn" + ((flows['SMF'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SMF\", 0)'>North</button>&nbsp;&nbsp;<button type='button' id='SMF_standard_right' class='btn" + ((flows['SMF'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SMF\", 1)'>South</button>";
			show_flow_info = "North Rwy35: RVRCT<br/>South Rwy17: SCTWN";
			break;
		case "SNA":
			result += "<br/>";
			if (arvl == "PHX") {
				// Comply memo 3/26/24 Class E SNA Noise Abatement Restrictions
				result += "<br/><b>SNA - Class E flights rstr MTOW 167.500 on 321E acft, see comply memo from 3-26-2024</b>";
			}
			result += "<br/>SNA - Check VAA, especially when wet";
			result += "<br/>SNA - Curfew rstr: takeoff N/A without approval 2155-0700L (0800L on Sundays), 15 min extension possible";
			result += "<br/><br/>SNA Flow: <button type='button' id='SNA_standard_left' class='btn" + ((flows['SNA'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SNA\", 0)'>South</button>&nbsp;&nbsp;<button type='button' id='SNA_standard_right' class='btn" + ((flows['SNA'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SNA\", 1)'>North</button>";
			show_flow_info = "North Rwy2L: HOBOW, MIKAA<br/>South Rwy20R: FINZZ, HHERO, STAYY<br/>Both: PIGGN";
			break;
		case "TUS":
			result += "<br/><br/>TUS Flow: <button type='button' id='TUS_standard_left' class='btn" + ((flows['TUS'] == 0) ? " selected" : "") + "' onclick='change_flow(\"TUS\", 0)'>SE Rwy 12</button>&nbsp;&nbsp;<button type='button' id='TUS_standard_right' class='btn" + ((flows['TUS'] == 1) ? " selected" : "") + "' onclick='change_flow(\"TUS\", 1)'>NW Rwy 30</button>";
			show_flow_info = "North Rwy30: WLDKT<br/>South Rwy12: BURRO, STAYY<br/>Both: TUS9";
			break;
		case "VPS":
			result += "<br/><br/>VPS - If arresting cables are inop, use B runways for TPS";
			break;
		case "YEG":
		case "YOW":
		case "YUL":
		case "YVR":
		case "YYC":
		case "YYZ":
			result += "<br/><br/>Canadian required departures are in FD Pro Pubs -> North America -> North American Airway Manuals -> Enroute Data North America -> Canada High Altitude Mandatory Routes";
			break;
/* Latin Depatures */
		case "AUA":
			result += "<br/><br/>AUA - Customs pre-cleared. No issues at arrival station";
			break;
	}
	if (show_flow_info.length > 0) {
		result += "&nbsp;&nbsp;&nbsp;<button type='button' id='flow_desc_button' onclick='$(\"#flow_desc_text\").toggle(); $(\"#flow_desc_button\").text(($(\"#flow_desc_button\").text().includes(\"Show\")) ? \"Hide SIDS\" : \"Show SIDS\");'>Show SIDS</button>";
		result += "<div id='flow_desc_text' style='display:none'>" + show_flow_info + "</div>";
	}

	show_flow_info = "";
	switch(arvl) {
		case "ABQ":
			result += "<br/><br/>ABQ - No ILS Rwy21 or Rwy26 // RNAV apchs cannot be used for alternate planning";
			result += "<br/>ABQ - Rwy12/30 N/A (See 10-7A)";
			break;
		case "ATL":
			result += "<br/><br/>ATL Flow: <button type='button' id='ATL_standard_left' class='btn" + ((flows['ATL'] == 0) ? " selected" : "") + "' onclick='change_flow(\"ATL\", 0)'>West</button>&nbsp;&nbsp;<button type='button' id='ATL_standard_right' class='btn" + ((flows['ATL'] == 1) ? " selected" : "") + "' onclick='change_flow(\"ATL\", 1)'>East</button>";
			show_flow_info = "East Rwy8/9: SITTH<br/>West Rwy26/27: JJEDI";
			break;
		case "BFL":
			result += "<br/><br/>BFL - 12R/30L N/A, see 10-7A";
			break;
		case "BHM":
			result += "<br/><br/>BHM - Landing 18/36 N/A per 10-7";
			break;
		case "BIL":
			result += "<br/><br/>BIL - Run VAA if departing rwy28R";
			break;
		case "BUR":
			result += "<br/><br/>BUR - Voluntary curfew 2200-0700L";
			result += "<br/>BUR - Wet: Use LAWS, ATC prefers rwy33 and rwy8";
			break;
		case "BZN":
			result += "<br/><br/>BZN - Run LAWS above 30C";
			result += "<br/>BZN Night: Circle to Land N/A";
			result += "<br/><br/>BZN Flow: <button type='button' id='BZN_standard_left' class='btn" + ((flows['BZN'] == 0) ? " selected" : "") + "' onclick='change_flow(\"BZN\", 0)'>SE Rwy 12</button>&nbsp;&nbsp;<button type='button' id='BZN_standard_right' class='btn" + ((flows['BZN'] == 1) ? " selected" : "") + "' onclick='change_flow(\"BZN\", 1)'>NW Rwy 30</button>";
			show_flow_info = "NW Rwy30: SUBKY<br/>SE Rwy12: POWDA";
			break;
		case "COS":
			result += "<br/><br/>COS - Rwy31 N/A";
			break;
		case "DCA":
			result += "<br/><br/>Curfew rstr 2200L - 0659L";
			var tmp_mlw = get_dca_mlw(ac_type, tail);
			if (tmp_mlw != null) { result += "<br/>" + tmp_mlw; }
			break;
		case "DEN":
			result += "<br/><br/>DEN - Run LAWS above 20C";
			break;
		case "DFW":
			result += "<br/><br/>DFW Flow: <button type='button' id='DFW_standard_left' class='btn" + ((flows['DFW'] == 0) ? " selected" : "") + "' onclick='change_flow(\"DFW\", 0)'>South</button>&nbsp;&nbsp;<button type='button' id='DFW_standard_right' class='btn" + ((flows['DFW'] == 1) ? " selected" : "") + "' onclick='change_flow(\"DFW\", 1)'>North</button>";
			show_flow_info = "North Rwy35/36: JOVEM / BRDJE / SOCKK / WHINY<br/>South Rwy17/18: VKTRY / SEEVR / BOOVE / BEREE";
			break;
		case "DTW":
			result += "<br/><br/>DTW Flow: <button type='button' id='DTW_standard_left' class='btn" + ((flows['DTW'] == 0) ? " selected" : "") + "' onclick='change_flow(\"DTW\", 0)'>North</button>&nbsp;&nbsp;<button type='button' id='DTW_standard_right' class='btn" + ((flows['DTW'] == 1) ? " selected" : "") + "' onclick='change_flow(\"DTW\", 1)'>South</button>";
			show_flow_info = "North Rwy3/4: KLYNK / CRAKN / CUUGR / WNGNT / GRAYT / LECTR / HAYLL / KKISS<br/>South Rwy21/22: BONZZ / HTROD / TPGUN / FERRL / LAYKS / HANBL / VCTRZ / RKCTY";
			break;
		case "EGE":
			result += "<br/><br/>EGE Can handle 3 acft max: 2 gates + deice pad. Expect station to call for delay.";
			result += "<br/>EGE - ARFF manages snow plow ops and notams";
			result += "<br/>EGE - Send RAIM Check RNP .11 // LAWS above 37C";
			result += "<br/><br/>EGE - MALSR and PAPI required for night arrivals.";
			result += "<br/>EGE - Rwy 7 and Visual Rwy 25 N/A after Civil Twilight";
			break;
		case "EYW":
			result += "<br/><br/>EYW - Max crosswind 20 knots (see 10-7B)";
			result += "<br/>EYW - Papi and GPS required at night (see 10-7B)";
			result += "<br/>EYW - Wet/Dry definitions FOM 2.1.6";
			result += "<br/>EYW - CA needs 75 hrs in AC type// FAM page review required";
			break;
		case "GEG":
			result += "<br/><br/>GEG - Run LAWS above 35C";
			break;
		case "GUC":
			result += "<br/><br/>GUC - VOR, Circle-to-Land, Visual N/A; Rwy 24 N/A at night";
			result += "<br/>GUC Cold Temp chart below -26C";
			break;
		case "IAH":
			result += "<br/><br/>IAH Flow: <button type='button' id='IAH_standard_left' class='btn" + ((flows['IAH'] == 0) ? " selected" : "") + "' onclick='change_flow(\"IAH\", 0)'>West</button>&nbsp;&nbsp;<button type='button' id='IAH_standard_right' class='btn" + ((flows['IAH'] == 1) ? " selected" : "") + "' onclick='change_flow(\"IAH\", 1)'>East</button>";
			show_flow_info = "East Rwy8/9: GUSHR<br/>West Rwy26/27: DRLLR";
			break;
		case "JAC":
			result += "<br/><br/>JAC - Plan at least 5k spread between ferry fuel and mlw";
			result += "<br/>JAC Night: Visual approaches N/A, ARFF curfew 2330L";
			result += "<br/>JAC - Coordinate rwy clearing during snow events per F-2 notam";
			result += "<br/>JAC - Cold Temp chart below -21C";
			break;
		case "LAS":
			result += "<br/><br/>LAS - Run LAWS above 35C";
			break;
		case "MCO":
			result += "<br/><br/>MCO Flow: <button type='button' id='MCO_standard_left' class='btn" + ((flows['MCO'] == 0) ? " selected" : "") + "' onclick='change_flow(\"MCO\", 0)'>South</button>&nbsp;&nbsp;<button type='button' id='MCO_standard_right' class='btn" + ((flows['MCO'] == 1) ? " selected" : "") + "' onclick='change_flow(\"MCO\", 1)'>North</button>";
			show_flow_info = "North Rwy35/36: SNFLD<br/>South Rwy17/18: GTOUT<br/>Both: GRNCH, PRICY, ALYNA";
			break;
		case "MFE":
			result += "<br/><br/>MFE - Notify Ops of any arrivals after midnight local";
			break;
		case "MSO":
			result += "<br/><br/>MSO - Below -12C Cold Temp Correction only available ILS Rwy12, see FOM 9w.4";
			result += "<br/>MSO - Run LAWS above 35C";
			break;
		case "MTJ":
			result += "<br/><br/>MTJ - No Control Tower";
			result += "<br/>MTJ - Rwy 13/31 N/A";
			result += "<br/>MTJ - At night: Rwy 35 N/A; no circle to land";
			break;
		case "PSP":
			result += "<br/><br/>PSP - No ILS procedures, do not plan RNAV apch for alternates";
			break;
		case "RDM":
			result += "<br/><br/>RDM - Rwy11/29 N/A for A320 and non-sharklet A321, see 10-7A-2";
			result += "<br/>RDM - TSA closes 1945L";
			break;
		case "RIC":
			result += "<br/><br/>RIC - primary AA gates A6 and A8, AE gates A10, A12, & A14";
			break;
		case "RNO":
			result += "<br/><br/>RNO Flow: <button type='button' id='RNO_standard_left' class='btn" + ((flows['RNO'] == 0) ? " selected" : "") + "' onclick='change_flow(\"RNO\", 0)'>South</button>&nbsp;&nbsp;<button type='button' id='RNO_standard_right' class='btn" + ((flows['RNO'] == 1) ? " selected" : "") + "' onclick='change_flow(\"RNO\", 1)'>North</button>";
			show_flow_info = "North Rwy35: TARVR, EELZA, WADOL<br/>South Rwy17: SCOLA, KLUBS, ORRCA, RYANN, WINRZ";
			break;
		case "SAN":
			result += "<br/><br/>SAN Landing: <button type='button' id='SAN_standard_left' class='btn" + ((flows['SAN'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SAN\", 0)'>West Rwy27</button>&nbsp;&nbsp;<button type='button' id='SAN_standard_right' class='btn" + ((flows['SAN'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SAN\", 1)'>East Rwy9</button>";
			result += "<br/>SAN - Use TOPGN instead of LUCKI when KSAN is landing east and departing west";
			break;
		case "SBA":
			result += "<br/><br/>SBA - Plan 5k spread on ferry fuel";
			break;
		case "SBP":
			result += "<br/><br/>SBP - Run LAWS when wet; Rwy 11 LDA 5300 feet // Rwy 29 LDA 5600";
			break;
		case "SJC":
			if (["321E", "738M"].includes(ac_type)) { // A32F neo & B737 max
				result += "<br/><br/>SJC - " + ((ac_type == "738M") ? "B737 MAX" : "A32F NEO") + " acft are exempt from curfew (see 10-7A-2)";
			} else {
				result += "<br/><br/>SJC - Curfew rstr: 2330-0630L (see 10-9A), 30 min extension possible";
			}
			break;
		case "SLC":
			result += "<br/><br/>SLC - Run LAWS above 30C";
			result += "<br/><br/>SLC Flow: <button type='button' id='SLC_standard_left' class='btn" + ((flows['SLC'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SLC\", 0)'>North</button>&nbsp;&nbsp;<button type='button' id='SLC_standard_right' class='btn" + ((flows['SLC'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SLC\", 1)'>South</button>";
			show_flow_info = "North Rwy34: JAZZZ, QWENN<br/>South Rwy16: PITTT";
			break;
		case "SNA":
			result += "<br/><br/>SNA Flow: <button type='button' id='SNA_standard_left' class='btn" + ((flows['SNA'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SNA\", 0)'>South</button>&nbsp;&nbsp;<button type='button' id='SNA_standard_right' class='btn" + ((flows['SNA'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SNA\", 1)'>North</button>";
			result += "<br/>SNA - DSNEE S FLOW (rwy20R) // ROOBY N FLOW (rwy2L), see chart notes";
			result += "<br/><br/>SNA - Curfew rstr: landing N/A without approval 2300-0705L (0805L on Sundays), 15 min extension possible";
			break;
		case "TUS":
			result += "<br/><br/>TUS - Run LAWS above 35C";
			result += "<br/>TUS - NO ILS apchs for Rwy30";
			result += "<br/>TUS - Night: Visual appr N/A (see 10-7B)";
			break;
		case "YEG":
			result += "<br/><br/>Canadian required routes are in FD Pro Pubs -> North America -> North American Airway Manuals -> Enroute Data North America -> Canada High Altitude Mandatory Routes";
			break;
		case "YOW":
			result += "<br/><br/>Canadian required routes are in FD Pro Pubs -> North America -> North American Airway Manuals -> Enroute Data North America -> Canada High Altitude Mandatory Routes";
			break;
		case "YUL":
			result += "<br/><br/>YUL - Curfew rstr 0100L - 0700L, Extensions authorized";
			result += "<br/>Canadian required routes are in FD Pro Pubs -> North America -> North American Airway Manuals -> Enroute Data North America -> Canada High Altitude Mandatory Routes";
			break;
		case "YVR":
			result += "<br/><br/>YVR - Curfew rstr 0000L - 0600L, Extensions authorized";
			result += "<br/>YVR - Rwy 13/31 N/A";
			result += "<br/>Canadian required routes are in FD Pro Pubs -> North America -> North American Airway Manuals -> Enroute Data North America -> Canada High Altitude Mandatory Routes";
			break;
		case "YYC":
			result += "<br/><br/>YYC - If alt needed: Check Customs for YEG; GEG is a good backup";
			result += "<br/>Canadian required routes are in FD Pro Pubs -> North America -> North American Airway Manuals -> Enroute Data North America -> Canada High Altitude Mandatory Routes";
			break;
		case "YYZ":
			result += "<br/><br/>YYZ - Curfew 0030-0630L; Extensions authorized (else pay fine)";
			result += "<br/>Airbus and Boeing are Stage 3 acft";
			result += "<br/>Canadian required routes are in FD Pro Pubs -> North America -> North American Airway Manuals -> Enroute Data North America -> Canada High Altitude Mandatory Routes";
			break;
	}
	if (show_flow_info.length > 0) {
		result += "&nbsp;&nbsp;&nbsp;<button type='button' id='star_desc_button' onclick='$(\"#star_desc_text\").toggle(); $(\"#star_desc_button\").text(($(\"#star_desc_button\").text().includes(\"Show\")) ? \"Hide STARS\" : \"Show STARS\");'>Show STARS</button>";
		result += "<div id='star_desc_text' style='display:none'>" + show_flow_info + "</div>";
	}

	result = add_sara_rmks(arvl, result);
	return result;
}

change_flow = function (airport = null, new_config = null, override_duplicated = false) {
	airport = ((airport == null) ? null : airport.toUpperCase(0));
	if ((override_duplicated && airport != null) || ([0,1,2].includes(new_config) && flows[airport] !== undefined)) {
		flows[airport] = new_config;
		$('input').each(function() {
			$(this).val(change_flow_str(airport, new_config, $(this).val()));
		});
		if (new_config == 0) { // Left clicked
			$("#" + airport + "_standard_left").addClass("selected");
			$("#" + airport + "_standard_right").removeClass("selected");
			if (["SFO","LAX"].includes(airport)) {
				$("#" + airport + "_standard_middle").removeClass("selected");
			}
		} else if (new_config == 1) { // Right clicked (middle for SFO and LAX)
			$("#" + airport + "_standard_left").removeClass("selected");
			if (["SFO","LAX"].includes(airport)) {
				$("#" + airport + "_standard_right").removeClass("selected");
				$("#" + airport + "_standard_middle").addClass("selected");
			} else {
				$("#" + airport + "_standard_right").addClass("selected");
			}
		} else if (new_config == 2) { // right clicked (SFO and LAX)
			$("#" + airport + "_standard_left").removeClass("selected");
			$("#" + airport + "_standard_middle").removeClass("selected");
			$("#" + airport + "_standard_right").addClass("selected");
		}
	} else if (!override_duplicated && debug_mode) { console.log("Unknown new_config: " + new_config);
	} else if (debug_mode) { console.log("Click registered, but no change detected"); }
}

change_flow_str = function (airport = "XXX", new_config = -1, result = "") {
	if (airport != "XXX" && [0,1,2].includes(new_config)) {
		if (new_config == 0) { // Left clicked
				switch(airport) {
					case "ABQ": // ABQ east // Rwy8
						result = result.replaceAll("KABQ ADYOS3", "KABQ RDRNR3");
						result = result.replaceAll("KABQ ATOMK3 ATOMK", "KABQ JEMEZ3 JEMEZ");
						result = result.replaceAll("KABQ BOSQE3", "KABQ MNZNO3");
						result = result.replaceAll("KABQ DOOKK3", "KABQ MNZNO3");
						result = result.replaceAll("KABQ FYSTA3 FTI", "KABQ GRZZZ4 FLAVA");
						result = result.replaceAll("KABQ FYSTA3 JLPNO", "KABQ  GRZZZ4 POPRR");
						break;
					case "ATL": // ATL west
						result = result.replaceAll("SITTH3 KATL", "JJEDI4 KATL");
						result = result.replaceAll("GNDLF3 KATL", "HOBTT3 KATL");
						break;
					case "BZN": // BZN southeast / Rwy12
						result = result.replaceAll("KBZN MEADO2 DBS", "KBZN BGSKY2 DBS");
						result = result.replaceAll("KBZN MEADO2 HIA", "KBZN BGSKY2 HIA");
						result = result.replaceAll("KBZN MEADO2 TOOLS BOY", "KBZN BOBKT5 BOY"); // Replace MEADO-BOY
						result = result.replaceAll("KBZN MEADO2 TOOLS", "KBZN YODOG TOOLS"); // Replace other MEADO dptrs
						result = result.replaceAll("KBZN MEADO2 CREKK", "KBZN BOBKT5 BIL");
						result = result.replaceAll("BIL SUBKY1 KBZN", "CREKK POWDA1 KBZN");
						break;
					case "DFW": // DFW south
						result = result.replaceAll("JOVEM6 KDFW", "VKTRY2 KDFW");
						result = result.replaceAll("BRDJE5 KDFW", "SEEVR4 KDFW");
						result = result.replaceAll("SOCKK4 KDFW", "BOOVE7 KDFW");
						result = result.replaceAll("WHINY4 KDFW", "BEREE3 KDFW");
						break;
					case "DTW": // DTW north / Rwy3 Rwy4
						result = result.replaceAll("BONZZ2 KDTW", "KLYNK3 KDTW");
						result = result.replaceAll("HTROD2 KDTW", "CRAKN2 KDTW");
						result = result.replaceAll("TPGUN2 KDTW", "CUUGR2 KDTW");
						result = result.replaceAll("FERRL2 KDTW", "WNGNT2 KDTW");
						result = result.replaceAll("LAYKS2 KDTW", "GRAYT2 KDTW");
						result = result.replaceAll("HANBL3 KDTW", "LECTR3 KDTW");
						result = result.replaceAll("VCTRZ2 KDTW", "HAYLL3 KDTW");
						result = result.replaceAll("RKCTY2 KDTW", "KKISS2 KDTW");
						break;
					case "ELP": // ELP SW // Rwy22
						result = result.replaceAll("KELP JCOXX2 SLNNK", "KELP ATKNN5 SLNNK");
						result = result.replaceAll("KELP JCOXX2 GREBE", "KELP ATKNN5 GREBE");
						result = result.replaceAll("KELP JCOXX2 HBACK", "KELP ATKNN5 FLOGS");
						result = result.replaceAll("KELP JCOXX2 TELKE", "KELP ATKNN5 NOCHI");
						result = result.replaceAll("KELP JCOXX2 JCOXX", "KELP ATKNN5 ATKNN");
					case "FCA":
					case "GPI": // FCA North // Rwy2
						result = result.replaceAll("KGPI GPI1 CHOTE", "KGPI RIDDG1 SKOTT CHOTE");
						result = result.replaceAll("KGPI GPI1 SKOTT", "KGPI RIDDG1 SKOTT");
						result = result.replaceAll("KGPI GPI1 ANGIL", "KGPI RIDDG1 RIDDG");
					case "IAH": // IAH west // Rwy26 Rwy27
						result = result.replaceAll("SKNRD5 KIAH", "DOOBI3 KIAH");
						result = result.replaceAll("GUSHR3 KIAH", "DRLLR5 KIAH");
						result = result.replaceAll("GESNR2 KIAH", "ZEEKK3 KIAH");
						result = result.replaceAll("HTOWN3 KIAH", "TEJAS5 KIAH");
						result = result.replaceAll("NNCEE2 KIAH", "LINKK1 KIAH");
						result = result.replaceAll("TTORO3 KIAH", "MSCOT4 KIAH");
						// IAH SIDS
						result = result.replaceAll("KIAH PITZZ5", "KIAH BNDTO6");
						result = result.replaceAll("KIAH GUMBY3", "KIAH MMUGS4");
						break;
					case "JAC": // JAC South // Rwy19 // ALPIN/TETON
						result = result.replaceAll("KJAC DIVYD2 HUKET IDA", "KJAC ALPIN4 IDA"); // HUKET via IDA first
						result = result.replaceAll("KJAC DIVYD2 HUKET", "KJAC ALPIN4 IDA HUKET"); // All else HUKET via IDA
						result = result.replaceAll("KJAC DIVYD2 DNW BPI", "KJAC ALPIN4 BPI");
						result = result.replaceAll("KJAC DIVYD2 DNW", "KJAC ALPIN4 BPI"); // All Else
						result = result.replaceAll("KJAC DIVYD2 BOY", "KJAC ALPIN4 BPI BOY");
						result = result.replaceAll("KJAC DIVYD2 JEDHY BPI", "KJAC ALPIN4 BPI"); // BPI via JEDHY
						result = result.replaceAll("KJAC DIVYD2 JEDHY", "KJAC ALPIN4 KICNE"); // All other JEDHY
						result = result.replaceAll("KJAC GEYSR6 DNW", "KJAC TETON3 KICNE");
						break;
					case "LAX": // LAX West // Rwy 24/25
						// SIDS
/* TODO
						result = result.replaceAll("KLAX DOTSS2 CNERY", "");
						result = result.replaceAll("KLAX DOTSS2 CLEEE", "");
						result = result.replaceAll("KLAX OSHNN1 BEALE", "KLAX GARDY4 BEALE");
						result = result.replaceAll("KLAX OSHNN1 MISEN", "");
						result = result.replaceAll("KLAX PNDAH2 TCATE", "");
						result = result.replaceAll("KLAX PNDAH2 OTAYY", "");
						result = result.replaceAll("KLAX SEBBY3 DAG", "");
						result = result.replaceAll("KLAX PNDAH2 TCATE", "");
						result = result.replaceAll("KLAX SKWRL2 GMN", "");
						result = result.replaceAll("KLAX SKWRL2 VALEY", "");
						result = result.replaceAll("KLAX STHBY1 MISEN", "");
						result = result.replaceAll("KLAX STHBY1 BEALE", "KLAX GARDY4 BEALE");
						result = result.replaceAll("KLAX STHBY1 CLEEE", "");
						result = result.replaceAll("KLAX STHBY1 CNERY", "");
						result = result.replaceAll("KLAX STHBY1 TCATE", "");
						result = result.replaceAll("KLAX STHBY1 OTAYY", "");
						result = result.replaceAll("KLAX ZILLI5 FICKY", "");
*/
						// STARS
						result = result.replaceAll("BIGBR3 KLAX", "ANJLL4 KLAX");
						result = result.replaceAll("OTOOL MDNYT2 KLAX", "OTOOL ANJLL4 KLAX");
						result = result.replaceAll("HAKMN MDNYT2 KLAX", "HAKMN ANJLL4 KLAX");
						result = result.replaceAll("DNERO MDNYT2 KLAX", "DNERO ANJLL4 KLAX");
						result = result.replaceAll("CGNEY MDNYT2 KLAX", "CGNEY ANJLL4 KLAX");
						result = result.replaceAll("BRUEN2 KLAX", "HLYWD1 KLAX");
						result = result.replaceAll("FNNDA MDNYT2 KLAX", "FNNDA HLYWD1 KLAX");
						result = result.replaceAll("GABBL MDNYT2 KLAX", "GABBL HLYWD1 KLAX");
						result = result.replaceAll("ESTWD MDNYT2 KLAX", "ESTWD HLYWD1 KLAX");
						result = result.replaceAll("AMMOR MDNYT2 KLAX", "AMMOR OLAAA2 KLAX");
						result = result.replaceAll("ZUUMA4 KLAX", "IRNMN2 KLAX");
						// result = result.replaceAll("FICKY LEENA8 KLAX", "FICKY GOATZ2 KLAX");
						// result = result.replaceAll("ROSIN LEENA8 KLAX", "ROSIN GOATZ2 KLAX");
						
						// NON RNAV
						result = result.replaceAll("HEC BASET5 KLAX", "HEC J6 PMD SADDE8 KLAX");
						result = result.replaceAll("PGS BASET5 KLAX", "PGS J64 HEC J6 PMD SADDE8 KLAX");
						result = result.replaceAll("JLI BASET5 KLAX", "JLI OCEAN3 KLAX");
						result = result.replaceAll("TNP BASET5 KLAX", "TNP SEAVU2 KLAX");
						result = result.replaceAll("MOOR4 KLAX", "SADDE8 KLAX");
						break;
					case "MCO": // MCO south // Rwy17 Rwy18
						result = result.replaceAll("SNFLD3 KMCO", "GTOUT1 KMCO");
						break;
					case "MIA": // MIA east // Rwy8 Rwy9
						// TODO GLADZ east // BNGOS west
						// result = result.replaceAll("", "");
						break;
					case "MSO": // MSO southeast // Rwy12
						result = result.replaceAll("MSO DIDLY5", "MSO MZULA5");
						result = result.replaceAll("MSO GRZLY3 MSO HLN", "MSO VICTO1 HLN");
						result = result.replaceAll("MSO GRZLY3 MSO SKOTT", "MSO VICTO1 SKOTT");
						break;
					case "PSP": // PSP South // Rwy 13R
						// SIDS: IKONE JEEON LGANN 
						result = result.replaceAll("KPSP HWRRD1 ZELMA", "KPSP IKONE1 ZELMA");
						result = result.replaceAll("KPSP HWRRD1 EED", "KPSP IKONE1 EED");
						result = result.replaceAll("KPSP HWRRD1 BLH", "KPSP JEEON1 BLH");
						result = result.replaceAll("KPSP HWRRD1 TRM", "KPSP JEEON1 TRM");
						result = result.replaceAll("KPSP YUCCA1", "KPSP LGANN1");
						break;
					case "RNO": // RNO south // Rwy17
						result = result.replaceAll("EELZA4", "KLUBS1");
						result = result.replaceAll("ORRCA TARVR1 KRNO", "ORRCA ORRCA1 KRNO");
						result = result.replaceAll("MVA TARVR1 KRNO", "MVA SCOLA1 KRNO");
						result = result.replaceAll("SLEAT TARVR1 KRNO", "SLEAT KRNO");
						result = result.replaceAll("KENNO TARVR1 KRNO", "KENNO SCOLA1 KRNO");
						result = result.replaceAll("WADOL4 KRNO", "WINRZ4 KRNO");
						// RNO SIDS
						result = result.replaceAll("KRNO ALPYN1 YERIN","KRNO ZEFFR9 PESKE");
						result = result.replaceAll("KRNO SPRKS1 FMG BLKJK","KRNO ZEFFR9 BLKJK");
						result = result.replaceAll("KRNO PVINE5 PVINE", "KRNO SPRKS1 FMG");
						result = result.replaceAll("KRNO PVINE5", "KRNO SPRKS1 FMG");
						break;
					case "SAN": // SAN east // Rwy27
						// IPL LUCKI1 SAN - ATC assigned only
						result = result.replaceAll("HOGGZ IPL TOPGN2 KSAN", "HOGGZ LUCKI1 KSAN");
						result = result.replaceAll("J2 IPL TOPGN2 KSAN", "J2 HOGGZ LUCKI1 KSAN");
						result = result.replaceAll("LVELL MOMAR TOPGN2 KSAN", "LVELL LUCKI1 KSAN");
						result = result.replaceAll("TOPGN2 KSAN", "LUCKI1 KSAN");
						// SIDS
						result = result.replaceAll("KSAN SAYOW2 MTBAL", "KSAN ZZOOO4 MTBAL");
						result = result.replaceAll("KSAN SAYOW2 IPL TGOLD", "KSAN ZZOOO4 TGOLD");
						result = result.replaceAll("KSAN SAYOW2 IPL GBN", "KSAN ZZOOO4 GBN");
						result = result.replaceAll("KSAN SAYOW2 IPL", "KSAN BRDR7 IPL");
						break;
					case "SBP": // SBP East Rwy 11// AVILA WYNNR
						result = result.replaceAll("KSBP CREPE3 MQO GVO", "KSBP AVILA4 GVO");
						result = result.replaceAll("KSBP CREPE3 MQO", "KSBP AVILA4 MQO");
						result = result.replaceAll("KSBP CREPE3 BSR", "KSBP WYNNR4 PRB BSR");
						result = result.replaceAll("KSBP CREPE3 PRB", "KSBP WYNNR4 PRB");
						result = result.replaceAll("KSBP CREPE3 CREPE FLW", "KSBP WYNNR4 FLW");
						result = result.replaceAll("KSBP CREPE3 CREPE RZS", "KSBP WYNNR4 RZS");
						break;
					case "SFO": // SFO dpting 1L/1R // SSTIK 
						// South
						result = result.replaceAll("KSFO SAHEY4", "KSFO SSTIK5");
						result = result.replaceAll("KSFO WESLA5", "KSFO SSTIK5");
						result = result.replaceAll("KSFO SEGUL1 YYUNG", "KSFO SSTIK5 YYUNG");
						// East
						result = result.replaceAll("KSFO CIITY3", "KSFO TRUKN2");
						break;
					case "SJC": // SJC North // Rwy30 // LOUPE/SJC3/SPTNS
						result = result.replaceAll("KSJC ALMDN4", "KSJC LOUPE1");
						result = result.replaceAll("KSJC BMRNG4", "KSJC LOUPE1");
						result = result.replaceAll("KSJC TECKY4 VLREE AVE", "KSJC SJC3 AVE");
						result = result.replaceAll("KSJC TECKY4", "KSJC SPTNS1");
						break;
					case "SLC": // SLC North // Rwy34
						result = result.replaceAll("DELTA6 KSLC", "QWENN5 KSLC");
						result = result.replaceAll("JAMMN5 KSLC", "QWENN5 KSLC");
						// SIDS // ARCHZ CGULL DEZRT RUGGD SEVYR
						// result = result.replaceAll("KSLC ZIONZ1 KROST", "KSLC ARCHZ1 KROST");
						// result = result.replaceAll("KSLC ZIONZ1 EHK", ""); // TODO
						// result = result.replaceAll("KSLC ZIONZ1 BCE", ""); // TODO
						result = result.replaceAll("KSLC ZIONZ1 EYELO", "KSLC RUGGD3 KIERA"); // TODO
						result = result.replaceAll("KSLC ZIONZ1 KIMMR", "KSLC RUGGD3 KIERA");
						// result = result.replaceAll("KSLC FFU9 HVE", ""); // TODO
						// result = result.replaceAll("KSLC FFU9 BCE", ""); // TODO
						// result = result.replaceAll("KSLC FFU9 OAL", ""); // TODO
						// STARS
						result = result.replaceAll("EKR PITTT1 KSLC", "EKR RACER JAZZZ1 KSLC");
						result = result.replaceAll("HELPR PITTT1 KSLC", "HELPR JAZZZ1 KSLC");
						result = result.replaceAll("MLF PITTT1 KSLC", "MLF QWENN6 KSLC");
						result = result.replaceAll("BCE PITTT1 KSLC", "BCE QWENN6 KSLC");
						break;
					case "SMF": // SMF north // Rwy35
						result = result.replaceAll("KSMF SCTWN4", "KSMF RVRCT4");
						break;
					case "SNA": // SNA south // Rwy20R
						result = result.replaceAll("ROOBY3 KSNA", "DSNEE6 KSNA");
						break;
					case "TUS": // TUS southeast / Rwy12
						result = result.replaceAll("KTUS WLDKT4 SSO", "KTUS BURRO5 NOCHI SSO");
						result = result.replaceAll("KTUS WLDKT4", "KTUS BURRO5");
						break;
				}
		} else if (new_config == 1) {
				switch(airport) {
					case "ABQ": // ABQ west // Rwy26
						result = result.replaceAll("KABQ RDRNR3", "KABQ ADYOS3");
						result = result.replaceAll("KABQ JEMEZ3 JEMEZ", "KABQ ATOMK3 ATOMK");
						result = result.replaceAll("KABQ GRZZZ4 FLAVA", "KABQ FYSTA3 FTI");
						result = result.replaceAll("KABQ  GRZZZ4 POPRR", "KABQ FYSTA3 JLPNO");
						result = result.replaceAll("KABQ MNZNO3 SJN", "KABQ BOSQE3 SJN");
						result = result.replaceAll("KABQ MNZNO3 ONM", "KABQ BOSQE3 ONM");
						result = result.replaceAll("KABQ MNZNO3 TXO", "KABQ DOOKK3 TXO");
						result = result.replaceAll("KABQ MNZNO3 CME", "KABQ DOOKK3 CME");
						result = result.replaceAll("KABQ MNZNO3 MOLVE", "KABQ DOOKK3 MOLVE");
						result = result.replaceAll("KABQ MNZNO3 LAMSE", "KABQ BOSQE3 LAMSE");
						break;
					case "ATL": // ATL east
						result = result.replaceAll("JJEDI4 KATL", "SITTH3 KATL");
						result = result.replaceAll("HOBTT3 KATL", "GNDLF3 KATL");
						break;
					case "BZN": // BZN northwest / Rwy30
						result = result.replaceAll("KBZN BGSKY2 DBS", "KBZN MEADO2 DBS");
						result = result.replaceAll("KBZN BGSKY2 HIA", "KBZN MEADO2 HIA");
						result = result.replaceAll("KBZN BOBKT5 BIL", "KBZN MEADO2 CREKK");
						result = result.replaceAll("KBZN BOBKT5 BOY", "KBZN MEADO2 TOOLS BOY");
						result = result.replaceAll("CREKK POWDA1 KBZN", "BIL SUBKY1 KBZN");
						break;
					case "DFW": // DFW north
						if (!$(this).hasClass("cdr_input")) {
							result = result.replaceAll("VKTRY2 KDFW", "JOVEM6 KDFW");
							result = result.replaceAll("SEEVR4 KDFW", "BRDJE5 KDFW");
							result = result.replaceAll("BOOVE7 KDFW", "SOCKK4 KDFW");
							result = result.replaceAll("BEREE3 KDFW", "WHINY4 KDFW");
						}
						break;
					case "DTW": // DTW south / Rwy21 Rwy22
						result = result.replaceAll("KLYNK3 KDTW", "BONZZ2 KDTW");
						result = result.replaceAll("CRAKN2 KDTW", "HTROD2 KDTW");
						result = result.replaceAll("CUUGR2 KDTW", "TPGUN2 KDTW");
						result = result.replaceAll("WNGNT2 KDTW", "FERRL2 KDTW");
						result = result.replaceAll("GRAYT2 KDTW", "LAYKS2 KDTW");
						result = result.replaceAll("LECTR3 KDTW", "HANBL3 KDTW");
						result = result.replaceAll("HAYLL3 KDTW", "VCTRZ2 KDTW");
						result = result.replaceAll("KKISS2 KDTW", "RKCTY2 KDTW");
						break;
					case "ELP": // ELP NE // Rwy24
						result = result.replaceAll("KELP ATKNN5 SLNNK", "KELP JCOXX2 SLNNK");
						result = result.replaceAll("KELP ATKNN5 GREBE", "KELP JCOXX2 GREBE");
						result = result.replaceAll("KELP ATKNN5 FLOGS", "KELP JCOXX2 HBACK");
						result = result.replaceAll("KELP ATKNN5 NOCHI", "KELP JCOXX2 TELKE");
						result = result.replaceAll("KELP ATKNN5 ATKNN", "KELP JCOXX2 JCOXX");
					case "FCA":
					case "GPI": // FCA North // Rwy2
						result = result.replaceAll("KGPI RIDDG1 SKOTT CHOTE", "KGPI GPI1 CHOTE");
						result = result.replaceAll("KGPI RIDDG1 SKOTT", "KGPI GPI1 SKOTT");
					case "IAH": // IAH East // Rwy8 Rwy9
						// IAH STARS
						result = result.replaceAll("DOOBI3 KIAH", "SKNRD5 KIAH");
						result = result.replaceAll("DRLLR5 KIAH", "GUSHR3 KIAH");
						result = result.replaceAll("ZEEKK3 KIAH", "GESNR2 KIAH");
						result = result.replaceAll("TEJAS5 KIAH", "HTOWN3 KIAH");
						result = result.replaceAll("LINKK1 KIAH", "NNCEE2 KIAH");
						result = result.replaceAll("MSCOT4 KIAH", "TTORO3 KIAH");
						// IAH SIDS
						result = result.replaceAll("KIAH BNDTO6", "KIAH PITZZ5");
						result = result.replaceAll("KIAH MMUGS4", "KIAH GUMBY3");
						break;
					case "JAC": // JAC North // Rwy1 // DIVYD/GEYSR
						result = result.replaceAll("KJAC ALPIN4 BPI BOY", "KJAC DIVYD2 BOY");
						result = result.replaceAll("KJAC ALPIN4 BPI", "KJAC DIVYD2 JEDHY BPI");
						result = result.replaceAll("KJAC ALPIN4 IDA", "KJAC DIVYD2 HUKET IDA");
						result = result.replaceAll("KJAC ALPIN4 KICNE", "KJAC DIVYD2 JEDHY");
						result = result.replaceAll("KJAC TETON3 IDA HUKET", "KJAC DIVYD2 HUKET");
						result = result.replaceAll("KJAC TETON3 IDA", "KJAC DIVYD2 HUKET IDA");
						result = result.replaceAll("KJAC TETON3 KICNE", "KJAC DIVYD2 HUKET IDA");
						result = result.replaceAll("KJAC DNW", "KJAC GEYSR6 DNW");
						break;
					case "LAX": // LAX east // Rwy 6/7
						result = result.replaceAll("ANJLL4 KLAX", "BIGBR3 KLAX");
						result = result.replaceAll("OTOOL MDNYT2 KLAX", "OTOOL BIGBR3 KLAX");
						result = result.replaceAll("HAKMN MDNYT2 KLAX", "HAKMN BIGBR3 KLAX");
						result = result.replaceAll("DNERO MDNYT2 KLAX", "DNERO BIGBR3 KLAX");
						result = result.replaceAll("CGNEY MDNYT2 KLAX", "CGNEY BIGBR3 KLAX");
						result = result.replaceAll("HLYWD1 KLAX", "BRUEN2 KLAX");
						result = result.replaceAll("FNNDA MDNYT2 KLAX", "FNNDA BRUEN2 KLAX");
						result = result.replaceAll("GABBL MDNYT2 KLAX", "GABBL BRUEN2 KLAX");
						result = result.replaceAll("ESTWD MDNYT2 KLAX", "ESTWD BRUEN2 KLAX");
						result = result.replaceAll("IRNMN2 KLAX", "ZUUMA4 KLAX");
						// result = result.replaceAll("FICKY GOATZ2 KLAX", "FICKY LEENA8 KLAX");
						// result = result.replaceAll("ROSIN GOATZ2 KLAX", "ROSIN LEENA8 KLAX");
						result = result.replaceAll("AMMOR OLAAA2 KLAX", "AMMOR MDNYT2 KLAX");
						
						// result = result.replaceAll("HUULL2 KLAX", ""); // TODO
						// result = result.replaceAll("RYDRR2 KLAX", ""); // TODO

						// NON RNAV
						result = result.replaceAll("PGS J64 HEC J6 PMD SADDE8 KLAX", "PGS BASET5 KLAX");
						result = result.replaceAll("HEC J6 PMD SADDE8 KLAX", "HEC BASET5 KLAX");
						result = result.replaceAll("JLI BASET5 KLAX", "JLI OCEAN3 KLAX");
						result = result.replaceAll("TNP BASET5 KLAX", "TNP SEAVU2 KLAX");
						result = result.replaceAll("SADDE8 KLAX", "MOOR4 KLAX");
						break;
					case "MCO": // MCO north // Rwy35 Rwy36
						result = result.replaceAll("GTOUT1 KMCO", "SNFLD3 KMCO");
						break;
					case "MIA": // MIA west // Rwy26 Rwy27
						// TODO GLADZ east // BNGOS west
						// result = result.replaceAll("", "");
						break;
					case "MSO": // MSO northwest // Rwy30
						result = result.replaceAll("MSO MZULA5", "MSO DIDLY5");
						result = result.replaceAll("MSO VICTO1 MLP", "MSO DIDLY5 MLP");
						result = result.replaceAll("MSO VICTO1 LKT", "MSO DIDLY5 LKT");
						result = result.replaceAll("MSO VICTO1 HLN", "MSO GRZLY3 MSO HLN");
						result = result.replaceAll("MSO VICTO1 SKOTT", "MSO GRZLY3 MSO SKOTT");
						break;
					case "PSP": // PSP North // Rwy 31R
						// SIDS: HWRRD YUCCA
						result = result.replaceAll("KPSP IKONE1", "KPSP HWRRD1");
						result = result.replaceAll("KPSP JEEON1", "KPSP HWRRD1");
						result = result.replaceAll("KPSP LGANN1", "KPSP YUCCA1");
						break;
					case "RNO": // RNO north Rwy35
						result = result.replaceAll("KLUBS1 KRNO","EELZA4 KRNO");
						result = result.replaceAll("ORRCA ORRCA1 KRNO","ORRCA TARVR1 KRNO");
						result = result.replaceAll("MVA RYANN2 KRNO", "MVA TARVR1 KRNO");
						result = result.replaceAll("MVA SCOLA1 KRNO", "MVA TARVR1 KRNO");
						result = result.replaceAll("KENNO SCOLA1 KRNO", "KENNO TARVR1 KRNO");
						result = result.replaceAll("WINRZ4 KRNO", "WADOL4 KRNO");
						result = result.replaceAll("SLEAT KRNO", "SLEAT TARVR1 KRNO");
						// RNO SIDS
						result = result.replaceAll("KRNO WAGGE8 LLC","KRNO PVINE5 PYGOW LLC");
						result = result.replaceAll("KRNO ZEFFR9 PESKE","KRNO ALPYN1 YERIN");
						result = result.replaceAll("KRNO ZEFFR9","KRNO SPRKS1 FMG");
						break;
					case "SAN": // SAN west // Rwy9
						result = result.replaceAll("LVELL LUCKI1 KSAN", "LVELL MOMAR TOPGN2 KSAN");
						result = result.replaceAll("HOGGZ LUCKI1 KSAN", "HOGGZ IPL TOPGN2 KSAN");
						result = result.replaceAll("LUCKI1 KSAN", "TOPGN2 KSAN");
						// SIDS
						result = result.replaceAll("KSAN ZZOOO4 MTBAL", "KSAN SAYOW2 MTBAL");
						result = result.replaceAll("KSAN PEBLE6", "KSAN FALCC1");
						result = result.replaceAll("KSAN CLSSY1 MTBAL", "KSAN SAYOW2 MTBAL");
						result = result.replaceAll("KSAN ZZOOO4 TGOLD", "KSAN SAYOW2 IPL TGOLD");
						result = result.replaceAll("KSAN ZZOOO4 GBN", "KSAN SAYOW2 IPL GBN");
						result = result.replaceAll("KSAN CLSSY1 TGOLD", "KSAN SAYOW2 IPL TGOLD");
						result = result.replaceAll("KSAN CLSSY1 GBN", "KSAN SAYOW2 IPL GBN");
						break;
					case "SBP": // SBP West Rwy 29 // CREPE
						result = result.replaceAll("KSBP AVILA4 MQO", "KSBP CREPE3 MQO");
						result = result.replaceAll("KSBP AVILA4 GVO", "KSBP CREPE3 MQO GVO");
						result = result.replaceAll("KSBP WYNNR4 MQO", "KSBP CREPE3 MQO");
						result = result.replaceAll("KSBP WYNNR4 PRB BSR", "KSBP CREPE3 BSR");
						result = result.replaceAll("KSBP WYNNR4 PRB", "KSBP CREPE3 PRB");
						result = result.replaceAll("KSBP WYNNR4 FLW", "KSBP CREPE3 CREPE FLW");
						result = result.replaceAll("KSBP WYNNR4 RZS", "KSBP CREPE3 CREPE RZS");
						result = result.replaceAll("KSBP WYNNR4 MQO", "KSBP CREPE3 MQO");
						break;
					case "SFO": // SFO dpting 28lr // WESLA 
						// South
						result = result.replaceAll("KSFO SAHEY4", "KSFO WESLA5");
						result = result.replaceAll("KSFO SSTIK5", "KSFO WESLA5");
						result = result.replaceAll("KSFO SEGUL1 YYUNG", "KSFO WESLA5 YYUNG");
						// East
						result = result.replaceAll("KSFO CIITY3", "KSFO TRUKN2");
						break;
					case "SJC": // SJC South // Rwy12 // ALMDN/BMRNG/TECKY
						result = result.replaceAll("KSJC LOUPE1", "KSJC BMRNG4");
						result = result.replaceAll("KSJC SPTNS1", "KSJC TECKY4");
						result = result.replaceAll("KSJC SJC3 PXN", "KSJC TECKY4 JFREE");
						result = result.replaceAll("KSJC SJC3 AVE", "KSJC TECKY4 VLREE AVE");
						break;
					case "SLC": // SLC South // Rwy16
						result = result.replaceAll("QWENN5 KSLC", "DELTA6 KSLC");
						// SIDS // DEZRT FFU RUGGD ZIONZ
						// result = result.replaceAll("KSLC ARCHZ1 MLF", ""); // TODO
						// result = result.replaceAll("KSLC ARCHZ1 WINEN", ""); // TODO
						result = result.replaceAll("KSLC ARCHZ1 KROST", "KSLC ZIONZ1 KROST");
						// result = result.replaceAll("KSLC SEVYR3 MLF", ""); // TODO
						result = result.replaceAll("KSLC SEVYR3 OAL", "KSLC DEZRT2 MVA");
						// STARS
						result = result.replaceAll("EKR RACER JAZZZ1 KSLC", "EKR PITTT1 KSLC");
						result = result.replaceAll("RACER JAZZZ1 KSLC", "EKR PITTT1 KSLC");
						result = result.replaceAll("HELPR JAZZZ1 KSLC", "HELPR PITTT1 KSLC");
						result = result.replaceAll("QWENN6 KSLC", "PITTT1 KSLC");
						break;
					case "SMF": // SMF south // Rwy17
						result = result.replaceAll("KSMF RVRCT4", "KSMF SCTWN4");
						break;
					case "SNA": // SNA north // Rwy2L
						result = result.replaceAll("DSNEE6 KSNA", "ROOBY3 KSNA");
						break;
					case "TUS": // TUS northwest / Rwy30
						result = result.replaceAll("KTUS BURRO5 NOCHI SSO", "KTUS WLDKT4 SSO");
						result = result.replaceAll("KTUS BURRO5 NOCHI", "KTUS WLDKT4 SSO");
						result = result.replaceAll("KTUS BURRO5", "KTUS WLDKT4");
						break;
				}
		} else if (new_config == 2) {
				switch(airport) {
					case "LAX": // Noise Abatement Procedures
						result = result.replaceAll("ANJLL4 KLAX", "MDNYT2 KLAX");
						result = result.replaceAll("BIGBR3 KLAX", "MDNYT2 KLAX");
						result = result.replaceAll("BRUEN2 KLAX", "MDNYT2 KLAX");
						result = result.replaceAll("HLYWD1 KLAX", "MDNYT2 KLAX");
						result = result.replaceAll("OLAAA2 KLAX", "MDNYT2 KLAX");
						result = result.replaceAll("FICKY LEENA8 KLAX", "FICKY GOATZ2 KLAX");
						result = result.replaceAll("ROSIN LEENA8 KLAX", "ROSIN GOATZ2 KLAX");
						result = result.replaceAll("AMMOR OLAAA2 KLAX", "AMMOR MDNYT2 KLAX");

						// NON RNAV
						result = result.replaceAll("PGS BASET5 KLAX", "PGS J64 HEC J6 PMD SADDE8 KLAX");
						result = result.replaceAll("HEC BASET5 KLAX", "HEC J6 PMD SADDE8 KLAX");
						result = result.replaceAll("JLI BASET5 KLAX", "JLI OCEAN3 KLAX");
						result = result.replaceAll("MOOR4 KLAX", "SADDE8 KLAX");
						break;
					case "SFO": // SFO dpting 10LR or 19LR  // SAHEY 
						// South
						result = result.replaceAll("KSFO WESLA5", "KSFO SAHEY4");
						result = result.replaceAll("KSFO SSTIK5", "KSFO SAHEY4");
						result = result.replaceAll("KSFO SAHEY4 YYUNG", "KSFO SEGUL1 YYUNG");
						// East
						result = result.replaceAll("KSFO TRUKN2", "KSFO CIITY3");
						break;
				}
		}
	}
	return result;
}

convert_iata = function (str = null) {
	if (typeof str === 'string' || str instanceof String) {
		if (str.length == 3) { return str; }
		else if (str.length == 4) {
			switch (str) {
				case "EKAH": return "AAR";break;
				case "KABE": return "ABE";break;
				case "KABI": return "ABI";break;
				case "KABQ": return "ABQ";break;
				case "KACT": return "ACT";break;
				case "KACY": return "ACY";break;
				case "KAFW": return "AFW";break;
				case "LEMG": return "AGP";break;
				case "KAGS": return "AGS";break;
				case "NZAA": return "AKL";break;
				case "PAKN": return "AKN";break;
				case "UAAA": return "ALA";break;
				case "KALB": return "ALB";break;
				case "KAMA": return "AMA";break;
				case "VAAH": return "AMD";break;
				case "OJAI": return "AMM";break;
				case "EHAM": return "AMS";break;
				case "PANC": return "ANC";break;
				case "SCFA": return "ANF";break;
				case "TAPA": return "ANU";break;
				case "NSFA": return "APW";break;
				case "ESSA": return "ARN";break;
				case "LGAV": return "ATH";break;
				case "KATL": return "ATL";break;
				case "VIAR": return "ATQ";break;
				case "TNCA": return "AUA";break;
				case "OMAA": return "AUH";break;
				case "KAUS": return "AUS";break;
				case "KAVL": return "AVL";break;
				case "KAVP": return "AVP";break;
				case "PWAK": return "AWK";break;
				case "KIWA": return "AZA";break;
				case "OBBI": return "BAH";break;
				case "SKBQ": return "BAQ";break;
				case "LEBL": return "BCN";break;
				case "TXKF": return "BDA";break;
				case "KBDL": return "BDL";break;
				case "LYBE": return "BEG";break;
				case "EDDB": return "BER";break;
				case "LFRB": return "BES";break;
				case "KBFI": return "BFI";break;
				case "KBFL": return "BFL";break;
				case "EGAA": return "BFS";break;
				case "TBPB": return "BGI";break;
				case "ENBR": return "BGO";break;
				case "KBGR": return "BGR";break;
				case "KBHM": return "BHM";break;
				case "EGBB": return "BHX";break;
				case "KBIL": return "BIL";break;
				case "LEBB": return "BIO";break;
				case "MMLO": return "BJX";break;
				case "KBLV": return "BLV";break;
				case "KBNA": return "BNA";break;
				case "YBBN": return "BNE";break;
				case "SKBO": return "BOG";break;
				case "KBOI": return "BOI";break;
				case "VABB": return "BOM";break;
				case "TNCB": return "BON";break;
				case "ENBO": return "BOO";break;
				case "KBOS": return "BOS";break;
				case "KBRO": return "BRO";break;
				case "EBBR": return "BRU";break;
				case "PABR": return "BRW";break;
				case "SBBR": return "BSB";break;
				case "UIBB": return "BTK";break;
				case "KBTR": return "BTR";break;
				case "KBTV": return "BTV";break;
				case "KBUF": return "BUF";break;
				case "KBUR": return "BUR";break;
				case "SBBV": return "BVB";break;
				case "KBWI": return "BWI";break;
				case "MZBZ": return "BZE";break;
				case "KBZN": return "BZN";break;
				case "KCAE": return "CAE";break;
				case "KCAK": return "CAK";break;
				case "ZGGG": return "CAN";break;
				case "YSCB": return "CBR";break;
				case "SCIE": return "CCP";break;
				case "PACD": return "CDB";break;
				case "LFPG": return "CDG";break;
				case "LGKR": return "CFU";break;
				case "EDDK": return "CGN";break;
				case "SBCG": return "CGR";break;
				case "NZCH": return "CHC";break;
				case "KCHS": return "CHS";break;
				case "LIRA": return "CIA";break;
				case "KCID": return "CID";break;
				case "SPHI": return "CIX";break;
				case "RKPC": return "CJU";break;
				case "KCLE": return "CLE";break;
				case "SKCL": return "CLO";break;
				case "KCLT": return "CLT";break;
				case "KCMH": return "CMH";break;
				case "MUCM": return "CMW";break;
				case "SBCF": return "CNF";break;
				case "VOKN": return "CNN";break;
				case "KCNW": return "CNW";break;
				case "SACO": return "COR";break;
				case "KCOS": return "COS";break;
				case "KCOU": return "COU";break;
				case "EKCH": return "CPH";break;
				case "KCPR": return "CPR";break;
				case "RPLC": return "CRK";break;
				case "KCRP": return "CRP";break;
				case "SKCG": return "CTG";break;
				case "RJCC": return "CTS";break;
				case "MMUN": return "CUN";break;
				case "TNCC": return "CUR";break;
				case "MMCU": return "CUU";break;
				case "KCVG": return "CVG";break;
				case "SBCT": return "CWB";break;
				case "KCYS": return "CYS";break;
				case "MMCZ": return "CZM";break;
				case "KDAB": return "DAB";break;
				case "KDAL": return "DAL";break;
				case "KDAY": return "DAY";break;
				case "KDCA": return "DCA";break;
				case "VIDP": return "DEL";break;
				case "KDEN": return "DEN";break;
				case "KDFW": return "DFW";break;
				case "MMDO": return "DGO";break;
				case "ZYTL": return "DLC";break;
				case "KDLH": return "DLH";break;
				case "OEDF": return "DMM";break;
				case "OTHH": return "DOH";break;
				case "KDRO": return "DRO";break;
				case "KDSM": return "DSM";break;
				case "KDTW": return "DTW";break;
				case "EIDW": return "DUB";break;
				case "EDDL": return "DUS";break;
				case "OMDB": return "DXB";break;
				case "UHMA": return "DYR";break;
				case "KECP": return "ECP";break;
				case "PAED": return "EDF";break;
				case "EGPH": return "EDI";break;
				case "KEGE": return "EGE";break;
				case "PAEI": return "EIL";break;
				case "KELP": return "ELP";break;
				case "PAEN": return "ENA";break;
				case "LLER": return "ETM";break;
				case "KEUG": return "EUG";break;
				case "KEVV": return "EVV";break;
				case "KEWR": return "EWR";break;
				case "KEYW": return "EYW";break;
				case "SAEZ": return "EZE";break;
				case "PAFA": return "FAI";break;
				case "LPFR": return "FAO";break;
				case "KFAR": return "FAR";break;
				case "KFAT": return "FAT";break;
				case "KGPI": return "FCA";break;
				case "LIRF": return "FCO";break;
				case "TFFF": return "FDF";break;
				case "KFLL": return "FLL";break;
				case "KFNT": return "FNT";break;
				case "KFOE": return "FOE";break;
				case "MYGF": return "FPO";break;
				case "EDDF": return "FRA";break;
				case "UCFM": return "FRU";break;
				case "KFSD": return "FSD";break;
				case "KFSM": return "FSM";break;
				case "MWCR": return "GCM";break;
				case "MMGL": return "GDL";break;
				case "UHMM": return "GDX";break;
				case "KGEG": return "GEG";break;
				case "SYCJ": return "GEO";break;
				case "KGGG": return "GGG";break;
				case "MYEF": return "GGT";break;
				case "SBGL": return "GIG";break;
				case "KGJT": return "GJT";break;
				case "EGPF": return "GLA";break;
				case "RKSS": return "GMP";break;
				case "TGPY": return "GND";break;
				case "KGNV": return "GNV";break;
				case "LIMJ": return "GOA";break;
				case "VOGO": return "GOI";break;
				case "KGPT": return "GPT";break;
				case "KGRB": return "GRB";break;
				case "KGRK": return "GRK";break;
				case "LEGE": return "GRO";break;
				case "KGRR": return "GRR";break;
				case "SBGR": return "GRU";break;
				case "KGSO": return "GSO";break;
				case "KGSP": return "GSP";break;
				case "KGTF": return "GTF";break;
				case "MGGT": return "GUA";break;
				case "KGUC": return "GUC";break;
				case "PGUM": return "GUM";break;
				case "LSGG": return "GVA";break;
				case "SEGU": return "GYE";break;
				case "EDDH": return "HAM";break;
				case "MUHA": return "HAV";break;
				case "KHDN": return "HDN";break;
				case "LGIR": return "HER";break;
				case "ZSHC": return "HGH";break;
				case "RJCH": return "HKD";break;
				case "VHHH": return "HKG";break;
				case "MMHO": return "HMO";break;
				case "RJTT": return "HND";break;
				case "PHNL": return "HNL";break;
				case "MUHG": return "HOG";break;
				case "KHOU": return "HOU";break;
				case "KHRL": return "HRL";break;
				case "KHSV": return "HSV";break;
				case "MMBT": return "HUX";break;
				case "VOHS": return "HYD";break;
				case "KIAD": return "IAD";break;
				case "KIAH": return "IAH";break;
				case "RKSI": return "ICN";break;
				case "KICT": return "ICT";break;
				case "KIFP": return "IFP";break;
				case "UIII": return "IKT";break;
				case "KILM": return "ILM";break;
				case "KIND": return "IND";break;
				case "SCDA": return "IQQ";break;
				case "LTFM": return "IST";break;
				case "PHTO": return "ITO";break;
				case "KJAC": return "JAC";break;
				case "VIJP": return "JAI";break;
				case "KJAN": return "JAN";break;
				case "KJAX": return "JAX";break;
				case "KJFK": return "JFK";break;
				case "PHJR": return "JRF";break;
				case "BIKF": return "KEF";break;
				case "RCKH": return "KHH";break;
				case "UHHH": return "KHV";break;
				case "MKJP": return "KIN";break;
				case "RJBB": return "KIX";break;
				case "PHKO": return "KOA";break;
				case "OKKK": return "KWI";break;
				case "MMLP": return "LAP";break;
				case "KLAS": return "LAS";break;
				case "KLAW": return "LAW";break;
				case "KLAX": return "LAX";break;
				case "KLBB": return "LBB";break;
				case "LCLK": return "LCA";break;
				case "KLCH": return "LCH";break;
				case "KLEX": return "LEX";break;
				case "KLGA": return "LGA";break;
				case "EGKK": return "LGW";break;
				case "EGLL": return "LHR";break;
				case "PHLI": return "LIH";break;
				case "SPJC": return "LIM";break;
				case "MRLB": return "LIR";break;
				case "LPPT": return "LIS";break;
				case "KLIT": return "LIT";break;
				case "KLNK": return "LNK";break;
				case "EGGP": return "LPL";break;
				case "KLRD": return "LRD";break;
				case "MDLR": return "LRM";break;
				case "ENSB": return "LYR";break;
				case "LFLL": return "LYS";break;
				case "VOMM": return "MAA";break;
				case "LEMD": return "MAD";break;
				case "KMAF": return "MAF";break;
				case "EGCC": return "MAN";break;
				case "MKJS": return "MBJ";break;
				case "KMCI": return "MCI";break;
				case "KMCO": return "MCO";break;
				case "SKRG": return "MDE";break;
				case "KMDT": return "MDT";break;
				case "KMDW": return "MDW";break;
				case "PMDY": return "MDY";break;
				case "SAME": return "MDZ";break;
				case "SEMT": return "MEC";break;
				case "YMML": return "MEL";break;
				case "KMEM": return "MEM";break;
				case "MMMX": return "MEX";break;
				case "KMFE": return "MFE";break;
				case "VMMC": return "MFM";break;
				case "MNMG": return "MGA";break;
				case "KMGM": return "MGM";break;
				case "KMHT": return "MHT";break;
				case "KMIA": return "MIA";break;
				case "MMMD": return "MID";break;
				case "KMKE": return "MKE";break;
				case "KMLB": return "MLB";break;
				case "KMLI": return "MLI";break;
				case "MMMM": return "MLM";break;
				case "ESMS": return "MMX";break;
				case "RPLL": return "MNL";break;
				case "KMOB": return "MOB";break;
				case "KMRY": return "MRY";break;
				case "KMSN": return "MSN";break;
				case "KMSO": return "MSO";break;
				case "KMSP": return "MSP";break;
				case "KMSY": return "MSY";break;
				case "KMTJ": return "MTJ";break;
				case "MMMY": return "MTY";break;
				case "EDDM": return "MUC";break;
				case "SUMU": return "MVD";break;
				case "KMWH": return "MWH";break;
				case "LIMC": return "MXP";break;
				case "KMYR": return "MYR";break;
				case "MMMZ": return "MZT";break;
				case "NFFN": return "NAN";break;
				case "LIRN": return "NAP";break;
				case "MYNN": return "NAS";break;
				case "LFMN": return "NCE";break;
				case "RJGG": return "NGO";break;
				case "ZSNJ": return "NKG";break;
				case "NWWW": return "NOU";break;
				case "RJAA": return "NRT";break;
				case "UOOO": return "NSK";break;
				case "EDDN": return "NUE";break;
				case "MMOX": return "OAX";break;
				case "PHOG": return "OGG";break;
				case "NZOH": return "OHA";break;
				case "KOKC": return "OKC";break;
				case "RJTY": return "OKO";break;
				case "KOMA": return "OMA";break;
				case "KONT": return "ONT";break;
				case "YBCG": return "OOL";break;
				case "LPPR": return "OPO";break;
				case "KORD": return "ORD";break;
				case "KORF": return "ORF";break;
				case "LFPO": return "ORY";break;
				case "ENGM": return "OSL";break;
				case "UNNT": return "OVB";break;
				case "KPAE": return "PAE";break;
				case "MTPP": return "PAP";break;
				case "KPBI": return "PBI";break;
				case "SMJP": return "PBM";break;
				case "LPPD": return "PDL";break;
				case "KPDX": return "PDX";break;
				case "SKPE": return "PEI";break;
				case "ZBAA": return "PEK";break;
				case "KPHL": return "PHL";break;
				case "KPHX": return "PHX";break;
				case "KPIE": return "PIE";break;
				case "KPIH": return "PIH";break;
				case "EGPK": return "PIK";break;
				case "SPSO": return "PIO";break;
				case "KPIT": return "PIT";break;
				case "UHPP": return "PKC";break;
				case "ZBAD": return "PKX";break;
				case "MBPV": return "PLS";break;
				case "LEPA": return "PMI";break;
				case "KPNS": return "PNS";break;
				case "SBPA": return "POA";break;
				case "MDPP": return "POP";break;
				case "TTPP": return "POS";break;
				case "NSTU": return "PPG";break;
				case "NTAA": return "PPT";break;
				case "LKPR": return "PRG";break;
				case "KPSM": return "PSM";break;
				case "KPSP": return "PSP";break;
				case "TFFR": return "PTP";break;
				case "MPTO": return "PTY";break;
				case "KPUB": return "PUB";break;
				case "MDPC": return "PUJ";break;
				case "RKPK": return "PUS";break;
				case "KPVD": return "PVD";break;
				case "ZSPD": return "PVG";break;
				case "MMPR": return "PVR";break;
				case "KPWM": return "PWM";break;
				case "MMQT": return "QRO";break;
				case "KRAP": return "RAP";break;
				case "NCRG": return "RAR";break;
				case "KRDM": return "RDM";break;
				case "KRDU": return "RDU";break;
				case "KRFD": return "RFD";break;
				case "KRIC": return "RIC";break;
				case "KRNO": return "RNO";break;
				case "KROC": return "ROC";break;
				case "SAAR": return "ROS";break;
				case "KROW": return "ROW";break;
				case "KRST": return "RST";break;
				case "KRSW": return "RSW";break;
				case "MHRO": return "RTB";break;
				case "OERK": return "RUH";break;
				case "EFRO": return "RVN";break;
				case "MSLP": return "SAL";break;
				case "KSAN": return "SAN";break;
				case "MHLM": return "SAP";break;
				case "KSAT": return "SAT";break;
				case "KSAV": return "SAV";break;
				case "KSBA": return "SBA";break;
				case "KSBN": return "SBN";break;
				case "KSBP": return "SBP";break;
				case "SCEL": return "SCL";break;
				case "LEST": return "SCQ";break;
				case "MUCU": return "SCU";break;
				case "KSDF": return "SDF";break;
				case "MDSD": return "SDQ";break;
				case "KSEA": return "SEA";break;
				case "KSFB": return "SFB";break;
				case "KSFO": return "SFO";break;
				case "KSGF": return "SGF";break;
				case "ZSSS": return "SHA";break;
				case "KSHV": return "SHV";break;
				case "KSJC": return "SJC";break;
				case "MMSD": return "SJD";break;
				case "MROC": return "SJO";break;
				case "TJSJ": return "SJU";break;
				case "TKPK": return "SKB";break;
				case "UTSS": return "SKD";break;
				case "LGTS": return "SKG";break;
				case "KSLC": return "SLC";break;
				case "MMSP": return "SLP";break;
				case "LPAZ": return "SMA";break;
				case "KSMF": return "SMF";break;
				case "KSNA": return "SNA";break;
				case "EINN": return "SNN";break;
				case "MUSC": return "SNU";break;
				case "KSPS": return "SPS";break;
				case "KSRQ": return "SRQ";break;
				case "MDST": return "STI";break;
				case "KSTL": return "STL";break;
				case "EGSS": return "STN";break;
				case "KSTS": return "STS";break;
				case "TIST": return "STT";break;
				case "TISX": return "STX";break;
				case "TVSA": return "SVD";break;
				case "ENZV": return "SVG";break;
				case "USSS": return "SVX";break;
				case "KSWF": return "SWF";break;
				case "TNCM": return "SXM";break;
				case "PASY": return "SYA";break;
				case "YSSY": return "SYD";break;
				case "KSYR": return "SYR";break;
				case "ZGSZ": return "SZX";break;
				case "UTTT": return "TAS";break;
				case "LPLA": return "TER";break;
				case "KTLH": return "TLH";break;
				case "LFBO": return "TLS";break;
				case "LLBG": return "TLV";break;
				case "ENTC": return "TOS";break;
				case "KTPA": return "TPA";break;
				case "RCTP": return "TPE";break;
				case "MMTL": return "TQO";break;
				case "ENVA": return "TRD";break;
				case "LIPQ": return "TRS";break;
				case "SPRU": return "TRU";break;
				case "ZBTJ": return "TSN";break;
				case "KTUL": return "TUL";break;
				case "KTUS": return "TUS";break;
				case "KTVC": return "TVC";break;
				case "KTYS": return "TYS";break;
				case "SEQM": return "UIO";break;
				case "UHSS": return "UUS";break;
				case "TLPL": return "UVF";break;
				case "LIPZ": return "VCE";break;
				case "SBKP": return "VCP";break;
				case "MMVR": return "VER";break;
				case "LOWW": return "VIE";break;
				case "LEVC": return "VLC";break;
				case "KVPS": return "VPS";break;
				case "MUVR": return "VRA";break;
				case "SLVR": return "VVI";break;
				case "UHWW": return "VVO";break;
				case "NZWN": return "WLG";break;
				case "KXNA": return "XNA";break;
				case "MHPR": return "XPL";break;
				case "CYEG": return "YEG";break;
				case "CYFB": return "YFB";break;
				case "CYHM": return "YHM";break;
				case "CYHZ": return "YHZ";break;
				case "CYJT": return "YJT";break;
				case "KYKM": return "YKM";break;
				case "UEEE": return "YKS";break;
				case "CYOW": return "YOW";break;
				case "CYQB": return "YQB";break;
				case "CYQM": return "YQM";break;
				case "CYQX": return "YQX";break;
				case "CYUL": return "YUL";break;
				case "CYVR": return "YVR";break;
				case "CYXY": return "YXY";break;
				case "CYYC": return "YYC";break;
				case "CYYR": return "YYR";break;
				case "CYYT": return "YYT";break;
				case "CYYZ": return "YYZ";break;
				case "CYZF": return "YZF";break;
				case "LEZG": return "ZAZ";break;
				case "MMZH": return "ZIH";break;
				case "MMZO": return "ZLO";break;
				case "LSZH": return "ZRH";break;
			}
		}
	}
	return null;
}

convert_icao = function (str = null) {
	if (typeof str === 'string' || str instanceof String) {
		if (str.length == 4) { return str.toUpperCase(); }
		else if (str.length == 3) {
			switch (str.toUpperCase()) {
				case "AAR": return "EKAH";break;
				case "ABE": return "KABE";break;
				case "ABI": return "KABI";break;
				case "ABQ": return "KABQ";break;
				case "ACT": return "KACT";break;
				case "ACY": return "KACY";break;
				case "AFW": return "KAFW";break;
				case "AGP": return "LEMG";break;
				case "AGS": return "KAGS";break;
				case "AKL": return "NZAA";break;
				case "AKN": return "PAKN";break;
				case "ALA": return "UAAA";break;
				case "ALB": return "KALB";break;
				case "AMA": return "KAMA";break;
				case "AMD": return "VAAH";break;
				case "AMM": return "OJAI";break;
				case "AMS": return "EHAM";break;
				case "ANC": return "PANC";break;
				case "ANF": return "SCFA";break;
				case "ANU": return "TAPA";break;
				case "APW": return "NSFA";break;
				case "ARN": return "ESSA";break;
				case "ATH": return "LGAV";break;
				case "ATL": return "KATL";break;
				case "ATQ": return "VIAR";break;
				case "AUA": return "TNCA";break;
				case "AUH": return "OMAA";break;
				case "AUS": return "KAUS";break;
				case "AVL": return "KAVL";break;
				case "AVP": return "KAVP";break;
				case "AWK": return "PWAK";break;
				case "AZA": return "KIWA";break;
				case "BAH": return "OBBI";break;
				case "BAQ": return "SKBQ";break;
				case "BCN": return "LEBL";break;
				case "BDA": return "TXKF";break;
				case "BDL": return "KBDL";break;
				case "BEG": return "LYBE";break;
				case "BER": return "EDDB";break;
				case "BES": return "LFRB";break;
				case "BFI": return "KBFI";break;
				case "BFL": return "KBFL";break;
				case "BFS": return "EGAA";break;
				case "BGI": return "TBPB";break;
				case "BGO": return "ENBR";break;
				case "BGR": return "KBGR";break;
				case "BHM": return "KBHM";break;
				case "BHX": return "EGBB";break;
				case "BIL": return "KBIL";break;
				case "BIO": return "LEBB";break;
				case "BJX": return "MMLO";break;
				case "BLV": return "KBLV";break;
				case "BNA": return "KBNA";break;
				case "BNE": return "YBBN";break;
				case "BOG": return "SKBO";break;
				case "BOI": return "KBOI";break;
				case "BOM": return "VABB";break;
				case "BON": return "TNCB";break;
				case "BOO": return "ENBO";break;
				case "BOS": return "KBOS";break;
				case "BRO": return "KBRO";break;
				case "BRU": return "EBBR";break;
				case "BRW": return "PABR";break;
				case "BSB": return "SBBR";break;
				case "BTK": return "UIBB";break;
				case "BTR": return "KBTR";break;
				case "BTV": return "KBTV";break;
				case "BUF": return "KBUF";break;
				case "BUR": return "KBUR";break;
				case "BVB": return "SBBV";break;
				case "BWI": return "KBWI";break;
				case "BZE": return "MZBZ";break;
				case "BZN": return "KBZN";break;
				case "CAE": return "KCAE";break;
				case "CAK": return "KCAK";break;
				case "CAN": return "ZGGG";break;
				case "CBR": return "YSCB";break;
				case "CCP": return "SCIE";break;
				case "CDB": return "PACD";break;
				case "CDG": return "LFPG";break;
				case "CFU": return "LGKR";break;
				case "CGN": return "EDDK";break;
				case "CGR": return "SBCG";break;
				case "CHC": return "NZCH";break;
				case "CHS": return "KCHS";break;
				case "CIA": return "LIRA";break;
				case "CID": return "KCID";break;
				case "CIX": return "SPHI";break;
				case "CJU": return "RKPC";break;
				case "CLE": return "KCLE";break;
				case "CLO": return "SKCL";break;
				case "CLT": return "KCLT";break;
				case "CMH": return "KCMH";break;
				case "CMW": return "MUCM";break;
				case "CNF": return "SBCF";break;
				case "CNN": return "VOKN";break;
				case "CNW": return "KCNW";break;
				case "COR": return "SACO";break;
				case "COS": return "KCOS";break;
				case "COU": return "KCOU";break;
				case "CPH": return "EKCH";break;
				case "CPR": return "KCPR";break;
				case "CRK": return "RPLC";break;
				case "CRP": return "KCRP";break;
				case "CTG": return "SKCG";break;
				case "CTS": return "RJCC";break;
				case "CUN": return "MMUN";break;
				case "CUR": return "TNCC";break;
				case "CUU": return "MMCU";break;
				case "CVG": return "KCVG";break;
				case "CWB": return "SBCT";break;
				case "CYS": return "KCYS";break;
				case "CZM": return "MMCZ";break;
				case "DAB": return "KDAB";break;
				case "DAL": return "KDAL";break;
				case "DAY": return "KDAY";break;
				case "DCA": return "KDCA";break;
				case "DEL": return "VIDP";break;
				case "DEN": return "KDEN";break;
				case "DFW": return "KDFW";break;
				case "DGO": return "MMDO";break;
				case "DLC": return "ZYTL";break;
				case "DLH": return "KDLH";break;
				case "DMM": return "OEDF";break;
				case "DOH": return "OTHH";break;
				case "DRO": return "KDRO";break;
				case "DSM": return "KDSM";break;
				case "DTW": return "KDTW";break;
				case "DUB": return "EIDW";break;
				case "DUS": return "EDDL";break;
				case "DXB": return "OMDB";break;
				case "DYR": return "UHMA";break;
				case "ECP": return "KECP";break;
				case "EDF": return "PAED";break;
				case "EDI": return "EGPH";break;
				case "EGE": return "KEGE";break;
				case "EIL": return "PAEI";break;
				case "ELP": return "KELP";break;
				case "ENA": return "PAEN";break;
				case "ETM": return "LLER";break;
				case "EUG": return "KEUG";break;
				case "EVV": return "KEVV";break;
				case "EWR": return "KEWR";break;
				case "EYW": return "KEYW";break;
				case "EZE": return "SAEZ";break;
				case "FAI": return "PAFA";break;
				case "FAO": return "LPFR";break;
				case "FAR": return "KFAR";break;
				case "FAT": return "KFAT";break;
				case "FCA": return "KGPI";break;
				case "FCO": return "LIRF";break;
				case "FDF": return "TFFF";break;
				case "FLL": return "KFLL";break;
				case "FNT": return "KFNT";break;
				case "FOE": return "KFOE";break;
				case "FPO": return "MYGF";break;
				case "FRA": return "EDDF";break;
				case "FRU": return "UCFM";break;
				case "FSD": return "KFSD";break;
				case "FSM": return "KFSM";break;
				case "GCM": return "MWCR";break;
				case "GDL": return "MMGL";break;
				case "GDX": return "UHMM";break;
				case "GEG": return "KGEG";break;
				case "GEO": return "SYCJ";break;
				case "GGG": return "KGGG";break;
				case "GGT": return "MYEF";break;
				case "GIG": return "SBGL";break;
				case "GJT": return "KGJT";break;
				case "GLA": return "EGPF";break;
				case "GMP": return "RKSS";break;
				case "GND": return "TGPY";break;
				case "GNV": return "KGNV";break;
				case "GOA": return "LIMJ";break;
				case "GOI": return "VOGO";break;
				case "GPT": return "KGPT";break;
				case "GRB": return "KGRB";break;
				case "GRK": return "KGRK";break;
				case "GRO": return "LEGE";break;
				case "GRR": return "KGRR";break;
				case "GRU": return "SBGR";break;
				case "GSO": return "KGSO";break;
				case "GSP": return "KGSP";break;
				case "GTF": return "KGTF";break;
				case "GUA": return "MGGT";break;
				case "GUC": return "KGUC";break;
				case "GUM": return "PGUM";break;
				case "GVA": return "LSGG";break;
				case "GYE": return "SEGU";break;
				case "HAM": return "EDDH";break;
				case "HAV": return "MUHA";break;
				case "HDN": return "KHDN";break;
				case "HER": return "LGIR";break;
				case "HGH": return "ZSHC";break;
				case "HKD": return "RJCH";break;
				case "HKG": return "VHHH";break;
				case "HMO": return "MMHO";break;
				case "HND": return "RJTT";break;
				case "HNL": return "PHNL";break;
				case "HOG": return "MUHG";break;
				case "HOU": return "KHOU";break;
				case "HRL": return "KHRL";break;
				case "HSV": return "KHSV";break;
				case "HUX": return "MMBT";break;
				case "HYD": return "VOHS";break;
				case "IAD": return "KIAD";break;
				case "IAH": return "KIAH";break;
				case "ICN": return "RKSI";break;
				case "ICT": return "KICT";break;
				case "IFP": return "KIFP";break;
				case "IKT": return "UIII";break;
				case "ILM": return "KILM";break;
				case "IND": return "KIND";break;
				case "IQQ": return "SCDA";break;
				case "IST": return "LTFM";break;
				case "ITO": return "PHTO";break;
				case "JAC": return "KJAC";break;
				case "JAI": return "VIJP";break;
				case "JAN": return "KJAN";break;
				case "JAX": return "KJAX";break;
				case "JFK": return "KJFK";break;
				case "JRF": return "PHJR";break;
				case "KEF": return "BIKF";break;
				case "KHH": return "RCKH";break;
				case "KHV": return "UHHH";break;
				case "KIN": return "MKJP";break;
				case "KIX": return "RJBB";break;
				case "KOA": return "PHKO";break;
				case "KWI": return "OKKK";break;
				case "LAP": return "MMLP";break;
				case "LAS": return "KLAS";break;
				case "LAW": return "KLAW";break;
				case "LAX": return "KLAX";break;
				case "LBB": return "KLBB";break;
				case "LCA": return "LCLK";break;
				case "LCH": return "KLCH";break;
				case "LEX": return "KLEX";break;
				case "LGA": return "KLGA";break;
				case "LGW": return "EGKK";break;
				case "LHR": return "EGLL";break;
				case "LIH": return "PHLI";break;
				case "LIM": return "SPJC";break;
				case "LIR": return "MRLB";break;
				case "LIS": return "LPPT";break;
				case "LIT": return "KLIT";break;
				case "LNK": return "KLNK";break;
				case "LPL": return "EGGP";break;
				case "LRD": return "KLRD";break;
				case "LRM": return "MDLR";break;
				case "LYR": return "ENSB";break;
				case "LYS": return "LFLL";break;
				case "MAA": return "VOMM";break;
				case "MAD": return "LEMD";break;
				case "MAF": return "KMAF";break;
				case "MAN": return "EGCC";break;
				case "MBJ": return "MKJS";break;
				case "MCI": return "KMCI";break;
				case "MCO": return "KMCO";break;
				case "MDE": return "SKRG";break;
				case "MDT": return "KMDT";break;
				case "MDW": return "KMDW";break;
				case "MDY": return "PMDY";break;
				case "MDZ": return "SAME";break;
				case "MEC": return "SEMT";break;
				case "MEL": return "YMML";break;
				case "MEM": return "KMEM";break;
				case "MEX": return "MMMX";break;
				case "MFE": return "KMFE";break;
				case "MFM": return "VMMC";break;
				case "MGA": return "MNMG";break;
				case "MGM": return "KMGM";break;
				case "MHT": return "KMHT";break;
				case "MIA": return "KMIA";break;
				case "MID": return "MMMD";break;
				case "MKE": return "KMKE";break;
				case "MLB": return "KMLB";break;
				case "MLI": return "KMLI";break;
				case "MLM": return "MMMM";break;
				case "MMX": return "ESMS";break;
				case "MNL": return "RPLL";break;
				case "MOB": return "KMOB";break;
				case "MRY": return "KMRY";break;
				case "MSN": return "KMSN";break;
				case "MSO": return "KMSO";break;
				case "MSP": return "KMSP";break;
				case "MSY": return "KMSY";break;
				case "MTJ": return "KMTJ";break;
				case "MTY": return "MMMY";break;
				case "MUC": return "EDDM";break;
				case "MVD": return "SUMU";break;
				case "MWH": return "KMWH";break;
				case "MXP": return "LIMC";break;
				case "MYR": return "KMYR";break;
				case "MZT": return "MMMZ";break;
				case "NAN": return "NFFN";break;
				case "NAP": return "LIRN";break;
				case "NAS": return "MYNN";break;
				case "NCE": return "LFMN";break;
				case "NGO": return "RJGG";break;
				case "NKG": return "ZSNJ";break;
				case "NOU": return "NWWW";break;
				case "NRT": return "RJAA";break;
				case "NSK": return "UOOO";break;
				case "NUE": return "EDDN";break;
				case "OAX": return "MMOX";break;
				case "OGG": return "PHOG";break;
				case "OHA": return "NZOH";break;
				case "OKC": return "KOKC";break;
				case "OKO": return "RJTY";break;
				case "OMA": return "KOMA";break;
				case "ONT": return "KONT";break;
				case "OOL": return "YBCG";break;
				case "OPO": return "LPPR";break;
				case "ORD": return "KORD";break;
				case "ORF": return "KORF";break;
				case "ORY": return "LFPO";break;
				case "OSL": return "ENGM";break;
				case "OVB": return "UNNT";break;
				case "PAE": return "KPAE";break;
				case "PAP": return "MTPP";break;
				case "PBI": return "KPBI";break;
				case "PBM": return "SMJP";break;
				case "PDL": return "LPPD";break;
				case "PDX": return "KPDX";break;
				case "PEI": return "SKPE";break;
				case "PEK": return "ZBAA";break;
				case "PHL": return "KPHL";break;
				case "PHX": return "KPHX";break;
				case "PIE": return "KPIE";break;
				case "PIH": return "KPIH";break;
				case "PIK": return "EGPK";break;
				case "PIO": return "SPSO";break;
				case "PIT": return "KPIT";break;
				case "PKC": return "UHPP";break;
				case "PKX": return "ZBAD";break;
				case "PLS": return "MBPV";break;
				case "PMI": return "LEPA";break;
				case "PNS": return "KPNS";break;
				case "POA": return "SBPA";break;
				case "POP": return "MDPP";break;
				case "POS": return "TTPP";break;
				case "PPG": return "NSTU";break;
				case "PPT": return "NTAA";break;
				case "PRG": return "LKPR";break;
				case "PSM": return "KPSM";break;
				case "PSP": return "KPSP";break;
				case "PTP": return "TFFR";break;
				case "PTY": return "MPTO";break;
				case "PUB": return "KPUB";break;
				case "PUJ": return "MDPC";break;
				case "PUS": return "RKPK";break;
				case "PVD": return "KPVD";break;
				case "PVG": return "ZSPD";break;
				case "PVR": return "MMPR";break;
				case "PWM": return "KPWM";break;
				case "QRO": return "MMQT";break;
				case "RAP": return "KRAP";break;
				case "RAR": return "NCRG";break;
				case "RDM": return "KRDM";break;
				case "RDU": return "KRDU";break;
				case "RFD": return "KRFD";break;
				case "RIC": return "KRIC";break;
				case "RNO": return "KRNO";break;
				case "ROC": return "KROC";break;
				case "ROS": return "SAAR";break;
				case "ROW": return "KROW";break;
				case "RST": return "KRST";break;
				case "RSW": return "KRSW";break;
				case "RTB": return "MHRO";break;
				case "RUH": return "OERK";break;
				case "RVN": return "EFRO";break;
				case "SAL": return "MSLP";break;
				case "SAN": return "KSAN";break;
				case "SAP": return "MHLM";break;
				case "SAT": return "KSAT";break;
				case "SAV": return "KSAV";break;
				case "SBA": return "KSBA";break;
				case "SBN": return "KSBN";break;
				case "SBP": return "KSBP";break;
				case "SCL": return "SCEL";break;
				case "SCQ": return "LEST";break;
				case "SCU": return "MUCU";break;
				case "SDF": return "KSDF";break;
				case "SDQ": return "MDSD";break;
				case "SEA": return "KSEA";break;
				case "SFB": return "KSFB";break;
				case "SFO": return "KSFO";break;
				case "SGF": return "KSGF";break;
				case "SHA": return "ZSSS";break;
				case "SHV": return "KSHV";break;
				case "SJC": return "KSJC";break;
				case "SJD": return "MMSD";break;
				case "SJO": return "MROC";break;
				case "SJU": return "TJSJ";break;
				case "SKB": return "TKPK";break;
				case "SKD": return "UTSS";break;
				case "SKG": return "LGTS";break;
				case "SLC": return "KSLC";break;
				case "SLP": return "MMSP";break;
				case "SMA": return "LPAZ";break;
				case "SMF": return "KSMF";break;
				case "SNA": return "KSNA";break;
				case "SNN": return "EINN";break;
				case "SNU": return "MUSC";break;
				case "SPS": return "KSPS";break;
				case "SRQ": return "KSRQ";break;
				case "STI": return "MDST";break;
				case "STL": return "KSTL";break;
				case "STN": return "EGSS";break;
				case "STS": return "KSTS";break;
				case "STT": return "TIST";break;
				case "STX": return "TISX";break;
				case "SVD": return "TVSA";break;
				case "SVG": return "ENZV";break;
				case "SVX": return "USSS";break;
				case "SWF": return "KSWF";break;
				case "SXM": return "TNCM";break;
				case "SYA": return "PASY";break;
				case "SYD": return "YSSY";break;
				case "SYR": return "KSYR";break;
				case "SZX": return "ZGSZ";break;
				case "TAS": return "UTTT";break;
				case "TER": return "LPLA";break;
				case "TLH": return "KTLH";break;
				case "TLS": return "LFBO";break;
				case "TLV": return "LLBG";break;
				case "TOS": return "ENTC";break;
				case "TPA": return "KTPA";break;
				case "TPE": return "RCTP";break;
				case "TQO": return "MMTL";break;
				case "TRD": return "ENVA";break;
				case "TRS": return "LIPQ";break;
				case "TRU": return "SPRU";break;
				case "TSN": return "ZBTJ";break;
				case "TUL": return "KTUL";break;
				case "TUS": return "KTUS";break;
				case "TVC": return "KTVC";break;
				case "TYS": return "KTYS";break;
				case "UIO": return "SEQM";break;
				case "UUS": return "UHSS";break;
				case "UVF": return "TLPL";break;
				case "VCE": return "LIPZ";break;
				case "VCP": return "SBKP";break;
				case "VER": return "MMVR";break;
				case "VIE": return "LOWW";break;
				case "VLC": return "LEVC";break;
				case "VPS": return "KVPS";break;
				case "VRA": return "MUVR";break;
				case "VVI": return "SLVR";break;
				case "VVO": return "UHWW";break;
				case "WLG": return "NZWN";break;
				case "XNA": return "KXNA";break;
				case "XPL": return "MHPR";break;
				case "YEG": return "CYEG";break;
				case "YFB": return "CYFB";break;
				case "YHM": return "CYHM";break;
				case "YHZ": return "CYHZ";break;
				case "YJT": return "CYJT";break;
				case "YKM": return "KYKM";break;
				case "YKS": return "UEEE";break;
				case "YOW": return "CYOW";break;
				case "YQB": return "CYQB";break;
				case "YQM": return "CYQM";break;
				case "YQX": return "CYQX";break;
				case "YUL": return "CYUL";break;
				case "YVR": return "CYVR";break;
				case "YXY": return "CYXY";break;
				case "YYC": return "CYYC";break;
				case "YYR": return "CYYR";break;
				case "YYT": return "CYYT";break;
				case "YYZ": return "CYYZ";break;
				case "YZF": return "CYZF";break;
				case "ZAZ": return "LEZG";break;
				case "ZIH": return "MMZH";break;
				case "ZLO": return "MMZO";break;
				case "ZRH": return "LSZH";break;
			}
		}
	}
	return null;
}

is_atwelve = function (apt = "") {
	return ["SKBQ","MZBZ","TXKF","CYYC","MUCM","MMUN","SKCG","MHPR","MMCZ","CYEG","MYEF","MYGF","CYQX","CYYR","MWCR","MMGL","MGGT","CYHZ","MUHA","MDPC","MUHG","MKJP","MMLO","MRLB","MDLR","MNMG","MMZO","MMMZ","MMMD","MMMX","MMCU","MMDO","MMHO","MMMM","MMSP","MKJS","MMMY","CYUL","MYNN","MMOX","MPTO","MTPP","MBPV","MDPP","MMPR","MMQT","MHRO","MROC","MMSD","TJSJ","MHLM","MSLP","MUSC","MDST","MUCU","MDSD","CYYT","TIST","CYJT","MMTL","CYYZ","CYVR","MUVR","MMZH","MMBT"].includes(convert_icao(apt));
}

is_latin = function (apt = "") {
	if (typeof apt === 'string' || apt instanceof String) {
		return "MST".includes(convert_icao(apt).substring(0,1));
	}
	return false;
}
is_domestic = function (apt = "", include_canada = true) {
	if (typeof apt === 'string' || apt instanceof String) {
		if (include_canada) {
			return "KC".includes(convert_icao(apt).substring(0,1));
		} else {
			return (convert_icao(apt).substring(0,1).localeCompare("K") == 0);
		}
	}
	return false;
}

get_fir = function (apt = "") {
	if (typeof apt === 'string' || apt instanceof String) {
		switch (convert_icao(apt)) {
			case "KABE": return "ZNY"; break;
			case "KABI": return "ZFW"; break;
			case "KABQ": return "ZAB"; break;
			case "KACT": return "ZFW"; break;
			case "KACY": return "ZDC"; break;
			case "KAFW": return "ZFW"; break;
			case "KAGS": return "ZTL"; break;
			case "KALB": return "ZBW"; break;
			case "KAMA": return "ZAB"; break;
			case "KATL": return "ZTL"; break;
			case "KAUS": return "ZHU"; break;
			case "KAVL": return "ZTL"; break;
			case "KAVP": return "ZNY"; break;
			case "KBDL": return "ZBW"; break;
			case "KBFI": return "ZSE"; break;
			case "KBFL": return "ZLA"; break;
			case "KBGR": return "ZBW"; break;
			case "KBHM": return "ZTL"; break;
			case "KBIL": return "ZLC"; break;
			case "KBLV": return "ZKC"; break;
			case "KBNA": return "ZME"; break;
			case "KBOI": return "ZLC"; break;
			case "KBOS": return "ZBW"; break;
			case "KBRO": return "ZHU"; break;
			case "KBTR": return "ZHU"; break;
			case "KBTV": return "ZBW"; break;
			case "KBUF": return "ZOB"; break;
			case "KBUR": return "ZLA"; break;
			case "KBWI": return "ZDC"; break;
			case "KBZN": return "ZLC"; break;
			case "KCAE": return "ZJX"; break;
			case "KCAK": return "ZOB"; break;
			case "KCHS": return "ZJX"; break;
			case "KCID": return "ZAU"; break;
			case "KCLE": return "ZOB"; break;
			case "KCLT": return "ZTL"; break;
			case "KCMH": return "ZID"; break;
			case "KCNW": return "ZFW"; break;
			case "KCOS": return "ZDV"; break;
			case "KCOU": return "ZKC"; break;
			case "KCPR": return "ZDV"; break;
			case "KCRP": return "ZHU"; break;
			case "KCVG": return "ZID"; break;
			case "KCYS": return "ZDV"; break;
			case "KDAB": return "ZJX"; break;
			case "KDAL": return "ZFW"; break;
			case "KDAY": return "ZID"; break;
			case "KDCA": return "ZDC"; break;
			case "KDEN": return "ZDV"; break;
			case "KDFW": return "ZFW"; break;
			case "KDLH": return "ZMP"; break;
			case "KDRO": return "ZDV"; break;
			case "KDSM": return "ZMP"; break;
			case "KDTW": return "ZOB"; break;
			case "KECP": return "ZJX"; break;
			case "KEGE": return "ZDV"; break;
			case "KELP": return "ZAB"; break;
			case "KEUG": return "ZSE"; break;
			case "KEVV": return "ZID"; break;
			case "KEWR": return "ZNY"; break;
			case "KEYW": return "ZMA"; break;
			case "KFAR": return "ZMP"; break;
			case "KFAT": return "ZOA"; break;
			case "KGPI": return "ZLC"; break;
			case "KFLL": return "ZMA"; break;
			case "KFNT": return "ZOB"; break;
			case "KFOE": return "ZKC"; break;
			case "KFSD": return "ZMP"; break;
			case "KGEG": return "ZSE"; break;
			case "KGGG": return "ZFW"; break;
			case "KGJT": return "ZDV"; break;
			case "KGNV": return "ZJX"; break;
			case "KGPT": return "ZHU"; break;
			case "KGRB": return "ZMP"; break;
			case "KGRK": return "ZHU"; break;
			case "KGRR": return "ZAU"; break;
			case "KGSO": return "ZTL"; break;
			case "KGSP": return "ZTL"; break;
			case "KGTF": return "ZLC"; break;
			case "KGUC": return "ZDV"; break;
			case "KHDN": return "ZDV"; break;
			case "KHOU": return "ZHU"; break;
			case "KHRL": return "ZHU"; break;
			case "KHSV": return "ZTL"; break;
			case "KIAD": return "ZDC"; break;
			case "KIAH": return "ZHU"; break;
			case "KICT": return "ZKC"; break;
			case "KIFP": return "ZLA"; break;
			case "KILM": return "ZDC"; break;
			case "KIND": return "ZID"; break;
			case "KJAC": return "ZLC"; break;
			case "KJAN": return "ZME"; break;
			case "KJAX": return "ZJX"; break;
			case "KJFK": return "ZNY"; break;
			case "KLAS": return "ZLA"; break;
			case "KLAW": return "ZFW"; break;
			case "KLAX": return "ZLA"; break;
			case "KLBB": return "ZFW"; break;
			case "KLCH": return "ZHU"; break;
			case "KLEX": return "ZID"; break;
			case "KLGA": return "ZNY"; break;
			case "KLIT": return "ZME"; break;
			case "KLNK": return "ZMP"; break;
			case "KLRD": return "ZHU"; break;
			case "KMAF": return "ZFW"; break;
			case "KMCI": return "ZKC"; break;
			case "KMCO": return "ZJX"; break;
			case "KMDT": return "ZNY"; break;
			case "KMDW": return "ZAU"; break;
			case "KMEM": return "ZME"; break;
			case "KMFE": return "ZHU"; break;
			case "KMGM": return "ZTL"; break;
			case "KMHT": return "ZBW"; break;
			case "KMIA": return "ZMA"; break;
			case "KMKE": return "ZAU"; break;
			case "KMLB": return "ZJX"; break;
			case "KMLI": return "ZAU"; break;
			case "KMOB": return "ZHU"; break;
			case "KMRY": return "ZOA"; break;
			case "KMSN": return "ZAU"; break;
			case "KMSO": return "ZLC"; break;
			case "KMSP": return "ZMP"; break;
			case "KMSY": return "ZHU"; break;
			case "KMTJ": return "ZDV"; break;
			case "KMWH": return "ZSE"; break;
			case "KMYR": return "ZJX"; break;
			case "KOKC": return "ZFW"; break;
			case "KOMA": return "ZMP"; break;
			case "KONT": return "ZLA"; break;
			case "KORD": return "ZAU"; break;
			case "KORF": return "ZDC"; break;
			case "KPAE": return "ZSE"; break;
			case "KPBI": return "ZMA"; break;
			case "KPDX": return "ZSE"; break;
			case "KPHL": return "ZNY"; break;
			case "KPHX": return "ZAB"; break;
			case "KPIE": return "ZMA"; break;
			case "KPIH": return "ZLC"; break;
			case "KPIT": return "ZOB"; break;
			case "KPNS": return "ZJX"; break;
			case "KPSM": return "ZBW"; break;
			case "KPSP": return "ZLA"; break;
			case "KPUB": return "ZDV"; break;
			case "KPVD": return "ZBW"; break;
			case "KPWM": return "ZBW"; break;
			case "KRAP": return "ZDV"; break;
			case "KRDM": return "ZSE"; break;
			case "KRDU": return "ZDC"; break;
			case "KRFD": return "ZAU"; break;
			case "KRIC": return "ZDC"; break;
			case "KRNO": return "ZOA"; break;
			case "KROC": return "ZOB"; break;
			case "KROW": return "ZAB"; break;
			case "KRST": return "ZMP"; break;
			case "KRSW": return "ZMA"; break;
			case "KSAN": return "ZLA"; break;
			case "KSAT": return "ZHU"; break;
			case "KSAV": return "ZJX"; break;
			case "KSBA": return "ZLA"; break;
			case "KSBN": return "ZAU"; break;
			case "KSBP": return "ZLA"; break;
			case "KSDF": return "ZID"; break;
			case "KSEA": return "ZSE"; break;
			case "KSFB": return "ZJX"; break;
			case "KSFO": return "ZOA"; break;
			case "KSGF": return "ZKC"; break;
			case "KSHV": return "ZFW"; break;
			case "KSJC": return "ZOA"; break;
			case "KSLC": return "ZLC"; break;
			case "KSMF": return "ZOA"; break;
			case "KSNA": return "ZLA"; break;
			case "KSPS": return "ZFW"; break;
			case "KSRQ": return "ZMA"; break;
			case "KSTL": return "ZKC"; break;
			case "KSTS": return "ZOA"; break;
			case "KSWF": return "ZNY"; break;
			case "KSYR": return "ZBW"; break;
			case "KTLH": return "ZJX"; break;
			case "KTPA": return "ZMA"; break;
			case "KTUL": return "ZKC"; break;
			case "KTUS": return "ZAB"; break;
			case "KTVC": return "ZMP"; break;
			case "KTYS": return "ZTL"; break;
			case "KVPS": return "ZJX"; break;
			case "KXNA": return "ZME"; break;
			case "KYKM": return "ZSE"; break;
		}
	}
}

get_star_array = function(text = "") {
	// copy paste entire XXX_departures.js page or get_routes.js and this will look for any discrepancies 
	var result = {};
	tmp_star_reg = /[^A-Z]([A-Z]{5})(\d) ([A-Z]{4})[^A-Z]/g;
	while(null != (tmp_r = tmp_star_reg.exec(text))) {
		if (result[tmp_r[3]] == null) { result[tmp_r[3]] = {}; }
		if (result[tmp_r[3]][tmp_r[1]] == null) { result[tmp_r[3]][tmp_r[1]] = tmp_r[2];
		} else if (result[tmp_r[3]][tmp_r[1]] != tmp_r[2]) {
			console.log("MISMATCH: " + tmp_r[1] + tmp_r[2] + " " + tmp_r[3] + " AND " + tmp_r[1] + result[tmp_r[3]][tmp_r[1]] + " " + tmp_r[3]);
		}
		// console.log(tmp_r);
	}
	return result;
}

get_sid_array = function(text = "") {
	// copy paste entire XXX_departures.js page or get_routes.js and this will look for any discrepancies
	var result = {};
	tmp_sid_reg = /[^A-Z]([A-Z]{4}) ([A-Z]{5})(\d)[^A-Z]/g;
	while(null != (tmp_r = tmp_sid_reg.exec(text))) {
		if (result[tmp_r[1]] == null) { result[tmp_r[1]] = {}; }
		if (result[tmp_r[1]][tmp_r[2]] == null) { result[tmp_r[1]][tmp_r[2]] = tmp_r[3];
		} else if (result[tmp_r[1]][tmp_r[2]] != tmp_r[3]) {
			console.log("MISMATCH: " + tmp_r[1] + " " + tmp_r[2] + tmp_r[3] + " AND " + tmp_r[1] + " " + tmp_r[2] + result[tmp_r[1]][tmp_r[2]]);
		}
		// console.log(tmp_r);
	}
	return result;
}

get_weather_cams = function (str = null) {
	switch (str) {
		case "ABE":
		case "KABE":
			return [
				["", ""]
			]; // TODO
			break;
		case "ABI":
		case "KABI":
			return [
				["", ""]
			]; // TODO
			break;
		case "ABQ":
		case "KABQ":
			return [
				["https://www.weather.gov/abq/webcam", "NWS Webcam"]
			];
			break;
		case "ACT":
		case "KACT":
			return [
				["", ""]
			]; // TODO
			break;
		case "ACY":
		case "KACY":
			return [
				["https://www.youtube.com/watch?v=p4bjNK7OM9o", "Ocean City"],
				["https://www.youtube.com/watch?v=Gh6ozBVWlwU", "Somers Point"]
			];
			break;
		case "AFW":
		case "KAFW":
			return [
				["", ""]
			]; // TODO
			break;
		case "AGS":
		case "KAGS":
			return [
				["", ""]
			]; // TODO
			break;
		case "ALB":
		case "KALB":
			return [
				["https://wnyt.com/cdphp-first-warning-cam-downtown-albany/", "Skyline"]
				// ,["https://webpubcontent.gray.tv/walb/images/Albany-first-view.jpg", "Image"]

			];
			break;
		case "AMA":
		case "KAMA":
			return [
				["", ""]
			]; // TODO
			break;
		case "ART":
		case "KART":
			return [
				["https://www.youtube.com/watch?v=L3bYhofjjRU", "Airport"]
			];
			break;
		case "ATL":
		case "KATL":
			return [
				["https://www.fox10phoenix.com/webcams-atlanta2","Airport Cam 1"],
				["https://worldcams.tv/united-states/atlanta/airport","Airport Cam 2"]
			];
			break;
		case "AUS":
		case "KAUS":
			return [
				["https://www.earthcam.net/projects/abia/terminal/","Airport"]
			];
			break;
		case "AVL":
		case "KAVL":
			return [
				["", ""]
			]; // TODO
			break;
		case "AVP":
		case "KAVP":
			return [
				["", ""]
			]; // TODO
			break;
		case "AZA":
		case "KIWA":
			return [
				["", ""]
			]; // TODO
			break;
		case "BDA":
		case "TXKF":
			return [
				["https://www.youtube.com/watch?v=ninudy1Bxso", "Nonsuch Island"]
			];
			break;
		case "BDL":
		case "KBDL":
			return [
				["", ""]
			]; // TODO
			break;
		case "BFI":
		case "KBFI":
			return [
				["", ""]
			]; // TODO
			break;
		case "BFL":
		case "KBFL":
			return [
				["https://www.youtube.com/watch?v=TdugPEnluFo", "Mojave"]
			]; // TODO
			break;
		case "BGR":
		case "KBGR":
			return [
				["https://www.youtube.com/watch?v=v9NWddwu8rw", "Rockport Harbor"]
			]; // TODO
			break;
		case "BHM":
		case "KBHM":
			return [
				["", ""]
			]; // TODO
			break;
		case "BIL":
		case "KBIL":
			return [
				["", ""]
			]; // TODO
			break;
		case "BLV":
		case "KBLV":
			return [
				["", ""]
			]; // TODO
			break;
		case "BNA":
		case "KBNA":
			return [
				["https://www.youtube.com/watch?v=ATbtGvbExP4", "Skyline"]
			];
			break;
		case "BOI":
		case "KBOI":
			return [
				["", ""]
			]; // TODO
			break;
		case "BOS":
		case "KBOS":
			return [
				// "https://www.youtube.com/watch?v=vdd-TUP3cxs",
				["https://www.youtube.com/watch?v=zmiOmpo27F8", "Skyline"],
				["https://www.youtube.com/watch?v=yXfcL7DqlR4", "Hanover"],
				["https://www.youtube.com/watch?v=MhmTJQ7I_hU", "Nahant Bay"]
			];
			break;
		case "BRO":
		case "KBRO":
			return [
				["", ""]
			]; // TODO
			break;
		case "BTR":
		case "KBTR":
			return [
				["", ""]
			]; // TODO
			break;
		case "BTV":
		case "KBTV":
			return [
				["https://www.youtube.com/watch?v=3NZYi-BCCDY","Airport South"],
				["https://www.youtube.com/watch?v=JIE0vE51OKU","Lake Champlain"]
			];
			break;
		case "BUF":
		case "KBUF":
			return [
				["https://www.youtube.com/watch?v=P3EXDEuGNqE", "Buffalo Bills Stadium"],
				["https://www.youtube.com/watch?v=J032Ui8Papc", "Fort Niagara"],
				["https://www.youtube.com/watch?v=DnUFAShZKus", "Peace Bridge"]
			];
			break;
		case "BUR":
		case "KBUR":
			return [
				["", ""]
			]; // TODO
			break;
		case "BWI":
		case "KBWI":
			return [
				["", ""]
			]; // TODO
			break;
		case "BZN":
		case "KBZN":
			return [
				["https://mediaassets.kbzk.com/kbzk/BZN-Airport.jpg","Still Frames"]
			]; // TODO
			break;
		case "CAE":
		case "KCAE":
			return [
				["", ""]
			]; // TODO
			break;
		case "CAK":
		case "KCAK":
			return [
				["https://g1.ipcamlive.com/player/player.php?alias=63ed3a28704fc&autoplay=1&mute=1", "Downtown"]
			];
			break;
		case "CHS":
		case "KCHS":
			return [
				["", ""]
			]; // TODO
			break;
		case "CID":
		case "KCID":
			return [
				["https://www.youtube.com/watch?v=5c5EZJ4tgHY", "Muscatine"]
			]; // TODO
			break;
		case "CLE":
		case "KCLE":
			return [
				["https://www.youtube.com/watch?v=n5Ja0_q2Cos", "Terminal Tower"],
				["https://g1.ipcamlive.com/player/player.php?alias=63ed37f2439ce&autoplay=1&mute=1","Skyline"],
				// ["https://g1.ipcamlive.com/player/player.php?alias=6400d096802b0&autoplay=1&mute=1",""],
				["https://g1.ipcamlive.com/player/player.php?alias=65aa806e630fa&autoplay=1&mute=1","Harbor"],
				["https://www.youtube.com/watch?v=ZZevIUr2cTk", "Lorain"]
			];
			break;
		case "CLT":
		case "KCLT":
			return [
				["", ""]
			]; // TODO
			break;
		case "CMH":
		case "KCMH":
			return [
				["", ""]
			]; // TODO
			break;
		case "CNW":
		case "KCNW":
			return [
				["", ""]
			]; // TODO
			break;
		case "COS":
		case "KCOS":
			return [
				["https://www.youtube.com/watch?v=3Yaho-uceGw", "Colorado College"]
			];
			break;
		case "COU":
		case "KCOU":
			return [
				["", ""]
			]; // TODO
			break;
		case "CPR":
		case "KCPR":
			return [
				["", ""]
			]; // TODO
			break;
		case "CRP":
		case "KCRP":
			return [
				["", ""]
			]; // TODO
			break;
		case "CVG":
		case "KCVG":
			return [
				["https://www.youtube.com/watch?v=q5522RsCN00", "Skyline 1"],
				["https://www.youtube.com/watch?v=KKv3njehEcY", "Skyline 2"]
			];
			break;
		case "CYS":
		case "KCYS":
			return [
				["", ""]
			]; // TODO
			break;
		case "DAB":
		case "KDAB":
			return [
				["https://www.youtube.com/watch?v=xUtYeWxawXg", "Ormond Beach"]
			];
			break;
		case "DAL":
		case "KDAL":
			return [
				["", ""]
			]; // TODO
			break;
		case "DAY":
		case "KDAY":
			return [
				["https://www.youtube.com/watch?v=D9flnb2pQDc", "Beaver Creek"]
			];
			break;
		case "DCA":
		case "KDCA":
			return [
				["https://www.fox5dc.com/skycam-washington-dc-at-the-wharf", "Airport"],
				["https://www.youtube.com/watch?v=1wV9lLe14aU", "Potomac"]
			];
			break;
		case "DEN":
		case "KDEN":
			return [
				["https://s3.amazonaws.com/images.repo.mh.wetmet.net/267-02-01/current_thumbnail.jpg", "Downtown"]
			]; // TODO
			break;
		case "DFW":
		case "KDFW":
			return [
				["https://www.youtube.com/watch?v=tMJ4ZRsiDfI", "Airport Cam 1"],
				["https://www.fox10phoenix.com/webcams-dallas", "Airport Cam 2"]
			];
			break;
		case "DLH":
		case "KDLH":
			return [
				["https://www.youtube.com/watch?v=m2wWzo9GmwY", "Skyline"],
				["https://www.youtube.com/watch?v=Arf54yKFp2Y", "Fairlawn"]
			];
			break;
		case "DRO":
		case "KDRO":
			return [
				["", ""]
			]; // TODO
			break;
		case "DSM":
		case "KDSM":
			return [
				["https://www.youtube.com/watch?v=k1K6jgVsdRI", "Pella Central Park"]
			]; // TODO
			break;
		case "DTW":
		case "KDTW":
			return [
				["", ""]
			]; // TODO
			break;
		case "ECP":
		case "KECP":
			return [
				["https://www.youtube.com/watch?v=51d8Rdt7U7I", "Skyline"],
				["https://www.youtube.com/watch?v=hzKVRtyl2lU", "Beach"]
			];
			break;
		case "EGE":
		case "KEGE":
			return [
				["https://www.iplivecams.com/live-cams/fly-vail-eagle-county-regional-airport-gypsum-colorado-united-states", "Airport"]
			];
			break;
		case "ELP":
		case "KELP":
			return [
				["", ""]
			]; // TODO
			break;
		case "EUG":
		case "KEUG":
			return [
				["", ""]
			]; // TODO
			break;
		case "EVV":
		case "KEVV":
			return [
				["", ""]
			]; // TODO
			break;
		case "EWR":
		case "KEWR":
			return [
				["https://www.youtube.com/watch?v=TsgoxkRFit0", "Summit One"],
				["https://www.youtube.com/watch?v=xHLEKR3_8iI", "Coney Island"]
			]; // TODO
			break;
		case "EYW":
		case "KEYW":
			return [
				["https://www.youtube.com/watch?v=Y5ypYTZs-7o", "Marina"],
				["https://www.youtube.com/watch?v=HDlmUp4JBLg", "South Point"],
				["https://www.youtube.com/watch?v=_RxQuhI8_TY", "Big Pine Key"]
			]; // TODO
			break;
		case "FAR":
		case "KFAR":
			return [
				["", ""]
			]; // TODO
			break;
		case "FAT":
		case "KFAT":
			return [
				["https://www.youtube.com/watch?v=NK3S_T0Sabk","Friant"]
			]; // TODO
			break;
		case "FCA":
		case "KGPI":
			return [
				["", ""]
			]; // TODO
			break;
		case "FLL":
		case "KFLL":
			return [
				["https://www.youtube.com/watch?v=_tam0-UVAcY", "Skyline"],
				["https://www.youtube.com/watch?v=Lpm-C_Gz6yM", "Downtown"],
				["https://www.iplivecams.com/live-cams/hillsboro-lighthouse-preservation-society-pompano-beach-florida-united-states/", "Pompano Beach"],
				["https://www.youtube.com/watch?v=yCn5vANhLfQ", "Anglins Pier"]
			];
			break;
		case "FNT":
		case "KFNT":
			return [
				["", ""]
			]; // TODO
			break;
		case "FOE":
		case "KFOE":
			return [
				["", ""]
			]; // TODO
			break;
		case "FSD":
		case "KFSD":
			return [
				["https://media.psg.nexstardigital.net/kelo/livecams/siouxfallsfallspark.html", "Skyline"]
			];
			break;
		case "GEG":
		case "KGEG":
			return [
				["", ""]
			]; // TODO
			break;
		case "GGG":
		case "KGGG":
			return [
				["", ""]
			]; // TODO
			break;
		case "GJT":
		case "KGJT":
			return [
				["", ""]
			]; // TODO
			break;
		case "GNV":
		case "KGNV":
			return [
				["", ""]
			]; // TODO
			break;
		case "GPT":
		case "KGPT":
			return [
				["https://www.youtube.com/watch?v=fYsEy6RFskY", "D Iberville"]
			];
			break;
		case "GRB":
		case "KGRB":
			return [
				["", ""]
			]; // TODO
			break;
		case "GRK":
		case "KGRK":
			return [
				["", ""]
			]; // TODO
			break;
		case "GRR":
		case "KGRR":
			return [
				["", ""]
			]; // TODO
			break;
		case "GRU":
		case "SBGR":
			return [
				["https://www.youtube.com/watch?v=9d4EvAwTw1A", "Airport"]
			];
		case "GSO":
		case "KGSO":
			return [
				["", ""]
			]; // TODO
			break;
		case "GSP":
		case "KGSP":
			return [
				["", ""]
			]; // TODO
			break;
		case "GTF":
		case "KGTF":
			return [
				["", ""]
			]; // TODO
			break;
		case "GUC":
		case "KGUC":
			return [
				["", ""]
			]; // TODO
			break;
		case "HDN":
		case "KHDN":
			return [
				["https://www.youtube.com/watch?v=2UJDLWcSADk", "Steamboat Springs"]
			];
			break;
		case "HOU":
		case "KHOU":
			return [
				["", ""]
			]; // TODO
			break;
		case "HRL":
		case "KHRL":
			return [
				["", ""]
			]; // TODO
			break;
		case "HSV":
		case "KHSV":
			return [
				["", ""]
			]; // TODO
			break;
		case "IAD":
		case "KIAD":
			return [
				["", ""]
			]; // TODO
			break;
		case "IAH":
		case "KIAH":
			return [
				["", ""]
			]; // TODO
			break;
		case "ICT":
		case "KICT":
			return [
				["", ""]
			]; // TODO
			break;
		case "IFP":
		case "KIFP":
			return [
				["", ""]
			]; // TODO
			break;
		case "ILM":
		case "KILM":
			return [
				["https://www.youtube.com/watch?v=itXoEFJZtD0","Mercer Pier South"],
				["https://www.youtube.com/watch?v=yQG1M1GU_pI","Mercer Pier North"]
			];
			break;
		case "IND":
		case "KIND":
			return [
				["", ""]
			]; // TODO
			break;
		case "JAC":
		case "KJAC":
			return [
				["", ""]
			]; // TODO
			break;
		case "JAN":
		case "KJAN":
			return [
				["", ""]
			]; // TODO
			break;
		case "JAX":
		case "KJAX":
			return [
				["https://www.youtube.com/watch?v=0lox0s8zNcU", "St. Augustine"]
			]; // TODO
			break;
		case "JFK":
		case "KJFK":
			return [
				// "https://www.youtube.com/watch?v=0i_lTuIWf_A",
				["https://www.youtube.com/watch?v=xHLEKR3_8iI", "Coney Island"],
				["https://www.youtube.com/watch?v=TsgoxkRFit0", "Summit One"]
			];
			break;
		case "LAS":
		case "KLAS":
			return [
				["https://www.youtube.com/watch?v=cn8_34TuMaM", "Rwy 26R/26L"],
				["https://www.youtube.com/watch?v=MnyjqGMkzmw", "Allegiant Stadium"]
			];
			break;
		case "LAW":
		case "KLAW":
			return [
				["", ""]
			]; // TODO
			break;
		case "LAX":
		case "KLAX":
			return [
				["https://www.youtube.com/watch?v=VjqKog3XwZ8", "Rwy 24L/24R"],
				["https://www.youtube.com/watch?v=UQaSS4_VAV4", "Rwy 25L/25R"],
				["https://www.youtube.com/watch?v=D4B4MdxLkQo", "Manhattan Beach"]
			];
			break;
		case "LBB":
		case "KLBB":
			return [
				["", ""]
			]; // TODO
			break;
		case "LCH":
		case "KLCH":
			return [
				["", ""]
			]; // TODO
			break;
		case "LEX":
		case "KLEX":
			return [
				["https://www.youtube.com/watch?v=q2gnkOo04IE", "Skyline"]
			];
			break;
		case "LGA":
		case "KLGA":
			return [
				["https://www.youtube.com/watch?v=xHLEKR3_8iI", "Coney Island"],
				["https://www.youtube.com/watch?v=TsgoxkRFit0", "Summit One"]
			]; // TODO
			break;
		case "LIS":
		case "LPPT":
			return [
				["https://www.youtube.com/watch?v=XniwniDY-is", "Airport"]
			];
		case "LIT":
		case "KLIT":
			return [
				["", ""]
			]; // TODO
			break;
		case "LNK":
		case "KLNK":
			return [
				["", ""]
			]; // TODO
			break;
		case "LRD":
		case "KLRD":
			return [
				["", ""]
			]; // TODO
			break;
		case "MAF":
		case "KMAF":
			return [
				["", ""]
			]; // TODO
			break;
		case "MCI":
		case "KMCI":
			return [
				["https://www.youtube.com/watch?v=Ezm7jMHsx5A", "Downtown"],
				["https://www.youtube.com/watch?v=wdl24JBMMis", "Leavenworth"]
			];
			break;
		case "MCO":
		case "KMCO":
			return [
				["", ""]
			]; // TODO
			break;
		case "MDT":
		case "KMDT":
			return [
				["", ""]
			]; // TODO
			break;
		case "MDW":
		case "KMDW":
			return [
				["https://www.youtube.com/watch?v=hb22ynjZPxk", "Airport"]
			];
			break;
		case "MEM":
		case "KMEM":
			return [
				["", ""]
			]; // TODO
			break;
		case "MFE":
		case "KMFE":
			return [
				// "https://www.youtube.com/watch?v=la1nuQD04B4"
			];
			break;
		case "MGM":
		case "KMGM":
			return [
				["", ""]
			]; // TODO
			break;
		case "MHT":
		case "KMHT":
			return [
				["", ""]
			]; // TODO
			break;
		case "MIA":
		case "KMIA":
			return [
				["https://www.miamiairportcam.com/", "Airport"]
			];
			break;
		case "MKE":
		case "KMKE":
			return [
				["https://www.youtube.com/watch?v=kqmwfusqmKo", "Downtown"],
				["https://www.youtube.com/watch?v=13j5iZkMpbE", "Sheboygan"]
			];
			break;
		case "MLB":
		case "KMLB":
			return [
				["https://www.youtube.com/watch?v=0bv7YxPWRdw", "Satellite Beach"]
			];
			break;
		case "MLI":
		case "KMLI":
			return [
				["https://www.youtube.com/watch?v=8Rp5JRSQOvk", "Bettendorf"]
			];
			break;
		case "MOB":
		case "KMOB":
			return [
				["https://www.youtube.com/watch?v=rjASdnpfONo", "Downtown"],
				["https://www.youtube.com/watch?v=iQPgyQYfVjQ", "USS Alabama"],
				["https://www.iplivecams.com/live-cams/sea-n-suds-gulf-shores-alabama-united-states/", "Gulf Shores"],
				// ["https://www.youtube.com/watch?v=l2em7gqBj00", ""],
				["https://www.youtube.com/watch?v=N5wWOVOTHmQ", "Fairhope"]
			];
			break;
		case "MRY":
		case "KMRY":
			return [
				["", ""]
			]; // TODO
			break;
		case "MSN":
		case "KMSN":
			return [
				["", ""]
			]; // TODO
			break;
		case "MSO":
		case "KMSO":
			return [
				["", ""]
			]; // TODO
			break;
		case "MSP":
		case "KMSP":
			return [
				["https://www.youtube.com/watch?v=FY6WlMjzG2U", "Airport"],
				["https://www.youtube.com/watch?v=FTC8ZYHJMuw", "Prescott"]
			];
			break;
		case "MSY":
		case "KMSY":
			return [
				["", ""]
			]; // TODO
			break;
		case "MTJ":
		case "KMTJ":
			return [
				["", ""]
			]; // TODO
			break;
		case "MWH":
		case "KMWH":
			return [
				["", ""]
			]; // TODO
			break;
		case "MYR":
		case "KMYR":
			return [
				["https://www.youtube.com/watch?v=Sf8GYK93u5o", "Beach"],
				["https://www.youtube.com/watch?v=UKtfCDXhCq0", "Boardwalk"],
				["https://www.youtube.com/watch?v=EaYwBsJERv0", "Surfside Beach 1"],
				["https://www.youtube.com/watch?v=PdudbIiVIKQ", "Surfside Beach 2"]
			];
			break;
		case "OKC":
		case "KOKC":
			return [
				["", ""]
			]; // TODO
			break;
		case "OMA":
		case "KOMA":
			return [
				["", ""]
			]; // TODO
			break;
		case "ONT":
		case "KONT":
			return [
				["", ""]
			]; // TODO
			break;
		case "ORD":
		case "KORD":
			return [
				["https://www.youtube.com/watch?v=sQxL8t0gtu8", "Skyline"],
				["https://www.youtube.com/watch?v=hb22ynjZPxk", "KMDW"]
			]; // TODO
			break;
		case "ORF":
		case "KORF":
			return [
				["", ""]
			]; // TODO
			break;
		case "PAE":
		case "KPAE":
			return [
				["", ""]
			]; // TODO
			break;
		case "PBI":
		case "KPBI":
			return [
				["", ""]
			]; // TODO
			break;
		case "PDX":
		case "KPDX":
			return [
				["https://www.youtube.com/watch?v=bitp5j26JEc", "Skyline"]
			];
			break;
		case "PHL":
		case "KPHL":
			return [
				["https://www.youtube.com/watch?v=RH5fgOcO0jg", "Downtown"]
			];
			break;
		case "PHX":
		case "KPHX":
			return [
				["https://video.nest.com/embedded/live/JS4fe4vuKh", "Skyline"]
				
			];
			break;
		case "PIE":
		case "KPIE":
			return [
				["", ""]
			]; // TODO
			break;
		case "PIH":
		case "KPIH":
			return [
				["", ""]
			]; // TODO
			break;
		case "PIT":
		case "KPIT":
			return [
				["", ""]
			]; // TODO
			break;
		case "PMI":
		case "LEPA":
			return [
				["https://www.youtube.com/watch?v=AeFSWxScJ8c", "El Toro"]
			];
			break;
		case "PNS":
		case "KPNS":
			return [
				["https://www.youtube.com/watch?v=ar9SpRynExk", "Perdido Key"],
				["https://www.youtube.com/watch?v=5Ijk8QsR-nw", "Orange Beach 1"],
				["https://www.youtube.com/watch?v=g4fuUj6X7GY", "Orange Beach 2"]
				];
			break;
		case "PSM":
		case "KPSM":
			return [
				"https://www.youtube.com/watch?v=hYnWDuvXXvc"
			];
			break;
		case "PSP":
		case "KPSP":
			return [
				["https://www.youtube.com/watch?v=K2Ec8r9MHJg", "Airport"]
			];
			break;
		case "PUB":
		case "KPUB":
			return [
				["", ""]
			]; // TODO
			break;
		case "PVD":
		case "KPVD":
			return [
				// ["https://www.youtube.com/watch?v=sp-FHZY95QM", "Nantucket"]
			]; // TODO
			break;
		case "PWM":
		case "KPWM":
			return [
				["https://www.youtube.com/watch?v=-acfCP1ks-c", "Downtown"],
				["https://www.youtube.com/watch?v=4muj2V_WCPw", "Old Orchard Beach"]
			];
			break;
		case "RAP":
		case "KRAP":
			return [
				["", ""]
			]; // TODO
			break;
		case "RDM":
		case "KRDM":
			return [
				["", ""]
			]; // TODO
			break;
		case "RDU":
		case "KRDU":
			return [
				["https://www.youtube.com/watch?v=qy3TCN2abFc", "KLHZ Airport"]
			]; // TODO
			break;
		case "RFD":
		case "KRFD":
			return [
				["", ""]
			]; // TODO
			break;
		case "RIC":
		case "KRIC":
			return [
				["", ""]
			]; // TODO
			break;
		case "RNO":
		case "KRNO":
			return [
				["https://www.youtube.com/watch?v=V-ERTb6JXrc", "Downtown"],
				["https://www.youtube.com/watch?v=laopqyiYlxg", "Reno Arch"]
			];
			break;
		case "ROC":
		case "KROC":
			return [
				["", ""]
			]; // TODO
			break;
		case "ROW":
		case "KROW":
			return [
				["", ""]
			]; // TODO
			break;
		case "RST":
		case "KRST":
			return [
				["", ""]
			]; // TODO
			break;
		case "RSW":
		case "KRSW":
			return [
				["https://www.youtube.com/watch?v=Zg1qEHQP-A4", "Causeway"],
				["https://www.youtube.com/watch?v=spyttB6YiaU", "Beach Resort"]
			];
			break;
		case "SAN":
		case "KSAN":
			return [
				["https://www.youtube.com/watch?v=277D0mDXTBE", "Bay"],
				["https://www.webcamtaxi.com/en/usa/california/san-diego.html","Downtown"],
				["https://www.youtube.com/watch?v=Pbgm0U1iEvQ", "Point Loma"]
			];
			break;
		case "SAT":
		case "KSAT":
			return [
				["", ""]
			]; // TODO
			break;
		case "SAV":
		case "KSAV":
			return [
				["", ""]
			]; // TODO
			break;
		case "SBA":
		case "KSBA":
			return [
				["", ""]
			]; // TODO
			break;
		case "SBN":
		case "KSBN":
			return [
				["", ""]
			]; // TODO
			break;
		case "SBP":
		case "KSBP":
			return [
				["https://www.youtube.com/watch?v=puruJI4u3RM", "Pismo Beach"]
			];
			break;
		case "SDF":
		case "KSDF":
			return [
				["", ""]
			]; // TODO
			break;
		case "SEA":
		case "KSEA":
			return [
				["https://www.youtube.com/watch?v=2eFJG4Uu0wI", "Airport"],
				["https://www.youtube.com/watch?v=4cgSE12k9Sc", "Skyline"]
			];
			break;
		case "SFB":
		case "KSFB":
			return [
				["", ""]
			]; // TODO
			break;
		case "SFO":
		case "KSFO":
			return [
				["https://www.youtube.com/watch?v=4F88aDCeLAE", "Airport"],
				["https://w3.mp.lura.live/player/prod/v3/anvload.html?key=eyJhbnZhY2siOiI1VkQ2RXlkNmRqZXdiQ21Od0JGbnNKajE3WUF2R1J3bCIsImV4cGVjdFByZXJvbGwiOnRydWUsImV4cGVjdFByZXJvbGxUaW1lb3V0Ijo1LCJodG1sNSI6dHJ1ZSwibSI6ImNicyIsInBsdWdpbnMiOnsiY29tc2NvcmUiOnsiYzMiOiJzYW5mcmFuY2lzY28uY2JzbG9jYWwuY29tIiwiY2xpZW50SWQiOiIzMDAwMDIzIn0sImRmcCI6eyJjbGllbnRTaWRlIjp7ImFkVGFnVXJsIjoiaHR0cDovL3B1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldC9nYW1wYWQvYWRzP3N6PTJ4Mlx1MDAyNml1PS80MTI4L2Nicy5zZlx1MDAyNmNpdV9zenNcdTAwMjZpbXBsPXNcdTAwMjZnZGZwX3JlcT0xXHUwMDI2ZW52PXZwXHUwMDI2b3V0cHV0PXhtbF92YXN0Mlx1MDAyNnVudmlld2VkX3Bvc2l0aW9uX3N0YXJ0PTFcdTAwMjZ1cmw9W3JlZmVycmVyX3VybF1cdTAwMjZkZXNjcmlwdGlvbl91cmw9W2Rlc2NyaXB0aW9uX3VybF1cdTAwMjZjb3JyZWxhdG9yPVt0aW1lc3RhbXBdIiwia2V5VmFsdWVzIjp7ImNhdGVnb3JpZXMiOiJbW0NBVEVHT1JJRVNdXSIsInByb2dyYW0iOiJbW1BST0dSQU1fTkFNRV1dIiwic2l0ZVNlY3Rpb24iOiJ2aWRlby1leHBlcmllbmNlIn19fSwiaGVhcnRiZWF0QmV0YSI6eyJhY2NvdW50IjoiY2JzbG9jYWwtZ2xvYmFsLXVuaWZpZWQiLCJjaGFwdGVyVHJhY2tpbmciOmZhbHNlLCJjdXN0b21NZXRhZGF0YSI6eyJ2aWRlbyI6eyJjYnNfbWFya2V0Ijoic2FuZnJhbmNpc2NvLmNic2xvY2FsLmNvbSIsImNic19wbGF0Zm9ybSI6ImRlc2t0b3AifX0sImN1c3RvbVRyYWNraW5nU2VydmVyIjoiY2JzZGlnaXRhbG1lZGlhLmQxLnNjLm9tdHJkYy5uZXQiLCJjdXN0b21UcmFja2luZ1NlcnZlclNlY3VyZSI6ImNic2RpZ2l0YWxtZWRpYS5kMS5zYy5vbXRyZGMubmV0Iiwiam9iSWQiOiJzY192YSIsIm1hcmtldGluZ0Nsb3VkSWQiOiI4MjNCQTAzMzU1Njc0OTdGN0YwMDAxMDFAQWRvYmVPcmciLCJwSW5zdGFuY2UiOiJwMCIsInByb2ZpbGUiOiJjYnMiLCJwdWJsaXNoZXJJZCI6ImNic2xvY2FsIiwidHJhY2tpbmdTZXJ2ZXIiOiJjYnNkaWdpdGFsbWVkaWEuaGIub210cmRjLm5ldCIsInZlcnNpb24iOiIxLjUifSwibW9hdCI6eyJjbGllbnRTaWRlIjp7InBhcnRuZXJDb2RlIjoiY2JzbG9jYWxhbnZhdG92aWRlbzE4MTczMjYwOTQzMSJ9fX0sInRva2VuIjoiZGVmYXVsdCIsInYiOiJjNTA5In0", "Bay Bridge"]
				// ["https://www.youtube.com/watch?v=CXYr04BWvmc", "Bay Bridge"]
			]; // TODO
			break;
		case "SGF":
		case "KSGF":
			return [
				["", ""]
			]; // TODO
			break;
		case "SHV":
		case "KSHV":
			return [
				["", ""]
			]; // TODO
			break;
		case "SJC":
		case "KSJC":
			return [
				["", ""]
			]; // TODO
			break;
		case "SLC":
		case "KSLC":
			return [
				["", ""]
			]; // TODO
			break;
		case "SMF":
		case "KSMF":
			return [
				["", ""]
			]; // TODO
			break;
		case "SNA":
		case "KSNA":
			return [
				["https://www.youtube.com/watch?v=AShvF9ILGkc", "Orange Plaza"]
			];
			break;
		case "SPS":
		case "KSPS":
			return [
				["", ""]
			]; // TODO
			break;
		case "SRQ":
		case "KSRQ":
			return [
				["https://www.youtube.com/watch?v=EmHLP80PMU0", "Anna Maria Island"]
			]; // TODO
			break;
		case "STL":
		case "KSTL":
			return [
				["https://www.ksdk.com/airport-cam", "Airport"]
			];
			break;
		case "STS":
		case "KSTS":
			return [
				["", ""]
			]; // TODO
			break;
		case "SWF":
		case "KSWF":
			return [
				["", ""]
			]; // TODO
			break;
		case "SYR":
		case "KSYR":
			return [
				["", ""]
			]; // TODO
			break;
		case "TLH":
		case "KTLH":
			return [
				["", ""]
			]; // TODO
			break;
		case "TPA":
		case "KTPA":
			return [
				["", ""]
			]; // TODO
			break;
		case "TUL":
		case "KTUL":
			return [
				["", ""]
			]; // TODO
			break;
		case "TUS":
		case "KTUS":
			return [
				["https://www.youtube.com/watch?v=3CTBXCM_luA", "Skyline"]
			];
			break;
		case "TVC":
		case "KTVC":
			return [
				["https://www.youtube.com/watch?v=EtzcGicoy4I", "Downtown"]
			];
			break;
		case "TYS":
		case "KTYS":
			return [
				["", ""]
			]; // TODO
			break;
		case "VPS":
		case "KVPS":
			return [
				["https://www.youtube.com/watch?v=xNZBPxx8ykg", "Beach"],
				["https://www.youtube.com/watch?v=_9VkcK5vHgY", "Suntex Marina"]
			];
			break;
		case "XNA":
		case "KXNA":
			return [
				["", ""]
			]; // TODO
			break;
		case "YEG":
		case "CYEG":
			return [
				["", ""]
			]; // TODO
			break;
		case "YFB":
		case "CYFB":
			return [
				["", ""]
			]; // TODO
			break;
		case "YHM":
		case "CYHM":
			return [
				["", ""]
			]; // TODO
			break;
		case "YHZ":
		case "CYHZ":
			return [
				["", ""]
			]; // TODO
			break;
		case "YJT":
		case "CYJT":
			return [
				["", ""]
			]; // TODO
			break;
		case "YKM":
		case "KYKM":
			return [
				["", ""]
			]; // TODO
			break;
		case "YOW":
		case "CYOW":
			return [
				["", ""]
			]; // TODO
			break;
		case "YQB":
		case "CYQB":
			return [
				["", ""]
			]; // TODO
			break;
		case "YQM":
		case "CYQM":
			return [
				["", ""]
			]; // TODO
			break;
		case "YQX":
		case "CYQX":
			return [
				["", ""]
			]; // TODO
			break;
		case "YUL":
		case "CYUL":
			return [
				["", ""]
			]; // TODO
			break;
		case "YVR":
		case "CYVR":
			return [
				["https://www.youtube.com/watch?v=GHEmhcWjiTE", "Skyline"],
				["https://www.youtube.com/watch?v=rxyNjFKwzJA", "Harbor"],
				["https://www.youtube.com/watch?v=4MK3E9EWDSY", "Pier"]
			];
			break;
		case "YXY":
		case "CYXY":
			return [
				["", ""]
			]; // TODO
			break;
		case "YYC":
		case "CYYC":
			return [
				["https://www.youtube.com/watch?v=MwcqP3ta6RI", "Skyline"],
				["https://www.youtube.com/watch?v=2udtsRKecyw", "Downtown"]
			];
			break;
		case "YYR":
		case "CYYR":
			return [
				["", ""]
			]; // TODO
			break;
		case "YYT":
		case "CYYT":
			return [
				["", ""]
			]; // TODO
			break;
		case "YYZ":
		case "CYYZ":
			return [
				["https://www.youtube.com/watch?v=TDaxgataBng", "CN Tower"]
			];
			break;
		case "YZF":
		case "CYZF":
			return [
				["", ""]
			]; // TODO
			break;

// Latin
		case "AUA":
		case "TNCA":
			return [
				["https://www.youtube.com/watch?v=_ZXMjk5K0_s", "Eagle Beach"]
			];
			break;
		case "CUN":
		case "MMUN":
			return [
				["https://www.youtube.com/watch?v=tlRVK1opGXo", "Royal Sands"]
			];
			break;
		case "KIN":
		case "MKJP":
			return [
				["https://www.youtube.com/watch?v=jVr7_V4Tohw", "Harbor1"],
				["https://www.youtube.com/watch?v=1nWP1fjBY94", "Harbor2"]
			];
			break;
		case "SAL":
		case "MSLP":
			return [
				["https://www.youtube.com/watch?v=IitNHCLLeA8", "Skyline"]
			];
			break;
		case "SXM":
		case "TNCM":
			return [
				["https://www.youtube.com/watch?v=LtzkkAeW_Qg", "Airport"],
				["https://www.youtube.com/watch?v=aBpnLhWvW3A", "Little Bay"],
				// ["https://www.youtube.com/watch?v=rEg487yY9ko", "Simpson Bay"],
				["https://www.youtube.com/watch?v=525dNEryfQ4", "Simpson Bay"]
			];
			break;
		case "ZIH":
		case "MMZH":
			return [
				["https://www.youtube.com/watch?v=WXi5sp4hZ0k", "Marina"]
			];
			break;


// Europe

		case "ATH":
		case "LGAV":
			return [
				["https://www.youtube.com/watch?v=cRTbQePGwPk", "Skyline"]
			];
			break;
		case "AMS":
		case "EHAM":
			return [
				["https://www.youtube.com/watch?v=2tgHBRFHMm8", "Central Station"]
			];
			break;
		case "DUB":
		case "EIDW":
			return [
				["https://www.youtube.com/watch?v=oxx7MqjhOpw", "Bay"],
				["https://www.youtube.com/watch?v=muA0CLPmna4", "Phibsboro"]
			];
			break;
		case "GOA":
		case "LIMJ":
			return [
				["https://www.youtube.com/watch?v=Mw2R0FV7FP8", "Moneglia"]
			];
			break;


// Pacific
		case "BNE":
		case "YBBN":
			return [
				["https://www.youtube.com/watch?v=aaIANlqjVoU", "Skyline"]
			];
			break;
		case "FUK":
		case "RJFF":
			return [
				["https://www.youtube.com/watch?v=8RyR0J8zbbU", "Hakata Station"]
			];
			break;
		case "HNL":
		case "PHNL":
			return [
				["https://www.youtube.com/watch?v=jfPjRG7N58g", "Ala Moana"]
			];
			break;
		case "NRT":
		case "RJAA":
			return [
				["https://www.youtube.com/watch?v=OuCbntsMsWY", "Airport"]
			];
			break;
		case "SYD":
		case "YSSY":
			return [
				["https://www.youtube.com/watch?v=5uZa3-RMFos", "Harbor1"],
				["https://www.youtube.com/watch?v=7pcL-0Wo77U", "Harbor2"],
			];
			break;
	}
	return [""];
}
