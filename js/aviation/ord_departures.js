ord_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
	switch(arvl) {
		case "ABQ": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PEKUE PIPPN ELYNA STJ J18 DRAWL TAMEY SNDIA4 KABQ\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KORD NOONY NIGHT NITWT OBH MCK HGO PUB ALS DATME SNDIA4 KABQ\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL IFI PNH TCC KIIDD COLTR4 KABQ\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PEKUE PIPPN ELYNA STJ J18 FTI FRIHO4 KABQ\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN QUANE CARET ROEZZ MCI J26 ICT TOTOE TAMEY SNDIA4 KABQ\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG TUL J78 TCC KIIDD COLTR4 KABQ\" readonly>";
			result += "<br/>2W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY JORDY ONL J114 DVV ALS DATME SNDIA4 KABQ\" readonly>";
			result += "<br/>3W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 PUB ALS DATME SNDIA4 KABQ\" readonly>";
			result += "<br/>4W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J146 GLD PUB ALS DATME SNDIA4 KABQ\" readonly>";
			break;
		case "ALB": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD EBAKE WISMO POSTS PADDE SVM DKK KALB\" readonly>"; // CDR 0E
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG WAYGO KALB\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ELX CRL J554 JHW HNK KALB\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0E: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EBAKE WISMO POSTS PADDE SVM DKK KALB\" readonly>";
			result += "<br/>4N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PETTY PECOK ASP J522 KLANT YEE ART ART141  GFL295 GFL KALB\" readonly>";
			result += "<br/>5N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PETTY PECOK ASP VIXIS Q501 TULEG KALB\" readonly>";
			result += "<br/>8N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PETTY TVC ASP J522 KLANT YEE ART ART141  GFL295 GFL KALB\" readonly>";
			result += "<br/>C0: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG WAYGO KALB\" readonly>";
			result += "<br/>C1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP TULEG WAYGO KALB\" readonly>";
			result += "<br/>C2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP KAPUX TULEG WAYGO KALB\" readonly>";
			result += "<br/>C3 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY KALB\" readonly>";
			result += "<br/>C4: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK FABEN KALB\" readonly>";
			break;
		case "ATL": // Updated 02-20-2025
			result += "<!-- Updated 02-20-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE SPAYD HLRRY ONDRE1 KATL\" readonly>"; // CDR 0E
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE HYK ADEIN PUPDG ONDRE1 KATL\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI FAM J151 VISQA HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD CMSKY CARYN CYBIL PXV J73 BNA KATL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-20-2025
			result += "<!-- Verified with ATCSCC on 02-20-2025 -->";
			result += "<br/>0E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE SPAYD HLRRY ONDRE1 KATL\" readonly>";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV BNA NEWBB IHAVE MTHEW CHPPR1 KATL\" readonly>";
			result += "<br/>0W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN SGF J41 MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU BNA NEWBB IHAVE MTHEW CHPPR1 KATL\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PLESS BNA NEWBB IHAVE MTHEW CHPPR1 KATL\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN MCI J41 MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>";
			result += "<br/>3S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J45 BNA NEWBB IHAVE MTHEW CHPPR1 KATL\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM HLRRY ONDRE1 KATL\" readonly>";
			result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP J80 EMPTY OHIOS KTRYN ONDRE1 KATL\" readonly>";
			result += "<br/>8S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL FAM MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>";
			break;
		case "AUS": // Updated 07-29-2025
			result += "<!-- Updated 07-29-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL FSM BROBB WINDU SEWZY6 KAUS\" readonly>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM J87 CVE WINDU SEWZY6 KAUS\" readonly>"; // CDR 0W
			result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J29 ELD LFK WLEEE WLEEE7 KAUS\" readonly>";
			result += "<br/><br/>West via ICT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT FUZ WINDU SEWZY6 KAUS\" readonly>"; // CDR 1W
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL J8 SGF RZC FSM WINDU BLEWE5 KAUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-29-2025
			result += "<!-- Verified with ATCSCC on 07-29-2025 -->";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL FSM WINDU SEWZY6 KAUS\" readonly>";
			result += "<br/>0W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM J87 CVE WINDU SEWZY6 KAUS\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI FAM J137 LIT J101 LFK WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT FUZ WINDU SEWZY6 KAUS\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J131 FUZ WINDU SEWZY6 KAUS\" readonly>";
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI FAM J137 LIT J101 LFK WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J131 FUZ WINDU SEWZY6 KAUS\" readonly>";
			break;
		case "BDL": // Updated 02-20-2025
			result += "<!-- Updated 02-20-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC JHW Q82 MEMMS WILET STELA1 KBDL\" readonly>"; // CDR 0E
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP KAPUX TULEG ALB STELA1 KBDL\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR Q34 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/><br/>CAN NOTAP EAST 3: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY ALB STELA1 KBDL\" readonly>";
			result += "<br/>MACER 1: <input style=\"width:75%\"; value=\"KORD TAAYZ PECOK DAYYY RUBKI SIKBO TULEG RKA STELA1 KBDL\" readonly>";
			result += "<br/>MACER 2: <input style=\"width:75%\"; value=\"KORD SQUIB HAUCK HRRSH HOCKE SIKBO TULEG RKA STELA1 KBDL\" readonly>";
			result += "<br/>MACER 3: <input style=\"width:75%\"; value=\"KORD SQUIB HAUCK HRRSH HOCKE SIKBO AHPAH HANKK AUDIL STELA1 KBDL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ELX CRL J554 JHW HNK STELA1 KBDL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-20-2025
			result += "<!-- Verified with ATCSCC on 02-20-2025 -->";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC JHW Q82 MEMMS WILET STELA1 KBDL\" readonly>";
			result += "<br/>0N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE Q935 AUDIL STELA1 KBDL\" readonly>";
			result += "<br/>C0<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG ALB STELA1 KBDL\" readonly>";
			result += "<br/>C1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP TULEG ALB STELA1 KBDL\" readonly>";
			result += "<br/>C2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP KAPUX TULEG ALB STELA1 KBDL\" readonly>";
			result += "<br/>C3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY ALB STELA1 KBDL\" readonly>";
			result += "<br/>C4<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK AUDIL STELA1 KBDL\" readonly>";
			result += "<br/>C5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG ALB STELA1 KBDL\" readonly>";
			result += "<br/>C6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO OLABA SSENA BUGSY ALB STELA1 KBDL\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG AUDIL STELA1 KBDL\" readonly>";
			result += "<br/>M3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO AHPAH HANKK AUDIL STELA1 KBDL\" readonly>";
			break;
		case "BGR": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EBAKE WISMO POSTS PADDE SVM DKK ALB KBGR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "BHM": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD CMSKY CARYN CYBIL PXV RQZ NULLS KBHM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD RBS ENL J71 MEM VUZ KBHM\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "BNA": // Updated 07-26-2025
			result += "<!-- Updated 07-26-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL300/320):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD CMSKY CARYN CYBIL PXV GUMMA RYYMN2 KBNA\" readonly>";
			result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL YACKS RYYMN2 KBNA\" readonly>";
			result += "<br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE HYK GUMMA RYYMN2 KBNA\" readonly>"; // CDR 2E
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD CMSKY CARYN CYBIL PXV J73 KBNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-26-2025
			result += "<!-- Verified with ATCSCC on 07-26-2025 -->";
			result += "<br/>0E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME SEWTO FWA LULOU RYYMN2 KBNA\" readonly>";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV GUMMA RYYMN2 KBNA\" readonly>";
			result += "<br/>0W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF ARG LOPPY CHSNE2 KBNA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU LULOU RYYMN2 KBNA\" readonly>";
			result += "<br/>2E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE HYK GUMMA RYYMN2 KBNA\" readonly>";
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DONVE GUMMA RYYMN2 KBNA\" readonly>";
			result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI YACKS RYYMN2 KBNA\" readonly>";
			break;
		case "BOS": // Updated 01-17-2025
			result += "<!-- Updated 01-17-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EBAKE WISMO POSTS PADDE SVM DKK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY ENE OOSHN5 KBOS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ELX SVM DKK ALB T608 REVER KBOS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EBAKE WISMO POSTS PADDE SVM DKK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>C0 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG WAYGO GFALS ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>C1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP TULEG WAYGO GFALS ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>C2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP KAPUX TULEG WAYGO GFALS ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>C3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>C4 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>C5 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG WAYGO GFALS ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>C6 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO OLABA SSENA BUGSY ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>M1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>M2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>M3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO AHPAH HANKK PONCT JFUND2 KBOS\" readonly>";
			break;

			/* TODO - FOS ROUTES: KORD - KBTV
KORD EBAKE WISMO POSTS PADDE SVM DKK GONZZ SLK KBTV
KORD EBAKE WISMO POSTS PADDE SVM DKK SYR KBTV
KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG KBTV
KORD RAYNR BRTMN TAAYZ TVC RUBKI Q140 AHPAH KBTV
KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG KBTV
KORD RAYNR BRTMN TAAYZ PECOK NOTAP YEE TULEG KBTV
KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG KBTV
*/

		case "BUF": // Updated 06-10-2025
			result += "<!-- Updated 06-10-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC WTEVR DOBIE DKK KBUF\" readonly>"; // CDR 0E
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ RUBKI SIKBO KBUF\" readonly>"; // CDR 2N
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD KLYNE Q29 DORET DKK KBUF\" readonly>"; // CDR 0S
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ELX CRL DKK KBUF\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-10-2025
			result += "<!-- Verified with ATCSCC on 06-10-2025 -->";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC COHOW DKK KBUF\" readonly>";
			result += "<br/>0N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE YXU KBUF\" readonly>";
			result += "<br/>0S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD KLYNE Q29 DORET DKK KBUF\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ RUBKI SIKBO KBUF\" readonly>";
			result += "<br/>VR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD KLYNE Q29 DORET DKK KBUF\" readonly>";
			break;
		case "BWI": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA JERRI NUSMM ANTHM5 KBWI\" readonly>"; // CDR 0E
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR CJAAE RAVNN8 KBWI\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA JERRI NUSMM ANTHM5 KBWI\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR CJAAE RAVNN8 KBWI\" readonly>";
			result += "<br/>5S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J73 BNA VXV GSO CREWE THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/>6S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PXV IIU Q108 SITTR CJAAE RAVNN8 KBWI\" readonly>";
			result += "<br/>MS (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD APE KEMAN ANTHM5 KBWI\" readonly>";
			break;

/* TODO - FOS ROUTES: KORD - KBZN
KORD MYKIE MONNY IANNA FSD KD90W BIL SUBKY1 KBZN
KORD MYKIE MONNY JORDY ONL J151 BIL SUBKY1 KBZN
KORD PMPKN NEATO DLLAN RONIC BAE J34 BIL SUBKY1 KBZN
KORD MYKIE MONNY IANNA FSD J16 DPR CREKK POWDA1 KBZN
KORD PMPKN NEATO DLLAN RONIC BAE J70 ABR J90 MLS CREKK POWDA1 KBZN
KORD NOONY NIGHT NITWT OBH BFF DDY J13 BIL SUBKY1 KBZN
KORD PMPKN NEATO DLLAN RONIC BAE J34 BIL SUBKY1 KBZN
KORD MYKIE MONNY SMIDD MCW J16 BIL SUBKY1 KBZN
KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP BRNRD FAR DIK MLS BIL SUBKY1 KBZN
KORD MYKIE MONNY IANNA FOD FSD J16 BIL SUBKY1 KBZN
KORD NOONY NIGHT NITWT ONL J151 BIL SUBKY1 KBZN
KORD OLINN OREOS OBENE OGALE LNK ONL J151 BIL SUBKY1 KBZN
KORD RAYNR BRTMN TAAYZ GRB DLH FAR DIK MLS BIL SUBKY1 KBZN
*/

		case "CHS": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM SPA DEFFN OSPRI7 KCHS\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR IRQ OSPRI7 KCHS\" readonly>";
			result += "<br/>East: <input style=\"width:75%\"; value=\"KORD MOBLE ADIME OTENS ANEWA DJB J85 SPA DEFFN OSPRI7 KCHS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM VXV IRQ KCHS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM DEFFN OSPRI7 KCHS\" readonly>";
			result += "<br/>6S: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PLESS BNA GQO IRQ OSPRI7 KCHS\" readonly>";
			break;
		case "CLE": // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD DUFEE LOGGR DETMR BRWNZ4 KCLE\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";// toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DUFEE LOGGR DETMR BRWNZ4 KCLE\" readonly>";
			result += "<br/>0N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB OLYEE BRWNZ4 KCLE\" readonly>";
			result += "<br/>0S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP CVG DRUGA ROKNN4 KCLE\" readonly>";
			result += "<br/>1E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME SEWTO FWA TALKN ROKNN4 KCLE\" readonly>";
			break;
		case "CLT": // Updated 06-24-2025
			result += "<!-- Updated 06-24-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU SKYWA FILPZ4 KCLT\" readonly>"; // CDR 0S
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM TAFTT PARQR4 KCLT\" readonly>"; // CDR 1S
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DONVE BWG SKYWA FILPZ4 KCLT\" readonly>"; // CDR 4S
			result += "<br/><br/>SW Arrival<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR BESTT JONZE5 KCLT\" readonly>"; // CDR 3S
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EON BVT J89 IIU J99 VXV LIINN3 KCLT\"; readonly>"; // CDR NR
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-24-2025
			result += "<!-- Verified with ATCSCC on 06-24-2025 -->";
			result += "<br/>0E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE HVQ LNDIZ PARQR4 KCLT\" readonly>";
			result += "<br/>0S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU SKYWA FILPZ4 KCLT\" readonly>";
			result += "<br/>1S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM TAFTT PARQR4 KCLT\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE QUANE CARET ROEZZ SGF ARG BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>2S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM SKYWA FILPZ4 KCLT\" readonly>";
			result += "<br/>3S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/>4S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DONVE BWG VXV LIINN3 KCLT\" readonly>";
			result += "<br/>5S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV SKYWA FILPZ4 KCLT\" readonly>";
			result += "<br/>6S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PLESS J45 BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>NR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EON BVT J89 IIU J99 VXV LIINN3 KCLT\" readonly>";
			break;
		case "CMH": // Updated 02-05-2025
			result += "<!-- Updated 02-05-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD MOBLE ADIME SEWTO FWA BRYEN DUBLN1 KCMH\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME VHP JADUB DUBLN1 KCMH\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-07-2025
			result += "<!-- Verified with ATCSCC on 09-07-2025 -->";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME SEWTO FWA BRYEN DUBLN1 KCMH\" readonly>";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP JADUB DUBLN1 KCMH\" readonly>";
			break;
		case "COS": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PEKUE PIPPN ROTTN PWE GLD OZZZY5 KCOS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD IOW J146 GLD HGO KCOS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD OBH GLD OZZZY5 KCOS\" readonly>";
			result += "<br/>2N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP BRNRD FAR DPR BFF DVV KCOS\" readonly>";
			result += "<br/>2S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP BRNRD FAR DPR BFF DVV KCOS\" readonly>";
			result += "<br/>4N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN DNIKA TAAYZ PETTY GRB GEP BRNRD FAR DPR BFF DVV KCOS\" readonly>";
			break;
		case "CVG": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EARND ELANR CEGRM7 KCVG\" readonly>";
			// TODO East
			// TODO West
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EON LCOLN VHP KCVG\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-25-2025
			result += "<!-- Verified with ATCSCC on 08-25-2025 -->";
			result += "<br/>0S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR CEGRM7 KCVG\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME SEWTO FWA ZEKUS ARBAS RID MEEKR KCVG\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB VIO SVM DJB SAVVI TIGRR4 KCVG\" readonly>";
			result += "<br/>6S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI DAAVE SARGO4 KCVG\" readonly>";
			result += "<br/>NR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EON BVT MACES CRYME ARIVR CEGRM KCVG\" readonly>";
			break;

/* TODO ORD-DAY
ORD.DCT.MOBLE.DCT.ADIME.DCT.SEWTO.DCT.FWA.V277.ROD.DCT.DAY
ORD.DCT.EON.DCT.LCOLN.DCT.VHP.DCT.DQN.DCT.DAY
ORD.DCT.EON.DCT.FWA.J149.ROD.DCT.DAY
ORD.DCT.GIJ.V55.DQN.DCT.DAY
*/

		case "DCA": // Updated 09-29-2025
			result += "<!-- Updated 09-29-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"  value=\"KORD MOBLE ADIME OTENS ANEWA JERRI BUCKO FRDMM6 KDCA\" readonly>"; // CDR 0E
			result += "<br/></br>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE Q935 WOZEE BFD PSB SKILS5 KDCA\" readonly>"; // CDR 1N
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR TRUPS5 KDCA\" readonly>"; // CDR M1
			result += "<br/><br/>MACER 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD APE AIR J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD GSH FWA J178 APE J30 ESL AML KDCA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-29-2025
			result += "<!-- Verified with ATCSCC on 09-29-2025 -->";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA JERRI BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE Q935 WOZEE BFD PSB SKILS5 KDCA\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J73 BNA SWAPP Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PXV IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>M1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>MS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD APE AIR J34 BUCKO FRDMM6 KDCA\" readonly>";
			break;
		case "DEN": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE OGALE OBH BRWRY LAWGR4 KDEN\" readonly>";
			result += "<br/><br/>DEN OBH: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY IANNA FOD ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE OGALE LNK ELJAY LANDR3 KDEN\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL HYS J24 OATHE CLASH5 KDEN\" readonly>";
			result += "<br/>0W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE OBH BRWRY LAWGR4 KDEN\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/>1W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY JORDY ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/>2N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP FSD ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J110 GCK KIISS CLASH5 KDEN\" readonly>";
			result += "<br/>3N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FSD ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/>3W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HYS OATHE CLASH5 KDEN\" readonly>";
			result += "<br/>4N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP FSD ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/>4S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL FAM J98 SGF ICT J28 GCK KIISS CLASH5 KDEN\" readonly>";
			result += "<br/>4W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ HYS OATHE CLASH5 KDEN\" readonly>";
			result += "<br/>5N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH FSD ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/>NR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD IOW DSM OBH ELJAY LANDR3 KDEN\" readonly>";
			break;
		case "DFW": // Updated 05-26-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-26-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
			result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT HOFFF VKTRY2 KDFW\" readonly>"; // CDR 2W
			result += "<br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL FAM J137 LIT FEWWW SEEVR4 KDFW\" readonly>"; // Based on CDR 2S
			result += "<br/><br/>West via OVR<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE OVR J21 JUDGE ICT IRW IBAKE VKTRY2 KDFW\" readonly>"; // CDR 8W
			result += "<br/>SE Arrival: <input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI ENL J71 MEM SQS MLU YUYUN BEREE3 KDFW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD RBS STL J8 SGF RZC FSM FINGR9 KDFW\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-26-2025
			result += "<!-- Verified with ATCSCC on 05-26-2025 -->";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN RZC FSM RRNET SEEVR4 KDFW\" readonly>";
			result += "<br/>0W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM J87 TUL KLAWW VKTRY2 KDFW\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI TUL HITUG SEEVR4 KDFW\" readonly>";
			result += "<br/>2S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL FAM J137 LIT FEWWW SEEVR4 KDFW\" readonly>";
			result += "<br/>2W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT HOFFF VKTRY2 KDFW\" readonly>";
			result += "<br/>3W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
			result += "<br/>5S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
			result += "<br/>6W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT HOFFF VKTRY2 KDFW\" readonly>";
			result += "<br/>7W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
			result += "<br/>8W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE OVR J21 JUDGE ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
			result += "<br/>W0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM J87 TUL KLAWW JOVEM6 KDFW\" readonly>";
			result += "<br/>W1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI TUL HITUG BRDJE5 KDFW\" readonly>";
			result += "<br/>W2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT HOFFF JOVEM6 KDFW\" readonly>";
			result += "<br/>W3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT IRW IBAKE JOVEM6 KDFW\" readonly>";
			result += "<br/>W4<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT IFI HOFFF JOVEM6 KDFW\" readonly>";
			result += "<br/>W6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT HOFFF JOVEM6 KDFW\" readonly>";
			result += "<br/>W7<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT IRW IBAKE JOVEM6 KDFW\" readonly>";
			break;
		case "DSM": // Updated 06-22-2025
			result += "<!-- Updated 06-22-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL280):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE KDSM\" readonly>";
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 ODI MCW J25 DSM KDSM\" readonly>";
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD BACEN BLOKR RBS SPI IRK LMN DSM KDSM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD IOW J10 DSM KDSM\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-22-2025
			result += "<!-- Verified with ATCSCC on 06-22-2025 -->";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE MSN KDSM\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL AKMIE BMI BRL KDSM\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE KDSM\" readonly>";
			result += "<br/>NR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD IOW J10 DSM KDSM\" readonly>";
			break;

/* TODO - FOS ROUTES: KORD - KDTW
KORD ELX LFD KDTW
KORD DUFEE ELX HOSSA VCTRZ2 KDTW
KORD RAYNR BRTMN TAAYZ PORZL RKCTY2 KDTW
KORD MOBLE ADIME SEWTO FWA SHANX HANBL HANBL3 KDTW
KORD EARND ELANR EMMLY ERECO IIU FLM TORRR HANBL3 KDTW
KORD RAYNR BRTMN TAAYZ TVC LEFSA LAYKS2 KDTW
*/

		case "EGE": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Max FL280 at AVVVS):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE OGALE LNK HCT AKO AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL J110 BUM GLD AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY SMIDD FSD SNY AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/><br/>SKI COUNTRY 1: <input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE OGALE LNK HCT AKO AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PLL GOTHC FOD ONL SNY AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>SC (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK HCT AKO AVVVS HUGGS RLG KEGE\" readonly>";
			break;
		case "ELP": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J26 CME SAMMR3 KELP\" readonly>";
			result += "<br/><br/>South/East: <input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL RZC FUZ J66 ABI J50 INK LIFFT SAMMR3 KELP\" readonly>";
			result += "<br/>North/West: <input style=\"width:75%\"; value=\"KORD PLL GOTHC FOD ONL GCK PNH J26 CME SAMMR3 KELP\" readonly>";
			result += "<br/>NW Arrival: <input style=\"width:75%\"; value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 ONL FQF J13 ABQ SLNNK WAZKO1 KELP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL J8 SGF J98 IRW LBB ELP KELP\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 ODI GLD PUB CME SAMMR3 KELP\" readonly>";
			result += "<br/>2W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J146 GLD PUB J104 ONM SLNNK WAZKO1 KELP\" readonly>";
			result += "<br/>4S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG IRW TXO CME SAMMR3 KELP\" readonly>";
			break;
		case "EWR": // Updated 06-10-2025
			result += "<!-- Updated 06-10-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC KEEHO J584 SLT FQM FQM3 KEWR\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK KODEY HNK FLOSI4 KEWR\" readonly>"; // CDR C4
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR Q34 GVE PHLBO4 KEWR\" readonly>"; // CDR 2S
			result += "<br/><br/>RUBKI EAST 2<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG HNK FLOSI4 KEWR\" readonly>"; // CDR C0
			result += "<br/>MACER 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG HNK FLOSI4 KEWR\" readonly>"; // CDR C5
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD DUFEE ELX SVM J70 JHW HNK SHAFF7 KEWR\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-10-2025
			result += "<!-- Verified with ATCSCC on 06-10-2025 -->";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC KEEHO J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME NELLS KEEHO J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE Q935 HANKK KODEY HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>2E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC KEEHO J584 DORET GEE HANKK KODEY HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG ROC KODEY HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR Q34 GVE PHLBO4 KEWR\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J73 BNA BURGG Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>C0<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>C1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP TULEG HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>C2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP KAPUX TULEG HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>C3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY HANAA FLOSI4 KEWR\" readonly>";
			result += "<br/>C4<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK KODEY HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>C5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>C6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO OLABA SSENA BUGSY HANAA FLOSI4 KEWR\" readonly>";
			result += "<br/>M1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG RKA HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO AHPAH HANKK KODEY HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>MS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>";
			break;
		case "FCA":
		case "GPI": // Updated 06-29-2025
			result += "<!-- Updated 06-29-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-29-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY IANNA FOD FSD J16 DPR J204 MLS LWT GTF KGPI\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 ABR J90 MLS LWT GTF KGPI\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT OBH BFF BOY HLN KGPI\" readonly>";
			result += "<br/><br/>North via DLH<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH J140 FAR J36 GTF KGPI\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-29-2025
			break;
		case "FLL": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 ZPLEN TEEKY3 KFLL\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KORD MOBLE ADIME OTENS ANEWA APE J83 SPA QUIWE Q93 PRMUS CUUDA3 KFLL\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI ENL J71 MEM J41 MGM ACORI TEEKY3 KFLL\" readonly>";
			result += "<br/>West OW: <input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI JARKE J71 MEM J35 MCB HRV Q105 BLVNS Y290 OCHHO VNECK TEEKY3 KFLL\" readonly>";
			result += "<br/><br/>OHIO VLY TO FL 1: <input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI ENL PLESS HITMN ACORI TEEKY3 KFLL\" readonly>";
			result += "<br/>OHIO VLY TO FL 2: <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM HMV PANDY CAKET Q97 PRMUS CUUDA3 KFLL\" readonly>";
			result += "<br/>OHIO VLY TO FL 3: <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM HMV PANDY DEDDY Y436 OGGRE MAJIK CUUDA3 KFLL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD DENNT DARCY DREGS DONVE BWG GQO LGC SZW PIE FORTL9 KFLL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 ZPLEN TEEKY3 KFLL\" readonly>";
			result += "<br/>SB (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR ZPLEN TEEKY3 KFLL\" readonly>";
			break;
		case "GEG": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP BIS SAYOR GTF MLP HILIE3 KGEG\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY JORDY ONL DDY DLN WEDAK MLP HILIE3 KGEG\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 BIL J136 MLP HILIE3 KGEG\" readonly>";
			result += "<br/>1W: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY IANNA FOD FSD J16 DPR J204 MLS J90 HLN J136 MLP HILIE3 KGEG\" readonly>";
			result += "<br/>2N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 MLP HILIE3 KGEG\" readonly>";
			result += "<br/>2W: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT ONL J151 BIL J136 MLP HILIE3 KGEG\" readonly>";
			result += "<br/>3N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FAR DIK MLP HILIE3 KGEG\" readonly>";
			result += "<br/>4N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP J70 MLP HILIE3 KGEG\" readonly>";
			result += "<br/>5N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH FAR DIK MLP HILIE3 KGEG\" readonly>";
			result += "<br/>NR: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PLL ALO FOD FSD J16 DPR J204 MLS J90 HLN J136 MLP HILIE3 KGEG\" readonly>";
			break;
		case "GRB": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ KGRB\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ KGRB\" readonly>";
			result += "<br/>1E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EBAKE WISMO GETCH KGRB\" readonly>";
			break;
		case "GRR": // Updated 07-07-2025
			result += "<!-- Updated 07-07-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL150):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EBAKE WISMO BRONZ KGRR\" readonly>";
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB KGRR\" readonly>"; // CDR 1N
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-07-2025
			result += "<!-- Verified with ATCSCC on 07-07-2025 -->";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EBAKE WISMO BRONZ KGRR\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB KGRR\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE KOHLL FREAK VIO KGRR\" readonly>";
			break;

/* TODO ORD-GSO
ORD.DCT.EON.DCT.DNV.DCT.VHP.DCT.FLM.DCT.HVQ.DCT.PSK.DCT.GSO
*/

/* TODO ORD-GSP
ORD.DCT.EARND.DCT.ELANR.DCT.EMMLY.DCT.ERECO.DCT.IIU.DCT.ARTUR.DCT.DAJPI.RCTOR2.GSP
*/

/* TODO ORD HSV
ORD.DCT.EON.DCT.GUIDO.J73.BNA.DCT.HSV
ORD.DCT.DENNT.DCT.DARCY.DCT.DREGS.DCT.DONVE.DCT.BWG.HSV
*/

/* TODO ORD-ICT
ORD.DCT.MZV.J87.IRK.J26.ICT
*/

		case "IAH": // Updated 03-18-2025
			result += "<!-- Updated 03-18-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI FAM J137 LIT EDWAH Q33 SWEUP ZEEKK3 KIAH\" readonly>";
			result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J25 TUL J87 CVE DRLLR5 KIAH\" readonly>"; // CDR W0
			result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV MEM KF15I SWEUP ZEEKK3 KIAH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI ENL J71 MEM J35 SQS AEX GESNR2 KIAH\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-18-2025
			result += "<!-- Verified with ATCSCC on 03-18-2025 -->";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL LIT J180 SWEUP ZEEKK3 KIAH\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL FSM URH CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM J87 CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>2S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI FAM J137 LIT J180 SWEUP ZEEKK3 KIAH\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT IFI ADM CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>3S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL SQS MHZ AEX DOOBI3 KIAH\" readonly>";
			result += "<br/>3W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT IFI ADM CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG FSM URH CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>4W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF LIT J180 SWEUP ZEEKK3 KIAH\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J131 LIT J180 SWEUP ZEEKK3 KIAH\" readonly>";
			result += "<br/>5W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT IRW CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>W0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J25 TUL J87 CVE DRLLR5 KIAH\" readonly>";
			break;

/* TODO - FOS ROUTES: KORD - KILM
KORD EARND ELANR EMMLY ETAME EMEGE FLM PSK ILM KILM
KORD MOBLE ADIME SEWTO FWA J149 ROD HNN RDU KILM
KORD EARND ELANR EMMLY ERECO IIU SPA FLO KILM
KORD DENNT DARCY DREGS DONVE BWG VXV SPA FLO KILM
*/

		case "IND": // Updated 06-08-2025
			result += "<!-- Updated 06-08-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL230):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY JAKKS JAKKS2 KIND\" readonly>";
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD MOBLE ADIME SEWTO SJAAY SNKPT2 KIND\" readonly>"; // CDR 1E
			// TODO West rte
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EON V24 JAKKS VHP KIND\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-08-2025
			result += "<!-- Verified with ATCSCC on 06-08-2025 -->";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR JAKKS2 KIND\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME SEWTO SJAAY SNKPT2 KIND\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL TERGE SMUKE3 KIND\" readonly>";
			result += "<br/>NR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EON V24 JAKKS VHP KIND\" readonly>";
			break;

/* TODO - FOS ROUTES: KORD - KJAC
KORD MYKIE MONNY IANNA FOD ANW JYMBO DNW KJAC
KORD NOONY NIGHT NITWT OBH BFF JYMBO DNW KJAC
KORD PMPKN NEATO DLLAN RONIC BAE J34 DPR JYMBO DNW KJAC
KORD PMPKN NEATO DLLAN RONIC BAE J34 DPR J32 BOY DNW KJAC
KORD MYKIE MONNY IANNA FOD ONL J94 BFF DDY BOY DNW KJAC
KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP J70 ABR J32 BOY DNW KJAC
KORD NOONY NIGHT NITWT OBH BFF DDY BOY DNW KJAC
KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH ABR J32 BOY DNW KJAC
KORD RAYNR BRTMN TAAYZ GRB GEP J70 ABR J32 BOY DNW KJAC
KORD RAYNR BRTMN TAAYZ GRB DLH ABR J32 BOY DNW KJAC
KORD PLL ALO FOD ONL J94 BFF DDY BOY DNW KJAC
*/

		case "JAX": // Updated 08-22-2025
			result += "<!-- Updated 08-22-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 THRSR NOKIE DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE J83 SPA ESENT LUNNI2 KJAX\" readonly>"; // CDR 2E
			result += "<br/>West/ZID Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL J71 MEM JILLS MGM DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE SWAPP VXV ODF MCN AMG KJAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-22-2025
			result += "<!-- Verified with ATCSCC on 08-22-2025 -->";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 THRSR NOKIE DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF Q116 VLKNN MGMRY CABLO ZOOSS MARQO3 KJAX\" readonly>";
			result += "<br/>2E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE J83 SPA ESENT LUNNI2 KJAX\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q79 THRSR NOKIE DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR NOKIE DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PLESS HITMN THRSR NOKIE DUCHY OHDEA2 KJAX\" readonly>";
			break;
		case "JFK": // Updated 07-26-2025
			result += "<!-- Updated 07-26-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC JHW J70 LVZ LENDY8 KJFK\" readonly>"; // CDR 0E
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME FLM SITTR Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/><br/>CAN NOTAP EAST 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY ALB IGN IGN1 KJFK\" readonly>";
			result += "<br/>MACER 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
			result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME NELLS JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE Q935 HANKK Q140 YODAA IGN IGN1 KJFK\" readonly>";
			result += "<br/>2E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EBAKE WISMO POSTS PADDE SVM DAFLU J70 BEWEL GEE HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO AHPAH YODAA IGN IGN1 KJFK\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>C0<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG PRNCE IGN IGN1 KJFK\" readonly>";
			result += "<br/>C1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP TULEG PRNCE IGN IGN1 KJFK\" readonly>";
			result += "<br/>C2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP KAPUX TULEG PRNCE IGN IGN1 KJFK\" readonly>";
			result += "<br/>C3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY ALB IGN IGN1 KJFK\" readonly>";
			result += "<br/>C4<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
			result += "<br/>C5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG PRNCE IGN IGN1 KJFK\" readonly>";
			result += "<br/>C6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO OLABA SSENA BUGSY ALB IGN IGN1 KJFK\" readonly>";
			result += "<br/>M1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG PRNCE IGN IGN1 KJFK\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG PRNCE IGN IGN1 KJFK\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO AHPAH HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
			result += "<br/>MS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			break;
		case "LAS": // Updated 07-26-2025
			result += "<!-- Updated 07-26-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 07-26-2025
			result += "<br/><input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE OGALE LNK J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT OBH SNY J100 SAKES GGAPP CHOWW3 KLAS\" readonly>"; // CDR 2W
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SLN GCK J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>"; // CDR 5W
			result += "<br/><br/>North via DLH<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FAR DPR J107 MLF STEWW CHOWW3 KLAS\" readonly>"; // CDR 3N
			result += "<br/>South via STL<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>"; // CDR 0S
			result += "<br/>South via EWM<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI FAM J137 LIT J131 FUZ J4 SSO ELLDA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL J110 GCK J28 HBU J146 DVC PGA BLAID2 KLAS\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KORD IOW J60 BCE BLAID2 KLAS\" readonly>"; // CDR NR
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-26-2025
			result += "<!-- Verified with ATCSCC on 07-26-2025 -->";
			result += "<br/>0S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 DVV J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE DVV J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP J114 SNY J84 EKR J100 SAKES GGAPP CHOWW3 KLAS\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J134 BUM J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT OBH SNY J100 SAKES GGAPP CHOWW3 KLAS\" readonly>";
			result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FAR DPR J107 MLF STEWW CHOWW3 KLAS\" readonly>";
			result += "<br/>3W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE GLD PUB DVC TYEGR CHOWW3 KLAS\" readonly>";
			result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP J114 SNY J84 EKR J100 SAKES GGAPP CHOWW3 KLAS\" readonly>";
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI FAM J78 PNH J58 FTI J76 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/>4W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA SLN GCK J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/>5N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH FAR DPR J107 MLF STEWW CHOWW3 KLAS\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG TUL MMB FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>5W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SLN GCK J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/>6W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM J110 RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/>7W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY JORDY ONL J114 DVV J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
			result += "<br/>8W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY SMIDD MCW J16 FSD J82 RAP EKR J100 SAKES GGAPP CHOWW3 KLAS\" readonly>";
			result += "<br/>LP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J60 HVE GGAPP CHOWW3 KLAS\" readonly>";
			result += "<br/>NR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD IOW J60 BCE BLAID2 KLAS\" readonly>";
			break;
		case "LAX": // Updated 04-29-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-29-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-29-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J146 GLD PUB J64 RSK JASSE Q90 DNERO ANJLL4 KLAX\" readonly>"; // CDR 1W
			result += "<br/><br/>North via ONL: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY IANNA FOD ONL J148 CYS EKR J100 SAKES PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
			result += "<br/>North via RAP: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY IANNA FOD ONL J148 CYS EKR J100 SAKES PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI FAM J78 TUL EZEEE FTI J76 TBC JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KORD IOW PWE HLC J64 HEC BASET5 KLAX\"; readonly>"; // CDR NR
			result += "<br/>South: <input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL J24 SLN J102 ALS J110 RSK J10 TNP BASET5 KLAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-29-2025
			result += "<!-- Verified with ATCSCC on 04-29-2025 -->";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 ONL J148 CYS EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J146 GLD PUB J64 RSK JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP J114 ONL J148 CYS EKR PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL BUM ICT LBL CIM J134 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>2W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J60 DVV ZAKRY Q88 HAKMN ANJLL4 KLAX\" readonly>";
			result += "<br/>3W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 RSK JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
			result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP J114 ONL J148 CYS EKR PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL SGF LBL CIM J134 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>4W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA STJ J18 GCK J110 RSK JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J131 LIT J66 FUZ ABI J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>5W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SLN J102 ALS J110 RSK JASSE Q90 DNERO ANJLL4 KLAX\" readonly>";
			result += "<br/>6W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM ICT LBL FTI J8 GUP INW DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>8W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY SMIDD MCW J16 FSD J82 RAP EKR HVE PROMT Q88 HAKMN ANJLL4 KLAX\" readonly>";
			result += "<br/>K1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL IFI PNH J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>LP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J60 DVV ZAKRY Q88 HAKMN ANJLL4 KLAX\" readonly>";
			result += "<br/>NR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD IOW PWE HLC J64 HEC BASET5 KLAX\" readonly>";
			break;

/* TODO ORD-LEX
ORD.DCT.EARND.DCT.ELANR.DCT.EMMLY.DCT.ERECO.DCT.IIU.DCT.FEDRA.DCT.LEX
*/

		case "LGA": // Updated 06-28-2025
			result += "<!-- Updated 06-28-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD MOBLE ADIME GERBS J146 ETG MIP4 KLGA\" readonly>"; // CDR 0E
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK EXTOL RKA HAARP4 KLGA\" readonly>";
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR Q34 GVE PROUD2 KLGA\" readonly>";
			result += "<br/><br/>CAN NOTAP EAST 3<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY ALB HAARP4 KLGA\" readonly>";
			result += "<br/>MACER 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP KAPUX TULEG RKA HAARP4 KLGA\"; readonly>"; // CDR C2
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-28-2025
			result += "<!-- Verified with ATCSCC on 06-28-2025 -->";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME GERBS J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EBAKE WISMO POSTS PADDE SOSIC ETG MIP4 KLGA\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE Q816 KELTI NABOR RKA HAARP4 KLGA\" readonly>";
			result += "<br/>2E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME GERBS DORET GEE HANKK RKA HAARP4 KLGA\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR Q34 GVE PROUD2 KLGA\" readonly>";
			result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI Q140 AHPAH NABOR RKA HAARP4 KLGA\" readonly>";
			result += "<br/>C0<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG RKA HAARP4 KLGA\" readonly>";
			result += "<br/>C1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP TULEG RKA HAARP4 KLGA\" readonly>";
			result += "<br/>C2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP KAPUX TULEG RKA HAARP4 KLGA\" readonly>";
			result += "<br/>C3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY ALB HAARP4 KLGA\" readonly>";
			result += "<br/>C4<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK EXTOL RKA HAARP4 KLGA\" readonly>";
			result += "<br/>C5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG RKA HAARP4 KLGA\" readonly>";
			result += "<br/>C6<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO OLABA SSENA BUGSY ALB HAARP4 KLGA\" readonly>";
			result += "<br/>M1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG RKA HAARP4 KLGA\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG RKA HAARP4 KLGA\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO AHPAH EXTOL RKA HAARP4 KLGA\" readonly>";
			result += "<br/>MS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			break;

/* TODO ORD-LIT
ORD-RBS.J71-ENL-ARG.J137-LIT
*/

		case "MCI": // Updated 05-29-2025
			result += "<!-- Updated 05-29-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET BULET RUDDH3 KMCI\" readonly>"; // CDR 1W
			result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN SPI EUING RUDDH3 KMCI\" readonly>"; // CDR 1S
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE GRB EAU ONTIJ DABOY ASIIX JSONN4 KMCI\" readonly>"; // CDR 1N
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD JOT J26 IRK BQS8 KMCI\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-29-2025
			result += "<!-- Verified with ATCSCC on 05-29-2025 -->";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE GRB EAU ONTIJ DABOY ASIIX JSONN4 KMCI\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN SPI EUING RUDDH3 KMCI\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET BULET RUDDH3 KMCI\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL EUING RUDDH3 KMCI\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE OVR ASIIX JSONN4 KMCI\" readonly>";
			result += "<br/>AS<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RBS SPI EUING RUDDH3 KMCI\" readonly>";
			break;
		case "MCO": // Updated 04-06-2025
			result += "<!-- Updated 04-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM KI45S BZM CAE WURFL Q83 ROYCO Q85 LPERD GTOUT1 KMCO\" readonly>";
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR ZJAYX GRNCH5 KMCO\" readonly>"; // CDR SB
			result += "<br/><br/>East via APE <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>"; // CDR 2E
			result += "<br/>West via SGF <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF Q116 VLKNN MGMRY ACORI BULZI NICKI PLYER BAYNE PRICY4 KMCO\" readonly>"; // CDR 1W
			result += "<br/><br/>OH VALLEY TO FL 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ERECO IIU VXV LGC MCN OTK LEESE3 KMCO\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-06-2025
			result += "<!-- Verified with ATCSCC on 04-06-2025 -->";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF Q116 VLKNN MGMRY ACORI BULZI NICKI PLYER BAYNE PRICY4 KMCO\" readonly>";
			result += "<br/>2E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q79 THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J41 SGF Q116 VLKNN MGMRY ACORI BULZI NICKI PLYER BAYNE PRICY4 KMCO\" readonly>";
			result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PLESS Q19 HITMN THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/>SB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			break;

// TODO ORD-MEM // ORD.DCT.CMSKY.DCT.CARYN.DCT.CYBIL.DCT.PXV.BLUZZ3.MEM

		case "MIA": // Updated 05-06-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-06-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 THRSR HONID FROGZ4 KMIA\" readonly>";
			result += "<br/><b style=\"color:orange\">As of 5-6-2025 CDR SB is listed as FAA pref route, but is also Coord Rqd on ATCSCC CDR listing.<\/b>";
			result += "<br/><br/>East via SPA: <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
			result += "<br/>East/ZTL Avoid: <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM BKW RDU SKARP Y313 HOAGG BNFSH3 KMIA\" readonly>";
			result += "<br/>East via DTW: <span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE J83 SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>"; // Based on CDR 2E
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF MERDN DEFUN FROGZ4 KMIA\" readonly>"; // CDR 1W
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE SWAPP RMG LGC SZW PIE PALMZ2 KMIA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-06-2025
			result += "<!-- Verified with ATCSCC on 05-06-2025 -->";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 THRSR HONID FROGZ4 KMIA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM J43 VXV THRSR HONID FROGZ4 KMIA\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF MERDN DEFUN FROGZ4 KMIA\" readonly>";
			result += "<br/>2E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE J83 SPA ALLMA BULZI Q81 ENDEW BROMO FROGZ4 KMIA\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J41 SGF MERDN DEFUN FROGZ4 KMIA\" readonly>";
			result += "<br/>SB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN ACORI FROGZ4 KMIA\" readonly>";
			break;

// TODO ORD-MKE // ORD.DCT.OBK.DCT.MKE

/* TODO - FOS ROUTES: KORD - KMSN
KORD RAYNR BRTMN TAAYZ KMSN
KORD RAYNR BRTMN TAAYZ KMSN
KORD PMPKN NEATO DLLAN RONIC BAE KMSN
KORD PMPKN NEATO DLLAN RONIC BAE DREAR KMSN
*/

		case "MSP": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL290):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC KAMMA KKILR3 KMSP\" readonly>"; // CDR 0N
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KORD MYKIE MONNY MNOSO BLUEM4 KMSP\" readonly>"; // CDR 1W
			result += "<br/><br/>MSP SOUTH: <span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE FSD SSWAN TORGY3 KMSP\" readonly>";
			result += "<br/>MSP SE: <span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE GRB DLH GGULL BAINY3 KMSP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD BAE EAU9 KMSP\"; readonly>"; // CDR NN
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>0N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE IDIOM MUSCL3 KMSP\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY MNOSO BLUEM4 KMSP\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH GGULL BAINY3 KMSP\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE GRB DLH GGULL BAINY3 KMSP\" readonly>";
			result += "<br/>3W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE FSD SSWAN TORGY3 KMSP\" readonly>";
			result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE OOPEE BLUEM4 KMSP\" readonly>";
			result += "<br/>5N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE EAU9 KMSP\" readonly>";
			result += "<br/>NN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BAE EAU9 KMSP\" readonly>";
			break;

