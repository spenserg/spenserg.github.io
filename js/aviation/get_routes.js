get_routes = function(dptr = "XXX", arvl = "XXX", tail = null, ac_type = null, result = "") {
	dptr = ((dptr.length == 4) ? (dptr.substr(1, 4)) : dptr);
	arvl = ((arvl.length == 4) ? (arvl.substr(1, 4)) : arvl);
	// if (arvl != "DFW") {  result += "<br/><br/><b>Faa Pref Route:</b>"; }

	switch(dptr) {

		case "ABE":
			switch(arvl) {
				case "CLT": // Updated 06-18-2025
					result += "<!-- Updated 06-18-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KABE ETX LRP EMI J48 MOL AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><input style=\"width:75%\"; value=\"KABE ETX RAV J64 BURNI TYROO QUARM AIR HVQ LNDIZ PARQR4 KCLT\"; readonly>"; // CDR HV
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-18-2025
					result += "<!-- Verified with ATCSCC on 06-18-2025 -->";
					result += "<br/>HV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KABE ETX RAV J64 BURNI TYROO QUARM AIR HVQ LNDIZ PARQR4 KCLT\" readonly>";
					break;
				case "JFK": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/>Div Recovery: <input style=\"width:75%\"; value=\"KABE SBJ CRI KJFK\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KABE SBJ CRI KJFK\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHL": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/>Div Recovery: <input style=\"width:75%\"; value=\"KABE MAZIE KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KABE ETX V29 PTW KPHL\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of ABE

		case "ABI":
			switch(arvl) {
				case "DFW": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KABI VKTRY VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KABI UKW UKW6 KDFW\" readonly>";
					break;
			}
		break; // End of ABI

		case "ABQ":
			switch(arvl) {
				case "DFW": // Updated 05-07-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KABQ MNZNO3 TXO TURKI VKTRY2 KDFW\" readonly>"; // CDR BV
					result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KABQ MNZNO3 CME BGS GEEKY BOOVE7 KDFW\" readonly>"; // CDR VK
					result += "<br/>South via FST: <span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KABQ MNZNO3 CME KA12W FST JCT GUTZZ BOOVE7 KDFW\" readonly>"; // Based on CDR BG
					result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KABQ FYSTA3 FTI PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>DFW BGTOE: <input style=\"width:75%\" value=\"KABQ MNZNO3 CME KA12W FST JCT GUTZZ BOOVE7 KDFW\" readonly>"; // Based on CDR BG
					result += "<br/>DFW WEST: <input style=\"width:75%\" value=\"KABQ MNZNO3 CME J15 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>"; // CDR WT
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KABQ TXO UKW8 KDFW\" readonly>";
					result += "<br/><input style=\"width:75%\" value=\"KABQ J6 TCC J76 SPS UKW8 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-21-2025
					result += "<!-- Verified with ATCSCC on 02-21-2025 -->";
					result += "<br/>BG<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KABQ CNX CME FST JCT GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>BV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KABQ DOOKK3 TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/>VK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KABQ CNX CME BGS GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>WT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KABQ CNX J15 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
					break;
				case "LAX": // Updated 05-07-2025
					result += "<!-- Updated 05-07-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KABQ RDRNR3 ZUN J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KABQ MNZNO3 SJN J18 PXR J18 IPL AMMOR OLAAA2 KLAX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-07-2025
					break;
				case "ORD": // Updated 05-07-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KABQ FYSTA3 FTI J18 GCK J96 IRK BENKY6 KORD\" readonly>"; // CDR JV
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KABQ ATOMK3 ATOMK ALS J13 FQF J10 LBF KP72C FOD MYRRS FYTTE7 KORD\" readonly>"; // CDR B2
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KABQ RDRNR3 ZUN J6 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>"; // CDR B1
					result += "<br/><br/>ORD BDF 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KABQ RDRNR3 ZUN J6 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/>ORD BDF 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KABQ ATOMK3 ATOMK ALS J13 FQF BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>ORD JVL 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KABQ FYSTA3 FTI J18 GCK J96 IRK BENKY6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KABQ ABQ J13 FQF BFF J94 ONL FOD MYRRS FYTTE7 KORD\"; readonly>"; // CDR B2
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-07-2025
					result += "<!-- Verified with ATCSCC on 05-07-2025 -->";
					result += "<br/>B1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KABQ RDRNR3 ZUN J6 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/>B2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KABQ ABQ J13 FQF BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>JB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KABQ ABQ J13 FQF BFF J94 ONL J114 GEP TVC WYNDE2 KORD\" readonly>";
					result += "<br/>JV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KABQ FTI J18 GCK J96 IRK BENKY6 KORD\" readonly>";
					break;
				case "PHX": // Updated 02-21-2025
					result += "<!-- Updated 02-21-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL270):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KABQ RDRNR3 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KABQ MNZNO3 ONM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KABQ LARGO3 ZUN BUNTR3 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-21-2025
					result += "<!-- Verified with ATCSCC on 02-21-2025 -->";
					result += "<br/>KS<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KABQ MNZNO3 ONM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>SS<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KABQ MNZNO3 ONM J104 SSO SUNSS8 KPHX\" readonly>";
					break;
			}
		break; // End of ABQ

		case "AGS":
			switch(arvl) {
				case "CLT": // Updated 01-30-2025
					result += "<!-- Updated 01-30-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAGS PONZE BANKR5 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAGS CAE FLO RASLN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "DFW": // Updated 02-06-2025
					result += "<!-- Updated 02-06-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAGS JUNPR6 NOKIE MVC MCB J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/><b style=\"color:orange\">Only use SAMMI/JUNPR except during Masters Golf Tournament (see chart)<\/b>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAGS JUNPR6 NOKIE MVC MCB J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of AGS

		case "ALB":
			switch(arvl) {
				case "CLT": // Updated 05-07-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KALB PWL BIZEX Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KALB PAYGE Q822 GONZZ Q29 JHW FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>"; // CDR 29
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KALB NELIE ORCHA HEADI Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>"; // CDR T7
					result += "<br/><br/>CLT NO CHSLY<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KALB HNK J49 PSB Q71 GEFFS HVQ LNDIZ PARQR4 KCLT\" readonly>"; // CDR N4
					result += "<br/>CLT NO PARQR<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KALB PAYGE Q822 GONZZ Q29 KLYNE ROD J43 FLM SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KALB HNK J49 PSB AIR HVQ GZG BTSEY2 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-07-2025
					result += "<!-- Verified with ATCSCC on 05-07-2025 -->";
					result += "<br/>29<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PAYGE Q822 GONZZ Q29 JHW FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>A4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB ALB ACOVE DBABE Q448 PTW J48 CSN GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB HNK J49 PSB Q71 GEFFS HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PWL BIZEX Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>T7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB NELIE ORCHA HEADI Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					break;
				case "DFW": // Updated 05-20-2025
					result += "<!-- Updated 05-20-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 05-07-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KALB CEDOR DANZI HNK J49 PSB Q71 GEFFS HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KALB GALWA PAYGE Q822 FNT J94 OBK MZV IRK J26 ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KALB CEDOR DANZI HNK J49 PSB Q71 BOBBD RMG VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/>South via ZDC<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KALB CANAN TRIBS Q448 PTW J48 CSN FANPO Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>Coastal<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KALB GDM FOXWD Q439 RIFLE HEADI Q97 SAWED GUILD Q409 SESUE PANDY TWINS NOKIE MGMRY GARTS AEX PNUTS BEREE3 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b><br/>"; // toddo
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-07-2025
					result += "<!-- Verified with ATCSCC on 05-07-2025 -->";
					result += "<br/>A1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB ALB J6 HVQ Q68 RAMRD IZAAC YUYUN BEREE3 KDFW\" readonly>";
					break;
				case "ORD": // Updated 05-21-2025
					result += "<!-- Updated 05-21-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KALB PAYGE Q822 FNT WYNDE2 KORD\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KALB PAGER NOVON KENLU NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>"; // CDR 3N
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KALB ALB J6 JEFFF Q480 AIR J80 EMPTY J149 FWA WATSN4 KORD\" readonly>"; // CDR A8
					result += "<br/><br/>North via SSM<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KALB BUGSY POLTY OXASA SSM GRB SHIKY FYTTE7 KORD\" readonly>"; // CDR CJ
					// result += "<br/><br/><b>Non RNAV</b><br/>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-21-2025
					result += "<!-- Verified with ATCSCC on 05-21-2025 -->";
					result += "<br/>1K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB ARNII Q816 GOATR WOZEE KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB ARNII Q816 GOATR WOZEE NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>2K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PAGER NOVON KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PAGER NOVON SIKBO NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>3K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PAGER NOVON SIKBO KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PAGER NOVON KENLU NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>4K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB BUGSY RADEN KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB BUGSY LETAK NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>5K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB ARNII Q816 GOATR WOZEE KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>6K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PAGER NOVON KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>A6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB ALB J6 JEFFF Q480 CANDR RAV Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>A8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB ALB J6 JEFFF Q480 AIR J80 EMPTY J149 FWA WATSN4 KORD\" readonly>";
					result += "<br/>CJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB BUGSY POLTY OXASA SSM GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>K1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB ARNII Q816 GOATR WOZEE KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PAGER NOVON KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>K3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PAGER NOVON SIKBO KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>K4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB BUGSY RADEN KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>N1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB ARNII Q816 GOATR WOZEE NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>N2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PAGER NOVON SIKBO NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>N3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PAGER NOVON KENLU NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB BUGSY LETAK NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PAYGE Q822 FNT WYNDE2 KORD\" readonly>";
					result += "<br/>YZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KALB PAYGE Q822 GONZZ FARGN CHAAP Q436 EMMMA WYNDE2 KORD\" readonly>";
					break;
			}
		break; // End of ALB

		case "AMA":
			switch(arvl) {
				case "DFW": // Updated 05-21-2025
					result += "<!-- Updated 05-21-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAMA PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KAMA TURKI DUMPS GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KAMA MMB PER HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAMA PNH UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-21-2025
					break;
			}
		break; // End of AMA

		case "ATL":
			switch(arvl) {
				case "CLT": // Updated 05-21-2025
					result += "<!-- Updated 05-21-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL PHIIL3 PHIIL CNTLR JONZE5 KCLT\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL SMKEY2 BOBBD COMDY FILPZ4 KCLT\" readonly>"; // CDR SK
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL VRSTY3 NOKIE DBN SAV CHECR STOCR4 KCLT\" readonly>"; // CDR VR
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL EATWO SOT LIINN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-21-2025
					result += "<!-- Verified with ATCSCC on 05-21-2025 -->";
					result += "<br/>PH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL PHIIL3 PHIIL BANKR BANKR5 KCLT\" readonly>";
					result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL PHIIL3 PHIIL CNTLR JONZE5 KCLT\" readonly>";
					result += "<br/>SK<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL SMKEY2 BOBBD COMDY FILPZ4 KCLT\" readonly>";
					result += "<br/>VR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL VRSTY3 NOKIE DBN SAV CHECR STOCR4 KCLT\" readonly>";
					break;
				case "DCA": // Updated 05-21-2025
					result += "<!-- Updated 05-21-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL JACCC2 KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL SMKEY2 BOBBD Q71 KONGO SITTR TRUPS5 KDCA\" readonly>"; // CDR SK
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL VRSTY3 NOKIE DBN TWINS CAE RDU FUUFF WAVES CAPSS3 KDCA\" readonly>"; // CDR VR
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-21-2025
					result += "<!-- Verified with ATCSCC on 05-21-2025 -->";
					result += "<br/>PA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL PADGT2 RAFTN FLM J43 ROD APE J30 LUISE FRDMM6 KDCA\" readonly>";
					result += "<br/>PL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL PLMMR3 BURGG SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL JACCC2 KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>SK<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL SMKEY2 BOBBD Q71 KONGO SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>VR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL VRSTY3 NOKIE DBN TWINS CAE RDU FUUFF WAVES CAPSS3 KDCA\" readonly>";
					break;
				case "DFW": // Updated 05-07-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL KAJIN2 STNGA MLU YUYUN BEREE3 KDFW\" readonly>"; // CDR RP
					result += "<br/><b style=\"color:orange\">If Fkeys gives you MULTI_SEGMENT error, use: ...STNGA KM18M MLU...<\/b>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KATL NASSA2 YAALL J14 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>South via AEX<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL HAALO3 SARGE GARTS AEX PNUTS BEREE3 KDFW\" readonly>"; // CDR HA
					result += "<br/>North via BNA<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL PENCL2 JAACE BNA CITAN MEM J66 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>"; // CDR PE
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL WEONE STNGA MLU YEAGR4 KDFW\" readonly>";
					result += "<br/><input style=\"width:75%\" value=\"KATL WETWO VUZ SQS YEAGR4 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-07-2025
					result += "<!-- Verified with ATCSCC on 05-07-2025 -->";
					result += "<br/>HA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL HAALO3 SARGE GARTS AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>PE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL PENCL2 JAACE BNA CITAN MEM J66 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL KAJIN2 STNGA MLU YUYUN BEREE3 KDFW\" readonly>";
					break;
				case "EWR": // Updated 07-07-2025
					result += "<!-- Updated 07-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL PLMMR3 BURGG Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL PADGT2 RAFTN FLM J43 ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>"; // CDR PA
					// TODO East/South
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
					result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
					result += "<br/>PA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL PADGT2 RAFTN FLM J43 ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>";
					result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL PLMMR3 BURGG Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
					result += "<br/>SK<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL SMKEY2 BOBBD Q71 KONGO Q34 GVE PHLBO4 KEWR\" readonly>";
					result += "<br/>VR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL VRSTY3 NOKIE TWINS BLAAN Q99 QUART PHLBO4 KEWR\" readonly>";
					break;
				case "LAX": // Updated 05-21-2025
					result += "<!-- Updated 05-21-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 05-21-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KATL NASSA2 YAALL J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL PENCL2 JAACE BNA ARG OKM IFI EZEEE FTI GUP J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>"; // CDR PE
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KATL NASSA2 VUZ MEI AEX J50 ACT INK J50 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/><b>For ZHU avoidance use ...AEX J50 LFK JCT J86 ELP...<\/b>";
					result += "<br/><br/>ABI: <input style=\"width:75%\" value=\"KATL NASSA2 VUZ SQS EIC J4 ABI EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>ELP: <input style=\"width:75%\" value=\"KATL POUNC2 GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>LEV WEST: <input style=\"width:75%\" value=\"KATL POUNC2 GRGIA ARNNY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>PNH 1: <input style=\"width:75%\" value=\"KATL NASSA2 YAALL J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>PNH 2: <input style=\"width:75%\" value=\"KATL NASSA2 VUZ J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>ROCKIES SOUTH 2: <input style=\"width:75%\" value=\"KATL NASSA2 VUZ SQS EIC J4 ABI J66 EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>TUL 1: <input style=\"width:75%\" value=\"KATL CUTTN2 HANKO MEM ARG TUL MMB FTI J8 GUP J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL WEONE VUZ J14 PNH J78 ABQ J78 DRK J231 TNP BASET5 KLAX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-21-2025
					result += "<!-- Verified with ATCSCC on 05-21-2025 -->";
					result += "<br/>CU<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL CUTTN2 HANKO GAD MEM PNH J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>HA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL HAALO3 SARGE EUF ARNNY IGB LIT OKM IFI EZEEE FTI GUP J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>PE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL PENCL2 JAACE BNA ARG OKM IFI EZEEE FTI GUP J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL NASSA2 YAALL J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					break;
				case "MIA": // Updated 05-07-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL BANNG3 LUCKK HONID FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL GAIRY2 IRQ FISHO Q93 DEBRL CSTAL3 KMIA\" readonly>"; // CDR GA
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL POUNC2 POUNC GRGIA MGMRY ACORI FROGZ4 KMIA\" readonly>"; // CDR PC
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL MCN AMG CRG OMN ANNEY4 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-07-2025
					result += "<!-- Verified with ATCSCC on 05-07-2025 -->";
					result += "<br/>GA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL GAIRY2 IRQ FISHO Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>PC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL POUNC2 POUNC GRGIA MGMRY ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL BANNG3 LUCKK HONID FROGZ4 KMIA\" readonly>";
					break;
				case "ORD": // Updated 06-01-2025
					result += "<!-- Updated 06-01-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL VARNM2 GLAZR Q118 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR RP
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL CUTTN2 HANKO GAD SMITZ BEATS J151 FAM FTZ TRTLL6 KORD\" readonly>"; // CDR CU
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL PLMMR3 BURGG DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR PL
					// result += "<br/><br/>ORD NO VEECK: <input style=\"width:75%\" value=\"KATL SMKEY2 BOBBD Q71 ATUME HVQ BIGLE PSKUR WEEVR Q62 WATSN WATSN4 KORD\" readonly>";
					// result += "<br/>ORD NO VEECK WATSN: <input style=\"width:75%\" value=\"KATL SMKEY2 BOBBD Q71 ATUME HVQ WWSHR RRONS EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL NOTWO VXV J43 ROD FWA KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-01-2025
					result += "<!-- Verified with ATCSCC on 06-01-2025 -->";
					result += "<br/>CU<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL CUTTN2 HANKO GAD SMITZ BEATS J151 FAM FTZ TRTLL6 KORD\" readonly>";
					result += "<br/>PL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL PLMMR3 BURGG DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL VARNM2 GLAZR Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					break;
				case "PHL": // Updated 10-22-24
					result += "<!-- Updated 10-22-24 -->";
					result += "<br/><input style=\"width:75%\" value=\"KATL PLMMR3 BURGG Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><input style=\"width:75%\" value=\"KATL PHIIL3 HRTWL Q64 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL EAONE SPA GSO RIC PXT SIE VCN9 KPHL\" readonly>";
					result += "<br/><input style=\"width:75%\" value=\"KATL EAONE BURGG Q22 BEARI FAK SWL VCN9 KPHL\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>PA (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL PADGT2 RAFTN FLM J43 ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL PLMMR3 BURGG Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>SK (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL SMKEY2 BOBBD Q71 KONGO Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>VR (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL VRSTY3 NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					break;
				case "PHX": // Updated 05-07-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-07-2025 MP -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref but this is what Delta usually files and what ZTL probably expects
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KATL NASSA2 YAALL J14 LIT J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL PENCL2 JAACE BNA KM42K OSW LBL CIM J96 GUP EAGUL6 KPHX\" readonly>"; // Based on CDR PE
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL NASSA2 VUZ SQS J52 TXK FUZ ABI J50 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>South via HRV<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL POUNC2 GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT J86 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>GTH<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL NASSA2 VUZ SQS J52 TXK BYP UKW GTH TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>LEV WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KATL POUNC2 GRGIA ARNNY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KATL WETWO VLKNN Q30 IZAAC KF24G KF27A ZUN BUNTR3 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-07-2025
					result += "<!-- Verified with ATCSCC on 05-07-2025 -->";
					result += "<br/>HA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL HAALO3 SARGE GARTS AEX LFK J50 ABI J4 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>PE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL PENCL2 JAACE BNA ARG RZC PER LBL CIM ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>RP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KATL NASSA2 VUZ HRISN Q30 IZAAC TXK J131 FUZ J66 EWM DRRVR PINNG1 KPHX\" readonly>";
					break;
			}
		break; // End of ATL

		case "AUS":
			switch(arvl) {
				case "CLT":// Updated 06-03-2025
					result += "<!-- Updated 06-03-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 06-03-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI AEX MEI LGC BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI TXK Q34 MEMFS TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><b>For a bit farther west, file: KAUS ELOEL3 KLNGR FUZ TXK Q34...<\/b>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI AWDAD SJI J2 CEW ALLMA PONZE BANKR5 KCLT\" readonly>"; // CDR 0J
					result += "<br/><br/>CLT NO JONZE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ Q184 MERDN PONZE BANKR5 KCLT\" readonly>"; // CDR 9J
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS CWK7 ACT GGG ELD SQS VUZ GQO VXV LIINN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-03-2025
					result += "<!-- Verified with ATCSCC on 06-03-2025 -->";
					result += "<br/>0J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI AWDAD SJI J2 CEW ALLMA PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>6J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP PSX SBIRD HRV SJI J2 CEW ALLMA PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>9J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ Q184 MERDN PONZE BANKR5 KCLT\" readonly>";
					break;
				case "DFW": // Updated 06-02-2025
					result += "<!-- Updated 06-02-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL260):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS ELOEL3 FORSS GUTZZ BOOVE7 KDFW\" readonly>"; // CDR 0S
					result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI BLTWY CRIED BEREE3 KDFW\" readonly>"; // CDR 3S
					result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT SJT GEEKY BOOVE7 KDFW\" readonly>"; // CDR 7S
					result += "<br/>Below FL240<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KAUS CWK7 NAVYS YEAGR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS CWK7 NAVYS YEAGR4 KDFW\" readonly>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS CWK7 ACT YEAGR4 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-02-2025
					result += "<!-- Verified with ATCSCC on 06-02-2025 -->";
					result += "<br/>0N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 FORSS GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 FORSS GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>2N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS SAYBR3 SAYBR CHEVE BEREE WHINY4 KDFW\" readonly>";
					result += "<br/>2S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS SAYBR3 SAYBR CHEVE BEREE BEREE3 KDFW\" readonly>";
					result += "<br/>3N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI BLTWY CRIED WHINY4 KDFW\" readonly>";
					result += "<br/>3S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI BLTWY CRIED BEREE3 KDFW\" readonly>";
					result += "<br/>6N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA COT DLF SJT GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/>6S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA COT DLF SJT GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>7N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT SJT GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/>7S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT SJT GEEKY BOOVE7 KDFW\" readonly>";
					break;
				case "JFK": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI Q22 CATLN Q64 SAWED Q108 SIE CAMRN KJFK\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI LFK MEM J29 PXV ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/><br/>LEV EAST 2: <input style=\"width:75%\" value=\"KAUS SAYBR3 SAYBR ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>MGM 1/2: <input style=\"width:75%\" value=\"KAUS SAYBR3 SAYBR ELD MERDN Q184 ARNNY FRDDO FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>MGM 3: <input style=\"width:75%\" value=\"KAUS SAYBR3 SAYBR ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>PXV: <input style=\"width:75%\" value=\"KAUS SAYBR3 SAYBR MLC RZC SGF J98 FAM J78 PXV ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS CWK7 TNV LFK ELD J29 MEM BNA SITTR MOL GVE NHK SIE CAMRN5 KJFK\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>0B (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI LFK SUTTN J29 CARIN MEMFS Q34 SITTR Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>0C (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI AWDAD SJI J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>0E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ TUL J87 JOT ELX SVM J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>0F (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI LFK SUTTN J29 CARIN MEMFS Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>0G (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI Q22 CATLN FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>0M (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI Q22 CATLN Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>0T (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ MLC RZC STL VHP RINTE KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>0V (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI Q22 CATLN Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>3E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 JAYJO TNV TUL J87 JOT ELX SVM J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>5B (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS PALMS3 PALMS IAH J29 CARIN MEMFS Q34 MAULS QUART HURTS SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>5X (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS PALMS3 PALMS CRP LAMMY TBD SJI CATLN Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>6C (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP PSX SBIRD HRV Q56 SJI J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>6G (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP PSX SBIRD HRV Q56 CATLN FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>6M (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP PSX SBIRD HRV Q56 CATLN Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>7E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY ABI TUL J87 JOT ELX SVM J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>7G (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ TUL J87 JOT ELX SVM J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>7T (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT SJT ABI MLC RZC STL VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>9B (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ J42 TXK Q34 MAULS QUART HURTS SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>9C (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ SWB MCB J50 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>9F (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ J42 TXK Q34 MEMFS Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>9G (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ Q184 ARNNY FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					break;
				case "LAX": // Updated 05-29-2025
					result += "<!-- Updated 05-29-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT J2 ALIBY J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 ABI TXO J72 ABQ J78 DRK GABBL HLYWD1 KLAX\" readonly>"; // CDR 9X
					result += "<br/><b style=\"color:orange\">If LANCER sua is active: KAUS ELOEL3 ABI DUMPS TXO J72...<\/b>";
					//result += "<br/><br/>Via ABQ: <input style=\"width:75%\" value=\"KAUS AEROZ2 SJT CME J15 ABQ J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					//result += "<br/><br/>NO EWM ELP: <input style=\"width:75%\" value=\"KAUS ELOEL3 ABI TXO CNX ONM PXR BXK J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS AUS7 JCT J2 ELP J50 SSO J4 TNP BASET5 KLAX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-29-2025
					result += "<!-- Verified with ATCSCC on 05-29-2025 -->";
					result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT Q20 CNX ONM PXR BXK J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>0G<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA KINEY OBGIY AGNID IMEXA AXASA ASUTA AMMOR OLAAA2 KLAX\" readonly>";
					result += "<br/>0W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA KINEY OBGIY AGNID CUS SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>6X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA KINEY DLF FST ELP SSO BXK ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>7X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT ELP J50 SSO BXK ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>9X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 ABI TXO J72 ABQ J78 DRK GABBL HLYWD1 KLAX\" readonly>";
					break;
				case "MIA": // Updated 05-06-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-06-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH J86 LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ Q184 MERDN DEFUN FROGZ4 KMIA\" readonly>"; // CDR 9L
					result += "<br/><br/>Full OW: <input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH VUH KELPP ALGAE MINOW M580 MARCI FROGZ4 KMIA\" readonly>";
					result += "<br/>Full OW via CRP: <input style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP PSXRH KELPP GPTCK MINOW M580 MARCI FROGZ4 KMIA\" readonly>";
					result += "<br/>Full OW via EYW: <input style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP PSXRH KELPP GPTCK MINOW EYW DVALL4 KMIA\" readonly>";
					result += "<br/>South via Mexico: <input style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP J25 BRO RADAS UT22 VESKO UT11 OMVOM UR522 XOPGI UB646 CANOA Y196 LULLS EYW DVALL4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS CWK7 TNV J87 IAH SZW RSW PALMZ2 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-06-2025
					result += "<!-- Verified with ATCSCC on 05-06-2025 -->";
					result += "<br/>0L<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>0Q<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH J86 LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>6L<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP PSX SBIRD TBD SJI J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>6Q<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP PSX SBIRD LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>9L<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ Q184 MERDN DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>9Q<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ Q184 DOBIS HRV LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					break;
				case "ORD": // Updated 06-04-2025 // Mandatory Routes checked
					result += "<!-- Updated 06-04-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ MLC SGF WELTS SHAIN2 KORD\" readonly>";
					result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>"; // CDR 0N
					result += "<br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI LFK SUTTN J29 CARIN MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR 0B
					result += "<br/><br/>ORD BDF 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>ORD JVL 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ J42 TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>ORD JVL BDF 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP J22 MCB MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>ORD OXI ROYKO<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT SJT ABI TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS AUS7 AGJ FUZ RZC SGF BAYLI BDF8 KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-04-2025
					result += "<!-- Verified with ATCSCC on 06-04-2025 -->";
					result += "<br/>0B<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI LFK SUTTN J29 CARIN MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>0J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 JAYJO TNV MCB J35 XESSS MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>0K<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ J42 TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>0N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>";
					result += "<br/>0T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI LFK TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>3K<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 JAYJO TNV MCB MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>3N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 JAYJO TNV FZT TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>";
					result += "<br/>6B<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP J22 MCB MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>6J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP J22 MCB MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>6K<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP J22 MCB MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>6T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP IAH ELD MEMFS HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>7N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT SJT ABI TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>";
					result += "<br/>9B<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>9J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>9T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ J42 TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					break;
				case "PHL": // Updated 07-07-2025
					result += "<!-- Updated 07-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS  ILEXY4 ZENZI LFK SUTTN J29 CARIN MEMFS Q34 GVE PAATS4 KPHL\" readonly>"; // CDR 0M
					result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI Q22 BEARI BBDOL PAATS4 KPHL\" readonly>"; // CDR 0M
					result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ MLC RZC STL VHP RINTE JST BOJID4 KPHL\" readonly>"; // CDR 0T
					result += "<br/><br/>South/ZTL Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI AWDAD SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>"; // CDR 0C
					result += "<br/>North/ZTL Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ J42 TXK Q34 GVE PAATS4 KPHL\" readonly>"; // CDR 9X
					result += "<br/>North via JOT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ TUL J87 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>"; // CDR 0E
					result += "<br/><br/>CEW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI AWDAD SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>HITMN<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ J42 TXK Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>JOT 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY ABI TUL J87 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>MGM 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ Q184 ARNNY FRDDO TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>MGM 3<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>VLKNN<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
					result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
					result += "<br/>0B<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI LFK SUTTN J29 CARIN MEMFS Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>0C<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI AWDAD SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>0D<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ TUL J87 JOT J30 TRAKK J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ TUL J87 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>0F<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI LFK SUTTN J29 CARIN MEMFS Q29 CREEP BLISS J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>0G<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI Q22 CATLN FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>0M<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>0T<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ MLC RZC STL VHP RINTE JST BOJID4 KPHL\" readonly>";
					result += "<br/>0V<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI IAH GUSTI Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>3E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 JAYJO TNV TUL J87 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>3T<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 JAYJO TNV FZT MLC RZC STL VHP RINTE JST BOJID4 KPHL\" readonly>";
					result += "<br/>3X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ILEXY4 ZENZI LFK SUTTN J29 CARIN MEMFS Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>5B<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS PALMS3 PALMS IAH J29 CARIN MEMFS Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>5X<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS PALMS3 CRP LAMMY TBD HRV Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>6B<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP J29 CARIN MEMFS Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>6F<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP J29 CARIN MEMFS Q29 CREEP BLISS J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>6G<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP PSX SBIRD HRV Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>6M<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP PSX SBIRD HRV Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>6V<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA THX CRP PSX SBIRD HRV Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>7E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY ABI TUL J87 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>7T<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT SJT ABI MLC RZC STL VHP RINTE JST BOJID4 KPHL\" readonly>";
					result += "<br/>9B<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ J42 TXK Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>9F<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ J42 TXK Q34 MEMFS Q29 CREEP BLISS J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>9G<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>9M<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ Q184 ARNNY FRDDO TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>9V<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>9X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 KLNGR FUZ J42 TXK Q34 GVE PAATS4 KPHL\" readonly>";
					break;
				case "PHX": // Updated 05-17-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-17-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY FST J2 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 ABI CNX ZUN EAGUL6 KPHX\" readonly>"; // CDR 9X
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS AUS6 JCT J2 ELP J50 SSO SUNSS8 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-17-2025
					result += "<!-- Verified with ATCSCC on 05-17-2025 -->";
					result += "<br/>0G<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA KINEY OBGIY AGNID VYLLA TUS HOTTT PINNG1 KPHX\" readonly>";
					result += "<br/>0W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA KINEY OBGIY AGNID CUS DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>6X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA KINEY DLF FST J86 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>7X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>9X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS ELOEL3 ABI CNX ZUN EAGUL6 KPHX\" readonly>";
					break;
				case "SNA": // Updated 06-04-2025
					result += "<!-- Updated 06-04-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT J86 ELP SKTTR EMLLD DSNEE6 KSNA\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KAUS ELOEL3 ABI TXO J72 ABQ J78 DRK HIMDU DSNEE6 KSNA\" readonly>";
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA KINEY OBGIY AGNID CUS SSO J4 BXK EMLLD DSNEE6 KSNA\" readonly>"; // CDR 0W
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-04-2025
					result += "<!-- Verified with ATCSCC on 06-04-2025 -->";
					result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS MUCKY3 MUCKY JCT Q20 CNX ONM SSO J4 BXK EMLLD DSNEE6 KSNA\" readonly>";
					result += "<br/>0G<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA KINEY OBGIY AGNID IMEXA AXASA ASUTA JLI V458 PACIF SLI KSNA\" readonly>";
					result += "<br/>0W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KAUS BNDIA3 BNDIA KINEY OBGIY AGNID CUS SSO J4 BXK EMLLD DSNEE6 KSNA\" readonly>";
					break;
			}
		break; // End of AUS

		case "AVL":
			switch(arvl) {
				case "CLT": // Updated 06-04-2025
					result += "<!-- Updated 06-04-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL120):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAVL JJENY KCLT\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KAVL SUZNN PARQR PARQR4 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-04-2025
					break;
				case "DFW": // Updated 06-04-2025
					result += "<!-- Updated 06-04-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAVL SOT VXV BNA MEM LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KAVL GQO VLKNN MERDN MHZ YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\"; value=\"KAVL SOT VXV J46 ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KAVL HRS VUZ SQS YEAGR4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-04-2025
					break;
				case "MIA": // Updated 10-22-24
					result += "<!-- Updated 10-22-24 -->";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KAVL QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KAVL ODF THRSR HONID FROGZ4 KMIA\" readonly>";
					break;
			}
		break; // End of AVL

		case "AVP":
			switch(arvl) {
				case "CLT": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAVP LVZ LRP GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KAVP LVZ T212 SEG BURNI TYROO HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KAVP LVZ LRP GVE LYH MAJIC4 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of AVP

		case "BDL":
			switch(arvl) {
				case "CLT": // Updated 06-04-2025
					result += "<!-- Updated 06-04-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBDL VEERS PWL BIZEX Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL CTR HNK J49 PSB Q71 GEFFS HVQ LNDIZ PARQR4 KCLT\" readonly>"; // CDR N4
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL CSTL9 CCC Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>"; // CDR T7
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBDL BDL CMK SBJ ARD OTT GVE LYH MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-04-2025
					result += "<!-- Verified with ATCSCC on 06-04-2025 -->";
					result += "<br/>29<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM Q822 GONZZ Q29 JHW FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>A4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BASYE Q448 PTW J48 CSN GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR HNK J49 PSB Q71 GEFFS HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BIZEX Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>T7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CSTL9 CCC Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					break;
				case "DCA": // Updated 04-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-19-2025 M -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBDL CSTL9 CCC TOPRR Q167 ZIZZI KNUKK ATR LAFLN DEALE3 KDCA\" readonly>"; // CDR PJ
					result += "<br/><br/>West <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL CTR CAM Q822 GONZZ Q29 JHW CXR AIR J34 BUCKO FRDMM6 KDCA\" readonly>"; // CDR 29
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL CTR HNK J49 PSB SKILS5 KDCA\" readonly>"; // CDR N4
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
					result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
					result += "<br/>29<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM Q822 GONZZ Q29 JHW CXR AIR J34 BUCKO FRDMM6 KDCA\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR HNK J49 PSB SKILS5 KDCA\" readonly>";
					result += "<br/>PB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BIZEX Q75 MXE CLIPR3 KDCA\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CSTL9 CCC TOPRR Q167 ZIZZI KNUKK ATR LAFLN DEALE3 KDCA\" readonly>";
					result += "<br/>Y5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM SYR J59 PSB SKILS5 KDCA\" readonly>";
					break;
				case "DFW": // Updated 06-04-2025 // Mandatory Routes checked
					result += "<!-- Updated 06-04-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBDL VEERS PWL BASYE Q406 BWZ J6 HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL CTR CAM Q822 FNT J94 OBK MZV IRK J26 ICT IRW IBAKE VKTRY2 KDFW\" readonly>"; // CDR 22
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL VEERS PWL BASYE Q448 PTW J48 CSN FANPO Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>"; // CDR A4
					result += "<br/><br/>South via AEX<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL CSTL9 CCC Q97 SAWED GUILD Q409 SESUE PANDY TWINS NOKIE MGMRY GARTS AEX PNUTS BEREE3 KDFW\" readonly>"; // CDR T7
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBDL HNK J49 PSB J60 DJB KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-04-2025
					result += "<!-- Verified with ATCSCC on 06-04-2025 -->";
					result += "<br/>22<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM Q822 FNT J94 OBK MZV IRK J26 ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>29<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM Q822 GONZZ Q29 KLYNE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>A4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BASYE Q448 PTW J48 CSN FANPO Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>A6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BASYE Q406 BWZ J6 HVQ Q68 RAMRD IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BASYE Q406 BWZ J6 HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>T7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CSTL9 CCC Q97 SAWED GUILD Q409 SESUE PANDY TWINS NOKIE MGMRY GARTS AEX PNUTS BEREE3 KDFW\" readonly>";
					break;
				case "MIA": // Updated 06-04-2025 // Mandatory Routes checked
					result += "<!-- Updated 06-04-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBDL CSTL9 CCC Q97 KALDA Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBDL CSTL9 CCC Q97 DEBRL CSTAL3 KMIA\" readonly>"; // CDR PL
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL VEERS PWL BASYE Q448 PTW J48 CSN FANPO Q40 MAULS FEEDS THRSR HONID FROGZ4 KMIA\" readonly>"; // CDR 42
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBDL CCC GEDIC J174 ORF ISO J121 CHS CAKET Q97 KENLL OMN KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-04-2025
					result += "<!-- Verified with ATCSCC on 06-04-2025 -->";
					result += "<br/>42<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BASYE Q448 PTW J48 CSN FANPO Q40 MAULS FEEDS THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>43<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BASYE Q448 PTW J48 CSN FANPO Q40 ALEAN VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>A4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BASYE Q448 PTW J48 EMI GVE Q75 GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>A6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BASYE Q406 BWZ J6 HVQ SPAYD VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>B7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BIZEX Q75 TEEEM BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>DW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CSTL9 CCC SPDEY Y488 STERN Y493 JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CSTL9 CCC Q97 SAWED GUILD Q409 ISUZO BULZI NICKI BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>F4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BASYE Q448 PTW J48 MOL FLASK GOWBE BURGG QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>F8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL IGN Q480 AIR HVQ J85 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>FN<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR HNK J49 PSB QUARM AIR HVQ J85 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CSTL9 CCC Q97 KALDA Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>PL<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CSTL9 CCC Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>S5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL BIZEX Q75 GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>Y5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM SYR J59 PSB Q71 GEFFS HVQ J85 SPA ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					break;
				case "ORD": // Updated 06-04-2025
					result += "<!-- Updated 06-04-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBDL CTR CAM Q822 FNT WYNDE2 KORD\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL CTR CAM PAGER NOVON KENPA OBSTR WYNDE2 KORD\" readonly>"; // CDR 2K
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL VEERS PWL IGN Q480 AIR J80 EMPTY J149 FWA WATSN4 KORD\" readonly>"; // CDR A8
					result += "<br/><br/>North via SSM<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL CTR CAM BUGSY POLTY OXASA SSM GRB SHIKY FYTTE7 KORD\" readonly>"; // CDR CJ
					result += "<br/><br/>CAN KENPA WEST 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL CTR CAM PAGER NOVON SIKBO KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>CAN KENPA WEST 4<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL CTR CAM BUGSY RADEN KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>LAKE ERIE WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBDL CTR CAM Q822 GONZZ FARGN CHAAP Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KBDL HNK J49 PSB J60 DJB KORD\"; readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-04-2025
					result += "<!-- Verified with ATCSCC on 06-04-2025 -->";
					result += "<br/>1K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM ARNII Q816 GOATR WOZEE KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM ARNII Q816 GOATR WOZEE NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>2K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM PAGER NOVON KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM PAGER NOVON SIKBO NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>3K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM PAGER NOVON SIKBO KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM PAGER NOVON KENLU NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>4K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM BUGSY RADEN KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM BUGSY LETAK NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>5K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM ARNII Q816 GOATR WOZEE KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>6K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM PAGER NOVON KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>A6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL IGN Q480 CANDR RAV Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>A8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL VEERS PWL IGN Q480 AIR J80 EMPTY J149 FWA WATSN4 KORD\" readonly>";
					result += "<br/>CJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM BUGSY POLTY OXASA SSM GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>K1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM ARNII Q816 GOATR WOZEE KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM PAGER NOVON KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>K3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM PAGER NOVON SIKBO KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>K4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM BUGSY RADEN KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>N1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM ARNII Q816 GOATR WOZEE NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>N2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM PAGER NOVON SIKBO NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>N3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM PAGER NOVON KENLU NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM BUGSY LETAK NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM Q822 FNT WYNDE2 KORD\" readonly>";
					result += "<br/>YZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBDL CTR CAM Q822 GONZZ FARGN CHAAP Q436 EMMMA WYNDE2 KORD\" readonly>";
					break;
			}
		break; // End of BDL

		case "BFL":
			switch(arvl) {
				case "DFW": // Updated 06-05-2025
					result += "<!-- Updated 06-05-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBFL MARIC4 LHS BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBFL MARIC4 LHS PMD J6 ABQ J72 TURKI VKTRY2 KDFW\" readonly>";
					//result += "<br/><br/>DFW WEST: <input style=\"width:75%\" value=\"KBFL MARIC4 LHS BOILE Q4 ZEBOL TFD J50 ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-05-2025
					result += "<!-- Verified with ATCSCC on 06-05-2025 -->";
					result += "<br/>ME<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBFL EHF V23 GMN LAX TRM BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>SE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBFL EHF V23 GMN LAX JLI IPL J2 GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					break;
				case "PHX": // Updated 06-05-2025
					result += "<!-- Updated 06-05-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBFL MARIC4 LHS PDZ J50 BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KBFL MARIC4 LHS PMD J6 HEC PRFUM WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBFL MARIC4 EHF V23 GMN LAX JLI IPL J2 HOGGZ HYDRR1 KPHX\" readonly>"; // Based on CDR SE
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-04-2025
					result += "<!-- Verified with ATCSCC on 06-04-2025 -->";
					result += "<br/>ME<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBFL EHF V23 GMN LAX TRM BLH HYDRR1 KPHX\" readonly>";
					result += "<br/>SE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBFL EHF V23 GMN LAX JLI IPL J2 HOGGZ HYDRR1 KPHX\" readonly>";
					break;
			}
		break; // End of BFL

		case "BGR":
			switch(arvl) {
				case "CLT": // Updated 02-06-2025
					result += "<!-- Updated 02-06-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBGR KAYCC KYLOH NELIE Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KBGR ENE BOS CCC SHERL Q439 BRIGS Q439 HOWYU CONFR CRPLR COUPN CHSLY6 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>29 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KBGR GONZZ Q29 JHW FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>A4 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KBGR KAYCC KYLOH BAF Q448 PTW J48 CSN GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>AB (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KBGR ALB BIZEX Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>N4 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KBGR ALB J49 PSB Q71 GEFFS HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>PJ (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KBGR KAYCC KYLOH NELIE Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>T7 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KBGR BEEKN Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					break;
				case "DFW": // Updated 02-06-2025
					result += "<!-- Updated 02-06-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBGR ENE Q480 BAF Q406 BWZ J6 HVQ Q68 LITTR MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KBGR SYR WOZEE Q818 FNT PMM RBS J19 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>North via JOT: <input style=\"width:75%\" value=\"KBGR ALB LOXXE Q82 JHW J554 GIJ J146 JOT J26 IRK J87 TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KBGR ENE Q480 BAF Q448 PTW J48 CSN FANPO Q40 WINAP MHZ YUYUN WHINY4 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of BGR

		case "BHM":
			switch(arvl) {
				case "CLT": // Updated 06-20-2025
					result += "<!-- Updated 06-20-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL290):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBHM CHEHA BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBHM GQO COMDY FILPZ4 KCLT\" readonly>";
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBHM LGC MCN DBN SAV CHECR STOCR4 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-20-2025
					break;
				case "DFW": // Updated 06-20-2025
					result += "<!-- Updated 06-20-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBHM JOEYE IGB MLU YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBHM JOEYE IGB LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBHM JOEYE IGB MCB J22 LCH J2 IAH CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBHM JOEYE IGB SQS YEAGR4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-20-2025
					break;
				case "MIA": // Updated 06-20-2025
					result += "<!-- Updated 06-20-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBHM MGMRY ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBHM CHEHA THRSR IRQ FISHO DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>West/OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBHM JOEYE IGB MCB HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					// result += "<br/><br/>MIA VIA MOGAE: <input style=\"width:75%\" value=\"KBHM CHEHA THRSR IRQ FISHO Q93 WOPNR Q97 EBAYY MOGAE BNFSH3 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBHM LGC GEF CTY PIE PALMZ2 KMIA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-20-2025
					break;
			}
		break; // End of BHM

		case "BIL":
			switch(arvl) {
				case "DFW": // Updated 02-23-2025
					result += "<!-- Updated 02-23-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KBIL GAITZ GRYNS CZI GCK MMB MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KBIL PRYER IKFOM BOY JUGIV CKW CHE DBL HBU J206 ALS PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/>North/East: <input style=\"width:75%\"; value=\"KBIL BIL J16 FSD J45 DSM J25 TUL KLAWW VKTRY2 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "ORD": // Updated 02-23-2025
					result += "<!-- Updated 02-23-2025 -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>";// No FAA Pref route as of 06-20-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KBIL BIL JELRO Q156 ZZIPR FYTTE7 KORD\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBIL BIL MLS DIK J36 GEP J70 BAE LYNNI ERNNY8 KORD\" readonly>";
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBIL BIL J13 DDY BFF LNK IRK SHAIN2 KORD\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-20-2025
					break;
			}
		break; // End of BIL

		case "BNA":
			switch(arvl) {
				case "CLT": // Updated 05-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-19-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL270):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBNA TAZMO3 BURME COMDY FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KBNA FLAME3 GENDE BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KBNA CHADM3 SWAPP SKYWA FILPZ4 KCLT\" readonly>";
					// todo North via IIU
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBNA VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-19-2025
					break;
				case "DFW": // Updated 05-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-19-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBNA DANLS3 SPKER LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KBNA DRURY3 ACKEE SQS YUYUN WHINY4 KDFW\" readonly>";
					result += "<br/>NW arrival: <input style=\"width:75%\" value=\"KBNA PARDN3 HODJS ARG MADES KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>DFW EAST 2 SOUTH: <input style=\"width:75%\" value=\"KBNA DRURY3 DRURY SQS AEX DAS IAH CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBNA MEM LIT FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-19-2025
					break;
				case "LAX": // Updated 05-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-19-2025 MP -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 05-19-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KBNA PARDN3 HODJS ARG KF33E IRW J6 ZUN GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KBNA DRURY3 HAGIE MHZ AEX J50 ACT INK J50 GBN J104 TNP BASET5 KLAX\" readonly>";
					result += "<br/><b style=\"color:orange\">For ZFW avoidance use ...AEX J50 LFK JCT J86 ELP...<\/b>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KBNA HGGRD3 TINGS J45 STL J24 MCI J80 HLC HGO J197 DVC PEEWE Q98 HAKMN KLAX\" readonly>";
					// result += "<br/>HAR via ICT: <input style=\"width:75%\" value=\"KBNA HGGRD3 TINGS ICT RSK JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					// ^ cuts through a small corner of ZAB
					// result += "<br/><br/>ABI: <input style=\"width:75%\" value=\"KBNA DANLS3 SPKER SQS EIC J4 ABI EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					// result += "<br/>PNH 1: <input style=\"width:75%\" value=\"KBNA DANLS3 SPKER MEM J66 LIT J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBNA J46 TUL J78 PKE J104 TNP BASET5 KLAX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-19-2025
					break;
				case "MIA": // Updated 05-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-19-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBNA FLAME3 FLAME ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/><b style=\"color:orange\">Anything other than what is listed above will trigger a Mandatory Route violation<\/b>";
					result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBNA TIPPN3 BRXTN RMG MCN CRG DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/><br/>East via SPA: <input style=\"width:75%\" value=\"KBNA TAZMO3 BURME VXV SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>West via HRV: <input style=\"width:75%\" value=\"KBNA DRURY3 JALAR IGB MEI J31 HRV Q105 BLVNS Y290 BAGGS RSW PALMZ2 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBNA RMG AMG CRG OMN ANNEY4 KMIA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-19-2025
					break;
				case "ORD": // Updated 06-23-2025
					result += "<!-- Updated 06-23-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL320):</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KBNA KRSTA3 OLSIE IIU HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/><br/>West (Max FL320)<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBNA HGGRD3 TINGS J45 STL MAGOO BFORD BENKY6 KORD\" readonly>";
					result += "<br/>East (Max FL320)<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBNA CHADM3 SWAPP ENGRA Q65 RINTE FWA WATSN4 KORD\" readonly>";
					result += "<br/><br/>West via SGF: <input style=\"width:75%\" value=\"KBNA PARDN3 HODJS ARG SGF IRK SHAIN2 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV (Max FL320)</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KBNA BWG VHP OXI KORD\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-23-2025
					break;
				case "PHL": // Updated 05-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-19-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBNA CHADM3 SWAPP Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KBNA TIPPN3 BRXTN RMG TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KBNA GDOGG3 FAPER VHP ROD J152 JST BOJID4 KPHL\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-19-2025
					break;
				case "PHX": // Updated 05-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-19-2025 MP -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 05-19-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KBNA DANLS3 SPKER FSM IRW J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KBNA DRURY3 ACKEE CRAMM Q32 ELD FUZ J4 ABI J66 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KBNA PARDN3 HODJS ARG J46 TUL MMB CIM RSK J161 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>South via AEX: <input style=\"width:75%\" value=\"KBNA DRURY3 HAGIE MHZ AEX J50 ACT INK J4 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><b style=\"color:orange\">For ZFW avoidance use ...AEX J50 LFK JCT J86 FST EWM...<\/b>";
					result += "<br/>NW Arrival: <input style=\"width:75%\" value=\"KBNA HGGRD3 TINGS J45 STL J24 MCI J80 GLD J146 HBU J128 GCN TENTS KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-19-2025
					break;
			}
		break; // End of BNA

		case "BOI":
			switch(arvl) {
				case "DFW": // No faa pref // Updated 07-11-2025
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-12-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KBOI ROARR PIH OCS BJC EZEEE MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBOI ROARR LYONS J12 FFU HVE RSK J58 PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><b>For SW Arrival: ...RSK J15 CME BGS GEEKY BOOVE7 KDFW<\/b>";
					result += "<br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBOI J54 LAR MOCTU Q148 BVO HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOI J54 PIH J20 LAA J168 SPS KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-11-2025
					break;

				// TODO: BOI-ORD

				case "PHX":  // No faa pref // Updated 07-11-2025
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOI ROARR LYONS CRITO WINEN Q35 CORKR TENTS BRUSR1 KPHX\" readonly>";
					result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBOI HYVAL REO J7 FMG J92 BLD PRFUM WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOI J15 TCH J11 DRK COYOT5 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-11-2025
					break;
			}
		break; // End of BOI

		case "BOS":
			switch(arvl) {
				case "CLT": // Updated 04-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-19-2025 M -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOS PATSS7 PATSS NELIE Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 RIFLE HEADI Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>"; // CDR T7
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 GONZZ Q29 JHW FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>"; // CDR 29
					result += "<br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBOS BRUWN7 BRUWN BORQE JENYY BEHHR Y488 STERN Y493 TUBBS DIZNY Y436 PITRW STOCR4 KCLT\" readonly>";
					result += "<br/><br/>ZBW VIA HNK ESCAPE: <input style=\"width:75%\" value=\"KBOS PATSS7 PATSS HNK J49 PSB HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>ZBW VIA HTO ESCAPE: <input style=\"width:75%\" value=\"KBOS PATSS7 PATSS HEADI Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>ZBW VIA SYR ESCAPE: <input style=\"width:75%\" value=\"KBOS REVSS6 REVSS CTR SYR J59 PSB HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOS BURDY PVD J55 HOFFI J79 VILLS J37 LYH KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
					result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
					result += "<br/>29<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 GONZZ Q29 JHW FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>A4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q448 PTW J48 CSN GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS REVSS6 REVSS CTR HNK J49 PSB Q71 GEFFS HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS PATSS7 PATSS NELIE Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>T7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 RIFLE HEADI Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					break;
				case "DCA": // Updated 05-07-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOS PATSS7 PATSS NELIE Q75 MXE CLIPR3 KDCA\" readonly>";
					result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 ZIZZI KNUKK ATR LAFLN DEALE3 KDCA\" readonly>"; // CDR PJ
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 GONZZ Q29 JHW CXR AIR J34 BUCKO FRDMM6 KDCA\" readonly>"; // CDR 29
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOS PVD HOFFI J79 JFK J146 FJC HAR BUCKO KDCA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-07-2025
					result += "<!-- Verified with ATCSCC on 05-07-2025 -->";
					result += "<br/>29<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 GONZZ Q29 JHW CXR AIR J34 BUCKO FRDMM6 KDCA\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS REVSS6 REVSS CTR HNK J49 PSB SKILS5 KDCA\" readonly>";
					result += "<br/>PB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS PATSS7 PATSS NELIE Q75 MXE CLIPR3 KDCA\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 ZIZZI KNUKK ATR LAFLN DEALE3 KDCA\" readonly>";
					result += "<br/>Y5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND SYR J59 PSB SKILS5 KDCA\" readonly>";
					break;
				case "DFW": // Updated 04-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-19-2025 M -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q406 BWZ J6 HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>North <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 FNT J94 OBK MZV IRK J26 ICT IRW IBAKE VKTRY2 KDFW\" readonly>"; // CDR 22
					result += "<br/>South <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q448 PTW J48 CSN FANPO Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>"; // CDR A4
					result += "<br/>Coastal <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 RIFLE HEADI Q97 SAWED GUILD Q409 SESUE PANDY TWINS NOKIE MGMRY GARTS AEX PNUTS BEREE3 KDFW\" readonly>"; // CDR T7
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOS LOGAN4 BLZZR BAF IGN HUO LVZ SLT CXR DJB FWA BVT SPI SGF RZC FSM WILBR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
					result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
					result += "<br/>22<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 FNT J94 OBK MZV IRK J26 ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>29<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 GONZZ Q29 KLYNE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>A4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q448 PTW J48 CSN FANPO Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>A6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q406 BWZ J6 HVQ Q68 RAMRD IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q406 BWZ J6 HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>T7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 RIFLE HEADI Q97 SAWED GUILD Q409 SESUE PANDY TWINS NOKIE MGMRY GARTS AEX PNUTS BEREE3 KDFW\" readonly>";
					break;
				case "MIA": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 RIFLE HEADI Q97 KALDA Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 RIFLE HEADI Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 SPDEY Y488 STERN Y493 JENKS HOAGG BNFSH3 KMIA\" readonly>";
					// todo dca avoidance rte
					result += "<br/><br/>ATLANTIC SOUTH 1: <input style=\"width:75%\" value=\"KBOS BRUWN7 BRUWN ACK OHRYN AZEZU CROAK METZZ OOONN WHOOS WEAKK JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>ATLANTIC SOUTH 2: <input style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 EMJAY CORNE JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>VACAPES SOUTH 2: <input style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 EMJAY CORNE ECG JENKS HOAGG BNFSH3 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-17-2025
					result += "<!-- Verified with ATCSCC on 04-17-2025 -->";
					result += "<br/>42<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q448 PTW J48 CSN FANPO Q40 MAULS FEEDS THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>43<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q448 PTW J48 CSN FANPO Q40 ALEAN VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>A4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q448 PTW J48 EMI GVE Q75 GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>A6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q406 BWZ J6 HVQ SPAYD VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>B7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS PATSS7 PATSS NELIE Q75 TEEEM BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>DW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 SPDEY Y488 STERN Y493 JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 RIFLE HEADI Q97 SAWED GUILD Q409 ISUZO BULZI NICKI BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>F4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q448 PTW J48 MOL FLASK GOWBE BURGG QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>F8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q480 AIR HVQ J85 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>F9<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 GONZZ Q29 WWSHR APE J83 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>FN<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS REVSS6 REVSS CTR HNK J49 PSB QUARM AIR HVQ J85 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>FW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 GONZZ Q29 WWSHR APE J83 SPA ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 RIFLE HEADI Q97 KALDA Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>PL<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 RIFLE HEADI Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>S5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS PATSS7 PATSS NELIE Q75 GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>Y5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND SYR J59 PSB Q71 GEFFS HVQ J85 SPA ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					break;
				case "ORD": // Updated 07-12-2025
					result += "<!-- Updated 07-12-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 FNT WYNDE2 KORD\" readonly>";
					result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q480 AIR J80 EMPTY J149 FWA WATSN4 KORD\" readonly>"; // CDR A8
					result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON YEE KENPA GRB SHIKY FYTTE7 KORD\" readonly>"; // CDR 02
					// result += "<br/><br/>ORD EAST 3: <input style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q480 CANDR RAV Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/><br/>CAN KENPA WEST 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON SIKBO KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>CAN KENPA WEST 4<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND BUGSY RADEN KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>LAKE ERIE WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 GONZZ FARGN CHAAP Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOS LOGAN4 BURDY PUT HNK J49 PSB J60 DJB KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-12-2025
					result += "<!-- Verified with ATCSCC on 07-12-2025 -->";
					result += "<br/>02<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON YEE KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>03<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON SIKBO KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>04<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND BUGSY RADEN KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>12<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND SYR BUF NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>16<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND HANAA Q816 HOCKE GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>1K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND HANAA Q816 GOATR WOZEE KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND HANAA Q816 GOATR WOZEE NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>22<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON YYZ NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>2K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON SIKBO NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>32<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON KENLU NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>3K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON SIKBO KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON KENLU NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>42<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND BUGSY LETAK YEE NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>4K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND BUGSY RADEN KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND BUGSY LETAK NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>5K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND HANAA Q816 GOATR WOZEE KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>6K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>A6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q480 CANDR RAV Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>A8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q480 AIR J80 EMPTY J149 FWA WATSN4 KORD\" readonly>";
					result += "<br/>CJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND BUGSY POLTY OXASA SSM GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>K1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND HANAA Q816 GOATR WOZEE KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>K3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON SIKBO KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>K4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND BUGSY RADEN KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>LB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS LBSTA8 LBSTA ENE MPV GONZZ Q822 FNT WYNDE2 KORD\" readonly>";
					result += "<br/>LZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS LBSTA8 LBSTA ENE MPV GONZZ FARGN CHAAP Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>N1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND HANAA Q816 GOATR WOZEE NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>N2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON SIKBO NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>N3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON KENLU NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND BUGSY LETAK NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 FNT WYNDE2 KORD\" readonly>";
					result += "<br/>YZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 GONZZ FARGN CHAAP Q436 EMMMA WYNDE2 KORD\" readonly>";
					break;
				case "PHL": // Updated 04-08-2025
					result += "<!-- Updated 04-08-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL280):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 RIFLE Q439 BRIGS JIIMS4 KPHL\" readonly>";
					result += "<br/><br/>TEC Rte: <input style=\"width:75%\" value=\"KBOS PVD GON T320 BRIGS ACY V184 OOD KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBOS DNY SPUDS7 KPHL\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-08-2025
					result += "<!-- Verified with ATCSCC on 04-08-2025 -->";
					result += "<br/>D1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS REVSS6 REVSS CTR DNY SPUDS7 KPHL\" readonly>";
					result += "<br/>EL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR BAF MOBBS T295 LVZ ETX PTW KPHL\" readonly>";
					result += "<br/>EW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BOSOX T303 MAD BEADS T320 BRIGS ACY V184 OOD KPHL\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS Q167 RIFLE Q439 BRIGS JIIMS4 KPHL\" readonly>";
					break;
				case "PHX": // No faa pref // Updated 12-22-24
					result += "<br/><br/><input style=\"width:75%\" value=\"KBOS REVSS BAF Q480 AIR J80 VHP J110 STL KOOOP BUM Q176 TOTOE CURLY ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 FNT J36 BAE DBQ LNK PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>ABI: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND SYR GOATR WOZEE Q935 HOCKE GRB GEP ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>BUM: <input style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q406 BWZ J6 COLNS Q176 KENTO POAKE ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>CAN NOSIK WEST 1: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND SYR GOATR WOZEE NOSIK ZOHAN LAAKE ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>CAN NOSIK WEST 2: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON SIKBO NOSIK ZOHAN LAAKE ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>CAN NOSIK WEST 3: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON KENLU NOSIK ZOHAN LAAKE ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>CAN NOSIK WEST 4: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND BUGSY LETAK NOSIK ZOHAN LAAKE ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>ELP: <input style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q448 PTW J48 CSN FANPO Q40 NIOLA MCB LCH IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>FAM: <input style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q406 BWZ J6 HVQ J78 FAM J98 SGF PER MMB FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>GTH 1: <input style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q406 BWZ J6 HVQ Q68 LITTR TXK BYP UKW GTH TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>LEV WEST: <input style=\"width:75%\" value=\"KBOS PATSS7 PATSS NELIE Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>LNK: <input style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q480 CANDR J60 LNK HLC ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>MCW WEST: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 FNT J36 BAE MCW ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>ONL: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND HANAA Q816 GOATR WOZEE Q935 HOCKE GRB GEP ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>PNH 1: <input style=\"width:75%\" value=\"KBOS HYLND7 HYLND SYR GOATR WOZEE Q935 HOCKE GRB GEP ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>STL: <input style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q480 AIR J110 STL BUM ICT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/>Non RNAV SID/STAR: <input style=\"width:75%\" value=\"KBOS LOGAN4 HYLND CAM Q822 FNT J36 BAE MCW ONL PUB ALS GUP BUNTR3 KPHX\" readonly>";
					result += "<br/>Full Non RNAV: <input style=\"width:75%\" value=\"KBOS LOGAN4 REVSS HNK J217 ETG EWC J64 BDF J26 ICT LBL FTI J244 ZUN BUNTR3 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>1K: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND HANAA Q816 GOATR WOZEE KENPA CESNA ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>1N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND HANAA Q816 GOATR WOZEE NOSIK ZOHAN LAAKE ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>2K: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON KENPA CESNA ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>3K: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND NOVON SIKBO KENPA CESNA ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>4K (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND BUGSY RADEN KENPA CESNA ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>A4: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q448 PTW J48 CSN FANPO MAULS PSK ARTUR BNA J46 TUL IFI DANKS EZEEE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>A6: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q406 BWZ J6 HVQ J78 FAM SGF TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>A8: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q480 AIR J80 MCI J24 SLN J96 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>PJ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS HYLND7 HYLND CAM Q822 GONZZ Q29 KLYNE ROD VHP J110 BUM ICT TOTOE FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>RK: <input style=\"width:75%\" value=\"KBOS BLZZR6 BLZZR BAF Q406 BWZ J6 HVQ Q68 RAMRD ARG FSM IRW PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>T7 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KBOS SSOXS7 SSOXS BUZRD SEY HTO J174 ORF J121 BARTL KAATT Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC EIC J4 ABI J66 EWM DRRVR PINNG1 KPHX\" readonly>";
					break;
			}
		break; // End of BOS

		case "BRO":
			switch(arvl) {
				case "DFW": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KBRO CRP SAT GUTZZ BOOVE7 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // end of BRO

// BTR skipped

		case "BTV":
			switch(arvl) {
				case "CLT": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBTV PONCT BIZEX Q75 GVE AIROW CHSLY6 KCLT\" readonly>"; // CDR PJ
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-17-2025
					result += "<!-- Verified with ATCSCC on 03-17-2025 -->";
					result += "<br/>29<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV GONZZ Q29 JHW FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>A4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV ALB ACOVE DBABE Q448 PTW J48 CSN GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV ALB HNK J49 PSB Q71 GEFFS HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV ALB BIZEX Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>T7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV BRATS ORCHA HEADI Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					break;
				case "DCA": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KBTV PONCT BIZEX Q75 MXE CLIPR3 KDCA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KBTV SYR J59 PSB SKILS5 KDCA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-17-2025
					result += "<!-- Verified with ATCSCC on 03-17-2025 -->";
					result += "<br/>29<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV GONZZ Q29 JHW FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>A4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV ALB ACOVE DBABE Q448 PTW J48 CSN GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV ALB HNK J49 PSB Q71 GEFFS HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV ALB BIZEX Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>T7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV BRATS ORCHA HEADI Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					break;
				case "ORD": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KBTV ART ALVID DEDKI HOCKE FNT WYNDE2 KORD\" readonly>";
					result += "<br/><br/>LAKE ERIE WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBTV GONZZ FARGN CHAAP Q436 EMMMA WYNDE2 KORD\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-17-2025
					result += "<!-- Verified with ATCSCC on 03-17-2025 -->";
					result += "<br/>1K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV GOATR WOZEE KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV GOATR WOZEE NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>22<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV GONZZ Q822 FNT WYNDE2 KORD\" readonly>";
					result += "<br/>5K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV GOATR WOZEE KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>A6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV ALB J6 JEFFF Q480 CANDR RAV Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>A8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV ALB J6 JEFFF Q480 AIR J80 EMPTY J149 FWA WATSN4 KORD\" readonly>";
					result += "<br/>K1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV GOATR WOZEE KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>N1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV GOATR WOZEE NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV ART ALVID DEDKI HOCKE FNT WYNDE2 KORD\" readonly>";
					result += "<br/>YZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV GONZZ FARGN CHAAP Q436 EMMMA WYNDE2 KORD\" readonly>";
					break;
				case "PHL": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBTV ALB DNY SPUDS7 KPHL\" readonly>"; // CDR PJ
					result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KBTV ALB NELIE HTO RIFLE Q439 BRIGS JIIMS4 KPHL\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-17-2025
					result += "<!-- Verified with ATCSCC on 03-17-2025 -->";
					result += "<br/>39<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV BRATS ORCHA RIFLE Q439 BRIGS JIIMS4 KPHL\" readonly>";
					result += "<br/>EL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV ALB T291 LAAYK LVZ ETX PTW KPHL\" readonly>";
					result += "<br/>EW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV BTV T315 HFD MAD BEADS T320 BRIGS ACY V184 OOD KPHL\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBTV ALB DNY SPUDS7 KPHL\" readonly>";
					break;
			}
		break; // End of BTV

		case "BUF":
			switch(arvl) {
				case "CLT": // Updated 07-12-2025
					result += "<!-- Updated 07-12-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input class=\"cdr_input\" style=\"width:75%\" value=\"KBUF JHW HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBUF JHW DJB ROD J43 FLM SKYWA FILPZ4 KCLT\" readonly>"; // CDR W1
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBUF BUF BFD JST ESL MOL AIROW CHSLY6 KCLT\" readonly>";
					// result += "<br/>West: <input style=\"width:75%\" value=\"KBUF JHW YNG APE ZIEBR GZG BTSEY2 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBUF JHW EWC AIR HNN SPAYD SOT LIINN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-12-2025
					result += "<!-- Verified with ATCSCC on 07-12-2025 -->";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBUF JHW FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>W1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBUF JHW DJB ROD J43 FLM SKYWA FILPZ4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 07-14-2025
					result += "<!-- Updated 07-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBUF DJB ROD PXV ARG FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBUF JHW EWC AIR HNN SPAYD VXV VUZ MEI MHZ MLU YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KALB JOT J554 GIJ J146 JOT J26 ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBUF JHW ROD PXV LIT FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-14-2025
					break;
			}
		break; // End of BUF

		case "BUR":
			switch(arvl) {
				case "DFW": // Updated 07-14-2025
					result += "<!-- Updated 07-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBUR SLAPP2 BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBUR SLAPP2 HEC J64 TBC J76 FTI J58 PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>North via RSK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBUR SLAPP2 LAS TBC J64 RSK CIM PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><b>For ZAB Avoid: ...RSK J110 GCK END IBAKE VKTRY2 KDFW<\/b>";
					// result += "<br/><br/>DFW WEST: <input style=\"width:75%\" value=\"KBUR SLAPP2 BLH J169 TFD J50 ELP J86 JCT CWK LOA STUFT BEREE3 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-14-2025
					result += "<!-- Verified with ATCSCC on 07-14-2025 -->";
					result += "<br/>JE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBUR SLAPP2 BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>JU<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBUR SLAPP2 BLH J169 TFD J50 ELP FST JCT GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>ME<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBUR SLAPP2 BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>SE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBUR VNY3 PMD PDZ JLI IPL J2 GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>TN<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBUR SLAPP2 BLH TFD J50 ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
					result += "<br/>UK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBUR SLAPP2 HEC EED DRK SJN J74 TXO TURKI VKTRY2 KDFW\" readonly>";
					break;
				case "PHX": // Updated 07-14-2025
					result += "<!-- Updated 07-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBUR SLAPP2 HEC PRFUM WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBUR VNY3 PMD PDZ JLI IPL J2 HOGGZ HYDRR1 KPHX\" readonly>";
					result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBUR SLAPP2 LAS PRFUM WOTRO BRUSR1 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-14-2025
					result += "<!-- Verified with ATCSCC on 07-14-2025 -->";
					result += "<br/>ME<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBUR VNY3 PMD PDZ TRM BLH HYDRR1 KPHX\" readonly>";
					result += "<br/>SE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBUR VNY3 PMD PDZ JLI IPL J2 HOGGZ HYDRR1 KPHX\" readonly>";
					break;
			}
		break; // End of BUR

		case "BWI":
			switch(arvl) {
				case "CLT": // Updated 05-27-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-27-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBWI TERPZ8 GLANC AIROW CHSLY6 KCLT\" readonly>"; // CDR 00
					result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBWI CONLE5 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>"; // CDR 40
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q80 WISTA LNDIZ PARQR4 KCLT\" readonly>"; // CDR 60
					result += "<br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBWI DUKPN1 DONIL SIE B24 LYNUS SILLY HOBOH Y488 STERN Y493 TUBBS DIZNY Y436 PITRW STOCR4 KCLT\" readonly>";
					result += "<br/><br/>NE TO ATL CLT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q68 HVQ LNDIZ PARQR4 KCLT\" readonly>"; // CDR 63
					result += "<br/>NO Q75 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBWI CONLE5 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>"; // CDR 41
					result += "<br/>NO Q75 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q68 HVQ LNDIZ PARQR4 KCLT\" readonly>"; // CDR 63
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBWI CSN LYH MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-14-2025
					result += "<!-- Verified with ATCSCC on 07-14-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 GLANC AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>32<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI CONLE5 SCOOB COUPN CHSLY6 KCLT\" readonly>";
					result += "<br/>40<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI CONLE5 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>41<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI CONLE5 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>55<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 MAULS Q40 FEEDS CITUS WILUM PARQR4 KCLT\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q80 WISTA LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>63<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q68 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>C1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI CONLE5 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					break;
				case "DFW": // Updated 04-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-19-2025 M -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q80 FAREV RAMRD Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>"; // CDR 00
					result += "<br/><br/>South <span style=\"color:green\">(Ok to File)</span>: <input style=\"width:75%\" value=\"KBWI TERPZ8 GLANC COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>"; // CDR 50
					result += "<br/>North <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KBWI LINSE2 MCRAY Q178 DJB J60 GSH RBS STL RZC FSM RRNET SEEVR4 KDFW\" readonly>"; // CDR 18
					result += "<br/>Coastal <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KBWI CONLE5 SCOOB GUILD Q409 SESUE PANDY TWINS NOKIE MGMRY GARTS MCB AEX PNUTS BEREE3 KDFW\" readonly>"; // CDR 40
					result += "<br/>SW Arr <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KBWI TERPZ8 GLANC COLZI Q52 CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ SOCKK4 KDFW\" readonly>"; // CDR D6
					result += "<br/><br/>DFW EAST 1: <input style=\"width:75%\" value=\"KBWI TERPZ8 GLANC LYH COLZI Q52 CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>DFW EAST 2: <input style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q80 ENGRA BNA SQS AEX DAS IAH CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBWI CSN J8 HVQ J78 PXV J131 LIT FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
					result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q80 FAREV RAMRD Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>11<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI LINSE2 JERES J211 JST HAGUD J60 DJB ROD PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>18<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI LINSE2 MCRAY Q178 DJB J60 GSH RBS STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>40<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI CONLE5 SCOOB GUILD Q409 SESUE PANDY TWINS NOKIE MGMRY GARTS MCB AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>50<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 GLANC COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>51<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 MAULS Q40 ALEAN Q66 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>52<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI LINSE2 MCRAY Q178 LEJOY AIR J80 FYLLS PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>53<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 MAULS Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>55<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 MAULS Q40 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>56<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 MAULS HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q176 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>65<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI FOXHL1 RAMAY Q72 HACKS J149 EMPTY J80 FYLLS PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>D2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 GLANC COLZI Q52 CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q80 ENGRA BNA SQS AEX DAS IAH CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q80 ENGRA BNA SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>D6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 GLANC COLZI Q52 CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/>D7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q80 ENGRA BNA SQS AEX DAS IAH CRGER GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/>D8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q80 ENGRA BNA SQS YUYUN WHINY4 KDFW\" readonly>";
					break;
				case "MIA": // Updated 05-27-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-27-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBWI CONLE5 SCOOB EARZZ SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBWI CONLE5 SCOOB PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>"; // CDR 00
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBWI TERPZ8 MAULS Q40 FEEDS THRSR HONID FROGZ4 KMIA\" readonly>"; // CDR 52
					result += "<br/><br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBWI CONLE5 SCOOB EDDYS ECG AR8 OXANA ROBBB Y493 JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>West via VXV<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q68 HVQ SPAYD VXV THRSR HONID FROGZ4 KMIA\" readonly>"; // CDR 62
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBWI OTT HUBBS J55 RDU FLO CHS SAV CRG OMN KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-27-2025
					result += "<!-- Verified with ATCSCC on 05-27-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI CONLE5 SCOOB PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>20<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI DUKPN1 SPEAK LAFLN TRPOD Q409 CRPLR SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>43<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI CONLE5 SCOOB PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>49<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI CONLE5 SCOOB GUILD Q409 ISUZO BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>50<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 RRSIN GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>51<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 FLASK GOWBE BURGG QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>52<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 MAULS Q40 FEEDS THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>53<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 MAULS Q40 ALEAN VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>55<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 FLASK COREX SPA WIGVO Q77 SHRKS Q89 PRMUS DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q80 WISTA NEALS J85 SPA ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>62<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI FOXHL1 OTTTO Q68 HVQ SPAYD VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>71<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 RRSIN GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>72<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI TERPZ8 RRSIN GSO Q75 SLOJO Q75 TEEEM BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>AR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI CONLE5 SCOOB EARZZ SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>ML<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KBWI CONLE5 SCOOB PAACK Q97 EBAYY MOGAE BNFSH3 KMIA\" readonly>";
					break;
			}
		break; // End of BWI

		case "BZN":
			switch(arvl) {
				case "DFW": // Updated 07-14-2025
					result += "<!-- Updated07-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBZN BOBKT5 BOY CKW PUB J17 PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBZN BOBKT5 BIL RAP HYS IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBZN BGSKY2 DBS J9 FFU HVE RSK J58 PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><b>For Southwest Arrival: ...RSK J15 CME BGS GEEKY BOOVE7 KDFW<\/b>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBZN SUBKY BIL J13 CYS J17 PNH UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-14-2025
					break;
				case "ORD": // Updated 07-14-2025
					result += "<!-- Updated 07-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KBZN BOBKT5 BIL J34 DPR UFFDA Q156 ZZIPR FYTTE7 KORD\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBZN BOBKT5 BIL MLS DIK J36 FAR J140 DLH SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KBZN BOBKT5 BOY JUGIV Q148 CUGGA J80 MCI J26 IRK BENKY6 KORD\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-14-2025
					break;
			}
		break; // End of BZN

		case "CAE":
			switch(arvl) {
				case "DFW": // Updated 12-23-24
					result += "<!-- Updated 12-23-24 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCAE IRQ MHZ MLU YUYUN WHINY4 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCAE RMG J66 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KCAE MCN TOI MCB PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>Gulf: <input style=\"width:75%\" value=\"KCAE CEW SJI Q56 PEKON J86 IAH LOA STUFT BEREE3 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCAE IRQ MCN MGM J20 MHZ MLU YEAGR4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-14-2025
					break;
			}
		break; // End of CAE

// CAK skipped

		case "CHS":
			switch(arvl) {
				case "CLT": // Updated 05-27-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-27-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL220):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCHS SWPFX3 FILLI FLLGG STOCR4 KCLT\" readonly>";
					result += "<br/><b style=\"color:orange\">STOCR Min FL210 at FLLGG<\/b>";
					result += "<br/><br/>MOA Avoidance: <input style=\"width:75%\" value=\"KCHS MLTRE3 JYMSE FLLGG STOCR4 KCLT\" readonly>";
					result += "<br/>East: <input style=\"width:75%\" value=\"KCHS PLMTO3 CRE JOHAR OGRAE SDAIL CHSLY6 KCLT\" readonly>";
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCHS STUNO1 IRQ BANKR BANKR5 KCLT\" readonly>";
					// result += "<br/><br/>CLT NO STOCR: <input style=\"width:75%\" value=\"KCHS SWPFX3 FILLI RDU SDAIL CHSLY6 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCHS CHS FLO RASLN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-16-2025
					result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
					break;
				case "DCA": // Updated 07-14-2025
					result += "<!-- Updated 07-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KCHS SWPFX3 FILLI SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCHS STUNO1 IRQ J99 VXV KONGO Q34 SITTR TRUPS5 KDCA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-14-2025
					break;
				case "DFW": // Updated 05-27-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-27-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCHS STUNO1 DBN MGM MHZ YUYUN WHINY4 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCHS STUNO1 IRQ RMG J66 MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KCHS LGRHD3 GIPPL SZW CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					// result += "<br/><br/>DFW WEST: <input style=\"width:75%\" value=\"KCHS LGRHD3 GIPPL SZW CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					// result += "<br/>SEEVR1: <input style=\"width:75%\" value=\"KCHS STUNO1 DBN CEW SJI Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCHS CHS MCN MGM J20 MHZ YEAGR4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-27-2025
					break;
				case "MIA": // Updated 07-14-2025
					result += "<!-- Updated 07-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCHS LGRHD3 GIPPL Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/><br/>East/OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCHS PITRW Y436 EBEAR DUUNK Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCHS STUNO1 DBN HONID FROGZ4 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-14-2025
					break;
				case "PHL": // Updated 05-10-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-10-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KCHS PLMTO3 CRE RAPZZ Q135 RREGG Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/><b style=\"color:orange\">As of 2025-05-10 Fkeys will flag any route except above as Mandatory Route violation<\/b>";
					result += "<br/><br/>West via DCA: <input style=\"width:75%\"; value=\"KCHS SWPFX3 FILLI FLO RDU BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>West via JST: <input style=\"width:75%\"; value=\"KCHS SWPFX3 FILLI LIB ROA MGW JST BOJID4 KPHL\" readonly>";
					result += "<br/>West via IRQ: <input style=\"width:75%\"; value=\"KCHS STUNO1 IRQ SPA LYH GVE PAATS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KCHS CRE ILM FAK KPHL\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-27-2025
					break;
			}
		break; // End of CHS

		case "CID":
			switch(arvl) {
				case "CLT": // Updated 07-14-2025
					result += "<!-- Updated 07-14-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-14-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCID GBG AXC LWV MYS SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCID IOW PIA VHP J24 FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCID IOW STL Q19 HITMN TAZZA FILPZ4 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-14-2025
					break;
				case "DFW": // Updated 05-30-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-30-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCID ROEZZ SGF FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCID ROEZZ MCI ICT HOFFF JOVEM6 KDFW\" readonly>"; // CDR W2
					result += "<br/>East: <input style=\"width:75%\" value=\"KCID CID STL FAM J137 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>West via OVR<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCID OVR J21 JUDGE ICT IRW IBAKE VKTRY2 KDFW\" readonly>"; // CDR 8W
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCID CID IRK SGF RZC FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-30-2025
					result += "<!-- Verified with ATCSCC on 05-30-2025 -->";
					result += "<br/>0W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID ROEZZ BUM J87 TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID ROEZZ MCI TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>2W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID ROEZZ MCI ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>3W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID ROEZZ MCI ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>6W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID LMN PWE ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>7W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID LMN PWE ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>8W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID OVR J21 JUDGE ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>W0<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID ROEZZ BUM J87 TUL KLAWW JOVEM6 KDFW\" readonly>";
					result += "<br/>W1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID ROEZZ MCI TUL HITUG BRDJE5 KDFW\" readonly>";
					result += "<br/>W2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID ROEZZ MCI ICT HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>W3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID ROEZZ MCI ICT IRW IBAKE JOVEM6 KDFW\" readonly>";
					result += "<br/>W4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID ROEZZ MCI ICT IFI HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>W6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID LMN PWE ICT HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>W7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCID LMN PWE ICT IRW IBAKE JOVEM6 KDFW\" readonly>";
					break;
			}
		break; // End of CID

		case "CLE":
			switch(arvl) {
				case "CLT": // Updated 07-14-2025
					result += "<!-- Updated 07-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCLE CAVVS4 APE HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLE KKIDS1 EWC JST CSN GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR IIU SKYWA FILPZ4 KCLT\" readonly>";
					// result += "<br/><br/>Avoid Buckeye ATCAA: <input style=\"width:75%\" value=\"KCLE CAVVS4 APE VLADY HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/>CLT NO PARQR<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR FLM SKYWA FILPZ4 KCLT\" readonly>";
					// result += "<br/>NO FILPZ PARQR: <input style=\"width:75%\" value=\"KCLE CAVVS4 APE VXV THRSR BESTT JONZE5 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-14-2025
					result += "<!-- Verified with ATCSCC on 07-14-2025 -->";
					result += "<br/>E1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE KKIDS1 NUSMM HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE CAVVS4 APE HVQ LNDIZ PARQR4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 07-14-2025
					result += "<!-- Updated 07-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR PXV LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLE ZAAPA5 SNNOH VHP J110 STL J8 SGF J98 TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLE CAVVS4 APE Q149 SPAYD TAFTT Q67 SMTTH GQO SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/>North via JOT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLE GTLKE4 BAGEL JOT J26 MMB HOFFF JOVEM6 KDFW\" readonly>";
					// result += "<br/><br/>DFW BEREE S: <input style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR VHP J110 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>DFW EAST 1+2: <input style=\"width:75%\" value=\"KCLE GTLKE4 BAGEL JOT MZV IRK MCI ICT HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>DFW WEST: <input style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR PXV ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>DFW BEREE:<input style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR VHP J110 STL RZC FSM RRNET BRDJE5 KDFW\" readonly>";
					result += "<br/>DFW SEEVR 1+2+3: <input style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR VHP STL BUM ICT HOFFF JOVEM6 KDFW\" readonly>";
					// result += "<br/>DFW SEEVR 1 S: <input style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR VHP STL BUM ICT HOFFF VKTRY2 KDFW\" readonly>";
					// result += "<br/>DFW SEEVR 2: <input style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR VHP STL BUM ICT IFI HOFFF VKTRY2 KDFW\" readonly>";
					// result += "<br/>DFW SEEVR 3: <input style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR VHP STL BUM TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCLE MFD VHP J24 STL J8 SGF RZC FSM FINGR9 KDFW\" readonly>";
					result += "<br/><input style=\"width:75%\" value=\"KCLE DJB HUDDZ AMRST GSH J60 JOT J26 IRK J87 TUL FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-14-2025
					result += "<!-- Verified with ATCSCC on 07-14-2025 -->";
					result += "<br/>N1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE ZAAPA5 SNNOH VHP STL RZC FSM RRNET BRDJE5 KDFW\" readonly>";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR PXV LIT FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/>S2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE CAVVS4 APE FLM IIU PXV J131 LIT FEWWW BRDJE5 KDFW\" readonly>";
					break;
				case "MIA": // Updated 07-14-2025
					result += "<!-- Updated 07-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCLE CAVVS4 APE J83 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLE CAVVS4 APE JONEN KTRYN VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLE KKIDS1 EWC EMNEM Q103 SLOJO EFFAY Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/><br/>West via BNA<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR IIU BNA J73 LGC HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>East/OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLE KKIDS1 EWC JST PYTON Q129 YERBA SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-14-2025
					result += "<!-- Verified with ATCSCC on 07-14-2025 -->";
					result += "<br/>E1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE KKIDS1 NUSMM HVQ SPA ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE CAVVS4 APE J83 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>W1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE ZAAPA5 SINKR FLM J43 VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					break;
				case "ORD": // Updated 07-14-2025
					result += "<!-- Updated 07-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCLE GTLKE4 DAIFE WATSN WATSN4 KORD\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLE PFLYD1 PATRC RRONS Q436 EMMMA WYNDE2 KORD\" readonly>"; // CDR N1
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLE CAVVS4 APE ROD WATSN4 KORD\" readonly>"; // CDR S1
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCLE GSH BEARZ KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-14-2025
					result += "<!-- Verified with ATCSCC on 07-14-2025 -->";
					result += "<br/>N1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE PFLYD1 PATRC RRONS Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>N2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE PFLYD1 PATRC RRONS ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE GTLKE4 DAIFE WATSN4 KORD\" readonly>";
					result += "<br/>S1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE CAVVS4 APE ROD WATSN4 KORD\" readonly>";
					result += "<br/>S2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE KKIDS1 NUSMM JPU HNN FLM HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>W1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE GTLKE4 ALPHE EMMMA WYNDE2 KORD\" readonly>";
					break;
				case "PHX": // Updated 07-14-2025
					result += "<!-- Updated 07-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCLE ZAAPA5 SNNOH VHP J24 STL BUM ICT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLE GTLKE4 YABRO IOW PWE HLC PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLE CAVVS4 APE FLM PXV J78 TUL J98 IRW J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North via ONL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLE GTLKE4 ALPHE PMM BAE MCW ONL PUB RSK INW EAGUL6 KPHX\" readonly>";
					result += "<br/>South via EWM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLE CAVVS4 APE YOCKY BNA MEM TXK J42 FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-14-2025
					result += "<!-- Verified with ATCSCC on 07-14-2025 -->";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLE ZAAPA5 SNNOH VHP ICT GUP EAGUL6 KPHX\" readonly>";
					break;
			}
		break; // End of CLE

		case "CLT":
			result = clt_departures(arvl, tail, ac_type, result);
		break;

		case "CMH":
			switch(arvl) {
				case "CLT": // Updated 04-28-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-28-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCMH POBSE OHIOS LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCMH PKACZ TARRY DQN CVG SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCMH OWEBO HLG JST CSN GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><b style=\"color:orange\">ZID will send you to the SW corner before they send you through ZDC<\/b>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCMH POBSE OHIOS HMV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-28-2025
					result += "<!-- Verified with ATCSCC on 04-28-2025 -->";
					break;
				case "DFW": // Updated 12-30-24
					result += "<!-- Updated 12-30-24 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCMH PKACZ TARRY CVG PXV J131 LIT MEEOW FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCMH PKACZ TARRY FLM BNA MEM LIT MEEOW FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/>NW Arrival: <input style=\"width:75%\" value=\"KCMH PKACZ TARRY DQN VHP J24 STL J8 SGF TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/>SE Arrival: <input style=\"width:75%\" value=\"KCMH PKACZ TARRY FLM BWG IZAAC YUYUN WHINY4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCMH PKACZ TARRY DQN CVG PXV J131 LIT FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "LAX": // Updated 03-12-2025
					result += "<!-- Updated 03-12-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-12-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KCMH PKACZ TARRY DQN VHP AXC MCI J24 SLN LAA DRO JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KCMH PKACZ TARRY FWA J64 WHETT J30 JOT J60 DBL CHESZ Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>South/ZKC Avoid: <input style=\"width:75%\"; value=\"KCMH PKACZ TARRY CVG PXV ARG IRW J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>South via BNA: <input style=\"width:75%\"; value=\"KCMH PKACZ TARRY CVG IIU BNA MEM LIT ADM TXO J74 CNX ONM SJN J74 PKE J104 TNP BASET5 KLAX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KCMH PKACZ TARRY VHP J80 MCI J24 SLN J102 ALS J44 RSK J64 TBC J236 EED TNP BASET5 KLAX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-12-2025
					result += "<!-- Verified with ATCSCC on 03-12-2025 -->";
					break;
				case "PHL": // Updated 12-30-24
					result += "<!-- Updated 12-30-24 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCMH OWEBO HLG JST BOJID4 KPHL\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCMH RDBUV NOWZU DORET Q82 VIEEW Q818 CFB SPUDS7 KPHL\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KCMH POBSE OHIOS HVQ J24 MOL GVE PAATS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCMH  HLG PSB BUNTS3 KPHL\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHX": // Updated 12-30-24
					result += "<!-- Updated 12-30-24 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCMH PKACZ TARRY DQN VHP SPI MCI LAA GUP EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCMH PKACZ TARRY DQN BVT BDF VIGGR Q122 ONL J114 DVV RSK GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KCMH PKACZ TARRY FLM RAMRD Q68 LITTR TXK J42 ABI J4 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>BUM: <input style=\"width:75%\" value=\"KCMH PKACZ TARRY DQN VHP J110 BUM ICT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>IRW: <input style=\"width:75%\" value=\"KCMH PKACZ TARRY DQN VHP J110 STL J8 SGF J98 IRW J6 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCMH PKACZ TARRY DQN VHP STL CNU MMB TCC J78 ZUN BUNTR3 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of CMH

		case "COS":
			switch(arvl) {
				case "DFW": // Updated 05-06-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-06-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>"; // Not listed as FAA pref but this is what everyone files and what they expect
					result += "<br/><input style=\"width:75%\" value=\"KCOS BRESH EZEEE MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KCOS BRESH TBE TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCOS BRK GCK PER HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCOS PUB TBE J17 PNH UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-06-2025
					break;
			}
		break; // End of COS

		case "CRP":
			switch(arvl) {
				case "DFW": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KCRP SAT GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KCRP WORRY V13 PSX TNV STUFT BEREE3 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of CRP

		case "CVG":
			switch(arvl) {
				case "CLT": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCVG KENLN6 SHIPR TAFTT PARQR4 KCLT\" readonly>"; // CDR KN
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCVG KENLN6 SHIPR SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/>NE Arrival<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCVG GIPLE7 HVQ LWB AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG HYK VXV LIINN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-17-2025
					result += "<!-- Verified with ATCSCC on 04-17-2025 -->";
					result += "<br/>B3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG IIU VXV LIINN3 KCLT\" readonly>";
					result += "<br/>CH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG CHCLL6 RAMRD SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/>GP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG GIPLE7 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>J2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG SITTR GZG BTSEY2 KCLT\" readonly>";
					result += "<br/>KN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG KENLN6 SHIPR TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>PR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG HYK GZG BTSEY2 KCLT\" readonly>";
					break;
				case "DFW": // Updated 12-30-24
					result += "<!-- Updated 12-30-24 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCVG CHCLL6 BUSYY PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCVG CHCLL6 BUSYY BNA Q32 CRAMM SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KCVG CHCLL6 BUSYY IMPEL J8 STL BUM ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCVG CVG6 IIU PXV J131 LIT FINGR9 KDFW\" readonly>";
					result += "<br/><input style=\"width:75%\" value=\"KCVG CVG6 IIU PXV J78 TUL FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>CH: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG CHCLL6 BUSYY PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>FF (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG RIKLE FWA RBS J19 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>HG (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG HAGOL5 PLASH FWA RBS J19 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>LV (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG LOVEY7 HELIS STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>PR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG IIU PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>WD (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG LOVEY7 HELIS STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					break;
				case "PHX": // Updated 12-30-24
					result += "<!-- Updated 12-30-24 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCVG LOVEY7 HELIS STL Q176 CIM ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCVG CHCLL6 RAMRD Q68 LITTR TXK J42 FUZ J66 EWM PINNG PINNG1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KCVG CVG6 IIU PXV FAM J78 ZUN BUNTR3 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>CH (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG CHCLL6 BUSYY PXV J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>HG (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG HAGOL5 PLASH FWA RBS J19 STL BUM ICT LBL FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>LV (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCVG LOVEY7 HELIS STL BUM ICT LBL FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					break;
			}
		break; // End of CVG

		case "DAB":
			switch(arvl) {
				case "CLT": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KDAB ROYES7 CRG VIYAP CHECR STOCR4 KCLT\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KDAB ROYES7 CRG SHRKS Q77 WIGVO PONZE BANKR5 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-17-2025
					result += "<!-- Verified with ATCSCC on 03-17-2025 -->";
					break;
				case "DFW": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KDAB ROYES7 CRG CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-17-2025
					result += "<!-- Verified with ATCSCC on 03-17-2025 -->";
					break;
				case "MIA": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KDAB SMYRA T208 MALET DDANY CSTAL3 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KDAB MLB ANNEY4 KMIA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-17-2025
					result += "<!-- Verified with ATCSCC on 03-17-2025 -->";
					break;
			}
		break; // End of DAB

		case "DAY":
			switch(arvl) {
				case "CLT": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KDAY TRIVO CVG FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KDAY WIPOT FLYIR HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KDAY FLM HMV KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-17-2025
					result += "<!-- Verified with ATCSCC on 03-17-2025 -->";
					break;
				case "DFW": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KDAY TRIVO CVG PXV J131 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KDAY WAMBO VHP J24 STL J8 SGF HITUG BRDJE5 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KDAY TRIVO CVG PXV J131 LIT WILBR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of DAY

		case "DCA":
			switch(arvl) {
				case "BDL": // Updated 04-19-2025
					result += "<!-- Updated 04-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA SOOKI5 SWANN BROSS Q419 DPK DPK3 KBDL\" readonly>"; // CDR 00
					result += "<br/><br/>West <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA HORTO4 JERES Q227 KONJE J190 RKA SWEDE CANAN STELA1 KBDL\" readonly>"; // CDR 10
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
					result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SOOKI5 SWANN BROSS Q419 DPK DPK3 KBDL\" readonly>";
					result += "<br/>10<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES Q227 KONJE J190 RKA SWEDE CANAN STELA1 KBDL\" readonly>";
					result += "<br/>11<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES J211 LEONI WEVEL ELZ VIEEW ITH RKA SWEDE CANAN STELA1 KBDL\" readonly>";
					result += "<br/>20<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD DONIL HEADI BELTT MAD BRISS KBDL\" readonly>";
					result += "<br/>40<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB JAMIE CONFR Q133 LEEAH Q481 DPK DPK3 KBDL\" readonly>";
					result += "<br/>46<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES Q227 KONJE J190 RKA SWEDE CANAN STELA1 KBDL\" readonly>";
					result += "<br/>BM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD DONIL DIDIO JODOE GGRNT JRIZZ DPK DPK3 KBDL\" readonly>";
					result += "<br/>YK<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD DONIL HEADI BELTT MAD BRISS KBDL\" readonly>";
					break;
				case "BOS": // Updated 05-07-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA SOOKI5 SWANN BROSS Q419 JFK ROBUC3 KBOS\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA HORTO4 JERES Q221 BIGEO J49 HNK PONCT JFUND2 KBOS\" readonly>"; // CDR 10
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA DOCTR5 AGARD DONIL DIDIO JODOE HEADI RIFLE OOSHN5 KBOS\" readonly>"; // CDR 2A
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA OTT SIE CYN JFK HTO ORW7 KBOS\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-07-2025
					result += "<!-- Verified with ATCSCC on 05-07-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SOOKI5 SWANN BROSS Q419 JFK ROBUC3 KBOS\" readonly>";
					result += "<br/>10<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES Q221 BIGEO J49 HNK PONCT JFUND2 KBOS\" readonly>";
					result += "<br/>11<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES J211 LEONI WEVEL ELZ VIEEW ITH PONCT JFUND2 KBOS\" readonly>";
					result += "<br/>20<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD DONIL DIDIO JODOE HEADI CCC RUIZE ROBUC3 KBOS\" readonly>";
					result += "<br/>2A<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD DONIL DIDIO JODOE HEADI RIFLE OOSHN5 KBOS\" readonly>";
					result += "<br/>40<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB JAMIE CONFR Q133 JFK ROBUC3 KBOS\" readonly>";
					result += "<br/>46<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD DONIL DIDIO JODOE HEADI CCC RUIZE ROBUC3 KBOS\" readonly>";
					result += "<br/>YK<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD DONIL DIDIO JODOE HEADI CCC RUIZE ROBUC3 KBOS\" readonly>";
					break;
				case "BTV": // Updated 04-16-2025
					result += "<!-- Updated 04-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA SOOKI5 SWANN BROSS Q419 RBV Q22 LLUND CAM KBTV\" readonly>"; // CDR 00
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDCA HORTO4 JERES Q221 BIGEO J49 ALB KBTV\" readonly>"; // CDR 10
					// result += "<br/><br/><b>Non RNAV</b>"; // TODO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-16-2025
					result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SOOKI5 SWANN BROSS Q419 RBV Q22 LLUND CAM KBTV\" readonly>";
					result += "<br/>10<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES Q221 BIGEO J49 ALB KBTV\" readonly>";
					result += "<br/>11<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES J211 LEONI WEVEL ELZ GONZZ LAGGS KBTV\" readonly>";
					result += "<br/>46<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES Q221 BIGEO J49 ALB KBTV\" readonly>";
					break;
				case "CHS": // Updated 04-16-2025
					result += "<!-- Updated 04-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB DFENC Q109 JOHAR AMYLU AMYLU3 KCHS\" readonly>"; // CDR 00
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KDCA GVE GSO KCHS\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-16-2025
					result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB DFENC Q109 JOHAR AMYLU AMYLU3 KCHS\" readonly>";
					result += "<br/>20<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD T287 CANNY LAFLN TRPOD Q409 CRPLR DFENC Q109 JOHAR AMYLU AMYLU3 KCHS\" readonly>";
					result += "<br/>50<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO OBNEE OSPRI7 KCHS\" readonly>";
					result += "<br/>55<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA DEFFN OSPRI7 KCHS\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 WISTA NEALS J85 SPA DEFFN OSPRI7 KCHS\" readonly>";
					break;
				case "CLT": // Updated 04-11-2025
					result += "<!-- Updated 04-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA SCRAM6 GLANC AIROW CHSLY6 KCLT\" readonly>"; // CDR 00
					result += "<br/><br/>FULL OW: <input style=\"width:75%\"; value=\"KDCA DOCTR5 AGARD SIE B24 LYNUS SILLY HOBOH Y488 STERN Y493 TUBBS DIZNY Y436 PITRW STOCR4 KCLT\" readonly>";
					result += "<br/><br/>CLT NO CHSLY<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>NO Q75 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>NO Q75 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KDCA HAFNR GVE LYH MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-11-2025
					result += "<!-- Verified with ATCSCC on 04-11-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>32<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB COUPN CHSLY6 KCLT\" readonly>";
					result += "<br/>40<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>41<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>55<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 FEEDS CITUS WILUM PARQR4 KCLT\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 WISTA LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>63<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>C1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					break;
				case "DFW": // Updated 05-06-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-06-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV RAMRD Q68 LITTR FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>"; // CDR 50
					result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB J60 GSH RBS STL RZC FSM RRNET SEEVR4 KDFW\" readonly>"; // CDR 18
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-06-2025
					result += "<!-- Verified with ATCSCC on 05-06-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV RAMRD Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>11<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES J211 JST HAGUD J60 DJB ROD PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>18<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB J60 GSH RBS STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>40<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 SESUE PANDY TWINS NOKIE MGMRY GARTS MCB AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>50<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>51<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN Q66 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>52<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEJOY AIR J80 FYLLS PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>53<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>55<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>56<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>65<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA WYNGS5 RAMAY Q72 HACKS J149 EMPTY J80 FYLLS PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>D2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 ENGRA BNA SQS AEX DAS IAH CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 ENGRA BNA SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>D6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/>D7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 ENGRA BNA SQS AEX DAS IAH CRGER GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/>D8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 ENGRA BNA SQS YUYUN BEREE3 KDFW\" readonly>";
					break;
				case "FLL": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB PAACK Q97 PRMUS CUUDA3 KFLL\" readonly>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB EARZZ CHIEZ Y291 MAJIK CUUDA3 KFLL\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 ENEME TEEKY3 KFLL\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>20: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD T287 CANNY LAFLN TRPOD Q409 CRPLR CHIEZ Y291 MAJIK CUUDA3 KFLL\" readonly>";
					result += "<br/>50: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q83 JEVED Q97 PRMUS CUUDA3 KFLL\" readonly>";
					result += "<br/>51: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA QUIWE Q93 PRMUS CUUDA3 KFLL\" readonly>";
					result += "<br/>52 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA ENEME TEEKY3 KFLL\" readonly>";
					result += "<br/>53: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV THRSR ZPLEN TEEKY3 KFLL\" readonly>";
					result += "<br/>55: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA WIGVO Q77 SHRKS Q89 PRMUS CUUDA3 KFLL\" readonly>";
					result += "<br/>62 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ SPAYD VXV THRSR ZPLEN TEEKY3 KFLL\" readonly>";
					result += "<br/>71: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q83 JEVED Q97 PRMUS CUUDA3 KFLL\" readonly>";
					result += "<br/>72: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 SLOJO Q75 ENEME TEEKY3 KFLL\" readonly>";
					break;
				case "IND": // Updated 04-10-2025
					result += "<!-- Updated 04-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA WYNGS5 RAMAY Q72 HACKS PLASH SNKPT2 KIND\" readonly>"; // CDR 00
					// result += "<br/><br/><b>Non RNAV</b>"; // TODO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-10-2025
					result += "<!-- Verified with ATCSCC on 04-10-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA WYNGS5 RAMAY Q72 HACKS PLASH SNKPT2 KIND\" readonly>";
					result += "<br/>18<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEPEW J64 CASIO RINTE SNKPT2 KIND\" readonly>";
					result += "<br/>55<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN DOOGE HAGAL GIIBS4 KIND\" readonly>";
					result += "<br/>56<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS HVQ PLASH SNKPT2 KIND\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 HNN FLM HAGAL GIIBS4 KIND\" readonly>";
					result += "<br/>65<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 YOCKY HAGAL GIIBS4 KIND\" readonly>";
					break;
				case "JAX": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 SESUE ESENT LUNNI1 KJAX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>01: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 SESUE ESENT LUNNI1 KJAX\" readonly>";
					result += "<br/>20 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD T287 CANNY LAFLN TRPOD Q409 SESUE ESENT LUNNI1 KJAX\" readonly>";
					result += "<br/>38: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB PAACK Q97 ELMSZ JROSS ESENT LUNNI1 KJAX\" readonly>";
					result += "<br/>55 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV THRSR DUCHY OHDEA1 KJAX\" readonly>";
					result += "<br/>60 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 WISTA NEALS J85 SPA IRQ FINNE OHDEA1 KJAX\" readonly>";
					break;
				case "LAS": // Updated 01-04-2025 // No Faa pref
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 CIM J96 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDCA WYNGS5 RAMAY Q72 HACKS OKK KG66K DIYAP Q136 ZIRKL HBU TYEGR CHOWW3 KLAS\" readonly>";
					result += "<br/><br/>ABI: <input style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 BFOLO FIBER HRISN Q30 IZAAC EIC J4 ABI CME J15 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>FAM: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ J78 FAM SGF ICT GCK J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>LAS NO DVC: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 STL ICT TOTOE CIM GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>ROCKIES SOUTH 1: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV RAMRD ARG TUL MMB FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";  // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>00 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 BUM J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>12 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEPEW J64 LMN PWE HLC J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>13 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>14 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEJOY AIR J80 MCI J24 SLN J102 ALS J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>17 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEJOY AIR J110 STL J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>18 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB J34 BAE J16 MCW J148 CYS EKR HVE GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>40 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 SESUE PANDY TWINS NOKIE FRDDO ARNNY Q184 SARKK TXK SPS J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>50 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ THRSR VUZ J14 IRW J78 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>51 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN Q66 LITTR KOMMA IRW J6 PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>53 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT FUSCO CNX HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>58 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 BFOLO FIBER HRISN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>61 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV RAMRD ARG FSM IRW PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>68 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV LAJUG Q68 LITTR TXK BYP UKW HNKER TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
					break;
				case "LAX": // Updated 04-30-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-30-2025 CMP -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-30-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 CIM J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>"; // CDR 00
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEPEW J64 LMN PWE HLC J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV RAMRD Q68 LITTR TXK FUZ J4 ABI J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA LDN HNN FLM J134 BUM ICT LBL FTI J8 GUP J96 DRK J231 TNP JLI VISTA3 KLAX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-30-2025
					result += "<!-- Verified with ATCSCC on 04-30-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 CIM J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>12<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEPEW J64 LMN PWE HLC J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/>13<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB J60 LNK J60 HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>14<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEJOY AIR J80 MCI J24 SLN J102 ALS J44 RSK J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/>16<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEPEW J64 BDF STJ SLN J102 ALS J110 RSK J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/>17<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEJOY AIR J110 STL Q176 CIM J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>18<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB J60 HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>19<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB FNT J36 BAE MCW ONL J114 DVV J60 HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>40<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 SESUE PANDY TWINS NOKIE FRDDO ARNNY Q184 SARKK TXK SPS J72 ABQ J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>50<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ THRSR VUZ J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>51<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN Q66 LITTR KOMMA IRW J6 PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>53<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT FST ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>54<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 BFOLO FIBER HRISN Q30 IZAAC EIC J4 ABI EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>55<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 BFOLO YAALL J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>58<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 BFOLO FIBER HRISN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER CNX J74 SJN J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>59<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>61<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV BWG ARG FSM IRW PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 BUM ICT LBL FTI J8 GUP J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>65<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA WYNGS5 RAMAY Q72 HACKS J149 ROD VHP J110 RSK J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/>66<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV BWG ARG TUL MMB FTI J8 GUP J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>67<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV BWG ARG TUL MMB FTI J8 GUP J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>68<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV RAMRD Q68 LITTR TXK BYP UKW HNKER CNX J74 SJN J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>69<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ J78 FAM SGF LBL CIM J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>6A<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEPEW J64 BDF STJ SLN J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					break;
				case "LGA": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA DOCTR5 AGARD SPEAK PROUD2 KLGA\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDCA DOCTR5 AGARD WNSTN Q439 SHERL RICED KEYED KLGA\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KDCA HORTO4 JERES Q221 MICAH MIP MIP4 KLGA\" readonly>";
					result += "<br/><br/>LIMBO NORTH (Max FL070): <input style=\"width:75%\" value=\"KDCA SOOKI5 SWANN V268 LEEAH V1 CYN RBV V123 APPLE KLGA\" readonly>";
					result += "<br/>WEVEL: <input style=\"width:75%\" value=\"KDCA HORTO4 JERES J211 LEONI WEVEL ELZ VIEEW ITH RKA HAARP4 KLGA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>00 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD SPEAK PROUD2 KLGA\" readonly>";
					result += "<br/>10 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES Q221 FORTT MIP MIP4 KLGA\" readonly>";
					result += "<br/>11 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES J211 LEONI WEVEL ELZ VIEEW ITH RKA HAARP4 KLGA\" readonly>";
					result += "<br/>13: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES J211 LEONI WEVEL ELZ ITH RKA HAARP4 KLGA\" readonly>";
					result += "<br/>20 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD WNSTN T320 RICED KEYED BDR PRENO KLGA\" readonly>";
					break;
				case "MCO":
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB MOXXY Q85 LPERD GTOUT1 KMCO\" readonly>";
					result += "<br/><br/>Overwater: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB EARZZ Q131 WAALT Y289 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					result += "<br/><br/>WATRS: <input style=\"width:75%\" value=\"KDCA DOCTR5 AGARD SIE B24 LYNUS SILLY HOBOH Y488 STERN Y493 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					//result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-11-2025
					result += "<!-- Verified with ATCSCC on 03-11-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB MOXXY Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>20<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD T287 CANNY LAFLN TRPOD CRPLR Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>41<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB MOXXY Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>49<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 PUPYY WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>50<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q83 ROYCO Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>51<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA QUIWE Q93 GIPPL Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>52<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>53<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
					result += "<br/>55<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 WISTA NEALS J85 SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>62<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ SPAYD VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
					result += "<br/>63<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ J85 SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>71<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q83 ROYCO Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>72<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 SLOJO Q75 TEUFL WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>97<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB PAACK Q97 ELMSZ IGARY Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>AR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB EARZZ Q131 WAALT Y289 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					break;
				case "MIA": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB EARZZ SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>Non OW: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/><br/>Deepwater: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB EDDYS ECG AR8 OXANA ROBBB Y493 JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 TEEEM BULZI Q81 ENDEW SABEE FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA COLIN HCM ISO ILM CHS SSI OMN ANNEY4 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>00 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>20 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD T287 CANNY LAFLN TRPOD Q409 CRPLR SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>50 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>52 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>55 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA WIGVO Q77 SHRKS Q89 PRMUS DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>60 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 WISTA NEALS J85 SPA ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>62 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ SPAYD VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>72 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 SLOJO Q75 TEEEM BULZI ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>AR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB EARZZ SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					break;
				case "MSY": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 NIOLA MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB COUPN TYI Q64 CATLN Q56 HRV KMSY\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV BNA WAKOL Q34 MEMFS XESSS J35 MCB TRSSH1 KMSY\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>00: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 NIOLA MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/>40 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 SESUE PANDY TWINS NOKIE MGMRY CATLN Q56 SJI MNSTR1 KMSY\" readonly>";
					result += "<br/>50 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ MGMRY CATLN Q56 SJI MNSTR1 KMSY\" readonly>";
					result += "<br/>60 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 JONEN TONIO VXV VLKNN MERDN TRSSH1 KMSY\" readonly>";
					break;
				case "MSN": // Updated 04-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-19-2025 M -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB J34 BAE KMSN\" readonly>"; // CDR 00
					// result += "<br/><br/><b>Non RNAV</b>"; // TODO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
					result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB J34 BAE KMSN\" readonly>";
					result += "<br/>11<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES J211 JST HAGUD J60 DJB J34 BAE KMSN\" readonly>";
					result += "<br/>55<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV IIU J89 BVT JVL KMSN\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 HNN FLM MACES BVT J89 BAE KMSN\" readonly>";
					break;
				case "ORD": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA WYNGS5 RAMAY Q72 HACKS J149 ROD WATSN4 KORD\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB FNT WYNDE2 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA AML J149 FWA KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>00 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA WYNGS5 RAMAY Q72 HACKS J149 ROD WATSN4 KORD\" readonly>";
					result += "<br/>11 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES J211 JST GRACE ALEEE Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>40 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 MRPIT CEELY Q172 YUTEE IRQ VXV VOSTK Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>50 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 IPTAY VXV JEDER Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>55 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV VOSTK Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>56 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS HVQ HNN FWA WATSN4 KORD\" readonly>";
					result += "<br/>60 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ J24 FLM HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>C2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 HNN FLM HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>C3 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEPEW WEEVR Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>C5 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB RRONS Q436 EMMMA WYNDE2 KORD\" readonly>";
					break;
				case "PBI": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB EARZZ Q131 WAALT Y289 DULEE CLMNT2 KPBI\" readonly>";
					result += "<br/>Non OW: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB PAACK Q97 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA COLIN HUBBS HCM ISO ILM CHS CAKET Q97 KENLL OMN MLB STOOP3 KPBI\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>20 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD T287 CANNY LAFLN TRPOD Q409 CRPLR PRONI WAALT Y289 DULEE CLMNT2 KPBI\" readonly>";
					result += "<br/>4A (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 SLOJO Q75 ENEME VUUDU1 KPBI\" readonly>";
					result += "<br/>50 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q83 JEVED Q97 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>51: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA QUIWE Q93 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>52 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA ENEME VUUDU1 KPBI\" readonly>";
					result += "<br/>53 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV THRSR ZPLEN VUUDU1 KPBI\" readonly>";
					result += "<br/>55 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA WIGVO Q77 SHRKS Q89 PRMUS KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>60: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 WISTA NEALS J85 SPA ENEME VUUDU1 KPBI\" readonly>";
					result += "<br/>62 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ SPAYD VXV THRSR ZPLEN VUUDU1 KPBI\" readonly>";
					break;
				case "PHX": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 TOTOE FTI BUKKO ZUN EAGUL6 KPHX\" readonly>"; // CDR 00
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV KM27K KF21C HOB EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>ABI<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 BFOLO FIBER HRISN Q30 IZAAC EIC J4 ABI EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>BUM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 BUM ICT LBL FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>FAM<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ J78 FAM SGF PER MMB FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>HLC<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEPEW J64 LMN PWE HLC J64 PUB ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>HNKER 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV RAMRD Q68 LITTR TXK BYP UKW HNKER TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>HNKER 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 BFOLO FIBER HRISN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>JCT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT FST ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>LEV WEST<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>LNK<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB J60 LNK HLC ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>MCI WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEJOY AIR J80 MCI J24 SLN J96 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>MCW WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB FNT J36 BAE MCW ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>PHX EAGUL 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 BUM GCK J18 FTI J104 ONM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>PHX EAGUL 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV RAMRD Q68 LITTR TXK FUZ ABI J50 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>PNH 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV BWG ARG FSM IRW PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>PNH 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN Q66 LITTR KOMMA IRW J6 PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>ROCKIES SOUTH 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV BWG ARG FSM IRW PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>SLN<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEPEW J64 BDF STJ SLN J18 FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>STL<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEJOY AIR J110 STL BUM ICT LBL FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>TUL 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV BWG ARG TUL IFI PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA BUFFR Q178 LEJOY AIR J110 STL BUM ICT LBL FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-30-2025
					result += "<!-- Verified with ATCSCC on 04-30-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 TOTOE FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>12<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEPEW J64 LMN PWE HLC J64 PUB ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>13<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB J60 LNK HLC ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>14<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEJOY AIR J80 MCI J24 SLN J96 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>16<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEPEW J64 BDF STJ SLN J18 FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>17<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 LEJOY AIR J110 STL BUM ICT LBL FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>18<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB J34 BAE MZV J18 FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>19<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB FNT J36 BAE MCW ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>40<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 SESUE PANDY TWINS NOKIE FRDDO ARNNY Q184 FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>50<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK FUZ J66 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>51<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN Q66 LITTR KOMMA IRW J6 PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>53<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT FST ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>54<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 BFOLO FIBER HRISN Q30 IZAAC EIC J4 ABI EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>55<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV BNA J46 TUL J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>58<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 BFOLO FIBER HRISN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>59<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>61<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV BWG ARG FSM IRW PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 BUM ICT LBL FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>65<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA WYNGS5 RAMAY Q72 HACKS J149 ROD VHP J24 STL Q176 TOTOE FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>66<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV BWG ARG FSM IRW PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>67<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV BWG ARG TUL IFI PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>68<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV RAMRD Q68 LITTR TXK BYP UKW HNKER TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>69<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ J78 FAM SGF PER MMB FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>E1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 STL J110 ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>E2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 BUM MMB J26 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>E3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 BUM GCK J18 FTI J104 ONM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>E4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 STL J110 RSK FLG DUTEY MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>E5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 FAREV RAMRD Q68 LITTR TXK FUZ ABI J50 ELP DRRVR PINNG1 KPHX\" readonly>";
					break;
				case "RSW": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 SLOJO Q103 CYNTA SHFTY6 KRSW\" readonly>"; // CDR 00
					result += "<br/><br/>NE TO FLORIDA VIA J48 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA CLTCH3 FLASK GOWBE BURGG IRQ WIGVO CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>NE TO FLORIDA VIA J48 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>NE TO FLORIDA VIA J6<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ SPAYD VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>NE TO FLORIDA VIA Q75 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 SLOJO Q103 CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>NE TO FLORIDA VIA Q97 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB PAACK Q97 ELMSZ JROSS Q409 PUPYY Q103 CYNTA SHFTY6 KRSW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-17-2025
					result += "<!-- Verified with ATCSCC on 04-17-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 SLOJO Q103 CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>20<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD T287 CANNY LAFLN TRPOD Q409 PUPYY CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>40<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB COUPN BEETN JIMAR DEEEZ Q409 PUPYY CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>52<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK GOWBE BURGG IRQ WIGVO CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>53<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>55<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA WIGVO Q77 TEUFL CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 WISTA NEALS J85 SPA IRQ CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>62<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ SPAYD VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>72<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 SLOJO Q103 CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>97<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB PAACK Q97 ELMSZ JROSS Q409 PUPYY Q103 CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>AR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB EARZZ Q131 WAALT Y289 BAHAA HIBAC SHFTY6 KRSW\" readonly>";
					break;
				case "SAT": // Updated 05-01-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-01-2025 PCM -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 AEX CAAGE QERVO1 KSAT\" readonly>"; // CDR 00
					result += "<br/><br/><b style=\"color:orange\">Fkeys will flag anything other than CDR00 as a mandatory route violation but routes below are good.<\/b>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ MGMRY GARTS LCH CAAGE QERVO1 KSAT\" readonly>"; // CDR 00
					result += "<br/>North: <input style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 AVERE J152 ROD VHP STL FSM WINDU QERVO1 KSAT\" readonly>"; // CDR 00
					// result += "<br/><br/><b>Non RNAV</b>"; // TODO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-01-2025
					result += "<!-- Verified with ATCSCC on 05-01-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 AEX CAAGE QERVO1 KSAT\" readonly>";
					break;
				case "SRQ": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 SLOJO Q103 PUPYY KYYUU LUBBR3 KSRQ\" readonly>";
					result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KDCA AMEEE1 COLIN SCOOB GUILD ILM SEELO SNABS GRUBR ALYRA TRV LBV KSRQ\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>40: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB COUPN BEETN JIMAR DEEEZ Q409 PUPYY KYYUU LUBBR3 KSRQ\" readonly>";
					result += "<br/>52: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA KYYUU LUBBR3 KSRQ\" readonly>";
					result += "<br/>53: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV THRSR HONID BANGZ1 KSRQ\" readonly>";
					result += "<br/>55: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA WIGVO Q77 TEUFL KYYUU LUBBR3 KSRQ\" readonly>";
					result += "<br/>60: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 WISTA NEALS J85 SPA KYYUU LUBBR3 KSRQ\" readonly>";
					result += "<br/>62: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ SPAYD VXV THRSR HONID BANGZ1 KSRQ\" readonly>";
					result += "<br/>72: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 SLOJO Q103 PUPYY KYYUU LUBBR3 KSRQ\" readonly>";
					break;
				case "STL": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 BICKS PXV BOOSH3 KSTL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA AML J149 EMPTY J80 VHP KSTL\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>01 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA WYNGS5 RAMAY Q72 HACKS J149 EMPTY J80 VHP AARCH2 KSTL\" readonly>";
					result += "<br/>11 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA BUFFR Q178 LEJOY AIR J110 VHP AARCH2 KSTL\" readonly>";
					result += "<br/>18 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 BUFFR Q178 DJB J60 GSH RBS AARCH2 KSTL\" readonly>";
					result += "<br/>40 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VUZ J151 VISQA BOOSH3 KSTL\" readonly>";
					result += "<br/>50 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 IPTAY CHOPZ BNA BOOSH3 KSTL\" readonly>";
					result += "<br/>55 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV J46 BNA BOOSH3 KSTL\" readonly>";
					result += "<br/>56 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS HVQ J24 FLM PXV BOOSH3 KSTL\" readonly>";
					result += "<br/>60 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA OTTTO Q80 DEWAK BNA BOOSH3 KSTL\" readonly>";
					break;
				case "SYR": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA HORTO4 JERES Q227 STENT CFB KSYR\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDCA HORTO4 JERES J211 LEONI WEVEL ELZ NABOR KSYR\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>00 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES Q227 STENT CFB T335 CORTA KSYR\" readonly>";
					result += "<br/>11 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA HORTO4 JERES J211 LEONI WEVEL ELZ NABOR KSYR\" readonly>";
					result += "<br/>20 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SOOKI5 SWANN BROSS Q419 RBV Q22 LAURN CFB T335 CORTA KSYR\" readonly>";
					result += "<br/>60 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q176 HNN EWC ELZ NABOR KSYR\" readonly>";
					result += "<br/>65 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA WYNGS5 RAMAY J149 SINDE EWC ELZ NABOR KSYR\" readonly>";
					break;
				case "TPA": // Updated 04-10-2025
					result += "<!-- Updated 04-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 TEUFL BAAMF DADES2 KTPA\" readonly>";
					result += "<br/><br/>Coastal <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 PUPYY BAAMF DADES2 KTPA\" readonly>"; // CDR 41
					result += "<br/>OW <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB EARZZ Q131 WAALT Y289 BAHAA HIBAC DADES2 KTPA\" readonly>"; // CDR AR
					result += "<br/>West <input style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 TEUFL BAAMF DADES2 KTPA\" readonly>"; // CDR 00
					result += "<br/><br/>NO J75 1: <input style=\"width:75%\" value=\"KDCA AMEEE1 COLIN SCOOB GUILD Q409 PUPYY BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>NO Q75 3: <input style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ J85 SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA AML GVE GSO CAE AMG TAY LAL BRDGE BRDGE9 KTPA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-10-2025
					result += "<!-- Verified with ATCSCC on 04-10-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 TEUFL BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>20<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA DOCTR5 AGARD T287 CANNY LAFLN TRPOD Q409 PUPYY BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>40<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB COUPN BEETN JIMAR DEEEZ Q409 PUPYY BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>41<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 PUPYY BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>52<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>53<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 MAULS Q40 ALEAN VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>55<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COREX SPA WIGVO Q77 TEUFL BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q80 WISTA NEALS J85 SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>62<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ SPAYD VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>63<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA REBLL5 OTTTO Q68 HVQ J85 SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>72<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA JDUBB4 RRSIN GSO Q75 TEUFL BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>97<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB PAACK Q97 ELMSZ JROSS Q409 PUPYY BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>AR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB EARZZ Q131 WAALT Y289 BAHAA HIBAC DADES2 KTPA\" readonly>";
					break;
				case "VPS": // Updated 04-11-2025
					result += "<!-- Updated 04-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ MGMRY CEW KVPS\" readonly>"; // CDR 00
					// result += "<br/><br/><b>Non RNAV</b>"; // TODO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-11-2025
					result += "<!-- Verified with ATCSCC on 04-11-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA SCRAM6 GLANC COLZI Q52 CHOPZ MGMRY CEW KVPS\" readonly>";
					result += "<br/>40<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA AMEEE1 SCOOB GUILD Q409 ISUZO CABLO CEW KVPS\" readonly>";
					result += "<br/>55<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDCA CLTCH3 FLASK COLZI Q52 CHOPZ MGMRY CEW KVPS\" readonly>";
					break;
			}
		break; // End of DCA

		case "DEN":
			switch(arvl) {
				case "CLT": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDEN EEONS8 WYNDM PWE STJ STL PXV SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDEN SLEEK2 SLEEK KENTO EZEEE IRW J14 VUZ THRSR PHIIL CNTLR JONZE5 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDEN PLAIN1 GCK J28 ICT ARG VXV LIINN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>E1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN EXTAN7 SHAYK SLN BUM BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/>N1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN CHUWY1 CHUWY ONL ENL PXV SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/>S1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN SLEEK2 SLEEK SGF BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/>W1: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN BAYLR6 TEHRU MTJ CIM MMB ARG TAZZA FILPZ4 KCLT\" readonly>";
					break;
				case "DFW":
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDEN SLEEK2 SLEEK EZEEE MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>SW Arrival: <input style=\"width:75%\" value=\"KDEN SABTH2 VRONI PNH J17 DUMPS GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>East: <input style=\"width:75%\" value=\"KDEN EPKEE7 DUUZE PER HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KDEN BAYLR6 TEHRU MTJ RSK J15 ABQ J15 CME GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDEN PLAIN1 GCK SPS UKW8 KDFW\" readonly>";
					result += "<br/><input style=\"width:75%\" value=\"KDEN PLAIN1 GLD J182 ICT J21 IRW FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-30-2025
					result += "<!-- Verified with ATCSCC on 04-30-2025 -->";
					result += "<br/>E1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN EPKEE7 DUUZE GCK MMB MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/>N1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN CHUWY1 CHUWY HAAND QWILT MMB MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/>S1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN SABTH2 VRONI EZEEE MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/>W1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN BAYLR6 TEHRU MTJ TCC TURKI VKTRY2 KDFW\" readonly>";
					break;
				case "MIA": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KDEN EPKEE7 DUUZE IRW J20 EIC SWB HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDEN EXTAN7 SHAYK SLN SGF Q116 MEMFS MGMRY ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/>Weekend/Holiday: <input style=\"width:75%\" value=\"KDEN EPKEE7 DUUZE GCK IRW EIC SWB DYEES GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KDEN SABTH2 VRONI PNH ABI ACT J50 LFK HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDEN PLAIN1 GCK TUL LIT IGB MGM SZW RSW PALMZ2 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>E1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN EPKEE7 DUUZE PER RZC MERDN DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>N1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN CHUWY1 CHUWY ONL SGF MERDN DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>S1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN SLEEK2 SLEEK PER RZC MERDN DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>W1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN BAYLR6 TEHRU MTJ CIM END RZC MERDN DEFUN FROGZ4 KMIA\" readonly>";
					break;
				case "ORD": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDEN EMMYS8 ZIRKL PWE IRK BENKY6 KORD\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDEN CHUWY1 CHUWY FSD MCW ZZIPR FYTTE7 KORD\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KDEN PLAIN1 GCK PER EOS WELTS TRTLL6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDEN PLAIN1 HCT OBH MCW JVL1 KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>E1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN EEONS8 WYNDM OBH FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>N1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN CHUWY1 CHUWY ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>S1: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN SLEEK2 SLEEK GCK IRK BENKY6 KORD\" readonly>";
					result += "<br/>W1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN ZIMMR3 CHNGY CHE DDRTH ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					break;
				case "PHL": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDEN EMMYS8 ZIRKL MCK LNK J60 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDEN EPKEE7 DUUZE GCK PER TUL LIT GENDE BURGG Q22 NYBLK SANNY GVE PAATS4 KPHL\" readonly>";
					result += "<br/<br/>>MCI VHP: <input style=\"width:75%\" value=\"KDEN EXTAN7 SHAYK MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>PXV: <input style=\"width:75%\" value=\"KDEN EPKEE7 DUUZE GCK ICT SGF J98 FAM J78 PXV J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>ROD: <input style=\"width:75%\" value=\"KDEN EPKEE7 DUUZE GCK PER RZC ARG PXV ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>VUZ: <input style=\"width:75%\" value=\"KDEN EPKEE7 DUUZE GCK PER TUL LIT J14 YAALL VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDEN PLAIN1 HCT J60 PSB BUNTS3 KPHL\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>E1: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN EMMYS8 ZIRKL OVR FWA JST BOJID4 KPHL\" readonly>";
					result += "<br/>N1: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN CHUWY1 CHUWY ONL JOT JST BOJID4 KPHL\" readonly>";
					result += "<br/>S1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN SLEEK2 SLEEK GCK AXC VHP JST BOJID4 KPHL\" readonly>";
					break;
				case "PHX": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN SMMUR2 DAAYE GUP EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDEN ROCKI6 HBU J10 RSK GUP BUNTR3 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>E1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN EPKEE7 DUUZE PUMPS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>N1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN DDRTH1 DDRTH CHE JNC RSK GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>S1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN SMMUR2 DAAYE GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>W1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDEN BAYLR6 TEHRU MTJ RSK GUP EAGUL6 KPHX\" readonly>";
					break;
			}
		break; // End of DEN

		case "DFW":
			result = dfw_departures(arvl, tail, ac_type, result);
		break; // End of DFW

// DLH skipped
// DRO skipped

		case "DSM":
			switch(arvl) {
				case "CLT": // Updated 07-01-2025
					result += "<!-- Updated 07-01-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDSM DSM Q19 STL ENL PXV SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDSM PIA VHP J24 FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDSM IRK J45 BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South via ARG<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDSM IRK MAW BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDSM IRK STL PXV BWG VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-01-2025
					break;
				case "DFW": // Updated 05-16-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-16-2025 MP -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 05-16-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDSM DSM J25 MCI RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDSM LMN STJ ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/><b>For West dptr: KDSM OVR J21 ICT...<\/b>";
					result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDSM IOW PIA STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>East via SQS<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDSM IOW PIA ENL J71 MEM SQS MLU YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDSM J25 TUL FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-16-2025
					break;
				case "ORD": // Updated 01-05-2025
					result += "<!-- Updated 01-05-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDSM MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDSM OTM BDF BDF8 KORD\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHX": // Updated 05-16-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-16-2025 MP -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 05-16-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDSM LNK J146 GLD PUB ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDSM LNK J60 HCT J128 FQF DVC INW EAGUL6 KPHX\" readonly>";
					result += "<br/><b style=\"color:orange\">Expect reroute to GUP EAGUL6 KPHX on west side of weather.<\/b>";
					result += "<br/>South: <input style=\"width:75%\"; value=\"KDSM STJ HUT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDSM LNK J60 HCT J128 FQF J10 HBU RSK GUP BUNTR3 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-16-2025
					break;
			}
		break; // End of DSM

		case "DTW":
			switch(arvl) {
				case "DFW": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDTW SNDRS3 BGHRT STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KDTW BARII3 SINKR PXV J131 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>NW Arrival: <input style=\"width:75%\"; value=\"KDTW SNDRS3 BGHRT STL SGF TUL HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>SE Arrival: <input style=\"width:75%\"; value=\"KDTW BARII3 SINKR IIU BWG IZAAC YUYUN WHINY4 KDFW\" readonly>";
					result += "<br/><br/>DFW WEST: <input style=\"width:75%\" value=\"KDTW BARII3 SINKR PXV ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDTW METRO4 ILLIE FWA VHP J24 STL J8 SGF RZC FSM FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-28-2025
					result += "<!-- Verified with ATCSCC on 02-28-2025 -->";
					result += "<br/>N1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW MIGGY3 SLLAP Q440 HUFFR HARPI J21 IRW UKW8 KDFW\" readonly>";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW BARII3 SINKR PXV J131 LIT FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/>S1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW SNDRS3 BGHRT STL RZC FSM RRNET BRDJE5 KDFW\" readonly>";
					result += "<br/>W1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW KAYLN3 SMUUV RBS J19 STL RZC FSM RRNET BRDJE5 KDFW\" readonly>";
					result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW KAYLN3 SMUUV OBK MZV IRK J26 ICT IFI HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>W4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW BARII3 SINKR IIU BWG SQS YUYUN WHINY4 KDFW\" readonly>";
					break;
				case "CLT": // Updated 01-05-2025
					result += "<!-- Updated 01-05-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDTW CLVIN3 STAZE FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDTW METRO4 ILLIE ROD J43 VXV LIINN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>E1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW LIDDS3 GRIVY HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>P1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW CLVIN3 STAZE FLM TAFTT PARQR4 KCLT\" readonly>";
					break;
				case "MIA": // Updated 01-05-2025
					result += "<!-- Updated 01-05-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDTW CLVIN3 STAZE FLM SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KDTW CLVIN3 STAZE BZM FLO EBEAR DUUNK Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDTW CLVIN3 STAZE FLM SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>E1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW LIDDS3 GRIVY NUSMM PSK GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>R1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW BARII3 SINKR HYK WINNA NOTWO THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>Y1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW SNDRS3 SNDRS REEDA FWA VHP IIU J99 VXV WIGVO Q77 SHRKS Q89 PRMUS DEBRL CSTAL3 KMIA\" readonly>";
					break;
				case "ORD": // Updated 01-05-2025
					result += "<!-- Updated 01-05-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDTW SNDRS3 SNDRS NOLNN Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDTW DUNKS J70 PMM KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>N1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW MIGGY3 GETCH BAE MSN JVL CHMPN FYTTE7 KORD\" readonly>";
					result += "<br/>N1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW KAYLN3 SMUUV WYNDE2 KORD\" readonly>";
					break;
				case "PHX": // Updated 01-05-2025
					result += "<!-- Updated 01-05-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDTW KAYLN3 SMUUV CHASY J18 GCK CIM ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>BUM: <input style=\"width:75%\" value=\"KDTW CLVIN3 STAZE JUDDI Q176 BUM ICT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>FAM: <input style=\"width:75%\" value=\"KDTW CLVIN3 STAZE PXV J78 FAM J98 SGF PER MMB FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>STL: <input style=\"width:75%\" value=\"KDTW CLVIN VHP STL BUM ICT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KDTW BGHRT STL BUM ICT LBL CIM J134 GUP BUNTR3 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>N1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW MIGGY3 SLLAP Q440 HUFFR FSD OBH GLD LAA J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>P1: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW PAVYL3 ESSBE CXR STL Q176 CIM J96 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>P1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW SNDRS3 BGHRT STL BUM ICT TOTOE CIM J134 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>S1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW BARII3 SINKR PXV J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>W1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDTW KAYLN3 SMUUV OBK MZV J18 FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					break;
			}
		break; // End of DTW

		case "ECP":
			switch(arvl) {
				case "CLT": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KECP PZD PONZE BANKR5 KCLT\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KECP GONDR RMG SPA KCLT\" readonly>";
					result += "<br/>STOCR: <input style=\"width:75%\" value=\"KECP CABLO TEEEM WURFL CHECR STOCR4 KCLT\" readonly>";
					result += "<br/>FILPZ: <input style=\"width:75%\" value=\"KECP MGM VUZ TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KECP PZD PONZE BANKR5 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS on file as of 03-01-2025
					break;
				case "DFW": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 02-28-2025
					result += "<br/><br/><input style=\"width:75%\" value=\"KECP DEFUN CEW J50 MCB PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KECP DEFUN J2 IAH CRIED WHINY4 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KECP DEFUN MGM VUZ J14 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KECP DEFUN CEW J50 MCB AEX YEAGR4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "ORD": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KECP RRS VUZ J151 FAM FTZ TRTLL6 KORD\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS on file as of 03-01-2025
					break;
			}
		break; // End of ECP

		case "EGE":
			switch(arvl) {
				case "DFW": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEGE APRES2 RUBAY COORZ KD51W EZEEE MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>GYPSUM: <input style=\"width:75%\" value=\"KEGE GYPSM6 RLG COORZ EZEEE MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KEGE APRES2 RUBAY COORZ FQF J80 GLD J182 ICT J21 IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KEGE APRES2 RUBAY ZAPAA CNX J15 CME BGS GEEKY BOOVE7 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "JFK": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEGE APRES2 RUBAY DVV J60 JOT GIJ J554 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "MIA": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KEGE APRES2 RUBAY FQF LAA TOTOE MMB J98 IRW J20 EIC AEX J58 HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KEGE APRES2 RUBAY GLD J182 ICT RZC LITTR MGMRY ACORI FROGZ4 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of EGE

		case "ELP":
			switch(arvl) {
				case "DFW": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KELP TDOWN3 SFL INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KELP LATVE3 CME TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KELP NEVUE3 FST JCT GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/><br/>DFW BOOVE: <input style=\"width:75%\" value=\"KELP LATVE3 CME TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/>DFW WEST: <input style=\"width:75%\" value=\"KELP NEVUE3 FST J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KELP J50 INK ACT YEAGR4 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>JE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KELP J26 CME TXO TURKI VKTRY2 KDFW\" readonly>";
					break;
				case "PHX": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KELP JCOXX2 HBACK DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KELP ATKNN5 GREBE J86 VERNO EAGUL EAGUL6 KPHX\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KELP ATKNN5 NOCHI TUS HOTTT PINNG1 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of ELP

		case "EUG":
			switch(arvl) {
				case "DFW": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 01-09-2025
					result += "<br/><br/><input style=\"width:75%\" value=\"KEUG DSD BOI LYONS TCH J15 JNC ALS PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KEUG LKV BAM ELY MLF DVC CIM PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KEUG DSD BOI PIH J20 LAA TOTOE MMB HOFFF VKTRY2 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-30-2025
					result += "<!-- Verified with ATCSCC on 04-30-2025 -->";
					break;
				case "PHX": // Updated 04-30-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-30-2025 MP -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-30-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KEUG LMT J92 BTY BLD WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KEUG DSD KOATA Q35 CORKR TENTS BRUSR1 KPHX\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KEUG RBG OED SAC AVE BOILE BLH HYDRR1 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-30-2025
					result += "<!-- Verified with ATCSCC on 04-30-2025 -->";
					break;
			}
		break; // End of EUG

// EVV skipped

		case "EWR":
			switch(arvl) {
				case "CLT":
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEWR BIGGY Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>Low Alt: <input style=\"width:75%\" value=\"KEWR GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KEWR ELVAE NECCK DIXIE Y481 OHRYN Y488 STERN Y493 TUBBS DIZNY Y436 PITRW STOCR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEWR BIGGY MXE GVE LYH MAJIC4 KCLT\" readonly>";
					result += "<br/><input style=\"width:75%\" value=\"KEWR COATE Q436 RAAKK JHW DJB APE GZG BTSEY2 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>48 (Coord Req): <input style=\"width:75%\" value=\"KEWR LANNA J48 MOL AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>60 (Coord Req): <input style=\"width:75%\" value=\"KEWR NEWEL J60 DJB J85 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>80 (Coord Req): <input style=\"width:75%\" value=\"KEWR ZIMMZ Q42 MIKYG Q480 AIR HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>J6 (Coord Req): <input style=\"width:75%\" value=\"KEWR PARKE J6 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>KA (Coord Req): <input style=\"width:75%\" value=\"KEWR ELVAE NECCK WHITE Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>NE (Coord Req): <input style=\"width:75%\" value=\"KEWR NEION Q232 DARBO J49 PSB J60 DJB ROD FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>PH (Ok to File): <input style=\"width:75%\" value=\"KEWR BIGGY Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>PS (Coord Req): <input style=\"width:75%\" value=\"KEWR NEWEL J60 PSB HVQ LNDIZ PARQR4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 04-11-2025
					result += "<!-- Updated 04-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEWR PARKE J6 HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>"; // CDR PH
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KEWR ZIMMZ Q42 MIKYG Q480 AIR J80 FYLLS PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>"; // CDR 80
					result += "<br/>South: <input style=\"width:75%\" value=\"KEWR BIGGY Q75 GVE LYH COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>"; // CDR 75
					result += "<br/><br/>DFW EAST 1: <input style=\"width:75%\" value=\"KEWR ELIOT MIP PSB J60 JOT MZV IRK J26 ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>SEEVR 1: <input style=\"width:75%\" value=\"KEWR PARKE J6 HVQ Q68 RAMRD IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEWR PARKE J6 HVQ J78 TUL FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-11-2025
					result += "<!-- Verified with ATCSCC on 04-11-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR COATE Q436 HERBA JHW Q29 KLYNE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR LANNA J48 CSN FANPO Q40 ALEAN Q66 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEWEL J60 DJB PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEWEL J60 DANNR RAV J64 MAINE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>75<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR BIGGY Q75 GVE LYH COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ZIMMZ Q42 MIKYG Q480 AIR J80 FYLLS PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>AZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ELVAE NECCK DIXIE Y481 OHRYN Y488 STERN Y493 BAHAA Y438 KOOKK CAMJO CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>B6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR BIGGY Q75 GVE LYH COLZI Q52 CHOPZ THRSR VUZ J14 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>B7<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 COLNS Q176 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>B9<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ELVAE NECCK WHITE Q409 MRPIT CEELY Q172 YUTEE IRQ VUZ J14 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM Q84 JHW Q29 KLYNE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>CH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ELVAE NECCK WHITE Q409 MRPIT CEELY Q172 YUTEE IRQ VUZ J14 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>CQ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR LANNA J48 CSN FANPO Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>J5<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 HVQ Q68 RAMRD SQS AEX LFK CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 HVQ Q68 RAMRD ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>J8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ELVAE NECCK WHITE Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC AEX LFK CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>J9<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ELVAE NECCK WHITE Q409 SESUE PANDY TWINS NOKIE MGMRY LCH J2 IAH CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>KA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ELVAE NECCK WHITE Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>NE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEION Q232 DARBO J49 PSB J60 DJB PXV ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>Q6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 HVQ Q68 RAMRD SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>Q7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEWEL J60 DJB RINTE Q139 IIU BWG SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>U6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEWEL J60 JOT MZV IRK MCI ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>U8<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ZIMMZ Q42 MIKYG Q480 AIR J80 VHP J24 STL BUM ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>UN<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEWEL J60 JOT MZV IRK MCI ICT IRW HOFFF JOVEM6 KDFW\" readonly>";
					break;
				case "MIA":
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEWR ELVAE NECCK WHITE Q409 CRPLR BGBRD Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KEWR ELVAE NECCK WHITE Q409 CRPLR PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>Non OW Inland: <input style=\"width:75%\" value=\"KEWR BIGGY Q75 SLOJO Q83 WURFL Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/><br/>ATLANTIC SOUTH 1: <input style=\"width:75%\" value=\"KEWR ELVAE NECCK DIXIE Y481 POPPN SHAYD LYNUS CUMBY LOZER WHOOS WEAKK JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>WATRS: <input style=\"width:75%\" value=\"KEWR ELVAE NECCK DIXIE Y481 OHRYN Y488 STERN Y493 JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEWR ELVAE NECCK WHITE SIE ORF ILM CHS SAV OMN ANNEY4 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>AR (Ok to File): <input style=\"width:75%\" value=\"KEWR ELVAE NECCK WHITE Q409 CRPLR BGBRD Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>AZ (Ok to File): <input style=\"width:75%\" value=\"KEWR ELVAE NECCK DIXIE Y481 OHRYN Y488 STERN Y493 JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>SA (Coord Req): <input style=\"width:75%\" value=\"KEWR BIGGY Q75 SLOJO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>SP (Coord Req): <input style=\"width:75%\" value=\"KEWR NEWEL J60 DANNR RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>TR (Coord Req): <input style=\"width:75%\" value=\"KEWR ELVAE NECCK WHITE Q409 CRPLR PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>";
					break;
				case "ORD": // Updated 06-10-2025 // Mandatory Routes checked
					result += "<!-- Updated 06-10-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEWR COATE Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KEWR GAYEL J95 CFB RAAKK Q436 EMMMA WYNDE2 KORD\" readonly>"; // CDR 95
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KEWR ZIMMZ Q42 MIKYG Q480 AIR J80 EMPTY J149 FWA WATSN4 KORD\" readonly>"; // CDR 80
					result += "<br/><br/>North via WOSIK<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KEWR GAYEL Q818 WOZEE NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>"; // CDR 1N
					result += "<br/>South/ZOB Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KEWR PARKE J6 EYTEE J149 FWA WATSN4 KORD\" readonly>"; // CDR X6
					result += "<br/><br/>North via CAM<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM NOVON KENPA OBSTR WYNDE2 KORD\" readonly>"; // CDR 2K
					result += "<br/>North via GRB<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM NOVON KENPA GRB SHIKY FYTTE7 KORD\" readonly>"; // CDR GS
					result += "<br/>North/ZOB Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM NOVON SIKBO NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>"; // CDR ZS
					result += "<br/><br/>GREKI 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM Q822 GONZZ FARGN CHAAP Q436 EMMMA WYNDE2 KORD\" readonly>";
					// result += "<br/>NY DUCT WEST: <input style=\"width:75%\" value=\"KEWR NEION Q232 DARBO J49 PSB J60 DJB ZANLA WATSN4 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEWR SAX LVZ J70 PMM KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-10-2025
					result += "<!-- Verified with ATCSCC on 06-10-2025 -->";
					result += "<br/>1K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GAYEL Q818 WOZEE KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GAYEL Q818 WOZEE NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>2K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM NOVON KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM NOVON SIKBO NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>3K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM NOVON SIKBO KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEWEL J60 DJB NOLNN Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>61<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEWEL J60 PSB YARRK Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEWEL J60 DANNR RAV Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ZIMMZ Q42 MIKYG Q480 AIR J80 EMPTY J149 FWA WATSN4 KORD\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GAYEL J95 CFB RAAKK Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM Q822 FNT WYNDE2 KORD\" readonly>";
					result += "<br/>DJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEWEL J60 CANCR RRONS Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>G3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM Q822 GONZZ FARGN CHAAP Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>GS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM NOVON KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 COLNS Q176 HNN FLM J24 VHP BONNT VEECK5 KORD\" readonly>";
					result += "<br/>KF<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM NOVON SIKBO KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>KS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GAYEL Q818 WOZEE KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>NE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEION Q232 DARBO J49 PSB J60 DJB NOLNN Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>NZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GAYEL Q818 WOZEE NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR COATE Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>X6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 EYTEE J149 FWA WATSN4 KORD\" readonly>";
					result += "<br/>ZS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GREKI JUDDS CAM NOVON SIKBO NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					break;
				case "PHX": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEWR ZIMMZ Q42 MIKYG Q480 AIR J110 STL BUM ICT LBL FTI ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KEWR PORTT4 PARKE J6 HVQ Q68 LITTR MEEOW J66 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>ELP: <input style=\"width:75%\" value=\"KEWR LANNA J48 CSN FANPO Q40 NIOLA MCB LCH IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>KENPA WEST 1: <input style=\"width:75%\" value=\"KEWR GAYEL Q818 WOZEE KENPA CESNA ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>NOSIK WEST 1: <input style=\"width:75%\" value=\"KEWR GAYEL Q818 WOZEE NOSIK ZOHAN LAAKE ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>60 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEWEL J60 LNK HLC ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>60 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEWEL J60 LNK HLC ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>6F: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 HVQ J78 FAM SGF TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>6T: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 HVQ Q68 RAMRD ARG TUL IFI PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>80 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ZIMMZ Q42 MIKYG Q480 AIR J80 MCI J24 SLN J96 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>80 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ZIMMZ Q42 MIKYG Q480 AIR J80 MCI J24 SLN J96 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>8N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ZIMMZ Q42 LCOLN IRK J26 MCI J24 SLN J96 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>8X (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR ZIMMZ Q42 MIKYG Q480 BEETS SINDE J149 EMPTY J80 VHP J110 BUM ICT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>95 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR GAYEL Q818 KELIE JHW Q29 CREEP J110 STL BUM ICT TOTOE FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>CW: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR COATE Q436 RAAKK Q438 RUBYY DABJU J36 BAE MCW ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>CW (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR COATE Q436 RAAKK Q438 RUBYY DABJU J36 BAE MCW ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>E2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR NEWEL J60 DANNR RAV J64 LMN PWE HLC J64 RSK FLG DUTEY MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>EM: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR LANNA J48 CSN FANPO Q40 BFOLO FIBER HRISN Q30 IZAAC EIC J4 ABI J66 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>EM (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR LANNA J48 CSN FANPO Q40 BFOLO FIBER HRISN Q30 IZAAC EIC J4 ABI J66 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>EP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR LANNA J48 CSN FANPO Q40 NIOLA MCB LCH IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>EP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR LANNA J48 CSN FANPO Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>G1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 HVQ Q68 LITTR TXK BYP UKW HNKER TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>J6 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 COLNS Q176 BUM ICT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>J6: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 COLNS Q176 BUM ICT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>P1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR PARKE J6 HVQ Q68 RAMRD ARG FSM IRW PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>P2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KEWR LANNA J48 CSN FANPO Q40 ALEAN Q66 LITTR KOMMA IRW J6 ZUN EAGUL6 KPHX\" readonly>";
					break;
			}
		break; // End of EWR

		case "EYW":
			switch(arvl) {
				case "DFW": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEYW BUFTT1 GUFFS THMPR Y290 BLVNS Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KEYW BUFTT1 GUFFS THMPR Y290 LEV J86 IAH CRIED WHINY4 KDFW\" readonly>";
					result += "<br/>Non OW: <input style=\"width:75%\" value=\"KEYW BUFTT1 JAYMC Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KEYW DTSRP PNSLO TBDRL KELPP A766 SBI CRIED BEREE3 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "CLT": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEYW BUFTT1 MATLK Q87 VIYAP CHECR STOCR4 KCLT\" readonly>";
					result += "<br/><br/>BANKR: <input style=\"width:75%\" value=\"KEYW BUFTT1 MATLK Q77 SHRKS TEUFL PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KEYW BUFTT1 JAYMC Q110 SHEEK Q118 KPASA Q99 CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KEYW FOBIN Q93 EBAYY LENDS GRUBR Y299 SEELO WAALT ILM TORQD MLLET3 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHL":
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>Non OW: <input style=\"width:75%\" value=\"KEYW BUFTT1 MATLK Q87 JROSS Q135 RREGG Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KEYW DHP VALLY WOLFO AR18 PELCN Y309 FLRDA IDOLS SKARP Q101 TUGGR KALDA ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KEYW BUFTT1 JAYMC Q116 SHEEK Q118 KPASA Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/>FLORIDA TO NE 3: <input style=\"width:75%\" value=\"KEYW BUFTT1 JAYMC Q110 SHEEK Q118 KPASA Q99 CAMJO TWINS SPA J83 APE JST BOJID4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KEYW SRQ TAY CAE RDU RIC SWL VCN9 KPHL\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of EYW

		case "FAR":
			switch(arvl) {
				case "DFW": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFAR FAR OBH KIRKE HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFAR FAR FSD LNK ICT IRW UKW8 KDFW \" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-17-2025
					result += "<!-- Verified with ATCSCC on 03-17-2025 -->";
					break;
			}
		break; // End of FAR

		case "FAT":
			switch(arvl) {
				case "DFW": // Updated 07-17-2025
					result += "<!-- Updated 07-17-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFAT OAL4 OAL KATTS Q164 ROCCY Q130 PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KFAT BULL3 AVE J6 PMD BLH J169 TFD J50 SSO J4 INK GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/>NE Arrival<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KFAT OAL4 OAL J58 MLF J28 ICT TUL HITUG SEEVR4 KDFW\" readonly>";
					// result += "<br/><br/>Holiday/Weekend: <input style=\"width:75%\" value=\"KFAT PINNI J110 FUZZY COWBY DILCO ABQ TXO TURKI JOVEM6 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFAT OAL J92 BTY BLD J72 TXO UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-17-2025
					break;
				case "PHX": // Updated 06-23-2025
					result += "<!-- Updated 06-23-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFAT BULL3 NTELL FRAME EHF J65 BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KFAT OAL4 OAL J80 ILC WINEN Q35 CORKR TENTS BRUSR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KFAT EHF J65 BLH ARLIN4 KPHX\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KFAT OAL BTY J92 BLD COYOT5 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-25-2025
					break;
			}
		break; // End of FAT

		case "FCA":
		case "GPI":
			switch(arvl) {
				case "DFW": // Updated 06-29-2025
					result += "<!-- Updated 06-29-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-18-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KGPI GPI1 CHOTE GTF J13 CYS HGO PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KGPI RIDDG1 MSO DBS BPI OCS HBU J206 ALS CIM TCC TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KGPI GPI1 CHOTE GTF MLS RAP HYS IRW IBAKE VKTRY2 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-29-2025
					break;
				case "LGA": // Updated 03-18-2025
					result += "<!-- Updated 03-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>NRP: <input style=\"width:75%\"; value=\"KGPI GTF LWT MLS J90 ABR COMOS ODI J34 BAE J70 PMM CXR J146 MIP MIP4 KLGA\" readonly>";
					result += "<br/><br/>SE Arrival: <input style=\"width:75%\"; value=\"KGPI GTF LWT MLS J204 DPR J16 FSD Q19 STL J8 IIU Q108 SITTR Q34 GVE PROUD2 KLGA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-18-2025
					result += "<!-- Verified with ATCSCC on 03-18-2025 -->";
					break;
				case "ORD": // Updated 06-29-2025
					result += "<!-- Updated 06-29-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-29-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KGPI GPI1 CHOTE GTF J13 BIL J34 DPR J16 FSD FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KGPI GPI1 CHOTE GTF J36 GEP ZZIPR FYTTE7 KORD\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KGPI RIDDG1 MSO DBS J52 FQF J80 MCI J26 IRK BENKY6 KORD\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-29-2025
					break;
			}
		break; // End of FCA

		case "FLL":
			switch(arvl) {
				case "CLT": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFLL AGERS1 DUCEN Q87 VIYAP CHECR STOCR4 KCLT\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KFLL HROCK2 KPASA Q118 THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/>FL TO NE: <input style=\"width:75%\" value=\"KFLL FEALX2 ETECK GRUBR OGGRE Y436 PITRW CHS STOCR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFLL ORL CRG VIYAP OLBEC SAV FLO RASLN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>A0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL AGERS1 DUCEN Q87 VIYAP CHECR STOCR4 KCLT\" readonly>";
					result += "<br/>F0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL FRSBE2 STYMY Q77 WIGVO PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>G2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL GLADZ4 SHAQQ KNOST DEANR CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>H2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL HROCK2 KPASA Q99 CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>X0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL FEALX2 ETECK GRUBR Y299 SEELO OGGRE Y436 PITRW STOCR4 KCLT\" readonly>";
					break;
				case "DCA": // Updated 06-02-2025 // Mandatory Routes checked
					result += "<!-- Updated 06-02-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFLL AGERS1 DUCEN Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>"; // CDR A0
					result += "<br/><br/>East/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KFLL FEALX2 ETECK GRUBR Y299 SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>"; // CDR X0
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KFLL HROCK2 KPASA Q99 CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>"; // CDR H2
					result += "<br/><br/>West via HVQ<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KFLL HROCK2 KPASA Q118 THRSR VXV TONIO HVQ TRUPS5 KDCA\" readonly>";
					result += "<br/>WATRS<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KFLL FEALX2 ETECK PELCN ROWSY Y494 VIRST Y494 SILLY LYNUS B24 DASHA ATR LAFLN DEALE3 KDCA\" readonly>";
					//result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-02-2025
					result += "<!-- Verified with ATCSCC on 06-02-2025 -->";
					result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL AGERS1 DUCEN Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL HROCK2 KPASA Q99 CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>S2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL SNAPR2 SNAPR HEYDR SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>X0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL FEALX2 ETECK GRUBR Y299 SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>";
					break;
					break;
				case "DFW": // Updated 06-10-2025
					result += "<!-- Updated 06-10-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KFLL BNICE2 DOLIE Y280 REDFN Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KFLL HROCK2 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>"; // CDR H0
					result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KFLL HROCK2 SMELZ Q116 VLKNN YAALL J14 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					// TODO FULL OW
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFLL LAL SZW CEW J2 SJI MCB AEX YEAGR4 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-10-2025
					result += "<!-- Verified with ATCSCC on 06-10-2025 -->";
					result += "<br/>B0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL BNICE2 DOLIE Y280 REDFN Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>B1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL BNICE2 DOLIE Y280 REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>EW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL BNICE2 DOLIE BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL FRSBE2 STYMY Q77 SHRKS CABLO DEFUN J2 CEW J50 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>F3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL FRSBE2 STYMY Q77 SHRKS CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>G3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL HROCK2 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>H1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL HROCK2 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL MAYNR3 MAYNR MARCI REDFN Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL MAYNR3 MAYNR MARCI REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>R2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL REGAE2 REGAE CRUZN TAZER MARCI REDFN Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>R3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL REGAE2 REGAE CRUZN TAZER MARCI REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>X2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL FEALX2 ETECK GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>X3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL FEALX2 ETECK GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN IZAAC YUYUN WHINY4 KDFW\" readonly>";
					break;
				case "ORD": // Updated 07-07-2025
					result += "<!-- Updated 07-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFLL HROCK2 KPASA Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KFLL AGERS1 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE BENBY DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KFLL HROCK2 SMELZ Q116 MEMFS ZESAM J187 FTZ TRTLL6 KORD\" readonly>";
					result += "<br/><br/>East/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KFLL FEALX2 ETECK PELCN Y309 FLRDA OGGRE Y436 DEDDY QUIWE BENBY DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR X0
					result += "<br/>West/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KFLL BNICE2 DOLIE Y280 REDFN Q105 HRV SQS MEM J187 FTZ TRTLL6 KORD\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
					result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
					result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL FRSBE2 STYMY Q77 SHRKS THRSR Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL GLADZ4 SHAQQ KNOST DEANR BRUTS Q118 BONNT VEECK5 KORD\" readonly>";
					result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL HROCK2 KPASA Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR BRUTS Q118 BONNT VEECK5 KORD\" readonly>";
					result += "<br/>X0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL FEALX2 ETECK PELCN Y309 FLRDA OGGRE Y436 DEDDY QUIWE BENBY DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>X2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL FEALX2 ETECK GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
					break;
					break;
				case "PHL": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KFLL FEALX2 ETECK PELCN Y309 FLRDA IDOLS SKARP Q101 KALDA ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/>Non OW: <input style=\"width:75%\" value=\"KFLL AGERS1 DUCEN Q87 JROSS Q135 RREGG Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/><br/>Full OW: <input style=\"width:75%\" value=\"KFLL FEALX2 ETECK PELCN ROWSY Y494 VIRST Y494 SILLY LYNUS B24 DASHA JIIMS4 KPHL\" readonly>";
					result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\" value=\"KFLL FEALX2 ETECK OZENA ROWSY OTTNG HAAYY WICKE DASHA JIIMS4 KPHL\" readonly>";
					result += "<br/>FLORIDA TO NE 3: <input style=\"width:75%\" value=\"KFLL FRSBE2 STYMY Q77 WIGVO IRQ SPA J83 APE JST BOJID4 KPHL\" readonly>";
					result += "<br/>FLORIDA TO NE 4: <input style=\"width:75%\" value=\"KFLL FEALX2 ETECK GRUBR OGGRE Y436 PITRW LCAPE ALWZZ OGRAE Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFLL VACAY ORL CRG SAV CHS J121 SWL KPHL\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>A0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL AGERS1 DUCEN Q87 JROSS Q135 RREGG Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/>G2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>H2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL HROCK2 KPASA Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>S2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL SNAPR2 SNAPR HEYDR FLRDA IDOLS SKARP Q101 KALDA ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/>X0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KFLL FEALX2 ETECK PELCN Y309 FLRDA IDOLS SKARP Q101 KALDA ZJAAY JIIMS4 KPHL\" readonly>";
					break;
			}
		break; // End of FLL

// FNT skipped
// FOE skipped

		case "FSD":
			switch(arvl) {
				case "DFW": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFSD LNK ICT HOFFF VKTRY2 KDFW \" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KFSD OVR J41 MCI HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KFSD OBH MMB MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KFSD OVR MCI RZC FSM WILBR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of FSD

		case "GEG":
			switch(arvl) {
				case "DFW": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KGEG LKT J52 OCS J163 CHE PUB PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KGEG DNJ TWF J15 JNC KD42U TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KGEG MLP J136 BIL GCC BFF GLD GCK MMB HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KGEG LKT J52 OCS J163 CHE PUB PNH UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHX": // Updated 04-30-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-30-2025 CMP -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-30-2025
					result += "<br/><br/>Q Route: <input style=\"width:75%\" value=\"KGEG ZATIP Q73 WINEN Q35 CORKR TENTS BRUSR1 KPHX\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KGEG DOXIE LKT PATIO CORKR TENTS BRUSR1 KPHX\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KGEG GEG J3 LKV J5 FMG J92 BLD WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/><b style=\"color:orange\">If JUNIPER B is active, use: KGEG GEG KS06G POWEL LKV...<\/b>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-30-2025
					result += "<!-- Verified with ATCSCC on 04-30-2025 -->";
					break;
			}
		break; // End of GEG

// GJT skipped
// GNV skipped
// GPT skipped

		case "GRB":
			switch(arvl) {
				case "ORD": // Updated 03-18-2025
					result += "<!-- Updated 03-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL170):</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KGRB FAALZ ERNNY8 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KGRB J101 OBK KORD\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";// No CDRs as of 03-18-2025
					result += "<!-- Verified with ATCSCC on 03-18-2025 -->";
					break;
			}
		break; // End of GRB

		case "GRK":
			switch(arvl) {
				case "DFW": // Updated 03-18-2025
					result += "<!-- Updated 03-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL210):</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KGRK AGJ EGADS KIILO BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KGRK ABI UKW UKW7 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";// No CDRs as of 03-18-2025
					result += "<!-- Verified with ATCSCC on 03-18-2025 -->";
					break;
			}
		break; // End of GRK

		case "GRR":
			switch(arvl) {
				case "DFW": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KGRR PMM STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KGRR VHP PXV J131 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KGRR OBK IRK J26 MCI PER IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>SE Arrival: <input style=\"width:75%\" value=\"KGRR FWA IIU BNA SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KGRR PMM STL RZC FSM FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "CLT": // Updated 07-07-2025
					result += "<!-- Updated 07-07-2025 P -->"
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-07-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KGRR FWA FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KGRR CRL J34 DJB J85 NEALS LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KGRR VIO FWA MIE IIU SKYWA FILPZ4 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-07-2025
					break;
				case "ORD": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KGRR WLTER WYNDE WYNDE2 KORD\" readonly>";
					break;
				case "PHX": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KGRR PMM J94 OBK MZV J18 GCK J96 CIM ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KGRR ADALE J34 BAE J70 GEP J114 ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KGRR PMM GIJ SPI BUM ICT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><input style=\"width:75%\" value=\"KGRR PMM J94 OBK MZV J18 GCK J96 CIM ZUN BUNTR3 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of GRR

		case "GSO":
			switch(arvl) {
				case "DFW": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KGSO TRSHA1 BAWDS VXV MEMFS LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>SE Arrival: <input style=\"width:75%\" value=\"KGSO TRI9 CARWN SPA THRSR VLKNN Q30 IZAAC YUYUN WHINY4 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KGSO TRSHA1 TAARZ BKW IIU J78 FAM FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>Gulf: <input style=\"width:75%\" value=\"KGSO TRI9 CARWN BURGG Q22 CATLN Q56 SJI J2 IAH CRIED WHINY4 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "CLT": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL140):</b>";
					result += "<br/>GSCH1 Route: <input style=\"width:75%\" value=\"KGSO CHSLY CHSLY6 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of GSO

		case "GSP":
			switch(arvl) {
				case "CLT": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL130):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KGSP BANKR BANKR5 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed 03-10-25
					break;
				case "DFW": // Updated 04-29-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-29-2025 M -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KGSP HRS GQO MEM J66 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KGSP ODF RMG VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\"; value=\"KGSP BWALL2 JLENA VXV J46 ARG RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KGSP HRS GQO MEM J66 LIT FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed as of 04-29-2025
					break;
			}
		break; // End of GSP

// GTF skipped

		case "GUC":
			switch(arvl) {
				case "DFW": // Updated 03-18-2025
					result += "<!-- Updated 03-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KGUC HBU J206 ALS PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KGUC HELPS ESPAN CNX J15 CME BGS GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KGUC DUFEL CIM PNH UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed 03-17-25
					break;
			}
		break; // End of GUC

		case "HDN":
			switch(arvl) {
				case "DFW": // Updated 03-18-2025
					result += "<!-- Updated 03-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KHDN CHE FQF J52 HGO PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KHDN CHE FQF J20 LAA TOTOE MMB J98 IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>West: <input style=\"width:75%\"; value=\"KHDN CHE EKR JNC J15 RSK J58 FTI TXO TXO TURKI JOVEM6 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KHDN CHE FQF J52 HGO PNH UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed 03-17-25
					break;
				case "ORD": // Updated 03-18-2025
					result += "<!-- Updated 03-18-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-18-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KHDN CHE CYS J148 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KHDN CHE CYS J148 MCW JVL1 KORD\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of HDN

// HRL skipped

		case "HSV":
			switch(arvl) {
				case "DFW": // Updated 06-05-2025
					result += "<!-- Updated 06-05-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KHSV MSL MEM J66 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KHSV MSL SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>North via ARG<input style=\"width:75%\" value=\"KHSV VISQA ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KHSV MEI MCB AEX DAS IAH J86 SPURS AGJ ACT YEAGR4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-05-2025
				break;
			}
		break; // End of HSV

		case "IAD":
			switch(arvl) {
				case "DFW": // Updated 06-14-2025 // Mandatory Routes checked
					result += "<!-- Updated 06-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAD RNLDI4 OTTTO Q80 FAREV RAMRD Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>NW Arrival: <input style=\"width:75%\" value=\"KIAD RNLDI4 OTTTO Q68 HVQ J78 TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KIAD JDUBB4 RRSIN KIDDO Q22 TWOUP THRSR JAMMR MEI YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/>CLUTCH: <input style=\"width:75%\" value=\"KIAD CLTCH3 MAULS Q40 ALEAN Q66 LITTR MEEOW FEWWW SEEVR4 KDFW\" readonly>";					
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAD LDN COLNS J6 HVQ BWG ARG FSM FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-14-2025
					result += "<!-- Verified with ATCSCC on 06-14-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD RNLDI4 OTTTO Q80 FAREV RAMRD Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>11<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD JERES2 JERES J211 JST HAGUD J60 DJB ROD PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>18<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD MCRAY2 MCRAY Q178 DJB CPONE RBS STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>40<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD JCOBY4 SCOOB GUILD Q409 SESUE PANDY TWINS NOKIE MGMRY GARTS MCB AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>50<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD SCRAM6 GLANC COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>51<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD CLTCH3 MAULS Q40 ALEAN Q66 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>52<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD MCRAY2 MCRAY Q178 LEJOY AIR J80 FYLLS PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>53<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD CLTCH3 MAULS Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>55<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD CLTCH3 MAULS Q40 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>56<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD CLTCH3 MAULS HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD RNLDI4 OTTTO Q176 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>65<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD BUNZZ3 RAMAY Q72 HACKS J149 EMPTY J80 FYLLS PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>D2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD SCRAM6 GLANC COLZI Q52 CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD RNLDI4 OTTTO Q80 ENGRA BNA SQS AEX DAS IAH CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD RNLDI4 OTTTO Q80 ENGRA BNA SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>D6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD SCRAM6 GLANC COLZI Q52 CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/>D7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD RNLDI4 OTTTO Q80 ENGRA BNA SQS AEX DAS IAH CRGER GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/>D8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD RNLDI4 OTTTO Q80 ENGRA BNA SQS YUYUN WHINY4 KDFW\" readonly>";
					break;
				case "CLT": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAD SCRAM6 GLANC AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAD FLUKY HANEY GVE LYH MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>00 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD SCRAM6 GLANC AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>32 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD JCOBY4 SCOOB COUPN CHSLY6 KCLT\" readonly>";
					result += "<br/>40 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD JCOBY4 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>41 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD JCOBY4 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>55 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD CLTCH3 MAULS Q40 FEEDS CITUS WILUM PARQR4 KCLT\" readonly>";
					result += "<br/>60 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD RNLDI4 OTTTO Q80 WISTA LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>63 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD RNLDI4 OTTTO Q68 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>C1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAD JCOBY4 SCOOB GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					break;
			}
		break; // End of IAD

		case "IAH":
			switch(arvl) {
				case "CLT": // Updated 03-18-2025
					result += "<!-- Updated 03-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAH MMUGS4 GUSTI Q22 CATLN BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KIAH LURIC8 ORRTH IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>"; // CDR 1X
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KIAH MMUGS4 GUSTI AWDAD SJI J2 CEW ALLMA PONZE BANKR5 KCLT\" readonly>"; // CDR 3J
					result += "<br/><br/>North via LIT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KIAH INDIE8 TPAKK LIT MEM TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAH LCH5 LSU MCB J22 MEI MGM RMG SOT LIINN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-18-2025
					result += "<!-- Verified with ATCSCC on 03-18-2025 -->";
					result += "<br/>1J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH LURIC8 ORRTH SARKK Q184 MERDN PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>1X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH LURIC8 ORRTH IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>2J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH STRYA8 JBULL SJI J2 CEW ALLMA PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>2X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH STRYA8 DPATY SARKK MERDN JAMMR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>3J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH GUMBY3 GUSTI AWDAD SJI J2 CEW ALLMA PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>3X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH GUMBY3 GUSTI Q22 CATLN BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>4J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH MMUGS4 GUSTI AWDAD SJI J2 CEW ALLMA PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>4X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH MMUGS4 GUSTI Q22 CATLN BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>5J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH HOODO7 HRV SJI J2 CEW ALLMA PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>5X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH HOODO7 HRV Q56 CATLN BESTT JONZE5 KCLT\" readonly>";
					break;
				case "DFW": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAH BLTWY7 CRIED BEREE3 KDFW\" readonly>";
					result += "<br/><br/>DFW WEST: <input style=\"width:75%\" value=\"KIAH BLTWY7 CRIED BEREE3 KDFW\" readonly>";
					result += "<br/>SEEVR2: <input style=\"width:75%\" value=\"KIAH BNDTO6 CRGER GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAH GIFFA1 GIFFA CQY CQY2 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>0N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH BLTWY7 CRIED BEREE3 KDFW\" readonly>";
					result += "<br/>0S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH BLTWY7 CRIED BEREE3 KDFW\" readonly>";
					result += "<br/>1N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH INDIE8 TPAKK JRHED SEEVR4 KDFW\" readonly>";
					result += "<br/>1S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH INDIE8 TPAKK JRHED SEEVR4 KDFW\" readonly>";
					result += "<br/>6N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH RITAA7 PSX THX SAT GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>6S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH RITAA7 PSX THX SAT GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>7N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH BNDTO6 CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>7S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH BNDTO6 CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>8N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH BNDTO6 CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>8S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH BNDTO6 CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					break;
				case "MIA": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAH GUMBY3 LLA LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KIAH KIAH  GUMBY3 GUSTI AWDAD SJI J2 DEFUN FROGZ4 KMIA KMIA\" readonly>";
					result += "<br/>Weekend/Holiday: <input style=\"width:75%\" value=\"KIAH MMUGS4 LLA LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KIAH FLYZA5 KELPP ALGAE MINOW M580 MARCI FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAH LCH5 LSU J2 DEFUN SZW RSW PALMZ2 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>1L (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH LURIC8 ORRTH IZAAC Q30 VLKNN ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/>1Q (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH LURIC8 ORRTH MHZ HRV LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>2L (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH STRYA8 JBULL SJI J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>3L (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH MMUGS4 GUSTI AWDAD SJI J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>3Q (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH MMUGS4 LLA LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>4L (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH MMUGS4 GUSTI AWDAD SJI J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>4Q (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH MMUGS4 LLA LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>5J (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH FLYZA5 ANKRR HRVCI BACCA GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>5L (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH HOODO7 HRV SJI J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>5Q (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH HOODO7 LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					break;
				case "ORD": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAH INDIE8 TPAKK LIT J180 FTZ TRTLL6 KORD\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KIAH STYCK8 WTSON BYP TUL J87 IRK BENKY6 KORD\" readonly>";
					result += "<br/>East: <input style=\"width:75%\" value=\"KIAH MMUGS4 LCH J22 MCB MEI VUZ GLAZR Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAH ELD1 ELD J29 MEM IIU FWA KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>0B (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH LURIC8 HAWES SUTTN J29 CARIN MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>0K (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH LURIC8 HAWES SUTTN J29 CARIN MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>0N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH STYCK8 WTSON BYP TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>";
					result += "<br/>0T (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH INDIE8 INDIE TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>1X (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH INDIE8 TPAKK LIT J180 FTZ TRTLL6 KORD\" readonly>";
					result += "<br/>2X (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH STRYA8 DPATY SQS FTZ TRTLL6 KORD\" readonly>";
					result += "<br/>4X (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH MMUGS4 LCH LSU MCB SQS FTZ TRTLL6 KORD\" readonly>";
					result += "<br/>7X (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH BNDTO6 CRGER JCT ABI IRW SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/>8X (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH BNDTO6 CRGER JCT ABI IRW SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/>9X (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH STYCK8 DOLEY MLC RZC SGF WELTS TRTLL6 KORD\" readonly>";
					break;
				case "PHL": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAH MMUGS4 GUSTI Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KIAH INDIE8 TPAKK ELD J29 CARIN MEMFS Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/><br/>BNA: <input style=\"width:75%\" value=\"KIAH LURIC8 HAWES SUTTN J29 MEM BNA SWAPP Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>PHL NO PAATS: <input style=\"width:75%\" value=\"KIAH LURIC8 ORRTH MEM PXV CREEP BLISS J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>VUZ: <input style=\"width:75%\" value=\"KIAH MMUGS4 GUSTI SJI Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAH LCH5 LSU SJI Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>0B: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH LURIC8 HAWES SUTTN J29 CARIN MEMFS Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>0D: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH STYCK8 WTSON BYP TUL J87 JOT J30 TRAKK J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>1D: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH INDIE8 TPAKK TUL J87 JOT J30 TRAKK J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>1E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH INDIE8 TPAKK TUL J87 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>2X: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH STRYA8 DPATY SQS MEMFS HENSY Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>3C: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH INDIE8 TPAKK DHART Q31 PXV ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>3M (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH MMUGS4 GUSTI Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>4C (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH MMUGS4 GUSTI AWDAD SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>4G: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH MMUGS4 GUSTI Q22 CATLN FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>4M (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH MMUGS4 GUSTI Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>5X (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH HOODO7 HRV Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					break;
				case "PHX": // Updated 06-03-2025 // Mandatory Routes checked
					result += "<!-- Updated 06-03-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIAH BNDTO6 CRGER ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KIAH STYCK8 DOLEY FUZ HNKER CNX ZUN EAGUL6 KPHX\" readonly>"; // CDR 9X
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KIAH RITAA7 PSX CARTI HFMAN DLF ELP DRRVR PINNG1 KPHX\" readonly>"; // CDR 6X
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-03-2025
					result += "<!-- Verified with ATCSCC on 06-03-2025 -->";
					result += "<br/>0G<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH RITAA7 PSX THX OBGIY AGNID VYLLA TUS HOTTT PINNG1 KPHX\" readonly>";
					result += "<br/>0W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH RITAA7 PSX THX OBGIY AGNID CUS DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>6X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH RITAA7 PSX CARTI HFMAN DLF ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>7X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH PITZZ5 CRGER JCT ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>8X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH BNDTO6 CRGER JCT ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>9X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIAH STYCK8 DOLEY FUZ HNKER CNX ZUN EAGUL6 KPHX\" readonly>";
					break;
			}
		break; // End of IAH

		case "ICT":
			switch(arvl) {
				case "DFW":
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KICT JAMEY PER IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KICT HUSKA TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KICT JAMEY PER HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KICT PER IRW FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of ICT

		case "ILM":
			switch(arvl) {
				case "CLT": // Updated 06-02-2025
					result += "<!-- Updated 06-02-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL200):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KILM OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KILM ISO RDU SDAIL CHSLY6 KCLT\" readonly>"; // Based on CDR 32
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KILM CRE FLLGG STOCR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV (Max FL220)</b>";
					result += "<br/><input style=\"width:75%\" value=\"KILM LAYZE LIB MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-02-2025
					result += "<!-- Verified with ATCSCC on 06-02-2025 -->";
					result += "<br/>32<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KILM ISO V45 RDU SDAIL CHSLY6 KCLT\" readonly>";
					result += "<br/>C2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KILM OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>C3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KILM ISO V45 RDU SDAIL CHSLY6 KCLT\" readonly>";
					break;
				case "DFW": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KILM FLO KOFRR ODF GQO MEM J66 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>SE Arrival: <input style=\"width:75%\" value=\"KILM FLO CAE IRQ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KILM RDU PSK IIU J112 FAM RZC AXXEE SEEVR4 KDFW\" readonly>";
					result += "<br/>Gulf: <input style=\"width:75%\" value=\"KILM CHS SAV ALLMA CEW MCB PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KILM FLO ODF GQO MEM J66 LIT FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of ILM

		case "IND":
			switch(arvl) {
				case "CLT": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIND DAWNN1 IIU SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIND DAWNN1 IIU VXV LIINN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>AP (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND MAREO5 BDOCK APE GZG BTSEY2 KCLT\" readonly>";
					result += "<br/>PR (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND DAWNN1 IIU VXV LIINN3 KCLT\" readonly>";
					result += "<br/>SL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND ROCKY1 STL Q19 HITMN VXV LIINN3 KCLT\" readonly>";
					result += "<br/>SW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND OOM5 PXV HITMN VXV LIINN3 KCLT\" readonly>";
					break;
				case "DCA": // Updated 04-10-2025
					result += "<!-- Updated 04-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIND MAREO5 BDOCK DCT CLNTN DCT BUCKO FRDMM6 KDCA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-10-2025
					result += "<!-- Verified with ATCSCC on 04-10-2025 -->";
					result += "<br/>BU<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND DAWNN1 IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>KK<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND OKK FWA DJB J34 BUCKO FRDMM6 KDCA\" readonly>";
					result += "<br/>PR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND MAREO5 BDOCK APE J30 LUISE FRDMM6 KDCA\" readonly>";
					break;
				case "DFW": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIND ROCKY1 STL FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KIND OOM5 PXV J131 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>NW Arrival: <input style=\"width:75%\" value=\"KIND ROCKY1 STL SGF TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/>SE Arrival: <input style=\"width:75%\" value=\"KIND OOM5 PXV J29 MEM J35 SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/>DFW WEST: <input style=\"width:75%\" value=\"KIND OOM5 PXV ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIND OOM5 PXV J131 LIT FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>BG (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND DAWNN1 MYS RAMRD Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>BT (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND MEARZ7 BVT J89 CADIZ JOT MZV IRK J87 TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>PR (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND ROCKY1 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>SQ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND DAWNN1 MYS BWG IZAAC YUYUN BEREE3 KDFW\" readonly>";
					break;
				case "LAX": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIND ROCKY1 SPI J80 MCI J24 SLN J102 ALS J44 RSK J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KIND MEARZ7 BVT J89 CADIZ JOT J60 DBL CHESZ Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KIND OOM5 PXV J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/><br/>GTH 2: <input style=\"width:75%\" value=\"KIND DAWNN1 MYS RAMRD Q68 LITTR TXK BYP UKW GTH CNX J74 SJN J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					//result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "MIA": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIND DAWNN1 IIU Q79 THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KIND DAWNN1 IIU HMV VAN CHS CAKET Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KIND VHP J24 HVQ BKW ROA RDU ILM WAALT AR17 BAHAA HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIND DAWNN1 IIU VXV AMG TAY RSW PALMZ2 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>SL: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND ROCKY1 STL Q19 HITMN ACORI FROGZ4 KMIA\" readonly>";
					break;
				case "ORD": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIND MEARZ7 MEARZ BRATN BONNT VEECK5 KORD\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KIND ROCKY1 SPI TRICH BENKY6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIND MEARZ7 MZZ OXI KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>BU (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND DAWNN1 IIU FLM ROD FWA WATSN4 KORD\" readonly>";
					result += "<br/>DQ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND MAREO5 BDOCK ROD FWA KORD\" readonly>";
					result += "<br/>PR (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND BONNT VEECK5 KORD\" readonly>";
					break;
				case "PHL": // Updated 06-08-2025
					result += "<!-- Updated 06-08-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KIND MAREO5 BDOCK JST BOJID4 KPHL\" readonly>"; // CDR PR
					result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KIND DAWNN1 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>"; // CDR BU
					result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KIND MEARZ7 MZZ FWA DJB J60 PSB BOJID4 KPHL\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-08-2025
					result += "<!-- Verified with ATCSCC on 06-08-2025 -->";
					result += "<br/>BU<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND DAWNN1 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>CP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND ROCKY1 SPI BDF GIJ J146 CXR EWC HAR BOJID4 KPHL\" readonly>";
					result += "<br/>KK<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND OKK FWA DJB Q178 AVERE J152 HAR BOJID4 KPHL\" readonly>";
					result += "<br/>PR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND MAREO5 BDOCK JST BOJID4 KPHL\" readonly>";
					result += "<br/>SW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND OOM5 PXV J73 BNA BURGG Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					break;
				case "PHX": // Updated 06-05-2025
					result += "<!-- Updated 06-05-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-05-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KIND ROCKY1 SPI J80 MCI J24 SLN J96 CIM ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KIND OOM5 PXV J78 FAM J98 SGF PER MMB FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KIND MEARZ7 BVT J89 CADIZ JOT MZV J18 GCK CIM ZUN EAGUL6 KPHX\" readonly>"; // CDR BT
					// result += "<br/><br/>BUM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KIND ROCKY1 STL J134 ICT LBL FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>South via EWM: <input style=\"width:75%\" value=\"KIND DAWNN1 MYS LAJUG Q68 LITTR TXK J131 FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>North via FQF: <input style=\"width:75%\" value=\"KIND ROCKY1 SPI IRK LNK J60 HCT J128 HBU J10 RSK J161 ZUN EAGUL6 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-05-2025
					result += "<!-- Verified with ATCSCC on 06-05-2025 -->";
					result += "<br/>BT<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND MEARZ7 BVT J89 CADIZ JOT MZV J18 GCK CIM ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>BU<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND DAWNN1 DAWNN BWG ARG J46 TUL MMB FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>SW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KIND OOM5 PXV J78 FAM J112 BUM ICT LBL FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					break;
			}
		break; // End of IND

		case "JAC":
			switch(arvl) {
				case "CLT": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAC DIVYD2 BOY HIKOX DDY PWE STJ STL PXV OLSIE COMDY FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KJAC ALPIN4 BPI BOY CZI J82 FSD J16 MCW MONNY BDF ERECO FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KJAC ALPIN4 BPI SWEAT CYS GLD J182 ICT EOS ARG BNA METWO COMDY FILPZ4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAC DIVYD2 DNW BRK EZEEE MDANO JOVEM6 KDFW\" readonly>";
					result += "<br/><br/>NE Arrival: <input style=\"width:75%\" value=\"KJAC DIVYD2 DNW LAR GLD J182 ICT HITUG BRDJE5 KDFW\" readonly>";
					result += "<br/>SW Arrival: <input style=\"width:75%\" value=\"KJAC DIVYD2 DNW BPI JNC J15 CME BGS GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAC ALPIN4 BPI OCS CHE PUB TBE PNH SPS UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "LAX": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAC ALPIN4 KICNE FFU J9 MLF J107 BLD J60 HEC BASET5 KLAX\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KJAC ALPIN4 KICNE MLD J158 MVA FRA AVE MOOR4 KLAX\" readonly>";
					result += "<br/>East: <input style=\"width:75%\" value=\"KJAC GEYSR6 NALSI OCS JNC TBC DRK J231 TNP SEAVU2 KLAX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					//result += "<br/><br/><b>CDRS</b>";
					break;
				case "ORD": // Updated 01-10-2025
					result += "<!-- Updated 01-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAC ALPIN4 BPI SWEAT KURSE ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KJAC BOY J32 ABR GEP ZZIPR FYTTE7 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAC OCS CHE PUB GCK SLN J96 IRK BDF8 KORD\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of JAC

// JAN skipped

		case "JAX":
			switch(arvl) {
				case "CLT": // Updated 02-01-2025
					result += "<!-- Updated 02-01-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAX BRSTL1 BAXLY PONZE BANKR5 KCLT\" readonly>";
 					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KJAX CROSB2 WISPR CHECR STOCR4 KCLT\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KJAX JETIN2 CAPPS FEONA THRSR BESTT JONZE5 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "DFW":
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAX JETIN2 CAPPS CABLO DEFUN J2 CEW AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KJAX BRSTL1 ALLMA MGM MEI MLU YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>Gulf Coast: <input style=\"width:75%\" value=\"KJAX JETIN2 CAPPS CABLO DEFUN J2 CEW SJI Q56 HRV KCEEE TKNIQ IAH CRIED BEREE3 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAX TAY CEW LCH DAS IAH CWK AGJ ACT YEAGR4 KDFW\" readonly>";
					//result += "<br/><br/><b>CDRS</b>";
					break;
				case "DCA": // Updated 01-11-2025
					result += "<!-- Updated 01-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAX CROSB2 WISPR JROSS Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KJAX BRSTL1 ALLMA THRSR BOBBD TONIO Q34 SITTR TRUPS5 KDCA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "MIA": // Updated 01-11-2025
					result += "<!-- Updated 01-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAX EXBOX2 EXBOX PRMUS DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/><br/>W Coast: <input style=\"width:75%\" value=\"KJAX JETIN2 JAYJA DOFFY ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAX SAWGY3 OMN TRV ANNEY4 KMIA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHL": // Updated 01-11-2025
					result += "<!-- Updated 01-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAX CROSB2 WISPR JROSS Q135 RREGG Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KJAX BRSTL1 ALLMA ODF KONGO Q71 EMNEM JST BOJID4 KPHL\" readonly>";
					result += "<br/><br/>FLORIDA TO NE 1: <input style=\"width:75%\" value=\"KJAX CROSB2 WISPR JROSS Q87 ALWZZ OGRAE Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAX SAV KONEY JROSS ELMSZ RAPZZ ILM ISO ORF SWL VCN9 KPHL\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHX": // Updated 01-11-2025
					result += "<!-- Updated 01-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJAX JETIN2 CAPPS CABLO DEFUN J2 CEW J50 ABI J66 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KJAX BRSTL1 ALLMA VUZ J14 LIT J6 ZUN EAGUL6 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of JAX

		case "JFK": // TODO double check JFK destinations
			switch(arvl) {
				case "AUS": // Updated 05-29-2025
					result += "<!-- Updated 05-29-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 LITTR TXK BROBB WINDU SEWZY6 KAUS\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KJFK RBV Q430 LARRI J110 VHP J110 STL FSM BROBB WINDU SEWZY6 KAUS\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED DFENC Q109 RIELE MCN MGM AEX J50 LFK WEEED WLEEE7 KAUS\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GVE ALEAN VXV SQS SWB LUKKN WLEEE7 KAUS\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-29-2025
					result += "<!-- Verified with ATCSCC on 05-29-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK COATE Q436 HERBA JHW Q29 KLYNE PXV J131 LIT TXK WINDU SEWZY6 KAUS\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DJB PXV J131 LIT TXK WINDU SEWZY6 KAUS\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DANNR RAV J64 MAINE PXV J131 LIT TXK WINDU SEWZY6 KAUS\" readonly>";
					result += "<br/>75<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GVE LYH COLZI Q52 CHOPZ MGMRY LCH LUKKN WLEEE7 KAUS\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 AIR J110 FYLLS PXV J131 LIT TXK WINDU SEWZY6 KAUS\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q935 HOCKE BAE DBQ IRK J87 TUL J25 FUZ WINDU SEWZY6 KAUS\" readonly>";
					result += "<br/>AR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 KALDA Q131 WAALT Y289 BAHAA Y438 KOOKK CAMJO CABLO DEFUN J2 LCH LUKKN WLEEE7 KAUS\" readonly>";
					result += "<br/>AZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK SHIPP Y488 STERN Y493 BAHAA Y438 KOOKK CAMJO CABLO DEFUN J2 LCH LUKKN WLEEE7 KAUS\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 LITTR TXK WINDU SEWZY6 KAUS\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 AEX LFK WEEED WLEEE7 KAUS\" readonly>";
					result += "<br/>WA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED GUILD Q409 MRPIT CEELY Q172 YUTEE IRQ NOKIE MGMRY LCH LUKKN WLEEE7 KAUS\" readonly>";
					break;
				case "CLT": // Updated 05-27-2025
					result += "<!-- Updated 05-27-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KJFK RBV Q430 AIR HVQ LNDIZ PARQR4 KCLT\" readonly>"; // CDR 80
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>"; // CDR KA
					result += "<br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KJFK SHIPP Y488 STERN Y493 TUBBS DIZNY Y436 PITRW STOCR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 MOL LYH MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-27-2025
					result += "<!-- Verified with ATCSCC on 05-27-2025 -->";
					result += "<br/>48<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 MOL AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DJB J85 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 AIR HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>KA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>NE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK NEION Q232 DARBO J49 PSB J60 DJB ROD FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>PS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 PSB HVQ LNDIZ PARQR4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 06-02-2025
					result += "<!-- Updated 06-02-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 LITTR MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KJFK RBV Q430 AIR J80 VHP J24 STL J8 SGF HITUG SEEVR4 KDFW\" readonly>"; // Based on CDR U8
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 WINAP YUYUN BEREE3 KDFW\" readonly>"; // Based on CDR CQ
					// result += "<br/>NO J6 1: <input style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 ALEAN VXV J46 SOPIE Q68 LITTR MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK RBV Q430 AIR J80 VHP J110 STL J8 SGF J98 IRW FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-02-2025
					result += "<!-- Verified with ATCSCC on 06-02-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK COATE Q436 HERBA JHW Q29 KLYNE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 ALEAN Q66 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DJB PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DANNR RAV J64 MAINE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>75<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GVE LYH COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 AIR J110 FYLLS PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>B6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GVE LYH COLZI Q52 CHOPZ THRSR VUZ J14 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>B7<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 COLNS Q176 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>B9<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED GUILD Q409 MRPIT CEELY Q172 YUTEE IRQ VUZ J14 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM Q84 JHW Q29 KLYNE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>CH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED GUILD Q409 SESUE PANDY TWINS NOKIE FRDDO ARNNY Q184 SARKK MLU YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>CQ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>J5<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 RAMRD SQS AEX LFK CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 RAMRD ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>J8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED GUILD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC AEX LFK CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>J9<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED GUILD Q409 SESUE PANDY TWINS NOKIE MGMRY LCH J2 IAH CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>KA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED GUILD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>NE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK NEION Q232 DARBO J49 PSB J60 DJB PXV ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>Q6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 RAMRD SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>Q7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DJB RINTE Q139 IIU BWG SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>U6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 JOT MZV IRK MCI ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>U8<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 AIR J80 VHP J24 STL BUM ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>UN<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 JOT MZV IRK MCI ICT IRW HOFFF JOVEM6 KDFW\" readonly>";
					break;
				case "LAS": // Updated 01-12-2025
					result += "<!-- Updated 01-12-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK COATE Q436 HERBA JHW J554 GIJ J146 JOT J26 BDF J64 LMN PWE GLD J146 DVC TYEGR CHOWW3 KLAS\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KJFK COATE Q436 RAAKK Q438 RUBYY DABJU J36 BAE J16 MCW J148 CYS EKR J100 SAKES GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 LITTR TXK J131 FUZ J4 INK J50 ELP J86 INW HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>ABI: <input style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 BFOLO FIBER HRISN Q30 IZAAC EIC J4 ABI CME J15 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>LNK: <input style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>MCI WEST: <input style=\"width:75%\" value=\"KJFK RBV Q430 AIR J80 MCI SLN J102 ALS J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>MEX OBGIY WEST 2: <input style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX THX PNG AGNID VYLLA J92 DRK ELLDA RKSTR4 KLAS\" readonly>";
					result += "<br/>NY DUCT WEST (FL220 to PSB): <input style=\"width:75%\" value=\"KJFK NEION Q232 DARBO J49 PSB J60 DJB J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>ONL: <input style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q935 HOCKE GRB GEP ONL J114 DVV J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>ROCKIES SOUTH 1: <input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 RAMRD ARG TUL MMB FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>SLN: <input style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DANNR RAV J64 BDF STJ SLN J102 ALS J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>STL: <input style=\"width:75%\" value=\"KJFK RBV Q430 AIR J110 STL J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>6F (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ J78 FAM SGF ICT GCK J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>95 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q935 HOCKE BAE J16 MCW J148 CYS EKR J100 SAKES GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>EM (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC EIC J4 ABI J66 EWM DMN GREBE J86 INW HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>EP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT FUSCO CNX HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>G1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 LITTR TXK BYP UKW HNKER TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>LM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED GUILD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK SPS J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>MC (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 AIR J80 MCI J24 SLN J102 ALS J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>NE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK NEION Q232 DARBO J49 PSB J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>NL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q935 HOCKE GRB GEP ONL J114 DVV J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>P1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 RAMRD ARG FSM IRW PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>P2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 ALEAN Q66 LITTR KOMMA IRW J6 PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>ST (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 AIR J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					break;
				case "LAX": // Updated 04-28-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-28-2025 MP -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-28-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KJFK RBV Q430 AIR J80 MCI J24 SLN J102 ALS J44 RSK J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/><br/>South of Mtn Wave: <input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ J78 FAM J98 SGF PER MMB FTI J8 GUP INW DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>ZKC Avoid via FSM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 RAMRD ARG FSM IRW PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>"; // CDR P1
					result += "<br/>ZME Avoid via FAM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ J78 FAM SGF LBL CIM J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>"; // CDR 6F
					result += "<br/><b style=\"color:orange\">South routes all go through ZDC ..RVB Q430 SAAME J6...<\/b>";
					result += "<br/><br/>North/ZKC Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DANNR RAV J64 LMN PWE HLC J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>"; // CDR 64
					result += "<br/>North via BAE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KJFK COATE Q436 RAAKK Q438 RUBYY DABJU J36 BAE MCW ONL J114 DVV ZAKRY Q88 HAKMN ANJLL4 KLAX\" readonly>"; // CDR CW
					result += "<br/><br/>MEX OBGIY WEST 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>"; // CDR LV
					//result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-28-2025
					result += "<!-- Verified with ATCSCC on 04-28-2025 -->";
					result += "<br/>1D<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY UBTIX ULAMO STNRD COLDD EXHOS SWTHN DNW FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>1K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE KENPA CESNA ONL EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE NOSIK ZOHAN LAAKE ONL EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>1R<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON KAPUX ROTMA COLDD EXHOS SWTHN DNW FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q917 SSM APUNY OGSIQ SWTHN DNW FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>1Y<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON AGLIN GFK HIDEL KENPE IDA TCH FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>2C<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY POLTY UBTIX ULAMO CHICA AGLIN WILTN SWTHN DNW FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>2D<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY UBTIX ULAMO STNRD COLDD FAR MOTLY EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>2K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON KENPA CESNA ONL EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON SIKBO NOSIK ZOHAN LAAKE ONL EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON SSM APUNY OGSIQ SWTHN DNW FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>2Y<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON BURWA AGLIN GFK HIDEL KENPE IDA TCH FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK COATE Q436 RAAKK Q438 RUBYY PMM OBK IOW J60 HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>3C<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM PBERG BOSAM OLASI PEKVO ULAMO CHICA AGLIN WILTN SWTHN DNW FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>3K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON SIKBO KENPA CESNA ONL EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>3R<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON KAPUX ROTMA COLDD FAR MOTLY EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON BURWA SSM APUNY OGSIQ SWTHN DNW FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>3Y<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY POLTY AGLIN GFK HIDEL KENPE IDA TCH FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>47<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM Q822 FNT OBK IOW J60 HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>4R<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY LETAK ROTMA COLDD FAR MOTLY EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY POLTY SSM APUNY OGSIQ SWTHN DNW FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>5K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE KENPA CESNA EXHOS SWTHN DNW FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DANNR RAV J64 LMN PWE HLC J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/>6F<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ J78 FAM SGF LBL CIM J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>6K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON KENPA CESNA EXHOS SWTHN DNW FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON SSM APUNY TTAIL MOTLY EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>6T<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 RAMRD ARG TUL MMB FTI J8 GUP J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>8N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME BRNAN Q42 LCOLN IRK J26 MCI J24 SLN J102 ALS J44 RSK J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/>8X<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BEETS HACKS J149 EMPTY J80 MCI J24 SLN J102 ALS J44 RSK J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q935 HOCKE BAE J16 MCW J148 CYS EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>CW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK COATE Q436 RAAKK Q438 RUBYY DABJU J36 BAE MCW ONL J114 DVV ZAKRY Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>EM<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC EIC J4 ABI J66 EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>EP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT FST ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>G1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 LITTR TXK BYP UKW HNKER CNX J74 SJN J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC SUTTN J52 TXK BYP UKW HNKER CNX J74 SJN J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>GF<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q917 SSM FAR ABR EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 COLNS Q176 BUM ICT LBL FTI J8 GUP INW DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>LM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED GUILD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK SPS J72 ABQ J6 DRK CGNEY ANJLL4 KLAX\" readonly>";
					result += "<br/>LV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>NE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK NEION Q232 DARBO J49 PSB J60 HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>NL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q935 HOCKE GRB GEP ONL J148 CYS EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 RAMRD ARG FSM IRW PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>P2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 ALEAN Q66 LITTR KOMMA IRW J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 AIR J80 MCI J24 SLN J102 ALS J44 RSK J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 AIR J110 STL BUM ICT LBL CIM J134 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>YS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON BURWA OVORA GABOV HML OGSIQ SWTHN DNW FFU J9 MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					break;
				case "MIA": // Updated 01-11-2025
					result += "<!-- Updated 01-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 KALDA Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KJFK SHIPP Y488 STERN Y493 JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 MOL IRQ MCN HONID FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>ATLANTIC SOUTH 1: <input style=\"width:75%\" value=\"KJFK SHIPP Y488 OHRYN AZEZU CROAK METZZ OOONN WHOOS WEAKK JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>VACAPES SOUTH 1: <input style=\"width:75%\" value=\"KJFK SHIPP Y488 OHRYN AZEZU CROAK METZZ OOONN WHOOS WEAKK JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK WAVEY EMJAY J174 ORF J121 CHS CAKET KENLL OMN KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>AZ (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK SHIPP Y488 STERN Y493 JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>J1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED GUILD Q409 ISUZO BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>KA (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>SA (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>TR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>WH (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WHITE Q409 CRPLR PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>WR (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WHITE Q409 CRPLR BGBRD Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>ZC (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 ZJAAY Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>ZW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK WAVEY EMJAY Q167 KALDA Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					break;
				case "ORD": // Updated 04-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-19-2025 M -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK COATE Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/><br/>South <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 EYTEE J149 FWA WATSN4 KORD\" readonly>"; // CDR X6
					result += "<br/>North <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>"; // CDR 1N
					result += "<br/>NW Arr <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE KENPA GRB SHIKY FYTTE7 KORD\" readonly>"; // CDR KS
					result += "<br/><br/>GREKI 2 <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM Q822 FNT WYNDE2 KORD\" readonly>"; // CDR CA
					result += "<br/>NY DUCT WEST (FL220 to PSB) <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KJFK NEION Q232 DARBO J49 PSB J60 DJB FWA KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK FJC PSB J60 DJB KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
					result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
					result += "<br/>1K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>2K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON SIKBO NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>3K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON SIKBO KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DJB NOLNN Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>61<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 PSB YARRK EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DANNR RAV Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 AIR J80 EMPTY J149 FWA WATSN4 KORD\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL J95 CFB RAAKK Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM Q822 FNT WYNDE2 KORD\" readonly>";
					result += "<br/>DJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 CANCR RRONS Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>G3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM Q822 GONZZ FARGN CHAAP Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>GS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 COLNS Q176 HNN FLM J24 VHP BONNT VEECK5 KORD\" readonly>";
					result += "<br/>JV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON YEE TVC GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>KF<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON SIKBO KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>KS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>NE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK NEION Q232 DARBO J49 PSB J60 DJB NOLNN Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>NZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK COATE Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>X6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 EYTEE J149 FWA WATSN4 KORD\" readonly>";
					result += "<br/>ZS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON SIKBO NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					break;
				case "PHL": // Updated 07-08-2025
					result += "<!-- Updated 07-08-2025 -->";
					result += "<br/><br/><b>Div Recovery (Max FL080)</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK DIXIE V16 VCN V184 OOD KPHL\" readonly>";
					result += "<br/><br/>TEC: <input style=\"width:75%\" value=\"KJFK DIXIE T224 JIIMS KPHL\" readonly>";
					break;
				case "PHX": // Updated 01-11-2025
					result += "<!-- Updated 01-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK RBV Q430 AIR J110 STL BUM ICT LBL FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KJFK COATE Q436 RAAKK Q438 RUBYY DABJU KG78M KG75I KP72G KP66C KD63A KD57Y PUB ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 LITTR MEEOW J66 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>MEX OBGIY WEST 2: <input style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX THX PNG AGNID VYLLA TUS HOTTT PINNG1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ J78 PXV J131 LIT J66 EWM SSO SUNSS8 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-21-2025
					result += "<!-- Verified with ATCSCC on 02-21-2025 -->";
					result += "<br/>1D<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY UBTIX ULAMO STNRD COLDD EXHOS SWTHN DNW FFU BCE CORKR MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>1K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE KENPA CESNA ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE NOSIK ZOHAN LAAKE ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>1R<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON KAPUX ROTMA COLDD EXHOS SWTHN DNW FFU BCE CORKR MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q917 SSM APUNY OGSIQ SWTHN DNW FFU BCE CORKR MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>2C<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY POLTY UBTIX ULAMO CHICA AGLIN WILTN SWTHN DNW FFU BCE CORKR MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>2D<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY UBTIX ULAMO STNRD COLDD FAR MOTLY ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>2K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON KENPA CESNA ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON SIKBO NOSIK ZOHAN LAAKE ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON SSM APUNY OGSIQ SWTHN DNW FFU BCE CORKR MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>36<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK COATE Q436 HERBA JHW Q29 CREEP J110 STL BUM ICT LBL FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>3C<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM PBERG BOSAM OLASI PEKVO ULAMO CHICA AGLIN WILTN SWTHN DNW FFU BCE CORKR MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>3K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON SIKBO KENPA CESNA ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>3R<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON KAPUX ROTMA COLDD FAR MOTLY ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON BURWA SSM APUNY OGSIQ SWTHN DNW FFU BCE CORKR MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 ALEAN VXV BNA J46 TUL J78 ABQ J18 PXR KPHX\" readonly>";
					result += "<br/>4R<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY LETAK ROTMA COLDD FAR MOTLY ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY POLTY SSM APUNY OGSIQ SWTHN DNW FFU BCE CORKR MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>5K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE KENPA CESNA EXHOS SWTHN DNW FFU BCE CORKR MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 LNK HLC ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DANNR RAV J64 LMN PWE HLC J64 PUB ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>6F<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ J78 FAM SGF LBL FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>6K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON KENPA CESNA EXHOS SWTHN DNW FFU BCE CORKR MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM NOVON SSM APUNY TTAIL MOTLY ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>75<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GVE LYH COLZI Q52 CHOPZ THRSR MEM J66 LIT J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 AIR J80 MCI J24 SLN J96 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>8N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME BRNAN Q42 LCOLN IRK J26 MCI J24 SLN J96 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>8X<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BEETS HACKS J149 EMPTY J80 VHP J110 BUM ICT LBL FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 KELIE JHW Q29 CREEP J110 STL BUM ICT LBL FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>CW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK COATE Q436 RAAKK Q438 RUBYY DABJU J36 BAE MCW ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>E1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DANNR RAV J64 LMN PWE HLC J64 PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>E2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DANNR RAV J64 LMN PWE HLC J64 RSK FLG DUTEY MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>EM<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC EIC J4 ABI J66 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>EP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>G1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 LITTR TXK BYP UKW HNKER TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>G2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC SUTTN J52 TXK BYP UKW HNKER TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>GF<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q917 SSM FAR SNY ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 COLNS Q176 BUM ICT LBL FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>LV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 COPES Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>NE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK NEION Q232 DARBO J49 PSB J60 LNK HLC J64 PUB ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>NL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q935 HOCKE GRB GEP ONL LBF ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 RAMRD ARG FSM IRW PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>P2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 ALEAN Q66 LITTR KOMMA IRW J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 AIR J110 STL BUM ICT LBL FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					break;
				case "SFO": // Updated 01-11-2025
					result += "<!-- Updated 01-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q935 HOCKE GRB GEP ABR J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
					result += "<br/><br/>Mid: <input style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 IOW LNK J60 DBL J80 MLF KATTS OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ J78 DRK J6 AVE BSR BSR3 KSFO\" readonly>";
					result += "<br/><br/>BUM: <input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 COLNS Q176 BUM J110 GCK J28 MLF KATTS OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>CAN SSM WEST 1: <input style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q917 SSM APUNY OGSIQ SWTHN IDA BAM LLC LEGGS BDEGA4 KSFO\" readonly>";
					result += "<br/>CHICA WEST 2: <input style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY POLTY JUNIS AGLIN WILTN SWTHN IDA BAM LLC LEGGS BDEGA4 KSFO\" readonly>";
					result += "<br/>ELP: <input style=\"width:75%\" value=\"KJFK RBV Q430 BYRDD J48 CSN FANPO Q40 NIOLA MCB LCH IAH J86 ELP J86 BLD J92 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>FAM: <input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ J78 FAM J98 SGF ICT GCK J28 MLF KATTS OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>GTH 1: <input style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 LITTR TXK BYP UKW GTH TCC J76 FTI J58 MLF ILC RUMPS OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>HLC: <input style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DANNR RAV J64 LMN PWE HLC J80 MLF ILC RUMPS OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>MCI WEST: <input style=\"width:75%\" value=\"KJFK RBV Q430 LARRI J110 AIR J80 MCI J80 MLF ILC RUMPS OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KJFK COATE LVZ SFK JHW SVM PMM OBK DSM OBH SNY CHE MTU DTA MVA MOD9 KSFO\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>47 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM HANAA Q816 HOCKE BAE J16 FSD J82 CZI J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
					result += "<br/>4R (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GREKI JUDDS CAM BUGSY LETAK ROTMA COLDD FAR MOTLY CZI J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
					result += "<br/>5K (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE KENPA EXHOS SWTHN IDA BAM LLC LEGGS BDEGA4 KSFO\" readonly>";
					result += "<br/>60 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK DEEZZ5 CANDR J60 DBL J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>8N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME BRNAN Q42 LCOLN IRK J26 MCI J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>8X (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 BEETS HACKS J149 EMPTY J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>BW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 RAMRD ARG IRW PNH RSK J58 ILC J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>G1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK RBV Q430 SAAME J6 HVQ Q68 LITTR TXK BYP UKW HNKER TCC J76 FTI J58 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>NE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK NEION Q232 DARBO J49 PSB J60 DBL J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>NL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 WOZEE Q935 HOCKE GRB GEP ONL J148 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>PH (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KJFK GAYEL Q818 DERLO HOCKE GRB GEP J70 ABR J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
					break;
			}
		break; // End of JFK

		case "LAS":
			switch(arvl) {
				case "CLT": // Updated 04-08-2025
					result += "<!-- Updated 04-08-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-08-2025
					result += "<br/><br/>NRP South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J6 IRW FSM ARG BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/>NRP North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC PUB J28 GCK J110 BUM J112 FAM BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South via SSO<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAS RASLR3 ZAYNE DRK SSO J4 FUZ ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>North via GLD<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC J146 GLD J80 VHP J24 FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/>BNA: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J6 IRW FSM MEMFS Q34 HITMN TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/>MGM 1: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 ELP J50 ABI J4 FUZ Q184 ARNNY FRDDO THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>MGM 2: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 IAH J2 LCH J138 SJI Q56 CATLN MGMRY THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>VUZ: <input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC PUB J28 GCK EOS MAW BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAS HOOVR8 DVC J146 HBU J28 GCK J110 BUM J112 FAM CNG BNA J46 VXV LIINN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-08-2025
					result += "<!-- Verified with ATCSCC on 04-08-2025 -->";
					result += "<br/>NF<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 ELP J50 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>NJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J6 IRW FSM MEMFS Q34 HITMN TAZZA FILPZ4 KCLT\" readonly>";
					break;
				case "DCA": // Updated 07-01-2025
					result += "<!-- Updated 07-01-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-01-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR TRUPS5 KDCA\" readonly>"; // CDR LV
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC LAA J102 SLN J24 MCI J80 VHP APE J30 LUISE FRDMM6 KDCA\" readonly>"; // CDR VH
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J6 IRW FSM MEMFS Q34 SITTR TRUPS5 KDCA\" readonly>"; // CDR BN
					result += "<br/><br/>North via BAE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR MBW RAP RWF J34 BAE GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>"; // CDR B1
					result += "<br/>South via IAH<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 IAH J2 CEW ALLMA TEEEM Q109 PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>"; // CDR CE
					// result += "<br/><br/><input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC HBU J28 ICT SGF J98 FAM J78 HVQ TRUPS5 KDCA\" readonly>";
					// result += "<br/><input style=\"width:75%\" value=\"KLAS NIITZ4 HOCEE TBC J64 RSK J44 ALS J102 SLN J24 STL J8 IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
					// result += "<br/><br/>North: <input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVV J60 JOT J30 LUISE FRDMM6 KDCA\" readonly>";
					result += "<br/><br/>BNA: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J6 IRW FSM MEMFS Q34 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>DC NORTH: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP FTI EZEEE MMB PER SGF J98 FAM J78 PXV J78 IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>GRB: <input style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR MBW RAP ABR GRB FNT DJB J34 BUCKO FRDMM6 KDCA\" readonly>";
					result += "<br/>JOT 1: <input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC DVV J60 JOT J30 LUISE FRDMM6 KDCA\" readonly>";
					result += "<br/>JOT 2 ALT: <input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC PUB J64 HLC PWE LMN MZV JOT J30 LUISE FRDMM6 KDCA\" readonly>";
					result += "<br/>MGM 2: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>MGM 3: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 POLYY TUBAS ZITTO WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>PXV: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>SPI: <input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC LAA J102 SLN J24 MCI J80 SPI IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>VHP: <input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC LAA J102 SLN J24 MCI J80 VHP APE J30 LUISE FRDMM6 KDCA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-01-2025
					result += "<!-- Verified with ATCSCC on 07-01-2025 -->";
					result += "<br/>B1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR MBW RAP RWF J34 BAE GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
					result += "<br/>B2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR MBW RAP J82 FSD J16 BAE GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
					result += "<br/>BK<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR BFF J94 ONL FOD DBQ J94 OBK GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
					result += "<br/>BN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J6 IRW FSM MEMFS Q34 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>CE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 IAH J2 CEW ALLMA TEEEM Q109 PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>GR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR MBW RAP ABR GRB FNT DJB J34 BUCKO FRDMM6 KDCA\" readonly>";
					result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC DVV J60 JOT J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
					result += "<br/>J2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC PUB J64 HLC PWE LMN MZV JOT J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
					result += "<br/>L1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>L2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI Q56 CATLN FRDDO NOKIE TWINS PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>LV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>M1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 ELP J50 ABI J4 FUZ Q184 ARNNY FRDDO KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>M2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 IAH J2 LCH J138 SJI Q56 CATLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>M3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>MC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC LAA J102 SLN J24 MCI J24 STL ENL IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>PX<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP FTI EZEEE MMB PER SGF J98 FAM J78 PXV J78 IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>SP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC LAA J102 SLN J24 MCI J80 SPI IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>VH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC LAA J102 SLN J24 MCI J80 VHP APE J30 LUISE FRDMM6 KDCA\" readonly>";
					result += "<br/>VU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 ELP J50 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>VY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS DRK J92 VYLLA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>XC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW GREBE CUS AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					break;
				case "DFW": // Updated 01-12-2025
					result += "<!-- Updated 01-12-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J72 TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>SW Arrival: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J15 CME BGS GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 ELP J50 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KLAS NIITZ4 HOCEE TBC J64 RSK CIM PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAS BAVPE J72 TXO UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "JFK": // Updated 01-12-2025
					result += "<!-- Updated 01-12-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC HBU TXC HCT OBH FOD DBQ KG75M DAFLU J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO AHPAH HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
					result += "<br/><br/>BNA: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J6 IRW FSM MEMFS Q34 HITMN SWAPP Q34 MAULS QUART HURTS SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>IIU: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>LEV EAST 1: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q109 PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>MGM 1: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 ELP J50 ABI J4 FUZ Q184 ARNNY FRDDO FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>MGM 2: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 IAH J2 LCH J138 SJI Q56 CATLN Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>VUZ: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 ELP J50 ABI J4 FUZ UIM ELD ELD IZAAC Q30 VLKNN THRSR FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>CR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO AHPAH HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
					result += "<br/>CW (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR MBW RAP TTAIL NIWRA VURLY ULUTO POLTY BUGSY ALB IGN IGN1 KJFK\" readonly>";
					result += "<br/>CY (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR RAP LORAH DAYYY RUBKI SIKBO OLABA SSENA BUGSY ALB IGN IGN1 KJFK\" readonly>";
					result += "<br/>GR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR MBW RAP ABR GRB HOCKE Q935 HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
					result += "<br/>RD (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J6 IRW FSM ARG PXV ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>VH (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC LAA J102 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>W1: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC SNY J114 GEP DLL HASTE DAFLU J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>W4: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC HBU MCI J80 SPI VHP ROD DJB JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>W5: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR PGA RSK GCK BUM KK54K KI57O ROD DJB JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>W6: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR PGA RSK TOTOE PXV ROD DJB JHW J70 LVZ LENDY8 KJFK\" readonly>";
					break;
				case "LAX": // Updated 06-17-2025
					result += "<!-- Updated 06-17-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL280):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAS RADYR2 BLAQQ SHTNR ANJLL4 KLAX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KLAS RADYR2 LVELL TNP BASET5 KLAX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAS HEC BASET5 KLAX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-17-2025
					break;
				case "MIA": // Updated 04-09-2025
					result += "<!-- Updated 04-09-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-09-2025
					result += "<br/><br/>NRP/OW: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ KF24Y FUZ J58 HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					// KLAS NIITZ4 SSKEE GUP ABQ LBB KF15C KH06G LEV Y290 GAWKS FROGZ4 KMIA
					result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ KF24Y FUZ J58 AEX J50 CEW J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP ABQ J78 IRW J14 VUZ HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 FST KH03Y CRP PEGLG ALGAE MINOW M580 MARCI FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAS PGS J72 ABQ J15 CNX ABI J50 LFK LEV Y290 BLVNS Y290 BAGGS RSW PALMZ2 KMIA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-09-2025
					result += "<!-- Verified with ATCSCC on 04-09-2025 -->";
					break;
				case "ORD": // Updated 2024-12-28
					result += "<!-- Updated 2024-12-28 P -->";
					// No FAA pref route as of 03-25-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC J197 HGO J24 SLN J96 IRK SHAIN2 KORD\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KLAS VERKN LARVE EKR BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>"; // CDR F2
					result += "<br/>South/KDV Avoid: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J96 IRK BENKY6 KORD\" readonly>"; // CDR JV
					result += "<br/>South via IRW: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUPP J72 ABQ J6 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>"; // CDR F1
					result += "<br/><br/>ORD BDF 1: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J6 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAS PGS J128 HBU J146 GLD PWE IRK BDF8 KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-25-2025
					result += "<!-- Verified with ATCSCC on 03-25-2025 -->";
					result += "<br/>F1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J6 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/>F2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS VERKN LARVE EKR BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>JB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS VERKN LARVE EKR BFF J94 ONL J114 GEP DLL MSN JAKSA MOOPS FYTTE FYTTE7 KORD\" readonly>";
					result += "<br/>JV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS PGS GUP J96 IRK BENKY6 KORD\" readonly>";
					result += "<br/>JW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS VERKN LARVE EKR BFF J94 ONL J114 GEP TVC WYNDE2 KORD\" readonly>";
					break;
				case "PHL": // Updated 01-12-2025
					result += "<!-- Updated 01-12-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC PUB HYS UIN VHP ROD JST BOJID4 KPHL\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KLAS RATPK3 FRNCK MLF J80 SAKES J100 SNY ONL J148 MCW J16 BAE WOZEE Q818 CFB SPUDS7 KPHL\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 TXO ADM J52 SUTTN IZAAC Q30 VLKNN THRSR BURGG Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>VHP: <input style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC LAA J102 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAS PGS J72 GUP FTI EZEEE ICT J26 MCI J80 VHP ROD EWC PSB BUNTS3 KPHL\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>B2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR MBW RAP J82 FSD J16 BAE J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>CE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 IAH J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>GR: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 VERKN LARVE EKR MBW RAP ABR GRB FNT DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>J1: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC J146 HBU DVV J60 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>J1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC DVV J60 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>RD: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE GUP J72 ABQ J6 IRW FSM ARG PXV ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>SP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS GIDGT2 TUKRR DVC LAA J102 SLN J24 MCI J80 SPI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>VU (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAS NIITZ4 SSKEE INW J86 ELP J50 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					break;
				case "PHX": // Updated 05-09-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-09-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL290):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAS RASLR3 ZAYNE WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KLAS RADYR2 LVELL BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAS BLD COYOT5 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-09-2025
					break;
			}
		break; // End of LAS

		case "LAW":
			switch(arvl) {
				case "DFW": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL210):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAW VKTRY VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLAW UKW UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed as of 03-01-2025
					break;
			}
		break; // End of LAW

		case "LAX":
			result = lax_departures(arvl, tail, ac_type, result);
		break; // End of LAX

		case "LBB":
			switch(arvl) {
				case "DFW": // Updated 01-12-2025
					result += "<!-- Updated 01-12-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLBB HNKER VKTRY2 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KLBB GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLBB UKW UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of LBB

// LCH skipped

		case "LEX":
			switch(arvl) {
				case "CLT": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLEX HYK TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KLEX SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLEX HYK HMV LIINN3 KCLT\" readonly>";
					break;
			}
		break; // End of LEX

		case "LGA":
			switch(arvl) {
				case "CLT": // Updated 01-12-2025
					result += "<!-- Updated 01-12-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA BIGGY Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR COUPN CHSLY6 KCLT\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KLGA COATE Q436 DGRAF J49 PSB Q71 GEFFS HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KLGA JFK SHIPP Y488 STERN Y493 TUBBS DIZNY Y436 PITRW STOCR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA LANNA J48 MOL LYH MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>48 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 MOL AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>60 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DJB J85 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>80 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>J6 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>KA: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>NE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEION Q232 DARBO J49 PSB J60 DJB ROD FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>PH (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA BIGGY Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>PS: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 PSB HVQ LNDIZ PARQR4 KCLT\" readonly>";
					break;
				case "DCA": // Updated 06-19-2025
					result += "<!-- Updated 06-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA BIGGY Q75 MXE CLIPR3 KDCA\" readonly>";
					// result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLGA COATE LAAYK T212 SEG T291 HAR BAL KDCA\" readonly>";
					result += "<br/><br/>East/OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLGA SHIPP LINND AZEZU ZIBUT AR9 ORF HPW WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/><br/>SERMN SOUTH (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"JFK T303 LEEAH T315 CHOPS T320 VAALI\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA WHITE BAL KDCA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-19-2025
					result += "<!-- Verified with ATCSCC on 06-19-2025 -->";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA BIGGY Q75 MXE CLIPR3 KDCA\" readonly>";
					result += "<br/>PL<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA BIGGY V3 MXE CLIPR3 KDCA\" readonly>";
					result += "<br/>SR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA JFK T224 CYN LEEAH T315 CHOPS T320 VAALI CAPKO KDCA\" readonly>";
					result += "<br/>WH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE T303 ATR LAFLN DEALE3 KDCA\" readonly>";
					break;
				case "DFW": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA PARKE J6 HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR J110 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KLGA LANNA J48 CSN FANPO Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>"; // CDR CQ
					result += "<br/><br/>NO J6 1: <input style=\"width:75%\" value=\"KLGA LANNA J48 CSN FANPO Q40 ALEAN VXV J46 BNA J46 SOPIE Q68 LITTR MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>SEEVR 1: <input style=\"width:75%\" value=\"KLGA PARKE J6 HVQ Q68 RAMRD IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA PARKE J6 HVQ J78 PXV J131 LIT WILBR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-17-2025
					result += "<!-- Verified with ATCSCC on 04-17-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA COATE Q436 HERBA JHW Q29 KLYNE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 CSN FANPO Q40 ALEAN Q66 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DJB PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV J64 MAINE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>75<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA BIGGY Q75 GVE LYH COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR FYLLS PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>B6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA BIGGY Q75 GVE LYH COLZI Q52 CHOPZ THRSR VUZ J14 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>B7<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 COLNS Q176 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>B9<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 MRPIT CEELY Q172 YUTEE IRQ VUZ J14 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GREKI JUDDS CAM Q84 JHW Q29 KLYNE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>CH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 SESUE PANDY TWINS NOKIE FRDDO ARNNY Q184 SARKK MLU YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>CQ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 CSN FANPO Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>J5<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ Q68 RAMRD SQS AEX LFK CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ Q68 RAMRD ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>J8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC AEX LFK CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>J9<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 SESUE PANDY TWINS NOKIE MGMRY LCH J2 IAH CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>KA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>NE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEION Q232 DARBO J49 PSB J60 DJB PXV ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>Q6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ Q68 RAMRD SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>Q7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DJB RINTE Q139 IIU BWG SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>U6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 JOT MZV IRK MCI ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>U8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR J80 VHP J24 STL BUM ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>UN<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 JOT MZV IRK MCI ICT IRW HOFFF JOVEM6 KDFW\" readonly>";
					break;
				case "MCO": // Updated 04-06-2025
					result += "<!-- Updated 04-06-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>Non OW: <input style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR Q85 LPERD GTOUT1 KMCO\" readonly>";
					result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR EARZZ Q131 WAALT Y289 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KLGA SHIPP Y488 STERN Y493 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					result += "<br/><br/>ATLANTIC SOUTH 1: <input style=\"width:75%\" value=\"KLGA JFK SHIPP Y488 OHRYN AZEZU METZZ OOONN Y494 WEAKK Y493 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					result += "<br/>VACAPES SOUTH 1: <input style=\"width:75%\" value=\"KLGA WAVEY EMJAY CORNE ECG PRONI WAALT Y289 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA SBJ PTW J48 MOL FLASK ODF MCN OTK LEESE3 KMCO\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-06-2025
					result += "<!-- Verified with ATCSCC on 04-06-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 MOL FLASK COREX SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>4A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 CSN FANPO Q40 ALEAN VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
					result += "<br/>4C<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 MOL FLASK COREX SPA QUIWE Q93 GIPPL Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DJB J85 HVQ J85 SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV J64 BURNI TYROO QUARM AIR HVQ SPAYD VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
					result += "<br/>6A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ SPAYD VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR HVQ J85 SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>83<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR HVQ J85 SPA QUIWE Q93 GIPPL Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>85<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>8T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR HVQ SPAYD VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
					result += "<br/>AR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR EARZZ Q131 WAALT Y289 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					result += "<br/>AZ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA JFK SHIPP Y488 STERN Y493 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 PUPYY WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ J85 SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>SA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA BIGGY Q75 GSO Q83 ROYCO Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>SP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA QUIWE Q93 GIPPL Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>WA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA JFK WAVEY EMJAY Q167 KALDA Q131 WAALT Y289 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					result += "<br/>WC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA JFK WAVEY EMJAY Q167 ZJAAY Q97 SAWED MOXXY Q85 LPERD SNFLD3 KMCO\" readonly>";
					break;
				case "MIA": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR BGBRD Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KLGA SHIPP Y488 STERN Y493 JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/>ATLANTIC SOUTH 1: <input style=\"width:75%\" value=\"KLGA JFK SHIPP Y488 OHRYN AZEZU CROAK METZZ OOONN WHOOS WEAKK JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>VACAPES SOUTH 1: <input style=\"width:75%\" value=\"KLGA WAVEY EMJAY CORNE ECG WEAKK JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR PAACK Q97 KENLL OMN ANNEY4 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>AR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA JFK WAVEY EMJAY Q167 KALDA Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>J1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 ISUZO BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>J6 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ J85 SPA ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>KA (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>SA (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA BIGGY Q75 GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>SP (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>TA (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA BIGGY Q75 TEEEM BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>WC (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA JFK WAVEY EMJAY Q167 ZJAAY Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>WH (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR BGBRD Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					break;
				case "MSY": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA LANNA J48 CSN FANPO Q40 NIOLA MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/><br/>South:<input style=\"width:75%\" value=\"KLGA WHITE Q409 SESUE PANDY TWINS NOKIE FRDDO ARNNY Q184 KWANE MERDN TRSSH1 KMSY\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>36: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA COATE Q436 HERBA JHW Q29 KLYNE RINTE Q139 VLKNN MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/>60: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DJB RINTE Q139 VLKNN MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/>75: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA BIGGY Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI MNSTR1 KMSY\" readonly>";
					result += "<br/>80: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR HNN SPAYD VXV NIOLA MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/>CH: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 SESUE PANDY TWINS NOKIE FRDDO ARNNY Q184 KWANE MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/>J6: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ VXV NIOLA MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/>PH: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 CSN FANPO Q40 NIOLA MERDN TRSSH1 KMSY\" readonly>";
					break;
				case "ORD": // Updated 06-27-2025
					result += "<!-- Updated 06-27-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA COATE Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLGA PARKE J6 EYTEE J149 FWA WATSN4 KORD\" readonly>"; // CDR X6
					result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLGA GREKI JUDDS CAM NOVON KENPA GRB SHIKY FYTTE7 KORD\" readonly>"; // CDR GS
					result += "<br/><br/>NY DUCT NORTH (FL 160 to SLT): <input style=\"width:75%\" value=\"KLGA ELIOT V39 ETX V30 SEG V170 SLT RAAKK Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>NY DUCT WEST (FL220 to PSB): <span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLGA NEION Q232 DARBO J49 PSB J60 DJB NOLNN Q62 WATSN WATSN4 KORD\" readonly>"; // CDR NE
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA NEWEL J60 DJB KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-27-2025
					result += "<!-- Verified with ATCSCC on 06-27-2025 -->";
					result += "<br/>1K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GAYEL Q818 WOZEE KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GAYEL Q818 WOZEE NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>2K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GREKI JUDDS CAM NOVON KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GREKI JUDDS CAM NOVON SIKBO NOSIK ZOHAN OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>3K<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GREKI JUDDS CAM NOVON SIKBO KENPA OBSTR WYNDE2 KORD\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DJB NOLNN Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>61<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 PSB YARRK EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR J80 EMPTY J149 FWA WATSN4 KORD\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GAYEL J95 CFB RAAKK Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GREKI JUDDS CAM Q822 FNT WYNDE2 KORD\" readonly>";
					result += "<br/>DJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 CANCR RRONS Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>G3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GREKI JUDDS CAM Q822 GONZZ FARGN CHAAP Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>GS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GREKI JUDDS CAM NOVON KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 COLNS Q176 HNN FLM J24 VHP BONNT VEECK5 KORD\" readonly>";
					result += "<br/>JV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GREKI JUDDS CAM NOVON YEE TVC GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>KF<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GREKI JUDDS CAM NOVON SIKBO KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>KS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GAYEL Q818 WOZEE KENPA GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>NE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEION Q232 DARBO J49 PSB J60 DJB NOLNN Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>NZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GAYEL Q818 WOZEE NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA COATE Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>X6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 EYTEE J149 FWA WATSN4 KORD\" readonly>";
					result += "<br/>ZS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA GREKI JUDDS CAM NOVON SIKBO NOSIK ZOHAN GRB SHIKY FYTTE7 KORD\" readonly>";
					break;
				case "PBI": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR EARZZ Q131 WAALT Y289 DULEE CLMNT2 KPBI\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR PAACK Q97 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KLGA SHIPP Y488 STERN Y493 BAHAA DULEE CLMNT2 KPBI\" readonly>";
					result += "<br/><br/>ATLANTIC SOUTH 1: <input style=\"width:75%\" value=\"KLGA SHIPP Y488 OHRYN AZEZU METZZ OOONN WHOOS JENKS BAHAA DULEE CLMNT2 KPBI\" readonly>";
					result += "<br/>VACAPES SOUTH 1: <input style=\"width:75%\" value=\"KLGA WAVEY EMJAY CORNE ECG ADUCI JENKS BAHAA DULEE CLMNT2 KPBI\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>48 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 MOL FLASK COREX SPA ENEME VUUDU1 KPBI\" readonly>";
					result += "<br/>4C (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 MOL FLASK COREX SPA QUIWE Q93 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>64 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV J64 BURNI TYROO QUARM AIR HVQ SPAYD VXV THRSR ZPLEN VUUDU1 KPBI\" readonly>";
					result += "<br/>83 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR HVQ J85 SPA QUIWE Q93 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>AZ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA JFK SHIPP Y488 STERN Y493 BAHAA DULEE CLMNT2 KPBI\" readonly>";
					result += "<br/>I6 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DJB J85 HVQ J85 SPA ENEME VUUDU1 KPBI\" readonly>";
					result += "<br/>SP (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA QUIWE Q93 KENLL CPTAN3 KPBI\" readonly>";
					break;
				case "RSW": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA BIGGY Q75 SLOJO Q103 CYNTA SHFTY6 KRSW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>48: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 MOL FLASK COREX SPA IRQ WIGVO CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>4A: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 CSN FANPO Q40 ALEAN VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>60: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DJB ROD J43 VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>64: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV J64 BURNI TYROO QUARM AIR HVQ SPAYD VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>6A: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ SPAYD VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>80: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR HVQ J85 SPA IRQ CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>85: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA IRQ CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>8T: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR HVQ SPAYD VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>AR: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR EARZZ Q131 WAALT Y289 BAHAA HIBAC SHFTY6 KRSW\" readonly>";
					result += "<br/>J6: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ J85 SPA IRQ CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>KA (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 PUPYY Q103 CYNTA SHFTY6 KRSW\" readonly>";
					break;
				case "SRQ": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA BIGGY Q75 SLOJO Q103 PUPYY KYYUU LUBBR3 KSRQ\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KLGA WHITE Q409 VILLS TRPOD CRPLR Q85 KAATT PUPYY KYYUU LUBBR3 KSRQ\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "TPA": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLGA BIGGY Q75 TEUFL BAAMF DADES2 KTPA\" readonly>";
					result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KLGA WHITE Q409 CRPLR EARZZ Q131 WAALT Y289 BAHAA HIBAC DADES2 KTPA\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR HNN SPAYD VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/><br/>NE TO FL VIA J48: <input style=\"width:75%\" value=\"KLGA LANNA J48 MOL FLASK COREX SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>NE TO FL VIA J6: <input style=\"width:75%\" value=\"KLGA PARKE J6 HVQ SPAYD VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>NE TO FL VIA J64: <input style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV J64 BURNI QUARM AIR HVQ J85 SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>NE TO FL VIA Q480: <input style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR HVQ J85 SPA BAAMF DADES2 KTPA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-31-2025
					result += "<!-- Verified with ATCSCC on 03-31-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 MOL FLASK COREX SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>4A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA LANNA J48 CSN FANPO Q40 ALEAN VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DJB ROD J43 VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV J64 BURNI TYROO QUARM AIR HVQ SPAYD VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>6A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ SPAYD VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR HVQ J85 SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>85<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA NEWEL J60 DANNR RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>8T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA ZIMMZ Q42 MIKYG Q480 AIR HVQ SPAYD VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>AZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA JFK SHIPP Y488 STERN Y493 BAHAA HIBAC DADES2 KTPA\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA PARKE J6 HVQ J85 SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>KA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA WHITE Q409 PUPYY BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLGA BIGGY Q75 TEUFL BAAMF DADES2 KTPA\" readonly>";
					break;
			}
		break; // End of LGA

		case "LIT":
			switch(arvl) {
				case "DFW": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><b style=\"color:orange\";>Fkeys defaults to LIT DCT DESME.. and I'm not sure why</b>";
					result += "<br/><br/>SE Arrival: <input style=\"width:75%\" value=\"KLIT WASKO CISAR EIC WHINY WHINY4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLIT LIT FINGR9 KDFW\" readonly>";
					break;
			}
		break; // End of LIT

// LNK skipped

		case "LRD":
			switch(arvl) {
				case "DFW": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KLRD KAHAN SAT J23 SPURS GUTZZ BOOVE7 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					break;

			}
		break; // End of LRD

		case "MAF":
			switch(arvl) {
				case "DFW": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMAF GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMAF ABI UKW UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed as of 03-01-2025
					break;
			}
		break; // End of MAF

		case "MCI":
			switch(arvl) {
				case "CLT": // Updated 05-29-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-29-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route (avoids ZID):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCI LAKES5 COU FAM BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><b style=\"color:orange\">**Careful about crossing in and out of ZID/ZME jagged border in Kentucky**</b>";
					result += "<br/><br/>North/ZME Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCI LAKES5 SPI TILMN FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>South/ZID Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCI RACER8 SGF ARG J46 BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCI STL J45 BNA J46 VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-29-2025
					break;
				case "DCA": // Updated 05-29-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-29-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCI LAKES5 COU STL J24 VHP J80 BOWRR LUISE FRDMM6 KDCA\" readonly>";
					result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCI RACER8 SGF TWITS Q36 HITMN Q34 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCI ROYAL2 TONCE DSM J144 DBQ BAE J34 BUCKO FRDMM6 KDCA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-29-2025
					break;
				case "DFW": // Updated 07-07-2025
					result += "<!-- Updated 07-07-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCI RACER8 DOSOA HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCI WLDCT6 ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCI RACER8 SGF RZC FSM KOMMA RRNET SEEVR4 KDFW\" readonly>";
					// result += "<br/>DFW WEST: <input style=\"width:75%\" value=\"KMCI RACER8 DOSOA TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCI WLDCT6 ICT J21 IRW FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-07-2025
					break;
				case "MIA": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCI RACER8 SGF MEMFS MGMRY ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>Gulf: <input style=\"width:75%\" value=\"KMCI RACER8 SGF LIT HEGOG RUCBO HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCI RACER8 SGF MEM MGM ACORI BULZI NICKI BITNY PIE PALMZ2 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>RY (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMCI ROYAL2 BODYN PIA LCOLN TTH PXV HITMN ACORI FROGZ4 KMIA\" readonly>";
					break;
				case "ORD": // Updated 07-07-2025
					result += "<!-- Updated 07-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL290):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCI ROYAL2 BODYN LOAMY BENKY6 KORD\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCI ROYAL2 TONCE DSM J144 DBQ BHAWK FYTTE7 KORD\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCI RACER8 BUM J110 ELSTO WELTS TRTLL6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCI LAKES5 SPI JOT KORD\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-07-2025
					break;
				case "PHX": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCI WLDCT6 SLN GCK J96 CIM ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KMCI WLDCT6 ICT IFI HNKER INK J50 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>EAGUL 1: <input style=\"width:75%\" value=\"KMCI WLDCT6 SLN GCK J18 FTI J104 ONM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>EAGUL 2: <input style=\"width:75%\" value=\"KMCI WLDCT6 SLN GCK J110 RSK FLG DUTEY MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCI CHIEF8 STJ PWE MCK J44 FQF J10 RSK GUP BUNTR3 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of MCI

		case "MCO":
			switch(arvl) {
				case "CLT": // Updated 06-27-2025
					result += "<!-- Updated 06-27-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO FATHE4 VIYAP CHECR STOCR4 KCLT\" readonly>";
					result += "<br/><br/>East/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCO MZULO3 ETECK GRUBR OGGRE Y436 PITRW CHS STOCR4 KCLT\" readonly>";
					result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCO RDSOX1 JFRYS WILON CAMJO TEUFL Q77 WIGVO PONZE BANKR5 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO OMN CRG SAV CHS FLO RASLN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-27-2025
					break;
				case "DCA": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMCO FATHE4 VIYAP Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KMCO MZULO3 LENDS GRUBR Y299 SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KMCO RDSOX1 JFRYS BRUTS Q118 THRSR VXV TONIO HVQ TRUPS5 KDCA\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KMCO MZULO3 ETECK PELCN ROWSY Y494 SILLY LYNUS B24 DASHA ATR LAFLN DEALE3 KDCA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO CRG VIYAP SAV CHS FLO RDU RIC IRONS7 KDCA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "DFW": // Updated 05-10-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-10-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO OSPRY1 REMIS Y280 REDFN Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KMCO RDSOX1 JFRYS PATOY Q116 JAWJA CABLO MEI MLU YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KMCO OSPRY1 REMIS Y280 LEV KCEEE TKNIQ MOLLR IAH CRIED BEREE3 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KMCO RDSOX1 JFRYS PATOY Q116 VLKNN YAALL J14 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>North Dptr: <input style=\"width:75%\" value=\"KMCO JEEMY3 PAINN SHRKS AMG MCN VLKNN YAALL J14 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KMCO OSPRY1 CIGAR M215 SNOMN ALGAE PEGLG MUSYL IAH CRIED BEREE3 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO GUANO MATEO TAY SZW CEW J50 AEX YEAGR4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-10-2025
					break;
				case "LAX": // Updated 06-23-2025 // Mandatory Routes checked
					result += "<!-- Updated 06-23-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO OSPRY1 REMIS Y280 LEV J86 ELP J50 TFD J212 BXK J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/><br/>Non OW via JCT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCO RDSOX1 JFRYS PATOY Q116 JAWJA CABLO MCB J50 LFK JCT J86 ELP J50 TFD J212 BXK J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>Non OW via ABQ<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCO RDSOX1 JFRYS PATOY Q116 JAWJA CABLO MCB J50 ABI TXO J72 ABQ J6 DRK GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCO RDSOX1 JFRYS PATOY Q116 VLKNN LIT J6 DRK GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/><br/>Full OW/SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMCO OSPRY1 CIGAR M215 SNOMN KELPP MUSYL PSX SAT J138 FST J86 ELP J50 TFD J212 BXK J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>Full OW/CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMCO OSPRY1 CIGAR M215 SNOMN ALGAE PEGLG CRP KH87A FST J2 ELP J50 TFD J212 BXK J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO GUANO MATEO TAY SZW CEW J50 ABI J65 CME J15 CNX J74 PKE J4 TMP BASET5 LAX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-07-2025
					break;
				case "LGA": // Updated 05-07-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO FATHE4 VIYAP Q87 HURTS PROUD2 KLGA\" readonly>";
					result += "<br/><br/>East/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCO MZULO3 LENDS GRUBR Y299 SEELO GARIC Q107 HURTS PROUD2 KLGA\" readonly>";
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMCO JEEMY3 PAINN SHRKS Q77 WIGVO IRQ SPA J85 HVQ IHD PSB MIP4 KLGA\" readonly>";
					result += "<br/>Full OW/ZDC Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMCO MZULO3 ETECK PELCN ROWSY Y494 YAALE Y495 OWENZ DPK KLGA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-07-2025
					break;
				case "MIA": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL230):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO DDANY3 DDANY CSTAL3 KMIA\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KMCO FSHUN3 PLUMR SABEE FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO TRV ANNEY4 KMIA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "ORD": // Updated 05-07-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO RDSOX1 JFRYS BRUTS Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/><b style=\"color:orange\">Anything other than route above will flag as Mandatory Route violation<\/b>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KMCO FATHE4 VIYAP Q69 GURGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KMCO RDSOX1 JFRYS PATOY Q116 JAWJA CABLO ACORI MGM JILLS Q128 MUDHO ARG FTZ TRTLL6 KORD\" readonly>";
					result += "<br/>Gulf: <input style=\"width:75%\" value=\"KMCO OSPRY1 REMIS Y280 REDFN Q105 HRV MEI IGB PXV RBS BENKY BENKY6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO GUANO MATEO AMG ODF VXV J43 ROD J149 FWA KORD\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-07-2025
					break;
				case "PHL": // Updated 01-15-2025
					result += "<!-- Updated 01-15-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO FATHE4 VIYAP Q87 JROSS Q135 RREGG Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KMCO MZULO3 ETECK PELCN Y309 FLRDA IDOLS SKARP Q101 TUGGR KALDA ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KMCO MZULO3 ETECK PELCN ROWSY Y494 SILLY LYNUS B24 DASHA JIIMS4 KPHL\" readonly>";
					result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\" value=\"KMCO MZULO3 ETECK OZENA ROWSY OTTNG HAAYY WICKE DASHA JIIMS4 KPHL\" readonly>";
					result += "<br/>FLORIDA TO NE 4: <input style=\"width:75%\" value=\"KMCO MZULO3 ETECK GRUBR OGGRE Y436 PITRW LCAPE ALWZZ OGRAE Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO GUANO CRG VIYAP SAV CHS ILM ORF SWL VCN9 KPHL\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHX": // Updated 05-07-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO OSPRY1 REMIS Y280 LEV J86 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>Non OW via JCT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCO RDSOX1 JFRYS PATOY Q116 JAWJA CABLO MCB J50 LFK JCT J86 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>Non OW via ABQ<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCO RDSOX1 JFRYS PATOY Q116 JAWJA CABLO MCB J50 ABI TXO J72 ABQ J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMCO RDSOX1 JFRYS PATOY Q116 VLKNN LIT J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>Full OW/SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMCO OSPRY1 CIGAR M215 SNOMN KELPP MUSYL PSX SAT J138 FST J86 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>Full OW/CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMCO OSPRY1 CIGAR M215 SNOMN ALGAE PEGLG CRP KH87A FST J2 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMCO GUANO MATEO TAY SZW CEW MCB UIM TXO ZUN BUNTR3 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-07-2025
					break;
			}
		break; // End of MCO

		case "MDT":
			switch(arvl) {
				case "CLT": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMDT HAR LDN AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KMDT HAR JST AIR LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMDT LRP SACRI Q75 GVE LYH MAJIC4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMDT GRAMO HYPER J6 HVQ Q68 LITTR MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KMDT LRP EMI J48 CSN FANPO Q40 MISLE MLU YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KMDT HAR FORTT J60 JOT MZV IRK MCI ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMDT AIR CVG PXV J131 LIT FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of MDT

		case "MEM":
			switch(arvl) {
				case "CLT": // Updated 07-17-2025
					result += "<!-- Updated 07-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL330):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMEM GOETZ7 DIYAB HCH TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMEM BBKNG7 KERMI VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMEM GOETZ7 DIYAB BNA TONIO WILUM PARQR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMEM ELVIS4 EONEE BNA J46 VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-17-2025
					break;
				case "DCA": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KMEM GOETZ7 DIYAB DITZL Q34 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KMEM CRSON7 HUMMS PXV FLM J24 HVQ TRUPS5 KDCA\" readonly>";
					result += "<br/>South: <input style=\"width:75%\"; value=\"KMEM AZONE7 PITEW FLORS BURGG Q60 JAXSN THHMP CAPSS3 KDCA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KMEM ELVIS4 EONEE BNA LOZ BKW GVE KDCA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-17-2025
					result += "<!-- Verified with ATCSCC on 04-17-2025 -->";
					break;
				case "DFW": // Updated 07-17-2025
					result += "<!-- Updated 07-17-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL300):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMEM CHLDR5 ANSWA LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMEM PIEPE6 IBUFY MLU YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMEM NIKEI5 INAYO ECIGE FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMEM ELVIS4 WONEE GEEYY J66 LIT WILBR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-17-2025
					break;
				case "MIA": // Updated 07-17-2025
					result += "<!-- Updated 07-17-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-17-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KMEM BBKNG7 KERMI MGMRY ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMEM BBKNG7 KERMI BEATS J66 RMG THRSR HESPI Q89 PRMUS DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>West/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMEM PIEPE6 IBUFY MCB HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-17-2025
					break;
				case "ORD": // Updated 07-17-2025
					result += "<!-- Updated 07-17-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KMEM JTEEE5 ODATE FTZ TRTLL6 KORD\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMEM NIKEI5 INAYO SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KMEM ELVIS4 NTWOO FAM FTZ BDF9 KORD\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-17-2025
					break;
				case "PHL": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KMEM GOETZ7 DIYAB DITZL Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KMEM CRSON7 HUMMS PXV JUDDI MILAN CREEP TRAKK J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>South: <input style=\"width:75%\"; value=\"KMEM PIEPE6 IBUFY CBM VUZ TEMPO TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-17-2025
					result += "<!-- Verified with ATCSCC on 04-17-2025 -->";
					break;
				case "PHX": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-17-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KMEM DUCKZ5 HELAR FSM IRW J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KMEM ZUMIT5 FOXOM RZC PER TOTOE Q176 CIM ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>South: <input style=\"width:75%\"; value=\"KMEM CHLDR5 ANSWA LIT J131 FUZ J66 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KMEM ELVIS4 WONEE IRW PNH TCC ABQ ZUN BUNTR3 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-17-2025
					result += "<!-- Verified with ATCSCC on 04-17-2025 -->";
					break;
			}
		break; // End of MEM

		case "MFE":
			switch(arvl) {
				case "DFW":
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMFE ELIZA V17 LRD J21 SAT GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/><b style=\"color:orange\">As of 12/9/24, to plan low level you must remove 'V17' and go direct ELIZA-LRD</b><br/><b style=\"color:orange\">(Fkeys doesnt allow planning V17 below FL310)</b>";
					result += "<br/><br/>SE Arrival: <input style=\"width:75%\" value=\"KMFE JIMIE CRP TNV LOA STUFT BEREE3 KDFW\" readonly>";
					result += "<br/>East: <input style=\"width:75%\" value=\"KMFE PSX J29 IAH CRIED BEREE3 KDFW\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KMFE ELIZA V17 LRD PIPPI RSG SJT GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMFE CRP TNV LOA YEAGR4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of MFE

// MGM skipped

		// TODO MHT

		case "MIA":
			result = mia_departures(arvl, tail, ac_type, result);
		break; // End of MIA

		case "MKE":
			switch(arvl) {
				case "CLT": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMKE UECKR6 SAMPL FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/>South/West: <input style=\"width:75%\" value=\"KMKE UECKR6 DELHI PXV BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMKE PMM FWA J149 ROD LYH MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>0S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE UECKR6 DELHI WORDY ERECO IIU SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/>1S: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE UECKR6 DELHI EMMLY VHP FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>2E: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE UECKR6 SAMPL ADIME FWA HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>2S: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE UECKR6 DELHI EMMLY VHP FLM SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/>3E: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE SQUIB VIO CRL FLM J43 VXV LIINN3 KCLT\" readonly>";
					result += "<br/>3S: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE UECKR6 DELHI PXV HITMN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>4S: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE ACCRA5 ACCRA RBS J71 ENL PLESS BNA TAZZA FILPZ4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMKE GREAS JAYEX IOW SKBOZ BUM HITUG BRDJE5 KDFW\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KMKE GREAS JAYEX DSM J25 TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>DFW SEEVR 2: <input style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ IRK MCI ICT IFI HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>DFW WEST: <input style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ IRK MCI TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>FSM: <input style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ IRK BUM J87 TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMKE JVL DBQ IRK J87 TUL FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-30-2025
					result += "<!-- Verified with ATCSCC on 03-30-2025 -->";
					result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE ACCRA5 ACCRA RBS RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>0W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ ROEZZ BUM J87 TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ ROEZZ MCI TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE ACCRA5 ACCRA RBS J71 ENL FAM J137 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ ROEZZ MCI ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>3W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ ROEZZ MCI ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE UECKR6 DELHI PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>6W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ PWE ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>7W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ PWE ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>8W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ OVR J21 JUDGE ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>W0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ ROEZZ BUM J87 TUL KLAWW JOVEM6 KDFW\" readonly>";
					result += "<br/>W1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ ROEZZ MCI TUL HITUG BRDJE5 KDFW\" readonly>";
					result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ ROEZZ MCI ICT HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>W3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ ROEZZ MCI ICT IRW IBAKE JOVEM6 KDFW\" readonly>";
					result += "<br/>W4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ ROEZZ MCI ICT IFI HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>W6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ PWE ICT HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>W7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ PWE ICT IRW IBAKE JOVEM6 KDFW\" readonly>";
					break;
				case "ORD": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KMKE LYNNI ERNNY8 KORD\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KMKE ZANDI MADII7 KORD\" readonly>";
					break;
				case "PHX": // Updated 03-30-2025
					result += "<!-- Updated 03-30-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-30-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KMKE GREAS JAYEX KG75I LNK J146 GLD ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMKE DBQ IOW PWE HLC J64 PUB ALS J102 GUP BUNTR3 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-30-2025
					result += "<!-- Verified with ATCSCC on 03-30-2025 -->";
					result += "<br/>0W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ IOW PWE HLC J64 RSK FLG DUTEY MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE HAWKN RWF FSD J114 SNY FQF J10 RSK GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE ACCRA5 ACCRA RBS STL SGF IFI DANKS EZEEE FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ IRK J26 ICT LBL FTI ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE ACCRA5 ACCRA RBS J71 ENL FAM SGF J98 IRW J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>2W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ IOW PWE HLC J64 PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE UECKR6 DELHI PXV ARG IRW J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>LP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMKE GREAS JAYEX DBQ LNK HLC ALS J102 GUP EAGUL6 KPHX\" readonly>";
					break;
			}
		break; // End of MKE

		// TODO MLB

// MLI skipped
// MOB skipped

		case "MRY":
			switch(arvl) {
				case "DFW": // Updated 05-09-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-09-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMRY AVE J6 PMD J65 KOFFA J169 TFD J50 SSO J4 EWM BGS GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/><br/>North via TBC: <input style=\"width:75%\" value=\"KMRY PANOS NTELL Q158 MYCAL FUZZY LAS J76 FTI J58 PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/>North via PUB: <input style=\"width:75%\" value=\"KMRY SNS FRA OAL KATTS KITTN MLF J28 ICT TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMRY SNS FRA OAL MLF DVC CIM PNH UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-09-2025
					break;
				case "PHX": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMRY BSR SERFR BOILE BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KMRY SNS PXN NTELL Q174 FLCHR BTY J92 BLD PRFUM WOTRO BRUSR1 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO 
					break;
			}
		break; // End of MRY

		case "MSN":
			switch(arvl) {
				case "CLT": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSN WAITS OBK CADIZ J89 BVT IIU SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KMSN WAITS PMM FWA HNN LNDIZ PARQR4 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "DFW": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSN UIN TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>NE Arrival: <input style=\"width:75%\" value=\"KMSN OBK J87 JOT SPI J101 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSN DBQ IRK IRW SPS UKW UKW8 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>0W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSN DBQ IRK BUM J87 TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/>1W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSN DBQ IRK MCI TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>2W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSN DBQ ROEZZ MCI ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>3W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSN DBQ ROEZZ MCI ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>4W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSN DBQ IRK MCI ICT IFI HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>6W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSN DBQ LMN PWE ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>7W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSN DBQ LMN PWE ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>8W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSN DBQ OVR J21 JUDGE ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>W1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSN DBQ ROEZZ MCI TUL HITUG BRDJE5 KDFW\" readonly>";
					result += "<br/>W2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSN DBQ ROEZZ MCI ICT HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>W4 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSN DBQ ROEZZ MCI ICT IFI HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>W6 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSN DBQ LMN PWE ICT HOFFF JOVEM6 KDFW\" readonly>";
					break;
				case "ORD": // Updated 04-19-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-19-2025 M -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL170):</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KMSN JVL JVL1 KORD\" readonly>";
					//result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHX": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSN DBQ LNK J146 GLD ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KMSN MCW ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSN MCW ONL PUB ALS J102 GUP BUNTR3 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of MSN

		case "MSO":
			switch(arvl) {
				case "DFW": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSO MZULA5 LKT J52 DBS CKW PUB J17 PNH MDANO JOVEM6 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KMSO DLN ELLKK BONGO JNC DRO ABQ CME MAF GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/>NE Arrival: <input style=\"width:75%\" value=\"KMSO VICTO1 LKT DNW RIW MBW Q148 BVO HITUG BRDJE5 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of MSO

		case "MSP":
			switch(arvl) {
				case "CLT": // Updated 02-23-2025
					result += "<!-- Updated 02-23-2025 -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><br/><input style=\"width:75%\" value=\"KMSP ZMBRO7 ODI J30 JOT VHP J24 FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KMSP COULT7 DLL J34 BAE J89 OBK FWA J178 APE HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KMSP RST1 ALO STL Q19 HITMN TAZZA FILPZ4 KCLT\" readonly>"; // CDR S2
					result += "<br/>SW Arrival: <input style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ DABOY SGF MEMFS VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSP DLH IWD GRB PMM FWA FLM TAFTT PARQR4 KCLT\" readonly>"; // CDR N2
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
					result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
					result += "<br/>E1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP WLSTN7 GRB PMM FWA FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>E2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP COULT7 DLL OBK FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>E3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP ZMBRO7 ODI J30 JOT VHP FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>N2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP DLH IWD GRB PMM FWA FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>N3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP HYR KP06K GRB PMM FWA FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP ZMBRO7 ODI J30 JOT VHP FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>S2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP RST1 ALO STL Q19 HITMN TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/>S3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ DABOY DSM Q19 HITMN TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/>W1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP SCHEP1 RXANN DURWN OVR IRK STL Q19 HITMN TAZZA FILPZ4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ OVR J21 ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>NE Arrival: <input style=\"width:75%\" value=\"KMSP RST1 ALO IRK SGF RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>BEREE: <input style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ OVR J21 ICT HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>DFW EAST 1: <input style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ OVR PWE ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>DFW EAST 2: <input style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ OVR PWE ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>DFW FSM: <input style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ OVR J41 MCI J25 TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/>DFW WEST: <input style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ OVR J21 ICT TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ OVR J21 IRW FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>E1: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP WLSTN7 GRB BAE BDF RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>E2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP COULT7 DLL BRIBE ROEZZ BUM J87 TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>E3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP ZMBRO7 ODI J30 BRIBE KG75K ROEZZ BUM J87 TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>P1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ OVR J21 ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>S2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP RST1 ALO ROEZZ BUM J87 TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>S3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ OVR J21 IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>W1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP SCHEP1 RXANN TEYOU ISTIQ ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>W2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP LEINY6 LEINY HON ONL ISTIQ ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>W3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP KBREW2 FAR ABR ONL ISTIQ ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					break;
				case "ORD": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL300):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSP RST1 RST ZZIPR FYTTE7 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSP MCW JVL1 KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>E1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP WLSTN7 GRB FGHRN ERNNY8 KORD\" readonly>";
					result += "<br/>E2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP COULT7 DLL MSN JAKSA MOOPS FYTTE FYTTE7 KORD\" readonly>";
					result += "<br/>E3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP ZMBRO7 ODI J34 DLL MSN CHMPN FYTTE7 KORD\" readonly>";
					result += "<br/>N3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP HYR KP06K OVETE MADII7 KORD\" readonly>";
					result += "<br/>P1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP RST1 RST ZZIPR FYTTE7 KORD\" readonly>";
					result += "<br/>S3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ POCIR MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>W1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP SCHEP1 RXANN DURWN FOD MYRRS FYTTE7 KORD\" readonly>";
					break;
				case "PHX": // Updated 01-04-2025
					result += "<!-- Updated 01-04-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSP SCHEP1 RXANN TEYOU ONL LBF PUB ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ OVR GCK J96 CIM ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KMSP LEINY6 LEINY VIVID BFF DVC CORKR TENTS BRUSR1 KPHX\" readonly>";
					result += "<br/><br/>EAGUL 2: <input style=\"width:75%\" value=\"KMSP SCHEP1 RXANN TEYOU LLUKY PUB J64 RSK FLG DUTEY MAIER BRUSR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSP ONL LBF PUB ALS J102 GUP BUNTR3 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>E2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP COULT7 DLL BRIBE DBQ ROTTN PWE HLC J64 PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>E3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP ZMBRO7 ODI J30 SIBER DBQ DSM LNK J146 GLD PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>N1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP GEP BRNRD FAR DPR BFF DVV ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>P1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP SCHEP1 RXANN TEYOU LLUKY PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>S2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP RST1 ALO DSM LNK J146 GLD PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>S3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP ORSKY3 ONTIJ OVR LNK J146 GLD PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>W1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP SCHEP1 RXANN TEYOU LLUKY PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>W2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP LEINY6 LEINY VIVID PUB ALS GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>W3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSP KBREW2 FAR ABR PUB ALS GUP EAGUL6 KPHX\" readonly>";
					break;
			}
		break; // End of MSP

		case "MSY":
			switch(arvl) {
				case "CLT": // Updated 06-14-202
					result += "<!-- Updated 06-14-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSY CATLN BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KMSY GOOGY TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMSY SJI J2 CEW ALLMA PONZE BANKR5 KCLT\" readonly>"; // CDR 0J
					result += "<br/><br/>CLT NO JONZE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMSY SJI J2 CEW ALLMA PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>CLT NO JONZE BANKR<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMSY SJI J2 CEW ALLMA ISUZO CHECR STOCR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSY HRV SJI MGM RMG SOT LIINN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-14-2025
					result += "<!-- Verified with ATCSCC on 06-14-2025 -->";
					result += "<br/>0J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY SJI CEW ALLMA PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>1P<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MEI JAMMR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>7T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MCB IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					break;
				case "DCA": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSY CATLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/><br/>North/West: <input style=\"width:75%\" value=\"KMSY MCB J35 SQS HITMN Q34 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/><br/>MGM 1: PLAYBOOK MGM 2 : <input style=\"width:75%\" value=\"KMSY CATLN FRDDO KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>MGM 3: <input style=\"width:75%\" value=\"KMSY CATLN FRDDO NOKIE TWINS BLAAN Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>0B: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MCB J35 XESSS MEMFS Q34 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>0E: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MCB MEMFS STL J101 SPI JOT J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
					result += "<br/>0G: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY CATLN FRDDO NOKIE TWINS BLAAN Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>0T: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY CATLN MGMRY KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>1P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY CATLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>2T (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MCB MEMFS PXV RINTE APE J30 LUISE FRDMM6 KDCA\" readonly>";
					result += "<br/>3P (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY CATLN FRDDO NOKIE TWINS BLAAN Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>7T (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MCB J35 XESSS MEMFS Q34 SITTR TRUPS5 KDCA\" readonly>";
					break;
				case "DFW": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KMSY IAH CRIED BEREE3 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KMSY MCB MHZ JRHED SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>DFW EAST 1/2: <input style=\"width:75%\" value=\"KMSY IAH CRGER GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSY MCB SWB EMG YEAGR4 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>0N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>0S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>6N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY IAH CRIED BEREE3 KDFW\" readonly>";
					result += "<br/>6S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY IAH CRIED BEREE3 KDFW\" readonly>";
					result += "<br/>7N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY KCEEE TKNIQ MOLLR CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>7S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY KCEEE TKNIQ MOLLR CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>9N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MCB MHZ JRHED SEEVR4 KDFW\" readonly>";
					result += "<br/>9S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MCB MHZ JRHED SEEVR4 KDFW\" readonly>";
					break;
				case "LGA": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSY CATLN Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>";
					result += "<br/><br/>North/West: <input style=\"width:75%\" value=\"KMSY MCB J35 XESSS MEMFS Q29 DUTSH DJB CXR J146 MIP MIP4 KLGA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "MIA": // Updated 01-28-2025
					result += "<!-- Updated 01-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KMSY BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";					
					result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMSY CEW J2 DEFUN FROGZ4 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>0L (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY CEW J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>0Q (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					break;
				case "PHL": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSY CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KMSY MCB J35 XESSS MEMFS Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/><br/>MGM 3: <input style=\"width:75%\" value=\"KMSY CATLN FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSY GCV MGM LGC ODF SPA GSO BEARI FAK SWL VCN9 KPHL\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>0B (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MCB J35 XESSS MEMFS Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>0D (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MCB MEMFS STL J101 SPI JOT J30 TRAKK J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>0E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MCB MEMFS STL J101 SPI JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>0T (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY CATLN MGMRY TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>1P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>2T (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MCB MEMFS PXV RINTE JST BOJID4 KPHL\" readonly>";
					result += "<br/>7T (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMSY MCB J35 XESSS MEMFS Q34 MAULS BBDOL PAATS4 KPHL\" readonly>";
					break;
				case "PHX": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMSY LFT LCH J2 IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KMSY AEX J58 FUZ TXO ABQ ZUN EAGUL6 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of MSY

		case "MTJ":
			switch(arvl) {
				case "DFW": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMTJ HBU3 HBU J206 ALS PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>SW Arrival: <input style=\"width:75%\" value=\"KMTJ HBU3 HBU ALS TCC GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/>Via ABQ: <input style=\"width:75%\" value=\"KMTJ MTJ2 MTJ RSK J15 ABQ J72 TXO TURKI JOVEM6 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMTJ MTJ2 MTJ HBU J206 ALS PNH UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of MTJ

		case "MYR":
			switch(arvl) {
				case "CLT": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMYR OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KMYR FLO RASLN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";					
					break;
			}
		break; // End of MYR

		case "OKC":
			switch(arvl) {
				case "CLT": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOKC FUNNL3 PHARA ARG BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KOKC RDHWK3 HOLLE LIT J14 YAALL VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KOKC DRLER SGF J98 FAM J78 IIU TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOKC TUL RZC ARG J46 VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "DFW":
					result += "<br/><br/><b>Faa Pref Route: (Expect FL230)</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOKC MUDDE3 MUDDE RBUKL VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>NE Arrival: <input style=\"width:75%\" value=\"KOKC RDHWK3 HOLLE MLC AXXEE BRDJE5 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOKC IRW FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of OKC

		case "OMA":
			switch(arvl) {
				case "CLT": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOMA LMN IRK J151 STL PXV KI45O SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/><b style=\"color:orange\">KI45O included to stay out of ZME</b>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KOMA STJ BUM HUW MEM THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KOMA DSM J10 IOW MZV BDF RBS VHP J24 FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOMA MN STL BNA VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "DFW":
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOMA LNK SLN HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>NE Arrival: <input style=\"width:75%\" value=\"KOMA MCI BUM RZC FSM RRNET BRDJE5 KDFW\" readonly>";
					result += "<br/>SW Arrival: <input style=\"width:75%\" value=\"KOMA OVR GCK PNH BGS GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/>BEREE NORTH: <input style=\"width:75%\" value=\"KOMA OVR J21 ICT HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/>BEREE SOUTH: <input style=\"width:75%\" value=\"KOMA OVR J21 ICT HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>BOOVE: <input style=\"width:75%\" value=\"KOMA ICT TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>DFW EAST 1: <input style=\"width:75%\" value=\"KOMA OVR PWE ICT HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>DFW EAST 2: <input style=\"width:75%\" value=\"KOMA OVR PWE ICT HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>DFW FSM: <input style=\"width:75%\" value=\"KOMA MCI J25 TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/>DFW WEST: <input style=\"width:75%\" value=\"KOMA OVR J21 ICT TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/>SEEVR 2: <input style=\"width:75%\" value=\"KOMA OVR J21 ICT IFI HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOMA MCI TUL FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "MIA": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOMA MCI MEMFS MGMRY ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KOMA STJ SGF LIT SQS MERDN DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KOMA STJ MCI BUM EOS RZC ELD HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "ORD": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOMA FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KOMA LMN IRK BENKY6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOMA FOD MCW JVL1 KORD\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHX": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOMA LNK J146 GLD PUB ALS J102 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KOMA OBH SNY DVC TBC TENTS BRUSR1 KPHX\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KOMA OVR J21 ICT J26 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KOMA PWE HLC J64 PUB ALS J102 GUP BUNTR3 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of OMA

		case "ONT":
			switch(arvl) {
				case "CLT": // Updated 02-22-2025
					result += "<!-- Updated 02-22-2025 -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><br/>HAR: <input style=\"width:75%\"; value=\"KONT RAJEE4 AVRRY PKE J134 DRK J6 PNH IRW ARG J46 VXV TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South via FUZ: <input style=\"width:75%\"; value=\"KONT RAJEE4 MTBAL CNERY BLH J169 TFD J50 SSO J4 FUZ IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>South via IAH: <input style=\"width:75%\"; value=\"KONT RAJEE4 MTBAL CNERY BLH J169 TFD J50 ELP J86 IAH J2 SJI Q56 CATLN MGMRY THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>North via ICT: <input style=\"width:75%\"; value=\"KONT SNSHN5 LAS J146 DVC PUB J28 ICT ARG TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/>North via HYS: <input style=\"width:75%\"; value=\"KONT SNSHN5 LAS J146 DVC J197 HGO J24 HYS BUM J112 FAM BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>CLT NO FILPZ: <span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KONT RAJEE4 MTBAL CNERY BLH J169 TFD J50 SSO EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>CLT NO JONZE: <span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KONT RAJEE4 AVRRY LANCY J96 DRK J6 IRW FSM MEMFS Q34 HITMN TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>"
					result += "<br/><input style=\"width:75%\"; value=\"KONT NIKKL1 TRM PKE J78 IRW J98 TUL J46 VXV LIINN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-22-2025
					result += "<!-- Verified with ATCSCC on 02-22-2025 -->";
					result += "<br/>NF<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KONT RAJEE4 MTBAL CNERY BLH J169 TFD J50 SSO EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>NJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KONT RAJEE4 AVRRY LANCY J96 DRK J6 IRW FSM MEMFS Q34 HITMN TAZZA FILPZ4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 07-07-2025
					result += "<!-- Updated 07-07-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KONT RAJEE4 MTBAL CNERY BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KONT RAJEE4 AVRRY LANCY J96 DRK J78 ABQ J72 TXO TURKI VKTRY2 KDFW\" readonly>"; // CDR UK
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KONT RAJEE4 MTBAL CNERY BLH TFD J50 ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>"; // CDR TN
					result += "<br/><br/>North via RSK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KONT SNSHN5 J76 LAS TBC J64 RSK CIM PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><b>For ZAB Avoid: ...RSK J110 GCK END IBAKE VKTRY2 KDFW<\/b>";
					// result += "<br/>DFW WEST<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KONT RAJEE4 MTBAL CNERY BLH TFD J50 ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>"; // CDR TN
					result += "<br/><br/>DFW BOOVE: <input style=\"width:75%\" value=\"KONT RAJEE4 AVRRY NICKT J74 PAYSO KA27S KA27W TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/><b style=\"color:orange\">Goes through White Sands- Weekend/Holiday only<\/b>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KONT POM1 DAG EED J6 DRK SJN J74 TXO UKW8 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
					result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
					result += "<br/>JE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KONT RAJEE4 MTBAL CNERY BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>JU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KONT RAJEE4 MTBAL CNERY BLH J169 TFD J50 ELP FST JCT GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>ME<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KONT RAJEE4 MTBAL CNERY BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>SE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KONT JLI IPL J2 GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>TN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KONT RAJEE4 MTBAL CNERY BLH TFD J50 ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
					result += "<br/>UK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KONT RAJEE4 AVRRY LANCY ABQ J72 TXO TURKI VKTRY2 KDFW\" readonly>";
					break;
				case "PHX": // Updated 05-17-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-17-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KONT RAJEE4 MTBAL CNERY BLH HYDRR1 KPHX\" readonly>";
					// TODO North Rte
					result += "<br/><br/>South via BLH<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KONT NIKKL1 TRM BLH HYDRR1 KPHX\" readonly>";
					result += "<br/>South via IPL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KONT JLI IPL J2 HOGGZ HYDRR1 KPHX\" readonly>"; // CDR SE
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KONT NIKKL1 TRM J169 BLH ARLIN4 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-17-2025
					result += "<!-- Verified with ATCSCC on 05-17-2025 -->";
					result += "<br/>ME<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KONT RAJEE4 MTBAL CNERY BLH HYDRR1 KPHX\" readonly>";
					result += "<br/>SE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KONT JLI IPL J2 HOGGZ HYDRR1 KPHX\" readonly>";
					break;
			}
		break; // End of ONT

		case "ORD":
			result = ord_departures(arvl, tail, ac_type, result);
		break;

		case "ORF":
			switch(arvl) {
				case "CLT": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL220):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KORF COUPN CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KORF KOOKI TINKK TORQD MLLET3 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KORF TYI RDU LIB MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>00 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF COUPN CHSLY6 KCLT\" readonly>";
					result += "<br/>41 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF KOOKI ELLDE OKNEE MLLET3 KCLT\" readonly>";
					break;
				case "DFW": // Updated 04-28-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-28-2025 M -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KORF COUPN BEETN RDU SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>"; // CDR D4
					result += "<br/><b style=\"color:orange\">Anything other than FAA Pref (above) will flag Mando Route violation but pref is only for ZDC<\/b>";
					result += "<br/><br/>SW Arr<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORF COUPN RDU SHPRD IPTAY CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ SOCKK4 KDFW\" readonly>"; // CDR D6
					result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORF HPW FAK MOL J24 HVQ Q68 LITTR MEEOW FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KORF TYI SPA ODF VUZ SQS YEAGR4 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-28-2025
					result += "<!-- Verified with ATCSCC on 04-28-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF COUPN RDU SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>51<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF WAIKS KELLE PSK ALEAN Q66 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>53<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF WAIKS KELLE PSK ALEAN Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>D1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF COUPN RDU SHPRD BURGG MEMFS LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>D2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF COUPN RDU SHPRD IPTAY CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF COUPN RDU SHPRD IPTAY CHOPZ THRSR JAMMR MERDN MCB AEX DAS IAH CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D4<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF COUPN RDU SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>D5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF COUPN RDU SHPRD BURGG MEMFS LIT FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/>D6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF COUPN RDU SHPRD IPTAY CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/>D7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF COUPN RDU SHPRD IPTAY CHOPZ THRSR JAMMR MERDN MCB AEX DAS IAH CRGER GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/>D8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORF COUPN RDU SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN WHINY4 KDFW\" readonly>";
					break;
				case "MIA": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KORF KOOKI SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KORF KOOKI ELLDE Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KORF COUPN RDU CLT SPA THRSR HONID FROGZ4 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of ORF

		case "PBI":
			switch(arvl) {
				case "CLT": // Updated 06-02-2025
					result += "<!-- Updated 06-02-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPBI TBIRD6 VIYAP CHECR STOCR4 KCLT\" readonly>";
					result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS GRUBR Y299 SEELO OGGRE Y436 PITRW STOCR4 KCLT\" readonly>"; // CDR S0
					result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPBI TBIRD6 SHRKS Q77 WIGVO PONZE BANKR5 KCLT\" readonly>"; // CDR T1
					result += "<br/><br/>West via MCN<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC Q116 SHEEK Q118 JOHNN MCN LLNDO PONZE BANKR5 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPBI TBIRD6 VIYAP FLO RASLN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-02-2025
					result += "<!-- Verified with ATCSCC on 06-02-2025 -->";
					result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC KPASA Q99 CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI MIXAE3 HALBI LENDS SEELO OGGRE PITRW STOCR4 KCLT\" readonly>";
					result += "<br/>S0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS GRUBR Y299 SEELO OGGRE Y436 PITRW STOCR4 KCLT\" readonly>";
					result += "<br/>T0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI TBIRD6 VIYAP CHECR STOCR4 KCLT\" readonly>";
					result += "<br/>T1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI TBIRD6 SHRKS Q77 WIGVO PONZE BANKR5 KCLT\" readonly>";
					break;
				case "DCA": // Updated 04-28-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-28-2025 M -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS GRUBR Y299 SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>"; // CDR S0
					result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPBI TBIRD6 VIYAP Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>"; // CDR T0
					result += "<br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS ETECK PELCN ROWSY Y494 SILLY LYNUS B24 DASHA ATR LAFLN DEALE3 KDCA\" readonly>";
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC Q116 SHEEK Q118 THRSR BOBBD TONIO Q34 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPBI OMN CRG CHS RIC IRONS7 KDCA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-28-2025
					result += "<!-- Verified with ATCSCC on 04-28-2025 -->";
					result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC KPASA Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI MIXAE3 HALBI LENDS SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>S0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS GRUBR Y299 SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>T0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI TBIRD6 VIYAP Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
					break;
				case "DFW": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC Y280 REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KPBI TBIRD6 SMELZ Q116 JAWJA DRABK DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KPBI TBIRD6 SMELZ Q116 JAWJA Q116 MEMFS LIT MEEOW FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPBI PHK ORL SZW DEFUN J2 CEW J50 AEX YEAGR4 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>EW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC DOLIE BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>K0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC Y280 REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>K1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC Y280 REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>K2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>K3 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>T0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI TBIRD6 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>T1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI TBIRD6 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS WHINY4 KDFW\" readonly>";
					break;
				case "LGA": // Updated 03-18-2025
					result += "<!-- Updated 03-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS GRUBR Y299 SEELO GARIC Q107 HURTS PROUD2 KLGA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KPBI TBIRD6 VIYAP Q87 HURTS PROUD2 KLGA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-18-2025
					result += "<!-- Verified with ATCSCC on 03-18-2025 -->";
					result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC KPASA Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
					result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI MIXAE3 HALBI LENDS SEELO GARIC Q107 HURTS PROUD2 KLGA\" readonly>";
					result += "<br/>S0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS GRUBR Y299 SEELO GARIC Q107 HURTS PROUD2 KLGA\" readonly>";
					result += "<br/>T0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI TBIRD6 VIYAP Q87 HURTS PROUD2 KLGA\" readonly>";
					break;
					break;
				case "ORD": // Updated 04-28-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-28-2025 M -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPBI TBIRD6 KPASA Q118 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR T0
					result += "<br/><b style=\"color:orange\">Anything other than CDR T0 will flag as Mandatory Route violation<\/b>";
					result += "<br/><br/>OW/East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS PELCN Y309 FLRDA OGGRE Y436 DEDDY QUIWE BENBY DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR S0
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPBI TBIRD6 SMELZ Q116 JAWJA Q116 VLKNN GETME J151 FAM FTZ TRTLL6 KORD\" readonly>";
					result += "<br/>Gulf<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC BAGGS REMIS Y280 REDFN Q105 HRV MCB J35 RUSLR FTZ TRTLL6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPBI OMN CRG AMG ODF VXV J99 IIU FWA KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-28-2025
					result += "<!-- Verified with ATCSCC on 04-28-2025 -->";
					result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC KPASA Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>S0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS PELCN Y309 FLRDA OGGRE Y436 DEDDY QUIWE BENBY DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>S2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>T0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI TBIRD6 KPASA Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>T2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI TBIRD6 SHRKS THRSR Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					break;
				case "PHL": // Updated 06-03-2025 // Mandatory Routes checked
					result += "<!-- Updated 06-03-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS PELCN Y309 FLRDA IDOLS SKARP Q101 KALDA ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPBI TBIRD6 VIYAP Q87 JROSS Q135 RREGG Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC KPASA Q99 PEETT BBDOL PAATS4 KPHL\" readonly>"; // CDR K2
					result += "<br/>WATRS/ZDC Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS PELCN ROWSY Y494 VIRST Y494 SILLY LYNUS B24 DASHA JIIMS4 KPHL\" readonly>";
					// result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS ETECK OZENA ROWSY OTTNG HAAYY WICKE DASHA JIIMS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPBI ORL CRG SAV CHS ILM ORF SWL VCN9 KPHL\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-18-2025
					result += "<!-- Verified with ATCSCC on 03-18-2025 -->";
					result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI OLAKE2 JAYMC KPASA Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI MIXAE3 HALBI LENDS FLRDA IDOLS SKARP Q101 KALDA ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/>S0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI SLIDZ2 LENDS PELCN Y309 FLRDA IDOLS SKARP Q101 KALDA ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/>T0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPBI TBIRD6 VIYAP Q87 JROSS Q135 RREGG Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					break;
			}
		break; // End of PBI

		case "PDX":
			switch(arvl) {
				case "DFW": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPDX WHAMY5 IMB J15 JNC ALS PNH MDANO JOVEM6 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KPDX CASCD3 PUHTS PAWLI Q13 LOMIA OAL J92 BLD J72 TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KPDX LAVAA7 PDT J20 DNJ J82 DBS J175 LAR FQF J17 PNH MDANO JOVEM6 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPDX BTG J16 PDT DNJ J12 TWF J15 JNC ALS PNH UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "MIA": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPDX WHAMY5 IMB KU84K KU75Q CKW KD60Y LYGHT KM39G UJM ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>Ltd OW: <input style=\"width:75%\" value=\"KPDX LAVAA7 PDT J20 LAA J168 SPS J58 HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KPDX WHAMY5 KOATA REO KU66K BCE DEANN DEXTR ZUN KAPEY ELP J86 FST KOBLE KINEY THX LAMMY KLAMS HOOCK BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHX": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPDX WHAMY5 IMB J523 REO BERYL CORKR TENTS BRUSR1 KPHX\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KPDX CASCD3 PUHTS PAWLI Q13 LOMIA YERIN J92 BLD PRFUM WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/>Coastal: <input style=\"width:75%\" value=\"KPDX MINNE5 HISKU HARPR HOMEG HUPTU STIKM AVE BOILE BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/>PHX BUNTR: <input style=\"width:75%\" value=\"KPDX HRMNS6 HYJOE LMT J189 LIN CZQ EHF J65 BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPDX HRMNS J189 LMT J92 FMG J92 BLD COYOT5 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of PDX

		case "PHL":
			switch(arvl) {
				case "ATL": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK OZZZI1 KATL\" readonly>"; // CDR PH
					result += "<br/><br/>South/East: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 MRPIT CEELY Q172 YUTEE SKWKR SITTH2 KATL\" readonly>";
					result += "<br/>North/West: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB HVQ HLRRY ONDRE1 KATL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL WHINZ4 KATL\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-28-2025
					result += "<!-- Verified with ATCSCC on 02-28-2025 -->";
					result += "<br/>75<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE MOL FLASK OZZZI1 KATL\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ HLRRY ONDRE1 KATL\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK CLTCH KERRK FLASK OZZZI1 KATL\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ HLRRY ONDRE1 KATL\" readonly>";
					result += "<br/>KA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 MRPIT CEELY Q172 YUTEE SKWKR JJEDI3 KATL\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK OZZZI1 KATL\" readonly>";
					result += "<br/>PS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB HVQ HLRRY ONDRE1 KATL\" readonly>";
					break;
				case "AUS": // Updated 07-07-2025
					result += "<!-- Updated 07-07-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 AEX LFK WEEED WLEEE7 KAUS\" readonly>"; // CDR PH
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL PTW SARAA J64 MAINE PXV J131 LIT TXK BROBB WINDU SEWZY6 KAUS\" readonly>";
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 SESUE SAV AMG DEFUN J2 LCH Q24 MOLLR DBOYS WLEEE7 KAUS\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY FLIRT MRB PERKS HVQ BNA MEM TXK WINDU BLEWE5 KAUS\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
					result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK CLTCH KERRK MAULS Q40 NIOLA VUZ MHZ AEX WEEED WLEEE7 KAUS\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 AEX LFK WEEED WLEEE7 KAUS\" readonly>";
					break;
				case "BDL": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 DPK DPK3 KBDL\" readonly>"; // CDR PH
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KPHL DITCH T416 DRIFT T320 RICED KEYED MAD BRISS KBDL\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV FQM HNK RKA STELA1 KBDL\" readonly>";
					result += "<br/><br/>PHLYER NORTH (Max FL090)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL PTW FJC T221 LAAYK T216 JUDDS KBDL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW RAV SEG FQM CFB RKA STELA1 KBDL\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-28-2025
					result += "<!-- Verified with ATCSCC on 02-28-2025 -->";
					result += "<br/>FF<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL FJC T221 LAAYK T216 JUDDS KBDL\" readonly>";
					result += "<br/>KY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH T416 JIMEE WAVEY SHIPP BELTT MAD BRISS KBDL\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 DPK DPK3 KBDL\" readonly>";
					result += "<br/>PL<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH T416 DRIFT T320 RICED BELTT MAD BRISS KBDL\" readonly>";
					break;
				case "BNA": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 YOCKY GROAT PASLY4 KBNA\" readonly>"; // CDR PH
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN VXV SWFFT2 KBNA\"; readonly>"; // CDR 48
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-28-2025
					result += "<!-- Verified with ATCSCC on 02-28-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN VXV SWFFT2 KBNA\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB ROD FLM HYK GROAT PASLY4 KBNA\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 MAINE ROD FLM HYK GROAT PASLY4 KBNA\" readonly>";
					result += "<br/>75<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE MOL J24 HVQ Q68 YOCKY GROAT PASLY4 KBNA\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 CREEP Q139 IIU FORKS PASLY4 KBNA\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO Q80 DEWAK GROAT PASLY4 KBNA\" readonly>";
					result += "<br/>KA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD MRPIT CEELY Q172 YUTEE IRQ J99 VXV SWFFT2 KBNA\" readonly>";
					result += "<br/>LM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 MRPIT CEELY Q172 YUTEE THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 YOCKY GROAT PASLY4 KBNA\" readonly>";
					break;
				case "BOS": // Updated 04-08-2025
					result += "<!-- Updated 04-08-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL230):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK ROBUC3 KBOS\" readonly>"; // CDR PH
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KPHL DITCH T416 DRIFT T320 YANTC T224 WOONS KBOS\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV FQM DANZI ALB T608 REVER KBOS\" readonly>";
					result += "<br/><br/>TEC: <input style=\"width:75%\" value=\"KPHL RBV V123 PROUD BDR MAD GON PVD KBOS\" readonly>";
					result += "<br/><br/>PHLYER NORTH (Max FL090)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL PTW FJC T221 LAAYK T295 CTR WHATE JFUND2 KBOS\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-08-2025
					result += "<!-- Verified with ATCSCC on 04-08-2025 -->";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW CHLSE T449 CFB T458 DANZI PONCT JFUND2 KBOS\" readonly>";
					result += "<br/>FJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL FJC T221 LAAYK T295 CTR WHATE JFUND2 KBOS\" readonly>";
					result += "<br/>FP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL FJC T221 LAAYK T295 CTR GDM T608 REVER KBOS\" readonly>";
					result += "<br/>HT<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH T416 JIMEE WAVEY SHLEP ORCHA ROBUC ROBUC3 KBOS\" readonly>";
					result += "<br/>KY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH T416 JIMEE WAVEY SHIPP CCC RUIZE ROBUC3 KBOS\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK ROBUC3 KBOS\" readonly>";
					result += "<br/>PP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH T416 DRIFT T320 YANTC JEWIT T224 WOONS KBOS\" readonly>";
					result += "<br/>RA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW CHLSE T449 CFB GTOWN PONCT JFUND2 KBOS\" readonly>";
					result += "<br/>SC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK ONDEC JFUND2 KBOS\" readonly>";
					break;
				case "BUF": // Updated 02-07-2025
					result += "<!-- Updated 02-07-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW SARAA RAV TYMAN KBUF\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KPHL DITCH Q437 LLUND TRUDE CANAN ALB HANKK KBUF\" readonly>";
					result += "<br/><br/>PHLYER WEST (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL PTW T447 DLMAR ELZ BENEE BUF KBUF\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-28-2025
					result += "<!-- Verified with ATCSCC on 02-28-2025 -->";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB KBUF\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS OXMAN KBUF\" readonly>";
					result += "<br/>FP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW T447 DLMAR ELZ BENEE KBUF\" readonly>";
					result += "<br/>LW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK STUBN BENEE KBUF\" readonly>";
					result += "<br/>PJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV TYMAN KBUF\" readonly>";
					result += "<br/>PL<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW CHLSE DIANO V164 FQM STUBN BENEE KBUF\" readonly>";
					break;
				case "CHS": // Updated 05-10-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-10-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR DFENC Q109 JOHAR AMYLU AMYLU3 KCHS\" readonly>"; // CDR PH
					result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHL STOEN Q75 GSO OBNEE OSPRI7 KCHS\" readonly>"; // CDR 75
					// TODO East/OW
					result += "<br/><br/>West via HVQ<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA DEFFN OSPRI7 KCHS\" readonly>";
					result += "<br/>ZDC Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 LEJOY HVQ J85 SPA DEFFN OSPRI7 KCHS\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL OOD GROUT SBY ORF ISO ILM KCHS\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-10-2025
					result += "<!-- Verified with ATCSCC on 05-10-2025 -->";
					result += "<br/>75<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GSO OBNEE OSPRI7 KCHS\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK JDUBB RRSIN GSO OBNEE OSPRI7 KCHS\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA DEFFN OSPRI7 KCHS\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR DFENC Q109 JOHAR AMYLU AMYLU3 KCHS\" readonly>";
					break;
				case "CLE": // Updated 03-02-2025
					result += "<!-- Updated 03-02-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB UPPRR TRYBE4 KCLE\" readonly>"; // CDR PH
					result += "<br/>North: <input style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 HERBA THOME TRYBE4 KCLE\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS VLADY JANYS ROLLN2 KCLE\" readonly>";
					result += "<br/><br/>PHLYER WEST (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL PTW V12 BOYER T356 RAV T438 RASHE TYROO CIP UPPRR TRYBE4 KCLE\" readonly>";
					result += "<br/>PHLYER WEST Alt (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL MXE T456 VINSE JST UPPRR TRYBE4 KCLE\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PSB YTOWN KCLE\" readonly>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV J64 EWC ROLLN ROLLN2 KCLE\"; readonly>"; // CDR 64
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-02-2025
					result += "<!-- Verified with ATCSCC on 03-02-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 HERBA THOME TRYBE4 KCLE\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 EWC ROLLN ROLLN2 KCLE\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR ROLLN ROLLN2 KCLE\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS VLADY JANYS ROLLN2 KCLE\" readonly>";
					result += "<br/>FM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE T456 VINSE JST UPPRR TRYBE4 KCLE\" readonly>";
					result += "<br/>FP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW V12 BOYER T356 RAV T438 RASHE TYROO CIP UPPRR TRYBE4 KCLE\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB UPPRR TRYBE4 KCLE\" readonly>";
					break;
				case "CLT": // Updated 03-02-2025
					result += "<!-- Updated 03-02-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN Q75 GVE AIROW CHSLY6 KCLT\" readonly>"; // CDR PH
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>East/Full OW: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE B24 LYNUS SILLY HOBOH Y488 STERN Y493 TUBBS DIZNY Y436 PITRW STOCR4 KCLT\" readonly>";
					result += "<br/><br/>PHLYER SOUTH 1+2 (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD T303 OUTLA COUPN CHSLY6 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN GVE LYH MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-02-2025
					result += "<!-- Verified with ATCSCC on 03-02-2025 -->";
					result += "<br/>48<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB J85 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK SCRAM WALCE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>FE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD ENO T224 MCDON KCLT\" readonly>";
					result += "<br/>FT<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD T303 OUTLA COUPN CHSLY6 KCLT\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>KA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD CRPLR Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					break;
				case "CMH": // Updated 03-02-2025
					result += "<!-- Updated 03-02-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR CLPRR3 KCMH\" readonly>"; // CDR PH
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 CANCR WWSHR CBUSS2 KCMH\" readonly>"; // CDR 60
					result += "<br/>North via DITCH: <input style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 HERBA JHW WWSHR CBUSS2 KCMH\" readonly>";
					result += "<br/><br/>PHLYER WEST (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL PTW V12 BOYER HAR V12 AGC AIR CLPRR3 KCMH\" readonly>";
					result += "<br/>PHLYER WEST Alt (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL MXE T456 VINSE LEJOY AIR CLPRR3 KCMH\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 EWC J64 MAINE APE KCMH\" readonly>"; // CDR 64
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-02-2025
					result += "<!-- Verified with ATCSCC on 03-02-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 HERBA JHW WWSHR CBUSS2 KCMH\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 CANCR WWSHR CBUSS2 KCMH\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 EWC J64 MAINE APE KCMH\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS SCRLT2 KCMH\" readonly>";
					result += "<br/>FM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE T456 VINSE LEJOY AIR CLPRR3 KCMH\" readonly>";
					result += "<br/>FP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW V12 BOYER HAR V12 AGC AIR CLPRR3 KCMH\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 EYTEE J149 HACKS SCRLT2 KCMH\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR CLPRR3 KCMH\" readonly>";
					result += "<br/>PS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB CIP ACO WWSHR CBUSS2 KCMH\" readonly>";
					break;
				case "CVG": // Updated 02-07-2025
					result += "<!-- Updated 02-07-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS GAVNN7 KCVG\" readonly>"; // CDR PH
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB MAULL KODIE SAVVI TIGRR4 KCVG\" readonly>"; // CDR 60
					result += "<br/><br/>PHLYER WEST (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL MXE T456 VINSE LEJOY AIR SAVVI TIGRR4 KCVG\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR SAVVI TIGRR4 KCVG\" readonly>"; // CDR 80
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-02-2025
					result += "<!-- Verified with ATCSCC on 03-02-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 HERBA JHW MAULL KODIE SAVVI TIGRR4 KCVG\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB MAULL KODIE SAVVI TIGRR4 KCVG\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV MAULL KODIE SAVVI TIGRR4 KCVG\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR SAVVI TIGRR4 KCVG\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO COLNS GAVNN7 KCVG\" readonly>";
					result += "<br/>FM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE T456 VINSE LEJOY AIR SAVVI TIGRR4 KCVG\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS GAVNN7 KCVG\" readonly>";
					result += "<br/>PS<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB SAVVI TIGRR4 KCVG\" readonly>";
					break;
				case "DCA": // Updated 03-02-2025
					result += "<!-- Updated 03-02-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL120):</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL DQO BAINS SUDOY CLIPR CLIPR3 KDCA\" readonly>";
					result += "<br/><b style=\"color:black\">Avg FL100 but charted minimum FL120 at CLIPR for DCA CLIPR arrival<\/b>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL DQO V166 BELAY V378 BAL KDCA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed as of 03-03-2025
					break;
				case "DEN": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 LNK OBH BRWRY LAWGR3 KDEN\" readonly>"; // CDR PH
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV J64 FWA JOT J60 LNK OBH BRWRY LAWGR3 KDEN\"; readonly>"; // CDR 64
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-28-2025
					result += "<!-- Verified with ATCSCC on 02-28-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 RAAKK Q438 RUBYY PMM J94 DBQ FOD ONL PORDR AALLE3 KDEN\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 FWA JOT J60 LNK OBH BRWRY LAWGR3 KDEN\" readonly>";
					result += "<br/>6F<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J78 FAM J98 SGF ICT GCK KIISS CLASH4 KDEN\" readonly>";
					result += "<br/>6T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG TUL GCK KIISS CLASH4 KDEN\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR APE J178 FWA JOT J60 LNK OBH BRWRY LAWGR3 KDEN\" readonly>";
					result += "<br/>8N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT BRNAN Q42 LCOLN IRK J26 MCI J24 OATHE CLASH4 KDEN\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB Q818 FNT J94 DBQ FOD ONL PORDR AALLE3 KDEN\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO Q176 STL J24 OATHE CLASH4 KDEN\" readonly>";
					result += "<br/>HL<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 LMN PWE HLC OATHE CLASH4 KDEN\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 BUM J110 GCK KIISS CLASH4 KDEN\" readonly>";
					result += "<br/>MC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 MCI J24 OATHE CLASH4 KDEN\" readonly>";
					result += "<br/>P1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG FSM IRW PNH ZIGEE NIIXX3 KDEN\" readonly>";
					result += "<br/>P2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN Q66 LITTR KOMMA IRW J6 PNH ZIGEE NIIXX3 KDEN\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 LNK OBH BRWRY LAWGR3 KDEN\" readonly>";
					result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 STL HYS J24 OATHE CLASH4 KDEN\" readonly>";
					break;
					break;
				case "DFW": // Updated 03-02-2025
					result += "<!-- Updated 03-02-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>"; // CDR PH
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>"; // CDR CQ
					result += "<br/>North: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FYLLS PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>"; // CDR 80
					result += "<br/>OOD/Coastal: <input style=\"width:75%\"; value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR JAMMR MERDN MLU RRONY SEEVR4 KDFW\" readonly>";
					result += "<br/>DQO/North via STL: <input style=\"width:75%\"; value=\"KPHL DQO BELAY MORTY OTTTO Q176 STL SGF HITUG BRDJE5 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J78 PXV J131 LIT WILBR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-02-2025
					result += "<!-- Verified with ATCSCC on 03-02-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 HERBA JHW Q29 KLYNE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN Q66 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 MAINE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>75<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FYLLS PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>B6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ THRSR VUZ J14 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>B7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>CH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 SESUE PANDY TWINS NOKIE FRDDO ARNNY Q184 SARKK MLU YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>CQ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO Q80 FAREV RAMRD Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>J5<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD SQS AEX LFK CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>J8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC AEX LFK CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>KA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>LM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 MRPIT CEELY Q172 YUTEE IRQ VUZ J14 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>Q6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>Q7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB RINTE Q139 IIU BWG SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>U6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 JOT MZV IRK MCI ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>U8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 VHP J24 STL BUM ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>UN<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 JOT MZV IRK MCI ICT IRW HOFFF JOVEM6 KDFW\" readonly>";
					break;
				case "DSM": // Updated 03-02-2025
					result += "<!-- Updated 03-02-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB J60 IOW J10 DSM KDSM\"; readonly>"; // CDR 60
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB J60 IOW J10 DSM KDSM\"; readonly>"; // CDR 60
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-02-2025
					result += "<!-- Verified with ATCSCC on 03-02-2025 -->";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 IOW J10 DSM KDSM\" readonly>";
					break;
				case "DTW": // Updated 03-02-2025
					result += "<!-- Updated 03-02-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT BRNAN Q42 PSYKO KOZAR BONZZ2 KDTW\" readonly>"; // CDR PH
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL MXE PENSY J110 LEJOY KOZAR BONZZ2 KDTW\"; readonly>"; // CDR 80
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-02-2025
					result += "<!-- Verified with ATCSCC on 03-02-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 REXXY JACCI FERRL2 KDTW\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 EWC EEEZI BONZZ BONZZ2 KDTW\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 LEJOY Q178 KOZAR BONZZ2 KDTW\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 LLUND CAM Q822 GONZZ DONEO TPGUN2 KDTW\" readonly>";
					result += "<br/>DJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB TRAAD JACCI FERRL2 KDTW\" readonly>";
					result += "<br/>DK<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB JACCI FERRL2 KDTW\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS JAMOX BONZZ2 KDTW\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ JAMOX BONZZ2 KDTW\" readonly>";
					result += "<br/>P6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 LLUND CAM Q822 TANKO GRAYT LAYKS2 KDTW\" readonly>";
					result += "<br/>P7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB Q818 WOZEE Q935 HOCKE GRAYT LAYKS2 KDTW\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT BRNAN Q42 PSYKO KOZAR BONZZ2 KDTW\" readonly>";
					result += "<br/>PS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB CIP EEEZI BONZZ BONZZ2 KDTW\" readonly>";
					break;
				case "FLL": // Updated 03-02-2025
					result += "<!-- Updated 03-02-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD CRPLR KOOKI Q133 CHIEZ Y291 MAJIK CUUDA3 KFLL\" readonly>"; // CDR AR
					result += "<br/>Non OW: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR PAACK Q97 PRMUS CUUDA3 KFLL\" readonly>"; // CDR TR
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE B24 LYNUS SILLY Y485 STERN Y493 JENKS MAJIK CUUDA3 KFLL\" readonly>"; // CDR AZ
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA ENEME TEEKY3 KFLL\" readonly>"; // CDR 48
					result += "<br/>West via VXV: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ SPAYD VXV THRSR ZPLEN TEEKY3 KFLL\" readonly>"; // CDR 6A
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL OOD SBY ORF ISO ILM CHS OMN MLB KFLL\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-02-2025
					result += "<!-- Verified with ATCSCC on 03-02-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA ENEME TEEKY3 KFLL\" readonly>";
					result += "<br/>4A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN VXV THRSR ZPLEN TEEKY3 KFLL\" readonly>";
					result += "<br/>4C<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA QUIWE Q93 PRMUS CUUDA3 KFLL\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB J83 SPA ENEME TEEKY3 KFLL\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ SPAYD VXV THRSR ZPLEN TEEKY3 KFLL\" readonly>";
					result += "<br/>6A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ SPAYD VXV THRSR ZPLEN TEEKY3 KFLL\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA ENEME TEEKY3 KFLL\" readonly>";
					result += "<br/>83<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA QUIWE Q93 PRMUS CUUDA3 KFLL\" readonly>";
					result += "<br/>85<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA ENEME TEEKY3 KFLL\" readonly>";
					result += "<br/>8T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ SPAYD VXV THRSR ZPLEN TEEKY3 KFLL\" readonly>";
					result += "<br/>AR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD CRPLR KOOKI Q133 CHIEZ Y291 MAJIK CUUDA3 KFLL\" readonly>";
					result += "<br/>AZ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE B24 LYNUS SILLY Y485 STERN Y493 JENKS MAJIK CUUDA3 KFLL\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK JDUBB RRSIN GSO Q83 JEVED Q97 PRMUS CUUDA3 KFLL\" readonly>";
					result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD CRPLR Q409 OKNEE ENEME TEEKY3 KFLL\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA ENEME TEEKY3 KFLL\" readonly>";
					result += "<br/>KA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR PAACK Q97 PRMUS CUUDA3 KFLL\" readonly>";
					result += "<br/>SA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GSO Q83 JEVED Q97 PRMUS CUUDA3 KFLL\" readonly>";
					result += "<br/>SP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA QUIWE Q93 PRMUS CUUDA3 KFLL\" readonly>";
					result += "<br/>TA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 ENEME TEEKY3 KFLL\" readonly>";
					result += "<br/>TR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR PAACK Q97 JEVED ROKKT CUUDA3 KFLL\" readonly>";
					break;
				case "GRR": // Updated 03-02-2025
					result += "<!-- Updated 03-02-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB KGRR\" readonly>"; // CDR PH
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB J60 DJB KGRR\"; readonly>"; // CDR PH
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-02-2025
					result += "<!-- Verified with ATCSCC on 03-02-2025 -->";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB KGRR\" readonly>";
					break;
				case "IAH": // Updated 03-02-2025
					result += "<!-- Updated 03-02-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 AEX DOOBI3 KIAH\" readonly>"; // CDR PH
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ MGMRY CATLN Q56 HRV LINKK1 KIAH\" readonly>"; // CDR S5
					result += "<br/>North: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR DHART SWB ZEEKK3 KIAH\" readonly>"; // CDR J6
					result += "<br/>OOD/Coastal: <input style=\"width:75%\"; value=\"KPHL OOD TEBEE HAYDO TRPOD CRPLR BGBRD SKARP RAPZZ Q172 YUTEE IRQ THRSR SARKK AEX GESNR2 KIAH\" readonly>";
					result += "<br/><br/>DQO TNL SW: <input style=\"width:75%\"; value=\"KPHL DQO BELAY MORTY LITME HIRCK CLTCH KERRK MAULS Q40 AEX SKNRD5 KIAH\" readonly>";
					result += "<br/>TXMEX N/S: <input style=\"width:75%\"; value=\"KPHL STOEN Q75 GVE LYH COLZI DEBIE BGRED MGM SJI NNCEE2 KIAH\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL MXE PENSY J110 STL J101 LIT J180 SWB ZEEKK3 KIAH\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-02-2025
					result += "<!-- Verified with ATCSCC on 03-02-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 HERBA JHW Q29 KLYNE PXV J131 LIT J180 SWB ZEEKK3 KIAH\" readonly>";
					result += "<br/>59<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ MGMRY GARTS MCB AEX DOOBI3 KIAH\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB PXV J131 LIT J180 SWB ZEEKK3 KIAH\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 MAINE PXV J131 LIT J180 SWB ZEEKK3 KIAH\" readonly>";
					result += "<br/>75<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI LINKK1 KIAH\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FYLLS PXV J131 LIT J180 SWB ZEEKK3 KIAH\" readonly>";
					result += "<br/>AT<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ THRSR SARKK AEX DOOBI3 KIAH\" readonly>";
					result += "<br/>BU<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 BUM J87 CVE DRLLR5 KIAH\" readonly>";
					result += "<br/>CH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 SESUE PANDY TWINS NOKIE MGMRY CATLN Q56 SJI LINKK1 KIAH\" readonly>";
					result += "<br/>CV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG FSM URH CVE DRLLR5 KIAH\" readonly>";
					result += "<br/>D6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER SQS SWB ZEEKK3 KIAH\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK CLTCH KERRK MAULS Q40 AEX DOOBI3 KIAH\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR DHART SWB ZEEKK3 KIAH\" readonly>";
					result += "<br/>KA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD CRPLR PAACK Q97 ELLDE KAATT Q172 YUTEE IRQ THRSR SARKK AEX DOOBI3 KIAH\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 AEX DOOBI3 KIAH\" readonly>";
					result += "<br/>S5<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ MGMRY CATLN Q56 HRV LINKK1 KIAH\" readonly>";
					result += "<br/>SW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 NIOLA MEI SWB ZEEKK3 KIAH\" readonly>";
					break;
				case "IND": // Updated 03-02-2025
					result += "<!-- Updated 03-02-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT BRNAN Q42 HIDON RINTE SNKPT2 KIND\" readonly>"; // CDR PH
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB RINTE SNKPT2 KIND\" readonly>"; // CDR 60
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS PLASH SNKPT2 KIND\" readonly>"; // CDR DQ
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB J60 DJB RINTE SNKPT2 KIND\"; readonly>"; // CDR 60
					result += "<br/><span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KPHL PTW HAR J152 ROD CLANG7 KIND\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-19-2025
					result += "<!-- Verified with ATCSCC on 06-19-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH LUIGI HNNAH LAAYK Q436 HERBA JHW Q29 KLYNE RINTE SNKPT2 KIND\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB RINTE SNKPT2 KIND\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 MAINE RINTE SNKPT2 KIND\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR RINTE SNKPT2 KIND\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS PLASH SNKPT2 KIND\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 HNN FLM HAGAL GIIBS4 KIND\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT BRNAN Q42 HIDON RINTE SNKPT2 KIND\" readonly>";
					result += "<br/>PS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB CIP ACO DJB KLYNE RINTE SNKPT2 KIND\" readonly>";
					break;
				case "JAX": // Updated 03-02-2025
					result += "<!-- Updated 03-02-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 SESUE ESENT LUNNI1 KJAX\" readonly>"; // CDR PH
					result += "<br/><br/>STOEN/West: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA IRQ FINNE OHDEA1 KJAX\" readonly>"; // CDR 48
					result += "<br/>MXE/West via HVQ: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA IRQ FINNE OHDEA1 KJAX\" readonly>"; // CDR J6
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL OOD GROUT SBY ORF ISO ILM CHS SAV KJAX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-02-2025
					result += "<!-- Verified with ATCSCC on 03-02-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA IRQ FINNE OHDEA1 KJAX\" readonly>";
					result += "<br/>75<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GSO Q83 WURFL ESENT LUNNI1 KJAX\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA IRQ FINNE OHDEA1 KJAX\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA IRQ FINNE OHDEA1 KJAX\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 SESUE ESENT LUNNI1 KJAX\" readonly>";
					break;
				case "LAS": // Updated 03-27-2025
					result += "<!-- Updated 03-27-2025 -->";
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 MCI J24 SLN J102 ALS J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>"; // CDR MC
					result += "<br/>PTW/North: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BDF LMN PWE MCK J44 FQF J80 JNC HVE GGAPP CHOWW3 KLAS\" readonly>"; // CDR ST
					result += "<br/>STOEN/South via EWM: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC EIC J4 ABI J66 EWM DMN GREBE J86 INW HAHAA RKSTR4 KLAS\" readonly>"; // CDR EM
					result += "<br/><br/>MXE/South via FSM<input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG FSM IRW PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>"; // CDR P1
					result += "<br/>STOEN/South via EWM: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC EIC J4 ABI J66 EWM DMN GREBE J86 INW HAHAA RKSTR4 KLAS\" readonly>"; // CDR EM
					result += "<br/><br/>MEX OBGIY WEST 2: <input style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX THX OBGIY AGNID VYLLA J92 DRK ELLDA RKSTR4 KLAS\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW J48 PENSY J110 AIR J80 MCI J24 HGO J197 DVC PGA BLAID2 KLAS\" readonly>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 HVE GGAPP CHOWW3 KLAS\" readonly>"; // CDR 60
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-02-2025
					result += "<!-- Verified with ATCSCC on 03-02-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 RAAKK Q438 RUBYY DABJU J36 BAE J16 MCW J148 CYS EKR J100 SAKES GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 LMN PWE HLC J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>6F<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J78 FAM SGF ICT GCK J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>6T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG TUL MMB FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 DBL J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>8N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT BRNAN Q42 LCOLN IRK J26 MCI J80 DBL J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB Q818 WOZEE Q935 HOCKE BAE J16 MCW J148 CYS EKR J100 SAKES GGAPP CHOWW3 KLAS\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO COLNS Q176 BUM J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>EM<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC EIC J4 ABI J66 EWM DMN GREBE J86 INW HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>EP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT FUSCO CNX HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>G1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR TXK BYP UKW HNKER TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>G2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC SUTTN J52 TXK BYP UKW HNKER TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 BUM J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>LM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK SPS J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>LV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE FST CNM CME CNX HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>MC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 MCI J24 SLN J102 ALS J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG FSM IRW PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>P2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN Q66 LITTR KOMMA IRW J6 PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
					result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
					break;
				case "LAX": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 STL J134 ICT LBL CIM J134 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>"; // CDR ST
					result += "<br/><br/>PTW/North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>"; // CDR 60
					result += "<br/>STOEN/South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC EIC J4 ABI J66 EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>"; // CDR EM
					result += "<br/><br/>DITCH/North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB Q818 WOZEE Q935 HOCKE BAE J16 MCW J148 DTA MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>"; // CDR 95
					result += "<br/>South via HRV<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT FST ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>"; // CDR EP
					result += "<br/><br/>DQO TUNNEL WEST (FL230 to OTTTO)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO COLNS Q176 CIM DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>"; // CDR DQ
					result += "<br/>MEX OBGIY WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX THX OBGIY AGNID VYLLA J92 TUS J104 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE LRP J6 FLIRT J110 VHP J80 MCI J24 SLN J96 GUP J96 DRK J231 TNP SEAVU2 KLAX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 RAAKK Q438 RUBYY PMM OBK IOW J60 HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 LMN PWE HLC J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/>6F<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J78 FAM SGF LBL CIM J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>6T<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG TUL MMB FTI J8 GUP J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 MCI J24 SLN J102 ALS J44 RSK J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/>8N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT BRNAN Q42 LCOLN IRK J26 MCI J24 SLN J102 ALS J44 RSK J64 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB Q818 WOZEE Q935 HOCKE BAE J16 MCW J148 DTA MLF WINEN Q73 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO COLNS Q176 CIM DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>EM<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC EIC J4 ABI J66 EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>EP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT FST ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>G1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR TXK BYP UKW HNKER CNX J74 SJN J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>G2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC SUTTN J52 TXK BYP UKW HNKER CNX J74 SJN J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 BUM ICT LBL FTI J8 GUP INW DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>LM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK SPS J72 ABQ J6 DRK CGNEY ANJLL4 KLAX\" readonly>";
					result += "<br/>LV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG FSM IRW PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>P2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN Q66 LITTR KOMMA IRW J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 STL J134 ICT LBL CIM J134 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					break;
				case "LGA": // Updated 03-03-2025
					result += "<!-- Updated 03-03-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL080):</b>";
					result += "<br/>TEC: <input style=\"width:75%\"; value=\"KPHL RBV V123 PROUD KLGA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed as of 03-04-2025
					break;
				case "MCI": // Updated 03-03-2025
					result += "<!-- Updated 03-03-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 SPI EUING RUDDH3 KMCI\" readonly>"; // CDR PH
					result += "<br/><br/>North/ZID Avoid: <input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB J60 JOT J26 BDF BULET RUDDH3 KMCI\"; readonly>"; // CDR 60
					result += "<br/>South/ZOB Avoid: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 STL EUING RUDDH3 KMCI\" readonly>"; // CDR J6
					result += "<br/><input style=\"width:75%\"; value=\"KPHL STOEN REEFI EMI MRB J6 COLNS Q176 STL EUING RUDDH3 KMCI\" readonly>";
					result += "<br/><br/>DITCH/North: <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 HERBA JHW DJB J60 JOT J26 BDF BULET RUDDH3 KMCI\" readonly>"; // CDR 36
					result += "<br/>STOEN/South: <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL STOEN GVE PERRI HVQ OCASE PXV TWRAY J98 SGF NELVY MHOMS3 KMCI\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-03-2025
					result += "<!-- Verified with ATCSCC on 03-03-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 HERBA JHW DJB J60 JOT J26 BDF BULET RUDDH3 KMCI\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 JOT J26 BDF BULET RUDDH3 KMCI\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BDF BULET RUDDH3 KMCI\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO Q176 STL EUING RUDDH3 KMCI\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 STL EUING RUDDH3 KMCI\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 SPI EUING RUDDH3 KMCI\" readonly>";
					break;
				case "MCO": // Updated 03-03-2025
					result += "<!-- Updated 03-03-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>Non OW: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD CRPLR Q85 LPERD SNFLD3 KMCO\" readonly>"; // CDR PH
					result += "<br/>OW: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR EARZZ Q131 WAALT Y289 BAHAA HIBAC ALYNA4 KMCO\" readonly>"; // CDR AR
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE B24 LYNUS SILLY Y485 STERN Y493 BAHAA HIBAC ALYNA4 KMCO\" readonly>"; // CDR AZ
					result += "<br/><br/>ATLANTIC SOUTH 1: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE WICKE LYNUS CUMBY LOZER WHOOS WEAKK BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					result += "<br/>NE TO FL VIA J6: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ SPAYD VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
					result += "<br/>NE TO FL VIA J64 1: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI QUARM AIR HVQ J85 SPA QUIWE Q93 GIPPL Q85 LPERD GTOUT1 KMCO\" readonly>";
					result += "<br/>NE TO FL VIA J64 2: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI QUARM AIR HVQ J85 SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>NE TO FL VIA Q480 2: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>VACAPES SOUTH: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE B24 CORNE ECG ADUCI BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN BAL GVE GSO SPA CAE SAV LEESE3 KMCO\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-03-2025
					result += "<!-- Verified with ATCSCC on 03-03-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>4A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
					result += "<br/>4C<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA QUIWE Q93 GIPPL Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ SPAYD VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
					result += "<br/>6A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ SPAYD VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
					result += "<br/>75<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GSO Q83 ROYCO Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>83<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA QUIWE Q93 GIPPL Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>85<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>8T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ SPAYD VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
					result += "<br/>AR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR EARZZ Q131 WAALT Y289 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					result += "<br/>AZ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE B24 LYNUS SILLY Y485 STERN Y493 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK JDUBB RRSIN GSO Q83 ROYCO Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 OKNEE PUPYY WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA WHYYT GRNCH5 KMCO\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD CRPLR Q85 LPERD SNFLD3 KMCO\" readonly>";
					result += "<br/>SP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA QUIWE Q93 GIPPL Q85 LPERD SNFLD3 KMCO\" readonly>";
					break;
				case "MEM": // Updated 03-03-2025
					result += "<!-- Updated 03-03-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD BLUZZ5 KMEM\" readonly>"; // CDR PH
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 JAARE GQO TALLO VANZE3 KMEM\"; readonly>"; // CDR 48
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-03-2025
					result += "<!-- Verified with ATCSCC on 03-03-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 JAARE GQO TALLO VANZE3 KMEM\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB PXV BLUZZ5 KMEM\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 MAINE PXV BLUZZ5 KMEM\" readonly>";
					result += "<br/>75<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ THRSR VLKNN WASER VANZE3 KMEM\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FYLLS PXV BLUZZ5 KMEM\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO Q80 FAREV RAMRD BLUZZ5 KMEM\" readonly>";
					result += "<br/>KA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN WASER VANZE3 KMEM\" readonly>";
					result += "<br/>LM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN WASER VANZE3 KMEM\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD BLUZZ5 KMEM\" readonly>";
					break;
				case "MIA": // Updated 03-03-2025
					result += "<!-- Updated 03-03-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR BGBRD Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>"; // CDR AR
					result += "<br/>Non OW: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>"; // CDR KA
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE B24 LYNUS SILLY Y485 STERN Y493 JENKS HOAGG BNFSH3 KMIA\" readonly>"; // CDR AZ
					result += "<br/><br/>STOEN/west via EMI: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX THRSR HONID FROGZ4 KMIA\" readonly>"; // CDR 48
					result += "<br/>MXE/West via HVQ: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ SPAYD VXV THRSR HONID FROGZ4 KMIA\" readonly>"; // CDR 6A
					result += "<br/><br/>ATLANTIC SOUTH 1: <input style=\"width:75%\"; value=\"KPHL OOD TEBEE HAYDO SIE WICKE LYNUS CUMBY LOZER WHOOS WEAKK JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>CAPE LAUNCH 1: <input style=\"width:75%\"; value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR PAACK Q97 MALET GERCK GREAD CSTAL3 KMIA\" readonly>";
					result += "<br/>VACAPES SOUTH 1: <input style=\"width:75%\"; value=\"KPHL OOD TEBEE HAYDO SIE B24 CORNE ECG WEAKK JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL OOD GROUT SBY ORF ISO ILM CHS OMN ANNEY4 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-03-2025
					result += "<!-- Verified with ATCSCC on 03-03-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>4A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>4C<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB J83 SPA ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ SPAYD VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>6A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ SPAYD VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>83<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>85<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>8T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ SPAYD VXV THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>AR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR BGBRD Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>AZ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE B24 LYNUS SILLY Y485 STERN Y493 JENKS HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK JDUBB RRSIN GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD CRPLR Q409 OKNEE ISUZO BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>KA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>SA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>SP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>TA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 TEEEM BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>TR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR PAACK Q97 DEBRL CSTAL3 KMIA\" readonly>";
					break;
				case "MKE": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB CRL PEGEE GETCH LYSTR SUDDS KMKE\" readonly>"; // CDR PH
					result += "<br/><br/>MXE/South<span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR DJB CRL PEGEE GETCH LYSTR SUDDS KMKE\" readonly>"; // CDR 80
					result += "<br/>DQO/South<span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS J149 ROD PEGEE GETCH LYSTR SUDDS KMKE\" readonly>"; // CDR DQ
					result += "<br/>DITCH/North<span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB Q818 FNT GETCH LYSTR SUDDS KMKE\" readonly>"; // CDR 95
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV J64 EWC DJB CRL PEGEE GETCH LYSTR SUDDS KMKE\"; readonly>"; // CDR 64
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 EWC DJB CRL PEGEE GETCH LYSTR SUDDS KMKE\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR DJB CRL PEGEE GETCH LYSTR SUDDS KMKE\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB Q818 FNT GETCH LYSTR SUDDS KMKE\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 LLUND CAM HANAA Q816 HOCKE GETCH LYSTR SUDDS KMKE\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS J149 ROD PEGEE GETCH LYSTR SUDDS KMKE\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB CRL PEGEE GETCH LYSTR SUDDS KMKE\" readonly>";
					break;
				case "MSP": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB J34 VIO KAMMA KKILR3 KMSP\" readonly>"; // CDR 60
					result += "<br/><br/>MXE/South<input style=\"width:75%\" value=\"KPHL MXE PENSY J110 LEJOY Q178 DJB J34 VIO KAMMA KKILR3 KMSP\" readonly>"; // CDR 80
					result += "<br/>DITCH/North<span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL DITCH Q437 LLUND CAM NOVON YEE TVC CEWDA MUSCL3 KMSP\" readonly>"; // CDR AR
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB J60 DJB J34 VIO KAMMA KKILR3 KMSP\"; readonly>"; // CDR 60
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 RAAKK Q440 SLLAP IDIOM MUSCL3 KMSP\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB J34 VIO KAMMA KKILR3 KMSP\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 EWC DJB J34 VIO KAMMA KKILR3 KMSP\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 LEJOY Q178 DJB J34 VIO KAMMA KKILR3 KMSP\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB WOZEE Q935 HOCKE IDIOM MUSCL3 KMSP\" readonly>";
					result += "<br/>AA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB ZOHAN SAW SHEAY MUSCL3 KMSP\" readonly>";
					result += "<br/>AR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 LLUND CAM NOVON YEE TVC CEWDA MUSCL3 KMSP\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 LLUND CAM HANAA Q816 HOCKE IDIOM MUSCL3 KMSP\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS J149 FWA GSH KAMMA KKILR3 KMSP\" readonly>";
					result += "<br/>G5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK STOMP Q812 AHPAH Q140 CESNA GGULL BAINY3 KMSP\" readonly>";
					result += "<br/>G6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB HOCKE SAW DLH GGULL BAINY3 KMSP\" readonly>";
					result += "<br/>G7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 LLUND CAM NOVON SSM COLDD BAINY3 KMSP\" readonly>";
					result += "<br/>G8<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 RAAKK Q440 SLLAP GRB HHOGS BAINY3 KMSP\" readonly>";
					result += "<br/>K1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB HOCKE SAW SHEAY MUSCL3 KMSP\" readonly>";
					result += "<br/>KA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB FNT GRB HHOGS BAINY3 KMSP\" readonly>";
					result += "<br/>KP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB ZOHAN SAW DLH GGULL BAINY3 KMSP\" readonly>";
					result += "<br/>ME<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB FNT GRB COLDD BAINY3 KMSP\" readonly>";
					result += "<br/>MS<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB FNT IDIOM MUSCL3 KMSP\" readonly>";
					break;
				case "MSY": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 NIOLA MERDN TRSSH1 KMSY\" readonly>"; // CDR PH
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ VXV NIOLA MERDN TRSSH1 KMSY\"; readonly>"; // CDR J6
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 HERBA JHW Q29 KLYNE RINTE Q139 VLKNN MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB RINTE Q139 VLKNN MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/>75<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI MNSTR1 KMSY\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HNN SPAYD VXV NIOLA MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/>CH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 SESUE PANDY TWINS NOKIE FRDDO ARNNY Q184 KWANE MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK CLTCH KERRK MAULS Q40 NIOLA MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ VXV NIOLA MERDN TRSSH1 KMSY\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 NIOLA MERDN TRSSH1 KMSY\" readonly>";
					break;
				case "MYR": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR PAACK WYLMS KMYR\" readonly>"; // CDR PH
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA CAE KMYR\"; readonly>"; // CDR J6
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HNN SPA CAE KMYR\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA CAE KMYR\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR PAACK WYLMS KMYR\" readonly>";
					break;
				case "OMA": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 IOW DSM LANTK2 KOMA\" readonly>"; // CDR 60
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB J60 IOW DSM LANTK2 KOMA\"; readonly>"; // CDR 60
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 RAAKK Q438 RUBYY DABJU J36 BAE DBQ DSM LANTK2 KOMA\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 IOW DSM LANTK2 KOMA\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 SPI IOW DSM LANTK2 KOMA\" readonly>";
					break;
				case "ORD": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW SARAA Q62 WATSN WATSN4 KORD\" readonly>"; // CDR PH
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV J64 FWA KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-28-2025
					result += "<!-- Verified with ATCSCC on 06-28-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH LUIGI HNNAH LAAYK Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB NOLNN Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 EMPTY J149 FWA WATSN4 KORD\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH LUIGI HNNAH Q450 JFK CFB RAAKK Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH LUIGI HNNAH LLUND CAM Q822 FNT WYNDE2 KORD\" readonly>";
					result += "<br/>DJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 CANCR RRONS Q436 EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS J149 ROD WATSN4 KORD\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 HNN FLM HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>X6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 EYTEE J149 FWA WATSN4 KORD\" readonly>";
					break;
				case "ORF": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL OOD TRPOD T303 OUTLA KORF\"; readonly>"; // CDR 48
					result += "<br/><br/>PHLYER SOUTH 1+2 (Max FL060)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL OOD ENO T335 TRPOD T303 OUTLA KORF\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL STOEN REEFI EMI J48 MOL TERKS2 KORF\"; readonly>"; // CDR 48
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL TERKS2 KORF\" readonly>";
					result += "<br/>FE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD ENO T335 TRPOD T303 OUTLA KORF\" readonly>";
					result += "<br/>PR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD T303 OUTLA KORF\" readonly>";
					break;
				case "PBI": // Updated 06-03-2025
					result += "<!-- Updated 06-03-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR EARZZ Q131 WAALT Y289 DULEE CLMNT2 KPBI\" readonly>";
					result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD CRPLR PAACK Q97 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA ENEME VUUDU1 KPBI\" readonly>"; // CDR 48
					result += "<br/><br/>East/Full OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE B24 LYNUS SILLY Y485 STERN Y493 BAHAA DULEE CLMNT2 KPBI\" readonly>"; // CDR AZ
					result += "<br/>West via HVQ<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA ENEME VUUDU1 KPBI\" readonly>"; // CDR J6
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-03-2025
					result += "<!-- Verified with ATCSCC on 06-03-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA ENEME VUUDU1 KPBI\" readonly>";
					result += "<br/>4A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN VXV THRSR ZPLEN VUUDU1 KPBI\" readonly>";
					result += "<br/>4C<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK GOWBE BURGG QUIWE Q93 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB J83 SPA ENEME VUUDU1 KPBI\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ SPAYD VXV THRSR ZPLEN VUUDU1 KPBI\" readonly>";
					result += "<br/>6A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ SPAYD VXV THRSR ZPLEN VUUDU1 KPBI\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA ENEME VUUDU1 KPBI\" readonly>";
					result += "<br/>83<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA QUIWE Q93 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>85<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA ENEME VUUDU1 KPBI\" readonly>";
					result += "<br/>8T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ SPAYD VXV THRSR ZPLEN VUUDU1 KPBI\" readonly>";
					result += "<br/>AR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR EARZZ Q131 WAALT Y289 DULEE CLMNT2 KPBI\" readonly>";
					result += "<br/>AZ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE B24 LYNUS SILLY Y485 STERN Y493 BAHAA DULEE CLMNT2 KPBI\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK JDUBB RRSIN GSO Q83 JEVED Q97 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD CRPLR Q409 OKNEE ENEME VUUDU1 KPBI\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA ENEME VUUDU1 KPBI\" readonly>";
					result += "<br/>KA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR PAACK Q97 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>SA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GSO Q83 JEVED Q97 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>SP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA QUIWE Q93 KENLL CPTAN3 KPBI\" readonly>";
					result += "<br/>TA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 ENEME VUUDU1 KPBI\" readonly>";
					result += "<br/>TR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR PAACK Q97 JEVED ROKKT CPTAN3 KPBI\" readonly>";
					break;
				case "PDX": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-10-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHL PTW SARAA J64 RAV J64 WHETT JOT DBQ MCW J16 FSD J82 RAP J151 BIL J16 PDT JKNOX HHOOD5 KPDX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KPHL PTW RAV PSB DJB FNT GRB GEP J70 MLP J136 GEG JORAD HHOOD5 KPDX\" readonly>";
					result += "<br/>DITCH/North: <input style=\"width:75%\"; value=\"KPHL DITCH Q437 HNNAH Q450 JFK CAM ART YEE ASP TVC GRB GEP ABR J32 DPR J16 PDT JKNOX HHOOD5 KPDX\" readonly>";
					result += "<br/><br/>BUM: <input style=\"width:75%\"; value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 BUM SLN HCT BFF DBS J82 DNJ J20 PDT JKNOX HHOOD5 KPDX\" readonly>";
					result += "<br/>GTH 1: <input style=\"width:75%\"; value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR TXK BYP UKW GTH TCC J76 FTI J58 RSK TCH J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
					result += "<br/>PNH 1: <input style=\"width:75%\"; value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG FSM IRW PNH ALS JNC J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
					result += "<br/>PNH 2: <input style=\"width:75%\"; value=\"KPHL MXE PENSY J48 CSN FANPO Q40 ALEAN Q66 LITTR KOMMA IRW J6 PNH ALS JNC J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB J60 LNK ONL J151 BIL J16 PDT JKNOX HHOOD5 KPDX\"; readonly>"; // CDR 60
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 RAAKK Q440 HUFFR MLP JKNOX HHOOD5 KPDX\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 LNK ONL J151 BIL J16 PDT JKNOX HHOOD5 KPDX\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 LMN PWE ONL J151 BIL J16 PDT JKNOX HHOOD5 KPDX\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 MCI LNK ONL J151 BIL J16 PDT JKNOX HHOOD5 KPDX\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB Q818 DERLO HOCKE GRB GEP J70 ABR J32 DPR J16 PDT JKNOX HHOOD5 KPDX\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 BUM HCT BFF DBS J82 DNJ J20 PDT JKNOX HHOOD5 KPDX\" readonly>";
					break;					
				case "PIT": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 VINSE DEMME5 KPIT\" readonly>"; // CDR PH
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB HAYNZ7 KPIT\" readonly>"; // CDR 60
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY J149 SINDE LEJOY DEMME5 KPIT\" readonly>"; // CDR DQ
					result += "<br/><br/>PHLYER WEST (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KPHL MXE T456 VINSE LEJOY NESTO KPIT\" readonly>";
					result += "<br/>PHLYER WEST Alt (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KPHL PTW V12 BOYER HAR V12 JST NESTO KPIT\" readonly>";
					result += "<br/><br/>TEC<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KPHL FJC WLKES T440 STUBN ROC BUF ERI YTOWN JESEY5 KPIT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB HAYNZ7 KPIT\"; readonly>"; // CDR 60
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW V12 AGC KPIT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 REBBL SLT HAYNZ7 KPIT\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB HAYNZ7 KPIT\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 LLUND CAM Q84 AUDIL BURST CIP HAYNZ7 KPIT\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY J149 SINDE LEJOY DEMME5 KPIT\" readonly>";
					result += "<br/>FM<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE T456 VINSE LEJOY NESTO KPIT\" readonly>";
					result += "<br/>FP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW V12 BOYER HAR V12 JST NESTO KPIT\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ JPU FEWGA7 KPIT\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 VINSE DEMME5 KPIT\" readonly>";
					result += "<br/>PS<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA PSB HAYNZ7 KPIT\" readonly>";
					break;
				case "PVD": // Updated 02-28-2025
					result += "<!-- Updated 02-28-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL DITCH T416 JIMEE WAVEY SHLEP HTO JORDN2 KPVD\" readonly>"; // CDR PH
					result += "<br/><b style=\"color:orange\">As of 03-01-2025 FAA pref is JORDN JORDN2 but its not on the chart. Use HTO JORDN2<\/b>";
					result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KPHL PTW SUZIE RAV FQM HNK WIPOR3 KPVD\" readonly>";
					result += "<br/><b style=\"color:orange\">Only use if DITCH is unavailable<\/b>";
					result += "<br/><br/>PHLYER NORTH (Max FL090)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KPHL PTW FJC T221 LAAYK T216 GON MINNK KPVD\" readonly>";
					result += "<br/><br/>TEC<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KPHL RBV V123 PROUD BDR MAD GON KPVD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL MXE PENSY J110 LARRI J61 PSB J49 HNK WIPOR3 KPVD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-10-2025
					result += "<!-- Verified with ATCSCC on 05-10-2025 -->";
					result += "<br/>29<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPVD PUT CTR CAM Q822 GONZZ Q29 JHW FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>A4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPVD PUT BAF Q448 PTW J48 CSN GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPVD PUT CTR HNK J49 PSB Q71 GEFFS HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPVD PUT NELIE Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>T7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPVD JUMPR RIFLE HEADI Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					break;
				case "RDU": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD TAQLE2 KRDU\" readonly>";
					result += "<br/><br/>DQO TUNNEL SW (Max FL230): <input style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK JDUBB MELTN ALDAN4 KRDU\" readonly>";
					result += "<br/>PHLYER SOUTH 1 (Max FL060)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL OOD ENO T224 TAPPA HOUKY TAQLE2 KRDU\" readonly>";
					result += "<br/>PHLYER SOUTH 2 (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD TAQLE2 KRDU\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI GVE HPW TYI BRADE6 KRDU\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FRIKY ALDAN4 KRDU\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB J85 HVQ SITTR FRIKY ALDAN4 KRDU\" readonly>";
					result += "<br/>75<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE MELTN ALDAN4 KRDU\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HNN SITTR FRIKY ALDAN4 KRDU\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK JDUBB MELTN ALDAN4 KRDU\" readonly>";
					result += "<br/>FE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD ENO T224 TAPPA HOUKY TAQLE2 KRDU\" readonly>";
					result += "<br/>FT<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD TAQLE2 KRDU\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD TAQLE2 KRDU\" readonly>";
					break;
				case "RIC": // Updated 06-19-2025
					result += "<!-- Updated 06-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD JAMIE KRIC\" readonly>"; // CDR PL
					result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL SPIDR5 KRIC\" readonly>"; // CDR 48
					result += "<br/><br/>PHLYER SOUTH 1 (Max FL060)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL OOD ENO T335 TRPOD T303 JAMIE KRIC\" readonly>";
					result += "<br/>PHLYER SOUTH 2 (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL OOD ENO T335 TRPOD T303 JAMIE KRIC\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL STOEN REEFI EMI J48 MOL SPIDR5 KRIC\"; readonly>"; // CDR 48
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-19-2025
					result += "<!-- Verified with ATCSCC on 06-19-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL SPIDR5 KRIC\" readonly>";
					result += "<br/>75<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE FAK KRIC\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HNN HVQ J24 MOL SPIDR5 KRIC\" readonly>";
					result += "<br/>FE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD ENO T224 COLIN KRIC\" readonly>";
					result += "<br/>FT<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD ENO T335 TRPOD T303 JAMIE KRIC\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 PERKS MOL SPIDR5 KRIC\" readonly>";
					result += "<br/>PL<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD JAMIE KRIC\" readonly>";
					break;
				case "ROC": // Updated 06-19-2025
					result += "<!-- Updated 06-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW SARAA RAV TYMAN Q227 STUBN GIBBE KROC\" readonly>"; // CDR PH
					// TODO west rte
					result += "<br/><br/>PHLYER WEST (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL PTW T447 FQM STUBN KROC\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-19-2025
					result += "<!-- Verified with ATCSCC on 06-19-2025 -->";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS OXMAN KROC\" readonly>";
					result += "<br/>DT<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH LUIGI HNNAH Q450 JFK CFB V252 GIBBE KROC\" readonly>";
					result += "<br/>FP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW T447 FQM STUBN KROC\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV TYMAN Q227 STUBN GIBBE KROC\" readonly>";
					break;
				case "RSW": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN Q75 SLOJO Q103 CYNTA SHFTY6 KRSW\" readonly>"; // CDR PH
					result += "<br/<br/>OW: <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR EARZZ Q131 WAALT Y289 BAHAA HIBAC SHFTY6 KRSW\" readonly>"; // CDR AR
					result += "<br/>West: <input style=\"width:75%\" value=\"KPHL STOEN Q75 SLOJO Q103 CYNTA SHFTY6 KRSW\" readonly>"; // CDR PH
					result += "<br/>West via HVQ: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA IRQ CYNTA SHFTY6 KRSW\" readonly>"; // CDR J6
					result += "<br/>NW Arrival: <input style=\"width:75%\"; value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 PUPYY TAY PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/><br/>ATLANTIC S1: <input style=\"width:75%\"; value=\"KPHL OOD TEBEE HAYDO SIE WICKE LYNUS CUMBY LOZER WHOOS WEAKK BAHAA HIBAC SHFTY6 KRSW\" readonly>";
					result += "<br/>VACAPES S1: <input style=\"width:75%\"; value=\"KPHL OOD TEBEE HAYDO SIE B24 CORNE ECG WEAKK BAHAA HIBAC SHFTY6 KRSW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL MXE BAL GVE LYH GSO CAE AMG TAY PIE JOSFF5 KRSW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA IRQ WIGVO CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>4A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB ROD J43 VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ SPAYD VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA IRQ CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>85<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA IRQ CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>8T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ SPAYD VXV THRSR HONID Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
					result += "<br/>AR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR EARZZ Q131 WAALT Y289 BAHAA HIBAC SHFTY6 KRSW\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK JDUBB RRSIN GSO Q75 SLOJO Q103 CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA IRQ CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>KA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 PUPYY Q103 CYNTA SHFTY6 KRSW\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 SLOJO Q103 CYNTA SHFTY6 KRSW\" readonly>";
					break;
				case "SAN": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/>NRP via PXV: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J78 FAM J98 SGF PER MMB FTI J18 HOGGZ LUCKI1 KSAN\" readonly>"; // CDR 6F
					result += "<br/>NRP via SPI: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 MCI J24 SLN J96 PKE LUCKI1 KSAN\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 HVE PROMT Q88 HAKMN Q73 LVELL LUCKI1 KSAN\" readonly>"; // CDR 60
					result += "<br/>South: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC EIC J4 ABI J66 EWM J4 SSO J50 GBN J2 HOGGZ LUCKI1 KSAN\" readonly>"; // CDR EM
					result += "<br/>ZKC Avoid: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG FSM IRW PNH J78 PKE LUCKI1 KSAN\" readonly>"; // CDR P1
					result += "<br/><br/>LNK: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 LNK HLC J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>";
					result += "<br/>ONL: <input style=\"width:75%\" value=\"KPHL GAYEL Q818 WOZEE Q935 HOCKE GRB GEP ONL J114 DVV J60 HVE PROMT Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>";
					result += "<br/>SLN: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BDF STJ SLN J18 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/>TUL 1: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG TUL MMB FTI J18 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PSB J60 BCE BLD DAG J9 LAX SXC HUBRD1 KSAN\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-09-2025
					result += "<!-- Verified with ATCSCC on 07-09-2025 -->";
					result += "<br/>29<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 MAINE PXV J78 FAM J98 SGF IFI DANKS EZEEE GUP DRK J78 PKE LUCKI1 KSAN\" readonly>";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH LUIGI HNNAH LAAYK Q436 HERBA JHW Q29 KLYNE PXV J78 FAM J98 SGF IFI DANKS EZEEE GUP J96 PKE LUCKI1 KSAN\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB CPONE JOT J60 HVE PROMT Q88 HAKMN Q73 LVELL LUCKI1 KSAN\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 LMN PWE HLC J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>";
					result += "<br/>6F<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J78 FAM J98 SGF PER MMB FTI J18 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/>75<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE MOL MAULS Q40 NIOLA MERDN Q184 FUZ J4 ABI J65 PXR J18 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 MCI J24 SLN J18 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/>8N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT BRNAN Q42 LCOLN IRK J26 MCI J80 HLC J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>";
					result += "<br/>CH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 SESUE PANDY TWINS NOKIE FRDDO ARNNY Q184 FUZ J4 ABI J65 PXR J18 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO Q68 HVQ J78 FAM J98 SGF PER MMB FTI J18 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/>EM<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC EIC J4 ABI J66 EWM J4 SSO J50 GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/>EP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT FST ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/>FL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 MRPIT CEELY Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK SPS J166 TCS J65 PXR J18 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/>G1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR TXK BYP UKW HNKER CNX J74 SJN J18 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 BUM ICT TOTOE FTI J18 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/>LV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE LYH COLZI Q52 CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG FSM IRW PNH J78 PKE LUCKI1 KSAN\" readonly>";
					result += "<br/>P2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN Q66 LITTR KOMMA IRW J6 PNH J78 PKE LUCKI1 KSAN\" readonly>";
					break;
				case "SAT": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 AEX CAAGE QERVO1 KSAT\" readonly>"; // CDR 48
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FYLLS PXV J131 LIT TXK NILBE QERVO1 KSAT\" readonly>"; // CDR 80
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 AEX CAAGE QERVO1 KSAT\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB PXV J131 LIT TXK NILBE QERVO1 KSAT\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 MAINE PXV J131 LIT TXK NILBE QERVO1 KSAT\" readonly>";
					result += "<br/>75<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 GVE MOL MAULS Q40 AEX CAAGE QERVO1 KSAT\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FYLLS PXV J131 LIT TXK NILBE QERVO1 KSAT\" readonly>";
					result += "<br/>CH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 SESUE PANDY TWINS NOKIE MGMRY CATLN Q56 SJI J2 LCH CAAGE QERVO1 KSAT\" readonly>";
					result += "<br/>FL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 SESUE PANDY TWINS NOKIE MGMRY LCH CAAGE QERVO1 KSAT\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR TXK NILBE QERVO1 KSAT\" readonly>";
					break;
				case "SAV": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 SESUE SOOOP KSAV\" readonly>"; // CDR PH
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK SLOJO CANTR PLZZZ KSAV\" readonly>"; // CDR 48
					result += "<br/>West via HVQ: input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA CANTR PLZZZ KSAV\" readonly>"; // CDR J6
					// result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK SLOJO CANTR PLZZZ KSAV\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HNN SPA CANTR PLZZZ KSAV\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK JDUBB RRSIN GSO CTF CANTR PLZZZ KSAV\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA CANTR PLZZZ KSAV\" readonly>";
					result += "<br/>KA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD CRPLR PAACK Q97 ELLDE LGRHD SOOOP KSAV\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 SESUE SOOOP KSAV\" readonly>";
					break;
				case "SDF": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 YOCKY LEDDL1 KSDF\" readonly>"; // CDR PH
					result += "<br/><br/>PTW/North: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 MAINE RINTE DLAMP8 KSDF\" readonly>"; // CDR 64
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB J60 DJB RINTE DLAMP8 KSDF\"; readonly>"; // CDR 60
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 HERBA JHW Q29 KLYNE RINTE DLAMP8 KSDF\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB RINTE DLAMP8 KSDF\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 MAINE RINTE DLAMP8 KSDF\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR UKATS DLAMP8 KSDF\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO Q68 YOCKY LEDDL1 KSDF\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 YOCKY LEDDL1 KSDF\" readonly>";
					break;
				case "SEA": // Updated 03-10-2025
					result += "<!-- Updated 03-10-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-10-2025
					result += "<br/><br/>HAR: <input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB J60 DJB J34 BAE HUFFR Q146 KIXCO Q142 MLP GLASR3 KSEA\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 MCI HCT BFF BOY DNW LKT PDT CHINS5 KSEA\" readonly>"; // CDR 80
					result += "<br/><br/>HLC: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 LMN PWE HLC J80 FQF J20 PDT CHINS5 KSEA\" readonly>"; // CDR 64
					result += "<br/>PNH 2: <input style=\"width:75%\"; value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN Q66 LITTR KOMMA IRW J6 PNH ALS JNC J15 BOI PDT CHINS5 KSEA\" readonly>";
					result += "<br/>TUL 1: <input style=\"width:75%\"; value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG TUL GCK HGO J20 PDT CHINS5 KSEA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW RAV PSB J60 DJB J34 BAE J70 GEP FAR J36 DIK J70 MLP GLASR3 KSEA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 LNK ONL J151 BIL J136 MLP GLASR3 KSEA\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 LMN PWE HLC J80 FQF J20 PDT CHINS5 KSEA\" readonly>";
					result += "<br/>6F<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J78 FAM BUM SLN HCT BFF BOY LKT PDT CHINS5 KSEA\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 MCI HCT BFF BOY DNW LKT PDT CHINS5 KSEA\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB Q818 DERLO HOCKE GRB GEP J70 MLP GLASR3 KSEA\" readonly>";
					result += "<br/>BW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG IRW PNH ALS JNC J15 BOI PDT CHINS5 KSEA\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS J149 FWA J64 WHETT J30 JOT DBQ RWF J90 HLN J136 MLP GLASR3 KSEA\" readonly>";
					result += "<br/>G1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR TXK BYP UKW HNKER TCC J76 FTI J58 RSK TCH J15 BOI PDT CHINS5 KSEA\" readonly>";
					result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC SUTTN J52 TXK BYP UKW HNKER TCC J76 FTI J58 RSK TCH J15 BOI PDT CHINS5 KSEA\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 BUM HCT BFF DBS J82 DNJ J20 PDT CHINS5 KSEA\" readonly>";
					result += "<br/>RK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB J34 BAE J70 AUGER HUFFR TTAIL Q140 LEWIT MLP GLASR3 KSEA\" readonly>";
					break;
				case "SFO": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DBL J80 OAL INYOE DYAMD5 KSFO\" readonly>"; // CDR 60
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB J34 BAE J70 AUGER HUFFR DKOTA Q138 RICCO MLD J32 LLC LEGGS BDEGA4 KSFO\" readonly>"; // CDR RK
					result += "<br/>South: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG IRW PNH RSK J58 ILC J80 OAL INYOE DYAMD5 KSFO\" readonly>"; // CDR BW
					result += "<br/>South via TXK: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR TXK BYP UKW HNKER TCC J76 FTI J58 OAL INYOE DYAMD5 KSFO\" readonly>"; // CDR G1
					result += "<br/><br/>ELP: <input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 NIOLA MCB LCH IAH J86 ELP J86 BLD J92 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>ONL: <input style=\"width:75%\" value=\"KPHL GAYEL Q818 WOZEE Q935 HOCKE GRB GEP ONL J148 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>STL: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 STL J110 GCK J28 MLF J80 ILC KITTN KATTS OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>TUL 1: <input style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG TUL TOTOE ALS DVC MLF J80 ILC KITTN KATTS OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 VHP J80 GLD J146 HBU J28 MLF J80 ILC KROST OAL MOD9 KSFO\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-24-2025
					result += "<!-- Verified with ATCSCC on 06-24-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH LUIGI HNNAH LAAYK Q436 RAAKK Q438 RUBYY DABJU J36 BAE J16 FSD J82 CZI J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
					result += "<br/>47<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH LUIGI LLUND CAM HANAA Q816 HOCKE BAE J16 FSD J82 CZI J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB CPONE JOT J60 DBL J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 LMN PWE HLC J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>6F<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J78 FAM J98 SGF ICT J28 MLF J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>8N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT BRNAN Q42 LCOLN IRK J26 MCI J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>8X<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS J149 FWA J64 BDF IOW J60 DBL J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH LUIGI HNNAH Q450 JFK CFB Q818 DERLO HOCKE GRB GEP J70 ABR J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
					result += "<br/>BW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG IRW PNH RSK J58 ILC J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO Q176 STL J110 GCK J28 MLF J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>G1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR TXK BYP UKW HNKER TCC J76 FTI J58 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC SUTTN J52 TXK BYP UKW HNKER TCC J76 FTI J58 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 BUM J110 GCK J28 MLF J80 OAL INYOE DYAMD5 KSFO\" readonly>";
					result += "<br/>RK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB J34 BAE J70 AUGER HUFFR DKOTA Q138 RICCO MLD J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
					break;
				case "SLC":
					result += "<br/><br/><input style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 LNK J60 DVV EKR RACER JAZZZ1 KSLC\" readonly>"; // CDR 60
					result += "<br/><br/>South<input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN Q66 LITTR KOMMA IRW J6 PNH ALS JNC HELPR JAZZZ1 KSLC\" readonly>"; // CDR P2
					result += "<br/>Gulf<input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT FUSCO CNX JNC HELPR JAZZZ1 KSLC\" readonly>"; // CDR EP
					result += "<br/>North<span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB Q818 WOZEE Q935 HOCKE BAE DBQ FOD ONL J94 BFF CKW CARTR1 KSLC\" readonly>"; // CDR 95
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
					result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 RAAKK Q438 RUBYY PMM J94 DBQ FOD ONL J94 BFF CKW CARTR1 KSLC\" readonly>";
					result += "<br/>60<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 LNK J60 DVV EKR RACER JAZZZ1 KSLC\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 LMN PWE HLC J80 FQF EKR RACER JAZZZ1 KSLC\" readonly>";
					result += "<br/>6F<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J78 FAM BUM SLN GLD FQF J116 EKR RACER JAZZZ1 KSLC\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J80 HLC J80 FQF EKR RACER JAZZZ1 KSLC\" readonly>";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB Q818 WOZEE Q935 HOCKE BAE DBQ FOD ONL J94 BFF CKW CARTR1 KSLC\" readonly>";
					result += "<br/>BW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 RAMRD ARG IRW PNH ALS JNC HELPR JAZZZ1 KSLC\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO Q176 STL J24 MCI J80 FQF J116 EKR RACER JAZZZ1 KSLC\" readonly>";
					result += "<br/>EM<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 BFOLO FIBER HRISN IZAAC EIC J4 ABI J66 EWM DMN GREBE J86 BAVPE BCE JAMMN5 KSLC\" readonly>";
					result += "<br/>EP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 NIOLA GRGIA ARNNY SJI Q56 HRV KCEEE TKNIQ MOLLR JCT FUSCO CNX JNC HELPR JAZZZ1 KSLC\" readonly>";
					result += "<br/>G1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ Q68 LITTR TXK BYP UKW HNKER TCC ALS JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
					result += "<br/>J6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 BUM GLD FQF J116 EKR RACER JAZZZ1 KSLC\" readonly>";
					result += "<br/>P2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN Q66 LITTR KOMMA IRW J6 PNH ALS JNC HELPR JAZZZ1 KSLC\" readonly>";
					result += "<br/>RK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB J34 BAE J70 AUGER HUFFR DKOTA DDY CARTR1 KSLC\" readonly>";
					break;
				case "SRQ": // Updated 03-11-2025
					result += "<!-- Updated 03-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN Q75 SLOJO Q103 PUPYY KYYUU LUBBR3 KSRQ\" readonly>"; // CDR PH
					result += "<br/><br/>OOD/East<input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 PUPYY KYYUU LUBBR3 KSRQ\" readonly>"; // CDR KA
					result += "<br/>West via HVQ<input style=\"width:75%\" value=\"KPHL STOEN Q75 SLOJO Q103 PUPYY KYYUU LUBBR3 KSRQ\" readonly>"; // CDR PH
					// result += "<br/><br/><b>Non RNAV</b>";// toddo
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-11-2025
					result += "<!-- Verified with ATCSCC on 03-11-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA KYYUU LUBBR3 KSRQ\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB ROD J43 VXV THRSR HONID BANGZ1 KSRQ\" readonly>";
					result += "<br/>80<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA KYYUU LUBBR3 KSRQ\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK JDUBB RRSIN GSO Q75 SLOJO Q103 PUPYY KYYUU LUBBR3 KSRQ\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA KYYUU LUBBR3 KSRQ\" readonly>";
					result += "<br/>KA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 PUPYY KYYUU LUBBR3 KSRQ\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 SLOJO Q103 PUPYY KYYUU LUBBR3 KSRQ\" readonly>";
					break;
				case "STL": // Updated 03-11-2025
					result += "<!-- Updated 03-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL MXE PENSY J110 VHP AARCH2 KSTL\" readonly>"; // CDR PH
					result += "<br/><br/>PTW/North<input style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 MAINE ROD VHP AARCH2 KSTL\" readonly>"; // CDR 64
					result += "<br/><br/>J80 1: <input style=\"width:75%\"; value=\"KPHL DQO BELAY MORTY WONCE AML J149 EMPTY J80 VHP AARCH2 KSTL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB J60 DJB ROD VHP AARCH2 KSTL\"; readonly>"; // CDR 29
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-11-2025
					result += "<!-- Verified with ATCSCC on 03-11-2025 -->";
					result += "<br/>29<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB ROD VHP AARCH2 KSTL\" readonly>";
					result += "<br/>36<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK Q436 HERBA JHW Q29 KLYNE PXV BOOSH3 KSTL\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 JOT MZV UIN SKOVE LORLE3 KSTL\" readonly>";
					result += "<br/>64<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 MAINE ROD VHP AARCH2 KSTL\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL OTTTO COLNS Q176 HNN FLM PXV BOOSH3 KSTL\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 COLNS Q176 HNN FLM PXV BOOSH3 KSTL\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR J110 VHP AARCH2 KSTL\" readonly>";
					break;
				case "SYR": // Updated 03-11-2025
					result += "<!-- Updated 03-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>Above FL170: <input style=\"width:75%\" value=\"KPHL PTW SARAA RAV TYMAN Q227 STENT CFB T335 CORTA KSYR\" readonly>"; // CDR PH
					result += "<br/>Below FL180: <input style=\"width:75%\" value=\"KPHL PTW CHLSE T449 CFB T335 CORTA KSYR\" readonly>"; // CDR PL
					// Todo West rte
					result += "<br/><br/>PHLYER WEST (Max FL080)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHL PTW FJC T221 CFB T335 SYR KSYR\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-11-2025
					result += "<!-- Verified with ATCSCC on 03-11-2025 -->";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH LAAYK CFB T335 CORTA KSYR\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 LLUND CAM KSYR\" readonly>";
					result += "<br/>DT<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK CFB T335 CORTA KSYR\" readonly>";
					result += "<br/>FF<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL FJC T221 CFB T335 SYR KSYR\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV TYMAN Q227 STENT CFB T335 CORTA KSYR\" readonly>";
					result += "<br/>PL<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW CHLSE T449 CFB T335 CORTA KSYR\" readonly>";
					break;
				case "TPA": // Updated 03-11-2025
					result += "<!-- Updated 03-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPHL STOEN Q75 TEUFL BAAMF DADES2 KTPA\" readonly>"; // CDR PH
					result += "<br/><br/>OW: <input style=\"width:75%\"; value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 CRPLR EARZZ Q131 PRONI WAALT Y289 BAHAA HIBAC DADES2 KTPA\" readonly>";
					result += "<br/>Full OW/ZDC Avoid<input style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE B24 LYNUS SILLY Y485 STERN Y493 BAHAA HIBAC DADES2 KTPA\" readonly>"; // CDR AZ					
					result += "<br/><br/>East<input style=\"width:75%\" value=\"KPHL STOEN Q75 TEUFL BAAMF DADES2 KTPA\" readonly>"; // CDR PH
					result += "<br/>West via VXV<input style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN VXV THRSR HONID MAATY5 KTPA\" readonly>"; // CDR 4A
					result += "<br/><br/>ATLANTIC SOUTH 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KPHL OOD TEBEE HAYDO SIE WICKE LYNUS CUMBY LOZER WHOOS WEAKK BAHAA HIBAC DADES2 KTPA\" readonly>";
					result += "<br/>NE TO FL VIA J6: <input style=\"width:75%\"; value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ SPAYD VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>NE TO FL VIA J64: <input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV J64 BURNI QUARM AIR HVQ J85 SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>NE TO FL VIA Q480: <input style=\"width:75%\"; value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>VACAPES SOUTH 1: <input style=\"width:75%\"; value=\"KPHL OOD TEBEE HAYDO SIE B24 CORNE ECG ADUCI BAHAA HIBAC DADES2 KTPA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL STOEN Q75 GVE SLOJO FLYNT CYNTA TAY LAL BRDGE BRDGE9 KTPA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-11-2025
					result += "<!-- Verified with ATCSCC on 03-11-2025 -->";
					result += "<br/>48<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 MOL FLASK COREX SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>4A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN REEFI EMI J48 CSN FANPO Q40 ALEAN VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB J60 DJB ROD J43 VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>64<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ SPAYD VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>6A<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ SPAYD VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>80<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ J85 SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>85<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV J64 BURNI TYROO QUARM AIR HVQ J85 SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>8T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 AIR HVQ SPAYD VXV THRSR HONID MAATY5 KTPA\" readonly>";
					result += "<br/>AZ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO SIE B24 LYNUS SILLY Y485 STERN Y493 BAHAA HIBAC DADES2 KTPA\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY LITME HIRCK JDUBB RRSIN GSO Q75 TEUFL BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>J6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL MXE PENSY J110 FLIRT J6 HVQ J85 SPA BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>KA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL OOD TEBEE HAYDO TRPOD Q409 PUPYY BAAMF DADES2 KTPA\" readonly>";
					result += "<br/>PH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL STOEN Q75 TEUFL BAAMF DADES2 KTPA\" readonly>";
					break;

// VPS skipped

				case "YUL": // Updated 03-11-2025
					result += "<!-- Updated 03-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL DITCH Q437 LLUND CAM JASDU PBERG CARTR5 CYUL\"; readonly>"; // CDR PJ
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-11-2025
					result += "<!-- Verified with ATCSCC on 03-11-2025 -->";
					result += "<br/>FF<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL FJC T221 LAAYK DNY ALB PBERG CARTR5 CYUL\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 LLUND CAM JASDU PBERG CARTR5 CYUL\" readonly>";
					result += "<br/>PP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW CHLSE DIANO T212 LAAYK T291 DANZI ALB PBERG CARTR5 CYUL\" readonly>";
					result += "<br/>SY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW CHLSE T449 CFB T335 SYR ART IMPAC4 CYUL\" readonly>";
					break;
				case "YYZ": // Updated 03-11-2025
					result += "<!-- Updated 03-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KPHL PTW SARAA RAV PSB WOZEE LINNG3 CYYZ\"; readonly>"; // CDR 95
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-11-2025
					result += "<!-- Verified with ATCSCC on 03-11-2025 -->";
					result += "<br/>95<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 HNNAH Q450 JFK GAYEL Q818 WOZEE LINNG3 CYYZ\" readonly>";
					result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DITCH Q437 LLUND CAM Q822 GONZZ WOZEE LINNG3 CYYZ\" readonly>";
					result += "<br/>DQ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL DQO BELAY MORTY FOXHL RAMAY Q72 HACKS OXMAN LINNG3 CYYZ\" readonly>";
					result += "<br/>FP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW T447 DLMAR DMACK WOZEE LINNG CYYZ\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW SARAA RAV PSB WOZEE LINNG3 CYYZ\" readonly>";
					result += "<br/>PP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHL PTW CHLSE DIANO LYKOM T445 ROC T608 WOZEE LINNG3 CYYZ\" readonly>";
					break;
			}
		break; // End of PHL

		case "PHX":
			result = phx_departures(arvl, tail, ac_type, result);
			break; // End of PHX

// PIH skipped

		case "PIT":
			switch(arvl) {
				case "CLT": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPIT AHTIY BURGS RANDE HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KPIT DILNE TVTRN ROD J43 FLM SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPIT AHTIY BURGS RANDE HVQ LNDIZ KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>P1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPIT AHTIY BURGS HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>W1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPIT DILNE TVTRN APE HVQ LNDIZ PARQR4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPIT DILNE APE CVG PXV KM39I FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KPIT AHTIY BURGS HVQ VXV GQO SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/>DFW WEST: <input style=\"width:75%\" value=\"KPIT BURGS HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPIT DILNE TVTRN VHP J24 STL RZC FSM FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>P1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPIT AHTIY BURGS HNN RAMRD Q68 LITTR FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/>S1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPIT CKB VXV MEM LIT FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/>W1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPIT DILNE AEROS APE J186 BULEY J91 VXV MEM LIT FEWWW BRDJE5 KDFW\" readonly>";
					break;
				case "MIA": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPIT CKB COBBE DANCO Q103 SLOJO EFFAY Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KPIT CKB COBBE DANCO Q103 SLOJO Q75 ENEME Q65 DOFFY Q79 WULFF RSW PALMZ2 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPIT CKB PSK CLT CAE GURGE ISUZO WOPNR KENLL OMN ANNEY4 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>W1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPIT AHTIY BURGS HVQ SPA TWINS ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					break;
				case "PHL": // Updated 05-27-2025
					result += "<!-- Updated 05-27-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPIT JST BOJID4 KPHL\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPIT EWC WOMBT PSB BOJID4 KPHL\" readonly>"; // CDR N1
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPIT MGW MAULS Q34 GVE PAATS4 KPHL\" readonly>"; // CDR S1
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPIT PSB BUNTS3 KPHL\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-27-2025
					result += "<!-- Verified with ATCSCC on 05-27-2025 -->";
					result += "<br/>N1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPIT EWC WOMBT PSB BOJID4 KPHL\" readonly>";
					result += "<br/>N2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPIT EWC WOMBT PSB ETX SPUDS KPHL\" readonly>";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPIT JST BOJID4 KPHL\" readonly>";
					result += "<br/>S1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPIT MGW MAULS Q34 GVE PAATS4 KPHL\" readonly>";
					break;
				case "PHX": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPIT DILNE TVTRN ROD SNKPT Q42 LCOLN IRK J96 CIM ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KPIT AGC BURGS HNN IIU J78 PXV Q25 MEEOW J66 FUZ J4 INK J50 ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>BUM: <input style=\"width:75%\" value=\"KPIT AHTIY BURGS HNN Q176 BUM ICT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>FAM: <input style=\"width:75%\" value=\"KPIT AHTIY BURGS HNN IIU J78 FAM J98 SGF PER MMB FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>STL: <input style=\"width:75%\" value=\"KPIT DILNE TVTRN ROD VHP STL BUM ICT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPIT DILNE TVTRN ROD PXV FAM J78 ZUN BUNTR3 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>P1: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPIT DILNE TVTRN ROD VHP J24 STL BUM ICT TOTOE FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					break;
			}
		break; // End of PIT

		case "PNS":
			switch(arvl) {
				case "CLT": // Updated 07-07-2025
					result += "<!-- Updated 07-07-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-07-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KPNS CEW LGC BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPNS CEW MCN PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPNS CEW DEFUN SAV CHECR STOCR4 KCLT\" readonly>";
					result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPNS CATLN VUZ TAZZA FILPZ4 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-07-2025
					break;
				case "DFW": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPNS SJI AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KPNS MEI SQS FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/>SW Arrival: <input style=\"width:75%\" value=\"KPNS PENSI V198 LOXLY SJI J2 LSU LCH IAH CWK GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPNS SJI MCB SWB GGG YEAGR4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of PNS

// PSM skipped

		case "PSP":
			switch(arvl) {
				case "DFW": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPSP CATH1 PSP V137 TRM BLH J169 TFD J50 SSO J4 INK GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KPSP CATH1 PSP V370 TNP PKE DRK J78 ABQ J72 TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>DFW BGTOE: <input style=\"width:75%\" value=\"KPSP CATH1 PSP V372 BLH J169 TFD J50 ELP FST JCT GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>DFW WEST: <input style=\"width:75%\" value=\"KPSP CATH1 PSP V372 BLH J169 TFD J50 ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPSP CATH1 PSP V370 TNP PKE DRK J78 ABQ J72 TXO UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "ORD": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPSP CATH1 PSP V370 TNP J10 RSK J44 ALS J102 SLN J96 IRK BENKY6 KORD\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KPSP TNP EED BCE J100 EKR ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPSP CATH1 PSP V370 TNP PKE J96 IRK BDF8 KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>F1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPSP CATH1 PSP V370 TNP PKE DRK J6 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/>F2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPSP CATH1 PSP V370 TNP JOTNU ZELMA HAKMN LAKRR PROMT LARVE EKR BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>JB (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPSP CATH1 PSP V370 TNP JOTNU ZELMA HAKMN LAKRR PROMT LARVE EKR BFF J94 ONL J114 GEP DLL MSN JAKSA MOOPS FYTTE FYTTE7 KORD\" readonly>";
					result += "<br/>JV (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPSP CATH1 PSP V370 TNP PKE DRK J96 IRK BENKY6 KORD\" readonly>";
					result += "<br/>JW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPSP CATH1 PSP V370 TNP JOTNU ZELMA HAKMN LAKRR PROMT LARVE EKR BFF J94 ONL J114 GEP TVC WYNDE2 KORD\" readonly>";
					break;
				case "PHX": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPSP TRM6 TRM BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/>MOJAVE EAST: <input style=\"width:75%\" value=\"KPSP CATH1 PSP V137 TRM BLH HYDRR1 KPHX\" readonly>";
					result += "<br/>SPRINGS EAST: <input style=\"width:75%\" value=\"KPSP CATH1 PSP V137 TRM V137 IPL J2 HOGGZ HYDRR1 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>ME (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPSP CATH1 PSP V137 TRM BLH HYDRR1 KPHX\" readonly>";
					result += "<br/>SE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPSP CATH1 PSP V137 TRM V137 IPL J2 HOGGZ HYDRR1 KPHX\" readonly>";
					break;
			}
		break; // End of PSP

// PUB skipped

		case "PVD":
			switch(arvl) {
				case "CLT": // Updated 05-10-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-10-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPVD PUT NELIE Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPVD PUT CTR CAM Q822 GONZZ Q29 JHW FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>"; // CDR 29
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPVD JUMPR RIFLE HEADI Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>"; // CDR T7
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KPVD PUT NELIE Q75 GVE LYH MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-10-2025
					result += "<!-- Verified with ATCSCC on 05-10-2025 -->";
					result += "<br/>29<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPVD PUT CTR CAM Q822 GONZZ Q29 JHW FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>A4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPVD PUT BAF Q448 PTW J48 CSN GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPVD PUT CTR HNK J49 PSB Q71 GEFFS HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPVD PUT NELIE Q75 GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>T7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPVD JUMPR RIFLE HEADI Q97 SAWED GUILD Q409 OKNEE MLLET3 KCLT\" readonly>";
					break;
			}
		break; // End of PVD

		case "PWM":
			switch(arvl) {
				case "DCA": // Updated 03-12-2025
					result += "<!-- Updated 03-12-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input class=\"cdr_input\" style=\"width:75%\" value=\"KPWM NUBLE4 CCC TOPRR Q167 ZIZZI KNUKK ATR LAFLN DEALE3 KDCA\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPWM HSKEL3 BAUER SYR J59 PSB SKILS5 KDCA\" readonly>";
					result += "<br/><br/>DC NORTH<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPWM HSKEL3 BAUER SYR J59 PSB SKILS5 KDCA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODdO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-12-2025
					result += "<!-- Verified with ATCSCC on 03-12-2025 -->";
					result += "<br/>AB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPWM HSKEL3 BAUER ALB BIZEX Q75 MXE CLIPR3 KDCA\" readonly>";
					result += "<br/>N4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPWM HSKEL3 BAUER HNK J49 PSB SKILS5 KDCA\" readonly>";
					result += "<br/>PB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPWM NUBLE4 NELIE Q75 MXE CLIPR3 KDCA\" readonly>";
					result += "<br/>PJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPWM NUBLE4 CCC TOPRR Q167 ZIZZI KNUKK ATR LAFLN DEALE3 KDCA\" readonly>";
					result += "<br/>Y5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPWM HSKEL3 BAUER SYR J59 PSB SKILS5 KDCA\" readonly>";
					break;
			}
		break; // End of PWM

		case "RAP":
			switch(arvl) {
				case "CLT": // Updated 03-11-2025 // 
					result += "<!-- Updated 03-11-2025 -->";
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KRAP RAP J151 STL ENL PXV SKYWA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KRAP BFF SNY GLD J182 RZC ARG BNA TAZZA FILPZ4 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs in FAA database as of 03-12-2025
					break;
				case "DFW": // Updated 03-11-2025
					result += "<!-- Updated 03-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KRAP RAP GCK MMB MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KRAP RAP J151 ONL LNK MCI J41 SGF FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/>West: <input style=\"width:75%\"; value=\"KRAP ONL SLN IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>West via SGF: <input style=\"width:75%\"; value=\"KRAP BFF PUB KA39W TXO CDS MDANO JOVEM6 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of RAP

		case "RDM":
			switch(arvl) {
				case "DFW": // Updated 03-11-2025
					result += "<!-- Updated 03-11-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-11-2025
					result += "<br/><br/>DCT: <input style=\"width:75%\"; value=\"KRDM DSD BOI MLD EKR DBL TBE EZEEE MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KRDM KOATA NEERO JAJAY CRITO MLF ABQ J15 CME BGS GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\"; value=\"KRDM FUFQO NAXZY BOI ROARR CHE FQF DUUZE WAMIP ICT IBAKE VKTRY2 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of RDM

		case "RDU":
			switch(arvl) {
				case "CLT":
					result += "<br/><br/><b>Faa Pref Route (Avg FL220):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU CATAR SDAIL CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KRDU HOOKZ5 DAWTS TORQD MLLET3 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU CATAR LIB MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>00 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU CATAR SDAIL CHSLY6 KCLT\" readonly>";
					result += "<br/>41 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU HOOKZ5 DAWTS OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>C1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU HOOKZ5 DAWTS OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>C2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU CATAR SDAIL CHSLY6 KCLT\" readonly>";
					result += "<br/>HK (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU HOOKZ5 DAWTS OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>XF (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU OXFRD5 CARML AIROW CHSLY6 KCLT\" readonly>";
					break;
				case "DFW": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD VXV J46 ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD BURGG Q22 CATLN MCB J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU PACK9 SHPRD SOT VXV BNA MEM LIT FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>00 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>D1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD BURGG MEMFS LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>D2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D3 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ THRSR JAMMR MERDN MCB AEX DAS IAH CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D4 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>D5 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD BURGG MEMFS LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>D6 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D7 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ THRSR JAMMR MERDN MCB AEX DAS IAH CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D8 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>HK (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU HOOKZ5 DAWTS HINTZ Q172 YUTEE IRQ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>XF (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU OXFRD5 CARML MOL J24 HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					break;
				case "LAX": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD SCNRY BNA KK39A KENTO KD42U RSK PGS ESGEE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD SPA THRSR VLKNN Q30 IZAAC SUTTN J52 TXK J42 FUZ J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD BWG FAM MCI J80 DBL CHESZ Q88 PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU PACK9 SHPRD VXV J46 TUL EZEEE FTI J8 EED TNP BASET5 KLAX\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>51 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ THRSR VUZ J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>53 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR JCT FST ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>54 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC EIC J4 ABI EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>58 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER CNX J74 SJN J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>59 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>61 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ THRSR VUZ J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>68 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER CNX J74 SJN J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>HK (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU HOOKZ5 DAWTS HINTZ Q172 YUTEE IRQ THRSR SQS TXK SPS J72 ABQ J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>SH (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD BURGG MEMFS FSM IRW J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>XF (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU OXFRD5 CARML MOL J24 FLM GBEES Q176 CIM J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					break;
				case "MIA": // Updated 06-04-2025
					result += "<!-- Updated 06-04-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU ROZBO5 ROZBO GARIC SPOOF Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KRDU ROZBO5 ROZBO SLITT SMPRR ELMSZ Q97 DEBRL CSTAL3 KMIA\" readonly>"; // CDR 00
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD SPA ODF THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU PACK9 ROZBO CHS SAV CRG OMN ANNEY4 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-04-2025
					result += "<!-- Verified with ATCSCC on 06-04-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU ROZBO5 ROZBO SLITT SMPRR ELMSZ Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>43<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU ROZBO5 ROZBO MRPIT CAKET Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>49<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU HOOKZ5 DAWTS MRPIT Q409 ISUZO BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/>AR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU ROZBO5 ROZBO GARIC SPOOF Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>HR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU HURIC4 FEBEL SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>ML<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU ROZBO5 ROZBO SLITT SMPRR ELMSZ Q97 EBAYY MOGAE BNFSH3 KMIA\" readonly>";
					result += "<br/>SH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					break;
				case "ORD": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/><br/>North/East: <input style=\"width:75%\" value=\"KRDU OXFRD5 CARML GVE LDN PYTON LEONI JST EWC J64 FWA WATSN4 KORD\" readonly>";
					result += "<br/>South/West: <input style=\"width:75%\" value=\"KRDU HOOKZ5 DAWTS CAE IRQ THRSR VUZ J41 MEM J187 FTZ TRTLL6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU PACK9 SHPRD PSK BKW HNN ROD J149 FWA KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>00 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>BX (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU BEXGO5 BOUSY FAK MOL GEFFS J149 ROD WATSN4 KORD\" readonly>";
					result += "<br/>C1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU OXFRD5 CARML MOL J24 FLM HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>C2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU OXFRD5 CARML MOL J24 FLM HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>C3 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD CLAWD HVQ BIGLE PSKUR WEEVR Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>C4 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD CLAWD HVQ WWSHR RRONS EMMMA WYNDE2 KORD\" readonly>";
					result += "<br/>C5 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD HMV DOOGE ZIEBR Q108 IIU PXV FAM FTZ TRTLL6 KORD\" readonly>";
					result += "<br/>C6 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU OXFRD5 CARML MOL J24 FLM HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>HK (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU HOOKZ5 DAWTS HINTZ Q172 YUTEE IRQ VXV VOSTK Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>XF (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU OXFRD5 CARML MOL GEFFS J149 ROD WATSN4 KORD\" readonly>";
					break;
				case "PHL":
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU OXFRD5 CARML BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/>AFP Escape: <input style=\"width:75%\" value=\"KRDU T398 MANGE HPW OTT KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU RICK PXT KPHL\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>HK (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU HOOKZ5 DAWTS CUDLE Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/>HR: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU HURIC4 FEBEL GUILD SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/>LW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU LWOOD5 DBRAH MAULS Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>SH (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD CLAWD HVQ APE JST BOJID4 KPHL\" readonly>";
					break;
				case "PHX": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD VXV J46 BNA Q36 RZC TUL EZEEE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KRDU LWOOD5 DANCO ZIEBR Q108 IIU J8 STL J110 GCK J96 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ THRSR VLKNN Q30 IZAAC EIC POTEN ABI EWM DRRVR PINNG1 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>51 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ THRSR VUZ J14 PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>53 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR JCT FST ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>54 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC EIC J4 ABI EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>58 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>59 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>61 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD IPTAY CHOPZ THRSR VUZ J14 PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>68 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>HK (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU HOOKZ5 DAWTS HINTZ Q172 YUTEE IRQ TXK FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>SH (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU SHPRD4 SHPRD BURGG MEMFS TXK FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>XF (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRDU OXFRD5 CARML MOL J24 FLM GBEES Q176 TOTOE FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
					break;
			}
		break; // End of RDU

// RFD skipped

		case "RIC":
			switch(arvl) {
				case "CLT": // Updated 03-12-2025
					result += "<!-- Updated 03-12-2025 -->";
					result += "<br/><br/><b>Faa Pref Route: (Avg FL280)</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRIC KALLI7 READE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KRIC HPW TYI TORQD MLLET3 KCLT\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KRIC KALLI7 READE LYH LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRIC READE7 LYH MAJIC4 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-12-2025
					result += "<!-- Verified with ATCSCC on 03-12-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 READE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>32<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC HPW V213 GUMBE RDU SDAIL CHSLY6 KCLT\" readonly>";
					result += "<br/>41<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC HOUKY MAZON BEETN JIMAR DEEEZ Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>60<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 READE MOL J24 TARCI LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>63<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC HOUKY MAZON BEETN JIMAR DEEEZ Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>C1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC HOUKY MAZON BEETN JIMAR DEEEZ Q409 OKNEE MLLET3 KCLT\" readonly>";
					result += "<br/>C2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC HOUKY MAZON BEETN JIMAR DEEEZ Q409 OKNEE MLLET3 KCLT\" readonly>";
					break;
				case "DFW": // Updated 03-12-2025
					result += "<!-- Updated 03-12-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/></span><input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 SANNY COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/>NE Arrival: <input style=\"width:75%\"; value=\"KRIC KALLI7 SANNY VXV MEM J66 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>North via ARG: <input style=\"width:75%\"; value=\"KRIC KALLI7 READE LYH PSK LVT ARG FSM RRNET BRDJE5 KDFW\" readonly>";
					result += "<br/>North via PXV: <input style=\"width:75%\"; value=\"KRIC KALLI7 READE MOL J24 HVQ J8 IIU PXV J131 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRIC READE7 LYH PSK HMV GQO HAB SQS YEAGR4 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-12-2025
					result += "<!-- Verified with ATCSCC on 03-12-2025 -->";
					result += "<br/>00<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 SANNY COLZI Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>51<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 READE LYH PSK ALEAN Q66 LITTR FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>53<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 READE LYH PSK ALEAN Q40 BFOLO IGB SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>D1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 SANNY COLZI BURGG MEMFS LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>D2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 SANNY COLZI Q52 CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 SANNY COLZI Q52 CHOPZ THRSR JAMMR MERDN MCB AEX DAS IAH CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>D4<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 SANNY COLZI AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>D5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 SANNY COLZI BURGG MEMFS LIT FEWWW BRDJE5 KDFW\" readonly>";
					result += "<br/>D6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 SANNY COLZI Q52 CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/>D7<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 SANNY COLZI Q52 CHOPZ THRSR JAMMR MERDN MCB AEX DAS IAH CRGER GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/>D8<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 SANNY COLZI AWYAT Q52 CHOPZ THRSR VLKNN Q30 IZAAC YUYUN WHINY4 KDFW\" readonly>";
					break;
				case "MIA": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRIC HOUKY MAZON KOHLS SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KRIC HOUKY MAZON KOHLS Q97 DEBRL CSTAL3 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>00 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC HOUKY MAZON CVI ELLDE Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>50 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC KALLI7 DRAIK GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>AR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRIC HOUKY MAZON KOHLS SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					break;
			}
		break; // End of RIC

		case "RNO":
			switch(arvl) {
				case "DFW": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRNO ZEFFR9 PESKE MVA KITTN Q164 ROCCY Q130 PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>Avoid ZLC: <input style=\"width:75%\" value=\"KRNO RENO1 FMG J92 BLD J72 TXO TURKI JOVEM6 KDFW\" readonly>";
					result += "<br/>South via ELP: <input style=\"width:75%\" value=\"KRNO RENO1 FMG J92 BLD J72 PGS INW J86 ELP J50 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/>DFW WEST: <input style=\"width:75%\" value=\"KRNO ZEFFR9 PESKE MVA MLF J28 ICT TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRNO RENO1 FMG J92 BLD J72 TXO TURKI UKW8 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>DF (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRNO ALPYN1 YERIN MVA MLF J28 ICT TUL HITUG SEEVR4 KDFW\" readonly>";
					break;
				case "PHX": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRNO ZEFFR9 PESKE SHUFL Q13 PRFUM WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KRNO RENO1 FMG J5 EHF J65 BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRNO RENO1 FMG J92 BLD COYOT5 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>PB (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRNO RENO1 FMG J5 EHF J65 BLH HYDRR1 KPHX\" readonly>";
					result += "<br/>PH (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRNO RENO1 FMG BTY J92 BLD PRFUM WOTRO BRUSR1 KPHX\" readonly>";
					break;
			}
		break; // End of RNO

		case "ROC":
			switch(arvl) {
				case "CLT": // Updated 01-09-2025
					result += "<!-- Updated 01-09-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KROC GEE BURST HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KROC GEE SFK J220 AML GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KROC JHW DJB APE HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/>West via ROD<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KROC JHW DJB ROD FLM SKYWA FILPZ4 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
					result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KROC BURST HVQ LNDIZ PARQR4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KROC JHW Q29 CREEP KURTZ PXV J131 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KROC JHW EWC AIR HVQ VXV GQO SQS YUYUN WHINY4 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KROC ROC WOZEE CRL FWA ENL FSM RRNET SEEVR4 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of ROC

// ROW skipped
// RST skipped

		case "RSW":
			switch(arvl) {
				case "CLT": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRSW CSHEL7 VIYAP CHECR STOCR4 KCLT\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KRSW CSHEL7 CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>Atlantic OW: <input style=\"width:75%\" value=\"KRSW CSHEL7 LENDS AR16 SEELO OGGRE Y436 PITRW STOCR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRSW ORL CRG SAV FLO RASLN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>C0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 CAMJO WIGVO PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>V0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 VIYAP CHECR STOCR4 KCLT\" readonly>";
					break;
				case "DCA": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRSW CSHEL7 VIYAP Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>"; // CDR V0
					result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KRSW CSHEL7 LENDS GRUBR Y299 SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>"; // CDR L0
					result += "<br/>Full OW: <input style=\"width:75%\"; value=\"KRSW CSHEL7 LENDS PELCN ROWSY Y494 SILLY LYNUS B24 DASHA ATR LAFLN DEALE3 KDCA\" readonly>";
					result += "<br/>FL TO NE 1 <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KRSW CSHEL7 CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>"; // CDR C2
					result += "<br/>FL TO NE 2 <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\"; value=\"KRSW CSHEL7 JAMIZ Q118 THRSR BOBBD TONIO Q34 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>FL TO NE 4 <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\"; value=\"KRSW CSHEL7 LENDS OGGRE Y436 PITRW SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>FL TO NE 5 <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\"; value=\"KRSW CSHEL7 CAMJO IRQ KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-17-2025
					result += "<!-- Verified with ATCSCC on 04-17-2025 -->";
					result += "<br/>C2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>D2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW DYLYN TIRCO MATLK ZERBO DUCEN VIYAP SUSYQ Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>L0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 LENDS GRUBR Y299 SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>N2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW MOOKY PIKKR HILTI DEANR CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/>V0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 VIYAP Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
					break;
				case "DFW": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KRSW MOOKY REMIS Y280 REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/><b style=\"color:orange\">FAA pref rte triggers KZ_FRA_SEGMENT bc it cuts the corner through ZMA but you can ignore it<\/b>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KRSW CSHEL7 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KRSW MARCI M580 MINOW HRVLK KELPP LCHLH MUSYL IAH CRIED BEREE3 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-17-2025
					result += "<!-- Verified with ATCSCC on 04-17-2025 -->";
					result += "<br/>D2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW DYLYN TIRCO STYMY WAKKO MJAMS ETORE SHRKS CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>D3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW DYLYN TIRCO STYMY WAKKO MJAMS ETORE SHRKS CABLO DEFUN J2 CEW J50 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CHARO BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>H3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CHARO BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>J0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>L2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 LENDS GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>L3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 LENDS GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN IZAAC YUYUN WHINY4 KDFW\" readonly>";
					result += "<br/>M0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW MOOKY BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>M1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW MOOKY BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>N2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW MOOKY PIKKR HILTI DEANR Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/>N3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW MOOKY PIKKR HILTI DEANR Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS WHINY4 KDFW\" readonly>";
					break;
				case "LGA":
					result += "<br/><input style=\"width:75%\" value=\"KRSW CSHEL7 VIYAP Q87 HURTS PROUD2 KLGA\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KRSW CSHEL7 CAMJO Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
					result += "<br/>FLORIDA TO NE 1: <input style=\"width:75%\" value=\"KRSW CSHEL7 CAMJO Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
					result += "<br/>FLORIDA TO NE 4 (Atlantic Rte): <input style=\"width:75%\" value=\"KRSW CSHEL7 LENDS OGGRE Y436 PITRW LCAPE Q87 HURTS PROUD2 KLGA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; //TODDO					
					break;
				case "MIA": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Diversion Recovery:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRSW BARBN FROGZ FROGZ4 KMIA\" readonly>";
					break;
				case "ORD": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRSW CSHEL7 JAMIZ Q118 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR J0
					result += "<br/><br/>East via APE: <input style=\"width:75%\" value=\"KRSW CSHEL7 CAMJO Q99 HEPAR WIGVO IRQ SPA J83 APE J178 FWA WATSN4 KORD\" readonly>";
					result += "<br/>SW Arrival: <input style=\"width:75%\" value=\"KRSW CSHEL7 JAMIZ Q118 THRSR BNA J73 PXV CASHN SHAIN2 KORD\" readonly>";
					result += "<br/>West/OW: <input style=\"width:75%\" value=\"KRSW MOOKY REMIS Y280 REDFN Q105 HRV MCB J35 RUSLR FTZ TRTLL6 KORD\" readonly>";
					result += "<br/><br/>FL TO OHIO VALLEY: <input style=\"width:75%\" value=\"KRSW CSHEL7 JAMIZ Q118 THRSR VARNM GLAZR HOPAP VOSTK HEVAN BONNT VEECK5 KORD\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-17-2025
					result += "<!-- Verified with ATCSCC on 04-17-2025 -->";
					result += "<br/>D2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW DYLYN TIRCO STYMY WAKKO MJAMS ETORE SHRKS THRSR Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>J0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 JAMIZ Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>L0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 LENDS PELCN Y309 FLRDA DIZNY Y436 DEDDY QUIWE BENBY DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>L2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 LENDS GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
					break;
				case "PHL": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KRSW CSHEL7 VIYAP Q87 JROSS Q135 RREGG Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KRSW CSHEL7 LENDS M202 CANIT AR23 OZENA Y309 FLRDA IDOLS SKARP Q101 TUGGR KALDA ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KRSW CSHEL7 LENDS PELCN ROWSY Y494 SILLY LYNUS B24 DASHA JIIMS4 KPHL\" readonly>";
					result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\" value=\"KRSW CSHEL7 LENDS PELCN ROWSY OTTNG HAAYY WICKE DASHA JIIMS4 KPHL\" readonly>";
					result += "<br/>FL TO NE 1: <input style=\"width:75%\" value=\"KRSW CSHEL7 CAMJO Q99 TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>FL TO NE 2: <input style=\"width:75%\" value=\"KRSW CSHEL7 CAMJO Q99 HEPAR WIGVO IRQ BURGG Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>FL TO NE 3: <input style=\"width:75%\" value=\"KRSW CSHEL7 CAMJO TWINS SPA J83 APE JST BOJID4 KPHL\" readonly>";
					result += "<br/>FL TO NE 4: <input style=\"width:75%\" value=\"KRSW CSHEL7 LENDS OGGRE PITRW LCAPE ALWZZ OGRAE Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>V0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KRSW CSHEL7 VIYAP Q87 JROSS Q135 RREGG Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					break;
			}
		break; // End of RSW

		case "SAN":
			switch(arvl) {
				case "CLT": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-17-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 SJN TCC J6 IRW FSM ARG TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 SSO EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>"; // CDR NF
					result += "<br/>North: <input style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL EED J8 FTI TOTOE Q176 GBEES FLM TAFTT PARQR4 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-17-2025
					result += "<!-- Verified with ATCSCC on 03-17-2025 -->";
					result += "<br/>NF<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN GBN J50 SSO EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>NJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN TGOLD PXR J18 ABQ J6 IRW FSM MEMFS Q34 HITMN TAZZA FILPZ4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 05-29-2025
					result += "<!-- Updated 05-29-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR ONM TXO MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/>Weekend: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN KA21S REYOK LBB VKTRY VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAN MZB J2 GBN J50 SSO J4 INK ACT YEAGR4 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-29-2025
					result += "<!-- Verified with ATCSCC on 05-29-2025 -->";
					result += "<br/>DG<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>JE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>JU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN GBN J50 ELP FST JCT GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>SE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>TN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN GBN J50 ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
					result += "<br/>UK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN TGOLD PXR J18 SJN J74 TXO TURKI VKTRY2 KDFW\" readonly>";
					break;
				case "LAX": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAN CWARD2 SLI KLAX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAN PEBLE6 SLI KLAX\" readonly>";
					break;
				case "MIA": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP J86 LEV Y290 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL LANCY J78 IRW J14 LIT VLKNN ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>HAVANA EAST: <input style=\"width:75%\" value=\"KSAN SAYOW2 IPL NOVOS MXL UT25 AXASA UT41 CUU UJ2 MAM UT22 VESKO UT11 OTOGU ALPUK UM346 CANOA SNDBR3 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAN BRDR7 IPL J2 GBN J50 CEW DRABK HEVVN PIE PALMZ2 KMIA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "ORD": // Updated 01-11-2025
					result += "<!-- Updated 01-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 SJN CIM J96 IRK SHAIN2 KORD\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR BCE J100 EKR CYS J148 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 BOLIC VERNO SJN ABQ FTI TOTOE ICT BUM FTZ TRTLL6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAN BRDR7 IPL J18 GBN J18 SLN J96 IRK BDF8 KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>F1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 ABQ J6 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/>F2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR Q88 PROMT EKR BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>JB (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR Q88 PROMT EKR BFF J94 ONL J114 GEP DLL MSN JAKSA MOOPS FYTTE FYTTE7 KORD\" readonly>";
					result += "<br/>JV (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 SLN J96 IRK SHAIN2 KORD\" readonly>";
					result += "<br/>JW (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR Q88 PROMT EKR BFF J94 ONL J114 GEP TVC WYNDE2 KORD\" readonly>";
					break;
				case "PHL": // Updated 07-08-2025
					result += "<!-- Updated 07-08-2025 MP -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-08-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 FTI TOTOE Q176 STL TTH ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 GCK J96 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>"; // CDR MC
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 FTI EZEEE MMB PER SGF J98 FAM J78 PXV J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>"; // CDR PX
					result += "<br/><br/>North/ZKC Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL EED J236 TBC DVC PUB J64 HLC PWE LMN MZV JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>"; // CDR J2
					result += "<br/>South/ZKC Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 ABQ J6 IRW FSM ARG PXV ROD J152 JST BOJID4 KPHL\" readonly>"; // CDR RD
					result += "<br/><br/>North via ONL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR Q88 PROMT EKR BFF J94 ONL FOD DBQ J94 OBK GIJ J146 CXR EWC JST BOJID4 KPHL\" readonly>"; // CDR BK
					result += "<br/>South via ATL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 SSO J4 EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>"; // CDR VU
					result += "<br/>South via SJI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>"; // CDR M2
					result += "<br/>South via CEW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>"; // CDR CE
					result += "<br/><br/>BAE 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR Q88 PROMT EKR MBW RAP RWF J34 BAE J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>BAE 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR Q88 PROMT EKR MBW RAP J82 FSD J16 BAE J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>CEW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>GRB<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR Q88 PROMT EKR MBW RAP ABR GRB FNT DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>HITMN<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 ABQ J6 IRW FSM MEMFS Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>IIU<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>JOT 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J44 RSK DVV J60 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>JOT 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL EED J236 TBC DVC PUB J64 HLC PWE LMN MZV JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>LEV EAST 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>LEV EAST 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>MCI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 GCK J96 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>MGM 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 SSO J4 EWM J66 ABI J4 FUZ Q184 ARNNY FRDDO TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>MGM 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>MGM 3<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>OBK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR Q88 PROMT EKR BFF J94 ONL FOD DBQ J94 OBK GIJ J146 CXR EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>PXV<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 FTI EZEEE MMB PER SGF J98 FAM J78 PXV J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>ROD<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 ABQ J6 IRW FSM ARG PXV ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>SPI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 SLN J24 MCI J80 SPI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>VHP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>VLKNN<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 SSO J4 EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAN BRDR7 IPL J18 PXR J244 FTI LBL ICT BUM STL J110 VHP ROD EWC PSB BUNTS3 KPHL\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-08-2025
					result += "<!-- Verified with ATCSCC on 07-08-2025 -->";
					result += "<br/>AD<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN SAYOW2 IPL MXL AMUDI IMEXA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>AM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN SAYOW2 IPL MXL AMUDI IMEXA JALIL VOKOM MRF JCT J86 IAH J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>B1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR Q88 PROMT EKR MBW RAP RWF J34 BAE J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>B2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR Q88 PROMT EKR MBW RAP J82 FSD J16 BAE J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>BK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR Q88 PROMT EKR BFF J94 ONL FOD DBQ J94 OBK GIJ J146 CXR EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>BN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 ABQ J6 IRW FSM MEMFS Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>CE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>GR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ HAKMN Q73 LAKRR Q88 PROMT EKR MBW RAP ABR GRB FNT DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J44 RSK DVV J60 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>J2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL EED J236 TBC DVC PUB J64 HLC PWE LMN MZV JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>L1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>L2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>LV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>M1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 SSO J4 EWM J66 ABI J4 FUZ Q184 ARNNY FRDDO TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>M2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>M3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>MC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 GCK J96 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>PX<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 FTI EZEEE MMB PER SGF J98 FAM J78 PXV J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 ABQ J6 IRW FSM ARG PXV ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>SP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 SLN J24 MCI J80 SPI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>VH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 TGOLD PXR J18 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>VU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 SSO J4 EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>VY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 GBN TUS VYLLA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>XC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN ZZOOO4 GBN J50 SSO CUS AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					break;
				case "PHX": // Updated 07-07-2025
					result += "<!-- Updated 07-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAN ZZOOO4 HOGGZ HYDRR1 KPHX\" readonly>";
					// result += "<br/><br/>Superbowl: <input style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CNERY BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KSAN ZZOOO4 MTBAL CADEZ EED WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAN BRDR7 IPL J18 MOHAK ARLIN4 KPHX\" readonly>";
					result += "<br/><input style=\"width:75%\" value=\"KSAN PEBLE6 SLI J78 TRM J169 BLH ARLIN4 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
					result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
					result += "<br/>SE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAN IPL J2 HOGGZ HYDRR1 KPHX\" readonly>";
					break;
			}
		break; // End of SAN

		case "SAT":
			switch(arvl) {
				case "CLT": // Updated 05-01-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-01-2025 PCM -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAT SNIDR1 MOLLR Q56 CATLN BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>"; // CDR 1X
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAT SLENA1 BRENI LAMMY TBD HRV Q56 CATLN BESTT JONZE5 KCLT\" readonly>"; // CDR 5X
					// todo south OW/ Full OW?
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAT CHURN Q56 BLUMS IAH J29 VELCO J50 CEW SZW TAY SAV FLO RASLN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-01-2025
					result += "<!-- Verified with ATCSCC on 05-01-2025 -->";
					result += "<br/>0J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SNIDR1 MOLLR Q56 SJI J2 CEW ALLMA PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>1J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ Q184 MERDN PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>1X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>3X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SNIDR1 MOLLR Q56 CATLN BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>5J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SLENA1 BRENI PSX SBIRD HRV Q56 SJI J2 CEW ALLMA PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>5X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SLENA1 BRENI LAMMY TBD HRV Q56 CATLN BESTT JONZE5 KCLT\" readonly>";
					break;
				case "DFW": // Updated 06-29-2025
					result += "<!-- Updated 06-29-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAT YODUH1 YODUH GUTZZ SOCKK4 KDFW\" readonly>"; // CDR 0N
					result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAT ALISS6 ALISS JCT SJT GEEKY BOOVE7 KDFW\" readonly>"; // CDR 9S
					result += "<br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAT SNIDR1 BLUMS IAH BLTWY CRIED BEREE3 KDFW\" readonly>"; // CDR 3S
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAT ALAMO4 GOBBY CWK YEAGR4 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-29-2025
					result += "<!-- Verified with ATCSCC on 06-29-2025 -->";
					result += "<br/>0N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 YODUH GUTZZ SOCKK4 KDFW\" readonly>";
					result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 YODUH GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>3N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SNIDR1 BLUMS IAH BLTWY CRIED WHINY4 KDFW\" readonly>";
					result += "<br/>3S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SNIDR1 BLUMS IAH BLTWY CRIED BEREE3 KDFW\" readonly>";
					result += "<br/>5N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SLENA1 BRENI IAH CRIED WHINY4 KDFW\" readonly>";
					result += "<br/>5S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SLENA1 BRENI IAH CRIED BEREE3 KDFW\" readonly>";
					result += "<br/>6N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT TJANO1 TJANO COT DLF SJT GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/>6S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT TJANO1 TJANO COT DLF SJT GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>9N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT ALISS6 ALISS JCT SJT GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/>9S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT ALISS6 ALISS JCT SJT GEEKY BOOVE7 KDFW\" readonly>";
					break;
				case "LAX": // Updated 01-17-2025
					result += "<!-- Updated 01-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAT ALISS6 ALISS FST J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSAT ALISS6 ALISS JCT Q20 CNX J15 ABQ J78 DRK HIPPI GABBL HLYWD1 KLAX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>0E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT ALISS6 ALISS JCT Q20 CNX ONM PXR BXK J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/>1X (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 PRTZY TXO J72 ABQ J78 DRK GABBL HLYWD1 KLAX\" readonly>";
					result += "<br/>9X (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT ALISS6 ALISS FST J2 ELP J50 SSO BXK ESTWD HLYWD1 KLAX\" readonly>";
					break;
				case "MIA": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAT SNIDR1 MOLLR Q56 PEKON LLA LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KSAT SNIDR1 MOLLR Q56 SJI J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAT IAH J2 DEFUN SZW PIE RSW PALMZ2 KMIA\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>0L (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SNIDR1 MOLLR Q56 SJI J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>0Q (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SNIDR1 MOLLR Q56 PEKON LLA LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>1L (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ Q184 MERDN DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>1Q (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ Q184 DOBIS HRV LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>5L (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SLENA1 BRENI PSX SBIRD TBD SJI J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>5Q (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SLENA1 BRENI PSX SBIRD LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					break;
				case "ORD": // Updated 06-17-2025
					result += "<!-- Updated 06-17-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ MLC SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KSAT SNIDR1 BLUMS IAH J101 LIT J180 FTZ TRTLL6 KORD\" readonly>";
					result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ J25 MCI J26 IRK BENKY6 KORD\" readonly>"; // CDR 0N
					result += "<br/><b>For west dptr use: KSAT LEJON4 LEJON ABI...<\/b>";
					result += "<br/><br/>East Arrival<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSAT SNIDR1 BLUMS IAH J101 LFK SUTTN J29 CARIN MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR 0B
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAT ALAMO4 JUMBO J131 LIT J180 FTZ BDF8 KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-17-2025
					result += "<!-- Verified with ATCSCC on 06-17-2025 -->";
					result += "<br/>0B<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SNIDR1 BLUMS IAH J101 LFK SUTTN J29 CARIN MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>0J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SNIDR1 BLUMS IAH J101 LFK MCB J35 XESSS MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>0K<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ J42 TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>0N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>";
					result += "<br/>0T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SNIDR1 BLUMS IAH J101 LFK TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>1B<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ J42 TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>1J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ J42 TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>1T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ J42 TXK Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>1X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 KLNGR FUZ TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>";
					result += "<br/>3K<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SNIDR1 BLUMS IAH J29 CARIN MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>3N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SNIDR1 BLUMS WYLSN BYP TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>";
					result += "<br/>3X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SNIDR1 BLUMS IAH J29 ELD LIT J180 FTZ TRTLL6 KORD\" readonly>";
					result += "<br/>5B<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SLENA1 BRENI PSX J22 MCB MERDN HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>5J<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SLENA1 BRENI PSX J22 MCB J35 XESSS MEMFS Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>5K<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SLENA1 BRENI PSX J22 MCB MERDN HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>5T<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT SLENA1 BRENI PSX J22 MCB MERDN HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/>9N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT ALISS6 ALISS JCT SJT ABI TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>";
					result += "<br/>9X<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT ALISS6 ALISS JCT SJT HNKER ICT J26 IRK BENKY6 KORD\" readonly>";
					break;
				case "PHX":
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAT ALISS6 ALISS FST ELP DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSAT YODUH1 KLNGR MQP J23 BATIK J58 PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAT FST ELP J2 TUS SUNSS8 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>1X (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT YODUH1 PRTZY CNX ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>9X (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSAT ALISS6 ALISS FST ELP DRRVR PINNG1 KPHX\" readonly>";
					break;
			}
		break; // End of SAT

		case "SAV":
			switch(arvl) {
				case "CLT": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAV JROSS FLLGG STOCR4 KCLT\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KSAV SMALZ MILEN QUIWE BANKR BANKR5 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSAV FLO RASLN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed as of 03-17-2025
					break;
				case "DFW": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-17-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KSAV SMALZ WIGVO DBN MCN VUZ J14 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>SE Arrival: <input style=\"width:75%\" value=\"KSAV SMALZ WIGVO DBN MGM MEI MHZ MLU YUYUN BEREE3 KDFW\" readonly>"; // South
					result += "<br/>Gulf Coast: <input style=\"width:75%\" value=\"KSAV ALLMA DUYER MCB J50 AEX PNUTS BEREE3 KDFW\" readonly>"; // Coastal
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/>NE Arrival: <input style=\"width:75%\" value=\"KSAV DBN MCN LGC VUZ J14 LIT FINGR9 KDFW\" readonly>";
					result += "<br/>SE Arrival: <input style=\"width:75%\" value=\"KSAV AMG SZW DEFUN J2 SJI MCB AEX YEAGR4 KDFW\" readonly>"; // South
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed as of 03-17-2025
					break;
			}
		break; // End of SAV

		case "SBA": // TODO
			switch(arvl) {
				case "DFW":
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref as of 03-30-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KSBA MISHN4 NNAVY EED DRK J6 ABQ J72 TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KSBA KWANG6 HENER FIM PMD J6 ABQ J72 TXO J72 SPS UKW8 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-30-2025
					result += "<!-- Verified with ATCSCC on 03-30-2025 -->";
					result += "<br/>JE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSBA MISHN4 SXC TRM BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					break;
				case "PHX": // Updated 05-16-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-16-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KSBA MISHN4 SXC TRM BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/>Inland: <input style=\"width:75%\"; value=\"KSBA MISHN4 BOILE BLH HYDRR1 KPHX\" readonly>";
					result += "<br/>North: <input style=\"width:75%\"; value=\"KSBA MISHN4 NNAVY WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KSBA KWANG6 GINNA PDZ J50 BLH ARLIN4 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-16-2025
					break;
			}
		break; // End of SBA

		// TODO SBN

		case "SBP":
			switch(arvl) {
				case "DFW": // Updated 05-18-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-18-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSBP DERBB MARIC PMD J65 BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/><br/>North via ABQ<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSBP MQO DERBB MARIC PMD J6 DRK J78 ABQ J72 TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/>North via FTI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSBP MQO DERBB MARIC PMD J6 EED J8 FTI J58 PNH MDANO VKTRY2 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-18-2025
					break;
			}
		break; // End of SBP

		case "SDF":
			switch(arvl) {
				case "BNA": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSDF HIDEY1 HIDEY LULOU RYYMN2 KBNA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					break;
				case "CLT": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSDF EEVAA1 SHIPR TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KSDF LOKRD1 LOKRD CNTRY SKYWA FILPZ4 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "DFW": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-17-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KSDF HIDEY1 RAMRD LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>SE Arrival: <input style=\"width:75%\" value=\"KSDF HIDEY1 RAMRD BNA WAKOL Q34 MEMFS Q29 HARES YUYUN WHINY4 KDFW\" readonly>";
					result += "<br/>NW Arrival: <input style=\"width:75%\" value=\"KSDF GTGON1 TERGE PLESS J78 TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSDF MYS BWG BNA MEM LIT FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-17-2025
					result += "<!-- Verified with ATCSCC on 04-17-2025 -->";
					break;
				case "MIA": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSDF LOKRD1 BILET NOTWO HONID FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KSDF LOKRD1 BILET VXV SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KSDF LOKRD1 BILET VXV SPA CRE OGGRE AR17 BAHAA HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KSDF HIDEY1 RAMRD BNA ACORI FROGZ4 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "OSU": // Updated 04-17-2025
					result += "<!-- Updated 04-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSDF SPILR1 BNGIN PODGY FISUL JAKTZ JAKTZ2 KOSU\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					break;
			}
		break; // End of SDF

		case "SEA":
			switch(arvl) {
				case "CLT": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSEA MONTN2 SEA ZADON ZELAK ZIRAN MLP J36 DIK J70 ABR J90 RWF J34 ODI J30 JOT VHP J24 FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KSEA SUMMA2 SUMMA J54 BKE DNJ J82 DBS BOY BFF LBF PWE STL J45 BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KSEA MONTN2 NEZUG FLAAK SINGG RNDDY WELUR GGW MOT OPETE DLH JAYME TVC FLIPE DJB J85 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>Avoid ZLC: <input style=\"width:75%\" value=\"KSEA SUMMA2 LKV J5 FMG J92 BLD J72 GUP J8 FTI EZEEE IFI TUL J46 BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSEA MONTN2 SEA ZADON ZELAK ZIRAN MLP J136 BIL J16 FSD J45 BNA J46 VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "DFW": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSEA SUMMA2 SUMMA J54 BOI J15 JNC ALS PNH MDANO JOVEM6 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSEA MONTN2 SEA ZADON ZELAK ZIRAN MLP J136 BIL CZI BFF SNY GLD GCK MMB IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KSEA SUMMA2 LKV BAM ELY BCE RSK J58 FTI TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSEA MONTN2 SEA J90 MWH LKT J52 OCS J163 CHE PUB TBE PNH UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "LAX": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSEA SUMMA JINMO Q7 JAGWA BURGL IRNMN2 KLAX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					break;
				case "MIA": // Updated 07-18-2025
					result += "<!-- Updated 07-18-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-18-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KSEA MONTN2 SEA NORMY J90 MWH DLN DDY BFF SGF MEMFS MGMRY ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KSEA SUMMA2 BKE PIH J20 LAA TOTOE MMB J98 IRW J20 EIC SWB HRV Q105 BLVNS Q102 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KSEA MONTN2 SEA ZADON ZELAK ZIRAN MLP J136 BIL J151 STL Q19 HITMN THRSR HONID FROGZ4 KMIA\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KSEA SUMMA2 BKE J54 PIH J20 LAA TOTOE MMB J98 IRW J20 EIC MHZ MERDN DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>Coastal: <input style=\"width:75%\" value=\"KSEA SUMMA2 SUMMA WANTA J523 IMB NEERO WINEN CORKR BAVPE J86 ELP J86 LEV Y290 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSEA MONTN2 SEA NORMY J90 MWH LKT J52 DBS J175 CYS GLD J182 ICT RZC MEM J41 MGM SZW PIE PALMZ2 KMIA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-18-2025
					break;
				case "PHL": // Updated 07-17-2025
					result += "<!-- Updated 07-17-2025 P -->"
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSEA MONTN2 SEA NORMY J90 MWH J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSEA MONTN2 SEA NORMY J70 MLP J36 GTF LEWIT Q140 EEGEE FNT DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSEA SUMMA2 BKE DNJ J82 FSD J16 MCW J90 OBK J584 CRL J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/><b>PAATS Arr: ..  MCW DBQ JOT KI60O KI54Q HVQ J24 MOL GVE PAATS4 KPHL<\/b>";
					result += "<br/><br/>South via MCI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSEA SUMMA2 BKE J163 PIH J20 FQF J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/><b>ZOB Avoid: ..  J80 MCI J24 STL J8 IIU Q108 SITTR Q34 GVE PAATS4 KPHL<\/b>";
					result += "<br/><br/>BAE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSEA MONTN2 SEA NORMY J90 MWH J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>IIU<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSEA SUMMA2 BKE J54 BOI J15 JNC HBU J28 GCK ICT SGF J98 FAM J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KSEA MONTN2 SEA J90 MWH J34 DJB PSB BUNTS3 KPHL\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";  // No CDRs as of 07-17-2025
					break;
			}
		break; // End of SEA

		case "SFO":
			switch(arvl) {
				case "CLT": // Updated 03-16-2025
					result += "<!-- Updated 03-16-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-16-2025
					result += "<br/><br/>NRS/HAR: <input style=\"width:75%\"; value=\"KSFO TRUKN2 SYRAH Q130 REANA KD45S KA42W KK42C BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/>Night (10PM to 7AM Local): <input style=\"width:75%\"; value=\"KSFO NIITE4 SYRAH Q128 EDLES KD51W KK45G BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South/HAR: <input style=\"width:75%\"; value=\"KSFO TRUKN2 SYRAH Q130 REANA KD48Q KD45S KA39Y KK36A KF30E IZAAC Q30 VLKNN TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/>North: <input style=\"width:75%\"; value=\"KSFO TRUKN2 MOGEE Q122 LCU OCS J94 BFF WYYTE CANIO DSM SPI IIU Q50 CUBIM WILUM PARQR4 KCLT\" readonly>";
					result += "<br/><br/>North via DPR: <input style=\"width:75%\" value=\"KSFO SFO4 SFO SAC J32 DPR J34 ODI J30 JOT VHP J24 FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>South via ABI: <input style=\"width:75%\" value=\"KSFO SSTIK5 KAYEX LOSHN PMD J6 DRK SJN J74 CNX HOMET ABI J50 ACT SQS VUZ THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSFO SFO4 SFO LIN J84 MVA J198 ILC J58 MLF J28 ICT SGF J98 FAM VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "DFW": // TODO
					break;
				case "JFK": // TODO
					break;
				case "LAX": // Updated 04-01-2025
					result += "<!-- Updated 04-01-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/>SFO 1L/1R: <input style=\"width:75%\"; value=\"KSFO SSTIK5 SUSEY EBAYE BURGL IRNMN2 KLAX\" readonly>";
					result += "<br/>SFO 28L/28R: <input style=\"width:75%\"; value=\"KSFO WESLA5 SUSEY EBAYE BURGL IRNMN2 KLAX\" readonly>";
					result += "<br/>Night: <input style=\"width:75%\"; value=\"KSFO NIITE4 SYRAH BURGL IRNMN2 KLAX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KSFO OFFSH2 RZS SADDE8 KLAX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-01-2025
					result += "<!-- Verified with ATCSCC on 04-01-2025 -->";
					break;
				case "MIA": // Updated 04-18-2025
					result += "<!-- Updated 04-18-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-18-2025
					result += "<br/><br/>NRP South: <input style=\"width:75%\"; value=\"KSFO SSTIK5 KAYEX LOSHN BOILE Q2 EWM FST J86 LEV Y290 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>NRP North: <input style=\"width:75%\"; value=\"KSFO TRUKN2 SYRAH Q128 JSICA ILC BCE RSK J58 FTI TCC CHMPZ TBEND TBD BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>North via GLC: <input style=\"width:75%\"; value=\"KSFO TRUKN2 SYRAH Q128 JILLS MGMRY ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/><b style=\"color:orange\";>10PM to 7AM local departures north/east file: KSFO NIITE4 SYRAH...<\/b>";
					result += "<br/><br/>North/Non OW: <input style=\"width:75%\"; value=\"KSFO TRUKN2 SYRAH Q130 ROCCY KD42S KA33Y BYP MCB J50 CEW DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>South/Non OW: <input style=\"width:75%\"; value=\"KSFO SSTIK5 KAYEX LOSHN BOILE BLH J169 TFD J50 ELP J2 FST J138 SAT J2 DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\"; value=\"KSFO SSTIK5 KAYEX LOSHN BOILE Q2 EWM FST DUNDE YEEHA ALGAE MINOW M580 MARCI FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KSFO SFO4 SFO AVE BOILE BLH J169 TFD J50 ELP Q4 CLL LCH J2 DEFUN SZW PIE PALMZ2 KMIA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-18-2025
					result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
					break;
				case "ORD": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSFO TRUKN2 ORRCA Q120 GALLI CZI J82 FSD J16 MCW ZZIPR FYTTE7 KORD\" readonly>";
					result += "<br/><br/>Night: <input style=\"width:75%\" value=\"KSFO NIITE4 MOGEE Q122 KATES FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KSFO SSTIK5 KAYEX LOSHN PMD J6 DRK J78 TUL EOS WELTS TRTLL6 KORD\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KSFO TRUKN2 ORRCA Q120 JASTI FSD ZZIPR FYTTE7 KORD\" readonly>";
					result += "<br/><br/>ORD JVL BDF: <input style=\"width:75%\" value=\"KSFO TRUKN2 ORRCA Q120 GALLI MLD J32 CZI J82 FSD J114 GEP DLL MSN JVL CHMPN FYTTE7 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSFO SHOR7 SAC J32 BAM J94 DBQ JVL JVL7 KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>F1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 ORRCA Q120 GALLI MLD J32 CZI J82 FSD ZZIPR FYTTE7 KORD\" readonly>";
					result += "<br/>LS (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH Q128 JSICA MLF J80 HLC SLN J96 IRK BENKY6 KORD\" readonly>";
					result += "<br/>V2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO SFO4 SFO SAC J32 CZI J82 FSD J114 GEP TVC WYNDE2 KORD\" readonly>";
					break;
				case "PHL": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH Q128 TABLL SAKES J80 FQF KP63G KK63I KG63M ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/><br/>Night: <input style=\"width:75%\" value=\"KSFO NIITE4 SYRAH Q128 TABLL SAKES J80 FQF KP63G KK63I KG63M ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KSFO TRUKN2 ORRCA Q120 UFFDA RWF J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>JOT 1: <input style=\"width:75%\" value=\"KSFO TRUKN2 TIPRE Q126 BRAFF AKO HCT J60 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>JOT 2: <input style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH Q128 JSICA MLF J28 PUB J64 HLC PWE LMN MZV JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>SPI: <input style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH Q128 FLOOD PUB J64 HLC PWE LMN MZV JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>VUZ: <input style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH Q128 JSICA MLF J28 GCK PER TUL LIT J14 YAALL VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO					
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>B1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 ORRCA Q120 GALLI MLD J32 CZI J82 RAP RWF J34 BAE GIJ J146 CXR EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>B2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 ORRCA Q120 GALLI MLD J32 CZI J82 RAP J82 FSD J16 BAE GIJ J146 CXR EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>BY: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH JSICA MLF J28 PUB LAA J102 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>GB: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 ORRCA Q120 GALLI MLD J32 CZI J82 RAP ABR GRB FNT DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>J1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 TIPRE Q126 BRAFF AKO HCT J60 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>J2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH JSICA MLF J28 PUB J64 HLC PWE LMN MZV JOT J30 TRAKK J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>JA (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 TIPRE Q126 INSLO Q126 BRAFF AKO HCT J60 JOT J30 TRAKK J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>JB: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH JSICA MLF J28 PUB J64 HLC PWE LMN MZV JOT J146 CXR EWC JST BOJID4 KPHL\" readonly>";
					result += "<br/>LU: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH Q128 JSICA MLF J28 GCK ICT SGF J98 FAM J78 PXV J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>LU (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH Q128 JSICA MLF J28 GCK ICT SGF J98 FAM J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>NA (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH Q128 JSICA MLF J28 GCK PER RZC Q36 SWAPP Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>PC (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH Q128 JSICA MLF J28 GCK ICT SGF J98 FAM J78 PXV J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
					result += "<br/>RW: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH Q128 JSICA MLF J28 GCK PER RZC ARG PXV ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>RW (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH Q128 JSICA MLF J28 GCK PER RZC ARG PXV ROD J152 JST BOJID4 KPHL\" readonly>";
					result += "<br/>VU: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSFO TRUKN2 SYRAH Q128 JSICA MLF J28 GCK PER TUL LIT J14 YAALL VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					break;
				case "PHX": // Updated 04-18-2025
					result += "<!-- Updated 04-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSFO SSTIK5 KAYEX LOSHN BOILE BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSFO SSTIK5 NTELL Q158 MYCAL BLD PRFUM WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/><br/>PHX BUNTR: <input style=\"width:75%\" value=\"KSFO SSTIK5 NTELL BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSFO SFO4 SFO SNS J6 PMD J65 BLH BLH5 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-18-2025
					break;
			}
		break; // End of SFO

// SGF skipped
// SHV skipped

		case "SJC":
			switch(arvl) {
				case "DFW": // Updated 05-30-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-16-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSJC SPTNS1 TECKY NTELL OAL ILC BCE RSK DIXAN Q130 PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><b style=\"color:orange\">Specify flight level at NTELL- SID requires exactly 5000 ft at SPTNS, specifying fl before NTELL will red brick<\/b>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KSJC SPTNS1 VLREE AVE J6 PMD J65 DECAS BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>NE Arrival: <input style=\"width:75%\" value=\"KSJC BMRNG4 SYRAH Q128 JSICA MLF J28 ICT TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>DFW BGTOE: <input style=\"width:75%\" value=\"KSJC SPTNS1 VLREE AVE J6 PMD BLH J169 TFD J50 ELP FST JCT GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>DFW WEST: <input style=\"width:75%\" value=\"KSJC BMRNG4 SYRAH Q128 JSICA MLF J28 ICT TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSJC SJC3 AVE J6 EED J6 DRK J78 ABQ J72 TXO UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-16-2025
					break;
				case "PHX": // Updated 07-17-2025
					result += "<!-- Updated 07-17-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSJC SPTNS1 JFREE LOSHN BOILE BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSJC SPTNS1 TECKY NTELL BIKKR FUZZY J86 BLD PRFUM WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KSJC SJC3 MOONY SNS J126 LAX SLI J169 BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/>PHX NO J92<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSJC SPTNS1 VLREE AVE J6 PMD J65 BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSJC SJC3 AVE J6 PMD J65 BLH ARLIN4 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-17-2025
					break;
			}
		break; // End of SJC

		case "SLC":
			switch(arvl) {
				case "CLT": // Updated 06-16-2025
					result += "<!-- Updated 06-16-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-16-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KSLC RUGGD3 EKR J116 FQF J80 HLC SLN BUM J112 FAM BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KSLC ZIONZ1 EYELO ALS KA36Y IRW ARG J46 VXV TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KSLC RUGGD3 OCS J94 BFF OVR J151 IRK SPI TILMN FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/>South via TXK: <input style=\"width:75%\" value=\"KSLC ZIONZ1 EYELO TAHIB Q130 PNH ADM J52 SQS HRISN Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					// TODO: North via BAE
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSLC EKR J116 FQF J80 HLC SLN BUM J112 FAM BNA TAZZA FILPZ4 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-16-2025
					break;
				case "DFW": // Updated 06-29-2025
					result += "<!-- Updated 06-29-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-09-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KSLC ZIONZ1 KIMMR HBU PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSLC RUGGD3 KIERA RSK J15 ABQ J72 TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSLC RUGGD3 EKR J116 FQF J20 LAA TOTOE MMB J98 IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>SW Arr<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSLC RUGGD3 KIERA RSK J15 CME BGS GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>NE Arr<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KSLC RUGGD3 EKR J116 FQF J80 GLD J182 ICT TUL HITUG SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSLC FFU9 HVE DVC CIM PNH UKW8 KDFW\" readonly>";
					result += "<br/><span style=\"color:red\">FFU9 authorized for Rwy16LR Only</span>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-29-2025
					break;
				case "ORD": // Updated 06-16-2025
					result += "<!-- Updated 06-16-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSLC RUGGD3 OCS J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KSLC RUGGD3 KIERA DBL BRK HGO J24 SLN J96 IRK SHAIN2 KORD\" readonly>";
					// TODO North
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSLC OCS J202 DDY J158 RAP J82 FSD J16 MCW JVL1 KORD\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-16-2025
					break;
				case "PHX": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSLC ZIONZ1 BCE CORKR TENTS BRUSR1 KPHX\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KSLC ZIONZ1 EYELO RSK ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KSLC ARCHZ1 MLF J107 BLD PKE BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSLC FFU9 BCE J11 DRK COYOT5 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "MIA": // Updated 12-29-2024
					result += "<!-- Updated 12-29-2024 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSLC RUGGD3 EKR J116 FQF LAA IRW J20 EIC AEX J58 HRV Q105 REDFN Y280 CHRGE GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KSLC RUGGD3 EKR J116 FQF HYS MEMFS MGMRY ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSLC MTU JNC ALS PNH FUZ SWB MCB J50 CEW J2 DEFUN DRABK HEVVN PIE PALMZ2 KMIA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of SLC


		case "SMF":
			switch(arvl) {
				case "CLT": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSMF RVRCT4 RALEY MLF J28 ICT SGF BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSMF RVRCT4 RALEY JSICA MLF J80 FQF MCK LNK BDF VHP J24 FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KSMF FTHIL3 FRA PINNI J5 LANDO J65 ABI J4 FUZ J42 TXK J52 SUTTN IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSMF MLF J28 ICT SGF BNA J46 VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "DFW": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSMF RVRCT4 RALEY MVA J198 ILC BCE RSK DIXAN PNH MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSMF RVRCT4 MACUS Q124 WAATS EKR J116 FQF J20 LAA EZEEE MDANO KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KSMF FTHIL3 FRA EHF J65 KOFFA BXK Q180 EWM J4 INK GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSMF MVA ILC J58 FTI J76 SPS UKW UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "LAX": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSMF FTHIL3 FRA REBRG IRNMN2 KLAX\" readonly>";
					break;
				case "ORD": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSMF RVRCT4 MACUS Q124 BVL J154 OCS BFF ONL Q122 KATES FOD MYRRS FYTTE7 KORD\" readonly>";
					break;
				case "PHX": // Updated 04-30-2025 // Mandatory Routes checked
					result += "<!-- Updated 04-30-2025 PCM -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSMF RVRCT4 SHUFL LIDAT J92 BLD PRFUM WOTRO BRUSR1 KPHX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSMF RVRCT4 RALEY MVA J198 ILC BCE J11 CORKR TENTS BRUSR1 KPHX\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KSMF FTHIL3 FRA EHF J65 PMD BLH HYDRR1 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed as of 04-30-2025
					break;
			}
		break; // End of SMF

		case "SNA":
			switch(arvl) {
				case "CLT": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY LANCY J96 DRK J6 PNH IFI TUL J46 BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY NICKT J74 TXO J72 SPS BYP TXK J52 SQS VUZ IRQ PONZE BANKR5 KCLT\" readonly>";
					result += "<br/>South via IAH: <input style=\"width:75%\" value=\"KSNA PIGGN3 CNERY BLH J169 TFD J50 SSO ELP J86 IAH J2 SJI Q56 CATLN MGMRY THRSR BESTT JONZE5 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>NF: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA PIGGN3 CNERY BLH J169 TFD J50 SSO EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>NJ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY LANCY J96 DRK J6 IRW FSM MEMFS Q34 HITMN TAZZA FILPZ4 KCLT\" readonly>";
					break;
				case "DFW": // Updated 12-28-2024
					result += "<!-- Updated 12-28-2024 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSNA PIGGN3 TCATE IPL J2 GBN J50 SSO J4 INK GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY LANCY J78 DRK J78 ABQ J72 TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/>Weekend/Holiday: <input style=\"width:75%\" value=\"KSNA PIGGN3 CNERY BLH WLVRN KA24Q JETOS TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/>North via ALS: <input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY LANCY J78 DRK RSK J110 ALS TBE EZEEE MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSNA MUSEL8 TRM BLH EWM J4 INK SPS UKW8 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>SE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA PIGGN3 TCATE IPL J18 BZA J2 GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					result += "<br/>TN (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA PIGGN3 CNERY BLH J50 ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
					result += "<br/>UK (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY LANCY J78 ABQ J72 TXO TURKI VKTRY2 KDFW\" readonly>";
					break;
				case "JFK": // Updated 04-18-2025
					result += "<!-- Updated 04-18-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-18-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KSNA PIGGN3 AVRRY PKE J96 SLN J18 MZV OBK J94 PMM J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/><br/>BAE 1: <input style=\"width:75%\" value=\"KSNA FINZZ3 BEALE BAWER LARVE EKR MBW RAP RWF J34 BAE J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>BAE 2: <input style=\"width:75%\" value=\"KSNA FINZZ3 BEALE BAWER LARVE EKR MBW RAP J82 FSD J16 BAE J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>CEW: <input style=\"width:75%\" value=\"KSNA PIGGN3 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q109 PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>GRB: <input style=\"width:75%\" value=\"KSNA FINZZ3 BEALE BAWER LARVE EKR MBW RAP ABR GRB HOCKE Q935 HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
					result += "<br/>IIU: <input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY PKE J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>JOT 1: <input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY EED J236 TBC J64 RSK DVV J60 JOT ELX SVM J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>JOT 2: <input style=\"width:75%\" value=\"KSNA FINZZ3 BEALE J146 DVC PUB J64 HLC PWE LMN MZV JOT ELX SVM J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>MCI: <input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY PKE J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>MGM 1: <input style=\"width:75%\" value=\"KSNA PIGGN3 CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J4 FUZ Q184 ARNNY FRDDO FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>PXV: <input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY PKE J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 PXV ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>ROD: <input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY PKE J96 DRK J6 IRW FSM ARG PXV ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>SPI: <input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY PKE J96 SLN J24 MCI J80 SPI J80 VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>VHP: <input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY PKE J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>VUZ: <input style=\"width:75%\" value=\"KSNA PIGGN3 CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-18-2025
					result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
					result += "<br/>AD<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA TCATE IPL MXL AMUDI IMEXA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>AM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA TCATE IPL MXL AMUDI IMEXA JALIL VOKOM MRF JCT J86 IAH J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>B1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR MBW RAP RWF J34 BAE J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>B2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR MBW RAP J82 FSD J16 BAE J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>BK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR BFF J94 ONL FOD DBQ J94 OBK J94 PMM J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>BN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA AVRRY LANCY J96 DRK J6 IRW FSM MEMFS Q34 SITTR Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>CA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR MBW MOTLY KINGZ NOTAP RADEN BUGSY ALB IGN IGN1 KJFK\" readonly>";
					result += "<br/>CE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>CF<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER BOY MLS BOWIS FENOK STNRD POLTY BUGSY ALB IGN IGN1 KJFK\" readonly>";
					result += "<br/>CG<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER BOY GGW HML GERTY POLTY BUGSY ALB IGN IGN1 KJFK\" readonly>";
					result += "<br/>CJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER BOY ISN GFK AGLIN CHICA JUNIS POLTY BUGSY ALB IGN IGN1 KJFK\" readonly>";
					result += "<br/>CK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI KENLU TULEG PRNCE IGN IGN1 KJFK\" readonly>";
					result += "<br/>CL<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR MBW RAP TTAIL NIWRA VURLY ULUTO KAPUX TULEG PRNCE IGN IGN1 KJFK\" readonly>";
					result += "<br/>CM<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER BOY ISN GFK AGLIN BURWA TULEG PRNCE IGN IGN1 KJFK\" readonly>";
					result += "<br/>CN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR MBW MOTLY KINGZ NOTAP TULEG PRNCE IGN IGN1 KJFK\" readonly>";
					result += "<br/>CP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER BOY MLS WILTN NIWRA VURLY ULUTO POLTY BUGSY ALB IGN IGN1 KJFK\" readonly>";
					result += "<br/>CQ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER BOY ISN GFK AGLIN POLTY BUGSY ALB IGN IGN1 KJFK\" readonly>";
					result += "<br/>CR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO AHPAH HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
					result += "<br/>CS<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER BOY MLS BOWIS FENOK STNRD KAPUX TULEG PRNCE IGN IGN1 KJFK\" readonly>";
					result += "<br/>CT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR MBW MOTLY KINGZ NOTAP KAPUX TULEG PRNCE IGN IGN1 KJFK\" readonly>";
					result += "<br/>CU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO TULEG PRNCE IGN IGN1 KJFK\" readonly>";
					result += "<br/>CV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER BOY MLS WILTN NIWRA VURLY ULUTO KAPUX TULEG PRNCE IGN IGN1 KJFK\" readonly>";
					result += "<br/>CW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR MBW RAP TTAIL NIWRA VURLY ULUTO POLTY BUGSY ALB IGN IGN1 KJFK\" readonly>";
					result += "<br/>CY<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO OLABA SSENA BUGSY ALB IGN IGN1 KJFK\" readonly>";
					result += "<br/>GR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR MBW RAP ABR GRB HOCKE Q935 HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
					result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA AVRRY EED J236 TBC RSK DVV J60 JOT ELX SVM J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>J2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA DVC PUB J64 HLC PWE LMN MZV JOT ELX SVM J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>LV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA AVRRY LANCY J96 DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>M1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J4 FUZ Q184 ARNNY FRDDO HRTWL Q64 TYI ORF SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>M2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>M3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>MC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA AVRRY LANCY J96 DRK J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BLH PXR J18 ABQ J78 IIU Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>PX<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA AVRRY LANCY J96 DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 PXV ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA AVRRY LANCY J96 DRK J6 IRW FSM ARG PXV ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>SP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA AVRRY LANCY J96 DRK J96 SLN J24 MCI J80 SPI J80 VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>VH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA AVRRY LANCY J96 DRK J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>VU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR HRTWL Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>VY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA CNERY BLH J50 GBN TUS VYLLA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					result += "<br/>W1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER SNY J114 GEP DLL HASTE DAFLU J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>W2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER SNY J114 FSD MSP DLL HASTE DAFLU J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>W3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA BEALE BAWER LARVE EKR BFF FOD DBQ KG75M DAFLU J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>W4<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA AVRRY LANCY SLN J24 MCI J80 SPI VHP ROD DJB JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>W5<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA AVRRY LANCY BUM KK54K KI57O ROD DJB JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>W6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA AVRRY LANCY PXV ROD DJB JHW J70 LVZ LENDY8 KJFK\" readonly>";
					result += "<br/>XC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA CNERY BLH J169 TFD J50 SSO CUS AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
					break;
				case "MIA": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSNA PIGGN3 CNERY BLH J169 TFD J50 ELP Q4 CLL DAS LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/>Non OW: <input style=\"width:75%\" value=\"KSNA PIGGN3 CNERY BLH HEDVI Q4 ZEBOL TFD J50 SSO J4 EWM J66 ABI J4 MHZ J20 MGM ACORI FROGZ4 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "ORD": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY LANCY J78 DRK J96 IRK SHAIN2 KORD\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSNA FINZZ3 BEALE BAWER LARVE EKR CYS ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY LANCY J78 TUL J98 SGF FTZ TRTLL6 KORD\" readonly>";
					result += "<br/>North via DPR: <input style=\"width:75%\" value=\"KSNA FINZZ3 BEALE NORRA J107 DPR ALLOT UFFDA Q156 ZZIPR FYTTE7 KORD\" readonly>";
					result += "<br/><br/>ORD BDF 1: <input style=\"width:75%\" value=\"KSNA PIGGN3 AVRRY LANCY J78 DRK J6 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/>ORD BDF 2: <input style=\"width:75%\" value=\"KSNA FINZZ3 BEALE BAWER LARVE EKR BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSNA MUSEL8 TRM LANCY J78 DRK J96 IRK BDF8 KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>JW (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA FINZZ3 BEALE BAWER LARVE EKR BFF J94 ONL J114 GEP TVC WYNDE2 KORD\" readonly>";
					break;
				case "PHX": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSNA PIGGN3 CNERY BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSNA MUSEL8 SLI PDZ HEC COYOT5 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>ME: <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA PIGGN3 CNERY BLH HYDRR1 KPHX\" readonly>";
					result += "<br/>SE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSNA PIGGN3 TCATE IPL J18 BZA J2 HOGGZ HYDRR1 KPHX\" readonly>";
					break;
			}
		break; // End of SNA

		case "SPS":
			switch(arvl) {
				case "DFW": // Updated 03-17-2025
					result += "<!-- Updated 03-17-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL130):</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KSPS VKTRY VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KSPS V355 UKW UKW8 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-17-2025
					result += "<!-- Verified with ATCSCC on 03-17-2025 -->";
					break;
			}
		break; // End of SPS

		case "SRQ":
			switch(arvl) {
				case "CLT": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSRQ TIDES1 CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KSRQ LAL ZERBO Q87 VIYAP Q69 ISUZO SAV FLO RASLN3 KCLT\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KSRQ TIDES1 MOMIE BRUTS Q118 THRSR CNTLR JONZE5 KCLT\" readonly>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KSRQ LAL ORL AR6 HIBAC BAHAA Y289 OGGRE OKNEE MLLET3 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "DFW": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSRQ TIDES1 FROOT ROZZI Y280 REDFN Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KSRQ TIDES1 MOMIE PATOY Q116 JAWJA CABLO DEFUN J2 CEW J50 MCB AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KSRQ TIDES1 MOMIE PATOY Q116 VLKNN YAALL J14 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSRQ TIDES1 MOMIE PATOY Q116 JAWJA CABLO DEFUN J2 SJI Q56 PEKON J86 IAH YEAGR4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "LGA": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSRQ TIDES1 CAMJO Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "ORD": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSRQ TIDES1 MOMIE BRUTS Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KSRQ SRKUS4 MOMIE PATOY Q116 VLKNN GETME J151 FAM FTZ SHAIN2 KORD\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of SRQ

		case "STL":
			switch(arvl) {
				case "CLT": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTL TEDDD5 HILTS PXV SKYWA FILPZ4 KCLT\" readonly>";
					// result += "<br/><input style=\"width:75%\" value=\"KSTL DRUSE5 BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSTL JHART7 DOBLR CAROL J134 GBEES FLM TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KSTL CHUUC6 MYERZ VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTL PLESS5 BNA VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed as of 03-17-2025
					break;
				case "DCA": // Updated 05-10-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-10-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KSTL TEDDD5 IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
					// result += "<br/>NRP: <input style=\"width:75%\"; value=\"KSTL JHART7 DOBLR CAROL J134 FLM J24 HVQ TRUPS5 KDCA\" readonly>";
					// NRP route above but ZDC is requiring pref routes only
					result += "<br/><br/>North via GIJ<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KSTL NATCA5 SPI RBS GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
					// TODO: South route
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KSTL GATWY1 JIGSY Q176 GBEES FLM J24 HVQ BUCKO NUMMY3 KDCA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-10-2025
					break;
				case "DFW": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTL JAHNY6 MAP RZC FSM RRNET BRDJE5 KDFW\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KSTL BRAKK5 HLV BUM ICT HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>East: <input style=\"width:75%\" value=\"KSTL BERYY5 LIT YUYUN WHINY4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTL LINDY8 VIH RZC FSM FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>LY (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSTL JAHNY6 MAP RZC FSM RRNET BRDJE5 KDFW\" readonly>";
					result += "<br/>PL (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSTL CHUUC6 ARG FSM RRNET BRDJE5 KDFW\" readonly>";
					result += "<br/>ZA (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSTL BRAKK5 HLV BUM HITUG BRDJE5 KDFW\" readonly>";
					break;
				case "LAX": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTL BRAKK5 HLV MCI J24 SLN J102 ALS J44 RSK JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSTL WHRLI7 MCM LNK J60 DBL CHESZ Q88 PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
					result += "<br/>South: <input style=\"width:75%\" value=\"KSTL JAHNY6 MAP RZC FUZ J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTL LINDY8 VIH BUM J110 RSK J64 PGS BASET5 KLAX\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>ZA (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSTL BRAKK5 HLV MCI J24 SLN J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
					break;
				case "MIA": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTL DRUSE5 BNA ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>South/West: <input style=\"width:75%\" value=\"KSTL CHUUC6 ARG SQS MERDN DEFUN FROGZ4 KMIA\" readonly>";
					result += "<br/>East: <input style=\"width:75%\" value=\"KSTL DRUSE5 BNA THRSR HESPI Q89 PRMUS DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>OW: <input style=\"width:75%\" value=\"KSTL CHUUC6 ARG SQS J35 MCB HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>CAPE LAUNCH: <input style=\"width:75%\" value=\"KSTL DRUSE5 BNA VLKNN MGMRY ACORI FROGZ4 KMIA\" readonly>";
					result += "<br/>MIDWEST TO FL: <input style=\"width:75%\" value=\"KSTL DRUSE5 BNA THRSR HESPI Q89 PRMUS DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTL PLESS5 BNA LGC AMG CRG OMN ANNEY4 KMIA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "ORD": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL270):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTL KSHEE5 LEBOY CASHN TRTLL6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTL GATWY1 JIGSY AXC BDF BDF8 KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>LY (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSTL LINDY8 MYERZ MAW PXV VHP OXI KORD\" readonly>";
					break;
				case "PHX": // Updated 01-11-2025
					result += "<!-- Updated 01-11-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTL BRAKK5 HLV MCI J24 SLN J96 GUP EAGUL6 KPHX\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KSTL JAHNY6 MAP SGF J98 TUL IFI PNH J6 ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTL OZARK8 HLV MCI J24 SLN J96 GUP BUNTR3 KPHX\" readonly>";
					result += "<br/><br/><b>CDRS</b>";
					result += "<br/>ZA (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KSTL BRAKK5 HLV MCI J24 SLN J102 ZUN EAGUL6 KPHX\" readonly>";
					break;
			}
		break; // End of STL

		case "STS":
			switch(arvl) {
				case "DFW": // Updated 05-30-2025
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KSTS CHRRO1 RALEY JSICA ILC BCE RSK J58 FTI MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KSTS CHRRO1 RALEY JSICA MLF J28 PUB J17 PNH MDANO JOVEM6 KDFW\" readonly>";
					result += "<br/><b style=\"color:orange\">To Avoid ZAB: ...MLF J28 PUB LAA TOTOE MMB IRW IBAKE VKTRY2 KDFW<\/b>";
					result += "<br/>South: <input style=\"width:75%\"; value=\"KSTS RREHD1 HADLY KAYEX LOSHN BOILE BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo					
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHX": // Updated 05-16-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-16-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSTS RREHD1 HADLY KAYEX LOSHN BOILE BLH HYDRR1 KPHX\" readonly>";
					result += "<br/><b>PHX NO J92: ...LOSHN LANDO J65 BLH HYDRR1 PHX<\/b>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KSTS RREHD1 NTELL Q158 MYCAL BLD PRFUM WOTRO BRUSR1 KPHX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-16-2025
					break;
				}
		break; // End of STS

// SWF skipped

		case "SYR":
			switch(arvl) {
				case "CLT": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSYR SYR T307 STUBN PSB Q71 GEFFS HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/>Avoid ZNY: <input style=\"width:75%\" value=\"KSYR V84 BEEPS ELZ BFD EWC AIR CLNTN Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>East (ATC COORD RQD): <input style=\"width:75%\" value=\"KSYR SYR PTAKI STUBN PSB J61 EMI J48 CSN GVE AIROW CHSLY6 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSYR SYR PTAKI STUBN PSB HVQ GZG BTSEY2 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			case "DFW": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KSYR SYR GONZZ Q29 KLYNE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KSYR SYR PTAKI STUBN AHTIY BURGS HNN LVT SQS YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KSYR SYR KELTI HOCKE FNT J94 OBK MZV IRK RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>NW Arrival: <input style=\"width:75%\" value=\"KSYR SYR KELTI HOCKE FNT J94 OBK MZV IRK MCI ICT HOFFF VKTRY2 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of SYR

// TLH skipped

		case "TPA":
			switch(arvl) {
				case "CLT": // Updated 05-07-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-07-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA BAYPO2 CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
					result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KTPA BAYPO2 CAMJO SAV CHECR STOCR4 KCLT\" readonly>";
					result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KTPA ENDED2 LACEN BULZI CSG BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA BAYPO2 CAMJO SAV FLO RASLN3 KCLT\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-15-2025
					result += "<!-- Verified with ATCSCC on 07-15-2025 -->";
					result += "<br/>B0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KTPA BAYPO2 CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
					break;
				case "DCA": // Updated 07-15-2025
					result += "<!-- Updated 07-15-2025 P -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA BAYPO2 CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/><br/>OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KTPA MLB LENDS GRUBR Y299 SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KTPA ENDED2 LACEN OTK MCN ODF SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>East/Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KTPA CROWD MZULO HESTA ETECK PELCN ROWSY Y494 SILLY LYNUS B24 DASHA ATR LAFLN DEALE3 KDCA\" readonly>";
					result += "<br/><br/>FL TO NE 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KTPA ENDED2 LACEN JOHNN Q118 THRSR BOBBD TONIO Q34 SITTR TRUPS5 KDCA\" readonly>";
					result += "<br/>FL TO NE 4<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KTPA CROWD MZULO HESTA LENDS OGGRE Y436 PITRW SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA TAY AMG CAE RDU RIC IRONS7 KDCA\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-15-2025
					result += "<!-- Verified with ATCSCC on 07-15-2025 -->";
					result += "<br/>B0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KTPA BAYPO2 CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
					break;
				case "DFW": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA DORMR3 FROOT ROZZI Y280 REDFN Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KTPA ENDED2 LACEN PATOY Q116 JAWJA CABLO DEFUN J2 CEW J50 MCB AEX PNUTS WHINY4 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KTPA ENDED2 LACEN PATOY Q116 MEMFS LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA SZW CEW J50 MCB MLU YEAGR4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "LGA": // Updated 06-08-2025 // TODO
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KTPA BAYPO2 CAMJO Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";

					// West/ZDC Avoid: KTPA BAYPO2 CAMJO IRQ HVQ GEFFS Q71 PSB MIP4 KLGA
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-08-2025
					break;
				case "MIA": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA GANDY8 SABEE FROGZ4 KMIA\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KTPA LAL GREAD CSTAL3 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA RSW PALMZ2 KMIA\" readonly>";
					break;
				case "MCO": // Updated 06-28-2025
					result += "<!-- Updated 06-28-2025 MP -->"
					result += "<br/><br/><b>Div Recovery (Max FL090):</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KTPA PRICY MINEE KMCO\" readonly>";
					break; 
				case "ORD": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA ENDED2 LACEN BRUTS Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"KTPA BAYPO2 CAMJO TWINS SPA J83 APE J178 FWA WATSN4 KORD\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KTPA ENDED2 LACEN PATOY Q116 JAWJA Q116 VLKNN GETME J151 FAM FTZ TRTLL6 KORD\" readonly>";
					result += "<br/>OW West: <input style=\"width:75%\" value=\"KTPA DORMR3 FROOT ROZZI Y280 LEV SQS FTZ TRTLL6 KORD\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHL": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA BAYPO2 CAMJO Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KTPA MLB LENDS GRUBR Y299 SEELO WAALT Q131 PRONI Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"KTPA BAYPO2 CAMJO IRQ SPA PSK JST BOJID4 KPHL\" readonly>";
					result += "<br/>Full OW: <input style=\"width:75%\" value=\"KTPA CROWD MZULO HESTA ETECK PELCN ROWSY Y494 VIRST Y494 SILLY LYNUS B24 DASHA JIIMS4 KPHL\" readonly>";
					result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\" value=\"KTPA CROWD8 CROWD MLB ETECK OZENA ROWSY OTTNG HAAYY WICKE DASHA JIIMS4 KPHL\" readonly>";
					result += "<br/>FL TO NE 2: <input style=\"width:75%\" value=\"KTPA BAYPO2 CAMJO TWINS BURGG Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/>FL TO NE 3: <input style=\"width:75%\" value=\"KTPA BAYPO2 CAMJO TWINS SPA J83 APE JST BOJID4 KPHL\" readonly>";
					result += "<br/>FL TO NE 4: <input style=\"width:75%\" value=\"KTPA CROWD MZULO HESTA ETECK GRUBR OGGRE Y436 PITRW LCAPE ALWZZ OGRAE Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA TAY CAE RDU RIC SWL VCN9 KPHL\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "PHX": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA DORMR3 FROOT ROZZI Y280 LEV J86 IAH PEQ EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KTPA ENDED2 LACEN PATOY Q116 JAWJA CABLO DEFUN J2 CEW J50 MCB ACT INK EWM DRRVR PINNG1 KPHX\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KTPA ENDED2 LACEN PATOY Q116 JAWJA CABLO MGM IGB MLC PNH ZUN EAGUL6 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTPA SZW CEW SWB FUZ J4 ABI J66 EWM J4 SSO SUNSS8 KPHX\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of TPA

		case "TUL":
			switch(arvl) {
				case "CLT": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTUL MAYJI RZC Q36 BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KTUL LIT J14 YAALL VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTUL RZC ARG BNA VXV LIINN3 KCLT\" readonly>";
					break;
				case "DFW": // Updated 05-10-2025
					result += "<!-- Updated 05-10-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL220):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTUL PEJAY AXXEE SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>West: <input style=\"width:75%\" value=\"KTUL IRW HOFFF JOVEM6 KDFW\" readonly>";
					result += "<br/>East: <input style=\"width:75%\" value=\"KTUL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTUL FSM FINGR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-10-2025
					break;
				
				case "TUL": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>MTC FCF:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTUL V73 FRAKS ICT HUSKA TUL KTUL\" readonly>";
					result += "<br/><br/>40 Mins: <input style=\"width:75%\" value=\"KTUL ICT KTUL\" readonly>";
					result += "<br/>50 Mins: <input style=\"width:75%\" value=\"KTUL V73 FRAKS ICT HUSKA TUL KTUL\" readonly>";
					result += "<br/>60 Mins: <input style=\"width:75%\" value=\"KTUL IRW IFI ICT KTUL\" readonly>";
					result += "<br/><br/>90 Mins: <input style=\"width:75%\" value=\"KTUL J78 PNH J78 TUL KTUL\" readonly>";
					result += "<br/>120 Mins/MAUI Test: <input style=\"width:75%\" value=\"KTUL V73 ICT J182 GLD J182 ICT V73 TUL KTUL\" readonly>";
					result += "<br/>3 Hrs: <input style=\"width:75%\" value=\"KTUL MEM J71 COWES SPI J80 MCI J26 ICT J21 IRW KTUL\" readonly>";
					break;
			}
		break; // End of TUL

		case "TUS":
			switch(arvl) {
				case "DFW": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTUS BURRO5 NOCHI ELP J50 INK GEEKY SOCKK4 KDFW\" readonly>";
					result += "<br/><br/>North: <input style=\"width:75%\" value=\"KTUS BURRO5 NOCHI SSO J104 ONM CNX J74 TXO TURKI JOVEM6 KDFW\" readonly>";
					result += "<br/><br/>DFW BOOVE: <input style=\"width:75%\" value=\"KTUS WLDKT4 SSO J104 ONM CNX J74 TXO TURKI JOVEM6 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTUS TUS9 MESCA SSO J104 ONM CNX J74 TXO UKW7 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "LAX": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTUS BURRO5 GBN J104 TNP BASET5 KLAX\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "ORD": // Updated 07-17-2025 // Mandatory Routes checked
					result += "<!-- Updated 07-17-2025 MP -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 05-17-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KTUS WLDKT4 SSO J104 FTI J18 GCK J96 IRK BENKY6 KORD\" readonly>"; // CDR JV
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KTUS WLDKT4 SSO J104 FTI TBE GLD OBH FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KTUS WLDKT4 SSO J104 ONM CNX J74 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTUS TUS8 REDDY SSO J104 FTI J18 GCK J96 IRK BDF8 KORD\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-17-2025
					result += "<!-- Verified with ATCSCC on 05-17-2025 -->";
					result += "<br/>B1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KTUS WLDKT4 SSO J104 ONM CNX J74 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/>B2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KTUS WLDKT4 SSO J104 ONM ABQ J13 FQF BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
					result += "<br/>JV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KTUS WLDKT4 SSO J104 FTI J18 GCK J96 IRK BENKY6 KORD\" readonly>";
					break;
				case "PHX": // Updated 01-18-2025
					result += "<!-- Updated 01-18-2025 -->";
					result += "<br/><br/><b>Div Recovery (Avg FL160):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTUS BURRO5 HOTTT PINNG1 KPHX\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTUS TUS9 BAYBI SUNSS8 KPHX\" readonly>";
					break;
			}
		break; // End of TUS

		// TODO TVC

		case "TYS":
			switch(arvl) {
				case "CLT": // Updated 04-16-2025
					result += "<!-- Updated 04-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTYS COMDY FILPZ4 KCLT\" readonly>";
					result += "<br/><b style=\"color:orange\">Might need to disable proc alt limits or use KTYS-VXV-COMDY...<\/b>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KTYS ODF BANKR BANKR5 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTYS VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-16-2025
					result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
					break;
				case "DFW": // Updated 05-27-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-27-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTYS SYI MEM J66 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KTYS RMG VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KTYS BNA J46 ARG FSM RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>DFW EAST 1: <input style=\"width:75%\" value=\"KTYS VXV THRSR JAMMR MERDN MCB AEX DAS IAH CRGER GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/>DFW WEST: <input style=\"width:75%\" value=\"KTYS VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KTYS SYI MEM J66 LIT MEEOW BYP WILBR9 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-27-2025
					break;

				// TODO MIA
				// TODO ORD

			}
		break; // End of TYS

		case "VPS":
			switch(arvl) {
				case "CLT": // Updated 05-10-2025 // Mandatory Routes checked
					result += "<!-- Updated 05-10-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KVPS CORKY ACORI CSG BESTT JONZE5 KCLT\" readonly>";
					result += "<br/><b style=\"color:orange\">Routes below okay for weather deviation. File pref route otherwise.<\/b>";
					result += "<br/><br/>South/East <input style=\"width:75%\" value=\"KVPS CORKY DEFUN CABLO HEPAR Q99 TEEEM CHECR STOCR4 KCLT\" readonly>";
					result += "<br/>North/West: <input style=\"width:75%\" value=\"KVPS CORKY MGM KT24O TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KVPS CORKY GONDR SHAKK WUDEE LORNN VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-10-2025
					break;
				case "DFW": // Updated 01-24-2025
					result += "<!-- Updated 01-24-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KVPS CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
					result += "<br/><b style=\"color:orange\">Route  CEW MCB PNUTS  if SUA is active<\/b>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KVPS CEW J2 LSU LFK CRIED WHINY4 KDFW\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KVPS CEW MEI SQS FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>SW Arrival: <input style=\"width:75%\" value=\"KVPS CEW SJI Q56 PEKON J86 SPURS AGJ GUTZZ BOOVE7 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KVPS CEW J50 MCB AEX YEAGR4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of VPS

		case "XNA":
			switch(arvl) {
				case "CLT": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"KXNA RZC Q36 BNA TAZZA FILPZ4 KCLT\" readonly>";
					result += "<br/><br/>South: <input style=\"width:75%\" value=\"KXNA MEM J41 VUZ BESTT JONZE5 KCLT\" readonly>";
					result += "<br/>North: <input style=\"width:75%\" value=\"KXNA HRO FAM J78 IIU TAFTT PARQR4 KCLT\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KXNA RZC ARG BNA VXV LIINN3 KCLT\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
				case "DFW": // Updated 01-16-2025
					result += "<!-- Updated 01-16-2025 -->";
					result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
					result += "<br/><input style=\"width:75%\" value=\"KXNA KOMMA RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>DFW SEEVR1: <input style=\"width:75%\" value=\"KXNA TUL PER HOFFF VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"KXNA FSM FINGR9 KDFW\" readonly>";
					break;
				case "ORD": // Updated 05-10-2025
					result += "<!-- Updated 05-10-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KXNA EOS SGF WELTS TRTLL6 KORD\" readonly>";
					result += "<br/><br/>West via MCI: <input style=\"width:75%\"; value=\"KXNA EOS MCI IRK BENKY6 KORD\" readonly>";
					// TODO East
					result += "<br/><br/>West via CID: <input style=\"width:75%\"; value=\"KXNA EOS MCI IRK BENKY6 KORD\" readonly>";
					result += "<br/>East via PXV: <input style=\"width:75%\"; value=\"KXNA HRO KM42K PXV BONNT VEECK5 KORD \" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"KXNA SGF BAYLI BDF9 KORD\" readonly>";
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-10-2025
					break;
			}
		break; // End of XNA

		case "YEG":
			switch(arvl) {
				case "DFW": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"CYEG OMROD TOVIS YEA MLS TST GCK MMB MDANO VKTRY2 KDFW\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\" value=\"CYEG OMROD TOVIS YEA GGW RAP SLN TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"CYEG UKRAM Q957 RIGAD OTARA Q931 IPTAN DLN MTU FTI TXO TURKI VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"CYEG TOVIS YEA GGW MLS GCC ECS LBF HYS IRW UKW4 KDFW\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of YEG

		// YKM skipped
		// YOW skipped

		case "YUL":
			switch(arvl) {

				// TODO CLT

				case "DFW": // Updated 06-03-2025 // Mandatory Routes checked
					result += "<!-- Updated 06-03-2025 MP -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-03-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"CYUL FAWNS BUGSY SYR GONZZ Q29 KLYNE PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"CYUL KESKA SAVEX Q806 BOBTA DERLO CRL BVT STL RZC FSM KOMMA RRNET SEEVR4 KDFW\" readonly>";
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYUL FAWNS BUGSY SYR J59 PSB Q71 GEFFS HVQ Q68 LITTR MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>North via BAE: <input style=\"width:75%\"; value=\"CYUL KESKA SAVEX KANUR LETAK Q824 FNT BAE DBQ J144 DSM J25 TUL KLAWW VKTRY2 KDFW\" readonly>";
					result += "<br/>South via SQS: <input style=\"width:75%\"; value=\"CYUL FAWNS BUGSY SYR J59 PSB Q71 GEFFS HVQ VXV VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO					
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-03-2025
					break;

				// TODO LGA
				// TODO ORD

				case "MIA": // Updated 01-19-2025
					result += "<!-- Updated 01-19-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"CYUL FAWNS BUGSY PONCT Q133 LLUND Q437 VILLS Q409 CRPLR BGBRD Q101 SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"CYUL FAWNS BUGSY PONCT BIZEX Q75 GSO Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>West: <input style=\"width:75%\" value=\"CYUL FAWNS BUGSY SYR J59 PSB IHD EKN PSK SPA QUIWE TEEEM DOFFY BROMO FROGZ4 KMIA\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\" value=\"CYUL FAWNS BUGSY PONCT BIZEX Q75 GSO Q83 JEVED Q97 KENLL OMN ANNEY4 KMIA\" readonly>";
					// result += "<br/><br/><b>CDRS</b>";
					break;
			}
		break; // End of YUL

		// TODO YVR

		case "YYC":
			switch(arvl) {
				case "CLT": // Updated 06-23-2025
					result += "<!-- Updated 06-23-2025 -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-23-2025
					result += "<br/><br/>NRP<input style=\"width:75%\" value=\"CYYC STAMP2 GADKI YQL J478 GGW DIK J70 ABR MCW ALO BDF TTH IIU SKYWA FILPZ4 KCLT \" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"CYYC STAMP2 GADKI YQL J478 GGW WILTN Q140 DAYYY DJB Q147 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"CYYC GADKI VOBUK DLN J9 DBS J52 OCS FQF J80 HLC SLN BUM J112 FAM BNA TAZZA FILPZ4 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-23-2025
					break;
				case "DFW": // Updated 06-23-2025
					result += "<!-- Updated 06-34-2025 -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-23-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"CYYC STAMP2 GADKI Q957 VOBUK GTF J13 CYS LAA EZEEE MDANO JOVEM6 KDFW\" readonly>";
					result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"CYYC GADKI VOBUK DLN J9 DBS J52 OCS J206 DBL CIM PNH MDANO VKTRY2 KDFW \" readonly>";
					result += "<br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"CYYC STAMP2 GADKI YQL J478 GGW DIK J70 ABR J45 FSD OVR J41 MCI BUM RZC FSM RRNET SEEVR4 KDFW\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-23-2025
					break;
				case "ORD": // Updated 06-24-2025
					result += "<!-- Updated 06-24-2025 -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-24-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"CYYC CWBOY2 NOSIV Q909 PEMDU GGW DIK ABR HSTIN Q156 ZZIPR FYTTE7 KORD\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"CYYC CWBOY2 LOMLO Q961 DAPOP DURUR SEGAP HML DLH SHIKY FYTTE7 KORD \" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"CYYC CWBOY2 GADKI VOBUK GTF J13 BIL J151 ONL Q122 VIGGR ALO MYRRS FYTTE7 KORD \" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO					
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-24-2025
					break;
				case "LGA": // Updated 07-18-2025
					result += "<!-- Updated 07-18-2025 -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-18-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"CYYC CWBOY2 NOSIV Q909 PEMDU GGW ABR J90 RWF J34 WOOST J146 ETG MIP4 KLGA\" readonly>";
					result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"CYYC CWBOY2 NOSIV Q909 PEMDU GGW WILTN Q140 EXTOL RKA HAARP4 KLGA\" readonly>";
					result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"CYYC STAMP2 GADKI Q957 VOBUK GTF J13 BIL J151 ONL DSM IOW J146 ETG MIP4 KLGA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO					
					// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-18-2025
					break;
			}
		break; // End of YYC

		case "YYZ":
			switch(arvl) {
				case "CLT": // Updated 04-14-2025
					result += "<!-- Updated 04-14-2025 -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\"; value=\"CYYZ BETES3 FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/><br/>East: <input style=\"width:75%\"; value=\"CYYZ RIGUS5 PSB BUSTR LDN GVE AIROW CHSLY6 KCLT\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // toddo
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-14-2025
					result += "<!-- Verified with ATCSCC on 04-14-2025 -->";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ BETES3 FOXEE Q145 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					result += "<br/>S3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ MIXUT7 GNTRY DJB J85 HVQ LNDIZ PARQR4 KCLT\" readonly>";
					break;
				case "DCA": // Updated 07-15-2025
					result += "<!-- Updated 07-15-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"CYYZ RIGUS5 PSB SKILS5 KDCA\" readonly>"; // CDR P1
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYYZ MIXUT7 GNTRY DJB AIR J34 BUCKO FRDMM6 KDCA\" readonly>"; // CDR S2
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYYZ DEDKI5 TULEG PONCT BIZEX Q75 MXE CLIPR3 KDCA\" readonly>"; // CDR E1
					result += "<br/><br/>DC NORTH<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYYZ MIXUT7 GNTRY DJB AIR J34 BUCKO FRDMM6 KDCA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-15-2025
					result += "<!-- Verified with ATCSCC on 07-15-2025 -->";
					result += "<br/>E1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ DEDKI5 TULEG PONCT BIZEX Q75 MXE CLIPR3 KDCA\" readonly>";
					result += "<br/>P1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ RIGUS5 PSB SKILS5 KDCA\" readonly>";
					result += "<br/>S1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ BETES3 FOXEE AIR BUCKO FRDMM6 KDCA\" readonly>";
					result += "<br/>S2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ MIXUT7 GNTRY DJB AIR J34 BUCKO FRDMM6 KDCA\" readonly>";
					break;
				case "DFW": // Updated 04-14-2025
					result += "<!-- Updated 04-14-2025 P -->";
					// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-14-2025
					result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"CYYZ MIXUT7 GNTRY DJB ROD PXV J131 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/><br/>North/HARP: <input style=\"width:75%\"; value=\"CYYZ MIXUT7 GNTRY CRL J554 GIJ SPI RZC FSM RRNET BRDJE5 KDFW\" readonly>";
					result += "<br/>South: <input style=\"width:75%\"; value=\"CYYZ MIXUT7 GNTRY DJB APE FLM BWG IZAAC YUYUN BEREE3 KDFW\" readonly>";
					result += "<br/>NW Arrival: <input style=\"width:75%\"; value=\"CYYZ GOPUP4 HOCKE FNT J94 OBK MZV IRK MCI PER IRW IBAKE VKTRY2 KDFW\" readonly>";
					result += "<br/><br/><b>Non RNAV</b>";
					result += "<br/><input style=\"width:75%\"; value=\"CYYZ GNTRY DJB VHP TTH FAM FSM FINGR9 KDFW\" readonly>";
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-14-2025
					result += "<!-- Verified with ATCSCC on 04-14-2025 -->";
					result += "<br/>P1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ MIXUT7 GNTRY ROD PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>S1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ KEPTA3 BMPAH FOXEE Q145 HVQ J78 PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
					result += "<br/>W1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ GOPUP4 HOCKE SVM FWA TTH FAM FSM RRNET SEEVR4 KDFW\" readonly>";
					break;
				case "JFK": // Updated 07-15-2025
					result += "<!-- Updated 07-15-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"CYYZ KEPTA3 BMPAH AEVON EXTOL Q140 YODAA IGN IGN1 KJFK\" readonly>"; // CDR P1
					result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYYZ BETES3 ERI HOXIE J70 LVZ LENDY8 KJFK\" readonly>"; // CDR S1
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-15-2025
					result += "<!-- Verified with ATCSCC on 07-15-2025 -->";
					result += "<br/>P1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ KEPTA3 BMPAH AEVON EXTOL Q140 YODAA IGN IGN1 KJFK\" readonly>";
					result += "<br/>S1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ BETES3 ERI HOXIE J70 LVZ LENDY8 KJFK\" readonly>";
					break;
				case "LGA": // Updated 07-15-2025
					result += "<!-- Updated 07-15-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"CYYZ KEPTA3 BMPAH AEVON AUDIL RKA HAARP4 KLGA\" readonly>"; // CDR P1
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYYZ DEDKI5 TULEG RKA HAARP4 KLGA\" readonly>"; // CDR E1
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYYZ BETES3 ERI TEESY J146 ETG MIP4 KLGA\" readonly>"; // CDR S1
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-15-2025
					result += "<!-- Verified with ATCSCC on 07-15-2025 -->";
					result += "<br/>E1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ DEDKI5 TULEG RKA HAARP4 KLGA\" readonly>";
					result += "<br/>P1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ KEPTA3 BMPAH AEVON AUDIL RKA HAARP4 KLGA\" readonly>";
					result += "<br/>S1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ BETES3 ERI TEESY J146 ETG MIP4 KLGA\" readonly>";
					break;
				case "MIA": // Updated 07-15-2025
					result += "<!-- Updated 07-15-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"CYYZ BETES3 AIRRA Q103 SLOJO EFFAY Q83 JEVED Q97 DEBRL CSTAL3 MIA\" readonly>";
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYYZ MIXUT7 GNTRY DJB J85 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>"; // CDR S2
					result += "<br/>East/OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYYZ KEPTA3 BMPAH ETG PYTON Q129 YERBA SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-15-2025
					result += "<!-- Verified with ATCSCC on 07-15-2025 -->";
					result += "<br/>P1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ BETES3 AIRRA Q103 SLOJO EFFAY Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>S1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ KEPTA3 BMPAH FOXEE Q145 HVQ J85 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>S2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ MIXUT7 GNTRY DJB J85 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
					result += "<br/>W1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ GOPUP4 HOCKE ROD FLM J43 VXV WIGVO Q77 SHRKS Q89 PRMUS DEBRL CSTAL3 KMIA\" readonly>";
					break;
				case "ORD": // Updated 07-15-2025
					result += "<!-- Updated 07-15-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"CYYZ GOPUP4 HOCKE FNT WYNDE2 KORD\" readonly>"; // CDR P1
					result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYYZ URSAL4 KASED TVC WYNDE2 KORD\" readonly>"; // CDR N1
					result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYYZ BETES3 ERI DORET WWSHR WEEVR Q62 WATSN WATSN4 KORD\" readonly>"; // CDR S2
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-15-2025
					result += "<!-- Verified with ATCSCC on 07-15-2025 -->";
					result += "<br/>N1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ URSAL4 KASED TVC WYNDE2 KORD\" readonly>";
					result += "<br/>P1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ GOPUP4 HOCKE FNT WYNDE2 KORD\" readonly>";
					result += "<br/>S1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ MIXUT7 GNTRY DJB WEEVR Q62 WATSN WATSN4 KORD\" readonly>";
					result += "<br/>S2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ BETES3 ERI DORET WWSHR WEEVR Q62 WATSN WATSN4 KORD\" readonly>";
					break;
				case "PHL": // Updated 07-15-2025
					result += "<!-- Updated 07-15-2025 MP -->";
					result += "<br/><br/><b>Faa Pref Route:</b>";
					result += "<br/><input style=\"width:75%\" value=\"CYYZ RIGUS5 PSB BOJID4 KPHL\" readonly>"; // CDR P1
					result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYYZ BETES3 ERI JST BOJID4 KPHL\" readonly>"; // CDR S1
					result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"CYYZ KEPTA3 BMPAH CFB SPUDS7 KPHL\" readonly>"; // CDR E2
					// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
					result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-15-2025
					result += "<!-- Verified with ATCSCC on 07-15-2025 -->";
					result += "<br/>E1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ DEDKI5 TULEG CFB SLATT6 KPHL\" readonly>";
					result += "<br/>E2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ KEPTA3 BMPAH CFB SPUDS7 KPHL\" readonly>";
					result += "<br/>P1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ RIGUS5 PSB BOJID4 KPHL\" readonly>";
					result += "<br/>S1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ BETES3 ERI JST BOJID4 KPHL\" readonly>";
					result += "<br/>S2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"CYYZ RIGUS5 PSB ETX SPUDS KPHL\" readonly>";
					break;
			}
		break; // End of YYZ

	}
	return result;
}
