clt_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
	switch(arvl) {
		case "ABE": // Updated 02-20-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA COURG REEES T299 DUMMR KABE\" readonly>"; // CDR RP
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB JST MIP KABE\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>KL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII THEOO COURG REEES T299 DUMMR KABE\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA COURG REEES T299 DUMMR KABE\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ PSB MIP KABE\" readonly>"; // Verified with ATCSCC on 02-20-2025
			break;
		case "ACY": // Updated 02-20-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KILNS5 AUDII BBDOL KRABY BUKYY JAYBO SIE KACY\" readonly>"; // CDR RP
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL RDU LVL RIC SIE KACY\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM SITTR Q34 GVE Q127 BUKYY JAYBO SIE KACY\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>KR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK ASBUR DENNY MAULS Q34 GVE Q127 BUKYY JAYBO SIE KACY\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII BBDOL KRABY BUKYY JAYBO SIE KACY\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>W1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 GVE Q127 BUKYY JAYBO SIE KACY\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ JST HAR DQO SIE KACY\" readonly>"; // Verified with ATCSCC on 02-20-2025
			break;
		case "AGS": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT KAGS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY FLO CAE KAGS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-16-2025
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY KAGS\" readonly>";
			result += "<br/>LL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY FLO CAE KAGS\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT IRQ KAGS\" readonly>";
			break;
		case "ALB": // Updated 02-20-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND TRUDE V487 CANAN KALB\" readonly>"; // CDR RP
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK EKN LEJOY PSB CFB J190 RKA KALB\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD JHW Q82 LOXXE KALB\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>KR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS PSB CFB J190 RKA KALB\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND TRUDE V487 CANAN KALB\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ PSB CFB J190 RKA KALB\" readonly>"; // Verified with ATCSCC on 02-20-2025
			break;
		case "ATL": // Updated 02-21-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL240):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 TNSLY LEAVI OZZZI1 KATL\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS CAE SKWKR SITTH2 KATL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>B1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT SKWKR JJEDI3 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT SKWKR SITTH2 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN STRWY ONDRE1 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO BENBY PUPDG ONDRE1 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 TNSLY LEAVI OZZZI1 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD PUPDG ONDRE1 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			break;
		case "AUS": // Updated 02-21-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ GARTS LCH WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT BOBZY BRAYN GQO DEVAC GAGLE ELD LFK WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 HARAY SPA LGC MEI MHZ AEX IAH BITER9 KAUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY LCH LUKKN WLEEE7 KAUS\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA ELD EIC WINDU SEWZY6 KAUS\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG LCH LUKKN WLEEE7 KAUS\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MERDN LCH LUKKN WLEEE7 KAUS\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR YOCKY Q68 LITTR TXK ACT BLEWE5 KAUS\" readonly>"; // Verified with ATCSCC on 02-21-2025
			break;
		case "AVL": // Updated 02-21-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN KAVL\" readonly>"; // CDR RP
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY SUG KAVL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO BENBY KAVL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN KAVL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			break;
		case "AVP": // Updated 02-21-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA COURG LOYDD GAAPP LVZ KAVP\" readonly>"; // CDR RP
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV CEMEX HVQ PSB MIP LVZ KAVP\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE DILNN AML HAR LVZ KAVP\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII THEOO COURG LOYDD GAAPP LVZ KAVP\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA COURG LOYDD GAAPP LVZ KAVP\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ ESL COURG LOYDD GAAPP LVZ KAVP\" readonly>";
			break;
		case "BDL": // Updated 02-21-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 RBV Q419 DPK DPK3 KBDL\" readonly>"; // CDR RP
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ PSB HNK STELA1 KBDL\" readonly>";
			result += "<br/><br/>MICAH: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK AML J220 MICAH Q227 KONJE J190 ALB STELA1 KBDL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"RICKCLT KER4 MERIL RDU LVL  ENO RBV JFK DPK DPK3 KBDL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 HNN DURRI WWSHR Q29 JHW Q82 MEMMS WILET STELA1 KBDL\" readonly>" // Verified with ATCSCC on 02-21-2025
			result += "<br/>KW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY PANDY Q109 YURCK Q97 PAACK JAMIE CONFR Q133 JFK DPK DPK3 KBDL\" readonly>" // Verified with ATCSCC on 02-21-2025
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 RBV Q419 DPK DPK3 KBDL\" readonly>" // Verified with ATCSCC on 02-21-2025
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 RBV Q419 DPK DPK3 KBDL\" readonly>" // Verified with ATCSCC on 02-21-2025
			break;
		case "BGR": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 FOXWD BOS KBGR\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA ESL PSB RKA BTV KBGR\" readonly>";
			result += "<br/>AVOID ZDC/ZNY: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE ZIEBR APE J83 DJB JHW Q29 CABCI RANGY BGR KBGR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "BHM":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR KIOSK KBHM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 DEBIE RMG KBHM\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY HERKO KBHM\" readonly>";
			result += "<br/>JJ: <input style=\"width:75%\" value=\"KCLT JOJJO4 JOJJO VXV DIODE KBHM\" readonly>";
			result += "<br/>WE: <input style=\"width:75%\" value=\"KCLT WEAZL4 CLAWD ZIEBR GQO DIODE KBHM\" readonly>";
			break;
		case "BNA": // Updated 01-28-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL300):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV SWFFT2 KBNA\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD TONIO RYANS FORKS PASLY4 KBNA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT IRQ THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 HARAY BRAYN REWET VXV KBNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT MGMRY VUZ ZANZA SWFFT2 KBNA\" readonly>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM VHP LULOU RYYMN2 KBNA\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV SWFFT2 KBNA\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ HYK FORKS PASLY4 KBNA\" readonly>";
			break;
		case "BOS": // Updated 01-04-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS PSB HNK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/><br/>FLORIDA TO NE 3: <input style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL RDU RIC ENO RBV JFK ORW7 KBOS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE APE WWSHR Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY PANDY Q109 YURCK Q97 PAACK JAMIE CONFR Q133 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			break;
		case "BTV": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR5 FILDS ILLSA ESL PSB RKA KBTV\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA ESL PSB RKA KBTV\" readonly>";
			result += "<br/>WE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL4 CLAWD BKW GEFFS Q71 PSB RKA KBTV\" readonly>";
			break;
		case "BUF":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS EWC DKK KBUF\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ EWC DKK KBUF\" readonly>";
			result += "<br/>East: <input style=\"width:75%\" value=\"KCLT BARMY5 RDU FAK AML J220 SFK KBUF\" readonly>";
			result += "<br/>East via APE: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE ECB APE JHW KBUF\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA RINTE KLYNE Q29 JHW DKK WOZEE KBUF\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE TONIO Q67 HNN EWC KBUF\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN LEONI WEVEL KBUF\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS EWC DKK KBUF\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ AIR JHW DKK WOZEE KBUF\" readonly>";
			break;
		case "BWI": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KILNS5 AUDII THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/><br/>PSK (FL230 to PSK): <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK ROCKA TBART RAVNN7 KBWI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT RDU RIC RIPKN2 KBWI\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV CEMEX KONGO Q34 SITTR CJAAE RAVNN7 KBWI\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE APE KEMAN ANTHM5 KBWI\" readonly>";
			result += "<br/>KR (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK JOOEY RAVNN7 KBWI\" readonly>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC FLO RDU GOOOB THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD BKW CJAAE RAVNN7 KBWI\" readonly>";
			break;
		case "CAE": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL100):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS KCAE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 BUCKL KCAE\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR DEBIE IRQ CAE KCAE\" readonly>";
			break;
		case "CAK": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT WEAZL3 CLAWD Q39 ASERY JPU ZZIPS1 KCAK\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY3 BOBZY BRAYN REWET VXV CEMEX Q67 DARYN DARYN SPOCC HUUVR1 KCAK\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO3 JOJJO DOOGE TONIO Q67 DARYN SPOCC HUUVR1 KCAK\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS3 AUDII FAK LDN ATWOO MGOOD ZZIPS KCAK\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL3 CLAWD Q39 ASERY JPU ZZIPS1 KCAK\" readonly>";
			break;
		case "CHS":
			result += "<br/><br/><b>Faa Pref Route (Avg FL180):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM OSPRI7 KCHS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOWMA KCHS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BA (Coord Req): <input style=\"width:75%\" value=\"KCLT BARMY5 NUTZE ISO RAPZZ AMYLU3 KCHS\" readonly>";
			result += "<br/>ES (Coord Req): <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY IRQ OSPRI7 KCHS\" readonly>";
			result += "<br/>RP (Ok to File): <input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM OSPRI7 KCHS\" readonly>";
			break;
		case "CID": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO3 DOOGE FLM J24 VHP RBS BDF KCID\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "CLE": // Updated 02-01-2025
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
		case "CMH": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD MCGNS SCRLT2 KCMH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 NALEY HVQ HNN TASKE BREMN KCMH\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 JONEN MCGNS SCRLT2 KCMH\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM JADUB DUBLN1 KCMH\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN TOMAC LEJOY AIR CLPRR3 KCMH\" readonly>";
			result += "<br/>RP (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN SCRLT SCRLT2 KCMH\" readonly>";
			break;
		case "CVG": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM JAKIE6 KCVG\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV JAKIE6 KCVG\" readonly>";
			result += "<br/>ES: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VXV JAKIE6 KCVG\" readonly>";
			result += "<br/>KL: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK MOL FAIIR GAVNN7 KCVG\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM JAKIE6 KCVG\" readonly>";
			result += "<br/>WE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD FAIIR GAVNN7 KCVG\" readonly>";
			break;
		case "DAB": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED LPERD TTHOR3 KDAB\" readonly>";
			result += "<br/>ZTL TO FL ESCAPE (Max FL190): <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD TTHOR KDAB\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 HAMLN WURFL Q83 JEVED Q97 KENLL TTHOR KDAB\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR NOKIE YANTI KYLEG TTHOR3 KDAB\" readonly>";
			result += "<br/>LL: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY SMPRR Q85 LPERD TTHOR3 KDAB\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD TTHOR3 KDAB\" readonly>";
			break;
		case "DAY": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 OCASE FLM KDAY\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 PSK HVQ KDAY\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "DCA": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KILNS5 AUDII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/><br/>PSK (FL230 to PSK): <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 JOTTA HENBY LYH GVE KDCA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV KONGO Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE APE AIR J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC FLO RDU FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR TRUPS5 KDCA\" readonly>";
			break;
		case "DEN": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM J110 GCK KIISS CLASH4 KDEN\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM EWO PXV FTZ MCI IKUME BRWRY LAWGR3 KDEN\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN KM24I KF27E KF30C MMB TOTOE HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/><br/>GCK: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH ZIGEE NIIXX3 KDEN\" readonly>";
			result += "<br/>PNH: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH ZIGEE NIIXX3 KDEN\" readonly>";
			result += "<br/>TUL 1: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL GCK KIISS CLASH4 KDEN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BNA FAM J112 BUM J110 GCK DANDD1 KDEN\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEM RZC PER GCK KIISS CLASH4 KDEN\" readonly>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q116 SGF BUM J110 GCK KIISS CLASH4 KDEN\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM IIU J112 BUM J110 GCK KIISS CLASH4 KDEN\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM J110 GCK KIISS CLASH4 KDEN\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ IIU J112 BUM J110 GCK KIISS CLASH4 KDEN\" readonly>";
			break;
		case "DFW": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA MEM J66 LIT MEEOW FEWWW BRDJE5 KDFW\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN MLU YUYUN BEREE3 KDFW\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE CVG STL J8 SGF J98 TUL KLAWW VKTRY2 KDFW\" readonly>";
			result += "<br/><br/>DFW EAST 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR CRGER GUTZZ SOCKK4 KDFW\" readonly>";
			result += "<br/>DFW EAST 2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MERDN MCB AEX DAS IAH CRGER GUTZZ SOCKK4 KDFW\" readonly>";
			result += "<br/>SEEVR 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC YUYUN WHINY4 KDFW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 HARAY SPA RMG VUZ SQS YEAGR4 KDFW\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEI AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG LIT FEWWW SEEVR4 KDFW\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC YUYUN BEREE3 KDFW\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ Q68 LITTR FEWWW SEEVR4 KDFW\" readonly>";
			break;
		case "DSM": // Updated 01-04-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN BVT BDF MZV IOW KDSM\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J45 DSM KDSM\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM IIU ENL IRK V175 DSM KDSM\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA J45 DSM KDSM\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ ENL IRK V175 DSM KDSM\" readonly>";
			break;
		case "DTW": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD JAMOX BONZZ2 KDTW\" readonly>";
			result += "<br/><br/>DTW EAST: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM WWODD HANBL3 KDTW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY VXV J43 FLM DQN KDTW\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV IIU WWODD LECTR3 KDTW\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB HNN SUBWY CRAKN2 KDTW\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN TOMAC LEJOY Q178 KOZAR BONZZ2 KDTW\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD JAMOX BONZZ2 KDTW\" readonly>";
			break;
		case "ECP": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ CSG EUF RRS KECP\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC TEEEM CABLO KECP\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR RSVLT EUF RRS KECP\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC ALLMA CABLO KECP\" readonly>";
			break;
		case "EWR": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KILNS5 AUDII QUART PHLBO4 KEWR\" readonly>";
			result += "<br/><br/>Full OW: <input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM DEDDY Y436 DIZNY WHOOS Y494 YAALE Y497 SUBBS CYN GXU RBV V249 METRO KEWR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 NALEY BKW EKN IHD PSB FQM FQM3 KEWR\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV ATUME Q71 KONGO Q34 GVE PHLBO4 KEWR\" readonly>";
			result += "<br/>JJ (Coord Req): <input style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD KLYNE Q29 DORET SLT FQM3 KEWR\" readonly>";
			result += "<br/>KW (Coord Req): <input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY RAYVO Q87 ALWZZ OGRAE Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>RP (Ok to File): <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>WE (Coord Req): <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 GVE PHLBO4 KEWR\" readonly>";
			break;
		case "EYW": // Updated 02-01-2025
			case "EYW": // Updated 03-11-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC TEEEM Q75 ENEME Q65 DOFFY Q79 FEMID TUNSL KEYW\" readonly>"; // CDR RP
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT MCN BULZI KRAKN1 KEYW\" readonly>";
			result += "<br/>OW East: <input style=\"width:75%\" value=\"KCLT LILLS3 LILLS ILM IDOLS PRTHR JAZZI AR24 COACH PELCN CANIT AR23 ZFP BR69V MAYKO FNTSY1 KEYW\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-11-2025
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR HONID Q81 TUNSL KEYW\" readonly>";
			result += "<br/>LL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY ELLDE Q97 WOPNR Q93 LINEY Y262 TUNSL KEYW\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC TEEEM Q75 ENEME Q65 DOFFY Q79 FEMID TUNSL KEYW\" readonly>";
			break;
		case "FLL": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED Q97 PRMUS CUUDA3 KFLL\" readonly>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KCLT LILLS3 LILLS CHIEZ Y291 MAJIK CUUDA3 KFLL\" readonly>";
			result += "<br/><br/>ZTL TO FL ESCAPE (Max FL190): <input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC REIDS ENEME TEEKY3 KFLL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER3 HAMLN CAE SAV OMN GISSH5 KFLL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR ZPLEN TEEKY3 KFLL\" readonly>";
			result += "<br/>LL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY CAKET Q97 PRMUS CUUDA3 KFLL\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED Q97 PRMUS CUUDA3 KFLL\" readonly>";
			break;

