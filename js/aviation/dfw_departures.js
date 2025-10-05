dfw_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
	switch(arvl) {
		case "ABI": // DFW-ABI // Updated 03-25-2025
			result += "<!-- Updated 03-25-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX KABI\" readonly>"; // CDR 0P
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI KABI\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-25-2025
			result += "<!-- Verified with ATCSCC on 03-25-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX KABI\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH KABI\" readonly>";
			result += "<br/>1S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT KABI\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF SJT KABI\" readonly>";
			break;
		case "ABQ": // DFW-ABQ // Updated 09-27-2025
			result += "<!-- Updated 09-27-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO RECKN COLTR4 KABQ\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS EZEEE TAMEY SNDIA4 KABQ\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN FANGZ LZZRD4 KABQ\" readonly>";
			result += "<br/><br/>South/ZFW Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT PEQ CME MIERA2 KABQ\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO MIERA2 KABQ\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-27-2025
			result += "<!-- Verified with ATCSCC on 09-27-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO MIERA2 KABQ\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 TCC MIERA2 KABQ\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 CME MIERA2 KABQ\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 CME MIERA2 KABQ\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME MIERA2 KABQ\" readonly>";
			break;
		case "ACT": // DFW-ACT // Updated 03-25-2025
			result += "<!-- Updated 03-25-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL120):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 NELYN KACT\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-25-2025
			result += "<!-- Verified with ATCSCC on 03-25-2025 -->";
			break;
		case "AGS": // DFW-AGS // Updated 03-25-2025
			result += "<!-- Updated 03-25-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR AHN IRQ KAGS\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW DARTZ9 TORNN LFK J50 MCB GARTS MVC MGM THRSR AHN PLYRR CLUBB CADIE KAGS\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J66 MEM MSL RMG THRSR AHN PLYRR CLUBB CADIE KAGS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-25-2025
			result += "<!-- Verified with ATCSCC on 03-25-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR AHN IRQ KAGS\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VUZ IRQ KAGS\" readonly>";
			result += "<br/>1S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI CATLN MGMRY IRQ KAGS\" readonly>";
			break;
		case "ALB": // DFW-ALB // Updated 05-07-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-07-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 05-07-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KDFW TRYTN4 LOOSE Q34 KONGO Q71 PSB J49 HNK KALB\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV Q22 LLUND Q133 GANDE KALB\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J98 SGF J8 STL J24 VHP DUTSH Q29 JHW Q82 LOXXE KALB\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV ROD JHW RKA KALB\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-07-2025
			result += "<!-- Verified with ATCSCC on 05-07-2025 -->";
			result += "<br/>MH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI FAK AML Q221 MICAH RKA KALB\" readonly>";
			break;
		case "AMA": // DFW-AMA // Updated 03-25-2025
			result += "<!-- Updated 03-25-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL320):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH KAMA\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH KAMA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN KAMA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 PNH KAMA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-25-2025
			result += "<!-- Verified with ATCSCC on 03-25-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH KAMA\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH KAMA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT ABI J17 PNH KAMA\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF BGS PNH KAMA\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST LBB PNH KAMA\" readonly>";
			break;
		case "ATL": // DFW-ATL // Updated 05-09-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-09-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN ORRKK HOBTT2 KATL\" readonly>"; // CDR 0P
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>"; // CDR 1N
			result += "<br/><b style=\"color:orange\">CDR is ..ARG MEM HUTCC.. but mandatory route is ..ARG MEMFS HUTCC..<\/b>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MHZ MEI VUZ KATL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-09-2025
			result += "<!-- Verified with ATCSCC on 05-09-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN ORRKK HOBTT2 KATL\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH Q24 PAYTN SHYRE HOBTT2 KATL\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM HUTCC KNSAW RUSSA RUTTH CHPPR1 KATL\" readonly>";
			result += "<br/>ME<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>";
			result += "<br/>NM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB GARTS PAYTN SHYRE HOBTT2 KATL\" readonly>";
			break;
		case "AUS": // DFW-AUS // Updated 03-25-2025
			result += "<!-- Updated 03-25-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL230):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JASPA7 WINDU SEWZY6 KAUS\" readonly>"; // CDR 0P
			result += "<br/><br/>Below FL230: <input style=\"width:75%\" value=\"KDFW JASPA7 WINDU BLEWE5 KAUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 WINDU BLEWE5 KAUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-25-2025
			result += "<!-- Verified with ATCSCC on 03-25-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW JASPA7 WINDU SEWZY6 KAUS\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP DAS LUKKN WLEEE7 KAUS\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT JCT DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN WUNIL SJT JCT DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/>3W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX DILLO LAIKS4 KAUS\" readonly>";
			break;
		case "AVL": // DFW-AVL // Updated 03-27-2025
			result += "<!-- Updated 03-27-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM VXV SOT KAVL\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN RMG ODF KAVL\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN THRSR HRTWL KAVL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK J52 SQS VUZ RMG ODF KAVL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-27-2025
			result += "<!-- Verified with ATCSCC on 03-27-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM VXV SOT KAVL\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA VXV SOT KAVL\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN THRSR HRTWL KAVL\" readonly>";
			break;
		case "BDL": // DFW-BDL // Updated 03-25-2025
			result += "<!-- Updated 03-25-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 RBV Q419 DPK DPK3 KBDL\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC KM36G KENBE VHP DJB JHW VIEEW Q82 MEMMS WILET STELA1 KBDL\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR KELLN Q56 KIWII COUPN JAMIE CONFR Q133 JFK DPK DPK3 KBDL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-25-2025
			result += "<!-- Verified with ATCSCC on 03-25-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA SWAPP Q34 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>MH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI FAK AML Q227 KONJE HNK STELA1 KBDL\" readonly>";
			result += "<br/>SP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 JHW Q82 MEMMS WILET STELA1 KBDL\" readonly>";
			break;
		case "BFL": // DFW-BFL // Updated 08-05-2025
			result += "<!-- Updated 08-05-2025 P -->";
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM J4 SSO J50 TFD HRRBR J212 DECAS J65 PMD FASTO2 KBFL\" readonly>";
			result += "<br/><b>Arrivals after 2300L: .. J6 HELDE LHS FASTO2 KBFL<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM IRW LBL RSK WELUM DAG PMD FASTO2 KBFL\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST ELP SSO HRRBR J212 DECAS J65 PMD FASTO2 KBFL\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST ELP SSO HRRBR J212 DECAS J65 PMD FASTO2 KBFL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-06-2025
			break;
		case "BGR": // DFW-BGR // Updated 03-25-2025
			result += "<!-- Updated 03-25-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-25-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV KLYNE Q29 KRAZZ DAVID FRIAR KBGR\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC STL BVT CRL J554 JHW Q29 KRAZZ DAVID FRIAR KBGR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT PXV CVG APE YTOWN JHW Q29 KRAZZ DAVID FRIAR KBGR\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-25-2025
			result += "<!-- Verified with ATCSCC on 03-25-2025 -->";
			result += "<br/>MH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI FAK AML Q221 BIGEO J49 ALB ENE KBGR\" readonly>";
			break;
		case "BHM": // DFW-BHM // Updated 03-25-2025
			result += "<!-- Updated 03-25-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN KBHM\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE IGB NESTS KBHM\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB MEI IGB NESTS KBHM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SQS VUZ KBHM\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-25-2025
			result += "<!-- Verified with ATCSCC on 03-25-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN KBHM\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VUZ KBHM\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN KBHM\" readonly>";
			break;
		case "BIL": // DFW-BIL // Updated 03-25-2025 // TODO
			result += "<!-- Updated 03-25-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-25-2025
			result += "<br/><br/><input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA PNH PUB DVV DDY CUSGA BGHRN3 KBIL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-28-2025
			result += "<!-- Verified with ATCSCC on 03-28-2025 -->";
			break;
		case "BNA": // DFW-BNA // Updated 03-27-2025
			result += "<!-- Updated 03-27-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM CHSNE2 KBNA\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG LOPPY CHSNE2 KBNA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH MLU MEI VUZ TINCA CHSNE2 KBNA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK MEM GHM GHM6 KBNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-27-2025
			result += "<!-- Verified with ATCSCC on 03-27-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM CHSNE2 KBNA\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG LOPPY CHSNE2 KBNA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI IGB HRTUN CHSNE2 KBNA\" readonly>";
			break;
		case "BOI": // DFW-BOI // Updated 07-29-2025
			result += "<!-- Updated 07-29-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 07-29-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC J15 TWF BROPH SPUUD4 KBOI\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL LAA J20 PIH REAPS KOURT4 KBOI\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX ABQ J15 RSK KU54Q TCH J12 TWF BROPH SPUUD4 KBOI\" readonly>";
			result += "<br/><br/>South via ELP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK J50 ELP J86 BAVPE CORKR Q35 WINEN Q73 BROPH SPUUD4 KBOI\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-29-2025
			break;
		case "BOS": // DFW-BOS // Updated 04-19-2025
			result += "<!-- Updated 04-19-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>"; // CDR 0P
			result += "<br/><b style=\"color:orange\">Triggers a mandatory route violation but it's good to file. Verified with ATC 04-19-2025<\/b>";
			result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>"; // CDR 1P
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>"; // CDR J3
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 OKM EOS SGF J8 STL J24 VHP ROD BSV EWC SLT J190 ALB T608 REVER KBOS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
			result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
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
			result += "<br/>WC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA TEEEM Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>WM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>WV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			break;
		case "BRO": // DFW-BRO // Updated 03-28-2025
			result += "<!-- Updated 03-28-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 HOARY CRP J25 BRO KBRO\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV PSX CRP KBRO\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW NELYN6 SAT J21 LRD MFE KBRO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 SAT THX KBRO\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-28-2025
			result += "<!-- Verified with ATCSCC on 03-28-2025 -->";
			break;
		case "BTR": // DFW-BTR // Updated 03-27-2025
			result += "<!-- Updated 03-27-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP KBTR\" readonly>"; // CDR 0P
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MHZ KBTR\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-27-2025
			result += "<!-- Verified with ATCSCC on 03-27-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP KBTR\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM SQS LSU KBTR\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH KBTR\" readonly>";
			break;
		case "BTV": // DFW-BTV // Updated 03-28-2025
			result += "<!-- Updated 03-28-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-28-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV KLYNE Q29 JHW LAGGS KBTV\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI IRK J26 JOT J146 GIJ J554 JHW LAGGS KBTV\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK IZAAC Q30 VLKNN THRSR ODF KONGO Q145 HVQ Q145 FOXEE JHW LAGGS KBTV\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV ROD DJB JHW LAGGS KBTV\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-27-2025
			result += "<!-- Verified with ATCSCC on 03-27-2025 -->";
			result += "<br/>MH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI FAK AML Q221 BIGEO J49 ALB KBTV\" readonly>";
			break;
		case "BUF": // DFW-BUF // Updated 07-17-2025
			result += "<!-- Updated 07-17-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-27-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD DJB DKK KBUF\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF J8 STL BVT CRL FARGN KBUF\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK SQS BNA DACOS APE YTOWN JHW KBUF\" readonly>";
			result += "<br/><br/>North via JOT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC SGF BAYLI J181 BDF J26 JOT J146 GIJ J554 CRL FARGN KBUF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT PXV ROD JHW KBUF\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-27-2025
			result += "<!-- Verified with ATCSCC on 03-27-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD DJB DKK KBUF\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV ROD DJB DKK KBUF\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB HITMN Q139 RINTE DJB DKK KBUF\" readonly>";
			break;
		case "BUR": // DFW-BUR // Updated 03-30-2025
			result += "<!-- Updated 03-30-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX J74 SJN J231 DRK J6 EED JANNY5 KBUR\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM J4 BXK PHRED THRNE4 KBUR\" readonly>";
			result += "<br/>North via CIM: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM MMB CIM J96 DRK J6 EED JANNY5 KBUR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI J66 EWM J4 BXK J212 DECAS J65 PMD LYNXX8 KBUR\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-27-2025
			result += "<!-- Verified with ATCSCC on 03-27-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX J74 SJN J231 DRK J6 EED JANNY5 KBUR\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J6 EED JANNY5 KBUR\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 TFD J212 PSP V16 PDZ POM VNY KBUR\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J50 TFD J212 PSP V16 PDZ POM VNY KBUR\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J50 TFD J212 PSP V16 PDZ POM VNY KBUR\" readonly>";
			break;
		case "BWI": // DFW-BWI // Updated 04-19-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-19-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR CJAAE RAVNN8 KBWI\" readonly>"; // CDR 0P
			result += "<br/><br/>North <span style=\"color:green\">(Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD APE KEMAN ANTHM5 KBWI\" readonly>"; // CDR J3
			result += "<br/>South <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR KBLER KELLN Q58 PEETT THHMP RAVNN8 KBWI\" readonly>"; // CDR WV
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL9 TXK MEM BNA BKW J213 KERRE CSN RIPKN2 KBWI\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
			result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR CJAAE RAVNN8 KBWI\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 SITTR CJAAE RAVNN8 KBWI\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA SWAPP Q34 SITTR CJAAE RAVNN8 KBWI\" readonly>";
			result += "<br/>J3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD APE KEMAN ANTHM5 KBWI\" readonly>";
			result += "<br/>LT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD APE KEMAN ANTHM5 KBWI\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 OGRAE GOOOB THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 CREEP AIR KEMAN ANTHM5 KBWI\" readonly>";
			result += "<br/>VS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q56 KELLN Q58 PEETT THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/>WB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR CJAAE RAVNN8 KBWI\" readonly>";
			result += "<br/>WC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA TEEEM Q99 OGRAE GOOOB THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/>WM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO KBLER KELLN Q58 PEETT THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/>WV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR KBLER KELLN Q58 PEETT THHMP RAVNN8 KBWI\" readonly>";
			break;
		case "BZN": // DFW-BZN // Updated 03-30-2025
			result += "<!-- Updated 03-30-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 03-30-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KDFW HUDAD2 HUDAD PNH J17 PUB CHE J163 OCS BPI TOCUD LOSST1 KBZN\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW IFI HYS MCK RAP J151 BIL SUBKY1 KBZN\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS DBL OCS BPI TOCUD LOSST1 KBZN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI J65 CME J15 TANER MTJ OCS LVM KBZN\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 03-30-2025
			result += "<!-- Verified with ATCSCC on 03-30-2025 -->";
			break;
		case "CAE": // DFW-CAE // Updated 03-30-2025
			result += "<!-- Updated 03-30-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR IRQ KCAE\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB TOI MCN KCAE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 SOLDO ELD SQS VUZ IRQ KCAE\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-30-2025
			result += "<!-- Verified with ATCSCC on 03-30-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR IRQ KCAE\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VLKNN THRSR IRQ KCAE\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN THRSR WANSA KCAE\" readonly>";
			break;
		case "CAK": // DFW-CAK // Updated 01-22-2025
			result += "<!-- Updated 01-22-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV CVG APE HUUVR KCAK\" readonly>";
			break;
		case "CHS": // DFW-CHS // Updated 09-05-2025
			result += "<!-- Updated 09-05-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK MHZ MERDN Q184 ARNNY FRDDO NOKIE DEQUE BAGGY3 KCHS\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC MEM J66 RMG IRQ OSPRI7 KCHS\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA MCB J50 CEW J2 DEFUN KJ06Q AMG SAV BAGGY3 KCHS\" readonly>";
			result += "<br/><br/>North via BNA<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG J46 VXV DEFFN OSPRI7 KCHS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-30-2025
			result += "<!-- Verified with ATCSCC on 03-30-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE DEQUE BAGGY3 KCHS\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEMFS Q116 VLKNN IRQ OSPRI7 KCHS\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN MGMRY NOKIE DEQUE BAGGY3 KCHS\" readonly>";
			break;
		case "CID": // DFW-CID // Updated 03-30-2025
			result += "<!-- Updated 03-30-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW GRABE8 OKM KCID\" readonly>"; // CDR 0P
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J101 STL IOW KCID\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD CDS SLN DSM KCID\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 OKM KCID\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-30-2025
			result += "<!-- Verified with ATCSCC on 03-30-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW GRABE8 OKM KCID\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT KCID\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 IRK KCID\" readonly>";
			break;
		case "CLE": // DFW-CLE // Updated 08-25-2025
			result += "<!-- Updated 08-25-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV DRUGA ROKNN4 KCLE\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC SGF J8 STL J110 VHP TALKN ROKNN4 KCLE\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS HITMN Q139 IIU CVG DRUGA ROKNN4 KCLE\" readonly>";
			result += "<br/><br/>NW Arrival<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF BAYLI PIA JOT J146 GIJ J554 BENJO BRWNZ4 KCLE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV ROD KCLE\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-30-2025
			result += "<!-- Verified with ATCSCC on 03-30-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV DRUGA ROKNN4 KCLE\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV DRUGA ROKNN4 KCLE\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM PXV DRUGA ROKNN4 KCLE\" readonly>";
			break;

// TODO CLL

		case "CLT": // DFW-CLT // Updated 06-03-2025 // Mandatory Routes checked
			result += "<!-- Updated 06-03-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>"; // CDR 0P
			result += "<br/><br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB J50 CEW ALLMA ISUZO CHECR STOCR4 KCLT\" readonly>"; // CDR FP
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA TAZZA FILPZ4 KCLT\" readonly>"; // CDR 1N
			result += "<br/><b>To get a bit farther north, replace ARG with KM42K ..RZC KM42K BNA..<\/b>";
			// result += "<br/><br/>CLT NO FILPZ PARQR<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB J50 CEW ALLMA ISUZO CHECR STOCR4 KCLT\" readonly>";
			// result += "<br/>CLT NO JONZE<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH LSU MERDN JAMMR THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SQS VUZ GQO SOT LIINN3 KCLT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-03-2025
			result += "<!-- Verified with ATCSCC on 06-03-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH LSU MERDN JAMMR THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/>FP<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB J50 CEW ALLMA ISUZO CHECR STOCR4 KCLT\" readonly>";
			result += "<br/>NJ<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM BNA TAZZA FILPZ4 KCLT\" readonly>";
			break;
		case "CMH": // DFW-CMH // Updated 04-08-2025
			result += "<!-- Updated 04-08-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV JUDDI JAKTZ2 KCMH\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP JADUB DUBLN1 KCMH\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS BNA GETTA JAKTZ2 KCMH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT MEM BWG HNN TASKE BREMN KCMH\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-08-2025
			result += "<!-- Verified with ATCSCC on 04-08-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV GETTA JAKTZ2 KCMH\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV GETTA JAKTZ2 KCMH\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM J29 PXV GETTA JAKTZ2 KCMH\" readonly>";
			break;
		case "CNW": // DFW-CNW // Updated 04-08-2025
			result += "<!-- Updated 04-08-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 ACT KCNW\" readonly>";
			break;
		case "COS": // DFW-COS // Updated 05-06-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-06-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-08-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL LAA OZZZY5 KCOS\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 TBE DBRY5 KCOS\" readonly>";
			result += "<br/><b style=\"color:orange\">As of 05-06-2025 Fkeys throws a Mando Route violation for HUDAD dptrs to ZDV, but ok to file for wx dev<\/b>";
			result += "<br/>West via ABQ: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN CME ABQ J13 ALS DBRY5 KCOS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 PNH J17 TBE DBRY5 KCOS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-06-2025
			result += "<!-- Verified with ATCSCC on 05-06-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 TBE DBRY5 KCOS\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL LAA PUB FSHER DBRY5 KCOS\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY LLO ABI J17 TBE DBRY5 KCOS\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF BGS PNH J17 TBE DBRY5 KCOS\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME CNX ALS DBRY5 KCOS\" readonly>";
			break;
		case "COU": // DFW-COU // Updated 04-08-2025
			result += "<!-- Updated 04-08-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-08-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF KCOU\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J180 FTZ KCOU\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J87 BUM KCOU\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J98 SGF KCOU\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-08-2025
			result += "<!-- Verified with ATCSCC on 04-08-2025 -->";
			break;

// TODO CPR

		case "CRP": // DFW-CRP // Updated 04-08-2025
			result += "<!-- Updated 04-08-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 SAT J25 CRP KCRP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 SAT J25 CRP KCRP\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-08-2025
			result += "<!-- Verified with ATCSCC on 04-08-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT J25 CRP KCRP\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP IAH J29 CRP KCRP\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT JCT SAT J25 CRP KCRP\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN WUNIL SJT JCT SAT J25 CRP KCRP\" readonly>";
			break;
		case "CVG": // DFW-CVG // Updated 03-25-2025
			result += "<!-- Updated 03-25-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PENBE TERGE SARGO4 KCVG\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC FAM TERGE SARGO4 KCVG\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN GQO VXV JAKIE6 KCVG\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV IIU FLM KCVG\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-21-2025
			result += "<!-- Verified with ATCSCC on 08-21-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PENBE TERGE SARGO4 KCVG\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG TERGE SARGO4 KCVG\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM J29 TINGS TERGE SARGO4 KCVG\" readonly>";
			break;
		case "CYS": // DFW-CYS // Updated 04-08-2025
			result += "<!-- Updated 04-08-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL KCYS\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH LAA AKO KCYS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW LBL KCYS\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-08-2025
			result += "<!-- Verified with ATCSCC on 04-08-2025 -->";
			break;
		case "DAB": // DFW-DAB // Updated 04-08-2025
			result += "<!-- Updated 04-08-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB J50 CEW J2 DEFUN CABLO GNV KDAB\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI J20 MGM YANTI KYLEG TTHOR3 KDAB\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN CABLO GNV KDAB\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC J20 MGM SZW OMN KDAB\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-08-2025
			result += "<!-- Verified with ATCSCC on 04-08-2025 -->";
			break;
		case "DAY": // DFW-DAY // Updated 04-09-2025
			result += "<!-- Updated 04-09-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV SHB RID KDAY\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS HITMN Q139 IIU KDAY\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL J24 VHP KDAY\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX4 TUL J98 SGF J8 STL J24 VHP KDAY\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-09-2025
			result += "<!-- Verified with ATCSCC on 04-09-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV SHB RID KDAY\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV SHB RID KDAY\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM J29 PXV SHB RID KDAY\" readonly>";
			break;
		case "DCA": // DFW-DCA // Updated 05-06-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-06-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR TRUPS5 KDCA\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL J24 VHP APE J30 LUISE FRDMM6 KDCA\" readonly>"; // Based on CDR J3
			result += "<br/><b style=\"color:orange\">As of 05-06-2025 Fkeys throws Mandatory Route violation unless ..VHP J80 AIR J34 BUCKO.. but this route is ok to file<\/b>";
			result += "<br/><br/>South via VUZ<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>"; // CDR WV
			result += "<br/>South via CEW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA TEEEM Q109 PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>"; // CDR WC
			result += "<br/><br/>COWBOY EAST 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>"; // CDR VS
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK J131 PXV J78 HVQ ESL DRUZZ AML KDCA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-06-2025
			result += "<!-- Verified with ATCSCC on 05-06-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA SWAPP Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>J3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD APE J30 LUISE FRDMM6 KDCA\" readonly>";
			result += "<br/>LT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD APE J30 LUISE FRDMM6 KDCA\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 CREEP OTMAN J30 LUISE FRDMM6 KDCA\" readonly>";
			result += "<br/>VS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>WB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>WC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA TEEEM Q109 PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>WM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>WV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			break;
		case "DEN": // DFW-DEN // Updated 04-09-2025
			result += "<!-- Updated 04-09-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE HALEN NIIXX4 KDEN\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ZIGEE NIIXX4 KDEN\" readonly>"; // CDR 1W
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA END GCK KIISS CLASH5 KDEN\" readonly>";
			// result += "<br/>West: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN TXO TCC ZIGEE NIIXX4 KDEN\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST CNM CME CNX ABQ GNDLA TBARR4 KDEN\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST CNM CME CNX ABQ GNDLA TBARR4 KDEN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 ROLLS LBL LAA QUAIL1 KDEN\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 ROLLS GCK DANDD1 KDEN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-27-2025
			result += "<!-- Verified with ATCSCC on 07-27-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE HALEN NIIXX4 KDEN\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT BGS PNH ZIGEE NIIXX4 KDEN\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ZIGEE NIIXX4 KDEN\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF BGS PNH ZIGEE NIIXX4 KDEN\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME CNX GNDLA TBARR4 KDEN\" readonly>";
			result += "<br/>GC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX GNDLA TBARR4 KDEN\" readonly>";
			break;

// TODO DLH

		case "DRO": // DFW-DRO // Updated 04-09-2025
			result += "<!-- Updated 04-09-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD YACUL DRO KDRO\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM CRUSR EZEEE CIM KDRO\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN CME CNX KA33U DRO KDRO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WORTH9 ABI LBB IMMAS ESPAN KDRO\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-09-2025
			result += "<!-- Verified with ATCSCC on 04-09-2025 -->";
			break;
		case "DSM": // DFW-DSM // Updated 05-16-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-16-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 DSM KDSM\" readonly>"; // CDR 0P
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM J21 ICT PWE KDSM\" readonly>";
			result += "<br/>East: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC SGF HLV IRK KDSM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J25 DSM KDSM\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-16-2025
			result += "<!-- Verified with ATCSCC on 05-16-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 DSM KDSM\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT SGF MCI J25 DSM KDSM\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT PWE KDSM\" readonly>";
			break;
		case "DTW": // DFW-DTW // Updated 09-23-2025
			result += "<!-- Updated 09-23-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV WWODD HANBL3 KDTW\" readonly>"; // CDR 0P
			result += "<br/></br>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL J19 RBS GIJ HOSSA HAYLL3 KDTW\" readonly>"; // CDR MZ
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 KONGO Q145 HVQ Q147 JAMOX KLYNK3 KDTW\" readonly>";
			result += "<br/></br>North via BAE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J87 IRK IOW DBQ BAE PORZL RKCTY2 KDTW\" readonly>";
			result += "<br/>South via VUZ<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN GQO SMTTH Q67 HNN JAMOX KLYNK3 KDTW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV VHP FWA KDTW\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J87 IRK IOW DBQ BAE KDTW\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-23-2025
			result += "<!-- Verified with ATCSCC on 09-23-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV WWODD HANBL3 KDTW\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV WWODD HANBL3 KDTW\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM J29 PXV WWODD HANBL3 KDTW\" readonly>";
			result += "<br/>MZ<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 TUL J87 IRK IOW DBQ BAE PORZL RKCTY2 KDTW\" readonly>";
			break;
		case "ECP": // DFW-ECP // Updated 04-09-2025
			result += "<!-- Updated 04-09-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-09-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB J50 CEW J2 DEFUN CUGAR KECP\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE SQS MEI DEFUN KECP\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-09-2025
			result += "<!-- Verified with ATCSCC on 04-09-2025 -->";
			break;
		case "EGE": // DFW-EGE // Updated 04-09-2025
			result += "<!-- Updated 04-09-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE SELLS J154 AVVVS HUGGS CULCH KEGE\" readonly>";
			result += "<br/><br/>West (Max FL280 at AVVVS): <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH LAA HGO AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA ICT HYS GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/><br/>SKI COUNTRY 1: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO ABQ KA36S BUGGG EKR RLG KEGE\" readonly>";
			result += "<br/>SKI COUNTRY 1: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW J21 ICT HYS GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI J17 FQF AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-09-2025
			result += "<!-- Verified with ATCSCC on 04-09-2025 -->";
			result += "<br/>AB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO ABQ KA36S BUGGG EKR RLG KEGE\" readonly>";
			result += "<br/>KC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/>KP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER HYS GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			break;
		case "ELP": // DFW-ELP // Updated 04-11-2025
			result += "<!-- Updated 04-11-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK LIFFT SAMMR3 KELP\" readonly>"; // CDR 0P
			result += "<br/><br/>North <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J26 CME SAMMR3 KELP\" readonly>"; // CDR 1N
			result += "<br/>NW Arrival: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J58 FTI J104 ONM J57 TCS J13 RUTER J86 ELP KELP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI J50 ELP KELP\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-11-2025
			result += "<!-- Verified with ATCSCC on 04-11-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK LIFFT SAMMR3 KELP\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J26 CME SAMMR3 KELP\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP KELP\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP KELP\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP KELP\" readonly>";
			break;
		case "EUG": // DFW-EUG // Updated 04-11-2025
			result += "<!-- Updated 01-22-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-11-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TCC J76 FTI J58 MLF ELY SLOWN LKV KEUG\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK GLL OCS BOI DSD KEUG\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-11-2025
			result += "<!-- Verified with ATCSCC on 04-11-2025 -->";
			break;
		case "EVV": // DFW-EVV // Updated 04-11-2025
			result += "<!-- Updated 04-11-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV KEVV\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC KM33G ARG PXV KEVV\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS BNA OWB KEVV\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV KEVV\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-11-2025
			result += "<!-- Verified with ATCSCC on 04-11-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV KEVV\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV KEVV\" readonly>";
			break;
		case "EWR": // DFW-EWR // Updated 07-30-2025
			result += "<!-- Updated 07-30-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>"; // CDR LT
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 DORET J584 SLT FQM3 KEWR\" readonly>"; // CDR RD
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP BURGG Q22 UMBRE QUART PHLBO4 KEWR\" readonly>"; // CDR 0P
			result += "<br/><br/>BNA<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PHLBO4 KEWR\" readonly>"; // CDR WB
			result += "<br/>CEW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA TEEEM Q99 QUART PHLBO4 KEWR\" readonly>"; // CDR WC
			result += "<br/>MGM 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 QUART PHLBO4 KEWR\" readonly>"; // CDR M3
			result += "<br/>STL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>"; // CDR J3
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q22 UMBRE QUART PHLBO4 KEWR\" readonly>"; // CDR VS
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK MEM BNA BKW EKN IHD PSB FQM FQM3 KEWR\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-30-2025
			result += "<!-- Verified with ATCSCC on 07-30-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP BURGG Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 GVE PHLBO4 KEWR\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>J3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>LT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 DORET J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 DORET J584 SLT FQM3 KEWR\" readonly>";
			result += "<br/>VS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>WB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PHLBO4 KEWR\" readonly>";
			result += "<br/>WC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA TEEEM Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>WM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>WV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 UMBRE QUART PHLBO4 KEWR\" readonly>";
			break;
		case "EYW": // DFW-EYW // Updated 04-11-2025
			result += "<!-- Updated 04-11-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA HRV Q105 BLVNS Y290 BAGGS PIKKR MARCI KARTR KRAKN GIGIH KEYW\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA MCB J50 CEW DEFUN KRAKN1 KEYW\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK MERDN MGMRY ACORI BULZI KRAKN1 KEYW\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV VUH L207 MUSYL PEGLG ALGAE MINOW M580 SHAQQ KRAKN1 KEYW\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-11-2025
			result += "<!-- Verified with ATCSCC on 04-11-2025 -->";
			break;
		case "FAR": // DFW-FAR // Updated 04-15-2025
			result += "<!-- Updated 04-15-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-15-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER LNK FSD FAR KFAR\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN PNH GCK HLC ONL KFAR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 IRW J21 ICT LNK FSD FAR KFAR\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-15-2025
			result += "<!-- Verified with ATCSCC on 04-15-2025 -->";
			break;
		case "FAT": // DFW-FAT // Updated 07-18-2025
			result += "<!-- Updated 07-18-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-15-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE FTI J58 ILC OAL KFAT\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM SSO J50 TFD J169 KOFFA DECAS J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL LAA BRK EKR J173 TCH J154 SPRUZ J158 MVA FRA KFAT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO FTI J58 ILC J198 KROST J148 OAL NIKOL FRA CZQ KFAT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-14-2025
			result += "<!-- Verified with ATCSCC on 04-14-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX J74 SJN J231 DRK J6 HEC PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J6 DRK J6 HEC PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 BLH J65 PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J50 BLH J65 PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J50 BLH J65 PMD J65 LANDO TTE ALTTA9 KFAT\" readonly>";
			break;
		case "FCA": // DFW-FCA // Updated 06-29-2025
		case "GPI": // DFW-GPI // Updated 06-29-2025
			result += "<!-- Updated 06-29-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-29-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW IFI GCK GLD SNY CZI BIL J13 GTF KGPI \" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC J15 TCH J9 DLN KGPI\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM J21 IRW IFI HLC MCK RAP J151 BIL J13 GTF KGPI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW J98 MMB LAA J20 FQF LAR MBW BOY HLN KGPI\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-29-2025
			break;
		case "FLL": // DFW-FLL // Updated 04-14-2025
			result += "<!-- Updated 04-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA HRV Q105 BLVNS Y290 BACCA VNECK TEEKY3 KFLL\" readonly>";
			result += "<br/><b style=\"color:orange\">FAA pref route includes OCHHO but route above is most common. Keeps flight within ZJX/ZMA<\/b>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA MCB J50 CEW J2 DEFUN TEEKY3 KFLL\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI MGM ACORI TEEKY3 KFLL\" readonly>";
			result += "<br/><br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV MUSYL LCHLH KELPP MINOW MARCI TEEKY3 KFLL\" readonly>";
			result += "<br/>E Coast: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN LGC YANTI Q89 PRMUS CUUDA3 KFLL\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH HRV Q105 BLVNS Y290 BACCA VNECK TEEKY3 KFLL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MCB CEW SZW PIE FORTL KFLL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-10-2025
			result += "<!-- Verified with ATCSCC on 06-10-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP HRV Q105 BLVNS Y290 OCHHO VNECK TEEKY3 KFLL\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEMFS DEFUN TEEKY3 KFLL\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH J86 LEV Y290 OCHHO VNECK TEEKY3 KFLL\" readonly>";
			break;
		case "FNT": // DFW-FNT // Updated 04-15-2025
			result += "<!-- Updated 04-15-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-15-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC FTZ RBS GIJ KFNT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 OKM RZC FTZ RBS GIJ KFNT\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-15-2025
			result += "<!-- Verified with ATCSCC on 04-15-2025 -->";
			break;
		case "FOE": // DFW-FOE // Updated 04-15-2025
			result += "<!-- Updated 04-15-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-15-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL KFOE\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW J21 ICT KFOE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW ICT KFOE\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-15-2025
			result += "<!-- Verified with ATCSCC on 04-15-2025 -->";
			break;
		case "FSD": // DFW-FSD // Updated 04-15-2025
			result += "<!-- Updated 04-15-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-15-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW J21 ICT LNK FSD KFSD\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH HLC OBH KFSD\" readonly>";
			result += "<br/>East: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC MCI OVR KFSD\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-15-2025
			result += "<!-- Verified with ATCSCC on 04-15-2025 -->";
			break;

// TODO FSM

		case "GEG": // DFW-GEG // Updated 04-15-2025
			result += "<!-- Updated 04-15-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-15-2025
			result += "<br/><br/>HUDAD/NRP: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 PUB CHE OCS J52 GEG KGEG\" readonly>";
			result += "<br/>LOWGN/NRP<input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE LAA J52 FQF CKW DBS MLP HILIE3 KGEG\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK CYS J13 BIL J136 MLP HILIE3 KGEG\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH CIM ALS J206 HBU J240 MTU TCH J15 BOI J517 KGEG\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH Q130 REANA ELY J523 REO J153 KGEG\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-15-2025
			result += "<!-- Verified with ATCSCC on 04-15-2025 -->";
			break;
		case "GGG": // DFW-GGG // Updated 04-15-2025
			result += "<!-- Updated 04-15-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL170):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH GGG KGGG\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW GARL5 GGG KGGG \" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-15-2025
			result += "<!-- Verified with ATCSCC on 04-15-2025 -->";
			break;
		case "GJT": // DFW-GJT // Updated 04-15-2025
			result += "<!-- Updated 04-15-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-15-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC KGJT\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW J98 MMB TOTOE LAA PUB J28 HBU V484 BATTZ KGJT\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO ABQ DVC JNC KGJT\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST CNM CME CNX J15 SINSY KGJT\" readonly>";
			result += "<br/>SKI COUNTRY 3: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX ABQ KA36S DVC JNC KGJT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 PNH ALS JNC KGJT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-14-2025
			result += "<!-- Verified with ATCSCC on 04-14-2025 -->";
			result += "<br/>AB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO ESPAN DVC JNC KGJT\" readonly>";
			result += "<br/>DV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK HELPS JNC KGJT\" readonly>";
			result += "<br/>GD<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA ICT GCK HELPS JNC KGJT\" readonly>";
			result += "<br/>KC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK PUB HBU JNC KGJT\" readonly>";
			result += "<br/>PD<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER GCK HELPS JNC KGJT\" readonly>";
			break;
		case "GPT": // DFW-GPT // Updated 04-14-2025
			result += "<!-- Updated 04-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP KGPT\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE OZIGE MEI KGPT\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 LSU KGPT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MEI KGPT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-14-2025
			result += "<!-- Verified with ATCSCC on 04-14-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP KGPT\" readonly>";
			result += "<br/>1S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH KGPT\" readonly>";
			break;
		case "GRK": // DFW-GRK // Updated 04-14-2025
			result += "<!-- Updated 04-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL180):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 ACT TENAT KGRK\" readonly>"; // CDR 0P
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 ACT TENAT KGRK\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-14-2025
			result += "<!-- Verified with ATCSCC on 04-14-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 ACT TENAT KGRK\" readonly>";
			result += "<br/>1W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX BWD KGRK\" readonly>";
			break;
		case "GRB": // DFW-GRB // Updated 04-15-2025
			result += "<!-- Updated 04-15-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-15-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J87 IRK DBQ DLL KGRB\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM J71 RBS JOT BAE KGRB\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-15-2025
			result += "<!-- Verified with ATCSCC on 04-15-2025 -->";
			break;
		case "GRR": // DFW-GRR // Updated 09-28-2025
			result += "<!-- Updated 09-28-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL J101 SPI JOT OBK J94 PMM KGRR\" readonly>"; // CDR 0P
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT ARG ENL BVT PMM KGRR\" readonly>";
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW PER MCI J26 IRK OBK J94 PMM KGRR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/>Non RNAV Dptr: <input style=\"width:75%\" value=\"KDFW TEX5 TUL J98 SGF J8 STL J35 SPI KGRR\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-28-2025
			result += "<!-- Verified with ATCSCC on 09-28-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL J101 SPI JOT OBK J94 PMM KGRR\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J101 SPI JOT OBK J94 PMM KGRR\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT BUM STL J101 SPI JOT OBK J94 PMM KGRR\" readonly>";
			break;
		case "GSO": // DFW-GSO // Updated 04-10-2025
			result += "<!-- Updated 04-10-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>"; // Not CDR 0P
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM GQO BURGG TRAKS4 KGSO\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB MGMRY THRSR BURGG TRAKS4 KGSO\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF J98 FAM J78 IIU OTONE TRAKS4 KGSO\" readonly>";
			result += "<br/>SE Arrival: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK IZAAC Q30 VLKNN THRSR IRQ CAE BLOCC2 KGSO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK MEM GQO SPA BROOK4 KGSO\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-08-2025
			result += "<!-- Verified with ATCSCC on 06-08-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM VXV GZG BROOK4 KGSO\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA VXV GZG BROOK4 KGSO\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN TWOUP BURGG TRAKS4 KGSO\" readonly>";
			break;
		case "GSP": // DFW-GSP // Updated 04-14-2025
			result += "<!-- Updated 04-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR BESTT WORXS2 KGSP\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC FSM ARG J46 VXV DAJPI RCTOR3 KGSP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC J20 MEI VUZ RMG KGSP\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-14-2025
			result += "<!-- Verified with ATCSCC on 04-14-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR BESTT WORXS2 KGSP\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA BALNN SPA KGSP\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN MGMRY THRSR BESTT WORXS2 KGSP\" readonly>";
			break;
		case "GUC": // DFW-GUC // Updated 04-15-2025
			result += "<!-- Updated 04-15-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-15-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 PUB J28 HBU KGUC\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE LAA PUB J28 HBU KGUC\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA TXO ESPAN DRO HBU KGUC\" readonly>";
			result += "<br/><br/>SKI COUNTRY 2: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK DAAYE KGUC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW J98 MMB LBL LAA PUB J28 HBU KGUC\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-14-2025
			result += "<!-- Verified with ATCSCC on 04-14-2025 -->";
			result += "<br/>ED<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE ESPAN HELPS KGUC\" readonly>";
			result += "<br/>KC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK DAAYE KGUC\" readonly>";
			result += "<br/>KP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER GCK DAAYE KGUC\" readonly>";
			result += "<br/>KW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA ICT GCK DAAYE KGUC\" readonly>";
			break;
		case "HDN": // DFW-HDN // Updated 04-15-2025
			result += "<!-- Updated 04-15-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-15-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK GLD DVV CHE KHDN\" readonly>"; // CDR KC
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC CIM HBU RIL EKR CHE KHDN\" readonly>";
			result += "<br/>SKI COUNTRY 3: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX ABQ KA36S EKR KHDN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW GCK GLD DVV CHE KHDN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-14-2025
			result += "<!-- Verified with ATCSCC on 04-14-2025 -->";
			result += "<br/>AB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE ESPAN DRO EKR KHDN\" readonly>";
			result += "<br/>KC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK GLD DVV CHE KHDN\" readonly>";
			result += "<br/>PH<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER HYS BFF LAR KHDN\" readonly>";
			break;
		case "HRL": // DFW-HRL // Updated 04-15-2025
			result += "<!-- Updated 04-15-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-15-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY CRP KHRL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ACT HOARY CRP KHRL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-14-2025
			result += "<!-- Verified with ATCSCC on 04-14-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT J25 CRP KHRL\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP IAH J29 CRP KHRL\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT JCT SAT J25 CRP KHRL\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN WUNIL SJT JCT SAT J25 CRP KHRL\" readonly>";
			break;
		case "HSV": // DFW-HSV // Updated 04-14-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-14-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS IRRTH KHSV\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM IRRTH KHSV\" readonly>"; // CDR 1N
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI IGB IRRTH KHSV\" readonly>"; // CDR 1S
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI VLKNN KHSV\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK J52 SQS DCU KHSV\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
			result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS IRRTH KHSV\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM IRRTH KHSV\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI IGB IRRTH KHSV\" readonly>";
			break;
		case "IAD": // DFW-IAD // Updated 04-14-2025
			result += "<!-- Updated 04-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 HITMN HVQ GIBBZ5 KIAD\" readonly>";
			result += "<br/><br/>North:<input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD APE AIR J162 MGW GIBBZ5 KIAD\" readonly>"; // CDR J3
			result += "<br/><br/>BNA<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 HITMN JARLO GIBBZ5 KIAD\" readonly>";
			result += "<br/>VUZ<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BURGG Q60 JAXSN DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK LIT MEM BWG HVQ DOCCS3 KIAD\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK SQS VUZ RMG SPA GSO FAK COATT5 KIAD\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL SGF STL J24 VHP J80 AIR J34 ESL KIAD\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-14-2025
			result += "<!-- Verified with ATCSCC on 04-14-2025 -->";
			result += "<br/>0P<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR GIBBZ5 KIAD\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 SITTR GIBBZ5 KIAD\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA SWAPP Q34 SITTR GIBBZ5 KIAD\" readonly>";
			result += "<br/>J3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD APE AIR J162 MGW GIBBZ5 KIAD\" readonly>";
			result += "<br/>LT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD APE AIR J162 MGW GIBBZ5 KIAD\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 POLYY Q99 OGRAE BZNGA DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 CREEP J80 AIR J162 MGW GIBBZ5 KIAD\" readonly>";
			result += "<br/>VS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q22 BURGG Q60 JAXSN DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/>WB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 HITMN JARLO GIBBZ5 KIAD\" readonly>";
			result += "<br/>WC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA TEEEM Q99 OGRAE BZNGA DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/>WM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 BURGG Q60 JAXSN DORRN CAVLR6 KIAD\" readonly>";
			result += "<br/>WV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BURGG Q60 JAXSN DORRN CAVLR6 KIAD\" readonly>";
			break;
		case "IAH": // DFW-IAH // Updated 04-14-2025
			result += "<!-- Updated 04-14-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DARTZ9 TORNN GUSHR3 KIAH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 TORNN RIICE1 KIAH\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-14-2025
			result += "<!-- Verified with ATCSCC on 04-14-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TORNN DRLLR5 KIAH\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP ZEEKK3 KIAH\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT JCT SAT TEJAS5 KIAH\" readonly>";
			result += "<br/>2E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH BDDAY PLANB ZEEKK3 KIAH\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN WUNIL SJT JCT SAT TEJAS5 KIAH\" readonly>";
			result += "<br/>3W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX LLO SAT TEJAS5 KIAH\" readonly>";
			break;
		case "ICT": // DFW-ICT // Updated 04-16-2025
			result += "<!-- Updated 04-16-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA HUSKA KICT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK KICT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-16-2025
			result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER KICT\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT SGF KICT\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT KICT\" readonly>";
			break;
		case "ILM": // DFW-ILM // Updated 04-17-2025
			result += "<!-- Updated 04-17-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-17-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KDFW TRYTN4 LOOSE MEM GQO SPA FAY ILM KILM\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK HARES MEI J20 MGM MCN VAN KILM\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC FAM J112 IIU PSK RDU KILM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC SQS VUZ RMG IRQ FLO KILM\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-17-2025
			result += "<!-- Verified with ATCSCC on 04-17-2025 -->";
			break;
		case "IND": // DFW-IND // Updated 04-16-2025
			result += "<!-- Updated 04-16-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT TERGE SMUKE3 KIND\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW GRABE8 OKM TUL J87 BUM HLV SPI JAAVE KOLTS2 KIND\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 HITMN HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV RACYR6 KIND\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-16-2025
			result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT TERGE SMUKE3 KIND\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG TERGE SMUKE3 KIND\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM TERGE SMUKE3 KIND\" readonly>";
			break;
		case "JAC": // DFW-JAC // Updated 04-16-2025
			result += "<!-- Updated 04-16-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-16-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH DBL OCS DNW KJAC\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KDFW LOWGN8 ROLLS TOTOE GLD BFF JYMBO DNW KJAC\" readonly>";
			result += "<br/>South via ABQ: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 ABQ J15 JNC BPI KJAC\" readonly>";
			result += "<br/>South via EWM: <input style=\"width:75%\" value=\"KDFW NELYN6 ACT INK J4 EWM RUTER J86 INW BCE J11 FFU HOMVA KJAC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 PNH J17 TBE CHE CKW DNW KJAC\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-16-2025
			result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
			break;
		case "JAN": // DFW-JAN // Updated 04-16-2025
			result += "<!-- Updated 04-16-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH MHZ KJAN\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH MCB KJAN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MHZ KJAN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-16-2025
			result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH KJAN\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM SQS KJAN\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB KJAN\" readonly>";
			break;
		case "JAX": // DFW-JAX // Updated 04-16-2025
			result += "<!-- Updated 04-16-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-16-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA MCB J50 CEW J2 DEFUN CABLO CAPPS MARQO3 KJAX\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI J20 MGM DUCHY OHDEA2 KJAX\" readonly>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA HRV Q105 REDFN Y280 REMIS PIE ORL POGIE2 KJAX\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 until LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN CABLO CAPPS MARQO3 KJAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MCB J50 CEW SZW KJAX\" readonly>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK SQS VUZ LGC MCN AMG KJAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-16-2025
			result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI MGMRY CABLO CAPPS MARQO3 KJAX\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEMFS Q116 VLKNN MGMRY CABLO CAPPS MARQO3 KJAX\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN CABLO CAPPS MARQO3 KJAX\" readonly>";
			break;
		case "JFK": // DFW-JFK // Updated 09-23-2025
			result += "<!-- Updated 09-23-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/></br>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>"; // CDR J3
			result += "<br/><b>Via DTW: .. <\/b><input style=\"width:21em\" value=\"STL J19 RBS GSH SVM J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR HRTWL Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>CEW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>MGM 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>MGM 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>VLKNN<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 EAKER MLC RZC STL BVT CRL JHW SFK LVZ LENDY8 KJFK\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-23-2025
			result += "<!-- Verified with ATCSCC on 09-23-2025 -->";
			result += "<br/>0P<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC ARG HITMN Q34 SITTR Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>J3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>LT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS PANDY Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>VS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>WC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA TEEEM Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>WM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>WV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			break;
		case "LAS": // DFW-LAS // Updated 04-18-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-18-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX ABI J50 ELP J86 INW HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW CIM RSK J64 TBC SQIRE RKSTR4 KLAS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 CNX ZUN PGS ISHEE2 KLAS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-18-2025
			result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			break;
		case "LAX": // DFW-LAX // Updated 04-18-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-18-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 ABQ J78 DRK GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST ELP J50 SSO BXK ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST ELP J50 SSO BXK ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 CNX J74 SJN J231 TNP BASET5 KLAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-18-2025
			result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>EE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX ONM PXR BXK J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			break;
		case "LAW": // DFW-LAW // Updated 04-18-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-18-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL160):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW KING4 SPS KLAW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 ADM KLAW\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-18-2025
			result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
			break;
		case "LBB": // DFW-LBB // Updated 04-18-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-18-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL300):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA KLBB\" readonly>"; // CDR 0P
			result += "<br/><br/>North <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH KLBB\" readonly>"; // CDR 1N
			result += "<br/>South <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT KLBB\" readonly>"; // CDR 1S
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 KLBB\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-18-2025
			result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA KLBB\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH KLBB\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT KLBB\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF BGS KLBB\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST KLBB\" readonly>";
			break;
		case "LCH": // DFW-LCH // Updated 04-18-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-18-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 BDDAY PLANB KLCH\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW DARTZ9 TORNN LFK KLCH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW GARL5 TYR LFK KLCH\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-18-2025
			result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
			break;
		case "LEX": // DFW-LEX // Updated 04-18-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-18-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 WAKOL BNA HYK KLEX\" readonly>"; // CDR 0P
			result += "<br/><br/>North (ZKC Avoid): <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV KLEX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J66 MEM BNA HYK KLEX\" readonly>"; // CDR 0P
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-18-2025
			result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 WAKOL BNA HYK KLEX\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV KLEX\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN VXV KLEX\" readonly>";
			break;
		case "LGA": // DFW-LGA // Updated 05-09-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-09-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // FAA pref route is not a good choice here
			result += "<br/><br/>NRP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>"; // CDR LT
			result += "<br/><b style=\"color:orange\">As of 04-18-2025 only two routes wont flag mandatory route violation: CDR 1P and CDR LT<\/b>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>"; // CDR J3
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP BURGG Q60 HURTS PROUD2 KLGA\" readonly>"; // CDR 1P
			result += "<br/><br/>CDR 0P<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PROUD2 KLGA\" readonly>"; // CDR WB
			result += "<br/><b style=\"color:orange\">As of 04-18-2025 LGA-DFW is the only city pair where CDR 0P is not the preferred route<\/b>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>"; // CDR VS
			result += "<br/>MGM 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>"; // CDR WM
			result += "<br/>VUZ<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>"; // CDR WV
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 TUL J98 SGF J8 STL J24 VHP WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-11-2025
			result += "<!-- Verified with ATCSCC on 09-11-2025 -->";
			result += "<br/>0P<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PROUD2 KLGA\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 GVE PROUD2 KLGA\" readonly>";
			result += "<br/>1P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP BURGG Q60 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>J3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/>LT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/>VS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>WB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PROUD2 KLGA\" readonly>";
			result += "<br/>WC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA TEEEM Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>WM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>WV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BURGG Q60 HURTS PROUD2 KLGA\" readonly>";
			break;
		case "LIT": // DFW-LIT // Updated 04-18-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-18-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL270):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT KLIT\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC FSM KLIT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK KLIT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-18-2025
			result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT KLIT\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC FSM KLIT\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH J101 LIT KLIT\" readonly>";
			break;
		case "LRD": // DFW-LRD // Updated 04-18-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-18-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL300):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 SAT KLRD\" readonly>"; // CDR 0P
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KDFW WSTEX2 DOSXX SJT KLRD\" readonly>";
			result += "<br/>East: <input style=\"width:75%\"; value=\"KDFW DARTZ9 TNV ELA VCT KLRD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 SAT KLRD\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-11-2025
			result += "<!-- Verified with ATCSCC on 09-11-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT KLRD\" readonly>";
			result += "<br/>1E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP IAH J29 PSX J22 LRD KLRD\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT JCT SAT J21 LRD KLRD\" readonly>";
			result += "<br/>2W<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN WUNIL SJT JCT SAT J21 LRD KLRD\" readonly>";
			break;
		case "MAF": // DFW-MAF // Updated 04-18-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-18-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL300):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN KMAF\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA UNEKE KMAF\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW NELYN6 ACT SJT KMAF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI KMAF\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-18-2025
			result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN KMAF\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH LBB KMAF\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT KMAF\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF KMAF\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST KMAF\" readonly>";
			break;
		case "MCI": // DFW-MCI // Updated 07-07-2025
			result += "<!-- Updated 07-07-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 TUL STASN WUTNG3 KMCI\" readonly>"; // CDR 0P
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM J21 ICT ZOURA WUTNG3 KMCI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL EMP JHAWK8 KMCI\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-18-2025
			result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 TUL STASN WUTNG3 KMCI\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT SGF NELVY MHOMS3 KMCI\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT ZOURA WUTNG3 KMCI\" readonly>";
			break;
		case "MCO": // DFW-MCO // Updated 04-18-2025
			result += "<!-- Updated 04-18-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-18-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA MCB J50 CEW J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA HRV Q105 REDFN Y280 CHRGE PRICY4 KMCO\" readonly>";
			result += "<br/>North via MGM: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS MGM DEEDA GRNCH5 KMCO\" readonly>";
			result += "<br/>North via VUZ: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS VUZ  THRSR ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV MUSYL PEGLG ALGAE DTSRJ CIGAR PRICY4 KMCO\" readonly>";
			result += "<br/><b style=\"color:orange\">As of 04-18-2025 There is no Full Overwater route that wont trigger mandatory route violation.<\/b>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH): <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MCB CEW OTK LEESE3 KMCO\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-18-2025
			result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MERDN DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN GRNCH5 KMCO\" readonly>";
			break;
		case "MDT": // DFW-MDT // Updated 04-16-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-16-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR ESL BAMMY T299 HAR KMDT\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN NIOLA Q40 MAULS MRB KMDT\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL J24 VHP ROD J152 HAR KMDT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV CVG AIR JST KMDT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-16-2025
			result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 SITTR ESL BAMMY T299 HAR KMDT\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 SITTR ESL BAMMY T299 HAR KMDT\" readonly>";
			break;
		case "MEM": // DFW-MEM // Updated 04-18-2025
			result += "<!-- Updated 04-18-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL290):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD HOBRK4 KMEM\" readonly>"; // CDR 0P
			result += "<br/><br/>North <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC BRBBQ3 KMEM\" readonly>"; // CDR 1N
			result += "<br/>South <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MEVEE HOBRK4 KMEM\" readonly>"; // CDR 1S
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC ELD UJM6 KMEM\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-08-2025
			result += "<!-- Verified with ATCSCC on 09-08-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD HOBRK4 KMEM\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC BRBBQ3 KMEM\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MEVEE HOBRK4 KMEM\" readonly>";
			break;
		case "MFE": // DFW-MFE // Updated 04-18-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-18-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW NELYN6 SAT J25 CRP KMFE\" readonly>"; // CDR 0P
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV PSX J29 CRP KMFE\" readonly>";
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT JCT SAT J25 CRP KMFE\" readonly>"; // CDR 1W
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 SAT J21 LRD V17 KMFE\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-11-2025
			result += "<!-- Verified with ATCSCC on 09-11-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT J25 CRP KMFE\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP IAH J29 CRP KMFE\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT JCT SAT J25 CRP KMFE\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN WUNIL SJT JCT SAT J25 CRP KMFE\" readonly>";
			break;
		case "MGM": // DFW-MGM // Updated 04-19-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-19-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO KMGM\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VUZ KMGM\" readonly>"; // CDR 1N
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN MGMRY KMGM\" readonly>"; // CDR 1S
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN MGMRY KMGM\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC J20 MGM KMGM\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
			result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO KMGM\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VUZ KMGM\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN MGMRY KMGM\" readonly>";
			break;
		case "MIA": // DFW-MIA // Updated 09-11-2025
			result += "<!-- Updated 09-11-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA MCB J50 CEW J2 DEFUN FROGZ4 KMIA\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS LDK LGC HONID FROGZ4 KMIA\" readonly>";
			result += "<br/><br/>North via BNA<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC ARG J46 VXV SPA QUIWE Q93 DEBRL CSTAL3 KMIA\" readonly>";
			result += "<br/><br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV MUSYL KELPP ALGAE MINOW M580 MARCI FROGZ4 KMIA\" readonly>";
			// result += "<br/>South via IAH<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH J86 LEV Y290 GAWKS FROGZ4 KMIA\" readonly>"; // CDR 1S
			result += "<br/><br/>COWBOY EAST (FL230 to LCH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH HRV Q105 BLVNS Y290 BAGGS RSW PALMZ2 KMIA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KDFW DALL3 EIC HRV Q105 BLVNS Y290 BAGGS RSW PALMZ2 KMIA\" readonly>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KDFW DALL3 EIC MCB J50 CEW SZW PIE PALMZ2 KMIA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-11-2025
			result += "<!-- Verified with ATCSCC on 09-11-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MERDN DEFUN FROGZ4 KMIA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH J86 LEV Y290 GAWKS FROGZ4 KMIA\" readonly>";
			break;
		case "MKE": // DFW-MKE // Updated 04-19-2025
			result += "<!-- Updated 09-05-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC SGF BAYLI JOT LEEDN GOPAC3 KMKE\" readonly>"; // CDR 0P
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 SIDAE VHP NUKIE PETTY KMKE\" readonly>";
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI DBQ JVL KMKE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J98 SGF BAYLI JOT OBK KMKE\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
			result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF BAYLI JOT LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J101 STL BAYLI JOT LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 JOT LEEDN GOPAC3 KMKE\" readonly>";
			break;
		case "MLB": // DFW-MLB // Updated 01-24-2025
			result += "<!-- Updated 01-24-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA MCB J50 CEW J2 DEFUN CABLO CTY OCF CERMO ORL KMLB\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 09-11-2025
			break;
		case "MLI": // DFW-MLI // Updated 01-24-2025
			result += "<!-- Updated 01-24-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 TUL J87 IRK KMLI\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
			result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC MZV KMLI\" readonly>";
			result += "<br/>1E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT MZV KMLI\" readonly>";
			break;
		case "MOB": // DFW-MOB // Updated 09-11-2025
			result += "<!-- Updated 09-11-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB SJI KMOB\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM MEI SJI KMOB\" readonly>"; // CDR 1N
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 SJI KMOB\" readonly>"; // CDR 1S
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 ACT J50 CEW KMOB\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-11-2025
			result += "<!-- Verified with ATCSCC on 09-11-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB SJI KMOB\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM MEI SJI KMOB\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 SJI KMOB\" readonly>";
			break;
		case "MRY": // DFW-MRY // Updated 04-19-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-19-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM J4 SSO J50 TFD J212 DECAS J65 PMD MAKRS BSR KMRY\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO FTI J58 RSK ILC KITTN KATTS Q136 OAL FRA SNS KMRY\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST ELP J50 BLH PSP LAX RZS J501 BSR KMRY\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST ELP J50 BLH PSP LAX RZS J501 BSR KMRY\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-19-2025
			result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
			break;
		case "MSN": // DFW-MSN // Updated 04-19-2025
			result += "<!-- Updated 04-19-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-19-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC SGF MZV KMSN\" readonly>"; // CDR 0P
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J101 STL PIA KMSN\" readonly>";
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 DSM DBQ KMSN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 OKM IRK KMSN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-13-2025
			result += "<!-- Verified with ATCSCC on 09-13-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC MZV KMSN\" readonly>";
			result += "<br/>1E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT MZV KMSN\" readonly>";
			break;
		case "MSO": // DFW-MSO // Updated 07-17-2025
			result += "<!-- Updated 07-17-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 PUB HAHNS QUIRT WAIDE KMSO\" readonly>";
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA END HLC BFF BIL J34 HLN KMSO\" readonly>";
			result += "<br/>West/HUDAD<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC J15 TCH PIH LKT KMSO\" readonly>";			
			result += "<br/>West/KATZZ<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX J15 RSK DVC PUC TCH PIH LKT KMSO\" readonly>";
			result += "<br/><br/>East via MCI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI J41 OVR J151 BIL J136 HLN KMSO\" readonly>";
			result += "<br/>West via ELP (FL220 to SAT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST ELP J86 INW CORKR J11 TCH PIH LKT KMSO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 PNH J17 PUB DBL J206 OCS J52 LKT KMSO\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 07-17-2025
			break;
		case "MSP": // DFW-MSP // Updated 09-28-2025
			result += "<!-- Updated 09-28-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 09-28-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J101 STL IOW MNOSO BLUEM4 KMSP\" readonly>";
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM TOTOE GCK HLC OBH FSD SSWAN TORGY3 KMSP\" readonly>";
			result += "<br/><b>HUDAD Dptr: <input style=\"width:17em\" value=\"KDFW HUDAD2 HUDAD PNH TOTOE\" readonly> ..<\/b>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J25 DSM MCW KASPR7 KMSP\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-28-2025
			result += "<!-- Verified with ATCSCC on 09-28-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER PWE OVR ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT SGF J41 OVR ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT PWE OVR ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/>K2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER LNK FSD SSWAN TORGY3 KMSP\" readonly>";
			break;
		case "MSY": // DFW-MSY // Updated 09-11-2025
			result += "<!-- Updated 09-11-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP LSU AWDAD1 KMSY\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MHZ MCB TRSSH1 KMSY\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH AWDAD1 KMSY\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MCB KMSY\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-11-2025
			result += "<!-- Verified with ATCSCC on 09-11-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP LSU AWDAD1 KMSY\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM J35 MCB TRSSH1 KMSY\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH AWDAD1 KMSY\" readonly>";
			break;
		case "MTJ": // DFW-MTJ // Updated 04-28-2025
			result += "<!-- Updated 04-28-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-28-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS HBU KMTJ\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE FTI ESPAN KMTJ\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK PUB MTJ KMTJ\" readonly>"; // CDR KC
			result += "<br/><br/>SKI COUNTRY 2: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK HELPS KMTJ\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-28-2025
			result += "<!-- Verified with ATCSCC on 04-28-2025 -->";
			result += "<br/>AB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC FTI MTJ KMTJ\" readonly>";
			result += "<br/>EM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE ESPAN KMTJ\" readonly>";
			result += "<br/>KC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK PUB MTJ KMTJ\" readonly>";
			result += "<br/>KP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER GCK HELPS KMTJ\" readonly>";
			result += "<br/>KW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA ICT GCK HELPS KMTJ\" readonly>";
			break;
		case "MYR": // DFW-MYR // Updated 04-28-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-28-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN QUIWE FLO CRE KMYR\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM GQO SPA FLO CRE KMYR\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CATLN MGMRY IRQ CAE FLO CRE KMYR\" readonly>";
			result += "<br/><br/>ZME/ZTL Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA SAV CHS KMYR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK J52 SQS VUZ IRQ CAE FLO CRE KMYR\" readonly>"; // CDR 0P
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-28-2025
			result += "<!-- Verified with ATCSCC on 04-28-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN QUIWE FLO CRE KMYR\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI CATLN MGMRY IRQ CAE FLO CRE KMYR\" readonly>";
			break;
		case "OKC": // DFW-OKC // Updated 04-28-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-28-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL280):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA IRW KOKC\" readonly>"; // CDR 0P
			result += "<br/><br/>Low Level: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM V17 IRW KOKC\" readonly>";
			result += "<br/>West for Wx: <input style=\"width:75%\" value=\"KDFW KING5 SPS GIMLE YUCKS3 KOKC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 ADM J21 IRW KOKC\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-09-2025
			result += "<!-- Verified with ATCSCC on 04-09-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA IRW KOKC\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT RZC TUL GULLI3 KOKC\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD CDS HBR IRW KOKC\" readonly>";
			break;
		case "OMA": // DFW-OMA // Updated 03-28-2025
			result += "<!-- Updated 03-28-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER HTHWY TIMMO1 KOMA\" readonly>"; // CDR 0P
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI STJ MARWI4 KOMA\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW IFI KK48A HLC GRI HOWRY3 KOMA\" readonly>";
			result += "<br/><br/>East via SGF: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC SGF IRK LMN MARWI4 KOMA\" readonly>";
			result += "<br/>West via PNH: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH GCK HLC GRI HOWRY3 KOMA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J25 MCI STJ MARWI4 KOMA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-25-2025
			result += "<!-- Verified with ATCSCC on 03-25-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 ZEMMA PER HTHWY TIMMO1 KOMA\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT SGF J41 MCI STJ MARWI4 KOMA\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT HTHWY TIMMO1 KOMA\" readonly>";
			break;
		case "ONT": // DFW-ONT // Updated 07-08-2025
			result += "<!-- Updated 07-08-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 BXK PHRED SCBBY2 KONT\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 ABQ J78 DRK DAFNY SCBBY2 KONT\" readonly>";
			result += "<br/>North via MMB<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW MMB KENTO Q176 CIM J96 DRK DAFNY SCBBY2 KONT\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-08-2025
			result += "<!-- Verified with ATCSCC on 07-08-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 BXK PHRED SCBBY2 KONT\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 DRK DAFNY SCBBY2 KONT\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 SSO J4 BXK PHRED SCBBY2 KONT\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J50 SSO J4 BXK PHRED SCBBY2 KONT\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J50 SSO J4 BXK PHRED SCBBY2 KONT\" readonly>";
			break;
		case "ORD": // DFW-ORD // Updated 05-26-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-26-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF WELTS TRTLL6 KORD\" readonly>";
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J180 FTZ TRTLL6 KORD\" readonly>"; // CDR 1E
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>"; // CDR KK
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL J87 IRK BDF8 KORD\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-26-2025
			result += "<!-- Verified with ATCSCC on 05-26-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW GRABE8 OKM EOS WELTS SHAIN2 KORD\" readonly>";
			result += "<br/>1E<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J180 FTZ TRTLL6 KORD\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 IRK BENKY6 KORD\" readonly>";
			result += "<br/>JV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 WAKOL BNA HELUB Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
			result += "<br/>KK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI J26 IRK BENKY6 KORD\" readonly>";
			result += "<br/>MS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC SGF WELTS TRTLL6 KORD\" readonly>";
			break;
		case "ORF": // DFW-ORF // Updated 04-28-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-28-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR HRTWL Q54 NUTZE DRONE DRONE2 KORF\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC FAM J78 HVQ J24 MOL TERKS2 KORF\" readonly>";
			result += "<br/>North/Avoid ZKC<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 MAULS MOL TERKS2 KORF\" readonly>"; // CDR 1N
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q64 HRTWL Q54 NUTZE DRONE DRONE2 KORF\" readonly>"; // CDR 1S
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 TXK LIT MEM BNA BKW MOL TERKS2 KORF\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-28-2025
			result += "<!-- Verified with ATCSCC on 04-28-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR HRTWL Q54 NUTZE DRONE DRONE2 KORF\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 MAULS MOL TERKS2 KORF\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN Q64 HRTWL Q54 NUTZE DRONE DRONE2 KORF\" readonly>";
			break;
		case "PBI": // DFW-PBI // Updated 08-06-2025
			result += "<!-- Updated 08-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA HRV Q105 BLVNS Y290 GAWKS VUUDU1 KPBI\" readonly>"; // CDR 0P
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA MCB J50 CEW J2 DEFUN VUUDU1 KPBI\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK MERDN ACORI VUUDU1 KPBI\" readonly>";
			result += "<br/><br/>COWBOY EAST 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN VUUDU1 KPBI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MCB J50 CEW SZW TAY CRG OMN MLB STOOP3 KPBI\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-06-2025
			result += "<!-- Verified with ATCSCC on 08-06-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK MERDN DEFUN VUUDU1 KPBI\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MERDN DEFUN VUUDU1 KPBI\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN VUUDU1 KPBI\" readonly>";
			break;
		case "PDX": // DFW-PDX // Updated 01-27-2025
			result += "<!-- Updated 01-27-2025 -->";
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
		case "PHL": // DFW-PHL // Updated 08-06-2025
			result += "<!-- Updated 08-06-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PAATS4 KPHL\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD J152 JST BOJID4 KPHL\" readonly>"; // CDR J3
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>"; // CDR WV
			result += "<br/><br/>South/ZTL Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>"; // CDR WC
			result += "<br/><br/>COWBOY EAST 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA SWAPP Q34 GVE PAATS4 KPHL\" readonly>"; // CDR 1S
			result += "<br/>MGM 1<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>"; // CDR WM
			result += "<br/>MGM 3<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>"; // CDR M3
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL2 TXK MEM BNA BKW MOL GVE OTT KPHL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-06-2025
			result += "<!-- Verified with ATCSCC on 08-06-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA SWAPP Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>J3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>LT<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS Q29 CREEP BLISS J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>VS<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV J87 IAH J2 LCH J138 SJI Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>WB<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>WC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>WM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>WV<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			break;
		case "PHX": // DFW-PHX // Updated 03-29-2025
			result += "<!-- Updated 03-29-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM DRRVR PINNG1 KPHX\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TCC ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI J66 EWM J4 SSO SUNSS8 KPHX\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 03-29-2025
			result += "<!-- Verified with ATCSCC on 03-29-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>EE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX ONM DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>PE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK ELP DRRVR PINNG1 KPHX\" readonly>";
			break;
		case "PIT": // DFW-PIT // Updated 01-27-2025
			result += "<!-- Updated 01-27-2025 -->";
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
		case "PNS": // DFW-PNS // Updated 09-28-2025
			result += "<!-- Updated 09-28-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 09-28-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB SJI V241 PENSI KPNS\" readonly>"; // CDR 0P
			result += "<br/><b style=\"color:orange\">As of 2025-09-29, FAA uses V198 and Fkeys MR use V241 but it's literally the same airway<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MHZ SJI V241 PENSI KPNS\" readonly>";
			result += "<br/>South<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 SJI V241 PENSI KPNS\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 SJI V241 PENSI KPNS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MCB SJI V241 PENSI KPNS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-28-2025
			result += "<!-- Verified with ATCSCC on 09-28-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB SJI LOXLY V198 PENSI KPNS\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM MEI SJI LOXLY V198 PENSI KPNS\" readonly>";
			result += "<br/>1S<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 SJI LOXLY V198 PENSI KPNS\" readonly>";
			break;
		case "PSP": // DFW-PSP // Updated 09-17-2025
			result += "<!-- Updated 09-17-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 BXK J65 BLH SBONO1 KPSP\" readonly>"; // Based on CDR 0P
			result += "<br/><b style=\"color:orange\">As of 9-17-2025 CDR 0P uses DECAS SBONO1 KPSP - Clearance requested BLH arvl fix instead of DECAS SBONO1<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 ABQ J6 EED SBONO1 KPSP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KDFW CYOTE4 CNX J74 SJN DRK J6 EED SBONO1 KPSP\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-17-2025
			result += "<!-- Verified with ATCSCC on 09-17-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 BXK J212 DECAS SBONO1 KPSP\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 EED SBONO1 KPSP\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 SSO J4 BXK J212 DECAS SBONO1 KPSP\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J50 SSO J4 BXK J212 DECAS SBONO1 KPSP\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J50 SSO J4 BXK J212 DECAS SBONO1 KPSP\" readonly>";
			break;
		case "PUB": // DFW-PUB // Updated 01-27-2025
			result += "<!-- Updated 01-27-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW KDFW LOWGN8 ROLLS J52 LAA KPUB\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>4S: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF BGS PNH J17 KPUB\" readonly>";
			break;

// DFW-PVD skipped

		case "PWM": // DFW-PWM // Updated 01-27-2025
			result += "<!-- Updated 01-27-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD MFD CXR JHW Q84 CAM CDOGG4 KPWM\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF BAYLI J181 BDF J26 JOT J146 GIJ J554 CRL J554 JHW Q84 CAM CDOGG4 KPWM\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 RBV LGA BDR SCOGS3 KPWM\" readonly>";
			result += "<br/><br/>VUZ: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV LGA BDR SCOGS3 KPWM\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TOOD
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>MH (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI FAK AML Q221 BIGEO J49 ALB CAM CDOGG4 KPWM\" readonly>";
			break;
		case "RAP": // DFW-RAP // Updated 01-27-2025
			result += "<!-- Updated 01-27-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW BLECO8 IRW HLC KRAP\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 RAP KRAP\" readonly>";
			result += "<br/>East: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC PWE ONL J151 RAP KRAP\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "RDM": // DFW-RDM // Updated 01-27-2025
			result += "<!-- Updated 01-27-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TCC J76 FTI J58 MLF ELY J523 REO KRDM\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 BLD J92 BTY KENNO YERIN J92 FMG J5 LKV KRDM\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW END PENUT Q148 LEWOY LAR J54 BOI IMB ROAMS ARNOY KRDM\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "RDU": // DFW-RDU // Updated 01-27-2025
			result += "<!-- Updated 01-27-2025 -->";
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

		case "RIC": // DFW-RIC // Updated 09-13-2025
			result += "<!-- Updated 09-13-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 MAULS MOL SPIDR5 KRIC\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC FAM J78 IIU Q108 MAULS MOL SPIDR5 KRIC\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD IZAAC Q30 VLKNN RMG BURGG Q60 JAXSN KELCE DUCXS5 KRIC \" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL5 SQS VUZ GQO PSK FAK KRIC\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-13-2025
			result += "<!-- Verified with ATCSCC on 09-13-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 MAULS FAK KRIC\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA SWAPP Q34 MAULS FAK KRIC\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MEI BNA SWAPP Q34 MAULS FAK KRIC\" readonly>";
			break;
		case "RNO": // DFW-RNO // Updated 09-15-2025
			result += "<!-- Updated 09-15-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE FTI J58 RSK ILC MVA RYANN2 KRNO\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE ZAROS Q128  JSICA MVA RYANN2 KRNO\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK J50 ELP Q13 HOUZZ KENNO SCOLA1 KRNO\" readonly>";
			result += "<br/><br/>North via SLC<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS TOTOE LAA BRK EKR J173 TCH J154 BAM LLC ANAHO2 KRNO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO TCC J76 FTI J58 MLF MVA RYANN2 KRNO\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-15-2025
			result += "<!-- Verified with ATCSCC on 09-15-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC J76 FTI J58 RSK ILC MVA RYANN2 KRNO\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J58 RSK ILC MVA RYANN2 KRNO\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 RSK ILC MVA RYANN2 KRNO\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 RSK ILC MVA RYANN2 KRNO\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 RSK ILC MVA RYANN2 KRNO\" readonly>";
			break;
		case "ROC": // DFW-ROC // Updated 01-28-2025
			result += "<!-- Updated 01-28-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 JHW KROC\" readonly>"; // CDR 0P
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD KM27M SMTTH Q67 HNN AIR EWC JHW KROC\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J87 JOT J60 DJB JHW KROC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 JHW KROC\" readonly>";
			result += "<br/>1N: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV ROD KLYNE Q29 JHW KROC\" readonly>";
			break;

// ROW skipped
// RST skipped

		case "RSW": // DFW-RSW // Updated 09-06-2025
			result += "<!-- Updated 09-06-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP HRV Q105 BLVNS KOLBR TYNEE4 KRSW\" readonly>"; // CDR 0P
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB J50 CEW J2 DEFUN CABLO BULZI Q81 NICKI PLYER TYNEE4 KRSW\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS LDK LGC AMG CYNTA SHFTY6 KRSW\" readonly>";
			result += "<br/><br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV MUSYL LCHLH KELPP MINOW M580 SHAQQ TYNEE TYNEE4 KRSW\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL220 to IAH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN CABLO BULZI Q81 NICKI PLYER TYNEE4 KRSW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MCB J50 CEW SZW PIE PUMPP2 KRSW\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-06-2025
			result += "<!-- Verified with ATCSCC on 09-06-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP HRV Q105 BLVNS KOLBR TYNEE4 KRSW\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEMFS Q116 VLKNN MGMRY BULZI NICKI PLYER TYNEE4 KRSW\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH J86 LEV Y290 BLVNS KOLBR TYNEE4 KRSW\" readonly>";
			break;
		case "SAN": // DFW-SAN // Updated 05-29-2025
			result += "<!-- Updated 05-29-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 SSO GBN J2 HOGGZ LUCKI1 KSAN\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA RECKN ABQ J6 ZUN CHEAR PXR GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>Weekend/Holiday: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA KA21W TMACK GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			// result += "<br/>South: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP ALIBY J2 IPL TOPGN2 KSAN\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI J66 EWM J4 SSO J50 GBN J18 IPL BARET5 KSAN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-29-2025
			result += "<!-- Verified with ATCSCC on 05-29-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 SSO GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 ZUN CHEAR PXR GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>EE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX ONM SSO GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			break;
		case "SAT": // DFW-SAT // Updated 05-09-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-09-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL230):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JASPA7 WINDU QERVO2 KSAT\" readonly>"; // CDR 0P
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT TRVLL DNKIN1 KSAT\" readonly>";
			result += "<br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KDFW DARTZ BRDEN TORNN TNV IDU WEMAR KSAT\" readonly>";
			result += "<br/><b style=\"color:orange\">East only if hazardous weather prevents all western routes. Expect CDR1E but you can request this route<\/b>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW JPOOL7 ACT MARCS2 KSAT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-09-2025
			result += "<!-- Verified with ATCSCC on 05-09-2025-->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW JASPA7 WINDU QERVO2 KSAT\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP DAS CAAGE QERVO2 KSAT\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 DOSXX SJT TRVLL DNKIN1 KSAT\" readonly>";
			result += "<br/>2W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN WUNIL SJT TRVLL DNKIN1 KSAT\" readonly>";
			result += "<br/>3W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX DILLO POPPO1 KSAT\" readonly>";
			break;
		case "SAV": // DFW-SAV // Updated 09-27-2025
			result += "<!-- Updated 09-27-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"FORCK3 FORCK MHZ MERDN Q184 ARNNY FRDDO DBN V154 OCONE T408 LOTTS KSAV\" readonly>";
			result += "<br/><b>As of 09-28-2025, Pref route goes DBN DCT KSAV but crews are always rerouted via LOTTS<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM J66 RMG LOTTS SAV KSAV\" readonly>";
			result += "<br/>South/ZTL Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB CEW ALLMA KSAV\" readonly>";
			result += "<br/><br/>South/OW Gulf<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP HRV Q105 REDFN Y280 REMIS PIE CRG SAV KSAV\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MEI MGM MCN LOTTS SAV KSAV\" readonly>";
			// result += "<br/>(FL170 to TXK): <input style=\"width:75%\" value=\"KDFW DALL3 TXK J52 SQS VUZ MCN LOTTS SAV KSAV\" readonly>";			
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 09-27-2025
			result += "<!-- Verified with ATCSCC on 09-27-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MERDN Q184 ARNNY FRDDO KSAV\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VUZ MGMRY KSAV\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI Q56 CATLN MGMRY KSAV\" readonly>";
			break;
		case "SBA": // DFW-SBA // Updated 01-28-2025
			result += "<!-- Updated 01-28-2025 -->";
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

		case "SBP": // DFW-SBP // Updated 01-28-2025
			result += "<!-- Updated 01-28-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 ABQ J78 DRK J6 PMD FIM CNDOR CADAB KSBP\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX ABI J50 SSO J4 LAX RZS MQ KSBA\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW MMB KENTO Q176 CIM J96 GUP J8 EED J6 PMD FIM CNDOR CADAB KSBP\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 CNX J74 SJN J231 DRK J6 PMD FIM RZS MQO KSBP\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "SDF": // DFW-SDF // Updated 08-29-2025
			result += "<!-- Updated 08-29-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE BUMPY MBELL5 KSDF\" readonly>";
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC MOOCH MBELL5 KSDF\" readonly>"; // CDR 1N
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS BNA COBBZ LEDDL1 KSDF\" readonly>";
			result += "<br/><br/>North via STL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL JMONY JMONY2 KSDF\" readonly>";
			result += "<br/>South via VUZ<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS VUZ GQO GLAZR LEDDL1 KSDF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV KSDF\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-29-2025
			result += "<!-- Verified with ATCSCC on 08-29-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT MOOCH MBELL5 KSDF\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC MOOCH MBELL5 KSDF\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB J35 MEM BUMPY MBELL5 KSDF\" readonly>";
			break;
		case "SEA": // DFW-SEA // Updated 01-28-2025
			result += "<!-- Updated 01-28-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH KD48U MTU OGD PDT CHINS5 KSEA\" readonly>";
			result += "<br/><br/>North/East: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK LAR J175 DBS J52 LKT PDT CHINS5 KSEA\" readonly>";
			result += "<br/>South/West: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN CME J15 ABQ BCE J523 REO J153 BKE PDT CHINS5 KSEA\" readonly>";
			result += "<br/>North via ONL: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW ICT SLN ONL J151 RAP J151 BIL J34 MWH KSEA\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST CNM CME J15 BOI PDT CHINS5 KSEA\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST CNM CME J15 BOI PDT CHINS5 KSEA\" readonly>";
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

		case "SFO": // DFW-SFO // Updated 08-04-2025
			result += "<!-- Updated 08-04-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TCC J76 FTI J58 OAL INYOE DYAMD5 KSFO\" readonly>"; // CDR 0P
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN ELP Q4 SPTFR DECAS J65 PMD AVE MAKRS SERFR SERFR4 KSFO\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL LAA BRK EKR J173 TCH J154 BAM J32 LLC LEGGS BDEGA4 KSFO\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 RSK J58 OAL INYOE DYAMD5 KSFO\" readonly>"; // CDR 1S
			result += "<br/>COWBOY WEST 2 (FL220 to SAT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 RSK J58 OAL INYOE DYAMD5 KSFO\" readonly>"; // CDR 2S
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO TCC J76 FTI J58 ILC J198 MVA KSFO\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-04-2025
			result += "<!-- Verified with ATCSCC on 08-04-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC FTI J58 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J58 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 RSK J58 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 RSK J58 OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 RSK J58 OAL INYOE DYAMD5 KSFO\" readonly>";
			break;
		case "SGF": // DFW-SGF // Updated 01-29-2025
			result += "<!-- Updated 01-29-2025 -->";
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
		case "SHV": // DFW-SHV // Updated 01-29-2025
			result += "<!-- Updated 01-29-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH KSHV\" readonly>"; // CDR 0P
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 SOLDO KSHV\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 MRSSH KSHV\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC FSM TXK EIC KSHV\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LFK EMG KSHV\" readonly>";
			break;
		case "SJC": // DFW-SJC // Updated 06-22-2025
			result += "<!-- Updated 06-22-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TCC J76 FTI J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM J4 SSO J50 TFD J212 DECAS J65 PMD AVE MAKRS TROXX SILCN6 KSJC\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS DVC MLF J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			result += "<br/><br/>North/ZAB Avoid: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL PUB J28 MLF J80 ILC KNGRY RAZRR5 KSJC\" readonly>";
			result += "<br/>North via EKR: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL LAA BRK EKR J173 TCH J154 BAM JENSA Q138 RBUCL CHBLI BRIXX4 KSJC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO FTI J58 MLF MVA SAC PYE3 KSJC\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-16-2025
			result += "<!-- Verified with ATCSCC on 05-16-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC FTI J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 RSK J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 RSK J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 RSK J58 ILC KNGRY RAZRR5 KSJC\" readonly>";
			break;
		case "SLC": // DFW-SLC // Updated 06-30-2025
			result += "<!-- Updated 06-30-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC J12 HELPR JAZZZ1 KSLC\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL LAA JNC J12 HELPR JAZZZ1 KSLC\" readonly>"; // CDR 1N
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX J15 RSK DVC HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/><br/>North via BFF<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW IFI HYS HCT BFF J94 OCS CARTR1 KSLC\" readonly>";
			result += "<br/>South via ELP (FL220 to SAT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST ELP J86 INW CORKR J11 BCE QWENN6 KSLC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 PNH ALS JNC J12 HELPR SPANE8 KSLC\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-09-2025
			result += "<!-- Verified with ATCSCC on 05-09-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL LAA JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			break;
		case "SMF": // DFW-SMF // Updated 07-18-2025
			result += "<!-- Updated 07-18-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO FTI J58 MLF TATOO CRASY SLMMR5 KSMF\" readonly>"; // CDR 0P
			result += "<br/><br/>South Arvl<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TCC GUP J96 PKE J4 RUSTT BOILE J50 LANDO J65 EHF NURAY SUUTR4 KSMF\" readonly>";
			result += "<br/><br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ROLLS LBL LAA BRK EKR J173 TCH J154 BAM ANAHO SLMMR5 KSMF\" readonly>";
			result += "<br/>South via EWM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK J4 RUSTT BOILE J50 LANDO J65 EHF NURAY SUUTR4 KSMF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 TXO TCC J76 FTI J58 ILC J198 MVA J84 LIN CCR CCR2 KSMF\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-18-2025
			result += "<!-- Verified with ATCSCC on 07-18-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO TCC FTI J58 MLF TATOO CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J58 MLF TATOO CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J15 RSK J58 MLF TATOO CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF INK J15 RSK J58 MLF TATOO CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST PEQ CME J15 RSK J58 MLF TATOO CRASY SLMMR5 KSMF\" readonly>";
			break;
		case "SNA": // DFW-SNA // Updated 05-26-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-26-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 BXK EMLLD DSNEE6 KSNA\" readonly>"; // CDR 0P
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J74 SJN DRK HIMDU ROOBY3 KSNA\" readonly>";
			result += "<br/><br/>North via PNH<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 DRK HIMDU DSNEE6 KSNA\" readonly>"; // CDR 1N
			result += "<br/>South via JCT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 SSO J4 BXK EMLLD DSNEE6 KSNA\" readonly>"; // CDR 1S
			// result += "<br/>Weekend/Holiday: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN YORUB TCS J65 KOFFA EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 ABI EWM J4 BXK J212 PSP KAYOH8 KSNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-26-2025
			result += "<!-- Verified with ATCSCC on 05-26-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK EWM J4 BXK EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 DRK HIMDU DSNEE6 KSNA\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP J50 SSO J4 BXK EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP J50 SSO J4 BXK EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP J50 SSO J4 BXK EMLLD DSNEE6 KSNA\" readonly>";
			result += "<br/>EE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW KATZZ2 BRHMA CNX ONM SSO J4 BXK EMLLD DSNEE6 KSNA\" readonly>";
			break;
		case "SPS": // DFW-SPS // Updated 01-29-2025
			result += "<!-- Updated 01-29-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL080): </b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW KING4 SPS KSPS\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\" value=\"KDFW WSTEX2 WSTEX KSPS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			break;
		case "SRQ": // DFW-SRQ // Updated 01-29-2025
			result += "<!-- Updated 01-29-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP HRV Q105 REDFN Y280 CHRGE RAYZZ2 KSRQ\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP CREEM CEW J2 DEFUN BANGZ1 KSRQ\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH J86 LEV Y280 REDFN Y280 CHRGE RAYZZ2 KSRQ\" readonly>";
			result += "<br/>North: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEMFS THRSR HONID BANGZ1 KSRQ\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J138 SJI J2 DEFUN BANGZ1 KSRQ\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MHZ MGM SZW PIE KSRQ\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "STL": // DFW-STL // Updated 05-17-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-17-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF KAYLA3 KSTL\" readonly>"; // CDR 0P
			result += "<br/><br/>East <span style=\"color:red\">(Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT ARG BOOSH3 KSTL\" readonly>"; // CDR 1E
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL BUM KAYLA3 KSTL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 TUL SGF KOOOP1 KSTL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-17-2025
			result += "<!-- Verified with ATCSCC on 05-17-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF KAYLA3 KSTL\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT ARG BOOSH3 KSTL\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 ICT BUM KAYLA3 KSTL\" readonly>";
			break;
		case "STS": // DFW-STS // Updated 01-30-2025
			result += "<!-- Updated 01-30-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J72 GUP TBC J76 LAS BTY RUSME VNYRD1 KSTS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE FTI J58 MLF KATTS OAL YOSEM VNYRD1 KSTS\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN EWM J4 SSO J50 TFD J212 DECAS J65 EHF RGOOD VNYRD1 KSTS\" readonly>";
			result += "<br/><br/>COWBOY WEST 1 (FL220 to JCT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT FST CNM CME CNX BLD J92 OAL YOSEM VNYRD1 KSTS\" readonly>";
			result += "<br/>COWBOY WEST 2 (FL220 to SAT)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW NELYN6 HOARY SAT DLF FST CNM CME CNX BLD J92 OAL YOSEM VNYRD1 KSTS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			// result += "<br/><br/><b>CDRS</b>";
			break;

// todo SWF

		case "SYR": // DFW-SYR // Updated 04-16-2025
			result += "<!-- Updated 04-16-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-16-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ENL VHP DJB JHW Q29 GONZZ SYR KSYR\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL BVT CRL J554 JHW KSYR\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 KONGO Q71 PSB J59 SYR KSYR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT J131 PXV VHP ROD DJB JHW KSYR\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-16-2025
			result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J131 PXV ROD KLYNE Q29 GONZZ KSYR\" readonly>";
			result += "<br/>1N<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG PXV ROD KLYNE Q29 GONZZ KSYR\" readonly>";
			break;
		case "TLH": // DFW-TLH // Updated 01-30-2025
			result += "<!-- Updated 01-30-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB J50 CEW KTLH\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS MGM SZW KTLH\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW ARDIA7 CLL TNV LSU J2 CEW MAI KTLH\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN KTLH\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB J50 CEW KTLH\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 CEW KTLH\" readonly>";
			break;
		case "TPA": // DFW-TPA // Updated 01-30-2025
			result += "<!-- Updated 01-30-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP HRV Q105 REDFN Y280 CHRGE RAYZZ3 KTPA\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP CREEM CEW J2 DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW ARDIA7 CLL TNV IAH LCH J2 DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MERDN DEFUN MAATY5 KTPA\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 DEFUN MAATY5 KTPA\" readonly>";
			break;
		case "TUL": // DFW-TUL // Updated 05-10-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-10-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW GRABE8 EAKER KTUL\" readonly>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW HUDAD2 PGLET SPS FILGO IRW OKM KTUL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 ADM TUL KTUL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-10-2025
			result += "<!-- Verified with ATCSCC on 05-10-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW GRABE8 EAKER KTUL\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT RZC KTUL\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD CDS IRW KTUL\" readonly>";
			break;
		case "TUS": // DFW-TUS // Updated 08-05-2025
			result += "<!-- Updated 08-05-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK ELP ZONNA2 KTUS\" readonly>"; // CDR 0P
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TXO J74 CNX ONM J104 SSO ZONNA2 KTUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW CYOTE4 MQP INK J50 ELP J2 KTUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-05-2025
			result += "<!-- Verified with ATCSCC on 08-05-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK ELP ZONNA2 KTUS\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW LOWGN8 ADM MRMAC CRUSR J6 PNH J26 ELP ZONNA2 KTUS\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 HOARY JCT J86 ELP ZONNA2 KTUS\" readonly>";
			result += "<br/>2S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT DLF FST J86 ELP ZONNA2 KTUS\" readonly>";
			result += "<br/>3S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW NELYN6 SAT FST J86 ELP ZONNA2 KTUS\" readonly>";
			break;
		case "TVC": // DFW-TVC // Updated 01-30-2025
			result += "<!-- Updated 01-30-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC SGF BAYLI J181 BDF BAE KTVC\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT J137 ARG FAM RBS PMM J548 KTVC\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 DSM DLL GRB KTVC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX4 TUL J98 SGF BAYLI J181 BDF BAE KTVC\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "TYS": // DFW-TYS // Updated 04-16-2025
			result += "<!-- Updated 04-16-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE MEM TAZZA KTYS\" readonly>";
			result += "<br/><b style=\"color:orange\">ATC prefers ...MEM-TAZZA-KTYS<\/b>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW AKUNA9 MLC ARG J46 BNA KTYS\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD SQS GQO KTYS\" readonly>";
			result += "<br/><br/>COWBOY EAST 1 (FL230 to LCH)<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN VXV KTYS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 LIT BNA KTYS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-16-2025
			result += "<!-- Verified with ATCSCC on 04-16-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW TRYTN4 LOOSE Q34 WAKOL BNA VXV KTYS\" readonly>";
			result += "<br/>1N<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG BNA VXV KTYS\" readonly>";
			result += "<br/>1S<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J22 MCB MERDN VLKNN VXV KTYS\" readonly>";
			break;
		case "VPS": // DFW-VPS // Updated 01-30-2025
			result += "<!-- Updated 01-30-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW MRSSH3 ZALEA SWEUP MCB MUURY CEW KVPS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW TRYTN4 TRYTN IZAAC Q30 VLKNN Q139 MGMRY CEW KVPS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW DALL3 EIC MCB J50 CEW KVPS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>0P (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD MEI CEW KVPS\" readonly>";
			result += "<br/>1N (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC ARG MEM VLKNN Q139 MGMRY CEW KVPS\" readonly>";
			result += "<br/>1S (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW DARTZ9 TNV IAH LCH J2 CEW KVPS\" readonly>";
			break;
		case "XNA": // DFW-XNA // Updated 08-23-2025
			result += "<!-- Updated 08-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route (Max FL290):</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC KXNA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 EAKER MLC RZC KXNA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 08-23-2025
			result += "<!-- Verified with ATCSCC on 08-23-2025 -->";
			result += "<br/>0P<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC KXNA\" readonly>";
			result += "<br/>1E<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW ZACHH4 BSKAT LIT KXNA\" readonly>";
			result += "<br/>1W<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J26 MMB TUL RZC KXNA\" readonly>";
			break;
		case "YEG": // DFW-YEG // Updated 01-30-2025
			result += "<!-- Updated 01-30-2025 -->";
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
			
		case "YUL": // DFW-YUL // Updated 01-30-2025
			result += "<!-- Updated 01-30-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW AKUNA9 MLC RZC STL BVT CRL DERLO Q907 AGNOB MIGLO HABBS7 CYUL\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL J25 MCI J26 JOT J87 OBK J547 FNT Q824 HOCKE Q905 SIKBO Q951 SANIN MIGLO HABBS7 CYUL\" readonly>";
			result += "<br/>South: <input style=\"width:75%\" value=\"KDFW FORCK3 FORCK ELD Q32 BNA AIR PSB ALB PBERG CARTR5 CYUL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX3 TUL J98 SGF J8 STL BVT CRL YYZ YCF YUL CYUL\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "YVR": // DFW-YVR // Updated 09-15-2025
			result += "<!-- Updated 09-15-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 09-15-2025
			result += "<br/><br/>CFS: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH J17 PUB CHE J163 OCS J52 GEG METOW GRIZZ7 CYVR\" readonly>";
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW GCK CYS MBW Q148 WEDAK GEG METOW GRIZZ7 CYVR\" readonly>";
			result += "<br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW HRPER3 HULZE TCC J76 FTI J58 MLF ELY J523 SEA PAE GRIZZ7 CYVR\" readonly>";
			result += "<br/><br/>West via ELP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN INK J50 ELP J86 BAVPE CORKR Q35 IMB J523 SEA PAE GRIZZ7 CYVR\" readonly>";
			// result += "<br/><br/>North: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW J21 ICT HCT BFF BOY DBS J52 GEG METOW GRIZZ7 CYVR\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN CME J15 ABQ BCE J523 SEA PAE GRIZZ7 CYVR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW LOWGN8 ADM MMB LBL LAA J52 FQF J20 SEA PAE PAINE4 CYVR\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "YYC": // DFW-YYC // Updated 04-18-2025
			result += "<!-- Updated 04-18-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-18-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KDFW BLECO8 IRW KK36C HLC HCT MLS BEVEL MOBEK EBGAL7 CYYC\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\" value=\"KDFW BLECO8 TUL EMP LNK ONL DPR GGW PEMDU BEVEL MOBEK EBGAL7 CYYC\" readonly>";
			result += "<br/>West via JNC: <input style=\"width:75%\" value=\"KDFW HUDAD2 HUDAD PNH ALS JNC BPI DNW GTF COUTS MOBEK EBGAL7 CYYC\" readonly>";
			result += "<br/>West via CNX: <input style=\"width:75%\" value=\"KDFW WSTEX2 CIKAN CME J15 CNX KA36U RLG BIL COUTS MOBEK EBGAL7 CYYC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KDFW TEX5 IRW GCK GLD CYS J13 DDY BIL GTF J516 YQL EBGAL CYYC\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 04-18-2025
			break;
		case "YYZ": // DFW-YYZ // Updated 01-30-2025
			result += "<!-- Updated 01-30-2025 -->";
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