/* TODO - FOS ROUTES: KORD - KMSY
KORD BACEN BLOKR BEKKI ENL J71 MEM J35 MCB RYTHM4 KMSY
KORD BACEN BLOKR BEKKI ENL J71 MEM J35 MCB TRSSH1 KMSY
KORD DENNT DARCY DREGS PXV J73 BNA IGB MCB TRSSH1 KMSY
KORD ACITO ADELL ARLYN STL J101 LIT AEX LSU AWDAD1 KMSY
KORD EARND ELANR EMMLY ERECO IIU J99 VXV VUZ MERDN TRSSH1 KMSY
KORD MZV IRK SGF RZC TXK AEX LSU AWDAD1 KMSY
KORD ACITO ADELL ARLYN STL FAM MEM J35 MCB TRSSH1 KMSY
KORD BACEN BLOKR BEKKI ENL J71 MEM J35 MCB TRSSH1 KMSY
KORD PEKUE PIGGG QUANE CARET ROEZZ SGF LIT MCB TRSSH1 KMSY
KORD EARND ELANR EMMLY ERECO IIU BNA IGB MCB TRSSH1 KMSY
KORD CMSKY CARYN CYBIL PXV HITMN Q139 VLKNN MERDN TRSSH1 KMSY
*/

			/* TODO - FOS ROUTES: KORD - KOKC
KORD MZV IRK BUM SEGLR KOKC
KORD MZV IRK J87 TUL GULLI3 KOKC
KORD JOT J26 IRK J87 TUL GULLI3 KOKC
KORD PEKUE PIGGG QUANE CARET ROEZZ MCI TUL GULLI3 KOKC
KORD MZV IRK J26 ICT PER GULLI3 KOKC
KORD IOW DSM LNK SLN ICT PER J23 KOKC
KORD GIJ VHP PXV FAM SGF KOKC
KORD IOW DSM OVR SLN MMB KOKC
KORD RBS STL J8 SGF J98 TUL GULLI3 KOKC
KORD RBS ENL FAM J78 TUL GULLI3 KOKC
KORD IOW LMN MCI J25 TUL GULLI3 KOKC
KORD MZV J18 BACNN J25 TUL GULLI3 KOKC
*/

		case "OMA": // Updated 01-04-2025
			result += "<!-- Updated 01-04-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE DSM LANTK2 KOMA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TOdDO			
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE MSN DSM LANTK2 KOMA\" readonly>";
			result += "<br/>1W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE DSM LANTK2 KOMA\" readonly>";
			result += "<br/>2S: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL IRK STJ MARWI4 KOMA\" readonly>";
			result += "<br/>2W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA LMN MARWI4 KOMA\" readonly>";
			result += "<br/>3W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY IANNA DABOY LANTK2 KOMA\" readonly>";
			result += "<br/>NR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD IOW DSM LANTK2 KOMA\" readonly>";
			break;