// FSD skipped
// GPT skipped
// GRB skipped			

		case "GRR":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM FWA AZO KGRR\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ J85 DJB J34 CRL KGRR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA PXV GSH KGRR\" readonly>";
			result += "<br/>RP (Ok to File): <input style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE FLM FWA AZO KGRR\" readonly>";
			result += "<br/>WE (Coord Req): <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ MIE FWA AZO KGRR\" readonly>";
			break;
		case "GSO": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL090):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 GANTS KGSO\" readonly>";
			break;
		case "GSP": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY SPA KGSP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 HARAY SPA KGSP\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "HSV": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN GQO RQZ KHSV\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR GAD RQZ KHSV\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG BNA RQZ KHSV\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 DEBIE RMG RQZ KHSV\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY VUZ RQZ KHSV\" readonly>";
			result += "<br/>ES: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN IRRTH KHSV\" readonly>";
			result += "<br/>JJ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO4 NOONN SYI RQZ KHSV\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET RQZ KHSV\" readonly>";
			result += "<br/>WE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR SYI RQZ KHSV\" readonly>";
			break;
		case "IAD": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KILNS5 AUDII DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK PERRI HESEE GIBBZ5 KIAD\" readonly>";
			result += "<br/><br/>Full OW: <input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO DEDDY Y436 DIZNY WHOOS Y494 SILLY LYNUS B24 DASHA ENO V268 BAL V44 MRB KIAD\" readonly>";
			result += "<br/>PSK: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK PERRI HESEE GIBBZ5 KIAD\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO JARLO GIBBZ5 KIAD\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB JARLO GIBBZ5 KIAD\" readonly>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC FLO RDU BZNGA DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD JARLO GIBBZ5 KIAD\" readonly>";
			break;
		case "IAH": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR SARKK AEX SKNRD4 KIAH\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS CAE ALLMA KJ06O SJI NNCEE2 KIAH\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL J87 CVE DRLLR5 KIAH\" readonly>";
			result += "<br/><br/>DOOBI N/S: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR MGMRY CATLN Q56 SJI LINKK1 KIAH\" readonly>";
			result += "<br/>IAHAEX: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SWB ZEEKK2 KIAH\" readonly>";
			result += "<br/>LINKK1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR SARKK AEX DOOBI2 KIAH\" readonly>";
			result += "<br/>LINKK2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY GARTS MCB J50 AEX DOOBI2 KIAH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 DEBIE AHN052 AHN VUZ MHZ AEX OHIIO4 KIAH\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY SJI NNCEE2 KIAH\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG LIT DHART SWB ZEEKK2 KIAH\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR SARKK AEX GESNR1 KIAH\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR YOCKY Q68 LITTR DHART SWB ZEEKK2 KIAH\" readonly>";
			break;
		case "ILM":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT LILLS3 LILLS V296 ILM KILM\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>KW (Coord Req): <input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC KILM\" readonly>";
			result += "<br/>RP (Ok to File): <input style=\"width:75%\" value=\"KCLT LILLS3 LILLS V296 ILM KILM\" readonly>";
			result += "<br/>WE (Coord Req): <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 MAULS SBV V136 FAY V296 ILM KILM\" readonly>";
			break;
		case "IND": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IBATE HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY CUBIM IIU KIND\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN TOMAC LEJOY AIR RINTE SNKPT2 KIND\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN PLASH SNKPT2 KIND\" readonly>";
			break;

