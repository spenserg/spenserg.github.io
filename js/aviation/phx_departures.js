phx_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
	switch(arvl) {
		case "ABQ": // PHX-ABQ // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX FORPE1 SJN TMALE BRRTO1 KABQ\" readonly>";
			result += "<br/><b style=\"color:orange\";>FORPE1 SJN transition for ABQ arrivals only. Sometimes Fkeys flags this, but it's okay</b>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KPHX ECLPS1 ECLPS KATMN SSO J104 ONM KABQ\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KPHX MRBIL1 YOOPR GUP LOWBO3 KABQ\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 JNIPR JSSUA LAVAN LAVAN3 KABQ\" readonly>";
			result += "<br/>EC (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 ECLPS KATMN SSO J104 ONM KABQ\" readonly>";
			result += "<br/>FR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 SJN LAVAN3 KABQ\" readonly>";
			result += "<br/>MR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 YOOPR GUP LOWBO3 KABQ\" readonly>";
			result += "<br/>QU (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 YOOPR GUP LOWBO3 KABQ\" readonly>";
			result += "<br/>ST (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO J104 ONM KABQ\" readonly>";
			result += "<br/>TM: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM KABQ\" readonly>";
			break;
		case "ATL": // PHX-ATL // Updated 12-11-2025
			result += "<!-- Updated 12-11-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ J6 IRW FSM MEM HUTCC KNSAW RUSSA GLAVN2 KATL\" readonly>";
			result += "<br/><b>Fkeys tries to cut thru ZKC- Use IRW to stay south of ZKC<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK J110 ALS ZAROS Q128 MUDHO HUTCC KNSAW RUSSA GLAVN2 KATL\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J4 FUZ Q184 MERDN ORRKK HOBTT3 KATL\" readonly>"; // CDR EC
			result += "<br/><br/>North via STL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK PUB HLC J80 MCI J24 STL J45 BNA NEWBB IHAVE MTHEW CHPPR1 KATL\" readonly>";
			result += "<br/>South via SAT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J2 FST J138 SAT Q24 LSU SHYRE HOBTT3 KATL\" readonly>"; // CDR KT
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 12-11-2025
			result += "<!-- Verified with ATCSCC on 12-11-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW FSM MEM HUTCC KNSAW RUSSA GLAVN2 KATL\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J4 FUZ Q184 MERDN ORRKK HOBTT3 KATL\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 SJN J74 IRW FSM MEM HUTCC KNSAW RUSSA GLAVN2 KATL\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA CIM IRW FSM MEM HUTCC KNSAW RUSSA GLAVN2 KATL\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 JARPA CIM IRW FSM MEM HUTCC KNSAW RUSSA GLAVN2 KATL\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS J2 ELP J50 ABI J4 FUZ Q184 MERDN ORRKK HOBTT3 KATL\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM CNX J74 IRW FSM MEM HUTCC KNSAW RUSSA GLAVN2 KATL\" readonly>";
			break;
		case "AUS": // PHX-AUS // Updated 05-17-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-17-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP FST DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KPHX BROAK1 MAXXO CNX BGS DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX TFD4 TFD J92 TUS J2 ELP J50 ACT BLEWE5 KAUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-17-2025
			result += "<!-- Verified with ATCSCC on 05-17-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J15 JCT KAUS\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J2 FST DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 SJN J74 CNX J15 JCT KAUS\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA GUP J72 ABQ J15 JCT KAUS\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS J2 ELP J2 FST DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM CNX J15 JCT KAUS\" readonly>";
			break;
		case "BFL": // KPHX-BFL // Updated 10-23-2025
			result += "<!-- Updated 10-23-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KPHX KEENS3 HRRBR J212 DECAS J65 PMD FASTO2 KBFL\" readonly>"; // Based on CDR KE
			result += "<br/></br>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA EED J6 PMD FASTO2 KBFL\" readonly>"; // CDR ZE
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 GWIRE JLI PDZ PMD FASTO2 KBFL\" readonly>"; // CDR FY
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR PMD FASTO2 KBFL\"; readonly>"; // CDR KE
			// KPHX KEENS3 BLH J65 AERRO LHS FASTO2 KBFL
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 10-23-2025
			result += "<!-- Verified with ATCSCC on 10-23-2025 -->";
			result += "<br/>FY<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 GWIRE JLI PDZ PMD FASTO2 KBFL\" readonly>";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR PMD FASTO2 KBFL\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN PGS J64 HEC J6 PMD FASTO2 KBFL\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA EED J6 PMD FASTO2 KBFL\" readonly>";
			break;
		case "BNA": // PHX-BNA // Updated 10-05-2025
			result += "<!-- Updated 10-05-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 10-05-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW KM33I LOPPY CHSNE3 KBNA\" readonly>"; // Based on CDR BR
			result += "<br/><b>As of 2025-10-05, Fkeys tries to cut thru ZKC- Use IRW to stay south of ZKC<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK J110 BUM J112 FAM NMANN RYYMN3 KBNA\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J42 TXK Q34 MEMFS CHSNE3 KBNA\" readonly>"; // CDR EC
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 10-05-2025
			result += "<!-- Verified with ATCSCC on 10-05-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW J78 TUL LOPPY CHSNE3 KBNA\" readonly>";
			result += "<br/>CM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 CME TXO J74 IRW J78 TUL LOPPY CHSNE3 KBNA\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J42 TXK Q34 MEMFS CHSNE3 KBNA\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 SJN J74 IRW J78 TUL LOPPY CHSNE3 KBNA\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA GUP FTI EZEEE DANKS IFI TUL LOPPY CHSNE3 KBNA\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 JARPA GUP FTI EZEEE DANKS IFI TUL LOPPY CHSNE3 KBNA\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS J2 ELP J50 ABI J42 TXK Q34 MEMFS CHSNE3 KBNA\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM CNX J74 IRW J78 TUL LOPPY CHSNE3 KBNA\" readonly>";
			break;
		case "BOS": // PHX-BOS // Updated 01-28-2025
			result += "<!-- Updated 01-28-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ FTI J18 JOT J146 GIJ J554 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK ALS PUB GLD J146 GIJ J554 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/><br/>JOT 1: <input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA TXC HCT J60 JOT ELX SVM J70 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>LEV EAST 1: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP MRF KOBLE DLF COT THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>LEV EAST 2: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KPHX SJN9 ABQ J18 JOT J146 GIJ J554 JHW ALB T608 REVER KBOS\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KPHX BALDY3 CNX J74 IRW J6 LIT J66 MEM BNA BKW J213 AML BAL RBV JFK ORW7 KBOS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BL (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>BR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>CM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 CME TXO J74 IRW J98 FAM J78 PXV ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>EC (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>EZ (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>FR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 JOT J146 GIJ J554 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>MR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS PUB J64 HLC PWE LMN MZV JOT ELX SVM J70 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>MT (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS PUB J64 HLC PWE LMN MZV JOT ELX SVM J70 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>QU (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK DVV J60 JOT ELX SVM J70 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>ST (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>TM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM FTI J18 JOT J146 GIJ J554 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			break;
		case "BUR": // PHX-BUR // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR PHRED THRNE3 KBUR\" readonly>";
			result += "<br/><b style=\"color:orange\">FL220 and below use BLH transition (see chart notes)<\/b>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KPHX ZEPER2 RRSTA EED JANNY5 KBUR\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 GWIRE JLI HDF PDZ POM VNY KBUR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>FY (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 GWIRE JLI HDF PDZ POM VNY KBUR\" readonly>";
			result += "<br/>KE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR PSP V16 PDZ POM VNY KBUR\" readonly>";
			result += "<br/>QU (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN WELUM JANNY5 KBUR\" readonly>";
			result += "<br/>ZE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA EED JANNY5 KBUR\" readonly>";
			break;
		case "CLE": // PHX-CLE // Updated 12-12-2025
			result += "<!-- Updated 12-12-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK J64 PUB GLD J146 LNK CID OBK DETMR BRWNZ4 KCLE\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 VHP TALKN ROKNN4 KCLE\" readonly>"; // CDR FS
			result += "<br/><br/>South/ZKC Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW FSM ARG IIU DRUGA ROKNN4 KCLE\" readonly>";
			result += "<br/>South via ABI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 INK J4 FUZ J42 TXK MEM IIU DRUGA ROKNN4 KCLE\" readonly>";
			// result += "<br/><br/>SPI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 VHP TALKN ROKNN4 KCLE\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 12-12-2025
			result += "<!-- Verified with ATCSCC on 12-12-2025 -->";
			result += "<br/>FS<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 VHP TALKN ROKNN4 KCLE\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 JARPA RSK ALS OBH DSM IOW GIJ BENJO BRWNZ4 KCLE\" readonly>";
			break;
		case "CLT": // PHX-CLT // Updated 11-08-2025
			result += "<!-- Updated 11-08-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 11-08-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ J6 IRW FSM ARG J46 BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/><b>Fkeys tries to cut thru ZKC- Use IRW to stay south of ZKC<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK J44 ALS J110 GCK J28 ICT SGF BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>"; // CDR EL
			result += "<br/><br/>CLT NO FILPZ<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SJN9 ABQ J6 IRW GNP ARG J46 BNA VXV LIINN3 KCLT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 11-08-2025
			result += "<!-- Verified with ATCSCC on 11-08-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW FSM ARG BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 ECLPS KATMN SSO ONM CNX J74 IRW FSM ARG BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>EL<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 SJN J74 IRW FSM ARG BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK J58 FTI DANKS IFI TUL ARG BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS J2 ELP J50 ABI J4 FUZ J42 TXK J52 SUTTN IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/>TE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX TFD4 OLIIN J2 ELP J50 ABI J4 FUZ J42 TXK J52 SUTTN IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM CNX J74 IRW FSM ARG BNA TAZZA FILPZ4 KCLT\" readonly>";
			break;
		case "CMH": // PHX-CMH // Updated 07-20-2025
			result += "<!-- Updated 07-20-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-20-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 VHP JADUB DUBLN1 KCMH\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS J102 SLN J24 MCI J80 VHP JADUB DUBLN1 KCMH\" readonly>"; // CDR MR
			result += "<br/><b>ZKC Avoid: .. ALS GLD J146 JOT FWA BRYEN DUBLN1 KCMH<\/b>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J4 FUZ J42 TXK LIT J131 PXV JUDDI JAKTZ2 KCMH\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-20-2025
			result += "<!-- Verified with ATCSCC on 07-20-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO ACH EZEEE DANKS IFI SGF J98 FAM ENL TTH VHP JADUB DUBLN1 KCMH\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J66 LIT J131 PXV VHP JADUB DUBLN1 KCMH\" readonly>";
			result += "<br/>EP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J66 LIT J131 PXV VHP JADUB DUBLN1 KCMH\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 VHP JADUB DUBLN1 KCMH\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS J102 SLN J24 MCI J80 VHP JADUB DUBLN1 KCMH\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS J2 ELP J50 ABI J66 LIT J131 PXV VHP JADUB DUBLN1 KCMH\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM ACH EZEEE DANKS IFI SGF J98 FAM ENL TTH VHP JADUB DUBLN1 KCMH\" readonly>";
			break;
		case "CVG": // PHX-CVG // Updated 03-25-2025
			result += "<!-- Updated 03-25-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-25-2025
			result += "<br/><br/><input style=\"width:75%\"; value=\"KPHX BROAK1 MAXXO CNX MMB SGF J98 FAM J78 PLESS TERGE SARGO4 KCVG\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK ALS J102 SLN J24 MCI STL DAAVE SARGO4 KCVG\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J50 ABI J66 LIT J137 FAM DAAVE SARGO4 KCVG\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-25-2025
			result += "<!-- Verified with ATCSCC on 03-25-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO ACH LBL ICT BUM DAAVE SARGO4 KCVG\" readonly>";
			result += "<br/>CM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 CME TXO J74 IRW J98 SGF DAAVE SARGO4 KCVG\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J66 LIT J137 FAM DAAVE SARGO4 KCVG\" readonly>";
			result += "<br/>EP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J66 LIT TERGE SARGO4 KCVG\" readonly>";
			result += "<br/>FV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 SLN DAAVE SARGO4 KCVG\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS LNK ZABNU CEGRM7 KCVG\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 JARPA RSK ALS LNK ZABNU CEGRM7 KCVG\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 ONM ACH EZEEE DANKS IFI SGF DAAVE SARGO4 KCVG\" readonly>";
			break;
		case "DCA": // PHX-DCA // Updated 04-30-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-30-2025 CMP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-30-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX MMB PER SGF J98 FAM J78 IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS PUB J64 HLC PWE LMN MZV JOT J30 APE J30 LUISE FRDMM6 KDCA\" readonly>"; // CDR MR
			result += "<br/><b style=\"color:orange\">APE inserted into ..JOT J30 APE J30 LUISE.. because Fkeys will throw mandatory route violation for ..JOT J30 LUISE..<\/b>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J42 TXK Q34 SITTR TRUPS5 KDCA\" readonly>"; // CDR EC
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SJN9 SJN J231 ACH EZEEE IFI TUL J98 FAM J78 HVQ KDCA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-30-2025
			result += "<!-- Verified with ATCSCC on 04-30-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO ACH LBL ICT BUM STL IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J42 TXK Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>FV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 VHP APE J30 LUISE FRDMM6 KDCA\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS PUB J64 HLC PWE LMN MZV JOT J30 LUISE FRDMM6 KDCA\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM ACH LBL ICT BUM STL IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			break;
		case "DEN": // PHX-DEN // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK SHNPS TBARR4 KDEN\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KPHX ZEPER2 RRSTA GCN DICEE HAQHY SSKII4 KDEN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX INW J44 RSK J10 HBU POWDR1 KDEN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-06-2025
			result += "<!-- Verified with ATCSCC on 05-06-2025 -->";
			result += "<br/>BR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 JNIPR JSSUA GNDLA TBARR4 KDEN\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 ECLPS KATMN SSO J104 ONM GNDLA TBARR4 KDEN\" readonly>";
			result += "<br/>FR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 SJN GNDLA TBARR4 KDEN\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK SHNPS TBARR4 KDEN\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 JARPA RSK SHNPS TBARR4 KDEN\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM GNDLA TBARR4 KDEN\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA TBC RSK SHNPS TBARR4 KDEN\" readonly>";
			break;
		case "DFW": // PHX-DFW // Updated 07-30-2025
			result += "<!-- Updated 07-30-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE EWM J4 INK GEEKY SOCKK4 KDFW\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 TXO TURKI VKTRY2 KDFW\" readonly>"; // CDR BR
			// result += "<br/><br/>DFW BGTOE: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP FST JCT GUTZZ BOOVE7 KDFW\" readonly>";
			// result += "<br/>DFW WEST: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SJN9 ABQ J72 TXO UKW8 KDFW\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-17-2025
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 TXO TURKI VKTRY2 KDFW\" readonly>";
			result += "<br/>BV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 TXO TURKI VKTRY2 KDFW\" readonly>";
			result += "<br/>CM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX TMACK J65 CME BGS GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 ECLPS KATMN SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 SJN J74 TXO TURKI VKTRY2 KDFW\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA GUP J72 TXO TURKI VKTRY2 KDFW\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 JARPA GUP J72 TXO TURKI VKTRY2 KDFW\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS J2 ELP J50 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX TMACK ONM CNX J74 TXO TURKI VKTRY2 KDFW\" readonly>";
			break;
		case "DSM": // PHX-DSM // Updated 07-17-2025
			result += "<!-- Updated 07-17-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 07-17-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ J18 GCK PWE DSM KDSM\" readonly>";
			result += "<br/><b>ZKC Avoid: .. J18 FTI TBE LAA KDSM<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK J10 FQF J128 HCT OVR KDSM\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI ADM TUL J25 DSM KDSM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SJN9 ABQ J18 GCK PWE DSM KDSM\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-17-2025
			result += "<!-- Verified with ATCSCC on 07-17-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 TXO PNH J26 MCI J25 DSM KDSM\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 FTI TBE LAA KDSM\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS LAA KDSM\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO J104 FTI TBE LAA KDSM\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 FTI TBE LAA KDSM\" readonly>";
			break;
		case "DTW": // PHX-DTW // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ FTI J18 GCK PWE DSM BAE PORZL KKISS2 KDTW\" readonly>";
			result += "<br/><br/>via ZKC: <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ FTI TOTOE ICT BUM STL J24 VHP WWODD HANBL3 KDTW\" readonly>";
			result += "<br/>South (ZKC Avoid): <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J50 INK KF30E KM42K PENBE PXV WWODD HANBL3 KDTW\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 TXO PNH J26 MCI STL VHP SWAYD LECTR3 KDTW\" readonly>";
			result += "<br/>EC (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J66 LIT J131 PXV VHP SWAYD LECTR3 KDTW\" readonly>";
			result += "<br/>FC (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 GCK J96 SLN J24 MCI J80 VHP SWAYD LECTR3 KDTW\" readonly>";
			result += "<br/>MR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK TXC HCT BAE PORZL RKCTY2 KDTW\" readonly>";
			result += "<br/>TM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 FTI J18 SLN J24 MCI STL VHP SWAYD LECTR3 KDTW\" readonly>";
			break;
		case "ELP": // PHX-ELP // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE TEEES MOLLY5 KELP\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BR: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 JNIPR GREBE MOLLY5 KELP\" readonly>";
			result += "<br/>EC: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE TEEES MOLLY5 KELP\" readonly>";
			result += "<br/>ST: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI TEEES MOLLY5 KELP\" readonly>";
			result += "<br/>TM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK MOLLY EWM KELP\" readonly>";
			break;
		case "EWR": // PHX-EWR // Updated 08-06-2025
			result += "<!-- Updated 08-06-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK PUB GLD J146 GIJ J554 CRL J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/><br/>South via VUZ<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 UMBRE QUART PHLBO4 KEWR\" readonly>"; // CDR EC
			result += "<br/>South via CEW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 IAH J2 CEW ALLMA TEEEM Q99 QUART PHLBO4 KEWR\" readonly>"; // CDR EW
			result += "<br/><br/>BNA<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ J6 PNH IRW FSM MEMFS Q34 GVE PHLBO4 KEWR\" readonly>";
			result += "<br/>MGM 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ Q184 ARNNY FRDDO TWOUP Q22 UMBRE QUART PHLBO4 KEWR\" readonly>"; // CDR EM
			result += "<br/>PXV<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FORPE1 ABQ MMB PER SGF FAM PXV CREEP Q29 DORET J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>SPI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 VHP ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>"; // CDR FS
			result += "<br/>STL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO ACH LBL ICT BUM STL VHP ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>"; // CDR BR
			// result += "<br/>EWR 5: <input style=\"width:75%\"; value=\"KPHX BROAK1 MAXXO ACH TOTOE Q176 BUM SPI VHP ROD DORET J584 SLT FQM3 KEWR\" readonly>";
			// result += "<br/>EWR 6: <input style=\"width:75%\"; value=\"KPHX BROAK1 MAXXO ACH TOTOE Q176 WRIGL KK45G KI51M ROD DORET J584 SLT FQM3 KEWR\" readonly>";
			// result += "<br/>EWR 7: <input style=\"width:75%\"; value=\"KPHX BROAK1 MAXXO CNX MMB PER SGF J98 FAM J78 PXV ROD DORET J584 SLT FQM3 KEWR\" readonly>";
			// result += "<br/>LEV EAST 1: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP MRF KOBLE DLF COT THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SJN9 ABQ FTI J18 GCK HYS PWE IOW J60 JOT J146 GIJ J554 CRL J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-10-2025
			result += "<!-- Verified with ATCSCC on 06-10-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO ACH LBL ICT BUM STL VHP ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>EM<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ Q184 ARNNY FRDDO TWOUP Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>EW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 IAH J2 CEW ALLMA TEEEM Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>EY<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>EZ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>FS<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 VHP ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS PUB J64 HLC PWE LMN MZV JOT ELX CRL J584 FQM FQM3 KEWR\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO J104 FTI J18 JOT J146 GIJ J554 CRL J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 FTI J18 JOT J146 GIJ J554 CRL J584 SLT FQM3 KEWR\" readonly>";
			break;
		case "EUG": // PHX-EUG // Updated 04-30-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-30-2025 PCM -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY J92 LMT KEUG\" readonly>"; // CDR ZE
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR J212 DECAS J65 LANDO J6 AVE J1 OED CURTI KEUG\" readonly>";
			result += "<br/>East: <input style=\"width:75%\" value=\"KPHX QUAKY1 GCN WINEN BAM LKV KEUG\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KPHX QUAKY1 GCN PGS BLD J92 LMT KEUG\" readonly>"; // CDR QU
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-30-2025
			result += "<!-- Verified with ATCSCC on 04-30-2025 -->";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR DECAS J212 PSP PDZ J74 LAX J7 FMG J92 LMT KEUG\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN PGS BLD J92 LMT KEUG\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY J92 LMT KEUG\" readonly>";
			break;
		case "FAT": // PHX-FAT // Updated 06-24-2025
			result += "<!-- Updated 06-24-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR J212 DECAS J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA EED J6 PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>"; // CDR ZE
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL OCN LAX EHF TTE ALTTA9 KFAT\" readonly>"; // CDR FY
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX BXK4 PMD J65 EHF TTE ALTTA9 KFAT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-30-2025
			result += "<!-- Verified with ATCSCC on 03-30-2025 -->";
			result += "<br/>FY<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL OCN LAX EHF TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 GCN PGS J64 HEC J6 PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN PGS J64 HEC J6 PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA EED J6 PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			break;
		case "GEG": // PHX-GEG // Updated 04-30-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-30-2025 PCM -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX QUAKY1 GCN WINEN Q73 ZATIP KGEG\"; readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KPHX MRBIL1 YOOPR DVC JNC BIL J136 MLP HILIE3 KGEG\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KPHX KEENS3 HRRBR PMD J65 EHF J5 FMG J7 REO J153 GEG KGEG\" readonly>"; // CDR KE
			result += "<br/>Coastal/ZLC Avoid: <input style=\"width:75%\" value=\"KPHX KEENS3 HRRBR J212 DECAS J65 PMD J6 AVE J189 LMT DSD YKM MWH ZOOMR2 KGEG\" readonly>";
			result += "<br/><b style=\"color:orange\";>Fkeys will flag mandatory route violation unless routed through WINEN or BTY but Ive never had an issue routing west<\/b>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR PMD J65 EHF J5 FMG J7 REO J153 GEG KGEG\"; readonly>"; // CDR KE
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-30-2025
			result += "<!-- Verified with ATCSCC on 04-30-2025 -->";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR PMD J65 EHF J5 FMG J7 REO J153 GEG KGEG\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 YOOPR DVC JNC J15 BOI J517 GEG KGEG\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN BCE J11 TCH J15 BOI J517 GEG KGEG\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY J92 FMG J7 REO J153 GEG KGEG\" readonly>";
			break;
		case "GRR": // PHX-GRR // Updated 09-30-2025
			result += "<!-- Updated 09-30-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 09-30-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ FTI J18 MZV OBK KGRR\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK DVV J114 SNY KD75A FSD KP84G ODI J34 ADALE KGRR\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI BYP GRAZN Q28 PXV VHP GSH KGRR\" readonly>";
			// result += "<br/>South: <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ FTI J18 GCK J96 SLN J24 MCI J80 VHP GSH KGRR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SJN9 SJN J18 GCK J18 MZV OBK J94 PMM KGRR\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 09-30-2025
			break;
		case "IAH": // PHX-IAH // Updated 07-29-2025
			result += "<!-- Updated 07-29-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP Q4 FUSCO DIESL MSCOT4 KIAH\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX KF21Y ABI J50 ACT OILLL DRLLR5 KIAH\" readonly>";
			// KPHX BROAK1 MAXXO CNX KF21Y ABI J50 ACT OILLL DRLLR5 KIAH
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-10-2025
			result += "<!-- Verified with ATCSCC on 06-10-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J15 INK DIESL MSCOT4 KIAH\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP Q4 FUSCO DIESL MSCOT4 KIAH\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 SJN J74 CNX J15 INK DIESL MSCOT4 KIAH\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA GUP J72 ABQ J15 INK DIESL MSCOT4 KIAH\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS J2 ELP Q4 FUSCO DIESL MSCOT4 KIAH\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM CNX J15 INK DIESL MSCOT4 KIAH\" readonly>";
			break;
		case "ICT": // PHX-ICT // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ KENTO Q176 VARNR KICT\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK J44 ALS J110 GCK J28 KYLER KICT\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KPHX ECLPS1 ECLPS KATMN SSO J4 EWM SUMMY WEDUT FLOYD IRW PER KICT\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BR: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO ACH LBL KICT\" readonly>";
			result += "<br/>EC: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 ECLPS KATMN SSO J104 ONM ACH LBL KICT\" readonly>";
			break;
		case "IND": // PHX-IND // Updated 04-10-2025
			result += "<!-- Updated 04-10-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-10-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ FTI J18 SLN J24 MCI J80 SPI JAAVE KOLTS2 KIND\" readonly>";
			result += "<br/><br/>North/ZKC Avoid: <input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK J64 PUB GLD J146 JOT ELANR JAKKS2 KIND\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J66 LIT TERGE SMUKE3 KIND\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-10-2025
			result += "<!-- Verified with ATCSCC on 04-10-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW J78 FAM ENL WIDAM SMUKE3 KIND\" readonly>";
			result += "<br/>CM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX TMACK J65 CME TXO J74 IRW J78 FAM ENL WIDAM SMUKE3 KIND\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J66 LIT TERGE SMUKE3 KIND\" readonly>";
			result += "<br/>EP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J66 LIT TERGE SMUKE3 KIND\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 JAAVE KOLTS2 KIND\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS J102 SLN J24 MCI J80 JAAVE KOLTS2 KIND\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO ONM CNX J74 IRW J78 FAM ENL WIDAM SMUKE3 KIND\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX TMACK ONM CNX J74 IRW J78 FAM ENL WIDAM SMUKE3 KIND\" readonly>";
			break;
		case "JAX": // PHX-JAX // Updated 12-12-2025
			result += "<!-- Updated 12-12-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 10-12-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 TXO J72 SPS EIC J20 MGM DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FORPE1 ABQ J6 IRW J14 VUZ LGC DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ Q184 MERDN MGM DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/>OW/Gulf<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 LEV Y280 REMIS PIE ORL POGIE2 KJAX\" readonly>";
			result += "<br/><br/>North via GCK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK J110 ALS ZAROS Q128 MUDHO VUZ LGC DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/>South via LSU<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 IAH J2 LCH Q24 LSU J2 DEFUN CABLO ZOOSS MARQO3 KJAX\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 FST J138 SAT PSX PEGLG ALGAE DTSRJ CIGAR PIE ORL POGIE2 KJAX\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 FST KH87A CRP PEGLG ALGAE DTSRJ CIGAR PIE ORL POGIE2 KJAX\" readonly>";
			result += "<br/><br/>CEW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP Q4 CLL KH03G LSU J2 CEW SZW ZOOSS MARQO3 KJAX\" readonly>";
			result += "<br/>EIC<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 TXO J72 SPS EIC J20 MGM DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/>GCK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK J110 ALS ZAROS Q128 MUDHO VUZ LGC DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/>IAH<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 IAH J2 LCH Q24 LSU J2 DEFUN CABLO ZOOSS MARQO3 KJAX\" readonly>";
			result += "<br/>IRW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FORPE1 ABQ J6 IRW J14 VUZ LGC DUCHY OHDEA2 KJAX\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 10-12-2025
			break;
		case "JFK": // PHX-JFK // Updated 10-07-2025
			result += "<!-- Updated 10-07-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 SPI KOLTS WWODD RINTE KLYNE Q29 WWSHR JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK J64 PUB GLD J146 IOW OBK J94 PMM J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J50 ABI J42 TXK Q34 RBV SIE CAMRN5 KJFK\" readonly>";
			result += "<br/><br/>CEW: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J86 IAH J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>JOT 1: <input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA TXC HCT J60 JOT ELX SVM J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>JOT 2: <input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK ALS PUB J64 HLC PWE LMN MZV JOT ELX SVM J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>MGM 1: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ Q184 ARNNY FRDDO FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>MGM 2: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>SPI: <span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>VLKNN<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>VUZ: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J50 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SJN9 SJN GUP J102 ALS PUB GLD OBH DSM DBQ J100 OBK J584 CRL J554 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 10-07-2025
			result += "<!-- Verified with ATCSCC on 10-07-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO ACH TOTOE ICT BUM STL VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>EZ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>FS<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS PUB J64 HLC PWE LMN MZV JOT ELX SVM J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO ONM ACH TOTOE ICT BUM STL VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			break;
		case "LAS": // PHX-LAS // Updated 05-09-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-09-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL280):</b>";
			result += "<br/><input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA ELLDA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 MRBIL HAHAA RKSTR4 KLAS\" readonly>"; // CDR MR
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX KEENS3 WLVRN PKE GFS LARKK1 KLAS\" readonly>"; // CDR KE
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX PXR J11 DRK ISHEE2 KLAS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-09-2025
			result += "<!-- Verified with ATCSCC on 05-09-2025 -->";
			result += "<br/>KE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 WLVRN PKE GFS LARKK1 KLAS\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 MRBIL HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 CARTL HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA ELLDA RKSTR4 KLAS\" readonly>";
			break;
		case "LAX": // PHX-LAX // Updated 06-23-2025
			result += "<!-- Updated 06-23-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL320):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KPHX KEENS3 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><b style=\"color:orange\">LAX arrivals must file WLVRN transition out of PHX (see chart notes)<\/b>";
			result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL AMMOR OLAAA2 KLAX\" readonly>"; // CDR FY
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA FNNDA HLYWD1 KLAX\" readonly>"; // CDR ZE
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX BXK4 PKE TNP BASET5 KLAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-23-2025
			result += "<!-- Verified with ATCSCC on 06-23-2025 -->";
			result += "<br/>FY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL AMMOR OLAAA2 KLAX\" readonly>";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>MR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 GCN DNERO ANJLL4 KLAX\" readonly>";
			result += "<br/>QU<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN DNERO ANJLL4 KLAX\" readonly>";
			result += "<br/>ZE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA FNNDA HLYWD1 KLAX\" readonly>";
			break;
		case "MCI": // PHX-MCI // Updated 05-29-2025
			result += "<!-- Updated 05-29-2025 -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 05-29-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHX BROAK1 MAXXO ACH LBL ICT ZOURA WUTNG3 KMCI\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS J110 FRACA ZOURA WUTNG3 KMCI\" readonly>"; // CDR MR
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J26 ICT ZOURA WUTNG3 KMCI\" readonly>"; // CDR EC
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SJN9 SJN J18 FTI LBL ICT EMP JHAWK8 KMCI\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-29-2025
			result += "<!-- Verified with ATCSCC on 05-29-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO ACH LBL ICT ZOURA WUTNG3 KMCI\" readonly>";
			result += "<br/>CM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 CME J26 ICT ZOURA WUTNG3 KMCI\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J26 ICT ZOURA WUTNG3 KMCI\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 GCK J110 FRACA ZOURA WUTNG3 KMCI\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS J110 FRACA ZOURA WUTNG3 KMCI\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO J104 ONM ACH LBL ICT ZOURA WUTNG3 KMCI\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 ONM ACH LBL ICT ZOURA WUTNG3 KMCI\" readonly>";
			break;
		case "MCO": // PHX-MCO // Updated 11-23-2025
			result += "<!-- Updated 11-23-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 05-07-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J2 JCT J86 LEV Y280 CHRGE PRICY4 KMCO\" readonly>";
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J2 FST J86 IAH J2 DEFUN GRNCH5 KMCO\" readonly>"; // CDR EC
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FORPE1 ABQ J78 PNH J14 VUZ LGC ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 FST J138 SAT PSX PEGLG ALGAE DTSRJ CIGAR PRICY4 KMCO\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 FST KH87A CRP PEGLG ALGAE DTSRJ CIGAR PRICY4 KMCO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SSO ELP JCT CLL SJI CEW OTK LEESE3 KMCO\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 11-23-2025
			result += "<!-- Verified with ATCSCC on 11-23-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J15 IAH J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J2 FST J86 IAH J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 SJN J74 CNX J15 IAH J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA GUP J72 ABQ J15 IAH J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS J2 ELP J2 FST J86 IAH J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM CNX J15 IAH J2 DEFUN GRNCH5 KMCO\" readonly>";
			break;
		case "MEM": // PHX-MEM // Updated 11-13-2025
			result += "<!-- Updated 11-13-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-10-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ J6 IRW FSM BRBBQ3 KMEM\" readonly>";
			result += "<br/><b>South Arvl: .. FSM LITTR HOBRK4 KMEM<\/b>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J42 TXK HOBRK4 KMEM\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK J110 GCK J28 ICT J182 RZC BRBBQ3 KMEM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX BALDY3 ACH TCC J76 SPS BYP TXK UJM6 KMEM\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-10-2025
			result += "<!-- Verified with ATCSCC on 06-10-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW LITTR HOBRK4 KMEM\" readonly>";
			result += "<br/>CM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 CME J166 SPS ADM LITTR HOBRK4 KMEM\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 ECLPS KATMN SSO ONM CNX J74 IRW LITTR HOBRK4 KMEM\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 SJN J74 IRW LITTR HOBRK4 KMEM\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA GUP FTI EZEEE IRW LITTR HOBRK4 KMEM\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 JARPA GUP FTI EZEEE IRW LITTR HOBRK4 KMEM\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI ONM CNX J74 IRW LITTR HOBRK4 KMEM\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM CNX J74 IRW LITTR HOBRK4 KMEM\" readonly>";
			break;
		case "MIA": // PHX-MIA // Updated 09-28-2025
			result += "<!-- Updated 09-28-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-11-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J2 FST J86 LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP Q4 CLL KH03G LSU J2 DEFUN FROGZ4 KMIA\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FORPE1 ABQ J6 XESSS LDK MGMRY ACORI FROGZ4 KMIA\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 FST J138 SAT MUSYL KELPP ALGAE MINOW M580 MARCI FROGZ4 KMIA\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 FST KH87A CRP PEGLG ALGAE MINOW M580 MARCI FROGZ4 KMIA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-28-2025
			result += "<!-- Verified with ATCSCC on 09-28-2025 -->";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J2 FST J86 IAH J2 DEFUN FROGZ4 KMIA\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS J2 ELP J2 FST J86 IAH J2 DEFUN FROGZ4 KMIA\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM CNX J15 JCT J86 IAH J2 DEFUN FROGZ4 KMIA\" readonly>";
			break;
		case "MKE": // PHX-MKE // Updated 03-30-2025
			result += "<!-- Updated 03-30-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-30-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ FTI J18 GCK HYS OVR OGECA GOPAC3 KMKE\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK BRK KD66A KP78G DLL BAE KMKE\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J26 MMB CNU STL J101 SPI JOT LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SJN9 ABQ FTI J18 GCK J18 MZV OBK KMKE\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-30-2025
			result += "<!-- Verified with ATCSCC on 03-30-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 ABQ J18 FTI TBE LAA GLD PWE DSM J144 DBQ JVL VEENA KMKE\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 ECLPS KATMN SSO J104 FTI J18 JOT KMKE\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 JOT KMKE\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS PUB GLD PWE DSM J144 DBQ JVL VEENA KMKE\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 JARPA RSK ALS PUB GLD PWE DSM J144 DBQ JVL VEENA KMKE\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO J104 FTI J18 JOT KMKE\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 FTI J18 JOT KMKE\" readonly>";
			break;
		case "MRY": // PHX-MRY // Updated 05-09-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-09-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR J212 DECAS J65 PMD J6 ROBIE KMRY\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY CZQ SNS KMRY\" readonly>"; // Based on CDR ZE
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 MZB J1 AVE SNS KMRY\" readonly>"; // CDR FY
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-09-2025
			result += "<!-- Verified with ATCSCC on 05-09-2025 -->";
			result += "<br/>FY<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 MZB J1 AVE SNS KMRY\" readonly>";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR DECAS J65 LANDO AVE SNS KMRY\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA EED J6 PMD J65 LANDO AVE SNS KMRY\" readonly>";
			break;
		case "MSN": // PHX-MSN // Updated 10-13-2025
			result += "<!-- Updated 10-13-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ FTI J18 CHASY IOW DBQ DUTYS KMSN\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK J64 PUB GLD J146 LNK DSM J144 DBQ KMSN\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW J98 SGF J8 STL BDF KMSN\" readonly>";
			result += "<br/><br/>South via EWM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI MLC RZC SGF MZV KMSN\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 10-13-2025
			break;
		case "MSP": // PHX-MSP // Updated 01-04-2025
			result += "<!-- Updated 01-04-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ TBE FSD SSWAN TORGY3 KMSP\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK J10 LBF ONL J114 FSD SSWAN TORGY3 KMSP\" readonly>"; // CDR MR
			result += "<br/>South: <input style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO J104 FTI TBE LAA GLD OBH FSD SSWAN TORGY3 KMSP\" readonly>"; // CDR ST
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX INW J44 RSK J64 PUB HGO J197 GLD OBH FOD MCW KASPR7 KMSP\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO ABQ J18 FTI TBE LAA GLD OBH FSD SSWAN TORGY3 KMSP\" readonly>";
			result += "<br/>EC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 ECLPS KATMN SSO J104 FTI TBE LAA GLD OBH FSD SSWAN TORGY3 KMSP\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 FTI TBE LAA GLD OBH FSD SSWAN TORGY3 KMSP\" readonly>";
			result += "<br/>MB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS ONL ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK J10 LBF ONL J114 FSD SSWAN TORGY3 KMSP\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 JARPA RSK ALS ONL ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO J104 FTI TBE LAA GLD OBH FSD SSWAN TORGY3 KMSP\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 FTI TBE LAA GLD OBH FSD SSWAN TORGY3 KMSP\" readonly>";
			break;
		case "MSY": // PHX-MSY // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP FST J2 JCT J86 IAH J2 LCH AWDAD1 KMSY\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KPHX BROAK1 MAXXO TXO FUZ J58 AEX LSU AWDAD1 KMSY\" readonly>";
			result += "<br/>North (ZFW Avoid): <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ FTI MMB END TUL LIT MCB KMSY\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>EC: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J2 FST J86 IAH J2 LCH AWDAD1 KMSY\" readonly>";
			result += "<br/>FR: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO J74 CNX J15 IAH J2 LCH AWDAD1 KMSY\" readonly>";
			result += "<br/>TM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM CNX J15 IAH J2 LCH AWDAD1 KMSY\" readonly>";
			break;
		case "OKC": // PHX-OKC // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX BROAK1 MAXXO PNH RUSTS GHOST3 KOKC\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J50 ABI GIMLE YUCKS3 KOKC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW KOKC\" readonly>";
			result += "<br/>EC: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP LBB SPS IRW KOKC\" readonly>";
			result += "<br/>FR: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO J74 IRW KOKC\" readonly>";
			result += "<br/>MR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA GUP FTI EZEEE IRW KOKC\" readonly>";
			result += "<br/>ST: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO J104 ONM CNX J74 IRW KOKC\" readonly>";
			result += "<br/>TM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM CNX J74 IRW KOKC\" readonly>";
			break;
		case "OMA": // KPHX-OMA // Updated 10-23-2025
			result += "<!-- Updated 10-23-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 10-23-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 GCK HYS KOMA\" readonly>"; // CDR FR
			result += "<br/></br>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS PUB HGO GLD J146 LNK KOMA\" readonly>"; // CDR MR
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J26 ICT HTHWY TIMMO1 KOMA\" readonly>"; // CDR EC
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ J18 GCK HYS KOMA\"; readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 10-23-2025
			result += "<!-- Verified with ATCSCC on 10-23-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 ABQ J18 GCK HYS KOMA\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J26 ICT HTHWY TIMMO1 KOMA\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 GCK HYS KOMA\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS PUB HGO GLD J146 LNK KOMA\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 JARPA RSK ALS PUB HGO GLD J146 LNK KOMA\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 FTI J18 GCK HYS KOMA\" readonly>";
			break;
		case "ONT": // PHX-ONT // Updated 05-17-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-17-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KPHX KEENS3 HRRBR PHRED SCBBY2 KONT\" readonly>"; // CDR KE
			result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL AMMOR SCBBY2 KONT\" readonly>"; // CDR FY
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA JAWSY TTRUE SCBBY2 KONT\" readonly>"; // CDR ZE
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX BXK4 PSP SETER5 KONT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-17-2025
			result += "<!-- Verified with ATCSCC on 05-17-2025 -->";
			result += "<br/>FY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL AMMOR SCBBY2 KONT\" readonly>";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR PHRED SCBBY2 KONT\" readonly>";
			result += "<br/>MR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 GCN TTRUE SCBBY2 KONT\" readonly>";
			result += "<br/>QU<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN TTRUE SCBBY2 KONT\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA JAWSY TTRUE SCBBY2 KONT\" readonly>";
			break;
		case "ORD": // DFW-ORD // Updated 10-13-2025
			result += "<!-- Updated 10-13-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 10-13-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ J18 GCK J96 IRK BENKY6 KORD\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS J102 SLN J96 IRK BENKY6 KORD\" readonly>"; // CDR MR
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>";
			result += "<br/><br/>North via FOD<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK J64 PUB GLD OBH FOD MYRRS FYTTE7 KORD \" readonly>";
			result += "<br/>South via EWM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI MLC RZC SGF WELTS TRTLL6 KORD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SJN9 ABQ J18 SLN J96 IRK BDF9 KORD\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 ABQ J18 GCK J96 IRK BENKY6 KORD\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J26 BDF BENKY BENKY6 KORD\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 GCK J96 IRK BENKY6 KORD\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS J102 SLN J96 IRK BENKY6 KORD\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 JARPA RSK ALS FQF BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO J104 FTI J18 GCK J96 IRK BENKY6 KORD\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 FTI J18 GCK J96 IRK BENKY6 KORD\" readonly>";
			break;
		case "PDX": // PHX-PDX // Updated 09-05-2025
			result += "<!-- Updated 09-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX ZEPER2 RRSTA DOVEE BTY J92 LMT GALLO TMBRS3 KPDX\" readonly>";
			result += "<br/></br>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX QUAKY1 GCN BCE J11 TCH J15 IMB JOTBA HHOOD5 KPDX\" readonly>"; // CDR QU
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX KEENS3 BLH J65 PMD J6 AVE J189 LMT GALLO TMBRS3 KPDX\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// KPHX ZEPER2 RRSTA DOVEE BTY J92 LMT OCITY3 KPDX
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 10-23-2025
			result += "<!-- Verified with ATCSCC on 10-23-2025 -->";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 WLVRN DOVEE BTY OAL J92 YERIN LMT KPDX\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 YOOPR DVC JNC J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN BCE J11 TCH J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY J92 LMT OCITY3 KPDX\" readonly>";
			break;
		case "PHL": // PHX-PHL // Updated 01-29-2025
			result += "<!-- Updated 01-29-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO ACH TOTOE ICT BUM STL J24 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/><br/>North (Avoid ZKC): <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK PUB J64 HLC PWE LMN MZV JOT J30 TRAKK J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/><br/>ROD: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW FSM ARG PXV ROD J152 JST BOJID4 KPHL\" readonly>";1
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO ACH TOTOE ICT BUM STL J24 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>CM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 CME TXO J74 IRW J98 SGF J8 STL VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>EC (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>FS (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>MR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS PUB J64 HLC PWE LMN MZV JOT J30 TRAKK J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>RD: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW FSM ARG PXV ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>ST (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO J104 ONM ACH TOTOE ICT BUM STL J110 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>TM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 ONM ACH TOTOE ICT BUM STL J110 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			break;
		case "PIT": // PHX-PIT // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ J18 SLN J24 MCI J80 VHP APE CTW FEWGA7 KPIT\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK J64 PUB HCT OBH MCW J16 BAE J34 DJB GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J50 INK J4 FUZ J42 TXK Q34 TONIO HNN FEWGA7 KPIT\" readonly>";
			result += "<br/><br/>BNA: <input style=\"width:75%\"; value=\"KPHX BROAK1 MAXXO CNX J74 IRW FSM MEMFS Q34 HITMN IIU HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>GRB: <input style=\"width:75%\"; value=\"KPHX QUAKY1 GCN BCE J100 EKR MBW RAP ABR GRB FNT DJB GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>PXV: <input style=\"width:75%\"; value=\"KPHX BROAK1 MAXXO ACH EZEEE MMB PER SGF J98 FAM J78 PXV J78 IIU HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>IIU: <input style=\"width:75%\"; value=\"KPHX BROAK1 MAXXO ACH EZEEE MMB PER SGF J98 FAM J78 PXV J78 IIU HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>JOT 1: <input style=\"width:75%\"; value=\"KPHX MRBIL1 JARPA RSK J10 HBU J206 DBL J60 JOT J146 WOOST J34 DJB GRIVY JESEY5 KPIT\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 IRW J78 IIU HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>CM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 CME TXO J74 IRW J78 IIU HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>EC: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 ECLPS KATMN SSO J104 ONM CNX J74 IRW J78 IIU HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>FC: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 GCK J96 SLN J24 MCI J80 VHP APE CTW FEWGA7 KPIT\" readonly>";
			result += "<br/>QU (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS J102 SLN J24 MCI J80 VHP APE CTW FEWGA7 KPIT\" readonly>";
			result += "<br/>TM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 ONM CNX J74 IRW J78 IIU HNN FEWGA7 KPIT\" readonly>";
			break;
		case "PSP": // PHX-PSP // Updated 09-14-2025
			result += "<!-- Updated 09-14-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR BLH SBONO1 KPSP\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA EED SBONO1 KPSP\" readonly>"; // CDR ZE
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX BXK4 BLH SBONO1 KPSP\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-14-2025
			result += "<!-- Verified with ATCSCC on 09-14-2025 -->";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR DECAS KPSP\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN EED TNP KPSP\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA EED TNP KPSP\" readonly>";
			break;

// TODO PHX-RDM // NO FOS ROUTES

		case "RDU": // PHX-RDU // Updated 07-20-2025
			result += "<!-- Updated 07-20-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ J6 IRW ARG J46 BNA VXV KPASS ALDAN4 KRDU\" readonly>";
			result += "<br/><b>Via LIT: .. <\/b><input style=\"width:23em\" value=\"J6 LIT J14 VUZ THRSR IRQ PYRES DMSTR2 KRDU\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS J110 BUM ENL IIU Q108 ZIEBR PSK FRIKY ALDAN4 KRDU\" readonly>"; // CDR MR
			result += "<br/><b>Via VXV: .. <\/b><input style=\"width:23em\" value=\"J110 GCK J28 ICT SGF VXV KPASS ALDAN4 KRDU\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 TXO J72 SPS BYP TXK J52 SUTTN IZAAC Q30 VLKNN THRSR IRQ PYRES DMSTR2 KRDU\" readonly>"; // CDR FT
			result += "<br/><b>Via SSO: <input style=\"width:26em\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J42 TXK\" readonly> ..<\/b>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-20-2025
			result += "<!-- Verified with ATCSCC on 07-20-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 TXO J72 SPS BYP TXK J52 SUTTN IZAAC Q30 VLKNN THRSR IRQ PYRES DMSTR2 KRDU\" readonly>";
			result += "<br/>CM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 CME J166 SPS BYP TXK J52 SUTTN IZAAC Q30 VLKNN THRSR IRQ PYRES DMSTR2 KRDU\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J50 ABI J42 TXK J52 SUTTN IZAAC Q30 VLKNN THRSR IRQ PYRES DMSTR2 KRDU\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 GCK J110 BUM ENL IIU Q108 ZIEBR PSK FRIKY ALDAN4 KRDU\" readonly>";
			result += "<br/>FT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J74 TXO J72 SPS BYP TXK J52 SUTTN IZAAC Q30 VLKNN THRSR IRQ PYRES DMSTR2 KRDU\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS J110 BUM ENL IIU Q108 ZIEBR PSK FRIKY ALDAN4 KRDU\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 ONM CNX J74 TXO J72 SPS BYP TXK J52 SUTTN IZAAC Q30 VLKNN THRSR IRQ PYRES DMSTR2 KRDU\" readonly>";
			break;
		case "RNO": // PHX-RNO // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX ZEPER2 RRSTA DOVEE BTY KENNO TARVR1 KRNO\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KPHX KEENS3 BLH LHS CSTRO FMG KRNO\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KPHX QUAKY1 GCN BCE ILC J198 KROST J148 OAL KRNO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX BXK4 PKE BTY J92 OAL MVA SCOLA1 KRNO\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>KE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 WLVRN PKE BLD J92 OAL FMG KRNO\" readonly>";
			result += "<br/>QU (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN BCE ILC J80 OAL KRNO\" readonly>";
			result += "<br/>ZE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY J92 OAL FMG KRNO\" readonly>";
			break;
		case "SAN": // PHX-SAN // Updated 07-07-2025
			result += "<!-- Updated 07-07-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL260):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX FYRBD1 MOHAK J2 IPL TOPGN2 KSAN\" readonly>";
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA JAWSY TTRUE LUCKI1 KSAN\" readonly>"; // CDR ZE
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX MOBIE4 GBN J18 IPL BARET5 KSAN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
			result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
			result += "<br/>FY<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>KE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR DECAS MOMAR LUCKI1 KSAN\" readonly>";
			result += "<br/>ZE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA JAWSY TTRUE LUCKI1 KSAN\" readonly>";
			break;
		case "SAT": // PHX-SAT // Updated 12-19-2025
			result += "<!-- Updated 12-19-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP FST MOPPP DNKIN2 KSAT\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX KF24Y ABI WEELS TRVLL DNKIN2 KSAT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX TFD4 OLIIN J2 ELP FST CSI3 KSAT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 12-19-2025
			result += "<!-- Verified with ATCSCC on 12-19-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J15 FUSCO TRVLL DNKIN2 KSAT\" readonly>"; // 
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J2 FST MOPPP DNKIN2 KSAT\" readonly>"; // 
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 SJN J74 CNX J15 FUSCO TRVLL DNKIN2 KSAT\" readonly>"; // 
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS J2 ELP J2 FST MOPPP DNKIN2 KSAT\" readonly>"; // 
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK ONM CNX J15 FUSCO TRVLL DNKIN2 KSAT\" readonly>"; // 
			break;
		case "SBA": // PHX-SBA // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR J212 PSP PORPS PITBL1 KSBA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>FY (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL OCN LAX RZS KSBA\" readonly>";
			result += "<br/>KE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR PSP PORPS PITBL1 KSBA\" readonly>";
			result += "<br/>QU: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN PGS J64 HEC PITBL1 KSBA\" readonly>";
			result += "<br/>ZE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA EED HEC PITBL1 KSBA\" readonly>";
			result += "<br/>ZZ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR PSP PORPS PITBL1 KSBA\" readonly>";
			break;
		case "SBP": // PHX-SBP // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR PSP LAX RZS MQO KSBP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX BXK4 BLH PIONE PMD FLW MQO KSBP\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>KE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR PSP LAX RZS MQO KSBP\" readonly>";
			result += "<br/>KN: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 BLH J65 PMD FLW MQO KSBP\" readonly>";
			result += "<br/>ZE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA EED J6 PMD FIM CNDOR CADAB KSBP\" readonly>";
			break;
		case "SEA": // PHX-SEA // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX QUAKY1 GCN WINEN Q35 KOATA PDT CHINS5 KSEA\" readonly>";
			result += "<br/><br/>West Coast: <input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR J212 DECAS J65 PMD LANDO SHIMR LKV HAWKZ8 KSEA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>KE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 WLVRN PKE DOVEE BTY OAL J92 YERIN LMT KSEA\" readonly>";
			result += "<br/>MR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 YOOPR DVC JNC J15 BOI J54 BKE PDT CHINS5 KSEA\" readonly>";
			result += "<br/>QU (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN BCE J11 TCH J15 BOI J54 BKE PDT CHINS5 KSEA\" readonly>";
			result += "<br/>ZE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY J92 LMT HAWKZ8 KSEA\" readonly>";
			break;
		case "SFO": // PHX-SFO // Updated 04-18-2025
			result += "<!-- Updated 04-18-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR DECAS J65 PMD COREZ MAKRS SERFR SERFR4 KSFO\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY RUSME DYAMD5 KSFO\" readonly>"; // CDR ZE
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL SXC IKAYE RIZIN SPLNT STOKD SERFR SERFR4 KSFO\" readonly>"; // CDR FY
			result += "<br/><br/>North via J92<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY J92 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX KEENS3 BLH J65 PMD J6 AVE BSR BSR3 KSFO\" readonly>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX BXK4 PSP PDZ EHF CZQ KSFO\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-23-2025
			result += "<!-- Verified with ATCSCC on 06-23-2025 -->";
			result += "<br/>FY<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL SXC IKAYE RIZIN SPLNT STOKD SERFR SERFR4 KSFO\" readonly>";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR DECAS J65 PMD COREZ MAKRS SERFR SERFR4 KSFO\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 GCN BCE ILC J80 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN BCE ILC J80 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY RUSME DYAMD5 KSFO\" readonly>";
			break;
		case "SJC": // PHX-SJC // Updated 06-22-2025
			result += "<!-- Updated 06-22-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KPHX KEENS3 HRRBR DECAS J65 PMD J6 AVE TROXX SILCN6 KSJC\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY RUSME RAZRR5 KSJC\" readonly>"; // CDR ZE
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL OCN LAX RZS TROXX SILCN6 KSJC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-22-2025
			result += "<!-- Verified with ATCSCC on 06-22-2025 -->";
			result += "<br/>FB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 MZB J1 AVE TROXX SILCN6 KSJC\" readonly>";
			result += "<br/>FD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL OCN LAX RZS TROXX SILCN6 KSJC\" readonly>";
			result += "<br/>FY<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 MZB J1 AVE TROXX SILCN6 KSJC\" readonly>";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR DECAS J65 PMD J6 AVE TROXX SILCN6 KSJC\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 GCN PGS BLD J92 BTY RUSME RAZRR5 KSJC\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN PGS BLD J92 BTY RUSME RAZRR5 KSJC\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY RUSME RAZRR5 KSJC\" readonly>";
			break;
		case "SLC": // PHX-SLC // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX QUAKY1 GCN BCE QWENN5 KSLC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX PXR J11 BCE MLF JAMMN5 KSLC\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>KE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 WLVRN PKE LAKRR MLF KSLC\" readonly>";
			result += "<br/>MR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 YOOPR DVC JNC J15 TCH KSLC\" readonly>";
			result += "<br/>QU (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN BCE J11 FFU KSLC\" readonly>";
			result += "<br/>ZE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BLD J107 MLF J9 TCH KSLC\" readonly>";
			break;
		case "SMF": // PHX-SMF // Updated 04-30-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-30-2025 PCM -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY DONNR SLMMR5 KSMF\" readonly>"; // CDR ZE
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX KEENS3 HRRBR J212 DECAS J65 EHF NURAY SUUTR4 KSMF\" readonly>"; // CDR KE
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 GCN BCE ILC KITTN KATTS TATOO CRASY SLMMR5 KSMF\" readonly>"; // CDR MR
			result += "<br/><br/>MOJAVE WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR J212 PSP PDZ LAX EHF NURAY SUUTR4 KSMF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX CHILY4 BTY J92 BABIT J84 LIN CCR CCR2 KSMF\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-30-2025
			result += "<!-- Verified with ATCSCC on 04-30-2025 -->";
			result += "<br/>FY<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL OCN LAX EHF NURAY SUUTR4 KSMF\" readonly>";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR DECAS J65 EHF NURAY SUUTR4 KSMF\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 GCN BCE ILC TATOO CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN BCE ILC TATOO CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>ZE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA DOVEE BTY DONNR SLMMR5 KSMF\" readonly>";
			break;
		case "SNA": // PHX-SNA // Updated 09-14-2025
			result += "<!-- Updated 09-14-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL280):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR EMLLD ROOBY3 KSNA\" readonly>";
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA EED DSNEE6 KSNA\" readonly>"; // CDR ZE
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 GWIRE JLI V458 PACIF SLI KSNA\" readonly>"; // CDR FY
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX BXK4 BXK PKE PSP KAYOH8 KSNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-14-2025
			result += "<!-- Verified with ATCSCC on 09-14-2025 -->";
			result += "<br/>FY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 GWIRE JLI V458 PACIF SLI KSNA\" readonly>";
			result += "<br/>KE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX KEENS3 HRRBR EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/>MR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 GCN EED DSNEE6 KSNA\" readonly>";
			result += "<br/>QU<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 GCN EED DSNEE6 KSNA\" readonly>";
			result += "<br/>ZE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ZEPER2 RRSTA EED DSNEE6 KSNA\" readonly>";
			break;
		case "STL": // PHX-STL // Updated 11-26-2025
			result += "<!-- Updated 11-26-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 11-26-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KPHX FORPE1 ABQ FTI TOTOE Q176 BUM KOOOP1 KSTL\" readonly>";
			result += "<br/></br>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS J110 BUM KOOOP1 KSTL\" readonly>"; // CDR MR
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE EWM J4 ABI ADM RZC SGF KAYLA3 KSTL\" readonly>";
			result += "<br/><br/>North via MCK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK J10 FQF J44 MCK PWE IRK LORLE3 KSTL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SJN9 ABQ FTI J18 GCK J110 BUM KOOOP1 KSTL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 11-26-2025
			result += "<!-- Verified with ATCSCC on 11-26-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO ACH TOTOE ICT BUM KAYLA3 KSTL\" readonly>";
			result += "<br/>CM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 CME TXO J74 IRW J98 SGF KAYLA3 KSTL\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J26 PNH IFI SGF KAYLA3 KSTL\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 ABQ J18 GCK J110 BUM KOOOP1 KSTL\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA RSK ALS J110 BUM KOOOP1 KSTL\" readonly>";
			result += "<br/>QU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX QUAKY1 JARPA RSK ALS J110 BUM KOOOP1 KSTL\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS NOCHI SSO J104 ONM ACH TOTOE ICT BUM KAYLA3 KSTL\" readonly>";
			result += "<br/>TM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX PXR J65 TMACK J104 ONM ACH TOTOE ICT BUM KAYLA3 KSTL\" readonly>";
			break;
		case "STS": // PHX-STS // Updated 05-30-2025
			result += "<!-- Updated 05-16-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX KEENS3 HRRBR J212 DECAS J65 LANDO RGOOD VNYRD1 KSTS\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX MRBIL1 GCN BCE ILC J80 OAL YOSEM VNYRD1 KSTS\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX FYRBD1 MOHAK J2 IPL SXC IKAYE RGOOD VNYRD1 KSTS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-30-2025
			break;
		case "TPA": // PHX-TPA // Updated 09-11-2025
			result += "<!-- Updated 09-11-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J2 FST J86 LEV Y280 CHRGE RAYZZ3 KTPA\" readonly>";
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J2 FST J86 IAH J2 DEFUN MAATY5 KTPA\" readonly>"; // CDR EC
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KPHX BROAK1 MAXXO TCC J6 LIT J14 VUZ LGC AMG BAAMF DADES2 KTPA\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 FST J138 SAT PSX PEGLG ALGAE DTSRJ CIGAR RAYZZ3 KTPA\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J86 FST KH87A CRP PEGLG ALGAE DTSRJ CIGAR RAYZZ3 KTPA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-11-2025
			result += "<!-- Verified with ATCSCC on 09-11-2025 -->";
			result += "<br/>BR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX BROAK1 MAXXO CNX J15 JCT J86 IAH J2 DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/>EC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX ECLPS1 PHASE ELP J2 FST J86 IAH J2 DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/>FR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX FORPE1 SJN J74 TXO J72 SPS J58 AEX J50 CEW J2 DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX MRBIL1 JARPA FTI TXO J72 SPS J58 AEX J50 CEW J2 DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/>ST<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KPHX STRRM1 TUS J2 ELP J2 FST J86 IAH J2 DEFUN MAATY5 KTPA\" readonly>";
			break;
		case "TUL": // PHX-TUL // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX BROAK1 MAXXO CNX J74 IRW KTUL\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KPHX ECLPS1 PHASE ELP J50 ABI GIMLE IRW KTUL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX SJN9 ABQ PNH IRW KTUL\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "TUS": // PHX-TUS // Updated 07-18-2025
			result += "<!-- Updated 07-18-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL170):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX STRRM1 STRRM BASER DINGO DINGO6 KTUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KPHX TFD4 TFD DINGO6 KTUS\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-18-2025
			break;
	}
	return result;
} // End of PHX