/* TODO - FOS ROUTES: KORD - KORF
KORD GIJ J146 WOOST DJB AIR MOL TERKS2 KORF
KORD EARND ELANR EMMLY ETAME EMEGE FLM J24 MOL TERKS2 KORF
KORD EARND ELANR EMMLY ETAME VHP J24 MOL TERKS2 KORF
KORD GUIDO J73 PXV BKW MOL TERKS2 KORF
KORD BACEN BLOKR BEKKI ENL PXV BKW MOL TERKS2 KORF
KORD BACEN BLOKR BEKKI ENL PXV BKW MOL TERKS2 KORF
KORD EARND ELANR EMMLY ETAME EMEGE FLM J24 MOL TERKS2 KORF
KORD MOBLE ADIME OTENS ANEWA JERRI BUCKO MOL TERKS2 KORF
KORD EARND ELANR EMMLY ERECO IIU J8 HVQ J24 MOL TERKS2 KORF
KORD CMSKY CARYN CYBIL PXV J73 BNA VXV GSO RDU DRONE2 KORF
KORD BACEN BLOKR BEKKI ENL PLESS BNA VXV GSO RDU DRONE2 KORF
KORD EARND ELANR EMMLY ERECO IIU J8 HVQ J24 MOL TERKS2 KORF
*/

			/* TODO - FOS ROUTES: KORD - KPBI
KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP LORNN Q65 KERLY SHRKS Q89 PRMUS Q93 KENLL CPTAN3 KPBI
KORD EARND ELANR EMMLY ETAME EMEGE FLM HMV QUIWE FISHO Q93 KENLL CPTAN3 KPBI
KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP VXV SPA QUIWE Q93 KENLL CPTAN3 KPBI
KORD EARND ELANR EMMLY ERECO IIU Q79 ZPLEN VUUDU1 KPBI
KORD CMSKY CARYN CYBIL PXV HITMN THRSR ZPLEN VUUDU1 KPBI
KORD CMSKY CARYN CYBIL PXV HITMN ZPLEN VUUDU1 KPBI
KORD CMSKY CARYN CYBIL PXV HITMN ZPLEN VUUDU1 KPBI
KORD DENNT DARCY DREGS DUMGE SCOTO LOZ FLO OGGRE Y289 DULEE CLMNT2 KPBI
KORD BACEN BLOKR BEKKI ENL J71 MEM J35 MCB HRV Q105 BLVNS Y290 GAWKS VUUDU1 KPBI
KORD BACEN BLOKR BEKKI ENL J71 MEM J35 LEV Y290 GAWKS VUUDU1 KPBI
KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 ZPLEN VUUDU1 KPBI
KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 ZPLEN VUUDU1 KPBI
KORD EARND ELANR EMMLY ETAME EMEGE FLM J43 VXV THRSR ZPLEN VUUDU1 KPBI
KORD PEKUE PIGGG QUANE CARET ROEZZ SGF MERDN DEFUN VUUDU1 KPBI
KORD MOBLE ADIME OTENS ANEWA APE J83 SPA ENEME VUUDU1 KPBI
KORD EARND ELANR EMMLY ERECO IIU J99 VXV THRSR ZPLEN VUUDU1 KPBI
KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J41 SGF MERDN DEFUN VUUDU1 KPBI
KORD CMSKY CARYN CYBIL PXV HITMN THRSR ZPLEN VUUDU1 KPBI
KORD BACEN BLOKR BEKKI ENL PLESS Q19 HITMN THRSR ZPLEN VUUDU1 KPBI
KORD CMSKY CARYN CYBIL PXV HITMN ACORI VUUDU1 KPBI
*/

			/* TODO - FOS ROUTES: KORD - KPDX
KORD MYKIE MONNY IANNA FOD RAP LKT PDT JKNOX HHOOD5 KPDX
KORD MYKIE MONNY IANNA FSD J16 PDT JKNOX HHOOD5 KPDX
KORD MYKIE MONNY SMIDD FSD DPR J34 BIL HIA J16 PDT JKNOX HHOOD5 KPDX
KORD MYKIE MONNY IANNA FOD RAP J82 DNJ J20 PDT JKNOX HHOOD5 KPDX
KORD BAE J34 BIL J16 PDT KPDX
KORD PMPKN NEATO DLLAN RONIC BAE J34 ODI FSD J16 PDT JKNOX HHOOD5 KPDX
KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP DIK HLN PDT JKNOX HHOOD5 KPDX
KORD PMPKN NEATO DLLAN RONIC BAE GRB GEP ABR DPR PDT JKNOX HHOOD5 KPDX
KORD PEKUE PIPPN ROTTN PWE ONL J151 RAP J82 DNJ J20 PDT JKNOX HHOOD5 KPDX
KORD PMPKN NEATO DLLAN RONIC BAE J34 BIL J16 PDT JKNOX HHOOD5 KPDX
KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP J70 ABR J32 DPR J16 PDT JKNOX HHOOD5 KPDX
KORD ACITO ADELL ARLYN STL IFI PNH ALS JNC J15 IMB JOTBA HHOOD5 KPDX
KORD MYKIE MONNY IANNA FOD FSD J82 DNJ IMB JOTBA HHOOD5 KPDX
KORD MYKIE MONNY IANNA FOD FSD J82 DNJ IMB JOTBA HHOOD5 KPDX
KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FAR DIK MLS BIL J16 PDT JKNOX HHOOD5 KPDX
KORD NOONY NIGHT NITWT OBH SNY OCS J20 PDT JKNOX HHOOD5 KPDX
KORD RAYNR BRTMN TAAYZ GRB GEP J70 ABR J32 DPR J16 PDT JKNOX HHOOD5 KPDX
KORD OLINN OREOS OBENE OGALE LNK ONL J151 BIL J16 PDT JKNOX HHOOD5 KPDX
KORD RAYNR BRTMN TAAYZ GRB DLH FAR DIK MLS BIL J16 PDT JKNOX HHOOD5 KPDX
KORD PEKUE PIPPN ROTTN PWE HCT OCS J20 PDT JKNOX HHOOD5 KPDX
KORD PEKUE PIPPN ELYNA STJ J18 SLN HCT BFF DBS J82 DNJ J20 PDT JKNOX HHOOD5 KPDX
*/


		case "PHL": // Updated 06-28-2025
			result += "<!-- Updated 06-28-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD MOBLE ADIME GERBS J146 CXR EWC JST BOJID4 KPHL\" readonly>"; // CDR 0E
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>"; // CDR M1
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE CXR EWC JST BOJID4 KPHL\" readonly>"; // CDR 1N
			result += "<br/><br/>North via Canada<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE GRB SAW SSM OXASA SASID MSS BUGSY ALB DNY SPUDS7 KPHL\" readonly>";
			result += "<br/><br/>MACER 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>"; // CDR M1
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ELX CRL J34 WOOST J146 CXR JST BOJID4 KPHL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-28-2025
			result += "<!-- Verified with ATCSCC on 06-28-2025 -->";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME GERBS J146 CXR EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EBAKE WISMO POSTS PADDE SOSIC KEEHO CXR EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE CXR EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J73 BNA BURGG Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>M1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>MS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>VR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			break;
		case "PHX":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PEKUE PIPPN ELYNA BACNN J18 GCK J96 CIM ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE OGALE LNK J60 HCT J128 HBU J10 RSK J161 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE OGALE LNK LAA J102 GUP BUNTR3 KPHX\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-17-2025
			result += "<!-- Verified with ATCSCC on 05-17-2025 -->";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA STJ J18 FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP J114 ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL BUM ICT LBL FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>2W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 PUB ALS GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FAR DPR RAP J17 FQF J10 RSK GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>3W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J26 ICT LBL FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL FAM SGF J98 IRW J78 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>4W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT OBH LBF J10 FQF J44 ALS J102 GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>5N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH FAR DPR RAP J17 FQF J10 RSK GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG IRW J78 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>5W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J146 GLD PUB ALS J102 GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>6W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY JORDY ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>K1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL IFI PNH J78 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>LP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK HLC ALS J102 GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>W0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 RSK FLG DUTEY MAIER BRUSR1 KPHX\" readonly>";
			break;
		case "PIT": // Updated 08-25-2025
			result += "<!-- Updated 08-25-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL290):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA TAMDE GRIVY JESEY5 KPIT\" readonly>"; // CDR 0E
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN DNIKA TAAYZ PETTY VIO LNDOR GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP APE CTW FEWGA7 KPIT\" readonly>"; // CDR VR
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ADIME OTENS ANEWA LNDOR ACO KPIT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-25-2025
			result += "<!-- Verified with ATCSCC on 08-25-2025 -->";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA TAMDE GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH CXR GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV IIU HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>VR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP APE CTW FEWGA7 KPIT\" readonly>";
			break;
		case "PVD": // Updated 07-06-2025
			result += "<!-- Updated 07-06-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC JHW Q82 MEMMS HNK WIPOR3 KPVD\" readonly>"; // CDR 0E
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK HNK WIPOR3 KPVD\" readonly>"; // CDR C4
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP J110 AIR Q430 CREEL ORCHA JORDN JORDN2 KPVD\" readonly>";
			result += "<br/><br/>CAN NOTAP EAST 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY ALB WIPOR3 KPVD\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-06-2025
			result += "<!-- Verified with ATCSCC on 07-06-2025 -->";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC JHW Q82 MEMMS HNK WIPOR3 KPVD\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE Q935 HANKK Q140 KODEY HNK WIPOR3 KPVD\" readonly>";
			result += "<br/>C0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG HNK WIPOR3 KPVD\" readonly>";
			result += "<br/>C1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP TULEG HNK WIPOR3 KPVD\" readonly>";
			result += "<br/>C2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP KAPUX TULEG HNK WIPOR3 KPVD\" readonly>";
			result += "<br/>C3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY ALB WIPOR3 KPVD\" readonly>";
			result += "<br/>C4<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK HNK WIPOR3 KPVD\" readonly>";
			result += "<br/>C5<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG HNK WIPOR3 KPVD\" readonly>";
			result += "<br/>C6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO OLABA SSENA BUGSY ALB WIPOR3 KPVD\" readonly>";
			result += "<br/>M1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG HNK WIPOR3 KPVD\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG HNK WIPOR3 KPVD\" readonly>";
			result += "<br/>M3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO AHPAH HANKK HNK WIPOR3 KPVD\" readonly>";
			break;

