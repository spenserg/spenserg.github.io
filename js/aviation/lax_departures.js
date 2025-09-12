lax_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
	switch(arvl) {
		case "ABQ": // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX PNDAH2 TCATE IPL J2 GBN J18 SJN TMALE BRRTO1 KABQ\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J76 TBC ROSEI LOWBO3 KABQ\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "ATL": // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 IRW FSM MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 DVC PUB J28 ICT SGF BNA NEWBB IHAVE MTHEW CHPPR1 KATL\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J50 SSO J4 MHZ MEI DUUCK ORRKK HOBTT2 KATL\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG INW ZUN ACH PNH IRW FSM MEM J41 VUZ KATL\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>EW (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO EWM J66 ABI J4 FUZ Q184 MERDN ORRKK HOBTT2 KATL\" readonly>";
			result += "<br/>KT (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J50 ELP FST J138 SAT Q24 LSU SHYRE HOBTT2 KATL\" readonly>";
			result += "<br/>WR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEM HUTCC KNSAW RUSSA GLAVN1 KATL\" readonly>";
			break;
		case "AUS": // Updated 01-10-2025
			result += "<!-- Updated 01-10-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH TFD SSO ELP FST DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ J72 TXO BOBVE ACT BLEWE5 KAUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 IPL J2 GBN J50 SSO J50 ACT BLEWE5 KAUS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>AU (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF OZMOS JCT DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/>ME (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP FST DILLO LAIKS4 KAUS\" readonly>";
			result += "<br/>SE (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL J2 GBN J50 ELP FST DILLO LAIKS4 KAUS\" readonly>";
			break;
		case "BNA": // Updated 06-14-2025
			result += "<!-- Updated 06-14-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 06-14-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J6 LIT MEM CHSNE2 KBNA\" readonly>";
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J96 GCK J110 BUM J112 FAM GUMMA RYYMN2 KBNA\" readonly>";
			result += "<br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 FUZ J42 TXK MEM CHSNE2 KBNA\" readonly>";
			result += "<br/><br/>South via LCH<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J22 MEI VUZ TINCA CHSNE2 KBNA\" readonly>";
			result += "<br/>North via HYS<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS J146 DVC J197 HGO J24 HYS BUM YACKS RYYMN2 KBNA\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM J78 IRW FSM MEM KBNA\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-14-2025
			break;
		case "BOS": // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 DVC J146 GLD PWE LMN J64 ALBRT J18 JOT J146 GIJ J554 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J158 ABR J32 DLH J140 SSM OXASA POLTY BUGSY ENE OOSHN5 KBOS\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/><br/>BAE 1: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP RWF J34 BAE HOCKE Q816 KELTI NABOR PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>BNA: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>GRB: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB HOCKE Q816 KELTI HANKK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>IIU: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR Q34 RBV Q419 JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>MGM 3: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q22 RBV JFK ROBUC3 KBOS\" readonly>";
			result += "<br/>VHP: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J100 LAS J146 GIJ J554 JHW ALB T608 REVER KBOS\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>GR (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS Q70 BAWER LARVE EKR MBW RAP ABR GRB HOCKE Q816 KELTI HANKK PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>J1 (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE EED J236 TBC RSK DVV J60 JOT ELX SVM J70 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			result += "<br/>MC (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD KLYNE Q29 JHW Q82 PONCT JFUND2 KBOS\" readonly>";
			break;
		case "CLT": // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J96 GUP FTI EZEEE TUL J46 BNA TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 DVC PUB J28 ICT ARG TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO EWM J66 ABI J4 FUZ MEMFS TAZZA FILPZ4 KCLT\" readonly>";
			result += "<br/>South via VLKNN: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 FUZ IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM PKE J78 IRW J98 TUL J46 VXV LIINN3 KCLT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>NF (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR BESTT JONZE5 KCLT\" readonly>";
			result += "<br/>NJ (Ok to File): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 HITMN TAZZA FILPZ4 KCLT\" readonly>";
			break;
		case "CMH": // Updated 01-31-2025
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
		case "DCA": // Updated 05-10-2025
			result += "<!-- Updated 05-10-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA Pref route as of 05-10-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR TRUPS5 KDCA\" readonly>"; // CDR LV
			result += "<br/><br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD APE J30 LUISE FRDMM6 KDCA\" readonly>"; // CDR VH
			result += "<br/>South via MEM<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J6 IRW FSM MEMFS Q34 SITTR TRUPS5 KDCA\" readonly>"; // CDR BN
			result += "<br/><br/>North via JOT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX BEALE J146 DVC PUB J64 HLC PWE LMN MZV JOT J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>"; // CDR J2
			result += "<br/>North via ONL<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX LAS BAWER HVE LARVE EKR BFF J94 ONL FOD DBQ J94 OBK GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>"; // CDR BK
			result += "<br/>South via CEW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q109 PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>"; // CDR CE
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J100 LAS J146 GLD PWE LMN J64 FWA J178 APE AIR J34 BUCKO NUMMY3 KDCA\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-10-2025
			result += "<!-- Verified with ATCSCC on 05-10-2025 -->";
			result += "<br/>AD<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL MXL AMUDI IMEXA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>AM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL MXL AMUDI IMEXA JALIL VOKOM MRF JCT J86 IAH J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>B1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LAS BAWER LARVE EKR MBW RAP RWF J34 BAE GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>B2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>BK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ J94 OBK GIJ J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>BN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J6 IRW FSM MEMFS Q34 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>CE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q109 PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>GR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LAS BAWER LARVE EKR MBW RAP ABR GRB FNT DJB J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE EED J236 TBC RSK DVV J60 JOT J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>J2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DVC PUB J64 HLC PWE LMN MZV JOT J146 WOOST J34 BUCKO FRDMM6 KDCA\" readonly>";
			result += "<br/>L1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>L2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI Q56 CATLN FRDDO NOKIE TWINS PANDY SARKY Q113 AARNN WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>LV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>M1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J4 FUZ Q184 ARNNY FRDDO KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>M2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>M3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>MC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 SLN J24 MCI J24 STL ENL IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>PX<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 PXV J78 IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>SP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 SLN J24 MCI J80 SPI IIU Q108 SITTR TRUPS5 KDCA\" readonly>";
			result += "<br/>VH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 SLN J24 MCI J80 VHP APE J30 LUISE FRDMM6 KDCA\" readonly>";
			result += "<br/>VU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR KBLER KELLN Q56 KIWII WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>VY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J50 GBN TUS VYLLA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			result += "<br/>XC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO CUS AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 OGRAE FUUFF WAVES CAPSS3 KDCA\" readonly>";
			break;
		case "DFW": // Updated 02-20-2025
			result += "<!-- Updated 02-20-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 INK GEEKY SOCKK4 KDFW\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J74 TXO TURKI VKTRY2 KDFW\" readonly>";
			result += "<br/><br/>North via RSK<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS TBC J64 RSK CIM PNH MDANO VKTRY2 KDFW\" readonly>";
			result += "<br/><b>For ZAB Avoid: ...RSK J110 GCK END IBAKE VKTRY2 KDFW<\/b>";
			result += "<br/><br/>DFW BGTOE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP FST JCT GUTZZ BOOVE7 KDFW\" readonly>";
			result += "<br/>DFW BOOVE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX CLEEE PKE J78 ABQ J72 TXO TURKI VKTRY2 KDFW\" readonly>";
			result += "<br/>DFW VKTRY<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>DFW WEST<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH TFD J50 ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
			result += "<br/>MOJAVE EAST<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>SPRINGS EAST<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL J2 GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM PKE J78 DRK J78 ABQ TXO UKW8 KDFW\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 02-20-2025
			result += "<!-- Verified with ATCSCC on 02-20-2025 -->";
			result += "<br/>DG<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J50 GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>JE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>JU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP FST JCT GUTZZ BOOVE7 KDFW\" readonly>";
			result += "<br/>ME<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>SE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL J2 GBN J50 SSO J4 INK GEEKY BOOVE7 KDFW\" readonly>";
			result += "<br/>TN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH TFD J50 ELP J86 JCT CWK TNV STUFT BEREE3 KDFW\" readonly>";
			result += "<br/>UK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE J78 ABQ J72 TXO TURKI VKTRY2 KDFW\" readonly>";
			break;
		case "DEN": // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 DICEE BUMMP SSKII4 KDEN\" readonly>";
			result += "<br/><br/>Night: <input style=\"width:75%\"; value=\"KLAX OSHNN1 BEALE J146 DICEE BUMMP SSKII4 KDEN\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX LAXX1 TRM AVRRY EED J236 TBC SHNPS TBARR4 KDEN\" readonly>";
			result += "<br/>South via ABQ: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J78 ABQ J13 ALS LARKS3 KDEN\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J146 HBU POWDR1 KDEN\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "ELP": // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ITEMM TEEES MOLLY5 KELP\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J74 NABOB Q13 VERNO GREBE MOLLY5 KELP\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "IAH": // Updated 02-01-2025
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
		case "IND": // Updated 01-31-2025
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
		case "JAC": // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J9 LAS DTA MLD KJAC\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J9 DBS KJAC\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "JFK": // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J96 SLN J18 JOT J146 GIJ J554 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/><br/>Night: <input style=\"width:75%\"; value=\"KLAX OSHNN1 BEALE EEVUN Q70 SAKES RLG SNY ONL KATES DBQ KG75M DAFLU J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB HOCKE Q935 HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
			result += "<br/>Avoid ZOB: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 PXV BKW ASBUR DENNY MAULS QUART HURTS SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/><br/>BNA: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J6 IRW FSM MEMFS Q34 MAULS QUART HURTS SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/>GRB: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GRB HOCKE Q935 HANKK EXTOL YODAA IGN IGN1 KJFK\" readonly>";
			result += "<br/>JOT 1: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE EED J236 TBC J64 RSK TXC HCT J60 JOT ELX SVM J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>PXV: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J96 CIM Q176 TOTOE SGF FAM TERGE RINTE KLYNE Q29 WWSHR JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>SPI: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 SPI WWODD RINTE KLYNE Q29 WWSHR JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/>VUZ: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR FIGEY Q64 SAWED Q108 SIE CAMRN5 KJFK\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J100 LAS J146 GIJ J554 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/><br/>Night: <input style=\"width:75%\"; value=\"KLAX OSHNN1 BEALE J146 GIJ J554 JHW J70 LVZ LENDY8 KJFK\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>W3 (Coord Req): <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF FOD DBQ KG75M DAFLU J70 LVZ LENDY8 KJFK\" readonly>";
			break;
		case "LAS": // Updated 06-17-2025
			result += "<!-- Updated 06-17-2025 P -->";
			result += "<br/><br/><b>Faa Pref Route (Avg FL250):</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX ORCKA5 MISEN RNDRZ3 KLAS\" readonly>";
			// result += "<br/><br/>LAX East Flow: <input style=\"width:75%\"; value=\"KLAX GARDY4 MISEN RNDRZ3 KLAS\" readonly>";
			// result += "<br/>Night: <input style=\"width:75%\"; value=\"KLAX OSHNN1 MISEN RNDRZ3 KLAS\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE EED UNPAS BLD KLAS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG LARKK1 KLAS\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 06-17-2025
			break;
		case "MCO": // Updated 05-07-2025 // Mandatory Routes checked
			result += "<!-- Updated 05-07-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 05-07-2025
			result += "<br/><br/>OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J2 JCT J86 LEV Y280 CHRGE PRICY4 KMCO\" readonly>";
			result += "<br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J2 JCT LFK J50 CEW J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/><br/>North via TXO<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ TXO ABI J50 CEW J2 DEFUN GRNCH5 KMCO\" readonly>";
			result += "<br/>North via LIT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE J78 PNH J14 VUZ LGC ZJAYX GRNCH5 KMCO\" readonly>";
			result += "<br/><br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J2 FST J138 SAT PSX PEGLG ALGAE DTSRJ CIGAR PRICY4 KMCO\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM PKE J78 DRK J78 ABQ J72 TXO J72 SPS TXK ELD MEI OTK LEESE3 KMCO\" readonly>";
			// result += "<br/><br/><b>CDRS</b>"; // No CDRs as of 05-07-2025
			break;
		case "MIA": // Updated 06-03-2025
			result += "<!-- Updated 06-03-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 05-02-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J65 KOFFA J169 TFD J50 ELP J2 JCT J86 LEV Y290 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
			result += "<br/><br/>Non OW<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J65 KOFFA J169 TFD J50 ELP J50 INK KF12A ACT J50 CEW J2 DEFUN FROGZ4 KMIA\" readonly>";
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J78 ABQ J72 TXO FUZ J58 HRV Q105 BLVNS Y290 GAWKS FROGZ4 KMIA\" readonly>";
			result += "<br/>Full OW<span style=\"color:red\"> (Coord Req)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 FST J138 SAT MUSYL LCHLH KELPP MINOW MARCI FROGZ4 KMIA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>"; // No CDRS listed as of 05-02-2025
			break;
		case "MSY": // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH AWDAD1 KMSY\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE EED J8 GUP FTI EZEEE IRW MLC ELD NTCHZ TRSSH1 KMSY\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM J169 TFD J50 ELP J183 PEQ JCT CLL DAS LCH AWDAD1 KMSY\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "OKC": // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J78 PNH BROMA GHOST3 KOKC\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J50 SSO ELP INK TURKI BROMA GHOST3 KOKC\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J76 TBC J64 RSK J110 GCK J28 ICT BELMN MURAH3 KOKC\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "OMA": // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 DVC J146 HBU J10 FQF J128 HCT GRI HOWRY3 KOMA\" readonly>";
			result += "<br/><br/>Night: <input style=\"width:75%\"; value=\"KLAX OSHNN1 BEALE BAWER HVE J60 HCT GRI HOWRY3 KOMA\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE DRK J96 GUP J102 ALS PUB J64 HLC HTHWY TIMMO1 KOMA\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "ORD": // Updated 04-29-2025 // Mandatory Routes checked
			result += "<!-- Updated 04-29-2025 MP -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 04-29-2025
			result += "<br/><br/>NRP: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J96 IRK SHAIN2 KORD\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS BAWER HVE LARVE EKR BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J96 DRK J78 IRW TUL EOS WELTS TRTLL6 KORD\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG J9 LAS J146 GLD PWE IRK BDF8 KORD\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 04-29-2025
			result += "<!-- Verified with ATCSCC on 04-29-2025 -->";
			result += "<br/>F1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J6 IRW J98 SGF WELTS TRTLL6 KORD\" readonly>";
			result += "<br/>F2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LAS BAWER LARVE EKR BFF J94 ONL FOD MYRRS FYTTE7 KORD\" readonly>";
			result += "<br/>JB<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LAS BAWER LARVE EKR BFF J94 ONL J114 GEP DLL MSN JAKSA MOOPS FYTTE FYTTE7 KORD\" readonly>";
			result += "<br/>JV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 IRK BENKY6 KORD\" readonly>";
			result += "<br/>JW<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LAS BAWER LARVE EKR BFF J94 ONL J114 GEP TVC WYNDE3 KORD\" readonly>";
			break;
		case "PDX": // Updated 01-31-2025
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
		case "PHL": // Updated 05-02-2025
			result += "<!-- Updated 05-02-2025 P -->";
			// result += "<br/><br/><b>Faa Pref Route:</b>"; // No FAA pref route as of 05-02-2025
			result += "<br/><br/>NRP<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>"; // CDR VH
			result += "<br/><br/>ORCKA: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>OSHNN: <input style=\"width:75%\"; value=\"KLAX OSHNN1 BEALE J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/><br/>South<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J6 IRW FSM MEMFS Q34 GVE PAATS4 KPHL\" readonly>"; // CDR BN
			result += "<br/>North<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ J94 OBK GIJ J146 CXR EWC JST BOJID4 KPHL\" readonly>"; // CDR BK
			result += "<br/><br/>North via DLH: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J158 ABR DLH J140 SSM BURWA TULEG DNY SPUDS7 KPHL\" readonly>";
			result += "<br/>South via LCH<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>"; // CDR CE
			result += "<br/><br/>BAE<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE J34 DJB EWC JST BOJID4 KPHL\" readonly>"; // CDR B2
			result += "<br/>JOT<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE EED J236 TBC RSK DVV J60 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>"; // CDR J1
			result += "<br/>SPI<span style=\"color:green\"> (Ok to File)</span>: <input style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 SPI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>"; // CDR SP
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX SEBBY3 DAG EED J236 TBC J128 HBU J146 GLD J146 LNK J60 HAGUD J211 JST BOJID4 KPHL\" readonly>";
			result += "<br/><br/><b>CDRS</b>"; // Verified with ATCSCC on 05-02-2025
			result += "<!-- Verified with ATCSCC on 05-02-2025 -->";
			result += "<br/>AD<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL MXL AMUDI IMEXA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>AM<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL MXL AMUDI IMEXA JALIL VOKOM MRF JCT J86 IAH J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>B1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LAS BAWER LARVE EKR MBW RAP RWF J34 BAE J34 DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>B2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE J34 DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>BK<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ J94 OBK GIJ J146 CXR EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>BN<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J6 IRW FSM MEMFS Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>CE<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>GR<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX LAS BAWER LARVE EKR MBW RAP ABR GRB FNT DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>J1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE EED J236 TBC RSK DVV J60 JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>J2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DVC PUB J64 HLC PWE LMN MZV JOT J146 WOOST J34 DJB EWC JST BOJID4 KPHL\" readonly>";
			result += "<br/>L1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>L2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF KOBLE DLF KINEY THX PSX HOODO BOWFN LEV SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>LV<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>M1<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J4 FUZ Q184 ARNNY FRDDO TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>M2<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>M3<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J86 IAH J2 LCH J138 SJI Q56 CATLN FRDDO NOKIE TWINS BLAAN Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>MC<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>PX<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 GUP FTI EZEEE MMB PER SGF J98 FAM J78 PXV J78 IIU Q108 SITTR Q34 GVE PAATS4 KPHL\" readonly>";
			result += "<br/>RD<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J6 IRW FSM ARG PXV ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>SP<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 SLN J24 MCI J80 SPI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>VH<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX CLEEE PKE DRK J96 SLN J24 MCI J80 VHP ROD J152 JST BOJID4 KPHL\" readonly>";
			result += "<br/>VU<span style=\"color:green\"> (Ok to File)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 ABI J4 FUZ UIM ELD IZAAC Q30 VLKNN THRSR TWOUP Q22 BEARI BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>VY<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J50 GBN TUS VYLLA AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			result += "<br/>XC<span style=\"color:red\"> (Coord Req)</span>: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO CUS AGNID OBGIY THX PSX HOODO BOWFN LEV SJI J2 CEW ALLMA TEEEM Q99 PEETT BBDOL PAATS4 KPHL\" readonly>";
			break;
		case "PHX": // Updated 06-23-2025
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
		case "PIT": // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 DVC J197 HGO J24 MCI J80 VHP APE CTW FEWGA7 KPIT\" readonly>";
			result += "<br/><br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 IRW RZC CGI IIU HNN FEWGA7 KPIT\" readonly>";
			result += "<br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE EED J236 TBC J128 HBU J146 GLD J146 IOW J146 IDEAS TAMDE GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 DVC J146 GLD J146 IOW J146 WOOST J34 DJB GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>B1: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP RWF J34 BAE J34 CRL TAMDE GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>B2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP J82 FSD J16 BAE J34 CRL TAMDE GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>BK: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR BFF J94 ONL FOD DBQ OBK GIJ J146 IDEAS TAMDE GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>GR: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS BAWER LARVE EKR MBW RAP ABR GEP FNT TAMDE GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>J2: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX ORCKA5 LAS J146 DVC PUB J64 HLC PWE LMN MZV JOT J146 IDEAS TAMDE GRIVY JESEY5 KPIT\" readonly>";
			result += "<br/>MC: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CLEEE PKE DRK J96 SLN J24 MCI J80 VHP APE CTW FEWGA7 KPIT\" readonly>";
			break;
		case "RDU": // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 DRK J96 GUP FTI EZEEE TUL J46 BNA GLAZR MXEEN KPASS ALDAN4 KRDU\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX ORCKA5 LAS J146 DVC J197 HGO J24 STL J8 IIU J526 BKW FRIKY ALDAN4 KRDU\" readonly>";
			result += "<br/>South: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 SSO J4 EWM J66 FUZ J42 TXK J52 SUTTN IZAAC Q30 VLKNN THRSR IRQ PYRES DMSTR2 KRDU\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM PKE J96 SLN J24 MCI J80 VHP J24 FLM BKW ROA KRDU\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "SAT": // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J2 FST MOPPP DNKIN1 KSAT\" readonly>";
			result += "<br/><br/>North: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ J72 TXO GTH PRTZY POPPO1 KSAT\" readonly>";
			result += "<br/>NE Arrival: <input style=\"width:75%\"; value=\"KLAX DOTSS2 CLEEE PKE J78 ABQ J72 TXO BOBVE NILBE QERVO1 KSAT\" readonly>";
			// result += "<br/><br/><b>Non RNAV</b>"; // toddo
			result += "<br/><br/><b>CDRS</b>";
			result += "<br/>AU: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP MRF MOPPP DNKIN1 KSAT\" readonly>";
			result += "<br/>ME: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX DOTSS2 CNERY BLH J169 TFD J50 ELP J2 FST MOPPP DNKIN1 KSAT\" readonly>";
			result += "<br/>SE: <input class=\"cdr_input\" style=\"width:75%\" value=\"KLAX PNDAH2 TCATE IPL J2 GBN J50 ELP J2 FST MOPPP DNKIN1 KSAT\" readonly>";
			break;
		case "SEA": // Updated 01-31-2025
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
		case "SFO": // Updated 04-01-2025
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
		case "SMF": // Updated 01-31-2025
			result += "<!-- Updated 01-31-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LADYJ4 CSTRO NURAY SUUTR4 KSMF\" readonly>";
			result += "<br/><br/>W Coast: <input style=\"width:75%\"; value=\"KLAX MUELR4 RZS OAK CCR CCR2 KSMF\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX VTU8 RZS J88 SNS OAK CCR CCR2 KSMF\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "STL": // Updated 01-31-2025
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
		case "TUS": // Updated 02-01-2025
			result += "<!-- Updated 02-01-2025 -->";
			result += "<br/><br/><b>Faa Pref Route:</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX DOTSS2 CNERY BLH J50 GBN DINGO6 KTUS\" readonly>";
			result += "<br/><br/><b>Non RNAV</b>";
			result += "<br/><input style=\"width:75%\"; value=\"KLAX LAXX1 TRM J169 TFD DINGO6 KTUS\" readonly>";
			// result += "<br/><br/><b>CDRS</b>";
			break;
		case "YVR": // Updated 01-31-2025
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
