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
	flows = ((Object.keys(flows).length == 0) ? {"ABQ":0,"ATL":0,"BZN":0,"DFW":0,"DTW":0,"FCA":0,"IAH":0,"JAC":0,"LAX":0,"MCO":0,"MIA":0,"MSO":0,"PSP":0,"RNO":0,"SAN":0,"SBP":0,"SFO":0,"SJC":0,"SLC":0,"SMF":0,"SNA":0,"TUS":0} : flows);

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

	switch(dptr) {
		case "ABQ":
			result += "<br/><br/>ABQ Flow: <button type='button' id='ABQ_standard_left' class='btn" + ((flows['ABQ'] == 0) ? " selected" : "") + "' onclick='change_flow(\"ABQ\", 0)'>East</button>&nbsp;&nbsp;<button type='button' id='ABQ_standard_right' class='btn" + ((flows['ABQ'] == 1) ? " selected" : "") + "' onclick='change_flow(\"ABQ\", 1)'>West</button>";
			result += "<br/>ABQ - DOOKK WEST FLOW // MNZNO EAST FLOW";
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
			result += "<br/>BZN - MEADO NW FLOW (rwy30) // BGSKY BOBKT SE FLOW (rwy12)";
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
		case "EGE":
			result += "<br/><br/>EGE - Rwy 25 is preferred, even with tailwind";
			result += "<br/>EGE - VAA 25X for icing conditions 1000 - 10,000 Feet";
			result += "<br/>EGE - ARFF manages snow plow ops and notams";
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
/*
		case "FCA":
		case "GPI":
			result += "<br/><br/>FCA/KGPI Flow: <button type='button' id='FCA_standard_left' class='btn" + ((flows['FCA'] == 0) ? " selected" : "") + "' onclick='change_flow(\"FCA\", 0)'>North Rwy 2</button>&nbsp;&nbsp;<button type='button' id='FCA_standard_right' class='btn" + ((flows['FCA'] == 1) ? " selected" : "") + "' onclick='change_flow(\"FCA\", 1)'>South Rwy 20</button>";
			break;
*/
		case "GJT":
			result += "<br/><br/>GJT - Run VAA above 25C";
			break;
		case "IAH":
			result += "<br/><br/>IAH Flow: <button type='button' id='IAH_standard_left' class='btn" + ((flows['IAH'] == 0) ? " selected" : "") + "' onclick='change_flow(\"IAH\", 0)'>West</button>&nbsp;&nbsp;<button type='button' id='IAH_standard_right' class='btn" + ((flows['IAH'] == 1) ? " selected" : "") + "' onclick='change_flow(\"IAH\", 1)'>East</button>";
			// TODO result += "<br/>IAH -  W FLOW (rwy26) //  E FLOW (rwy8/9)";
			break;
		case "JAC":
			result += "<br/><br/>JAC - Tailwind or Contaminated Rwy takeoff N/A";
			result += "<br/>JAC - Always check VAA, Rwy19 is better";
			result += "<br/><br/>JAC Flow: <button type='button' id='JAC_standard_left' class='btn" + ((flows['JAC'] == 0) ? " selected" : "") + "' onclick='change_flow(\"JAC\", 0)'>South</button>&nbsp;&nbsp;<button type='button' id='JAC_standard_right' class='btn" + ((flows['JAC'] == 1) ? " selected" : "") + "' onclick='change_flow(\"JAC\", 1)'>North</button>";
			result += "<br/>JAC - ALPIN|TETON S FLOW (rwy19) // DIVYD|GEYSR N FLOW (rwy1)";
			break;
		case "LAX":
			result += "<br/><br/>LAX curfew 2100L - 0700L, see <a href=\"https://www.lawa.org/media/30137\" target=\"_blank\">KLAX Noise Abatement Procedures<\/a>";
			if (ac_type.includes("321")) {
				result += "<br/>A321 - File OSHNN instead of ORKAS";
			} else {
				result += "<br/>Departures after 2100L, file OSHNN instead of ORKAS";
			}
			result += "<br/><br/>LAX Flow: <button type='button' id='LAX_standard_left' class='btn" + ((flows['LAX'] == 0) ? " selected" : "") + "' onclick='change_flow(\"LAX\", 0)'>West</button>&nbsp;&nbsp;<button type='button' id='LAX_standard_right' class='btn" + ((flows['LAX'] == 1) ? " selected" : "") + "' onclick='change_flow(\"LAX\", 1)'>West</button>";
			result += "<br/>LAX usually West flow // E Flow (rwy6/7) - LAXX/GARDY/TRTON";
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
			result += "<br/>MSO - DIDLY NW FLOW (rwy30) // MZULA/VICTO SE FLOW (rwy12)";
			break;
		case "MTJ":
			result += "<br/><br/>MTJ - Rwy 13/31 N/A"; // TODO: Source?
			break;
		case "PHX":
			result += "<br/><br/>PHX - Make sure flow matches TPS; Usually departing into the sun (East in AMs, West in PMs)";
			result += "<br/>PHX - Rwy 26/8 usually available for dptr (operational necessity) if tower notified in advance";
			break;
		case "PSP":
			result += "<br/><br/>PSP - Run VAA for Rwy 31L";
			result += "<br/><br/>PSP Flow: <button type='button' id='PSP_standard_left' class='btn" + ((flows['PSP'] == 0) ? " selected" : "") + "' onclick='change_flow(\"PSP\", 0)'>South</button>&nbsp;&nbsp;<button type='button' id='PSP_standard_right' class='btn" + ((flows['PSP'] == 1) ? " selected" : "") + "' onclick='change_flow(\"PSP\", 1)'>North</button>";
			result += "<br/>PSP - HWRRD/YUCCA N FLOW (rwy31L) // IKNOE/JEEON/LGANN S FLOW (rwy13R)";
			break;
		case "RDM":
			result += "<br/><br/>RDM - Rwy11/29 N/A for A320 and non-sharklet A321, see 10-7A-2";
			break;
		case "RNO":
			result += "<br/><br/>RNO - Use 10-7 Pages and SIDS for takeoff mins";
			result += "<br/>RNO - Max climb gradient 525 feet per NM; Some south departures exceed 525 ft/nm (see 10-7C)";
			result += "<br/><br/>RNO Flow: <button type='button' id='RNO_standard_left' class='btn" + ((flows['RNO'] == 0) ? " selected" : "") + "' onclick='change_flow(\"RNO\", 0)'>South</button>&nbsp;&nbsp;<button type='button' id='RNO_standard_right' class='btn" + ((flows['RNO'] == 1) ? " selected" : "") + "' onclick='change_flow(\"RNO\", 1)'>North</button>";
			result += "<br/>RNO - ALPYN N FLOW (rwy35L) // ZEFFR S FLOW (rwy17R)";
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
			result += "<br/>SBP - CREPE W FLOW (rwy29) // AVILA/WYNNR E FLOW (rwy11)";
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
			result += "<br/>SFO - Rwy1 NIITE|SEGUL|SSTIK // GNNRR|NIITE|SEGUL|SNTNA|WESLA Rwy28 // SAHEY Rwy19";
			result += "<br/>Make sure SID matches rwy in use. TRUKN is good on all runways;";
			break;
		case "SJC":
			result += "<br/><br/>SJC - Curfew rstr: 2330-0630L (see 10-9A), 30 min extension possible";
			result += "<br/>SJC - B737 MAX and A32F NEO exempt from curfew (see 10-7A-2)";
			result += "<br/><br/>SJC Flow: <button type='button' id='SJC_standard_left' class='btn" + ((flows['SJC'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SJC\", 0)'>North</button>&nbsp;&nbsp;<button type='button' id='SJC_standard_right' class='btn" + ((flows['SJC'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SJC\", 1)'>South</button>";
			result += "<br/>SJC S Flow ALMDN|BMRNG|TECKY (rwy12)<br/> SJC N Flow LOUPE|SJC3|SPTNS (rwy30)";
			break;
		case "SLC":
			result += "<br/><br/>SLC - Run VAA in summer";
			result += "<br/><br/>SLC Flow: <button type='button' id='SLC_standard_left' class='btn" + ((flows['SLC'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SLC\", 0)'>North</button>&nbsp;&nbsp;<button type='button' id='SLC_standard_right' class='btn" + ((flows['SLC'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SLC\", 1)'>South</button>";
			result += "<br/>SLC - ARCHZ|SEVYR N FLOW (rwy34) // ZIONZ S FLOW (rwy16) // RUGGD|DEZRT BOTH";
			break;
		case "SMF":
			result += "<br/><br/>SMF - Run VAA above 25C";
			result += "<br/><br/>SMF Flow: <button type='button' id='SMF_standard_left' class='btn" + ((flows['SMF'] == 0) ? " selected" : "") + "' onclick='change_flow(\"SMF\", 0)'>North</button>&nbsp;&nbsp;<button type='button' id='SMF_standard_right' class='btn" + ((flows['SMF'] == 1) ? " selected" : "") + "' onclick='change_flow(\"SMF\", 1)'>South</button>";
			result += "<br/>SMF - RVRCT N FLOW (rwy35) // SCTWN S FLOW (rwy 17)";
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
			result += "<br/>SNA - HOBOW|MIKAA N FLOW (rwy 2L) // FINZZ|HHERO|STAYY S FLOW (rwy 20R) // PIGGN Both";
			break;
		case "TUS":
			result += "<br/><br/>TUS Flow: <button type='button' id='TUS_standard_left' class='btn" + ((flows['TUS'] == 0) ? " selected" : "") + "' onclick='change_flow(\"TUS\", 0)'>SE Rwy 12</button>&nbsp;&nbsp;<button type='button' id='TUS_standard_right' class='btn" + ((flows['TUS'] == 1) ? " selected" : "") + "' onclick='change_flow(\"TUS\", 1)'>NW Rwy 30</button>";
			result += "<br/>TUS - WLDKT N FLOW (rwy30) // BURRO S FLOW (rwy12) // TUS9 all";
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
			result += "<br/><br/>Verify departure is listed in the CFS (Canada Flight Supplement) or clearance will deny you on pushback";
			break;
	}

	switch(arvl) {
		case "ABQ":
			result += "<br/><br/>ABQ - No ILS Rwy21 or Rwy26 // RNAV apchs cannot be used for alternate planning";
			result += "<br/>ABQ - Rwy12/30 N/A (See 10-7A)";
			break;
		case "ATL":
			result += "<br/><br/>ATL Flow: <button type='button' id='ATL_standard_left' class='btn" + ((flows['ATL'] == 0) ? " selected" : "") + "' onclick='change_flow(\"ATL\", 0)'>West</button>&nbsp;&nbsp;<button type='button' id='ATL_standard_right' class='btn" + ((flows['ATL'] == 1) ? " selected" : "") + "' onclick='change_flow(\"ATL\", 1)'>East</button>";
			result += "<br/>ATL - SITTH E FLOW // JJEDI W FLOW";
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
			result += "<br/>BZN - SUBKY NW FLOW (rwy30) // POWDA SE FLOW (rwy12)";
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
			result += "<br/>DFW SOUTH FLOW - VKTRY / SEEVR / BOOVE / BEREE<br/>DFW NORTH FLOW - JOVEM / BRDJE / SOCKK / WHINY";
			break;
		case "DTW":
			result += "<br/><br/>DTW Flow: <button type='button' id='DTW_standard_left' class='btn" + ((flows['DTW'] == 0) ? " selected" : "") + "' onclick='change_flow(\"DTW\", 0)'>North</button>&nbsp;&nbsp;<button type='button' id='DTW_standard_right' class='btn" + ((flows['DTW'] == 1) ? " selected" : "") + "' onclick='change_flow(\"DTW\", 1)'>South</button>";
			result += "<br/>DTW SOUTH FLOW - BONZZ / HTROD / TPGUN / FERRL / LAYKS / HANBL / VCTRZ / RKCTY";
			result += "<br/>DTW NORTH FLOW - KLYNK / CRAKN / CUUGR / WNGNT / GRAYT / LECTR / HAYLL / KKISS";
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
			result += "<br/>IAH - DRLLR W FLOW // GUSHR E FLOW";
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
		case "LAX":
			result += "<br/><br/>LAX Flow: <button type='button' id='LAX_standard_left' class='btn" + ((flows['LAX'] == 0) ? " selected" : "") + "' onclick='change_flow(\"LAX\", 0)'>West</button>" +
							"&nbsp;&nbsp;<button type='button' id='LAX_standard_middle' class='btn" + ((flows['LAX'] == 1) ? " selected" : "") + "' onclick='change_flow(\"LAX\", 1)'>East</button>" +
							 "&nbsp;&nbsp;<button type='button' id='LAX_standard_right' class='btn" + ((flows['LAX'] == 2) ? " selected" : "") + "' onclick='change_flow(\"LAX\", 2)'>Curfew</button>";
			// result += "<br/>LAX - ANJLL W FLOW // BIGBR E FLOW";
			break;
		case "MCO":
			result += "<br/><br/>MCO Flow: <button type='button' id='MCO_standard_left' class='btn" + ((flows['MCO'] == 0) ? " selected" : "") + "' onclick='change_flow(\"MCO\", 0)'>South</button>&nbsp;&nbsp;<button type='button' id='MCO_standard_right' class='btn" + ((flows['MCO'] == 1) ? " selected" : "") + "' onclick='change_flow(\"MCO\", 1)'>North</button>";
			result += "<br/>MCO - SNFLD N FLOW // GTOUT S FLOW // GRNCH|PRICY|ALYNA BOTH";
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
			result += "<br/>RNO - TARVR|EELZA|WADOL N FLOW (rwy35) // SCOLA|KLUBS|ORRCA|RYANN|WINRZ S FLOW (rwy17)";
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
			result += "<br/>SLC - JAZZZ|QWENN N FLOW (rwy34) // PITTT S FLOW (rwy16)";
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
			result += "<br/><br/>Verify arvl route is listed in the CFS (Canada Flight Supplement)";
			break;
		case "YOW":
			result += "<br/><br/>Verify arvl route is listed in the CFS (Canada Flight Supplement)";
			break;
		case "YUL":
			result += "<br/><br/>YUL - Curfew rstr 0100L - 0700L, Extensions authorized";
			result += "<br/>Verify arvl route is listed in the CFS (Canada Flight Supplement)";
			break;
		case "YVR":
			result += "<br/><br/>YVR - Curfew rstr 0000L - 0600L, Extensions authorized";
			result += "<br/>YVR - Rwy 13/31 N/A";
			result += "<br/>Verify arvl route is listed in the CFS (Canada Flight Supplement)";
			break;
		case "YYC":
			result += "<br/><br/>YYC - If alt needed: Check Customs for YEG; GEG is a good backup";
			result += "<br/>Verify arvl route is listed in the CFS (Canada Flight Supplement)";
			break;
		case "YYZ":
			result += "<br/><br/>YYZ - Curfew 0030-0630L; Extensions authorized (else pay fine)";
			result += "<br/>Airbus and Boeing are Stage 3 acft";
			result += "<br/>Verify arvl route is listed in the CFS (Canada Flight Supplement)";
			break;
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
						result = result.replaceAll("KJAC DIVYD2 HUKET", "KJAC TETON3 IDA HUKET"); // All else HUKET via IDA
						result = result.replaceAll("KJAC DIVYD2 DNW", "KJAC DNW");
						result = result.replaceAll("KJAC DIVYD2 BOY", "KJAC ALPIN BPI BOY");
						result = result.replaceAll("KJAC DIVYD2 JEDHY BPI", "KJAC ALPIN4 BPI"); // BPI via JEDHY
						result = result.replaceAll("KJAC DIVYD2 JEDHY", "KJAC JEDHY"); // All other JEDHY
						result = result.replaceAll("KJAC GEYSR6 DNW", "KJAC DNW");
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
						result = result.replaceAll("JJEDI3 KATL", "SITTH2 KATL");
						result = result.replaceAll("HOBTT2 KATL", "GNDLF2 KATL");
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
						result = result.replaceAll("KJAC ALPIN BPI BOY", "KJAC DIVYD2 BOY");
						result = result.replaceAll("KJAC ALPIN4 BPI", "KJAC DIVYD2 JEDHY BPI");
						result = result.replaceAll("KJAC ALPIN4 IDA", "KJAC DIVYD2 HUKET IDA");
						result = result.replaceAll("KJAC TETON3 IDA HUKET", "KJAC DIVYD2 HUKET");
						result = result.replaceAll("KJAC TETON3 IDA", "KJAC DIVYD2 HUKET IDA");
						result = result.replaceAll("KJAC DNW", "KJAC DIVYD2 DNW");
						result = result.replaceAll("KJAC JEDHY", "KJAC DIVYD2 JEDHY"); // All other JEDHY
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

weather_cam = function (str = null) {
	switch (str) {
		case "ABE":
		case "KABE":
			return [
				""
			]; // TODO
			break;
		case "ABI":
		case "KABI":
			return [
				""
			]; // TODO
			break;
		case "ABQ":
		case "KABQ":
			return [
				""
			]; // TODO
			break;
		case "ACT":
		case "KACT":
			return [
				""
			]; // TODO
			break;
		case "ACY":
		case "KACY":
			return [
				""
			]; // TODO
			break;
		case "AFW":
		case "KAFW":
			return [
				""
			]; // TODO
			break;
		case "AGS":
		case "KAGS":
			return [
				""
			]; // TODO
			break;
		case "ALB":
		case "KALB":
			return [
				""
			]; // TODO
			break;
		case "AMA":
		case "KAMA":
			return [
				""
			]; // TODO
			break;
		case "ATL":
		case "KATL":
			return [
				""
			]; // TODO
			break;
		case "AUS":
		case "KAUS":
			return [
				""
			]; // TODO
			break;
		case "AVL":
		case "KAVL":
			return [
				""
			]; // TODO
			break;
		case "AVP":
		case "KAVP":
			return [
				""
			]; // TODO
			break;
		case "AZA":
		case "KIWA":
			return [
				""
			]; // TODO
			break;
		case "BDL":
		case "KBDL":
			return [
				""
			]; // TODO
			break;
		case "BFI":
		case "KBFI":
			return [
				""
			]; // TODO
			break;
		case "BFL":
		case "KBFL":
			return [
				""
			]; // TODO
			break;
		case "BGR":
		case "KBGR":
			return [
				""
			]; // TODO
			break;
		case "BHM":
		case "KBHM":
			return [
				""
			]; // TODO
			break;
		case "BIL":
		case "KBIL":
			return [
				""
			]; // TODO
			break;
		case "BLV":
		case "KBLV":
			return [
				""
			]; // TODO
			break;
		case "BNA":
		case "KBNA":
			return [
				""
			]; // TODO
			break;
		case "BOI":
		case "KBOI":
			return [
				""
			]; // TODO
			break;
		case "BOS":
		case "KBOS":
			return [
				""
			]; // TODO
			break;
		case "BRO":
		case "KBRO":
			return [
				""
			]; // TODO
			break;
		case "BTR":
		case "KBTR":
			return [
				""
			]; // TODO
			break;
		case "BTV":
		case "KBTV":
			return [
				""
			]; // TODO
			break;
		case "BUF":
		case "KBUF":
			return [
				""
			]; // TODO
			break;
		case "BUR":
		case "KBUR":
			return [
				""
			]; // TODO
			break;
		case "BWI":
		case "KBWI":
			return [
				""
			]; // TODO
			break;
		case "BZN":
		case "KBZN":
			return [
				""
			]; // TODO
			break;
		case "CAE":
		case "KCAE":
			return [
				""
			]; // TODO
			break;
		case "CAK":
		case "KCAK":
			return [
				""
			]; // TODO
			break;
		case "CHS":
		case "KCHS":
			return [
				""
			]; // TODO
			break;
		case "CID":
		case "KCID":
			return [
				""
			]; // TODO
			break;
		case "CLE":
		case "KCLE":
			return [
				""
			]; // TODO
			break;
		case "CLT":
		case "KCLT":
			return [
				""
			]; // TODO
			break;
		case "CMH":
		case "KCMH":
			return [
				""
			]; // TODO
			break;
		case "CNW":
		case "KCNW":
			return [
				""
			]; // TODO
			break;
		case "COS":
		case "KCOS":
			return [
				""
			]; // TODO
			break;
		case "COU":
		case "KCOU":
			return [
				""
			]; // TODO
			break;
		case "CPR":
		case "KCPR":
			return [
				""
			]; // TODO
			break;
		case "CRP":
		case "KCRP":
			return [
				""
			]; // TODO
			break;
		case "CVG":
		case "KCVG":
			return [
				""
			]; // TODO
			break;
		case "CYS":
		case "KCYS":
			return [
				""
			]; // TODO
			break;
		case "DAB":
		case "KDAB":
			return [
				""
			]; // TODO
			break;
		case "DAL":
		case "KDAL":
			return [
				""
			]; // TODO
			break;
		case "DAY":
		case "KDAY":
			return [
				""
			]; // TODO
			break;
		case "DCA":
		case "KDCA":
			return [
				""
			]; // TODO
			break;
		case "DEN":
		case "KDEN":
			return [
				""
			]; // TODO
			break;
		case "DFW":
		case "KDFW":
			return [
				""
			]; // TODO
			break;
		case "DLH":
		case "KDLH":
			return [
				""
			]; // TODO
			break;
		case "DRO":
		case "KDRO":
			return [
				""
			]; // TODO
			break;
		case "DSM":
		case "KDSM":
			return [
				""
			]; // TODO
			break;
		case "DTW":
		case "KDTW":
			return [
				""
			]; // TODO
			break;
		case "ECP":
		case "KECP":
			return [
				""
			]; // TODO
			break;
		case "EGE":
		case "KEGE":
			return [
				"https://www.iplivecams.com/live-cams/fly-vail-eagle-county-regional-airport-gypsum-colorado-united-states"
			];
			break;
		case "ELP":
		case "KELP":
			return [
				""
			]; // TODO
			break;
		case "EUG":
		case "KEUG":
			return [
				""
			]; // TODO
			break;
		case "EVV":
		case "KEVV":
			return [
				""
			]; // TODO
			break;
		case "EWR":
		case "KEWR":
			return [
				""
			]; // TODO
			break;
		case "EYW":
		case "KEYW":
			return [
				""
			]; // TODO
			break;
		case "FAR":
		case "KFAR":
			return [
				""
			]; // TODO
			break;
		case "FAT":
		case "KFAT":
			return [
				""
			]; // TODO
			break;
		case "FCA":
		case "KGPI":
			return [
				""
			]; // TODO
			break;
		case "FLL":
		case "KFLL":
			return [
				"https://www.iplivecams.com/live-cams/hillsboro-lighthouse-preservation-society-pompano-beach-florida-united-states/"
			];
			break;
		case "FNT":
		case "KFNT":
			return [
				""
			]; // TODO
			break;
		case "FOE":
		case "KFOE":
			return [
				""
			]; // TODO
			break;
		case "FSD":
		case "KFSD":
			return [
				""
			]; // TODO
			break;
		case "GEG":
		case "KGEG":
			return [
				""
			]; // TODO
			break;
		case "GGG":
		case "KGGG":
			return [
				""
			]; // TODO
			break;
		case "GJT":
		case "KGJT":
			return [
				""
			]; // TODO
			break;
		case "GNV":
		case "KGNV":
			return [
				""
			]; // TODO
			break;
		case "GPT":
		case "KGPT":
			return [
				""
			]; // TODO
			break;
		case "GRB":
		case "KGRB":
			return [
				""
			]; // TODO
			break;
		case "GRK":
		case "KGRK":
			return [
				""
			]; // TODO
			break;
		case "GRR":
		case "KGRR":
			return [
				""
			]; // TODO
			break;
		case "GSO":
		case "KGSO":
			return [
				""
			]; // TODO
			break;
		case "GSP":
		case "KGSP":
			return [
				""
			]; // TODO
			break;
		case "GTF":
		case "KGTF":
			return [
				""
			]; // TODO
			break;
		case "GUC":
		case "KGUC":
			return [
				""
			]; // TODO
			break;
		case "HDN":
		case "KHDN":
			return [
				""
			]; // TODO
			break;
		case "HOU":
		case "KHOU":
			return [
				""
			]; // TODO
			break;
		case "HRL":
		case "KHRL":
			return [
				""
			]; // TODO
			break;
		case "HSV":
		case "KHSV":
			return [
				""
			]; // TODO
			break;
		case "IAD":
		case "KIAD":
			return [
				""
			]; // TODO
			break;
		case "IAH":
		case "KIAH":
			return [
				""
			]; // TODO
			break;
		case "ICT":
		case "KICT":
			return [
				""
			]; // TODO
			break;
		case "IFP":
		case "KIFP":
			return [
				""
			]; // TODO
			break;
		case "ILM":
		case "KILM":
			return [
				""
			]; // TODO
			break;
		case "IND":
		case "KIND":
			return [
				""
			]; // TODO
			break;
		case "JAC":
		case "KJAC":
			return [
				""
			]; // TODO
			break;
		case "JAN":
		case "KJAN":
			return [
				""
			]; // TODO
			break;
		case "JAX":
		case "KJAX":
			return [
				""
			]; // TODO
			break;
		case "JFK":
		case "KJFK":
			return [
				""
			]; // TODO
			break;
		case "LAS":
		case "KLAS":
			return [
				""
			]; // TODO
			break;
		case "LAW":
		case "KLAW":
			return [
				""
			]; // TODO
			break;
		case "LAX":
		case "KLAX":
			return [
				""
			]; // TODO
			break;
		case "LBB":
		case "KLBB":
			return [
				""
			]; // TODO
			break;
		case "LCH":
		case "KLCH":
			return [
				""
			]; // TODO
			break;
		case "LEX":
		case "KLEX":
			return [
				""
			]; // TODO
			break;
		case "LGA":
		case "KLGA":
			return [
				""
			]; // TODO
			break;
		case "LIT":
		case "KLIT":
			return [
				""
			]; // TODO
			break;
		case "LNK":
		case "KLNK":
			return [
				""
			]; // TODO
			break;
		case "LRD":
		case "KLRD":
			return [
				""
			]; // TODO
			break;
		case "MAF":
		case "KMAF":
			return [
				""
			]; // TODO
			break;
		case "MCI":
		case "KMCI":
			return [
				""
			]; // TODO
			break;
		case "MCO":
		case "KMCO":
			return [
				""
			]; // TODO
			break;
		case "MDT":
		case "KMDT":
			return [
				""
			]; // TODO
			break;
		case "MDW":
		case "KMDW":
			return [
				""
			]; // TODO
			break;
		case "MEM":
		case "KMEM":
			return [
				""
			]; // TODO
			break;
		case "MFE":
		case "KMFE":
			return [
				"https://www.youtube.com/watch?v=la1nuQD04B4" // McAllen Convention Center
			];
			break;
		case "MGM":
		case "KMGM":
			return [
				""
			]; // TODO
			break;
		case "MHT":
		case "KMHT":
			return [
				""
			]; // TODO
			break;
		case "MIA":
		case "KMIA":
			return [
				"https://www.miamiairportcam.com/"
			];
			break;
		case "MKE":
		case "KMKE":
			return [
				""
			]; // TODO
			break;
		case "MLB":
		case "KMLB":
			return [
				""
			]; // TODO
			break;
		case "MLI":
		case "KMLI":
			return [
				""
			]; // TODO
			break;
		case "MOB":
		case "KMOB":
			return [
				"https://www.iplivecams.com/live-cams/sea-n-suds-gulf-shores-alabama-united-states/",
				"https://www.youtube.com/watch?v=l2em7gqBj00"
			];
			break;
		case "MRY":
		case "KMRY":
			return [
				""
			]; // TODO
			break;
		case "MSN":
		case "KMSN":
			return [
				""
			]; // TODO
			break;
		case "MSO":
		case "KMSO":
			return [
				""
			]; // TODO
			break;
		case "MSP":
		case "KMSP":
			return [
				""
			]; // TODO
			break;
		case "MSY":
		case "KMSY":
			return [
				""
			]; // TODO
			break;
		case "MTJ":
		case "KMTJ":
			return [
				""
			]; // TODO
			break;
		case "MWH":
		case "KMWH":
			return [
				""
			]; // TODO
			break;
		case "MYR":
		case "KMYR":
			return [
				""
			]; // TODO
			break;
		case "OKC":
		case "KOKC":
			return [
				""
			]; // TODO
			break;
		case "OMA":
		case "KOMA":
			return [
				""
			]; // TODO
			break;
		case "ONT":
		case "KONT":
			return [
				""
			]; // TODO
			break;
		case "ORD":
		case "KORD":
			return [
				""
			]; // TODO
			break;
		case "ORF":
		case "KORF":
			return [
				""
			]; // TODO
			break;
		case "PAE":
		case "KPAE":
			return [
				""
			]; // TODO
			break;
		case "PBI":
		case "KPBI":
			return [
				""
			]; // TODO
			break;
		case "PDX":
		case "KPDX":
			return [
				""
			]; // TODO
			break;
		case "PHL":
		case "KPHL":
			return [
				""
			]; // TODO
			break;
		case "PHX":
		case "KPHX":
			return [
				""
			]; // TODO
			break;
		case "PIE":
		case "KPIE":
			return [
				""
			]; // TODO
			break;
		case "PIH":
		case "KPIH":
			return [
				""
			]; // TODO
			break;
		case "PIT":
		case "KPIT":
			return [
				""
			]; // TODO
			break;
		case "PNS":
		case "KPNS":
			return [
				""
			]; // TODO
			break;
		case "PSM":
		case "KPSM":
			return [
				""
			]; // TODO
			break;
		case "PSP":
		case "KPSP":
			return [
				""
			]; // TODO
			break;
		case "PUB":
		case "KPUB":
			return [
				""
			]; // TODO
			break;
		case "PVD":
		case "KPVD":
			return [
				""
			]; // TODO
			break;
		case "PWM":
		case "KPWM":
			return [
				""
			]; // TODO
			break;
		case "RAP":
		case "KRAP":
			return [
				""
			]; // TODO
			break;
		case "RDM":
		case "KRDM":
			return [
				""
			]; // TODO
			break;
		case "RDU":
		case "KRDU":
			return [
				""
			]; // TODO
			break;
		case "RFD":
		case "KRFD":
			return [
				""
			]; // TODO
			break;
		case "RIC":
		case "KRIC":
			return [
				""
			]; // TODO
			break;
		case "RNO":
		case "KRNO":
			return [
				""
			]; // TODO
			break;
		case "ROC":
		case "KROC":
			return [
				""
			]; // TODO
			break;
		case "ROW":
		case "KROW":
			return [
				""
			]; // TODO
			break;
		case "RST":
		case "KRST":
			return [
				""
			]; // TODO
			break;
		case "RSW":
		case "KRSW":
			return [
				""
			]; // TODO
			break;
		case "SAN":
		case "KSAN":
			return [
				""
			]; // TODO
			break;
		case "SAT":
		case "KSAT":
			return [
				""
			]; // TODO
			break;
		case "SAV":
		case "KSAV":
			return [
				""
			]; // TODO
			break;
		case "SBA":
		case "KSBA":
			return [
				""
			]; // TODO
			break;
		case "SBN":
		case "KSBN":
			return [
				""
			]; // TODO
			break;
		case "SBP":
		case "KSBP":
			return [
				""
			]; // TODO
			break;
		case "SDF":
		case "KSDF":
			return [
				""
			]; // TODO
			break;
		case "SEA":
		case "KSEA":
			return [
				""
			]; // TODO
			break;
		case "SFB":
		case "KSFB":
			return [
				""
			]; // TODO
			break;
		case "SFO":
		case "KSFO":
			return [
				""
			]; // TODO
			break;
		case "SGF":
		case "KSGF":
			return [
				""
			]; // TODO
			break;
		case "SHV":
		case "KSHV":
			return [
				""
			]; // TODO
			break;
		case "SJC":
		case "KSJC":
			return [
				""
			]; // TODO
			break;
		case "SLC":
		case "KSLC":
			return [
				""
			]; // TODO
			break;
		case "SMF":
		case "KSMF":
			return [
				""
			]; // TODO
			break;
		case "SNA":
		case "KSNA":
			return [
				""
			]; // TODO
			break;
		case "SPS":
		case "KSPS":
			return [
				""
			]; // TODO
			break;
		case "SRQ":
		case "KSRQ":
			return [
				""
			]; // TODO
			break;
		case "STL":
		case "KSTL":
			return [
				""
			]; // TODO
			break;
		case "STS":
		case "KSTS":
			return [
				""
			]; // TODO
			break;
		case "SWF":
		case "KSWF":
			return [
				""
			]; // TODO
			break;
		case "SYR":
		case "KSYR":
			return [
				""
			]; // TODO
			break;
		case "TLH":
		case "KTLH":
			return [
				""
			]; // TODO
			break;
		case "TPA":
		case "KTPA":
			return [
				""
			]; // TODO
			break;
		case "TUL":
		case "KTUL":
			return [
				""
			]; // TODO
			break;
		case "TUS":
		case "KTUS":
			return [
				""
			]; // TODO
			break;
		case "TVC":
		case "KTVC":
			return [
				""
			]; // TODO
			break;
		case "TYS":
		case "KTYS":
			return [
				""
			]; // TODO
			break;
		case "VPS":
		case "KVPS":
			return [
				""
			]; // TODO
			break;
		case "XNA":
		case "KXNA":
			return [
				""
			]; // TODO
			break;
		case "YEG":
		case "CYEG":
			return [
				""
			]; // TODO
			break;
		case "YFB":
		case "CYFB":
			return [
				""
			]; // TODO
			break;
		case "YHM":
		case "CYHM":
			return [
				""
			]; // TODO
			break;
		case "YHZ":
		case "CYHZ":
			return [
				""
			]; // TODO
			break;
		case "YJT":
		case "CYJT":
			return [
				""
			]; // TODO
			break;
		case "YKM":
		case "KYKM":
			return [
				""
			]; // TODO
			break;
		case "YOW":
		case "CYOW":
			return [
				""
			]; // TODO
			break;
		case "YQB":
		case "CYQB":
			return [
				""
			]; // TODO
			break;
		case "YQM":
		case "CYQM":
			return [
				""
			]; // TODO
			break;
		case "YQX":
		case "CYQX":
			return [
				""
			]; // TODO
			break;
		case "YUL":
		case "CYUL":
			return [
				""
			]; // TODO
			break;
		case "YVR":
		case "CYVR":
			return [
				""
			]; // TODO
			break;
		case "YXY":
		case "CYXY":
			return [
				""
			]; // TODO
			break;
		case "YYC":
		case "CYYC":
			return [
				"https://www.youtube.com/watch?v=MwcqP3ta6RI"
			];
			break;
		case "YYR":
		case "CYYR":
			return [
				""
			]; // TODO
			break;
		case "YYT":
		case "CYYT":
			return [
				""
			]; // TODO
			break;
		case "YYZ":
		case "CYYZ":
			return [
				""
			]; // TODO
			break;
		case "YZF":
		case "CYZF":
			return [
				""
			]; // TODO
			break;
	}
	return [""];
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
		if (str.length == 4) { return str; }
		else if (str.length == 3) {
			switch (str) {
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