/* TODO - FOS ROUTES: KORD - KPSP
KORD PEKUE PIPPN ROTTN PWE HLC J64 RSK J10 TNP KPSP
KORD MYKIE MONNY JORDY ONL SNY ICIES GCN EED SBONO1 KPSP
KORD PEKUE PIPPN ELYNA STJ J18 SLN J102 ALS J44 RSK J64 TBC J236 EED SBONO1 KPSP
KORD NOONY NIGHT NITWT OBH LBF DVV J60 DBL J60 BCE AHOWW Q114 ZAINY Q73 ZELMA RDBUL1 KPSP
KORD MYKIE MONNY JORDY ONL J114 SNY FQF J128 TBC YORRK RDBUL1 KPSP
KORD ACITO ADELL ARLYN STL Q176 CIM J96 GUP J8 CADDU YORRK RDBUL1 KPSP
KORD BACEN BLOKR BEKKI ENL ARG J137 LIT J66 EWM J4 BXK J212 CURIV RDBUL1 KPSP
KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 SNY FQF J10 TNP KPSP
KORD PEKUE PIPPN ROTTN PWE HLC J64 RSK J10 TNP KPSP
KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP FSD J114 SNY FQF J10 TNP KPSP
KORD PEKUE PIGGG QUANE CARET ROEZZ SLN J96 PKE RDBUL1 KPSP
KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FSD J114 SNY FQF J10 TNP KPSP
KORD OLINN OREOS OBENE OGALE LNK J60 HEC KPSP
KORD RAYNR BRTMN TAAYZ GRB GEP FSD J114 SNY FQF J10 TNP KPSP
KORD MYKIE MONNY JORDY ONL SNY J100 BCE J60 HEC KPSP
KORD RAYNR BRTMN TAAYZ GRB DLH FSD J114 SNY FQF J10 TNP KPSP
KORD ACITO ADELL ARLYN STL IFI PNH J6 DRK J231 TNP KPSP
*/

			/* TODO - FOS ROUTES: KORD - KPWM
KORD EBAKE WISMO POSTS PADDE SVM DKK ALB CAM CDOGG4 KPWM
KORD MOBLE ADIME GERBS J146 MIGET SLT J190 ALB CAM CDOGG4 KPWM
KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE Q935 PONCT CAM CDOGG4 KPWM
KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG WAYGO CAM CDOGG4 KPWM
KORD RAYNR BRTMN TAAYZ PECOK NOTAP TULEG WAYGO CAM CDOGG4 KPWM
KORD RAYNR BRTMN TAAYZ PECOK NOTAP KAPUX TULEG WAYGO CAM CDOGG4 KPWM
KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY KPWM
KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH CAM CDOGG4 KPWM
KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG WAYGO CAM CDOGG4 KPWM
KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO OLABA SSENA BUGSY KPWM
KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG WAYGO CAM CDOGG4 KPWM
KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG WAYGO CAM CDOGG4 KPWM
KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO AHPAH CAM CDOGG4 KPWM
*/

			/* TODO - FOS ROUTES: KORD - KRDU
KORD MOBLE ADIME SEWTO FWA J149 ROD HVQ BKW FRIKY ALDAN4 KRDU
KORD EARND ELANR EMMLY ETAME EMEGE FLM ECB ZOOMS FRIKY ALDAN4 KRDU
KORD EARND ELANR EMMLY ETAME EMEGE FLM BKW FRIKY ALDAN4 KRDU
KORD EARND ELANR EMMLY ETAME EMEGE FLM BLF FRIKY ALDAN4 KRDU
KORD VHP J24 HVQ ROA KRDU
KORD MOBLE ADIME OTENS ANEWA WAAHU JAMOX BKW FRIKY ALDAN4 KRDU
KORD MOBLE ADIME OTENS MAYZE APE SPAYD BKW FRIKY ALDAN4 KRDU
KORD EARND ELANR EMMLY ERECO IIU Q50 CUBIM KPASS ALDAN4 KRDU
KORD GIJ VIZXO AGC ESL GVE MELTN ALDAN4 KRDU
KORD ELX CRL CXR IHD GVE MELTN ALDAN4 KRDU
KORD DENNT DARCY DREGS DUMGE SWAPP PSK FRIKY ALDAN4 KRDU
KORD EARND ELANR EMMLY ERECO IIU J99 VXV PYRES DMSTR2 KRDU
KORD EARND ELANR EMMLY ETAME EMEGE FLM SITTR FRIKY ALDAN4 KRDU
KORD MOBLE ADIME OTENS ANEWA APE HVQ SITTR FRIKY ALDAN4 KRDU
KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR FRIKY ALDAN4 KRDU
KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP VXV KPASS ALDAN4 KRDU
KORD CMSKY CARYN CYBIL PXV HITMN VXV KPASS ALDAN4 KRDU
KORD BACEN BLOKR BEKKI ENL PLESS Q19 HITMN VXV KPASS ALDAN4 KRDU
KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR FRIKY ALDAN4 KRDU
*/