// CLT-JAN skipped

		case "JAX": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS ESENT LUNNI1 KJAX\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT IRQ FINNE OHDEA1 KJAX\" readonly>";
			result += "<br/>East/OW: <input style=\"width:75%\" value=\"KCLT KWEEN5 PITRW Y436 OGGRE AR17 BAHAA AR5 JAWSS KJAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY CHS ESENT LUNNI1 KJAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR NOKIE DUCHY OHDEA1 KJAX\" readonly>";
			result += "<br/>LL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY CHS ESENT LUNNI1 KJAX\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS ESENT LUNNI1 KJAX\" readonly>";
			break;
		case "JFK": // Updated 01-17-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 TYI Q64 SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/><br/>Full OW: <input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM DEDDY Y436 DIZNY WHOOS Y494 YAALE Y495 CAMRN CAMRN4 KJFK\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL TYI ORF RADDS SIE CAMRN4 KJFK\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV FLM ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 TYI Q64 SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 TYI ORF SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q108 SIE CAMRN4 KJFK\" readonly>";
			break;
		case "LAS": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP J80 GLD J146 HBU J28 HVE GGAPP CHOWW3 KLAS\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY MEMFS TXK FUZ J4 SSO ELLDA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/>ABI: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC EIC J4 ABI CME J15 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>HNKER 1/2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>LAS NO DVC: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC TXK BYP SPS J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BNA J46 TUL J78 IRW J74 TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEM ARG BUM J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN LIT J14 PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM FAM J112 BUM J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA LIT J14 PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR YOCKY BWG ARG FSM IRW PNH J58 FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
			break;
		case "LAX": // Updated 03-10-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB FTI J244 ZUN DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>"; // CDR RP
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM HOPAP IMPEL KK51K KK45C TOTOE Q176 CIM J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA MEM LIT BYP ABI INK J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><br/>ABI: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC EIC J4 ABI EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>HNKR 1+2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW HNKER CNX J74 SJN J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>LEV WEST: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>PNH 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>ROCKIES SOUTH: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC EIC J4 ABI J66 EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>TUL 1: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB FTI J8 GUP J96 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BNA MEM J66 LIT J6 DRK J231 TNP BASET5 KLAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-10-2025
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY IGB LIT J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 LIT J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG ARG FSM IRW J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA LIT J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR YOCKY LIT J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			break;
		case "LEX": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM KLEX\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS LNDIZ TAFTT KLEX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KNI3 FLYYN TONIO KLEX\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "LGA": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/><br/>North/West: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK EKN EMNEM PSB MIP MIP4 KLGA\" readonly>";
			result += "<br/>East/OW/ZDC Avoid: <input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM DEDDY Y436 DIZNY WHOOS Y494 YAALE Y495 OWENZ FATON HOFFI KEYED BDR V433 KLGA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT RDU HPW HUBBS PXT KORRY4 KLGA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV FLM ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY RAYVO Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 GVE PROUD2 KLGA\" readonly>";
			break;
		case "LIT": // Updated 02-06-2025
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
		case "MCI": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA ARG SGF TYGER7 KMCI\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J8 BOSIE LAPOW RUDDH3 KMCI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY VXV BNA J46 ARG SGF TYGER7 KMCI\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY IGB MEM J41 SGF TYGER7 KMCI\" readonly>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q116 SGF TYGER7 KMCI\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE FLM J24 VHP J80 SPI BQS8 KMCI\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA ARG SGF TYGER7 KMCI\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ VHP SPI BQS8 KMCI\" readonly>";
			break;
		case "MCO": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD SNFLD3 KMCO\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/>East/OW: <input style=\"width:75%\" value=\"KCLT KWEEN5 PITRW Y436 OGGRE Y289 BAHAA HIBAC ALYNA4 KMCO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 HAMLN CAE SAV OMN BITHO7 KMCO\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/>LL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY SMPRR Q85 LPERD GTOUT1 KMCO\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD GTOUT1 KMCO\" readonly>";
			break;
		case "MDT":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA COURG BAMMY T299 HAR KMDT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL AUDII FAK BRV EMI KMDT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV AIR JST HAR KMDT\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB AIR JST HAR KMDT\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII THEOO COURG BAMMY T299 HAR KMDT\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA COURG BAMMY T299 HAR KMDT\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN AIR JST HAR KMDT\" readonly>";
			break;
		case "MEM": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA BLUZZ5 KMEM\" readonly>"; // CDR RP
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BNA WLDER1 KMEM\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC MGMRY VUZ WASER VANZE3 KMEM\" readonly>";
			result += "<br/>ES: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN WASER VANZE3 KMEM\" readonly>";
			result += "<br/>JJ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM RAMRD BLUZZ5 KMEM\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA BLUZZ5 KMEM\" readonly>";
			result += "<br/>WE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ RAMRD BLUZZ5 KMEM\" readonly>";
			break;
		case "MGM": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ KMGM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER3 DEBIE AHN KMGM\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "MHT": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND SMYTH ROZZE2 KMHT\" readonly>"; // CDR RP
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS PSK EKN EMNEM PSB CFB J190 RKA PONCT ROZZE2 KMHT\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY REWET VXV ECB AIR PSB PONCT ROZZE2 KMHT\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB AIR PSB PONCT ROZZE2 KMHT\" readonly>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY PANDY Q109 YURCK Q97 PAACK JAMIE CONFR Q133 LLUND SMYTH ROZZE2 KMHT\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND SMYTH ROZZE2 KMHT\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ PSB PONCT ROZZE2 KMHT\" readonly>";
			break;
		case "MIA":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED Q97 DEBRL CSTAL2 KMIA\" readonly>";
			result += "<br/><br/>Ltd Overwater: <input style=\"width:75%\" value=\"KCLT KWEEN5 PITRW Y436 EBEAR DUUNK Y313 HOAGG BNFSH2 KMIA\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT MCN HONID FROGZ4 KMIA\" readonly>";
			result += "<br/>Full OW/ZJX Avoid: <input style=\"width:75%\" value=\"KCLT BARMY5 NUTZE ECG AR8 OXANA L452 WILYY M203 SNAGY BNFSH2 KMIA\" readonly>";
			result += "<br/><br/>ZTL TO FLORIDA ESCAPE (Capped FL190): <input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC REIDS ENEME Q65 DOFFY BROMO FROGZ4 KMIA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/>Non RNAV SID/STAR: <input style=\"width:75%\" value=\"KCLT KER4 HAMLN CAE SAV OMN ANNEY4 KMIA\" readonly>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KCLT KER4 HAMLN CAE TAY PIE PALMZ2 KMIA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR HONID FROGZ4 KMIA\" readonly>";
			result += "<br/>LL (Coord Req): <input style=\"width:75%\" value=\"KCLT LILLS3 LILLS RAEFO MRPIT CAKET Q97 DEBRL CSTAL2 KMIA\" readonly>";
			result += "<br/>RP (Ok to File): <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED Q97 DEBRL CSTAL2 KMIA\" readonly>";
			break;
		case "MKE": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE FLM MACES VINNE BRAVE EXARR KMKE\" readonly>"; // CDR RP
			result += "<br/><br/>West Arr: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J45 STL IOW OGECA GOPAC3 KMKE\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV IIU J89 MACES VINNE BRAVE EXARR KMKE\" readonly>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR GAD MEM J71 ENL JOT LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK LDN TOMAC LEJOY Q178 DJB J34 CRL PEGEE MKG SUDDS KMKE\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE FLM MACES VINNE BRAVE EXARR KMKE\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN MACES VINNE BRAVE EXARR KMKE\" readonly>";
			break;
		case "MLB": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD OMN BITHO7 KMLB\" readonly>"; // CDR RP
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ HESPI Q89 PRMUS OMN BITHO7 KMLB\" readonly>";
			result += "<br/>LL: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY SMPRR Q85 LPERD OMN BITHO7 KMLB\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD OMN BITHO7 KMLB\" readonly>";
			break;
		case "MOB": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGM SJI KMOB\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 HARAY SPA VUZ SJI KMOB\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGM SJI KMOB\" readonly>";
			result += "<br/>BZ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET GQO SJI KMOB\" readonly>";
			result += "<br/>JJ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 NOONN VUZ SJI KMOB\" readonly>";
			break;
		case "MSN": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM MACES BVT J89 CADIZ OBK BAE KMSN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/>BZ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BNA FAM STL BDF KMSN\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM STL BDF KMSN\" readonly>";
			result += "<br/>JJ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM MACES BVT J89 CADIZ OBK BAE KMSN\" readonly>";
			result += "<br/>WE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD FLM MACES BVT J89 CADIZ OBK BAE KMSN\" readonly>";
			break;
		case "MSP": // Updated 02-06-2025
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
		case "MSY": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q56 SJI MNSTR1 KMSY\" readonly>"; // CDR RP
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC TEEEM Q75 ENEME CABLO DEFUN J2 SJI MNSTR1 KMSY\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 NOONN BNA Q32 CRAMM MHZ MCB TRSSH1 KMSY\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT SPA LGC MGM LBY RYTHM4 KMSY\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC ALLMA CEW J2 SJI MNSTR1 KMSY\" readonly>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA IGB MERDN TRSSH1 KMSY\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q56 SJI MNSTR1 KMSY\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD ZIEBR YOCKY BWG MHZ MCB TRSSH1 KMSY\" readonly>";
			break;
		case "MYR": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL230):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM KMYR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT LILLS3 LILLS KMYR\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BA (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU V136 CRE KMYR\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY KMYR\" readonly>";
			break;
		case "OKC":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 PLIED DRLER MURAH3 KOKC\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS CAE THRSR VLKNN Q30 IZAAC SUTTN J52 TXK ZEMMA TSDEL3 KOKC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN LIT KLUBB DWINE RIFFL3 KOKC\" readonly>";
			result += "<br/>JJ (Coord Req): <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG RZC OKM DIMPL RIFFL3 KOKC\" readonly>";
			result += "<br/>WE (Coord Req): <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ VHP SGF MPYRE MURAH3 KOKC\" readonly>";
			break;
		case "OMA": // Updated 02-06-2025
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
		case "ONT": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL END MMB FTI J244 ZUN J78 PKE DAFNY SCBBY2 KONT\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC EIC J4 ABI EWM J4 BXK PHRED SCBBY2 KONT\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 OCASE CVG AXC STJ HUSQA Q90 JASSE MARUE JCKIE2 KONT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY VXV J46 TUL FTI J244 ZUN J78 PKE PSP SETER5 KONT\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "ORD": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR RP
			result += "<br/><br/>North/East: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ APE V144 FWA GSH GIJ V526 DEERE KORD\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM FTZ TRTLL6 KORD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT HVQ HNN APE ROD FWA KORD\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA FTZ TRTLL6 KORD\" readonly>";
			result += "<br/>KL: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK MOL GEFFS J149 FWA WATSN4 KORD\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN ROD J149 FWA WATSN4 KORD\" readonly>";
			break;
		case "ORF": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 NUTZE DRONE DRONE2 KORF\" readonly>"; // CDR RP
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS VAN ILM ISO DRONE2 KORF\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ EKN MOL TERKS2 KORF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 JOTTA DAN LVL KORF\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB MOL TERKS2 KORF\" readonly>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY PANDY RAPZZ Q135 CUDLE CVI DRONE DRONE2 KORF\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 NUTZE DRONE DRONE2 KORF\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 MAULS MOL TERKS2 KORF\" readonly>";
			break;
		case "PBI":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED Q97 KENLL CPTAN3 KPBI\" readonly>";
			result += "<br/><br/>OHIO TO FLORIDA 2: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS JEVED Q97 KENLL CPTAN3 KPBI\" readonly>";
			result += "<br/>OHIO TO FLORIDA 3: <input style=\"width:75%\" value=\"KCLT KWEEN5 PITRW Y436 OGGRE JENKS BAHAA DULEE CLMNT2 KPBI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 HAMLN CAE V37 SAV V437 OMN V3 MLB STOOP3 KPBI\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR ZPLEN VUUDU1 KPBI\" readonly>";
			result += "<br/>LL (Coord Req): <input style=\"width:75%\" value=\"KCLT LILLS3 LILLS RAEFO MRPIT CAKET Q97 KENLL CPTAN3 KPBI\" readonly>";
			result += "<br/>RP: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 JEVED Q97 KENLL CPTAN3 KPBI\" readonly>";
			break;
		case "PDX": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J8 STL J151 RAP J82 DNJ JKNOX HHOOD5 KPDX\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP JOT DBQ MCW J16 PDT JKNOX HHOOD5 KPDX\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH ALS JNC J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/><br/>BUM: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN HCT BFF DBS J82 DNJ J20 PDT JKNOX HHOOD5 KPDX\" readonly>";
			result += "<br/>FAM: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN HCT BFF BOY LKT PDT JKNOX HHOOD5 KPDX\" readonly>";
			result += "<br/>GTH 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW GTH TCC J76 FTI J58 RSK TCH J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>PNH 1/2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH ALS JNC J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "PHL": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KILNS5 AUDII BBDOL PAATS4 KPHL\" readonly>"; // CDR RP
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KCLT BARMY5 TYI Q64 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
			result += "<br/>FL TO NE 3: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD APE JST BOJID4 KPHL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL RDU J55 ZITTO JAMIE SWL VCN9 KPHL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV FLM ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY PANDY Q109 DFENC SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>W1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>W2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ APE JST BOJID4 KPHL\" readonly>";
			break;
		case "PHX": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL PNH J78 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK J42 FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE BICKS Q176 CIM J96 GUP EAGUL6 KPHX\" readonly>";
			result += "<br/><br/>ELP: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q56 HRV LLA SBI IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>GTH 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW GTH TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>LEV WEST: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>PNH 2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH J6 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>ROCKIES SOUTH 2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN EIC J4 ABI J66 EWM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BNA J46 TUL J78 ZUN BUNTR3 KPHX\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEI TXK J42 FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK J42 FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE FLM J134 STL BUM ICT CIM J134 GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA MEM TXK FUZ J4 EWM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ STL BUM ICT LBL FTI J244 ZUN EAGUL6 KPHX\" readonly>";
			break;
		case "PIT": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS LEJOY DEMME5 KPIT\" readonly>"; // CDR RP
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV CEMEX Q67 JONEN HNN FEWGA7 KPIT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 GANTS RDU ROA EKN MGW IHD KPIT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM IIU ROD CTW FEWGA7 KPIT\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII RICCS LEJOY DEMME5 KPIT\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS LEJOY DEMME5 KPIT\" readonly>";
			break;
		case "PNS": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CEW PENSI KPNS\" readonly>"; // CDR RP
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC ALLMA CABLO DEFUN KPNS\" readonly>";
			result += "<br/>BZ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA SALMS Q139 MGMRY CEW PENSI KPNS\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CEW PENSI KPNS\" readonly>";
			break;

// CLT-PSM skipped

		case "PVD": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 RBV Q430 CREEL HTO JORDN2 KPVD\" readonly>"; // CDR RP
			result += "<br/><b style=\"color:orange\">As of 03-01-2025 FAA pref is JORDN JORDN2 but its not on the chart. Use HTO JORDN2<\/b>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD Q39 ASERY AIR Q430 CREEL HTO JORDN2 KPVD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT RDU ORF KALDA Q167 ORCHA KPVD\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 HNN AIR JST PSB HNK WIPOR3 KPVD\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB AIR Q430 CREEL ORCHA JORDN JORDN2 KPVD\" readonly>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY PANDY Q109 DFENC SAWED Q97 ZJAAY ORCHA JORDN JORDN2 KPVD\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 RBV Q430 CREEL ORCHA JORDN JORDN2 KPVD\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ AIR Q430 CREEL ORCHA JORDN JORDN2 KPVD\" readonly>";
			break;
		case "PWM": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND BDR SCOGS3 KPWM\" readonly>"; // CDR RP
			result += "<br/><br/>West/MICAH: <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK AML Q221 BIGEO J49 HNK CAM CDOGG4 KPWM\" readonly>";
			result += "<br/>ZDC Avoid: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD Q39 ASERY Q71 PSB J49 ALB CAM CDOGG4 KPWM\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV CEMEX KONGO Q34 RBV Q22 LLUND BDR SCOGS3 KPWM\" readonly>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY RAYVO Q87 GEARS BBOBO Q22 LLUND BDR SCOGS3 KPWM\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND BDR SCOGS3 KPWM\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD SITTR Q34 RBV Q22 LLUND BDR SCOGS3 KPWM\" readonly>";
			break;
		case "RAP": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J8 STL J151 RAP KRAP\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 HEVAN BVT DBQ MCW J16 FSD J82 RAP KRAP\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA Q36 RZC BVO Q148 LEWOY BFF J157 RAP KRAP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 NALEY HVQ IIU J8 STL J151 RAP KRAP\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "RDU":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Max FL130: <input style=\"width:75%\" value=\"KCLT LILLS3 LILLS ETBUY DMSTR2 KRDU\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL KRDU\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 LILLS SDZ KRDU\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC CHKLZ BLOGS3 KRDU\" readonly>";
			break;
		case "RIC": // Updated 01-28-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BARMY5 RDU NEAVL DUCXS5 KRIC\" readonly>";
			result += "<br/><br/>North/West: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD MOL SPIDR4 KRIC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 MERIL RDU LVL KRIC\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE ECB HVQ J24 MOL SPIDR4 KRIC\" readonly>";
			result += "<br/>KW (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KWEEN5 UNJAM TASTY VANNC FLO NEAVL DUCXS5 KRIC\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NEAVL DUCXS5 KRIC\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ J24 MOL SPIDR4 KRIC\" readonly>";
			break;
		case "ROC": // Updated 01-09-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS KROC\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ EWC KROC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 NALEY PSK MGW JHW KROC\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 HNN GEFFS KROC\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK BRV AML Q227 STUBN GIBBE KROC\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS KROC\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ GEFFS KROC\" readonly>";
			break;
		case "RSW": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS GRONK Q103 CYNTA SHFTY6 KRSW\" readonly>"; // CDR RP
			result += "<br/><br/>East/OW: <input style=\"width:75%\" value=\"KCLT KWEEN5 PITRW Y436 OGGRE AR17 HIBAC SHFTY5 KRSW\" readonly>";
			result += "<br/>West Coast FL: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS RIELE Q103 CYNTA PLYER TYNEE3 KRSW\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR HONID BULZI NICKI PLYER TYNEE3 KRSW\" readonly>";
			result += "<br/>LL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY CHS JROSS Q409 PUPYY Q103 CYNTA SHFTY6 KRSW\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ICONS5 NOOKS GRONK Q103 CYNTA SHFTY6 KRSW\" readonly>";
			break;
		case "SAN": // Updated 03-17-2025
			//  result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-17-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KCLT BOBZY5 BNA J46 TUL MMB CIM J96 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MERDN AEX J50 ACT INK J50 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>"; // CDR RP
			result += "<br/>North: <input style=\"width:75%\"; value=\"KCLT BOBZY5 BNA SGF ICT J28 GCK J110 RSK J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>";
			result += "<br/><br/>ELP: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY CATLN Q56 HRV KCEEE TKNIQ MOLLR JCT J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>GTH 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW GTH CNX J74 SJN J18 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>LEV WEST: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE MRF ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>PNH 1/2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH J78 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/>ROCKIES SOUTH 2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC EIC J4 ABI J66 EWM J4 SSO J50 GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>TUL 1: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB FTI J18 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BNA MEM J66 LIT J6 DRK J78 PKE BARET5 KSAN\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-17-2025
			result += "<br/>BE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEI AEX J50 ACT INK J50 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>BZ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA WAKOL Q34 TXK ACT INK J50 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>JJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG HITMN Q34 TXK ACT INK J50 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MERDN AEX J50 ACT INK J50 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>WE<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ FAM J98 SGF PER MMB FTI HOGGZ LUCKI1 KSAN\" readonly>";
			break;
		case "SAT":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MEI J22 LCH CAAGE QERVO1 KSAT\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA MEM LIT J101 LFK CAAGE QERVO1 KSAT\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS FISHO Q75 TEEEM ALLMA CEW J2 LCH CAAGE QERVO1 KSAT\" readonly>";
			result += "<br/>via TUL: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL J25 CWK MARCS1 KSAT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT SPA CHOPZ MGMRY CATLN SJI LSU LCH IAH IDU KSAT\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 DEBIE CHOPZ MGMRY CATLN SJI LSU LCH IAH IDU MARCS1 KSAT\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA MEM TXK ACT MARCS1 KSAT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MEI AEX CAAGE QERVO1 KSAT\" readonly>";
			result += "<br/>BZ (Coord Req): <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA MEM TXK LLEAD QERVO1 KSAT\" readonly>";
			result += "<br/>JJ (Coord Req): <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG BNA MEM TXK LLEAD QERVO1 KSAT\" readonly>";
			result += "<br/>RP: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MERDN AEX CAAGE QERVO1 KSAT\" readonly>";
			result += "<br/>WE (Coord Req): <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ BWG BNA MEM TXK LLEAD QERVO1 KSAT\" readonly>";
			break;
		case "SAV":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS CAE CANTR PLZZZ KSAV\" readonly>";
			result += "<br/>West Dptr: <input style=\"width:75%\" value=\"KCLT KER4 TREAL PLZZZ KSAV\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 TREAL PLZZZ KSAV\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR NOKIE DBN LOTTS KSAV\" readonly>";
			break;
		case "SDF": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM LAFOX LEDDL1 KSDF\" readonly>"; // CDR RP
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY VXV KSDF\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET GLAZR LEDDL1 KSDF\" readonly>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN BUMPY MBELL5 KSDF\" readonly>";
			result += "<br/>KL (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK MOL J24 HVQ Q68 YOCKY LEDDL1 KSDF\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM LAFOX LEDDL1 KSDF\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ YOCKY LEDDL1 KSDF\" readonly>";
			break;
		case "SEA": // Updated 02-06-2025
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
		case "SFO": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN HLC J80 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/><br/>via TUL: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB CIM RSK J58 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP BVT BDF IOW J60 HVE J28 MLF KITTN KATTS OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ ARNNY Q184 MERDN MHZ GGG KA12W EWM DMN BXK POMTE PMD J6 AVE MAKRS SERFR SERFR4 KSFO\" readonly>";
			result += "<br/>PNH 2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH RSK J58 OAL INYOE DYAMD5 KSFO\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB CIM RSK J58 ILC J198 KROST J148 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ FAM J98 SGF ICT J28 MLF J80 OAL DYAMD DYAMD5 KSFO\" readonly>";
			break;

// CLT-SGF skipped
// CLT-SHV skipped

		case "SLC": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN HLC J80 FQF J116 EKR LEEHY5 KSLC\" readonly>"; // CDR RP
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP BRL OVR OBH BFF J94 OCS NORDK6 KSLC\" readonly>";
			result += "<br/><br/>ELP: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR MGMRY CATLN Q56 PEKON J86 ELP J86 BAVPE BCE QWENN5 KSLC\" readonly>";
			result += "<br/>EWM 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN EIC J4 ABI J66 EWM DMN GREBE J86 BAVPE BCE QWENN5 KSLC\" readonly>";
			result += "<br/>GTH 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK BYP UKW GTH TCC ALS JNC J12 HELPR LEEHY5 KSLC\" readonly>";
			result += "<br/>LEV WEST: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ MGMRY SJI LEV BOWFN HOODO PSX CARTI HFMAN DLF KOBLE FST CNM CME CNX JNC HELPR LEEHY5 KSLC\" readonly>";
			result += "<br/>PNH 1/2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH ALS JNC HELPR LEEHY5 KSLC\" readonly>";
			result += "<br/>ROCKIES SOUTH 2: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK GTH TCC J76 FTI RSK JNC J12 HELPR LEEHY5 KSLC\" readonly>";
			result += "<br/>TUL 1: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL GCK HGO EKR LEEHY5 KSLC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEI ICT J182 GLD J80 FQF J116 EKR LEEHY5 KSLC\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM BWG FAM J112 BUM SLN HLC J80 FQF J116 EKR LEEHY5 KSLC\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN HLC J80 FQF J116 EKR LEEHY5 KSLC\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ FAM J112 BUM SLN HLC J80 FQF J116 EKR LEEHY5 KSLC\" readonly>";
			break;
		case "SMF":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA SGF ICT J28 GCK J28 MLF CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM VHP J80 MLF CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY BGRED THRSR VUZ J14 PNH J78 ABQ J72 PGS J86 BTY DONNR SLMMR5 KSMF\" readonly>";
			result += "<br/><br/>PNH 1: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 PNH RSK J58 MLF CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>ROCKIES SOUTH: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN Q30 IZAAC SUTTN J52 TXK GTH TCC J76 FTI J58 MLF CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>TUL 1: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL TOTOE ALS DVC MLF CRASY SLMMR5 KSMF\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA FAM J112 BUM SLN JNC TREMO CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>ES (Coord Req): <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VUZ J14 DWINE J14 PNH RSK J58 MLF CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>JJ (Coord Req): <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP BVT BDF IOW DSM OBH BFF J94 LLC ANAHO SLMMR5 KSMF\" readonly>";
			result += "<br/>WE (Coord Req): <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD FLM J24 VHP BVT BDF IOW DSM OBH BFF J94 LLC ANAHO SLMMR5 KSMF\" readonly>";
			break;
		case "SNA": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL MMB FTI J8 GUP INW DRK HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/><br/>Avoic ZKC: <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 ARG IRW J78 DRK HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR JAMMR MERDN MCB J22 LCH J2 IAH J86 ELP J50 SSO J4 BXK J212 CULTS EMLLD DSNEE6 KSNA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "STL": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA BOOSH3 KSTL\" readonly>"; // CDR RP
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE FLM J24 VHP AARCH2 KSTL\" readonly>";
			result += "<br/South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR GAD MEM BOOSH3 KSTL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT NALEY FLM VHP KSTL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DBN MGMRY MEM BOOSH3 KSTL\" readonly>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR GAD MEM BOOSH3 KSTL\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE IIU PXV BOOSH3 KSTL\" readonly>";
			result += "<br/>RP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA BOOSH3 KSTL\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN EMPTY J80 VHP AARCH2 KSTL\" readonly>";
			break;
		case "SYR":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS JST NABOR KSYR\" readonly>";
			result += "<br/><br/>Avoid ZDC: <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD Q39 ASERY Q71 PSB J59 SYR KSYR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BZ (Coord Req): <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV ATUME Q71 GEFFS JST ELZ NABOR KSYR\" readonly>";
			result += "<br/>KL (Coord Req): <input style=\"width:75%\" value=\"KCLT KILNS5 AUDII FAK BRV AML Q227 STENT CFB T335 CORTA KSYR\" readonly>";
			result += "<br/>RP (Ok to File): <input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS ELZ NABOR KSYR\" readonly>";
			break;
		case "TLH": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC ALLMA SZW KTLH\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>LL: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT LILLS3 LILLS FAY CHS JROSS Q409 PUPYY KTLH\" readonly>";
			break;
		case "TPA": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC TEUFL BAAMF DADES1 KTPA\" readonly>"; // CDR RP
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KCLT ICONS5 NOOKS WURFL Q83 ROYCO Q85 LPERD OMN NICCK DADES1 KTPA\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT MCN HONID MAATY5 KTPA\" readonly>";
			result += "<br/>East OW: <input style=\"width:75%\" value=\"KCLT KWEEN5 PITRW Y436 OGGRE AR17 HIBAC DADES1 KTPA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER5 HAMLN CAE AMG TAY LAL BRDGE BRDGE9 KTPA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR HONID MAATY5 KTPA\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 JENDO MAVRC TEUFL BAAMF DADES1 KTPA\" readonly>";
			break;
		case "TUL": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA J46 TUL KTUL\" readonly>"; // CDR RP
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J78 FAM J98 SGF VINTA3 KTUL\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY THRSR VUZ J14 LIT KTUL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY VXV J46 ARG RZC KTUL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>ES (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR GAD MEM RZC TUL KTUL\" readonly>";
			result += "<br/>JJ: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM IIU EOS VINTA VINTA3 KTUL\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BNA RZC TUL KTUL\" readonly>";
			result += "<br/>WE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ FAM EOS KTUL\" readonly>";
			break;
		case "TYS": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV KTYS\" readonly>"; // CDR RP
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT MCN GQO VXV KTYS\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KCLT BARMY5 RDU LYH HVQ Q68 YOCKY VXV KTYS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT CLT3 PITTY SOT VXV KTYS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT NOKIE THRSR JILIS VXV KTYS\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO SLEPP VXV KTYS\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV KTYS\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ Q68 YOCKY VXV KTYS\" readonly>";
			break;
		case "VPS": // Updated 03-16-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DARED CORKY KVPS\" readonly>";
			result += "<br/><br/>South via TAY: <input style=\"width:75%\" value=\"KCLT BEAVY6 JENDO WADEB TAY SZW CORKY KVPS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KER4 DEBIE BYRDS DNICE HUZER BAIZE DEFUN KVPS\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-16-2025
			result += "<br/>BA<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 BARMY BATTA ROZBO CHS JROSS Q409 ISUZO ALLMA CABLO KVPS\" readonly>";
			result += "<br/>ES<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR RSVLT DARED CORKY KVPS\" readonly>";
			result += "<br/>RP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BEAVY6 GANDT DARED CORKY KVPS\" readonly>";
			break;
		case "XNA":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT BOBZY5 BNA Q36 RZC KXNA\" readonly>";
			result += "<br/><br/>ESTRR: <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR VLKNN LOBBS J41 MEM RZC KXNA\" readonly>";
			result += "<br/>JOJJO: <input style=\"width:75%\" value=\"KCLT JOJJO5 CUBIM Q50 IIU J78 FAM J98 SGF KXNA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BE (Coord Req): <input style=\"width:75%\" value=\"KCLT BEAVY6 GANDT NOKIE MGMRY MEI SQS LIT KXNA\" readonly>";
			result += "<br/>ES (Coord Req): <input style=\"width:75%\" value=\"KCLT ESTRR5 IPTAY CHOPZ THRSR GAD MEM RZC KXNA\" readonly>";
			result += "<br/>JJ (Coord Req): <input style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE IIU FAM KXNA\" readonly>";
			result += "<br/>RP (Ok to File): <input style=\"width:75%\" value=\"KCLT BOBZY5 BNA RZC KXNA\" readonly>";
			result += "<br/>WE (Coord Req): <input style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HVQ J8 IIU FAM KXNA\" readonly>";
			break;
		case "YYC": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 OCASE FLM J24 VHP BVT DBQ RWF J90 ABR J70 DIK GGW J478 YQL ILOSA EBGAL7 CYYC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "YUL": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS PSB SYR ART IMPAC4 CYUL\" readonly>"; // CDR RP
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KCLT KRITR6 SMIAM LYH GVE Q34 RBV Q22 LLUND CAM JASDU PBERG CARTR5 CYUL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>BA (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BARMY5 RDU NOWAE Q87 GEARS BBOBO Q22 LLUND CAM JASDU PBERG CARTR5 CYUL\" readonly>";
			result += "<br/>BZ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET VXV TONIO Q67 HNN EWC JHW ART IMPAC4 CYUL\" readonly>";
			result += "<br/>JJ (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT JOJJO5 JOJJO DOOGE Q93 OCASE ROD JHW ART IMPAC4 CYUL\" readonly>";
			result += "<br/>RP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT KRITR6 FILDS ILLSA Q69 RICCS PSB SYR ART IMPAC4 CYUL\" readonly>";
			result += "<br/>WE (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KCLT WEAZL5 CLAWD HNN AIR JHW ART IMPAC4 CYUL\" readonly>";
			break;
		case "YVR": // Updated 02-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KCLT JOJJO5 DOOGE Q93 TONIO GBEES DONVE MZV ONTIJ MMUDY CTB ONEAL BOOTH CANUC5 CYVR\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KCLT BOBZY5 BOBZY BRAYN REWET LORNN RIZZZ SPKER RZC TUL DVC PUC TCH YKM PAE PAINE4 CYVR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			// result += "<br/><br/><b>CDRS</b>";
			break;
	}
	return result;
}
