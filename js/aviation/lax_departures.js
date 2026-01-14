lax_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
	switch(arvl) {
		case "ABQ": // LAX-ABQ // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX PNDAH2 TCATE IPL J2 GBN J18 SJN TMALE BRRTO1 KABQ\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J76 TBC ROSEI LOWBO3 KABQ\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "ATL": // LAX-ATL // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 IRW FSM MEMFS HUTCC KNSAW RUSSA GLAVN2 KATL\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS J146 DVC KD48W ICT SGF BNA NEWBB IHAVE MTHEW CHPPR1 KATL\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"LAX DOTSS2 CNERY BLH J169 TFD J50 SSO EWM J66 FUZ Q184 MERDN ORRKK GNDLF3 ATL\" readonly>";
			result += "<br/><br/>North via STL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS J146 DVC J197 HGO HLC J80 MCI J24 STL J45 BNA NEWBB IHAVE MTHEW CHPPR1 KATL\" readonly>";
			result += "<br/>South via SAT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J50 ELP J2 FST J138 SAT Q24 LSU SHYRE HOBTT3 KATL\" readonly>"; // CDR KT
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG INW ZUN ACH PNH IRW FSM MEM J41 VUZ KATL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 12-11-2025
			result += "<!-- Verified with ATCSCC on 12-11-2025 -->";
			result += "<br/>EW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO EWM J66 FUZ Q184 MERDN ORRKK HOBTT3 KATL\" readonly>";
			result += "<br/>KT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J50 ELP J2 FST J138 SAT Q24 LSU SHYRE HOBTT3 KATL\" readonly>";
			result += "<br/>WR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEM HUTCC KNSAW RUSSA GLAVN2 KATL\" readonly>";
			break;
		case "AUS": // LAX-AUS // Updated 01-10-2025
			result += "<!-- Updated 01-10-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH TFD SSO ELP FST DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ J72 TXO BOBVE ACT BLEWE5 KAUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 IPL J2 GBN J50 ACT BLEWE5 KAUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>AU (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF OZMOS JCT DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/>ME (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP FST DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/>SE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL J2 GBN J50 ELP FST DILLO LAIKS4 KAUS\" readonly>";
			break;
		case "BNA": // LAX-BNA // Updated 06-14-2025
			result += "<!-- Updated 06-14-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-14-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J6 LIT MEMFS CHSNE3 KBNA\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J96 GCK J110 BUM J112 FAM GUMMA RYYMN2 KBNA\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 FUZ J42 TXK MEMFS CHSNE3 KBNA\" readonly>";
			result += "<br/><br/>South via LCH<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J22 MEI VUZ KISTS CHSNE3 KBNA\" readonly>";
			result += "<br/>North via HYS<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS J146 DVC J197 HGO J24 HYS BUM YACKS RYYMN2 KBNA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM J78 IRW FSM MEM KBNA\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-14-2025
			break;
		case "BOS": // LAX-BOS // Updated 10-30-2025
			result += "<!-- Updated 10-30-2025 P -->";			
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 10-30-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS BAWER Q114 ZAKRY FQF ZIRKL Q136 DIYAP MZV JOT J146 GIJ J554 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			// KLAX ORCKA5 LAS BAWER Q114 ZAKRY DVV J60 JOT J146 GIJ J554 JHW Q82 PONCT JFUND2 KBOS
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER Q70 SAKES EKR CYS J148 MCW J16 BAE J68 FNT Q818 DERLO Q935 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ J131 TXK Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/><br/>South via VUZ<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ ELD SQS HRISN Q30 VLKNN RMG ODF SPA Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";	
			result += "<br/><br/>BAE 1: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP RWF J34 BAE HOCKE Q816 KELTI NABOR PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>BNA: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>GRB: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB HOCKE Q816 KELTI HANKK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>IIU: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>MGM 3: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q22 RBV JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>VHP: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/><br/><b>Playbooks:</b>";
			result += "<br/>BAE 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP RWF J34 BAE HOCKE Q816 KELTI NABOR PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>BAE 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE HOCKE Q816 KELTI NABOR PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>CAN AGLIN EAST 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY ISN GFK AGLIN BURWA TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN AGLIN EAST 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY ISN GFK AGLIN POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN AGLIN EAST 3<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY ISN GFK AGLIN CHICA JUNIS POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN GERTY EAST 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY GGW HML GERTY BURWA TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN GERTY EAST 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY GGW HML GERTY POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN GERTY EAST 3<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY GGW HML GERTY CHICA JUNIS POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN NOTAP EAST 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW MOTLY KINGZ NOTAP TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN NOTAP EAST 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW MOTLY KINGZ NOTAP KAPUX TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN NOTAP EAST 3<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW MOTLY KINGZ NOTAP RADEN BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN RUBKI EAST 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO AHPAH HANKK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>CAN RUBKI EAST 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN RUBKI EAST 3<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI KENLU TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN RUBKI EAST 4<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO OLABA SSENA BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN STNRD EAST 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY MLS BOWIS FENOK STNRD KAPUX TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN STNRD EAST 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY MLS BOWIS FENOK STNRD POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN ULUTO EAST 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP TTAIL NIWRA VURLY ULUTO KAPUX TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN ULUTO EAST 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP TTAIL NIWRA VURLY ULUTO POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN ULUTO EAST 3<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY MLS WILTN NIWRA VURLY ULUTO KAPUX TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CAN ULUTO EAST 4<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY MLS WILTN NIWRA VURLY ULUTO POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CEW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>GRB<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB HOCKE Q816 KELTI HANKK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>HITMN<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>IIU<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>JOT 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE EED J236 TBC RSK DVV J60 JOT ELX SVM J70 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>JOT 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DVC PUB J64 HLC PWE LMN MZV JOT ELX SVM J70 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>LEV EAST 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY SLENA PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>LEV EAST 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY SLENA PSX HOODO BOWFN LEV SJI Q56 CATLN MGMRY NOKIE TWINS BLAAN Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>MCI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>MGM 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ Q184 ARNNY FRDDO TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>MGM 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>MGM 3<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>OBK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ J94 FNT Q818 WOZEE Q935 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>PXV<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 PXV ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>SPI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>VHP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>VLKNN<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J100 LAS J146 GIJ J554 JHW ALB T608 REVER KBOS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 10-30-2025
			result += "<!-- Verified with ATCSCC on 10-30-2025 -->";
			result += "<br/>AD<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL MXL AMUDI IMEXA AGNID OBGIY SLENA PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>AM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL MXL AMUDI IMEXA JALIL VOKOM MRF JCT J86 IAH J2 CEW ALLMA TEEEM Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>B1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP RWF J34 BAE HOCKE Q816 KELTI NABOR PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>B2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE HOCKE Q816 KELTI NABOR PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>BK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ J94 FNT Q818 WOZEE Q935 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>BN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>CA<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW MOTLY KINGZ NOTAP RADEN BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY GGW HML GERTY CHICA JUNIS POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>CF<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY MLS BOWIS FENOK STNRD POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CG<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY GGW HML GERTY POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY GGW HML GERTY BURWA TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CJ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY ISN GFK AGLIN CHICA JUNIS POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI KENLU TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CL<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP TTAIL NIWRA VURLY ULUTO KAPUX TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CM<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY ISN GFK AGLIN BURWA TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW MOTLY KINGZ NOTAP TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY MLS WILTN NIWRA VURLY ULUTO POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CQ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY ISN GFK AGLIN POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO AHPAH HANKK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>CS<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY MLS BOWIS FENOK STNRD KAPUX TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW MOTLY KINGZ NOTAP KAPUX TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER BOY MLS WILTN NIWRA VURLY ULUTO KAPUX TULEG WAYGO GFALS LOONN ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP TTAIL NIWRA VURLY ULUTO POLTY BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>CY<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO OLABA SSENA BUGSY TEMPR ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>GR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB HOCKE Q816 KELTI HANKK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE EED J236 TBC RSK DVV J60 JOT ELX SVM J70 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>J2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DVC PUB J64 HLC PWE LMN MZV JOT ELX SVM J70 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>L1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY SLENA PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>L2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY SLENA PSX HOODO BOWFN LEV SJI Q56 CATLN MGMRY NOKIE TWINS BLAAN Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>LV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>M1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ Q184 ARNNY FRDDO TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>M2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>M3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>MC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>PX<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 PXV ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>SP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>VH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>VU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>VY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J50 GBN TUS VYLLA AGNID OBGIY SLENA PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>XC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO CUS AGNID OBGIY SLENA PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			break;
		case "CLT": // LAX-CLT // Updated 12-26-2025
			result += "<!-- Updated 12-26-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 12-26-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE J134 DRK J6 PNH IRW FSM ARG J46 BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS J146 DVC PUB GCK J28 ICT SGF BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 FUZ ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/><br/>North via STL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS J146 DVC J197 HGO HLC J80 MCI J24 STL PXV KI45O SKYWA FILPZ4 KCLT\" readonly>";
			result += "<br/>South via IAH<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J65 KOFFA J169 TFD J50 ELP J2 JCT J86 IAH LCH J138 SJI CEW ALLMA ISUZO CHECR STOCR4 KCLT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX TRM PKE J78 IRW J98 TUL J46 VXV LIINN3 KCLT\" readonly>";
			result += "<br/><br/>CLT NO FILPZ<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX CNERY BLH J169 TFD J50 SSO EWM J66 FUZ UIM ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/>CLT NO JONZE<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J6 IRW FSM MEMFS Q34 HITMN TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 12-26-2025
			result += "<!-- Verified with ATCSCC on 12-26-2025 -->";
			result += "<br/>NF<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CNERY BLH J169 TFD J50 SSO EWM J66 FUZ UIM ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>"; // CLT NO FILPZ
			result += "<br/>NJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J6 IRW FSM MEMFS Q34 HITMN TAZZA FILPZ4 KCLT\" readonly>"; // CLT NO JONZE
			break;
		case "CMH": // LAX-CMH // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J96 SLN J24 MCI J80 VHP JADUB DUBLN1 KCMH\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF FSD MCW OBK FWA BRYEN DUBLN1 KCMH\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE J74 SJN TCC J78 IRW ARG PXV GVR FISUL JAKTZ2 KCMH\" readonly>";
			result += "<br/>South via EWM: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J42 TXK LIT J131 PXV GVR FISUL JAKTZ2 KCMH\" readonly>";
			result += "<br/><br/>JOT 2: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS J146 DVC PUB J64 FWA BRYEN DUBLN1 KCMH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J146 DVC J197 HGO J24 MCI J80 VHP KCMH\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "DCA": // LAX-DCA // Updated 05-10-2025
			result += "<!-- Updated 05-10-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 05-10-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR TRUPS5 KDCA\" readonly>"; // CDR LV
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD APE J30 LUISE FRDMM6 KDCA\" readonly>"; // CDR VH
			result += "<br/>South via MEM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 SITTR TRUPS5 KDCA\" readonly>"; // CDR BN
			result += "<br/><br/>North via JOT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS J146 DVC J197 HGO HLC Q90 WELKY MZV J87 JOT J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>"; // CDR J2
			result += "<br/>North via ONL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER HVE LARVE EKR BFF J94 ONL FOD DBQ J100 OBK GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>"; // CDR BK
			result += "<br/>South via CEW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q109 PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>"; // CDR CE
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J100 LAS J146 GLD PWE LMN J64 FWA J178 APE AIR J34 BUCKO NUMMY3 KDCA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-10-2025
			result += "<!-- Verified with ATCSCC on 05-10-2025 -->";
			result += "<br/>AD<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL MXL AMUDI IMEXA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>AM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL MXL AMUDI IMEXA JALIL VOKOM MRF JCT J86 IAH J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>B1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP RWF J34 BAE GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>B2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>BK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ J100 OBK GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>BN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>CE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q109 PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>GR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB FNT DJB J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE EED J236 TBC RSK DVV J60 JOT J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>J2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DVC PUB J64 HLC PWE LMN MZV JOT J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>L1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>L2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI Q56 CATLN FRDDO NOKIE TWINS PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>LV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>M1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ Q184 ARNNY FRDDO KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>M2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>M3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>MC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 STL ENL IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>PX<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>SP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 SPI IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>VH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP APE J30 LUISE FRDMM6 KDCA\" readonly>";
			result += "<br/>VU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ UIM ELD IZAAC Q30 VLKNN THRSR KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>VY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J50 GBN TUS VYLLA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>XC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO CUS AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			break;
		case "DFW": // LAX-DFW // Updated 02-20-2025
			result += "<!-- Updated 02-20-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 INK GEEKY SOCKK4 KDFW\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J74 TXO TURKI VKTRY2 KDFW\" readonly>";
			result += "<br/>GLADDEN SUA<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ J72 TXO TURKI VKTRY2 KDFW\" readonly>";
			result += "<br/><br/>North via RSK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS TBC J64 RSK CIM PNH MDANO VKTRY2 KDFW\" readonly>";
			result += "<br/><b>For ZAB Avoid: ...RSK J110 GCK END IBAKE VKTRY2 KDFW<\/b>";
			result += "<br/><br/>DFW BGTOE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP FST JCT GUTZZ BOOVE7 KDFW\" readonly>";
			result += "<br/>DFW BOOVE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ J72 TXO TURKI VKTRY2 KDFW\" readonly>";
			result += "<br/>DFW VKTRY<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>DFW WEST<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH TFD J50 ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
			result += "<br/>MOJAVE EAST<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>SPRINGS EAST<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL J2 GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM PKE J78 ABQ TXO UKW8 KDFW\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-20-2025
			result += "<!-- Verified with ATCSCC on 02-20-2025 -->";
			result += "<br/>DG<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>JE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>JU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP FST JCT GUTZZ BOOVE7 KDFW\" readonly>";
			result += "<br/>ME<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>SE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL J2 GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>TN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH TFD J50 ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
			result += "<br/>UK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ J72 TXO TURKI VKTRY2 KDFW\" readonly>";
			break;
		case "DEN": // LAX-DEN // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 DICEE BUMMP SSKII4 KDEN\" readonly>";
			result += "<br/><br/>Night: <input style=\"width:75%\"; value=\"KLAX OSHNN1 BEALE J146 DICEE BUMMP SSKII4 KDEN\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX LAXX1 TRM AVRRY EED J236 TBC SHNPS TBARR4 KDEN\" readonly>";
			result += "<br/>South via ABQ: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ J13 ALS LARKS3 KDEN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J146 HBU POWDR1 KDEN\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "ELP": // LAX-ELP // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ITEMM TEEES MOLLY5 KELP\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J74 NABOB Q13 VERNO GREBE MOLLY5 KELP\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "IAH": // LAX-IAH // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP Q4 PEQ DIESL MSCOT4 KIAH\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ J72 TXO MQP DRLLR5 KIAH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM J169 BLH J50 ELP FST J138 SAT DUUUK3 KIAH\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>EX (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP FST J138 SAT HTOWN3 KIAH\" readonly>";
			result += "<br/>GL (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP Q4 FUSCO DIESL MSCOT4 KIAH\" readonly>";
			result += "<br/>ME (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP FST BUBAY DIESL MSCOT4 KIAH\" readonly>";
			result += "<br/>PL (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL J2 FST BUBAY DIESL MSCOT4 KIAH\" readonly>";
			result += "<br/>SE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL J2 GBN J50 ELP FST BUBAY DIESL MSCOT4 KIAH\" readonly>";
			result += "<br/>WE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP FST J138 SAT LAMMY LINKK LINKK1 KIAH\" readonly>";
			break;
		case "IND": // LAX-IND // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J96 SLN J24 MCI J80 JAAVE KOLTS2 KIND\" readonly>";
			result += "<br/><br/>Night: <input style=\"width:75%\"; value=\"KLAX OSHNN1 BEALE BAWER Q70 SAKES J100 EKR BFF J94 ONL IOW WORDY KIND\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J96 GUP J102 ALS GLD LNK BDF ELANR JAKKS2 KIND\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J74 SJN TCC J78 IRW RZC FAM WIDAM SMUKE3 KIND\" readonly>";
			result += "<br/>South via EWM: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J42 TXK LIT J131 PXV RACYR6 KIND\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM J78 PXV RACYR6 KIND\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "JAC": // LAX-JAC // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J9 LAS DTA MLD KJAC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J9 DBS KJAC\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "JFK": // LAX-JFK // Updated 12-18-2025
			result += "<!-- Updated 12-18-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 09-23-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J134 CIM GCK J18 MZV JOT GIJ J554 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER Q114 LEONG IOW J146 GIJ J554 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 SITTR Q108 SIE CAMRN5 KJFK\" readonly>"; // CDR BN
			// KLAX DOTSS2 CLEEE PKE DRK J78 IRW FSM ARG BWG ZIEBR Q108 SIE CAMRN5 KJFK
			result += "<br/><br/>North via BAE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL J148 MCW J16 BAE J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>South via VUZ<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ UIM ELD IZAAC Q30 VLKNN THRSR HRTWL Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // CDR VU
			result += "<br/><br/>BAE<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP RWF J34 BAE J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>BNA<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 SITTR Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>CEW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>GRB<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB HOCKE Q935 HANKK Q140 MEMMS PUCKY1 KJFK\" readonly>";
			result += "<br/>IIU<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>JOT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE EED J236 TBC RSK DVV J60 JOT LOGGR SVM J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>MCI<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>MGM<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ Q184 ARNNY FRDDO HRTWL Q64 TYI ORF SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>PXV<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 PXV ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>ROD<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM ARG PXV ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>SPI<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>VHP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>VUZ<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ UIM ELD IZAAC Q30 VLKNN THRSR HRTWL Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J100 LAS J146 GIJ J554 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/><br/><b>Playbooks:</b>";
			result += "<br/>BAE 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP RWF J34 BAE J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>BAE 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>CAN NOTAP EAST 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW MOTLY KINGZ NOTAP TULEG PRNCE YODAA PUCKY1 KJFK\" readonly>";
			result += "<br/>CAN NOTAP EAST 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW MOTLY KINGZ NOTAP KAPUX TULEG PRNCE YODAA PUCKY1 KJFK\" readonly>";
			result += "<br/>CAN NOTAP EAST 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW MOTLY KINGZ NOTAP RADEN BUGSY PONCT PUCKY1 KJFK\" readonly>";
			result += "<br/>CAN RUBKI EAST 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO AHPAH HANKK Q140 MEMMS PUCKY1 KJFK\" readonly>";
			result += "<br/>CAN RUBKI EAST 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO TULEG PRNCE YODAA PUCKY1 KJFK\" readonly>";
			result += "<br/>CAN RUBKI EAST 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI KENLU TULEG PRNCE YODAA PUCKY1 KJFK\" readonly>";
			result += "<br/>CAN RUBKI EAST 4<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO OLABA SSENA BUGSY PONCT PUCKY1 KJFK\" readonly>";
			result += "<br/>CEW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>GRB<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB HOCKE Q935 HANKK Q140 MEMMS PUCKY1 KJFK\" readonly>";
			result += "<br/>HITMN<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 SITTR Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>IIU<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>JOT 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE EED J236 TBC RSK DVV J60 JOT LOGGR SVM J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>JOT 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DVC PUB J64 HLC PWE LMN MZV JOT LOGGR SVM J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>LEV EAST 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY SLENA PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>LEV EAST 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY SLENA PSX HOODO BOWFN LEV SJI Q56 CATLN FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>MCI<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>MGM 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ Q184 ARNNY FRDDO HRTWL Q64 TYI ORF SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>MGM 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>MGM 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>OBK<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ J94 PMM J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>PXV<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 PXV ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>ROD<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM ARG PXV ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>SPI<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>VHP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>VLKNN<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ UIM ELD IZAAC Q30 VLKNN THRSR HRTWL Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 12-18-2025
			result += "<!-- Verified with ATCSCC on 12-18-2025 -->";
			result += "<br/>AD<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL MXL AMUDI IMEXA AGNID OBGIY SLENA PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // 
			result += "<br/>AM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL MXL AMUDI IMEXA JALIL VOKOM MRF JCT J86 IAH J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // 
			result += "<br/>B1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP RWF J34 BAE J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // BAE 1
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // BAE 2
			result += "<br/>BK<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ J94 PMM J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // OBK
			result += "<br/>BN<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 SITTR Q108 SIE CAMRN5 KJFK\" readonly>"; // HITMN
			result += "<br/>CA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW MOTLY KINGZ NOTAP RADEN BUGSY PONCT PUCKY1 KJFK\" readonly>"; // CAN NOTAP EAST 3
			result += "<br/>CE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // CEW
			result += "<br/>CK<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI KENLU TULEG PRNCE YODAA PUCKY1 KJFK\" readonly>"; // CAN RUBKI EAST 3
			result += "<br/>CN<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW MOTLY KINGZ NOTAP TULEG PRNCE YODAA PUCKY1 KJFK\" readonly>"; // CAN NOTAP EAST 1
			result += "<br/>CR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO AHPAH HANKK Q140 MEMMS PUCKY1 KJFK\" readonly>"; // CAN RUBKI EAST 1
			result += "<br/>CT<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW MOTLY KINGZ NOTAP KAPUX TULEG PRNCE YODAA PUCKY1 KJFK\" readonly>"; // CAN NOTAP EAST 2
			result += "<br/>CU<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO TULEG PRNCE YODAA PUCKY1 KJFK\" readonly>"; // CAN RUBKI EAST 2
			result += "<br/>CY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP LORAH DAYYY RUBKI SIKBO OLABA SSENA BUGSY PONCT PUCKY1 KJFK\" readonly>"; // CAN RUBKI EAST 4
			result += "<br/>GR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB HOCKE Q935 HANKK Q140 MEMMS PUCKY1 KJFK\" readonly>"; // GRB
			result += "<br/>J1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE EED J236 TBC RSK DVV J60 JOT LOGGR SVM J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // JOT 1
			result += "<br/>J2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DVC PUB J64 HLC PWE LMN MZV JOT LOGGR SVM J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // JOT 2
			result += "<br/>L1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY SLENA PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // LEV EAST 1
			result += "<br/>L2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY SLENA PSX HOODO BOWFN LEV SJI Q56 CATLN FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // LEV EAST 2
			result += "<br/>LV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SIE CAMRN5 KJFK\" readonly>"; // IIU
			result += "<br/>M1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ Q184 ARNNY FRDDO HRTWL Q64 TYI ORF SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // MGM 1
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // MGM 2
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // MGM 3
			result += "<br/>MC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // MCI
			result += "<br/>MR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH PXR J18 ABQ J78 IIU Q108 SIE CAMRN5 KJFK\" readonly>"; // 
			result += "<br/>PX<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 PXV ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // PXV
			result += "<br/>RD<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM ARG PXV ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // ROD
			result += "<br/>SP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // SPI
			result += "<br/>VH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // VHP
			result += "<br/>VU<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ UIM ELD IZAAC Q30 VLKNN THRSR HRTWL Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // VLKNN
			result += "<br/>VY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J50 GBN TUS VYLLA AGNID OBGIY SLENA PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // 
			result += "<br/>W1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER SNY J114 GEP DLL HASTE DAFLU J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // 
			result += "<br/>W2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER SNY J114 FSD MSP DLL HASTE DAFLU J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // 
			result += "<br/>W3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF FOD DBQ KG75M DAFLU J70 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // 
			result += "<br/>W4<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM SLN J24 MCI J80 SPI VHP ROD DJB JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // 
			result += "<br/>W5<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J134 CIM TOTOE ICT BUM KK54K KI57O ROD DJB JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // 
			result += "<br/>W6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J78 PXV ROD DJB JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // 
			result += "<br/>XC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO CUS AGNID OBGIY SLENA PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // 
			break;
		case "LAS": // LAX-LAS // Updated 01-10-2026
			result += "<!-- Updated 01-10-2026 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX ORCKA5 MISEN RNDRZ4 KLAS\" readonly>";
			result += "<br/><b style=\"color:orange\">Max FL290 for all flights from SCT Tracon to L30, see <a href=\"https://laartcc.org/document/required-internal-routes\" target=\"_blank\">ZLA Required Routes<\/a> Section 5.4<\/b>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG LARKK1 KLAS\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 01-10-2026
			break;
		case "MCO": // LAX-MCO // Updated 11-24-2025
			result += "<!-- Updated 11-24-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 05-07-2025
			result += "<br/><br/>OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J2 JCT J86 LEV Y280 CHRGE PRICY4 KMCO\" readonly>";
			result += "<br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J2 JCT LFK J50 CEW J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/><br/>North via TXO<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ TXO ABI J50 CEW J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/>North via LIT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE J78 PNH J14 VUZ LGC ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J2 FST J138 SAT PSX PEGLG ALGAE DTSRJ CIGAR PRICY4 KMCO\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J2 FST KH87A CRP PEGLG ALGAE DTSRJ CIGAR PRICY4 KMCO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM PKE J78 ABQ J72 SPS TXK ELD MEI OTK LEESE3 KMCO\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 11-24-2025
			break;
		case "MDT": // LAX-MDT // Updated 10-22-2025
			result += "<!-- Updated 05-02-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 10-22-2025
			result += "<br/><br/>NRP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD J152 HAR KMDT\" readonly>";
			result += "<br/><br/>ORCKA: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 WOOST J34 DJB EWC JST J152 HAR KMDT\" readonly>";
			result += "<br/>OSHNN: <input style=\"width:75%\"; value=\"KLAX OSHNN1 BEALE J146 WOOST J34 DJB EWC JST J152 HAR KMDT\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 SITTR ESL BAMMY T299 HAR KMDT\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ J100 OBK GIJ J146 CXR EWC JST J152 HAR KMDT\" readonly>";
			// result += "<br/><br/>BAE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE J34 DJB EWC JST J152 HAR KMDT\" readonly>";
			// result += "<br/>JOT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE EED J236 TBC RSK DVV J60 JOT J146 WOOST J34 DJB EWC JST J152 HAR KMDT\" readonly>";
			result += "<br/><br/>SGF<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM Q176 TOTOE SGF J98 FAM J78 IIU Q108 SITTR ESL BAMMY T299 HAR KMDT\" readonly>";
			result += "<br/>SPI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD J152 HAR KMDT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J100 OBK J584 CRL J34 DJB EWC JST J152 HAR KMDT\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 10-22-2025
			break;
		case "MIA": // LAX-MIA // Updated 06-03-2025
			result += "<!-- Updated 06-03-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 05-02-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J65 KOFFA J169 TFD J50 ELP J2 JCT J86 LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J65 KOFFA J169 TFD J50 INK KF12A ACT J50 CEW J2 DEFUN FROGZ4 KMIA\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ J72 TXO FUZ J58 HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 FST J138 SAT MUSYL KELPP ALGAE MINOW M580 MARCI FROGZ4 KMIA\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 FST KH87A CRP PEGLG ALGAE MINOW M580 MARCI FROGZ4 KMIA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed as of 05-02-2025
			break;
		case "MSY": // LAX-MSY // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH AWDAD1 KMSY\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE EED J8 GUP FTI EZEEE IRW MLC ELD NTCHZ TRSSH1 KMSY\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM J169 TFD J50 ELP J183 PEQ JCT CLL DAS LCH AWDAD1 KMSY\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "OKC": // LAX-OKC // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J78 PNH BROMA GHOST3 KOKC\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J50 SSO ELP INK TURKI BROMA GHOST3 KOKC\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J76 TBC J64 RSK J110 GCK J28 ICT BELMN MURAH3 KOKC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "OMA": // LAX-OMA // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 HBU J10 FQF J128 HCT GRI HOWRY3 KOMA\" readonly>";
			result += "<br/><br/>Night: <input style=\"width:75%\"; value=\"KLAX OSHNN1 BEALE BAWER HVE J60 HCT GRI HOWRY3 KOMA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP J102 ALS PUB J64 HLC HTHWY TIMMO1 KOMA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "ORD": // LAX-ORD // Updated 04-29-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-29-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-29-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J96 IRK SHAIN2 KORD\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS BAWER HVE LARVE EKR BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J96 DRK J78 IRW TUL EOS WELTS TRTLL6 KORD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J9 LAS J146 GLD PWE IRK BDF8 KORD\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-29-2025
			result += "<!-- Verified with ATCSCC on 04-29-2025 -->";
			result += "<br/>F1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>";
			result += "<br/>F2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
			result += "<br/>JB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL J114 GEP DLL MSN JAKSA MOOPS FYTTE FYTTE7 KORD\" readonly>";
			result += "<br/>JV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 IRK BENKY6 KORD\" readonly>";
			result += "<br/>JW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL J114 GEP TVC WYNDE3 KORD\" readonly>";
			break;
		case "PDX": // LAX-PDX // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LADYJ4 CSTRO NTELL SHIMR GALLO TMBRS3 KPDX\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KLAX SUMMR2 SCTRR SNS SPNSR TMBRS3 KPDX\" readonly>";
			result += "<br/>East: <input style=\"width:75%\"; value=\"KLAX GARDY4 BEALE Q842 WINEN Q35 IMB JOTBA HHOOD5 KPDX\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>S1: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LADYJ4 CSTRO NURAY SAC RBL SPNSR TMBRS3 KPDX\" readonly>";
			result += "<br/>S2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LADYJ4 CSTRO NURAY LIN J189 LMT GALLO TMBRS3 KPDX\" readonly>";
			break;
		case "PHL": // LAX-PHL // Updated 05-02-2025
			result += "<!-- Updated 05-02-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 05-02-2025
			result += "<br/><br/>NRP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>"; // CDR VH
			result += "<br/><br/>ORCKA: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>OSHNN: <input style=\"width:75%\"; value=\"KLAX OSHNN1 BEALE J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 GVE PAATS4 KPHL\" readonly>"; // CDR BN
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ J100 OBK GIJ J146 CXR EWC JST BOJID4 KPHL\" readonly>"; // Based on CDR BK
			result += "<br/><br/>North via DLH: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J158 ABR DLH J140 SSM BURWA TULEG DNY SPUDS7 KPHL\" readonly>";
			result += "<br/>South via LCH<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>"; // CDR CE
			result += "<br/><br/>BAE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE J34 DJB EWC JST BOJID4 KPHL\" readonly>"; // CDR B2
			result += "<br/>JOT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE EED J236 TBC RSK DVV J60 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>"; // CDR J1
			result += "<br/>SGF<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM Q176 TOTOE SGF J98 FAM J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>SPI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>"; // CDR SP
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG EED J236 TBC J128 HBU J146 LNK J60 HAGUD J211 JST BOJID4 KPHL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-02-2025
			result += "<!-- Verified with ATCSCC on 05-02-2025 -->";
			result += "<br/>AD<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL MXL AMUDI IMEXA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>AM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL MXL AMUDI IMEXA JALIL VOKOM MRF JCT J86 IAH J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>B1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP RWF J34 DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>B2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE J34 DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>BK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ J100 OBK GIJ J146 CXR EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>BN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>CE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>GR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB FNT DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE EED J236 TBC RSK DVV J60 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>J2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DVC PUB J64 HLC PWE LMN MZV JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>L1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>L2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>LV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>M1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ Q184 ARNNY FRDDO TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>M2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>M3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>MC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>PX<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM ARG PXV ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>SP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>VH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>VU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>VY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J50 GBN TUS VYLLA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>XC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO CUS AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			break;
		case "PHX": // LAX-PHX // Updated 06-23-2025
			result += "<!-- Updated 06-23-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL270/290):</b>";
			result += "<br/><input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH HYDRR1 KPHX\" readonly>";
			// result += "<br/><br/>Night: <input style=\"width:75%\"; value=\"KLAX OSHNN1 BEALE PRFUM WOTRO BRUSR1 KPHX\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL J2 HOGGZ HYDRR1 KPHX\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS PRFUM WOTRO BRUSR1 KPHX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM BLH ARLIN4 KPHX\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-23-2025
			result += "<!-- Verified with ATCSCC on 06-23-2025 -->";
			result += "<br/>ME<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH HYDRR1 KPHX\" readonly>";
			result += "<br/>SE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL J2 HOGGZ HYDRR1 KPHX\" readonly>";
			break;
		case "PIT": // LAX-PIT // Updated 10-11-2025
			result += "<!-- Updated 10-11-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J96 CIM Q176 STL J24 VHP APE CTW FEWGA7 KPIT\" readonly>";
			result += "<br/></br>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR CYS J148 ONL Q122 VIGGR DBQ J100 OBK J584 UNBAR IDEAS DJB GRIVY JESEY5 KPIT\" readonly>"; // Based on CDR BK
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM ARG BWG HNN FEWGA7 KPIT\" readonly>";
			result += "<br/></br>North via ABR<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB FNT TAMDE GRIVY JESEY5 KPIT\" readonly>"; // CDR GR
			result += "<br/>South via ELP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 ABI BYP LIT BWG HNN FEWGA7 KPIT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 WOOST J34 DJB GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 10-11-2025
			result += "<!-- Verified with ATCSCC on 10-11-2025 -->";
			result += "<br/>B1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP RWF J34 CRL TAMDE GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>B2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE J34 CRL TAMDE GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>BK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ J100 OBK GIJ J146 IDEAS TAMDE GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>GR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB FNT TAMDE GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE EED J236 TBC RSK DVV J60 JOT J146 WOOST J34 DJB GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>J2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DVC PUB J64 HLC PWE LMN MZV JOT J146 IDEAS TAMDE GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>MC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP APE CTW FEWGA7 KPIT\" readonly>";
			result += "<br/>PX<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>SP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP APE CTW FEWGA7 KPIT\" readonly>";
			result += "<br/>VH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP APE CTW FEWGA7 KPIT\" readonly>";
			break;
		case "PSP": // LAX-PSP // Updated 09-22-2025
			result += "<!-- Updated 09-22-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM KPSP\" readonly>";
			result += "<br/><b>For all routing restrictions, see <a href=\"https://laartcc.org/document/required-internal-routes\" target=\"_blank\">ZLA Required Routes<\/a> Section 5.4<\/b>";
			// result += "<br/><br/><b>CDRS</b>"; // TODDO
			break;
		case "RDU": // LAX-RDU // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J96 GUP FTI EZEEE TUL J46 BNA GLAZR MXEEN KPASS ALDAN4 KRDU\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 DVC J197 HGO J24 STL J8 IIU J526 BKW FRIKY ALDAN4 KRDU\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ J42 TXK J52 SUTTN IZAAC Q30 VLKNN THRSR IRQ PYRES DMSTR2 KRDU\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "SAT": // LAX-SAT // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J2 FST MOPPP DNKIN2 KSAT\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ J72 TXO GTH PRTZY POPPO2 KSAT\" readonly>";
			result += "<br/>NE Arrival: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ J72 TXO BOBVE NILBE QERVO3 KSAT\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>AU: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF MOPPP DNKIN2 KSAT\" readonly>";
			result += "<br/>ME: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J2 FST MOPPP DNKIN2 KSAT\" readonly>";
			result += "<br/>SE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL J2 GBN J50 ELP J2 FST MOPPP DNKIN2 KSAT\" readonly>";
			break;
		case "SEA": // LAX-SEA // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LADYJ4 CSTRO SHIMR LKV HAWKZ8 KSEA\" readonly>";
			result += "<br/><br/>Night: <input style=\"width:75%\"; value=\"KLAX DARRK3 SCTRR SNS BTG HAWKZ8 KSEA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX VTU8 RZS J126 RBL J65 LMT J189 BTG OLM2 KSEA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>AR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX SUMMR2 SCTRR SNS RBL LMT BTG HAWKZ8 KSEA\" readonly>";
			result += "<br/>S1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LADYJ4 CSTRO NURAY SAC RBL LMT BTG HAWKZ8 KSEA\" readonly>";
			result += "<br/>S2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LADYJ4 CSTRO NURAY LIN J189 LMT BTG HAWKZ8 KSEA\" readonly>";
			break;
		case "SFO": // LAX-SFO // Updated 04-01-2025
			result += "<!-- Updated 04-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>SFO RWY28LR: <input style=\"width:75%\"; value=\"KLAX SUMMR2 STOKD SERFR SERFR4 KSFO\" readonly>";
			result += "<br/>SFO RWY19LR: <input style=\"width:75%\"; value=\"KLAX SUMMR2 STOKD SERFR WWAVS2 KSFO\" readonly>";
			result += "<br/>SFO RWY10LR: <input style=\"width:75%\"; value=\"KLAX SUMMR2 STOKD BSR BSR3 KSFO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX VTU8 RZS J501 BSR BSR3 KSFO\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-01-2025
			result += "<!-- Verified with ATCSCC on 04-01-2025 -->";
			result += "<br/>SF<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX IKAYE RZS SERFR SERFR4 KSFO\" readonly>";
			break;
		case "SMF": // LAX-SMF // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LADYJ4 CSTRO NURAY SUUTR4 KSMF\" readonly>";
			result += "<br/><br/>W Coast: <input style=\"width:75%\"; value=\"KLAX MUELR4 RZS OAK CCR CCR2 KSMF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX VTU8 RZS J88 SNS OAK CCR CCR2 KSMF\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "STL": // LAX-STL // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J96 CIM Q176 BUM KAYLA3 KSTL\" readonly>";
			result += "<br/><br/>Night: <input style=\"width:75%\"; value=\"KLAX OSHNN1 BEALE J146 DVC PUB HYS ANX KAYLA3 KSTL\" readonly>";0
			result += "<br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 HBU FQF J128 HCT J60 LNK LMN IRK LORLE3 KSTL\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 FUZ TXK LIT ARG BOOSH3 KSTL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM J236 EED FLG TBE BUM KOOOP1 KSTL\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		 case "TUL": // LAX-TUL // Updated 10-22-2025
			result += "<!-- Updated 10-22-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 10-22-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE J96 DRK J6 IRW OKM KTUL\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS J146 DVC PUB J28 GCK PER KTUL\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI ADM KTUL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // KLAX LAXX1 IPL J2 GBN J50 SSO J4 INK SPS ADM KTUL
			// result += "<br/><br/><b>Low Level</b>"; // KLAX MZB V66 MESCA T310 SSO V94 TQA IRW KTUL
			break;
		case "TUS": // LAX-TUS // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J50 GBN DINGO6 KTUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM J169 TFD DINGO6 KTUS\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "YVR": // LAX-YVR // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LADYJ4 CSTRO SHIMR LKV J5 SEA PAE GRIZZ7 CYVR\" readonly>";
			result += "<br/><br/>W Coast: <input style=\"width:75%\"; value=\"KLAX SUMMR2 SCTRR OAK PYE Q1 VIXOR ILAND6 CYVR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>S1: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LADYJ4 CSTRO NURAY SAC RBL SEA PAE CYVR\" readonly>";
			result += "<br/>S2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LADYJ4 CSTRO NURAY LIN J189 LMT SEA PAE CYVR\" readonly>";
			break;
	}
	return result;
}