// TODO ORD-RIC // ORD.DCT.EARND.DCT.ELANR.DCT.EMMLY.DCT.ETAME.DCT.EMEGE.DCT.FLM.J24.MOL.SPIDR4.RIC

			/* TODO - FOS ROUTES: KORD - KROC
KORD EBAKE WISMO POSTS PADDE SVM Q907 DERLO ROC KROC
KORD DUFEE ELX HAAKK DOXXY SOSIC WTEVR DOBIE DKK BUF KROC
KORD DUFEE ELX HAAKK DOXXY DXO COHOW DKK BUF KROC
KORD MOBLE ADIME OTENS ANEWA DJB JHW KROC
*/

		case "RSW": // Updated 09-08-2025
			result += "<!-- Updated 09-08-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN Q19 BULZI Q81 NICKI PLYER TYNEE4 KRSW\" readonly>"; // CDR 0S
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE SPA IRQ CYNTA SHFTY6 KRSW\" readonly>"; // CDR 2E
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J151 VUZ MGMRY ACORI BULZI Q81 NICKI PLYER TYNEE4 KRSW\" readonly>"; // CDR 8S
			result += "<br/><br/>East/ZTL Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM BKW RDU PRONI Q131 WAALT Y289 BAHAA HIBAC SHFTY6 KRSW\" readonly>";
			result += "<br/>West/OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J101 LIT EDWAH Q33 SWEUP AEX J58 HRV Q105 BLVNS KOLBR TYNEE4 KRSW\" readonly>";
			result += "<br/><br/>OHIO VALLEY TO FLORIDA 1<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN Q19 BULZI Q81 NICKI PLYER TYNEE4 KRSW\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-08-2025
			result += "<!-- Verified with ATCSCC on 09-08-2025 -->";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN Q19 BULZI Q81 NICKI PLYER TYNEE4 KRSW\" readonly>";
			result += "<br/>1S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM J43 VXV THRSR HONID Q81 NICKI PLYER TYNEE4 KRSW\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF Q116 VLKNN MGMRY ACORI BULZI Q81 NICKI PLYER TYNEE4 KRSW\" readonly>";
			result += "<br/>2E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE SPA IRQ CYNTA SHFTY6 KRSW\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU J99 VXV THRSR HONID Q81 NICKI PLYER TYNEE4 KRSW\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J41 VUZ MGMRY ACORI BULZI Q81 NICKI PLYER TYNEE4 KRSW\" readonly>";
			result += "<br/>4S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DONVE BWG HITMN Q19 BULZI Q81 NICKI PLYER TYNEE4 KRSW\" readonly>";
			result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PLESS Q19 BULZI Q81 NICKI PLYER TYNEE4 KRSW\" readonly>";
			result += "<br/>8S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J151 VUZ MGMRY ACORI BULZI Q81 NICKI PLYER TYNEE4 KRSW\" readonly>";
			result += "<br/>SB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN Q19 BULZI Q81 NICKI PLYER TYNEE4 KRSW\" readonly>";
			break;
		case "SAN": // Updated 07-29-2025
			result += "<!-- Updated 07-29-2025 -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 07-29-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SLN J96 PKE LUCKI1 KSAN\" readonly>";
			// ZKC Avoid: KORD PEKUE PIPPN ROTTN PWE HLC J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT OBH LBF J10 FQF J128 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>"; // CDR 4W
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL Q176 TOTOE FTI J18 HOGGZ LUCKI1 KSAN\" readonly>"; // CDR 2S
			result += "<br/><br/>North via MSP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>"; // CDR 1N
			result += "<br/>South via INK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J8 SGF J98 IRW GTH INK EWM J4 SSO GBN J18 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD NOONY NIGHT NITWT OBH LBF J10 FQF J80 DBL J60 BCE BLD TNP BARET5 KSAN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-29-2025
			result += "<!-- Verified with ATCSCC on 07-29-2025 -->";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP FSD J114 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>";
			result += "<br/>2S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL BUM ICT TOTOE FTI J18 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA STJ J18 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH SNY J114 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>";
			result += "<br/>3W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J26 ICT TOTOE FTI ZUN J6 DRK J78 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP FSD J114 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>";
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI FAM J78 PNH J78 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/>4W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT OBH LBF J10 FQF J128 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>";
			result += "<br/>5N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH SNY J114 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>";
			result += "<br/>5W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J60 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>";
			result += "<br/>K1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL IFI PNH J6 DRK J78 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/>LP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK HLC J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>";
			break;
		case "SAT": // Updated 06-16-2025
			result += "<!-- Updated 06-16-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL FSM WINDU QERVO1 KSAT\" readonly>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM J87 TUL J25 FUZ NILBE QERVO1 KSAT\" readonly>"; // CDR 1W
			result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J29 MEM BAKRE Q29 HARES KF15I SWEUP Q33 CAAGE QERVO1 KSAT\" readonly>"; // Based on CDR 5S
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD RBS STL J8 SGF RZC FUZ J25 ACT MARCS1 KSAT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-16-2025
			result += "<!-- Verified with ATCSCC on 06-16-2025 -->";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL FSM WINDU QERVO1 KSAT\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM J87 TUL J25 FUZ NILBE QERVO1 KSAT\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN LMN TUL J25 FUZ NILBE QERVO1 KSAT\" readonly>";
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL FAM J137 LIT LLEAD QERVO1 KSAT\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J131 LIT LLEAD QERVO1 KSAT\" readonly>";
			break;

