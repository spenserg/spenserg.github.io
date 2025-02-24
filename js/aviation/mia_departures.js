mia_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
	switch(arvl) {

// MIA-ALB skipped

		case "ATL": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS LAIRI LARZZ JJEDI3 KATL\" readonly>" // CDR F0
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q110 DAWWN BEORN HOBTT2 KATL\" readonly>";
			result += "<br/>East/Full OW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY HOTHH JJEDI3 KATL\" readonly>"
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA WINCO LAL SZW MGM KATL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS LAIRI LARZZ JJEDI3 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>F1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS LAIRI LARZZ SITTH2 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR DAWWN BEORN HOBTT2 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>G3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR DAWWN BEORN GNDLF2 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>H3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q110 DAWWN BEORN GNDLF2 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR DAWWN BEORN HOBTT2 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>M3<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR DAWWN BEORN GNDLF2 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY HOTHH JJEDI3 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>Z1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY HOTHH SITTH2 KATL\" readonly>"; // Verified with ATCSCC on 02-21-2025
			break;
		case "AUS": // Updated 01-11-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 LEV LCH WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/><b style=\"color:orange\">FAA pref is KMIA BNGOS4 DOLIE Y280 LEV.. but it gets rerouted to the above<\/b>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ PATOY CEW J2 IAH WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE KELPP ANKRR SKUBA WAILN WLEEE7 KAUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 BNGOS LAL SZW DEFUN J2 IAH BITER9 KAUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>B2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV LCH WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/>G0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ3 BAGGS Y290 LEV LCH WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/>H0: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 LCH Q24 MOLLR DBOYS WLEEE7 KAUS\" readonly>";
			result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MIA1 MAYNR MARCI LEV LCH WEEED WLEEE7 KAUS\" readonly>";
			result += "<br/>W2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MIA1 GWAVA GLAMS TAZER MARCI LEV LCH WEEED WLEEE7 KAUS\" readonly>";
			break;
		case "BDL": // Updated 02-07-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO WAALT Q131 EARZZ JAMIE CONFR Q481 DPK DPK3 KBDL\" readonly>"; // CDR Z0
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS ELLDE Q97 PAACK JAMIE CONFR Q481 DPK DPK3 KBDL\" readonly>"; // CDR A0
			result += "<br/><br/>Full OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA PELCN ROWSY Y494 YAALE Y484 GEDIC SARDI DPK3 KBDL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-22-2025
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
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 DEEDA WANDS KBHM\" readonly>";
			result += "<br/><br/>West/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ3 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV J31 MEI KBHM\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-22-2025
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO WANDS KBHM\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 DEEDA WANDS KBHM\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 DEDDY WANDS KBHM\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR Q116 DEEDA WANDS KBHM\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY WANDS KBHM\" readonly>";
			break;
			break;
		case "BNA": // Updated 02-07-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ J99 VXV KBNA\" readonly>";
			result += "<br/>OW West: <input style=\"width:75%\"; value=\"KMIA BNGOS4 DOLIE CIGAR Y290 BLVNS REDFN Q105 HRV J31 MEI HRTUN CHSNE2 KBNA\" readonly>";
			result += "<br/>OW East: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO WAALT ILM SDZ VXV SWFFT2 KBNA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>G2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ3 SHAQQ KNOST DEANR BRUTS Q118 THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
			result += "<br/>H0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
			result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MIA1 MAYNR MARCI SHAQQ KNOST DEANR BRUTS Q118 THRSR WESSN JAGIR SWFFT2 KBNA\" readonly>";
			break;

// MIA-BOI skipped

		case "BOS": // Updated 02-07-2025
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
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 PYTON BENEE KBUF\" readonly>"; // CDR Z0
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 RICCS EWC DKK KBUF\" readonly>"; // CDR A0
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN3 KPASA Q118 VOSTK CVG CREEP Q29 DUTSH DJB KBUF\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo	
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-22-2025
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 RICCS EWC DKK KBUF\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 BLAAN Q69 RICCS EWC DKK KBUF\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 BLAAN Q69 RICCS EWC DKK KBUF\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC Q129 PYTON BENEE KBUF\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 BLAAN Q69 RICCS EWC DKK KBUF\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 PYTON BENEE KBUF\" readonly>";
			break;
		case "BWI": // Updated 02-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC ZORDO Q111 RUKRR THHMP RAVNN7 KBWI\" readonly>"; // CDR Z0
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 RAYVO Q113 AARNN THHMP RAVNN7 KBWI\" readonly>"; // CDR A0
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR VXV TONIO Q34 SITTR CJAAE RAVNN7 KBWI\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY CRG IRQ SPA J85 NEALS CJAAE RAVNN7 KBWI\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-22-2025
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 RAYVO Q113 AARNN THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 OGRAE GOOOB THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO Q99 OGRAE GOOOB THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC ZORDO Q111 RUKRR THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 OGRAE GOOOB THHMP RAVNN7 KBWI\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC ZORDO Q111 RUKRR THHMP RAVNN7 KBWI\" readonly>";
			break;
		case "CAE": // Updated 02-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP KCAE\" readonly>"; // CDR A0
			result += "<br/><br/>East/Full OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR AR16 SEELO OGGRE Y436 DEDDY CAE KCAE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY CRG IRQ KCAE\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-22-2025
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP KCAE\" readonly>";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 TEUFL KCAE\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO KCAE\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 DEDDY KCAE\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO KCAE\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY KCAE\" readonly>";
			break;
		case "CHS": // Updated 02-07-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP SAV BAGGY3 KCHS\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q99 TEEEM DEQUE BAGGY3 KCHS\" readonly>";
			result += "<br/>East OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR AR16 SEELO OGGRE Y436 PITRW KCHS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>A0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP SAV BAGGY3 KCHS\" readonly>";
			result += "<br/>G2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO SAV BAGGY3 KCHS\" readonly>";
			result += "<br/>H2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO SAV BAGGY3 KCHS\" readonly>";
			result += "<br/>K2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 PITRW KCHS\" readonly>";
			result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO SAV BAGGY3 KCHS\" readonly>";
			result += "<br/>Z0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 PITRW KCHS\" readonly>";
			break;
		case "CLE": // Updated 02-07-2025
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
		case "CLT":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO PONZE BANKR5 KCLT\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP CHECR STOCR4 KCLT\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CSG BESTT JONZE5 KCLT\" readonly>";
			result += "<br/>Rocket Launch: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS HILTI DOFFY CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
			result += "<br/>Overwater: <input style=\"width:75%\"; value=\"KMIA FOLZZ2 ZFP AR23 OZENA Y309 FLRDA SAGGY DIW KCLT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA PHK CRG SAV FLO RASLN3 KCLT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>A0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP CHECR STOCR4 KCLT\" readonly>";
			result += "<br/>F0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO PONZE BANKR5 KCLT\" readonly>";
			result += "<br/>G2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
			result += "<br/>H2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q99 CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
			result += "<br/>K2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE PITRW STOCR4 KCLT\" readonly>";
			result += "<br/>M2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA MIA1 MAYNR MARCI SHAQQ KNOST DEANR CAMJO TWINS PONZE BANKR5 KCLT\" readonly>";
			result += "<br/>Z0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 PITRW STOCR4 KCLT\" readonly>";
			break;
		case "CHS":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP SAV BAGGY3 KCHS\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q99 TEEEM DEQUE BAGGY3 KCHS\" readonly>";
			result += "<br/>Overwater: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR AR16 SEELO OGGRE Y436 PITRW KCHS\" readonly>";
			//result += "<br/><br/><b>Non RNAV</b>"; //TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>A0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP SAV BAGGY3 KCHS\" readonly>";
			result += "<br/>G2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO SAV BAGGY3 KCHS\" readonly>";
			result += "<br/>H2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q99 CAMJO SAV BAGGY3 KCHS\" readonly>";
			result += "<br/>K2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 PITRW KCHS\" readonly>";
			result += "<br/>M2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO SAV BAGGY3 KCHS\" readonly>";
			result += "<br/>Z0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 PITRW KCHS\" readonly>";
			break;
		case "CMH": // Updated 02-21-2025
			result += "<br/><br/><b>Faa Pref Route:</b>"; // CDR A0
			result += "<br/><input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE SPA MCGNS SCRLT2 KCMH\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN3 KPASA Q118 THRSR Q79 SWAPP GETTA JAKTZ1 KCMH\" readonly>";
			result += "<br/>East/Full OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ2 ALYRA OZENA Y309 FLRDA SAGGY DIW RDU BKW MCGNS SCRLT1 KCMH\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE BURGG MCGNS SCRLT2 KCMH\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO BURGG MCGNS SCRLT2 KCMH\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO BURGG MCGNS SCRLT2 KCMH\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO QUIWE BURGG MCGNS SCRLT2 KCMH\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO BURGG MCGNS SCRLT2 KCMH\" readonly>"; // Verified with ATCSCC on 02-21-2025
			break;
		case "CVG": // Updated 02-21-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE SPA CUBIM JAKIE6 KCVG\" readonly>"; // CDR A0
			result += "<br/>West: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR VXV JAKIE6 KCVG\" readonly>";
			result += "<br/>East/Full OW: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE SPA CUBIM KCVG\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE SPA CUBIM JAKIE6 KCVG\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS THRSR VXV JAKIE6 KCVG\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR BRUTS Q118 THRSR VXV JAKIE6 KCVG\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR VXV JAKIE6 KCVG\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 DEDDY QUIWE SPA CUBIM KCVG\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR BRUTS Q118 THRSR VXV JAKIE6 KCVG\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE SPA CUBIM KCVG\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VXV JAKIE6 KCVG\" readonly>"; // Verified with ATCSCC on 02-21-2025
			break;
		case "DCA": // Updated 02-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>"; // CDR Z0
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>"; // CDR A0
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA ALTNN TRV OMN CRG SAV CHS ILM TYI RIC IRONS7 KDCA\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-22-2025
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 RAYVO Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC RANAY TANJA WAVES CAPSS3 KDCA\" readonly>";
			break;
		case "DEN": // Updated 02-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS RZC LBL HALEN NIIXX3 KDEN\" readonly>"; // CDR H0
			result += "<br/><b style=\"color:orange\"> As of 02/23/25 Pref Route is KMIA HURCN4 SMELZ Q116 JAWJA MGMRY VLKNN Q116 MEMFS...idk why<\/b>";
			result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 SPS HALEN NIIXX3 KDEN\" readonly>"; // CDR G0
			result += "<br/>North: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN ENEME DOOLY THRSR RMG J66 MEM ICT J28 GCK KIISS CLASH4 KDEN\" readonly>";
			result += "<br/>SW Arrival: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 LEV KCEEE TKNIQ MOLLR JCT Q20 CNX GNDLA TBARR3 KDEN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA LAL SZW MGM MEI SQS LIT TUL ICT SOSPE OATHE DANDD1 KDEN\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-22-2025
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 REDFN Q105 HRV J58 SPS HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS VLKNN Q116 MEMFS RZC LBL HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 SPS HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS RZC LBL HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI REDFN Q105 HRV J58 SPS HALEN NIIXX3 KDEN\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR HANKO MEM PER GCK KIISS CLASH4 KDEN\" readonly>";
			break;
		case "DFW": // Updated 02-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV PNUTS BEREE3 KDFW\" readonly>"; // CDR G1
			result += "<br/><b style=\"color:orange\">CDR uses Y290: KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS WHINY4 KDFW<\/b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>"; // CDR H0
			result += "<br/><br/>Full OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG VUH IAH CRIED BEREE3 KDFW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 HURCN LAL SZW DEFUN J2 CEW J50 AEX YEAGR4 KDFW\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>G0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>G1 (Ok to File): <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>H0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>H1 (Ok to File): <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW J50 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>M2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA MAYNR3 MAYNR MARCI REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>M3 (Coord Req): <input style=\"width:75%\"; value=\"KMIA MAYNR3 MAYNR MARCI REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>W2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA MIA1 GWAVA GLAMS TAZER MARCI REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>W3 (Coord Req): <input style=\"width:75%\"; value=\"KMIA MIA1 GWAVA GLAMS TAZER MARCI REDFN Q105 HRV J58 AEX PNUTS BEREE3 KDFW\" readonly>";
			break;

// MIA-DSM skipped

		case "DTW": // Updated 02-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE HNN JAMOX KLYNK3 KDTW\" readonly>"; // CDR A0
			result += "<br/><br/>East/OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 AARNN FAK LEONI KOZAR BONZZ2 KDTW\" readonly>";
			result += "<br/>West: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR SMTTH Q67 HNN SUBWY HTROD2 KDTW\" readonly>"; // CDR H0
			result += "<br/>SW Arrival: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR Q79 IIU WWODD LECTR3 KDTW\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-22-2025
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
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA MGM MEM J41 SGF SLN HLC GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/><br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV EIC ADM TOTOE LAA AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/>South/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV J58 FUZ CDS PNH TBE AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/>SW Arrival/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 LEV J86 JCT Q20 HONDS J15 ABQ J15 JNC JESIE RLG KEGE\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA WINCO SZW MGM MEM J41 SGF SLN HLC GLD TXC AVVVS HUGGS RLG KEGE\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-22-2025
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
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-22-2025
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
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO HYK FWA KGRR\" readonly>"; // CDR F0
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN Q139 IIU OKK GSH VIO KGRR\" readonly>";
			result += "<br/>OW/East: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA OGGRE Y436 DEDDY QUIWE BENBY DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR Z0
			result += "<br/><br/>OW/West: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV MCB J35 MEM J71 RBS PRIGE PMM KGRR\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG VUH TXK ARG ENL BVT PMM KGRR\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO HYK FWA KGRR\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS THRSR GLAZR KGRR\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR BRUTS Q118 THRSR KGRR\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 JOHNN THRSR GLAZR KGRR\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 DEDDY VXV J43 FLM FWA KGRR\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO THRSR KGRR\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE VXV J43 FLM FWA KGRR\" readonly>";
			break;
		case "GSO": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE CAE BLOCC2 KGSO\" readonly>"; // CDR A0
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE CAE BLOCC2 KGSO\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO SPA HMV KGSO\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO SPA HMV KGSO\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO KGSO\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO SPA HMV KGSO\" readonly>";
			break;
		case "IAH": // Updated 02-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS REMIS Y280 LEV NNCEE2 KIAH\" readonly>";
			result += "<br/><b style=\"color:orange\">CDR uses Y290: KMIA GLADZ4 BAGGS Y290 LEV NNCEE2 KIAH<\/b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 SJI NNCEE2 KIAH\" readonly>"; // CDR H0
			result += "<br/><br/>Full OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE KELPP NNCEE2 KIAH\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 HURCN LAL SZW DEFUN J2 SJI GILCO5 KIAH\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-22-2025
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
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS WYLMS KILM\" readonly>"; // CDR A0
			result += "<br/><br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA KILM\" readonly>"; // CDR Z0
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS WYLMS KILM\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q109 PANDY KILM\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO Q109 PANDY KILM\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE FLRDA IDOLS KILM\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q109 PANDY KILM\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA KILM\" readonly>";
			break;
		case "IND": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR Q79 SWAPP HAGAL GIIBS4 KIND\" readonly>"; // CDR A0
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP SAV CAE HMV HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN WAKOL TIIDE Q31 TERGE SMUKE3 KIND\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 WIGVO VXV KIND\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR JOHNN Q118 THRSR Q79 SWAPP HAGAL GIIBS4 KIND\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR JOHNN Q118 THRSR Q79 SWAPP HAGAL GIIBS4 KIND\" readonly>";
			break;
		case "JAX":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY ORL HAINY QUBEN1 KJAX\" readonly>"; // CDR F0
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 JINOS WILON TEBOW KJAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA FLMGO2 STYMY ORL POGIE2 KJAX\" readonly>"; // CDR F1
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY ORL HAINY QUBEN1 KJAX\" readonly>";
			result += "<br/>F1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY ORL POGIE2 KJAX\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR HILIS TEBOW1 KJAX\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA HILIS TEBOW1 KJAX\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE ORL HAINY QUBEN1 KJAX\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR HILIS TEBOW1 KJAX\" readonly>";
			break;
		case "JFK": // Updated 02-22-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA SAGGY CHIEZ Q133 KALDA Q108 SIE CAMRN4 KJFK\" readonly>"; // CDR Z0
			result += "<br/><br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS JOHAR Q109 DFENC SAWED Q108 SIE CAMRN4 KJFK\" readonly>"; // CDR A0
			result += "<br/>Full OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y495 CAMRN KJFK\" readonly>"; // CDR DW
			result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 GOZZR ETECK OZENA ROWSY OTTNG JOELO ETMEY AGUNE EXXES PREPI Y495 CAMRN KJFK\" readonly>";
			result += "<br/>FLORIDA TO NE 3: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR RAFTN FLM J43 ROD KLYNE Q29 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA9 HURCN ORL LIBBY CHS ILM ORF SIE CAMRN4 KJFK\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS JOHAR Q109 DFENC SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>DW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y495 CAMRN KJFK\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q109 DFENC SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO Q109 DFENC SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q109 DFENC SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q109 DFENC SAWED Q108 SIE CAMRN4 KJFK\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA SAGGY CHIEZ Q133 KALDA Q108 SIE CAMRN4 KJFK\" readonly>";
			break;
		case "LAS": // Updated 02-21-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV J58 FUZ TXO J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW MHZ ELD TXK SPS J72 GUP HAHAA RKSTR4 KLAS\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV J86 INW HAHAA RKSTR4 KLAS\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 IAH J86 INW HAHAA RKSTR4 KLAS\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 INW HAHAA RKSTR4 KLAS\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 IAH J86 INW HAHAA RKSTR4 KLAS\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV J86 INW HAHAA RKSTR4 KLAS\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV J86 INW HAHAA RKSTR4 KLAS\" readonly>"; // Verified with ATCSCC on 02-21-2025
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR YAALL J14 IRW J78 ABQ J72 GUP HAHAA RKSTR4 KLAS\" readonly>"; // Verified with ATCSCC on 02-21-2025
			break;
		case "LAX":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>"; // CDR G0
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW MHZ ELD TXK SPS J72 ABQ J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>NE Arrival: <input style=\"width:75%\"; value=\"KMIA BNGOS4 DOLIE CIGAR Y290 BACCA ROZZI Y280 REDFN Q105 HRV J58 FUZ TXO J72 ABQ J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/><br/>Full OW via SAT: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW HRVLK KELPP LCHLH MUSYL SAT J138 FST J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>Full OW via CRP: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG CRP ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA9 BNGOS LAL SZW CEW J2 IAH J86 JCT J2 ELP J50 SSO J4 TNP BASET5 KLAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN CEW J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN CEW J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR HANKO GAD MEM PNH J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			break;
		case "LGA": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q107 HURTS PROUD2 KLGA\" readonly>"; // CDR Z0
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 HURTS PROUD2 KLGA\" readonly>"; // CDR A0
			result += "<br/>Full OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y495 OWENZ FATON HOFFI KEYED BDR PRENO KLGA\" readonly>"; // CDR DW			
			result += "<br/><br/>Aviod ZDC: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q99 CAMJO TWINS HVQ GEFFS Q71 PSB MIP4 KLGA\" readonly>";
			result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 GOZZR ETECK OZENA TUBBS ROBBB NAALA HOBOH WEBBB KENDA PRLJM KEYED EEGOR PRENO KLGA\" readonly>";
			result += "<br/>FL TO NE 3: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR RAFTN FLM J43 ROD KLYNE Q29 WWSHR TEESY J146 ETG MIP4 KLGA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA9 FLMGO ORL SAV FLO RDU RIC PXT KORRY4 KLGA\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>DW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y495 OWENZ FATON HOFFI KEYED BDR PRENO KLGA\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC Q107 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 POLYY DADDS Q87 HURTS PROUD2 KLGA\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q107 HURTS PROUD2 KLGA\" readonly>";
			break;
		case "LIT": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS KLIT\" readonly>"; // CDR H0
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS VLKNN Q116 MEMFS KLIT\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR Q116 MEMFS KLIT\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS KLIT\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR Q116 MEMFS KLIT\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR HANKO MEMFS KLIT\" readonly>";
			break;
		case "MCI": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS KRTNY MHOMS3 KMCI\" readonly>"; // CDR H0
			result += "<br/><br/>North/East: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 SHRKS LAIRI VRSTY THRSR HITMN Q19 STL MCM BQS BQS8 KMCI\" readonly>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV MCB LIT SGF TYGER7 KMCI\" readonly>";
			result += "<br/><br/>SW Arrival/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV J58 AEX EIC J20 IRW J23 PER ZOURA WUTNG3 KMCI\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG VUH IAH FUZ J21 ADM PER ZOURA WUTNG3 KMCI\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS VLKNN Q116 MEMFS KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR Q116 ZAVEL KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO ZAVEL KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY AHN BNA KRTNY MHOMS3 KMCI\" readonly>";
			break;
		case "MCO": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route: (Avg FL190):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA FLMGO2 WAPOM RIDES2 KMCO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA8 VACAY BAIRN GOOFY7 KMCO\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 COREA JOKRS3 KMCO\" readonly>";
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 WAPOM RIDES2 KMCO\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ZFP CCLUB RIDES KMCO\" readonly>";
			break;
		case "MEM": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN WASER VANZE3 KMEM\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA JENIM PATOY DEANR MICES JAWJA CABLO DEFUN J2 CEW J50 MCB MEVEE HOBRK4 KMEM\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ VXV RAMRD BLUZZ5 KMEM\" readonly>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 PEKON LCH AEX LITTR CONDR4 KMEM\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS VLKNN WASER VANZE3 KMEM\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR Q116 VLKNN WASER VANZE3 KMEM\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN WASER VANZE3 KMEM\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR Q116 VLKNN WASER VANZE3 KMEM\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN WASER VANZE3 KMEM\" readonly>";
			break;
		case "MKE": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR Q79 IIU MACES VINNE LEEDN GOPAC3 KMKE\" readonly>"; // CDR H0
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 STL J101 SPI CHZHD GOPAC3 KMKE\" readonly>";
			result += "<br/>East: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE Q93 QUIWE HNN JAMOX J85 DJB J34 CRL PEGEE GETCH LYSTR SUDDS KMKE\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>F0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 MELKR IRQ J99 IIU MACES VINNE LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 THRSR Q79 IIU MACES VINNE LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO OGGRE Y436 DEDDY THRSR Q79 IIU MACES VINNE LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR BRUTS Q118 THRSR Q79 IIU MACES VINNE LEEDN GOPAC3 KMKE\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR Q79 IIU MACES VINNE LEEDN GOPAC3 KMKE\" readonly>";
			break;
		case "MSP": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 THRSR Q79 IIU J89 OBK KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ VXV J99 IIU J89 OBK KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 PATOY MGM MEM J41 SGF MNOSO BLUEM4 KMSP\" readonly>";
			result += "<br/><br/>East via DJB: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ SPA J85 DJB J34 BAE KBULL KKILR3 KMSP\" readonly>";
			result += "<br/>SW via LIT: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO MEI LIT RZC MCI ROKKK NITZR3 KMSP\" readonly>";
			result += "<br/>OW/Gulf: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV MCB J35 FAM J151 STL IOW MNOSO BLUEM4 KMSP\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS VLKNN MNOSO BLUEM4 KMSP\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO THRSR Q79 IIU J89 OBK KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN MNOSO BLUEM4 KMSP\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO THRSR Q79 IIU J89 OBK KAMMA KKILR3 KMSP\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY AHN BNA MNOSO BLUEM4 KMSP\" readonly>";
			break;
		case "MSY": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 SJI MNSTR1 KMSY\" readonly>"; // CDR H0
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV KMSY\" readonly>"; // CDR G0
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA9 BNGOS LAL HEVVN DEFUN SJI SLIDD2 KMSY\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 REDFN Q105 HRV KMSY\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 SJI MNSTR1 KMSY\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV KMSY\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 SJI MNSTR1 KMSY\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI REDFN Q105 HRV KMSY\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI REDFN Q105 HRV KMSY\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY MGMRY SJI MNSTR1 KMSY\" readonly>";
			break;
		case "OKC": // Updated 02-23-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV LSU SWB EIC J20 IRW KOKC\" readonly>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO MGM LIT DWINE RIFFL3 KOKC\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN YAALL J14 IRW KOKC\" readonly>";
			result += "<br/>North via VXV: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 TEUFL TWINS IPTAY VXV BAZOO BETIE ARG BERGG TUL AWLIV MURAH3 KOKC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV KOKC\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DWINE RIFFL3 KOKC\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV KOKC\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DWINE RIFFL3 KOKC\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV KOKC\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV KOKC\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR YAALL LIT KLUBB DWINE RIFFL3 KOKC\" readonly>";
			break;
		case "OMA": // Updated 02-23-2025
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No Faa Pref Route listed
			result += "<br/><br/><input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 FAM HLV LMN MARWI4 KOMA\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ ODF BWG STL J45 IRK LMN MARWI4 KOMA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW MEI SQS LIT RZC BUM MCI STJ MARWI4 KOMA\" readonly>";
			result += "<br/>South/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ3 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV ELD RZC MCI STJ MARWI4 KOMA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "ORD": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR H0
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ SPA J83 APE J178 FWA WATSN4 KORD\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA Q116 VLKNN GETME J151 FAM FTZ SHAIN2 KORD\" readonly>";
			result += "<br/><br/>East/OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA OGGRE Y436 DEDDY QUIWE BENBY DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>"; // CDR Z0
			result += "<br/>West/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV MCB J35 RUSLR FTZ TRTLL6 KORD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 BNGOS LAL SZW LGC BWG IIU MIE FWA KORD\" readonly>";
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS THRSR Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR JOHNN Q118 BONNT VEECK5 KORD\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q118 HEVAN BONNT VEECK5 KORD\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR JOHNN Q118 BONNT VEECK5 KORD\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA OGGRE Y436 DEDDY QUIWE BENBY DOOGE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY QUIWE Q93 HEVAN BONNT VEECK5 KORD\" readonly>";
			break;
		case "ORF": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS RAPZZ Q135 RREGG CVI DRONE DRONE2 KORF\" readonly>"; // CDR A0
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC ISO DRONE2 KORF\" readonly>"; // CDR Z0
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>A0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS RAPZZ Q135 RREGG CVI DRONE DRONE2 KORF\" readonly>";
			result += "<br/>G2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q109 PANDY RAPZZ Q135 RREGG CVI DRONE DRONE2 KORF\" readonly>";
			result += "<br/>H2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 CAMJO Q109 PANDY RAPZZ Q135 RREGG CVI DRONE DRONE2 KORF\" readonly>";
			result += "<br/>K2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC ISO DRONE2 KORF\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q109 PANDY RAPZZ Q135 RREGG CVI DRONE DRONE2 KORF\" readonly>";
			result += "<br/>Z0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC ISO DRONE2 KORF\" readonly>";
			break;
		case "PDX": // Updated 02-24-2025
			//result += "<br/><br/><b>Faa Pref Route:</b>"; // No Faa pref route listed
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 MEMFS RZC ICT J182 GLD J80 FQF J20 PIH J54 BOI J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV J58 SPS J168 LAA J20 PIH J54 BOI J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP HOTHH IRQ BNA ICT J182 GLD J80 FQF J20 PIH J54 BOI J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>South/OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 LEV LCH LFK J50 ABI J65 CME J15 HONDS Q20 CNX J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/>South via DRK: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 JCT J15 INK J108 TCS NABOB Q13 DRK BLD J92 BTY KENNO YERIN J92 LMT MOXEE TMBRS3 KPDX\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>"; // NO CDRS for this pair 02-24-2025
			break;
		case "PHL":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA ROWSY FLRDA IDOLS SKARP Q101 TUGGR KALDA ZJAAY JIIMS4 KPHL\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 ALWZZ OGRAE Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 SILLY LYNUS B24 DASHA JIIMS4 KPHL\" readonly>";
			result += "<br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q99 CAMJO ALLMA BURGG Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 GOZZR ETECK OZENA ROWSY OTTNG HAAYY WICKE DASHA JIIMS4 KPHL\" readonly>";
			result += "<br/>FLORIDA TO NE 1: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 SHRKS WIGVO IRQ BURGG Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>FLORIDA TO NE 3: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ SPA J83 APE JST BOJID4 KPHL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA6 HEDLY CRG SAV CHS J121 SWL VCN9 KPHL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>A0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 JROSS Q135 CUDLE Q117 SAWED Q97 ZJAAY JIIMS4 KPHL\" readonly>";
			result += "<br/>G2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>H2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>K2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA KLADA2 KLADA UPACE FLRDA IDOLS SKARP Q101 KALDA ZJAAY JIIMS4 KPHL\" readonly>";
			result += "<br/>M2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA MIA1 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>Z0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA PELCN Y309 FLRDA IDOLS SKARP Q101 KALDA ZJAAY JIIMS4 KPHL\" readonly>";
			break;
		case "PHX": // Updated 02-23-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP DRRVR PINNG1 KPHX\" readonly>"; // CDR G0
			result += "<br/>Non OW: <input style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>"; // CDR H0
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA MGMRY ARNNY Q184 FUZ TXO J72 ABQ J78 ZUN EAGUL6 KPHX\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG CRP DUNDE FST ELP DRRVR PINNG1 KPHX\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>" // Verified with ATCSCC on 02-23-2025
			result += "<br/>B2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>F2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS CABLO DEFUN J2 IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>G0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>H0<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 IAH J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>M2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>W2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GWAVA2 GWAVA GLAMS TAZER MARCI LEV J86 ELP DRRVR PINNG1 KPHX\" readonly>";
			result += "<br/>Z2<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY THRSR VLKNN HRISN Q30 IZAAC TXK J131 FUZ J66 EWM DRRVR PINNG1 KPHX\" readonly>";
			break;
		case "RDU": // Updated 01-04-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>Non OW: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE PETTO DMSTR2 KRDU\" readonly>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC BLOGS3 KRDU\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA9 BNGOS LBV LAL OCF AMG CTF KRDU\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>A0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 VIYAP Q69 GURGE PETTO DMSTR2 KRDU\" readonly>";
			result += "<br/>G2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ3 SHAQQ KNOST DEANR CAMJO Q99 TEEEM PETTO DMSTR2 KRDU\" readonly>";
			result += "<br/>H2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 TEEEM SHRIL JURDI DMSTR2 KRDU\" readonly>";
			result += "<br/>K2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC BLOGS3 KRDU\" readonly>";
			result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MIA1 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 TEEEM PETTO DMSTR2 KRDU\" readonly>";
			result += "<br/>Z0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC BLOGS3 KRDU\" readonly>";
			break;
		case "SAN": // Updated 01-09-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>BNGOS: <input style=\"width:75%\"; value=\"KMIA BNGOS4 DOLIE CIGAR Y290 BACCA ROZZI Y280 LEV LFK ACT INK J50 GBN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>GLADZ: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 JCT ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW MHZ ELD TXK SPS J72 ABQ J78 PKE LUCKI1 KSAN\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 DEEDA MGMRY ARNNY Q184 FUZ J4 INK ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; //TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>B2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 LEV J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>G0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>H0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI LEV J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			result += "<br/>W2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MIA1 GWAVA GLAMS TAZER MARCI LEV J86 ELP J2 HOGGZ LUCKI1 KSAN\" readonly>";
			break;
		case "SLC":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA MVC MHZ ELD JONEZ IRW J98 MMB KK45Y BRK FIDLE EKR LEEHY5 KSLC\" readonly>";
			result += "<br/>OW (MIA west): <input style=\"width:75%\"; value=\"KMIA BNGOS4 DOLIE CIGAR Y290 BACCA ROZZI Y280 LEV LFK FUZ PNH ALS JNC J12 HELPR LEEHY5 KSLC\" readonly>";
			result += "<br/>OW (MIA east): <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 LEV LFK FUZ PNH ALS JNC J12 HELPR LEEHY5 KSLC\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 FAM STJ SYTHH LBF CYS OCS NORDK6 KSLC\" readonly>";
			result += "<br/>South (Non OW): <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA DEFUN J2 CEW J50 ABI TXO TCC CIM ALS JNC J12 HELPR LEEHY5 KSLC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><br/><b>CDRS</b>";
			break;
		case "STL": // Updated 01-11-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 VISQA BOOSH3 KSTL\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 SHRKS Q89 HESPI THRSR BNA BOOSH3 KSTL\" readonly>";
			result += "<br/>West (Non OW): <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW MEI MEM BOOSH3 KSTL\" readonly>";
			result += "<br/><br/>Gulf: <input style=\"width:75%\"; value=\"KMIA GLADZ3 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV LAREY LIT SGF KAYLA3 KSTL\" readonly>";
			result += "<br/>Atlantic: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 WIGVO IRQ J99 IIU J78 PXV BOOSH3 KSTL\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\"; value=\"KMIA BNGOS4 DOLIE CIGAR Y290 BLVNS REDFN Q105 HRV LAREY LIT SGF KAYLA3 KSTL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA POTTR6 WINCO LAL CTY J151 VISQA QBALL1 KSTL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>F0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS Q89 YANTI VISQA BOOSH3 KSTL\" readonly>";
			result += "<br/>G2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ3 SHAQQ KNOST DEANR Q116 VLKNN GETME J151 VISQA BOOSH3 KSTL\" readonly>";
			result += "<br/>H0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 VLKNN GETME J151 VISQA BOOSH3 KSTL\" readonly>";
			result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MIA9 MAYNR MARCI SHAQQ KNOST DEANR VLKNN GETME J151 VISQA BOOSH3 KSTL\" readonly>";
			break;
		case "TPA": // Updated 01-04-2025
			result += "<br/><br/><b>Faa Pref Route: (Avg FL200-230)</b>";
			result += "<br/><input style=\"width:75%\" value=\"KMIA BNGOS4 COREA BLFRG2 KTPA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA WINCO LBV BRDGE9 KTPA\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>B0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 COREA BLFRG2 KTPA\" readonly>";
			break;
		}
	return result;
}
