mia_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
	switch(arvl) {

// MIA-ALB skipped

		case "ATL": // Updated 05-28-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS LAIRI LARZZ JJEDI3 KATL\" readonly>"; // CDR F0
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q110 DAWWN BEORN GNDLF2 KATL\" readonly>"; // CDR H3
			result += "<br/>East/Full OW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY HOTHH JJEDI3 KATL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA WINCO LAL SZW MGM KATL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-28-2025
			result += "<!-- Verified with ATCSCC on 05-28-2025 -->";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS LAIRI LARZZ JJEDI3 KATL\" readonly>";
			result += "<br/>F1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS LAIRI LARZZ SITTH2 KATL\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR DAWWN BEORN HOBTT2 KATL\" readonly>";
			result += "<br/>G3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR DAWWN BEORN GNDLF2 KATL\" readonly>";
			result += "<br/>H3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q110 DAWWN BEORN GNDLF2 KATL\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR DAWWN BEORN HOBTT2 KATL\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR DAWWN BEORN GNDLF2 KATL\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY HOTHH JJEDI3 KATL\" readonly>";
			result += "<br/>Z1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY HOTHH SITTH2 KATL\" readonly>";
			break;
		case "AUS": // Updated 05-06-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-06-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 LEV LCH WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/><b style=\"color:orange\">FAA pref is KMIA BNGOS4 DOLIE Y280 LEV.. but it gets rerouted to the above<\/b>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 LCH Q24 MOLLR DBOYS WLEEE7 KAUS\" readonly>";
			result += "<br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE KELPP ANKRR SKUBA WAILN WLEEE7 KAUS\" readonly>";
			// TODO North Rte
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 BNGOS LAL SZW DEFUN J2 IAH BITER9 KAUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-06-2025
			result += "<!-- Verified with ATCSCC on 05-06-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV LCH WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 LCH Q24 MOLLR DBOYS WLEEE7 KAUS\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV LCH WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 LCH Q24 MOLLR DBOYS WLEEE7 KAUS\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV LCH WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV LCH WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY MGMRY GARTS LCH WEEED WLEEE7 KAUS\" readonly>";
			break;
		case "BDL": // Updated 02-07-2025
			result += "<!-- Updated 02-07-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO WAALT Q131 EARZZ JAMIE CONFR Q481 DPK DPK3 KBDL\" readonly>"; // CDR Z0
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS ELLDE Q97 PAACK JAMIE CONFR Q481 DPK DPK3 KBDL\" readonly>"; // CDR A0
			result += "<br/><br/>Full OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA PELCN ROWSY Y494 YAALE Y484 GEDIC SARDI DPK3 KBDL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-22-2025
			result += "<!-- Verified with ATCSCC on 02-22-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS ELLDE Q97 PAACK JAMIE CONFR Q481 DPK DPK3 KBDL\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO WAALT Q131 EARZZ JAMIE CONFR Q481 DPK DPK3 KBDL\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>PL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS ELLDE Q97 PAACK JAMIE CONFR MGERK DIDIO JODOE GGRNT JRIZZ DPK DPK3 KBDL\" readonly>";
			result += "<br/>PW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO WAALT Q131 EARZZ JAMIE CONFR MGERK DIDIO JODOE GGRNT JRIZZ DPK DPK3 KBDL\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO WAALT Q131 EARZZ JAMIE CONFR Q481 DPK DPK3 KBDL\" readonly>";
			break;
		case "BHM": // Updated 02-22-2025
			result += "<!-- Updated 02-22-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 DEEDA WANDS KBHM\" readonly>";
			result += "<br/><br/>West/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV J31 MEI KBHM\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-22-2025
			result += "<!-- Verified with ATCSCC on 02-22-2025 -->";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO WANDS KBHM\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 DEEDA WANDS KBHM\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 DEDDY WANDS KBHM\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR Q116 DEEDA WANDS KBHM\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY WANDS KBHM\" readonly>";
			break;
			break;
		case "BNA": // Updated 06-28-2025
			result += "<!-- Updated 06-28-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO SPA VXV SWFFT2 KBNA\" readonly>";
			result += "<br/><br/>OW/East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>"; // CDR Z2
			result += "<br/>OW/West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE CIGAR Y290 BLVNS REDFN Q105 HRV J31 MEI HRTUN CHSNE2 KBNA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-28-2025
			result += "<!-- Verified with ATCSCC on 06-28-2025 -->";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR BRUTS Q118 THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR BRUTS Q118 THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
			break;

// MIA-BOI skipped

		case "BOS": // Updated 02-07-2025
			result += "<!-- Updated 02-07-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO WAALT Q131 EARZZ JAMIE CONFR Q133 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 JROSS ELLDE Q97 PAACK JAMIE CONFR Q133 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y495 OWENZ SHERL HTO ROBUC ROBUC3 KBOS\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA PELCN ROWSY CORNE FATON CCC RUIZE ROBUC3 KBOS\" readonly>";
			result += "<br/>VACAPES NORTH 1: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA PELCN ROWSY ECG CORNE FATON CCC RUIZE ROBUC3 KBOS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 HURCN ORL CRG SAV CHS ISO ORF SBY ACY JFK ORW7 KBOS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>DW: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y495 OWENZ FATON CCC RUIZE ROBUC3 KBOS\" readonly>";
			result += "<br/>G2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>H2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>K2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO WAALT Q131 EARZZ JAMIE CONFR Q133 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>M2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>Z0: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO WAALT Q131 EARZZ JAMIE CONFR Q133 JFK ROBUC3 KBOS\" readonly>";
			break;
		case "BUF": // Updated 02-22-2025
			result += "<!-- Updated 02-22-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 PYTON BENEE KBUF\" readonly>"; // CDR Z0
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 RICCS EWC DKK KBUF\" readonly>"; // CDR A0
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 VOSTK CVG CREEP Q29 DUTSH DJB KBUF\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo	
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-22-2025
			result += "<!-- Verified with ATCSCC on 02-22-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 RICCS EWC DKK KBUF\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 BLAAN Q69 RICCS EWC DKK KBUF\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 BLAAN Q69 RICCS EWC DKK KBUF\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC Q129 PYTON BENEE KBUF\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 BLAAN Q69 RICCS EWC DKK KBUF\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 PYTON BENEE KBUF\" readonly>";
			break;
		case "BWI": // Updated 02-22-2025
			result += "<!-- Updated 02-22-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC ZORDO Q111 RUKRR THHMP RAVNN8 KBWI\" readonly>"; // CDR Z0
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 RAYVO Q113 AARNN THHMP RAVNN8 KBWI\" readonly>"; // CDR A0
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR VXV TONIO Q34 SITTR CJAAE RAVNN8 KBWI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY CRG IRQ SPA J85 NEALS CJAAE RAVNN8 KBWI\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-27-2025
			result += "<!-- Verified with ATCSCC on 05-27-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 RAYVO Q113 AARNN THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 OGRAE GOOOB THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO Q99 OGRAE GOOOB THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC ZORDO Q111 RUKRR THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 OGRAE GOOOB THHMP RAVNN8 KBWI\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC ZORDO Q111 RUKRR THHMP RAVNN8 KBWI\" readonly>";
			break;
		case "CAE": // Updated 02-22-2025
			result += "<!-- Updated 02-22-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP KCAE\" readonly>"; // CDR A0
			result += "<br/><br/>East/Full OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR AR16 SEELO OGGRE Y436 DEDDY CAE KCAE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY CRG IRQ KCAE\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-22-2025
			result += "<!-- Verified with ATCSCC on 02-22-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP KCAE\" readonly>";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 TEUFL KCAE\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO KCAE\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 DEDDY KCAE\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO KCAE\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY KCAE\" readonly>";
			break;
		case "CHS": // Updated 05-06-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-06-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP SAV BAGGY3 KCHS\" readonly>";
			result += "<br/><b style=\"color:orange\">As of 05-06-2025 Fkeys will throw Mandatory Route violation for everything that isn't CDR A0<\/b>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q99 TEEEM DEQUE BAGGY3 KCHS\" readonly>"; // Based on CDR H2
			result += "<br/>East/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 PITRW KCHS\" readonly>"; // CDR Z0
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-06-2025
			result += "<!-- Verified with ATCSCC on 05-06-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP SAV BAGGY3 KCHS\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO SAV BAGGY3 KCHS\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO SAV BAGGY3 KCHS\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 PITRW KCHS\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO SAV BAGGY3 KCHS\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 PITRW KCHS\" readonly>";
			break;
		case "CLE": // Updated 02-07-2025
			result += "<!-- Updated 02-07-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE SPA J85 HVQ JANYS ROLLN2 KCLE\" readonly>";
			result += "<br/><br/>East/OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE SPA J85 HVQ JANYS ROLLN2 KCLE\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 VOSTK CHARZ DRUGA ROKNN3 KCLE\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>A0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE SPA J85 HVQ JANYS ROLLN2 KCLE\" readonly>";
			result += "<br/>G2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO SPA J85 HVQ JANYS ROLLN2 KCLE\" readonly>";
			result += "<br/>H2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO SPA J85 HVQ JANYS ROLLN2 KCLE\" readonly>";
			result += "<br/>K2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 DEDDY QUIWE SPA J85 HVQ JANYS ROLLN2 KCLE\" readonly>";
			result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO SPA J85 HVQ JANYS ROLLN2 KCLE\" readonly>";
			result += "<br/>Z0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE SPA J85 HVQ JANYS ROLLN2 KCLE\" readonly>";
			break;
		case "CLT": // Updated 05-10-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-10-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP DCT CHECR STOCR4 KCLT\" readonly>";
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO TWINS PONZE BANKR5 KCLT\" readonly>"; // CDR H2
			result += "<br/>East/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 PITRW STOCR4 KCLT\" readonly>"; // CDR Z0
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA PHK CRG SAV FLO RASLN3 KCLT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-10-2025
			result += "<!-- Verified with ATCSCC on 05-10-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP CHECR STOCR4 KCLT\" readonly>";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO PONZE BANKR5 KCLT\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE PITRW STOCR4 KCLT\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 PITRW STOCR4 KCLT\" readonly>";
			break;
		case "CMH": // Updated 02-21-2025
			result += "<!-- Updated 02-21-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>"; // CDR A0
			result += "<br/><input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE SPA MCGNS SCRLT2 KCMH\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR Q79 SWAPP GETTA JAKTZ1 KCMH\" readonly>";
			result += "<br/>East/Full OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA OZENA Y309 FLRDA SAGGY DIW RDU BKW MCGNS SCRLT2 KCMH\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-21-2025
			result += "<!-- Verified with ATCSCC on 02-21-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE BURGG MCGNS SCRLT2 KCMH\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO BURGG MCGNS SCRLT2 KCMH\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO BURGG MCGNS SCRLT2 KCMH\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO QUIWE BURGG MCGNS SCRLT2 KCMH\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO BURGG MCGNS SCRLT2 KCMH\" readonly>";
			break;
		case "CVG": // Updated 02-21-2025
			result += "<!-- Updated 02-21-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE SPA CUBIM JAKIE6 KCVG\" readonly>"; // CDR A0
			result += "<br/>West: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR VXV JAKIE6 KCVG\" readonly>";
			result += "<br/>East/Full OW: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE SPA CUBIM KCVG\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-21-2025
			result += "<!-- Verified with ATCSCC on 02-21-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE SPA CUBIM JAKIE6 KCVG\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS THRSR VXV JAKIE6 KCVG\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR BRUTS Q118 THRSR VXV JAKIE6 KCVG\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR VXV JAKIE6 KCVG\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 DEDDY QUIWE SPA CUBIM KCVG\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR BRUTS Q118 THRSR VXV JAKIE6 KCVG\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE SPA CUBIM KCVG\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VXV JAKIE6 KCVG\" readonly>";
			break;
		case "DCA": // Updated 02-22-2025
			result += "<!-- Updated 02-22-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>"; // CDR Z0
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>"; // CDR A0
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA ALTNN TRV OMN CRG SAV CHS ILM TYI RIC IRONS7 KDCA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-22-2025
			result += "<!-- Verified with ATCSCC on 02-22-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>";
			break;
		case "DEN": // Updated 05-06-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-06-2025 MP -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS RZC LBL HALEN NIIXX3 KDEN\" readonly>"; // CDR H0
			result += "<br/><b style=\"color:orange\"> As of 02/23/25 Listed Pref Route is KMIA HURCN4 SMELZ Q116 JAWJA MGMRY VLKNN Q116 MEMFS...<\/b>";
			result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 SPS HALEN NIIXX3 KDEN\" readonly>"; // CDR G0
			result += "<br/>North: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN ENEME DOOLY THRSR RMG J66 MEM ICT J28 GCK KIISS CLASH4 KDEN\" readonly>";
			result += "<br/>SW Arrival: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 LEV KCEEE TKNIQ MOLLR JCT Q20 CNX GNDLA TBARR3 KDEN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA LAL SZW MGM MEI SQS LIT TUL ICT SOSPE OATHE DANDD1 KDEN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-06-2025
			result += "<!-- Verified with ATCSCC on 05-06-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 REDFN Q105 HRV J58 SPS HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS VLKNN Q116 MEMFS RZC LBL HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 SPS HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS RZC LBL HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI REDFN Q105 HRV J58 SPS HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR HANKO MEM PER GCK KIISS CLASH4 KDEN\" readonly>";
			break;
		case "DFW": // Updated 05-28-2025
			result += "<!-- Updated 05-28-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV PNUTS BEREE3 KDFW\" readonly>"; // CDR G1
			result += "<br/><b style=\"color:orange\">CDR uses Y290: KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS WHINY4 KDFW<\/b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>"; // CDR H0
			result += "<br/>North: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN YAALL J14 LIT MEEOW FEWWW SEEVR4 KDFW\" readonly>";
			result += "<br/><br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG VUH IAH CRIED BEREE3 KDFW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 HURCN LAL SZW DEFUN J2 CEW J50 AEX YEAGR4 KDFW\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-28-2025
			result += "<!-- Verified with ATCSCC on 05-28-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 REDFN Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
			result += "<br/>B3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 CEW J50 AEX PNUTS WHINY4 KDFW\" readonly>";
			result += "<br/>F3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
			result += "<br/>G1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>H1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS WHINY4 KDFW\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI REDFN Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI REDFN Q105 HRV J58 AEX PNUTS WHINY4 KDFW\" readonly>";
			result += "<br/>W3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN IZAAC YUYUN BEREE3 KDFW\" readonly>";
			result += "<br/>Z3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN IZAAC YUYUN WHINY4 KDFW\" readonly>";
			break;

// MIA-DSM skipped

		case "DTW": // Updated 02-22-2025
			result += "<!-- Updated 02-22-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE HNN JAMOX KLYNK3 KDTW\" readonly>"; // CDR A0
			result += "<br/><br/>East/OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 AARNN FAK LEONI KOZAR BONZZ2 KDTW\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR SMTTH Q67 HNN SUBWY HTROD2 KDTW\" readonly>"; // CDR H0
			result += "<br/>SW Arrival: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR Q79 IIU WWODD LECTR3 KDTW\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-22-2025
			result += "<!-- Verified with ATCSCC on 02-22-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE HNN JAMOX BONZZ2 KDTW\" readonly>";
			result += "<br/>F3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS THRSR SMTTH Q67 HNN SUBWY HTROD2 KDTW\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR JOHNN Q118 THRSR SMTTH Q67 HNN SUBWY HTROD2 KDTW\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR SMTTH Q67 HNN SUBWY HTROD2 KDTW\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 DEDDY SPA HNN JAMOX BONZZ2 KDTW\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR JOHNN Q118 THRSR SMTTH Q67 HNN SUBWY HTROD2 KDTW\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY SPA HNN JAMOX BONZZ2 KDTW\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR SMTTH Q67 HNN SUBWY HTROD2 KDTW\" readonly>";
			break;
		case "EGE": // Updated 02-22-2025
			result += "<!-- Updated 02-22-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA MGM MEM J41 SGF SLN HLC GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/><br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV EIC ADM TOTOE LAA AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/>South/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV J58 FUZ CDS PNH TBE AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/>SW Arrival/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 LEV J86 JCT Q20 HONDS J15 ABQ J15 JNC JESIE RLG KEGE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA WINCO SZW MGM MEM J41 SGF SLN HLC GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-22-2025
			result += "<!-- Verified with ATCSCC on 02-22-2025 -->";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV LIT BUM HYS GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA LIT BUM HYS GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			break;
		case "EWR":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 AARNN QUART PHLBO4 KEWR\" readonly>"; // CDR Z0
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 ALWZZ OGRAE Q99 QUART PHLBO4 KEWR\" readonly>"; // CDR A0
			result += "<br/>Full OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y497 SUBBS CYN GXU RBV V249 METRO KEWR\" readonly>"; // CDR DW
			result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 GOZZR ETECK OZENA ROWSY OTTNG ILLGO CEETE SUBBS CYN GXU RBV V249 METRO KEWR\" readonly>";
			result += "<br/>FLORIDA TO NE: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>WATRS: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 GOZZR ETECK OZENA ROWSY OTTNG ILLGO CEETE SUBBS CYN GXU RBV V249 METRO KEWR\" readonly>";
			result += "<br/>Rocket Launch: <input style=\"width:75%\"; value=\"KMIA HEDLY CRG VIYAP OLBEC SAV FLO RDU FAK EMI FQM FQM3 KEWR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA HEDLY CRG VIYAP OLBEC SAV FLO RDU FAK EMI FQM FQM3 KEWR\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-22-2025
			result += "<!-- Verified with ATCSCC on 02-22-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 ALWZZ OGRAE Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>DW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y497 SUBBS CYN GXU RBV V249 METRO KEWR\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC Q129 AARNN QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>PL<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS JOHAR Q109 DFENC SAWED KALDA Q167 YAZUU HEADI ROBER BELTT MAD MOBBS T295 TALCO HELON FLOSI FLOSI4 KEWR\" readonly>";
			result += "<br/>PW<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA SAGGY CHIEZ Q133 KALDA Q167 YAZUU HEADI ROBER BELTT MAD MOBBS T295 TALCO HELON FLOSI FLOSI4 KEWR\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 AARNN QUART PHLBO4 KEWR\" readonly>";
			break;
		case "GRR": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO HYK FWA KGRR\" readonly>"; // CDR F0
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN Q139 IIU OKK GSH VIO KGRR\" readonly>";
			result += "<br/>OW/East: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA OGGRE Y436 DEDDY QUIWE BENBY DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR Z0
			result += "<br/><br/>OW/West: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV MCB J35 MEM J71 RBS PRIGE PMM KGRR\" readonly>";
			result += "<br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG VUH TXK ARG ENL BVT PMM KGRR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO HYK FWA KGRR\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS THRSR GLAZR KGRR\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR BRUTS Q118 THRSR KGRR\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 JOHNN THRSR GLAZR KGRR\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 DEDDY VXV J43 FLM FWA KGRR\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO THRSR KGRR\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE VXV J43 FLM FWA KGRR\" readonly>";
			break;
		case "GSO": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE CAE BLOCC2 KGSO\" readonly>"; // CDR A0
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE CAE BLOCC2 KGSO\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO SPA HMV KGSO\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO SPA HMV KGSO\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO KGSO\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO SPA HMV KGSO\" readonly>";
			break;
		case "IAH": // Updated 06-10-2025
			result += "<!-- Updated 06-10-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS REMIS Y280 LEV NNCEE2 KIAH\" readonly>";
			result += "<br/><b style=\"color:orange\">CDR uses Y290: KMIA GLADZ4 BAGGS Y290 LEV NNCEE2 KIAH<\/b>";
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 SJI NNCEE2 KIAH\" readonly>"; // CDR H0
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 DEEDA MGM J20 MHZ SWB ZEEKK3 KIAH\" readonly>";
			result += "<br/><br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE KELPP NNCEE2 KIAH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 HURCN LAL SZW DEFUN J2 SJI GILCO5 KIAH\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-22-2025
			result += "<!-- Verified with ATCSCC on 02-22-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV LINKK1 KIAH\" readonly>";
			result += "<br/>B3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV NNCEE2 KIAH\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 SJI NNCEE2 KIAH\" readonly>";
			result += "<br/>F3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 SJI LINKK1 KIAH\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV NNCEE2 KIAH\" readonly>";
			result += "<br/>G1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV LINKK1 KIAH\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 SJI NNCEE2 KIAH\" readonly>";
			result += "<br/>H1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 SJI LINKK1 KIAH\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV NNCEE2 KIAH\" readonly>";
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV LINKK1 KIAH\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV NNCEE2 KIAH\" readonly>";
			result += "<br/>W3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV LINKK1 KIAH\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY MGMRY CATLN SJI NNCEE2 KIAH\" readonly>";
			result += "<br/>Z3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY MGMRY CATLN SJI LINKK1 KIAH\" readonly>";
			break;

// MIA-ICT skipped

		case "ILM": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS WYLMS KILM\" readonly>"; // CDR A0
			result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA KILM\" readonly>"; // CDR Z0
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS WYLMS KILM\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q109 PANDY KILM\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO Q109 PANDY KILM\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE FLRDA IDOLS KILM\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q109 PANDY KILM\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA KILM\" readonly>";
			break;
		case "IND": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR Q79 SWAPP HAGAL GIIBS4 KIND\" readonly>"; // CDR A0
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP SAV CAE HMV HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN WAKOL TIIDE Q31 TERGE SMUKE3 KIND\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO VXV KIND\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR JOHNN Q118 THRSR Q79 SWAPP HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR JOHNN Q118 THRSR Q79 SWAPP HAGAL GIIBS4 KIND\" readonly>";
			break;
		case "JAX": // Updated 07-20-2025
			result += "<!-- Updated 07-20-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY ORL HAINY QUBEN2 KJAX\" readonly>"; // CDR F0
			result += "<br/><br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA HILIS TEBOW2 KJAX\" readonly>"; // CDR H2
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY ORL POGIE2 KJAX\" readonly>"; // CDR F1
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-20-2025
			result += "<!-- Verified with ATCSCC on 07-20-2025 -->";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY ORL HAINY QUBEN2 KJAX\" readonly>";
			result += "<br/>F1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY ORL POGIE2 KJAX\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR HILIS TEBOW2 KJAX\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA HILIS TEBOW2 KJAX\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE ORL HAINY QUBEN2 KJAX\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR HILIS TEBOW2 KJAX\" readonly>";
			break;
		case "JFK": // Updated 02-22-2025
			result += "<!-- Updated 02-22-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA SAGGY CHIEZ Q133 KALDA Q108 SIE CAMRN5 KJFK\" readonly>"; // CDR Z0
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS JOHAR Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>"; // CDR A0
			result += "<br/>Full OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y495 CAMRN KJFK\" readonly>"; // CDR DW
			result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 GOZZR ETECK OZENA ROWSY OTTNG JOELO ETMEY AGUNE EXXES PREPI Y495 CAMRN KJFK\" readonly>";
			result += "<br/>FLORIDA TO NE 3: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR RAFTN FLM J43 ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA9 HURCN ORL LIBBY CHS ILM ORF SIE CAMRN5 KJFK\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS JOHAR Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>DW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y495 CAMRN KJFK\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q109 DFENC SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA SAGGY CHIEZ Q133 KALDA Q108 SIE CAMRN5 KJFK\" readonly>";
			break;
		case "LAS": // Updated 07-01-2025
			result += "<!-- Updated 07-01-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV J58 FUZ TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW MHZ ELD TXK SPS J72 ABQ J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP J86 INW HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS TUL MMB FTI J8 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ M580 MINOW HRVLK KELPP MUSYL SAT J138 FST J86 INW HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG CRP KH87A FST J2 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 HURCN LAL SZW MGM MEI MHZ J4 FUZ TXO J72 ABQ J78 DRK ISHEE2 KLAS\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-09-2025
			result += "<!-- Verified with ATCSCC on 05-09-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV J86 INW HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 IAH J86 INW HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 INW HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 IAH J86 INW HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV J86 INW HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV J86 INW HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR YAALL J14 IRW J78 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			break;
		case "LAX":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>"; // CDR G0
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW MHZ ELD TXK SPS J72 ABQ J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>NE Arrival: <input style=\"width:75%\"; value=\"KMIA BNGOS4 DOLIE CIGAR Y290 BACCA ROZZI Y280 REDFN Q105 HRV J58 FUZ TXO J72 ABQ J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW HRVLK KELPP LCHLH MUSYL SAT J138 FST J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG CRP KH87A FST J2 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA9 BNGOS LAL SZW CEW J2 IAH J86 JCT J2 ELP J50 SSO J4 TNP BASET5 KLAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN CEW J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN CEW J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR HANKO GAD MEM PNH J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			break;
		case "LGA": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q107 HURTS PROUD2 KLGA\" readonly>"; // CDR Z0
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 HURTS PROUD2 KLGA\" readonly>"; // CDR A0
			result += "<br/>Full OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y495 OWENZ FATON HOFFI KEYED BDR PRENO KLGA\" readonly>"; // CDR DW			
			result += "<br/><br/>Aviod ZDC: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q99 CAMJO TWINS HVQ GEFFS Q71 PSB MIP4 KLGA\" readonly>";
			result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 GOZZR ETECK OZENA TUBBS ROBBB NAALA HOBOH WEBBB KENDA PRLJM KEYED EEGOR PRENO KLGA\" readonly>";
			result += "<br/>FL TO NE 3: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR RAFTN FLM J43 ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA9 FLMGO ORL SAV FLO RDU RIC PXT KORRY4 KLGA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>DW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y495 OWENZ FATON HOFFI KEYED BDR PRENO KLGA\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC Q107 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q107 HURTS PROUD2 KLGA\" readonly>";
			break;
		case "LIT": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS KLIT\" readonly>"; // CDR H0
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS VLKNN Q116 MEMFS KLIT\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR Q116 MEMFS KLIT\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS KLIT\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR Q116 MEMFS KLIT\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR HANKO MEMFS KLIT\" readonly>";
			break;
		case "MCI": // Updated 07-08-2025
			result += "<!-- Updated 07-08-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS KRTNY MHOMS3 KMCI\" readonly>"; // CDR H0
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS LAIRI VRSTY THRSR HITMN Q19 STL MCM BQS BQS8 KMCI\" readonly>";
			result += "<br/>West/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV MCB LIT KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/><b>For West via OKC: ...RV J58 AEX EIC J20 IRW J23 PER ZOURA WUTNG3 KMCI<\/b>";
			result += "<br/><br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG VUH IAH FUZ J21 ADM PER ZOURA WUTNG3 KMCI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA WINCO LAL SZW MGM LDK MEM ARG SGF TYGER7 KMCI\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-08-2025
			result += "<!-- Verified with ATCSCC on 07-08-2025 -->";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS VLKNN Q116 MEMFS KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR Q116 ZAVEL KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO ZAVEL KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY AHN BNA KRTNY MHOMS3 KMCI\" readonly>";
			break;
		case "MCO": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route: (Avg FL190):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA FLMGO2 WAPOM RIDES2 KMCO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA8 VACAY BAIRN GOOFY7 KMCO\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 COREA JOKRS3 KMCO\" readonly>";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 WAPOM RIDES2 KMCO\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ZFP CCLUB RIDES KMCO\" readonly>";
			break;
		case "MEM": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN WASER VANZE3 KMEM\" readonly>";
			// result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA JENIM PATOY DEANR MICES JAWJA CABLO DEFUN J2 CEW J50 MCB MEVEE HOBRK4 KMEM\" readonly>";
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ VXV RAMRD BLUZZ5 KMEM\" readonly>";
			result += "<br/>West/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV AEX ELD LITTR CONDR4 KMEM\" readonly>";
			result += "<br/><br/>East/OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN WASER VANZE3 KMEM\" readonly>";
			result += "<br/>West/Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 MCB SWB ELD LITTR CONDR4 KMEM\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-17-2025
			result += "<!-- Verified with ATCSCC on 07-17-2025 -->";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS VLKNN WASER VANZE3 KMEM\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR Q116 VLKNN WASER VANZE3 KMEM\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN WASER VANZE3 KMEM\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR Q116 VLKNN WASER VANZE3 KMEM\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN WASER VANZE3 KMEM\" readonly>";
			break;
		case "MKE": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR Q79 IIU MACES VINNE LEEDN GOPAC3 KMKE\" readonly>"; // CDR H0
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 STL J101 SPI CHZHD GOPAC3 KMKE\" readonly>";
			result += "<br/>East: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE HNN JAMOX J85 DJB J34 CRL PEGEE GETCH LYSTR SUDDS KMKE\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 MELKR IRQ J99 IIU MACES VINNE LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR Q79 IIU MACES VINNE LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 DEDDY THRSR Q79 IIU MACES VINNE LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR BRUTS Q118 THRSR Q79 IIU MACES VINNE LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR Q79 IIU MACES VINNE LEEDN GOPAC3 KMKE\" readonly>";
			break;
		case "MSP": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR Q79 IIU J89 OBK KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ VXV J99 IIU J89 OBK KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 PATOY MGM MEM J41 SGF MNOSO BLUEM4 KMSP\" readonly>";
			result += "<br/><br/>East via DJB: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ SPA J85 DJB J34 BAE KBULL KKILR3 KMSP\" readonly>";
			result += "<br/>SW via LIT: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO MEI LIT RZC MCI ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/>OW/Gulf: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV MCB J35 FAM J151 STL IOW MNOSO BLUEM4 KMSP\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS VLKNN MNOSO BLUEM4 KMSP\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO THRSR Q79 IIU J89 OBK KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN MNOSO BLUEM4 KMSP\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO THRSR Q79 IIU J89 OBK KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY AHN BNA MNOSO BLUEM4 KMSP\" readonly>";
			break;
		case "MSY": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 SJI MNSTR1 KMSY\" readonly>"; // CDR H0
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV KMSY\" readonly>"; // CDR G0
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA9 BNGOS LAL HEVVN DEFUN SJI SLIDD2 KMSY\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 REDFN Q105 HRV KMSY\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 SJI MNSTR1 KMSY\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV KMSY\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 SJI MNSTR1 KMSY\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI REDFN Q105 HRV KMSY\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI REDFN Q105 HRV KMSY\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY MGMRY SJI MNSTR1 KMSY\" readonly>";
			break;
		case "OKC": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV LSU SWB EIC J20 IRW KOKC\" readonly>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO MGM LIT DWINE RIFFL3 KOKC\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN YAALL J14 IRW KOKC\" readonly>";
			result += "<br/>North via VXV: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 TEUFL TWINS IPTAY VXV BAZOO BETIE ARG BERGG TUL AWLIV MURAH3 KOKC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-23-2025
			result += "<!-- Verified with ATCSCC on 02-23-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV KOKC\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DWINE RIFFL3 KOKC\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV KOKC\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DWINE RIFFL3 KOKC\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV KOKC\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV KOKC\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR YAALL LIT KLUBB DWINE RIFFL3 KOKC\" readonly>";
			break;
		case "OMA": // Updated 02-23-2025
			result += "<!-- Updated 02-23-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 02-23-2025
			result += "<br/><br/><input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 FAM HLV LMN MARWI4 KOMA\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ ODF BWG STL J45 IRK LMN MARWI4 KOMA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW MEI SQS LIT RZC BUM MCI STJ MARWI4 KOMA\" readonly>";
			result += "<br/>South/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV ELD RZC MCI STJ MARWI4 KOMA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "ORD": // Updated 06-01-2025
			result += "<!-- Updated 06-01-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR H0
			result += "<br/><br/>East<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ SPA J83 APE J178 FWA WATSN4 KORD\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 FAM FTZ SHAIN2 KORD\" readonly>";
			result += "<br/><br/>East/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA OGGRE Y436 DEDDY QUIWE BENBY DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR Z0
			result += "<br/>West/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV MCB J35 RUSLR FTZ TRTLL6 KORD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 BNGOS LAL SZW LGC BWG IIU MIE FWA KORD\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-01-2025
			result += "<!-- Verified with ATCSCC on 06-01-2025 -->";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS THRSR Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR JOHNN Q118 BONNT VEECK5 KORD\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR JOHNN Q118 BONNT VEECK5 KORD\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA OGGRE Y436 DEDDY QUIWE BENBY DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
			break;
		case "ORF": // Updated 06-01-2025
			result += "<!-- Updated 06-01-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC ISO DRONE2 KORF\" readonly>"; // CDR Z0
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS RAPZZ Q135 RREGG CVI DRONE DRONE2 KORF\" readonly>"; // CDR A0
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 OGRAE RDU DRONE2 KORF\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-01-2025
			result += "<!-- Verified with ATCSCC on 06-01-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS RAPZZ Q135 RREGG CVI DRONE DRONE2 KORF\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q109 PANDY RAPZZ Q135 RREGG CVI DRONE DRONE2 KORF\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO Q109 PANDY RAPZZ Q135 RREGG CVI DRONE DRONE2 KORF\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC ISO DRONE2 KORF\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q109 PANDY RAPZZ Q135 RREGG CVI DRONE DRONE2 KORF\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC ISO DRONE2 KORF\" readonly>";
			break;
		case "PDX": // Updated 06-01-2025
			result += "<!-- Updated 06-01-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-01-2025
			result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV J58 AEX EIC J20 IRW MMB LAA J52 OCS J163 BOI J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 MEMFS RZC ICT J182 GLD J80 FQF J20 PIH J54 BOI J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 FAM IRK J151 BIL J16 PDT JORAD HHOOD5 KPDX\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 BAVPE CORKR Q35 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/><br/>South/Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 IAH J86 BAVPE CORKR Q35 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW HRVLK KELPP LCHLH MUSYL SAT J138 FST J86 BAVPE CORKR Q35 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG CRP KH87A FST J2 ELP J86 BAVPE CORKR Q35 IMB JOTBA HHOOD5 KPDX\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-31-2025
			break;
		case "PHL": // Updated 05-31-2025
			result += "<!-- Updated 05-31-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA IDOLS SKARP Q101 KALDA ZJAAY JIIMS4 KPHL\" readonly>"; // CDR Z0
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS Q135 RREGG Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>"; // CDR A0
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO SMTTH Q67 TONIO PAATS4 KPHL\" readonly>"; // CDR H2
			result += "<br/><br/>East/ZDC Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 SILLY LYNUS B24 DASHA JIIMS4 KPHL\" readonly>";
			result += "<br/>West/ZDC Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR BOBBD Q71 EMNEM JST BOJID4 KPHL\" readonly>";
			result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 GOZZR ETECK OZENA ROWSY OTTNG HAAYY WICKE DASHA JIIMS4 KPHL\" readonly>";
			result += "<br/>FLORIDA TO NE 1: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 SHRKS WIGVO IRQ BURGG Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>FLORIDA TO NE 3: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ SPA J83 APE JST BOJID4 KPHL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA6 HEDLY CRG SAV CHS J121 SWL VCN9 KPHL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-27-2025
			result += "<!-- Verified with ATCSCC on 02-27-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS Q135 RREGG Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE FLRDA IDOLS SKARP Q101 KALDA ZJAAY JIIMS4 KPHL\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA IDOLS SKARP Q101 KALDA ZJAAY JIIMS4 KPHL\" readonly>";
			break;
		case "PHX": // Updated 05-31-2025
			result += "<!-- Updated 05-31-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP DRRVR PINNG1 KPHX\" readonly>"; // CDR G0
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>"; // CDR H0
			result += "<br/>North: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN LIT J6 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW HRVLK KELPP LCHLH MUSYL SAT J138 FST J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG CRP KH87A FST J2 ELP DRRVR PINNG1 KPHX\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-31-2025
			result += "<!-- Verified with ATCSCC on 05-31-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN HRISN Q30 IZAAC TXK J131 FUZ J66 EWM DRRVR PINNG1 KPHX\" readonly>";
			break;
		case "PIT": // Updated 05-31-2025
			result += "<!-- Updated 05-31-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 RICCS LEJOY DEMME5 KPIT\" readonly>"; // CDR A0
			result += "<br/><br/>East/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 PYTON LEJOY DEMME5 KPIT\" readonly>"; // CDR Z0
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 BLAAN Q69 RICCS LEJOY DEMME5 KPIT\" readonly>"; // CDR H2
			result += "<br/><br/>West/ZDC Avoid<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR SMTTH Q67 HNN FEWGA7 KPIT\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-27-2025
			result += "<!-- Verified with ATCSCC on 02-27-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 RICCS LEJOY DEMME5 KPIT\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 BLAAN Q69 RICCS LEJOY DEMME5 KPIT\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO Q99 BLAAN Q69 RICCS LEJOY DEMME5 KPIT\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC RDU EWESS RICCS LEJOY DEMME5 KPIT\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 BLAAN Q69 RICCS LEJOY DEMME5 KPIT\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 PYTON LEJOY DEMME5 KPIT\" readonly>";
			break;
		case "RDU": // Updated 05-31-2025
			result += "<!-- Updated 05-31-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE PETTO DMSTR2 KRDU\" readonly>"; // CDR A0
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC BLOGS3 KRDU\" readonly>"; // CDR Z0
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 TEEEM SHRIL JURDI DMSTR2 KRDU\" readonly>"; // CDR H2
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA9 BNGOS LBV LAL OCF AMG CTF KRDU\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-31-2025
			result += "<!-- Verified with ATCSCC on 05-31-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE PETTO DMSTR2 KRDU\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 TEEEM PETTO DMSTR2 KRDU\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 TEEEM SHRIL JURDI DMSTR2 KRDU\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC BLOGS3 KRDU\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 TEEEM PETTO DMSTR2 KRDU\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC BLOGS3 KRDU\" readonly>";
			break;
		case "RIC": // Updated 05-31-2025
			result += "<!-- Updated 005-31-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 LCAPE NOWAE NEAVL DUCXS5 KRIC\" readonly>"; // CDR A0
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC ZORDO Q111 RUKRR NEAVL DUCXS5 KRIC\" readonly>"; // CDR Z0
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 POLYY DADDS NOWAE NEAVL DUCXS5 KRIC\" readonly>"; // CDR H2
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-31-2025
			result += "<!-- Verified with ATCSCC on 05-31-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 LCAPE NOWAE NEAVL DUCXS5 KRIC\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 POLYY DADDS NOWAE NEAVL DUCXS5 KRIC\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 POLYY DADDS NOWAE NEAVL DUCXS5 KRIC\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC ZORDO Q111 RUKRR NEAVL DUCXS5 KRIC\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 POLYY DADDS NOWAE NEAVL DUCXS5 KRIC\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC ZORDO Q111 RUKRR NEAVL DUCXS5 KRIC\" readonly>";
			break;

// MIA-ROC skipped

		case "SAN": // Updated 05-06-2025
			result += "<!-- Updated 05-06-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 05-06-2025
			result += "<br/><br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 ACT INK J50 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 DEEDA MGMRY SQS J52 TXK SPS J72 TXO J74 SJN J18 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW HRVLK KELPP LCHLH MUSYL SAT J138 FST J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG CRP KH87A FST J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA2 HURCN LAL SZW DEFUN J2 CEW J50 ACT INK J50 SSO J50 GBN J18 IPL BARET5 KSAN\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-06-2025
			result += "<!-- Verified with ATCSCC on 05-06-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN HRISN Q30 IZAAC TXK J42 ABI J66 EWM J4 SSO GBN HOGGZ LUCKI1 KSAN\" readonly>";
			break;
		case "SAT": // Updated 05-31-2025
			result += "<!-- Updated 05-31-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 PEKON Q56 MOLLR QERVO1 KSAT\" readonly>"; // CDR G0
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 LCH CAAGE QERVO1 KSAT\" readonly>"; // CDR H0
			result += "<br/>North<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN YAALL J14 LIT J131 TXK WINDU QERVO1 KSAT\" readonly>";
			result += "<br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG BRENI CRVZA1 KSAT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 BNGOS LAL SZW CEW J2 IAH CWK MARCS1 KSAT\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-31-2025
			result += "<!-- Verified with ATCSCC on 05-31-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV J86 PEKON Q56 MOLLR QERVO1 KSAT\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 LCH CAAGE QERVO1 KSAT\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 PEKON Q56 MOLLR QERVO1 KSAT\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 LCH CAAGE QERVO1 KSAT\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV CAAGE QERVO1 KSAT\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV CAAGE QERVO1 KSAT\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY MGMRY GARTS LCH CAAGE QERVO1 KSAT\" readonly>";
			break;
		case "SAV": // Updated 05-31-2025
			result += "<!-- Updated 05-31-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP KSAV\" readonly>"; // CDR A0
			result += "<br/><br/>East<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA OGGRE Y436 DEDDY KSAV\" readonly>"; // CDR Z0
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO KSAV\" readonly>"; // CDR H2
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-31-2025
			result += "<!-- Verified with ATCSCC on 05-31-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP KSAV\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO KSAV\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO KSAV\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE FLRDA OGGRE Y436 DEDDY KSAV\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO KSAV\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA OGGRE Y436 DEDDY KSAV\" readonly>";
			break;
		case "SDF": // Updated 05-31-2025
			result += "<!-- Updated 05-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 GLAZR LEDDL1 KSDF\" readonly>"; // CDR H0
			result += "<br/><br/>West<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO GLAZR LEDDL1 KSDF\" readonly>"; // CDR F0
			result += "<br/><br/>East/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY SPA GLAZR LEDDL1 KSDF\" readonly>"; // CDR Z0
			result += "<br/>West/OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV MCB J35 MEM BUMPY MBELL5 KSDF\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-31-2025
			result += "<!-- Verified with ATCSCC on 02-27-2025 -->";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO GLAZR LEDDL1 KSDF\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS THRSR Q118 GLAZR LEDDL1 KSDF\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO THRSR GLAZR LEDDL1 KSDF\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 GLAZR LEDDL1 KSDF\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO THRSR GLAZR LEDDL1 KSDF\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY SPA GLAZR LEDDL1 KSDF\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE BENBY DOOGE LAFOX LEDDL1 KSDF\" readonly>";
			break;
		case "SEA": // Updated 05-31-2025
			result += "<!-- Updated 05-31-2025 -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 SPS HEATR Q154 HOVEL BKE PDT CHINS5 KSEA\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 MCB EIC J20 IRW J98 MMB LAA J52 OCS J20 PDT CHINS5 KSEA\" readonly>"; // CDR G0
			result += "<br/>North: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 FAM IRK J151 BIL J136 MLP GLASR3 KSEA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 BAVPE CORKR Q35 IMB YKM CHINS5 KSEA\" readonly>";
			result += "<br/><br/>South/Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 IAH J86 BAVPE CORKR Q35 IMB YKM CHINS5 KSEA\" readonly>";
			result += "<br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW HRVLK KELPP LCHLH MUSYL SAT J138 FST J86 BAVPE CORKR Q35 IMB YKM CHINS5 KSEA\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG CRP KH87A FST J2 ELP J86 BAVPE CORKR Q35 IMB YKM CHINS5 KSEA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-31-2025
			result += "<!-- Verified with ATCSCC on 05-31-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 REDFN Q105 HRV LSU BDDAY MRSSH FUZ CDS PNH CIM ALS JNC J15 TCH PDT CHINS5 KSEA\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS VLKNN Q116 MEMFS BUM DRABS PECKS GCC BIL MLP GLASR3 KSEA\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV LSU BDDAY MRSSH FUZ CDS PNH CIM ALS JNC J15 TCH PDT CHINS5 KSEA\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA MEMFS BUM DRABS PECKS GCC BIL MLP GLASR3 KSEA\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI REDFN Q105 HRV LSU BDDAY MRSSH FUZ CDS PNH CIM ALS JNC J15 TCH PDT CHINS5 KSEA\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI REDFN Q105 HRV LSU BDDAY MRSSH FUZ CDS PNH CIM ALS LOPEC JNC J15 TCH PDT CHINS5 KSEA\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR HANKO MEMFS BUM DRABS PECKS GCC BIL MLP GLASR3 KSEA\" readonly>";
			break;
		case "SFO": // Updated 05-30-2025
			result += "<!-- Updated 05-30-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 BLD J92 LIDAT RUSME DYAMD5 KSFO\" readonly>"; // CDR G0
			result += "<br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 MCB SWB KF18E SPS J58 PNH Q130 ROCCY Q164 KATTS OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP HOTHH IRQ SGF ICT J28 MLF ILC KATTS OAL INYOE DYAMD5 KSFO\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 LEV J86 ELP J50 TFD J212 DECAS J65 PMD AVE SERFR SERFR4 KSFO\" readonly>";
			result += "<br/>South/Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 IAH J86 ELP J50 TFD J212 DECAS J65 PMD AVE SERFR SERFR4 KSFO\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW HRVLK KELPP LCHLH MUSYL SAT J138 FST J86 ELP J50 TFD J212 DECAS J65 PMD AVE SERFR SERFR4 KSFO\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG CRP KH87A FST J2 ELP J50 TFD J212 DECAS J65 PMD AVE SERFR SERFR4 KSFO\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 BNGOS LAL SZW DEFUN J2 IAH J86 ELP J50 TFD J212 DECAS J65 PMD J6 AVE BSR BSR3 KSFO\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-30-202
			result += "<!-- Verified with ATCSCC on 04-18-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV J86 BLD J92 LIDAT RUSME DYAMD5 KSFO\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO KEENY MHZ ELD TXO BLD JEDNA BTY J92 LIDAT RUSME DYAMD5 KSFO\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 BLD J92 LIDAT RUSME DYAMD5 KSFO\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO KEENY MHZ ELD TXO BLD JEDNA BTY J92 LIDAT RUSME DYAMD5 KSFO\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV J86 BLD J92 LIDAT RUSME DYAMD5 KSFO\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV J86 BLD J92 LIDAT RUSME DYAMD5 KSFO\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR HANKO MEM PER LBL DVC ILC RUMPS OAL DYAMD DYAMD5 KSFO\" readonly>";
			break;
		case "SLC": // Updated 06-17-2025
			result += "<!-- Updated 06-17-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 FUZ CDS PNH ALS JNC J12 HELPR JAZZZ1 KSLC\" readonly>"; // CDR G0
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 FUZ CDS PNH ALS JNC J12 HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN MUDHO Q128 FLOOD JNC J12 HELPR PITTT1 KSLC\" readonly>";
			result += "<br/><br/>North via MCI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 FAM MCI KP63C LBF CYS OCS CARTR1 KSLC\" readonly>";
			result += "<br/>South via JCT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 JCT Q20 CNX J15 RSK DVC HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>South via ELP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP J86 BAVPE CORKR J11 BCE QWENN6 KSLC\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW HRVLK KELPP LCHLH MUSYL SAT J138 FST J86 ELP J86 BAVPE CORKR J11 BCE QWENN6 KSLC\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG CRP KH87A FST J2 ELP J86 BAVPE CORKR J11 BCE QWENN6 KSLC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 06-17-2025
			result += "<!-- Verified with ATCSCC on 06-17-2025 -->";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 REDFN Q105 HRV LSU AEX J58 TURNN ADUKE J58 FUZ CDS PNH ALS JNC HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 CEW J50 MCB TURNN ADUKE J58 FUZ CDS PNH ALS JNC HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV LSU AEX J58 TURNN ADUKE J58 FUZ CDS PNH ALS JNC HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 MCB TURNN ADUKE J58 FUZ CDS PNH ALS JNC HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI REDFN Q105 HRV LSU AEX J58 TURNN ADUKE J58 FUZ CDS PNH ALS JNC HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI REDFN Q105 HRV LSU AEX J58 TURNN ADUKE J58 FUZ CDS PNH ALS JNC HELPR JAZZZ1 KSLC\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR HANKO MEM TUL PER GCK HGO EKR RACER JAZZZ1 KSLC\" readonly>";
			break;
		case "SMF": // Updated 05-30-2025
			result += "<!-- Updated 05-30-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><br/>NRP<input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV J58 PNH Q130 ROCCY Q164 KATTS JSICA CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/><b>Non OW: KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 MCB SWB KF18E SPS J58...<\/b>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN MUDHO Q128 JSICA CRASY SLMMR5 KSMF\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS REMIS Y280 LEV J86 ELP J50 TFD J212 DECAS J65 EHF NURAY SUUTR4 KSMF\" readonly>";
			result += "<br/><b>Non OW: KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 IAH J86...<\/b>";
			result += "<br/><br/>North via MCI<span style=\"color:green\"> (Ok to File)</span>:<input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 FAM MCI HCT RIDJE J56 TCH J154 BAM J94 LLC ANAHO SLMMR5 KSMF\" readonly>";
			result += "<br/><br/>Full OW via SAT<span style=\"color:red\"> (Coord Req)</span>:<br/><input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW HRVLK KELPP LCHLH MUSYL SAT J138 FST J86 ELP J50 LANDO J65 EHF NURAY SUUTR4 KSMF\" readonly>";
			result += "<br/>Full OW via CRP<span style=\"color:red\"> (Coord Req)</span>:<br/><input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG CRP KH87A FST J2 ELP J50 LANDO J65 EHF NURAY SUUTR4 KSMF\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 BNGOS LAL SZW DEFUN J2 IAH J86 ELP J50 TFD J212 DECAS J65 PMD J6 AVE BSR BSR3 KSFO\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-30-2025
			break;
		case "STL": // Updated 05-28-2025
			result += "<!-- Updated 05-28-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 VISQA BOOSH3 KSTL\" readonly>"; // CDR H0
			result += "<br/><br/>East/ZME Avoid: <input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ J99 GHATS PXV BOOSH3 KSTL\" readonly>"; // CDR F0
			result += "<br/>West/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV LAREY LIT SGF KAYLA3 KSTL\" readonly>";
			result += "<br/><br/>East/OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA OGGRE Y436 DEDDY IRQ BNA BOOSH3 KSTL\" readonly>";
			result += "<br/>West/Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG VUH IAH J33 DONIE KF24E TUL J98 SGF KAYLA3 KSTL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA POTTR6 WINCO LAL CTY J151 VISQA QBALL1 KSTL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-28-2025
			result += "<!-- Verified with ATCSCC on 05-28-2025 -->";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS Q89 YANTI VISQA BOOSH3 KSTL\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS VLKNN GETME J151 VISQA BOOSH3 KSTL\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR Q116 VLKNN GETME J151 VISQA BOOSH3 KSTL\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 VISQA BOOSH3 KSTL\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR VLKNN GETME J151 VISQA BOOSH3 KSTL\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN GETME J151 VISQA BOOSH3 KSTL\" readonly>";
			break;
		case "SYR": // Updated 05-28-2025
			result += "<!-- Updated 05-28-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE BLAAN Q69 RICCS ELZ BEEPS NABOR KSYR\" readonly>"; // CDR A0
			result += "<br/><br/>East/OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 PYTON PSB J59 SYR KSYR\" readonly>";
			result += "<br/>West/ZDC Avoid<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR VXV KONGO Q71 PSB J59 SYR KSYR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-28-2025
			result += "<!-- Verified with ATCSCC on 02-27-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE BLAAN Q69 RICCS ELZ BEEPS NABOR KSYR\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 BLAAN Q69 RICCS JST ELZ BEEPS NABOR KSYR\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 BLAAN Q69 RICCS JST ELZ BEEPS NABOR KSYR\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 BLAAN Q69 RICCS JST ELZ BEEPS NABOR KSYR\" readonly>";
			break;
		case "TPA": // Updated 02-27-2025 // Mandatory Routes checked
			result += "<!-- Updated 02-27-2025 M -->";
			result += "<br/><br/><b>Faa Pref Route: (Avg FL200-230)</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA BNGOS4 COREA BLFRG3 KTPA\" readonly>"; // CDR B0
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><input style=\"width:75%\"; value=\"KMIA WINCO LBV BRDGE9 KTPA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-19-2025
			result += "<!-- Verified with ATCSCC on 04-19-2025 -->";
			result += "<br/>B0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 COREA BLFRG3 KTPA\" readonly>";
			break;
		case "TUL": // Updated 05-28-2025
			result += "<!-- Updated 05-28-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV FSM MAYJI TUL KTUL\" readonly>"; // CDR G0
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO FSM MAYJI TUL KTUL\" readonly>"; // CDR H0
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR GQO SPKER LUKKY J46 TUL KTUL\" readonly>";
			result += "<br/><br/>East/OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR HANKO MEM KTUL\" readonly>"; // CDR Z2
			result += "<br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG VUH IAH J33 DONIE OKM KTUL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA POTTR6 WINCO LAL CTY VUZ J14 LIT FSM TUL KTUL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-28-2025
			result += "<!-- Verified with ATCSCC on 05-28-2025 -->";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO FSM MAYJI TUL KTUL\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV FSM MAYJI TUL KTUL\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO FSM MAYJI TUL KTUL\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV FSM MAYJI TUL KTUL\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV FSM MAYJI TUL KTUL\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR HANKO MEM KTUL\" readonly>";
			break;
		case "TYS": // Updated 05-28-2025
			result += "<!-- Updated 05-28-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO ODF KTYS\" readonly>"; // CDR F0
			result += "<br/><br/>East/OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY IRQ ODF KTYS\" readonly>";
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR KTYS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-28-2025
			result += "<!-- Verified with ATCSCC on 05-28-2025 -->";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO ODF KTYS\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR BRUTS Q118 THRSR KTYS\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO WIGVO ODF KTYS\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR BRUTS Q118 THRSR KTYS\" readonly>";
			break;
		case "YUL": // Updated 07-30-2025
			result += "<!-- Updated 07-30-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO WAALT Q131 EARZZ JAMIE Q133 PBERG CARTR5 CYUL\" readonly>";
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS ELLDE Q97 PAACK JAMIE Q133 PBERG CARTR5 CYUL\" readonly>"; // CDR A0
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR VXV KTRYN OHIOS APE J83 DJB YXU YYZ SANIN MIGLO HABBS7 CYUL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 07-30-2025
			result += "<!-- Verified with ATCSCC on 07-30-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS ELLDE Q97 PAACK JAMIE Q133 PBERG CARTR5 CYUL\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q109 PANDY ELLDE Q97 PAACK JAMIE Q133 PBERG CARTR5 CYUL\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO Q109 PANDY ELLDE Q97 PAACK JAMIE Q133 PBERG CARTR5 CYUL\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO WAALT Q131 EARZZ JAMIE Q133 PBERG CARTR5 CYUL\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q109 PANDY ELLDE Q97 PAACK JAMIE Q133 PBERG CARTR5 CYUL\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO WAALT Q131 EARZZ JAMIE Q133 PBERG CARTR5 CYUL\" readonly>";
			break;
		case "YYZ": // Updated 05-28-2025
			result += "<!-- Updated 05-28-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 PYTON WOZEE LINNG3 CYYZ\" readonly>"; // CDR Z0
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 RICCS OXMAN LINNG3 CYYZ\" readonly>"; // CDR A0
			result += "<br/>West<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 GLAZR FLM J43 CRL QWERI NUBER6 CYYZ\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODDO
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-28-2025
			result += "<!-- Verified with ATCSCC on 05-28-2025 -->";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 RICCS OXMAN LINNG3 CYYZ\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 BLAAN Q69 RICCS OXMAN LINNG3 CYYZ\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 BLAAN Q69 RICCS OXMAN LINNG3 CYYZ\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC Q129 PYTON WOZEE LINNG3 CYYZ\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 BLAAN Q69 RICCS OXMAN LINNG3 CYYZ\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 PYTON WOZEE LINNG3 CYYZ\" readonly>";
			break;
		}
	return result;
}
