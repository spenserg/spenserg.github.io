dfw_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
	switch(arvl) {
		case "ABI": // Updated 03-25-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX KABI\" readonly>"; // CDR 0P
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI KABI\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX KABI\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH KABI\" readonly>";
			result += "<br/>1S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT KABI\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF SJT KABI\" readonly>";
			break;
			break;
		case "ABQ": // Updated 03-25-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO RECKN COLTR4 KABQ\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN FANGZ LZZRD4 KABQ\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS EZEEE TAMEY SNDIA4 KABQ\" readonly>";			
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO MIERA2 KABQ\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO MIERA2 KABQ\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 TCC MIERA2 KABQ\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 CME MIERA2 KABQ\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 CME MIERA2 KABQ\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME MIERA2 KABQ\" readonly>";
			break;
		case "ACT": // Updated 03-25-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL120):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 NELYN KACT\" readonly>";
			// result += "<br/><br/><b>CDRS</b>" // No CDRS listed as of 03-25-2025
			break;
		case "AGS": // Updated 03-25-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR AHN IRQ KAGS\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW DARTZ9 TORNN LFK J50 MCB GARTS MVC MGM THRSR AHN PLYRR CLUBB CADIE KAGS\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J66 MEM MSL RMG THRSR AHN PLYRR CLUBB CADIE KAGS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR AHN IRQ KAGS\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VUZ IRQ KAGS\" readonly>";
			result += "<br/>1S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI CATLN MGMRY IRQ KAGS\" readonly>";
			break;
		case "ALB": // Updated 03-25-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-25-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV KLYNE Q29 JHW Q82 LOXXE KALB\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV Q22 LLUND Q133 GANDE KALB\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J98 SGF J8 STL J24 VHP DUTSH Q29 JHW Q82 LOXXE KALB\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV ROD JHW RKA KALB\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>MH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI FAK AML Q221 MICAH RKA KALB\" readonly>";
			break;
		case "AMA": // Updated 03-25-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL320):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH KAMA\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH KAMA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN KAMA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 PNH KAMA\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH KAMA\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH KAMA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT ABI J17 PNH KAMA\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF BGS PNH KAMA\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST LBB PNH KAMA\" readonly>";
			break;
		case "ATL": // Updated 03-25-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN ORRKK HOBTT2 KATL\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA AEX GARTS SHYRE HOBTT2 KATL\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J14 YAALL VLKNN DRSDN GNDLF2 KATL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MHZ MEI VUZ KATL\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN ORRKK HOBTT2 KATL\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH Q24 PAYTN SHYRE HOBTT2 KATL\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM HUTCC KNSAW RUSSA RUTTH CHPPR1 KATL\" readonly>";
			result += "<br/>ME<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>";
			result += "<br/>NM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB GARTS PAYTN SHYRE HOBTT2 KATL\" readonly>";
			break;
		case "AUS": // Updated 03-25-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL230):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JASPA7 WINDU SEWZY6 KAUS\" readonly>"; // CDR 0P
			result += "<br/><br/>Below FL230: <input style=\"width:75%\" value=\"KDFW JASPA7 WINDU BLEWE5 KAUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 WINDU BLEWE5 KAUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW JASPA7 WINDU SEWZY6 KAUS\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB DAS LUKKN WLEEE7 KAUS\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT JCT DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN WUNIL SJT JCT DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/>3W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX DILLO LAIKS4 KAUS\" readonly>";
			break;
		case "AVL": // Updated 03-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM VXV SOT KAVL\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN RMG ODF KAVL\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN THRSR HRTWL KAVL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK J52 SQS VUZ RMG ODF KAVL\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-27-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM VXV SOT KAVL\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA VXV SOT KAVL\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN THRSR HRTWL KAVL\" readonly>";
			break;
		case "BDL": // Updated 03-25-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 RBV Q419 DPK DPK3 KBDL\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC KM36G KENBE VHP DJB JHW VIEEW Q82 MEMMS WILET STELA1 KBDL\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR KELLN Q56 KIWII COUPN JAMIE CONFR Q133 JFK DPK DPK3 KBDL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA SWAPP Q34 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>MH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI FAK AML Q227 KONJE HNK STELA1 KBDL\" readonly>";
			result += "<br/>SP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 JHW Q82 MEMMS WILET STELA1 KBDL\" readonly>";
			break;
		case "BFL": // Updated 03-25-2025 
			// TODO Arrivals before 2300L // Arrivals after 2300L
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref as of 03-25-2025
			result += "<br/><br/>Arr Before 2300L: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE CNX ZUN J6 PMD FASTO2 KBFL\" readonly>";
			result += "<br/>Arr After 2300L: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE CNX ZUN J6 HELDE LHS FASTO2 KBFL\" readonly>";
			result += "<br/><br/>COWBOY WEST 1: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST ELP SSO HRRBR J212 DECAS J65 PMD FASTO2 KBFL\" readonly>";
			result += "<br/>COWBOY WEST 2: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST ELP SSO HRRBR J212 DECAS J65 PMD FASTO2 KBFL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			// result += "<br/><br/><b>CDRS</b>"; // No CDRS as of 03-25-2025
			break;
		case "BGR": // Updated 03-25-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref as of 03-25-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV KLYNE Q29 KRAZZ DAVID FRIAR KBGR\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC STL BVT CRL J554 JHW Q29 KRAZZ DAVID FRIAR KBGR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT PXV CVG APE YTOWN JHW Q29 KRAZZ DAVID FRIAR KBGR\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>MH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI FAK AML Q221 BIGEO J49 ALB ENE KBGR\" readonly>";
			break;
		case "BHM": // Updated 03-25-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN KBHM\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE IGB NESTS KBHM\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB MEI IGB NESTS KBHM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SQS VUZ KBHM\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN KBHM\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VUZ KBHM\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN KBHM\" readonly>";
			break;
		case "BIL": // Updated 03-25-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-28-2025
			result += "<br/><br/><input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA PNH PUB DVV DDY CUSGA BGHRN3 KBIL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-28-2025
			break;
		case "BNA": // Updated 03-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM CHSNE2 KBNA\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG LOPPY CHSNE2 KBNA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH MLU MEI VUZ TINCA CHSNE2 KBNA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK MEM GHM GHM6 KBNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-27-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM CHSNE2 KBNA\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG LOPPY CHSNE2 KBNA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI IGB HRTUN CHSNE2 KBNA\" readonly>";
			break;
		case "BOI": // Updated 03-25-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-28-2025
			result += "<br/><br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC J15 TWF BROPH SPUUD4 KBOI\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM J21 ICT J182 GLD J80 FQF J20 OCS PIH REAPS KOURT4 KBOI\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN FAVON FTI MTJ JNC J15 TWF BROPH SPUUD4 KBOI\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-28-2025
			break;
		case "BOS": // Updated 03-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>"; // CDR 1P
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>"; // CDR J3
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 OKM EOS SGF J8 STL J24 VHP ROD BSV EWC SLT J190 ALB T608 REVER KBOS\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-27-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>1P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP BURGG Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>J3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>LT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>MH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI FAK AML Q221 BIGEO J49 HNK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>VS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>WC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB CEW ALLMA TEEEM Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>WM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>WV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			break;
		case "BRO": // Updated 03-28-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 HOARY CRP J25 BRO KBRO\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV PSX CRP KBRO\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW NELYN6 SAT J21 LRD MFE KBRO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 SAT THX KBRO\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-28-2025
			break;
		case "BTR": // Updated 03-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB KBTR\" readonly>"; // CDR 0P
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL7 SWB KBTR\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-27-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB KBTR\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM SQS MHZ KBTR\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH KBTR\" readonly>";
			break;
		case "BTV": // Updated 03-28-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-28-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV KLYNE Q29 JHW LAGGS KBTV\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI IRK J26 JOT J146 GIJ J554 JHW LAGGS KBTV\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK IZAAC Q30 VLKNN THRSR ODF KONGO Q145 HVQ Q145 FOXEE JHW LAGGS KBTV\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV ROD DJB JHW LAGGS KBTV\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-27-2025
			result += "<br/>MH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI FAK AML Q221 BIGEO J49 ALB KBTV\" readonly>";
			break;
		case "BUF": // Updated 03-27-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-28-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD DJB DKK KBUF\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF J8 STL BVT CRL FARGN KBUF\" readonly>";
			result += "<br/>North via JOT: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC SGF BAYLI J181 BDF J26 JOT J60 DJB KBUF\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK SQS BNA DACOS APE YTOWN JHW KBUF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT PXV ROD JHW KBUF\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-27-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD DJB DKK KBUF\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV ROD DJB DKK KBUF\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB HITMN Q139 RINTE DJB DKK KBUF\" readonly>";
			break;
		case "BUR": // Updated 03-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX J74 SJN J231 DRK J6 EED JANNY5 KBUR\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM J4 BXK PHRED THRNE4 KBUR\" readonly>";
			result += "<br/>North via CIM: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM MMB CIM J96 DRK J6 EED JANNY5 KBUR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI J66 EWM J4 BXK J212 DECAS J65 PMD LYNXX8 KBUR\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-27-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX J74 SJN J231 DRK J6 EED JANNY5 KBUR\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J6 EED JANNY5 KBUR\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 TFD J212 PSP V16 PDZ POM VNY KBUR\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J50 TFD J212 PSP V16 PDZ POM VNY KBUR\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J50 TFD J212 PSP V16 PDZ POM VNY KBUR\" readonly>";
			break;
		case "BWI": // Updated 03-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR CJAAE RAVNN7 KBWI\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD APE KEMAN ANTHM54 KBWI\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM GQO BURGG Q22 BEARI THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL9 TXK MEM BNA BKW J213 KERRE CSN RIPKN2 KBWI\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-30-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR CJAAE RAVNN7 KBWI\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 SITTR CJAAE RAVNN7 KBWI\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA SWAPP Q34 SITTR CJAAE RAVNN7 KBWI\" readonly>";
			result += "<br/>J3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD APE KEMAN ANTHM5 KBWI\" readonly>";
			result += "<br/>LT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD APE KEMAN ANTHM5 KBWI\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 OGRAE GOOOB THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 CREEP AIR KEMAN ANTHM5 KBWI\" readonly>";
			result += "<br/>VS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q56 KELLN Q58 PEETT THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/>WB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR CJAAE RAVNN7 KBWI\" readonly>";
			result += "<br/>WC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB CEW ALLMA TEEEM Q99 OGRAE GOOOB THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/>WM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO KBLER KELLN Q58 PEETT THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/>WV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR KBLER KELLN Q58 PEETT THHMP RAVNN7 KBWI\" readonly>";
			break;
		case "BZN": // Updated 03-30-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref as of 03-30-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KDFW HUDAD2 HUDAD PNH J17 PUB CHE J163 OCS BPI TOCUD LOSST1 KBZN\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW IFI HYS MCK RAP J151 BIL SUBKY1 KBZN\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS DBL OCS BPI TOCUD LOSST1 KBZN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI J65 CME J15 TANER MTJ OCS LVM KBZN\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-30-2025
			break;
		case "CAE": // Updated 03-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR IRQ KCAE\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB TOI MCN KCAE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 SOLDO ELD SQS VUZ IRQ KCAE\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-30-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR IRQ KCAE\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VLKNN THRSR IRQ KCAE\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN THRSR WANSA KCAE\" readonly>";
			break;
		case "CAK": // Updated 01-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV CVG APE HUUVR KCAK\" readonly>";
			break;
		case "CHS": // Updated 03-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK MHZ MERDN Q184 ARNNY FRDDO NOKIE DEQUE BAGGY3 KCHS\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC MEM J66 RMG IRQ OSPRI7 KCHS\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI TOI PZD DEQUE BAGGY3 KCHS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-30-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE DEQUE BAGGY3 KCHS\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEMFS Q116 VLKNN IRQ OSPRI7 KCHS\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN MGMRY NOKIE DEQUE BAGGY3 KCHS\" readonly>";
			break;
		case "CID": // Updated 03-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW GRABE8 OKM KCID\" readonly>"; // CDR 0P
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J101 STL IOW KCID\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD CDS SLN DSM KCID\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 OKM KCID\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-30-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW GRABE8 OKM KCID\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT KCID\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 IRK KCID\" readonly>";
			break;
		case "CLE": // Updated 03-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV DRUGA ROKNN3 KCLE\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC SGF J8 STL J110 VHP TALKN ROKNN3 KCLE\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS HITMN Q139 IIU CVG DRUGA ROKNN3 KCLE\" readonly>";
			result += "<br/>NW Arrival: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF BAYLI PIA JOT J146 GIJ J554 BENJO BRWNZ4 KCLE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV ROD KCLE\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-30-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV DRUGA ROKNN3 KCLE\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV DRUGA ROKNN3 KCLE\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM PXV DRUGA ROKNN3 KCLE\" readonly>";
			break;
		case "CLT": // Updated 03-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI LGC GRD CRDET BANKR BANKR5 KCLT\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC WELKI GENTE BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/><br/>CLT NO FILPZ PARQR<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB J50 CEW ALLMA ISUZO CHECR STOCR4 KCLT\" readonly>";
			result += "<br/>CLT NO JONZE<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH LSU MERDN JAMMR THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SQS VUZ GQO SOT LIINN3 KCLT\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-30-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH LSU MERDN JAMMR THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/>FP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB J50 CEW ALLMA ISUZO CHECR STOCR4 KCLT\" readonly>";
			result += "<br/>NJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM BNA TAZZA FILPZ4 KCLT\" readonly>";
			break;
		case "CMH": // Updated 04-08-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV JUDDI JAKTZ2 KCMH\" readonly>";
			result += "<br/>NRP: <input style=\"width:75%\" value=\"KDFW BSKAT LIT KM36K KI48O GETTA JAKTZ2 KCMH\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP JADUB DUBLN1 KCMH\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS BNA GETTA JAKTZ2 KCMH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT MEM BWG HNN TASKE BREMN KCMH\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 04-08-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV GETTA JAKTZ2 KCMH\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV GETTA JAKTZ2 KCMH\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM J29 PXV GETTA JAKTZ2 KCMH\" readonly>";
			break;
		case "CNW": // Updated 04-08-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 ACT KCNW\" readonly>";
			break;
		case "COS": // Updated 04-08-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route listed as of 04-08-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL LAA OZZZY5 KCOS\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 TBE DBRY5 KCOS\" readonly>";
			result += "<br/>West via ABQ: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN CME ABQ J13 ALS DBRY5 KCOS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 PNH J17 TBE DBRY5 KCOS\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 04-08-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 TBE DBRY5 KCOS\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL LAA PUB FSHER DBRY5 KCOS\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY LLO ABI J17 TBE DBRY5 KCOS\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF BGS PNH J17 TBE DBRY5 KCOS\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME CNX ALS DBRY5 KCOS\" readonly>";
			break;
		case "COU":  // Updated 04-08-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>";  // No FAA pref route as of 04-08-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF KCOU\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J180 FTZ KCOU\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J87 BUM KCOU\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J98 SGF KCOU\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRS as of 04-08-2025
			break;

// TODO CPR

		case "CRP": // Updated 04-08-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 SAT J25 CRP KCRP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 SAT J25 CRP KCRP\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 04-08-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT J25 CRP KCRP\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB IAH J29 CRP KCRP\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT JCT SAT J25 CRP KCRP\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN WUNIL SJT JCT SAT J25 CRP KCRP\" readonly>";
			break;
		case "CVG": // Updated 03-25-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PENBE TERGE SARGO4 KCVG\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J78 FAM TERGE SARGO4 KCVG\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS HITMN Q139 IIU KCVG\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV IIU FLM KCVG\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PENBE TERGE SARGO4 KCVG\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG TERGE SARGO4 KCVG\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM J29 TINGS TERGE SARGO4 KCVG\" readonly>";
			break;
		case "CYS": // Updated 04-08-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL KCYS\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH LAA AKO KCYS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW LBL KCYS\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRS as of 04-08-2025
			break;
		case "DAB": // Updated 04-08-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB J50 CEW J2 DEFUN CABLO GNV KDAB\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI J20 MGM YANTI KYLEG TTHOR3 KDAB\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN CABLO GNV KDAB\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC J20 MGM SZW OMN KDAB\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRS as of 04-08-2025
			break;
		case "DAY": // Updated 04-09-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV SHB RID KDAY\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS HITMN Q139 IIU KDAY\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL J24 VHP KDAY\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX4 TUL J98 SGF J8 STL J24 VHP KDAY\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 04-09-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV SHB RID KDAY\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV SHB RID KDAY\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM J29 PXV SHB RID KDAY\" readonly>";
			break;
		case "DCA": // Updated 04-09-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR TRUPS5 KDCA\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP APE J30 LUISE FRDMM6 KDCA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/><br/>CEW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB CEW ALLMA TEEEM Q109 PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK J131 PXV J78 HVQ ESL DRUZZ AML KDCA\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 04-09-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA SWAPP Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>J3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD APE J30 LUISE FRDMM6 KDCA\" readonly>";
			result += "<br/>LT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD APE J30 LUISE FRDMM6 KDCA\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 CREEP OTMAN J30 LUISE FRDMM6 KDCA\" readonly>";
			result += "<br/>VS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>WB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>WC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB CEW ALLMA TEEEM Q109 PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>WM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>WV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			break;
		case "DEN": // Updated 04-09-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/><b style=\"color:orange\">CDR 0P is ..ROLLS LBL HALEN...<\/b>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ZIGEE NIIXX3 KDEN\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN TXO TCC ZIGEE NIIXX3 KDEN\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST CNM CME CNX ABQ GNDLA TBARR3 KDEN\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST CNM CME CNX ABQ GNDLA TBARR3 KDEN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 ROLLS LBL LAA QUAIL1 KDEN\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 ROLLS GCK DANDD1 KDEN\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 04-09-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT BGS PNH ZIGEE NIIXX3 KDEN\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ZIGEE NIIXX3 KDEN\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF BGS PNH ZIGEE NIIXX3 KDEN\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME CNX GNDLA TBARR3 KDEN\" readonly>";
			result += "<br/>GC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX GNDLA TBARR3 KDEN\" readonly>";
			break;

// TODO DLH

		case "DRO": // Updated 04-09-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD YACUL DRO KDRO\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM CRUSR EZEEE CIM KDRO\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN CME CNX KA33U DRO KDRO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WORTH9 ABI LBB IMMAS ESPAN KDRO\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRS as of 04-09-2025
			break;
		case "DSM": // Updated 04-09-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 DSM KDSM\" readonly>"; // CDR 0P
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM J21 ICT PWE KDSM\" readonly>";
			result += "<br/>East: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC SGF HLV IRK KDSM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J25 DSM KDSM\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 04-09-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 DSM KDSM\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT SGF MCI J25 DSM KDSM\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT PWE KDSM\" readonly>";
			break;
		case "DTW": // Updated 04-09-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV WWODD HANBL3 KDTW\" readonly>"; // CDR 0P
			result += "<br/>NRP: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC FAM VHP WWODD HANBL3 KDTW\" readonly>";
			result += "<br/><br/>South via MEM: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM J29 PXV WWODD HANBL3 KDTW\" readonly>";
			result += "<br/>North via DSM: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 DSM DBQ BAE PORZL RKCTY2 KDTW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV VHP FWA KDTW\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J87 IRK IOW DBQ BAE KDTW\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 04-09-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV WWODD HANBL3 KDTW\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV WWODD HANBL3 KDTW\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM J29 PXV WWODD HANBL3 KDTW\" readonly>";
			result += "<br/>MZ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 TUL J87 IRK IOW DBQ BAE PORZL RKCTY2 KDTW\" readonly>";
			break;
		case "ECP": // Updated 04-09-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-09-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB J50 CEW J2 DEFUN CUGAR KECP\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE SQS MEI DEFUN KECP\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRS as of 04-09-2025
			break;
		case "EGE": // Updated 04-09-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE SELLS J154 AVVVS HUGGS CULCH KEGE\" readonly>";
			result += "<br/><br/>West (Max FL280 at AVVVS): <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH LAA HGO AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA ICT HYS GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			// todo ski routes
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI J17 FQF AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 04-09-2025
			result += "<br/>AB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO ABQ KA36S BUGGG EKR RLG KEGE\" readonly>";
			result += "<br/>KC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/>KP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER HYS GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			break;
		case "ELP": // Updated 01-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK LIFFT SAMMR3 KELP\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J26 CME SAMMR3 KELP\" readonly>";
			result += "<br/>NW Arrival: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J58 FTI J104 ONM J57 TCS J13 RUTER J86 ELP KELP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI J50 ELP KELP\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK LIFFT SAMMR3 KELP\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J26 CME SAMMR3 KELP\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP KELP\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP KELP\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP KELP\" readonly>";
			break;
		case "EUG": // Updated 01-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TCC J76 FTI J58 MLF ELY SLOWN LKV KEUG\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK GLL OCS BOI DSD KEUG\" readonly>";
			break;
		case "EVV": // Updated 01-29-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV KEVV\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC FAM PXV KEVV\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS BNA OWB KEVV\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV KEVV\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV KEVV\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV KEVV\" readonly>";
			break;
		case "EWR": // Updated 01-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PHLBO4 KEWR\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC FAM VHP ROD DJB DORET J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>Wind Rte: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD J29 CARIN MEMFS Q29 DORET J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/><br/>BNA: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PHLBO4 KEWR\" readonly>";
			result += "<br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>CEW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB J50 CEW ALLMA TEEEM Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>MGM 1: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>PXV: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF J98 FAM J78 PXV ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>VUZ: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK MEM BNA BKW EKN IHD PSB FQM FQM3 KEWR\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP BURGG Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 GVE PHLBO4 KEWR\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>M3 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>RD (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 DORET J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>VS (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>WB (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PHLBO4 KEWR\" readonly>";
			result += "<br/>WC (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB CEW ALLMA TEEEM Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>WM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>WV (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK IZAAC Q30 VLKNN THRSR TWOUP Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			break;
		case "EYW": // Updated 01-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA HRV Q105 BLVNS Y290 FEMID KARTR GIGIH KEYW\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA MCB J50 CEW DEFUN KRAKN1 KEYW\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK MERDN MGMRY ACORI BULZI KRAKN1 KEYW\" readonly>";
			break;
		case "FAR": // Updated 01-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 IRW J21 JUDGE LNK KATES FSD KFAR\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN PNH GCK HLC ONL KFAR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 IRW J21 ICT LNK FSD FAR KFAR\" readonly>";
			break;
		case "FAT": // Updated 01-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE FTI J58 OAL NIKOL FRA CZQ KFAT\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM SSO J50 TFD J169 KOFFA DECAS J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO FTI J58 ILC J198 KROST J148 OAL NIKOL FRA CZQ KFAT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX J74 SJN J231 DRK J6 HEC PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>1N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J6 DRK J6 HEC PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 BLH J65 PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J50 BLH J65 PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J50 BLH J65 PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			break;
		case "FCA": // Updated 01-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE LAA J20 FQF LAR MBW BOY HLN KGPI\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM J21 IRW IFI HLC MCK RAP J151 BIL J13 GTF KGPI\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC J15 TCH J9 DLN KGPI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW J98 MMB LAA J20 FQF LAR MBW BOY HLN KGPI\" readonly>";
			break;
		case "FLL": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA HRV Q105 BLVNS Y290 BACCA VNECK TEEKY3 KFLL\" readonly>";
			result += "<br/><b style=\"color:orange\">FAA pref route includes OCHHO but route above is most common. Keeps flight within ZJX/ZMA<\/b>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA MCB J50 CEW J2 DEFUN TEEKY3 KFLL\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI MGM ACORI TEEKY3 KFLL\" readonly>";
			result += "<br/>E Coast: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN LGC YANTI Q89 PRMUS CUUDA3 KFLL\" readonly>";
			result += "<br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH HRV Q105 BLVNS Y290 BACCA VNECK TEEKY3 KFLL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SWB MCB CEW SZW PIE FORTL KFLL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB HRV Q105 BLVNS Y290 OCHHO VNECK TEEKY3 KFLL\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEMFS DEFUN TEEKY3 KFLL\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH J86 LEV Y290 OCHHO VNECK TEEKY3 KFLL\" readonly>";
			break;
		case "FNT": // Updated 01-29-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC FTZ RBS GIJ KFNT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 OKM RZC FTZ RBS GIJ KFNT\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "FOE": // Updated 01-29-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 TUL KFOE\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW J21 ICT KFOE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW ICT KFOE\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "FSD": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 IRW J21 ICT LNK FSD KFSD\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH HLC OBH KFSD\" readonly>";
			result += "<br/>East: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC MCI OVR KFSD\" readonly>";
			break;
		case "GEG": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE LAA J52 FQF DVV CKW DBS MLP HILIE3 KGEG\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK CYS J13 BIL J136 MLP HILIE3 KGEG\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH CIM ALS J206 HBU J240 MTU TCH J15 BOI J517 KGEG\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH Q130 REANA ELY J523 REO J153 KGEG\" readonly>";
			break;
		case "GGG": // Updated 01-29-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL170):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH GGG KGGG\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW GARL5 GGG KGGG \" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "GJT": // Updated 01-29-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH HBU V484 BATTZ KGJT\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW J98 MMB TOTOE LAA PUB J28 HBU V484 BATTZ KGJT\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO ABQ DVC JNC KGJT\" readonly>";
			result += "<br/><br/>COWBOY WEST 1: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST CNM CME CNX J15 SINSY KGJT\" readonly>";
			result += "<br/>SKI COUNTRY 2: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE FTI DVC JNC KGJT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 PNH HBU V484 BATTZ KGJT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>AA (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO ABQ KA36S DVC JNC KGJT\" readonly>";
			result += "<br/>AB (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO ESPAN DVC JNC KGJT\" readonly>";
			result += "<br/>DV (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK HELPS JNC KGJT\" readonly>";
			result += "<br/>GD (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA ICT GCK HELPS JNC KGJT\" readonly>";
			result += "<br/>KC (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK PUB HBU JNC KGJT\" readonly>";
			result += "<br/>PD (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER GCK HELPS JNC KGJT\" readonly>";
			break;
		case "GPT": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB KGPT\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE OZIGE MEI KGPT\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 LSU KGPT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SWB KGPT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB KGPT\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH KGPT\" readonly>";
			break;
		case "GRK": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL180):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 ACT TENAT KGRK\" readonly>"; // CDR 0P
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 ACT TENAT KGRK\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 ACT TENAT KGRK\" readonly>";
			result += "<br/>1W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX BWD KGRK\" readonly>";
			break;
		case "GRB": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 TUL J87 IRK DBQ DLL KGRB\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM J71 RBS JOT BAE KGRB\" readonly>";
			break;
		case "GRR":
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC SPI PMM KGRR\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT ARG ENL BVT PMM KGRR\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW PER MCI J26 IRK OBK J94 PMM KGRR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/>Non RNAV Dptr: <input style=\"width:75%\" value=\"KDFW TEX5 TUL J98 SGF J8 STL J35 SPI KGRR\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL J101 OBK J94 PMM KGRR\" readonly>";
			result += "<br/>1E (Coord Req): <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J101 OBK J94 PMM KGRR\" readonly>";
			result += "<br/>1W (Coord Req): <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT BUM STL J101 OBK J94 PMM KGRR\" readonly>";
			break;
		case "GSO": // Updated 04-10-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM GQO BURGG TRAKS4 KGSO\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB MGMRY THRSR BURGG TRAKS4 KGSO\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF J98 FAM J78 IIU OTONE TRAKS4 KGSO\" readonly>";
			result += "<br/>SE Arrival: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK IZAAC Q30 VLKNN THRSR IRQ CAE BLOCC2 KGSO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK MEM GQO SPA BROOK4 KGSO\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 04-10-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM VXV GZG BROOK4 KGSO\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA VXV GZG BROOK4 KGSO\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN TWOUP BURGG TRAKS4 KGSO\" readonly>";
			break;
		case "GSP": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS BESTT WORXS2 KGSP\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC FSM ARG J46 VXV DAJPI RCTOR2 KGSP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC J20 MEI VUZ RMG KGSP\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR BESTT WORXS2 KGSP\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA BALNN SPA KGSP\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN MGMRY THRSR BESTT WORXS2 KGSP\" readonly>";
			break;
		case "GUC": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 PUB J28 HBU KGUC\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE LAA PUB J28 HBU KGUC\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA TXO ESPAN DRO HBU KGUC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW J98 MMB LBL LAA PUB J28 HBU KGUC\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>AB (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC CIM DRO HBU KGUC\" readonly>";
			result += "<br/>KC (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK DAAYE KGUC\" readonly>";
			break;
		case "HDN": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK GLD DVV CHE KHDN\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC CIM HBU RIL EKR CHE KHDN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW GCK GLD DVV CHE KHDN\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>AB (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE ESPAN DRO EKR KHDN\" readonly>";
			result += "<br/>KC (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK GLD DVV CHE KHDN\" readonly>";
			result += "<br/>PH (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER HYS BFF LAR KHDN\" readonly>";
			break;
		case "HRL": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 ACT V17 SAT V163 CRP V407 KHRL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ACT HOARY CRP KHRL\" readonly>";
			break;
		case "HSV": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS IRRTH KHSV\" readonly>";
			result += "<br/><br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI VLKNN KHSV\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK J52 SQS IRRTH KHSV\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS IRRTH KHSV\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM IRRTH KHSV\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI IGB IRRTH KHSV\" readonly>";
			break;
		case "IAD":
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR GIBBZ5 KIAD\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD APE AIR J162 MGW GIBBZ5 KIAD\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS BURGG Q60 JAXSN DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/><br/>BNA: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 HITMN JARLO GIBBZ5 KIAD\" readonly>";
			result += "<br/>VUZ: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BURGG Q60 JAXSN DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK LIT MEM BWG HVQ DOCCS3 KIAD\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK SQS VUZ RMG SPA GSO FAK COATT5 KIAD\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL SGF STL J24 VHP J80 AIR J34 ESL KIAD\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR GIBBZ5 KIAD\" readonly>";
			result += "<br/>1N (Coord Req): <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG HITMN Q34 SITTR GIBBZ5 KIAD\" readonly>";
			result += "<br/>1S (Coord Req): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI HITMN Q34 SITTR GIBBZ5 KIAD\" readonly>";
			result += "<br/>J3 (Ok to File): <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD APE AIR J162 MGW GIBBZ5 KIAD\" readonly>";
			result += "<br/>LT (Ok to File): <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD APE AIR J162 MGW GIBBZ5 KIAD\" readonly>";
			result += "<br/>M3 (Coord Req): <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 OGRAE BZNGA DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/>RD (Ok to File): <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 CREEP J80 AIR J162 MGW GIBBZ5 KIAD\" readonly>";
			result += "<br/>VS (Coord Req): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q22 BURGG Q60 JAXSN DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/>WB (Coord Req): <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 HITMN JARLO GIBBZ5 KIAD\" readonly>";
			result += "<br/>WC (Coord Req): <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB CEW ALLMA TEEEM Q99 OGRAE BZNGA DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/>WV (Coord Req): <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BURGG Q60 JAXSN DORRN CAVLR6 KIAD\" readonly>";
			break;
		case "IAH": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DARTZ9 TORNN GUSHR3 KIAH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 TORNN RIICE1 KIAH\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TORNN GUSHR3 KIAH\" readonly>";
			result += "<br/>1E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB ZEEKK2 KIAH\" readonly>";
			result += "<br/>1W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT JCT SAT HTOWN3 KIAH\" readonly>";
			result += "<br/>2E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH BDDAY PLANB ZEEKK2 KIAH\" readonly>";
			result += "<br/>2W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN WUNIL SJT JCT SAT HTOWN3 KIAH\" readonly>";
			result += "<br/>3W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX LLO SAT HTOWN3 KIAH\" readonly>";
			break;
		case "ICT":
			result += "<br/>Bleco: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW HUSKA KICT\" readonly>";
			result += "<br/>Lowgn: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM PER JETBU KICT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK KICT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER KICT\" readonly>";
			result += "<br/>1E (Coord Req): <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT SGF KICT\" readonly>";
			result += "<br/>1W (Coord Req): <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT KICT\" readonly>";
			break;
		case "ILM": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK IZAAC Q30 VLKNN IRQ YUTEE Q172 RAPZZ KILM\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK HARES MEI J20 MGM MCN VAN KILM\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC MEM GQO SPA FLO KILM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SQS VUZ RMG IRQ FLO KILM\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "IND": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT TERGE SMUKE3 KIND\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW GRABE8 OKM TUL J87 BUM HLV SPI JAAVE KOLTS2 KIND\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 HITMN HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV RACYR6 KIND\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			break;
		case "JAC": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC KK39A HGO KD60U CKW DNW KJAC\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 ABQ J15 JNC BPI KJAC\" readonly>";
			result += "<br/>South via EWM: <input style=\"width:75%\" value=\"KDFW NELYN6 ACT INK J4 EWM RUTER J86 INW BCE J11 FFU HOMVA KJAC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 PNH J17 TBE CHE CKW DNW KJAC\" readonly>";
			break;
		case "JAN": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH MHZ KJAN\" readonly>";
			result += "<br/><br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH MCB KJAN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MHZ KJAN\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM SQS KJAN\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB KJAN\" readonly>";
			break;
		case "JAX":
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA CREEM CEW J2 DEFUN CABLO CAPPS MARQO2 KJAX\" readonly>";
			result += "<br/><br/>North Rte: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI J20 MGM DUCHY OHDEA1 KJAX\" readonly>";
			result += "<br/>South Rte: <input style=\"width:75%\" value=\"KDFW ARDIA7 CLL TNV IAH MHF PEKON Q56 SJI J2 DEFUN CABLO CAPPS MARQO2 KJAX\" readonly>";
			result += "<br/>Gulf Rte: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB HRV Q105 REDFN Y280 REMIS PIE ORL POGIE2 KJAX\" readonly>";
			result += "<br/>COWBOY EAST 1 (FL230 until LCH):<br/><input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN CABLO CAPPS MARQO2 KJAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SWB MCB J50 CEW SZW KJAX\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK SQS VUZ LGC MCN AMG KJAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI MGMRY CABLO CAPPS MARQO2 KJAX\" readonly>";
			result += "<br/>1N (Coord Req): <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEMFS Q116 VLKNN MGMRY CABLO CAPPS MARQO2 KJAX\" readonly>";
			result += "<br/>1S (Coord Req): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN CABLO CAPPS MARQO2 KJAX\" readonly>";
			break;
		case "JFK": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL BVT CRL J554 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR FIGEY Q64 SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q64 SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 EAKER MLC RZC STL BVT CRL JHW SFK LVZ LENDY8 KJFK\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC ARG HITMN Q34 SITTR Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q64 SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>J3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>M3 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>RD (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>VS (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q64 SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>WC (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>WM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO FIGEY Q64 SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>WV (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR FIGEY Q64 SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			break;
		case "LAS": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX ABI J50 ELP J86 INW HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH RSK TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 CNX ZUN PGS ISHEE2 KLAS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			break;
		case "LAX": // Updated 01-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 ABQ J78 DRK GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST ELP J50 SSO BXK ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST ELP J50 SSO BXK ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 CNX J74 SJN J231 TNP BASET5 KLAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>EE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX ONM PXR BXK J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			break;
		case "LAW": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW KING4 SPS KLAW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 ADM KLAW\" readonly>";
			break;
		case "LBB": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL300):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA KLBB\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW EZEEE KLBB\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 KLBB\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA KLBB\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH KLBB\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT KLBB\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF BGS KLBB\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST KLBB\" readonly>";
			break;
		case "LCH": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DARTZ9 TORNN LFK KLCH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW GARL5 TYR LFK KLCH\" readonly>";
			break;
		case "LEX": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 WAKOL BNA HYK KLEX\" readonly>"; // CDR 0P
			result += "<br/>North (ZKC Avoid): <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV KLEX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J66 MEM BNA HYK KLEX\" readonly>"; // CDR 0P
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 WAKOL BNA HYK KLEX\" readonly>";
			result += "<br/>1N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV KLEX\" readonly>";
			result += "<br/>1S: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN VXV KLEX\" readonly>";
			break;
		case "LGA": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR ASBUR DENNY MOL GVE PROUD2 KLGA\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PROUD2 KLGA\" readonly>"; // CDR 0P
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF J8 STL J24 VHP WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>MGM 1: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>NO Q34: <input style=\"width:75%\" value=\"KDFW DALL3 TXK Q34 MEMFS VISQA J29 PXV ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/>VUZ: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 TUL J98 SGF J8 STL J24 VHP WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PROUD2 KLGA\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 GVE PROUD2 KLGA\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>J3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/>LT (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/>M3 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>RD (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/>WB (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PROUD2 KLGA\" readonly>";
			result += "<br/>WC (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB CEW ALLMA TEEEM Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>WM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>WV (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>";
			break;
		case "LIT": // Updated 03-25-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL270):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT KLIT\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC FSM KLIT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK KLIT\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT KLIT\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC FSM KLIT\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH J101 LIT KLIT\" readonly>";
			break;
		case "LRD": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 SAT J21 KLRD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL4 SAT J21 KLRD\" readonly>";
			break;
		case "MAF": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN KMAF\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA UNEKE KMAF\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW NELYN6 ACT SJT KMAF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI KMAF\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN KMAF\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT KMAF\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF KMAF\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST KMAF\" readonly>";
			break;
		case "MCI": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 TUL STASN WUTNG3 KMCI\" readonly>"; // CDR 0P
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM J21 ICT ZOURA WUTNG3 KMCI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL EMP JHAWK8 KMCI\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 TUL STASN WUTNG3 KMCI\" readonly>";
			result += "<br/>1E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>1W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT ZOURA WUTNG3 KMCI\" readonly>";
			break;
		case "MCO": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA CREEM CEW J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB HRV Q105 REDFN Y280 CHRGE PRICY4 KMCO\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS MGM DEEDA GRNCH5 KMCO\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV MUSYL PEGLG ALGAE DTSRJ CIGAR PRICY4 KMCO\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SWB MCB CEW OTK LEESE3 KMCO\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM J41 MGM DEEDA GRNCH5 KMCO\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN GRNCH5 KMCO\" readonly>";
			break;
		case "MDT":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV CVG AIR JST KMDT\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD Q32 CRAMM RESPE VXV PSK MOL J48 EMI KMDT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV CVG AIR JST KMDT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR ESL BAMMY T299 HAR KMDT\" readonly>";
			result += "<br/>1N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG HITMN Q34 SITTR ESL BAMMY T299 HAR KMDT\" readonly>";
			break;
		case "MEM": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD HOBRK4 KMEM\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL RZC BRBBQ3 KMEM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC ELD UJM6 KMEM\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD HOBRK4 KMEM\" readonly>";
			result += "<br/>1N (Coord Req): <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC BRBBQ3 KMEM\" readonly>";
			result += "<br/>1S (Coord Req): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MEVEE HOBRK4 KMEM\" readonly>";
			break;
		case "MFE": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 HOARY CRP JIMIE KMFE\" readonly>";
			result += "<br/><br/>Central: <input style=\"width:75%\" value=\"KDFW NELYN6 SAT J25 ICEMN KH75C KMFE\" readonly>";
			result += "<br/>East Rte: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV PSX J29 CRP KMFE\" readonly>";
			result += "<br/>West Rte: <input style=\"width:75%\" value=\"KDFW NELYN6 SAT J21 LRD KMFE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 SAT J21 LRD V17 KMFE\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input style=\"width:75%\" value=\"KDFW NELYN6 SAT J25 CRP KMFE\" readonly>";
			result += "<br/>1E (Coord Req): <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB IAH J29 CRP KMFE\" readonly>";
			result += "<br/>1W (Coord Req): <input style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT JCT SAT J25 CRP KMFE\" readonly>";
			result += "<br/>2W (Coord Req): <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN WUNIL SJT JCT SAT J25 CRP KMFE\" readonly>";
			break;
		case "MGM": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO KMGM\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MON MSL VUZ MGM KMGM\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH LCH LLA LEV SJI KMGM\" readonly>";
			result += "<br/><br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN MGMRY KMGM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC J20 MGM KMGM\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO KMGM\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VUZ KMGM\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN MGMRY KMGM\" readonly>";
			break;

// MHT skipped

		case "MIA":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA MCB J50 CEW J2 DEFUN FROGZ4 KMIA\" readonly>";
			result += "<br/>OW via IAH: <input style=\"width:75%\" value=\"KDFW DARTZ9 TORNN J87 IAH LEV Y290 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV MUSYL LCHLH KELPP MINOW MARCI FROGZ4 KMIA\" readonly>";
			result += "<br/><br/>COWBOY EAST: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH HRV Q105 BLVNS Y290 BAGGS RSW PALMZ2 KMIA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/>Non RNAV SID/STAR: <input style=\"width:75%\" value=\"KDFW DALL3 EIC HRV Q105 BLVNS Y290 BAGGS RSW PALMZ2 KMIA\" readonly>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KDFW DALL3 EIC SWB MCB J50 CEW SZW PIE PALMZ2 KMIA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
			result += "<br/>1N (Coord Req): <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MERDN DEFUN FROGZ4 KMIA\" readonly>";
			result += "<br/>1S (Coord Req): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH J86 LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
			break;
		case "MKE": // Updated 01-19-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF BAYLI JOT LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI DSM DBQ JVL KMKE\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 SIDAE VHP NUKIE PETTY KMKE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J98 SGF BAYLI JOT OBK KMKE\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF BAYLI JOT LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>1E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J101 STL BAYLI JOT LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>1W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 JOT LEEDN GOPAC3 KMKE\" readonly>";
			break;
		case "MLB": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH2 ZALEA SWB MCB J50 CEW J2 DEFUN CABLO CTY OCF CERMO ORL KMLB\" readonly>";
			break;
		case "MLI": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 TUL J87 IRK KMLI\" readonly>";
			break;
		case "MOB": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB SJI KMOB\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL6 ACT J50 CEW KMOB\" readonly>";
			break;
		case "MRY": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM J4 SSO J50 TFD J212 DECAS J65 PMD MAKRS BSR KMRY\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO FTI J58 RSK ILC KITTN KATTS Q136 OAL FRA SNS KMRY\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST ELP J50 BLH PSP LAX RZS J501 BSR KMRY\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST ELP J50 BLH PSP LAX RZS J501 BSR KMRY\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT): <input style=\"width:75%\" value=\"KDFW CYOTE4 ABI J50 BLH PSP LAX RZS J501 BSR KMRY\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "MSN": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC MZV KMSN\" readonly>"; // CDR 0P
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 DSM DBQ KMSN\" readonly>";
			result += "<br/>East: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT STL BDF KMSN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 OKM IRK KMSN\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC MZV KMSN\" readonly>";
			result += "<br/>1E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT MZV KMSN\" readonly>";
			break;
		case "MSO": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 PUB HAHNS QUIRT WAIDE KMSO\" readonly>";
			result += "<br/><br/>North/East: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW IFI HYS MCK RAP J151 BIL J34 HLN KMSO\" readonly>";
			result += "<br/>South/West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC J15 TCH PIH LKT KMSO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 PNH J17 PUB DBL J206 OCS J52 LKT KMSO\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "MSP": // Updated 01-04-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW J21 ICT OBH FSD SSWAN TORGY3 KMSP\" readonly>";
			result += "<br/>East: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J101 STL IOW MNOSO BLUEM4 KMSP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J25 DSM MCW KASPR7 KMSP\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER PWE OVR ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/>1E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT SGF J41 OVR ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/>1W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT PWE OVR ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/>K2 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER LNK FSD SSWAN TORGY3 KMSP\" readonly>";
			break;
		case "MSY": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB LSU AWDAD1 KMSY\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MCB TRSSH1 KMSY\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH AWDAD1 KMSY\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SWB MCB KMSY\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB LSU AWDAD1 KMSY\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM J35 MCB TRSSH1 KMSY\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH AWDAD1 KMSY\" readonly>";
			break;
		case "MTJ": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS HELPS KMTJ\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE FTI ESPAN KMTJ\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>AA: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO ABQ KA36S MTJ KMTJ\" readonly>";
			result += "<br/>AB: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC FTI MTJ KMTJ\" readonly>";
			result += "<br/>EM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE ESPAN KMTJ\" readonly>";
			result += "<br/>KC: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK PUB MTJ KMTJ\" readonly>";
			result += "<br/>KP: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER GCK HELPS KMTJ\" readonly>";
			result += "<br/>KW: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA ICT GCK HELPS KMTJ\" readonly>";
			break;
		case "MYR": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN QUIWE FLO CRE KMYR\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB CEW ALLMA SAV CHS KMYR\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM GQO SPA FLO CRE KMYR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK J52 SQS VUZ IRQ CAE FLO CRE KMYR\" readonly>"; // CDR 0P
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN QUIWE FLO CRE KMYR\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI CATLN MGMRY IRQ CAE FLO CRE KMYR\" readonly>";
			break;
		case "OKC": // Updated 04-09-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL280):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA IRW KOKC\" readonly>"; // CDR 0P
			result += "<br/><br/>Low Level: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM V17 IRW KOKC\" readonly>";
			result += "<br/>West for Wx: <input style=\"width:75%\" value=\"KDFW KING4 SPS GIMLE YUCKS3 KOKC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 ADM J21 IRW KOKC\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 04-09-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA IRW KOKC\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT RZC TUL GULLI3 KOKC\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD CDS HBR IRW KOKC\" readonly>";
			break;
		case "OMA": // Updated 03-28-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER HTHWY TIMMO1 KOMA\" readonly>"; // CDR 0P
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI STJ MARWI4 KOMA\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW IFI KK48A HLC GRI HOWRY3 KOMA\" readonly>";
			result += "<br/><br/>East via SGF: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF IRK LMN MARWI4 KOMA\" readonly>";
			result += "<br/>West via PNH: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH GCK HLC GRI HOWRY3 KOMA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J25 MCI STJ MARWI4 KOMA\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-25-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER HTHWY TIMMO1 KOMA\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT SGF J41 MCI STJ MARWI4 KOMA\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT HTHWY TIMMO1 KOMA\" readonly>";
			break;
		case "ONT": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 BXK PHRED SCBBY2 KONT\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 ABQ J78 DRK DAFNY SCBBY2 KONT\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 BXK PHRED SCBBY2 KONT\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 DRK DAFNY SCBBY2 KONT\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 SSO J4 BXK PHRED SCBBY2 KONT\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J50 SSO J4 BXK PHRED SCBBY2 KONT\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J50 SSO J4 BXK PHRED SCBBY2 KONT\" readonly>";
			break;
		case "ORD": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF WELTS TRTLL6 KORD\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J87 IRK BDF8 KORD\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW GRABE8 OKM EOS WELTS TRTLL6 KORD\" readonly>";
			result += "<br/>1E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J180 FTZ TRTLL6 KORD\" readonly>";
			result += "<br/>1W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 IRK BENKY6 KORD\" readonly>";
			result += "<br/>JV (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 HITMN HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
			result += "<br/>KK (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>";
			result += "<br/>MS (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC SGF WELTS TRTLL6 KORD\" readonly>";
			break;
		case "ORF": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR HRTWL Q54 NUTZE DRONE DRONE2 KORF\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC FAM J78 HVQ J24 MOL TERKS2 KORF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK LIT MEM BNA BKW MOL TERKS2 KORF\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR HRTWL Q54 NUTZE DRONE DRONE2 KORF\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 MAULS MOL TERKS2 KORF\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q64 HRTWL Q54 NUTZE DRONE DRONE2 KORF\" readonly>";
			break;
		case "PBI": // Updated 01-24-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA HRV Q105 BLVNS Y290 GAWKS VUUDU1 KPBI\" readonly>"; // CDR 0P
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA MCB J50 CEW J2 DEFUN VUUDU1 VUUDU1 KPBI\" readonly>";
			result += "<br/><br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN VUUDU1 KPBI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SWB MCB J50 CEW SZW TAY CRG OMN MLB STOOP3 KPBI\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK MERDN DEFUN VUUDU1 KPBI\" readonly>";
			result += "<br/>1N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MERDN DEFUN VUUDU1 KPBI\" readonly>";
			result += "<br/>1S: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN VUUDU1 KPBI\" readonly>";
			break;
		case "PDX": // Updated 01-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC J15 IMB JOTBA HHOOD5 KPDX\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM GLD LAR KU72S BPI JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>South via EWM: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM J4 SSO J50 TOTEC J11 DRK DOVEE BTY OAL J92 LMT GALLO TMBRS3 KPDX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO TCC ALS JNC J15 IMB JOTBA KPDX\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH ALS JNC J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			break;
		case "PHL": // Updated 01-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PAATS4 KPHL\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW  AKUNA9 MLC RZC STL VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/><br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>MGM 3: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL2 TXK MEM BNA BKW MOL GVE OTT KPHL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA SWAPP Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>J3 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>M3: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>RD (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 CREEP BLISS J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>VS (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>WB (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>WC (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>WM (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>WV (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			break;
		case "PHX": // Updated 03-29-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM DRRVR PINNG1 KPHX\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TCC ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/><br/>COWBOY WEST 1: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>COWBOY WEST 2: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE3 ABI J66 EWM J4 SSO SUNSS8 KPHX\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-29-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>EE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX ONM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>PE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK ELP DRRVR PINNG1 KPHX\" readonly>";
			break;
		case "PIT": // Updated 01-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV IIU HNN FEWGA7 KPIT\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP APE CTW FEWGA7 KPIT\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD KM27M VXV HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>Avoid ZID: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF STL RBS GSH J60 DJB GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK LIT BWG HNN AIR KPIT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV IIU HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV IIU HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA IIU HNN FEWGA7 KPIT\" readonly>";
			break;
		case "PNS": // Updated 01-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB SJI LOXLY V198 PENSI KPNS\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MHZ SJI V241 PENSI KPNS\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 SJI LOXLY V198 PENSI KPNS\" readonly>";
			result += "<br/><br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 SJI LOXLY V198 PENSI KPNS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SWB MCB SJI KPNS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB SJI LOXLY V198 PENSI KPNS\" readonly>";
			result += "<br/>1N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM MEI SJI LOXLY V198 PENSI KPNS\" readonly>";
			result += "<br/>1S (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 SJI LOXLY V198 PENSI KPNS\" readonly>";
			break;
		case "PSP": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 BXK J212 DECAS SBONO1 KPSP\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KDFW HRPER3 HULZE TXO J72 ABQ J78 PKE UBABE SBONO1 KPSP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KDFW CYOTE4 CNX J74 SJN DRK J6 EED SBONO1 KPSP\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 BXK J212 DECAS SBONO1 KPSP\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 EED SBONO1 KPSP\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 SSO J4 BXK J212 DECAS SBONO1 KPSP\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J50 SSO J4 BXK J212 DECAS SBONO1 KPSP\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J50 SSO J4 BXK J212 DECAS SBONO1 KPSP\" readonly>";
			break;
		case "PUB": // Updated 01-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW KDFW LOWGN8 ROLLS J52 LAA KPUB\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>4S: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF BGS PNH J17 KPUB\" readonly>";
			break;

// DFW-PVD skipped

		case "PWM": // Updated 01-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD MFD CXR JHW Q84 CAM CDOGG4 KPWM\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF BAYLI J181 BDF J26 JOT J146 GIJ J554 CRL J554 JHW Q84 CAM CDOGG4 KPWM\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 RBV LGA BDR SCOGS3 KPWM\" readonly>";
			result += "<br/><br/>VUZ: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV LGA BDR SCOGS3 KPWM\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TOOD
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>MH (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI FAK AML Q221 BIGEO J49 ALB CAM CDOGG4 KPWM\" readonly>";
			break;
		case "RAP": // Updated 01-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 IRW HLC KRAP\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 RAP KRAP\" readonly>";
			result += "<br/>East: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC PWE ONL J151 RAP KRAP\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "RDM": // Updated 01-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TCC J76 FTI J58 MLF ELY J523 REO KRDM\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 BLD J92 BTY KENNO YERIN J92 FMG J5 LKV KRDM\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW END PENUT Q148 LEWOY LAR J54 BOI IMB ROAMS ARNOY KRDM\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "RDU": // Updated 01-27-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM VXV KPASS ALDAN4 KRDU\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR IRQ PYRES DMSTR2 KRDU\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV FLM HVQ FRIKY ALDAN4 KRDU\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MHZ MEI LGC IRQ CAE BUZZY1 KRDU\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM VXV KPASS ALDAN4 KRDU\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA VXV KPASS ALDAN4 KRDU\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH MCB MGMRY IRQ PYRES DMSTR2 KRDU\" readonly>";
			break;

// RFD skipped

		case "RIC": // Updated 01-28-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 MAULS MOL SPIDR5 KRIC\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS VLKNN BURGG Q60 JAXSN KELCE DUCXS5 KRIC\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF J98 FAM J78 IIU J526 BKW ASBUR DENNY MOL SPIDR5 KRIC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL5 SQS VUZ GQO PSK FAK KRIC\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 MAULS MOL SPIDR4 KRIC\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 MAULS FAK KRIC\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA SWAPP Q34 MAULS FAK KRIC\" readonly>";
			break;
		case "RNO": // Updated 01-28-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE FTI J58 RSK ILC MVA SCOLA SCOLA1 KRNO\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK J50 ELP J86 BLD J92 BTY KENNO SCOLA1 KRNO\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE ALS DVC MLF MVA SCOLA SCOLA1 KRNO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO TCC J76 FTI J58 MLF MVA RYANN2 KRNO\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE FTI J58 RSK ILC MVA SCOLA SCOLA1 KRNO\" readonly>";
			result += "<br/>1N (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J58 RSK ILC MVA SCOLA SCOLA1 KRNO\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 RSK ILC MVA SCOLA SCOLA1 KRNO\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 RSK ILC MVA SCOLA SCOLA1 KRNO\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 RSK ILC MVA SCOLA SCOLA1 KRNO\" readonly>";
			break;
		case "ROC": // Updated 01-28-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 JHW KROC\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD KM27M SMTTH Q67 HNN AIR EWC JHW KROC\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J87 JOT J60 DJB JHW KROC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 JHW KROC\" readonly>";
			result += "<br/>1N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV ROD KLYNE Q29 JHW KROC\" readonly>";
			break;

// ROW skipped
// RST skipped

		case "RSW": // Updated 01-28-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB HRV Q105 BLVNS Y290 DOWRY TYNEE3 KRSW\" readonly>"; // CDR 0P
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB J50 CEW J2 DEFUN CABLO BULZI Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH EIC MERDN MGMRY ACORI BULZI Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB LEV PLNDR L465 MINOW M580 SHAQQ MOOKY KRSW\" readonly>";
			result += "<br/><br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN CABLO BULZI Q81 NICKI PLYER TYNEE3 KRSW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SWB MCB J50 CEW SZW PIE PUMPP1 KRSW\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB HRV Q105 BLVNS Y290 DOWRY TYNEE3 KRSW\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEMFS Q116 VLKNN MGMRY BULZI NICKI PLYER TYNEE2 KRSW\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH J86 LEV Y290 DOWRY TYNEE3 KRSW\" readonly>";
			break;
		case "SAN": // Updated 01-10-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM J4 SSO GBN J18 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA RECKN ABQ BLH CNERY MOMAR LUCKI1 KSAN\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP ALIBY J2 IPL TOPGN2 KSAN\" readonly>";
			result += "<br/>Weekend/Holiday: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA KA21W TMACK GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI J66 EWM J4 SSO J50 GBN J18 IPL BARET5 KSAN\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 SSO GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 ZUN J244 PXR GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>EE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX ONM SSO GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			break;
		case "SAT": // Updated 04-09-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL230):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JASPA7 WINDU QERVO1 KSAT\" readonly>"; // CDR 0P
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 ACT MARCS1 KSAT\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW JASPA7 WINDU QERVO1 KSAT\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB DAS CAAGE QERVO1 KSAT\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT TRVLL DNKIN1 KSAT\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN WUNIL SJT TRVLL DNKIN1 KSAT\" readonly>";
			result += "<br/>3W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX DILLO POPPO1 KSAT\" readonly>";
			break;
		case "SAV": // Updated 01-28-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO KSAV\" readonly>"; // CDR 0P
			result += "<br/><br/>Avoid ZTL: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB CEW ALLMA KSAV\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM J66 RMG LOTTS SAV KSAV\" readonly>";
			result += "<br/>Gulf: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB HRV Q105 REDFN Y280 REMIS PIE CRG SAV KSAV\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MEI MGM MCN LOTTS SAV KSAV\" readonly>";
			result += "<br/>(FL170 to TXK): <input style=\"width:75%\" value=\"KDFW DALL3 TXK J52 SQS VUZ MCN LOTTS SAV KSAV\" readonly>";			
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO KSAV\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VUZ MGMRY KSAV\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN MGMRY KSAV\" readonly>";
			break;
		case "SBA": // Updated 01-28-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX J74 PKE TNP FIM KWANG KSBA\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX ABI J50 SSO J4 TNP PORPS PITBL1 KSBA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO TCC J6 HEC PITBL1 KSBA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX J74 PKE TNP FIM KWANG KSBA\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 DRK J231 TNP FIM KWANG KSBA\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 SSO J4 TNP FIM KWANG KSBA\" readonly>";
			break;

// DFW-SBN skipped

		case "SBP": // Updated 01-28-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 ABQ J78 DRK J6 PMD FIM CNDOR CADAB KSBP\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX ABI J50 SSO J4 LAX RZS MQ KSBA\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW MMB KENTO Q176 CIM J96 GUP J8 EED J6 PMD FIM CNDOR CADAB KSBP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 CNX J74 SJN J231 DRK J6 PMD FIM RZS MQO KSBP\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "SDF": // Updated 01-28-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT MOOCH MBELL5 KSDF\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS BNA EWO KSDF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV KSDF\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT MOOCH MBELL5 KSDF\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC MOOCH MBELL5 KSDF\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM BUMPY MBELL5 KSDF\" readonly>";
			break;
		case "SEA": // Updated 01-28-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH KD48U MTU OGD PDT CHINS5 KSEA\" readonly>";
			result += "<br/><br/>North/East: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK LAR J175 DBS J52 LKT PDT CHINS5 KSEA\" readonly>";
			result += "<br/>South/West: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN CME J15 ABQ BCE J523 REO J153 BKE PDT CHINS5 KSEA\" readonly>";
			result += "<br/>North via ONL: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW ICT SLN ONL J151 RAP J151 BIL J34 MWH KSEA\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST CNM CME J15 BOI PDT CHINS5 KSEA\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST CNM CME J15 BOI PDT CHINS5 KSEA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 ROLLS LBL LAA DEN CKW BPI IDA DNJ J20 PDT CHINS5 KSEA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 FQF J20 PDT CHINS5 KSEA\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE LAA J52 FQF J20 PDT CHINS5 KSEA\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 BOI PDT CHINS5 KSEA\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 BOI PDT CHINS5 KSEA\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 BOI PDT CHINS5 KSEA\" readonly>";
			break;

// SFB skipped

		case "SFO": // Updated 01-29-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TCC J76 FTI J58 OAL INYOE DYAMD5 KSFO\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN ELP Q4 SPTFR DECAS J65 PMD AVE MAKRS SERFR SERFR4 KSFO\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST CNM CME J15 ABQ J72 BLD J92 BTY RUSME DYAMD5 KSFO\" readonly>";
			result += "<br/>COWBOY WEST 2: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST CNM CME J15 ABQ J72 BLD J92 BTY RUSME DYAMD5 KSFO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO TCC J76 FTI J58 ILC J198 MVA KSFO\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC FTI J58 MLF KITTN KATTS INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J58 MLF KITTN KATTS INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 RSK J58 MLF KITTN KATTS INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 RSK J58 MLF KITTN KATTS INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 RSK J58 MLF KITTN KATTS INYOE DYAMD5 KSFO\" readonly>";
			break;
		case "SGF": // Updated 01-29-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC V63 BILIE KSGF\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT KSGF\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA HUSKA CNU KSGF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J98 KSGF\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1E (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT KSGF\" readonly>";
			result += "<br/>1W: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH MMB PER EOS KSGF\" readonly>";
			break;
		case "SHV": // Updated 01-29-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH KSHV\" readonly>"; // CDR 0P
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 SOLDO KSHV\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH KSHV\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC FSM TXK EIC KSHV\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LFK EMG KSHV\" readonly>";
			break;
		case "SJC": // Updated 01-11-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TCC J76 FTI J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM J4 SSO J50 TFD J212 DECAS J65 PMD AVE MAKRS TROXX SILCN6 KSJC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO FTI J58 MLF MVA SAC PYE3 KSJC\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC FTI J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 RSK J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 RSK J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 RSK J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			break;
		case "SLC": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC J12 HELPR JAZZZ1 KSLC\" readonly>"; // CDR 0P
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 PNH ALS JNC J12 HELPR SPANE8 KSLC\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL LAA JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			break;
		case "SMF": // Updated 01-29-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC FTI J58 MLF TATOO CRASY SLMMR5 KSMF\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS KENTO ALS JNC J15 TCH BAM J32 LLC ANAHO SLMMR5 KSMF\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK J4 RUSTT BOILE J50 LANDO J65 EHF NURAY SUUTR4 KSMF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO TCC J76 FTI J58 ILC J198 MVA J84 LIN CCR CCR2 KSMF\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC FTI J58 MLF TATOO CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J58 MLF TATOO CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 RSK J58 MLF TATOO CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 RSK J58 MLF TATOO CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 RSK J58 MLF TATOO CRASY SLMMR5 KSMF\" readonly>";
			break;
		case "SNA": // Updated 01-29-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 BXK EMLLD DSNEE6 KSNA\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J74 SJN DRK HIMDU ROOBY3 KSNA\" readonly>";
			result += "<br/>North via FTI/GUP: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS EZEEE FTI J8 GUP J96 DRK HIMDU ROOBY3 KSNA\" readonly>";
			result += "<br/>Weekend/Holiday: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN YORUB TCS J65 KOFFA EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI EWM J4 BXK J212 PSP KAYOH8 KSNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 BXK EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 DRK HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 SSO J4 BXK EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J50 SSO J4 BXK EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J50 SSO J4 BXK EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/>EE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX ONM SSO J4 BXK EMLLD DSNEE6 KSNA\" readonly>";
			break;
		case "SPS": // Updated 01-29-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL080): </b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW KING4 SPS KSPS\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX KSPS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			break;
		case "SRQ": // Updated 01-29-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB HRV Q105 REDFN Y280 CHRGE RAYZZ2 KSRQ\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB CREEM CEW J2 DEFUN BANGZ1 KSRQ\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH J86 LEV Y280 REDFN Y280 CHRGE RAYZZ2 KSRQ\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS THRSR HONID BANGZ1 KSRQ\" readonly>";
			result += "<br/><br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI J2 DEFUN BANGZ1 KSRQ\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MHZ MGM SZW PIE KSRQ\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "STL": // Updated 03-17-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF KAYLA3 KSTL\" readonly>"; // CDR 0P
			result += "<br/><br/>East <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT ARG BOOSH3 KSTL\" readonly>"; // CDR 1E
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL SGF KOOOP1 KSTL\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 03-17-2025
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF KAYLA3 KSTL\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT ARG BOOSH3 KSTL\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT BUM KAYLA3 KSTL\" readonly>";
			break;
		case "STS": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 GUP TBC J76 LAS BTY RUSME VNYRD1 KSTS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE FTI J58 MLF KATTS OAL YOSEM VNYRD1 KSTS\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM J4 SSO J50 TFD J212 DECAS J65 EHF RGOOD VNYRD1 KSTS\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST CNM CME CNX BLD J92 OAL YOSEM VNYRD1 KSTS\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT): <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST CNM CME CNX BLD J92 OAL YOSEM VNYRD1 KSTS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			// result += "<br/><br/><b>CDRS</b>";
			break;

// todo SWF

		case "SYR": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 GONZZ KSYR\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL BVT CRL J554 JHW KSYR\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 KONGO Q71 PSB J59 SYR KSYR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV VHP ROD DJB JHW KSYR\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 GONZZ KSYR\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV ROD KLYNE Q29 GONZZ KSYR\" readonly>";
			break;
		case "TLH": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB J50 CEW KTLH\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS MGM SZW KTLH\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW ARDIA7 CLL TNV LSU J2 CEW MAI KTLH\" readonly>";
			result += "<br/><br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN KTLH\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB J50 CEW KTLH\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 CEW KTLH\" readonly>";
			break;
		case "TPA": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB HRV Q105 REDFN Y280 CHRGE RAYZZ2 KTPA\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB CREEM CEW J2 DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/><br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ARDIA7 CLL TNV IAH LCH J2 DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MERDN DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN MAATY5 KTPA\" readonly>";
			break;
		case "TUL": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW GRABE8 EAKER TUL KTUL\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 PGLET SPS FILGO IRW OKM KTUL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 ADM TUL KTUL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>1E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT RZC KTUL\" readonly>";
			result += "<br/>1W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD CDS IRW KTUL\" readonly>";
			break;
		case "TUS": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK ELP ZONNA2 KTUS\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J74 CNX ONM J104 SSO ZONNA2 KTUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 MQP INK J50 ELP J2 KTUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK ELP ZONNA2 KTUS\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J26 ELP ZONNA2 KTUS\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP ZONNA2 KTUS\" readonly>";
			result += "<br/>2S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP ZONNA2 KTUS\" readonly>";
			result += "<br/>3S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP ZONNA2 KTUS\" readonly>";
			break;
		case "TVC": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF BAYLI J181 BDF BAE KTVC\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J137 ARG FAM RBS PMM J548 KTVC\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 DSM DLL GRB KTVC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX4 TUL J98 SGF BAYLI J181 BDF BAE KTVC\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "TYS": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM KTYS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC ARG J46 BNA KTYS\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS GQO KTYS\" readonly>";
			result += "<br/><br/>COWBOY EAST 1: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN VXV KTYS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT BNA KTYS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 HITMN VXV KTYS\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA VXV KTYS\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN VXV KTYS\" readonly>";
			break;
		case "VPS": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWB MCB MUURY CEW KVPS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW TRYTN4 TRYTN IZAAC Q30 VLKNN Q139 MGMRY CEW KVPS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SWB MCB J50 CEW KVPS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI CEW KVPS\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VLKNN Q139 MGMRY CEW KVPS\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 CEW KVPS\" readonly>";
			break;
		case "XNA": // Updated 01-16-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC KXNA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 EAKER MLC RZC KXNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC KXNA\" readonly>";
			result += "<br/>1E (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT KXNA\" readonly>";
			result += "<br/>1W (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 MMB TUL RZC KXNA\" readonly>";
			break;
		case "YEG": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 IRW HCT MLS YEA CAMRA IGSOX3 CYEG\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH HBU BPI DLN YXC OILRS OILRS2 CYEG\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW GCK GLD CYS J13 DDY BIL GTF J516 YQL EBGAL OILRS CYEG\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;

// YKM skipped
// YOW skipped
// YQB skipped
			
		case "YUL": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL BVT CRL DERLO Q907 AGNOB MIGLO HABBS7 CYUL\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI J26 JOT J87 OBK J547 FNT Q824 HOCKE Q905 SIKBO Q951 SANIN MIGLO HABBS7 CYUL\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD Q32 BNA AIR PSB ALB PBERG CARTR5 CYUL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX3 TUL J98 SGF J8 STL BVT CRL YYZ YCF YUL CYUL\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "YVR": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH DBL J206 OCS J52 DBS GEG METOW GRIZZ7 CYVR\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW J21 ICT HCT BFF BOY DBS J52 GEG METOW GRIZZ7 CYVR\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN CME J15 ABQ BCE J523 SEA PAE GRIZZ7 CYVR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW LOWGN8 ADM MMB LBL LAA J52 FQF J20 SEA PAE PAINE4 CYVR\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "YYC": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 IRW HCT MLS VESDO EBGAL7 CYYC\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW J21 ICT SLN OBH ONL DPR GGW PEMDU Q832 VESDO EBGAL7 CYYC\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC BPI DNW GTF COUTS TOVUM EBGAL7 CYYC\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN CME J15 CNX KA36U RLG BIL YQL MOBEK EBGAL7 CYYC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW GCK GLD CYS J13 DDY BIL GTF J516 YQL EBGAL CYYC\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "YYZ": // Updated 01-30-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL BVT CRL QWERI NUBER6 CYYZ\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 HITMN HNN YTOWN OXMAN LINNG3 CYYZ\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI J26 IRK J232 MZV BAE DABJU MONEE NUBER6 CYYZ\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT ARG PXV VHP CRL QWERI CYYZ\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
	}
	return result;
}
