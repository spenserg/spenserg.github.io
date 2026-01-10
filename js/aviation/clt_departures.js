clt_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
	switch(arvl) {
		case "ABE": // CLT-ABE // Updated 02-20-2025
			result += "<!-- Updated 02-20-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA COURG REEES T299 DUMMR KABE\" readonly>"; // CDR RP
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-20-2025
			result += "<!-- Verified with ATCSCC on 02-20-2025 -->";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB JST MIP KABE\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII THEOO COURG REEES T299 DUMMR KABE\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA COURG REEES T299 DUMMR KABE\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ PSB MIP KABE\" readonly>";
			break;
		case "ABQ": // CLT-ABQ // Updated 10-22-2025
			result += "<!-- Updated 10-22-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 10-22-2025
			result += "<br/><br/>TUL: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB TAMEY SNDIA4 KABQ\" readonly>";
			result += "<br/>IRW: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY GQO KM30M MEM KM30I KOMMA J6 TCC KIIDD COLTR4 KABQ\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J8 STL Q176 TOTOE TAMEY SNDIA4 KABQ\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC TXK SPS J72 TXO RECKN COLTR4 KABQ\" readonly>";
			result += "<br/><br/>North via SPI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN VHP J80 MCI J24 SLN J102 ALS DATME SNDIA4 KABQ\" readonly>";
			result += "<br/>South via IAH<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q22 GUSTI IAH J86 JCT J15 INK FANGZ LZZRD4 KABQ\" readonly>";
			result += "<br/><br/>South/ZTL Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS CAE SAV AMG DEFUN J2 IAH J86 JCT J15 INK FANGZ LZZRD4 KABQ\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// KCLT BNA J46 TUL J78 TCC MIERA2 KABQ
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 10-22-2025
			break;
		case "ACY": // CLT-ACY // Updated 02-20-2025
			result += "<!-- Updated 02-20-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KILNS5 AUDII BBDOL KRABY BUKYY JAYBO SIE KACY\" readonly>"; // CDR RP
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL RDU LVL RIC SIE KACY\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-20-2025
			result += "<!-- Verified with ATCSCC on 02-20-2025 -->";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM SITTR Q34 GVE Q127 BUKYY JAYBO SIE KACY\" readonly>";
			result += "<br/>KR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK ASBUR DENNY MAULS Q34 GVE Q127 BUKYY JAYBO SIE KACY\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII BBDOL KRABY BUKYY JAYBO SIE KACY\" readonly>";
			result += "<br/>W1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 GVE Q127 BUKYY JAYBO SIE KACY\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ JST HAR DQO SIE KACY\" readonly>";
			break;
		case "AGS": // CLT-AGS // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT KAGS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY FLO CAE KAGS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-16-2025
			result += "<!-- Verified with ATCSCC on 02-16-2025 -->";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY KAGS\" readonly>";
			result += "<br/>LL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY FLO CAE KAGS\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT IRQ KAGS\" readonly>";
			break;
		case "ALB": // CLT-ALB // Updated 05-07-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-07-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND TRUDE V487 CANAN KALB\" readonly>"; // CDR RP
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD JHW Q82 LOXXE KALB\" readonly>"; // CDR JJ
			result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KCLT KILNS5 AUDII BBOBO DANGR Q22 LLUND TRUDE V487 CANAN KALB\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KCLT KILNS5 AUDII FAK BRV AML J220 MICAH RKA KALB\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-07-2025
			result += "<!-- Verified with ATCSCC on 05-07-2025 -->";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD JHW Q82 LOXXE KALB\" readonly>";
			result += "<br/>KR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS PSB CFB J190 RKA KALB\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND TRUDE V487 CANAN KALB\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ PSB CFB J190 RKA KALB\" readonly>";
			break;
		case "ATL": // CLT-ATL // Updated 12-11-2025
			result += "<!-- Updated 12-11-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 TNSLY LEAVI OZZZI2 KATL\" readonly>"; // CDR RP
			result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT SKWKR JJEDI4 KATL\" readonly>"; // CDR B1
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD PUPDG ONDRE1 KATL\" readonly>"; // CDR WE
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"CLT CLT3 HARAY ODF ONDRE ONDRE1 KATL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 12-11-2025
			result += "<!-- Verified with ATCSCC on 12-11-2025 -->";
			result += "<br/>B1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT SKWKR JJEDI4 KATL\" readonly>";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT SKWKR SITTH3 KATL\" readonly>";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN STRWY ONDRE1 KATL\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO BENBY PUPDG ONDRE1 KATL\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 TNSLY LEAVI OZZZI2 KATL\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD PUPDG ONDRE1 KATL\" readonly>";
			break;
		case "AUS": // CLT-AUS // Updated 02-21-2025
			result += "<!-- Updated 02-21-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ GARTS LCH WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY BRAYN GQO CRAMM Q32 ELD GGG WINDU SEWZY6 KAUS\" readonly>";
			result += "<br/>South via EIC<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR KM18K EIC WINDU SEWZY6 KAUS\" readonly>";
			result += "<br/><br/>South/ZTL Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS CAE SAV AMG DEFUN J2 LCH Q24 MOLLR DBOYS WLEEE7 KAUS\" readonly>";
			result += "<br/>North/ZME Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE IIU J78 IRW PRTZY LAIKS4 KAUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 HARAY SPA LGC MEI MHZ AEX IAH BITER9 KAUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-08-2025
			result += "<!-- Verified with ATCSCC on 07-08-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY LCH LUKKN WLEEE7 KAUS\" readonly>";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA ELD EIC WINDU SEWZY6 KAUS\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG LCH LUKKN WLEEE7 KAUS\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MERDN LCH LUKKN WLEEE7 KAUS\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR YOCKY Q68 LITTR TXK ACT BLEWE5 KAUS\" readonly>";
			break;
		case "AVL": // CLT-AVL // Updated 02-21-2025
			result += "<!-- Updated 02-21-2025 -->";
			result += "<br/><br/><b>Faa Pref Route: (Avg FL100)</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN KAVL\" readonly>"; // CDR RP
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY SUG KAVL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-21-2025
			result += "<!-- Verified with ATCSCC on 02-21-2025 -->";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO BENBY KAVL\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN KAVL\" readonly>";
			break;
		case "AVP": // CLT-AVP // Updated 02-21-2025
			result += "<!-- Updated 02-21-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA COURG LOYDD GAAPP LVZ KAVP\" readonly>"; // CDR RP
			result += "<br/><br/>West via VXV<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV CEMEX HVQ PSB MIP LVZ KAVP\" readonly>"; // CDR BZ
			result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII THEOO COURG LOYDD GAAPP LVZ KAVP\" readonly>"; // CDR KL
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-14-2025
			result += "<!-- Verified with ATCSCC on 05-14-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV CEMEX HVQ PSB MIP LVZ KAVP\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE DILNN AML HAR LVZ KAVP\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII THEOO COURG LOYDD GAAPP LVZ KAVP\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA COURG LOYDD GAAPP LVZ KAVP\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ ESL COURG LOYDD GAAPP LVZ KAVP\" readonly>";
			break;
		case "BDL": // CLT-BDL // Updated 02-21-2025
			result += "<!-- Updated 02-21-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 RBV Q419 DPK DPK3 KBDL\" readonly>"; // CDR RP
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ PSB HNK STELA1 KBDL\" readonly>";
			result += "<br/><br/>MICAH: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK AML J220 MICAH Q227 KONJE J190 ALB STELA1 KBDL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL RDU LVL ENO RBV JFK DPK DPK3 KBDL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-21-2025
			result += "<!-- Verified with ATCSCC on 02-21-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 HNN DURRI WWSHR Q29 JHW Q82 MEMMS WILET STELA1 KBDL\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY PANDY Q109 YURCK Q97 PAACK JAMIE CONFR Q133 JFK DPK DPK3 KBDL\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 RBV Q419 DPK DPK3 KBDL\" readonly>";
			break;
		case "BGR": // CLT-BGR // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 FOXWD BOS KBGR\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA ESL PSB RKA BTV KBGR\" readonly>";
			result += "<br/>AVOID ZDC/ZNY: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE ZIEBR APE J83 DJB JHW Q29 CABCI RANGY BGR KBGR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-14-2025
			break;
		case "BHM": // CLT-BHM // Updated 07-30-2025
			result += "<!-- Updated 07-30-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR KIOSK KBHM\" readonly>";
			result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY HERKO KBHM\" readonly>"; // CDR BE
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR BNA VLKNN KBHM\" readonly>"; // Based on CDR WE
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 DEBIE RMG KBHM\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-30-2025
			result += "<!-- Verified with ATCSCC on 07-30-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY HERKO KBHM\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO VXV DIODE KBHM\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR KIOSK KBHM\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR GQO DIODE KBHM\" readonly>";
			break;
		case "BNA": // CLT-BNA // Updated 10-05-2025
			result += "<!-- Updated 10-05-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL300):</b>"; // TODO is this faa pref? or more direct?
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV SWFFT3 KBNA\" readonly>";
			result += "<br/><b>Flown route is closer to .. KCLT BOBZY5 BOBZY BRAYN REWET BAMMA SWFFT3 KBNA<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD TONIO CUTRR PASLY5 KBNA\" readonly>";
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT THRSR SWFFT3 KBNA\" readonly>"; // CDR BE
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 HARAY BRAYN REWET VXV KBNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 10-05-2025
			result += "<!-- Verified with ATCSCC on 10-05-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT THRSR SWFFT3 KBNA\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR SWFFT3 KBNA\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM VHP TONES RYYMN3 KBNA\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET EDDDY SWFFT3 KBNA\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ DEWAK CUTRR PASLY5 KBNA\" readonly>";
			break;
		case "BOS": // CLT-BOS // Updated 04-19-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-19-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>"; // CDR RP
			result += "<br/><br/>West <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS PSB HNK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>West via APE <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE APE WWSHR Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>"; // CDR JJ
			result += "<br/><br/>FLORIDA TO NE 3: <input style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL RDU RIC ENO RBV JFK ORW7 KBOS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
			result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE APE WWSHR Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY PANDY Q109 YURCK Q97 PAACK JAMIE CONFR Q133 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			break;
		case "BTV": // CLT-BTV // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA ESL PSB RKA KBTV\" readonly>";
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BARMY5 TYI JAMIE CONFR Q133 LLUND CAM KBTV\" readonly>"; // CDR BA
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR GEFFS Q71 PSB RKA KBTV\" readonly>"; // CDR WE
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-14-2025
			result += "<!-- Verified with ATCSCC on 05-14-2025 -->";
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 TYI JAMIE CONFR Q133 LLUND CAM KBTV\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA ESL PSB RKA KBTV\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR GEFFS Q71 PSB RKA KBTV\" readonly>";
			break;
		case "BUF": // CLT-BUF // Updated 07-30-2025
			result += "<!-- Updated 07-30-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS EWC DKK KBUF\" readonly>";
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN LEONI WEVEL KBUF\" readonly>"; // CDR KL
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE ECB APE DKK WOZEE KBUF\" readonly>"; // Based on CDR JJ
			// result += "<br/><br/><b>Non RNAV</b>"; TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-30-2025
			result += "<!-- Verified with ATCSCC on 07-30-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA RINTE KLYNE Q29 JHW DKK WOZEE KBUF\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE TONIO Q67 HNN EWC KBUF\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN LEONI WEVEL KBUF\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS EWC DKK KBUF\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ AIR JHW DKK WOZEE KBUF\" readonly>";
			break;
		case "BWI": // CLT-BWI // Updated 05-27-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-27-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KILNS5 AUDII THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/><br/>West (FL230 to PSK)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK JOOEY RAVNN8 KBWI\" readonly>"; // CDR KR
			// TODO East Rte
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT RDU RIC RIPKN2 KBWI\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-30-2025
			result += "<!-- Verified with ATCSCC on 07-30-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV CEMEX KONGO Q34 SITTR CJAAE RAVNN8 KBWI\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE APE KEMAN ANTHM5 KBWI\" readonly>";
			result += "<br/>KR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK JOOEY RAVNN8 KBWI\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC FLO RDU GOOOB THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR CJAAE RAVNN8 KBWI\" readonly>";
			break;
		case "CAE": // CLT-CAE // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL100):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS KCAE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 BUCKL KCAE\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR DEBIE IRQ CAE KCAE\" readonly>";
			break;
		case "CAK": // CLT-CAK // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD Q39 ASERY JPU ZZIPS1 KCAK\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV CEMEX Q67 DARYN DARYN SPOCC HUUVR1 KCAK\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE TONIO Q67 DARYN SPOCC HUUVR1 KCAK\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN ATWOO MGOOD ZZIPS KCAK\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD Q39 ASERY JPU ZZIPS1 KCAK\" readonly>";
			break;
		case "CHS": // CLT-CHS // Updated 05-27-2025
			result += "<!-- Updated 05-27-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL180):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM OSPRI7 KCHS\" readonly>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY IRQ OSPRI7 KCHS\" readonly>"; // CDR ES
			result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BARMY5 BARMY MRPIT AMYLU3 KCHS\" readonly>";
			result += "<br/>SW Arrival<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MCN DEQUE BAGGY3 KCHS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOWMA KCHS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-27-2025
			result += "<!-- Verified with ATCSCC on 05-27-2025 -->";
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 NUTZE ISO RAPZZ AMYLU3 KCHS\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY IRQ OSPRI7 KCHS\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM OSPRI7 KCHS\" readonly>";
			break;
		case "CID": // CLT-CID // Updated 05-16-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-16-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 05-16-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM OOM TTH CID KCID\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN ROD J149 FWA JOT KCID\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY GQO MEM J41 SGF IRK KCID\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 NALEY HNN ROD J149 FWA JOT KCID\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-16-2025
			result += "<!-- Verified with ATCSCC on 05-16-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV IIU CMI MZV KCID\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE HYK TTH CMI MZV KCID\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HYK TTH CMI MZV KCID\" readonly>";
			break;
		case "CLE": // CLT-CLE // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD Q39 ASERY JANYS ROLLN2 KCLE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 GANTS GSO BKW HVQ JANYS ROLLN2 KCLE\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV IIU DRUGA ROKNN3 KCLE\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE JANYS ROLLN2 KCLE\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN LEONI J211 JST UPPRR TRYBE4 KCLE\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD Q39 ASERY JANYS ROLLN2 KCLE\" readonly>";
			break;
		case "CMH": // CLT-CMH // Updated 04-28-2025
			result += "<!-- Updated 04-28-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route: (Avg FL300)</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN SCRLT SCRLT2 KCMH\" readonly>"; // CDR RP
			result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV KI45O GETTA JAKTZ2 KCMH\" readonly>";
			result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN TOMAC LEJOY AIR CLPRR3 KCMH\" readonly>"; // CDR KL
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 NALEY HVQ HNN TASKE BREMN KCMH\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-28-2025
			result += "<!-- Verified with ATCSCC on 04-28-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 JONEN MCGNS SCRLT2 KCMH\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM JADUB DUBLN1 KCMH\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN TOMAC LEJOY AIR CLPRR3 KCMH\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN SCRLT SCRLT2 KCMH\" readonly>";
			break;
		case "CVG": // CLT-CVG // Updated 09-06-2025
			result += "<!-- Updated 09-06-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL280):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM JAKIE6 KCVG\" readonly>";
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ BRROW GAVNN7 KCVG\" readonly>";
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA KM42M PXV SARGO4 KCVG\" readonly>";
			result += "<br/><br/>East via HVQ<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK GVE PERKS FAIIR GAVNN7 KCVG\" readonly>";
			result += "<br/>West via MEM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ MEM TERGE SARGO4 KCVG\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-25-2025
			result += "<!-- Verified with ATCSCC on 03-25-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV JAKIE6 KCVG\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VXV JAKIE6 KCVG\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK MOL FAIIR GAVNN7 KCVG\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM JAKIE6 KCVG\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD FAIIR GAVNN7 KCVG\" readonly>";
			break;
		case "DAB": // CLT-DAB // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED LPERD TTHOR3 KDAB\" readonly>";
			result += "<br/>ZTL TO FL ESCAPE (Max FL190): <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD TTHOR KDAB\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 HAMLN WURFL Q83 JEVED Q97 KENLL TTHOR KDAB\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR NOKIE YANTI KYLEG TTHOR3 KDAB\" readonly>";
			result += "<br/>LL: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY SMPRR Q85 LPERD TTHOR3 KDAB\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD TTHOR3 KDAB\" readonly>";
			break;
		case "DAY": // CLT-DAY // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 OCASE FLM KDAY\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 PSK HVQ KDAY\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "DCA": // CLT-DCA // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KILNS5 AUDII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR TRUPS5 KDCA\" readonly>"; // CDR WE
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 JOTTA HENBY LYH GVE KDCA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-14-2025
			result += "<!-- Verified with ATCSCC on 06-14-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV KONGO Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE APE AIR J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC FLO RDU FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR TRUPS5 KDCA\" readonly>";
			break;
		case "DEN": // CLT-DEN // Updated 11-14-2025
			result += "<!-- Updated 11-14-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA SGF ICT J28 GCK KIISS CLASH5 KDEN\" readonly>";
			result += "<br/></br>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM J110 GCK KIISS CLASH5 KDEN\" readonly>"; // CDR RP
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL GCK KIISS CLASH5 KDEN\" readonly>";
			result += "<br/><br/>North/ZKC Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP PIA KG66I WELKY Q90 HLC OATHE CLASH5 KDEN\" readonly>";
			result += "<br/>South/ZKC Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH ZIGEE NIIXX4 KDEN\" readonly>";
			result += "<br/><br/>PNH<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH ZIGEE NIIXX4 KDEN\" readonly>";
			result += "<br/>TUL 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL GCK KIISS CLASH5 KDEN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BNA FAM J112 BUM J110 GCK DANDD1 KDEN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 11-14-2025
			result += "<!-- Verified with ATCSCC on 11-14-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEM RZC PER GCK KIISS CLASH5 KDEN\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q116 SGF BUM J110 GCK KIISS CLASH5 KDEN\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM IIU J112 BUM J110 GCK KIISS CLASH5 KDEN\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM J110 GCK KIISS CLASH5 KDEN\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ IIU J112 BUM J110 GCK KIISS CLASH5 KDEN\" readonly>";
			break;
		case "DFW": // CLT-DFW // Updated 06-03-2025
			result += "<!-- Updated 06-03-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 06-03-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN GQO MEM J66 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>"; // CDR RP
			result += "<br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE CVG STL J8 SGF J98 TUL KLAWW VKTRY2 KDFW\" readonly>";
			result += "<br/><br/>ZME/ZTL Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS FISHO Q75 TEEEM AMG CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>SW Arr: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ SOCKK4 KDFW\" readonly>";
			// result += "<br/>DFW EAST 2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MERDN MCB AEX DAS IAH CRGER GUTZZ SOCKK4 KDFW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 HARAY SPA RMG VUZ SQS YEAGR4 KDFW\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-10-2025
			result += "<!-- Verified with ATCSCC on 06-10-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEI AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG LIT FEWWW SEEVR4 KDFW\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
			break;
		case "DSM": // CLT-DSM // Updated 05-20-2025
			result += "<!-- Updated 05-20-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA J45 DSM KDSM\" readonly>"; // CDR RP
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN BVT BDF MZV IOW KDSM\" readonly>"; // Based on CDR JJ
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA MAW IRK V175 DSM KDSM\" readonly>";
			result += "<br/><b>ZAU Avoid: ...MAW KK48I LMN KDSM<\/b>";
			result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 NALEY HNN ROD J149 FWA JOT IOW DSM KDSM\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-19-2025
			result += "<!-- Verified with ATCSCC on 05-19-2025 -->";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM IIU ENL IRK V175 DSM KDSM\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA J45 DSM KDSM\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ ENL IRK V175 DSM KDSM\" readonly>";
			break;
		case "DTW": // CLT-DTW // Updated 09-13-2025
			result += "<!-- Updated 09-13-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD JAMOX BONZZ2 KDTW\" readonly>";
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN TOMAC LEJOY Q178 KOZAR BONZZ2 KDTW\" readonly>"; // CDR KL
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV IIU WWODD HANBL3 KDTW\" readonly>"; // CDR BZ
			result += "<br/><br/>DTW EAST: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM WWODD HANBL3 KDTW\" readonly>";			
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY VXV J43 FLM DQN KDTW\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-13-2025
			result += "<!-- Verified with ATCSCC on 09-13-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV IIU WWODD HANBL3 KDTW\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB HNN SUBWY HTROD2 KDTW\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN TOMAC LEJOY Q178 KOZAR BONZZ2 KDTW\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD JAMOX BONZZ2 KDTW\" readonly>";
			break;
		case "ECP": // CLT-ECP // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ CSG EUF RRS KECP\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC TEEEM CABLO KECP\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR RSVLT EUF RRS KECP\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC ALLMA CABLO KECP\" readonly>";
			break;
		case "EWR": // CLT-EWR // Updated 07-07-2025
			result += "<!-- Updated 07-07-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KILNS5 AUDII QUART PHLBO4 KEWR\" readonly>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD KLYNE Q29 DORET SLT FQM3 KEWR\" readonly>";
			result += "<br/>East/Full OW: <input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM DEDDY Y436 DIZNY WHOOS Y494 YAALE Y497 SUBBS CYN GXU RBV V249 METRO KEWR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 NALEY PSK EKN IHD PSB FQM FQM3 KEWR\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
			result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV ATUME Q71 KONGO Q34 GVE PHLBO4 KEWR\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD KLYNE Q29 DORET SLT FQM3 KEWR\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY RAYVO Q87 ALWZZ OGRAE Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 GVE PHLBO4 KEWR\" readonly>";
			break;
		case "EYW": // CLT-EYW // Updated 03-11-2025
			result += "<!-- Updated 03-11-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC TEEEM Q75 ENEME Q65 DOFFY Q79 FEMID TUNSL KEYW\" readonly>"; // CDR RP
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT MCN BULZI KRAKN1 KEYW\" readonly>";
			result += "<br/>OW East: <input style=\"width:75%\" value=\"KCLT LILLS3 LILLS ILM IDOLS PRTHR JAZZI AR24 COACH PELCN CANIT AR23 ZFP BR69V MAYKO FNTSY1 KEYW\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-11-2025
			result += "<!-- Verified with ATCSCC on 03-11-2025 -->";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR HONID Q81 TUNSL KEYW\" readonly>";
			result += "<br/>LL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY ELLDE Q97 WOPNR Q93 LINEY Y262 TUNSL KEYW\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC TEEEM Q75 ENEME Q65 DOFFY Q79 FEMID TUNSL KEYW\" readonly>";
			break;
		case "FLL": // CLT-FLL // Updated 11-07-2025
			result += "<!-- Updated 11-07-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED Q97 PRMUS CUUDA3 KFLL\" readonly>"; // CDR RP
			result += "<br/><br/>East/OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT LILLS3 LILLS CHIEZ Y291 MAJIK CUUDA3 KFLL\" readonly>";
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MCN ZPLEN TEEKY3 KFLL\" readonly>"; // Based on CDR ES
			result += "<br/><br/>ZTL TO FL ESCAPE (Max FL190)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC REIDS ENEME TEEKY3 KFLL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 TREAL TAY PIE FORTL9 KFLL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 11-07-2025
			result += "<!-- Verified with ATCSCC on 11-07-2025 -->";
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 BARMY BATTA ROZBO CAKET Q97 PRMUS CUUDA3 KFLL\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR ZPLEN TEEKY3 KFLL\" readonly>";
			result += "<br/>LL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY CAKET Q97 PRMUS CUUDA3 KFLL\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED Q97 PRMUS CUUDA3 KFLL\" readonly>";
			break;

// FSD skipped
// GPT skipped
// GRB skipped			

		case "GRR": // CLT-GRR // Updated 07-07-2025
			result += "<!-- Updated 07-07-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM FWA AZO KGRR\" readonly>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA PXV CPONE KGRR\" readonly>";
			result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ J85 DJB J34 VIO KGRR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
			result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA PXV CPONE KGRR\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE FLM FWA AZO KGRR\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ MIE FWA AZO KGRR\" readonly>";
			break;
		case "GSO": // CLT-GSO // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL090):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 GANTS KGSO\" readonly>";
			break;
		case "GSP": // CLT-GSP // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL100):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY SPA KGSP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 HARAY SPA KGSP\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "HSV": // CLT-HSV // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN GQO RQZ KHSV\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR GAD RQZ KHSV\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG BNA RQZ KHSV\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 DEBIE RMG RQZ KHSV\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY VUZ RQZ KHSV\" readonly>";
			result += "<br/>ES: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN IRRTH KHSV\" readonly>";
			result += "<br/>JJ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 NOONN SYI RQZ KHSV\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET RQZ KHSV\" readonly>";
			result += "<br/>WE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR SYI RQZ KHSV\" readonly>";
			break;
		case "IAD": // CLT-IAD // Updated 10-12-2025
			result += "<!-- Updated 10-12-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL230):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KILNS5 AUDII DORRN CAVLR6 KIAD\" readonly>"; // CDR RP
			result += "<br/><b>Route fails below FL230 due to CAVLR6 chart min FL220 at PERKN<\/b>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK ROCKA BURTT KILMR OTTTO GIBBZ GIBBZ5 KIAD\" readonly>"; // CDR KR
			result += "<br/><br/>WATRS<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO DEDDY Y436 DIZNY WHOOS Y494 HOBOH Y488 WEBBB Y484 YETTI Y495 CAMRN RBV HYPER9 KIAD\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 10-12-2025
			result += "<!-- Verified with ATCSCC on 10-12-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO JARLO GIBBZ5 KIAD\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB JARLO GIBBZ5 KIAD\" readonly>";
			result += "<br/>KR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK ROCKA BURTT KILMR OTTTO GIBBZ GIBBZ5 KIAD\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC FLO RDU BZNGA DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD JARLO GIBBZ5 KIAD\" readonly>";
			break;
		case "IAH": // CLT-IAH // Updated 06-03-2025 // Mandatory Routes checked
			result += "<!-- Updated 06-03-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR SARKK AEX DOOBI3 KIAH\" readonly>";
			result += "<br/><b style=\"color:orange\">ZEEKK/GESNR okay too ...AEX ZEEKK3 KIAH (east flow) -or- ...AEX GESNR2 KIAH (west flow)<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC KF18I SWEUP ZEEKK3 KIAH\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS FISHO Q75 TEEEM AMG CABLO DEFUN J2 SJI LINKK1 KIAH\" readonly>";
			result += "<br/><br/>North via MEM<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN GQO MEM KF18I SWEUP ZEEKK3 KIAH\" readonly>";
			result += "<br/>North via TUL<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL J87 CVE DRLLR5 KIAH\" readonly>";
			// result += "<br/><br/>DOOBI N/S: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR MGMRY CATLN Q56 SJI LINKK1 KIAH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 DEBIE ODF RMG VUZ MHZ AEX OHIIO4 KIAH\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-03-2025
			result += "<!-- Verified with ATCSCC on 06-03-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY SJI LINKK1 KIAH\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG LIT DHART SWEUP ZEEKK3 KIAH\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR SARKK AEX ZEEKK3 KIAH\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR YOCKY Q68 LITTR DHART SWEUP ZEEKK3 KIAH\" readonly>";
			break;
		case "ILM": // CLT-ILM // Updated 06-03-2025
			result += "<!-- Updated 06-03-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL170):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT LILLS3 LILLS V296 ILM KILM\" readonly>";
			result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC KILM\" readonly>"; // CDR KW
			// TODO North Route
			// result += "<br/><br/><b>Non RNAV</b>"; TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-03-2025
			result += "<!-- Verified with ATCSCC on 06-03-2025 -->";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC KILM\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS V296 ILM KILM\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 MAULS SBV V136 FAY V296 ILM KILM\" readonly>";
			break;
		case "IND": // CLT-IND // Updated 08-28-2025
			result += "<!-- Updated 08-28-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL340):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN PLASH SNKPT2 KIND\" readonly>"; // CDR WE
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA PXV RACYR6 KIND\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY CUBIM IIU KIND\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-28-2025
			result += "<!-- Verified with ATCSCC on 08-28-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN TOMAC LEJOY AIR RINTE SNKPT2 KIND\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN PLASH SNKPT2 KIND\" readonly>";
			break;
		 case "JAC": // CLT-JAC // Updated 10-22-2025
			result += "<!-- Updated 10-22-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 10-22-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE IIU J8 STL J24 MCI TKO LEWOY Q148 JUGIV DNW KJAC\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN BVT DBQ MCW J16 FSD J82 RAP JYMBO DNW KJAC\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA Q36 RZC PER GCK J154 DVV CKW DNW KJAC\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 10-22-2025
			break;

// CLT-JAN skipped

		case "JAX": // CLT-JAX // Updated 08-23-2025
			result += "<!-- Updated 08-23-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL260):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS ESENT LUNNI2 KJAX\" readonly>";
			result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT IRQ FINNE OHDEA2 KJAX\" readonly>";
			result += "<br/>East/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT KWEEN5 PITRW Y436 OGGRE AR17 BAHAA AR5 JAWSS KJAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY CHS ESENT LUNNI2 KJAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-22-2025
			result += "<!-- Verified with ATCSCC on 08-22-2025 -->";
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 BARMY BATTA ROZBO CHS ESENT LUNNI2 KJAX\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR NOKIE DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/>LL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY CHS ESENT LUNNI2 KJAX\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS ESENT LUNNI2 KJAX\" readonly>";
			break;
		case "JFK": // CLT-JFK // Updated 04-28-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-28-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 TYI Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // CDR RP
			result += "<br/><b style=\"color:orange\">CDR RP is .. TYI ORF SAWED.. FAA Pref is ..TYI Q64 SAWED.. but its the same route<\/b>";
			result += "<br/><br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM DEDDY Y436 DIZNY WHOOS Y494 YAALE Y495 CAMRN CAMRN5 KJFK\" readonly>";
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>"; // CDR JJ
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL TYI ORF RADDS SIE CAMRN5 KJFK\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 10-07-2025
			result += "<!-- Verified with ATCSCC on 10-07-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV FLM ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD KLYNE Q29 JHW Q476 WLKES PUCKY1 KJFK\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 TYI ORF SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q108 SIE CAMRN5 KJFK\" readonly>";
			break;
		case "LAS": // CLT-LAS // Updated 06-29-2025
			result += "<!-- Updated 06-29-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>ZKC Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA ARG KF33E IRW J14 PNH J6 ZUN HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/><b>If weather ARG-RZC, replace /ARG KF33E/ with /KM33K/<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP J80 GLD J146 HBU J28 HVE GGAPP CHOWW4 KLAS\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK SPS J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/>South via EWM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC TXK J42 ABI J4 SSO ELLDA RKSTR4 KLAS\" readonly>";
			result += "<br/>North/ZKC Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP RBS LEONG Q114 BUGGG GGAPP CHOWW4 KLAS\" readonly>";
			result += "<br/><br/>ABI: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC EIC J4 ABI CME J15 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>HNKER 1/2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>LAS NO DVC: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC TXK BYP SPS J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BNA J46 TUL J78 IRW J74 TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-08-2025
			result += "<!-- Verified with ATCSCC on 04-08-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEM ARG BUM J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN LIT J14 PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM FAM J112 BUM J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA LIT J14 PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR YOCKY BWG ARG FSM IRW PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
			break;
		case "LAX": // CLT-LAX // Updated 07-07-2025
			result += "<!-- Updated 07-07-2025 -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-07-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB FTI J8 GUP J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>"; // Playbook TUL 1
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J8 STL Q176 CIM J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC TXK J42 ABI J66 EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><br/>North via STL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN VHP J80 MCI J24 SLN J102 ALS J44 RSK J10 FLG HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>South via IAH<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q22 GUSTI IAH J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>South/ZTL Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS CAE SAV AMG DEFUN J2 IAH J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			// result += "<br/><br/>ABI: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC EIC J4 ABI EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><br/>HNKR 1+2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER CNX J74 SJN J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>LEV WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>PNH 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			// result += "<br/>ROCKIES SOUTH<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC EIC J4 ABI J66 EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BNA MEM J66 LIT J6 DRK J231 TNP BASET5 KLAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-10-2025
			result += "<!-- Verified with ATCSCC on 03-10-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY IGB LIT J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 LIT J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG ARG FSM IRW J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA LIT J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR YOCKY LIT J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			break;
		case "LEX": // CLT-LEX // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM KLEX\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS LNDIZ TAFTT KLEX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KNI3 FLYYN TONIO KLEX\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "LGA": // CLT-LGA // Updated 04-29-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-29-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/><br/>West via AIR<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR AIR PSB MIP MIP4 KLGA\" readonly>";
			result += "<br/>West via ROD<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV FLM ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>"; // CDR BZ
			result += "<br/>East/Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM DEDDY Y436 DIZNY WHOOS Y494 YAALE Y495 OWENZ FATON HOFFI KEYED BDR V433 KLGA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT RDU HPW HUBBS PXT KORRY4 KLGA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-29-2025
			result += "<!-- Verified with ATCSCC on 04-29-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV FLM ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY RAYVO Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 GVE PROUD2 KLGA\" readonly>";
			break;
		case "LIT": // CLT-LIT // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN GQO MEM J66 LIT KLIT\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 LIT KLIT\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG LIT KLIT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 HARAY BRAYN GQO MEM J66 LIT KLIT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY VUZ J14 LIT KLIT\" readonly>";
			result += "<br/>JJ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG LIT KLIT\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 LIT KLIT\" readonly>";
			result += "<br/>WE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ Q68 LITTR KLIT\" readonly>";
			break;
		case "MCI": // CLT-MCI // Updated 05-29-2025
			result += "<!-- Updated 05-29-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 05-29-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J8 BOSIE LAPOW RUDDH3 KMCI\" readonly>";
			result += "<br/><br/>North via HVQ<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ VHP SPI BQS8 KMCI\" readonly>"; // CDR WE
			result += "<br/>South via VUZ<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q116 SGF TYGER7 KMCI\" readonly>"; // CDR ES
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 DEBIE ODF GQO MKL ARG SGF TYGER7 KMCI\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-29-2025
			result += "<!-- Verified with ATCSCC on 05-29-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY IGB MEM J41 SGF TYGER7 KMCI\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q116 SGF TYGER7 KMCI\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE FLM J24 VHP J80 SPI BQS8 KMCI\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA ARG SGF TYGER7 KMCI\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ VHP SPI BQS8 KMCI\" readonly>";
			break;
		case "MCO": // CLT-MCO // Updated 06-27-2025
			result += "<!-- Updated 06-27-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD SNFLD3 KMCO\" readonly>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR ZJAYX GRNCH5 KMCO\" readonly>"; // CDR ES
			result += "<br/>East/OW: <input style=\"width:75%\" value=\"KCLT KWEEN5 PITRW Y436 OGGRE Y289 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 HAMLN CAE SAV OMN BITHO7 KMCO\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-27-2025
			result += "<!-- Verified with ATCSCC on 06-27-2025 -->";
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 BARMY BATTA ROZBO SLITT SMPRR Q85 LPERD SNFLD3 KMCO\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/>LL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY SMPRR Q85 LPERD SNFLD3 KMCO\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD SNFLD3 KMCO\" readonly>";
			break;
		case "MDT": // CLT-MDT // Updated 04-16-2025
			result += "<!-- Updated 04-16-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA COURG BAMMY T299 HAR KMDT\" readonly>"; // CDR RP
			result += "<br/></br>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII THEOO COURG BAMMY T299 HAR KMDT\" readonly>"; // CDR KL
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB AIR JST HAR KMDT\" readonly>"; // CDR JJ
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL RDU FAK BRV EMI KMDT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-16-2025
			result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV AIR JST HAR KMDT\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB AIR JST HAR KMDT\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII THEOO COURG BAMMY T299 HAR KMDT\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA COURG BAMMY T299 HAR KMDT\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN AIR JST HAR KMDT\" readonly>";
			break;
		case "MEM": // CLT-MEM // Updated 06-10-2025
			result += "<!-- Updated 06-10-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL300/320):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA BLUZZ5 KMEM\" readonly>"; // CDR RP
			result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN WASER VANZE3 KMEM\" readonly>"; // CDR ES
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM RAMRD BLUZZ5 KMEM\" readonly>"; // CDR JJ
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BNA WLDER1 KMEM\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-10-2025
			result += "<!-- Verified with ATCSCC on 06-10-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC MGMRY VUZ WASER VANZE3 KMEM\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN WASER VANZE3 KMEM\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM RAMRD BLUZZ5 KMEM\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA BLUZZ5 KMEM\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ RAMRD BLUZZ5 KMEM\" readonly>";
			break;
		case "MGM": // CLT-MGM // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ KMGM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER3 DEBIE AHN KMGM\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "MHT": // CLT-MHT // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND SMYTH ROZZE2 KMHT\" readonly>"; // CDR RP
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK EKN EMNEM PSB CFB J190 RKA PONCT ROZZE2 KMHT\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY REWET VXV ECB AIR PSB PONCT ROZZE2 KMHT\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB AIR PSB PONCT ROZZE2 KMHT\" readonly>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY PANDY Q109 YURCK Q97 PAACK JAMIE CONFR Q133 LLUND SMYTH ROZZE2 KMHT\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND SMYTH ROZZE2 KMHT\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ PSB PONCT ROZZE2 KMHT\" readonly>";
			break;
		case "MIA": // CLT-MIA // Updated 08-25-2025
			result += "<!-- Updated 08-25-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
			result += "<br/><br/>East/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT KWEEN5 PITRW Y436 EBEAR DUUNK Y313 HOAGG BNFSH3 KMIA\" readonly>";
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT MCN HONID FROGZ4 KMIA\" readonly>";
			result += "<br/><br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BARMY5 NUTZE ECG AR8 OXANA L452 WILYY M203 SNAGY BNFSH3 KMIA\" readonly>";
			result += "<br/><br/>ZTL TO FLORIDA ESCAPE (Capped FL190): <input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC REIDS ENEME Q65 DOFFY BROMO FROGZ4 KMIA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/>Non RNAV SID/STAR: <input style=\"width:75%\" value=\"KCLT KER4 HAMLN CAE SAV OMN ANNEY4 KMIA\" readonly>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KCLT KER4 HAMLN CAE TAY PIE PALMZ2 KMIA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-25-2025
			result += "<!-- Verified with ATCSCC on 08-25-2025 -->";
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 BARMY BATTA ROZBO MRPIT CAKET Q97 DEBRL CSTAL3 KMIA\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR HONID FROGZ4 KMIA\" readonly>";
			result += "<br/>LL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS RAEFO MRPIT CAKET Q97 DEBRL CSTAL3 KMIA\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED Q97 DEBRL CSTAL3 KMIA\" readonly>";
			break;
		case "MKE": // CLT-MKE // Updated 11-24-2025
			result += "<!-- Updated 11-24-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM MACES VINNE BRAVE EXARR KMKE\" readonly>"; // CDR RP
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN APE JXN VIO GETCH LYSTR SUDDS KMKE\" readonly>";
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN MEM ARG STL SPI CHZHD GOPAC3 KMKE\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 11-24-2025
			result += "<!-- Verified with ATCSCC on 11-24-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV IIU J89 MACES VINNE BRAVE EXARR KMKE\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR GAD MEM J71 ENL JOT LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN TOMAC LEJOY Q178 DJB J34 CRL PEGEE MKG SUDDS KMKE\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE FLM MACES VINNE BRAVE EXARR KMKE\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN MACES VINNE BRAVE EXARR KMKE\" readonly>";
			break;
		case "MLB": // CLT-MLB // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD OMN BITHO7 KMLB\" readonly>"; // CDR RP
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ HESPI Q89 PRMUS OMN BITHO7 KMLB\" readonly>";
			result += "<br/>LL: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY SMPRR Q85 LPERD OMN BITHO7 KMLB\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD OMN BITHO7 KMLB\" readonly>";
			break;

// MLI SKIPPED

		case "MOB": // CLT-MOB // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGM SJI KMOB\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 HARAY SPA VUZ SJI KMOB\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGM SJI KMOB\" readonly>";
			result += "<br/>BZ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET GQO SJI KMOB\" readonly>";
			result += "<br/>JJ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 NOONN VUZ SJI KMOB\" readonly>";
			break;
		case "MSN": // CLT-MSN // Updated 10-13-2025
			result += "<!-- Updated 10-13-2025 P -->";
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KCLT JOJJO5 DOOGE Q93 HEVAN OKK OBK KMSN\" readonly>";
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM FWA PMM J70 BAE KMSN\" readonly>";
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA ENL PIA KMSN\" readonly>";
			result += "<br/><br/>East via CLE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ J85 DJB J34 BAE KMSN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BNA FAM STL BDF KMSN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 10-13-2025
			result += "<!-- Verified with ATCSCC on 10-13-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM STL EDENS KMSN\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM MACES BVT J89 CADIZ OBK BAE KMSN\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD FLM MACES BVT J89 CADIZ OBK BAE KMSN\" readonly>";
			break;
		case "MSP": // CLT-MSP // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J89 OBK KAMMA KKILR3 KMSP\" readonly>"; // CDR RP
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ J85 DJB J34 VIO KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J45 STL IOW MNOSO BLUEM4 KMSP\" readonly>";
			result += "<br/><br/>KASPR: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP BVT J89 OBK KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT HMV FLM VHP BVT BAE EAU9 KMSP\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA J73 OBK KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN TOMAC LEJOY Q178 DJB J34 CRL PMM J70 BAE KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J89 OBK KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ FWA GIJ KAMMA KKILR3 KMSP\" readonly>";
			break;
		case "MSY": // CLT-MSY // Updated 09-13-2025
			result += "<!-- Updated 09-13-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q56 SJI MNSTR1 KMSY\" readonly>"; // CDR RP
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA SQS MCB TRSSH1 KMSY\" readonly>";
			result += "<br/>South/ZTL Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC ALLMA CEW J2 SJI MNSTR1 KMSY\" readonly>"; // CDR BE
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT SPA LGC MGM LBY RYTHM4 KMSY\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-13-2025
			result += "<!-- Verified with ATCSCC on 09-13-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC ALLMA CEW J2 SJI MNSTR1 KMSY\" readonly>";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA IGB MERDN TRSSH1 KMSY\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q56 SJI MNSTR1 KMSY\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR YOCKY BWG MHZ MCB TRSSH1 KMSY\" readonly>";
			break;
		case "MYR": // CLT-MYR // Updated 09-23-2025
			result += "<!-- Updated 09-23-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL230):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM KMYR\" readonly>"; // CDR RP
			result += "<br/><b>As of 2025-09-28, CDP RP includes TASTY but flights usually turn at or before UNJAM<\/b>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT LILLS3 LILLS KMYR\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-23-2025
			result += "<!-- Verified with ATCSCC on 09-23-2025 -->";
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU V136 CRE KMYR\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY KMYR\" readonly>";
			break;
		case "OKC": // CLT-OKC // Updated 09-30-2025
			result += "<!-- Updated 09-30-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 09-30-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 PLIED DRLER MURAH3 KOKC\" readonly>"; // CDR RP
			result += "<br/><br/>North/ZME Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM IIU J78 FAM DRLER MURAH3 KOKC\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK ZEMMA TSDEL3 KOKC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY VXV J46 TUL GULLI GULLI3 KOKC\" readonly>"; // CDR RP
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-30-2025
			result += "<!-- Verified with ATCSCC on 09-30-2025 -->";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN LIT KLUBB DWINE RIFFL3 KOKC\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG RZC OKM DIMPL RIFFL3 KOKC\" readonly>";
			result += "<br/>RP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA RZC TUL GULLI GULLI3 KOKC\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ VHP SGF MPYRE MURAH3 KOKC\" readonly>";
			break;
		case "OMA": // CLT-OMA // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J45 STL IRK LMN MARWI4 KOMA\" readonly>"; // CDR RP
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN BONNT HOBAR J60 IOW J10 DSM LANTK2 KOMA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA ARG SGF STJ MARWI4 KOMA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 DEBIE RMG J66 MEM J41 OVR KOMA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q116 SGF STJ KOMA\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM IIU IRK LMN MARWI4 KOMA\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA J45 STL IRK LMN MARWI4 KOMA\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN APE WHETT J64 BDF IOW DSM LANTK2 KOMA\" readonly>";
			break;
		case "ONT": // CLT-ONT // Updated 07-07-2025
			result += "<!-- Updated 07-07-2025 -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-07-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB FTI J8 GUP J96 DRK DAFNY SCBBY2 KONT\" readonly>"; // Playbook TUL 1
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J8 STL Q176 CIM J96 DRK DAFNY SCBBY2 KONT\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC TXK J42 ABI J66 EWM J4 BXK PHRED SCBBY2 KONT\" readonly>";
			result += "<br/><br/>North via STL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN VHP J80 HLC SKWYR Q90 NAVJO TOADD Q78 MARUE JCKIE2 KONT\" readonly>";
			result += "<br/>South via IAH<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q22 GUSTI Q56 HRV J2 IAH J86 ELP J50 SSO J4 BXK PHRED SCBBY2 KONT\" readonly>";
			result += "<br/>South/ZTL Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS CAE SAV AMG DEFUN J2 IAH J86 ELP J50 SSO J4 BXK PHRED SCBBY2 KONT\" readonly>";
			result += "<br/><br/>HNKR 1+2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER CNX J74 SJN J231 NABOB DAFNY SCBBY2 KONT\" readonly>";
			result += "<br/>LEV WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J50 SSO J4 BXK PHRED SCBBY2 KONT\" readonly>";
			result += "<br/>PNH 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH J6 DRK DAFNY SCBBY2 KONT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY VXV J46 TUL FTI J244 ZUN J78 PKE PSP SETER5 KONT\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-07-2025
			break;
		case "ORD": // CLT-ORD // Updated 06-23-2025
			result += "<!-- Updated 06-23-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL300):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR RP
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ APE FWA WATSN4 KORD\" readonly>"; // Based on CDR WE
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM FTZ TRTLL6 KORD\" readonly>"; // Based on CDR BZ
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT HVQ HNN APE ROD FWA KORD\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-23-2025
			result += "<!-- Verified with ATCSCC on 06-23-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA FTZ TRTLL6 KORD\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK MOL GEFFS J149 FWA WATSN4 KORD\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN ROD J149 FWA WATSN4 KORD\" readonly>";
			break;
		case "ORF": // CLT-ORF // Updated 09-11-2025
			result += "<!-- Updated 09-11-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 NUTZE DRONE DRONE2 KORF\" readonly>"; // CDR RP
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 MAULS MOL TERKS2 KORF\" readonly>"; // CDR WE
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS VAN ILM ISO DRONE2 KORF\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS VAN ILM ISO DRONE2 KORF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 JOTTA DAN LVL KORF\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-11-2025
			result += "<!-- Verified with ATCSCC on 09-11-2025 -->";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB MOL TERKS2 KORF\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY PANDY RAPZZ Q135 RREGG CVI DRONE DRONE2 KORF\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 NUTZE DRONE DRONE2 KORF\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 MAULS MOL TERKS2 KORF\" readonly>";
			break;
		case "PBI": // CLT-PBI // Updated 06-03-2025 // Mandatory Routes checked
			result += "<!-- Updated 06-03-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED Q97 KENLL CPTAN3 KPBI\" readonly>";
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT LILLS3 LILLS RAEFO MRPIT CAKET Q97 KENLL CPTAN3 KPBI\" readonly>"; // CDR LL
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR ZPLEN VUUDU1 KPBI\" readonly>"; // CDR ES
			// result += "<br/><br/>OHIO TO FLORIDA 2: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS JEVED Q97 KENLL CPTAN3 KPBI\" readonly>";
			// result += "<br/>OHIO TO FLORIDA 3: <input style=\"width:75%\" value=\"KCLT KWEEN5 PITRW Y436 OGGRE JENKS BAHAA DULEE CLMNT2 KPBI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 HAMLN CAE V37 SAV V437 OMN V3 MLB STOOP3 KPBI\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-03-2025
			result += "<!-- Verified with ATCSCC on 06-03-2025 -->";
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 BARMY BATTA ROZBO MRPIT CAKET Q97 KENLL CPTAN3 KPBI\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR ZPLEN VUUDU1 KPBI\" readonly>";
			result += "<br/>LL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS RAEFO MRPIT CAKET Q97 KENLL CPTAN3 KPBI\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED Q97 KENLL CPTAN3 KPBI\" readonly>";
			break;
		case "PDX": // CLT-PDX // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J8 STL J151 RAP J82 DNJ JKNOX HHOOD5 KPDX\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP JOT DBQ MCW J16 PDT JKNOX HHOOD5 KPDX\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH ALS JNC J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/><br/>BUM: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN HCT BFF DBS J82 DNJ J20 PDT JKNOX HHOOD5 KPDX\" readonly>";
			result += "<br/>FAM: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN HCT BFF BOY LKT PDT JKNOX HHOOD5 KPDX\" readonly>";
			result += "<br/>GTH 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW GTH TCC J76 FTI J58 RSK TCH J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>PNH 1/2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH ALS JNC J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "PHL": // CLT-PHL // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KILNS5 AUDII BBDOL PAATS4 KPHL\" readonly>"; // CDR RP
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KCLT BARMY5 TYI Q64 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
			result += "<br/>FL TO NE 3: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD APE JST BOJID4 KPHL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL RDU J55 ZITTO JAMIE SWL VCN9 KPHL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-31-2025
			result += "<!-- Verified with ATCSCC on 03-31-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV FLM ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY PANDY Q109 DFENC SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>W1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ APE JST BOJID4 KPHL\" readonly>";
			break;
		case "PHX": // CLT-PHX // Updated 07-07-2025
			result += "<!-- Updated 07-07-2025 -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-07-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB FTI J244 ZUN EAGUL6 KPHX\" readonly>"; // Playbook TUL 1
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J8 STL Q176 CIM J96 GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC TXK J42 FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/><br/>North via STL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN VHP J880 MCI J24 SLN J102 GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>South via IAH<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q22 GUSTI Q56 HRV J2 IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>South/ZTL Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS CAE SAV AMG DEFUN J2 IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			// result += "<br/><br/>ELP: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q22 GUSTI IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/><br/>GTH 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW GTH TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>LEV WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>PNH 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH J6 ZUN EAGUL6 KPHX\" readonly>";
			// result += "<br/>ROCKIES SOUTH 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN EIC J4 ABI J66 EWM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY VXV J46 TUL J78 ZUN BUNTR3 KPHX\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
			result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEI TXK J42 FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK J42 FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE FLM J134 STL BUM ICT CIM J134 GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA MEM TXK FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ STL BUM ICT TOTOE FTI J244 ZUN EAGUL6 KPHX\" readonly>";
			break;
		case "PIT": // CLT-PIT // Updated 11-07-2025
			result += "<!-- Updated 11-07-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS LEJOY DEMME5 KPIT\" readonly>"; // CDR RP
			result += "<br/></br>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII RICCS LEJOY DEMME5 KPIT\" readonly>"; // CDR KL
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 HNN FEWGA7 KPIT\" readonly>"; // CDR BZ
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV CEMEX Q67 JONEN HNN FEWGA7 KPIT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 GANTS RDU ROA EKN MGW IHD KPIT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 11-07-2025
			result += "<!-- Verified with ATCSCC on 11-07-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM IIU ROD CTW FEWGA7 KPIT\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII RICCS LEJOY DEMME5 KPIT\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS LEJOY DEMME5 KPIT\" readonly>";
			break;
		case "PNS": // CLT-PNS // Updated 07-07-2025
			result += "<!-- Updated 07-07-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ DARED CEW PENSI KPNS\" readonly>"; // CDR RP
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC ALLMA CABLO DEFUN KPNS\" readonly>"; // CDR BE
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA MEM MEI SJI LOXLY V198 PENSI KPNS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
			result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC ALLMA CABLO DEFUN KPNS\" readonly>";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA SALMS Q139 MGMRY CEW PENSI KPNS\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CEW PENSI KPNS\" readonly>";
			break;

// CLT-PSM skipped

		case "PVD": // CLT-PVD // Updated 05-10-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-10-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 RBV Q430 CREEL HTO JORDN2 KPVD\" readonly>"; // Based on CDR RP
			result += "<br/><b style=\"color:orange\">As of 03-01-2025 FAA pref is JORDN JORDN2 but HTO JORDN2 is fine<\/b>";
			result += "<br/><br/>ZDC Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB AIR Q430 CREEL ORCHA JORDN JORDN2 KPVD\" readonly>"; // CDR JJ
			result += "<br/>East/Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM DEDDY Y436 DIZNY WHOOS Y494 HOBOH Y488 DUMPR HTO JORDN2 KPVD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT RDU ORF KALDA Q167 ORCHA KPVD\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-10-2025
			result += "<!-- Verified with ATCSCC on 05-10-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 HNN AIR JST PSB HNK WIPOR3 KPVD\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB AIR Q430 CREEL ORCHA JORDN JORDN2 KPVD\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY PANDY Q109 DFENC SAWED Q97 ZJAAY ORCHA JORDN JORDN2 KPVD\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 RBV Q430 CREEL ORCHA JORDN JORDN2 KPVD\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ AIR Q430 CREEL ORCHA JORDN JORDN2 KPVD\" readonly>";
			break;
		case "PWM": // CLT-PWM // Updated 11-23-2025
			result += "<!-- Updated 11-23-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND BDR SCOGS3 KPWM\" readonly>"; // CDR RP
			// result += "<br/><br/>West/MICAH: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK AML Q221 BIGEO J49 HNK CAM CDOGG4 KPWM\" readonly>";
			result += "<br/><br/>West/ZDC Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD Q39 ASERY Q71 PSB J49 ALB CAM CDOGG4 KPWM\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 11-23-2025
			result += "<!-- Verified with ATCSCC on 11-23-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV CEMEX KONGO Q34 RBV Q22 LLUND BDR SCOGS3 KPWM\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY RAYVO Q87 GEARS BBOBO Q22 LLUND BDR SCOGS3 KPWM\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND BDR SCOGS3 KPWM\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 RBV Q22 LLUND BDR SCOGS3 KPWM\" readonly>";
			break;
		case "RAP": // CLT-RAP // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J8 STL J151 RAP KRAP\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN BVT DBQ MCW J16 FSD J82 RAP KRAP\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA Q36 RZC BVO Q148 LEWOY BFF J157 RAP KRAP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 NALEY HVQ IIU J8 STL J151 RAP KRAP\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "RDU": // CLT-RDU // Updated 07-20-2025
			result += "<!-- Updated 07-20-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route (Max FL130):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT LILLS3 LILLS ETBUY DMSTR2 KRDU\" readonly>";
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ROBLS TABER MCDON ALDAN4 KRDU\" readonly>"; // CDR KR
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC CHKLZ BLOGS3 KRDU\" readonly>"; // CDR KW
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL KRDU\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 LILLS SDZ KRDU\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-20-2025
			result += "<!-- Verified with ATCSCC on 07-20-2025 -->";
			result += "<br/>KR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ROBLS TABER MCDON ALDAN4 KRDU\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC CHKLZ BLOGS3 KRDU\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS ETBUY DMSTR2 KRDU\" readonly>";
			break;
		case "RIC": // CLT-RIC // Updated 11-07-2025
			result += "<!-- Updated 11-07-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NEAVL DUCXS5 KRIC\" readonly>";
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT LILLS3 LILLS V296 FAY V157 TYI DUFFI NEAVL DUCXS5 KRIC\" readonly>";
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD PSK MOL SPIDR5 KRIC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL RDU LVL KRIC\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 11-07-2025
			result += "<!-- Verified with ATCSCC on 11-07-2025 -->";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB HVQ J24 MOL SPIDR5 KRIC\" readonly>";
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC FLO NEAVL DUCXS5 KRIC\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NEAVL DUCXS5 KRIC\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ J24 MOL SPIDR5 KRIC\" readonly>";
			break;
		case "ROC": // CLT-ROC // Updated 07-07-2025
			result += "<!-- Updated 07-07-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS KROC\" readonly>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ GEFFS KROC\" readonly>";
			result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK BRV AML Q227 STUBN GIBBE KROC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 NALEY PSK MGW JHW KROC\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
			result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 HNN GEFFS KROC\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK BRV AML Q227 STUBN GIBBE KROC\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS KROC\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ GEFFS KROC\" readonly>";
			break;
		case "RSW": // CLT-RSW // Updated 09-08-2025
			result += "<!-- Updated 09-08-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS RIELE Q103 CYNTA SHFTY6 KRSW\" readonly>"; // CDR RP
			result += "<br/><br/>East/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT KWEEN5 PITRW Y436 OGGRE AR17 HIBAC SHFTY6 KRSW\" readonly>";
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR HONID BULZI NICKI PLYER TYNEE4 KRSW\" readonly>"; // CDR ES
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY CHS JROSS Q409 PUPYY Q103 CYNTA SHFTY6 KRSW\" readonly>"; // CDR LL
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 11-08-2025
			result += "<!-- Verified with ATCSCC on 11-08-2025 -->";
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 BARMY BATTA ROZBO CHS JROSS Q409 PUPYY Q103 CYNTA SHFTY6 KRSW\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR HONID BULZI NICKI PLYER TYNEE4 KRSW\" readonly>";
			result += "<br/>LL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY CHS JROSS Q409 PUPYY Q103 CYNTA SHFTY6 KRSW\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS GRONK Q103 CYNTA SHFTY6 KRSW\" readonly>";
			break;
		case "SAN": // CLT-SAN // Updated 07-07-2025
			result += "<!-- Updated 07-07-2025 -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-07-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KCLT BOBZY5 BNA J46 TUL MMB FTI J8 GUP J96 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/><br/>South/TXK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC TXK J42 ABI J66 EWM J4 SSO J50 GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>South/AEX<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MERDN AEX J50 ACT INK J50 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><b>For ZHU avoidance use ...AEX J50 LFK JCT J86 ELP...<\/b>";
			result += "<br/><br/>North/STL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J8 STL Q176 CIM J96 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/>North/GCK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA SGF ICT J28 GCK J110 RSK J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>";
			result += "<br/><br/>North via STL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN VHP J80 MCI J24 SLN J102 ALS J44 RSK J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>";
			result += "<br/>South via IAH<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q22 GUSTI Q56 HRV J2 IAH J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>South/ZTL Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS CAE SAV AMG DEFUN J2 IAH J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/>ELP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR JCT J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>GTH 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW GTH CNX J74 SJN J18 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>HNKR 1+2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER CNX J74 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/>LEV WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>PNH 1+2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH J78 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/>ROCKIES SOUTH 2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC EIC J4 ABI J66 EWM J4 SSO J50 GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BNA MEM J66 LIT J6 DRK J78 PKE BARET5 KSAN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
			result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEI AEX J50 ACT INK J50 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA WAKOL Q34 TXK ACT INK J50 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG HITMN Q34 TXK ACT INK J50 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MERDN AEX J50 ACT INK J50 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ FAM J98 SGF PER MMB FTI HOGGZ LUCKI1 KSAN\" readonly>";
			break;
		case "SAT": // CLT-SAT // Updated 07-26-2025
			result += "<!-- Updated 07-26-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MERDN AEX CAAGE QERVO3 KSAT\" readonly>";
			result += "<br/><br/>South/ZTL Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS FISHO Q75 TEEEM ALLMA CEW J2 LCH CAAGE QERVO3 KSAT\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA ARG TXK LLEAD QERVO3 KSAT\" readonly>";
			result += "<br/><b>If wx over TXK: .. BNA ARG LIT J101 LFK CAAGE QERVO3 KSAT<\/b>";
			result += "<br/><br/>North via TUL: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL J25 CWK MARCS2 KSAT\" readonly>";
			result += "<br/><b>NW Arrival: .. TUL J78 IRW ABI WEELS TRVLL DNKIN2 KSAT<\/b>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT SPA CHOPZ MGMRY CATLN SJI LSU LCH IAH IDU KSAT\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 DEBIE CHOPZ MGMRY CATLN SJI LSU LCH IAH IDU MARCS2 KSAT\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA MEM TXK ACT MARCS2 KSAT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-01-2025
			result += "<!-- Verified with ATCSCC on 05-01-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MEI AEX CAAGE QERVO3 KSAT\" readonly>";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA MEM TXK LLEAD QERVO3 KSAT\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG BNA MEM TXK LLEAD QERVO3 KSAT\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MERDN AEX CAAGE QERVO3 KSAT\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ BWG BNA MEM TXK LLEAD QERVO3 KSAT\" readonly>";
			break;
		case "SAV": // CLT-SAV // Updated 09-30-2025
			result += "<!-- Updated 09-30-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL220):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS CAE GRONK PLZZZ KSAV\" readonly>"; // CDR RP
			result += "<br/></br>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BARMY5 BARMY BATTA ROZBO CHS LGRHD SOOOP KSAV\" readonly>"; // CDR BA
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR NOKIE DBN LOTTS KSAV\" readonly>"; // CDR ES
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 TREAL PLZZZ KSAV\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-30-2025
			result += "<!-- Verified with ATCSCC on 09-30-2025 -->";
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 BARMY BATTA ROZBO CHS LGRHD SOOOP KSAV\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR NOKIE DBN LOTTS KSAV\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS KSAV\" readonly>";
			break;
		case "SDF": // CLT-SDF // Updated 04-08-2025
			result += "<!-- Updated 04-08-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL280):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM LAFOX LEDDL1 KSDF\" readonly>"; // CDR RP
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ ANCHR DLAMP8 KSDF\" readonly>";
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET GLAZR LEDDL1 KSDF\" readonly>"; // CDR BZ
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY VXV KSDF\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-29-2025
			result += "<!-- Verified with ATCSCC on 08-29-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET GLAZR LEDDL1 KSDF\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN BUMPY MBELL5 KSDF\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK MOL J24 HVQ Q68 YOCKY LEDDL1 KSDF\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM LAFOX LEDDL1 KSDF\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ YOCKY LEDDL1 KSDF\" readonly>";
			break;
		case "SEA": // CLT-SEA // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN JOT ZZIPR Q156 UFFDA KP03A KIXCO Q142 MLP GLASR3 KSEA\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL GCK HGO J20 PDT CHINS5 KSEA\" readonly>";
			result += "<br/>North via GRR: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ KLYNE VIO OSH HUFFR Q146 KIXCO Q142 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>BUM: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN HCT BFF DBS J82 DNJ J20 PDT CHINS5 KSEA\" readonly>";
			result += "<br/>FAM: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN HCT BFF BOY LKT PDT CHINS5 KSEA\" readonly>";
			result += "<br/>GTH 1/2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW GTH TCC J76 FTI J58 RSK TCH J15 BOI PDT CHINS5 KSEA\" readonly>";
			result += "<br/>PNH 1/2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH ALS JNC J15 BOI PDT CHINS5 KSEA\" readonly>";
			result += "<br/>ROCKIES SOUTH 1: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J45 ABR DIK MLP GLASR3 KSEA\" readonly>";
			result += "<br/>TUL 1: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL GCK HGO J20 PDT CHINS5 KSEA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY VXV J46 BNA J45 STL LMN ONL J151 BIL J136 MLP GLASR3 KSEA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY FAM STJ LNK ANW RAP BIL J136 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN HCT BFF DBS J82 DNJ J20 PDT CHINS5 KSEA\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 HEVAN VHP JOT DBQ MCW J16 DPR J204 GTF J36 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ VHP JOT DBQ MCW J16 DPR J204 GTF J36 MLP GLASR3 KSEA\" readonly>";
			break;
		case "SFO": // CLT-SFO // Updated 09-14-2025
			result += "<!-- Updated 09-14-2025 -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 09-14-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA SGF ICT J28 MLF J80 OAL INYOE DYAMD5 KSFO\" readonly>"; // CDR RP
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE IIU J8 STL J24 MCI J80 OAL DYAMD DYAMD5 KSFO\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB CIM RSK J58 OAL DYAMD DYAMD5 KSFO\" readonly>"; // CDR RP
			result += "<br/><br/>South via TXK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK SPS J76 FTI J58 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>South via EWM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC TXK J42 ABI J66 EWM Q2 HEDVI BLH J65 PMD AVE MAKRS SERFR SERFR4 KSFO\" readonly>";
			result += "<br/><br/>PNH 2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH RSK J58 OAL INYOE DYAMD5 KSFO\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-14-2025
			result += "<!-- Verified with ATCSCC on 09-14-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY SQS LIT RZC J182 GLD J80 OAL DYAMD DYAMD5 KSFO\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK HNKER TCC J76 FTI J58 OAL DYAMD DYAMD5 KSFO\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM RYANS MCI J80 OAL DYAMD DYAMD5 KSFO\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB CIM RSK J58 OAL DYAMD DYAMD5 KSFO\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ FAM J98 SGF ICT J28 MLF J80 OAL DYAMD DYAMD5 KSFO\" readonly>";
			break;

// CLT-SGF skipped
// CLT-SHV skipped

		case "SLC": // CLT-SLC // Updated 05-01-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-01-2025 PCM -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN HLC J80 FQF J116 EKR RACER JAZZZ1 KSLC\" readonly>"; // CDR RP
			result += "<br/>Via TUL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL GCK HGO EKR PITTT1 KSLC\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP BRL OVR OBH BFF J94 OCS CARTR1 KSLC\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW GTH TCC ALS JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/><br/>South via ELP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC TXK J42 ABI J50 ELP J86 INW CORKR J11 BCE QWENN6 KSLC\" readonly>";
			//result += "<br/><br/>ELP: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR MGMRY CATLN Q56 PEKON J86 ELP J86 BAVPE CORKR J11 BCE QWENN6 KSLC\" readonly>";
			result += "<br/><br/>EWM 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN EIC J4 ABI J66 EWM DMN GREBE J86 BAVPE CORKR J11 BCE QWENN6 KSLC\" readonly>";
			result += "<br/>GTH 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW GTH TCC ALS JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>LEV WEST: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE FST CNM CME CNX JNC HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>PNH 1/2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH ALS JNC HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>ROCKIES SOUTH 2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK GTH TCC J76 FTI RSK JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>TUL 1: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL GCK HGO EKR RACER JAZZZ1 KSLC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-01-2025
			result += "<!-- Verified with ATCSCC on 05-01-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEI ICT J182 GLD J80 FQF J116 EKR RACER JAZZZ1 KSLC\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG FAM J112 BUM SLN HLC J80 FQF J116 EKR RACER JAZZZ1 KSLC\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN HLC J80 FQF J116 EKR RACER JAZZZ1 KSLC\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ FAM J112 BUM SLN HLC J80 FQF J116 EKR RACER JAZZZ1 KSLC\" readonly>";
			break;
		case "SMF": // CLT-SMF // Updated 07-18-2025
			result += "<!-- Updated 07-18-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 07-18-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA SGF ICT J28 MLF CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD FLM J24 VHP BVT BDF IOW DSM OBH BFF J94 LLC ANAHO SLMMR5 KSMF\" readonly>"; // CDR WE
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH J78 ABQ J72 PGS J86 BTY DONNR SLMMR5 KSMF\" readonly>";
			result += "<br/><br/>South via EWM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC TXK J42 FUZ J4 RUSTT BOILE J50 LANDO J65 EHF NURAY SUUTR4 KSMF\" readonly>";
			result += "<br/><br/>PNH 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH RSK J58 MLF CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>ROCKIES SOUTH: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK GTH TCC J76 FTI J58 MLF CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>TUL 1: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL TOTOE ALS DVC MLF CRASY SLMMR5 KSMF\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-18-2025
			result += "<!-- Verified with ATCSCC on 07-18-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN JNC TREMO CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 DWINE J14 PNH RSK J58 MLF CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP BVT BDF IOW DSM OBH BFF J94 LLC ANAHO SLMMR5 KSMF\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD FLM J24 VHP BVT BDF IOW DSM OBH BFF J94 LLC ANAHO SLMMR5 KSMF\" readonly>";
			break;
		case "SNA": // CLT-SNA // Updated 09-17-2025
			result += "<!-- Updated 09-17-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 09-17-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB FTI J8 GUP J96 DRK HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/><b>ZKC Avoid: .. J46 ARG IRW J78 DRK HIMDU DSNEE6 KSNA<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J8 STL Q176 CIM J96 DRK HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC TXK J42 ABI J66 EWM J4 BXK J212 CULTS EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/><br/>North via STL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN VHP J80 MCI J24 SLN J102 ALS J44 RSK J64 TBC J236 EED DSNEE6 KSNA\" readonly>";
			result += "<br/>South via IAH<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q22 GUSTI Q56 HRV J2 IAH J86 ELP J50 SSO J4 BXK J212 CULTS EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/>South/ZTL Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS CAE SAV AMG DEFUN J2 IAH J86 ELP J50 SSO J4 BXK J212 CULTS EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/><br/>HNKR 1+2<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER CNX J74 SJN J231 NABOB HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/>LEV WEST<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J50 SSO J4 BXK J212 CULTS EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/>PNH 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH J6 DRK HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BNA MEM J66 LIT J6 DRK J96 PSP KAYOH8 KSNA\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 09-17-2025
			break;
		case "SRQ": // CLT-SRQ // Updated 06-14-2025
			result += "<!-- Updated 06-14-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS RIELE Q103 PUPYY KYYUU LUBBR3 KSRQ\" readonly>"; // CDR RP
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-14-2025
			result += "<!-- Verified with ATCSCC on 06-14-2025 -->";
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 BARMY BATTA ROZBO CHS JROSS Q409 PUPYY KYYUU LUBBR3 KSRQ\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR HONID BANGZ2 KSRQ\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS RIELE Q103 PUPYY KYYUU LUBBR3 KSRQ\" readonly>";
			break;
		case "STL": // CLT-STL // Updated 08-22-2025
			result += "<!-- Updated 08-22-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA BOOSH3 KSTL\" readonly>"; // CDR RP
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP AARCH2 KSTL\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ VUZ J41 MEM BOOSH3 KSTL\" readonly>";
			result += "<br/><br/>North via HVQ<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ VHP AARCH2 KSTL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT NALEY FLM VHP KSTL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-22-2025
			result += "<!-- Verified with ATCSCC on 08-22-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEM BOOSH3 KSTL\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR GAD MEM BOOSH3 KSTL\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE IIU PXV BOOSH3 KSTL\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA BOOSH3 KSTL\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN EMPTY J80 VHP AARCH2 KSTL\" readonly>";
			break;
		case "SYR": // CLT-SYR // Updated 09-30-2025
			result += "<!-- Updated 09-30-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS JST NABOR KSYR\" readonly>";
			result += "<br/></br>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK AML J220 MICAH KSYR\" readonly>"; // Based on CDR KL
			result += "<br/>West/ZDC Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD Q39 ASERY Q71 PSB J59 SYR KSYR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-30-2025
			result += "<!-- Verified with ATCSCC on 09-30-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV ATUME Q71 GEFFS JST ELZ NABOR KSYR\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK BRV AML Q227 STENT CFB T335 CORTA KSYR\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS JST NABOR KSYR\" readonly>";
			break;
		case "TLH": // CLT-TLH // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC ALLMA SZW KTLH\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>LL: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY CHS JROSS Q409 PUPYY KTLH\" readonly>";
			break;
		case "TPA": // CLT-TPA // Updated 05-07-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-07-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC TEUFL BAAMF DADES2 KTPA\" readonly>"; // CDR RP
			result += "<br/><b style=\"color:orange\">As of 05-07-2025 Fkeys will flag every route except CDR RP as Mandatory Route Violation<\/b>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR HONID MAATY5 KTPA\" readonly>"; // CDR ES
			result += "<br/>East: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD OMN NICCK DADES2 KTPA\" readonly>";
			result += "<br/>East OW: <input style=\"width:75%\" value=\"KCLT KWEEN5 PITRW Y436 OGGRE AR17 HIBAC DADES2 KTPA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><input style=\"width:75%\" value=\"KCLT KER5 HAMLN CAE AMG TAY LAL BRDGE BRDGE9 KTPA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-07-2025
			result += "<!-- Verified with ATCSCC on 05-07-2025 -->";
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 BARMY BATTA ROZBO CHS JROSS Q409 PUPYY BAAMF DADES2 KTPA\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR HONID MAATY5 KTPA\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC TEUFL BAAMF DADES2 KTPA\" readonly>";
			break;
		case "TUL": // CLT-TUL // Updated 09-17-2025
			result += "<!-- Updated 09-17-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA RZC TUL KTUL\" readonly>"; // CDR RP
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 LIT FSM TUL KTUL\" readonly>";
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J78 FAM J98 SGF VINTA3 KTUL\" readonly>";
			result += "<br/><b>Based on CDR JJ (Coord Rqd), see CDR list below<\/b>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY VXV J46 ARG RZC KTUL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
			result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR GAD MEM RZC TUL KTUL\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM IIU EOS VINTA VINTA3 KTUL\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA RZC TUL KTUL\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ FAM EOS KTUL\" readonly>";
			break;
		case "TYS": // CLT-TYS // Updated 04-16-2025
			result += "<!-- Updated 04-16-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL260):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV KTYS\" readonly>"; // CDR RP
			result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT NOKIE THRSR JILIS VXV KTYS\" readonly>"; // CDR BE
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT BARMY5 RDU LYH HVQ Q68 YOCKY VXV KTYS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY SOT VXV KTYS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-16-2025
			result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT NOKIE THRSR JILIS VXV KTYS\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO SLEPP VXV KTYS\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV KTYS\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ Q68 YOCKY VXV KTYS\" readonly>";
			break;
		case "VPS": // CLT-VPS // Updated 09-30-2025
			result += "<!-- Updated 09-30-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DARED CORKY KVPS\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGM CORKY KVPS\" readonly>";
			result += "<br/>South/ZTL Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS FISHO Q75 TEEEM ALLMA CORKY KVPS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 DEBIE BYRDS DNICE HUZER BAIZE DEFUN KVPS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-10-2025
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 BARMY BATTA ROZBO CHS JROSS Q409 ISUZO ALLMA CABLO KVPS\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR RSVLT DARED CORKY KVPS\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DARED CORKY KVPS\" readonly>";
			break;
		case "XNA": // CLT-XNA // Updated 08-22-2025
			result += "<!-- Updated 08-22-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA Q36 RZC KXNA\" readonly>"; // CDR RP
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN LOBBS J41 MEM RZC KXNA\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J78 FAM J98 SGF KXNA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-22-2025
			result += "<!-- Verified with ATCSCC on 08-22-2025 -->";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT NOKIE MGMRY MEI SQS LIT KXNA\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR GAD MEM RZC KXNA\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE IIU FAM KXNA\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA RZC KXNA\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ J8 IIU FAM KXNA\" readonly>";
			break;			
/* TODO - FOS ROUTES: KCLT - KXNA
KCLT BOBZY5 BNA Q36 RZC KXNA
KCLT BOBZY5 BNA J45 PLESS J78 FAM J98 SGF KXNA
KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN LOBBS J41 MEM RZC KXNA
KCLT JOJJO5 CUBIM Q50 IIU J78 FAM J98 SGF KXNA
KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN XESSS LIT RZC KXNA
KCLT BEAVY6 GANDT NOKIE MGMRY MEI SQS LIT KXNA
KCLT ESTRR5 IPTAY CHOPZ THRSR GAD MEM RZC KXNA
KCLT JOJJO5 JOJJO DOOGE IIU FAM KXNA
KCLT BOBZY5 BNA RZC KXNA
KCLT WEAZL5 CLAWD HVQ J8 IIU FAM KXNA
*/
		case "YYC": // CLT-YYC // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 OCASE FLM J24 VHP BVT DBQ RWF J90 ABR J70 DIK GGW J478 YQL ILOSA EBGAL7 CYYC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "YUL": // CLT-YUL // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS PSB SYR ART IMPAC4 CYUL\" readonly>"; // CDR RP
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KCLT KRITR6 SMIAM LYH GVE Q34 RBV Q22 LLUND CAM JASDU PBERG CARTR5 CYUL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BA (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND CAM JASDU PBERG CARTR5 CYUL\" readonly>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 HNN EWC JHW ART IMPAC4 CYUL\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD JHW ART IMPAC4 CYUL\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS PSB SYR ART IMPAC4 CYUL\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN AIR JHW ART IMPAC4 CYUL\" readonly>";
			break;
		case "YVR": // CLT-YVR // Updated 02-06-2025
			result += "<!-- Updated 02-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 TONIO GBEES DONVE MZV ONTIJ MMUDY CTB ONEAL BOOTH CANUC5 CYVR\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET LORNN RIZZZ SPKER RZC TUL DVC PUC TCH YKM PAE PAINE4 CYVR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "YYZ": // CLT-YYZ // Updated 06-14-2025
			result += "<!-- Updated 06-14-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS OXMAN LINNG3 CYYZ\" readonly>"; // CDR RP
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD SVM QWERI NUBER6 CYYZ\" readonly>"; // CDR JJ
			result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK AML Q221 DLMAR WOZEE LINNG3 CYYZ\" readonly>"; // CDR KL
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-14-2025
			result += "<!-- Verified with ATCSCC on 06-14-2025 -->";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 HNN QWERI NUBER6 CYYZ\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD SVM QWERI NUBER6 CYYZ\" readonly>";
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK AML Q221 DLMAR WOZEE LINNG3 CYYZ\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS OXMAN LINNG3 CYYZ\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ QWERI NUBER6 CYYZ\" readonly>";
			break;
	}
	return result;
}
