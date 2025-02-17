mia_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
	switch(arvl) {
		case "ATL": // Updated 02-01-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 SHRKS LAIRI LARZZ JJEDI3 KATL\" readonly>";
			result += "<br/><br/>West: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q110 DAWWN BEORN HOBTT2 KATL\" readonly>";
			result += "<br/>OW East: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA ROWSY Y309 FLRDA IDOLS ILM FLO SKWKR SITTH2 KATL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA WINCO LAL SZW MGM KATL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>F0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS LAIRI LARZZ SITTH2 KATL\" readonly>";
			result += "<br/>F1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FLMGO2 STYMY Q77 SHRKS LAIRI LARZZ SITTH2 KATL\" readonly>";
			result += "<br/>G2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ3 SHAQQ KNOST DEANR DAWWN BEORN HOBTT2 KATL\" readonly>";
			result += "<br/>G3 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ3 SHAQQ KNOST DEANR DAWWN BEORN HOBTT2 KATL\" readonly>";
			result += "<br/>H3 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q110 DAWWN BEORN HOBTT2 KATL\" readonly>";
			result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MIA1 MAYNR MARCI SHAQQ KNOST DEANR DAWWN BEORN HOBTT2 KATL\" readonly>";
			result += "<br/>M3 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MIA1 MAYNR MARCI SHAQQ KNOST DEANR DAWWN BEORN HOBTT2 KATL\" readonly>";
			result += "<br/>Z0: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO OGGRE Y436 DEDDY HOTHH JJEDI3 KATL\" readonly>";
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
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO WAALT Q131 EARZZ JAMIE CONFR Q481 DPK DPK3 KBDL\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 JROSS ELLDE Q97 PAACK JAMIE CONFR Q481 DPK DPK3 KBDL\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA PELCN ROWSY Y494 YAALE Y484 GEDIC SARDI DPK3 KBDL\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // todo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>A0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA ALTNN2 DUCEN Q87 JROSS ELLDE Q97 PAACK JAMIE CONFR Q481 DPK DPK3 KBDL\" readonly>";
			result += "<br/>G2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>H2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 KPASA Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>K2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA KLADA2 KLADA UPACE SEELO WAALT Q131 EARZZ JAMIE CONFR Q481 DPK DPK3 KBDL\" readonly>";
			result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 POLYY DADDS Q87 GEARS BBOBO Q22 RBV Q419 DPK DPK3 KBDL\" readonly>";
			result += "<br/>Z0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO WAALT Q131 EARZZ JAMIE CONFR Q481 DPK DPK3 KBDL\" readonly>";
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
		case "DFW":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/><br/>Non OW: :<input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 AEX PNUTS BEREE3 KDFW\" readonly>";
			result += "<br/>Full OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG VUH IAH CRIED BEREE3 KDFW\" readonly>";
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
		case "EWR":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 AARNN QUART PHLBO4 KEWR\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 ALWZZ OGRAE Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/><br/>ATLANTIC NORTH 1: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 GOZZR ETECK OZENA ROWSY OTTNG ILLGO CEETE SUBBS CYN GXU RBV V249 METRO KEWR\" readonly>";
			result += "<br/>FLORIDA TO NE: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>WATRS: <input style=\"width:75%\"; value=\"KMIA FOLZZ3 GOZZR ETECK OZENA ROWSY OTTNG ILLGO CEETE SUBBS CYN GXU RBV V249 METRO KEWR\" readonly>";
			result += "<br/>Rocket Launch: <input style=\"width:75%\"; value=\"KMIA HEDLY CRG VIYAP OLBEC SAV FLO RDU FAK EMI FQM FQM3 KEWR\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA HEDLY CRG VIYAP OLBEC SAV FLO RDU FAK EMI FQM FQM3 KEWR\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>A0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA ALTNN2 DUCEN Q87 ALWZZ OGRAE Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>DW (Ok to File): <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA ROWSY Y494 YAALE Y497 SUBBS CYN GXU RBV V249 METRO KEWR\" readonly>";
			result += "<br/>G2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ KNOST DEANR CAMJO Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>H2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>K2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA KLADA2 KLADA UPACE SEELO GARIC Q129 AARNN QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>M2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA MIA1 MAYNR MARCI SHAQQ KNOST DEANR CAMJO Q99 QUART PHLBO4 KEWR\" readonly>";
			result += "<br/>Z0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ALYRA GRUBR Y299 SEELO GARIC Q129 AARNN QUART PHLBO4 KEWR\" readonly>";
			break;
		case "JAX":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY ORL HAINY QUBEN1 KJAX\" readonly>";
			result += "<br/><br/>West Coast: <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA Q118 JINOS WILON TEBOW KJAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA1 FLMGO ORL POGIE2 KJAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>F0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY ORL HAINY QUBEN1 KJAX\" readonly>";
			result += "<br/>F1 (Ok to File): <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY ORL POGIE2 KJAX\" readonly>";
			result += "<br/>G2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ KNOST DEANR HILIS TEBOW1 KJAX\" readonly>";
			result += "<br/>H2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA HURCN4 KPASA HILIS TEBOW1 KJAX\" readonly>";
			result += "<br/>M2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR HILIS TEBOW1 KJAX\" readonly>";					
			break;
		case "LAX":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS Y290 BACCA ROZZI Y280 LEV J86 PEKON JCT EWM KA18Q WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 CEW MHZ ELD TXK SPS J72 ABQ J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/>NE Arrival: <input style=\"width:75%\"; value=\"KMIA BNGOS4 DOLIE CIGAR Y290 BACCA ROZZI Y280 REDFN Q105 HRV J58 FUZ TXO J72 ABQ J78 DRK J231 HIPPI GABBL HLYWD1 KLAX\" readonly>";
			result += "<br/><br/>Full OW via SAT: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW HRVLK KELPP LCHLH MUSYL SAT J138 FST J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>Full OW via CRP: <input style=\"width:75%\"; value=\"KMIA GLADZ4 SHAQQ M580 MINOW ALGAE PEGLG CRP ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA9 BNGOS LAL SZW CEW J2 IAH J86 JCT J2 ELP J50 SSO J4 TNP BASET5 KLAX\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>G0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>H0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN CEW J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MIA9 MAYNR MARCI LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			result += "<br/>W2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MIA9 GWAVA GLAMS TAZER MARCI LEV J86 ELP J50 SSO J4 WLVRN ESTWD HLYWD1 KLAX\" readonly>";
			break;
		case "MCI": // Updated 01-10-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA SZW FRDDO STNGA MEM J41 LUKKY SGF TYGER7 KMCI\" readonly>";
			result += "<br/><br/>East: <input style=\"width:75%\"; value=\"KMIA FLMGO2 STYMY Q77 SHRKS LAIRI VRSTY THRSR HITMN Q19 STL MCM BQS BQS8 KMCI\" readonly>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ3 BAGGS Y290 BACCA ROZZI Y280 REDFN Q105 HRV J58 AEX KMCI\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // TODO
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>G2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ3 SHAQQ KNOST DEANR Q116 ZAVEL KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>H0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 MEMFS KRTNY MHOMS3 KMCI\" readonly>";
			result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI SHAQQ KNOST DEANR CAMJO ZAVEL KRTNY MHOMS3 KMCI\" readonly>";
			break;
		case "MCO":
			result += "<br/><br/><b>Faa Pref Route: (Avg FL190):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA FLMGO2 WAPOM RIDES2 KMCO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA8 VACAY BAIRN GOOFY7 KMCO\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>F0 (Ok to File): <input style=\"width:75%\"; value=\"KMIA FLMGO2 WAPOM RIDES2 KMCO\" readonly>";
			result += "<br/>Z2 (Coord Req): <input style=\"width:75%\"; value=\"KMIA FOLZZ3 ZFP CCLUB RIDES KMCO\" readonly>";
			break;
		case "MSY":
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/>OW: <input style=\"width:75%\"; value=\"KMIA GLADZ4 BAGGS REMIS Y280 REDFN Q105 HRV KMSY\" readonly>";
			result += "<br/>Non OW: <input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 SJI MNSTR1 KMSY\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA MIA9 BNGOS LAL HEVVN DEFUN SJI SLIDD2 KMSY\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>B2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA BNGOS4 DOLIE Y280 REDFN Q105 HRV KMSY\" readonly>";
			result += "<br/>G0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA GLADZ4 BAGGS Y290 BLVNS Q105 HRV KMSY\" readonly>";
			result += "<br/>H0 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA HURCN4 SMELZ Q116 JAWJA CABLO DEFUN J2 SJI MNSTR1 KMSY\" readonly>";
			result += "<br/>M2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MAYNR3 MAYNR MARCI REDFN Q105 HRV KMSY\" readonly>";
			result += "<br/>W2 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KMIA MIA1 GWAVA GLAMS TAZER MARCI REDFN Q105 HRV KMSY\" readonly>";
			break;
		case "PDX": // Updated 02-16-2025
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KMIA HURCN4 SMELZ Q116 MEMFS RZC ICT J182 GLD J80 FQF J20 PIH J54 BOI J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			
			result += "<br/><br/>OW: <input style=\"width:75%\"; value=\"KMIA BNGOS4 DOLIE CIGAR Y290 BACCA ROZZI Y280 REDFN Q105 HRV J58 SPS J168 LAA J20 PIH J54 BOI J15 IMB JOTBA HHOOD5 KPDX\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			
			// result += "<br/><br/><b>CDRS</b>";
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