/* TODO - FOS ROUTES: KORD - KSDF
KORD DENNT DARCY DREGS DONVE TTH KSDF
KORD DENNT DARCY DREGS DONVE SHARE JMONY1 KSDF
KORD DENNT DARCY DREGS DONVE JAYVO DAMEN5 KSDF
KORD MOBLE ADIME SEWTO FWA RINTE DLAMP8 KSDF
KORD MOBLE ADIME SEWTO FWA RINTE DLAMP8 KSDF
KORD MOBLE ADIME SEWTO OTENS ANEWA RINTE DLAMP8 KSDF
KORD PEKUE PIGGG QUANE CARET ROEZZ IRK J151 STL IMOUT MBELL5 KSDF
KORD MOBLE ADIME SEWTO FWA RINTE DLAMP8 KSDF
KORD CMSKY CARYN CYBIL JMONY1 KSDF
KORD BACEN BLOKR BEKKI IMOUT MBELL5 KSDF
*/

		case "SEA": // Updated 08-24-2025
			result += "<!-- Updated 08-24-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 08-24-2025
			result += "<br/><br/>NRP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD MYKIE MONNY IANNA FSD J16 DPR J204 MLS J90 HLN J136 MLP GLASR3 KSEA\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 NICKL HUFFR Q146 TIMMR DIK J36 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT OBH SNY CYS OCS J20 PDT CHINS5 KSEA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><input style=\"width:75%\"; value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 BIL J136 MLP GLASR3 KSEA\"; readonly>"; // CDR 0N
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-24-2025
			result += "<!-- Verified with ATCSCC on 08-24-2025 -->";
			result += "<br/>0N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 BIL J136 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>0S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL SLN HCT BFF DBS J82 DNJ J20 PDT CHINS5 KSEA\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY IANNA FOD FSD J16 BIL J136 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP J70 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>2S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG PNH ALS JNC J15 BOI PDT CHINS5 KSEA\" readonly>";
			result += "<br/>2W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY SMIDD MCW ABR J70 DIK J36 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FAR J36 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>3W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT ONL J151 BIL J136 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP J70 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>4W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK ONL J151 BIL J136 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>5N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH FAR J36 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>5W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HCT BFF DBS DNJ PDT CHINS5 KSEA\" readonly>";
			result += "<br/>6W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM HCT BFF DBS DNJ PDT CHINS5 KSEA\" readonly>";
			result += "<br/>K1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL IFI PNH ALS JNC J15 TCH J12 DNJ PDT CHINS5 KSEA\" readonly>";
			break;
		case "SFO": // Updated 04-01-2025
			result += "<!-- Updated 04-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD NOONY NIGHT NITWT OBH KD63U DTA J148 OAL INYOE DYAMD5 KSFO\"; readonly>"; // Verified 03-01-2025
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY IANNA FOD ONL J148 DTA RUMPS OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 PUB J28 MLF J80 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/><br/>South via ICT: <input style=\"width:75%\"; value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ ICT ALS DRO MLF NILLS OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PLL ALO FOD ONL J148 OAL MOD9 KSFO\"; readonly>"; // CDR NR
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-01-2025
			result += "<!-- Verified with ATCSCC on 04-01-2025 -->";
			result += "<br/>0S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J110 GCK J28 MLF J80 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 DPR J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY IANNA FOD ONL J148 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP J70 ABR J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
			result += "<br/>2S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG GCK J28 MLF J80 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>2W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 PUB J28 MLF J80 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FAR DIK CZI J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
			result += "<br/>3W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE DVV J60 DBL J80 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP J70 ABR J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
			result += "<br/>5N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH FAR DIK CZI J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
			result += "<br/>K1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL IFI PNH RSK J58 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>LP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J60 DBL J80 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>NR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PLL ALO FOD ONL J148 OAL MOD9 KSFO\" readonly>";
			result += "<br/>R1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY IANNA FOD ONL CKW TCH BAM LLC LEGGS BDEGA4 KSFO\" readonly>";
			result += "<br/>R2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 ODI FARVA RAP UROCO MLD J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
			break;
		case "SLC": // Updated 08-05-2025
			result += "<!-- Updated 08-05-2025 P -->";
			//result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KORD MYKIE MONNY JORDY ONL J94 BFF CKW CARTR1 KSLC\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J60 DVV EKR RACER JAZZZ1 KSLC\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF UFFDA Q120 JASTI DDY CARTR1 KSLC\" readonly>";
			result += "<br/><br/>South via STL<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL SLN GLD FQF EKR RACER JAZZZ1 KSLC\" readonly>"; // CDR S1
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD IOW J60 DVV EKR SPANE8 KSLC\"; readonly>"; // CDR NR
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-17-2025
			result += "<!-- Verified with ATCSCC on 06-17-2025 -->";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 ONL J94 BFF CKW CARTR1 KSLC\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL SLN GLD FQF EKR RACER JAZZZ1 KSLC\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J60 DVV EKR RACER JAZZZ1 KSLC\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP FSD J114 ONL J94 BFF CKW CARTR1 KSLC\" readonly>";
			result += "<br/>2W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY JORDY ONL J94 BFF CKW CARTR1 KSLC\" readonly>";
			result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH RAP DDY CARTR1 KSLC\" readonly>";
			result += "<br/>3W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA STJ HLC FQF EKR RACER JAZZZ1 KSLC\" readonly>";
			result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP FSD J114 ONL J94 BFF CKW CARTR1 KSLC\" readonly>";
			result += "<br/>5N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH RAP DDY CARTR1 KSLC\" readonly>";
			result += "<br/>LP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J60 DVV EKR RACER JAZZZ1 KSLC\" readonly>";
			result += "<br/>NR<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD IOW J60 DVV EKR SPANE8 KSLC\" readonly>";
			break;

