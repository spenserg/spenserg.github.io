latin_departures = function (arvl = "XXX", tail = null, ac_type = null, result = "") {
    dptr = ((dptr.length == 4) ? convert_iata(dptr) : dptr);
	arvl = ((arvl.length == 4) ? convert_iata(arvl) : arvl);
    
	switch(dptr) {

		case "ANU": // Antigua/V C BIRD INTL
			switch (arvl) {
				case "CLT": // ANU-CLT // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "MIA": // ANU-MIA // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "JFK": // ANU-JFK // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of ANU

		case "AUA": // Oranjestad/REINA BEATRIX INTL
			switch (arvl) {
				case "CLT": // AUA-CLT // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "DFW": // AUA-DFW // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "LGA": // AUA-LGA // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "MIA": // AUA-MIA // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "ORD": // AUA-ORD // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "PHL": // AUA-PHL // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of AUA

		case "BAQ": // Barranquilla/ERNESTO CORTISSOZ
			switch (arvl) {
				case "MIA": // BAQ-MIA // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of BAQ

		case "BDA": // Bermuda/L F WADE INTL
			switch (arvl) {
				case "CLT": // BDA-CLT // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "JFK": // BDA-JFK // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "MIA": // BDA-MIA // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "PHL": // BDA-PHL // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of BDA

		case "BGI": // Bridgetown/GRANTLEY ADAMS INTL
			switch (arvl) {
				case "CLT": // BGI-CLT // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "JFK": // BGI-JFK // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "MIA": // BGI-MIA // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "PHL": // BGI-PHL // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of BGI

		case "BJX": // Del Bajio/DE GUANAJUATO INTL
			switch (arvl) {
				case "DFW": // BJX-DFW // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of BJX

		case "BOG": // Bogota/EL DORADO INTL
			switch (arvl) {
				case "DFW": // BOG-DFW // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "MIA": // BOG-MIA // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of BOG

		case "BON": // Kralendijk/FLAMINGO INTL
			switch (arvl) {
				case "MIA": // BON-MIA // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of BON

// BSB skipped
// BVB skipped

		case "BZE": // Belize City/PHILIP S W GOLDSON INTL
			switch (arvl) {
				case "CLT": // BZE-CLT // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "DFW": // BZE-DFW // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "MIA": // BZE-MIA // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of BZE

// CCP skipped
// CGR skipped
// CIX skipped

		case "CLO": // Cali/ALFONSO BONILLA ARAGON INTL
			switch (arvl) {
				case "MIA": // CLO-MIA // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of CLO

		case "CMW": // Camaguey/IGNACIO AGRAMONTE INTL
			switch (arvl) {
				case "MIA": // CMG-MIA // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of CMW

// CNF skipped
// COR skipped

		case "CTG": // Cartagena/RAFAEL NUNEZ
			switch (arvl) {
				case "MIA": // CTG-MIA // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of CTG

		case "CUN": // Cancun/CANCUN INTL
			switch (arvl) {
				case "AUS": // CUN-AUS // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "BNA": // CUN-BNA // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "BOS": // CUN-BOS // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "CLT": // CUN-CLT // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "CMH": // CUN-CMH // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "CVG": // CUN-CVG // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "DFW": // CUN-DFW // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "IND": // CUN-IND // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "JFK": // CUN-JFK // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "LAX": // CUN-LAX // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "MCI": // CUN-MCI // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "MIA": // CUN-MIA // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "OKC": // CUN-OKC // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "ORD": // CUN-ORD // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "PHL": // CUN-PHL // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "PHX": // CUN-PHX // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "PIT": // CUN-PIT // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "RDU": // CUN-RDU // Updated 01-01-1965
					result += ""; // TODO
					break;
				case "STL": // CUN-STL // Updated 01-01-1965
					result += ""; // TODO
					break;
			}
		break; // End of CUN

		case "CUR": // Willemstad/HATO INTL
			switch (arvl) {
				case "DFW": // CUR-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of CUR

		case "CUU": // Chihuahua/GEN DIV P A ROBERTO FIERRO VIL
			switch (arvl) {
				case "DFW": // CUU-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of CUU

		case "CWB": // Curitiba/AFONSO PENA INTL
			switch (arvl) {
				case "DFW": // CWB-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of CWB

		case "CZM": // Cozumel/COZUMEL INTL
			switch (arvl) {
				case "DFW": // CZM-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of CZM

		case "DGO": // Durango/DURANGO INTL
			switch (arvl) {
				case "DFW": // DGO-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of DGO

		case "EZE": // Buenos Aires/EZEIZA INTL/MINISTRO PISTARINI
			switch (arvl) {
				case "DFW": // EZE-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of EZE

		case "FDF": // Fort-de-france/AIME CESAIRE
			switch (arvl) {
				case "DFW": // FDF-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of FDF

		case "FPO": // Freeport/GRAND BAHAMA INTL
			switch (arvl) {
				case "DFW": // FPO-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of FPO

		case "GCM": // Georgetown/OWEN ROBERTS INTL
			switch (arvl) {
				case "DFW": // GCM-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of GCM

		case "GDL": // Guadalajara/MIGUEL HIDALGO Y COSTILLA INTL
			switch (arvl) {
				case "DFW": // GDL-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of GDL

		case "GEO": // Georgetown/CHEDDI JAGAN INTL
			switch (arvl) {
				case "DFW": // GEO-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of GEO

		case "GGT": // Exuma/EXUMA INTL
			switch (arvl) {
				case "DFW": // GGT-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of GGT

		case "GIG": // Rio De Janeiro/GALEAO-ANTONIO CARLOS JOBIM IN
			switch (arvl) {
				case "DFW": // GIG-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of GIG

		case "GND": // Point Salines/MAURICE BISHOP INTL
			switch (arvl) {
				case "DFW": // GND-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of GND

		case "GRU": // Sao Paulo/GUARULHOS-GOV ANDRE FRANCO MON
			switch (arvl) {
				case "DFW": // GRU-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of GRU

		case "GUA": // Guatemala City/LA AURORA INTL
			switch (arvl) {
				case "DFW": // GUA-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of GUA

		case "GYE": // Guayaquil/JOSE JOAQUIN DE OLMEDO INTL
			switch (arvl) {
				case "DFW": // GYE-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of GYE

		case "HAV": // Havana/JOSE MARTI INTL
			switch (arvl) {
				case "DFW": // HAV-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of HAV

		case "HMO": // Hermosillo/GEN IGNACIO PESQUEIRA GARCIA I
			switch (arvl) {
				case "DFW": // HMO-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of HMO

		case "HOG": // Holguin/FRANK PAIS INTL
			switch (arvl) {
				case "DFW": // HOG-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of HOG

		case "HUX": // Bahias de Huatulco/BAHIAS DE HUATULCO INTL
			switch (arvl) {
				case "DFW": // HUX-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of HUX

		case "IPC": // Easter Island/MATAVERI INTL
			switch (arvl) {
				case "DFW": // IPC-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of IPC

		case "IQQ": // Iquique/DIEGO ARACENA INTL
			switch (arvl) {
				case "DFW": // IQQ-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of IQQ

		case "KIN": // Kingston/NORMAN MANLEY INTL
			switch (arvl) {
				case "DFW": // KIN-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of KIN

		case "LAP": // La Paz/GEN MANUEL MARQUEZ DE LEON INT
			switch (arvl) {
				case "DFW": // LAP-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of LAP

		case "LIM": // Lima/JORGE CHAVEZ INTL
			switch (arvl) {
				case "DFW": // LIM-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of LIM

		case "LIR": // Liberia/DANIEL ODUBER QUIROS INTL
			switch (arvl) {
				case "DFW": // LIR-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of LIR

		case "LRM": // La Romana/CASA DE CAMPO INTL
			switch (arvl) {
				case "DFW": // LRM-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of LRM

		case "MBJ": // Montego Bay/SANGSTER INTL
			switch (arvl) {
				case "DFW": // MBJ-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of MBJ

		case "MDE": // Rio Negro/JOSE MARIA CORDOVA
			switch (arvl) {
				case "DFW": // MDE-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of MDE

		case "MDZ": // Mendoza/EL PLUMERILLO
			switch (arvl) {
				case "DFW": // MDZ-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of MDZ

		case "MEC": // Manta/ELOY ALFARO INTL
			switch (arvl) {
				case "DFW": // MEC-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of MEC

		case "MEX": // Mexico City/BENITO JUAREZ INTL
			switch (arvl) {
				case "DFW": // MEX-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of MEX

		case "MGA": // Managua/AUGUSTO CESAR SANDINO INTL
			switch (arvl) {
				case "DFW": // MGA-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of MGA

		case "MID": // Merida/MERIDA INTL
			switch (arvl) {
				case "DFW": // MID-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of MID

		case "MLM": // Morelia/GEN FRANCISCO J MUJICA INTL
			switch (arvl) {
				case "DFW": // MLM-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of MLM

		case "MTY": // Monterrey/GEN MARIANO ESCOBEDO INTL
			switch (arvl) {
				case "DFW": // MTY-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of MTY

		case "MVD": // Montevideo/CARRASCO INTL/GEN C L BERISSO
			switch (arvl) {
				case "DFW": // MVD-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of MVD

		case "MZT": // Mazatlan/GEN RAFAEL BUELNA INTL
			switch (arvl) {
				case "DFW": // MZT-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of MZT

		case "NAS": // Nassau/LYNDEN PINDLING INTL
			switch (arvl) {
				case "DFW": // NAS-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of NAS

		case "OAX": // Oaxaca/XOXOCOTLAN INTL
			switch (arvl) {
				case "DFW": // OAX-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of OAX

		case "PAP": // Port-au-prince/TOUSSAINT LOUVERTURE INTL
			switch (arvl) {
				case "DFW": // PAP-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of PAP

		case "PBM": // Paramaribo/J.A. PENGEL INTL
			switch (arvl) {
				case "DFW": // PBM-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of PBM

		case "PEI": // Pereira/MATECANA
			switch (arvl) {
				case "DFW": // PEI-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of PEI

		case "PIO": // Pisco/PISCO
			switch (arvl) {
				case "DFW": // PIO-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of PIO

		case "PLS": // Providenciales/PROVIDENCIALES INTL
			switch (arvl) {
				case "DFW": // PLS-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of PLS

		case "POA": // Porto Alegre/SALGADO FILHO INTL
			switch (arvl) {
				case "DFW": // POA-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of POA

		case "POP": // Puerto Plata/GREGORIO LUPERON INTL
			switch (arvl) {
				case "DFW": // POP-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of POP

		case "POS": // Port-of-spain/PIARCO INTL
			switch (arvl) {
				case "DFW": // POS-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of POS

		case "PTP": // Pointe-a-pitre/MARYSE CONDE
			switch (arvl) {
				case "DFW": // PTP-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of PTP

		case "PTY": // Panama City/TOCUMEN INTL
			switch (arvl) {
				case "DFW": // PTY-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of PTY

		case "PUJ": // Punta Cana/PUNTA CANA INTL
			switch (arvl) {
				case "DFW": // PUJ-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of PUJ

		case "PVR": // Puerto Vallarta/LIC GUSTAVO DIAZ ORDAZ INTL
			switch (arvl) {
				case "DFW": // PVR-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of PVR

		case "QRO": // Queretaro/QUERETARO INTL
			switch (arvl) {
				case "DFW": // QRO-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of QRO

		case "ROS": // Rosario/ISLAS MALVINAS
			switch (arvl) {
				case "DFW": // ROS-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of ROS

		case "RTB": // Roatan/JUAN MANUEL GALVEZ INTL
			switch (arvl) {
				case "DFW": // RTB-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of RTB

		case "SAL": // San Salvador/EL SALVADOR INTL
			switch (arvl) {
				case "DFW": // SAL-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SAL

		case "SAP": // San Pedro Sula/RAMON VILLEDA MORALES INTL
			switch (arvl) {
				case "DFW": // SAP-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SAP

		case "SCL": // Santiago/ARTURO MERINO BENITEZ INTL
			switch (arvl) {
				case "DFW": // SCL-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SCL

		case "SCU": // Santiago de Cuba/ANTONIO MACEO INTL
			switch (arvl) {
				case "DFW": // SCU-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SCU

		case "SDQ": // Santo Domingo/LAS AMERICAS INTL (JOSE F PENA
			switch (arvl) {
				case "DFW": // SDQ-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SDQ

		case "SJD": // San Jose Del Cabo/LOS CABOS INTL
			switch (arvl) {
				case "DFW": // SJD-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SJD

		case "SJO": // San Jose/JUAN SANTAMARIA INTL
			switch (arvl) {
				case "DFW": // SJO-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SJO

		case "SJU": // San Juan/LUIS MUNOZ MARIN INTL
			switch (arvl) {
				case "DFW": // SJU-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SJU

		case "SKB": // Basseterre/BRADSHAW INTL
			switch (arvl) {
				case "DFW": // SKB-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SKB

		case "SLP": // San Luis Potosi/PONCIANO ARRIAGA INTL
			switch (arvl) {
				case "DFW": // SLP-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SLP

		case "SNU": // Santa Clara/ABEL SANTAMARIA INTL
			switch (arvl) {
				case "DFW": // SNU-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SNU

		case "STI": // Santiago/CIBAO INTL
			switch (arvl) {
				case "DFW": // STI-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of STI

		case "STT": // St. Thomas/CYRIL E KING
			switch (arvl) {
				case "DFW": // STT-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of STT

		case "STX": // St. Croix Island/HENRY E ROHLSEN
			switch (arvl) {
				case "DFW": // STX-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of STX

		case "SVD": // Kingstown/ARGYLE INTL
			switch (arvl) {
				case "DFW": // SVD-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SVD

		case "SXM": // Philipsburg/PRINCESS JULIANA INTL
			switch (arvl) {
				case "DFW": // SXM-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of SXM

		case "TFS": // Tenerife South/TENERIFE SOUTH
			switch (arvl) {
				case "DFW": // TFS-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of TFS

		case "TQO": // Tulum/FELIPE CARRILLO PUERTO INTL
			switch (arvl) {
				case "DFW": // TQO-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of TQO

		case "TRU": // Trujillo/CAP CARLOS MARTINEZ DE PINILLO
			switch (arvl) {
				case "DFW": // TRU-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of TRU

		case "UIO": // Quito/MARISCAL SUCRE INTL
			switch (arvl) {
				case "DFW": // UIO-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of UIO

		case "UVF": // Hewandorra/HEWANORRA INTL
			switch (arvl) {
				case "DFW": // UVF-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of UVF

		case "VCP": // Campinas/VIRACOPOS INTL
			switch (arvl) {
				case "DFW": // VCP-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of VCP

		case "VER": // Vera Cruz/GEN HERIBERTO JARA INTL
			switch (arvl) {
				case "DFW": // VER-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of VER

		case "VRA": // Varadero/JUAN G. GOMEZ INTL
			switch (arvl) {
				case "DFW": // VRA-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of VRA

		case "VVI": // Santa Cruz/VIRU VIRU INTL
			switch (arvl) {
				case "DFW": // VVI-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of VVI

		case "XPL": // Comayagua /PALMEROLA INTL
			switch (arvl) {
				case "DFW": // XPL-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of XPL

		case "ZIH": // Zihuatanejo/IXTAPA-ZIHUATANEJO INTL
			switch (arvl) {
				case "DFW": // ZIH-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of ZIH

		case "ZLO": // Manzanillo/COSTALEGRE INTL
			switch (arvl) {
				case "DFW": // ZLO-DFW // Updated 01-01-1965
					result += "<!-- Updated 01-01-1965 -->";
					break;
			}
		break; // End of ZLO

    }
    return result;
}
