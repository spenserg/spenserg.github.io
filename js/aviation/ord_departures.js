ord_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
	switch(arvl) {
		case "ABQ": // Updated 02-14-2025
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
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE SPAYD HLRRY ONDRE1 KATL\" readonly>"; // CDR 0E
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE HYK ADEIN PUPDG ONDRE1 KATL\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI FAM J151 VISQA HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD CMSKY CARYN CYBIL PXV J73 BNA KATL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE SPAYD HLRRY ONDRE1 KATL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV BNA NEWBB IHAVE MTHEW CHPPR1 KATL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>0W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN SGF J41 MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU BNA NEWBB IHAVE MTHEW CHPPR1 KATL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PLESS BNA NEWBB IHAVE MTHEW CHPPR1 KATL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN MCI J41 MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>3S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J45 BNA NEWBB IHAVE MTHEW CHPPR1 KATL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM HLRRY ONDRE1 KATL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP J80 EMPTY OHIOS KTRYN ONDRE1 KATL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>8S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL FAM MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			break;
		case "AUS": // Updated 02-20-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL FSM BROBB WINDU SEWZY6 KAUS\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI TUL FUZ BROBB WINDU SEWZY6 KAUS\" readonly>";
			result += "<br/>East: <input style=\"width:75%\"; value=\"KORD CMSKY CARYN CYBIL PXV J29 ELD LFK WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL J8 SGF RZC FSM WINDU BLEWE5 KAUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL FSM WINDU SEWZY6 KAUS\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>0W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM J87 CVE WINDU SEWZY6 KAUS\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI FAM J137 LIT J101 LFK WEEED WLEEE7 KAUS\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT FUZ WINDU SEWZY6 KAUS\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J131 FUZ WINDU SEWZY6 KAUS\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI FAM J137 LIT J101 LFK WEEED WLEEE7 KAUS\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J131 FUZ WINDU SEWZY6 KAUS\" readonly>"; // Verified with ATCSCC on 02-20-2025
			break;
		case "BDL": // Updated 02-20-2025
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
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC JHW Q82 MEMMS WILET STELA1 KBDL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>0N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE Q935 AUDIL STELA1 KBDL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>C0<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG ALB STELA1 KBDL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>C1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP TULEG ALB STELA1 KBDL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>C2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP KAPUX TULEG ALB STELA1 KBDL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>C3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY ALB STELA1 KBDL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>C4<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK AUDIL STELA1 KBDL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>C5<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG ALB STELA1 KBDL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>C6<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO OLABA SSENA BUGSY ALB STELA1 KBDL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG AUDIL STELA1 KBDL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>M3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO AHPAH HANKK AUDIL STELA1 KBDL\" readonly>"; // Verified with ATCSCC on 02-20-2025
			break;
		case "BGR": // Updated 02-14-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EBAKE WISMO POSTS PADDE SVM DKK ALB KBGR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "BHM": // Updated 02-14-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD CMSKY CARYN CYBIL PXV RQZ NULLS KBHM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD RBS ENL J71 MEM VUZ KBHM\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "BNA": // Updated 02-14-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD CMSKY CARYN CYBIL PXV GUMMA RYYMN2 KBNA\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL YACKS RYYMN2 KBNA\" readonly>";
			result += "<br/>East: <input style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE HYK GUMMA RYYMN2 KBNA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD CMSKY CARYN CYBIL PXV J73 KBNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV GUMMA RYYMN2 KBNA\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU LULOU RYYMN2 KBNA\" readonly>";
			result += "<br/>2E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE HYK GUMMA RYYMN2 KBNA\" readonly>";
			result += "<br/>4S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DONVE GUMMA RYYMN2 KBNA\" readonly>";
			result += "<br/>6S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI YACKS RYYMN2 KBNA\" readonly>";
			break;
		case "BOS": // Updated 01-17-2025
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
		case "BUF": // Updated 02-14-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC WTEVR DOBIE DKK KBUF\" readonly>"; // CDR 0E
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO KBUF\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD KLYNE Q29 DORET DKK KBUF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ELX CRL DKK KBUF\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC COHOW DKK KBUF\" readonly>";
			result += "<br/>2N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ RUBKI SIKBO KBUF\" readonly>";
			result += "<br/>VR (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD KLYNE Q29 DORET DKK KBUF\" readonly>";
			break;
		case "BWI": // Updated 02-14-2025
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
		case "CHS": // Updated 02-14-2025
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
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD DUFEE LOGGR DETMR BRWNZ4 KCLE\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";// toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DUFEE LOGGR DETMR BRWNZ4 KCLE\" readonly>";
			result += "<br/>0N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB OLYEE BRWNZ4 KCLE\" readonly>";
			result += "<br/>0S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP CVG DRUGA ROKNN3 KCLE\" readonly>";
			result += "<br/>1E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME SEWTO FWA TALKN ROKNN3 KCLE\" readonly>";
			break;
		case "CLT": // Updated 02-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU SKYWA FILPZ4 KCLT\" readonly>"; // CDR 0S
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM TAFTT PARQR4 KCLT\" readonly>"; // CDR 3S
			result += "<br/>SE Arrival: <input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR BESTT JONZE5 KCLT\" readonly>"; // CDR 3S
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EON BVT J89 IIU J99 VXV LIINN3 KCLT\"; readonly>"; // CDR NR
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE HVQ LNDIZ PARQR4 KCLT\" readonly>"; // Verified with ATCSCC on 02-22-2025
			result += "<br/>0S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU SKYWA FILPZ4 KCLT\" readonly>"; // Verified with ATCSCC on 02-22-2025
			result += "<br/>1S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM TAFTT PARQR4 KCLT\" readonly>"; // Verified with ATCSCC on 02-22-2025
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE QUANE CARET ROEZZ SGF ARG BNA TAZZA FILPZ4 KCLT\" readonly>"; // Verified with ATCSCC on 02-22-2025
			result += "<br/>2S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM SKYWA FILPZ4 KCLT\" readonly>"; // Verified with ATCSCC on 02-22-2025
			result += "<br/>3S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR BESTT JONZE5 KCLT\" readonly>"; // Verified with ATCSCC on 02-22-2025
			result += "<br/>4S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DONVE BWG VXV LIINN3 KCLT\" readonly>"; // Verified with ATCSCC on 02-22-2025
			result += "<br/>5S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV SKYWA FILPZ4 KCLT\" readonly>"; // Verified with ATCSCC on 02-22-2025
			result += "<br/>6S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PLESS J45 BNA TAZZA FILPZ4 KCLT\" readonly>"; // Verified with ATCSCC on 02-22-2025
			result += "<br/>NR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EON BVT J89 IIU J99 VXV LIINN3 KCLT\" readonly>"; // Verified with ATCSCC on 02-22-2025
			break;
		case "CMH": // Updated 02-05-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD MOBLE ADIME SEWTO FWA BRYEN DUBLN1 KCMH\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME VHP JADUB DUBLN1 KCMH\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0E: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME SEWTO FWA BRYEN DUBLN1 KCMH\" readonly>";
			result += "<br/>0S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP JADUB DUBLN1 KCMH\" readonly>";
			break;
		case "COS": // Updated 02-14-2025
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
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EARND ELANR CEGRM6 KCVG\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EON LCOLN VHP KCVG\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR CEGRM6 KCVG\" readonly>";
			result += "<br/>1E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME SEWTO FWA ZEKUS ARBAS RID MEEKR KCVG\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB VIO SVM DJB SAVVI TIGRR4 KCVG\" readonly>";
			result += "<br/>6S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI DAAVE SARGO4 KCVG\" readonly>";
			result += "<br/>NR (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EON BVT MACES CRYME ARIVR CEGRM KCVG\" readonly>";
			break;
		case "DCA": // Updated 02-14-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD MOBLE ADIME OTENS ANEWA JERRI NUSMM BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD GSH FWA J178 APE J30 ESL AML KDCA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE Q935 WOZEE BFD PSB SKILS5 KDCA\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>5S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J73 BNA SWAPP Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>6S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PXV IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>M1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>MS (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD APE AIR J34 BUCKO FRDMM6 KDCA\" readonly>";
			break;
		case "DEN": // Updated 02-14-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE OGALE OBH BRWRY LAWGR3 KDEN\" readonly>";
			result += "<br/><br/>DEN OBH: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY IANNA FOD ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE OGALE LNK ELJAY LANDR3 KDEN\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL HYS J24 OATHE CLASH4 KDEN\" readonly>";
			result += "<br/>0W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE OBH BRWRY LAWGR3 KDEN\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/>1W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY JORDY ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/>2N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP FSD ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J110 GCK KIISS CLASH4 KDEN\" readonly>";
			result += "<br/>3N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FSD ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/>3W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HYS OATHE CLASH4 KDEN\" readonly>";
			result += "<br/>4N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP FSD ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/>4S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL FAM J98 SGF ICT J28 GCK KIISS CLASH4 KDEN\" readonly>";
			result += "<br/>4W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ HYS OATHE CLASH4 KDEN\" readonly>";
			result += "<br/>5N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH FSD ONL PORDR AALLE3 KDEN\" readonly>";
			result += "<br/>NR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD IOW DSM OBH ELJAY LANDR3 KDEN\" readonly>";
			break;
		case "DFW": // Updated 02-14-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI PER IFI HOFFF JOVEM6 KDFW\" readonly>";
			result += "<br/>SE Arrival: <input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI ENL J71 MEM SQS MLU YUYUN BEREE3 KDFW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD RBS STL J8 SGF RZC FSM FINGR9 KDFW\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL RZC FSM RRNET SEEVR4 KDFW\" readonly>";
			result += "<br/>0W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM J87 TUL KLAWW VKTRY2 KDFW\" readonly>";
			result += "<br/>1W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI TUL HITUG SEEVR4 KDFW\" readonly>";
			result += "<br/>2S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL FAM J137 LIT FEWWW SEEVR4 KDFW\" readonly>";
			result += "<br/>2W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT HOFFF VKTRY2 KDFW\" readonly>";
			result += "<br/>3W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
			result += "<br/>4W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT IFI HOFFF VKTRY2 KDFW\" readonly>";
			result += "<br/>5S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J131 LIT FEWWW SEEVR4 KDFW\" readonly>";
			result += "<br/>6W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT HOFFF VKTRY2 KDFW\" readonly>";
			result += "<br/>7W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
			result += "<br/>8W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE OVR J21 JUDGE ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
			result += "<br/>W1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI TUL HITUG BRDJE5 KDFW\" readonly>";
			result += "<br/>W2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT HOFFF JOVEM6 KDFW\" readonly>";
			result += "<br/>W3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT IRW IBAKE JOVEM6 KDFW\" readonly>";
			result += "<br/>W3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
			result += "<br/>W4 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT IFI HOFFF VKTRY2 KDFW\" readonly>";
			result += "<br/>W6 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT HOFFF VKTRY2 KDFW\" readonly>";
			result += "<br/>W7 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT IRW IBAKE VKTRY2 KDFW\" readonly>";
			break;
		case "DSM": // Updated 02-14-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD MYKIE MONNY JORDY KDSM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD IOW J10 DSM KDSM\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE MSN KDSM\" readonly>";
			result += "<br/>1W: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE KDSM\" readonly>";
			result += "<br/>NR (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD IOW J10 DSM KDSM\" readonly>";
			break;
		case "EGE": // Updated 02-14-2025
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
		case "EWR":
			result += "<br/><input style=\"width:75%\"; value=\"KORD DUFEE ELX HAAKK DOXXY KEEHO J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ROD J152 HAR BWZ KEWR\" readonly>";
			result += "<br/>Playbook RUBKI EAST 2: <input style=\"width:75%\"; value=\"KORD TAAYZ PECOK DAYYY RUBKI SIKBO TULEG HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>Playbook MACER 1: <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG RKA HNK FLOSI4 KEWR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD DUFEE ELX SVM J70 JHW HNK SHAFF7 KEWR\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1E (Coord Req): <input style=\"width:75%\"; value=\"KORD MOBLE ADIME NELLS KEEHO J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>1N (Coord Req): <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE Q935 HANKK KODEY HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>2N (Coord Req): <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG ROC KODEY HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>2S (Coord Req): <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SITTR Q34 GVE PHLBO4 KEWR\" readonly>";
			result += "<br/>5S (Coord Req): <input style=\"width:75%\"; value=\"KORD CMSKY CARYN CYBIL PXV J73 BNA BURGG Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>C0 (Coord Req): <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO TULEG HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>C1 (Ok to File): <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP TULEG HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>C2 (Coord Req): <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP KAPUX TULEG HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>C3 (Coord Req): <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY HANAA FLOSI4 KEWR\" readonly>";
			result += "<br/>C4 (Ok to File): <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK KODEY HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>C5 (Coord Req): <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI KENLU TULEG HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>C6 (Coord Req): <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO OLABA SSENA BUGSY HANAA FLOSI4 KEWR\" readonly>";
			result += "<br/>M2 (Coord Req): <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO TULEG RKA HNK FLOSI4 EWR\" readonly>";
			result += "<br/>M3 (Coord Req): <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO AHPAH HANKK KODEY HNK FLOSI4 KEWR\" readonly>";
			result += "<br/>MS (Coord Req): <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>";
			break;
		case "FCA": // Updated 02-14-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD MYKIE MONNY IANNA FOD FSD J16 DPR J204 MLS LWT GTF KGPI\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY JORDY ONL J151 BIL J13 GTF KGPI\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 ABR J90 MLS LWT GTF KGPI\" readonly>";
			result += "<br/>North via DLH: <input style=\"width:75%\"; value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH J140 FAR J36 GTF KGPI\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "FLL": // Updated 02-14-2025
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
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP BIS SAYOR GTF MLP HILIE3 KGEG\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY JORDY ONL DDY DLN WEDAK MLP HILIE3 KGEG\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
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
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ KGRB\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ KGRB\" readonly>";
			result += "<br/>1E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EBAKE WISMO GETCH KGRB\" readonly>";
			break;
		case "GRR": // Updated 02-14-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EBAKE WISMO BRONZ KGRR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TOdDO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0E (Ok to File): <input style=\"width:75%\"; value=\"KORD EBAKE WISMO BRONZ KGRR\" readonly>";
			result += "<br/>1N (Coord Req): <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ SQUIB KGRR\" readonly>";
			result += "<br/>2N (Coord Req): <input style=\"width:75%\"; value=\"KORD PMPKN NEATO DLLAN RONIC BAE KOHLL FREAK VIO KGRR\" readonly>";
			break;

// ORD-GSO skipped
// ORD-GSP skipped

		case "IAH": // Updated 03-18-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI FAM J137 LIT J180 SWB ZEEKK2 KIAH\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM J87 CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>East: <input style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL SQS MHZ AEX GESNR1 KIAH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI FAM J137 LIT J180 SWB KIAH\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-18-2025
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL LIT J180 SWB ZEEKK2 KIAH\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL FSM URH CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ BUM J87 CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>2S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI FAM J137 LIT J180 SWB ZEEKK2 KIAH\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT IFI ADM CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>3S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL SQS MHZ AEX DOOBI2 KIAH\" readonly>";
			result += "<br/>3W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE ICT IFI ADM CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG FSM URH CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>4W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF LIT J180 SWB ZEEKK2 KIAH\" readonly>";
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV J131 LIT J180 SWB ZEEKK2 KIAH\" readonly>";
			result += "<br/>5W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI ICT IRW CVE DRLLR5 KIAH\" readonly>";
			result += "<br/>W0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J25 TUL J87 CVE DRLLR5 KIAH\" readonly>";
			break;

// ORD-ICT skipped

		case "IND": // Updated 02-14-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL230):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY JAKKS JAKKS2 KIND\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EON V24 JAKKS VHP KIND\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR JAKKS2 KIND\" readonly>";
			result += "<br/>1E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME SEWTO SJAAY SNKPT2 KIND\" readonly>";
			result += "<br/>5S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/>6S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL TERGE SMUKE3 KIND\" readonly>";
			result += "<br/>NR (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EON V24 JAKKS VHP KIND\" readonly>";
			break;
		case "JAX": // Updated 02-15-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 THRSR DUCHY OHDEA1 KJAX\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KORD RAYNR BRTMN TAAYZ PETTY VIO ANEWA APE SPAYD SPA ESENT LUNNI1 KJAX\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KORD CMSKY CARYN CYBIL PXV VUZ SZW CAPPS MARQO2 KJAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE SWAPP VXV ODF MCN AMG KJAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF Q116 VLKNN MGMRY CAPPS MARQO2 KJAX\" readonly>";
			result += "<br/>2E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE J83 SPA ESENT LUNNI1 KJAX\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q79 THRSR NOKIE DUCHY OHDEA1 KJAX\" readonly>";
			result += "<br/>5S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR NOKIE DUCHY OHDEA1 KJAX\" readonly>";
			result += "<br/>6S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PLESS HITMN THRSR NOKIE DUCHY OHDEA1 KJAX\" readonly>";
			break;
		case "JFK": // Updated 04-19-2025 // Mandatory Routes checked
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC JHW J70 LVZ LENDY8 KJFK\" readonly>"; // CDR 0E
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK DAYYY RUBKI SIKBO AHPAH HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>"; // CDR C4
			result += "<br/><br/>CAN NOTAP EAST 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ PECOK NOTAP RADEN BUGSY ALB IGN IGN1 KJFK\" readonly>";
			result += "<br/>MACER 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
			result += "<br/>0E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DUFEE ELX HAAKK DOXXY SOSIC JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME NELLS JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE Q935 HANKK Q140 YODAA IGN IGN1 KJFK\" readonly>";
			result += "<br/>2E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EBAKE WISMO POSTS PADDE SVM DAFLU J70 BEWEL GEE HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ SQUIB HAUCK HRRSH HOCKE SIKBO AHPAH YODAA IGN IGN1 KJFK\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q108 SIE CAMRN4 KJFK\" readonly>";
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
		case "LAS": // Updated 04-08-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-08-2025
			result += "<br/><br/><input style=\"width:75%\"; value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 PUB J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KORD MYKIE ILOBE MCW POEMS DAKPE DPR J107 MLF STEWW CHOWW3 KLAS\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI ARG IRW J74 CNX ZUN PGS ISHEE2 KLAS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL J110 GCK J28 HBU J146 DVC PGA BLAID2 KLAS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-08-2025
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
		case "MCI": // Updated 01-10-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PEKUE PIGGG QUANE CARET BULET RUDDH3 KMCI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD JOT J26 IRK BQS8 KMCI\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN SPI EUING RUDDH3 KMCI\" readonly>";
			result += "<br/>1W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET BULET RUDDH3 KMCI\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL EUING RUDDH3 KMCI\" readonly>";
			result += "<br/>2W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE OVR ASIIX JSONN4 KMCI\" readonly>";
			result += "<br/>AS (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RBS SPI EUING RUDDH3 KMCI\" readonly>";
			break;
		case "MCO": // Updated 04-06-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM KI45S BZM CAE WURFL Q83 ROYCO Q85 LPERD GTOUT1 KMCO\" readonly>";
			// TODO West
			result += "<br/><br/>East via APE <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>"; // CDR 2E
			result += "<br/>West via SGF <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF Q116 VLKNN MGMRY ACORI BULZI NICKI PLYER BAYNE PRICY4 KMCO\" readonly>"; // CDR 1W
			result += "<br/><br/>OH VALLEY TO FL 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD EARND ELANR EMMLY ERECO IIU VXV LGC MCN OTK LEESE3 KMCO\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-06-2025
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DUMGE SCOTO SWAPP Q79 THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF Q116 VLKNN MGMRY ACORI BULZI NICKI PLYER BAYNE PRICY4 KMCO\" readonly>";
			result += "<br/>2E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE VXV THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU Q79 THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J41 SGF Q116 VLKNN MGMRY ACORI BULZI NICKI PLYER BAYNE PRICY4 KMCO\" readonly>";
			result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PLESS Q19 HITMN THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/>SB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			break;
		case "MSP": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL290):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC KAMMA KKILR3 KMSP\" readonly>"; // CDR 0N
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KORD MYKIE MONNY MNOSO BLUEM4 KMSP\" readonly>"; // CDR 1W
			result += "<br/><br/>MSP SOUTH: <span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE FSD SSWAN TORGY3 KMSP\" readonly>";
			result += "<br/>MSP SE: <span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE GRB DLH GGULL BAINY3 KMSP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD BAE EAU9 KMSP\"; readonly>"; // CDR NN
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
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
		case "OMA": // Updated 01-04-2025
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
		case "PHX":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PEKUE PIPPN ELYNA BACNN J18 GCK J96 CIM ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE OGALE LNK J60 HCT J128 HBU J10 RSK J161 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD OLINN OREOS OBENE OGALE LNK LAA J102 GUP BUNTR3 KPHX\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>1W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA STJ J18 FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>2N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP J114 ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL BUM ICT TOTOE FTI BUKKO ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>2W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 PUB ALS GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>3N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH FAR DPR RAP J17 FQF J10 RSK GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>4S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL FAM SGF J98 IRW J78 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>5N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH FAR DPR RAP J17 FQF J10 RSK GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>5S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG IRW J78 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>5W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J146 GLD PUB ALS J102 GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>6W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MYKIE MONNY JORDY ONL PUB ALS GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>K1 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL IFI PNH J78 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>LP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK HLC ALS J102 GUP EAGUL6 KPHX\" readonly>";
			result += "<br/>W0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 RSK FLG DUTEY MAIER BRUSR1 KPHX\" readonly>";
			break;
		case "SAN": // Updated 02-20-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SLN J96 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/><br/>North: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT OBH LBF J10 FQF J128 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>"; // CDR 4W
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL IFI PNH J6 DRK J78 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/>South via INK: <input style=\"width:75%\"; value=\"KORD BACEN BLOKR BEKKI ENL FAM J78 IRW GTH INK EWM J4 SSO GBN J18 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD NOONY NIGHT NITWT OBH LBF J10 FQF J80 DBL J60 BCE BLD TNP BARET5 KSAN\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>2N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J70 GEP FSD J114 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>2S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL BUM ICT LBL FTI J18 HOGGZ LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA STJ J18 HOGGZ LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>3N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J89 DLH SNY J114 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>3W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J26 ICT LBL FTI ZUN J6 DRK J78 PKE LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>4N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB GEP FSD J114 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI FAM J78 PNH J78 PKE LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>4W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT OBH LBF J10 FQF J128 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>5N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD RAYNR BRTMN TAAYZ GRB DLH SNY J114 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>5W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK J60 DVV ZAKRY Q88 LAKRR Q73 LVELL LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>K1<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL IFI PNH J6 DRK J78 PKE LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>LP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK HLC J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>"; // Verified with ATCSCC on 02-20-2025
			break;
		case "SAT":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL FSM WINDU QERVO1 KSAT\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL J8 SGF J98 IRW SPS ABI SJT TRVLL DNKIN1 KSAT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD RBS STL J8 SGF RZC FUZ J25 ACT MARCS1 KSAT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>";
			result += "<br/>2S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL BUM ICT LBL FTI J18 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>3W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI J26 ICT LBL FTI ZUN J6 DRK J78 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/>4W (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD NOONY NIGHT NITWT OBH LBF J10 FQF J128 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>";
			result += "<br/>LP (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LNK HLC J64 TBC PLNDL Q86 TTRUE LUCKI1 KSAN\" readonly>";
			break;
		case "SFO": // Updated 04-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD NOONY NIGHT NITWT OBH KD63U DTA J148 OAL INYOE DYAMD5 KSFO\"; readonly>"; // Verified 03-01-2025
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY JORDY ONL J148 DTA RUMPS OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>South via GCK: <input style=\"width:75%\"; value=\"KORD PEKUE PIPPN ELYNA STJ J18 GCK J28 MLF RUMPS OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>South via ICT: <input style=\"width:75%\"; value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ ICT ALS DRO MLF NILLS OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PLL ALO FOD ONL J148 OAL MOD9 KSFO\"; readonly>"; // CDR NR
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-01-2025
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
		case "STL": // Updated 02-14-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL280):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD BACEN BLOKR RBS AARCH2 KSTL\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE MZV SKOVE LORLE3 KSTL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD MZV J87 IRK RIVRS6 KSTL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR RBS AARCH2 KSTL\" readonly>";
			result += "<br/>1W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE MZV SKOVE LORLE3 KSTL\" readonly>";
			result += "<br/>2W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD OLINN OREOS OBENE OGALE LMN IRK LORLE3 KSTL\" readonly>";
			result += "<br/>4S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR RBS SPI SKOVE LORLE3 KSTL\" readonly>";
			break;
		case "TPA": // Updated 04-08-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN ACORI MAATY5 KTPA\" readonly>"; // CDR 0S
			result += "<br/><br/>OHIO VALLEY TO FLORIDA 1 <span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DONVE BWG HITMN ACORI MAATY5 KTPA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODdO			
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-08-2025
			result += "<br/>0S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV HITMN ACORI MAATY5 KTPA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ETAME EMEGE FLM J43 VXV THRSR HONID MAATY5 KTPA\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ SGF MERDN DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/>2E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD MOBLE ADIME OTENS ANEWA APE J83 SPA BAAMF DADES1 KTPA\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD EARND ELANR EMMLY ERECO IIU J99 VXV THRSR HONID MAATY5 KTPA\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIGGG QUANE CARET ROEZZ MCI SGF MERDN DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/>6S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL PLESS Q19 HITMN ACORI MAATY5 KTPA\" readonly>";
			result += "<br/>8S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J151 VUZ ACORI MAATY5 KTPA\" readonly>";
			result += "<br/>SB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD DENNT DARCY DREGS DONVE BWG HITMN ACORI MAATY5 KTPA\" readonly>";
			break;
		case "TUS": // Updated 02-20-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA STJ J18 FTI J104 SSO ZONNA2 KTUS\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KORD ACITO ADELL ARLYN STL J8 SGF RZC FUZ J66 EWM J4 SSO ZONNA2 KTUS\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KORD PEKUE PIPPN ROTTN PWE HLC J64 PUB ALS J13 ABQ J57 ONM J104 SSO ZONNA2 KTUS\" readonly>";
			result += "<br/>North via ONL: <input style=\"width:75%\"; value=\"KORD MYKIE MONNY IANNA FOD ONL J114 YANKI PUB J104 SSO ZONNA2 KTUS\" readonly>";
			result += "<br/>NW Arrival: <input style=\"width:75%\"; value=\"KORD NOONY NIGHT NITWT OBH LBF J10 HBU INW J44 PXR DINGO6 KTUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KORD PEKUE PIPPN ROTTN PWE GCK J18 PXR J92 TFD DINGO6 KTUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PMPKN NEATO DLLAN RONIC BAE J34 RWF FSD J114 SNY FQF J13 ABQ ONM J104 SSO ZONNA2 KTUS\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD PEKUE PIPPN ELYNA STJ J18 FTI J104 SSO ZONNA2 KTUS\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD ACITO ADELL ARLYN STL J8 SGF J98 IRW J74 CNX ONM J104 SSO ZONNA2 KTUS\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>4S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD BACEN BLOKR BEKKI ENL FAM J78 TCC ACH ONM J104 SSO ZONNA2 KTUS\" readonly>"; // Verified with ATCSCC on 02-20-2025
			result += "<br/>5S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KORD CMSKY CARYN CYBIL PXV ARG IRW TCC ACH ONM J104 SSO ZONNA2 KTUS\" readonly>"; // Verified with ATCSCC on 02-20-2025
			break;
	}
	return result;
}