/* TODO - FOS ROUTES: KORD - KSMF
KORD MYKIE MONNY JORDY ONL IIP MLD ANAHO SLMMR5 KSMF
KORD NOONY NIGHT NITWT OBH LAR TCH J154 BAM ANAHO SLMMR5 KSMF
KORD PEKUE PIPPN ROTTN GLD MTJ MLF J58 ILC CRASY SLMMR5 KSMF
KORD PMPKN NEATO DLLAN RONIC BAE J34 ODI FSD J82 RAP J158 BPI Q120 TRAKY MAGPY Q132 ANAHO SLMMR5 KSMF
KORD PMPKN NEATO DLLAN RONIC BAE J34 ODI FSD J82 RAP MBW MTU J148 DTA CRASY SLMMR5 KSMF
KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF J34 DPR J32 LLC ANAHO SLMMR5 KSMF
KORD MYKIE MONNY JORDY ONL J94 LLC ANAHO SLMMR5 KSMF
KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP J114 ONL J94 LLC ANAHO SLMMR5 KSMF
KORD NOONY NIGHT NITWT OBH SNY J84 DTA CRASY SLMMR5 KSMF
KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FAR DIK CZI J32 LLC ANAHO SLMMR5 KSMF
KORD PEKUE PIPPN ROTTN PWE GLD J80 MLF TATOO CRASY SLMMR5 KSMF
KORD RAYNR BRTMN TAAYZ GRB GEP J114 ONL J94 LLC ANAHO SLMMR5 KSMF
KORD RAYNR BRTMN TAAYZ GRB DLH FAR DIK CZI J32 LLC ANAHO SLMMR5 KSMF
KORD OLINN OREOS OBENE OGALE LNK J60 HCT EKR TCH BAM J94 LLC ANAHO SLMMR5 KSMF
KORD PLL ALO FOD ONL J94 LLC J32 SAC KSMF
*/

		case "SNA": // Updated 08-04-2025
			result += "<!-- Updated 08-04-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 08-04-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ATIJA Q90 NAVJO TOADD Q78 MARUE DSNEE6 KSNA\" readonly>"; // Based on CDR 1W
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J60 DVV ZAKRY Q114 NATEE DSNEE6 KSNA\" readonly>"; // CDR LP
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL BUM ICT TOTOE CIM J134 DRK HIMDU DSNEE6 KSNA\" readonly>"; // CDR 2S
			result += "<br/><br/>North via RAP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD MYKIE MONNY IANNA FSD RAP J158 DDY J107 BLD Q114 NATEE DSNEE6 KSNA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD RBS SPI J80 MCI J24 SLN J102 ALS J110 RSK J64 HEC KAYOH8 KSNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-04-2025
			result += "<!-- Verified with ATCSCC on 08-04-2025 -->";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 DVV ZAKRY BAWER Q114 NATEE DSNEE6 KSNA\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 RSK TOADD Q78 MARUE DSNEE6 KSNA\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP FSD J114 DVV ZAKRY BAWER Q114 NATEE DSNEE6 KSNA\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL BUM ICT TOTOE CIM J134 DRK HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J60 DVV ZAKRY Q114 NATEE DSNEE6 KSNA\" readonly>";
			result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH SNY J114 DVV ZAKRY Q114 NATEE DSNEE6 KSNA\" readonly>";
			result += "<br/>3W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA STJ J18 FTI ZUN J78 DRK HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP FSD J114 DVV ZAKRY Q114 NATEE DSNEE6 KSNA\" readonly>";
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL SGF IFI DANKS EZEEE GUP J96 DRK HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/>4W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY JORDY ONL SNY J100 EKR BAWER Q114 NATEE DSNEE6 KSNA\" readonly>";
			result += "<br/>5N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH SNY J114 DVV ZAKRY Q114 NATEE DSNEE6 KSNA\" readonly>";
			result += "<br/>5W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J26 ICT TOTOE FTI ZUN J78 DRK HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/>K1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL IFI PNH J6 DRK HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/>LP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J60 DVV ZAKRY Q114 NATEE DSNEE6 KSNA\" readonly>";
			break;
		case "STL": // Updated 02-14-2025
			result += "<!-- Updated 02-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL280):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD BACEN BLOKR RBS AARCH2 KSTL\" readonly>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE MZV SKOVE LORLE3 KSTL\" readonly>"; // CDR 1W
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD MZV J87 IRK RIVRS6 KSTL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-14-2025
			result += "<!-- Verified with ATCSCC on 06-14-2025 -->";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR RBS AARCH2 KSTL\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE MZV SKOVE LORLE3 KSTL\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LMN IRK LORLE3 KSTL\" readonly>";
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR RBS SPI SKOVE LORLE3 KSTL\" readonly>";
			break;
		case "SYR": // Updated 09-07-2025
			result += "<!-- Updated 09-07-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD EBAKE WISMO POSTS PADDE SVM DKK SYR KSYR\" readonly>"; // CDR 0E
			result += "<br/><br/>North/ZOB Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG KSYR\" readonly>"; // CDR CB
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME FLM HNN GEFFS Q71 PSB J59 SYR KSYR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE DKK KSYR\"; readonly>"; // CDR 1N
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-07-2025
			result += "<!-- Verified with ATCSCC on 09-07-2025 -->";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EBAKE WISMO POSTS PADDE SVM DKK KSYR\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE DKK KSYR\" readonly>";
			result += "<br/>C2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG KSYR\" readonly>";
			result += "<br/>C3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ TVC RUBKI Q140 AHPAH KSYR\" readonly>";
			result += "<br/>CB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG KSYR\" readonly>";
			result += "<br/>CD<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP YEE TULEG KSYR\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG KSYR\" readonly>";
			break;
		case "TPA": // Updated 04-08-2025
			result += "<!-- Updated 04-08-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN ACORI MAATY5 KTPA\" readonly>"; // CDR 0S
			result += "<br/>East via SPA: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM SPA TEUFL BAAMF DADES2 KTPA\" readonly>";
			// KORD SQS HRV Q105 REDFN Y280 CHRGE RAYZZ3 KTPA
			result += "<br/><br/>OHIO VALLEY TO FLORIDA 1 <span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DONVE BWG HITMN ACORI MAATY5 KTPA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO			
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-08-2025
			result += "<!-- Verified with ATCSCC on 04-08-2025 -->";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN ACORI MAATY5 KTPA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM J43 VXV THRSR HONID MAATY5 KTPA\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF MERDN DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/>2E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE J83 SPA BAAMF DADES2 KTPA\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU J99 VXV THRSR HONID MAATY5 KTPA\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI SGF MERDN DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PLESS Q19 HITMN ACORI MAATY5 KTPA\" readonly>";
			result += "<br/>8S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J151 VUZ ACORI MAATY5 KTPA\" readonly>";
			result += "<br/>SB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DONVE BWG HITMN ACORI MAATY5 KTPA\" readonly>";
			break;

/* TODO - FOS ROUTES: KORD - KTUL
KORD RBS STL J8 SGF VINTA3 KTUL
KORD MZV IRK MCI KTUL
KORD RBS V191 TOY V88 SGF VINTA3 KTUL
KORD ACITO ADELL ARLYN STL J8 SGF VINTA3 KTUL
KORD ACITO ADELL ARLYN STL V14 SGF VINTA3 KTUL
KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J25 TUL KTUL
KORD PEKUE PIGGG QUANE CARET ROEZZ SGF VINTA3 KTUL
KORD CMSKY CARYN CYBIL PXV J78 FAM J98 SGF VINTA3 KTUL
KORD MYKIE MONNY JORDY OVR J21 ICT J182 COODY KTUL
KORD ACITO ADELL ARLYN STL J8 SGF VINTA3 KTUL
KORD BACEN BLOKR BEKKI ENL FAM J78 TUL KTUL
KORD CMSKY CARYN CYBIL PXV J78 TUL KTUL
*/

		case "TUS": // Updated 07-18-2025 // Mandatory Routes checked
			result += "<!-- Updated 07-18-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA STJ J18 FTI J104 SSO ZONNA2 KTUS\" readonly>"; // CDR 1W
			result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J8 SGF J98 IRW J74 CNX ONM J104 SSO ZONNA2 KTUS\" readonly>"; // CDR 2S
			// result += "<br/>North/ZKC Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 PUB ALS J13 ABQ J57 ONM J104 SSO ZONNA2 KTUS\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J146 GLD PUB J64 RSK J44 PXR DINGO6 KTUS\" readonly>";
			result += "<br/><br/>North via RWF<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 SNY FQF J13 ABQ ONM J104 SSO ZONNA2 KTUS\" readonly>"; // CDR 1N
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PEKUE PIPPN ROTTN PWE GCK J18 PXR J92 TFD DINGO6 KTUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-20-2025
			result += "<!-- Verified with ATCSCC on 02-20-2025 -->";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 SNY FQF J13 ABQ ONM J104 SSO ZONNA2 KTUS\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA STJ J18 FTI J104 SSO ZONNA2 KTUS\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J8 SGF J98 IRW J74 CNX ONM J104 SSO ZONNA2 KTUS\" readonly>";
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL FAM J78 TCC ACH ONM J104 SSO ZONNA2 KTUS\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG IRW TCC ACH ONM J104 SSO ZONNA2 KTUS\" readonly>";
			break;

/* TODO - FOS ROUTES: KORD - KVPS
KORD CMSKY CARYN CYBIL PXV VUZ CEW KVPS
KORD DENNT DARCY DREGS DONVE BWG PIGON CEW KVPS
KORD EARND ELANR EMMLY ERECO IIU Q139 VLKNN CEW KVPS
KORD BACEN BLOKR BEKKI ENL J71 MEM MEI CEW KVPS
KORD EARND ELANR EMMLY ERECO IIU J99 VXV THRSR MGMRY PIGON CEW KVPS
KORD ACITO ADELL ARLYN STL J151 FAM J35 MEM MEI CEW KVPS
*/

		case "XNA": // Updated 05-10-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-10-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL SPOKE RZC KXNA\" readonly>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI BUM EOS KXNA\" readonly>"; // CDR 1W
			result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG RZC KXNA\" readonly>"; // CDR 5S
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD RBS STL DGD RZC KXNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-10-2025
			result += "<!-- Verified with ATCSCC on 05-10-2025 -->";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN RZC KXNA\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI BUM EOS KXNA\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG RZC KXNA\" readonly>";
			break;
		case "YYC": // Updated 06-24-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KORD MYKIE MONNY IANNA FOD FSD J16 DPR J204 HILGR EBGAL EBGAL7 CYYC\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP KP06C DIK GGW PEMDU Q832 VESDO EBGAL7 CYYC \" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD MYKIE MONNY JORDY ONL J151 BIL J13 COUTS MOBEK EBGAL7 CYYC\" readonly>";
			result += "<br/><br/>North via HML<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE DLH HML SEGAP DURUR SHAWI Q874 ILADA BIRKO6 CYYC\" readonly>"; // CDR 3N
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-08-2025
			result += "<!-- Verified with ATCSCC on 09-08-2025 -->";
			result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE DLH HML SEGAP DURUR SHAWI Q874 ILADA BIRKO6 CYYC\" readonly>";
			result += "<br/>4N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP J70 DIK GGW PEMDU Q832 VESDO EBGAL7 CYYC\" readonly>";
			break;
		case "YVR": // Updated 09-15-2025
			result += "<!-- Updated 09-15-2025 MP -->"
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 09-15-2025
			result += "<br/><br/>CFS: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY SMIDD MCW J16 BIL J136 MLP Q142 METOW GRIZZ7 CYVR\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP SMERF Q146 KIXCO Q142 METOW GRIZZ7 CYVR\" readonly>";
			// TODO South
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-15-2025
			result += "<!-- Verified with ATCSCC on 09-15-2025 -->";
			result += "<br/>0N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 HLN MLP GEG METOW GRIZZ7 CYVR\" readonly>";
			result += "<br/>0W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY IANNA FOD ONL J151 BIL J136 GEG METOW GRIZZ7 CYVR\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP J70 MLP GEG METOW GRIZZ7 CYVR\" readonly>";
			result += "<br/>3N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FAR DIK GEG METOW GRIZZ7 CYVR\" readonly>";
			result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP J70 MLP GEG METOW GRIZZ7 CYVR\" readonly>";
			result += "<br/>5N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH FAR DIK MLP GEG METOW GRIZZ7 CYVR\" readonly>";
			break;
	}
	return result;
}
