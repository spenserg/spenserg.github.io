<script>
	function get_all_auths() {
		return {
	'Dahl':["Dahl", "Friedrich Dahl", "Friedrich Dahl", "NULL"],
	'Emerton':["Emerton", "James Henry Emerton", "James Henry Emerton", "NULL"],
	'Keyserling':["Keyserling", "Eugen von Keyserling", "Eugen von Keyserling", "Taxa named by Eugen von Keyserling"],
	'C. L. Koch':["C. L. Koch", "Ludwig Carl Christian Koch", "Ludwig Carl Christian Koch", "Taxa named by Carl Ludwig Koch"],
	'L. Koch':["L. Koch", "Ludwig Carl Christian Koch", "Ludwig Carl Christian Koch", "NULL"],
	'KulczyÅ„ski':["KulczyÅ„ski", "WÅ‚adysÅ‚aw KulczyÅ„ski", "WÅ‚adysÅ‚aw KulczyÅ„ski", "NULL"],
	'Kulczynski':["Kulczynski", "WÅ‚adysÅ‚aw KulczyÅ„ski", "WÅ‚adysÅ‚aw KulczyÅ„ski", "NULL"],
	'Lehtinen':["Lehtinen", "Pekka T. Lehtinen", "Pekka T. Lehtinen", "Taxa named by Pekka T. Lehtinen"],
	'Marx':["Marx", "George Marx", "George Marx", "NULL"],
	'Menge':["Menge", "Anton Menge", "Anton Menge", "NULL"],
	'Millidge':["Millidge", "Alfred Frank Millidge", "A. F. Millidge", "NULL"],
	'F. O. Pickard-Cambridge':["F. O. Pickard-Cambridge", "Frederick Octavius Pickard-Cambridge", "Frederick Octavius Pickard-Cambridge", "Taxa named by Frederick Octavius Pickard-Cambridge"],
	'O. Pickard-Cambridge':["O. Pickard-Cambridge", "Octavius Pickard-Cambridge", "Octavius Pickard-Cambridge", "Taxa named by Octavius Pickard-Cambridge"],
	'Perty':["Perty", "Josef Anton Maximilian Perty", "Maximilian Perty", "NULL"],
	'Platnick':["Platnick", "Norman I. Platnick", "Norman I. Platnick", "NULL"],
	'Pocock':["Pocock", "Reginald Innes Pocock", "Reginald Innes Pocock", "Taxa named by R. I. Pocock"],
	'PrÃ³szyÅ„ski':["PrÃ³szyÅ„ski", "Jerzy PrÃ³szyÅ„ski", "Jerzy PrÃ³szyÅ„ski", "NULL"],
	'Proszynski':["Proszynski", "Jerzy PrÃ³szyÅ„ski", "Jerzy PrÃ³szyÅ„ski", "NULL"],
	'Roewer':["Roewer", "Carl Friedrich Roewer", "Carl Friedrich Roewer", "Taxa named by Carl Friedrich Roewer"],
	'Saaristo':["Saaristo", "Michael I. Saaristo", "Michael Saaristo", "NULL"],
	'Strand':["Strand", "Embrik Strand", "Embrik Strand", "Taxa named by Embrik Strand"],
	'Simon':["Simon", "EugÃ¨ne Louis Simon", "EugÃ¨ne Simon", "Taxa named by EugÃ¨ne Simon"],
	'Thorell':["Thorell", "Tamerlan Thorell", "Tamerlan Thorell", "Taxa named by Tamerlan Thorell"],
	'Walckenaer':["Walckenaer", "Charles Athanase Walckenaer", "Charles Athanase Walckenaer", "Taxa named by Charles Athanase Walckenaer"],
	'Gertsch':["Gertsch", "Carl Eduard Adolph Gerstaecker", "Willis J. Gertsch", "NULL"],
	'Ausserer':["Ausserer", "Anton Ausserer", "Anton Ausserer", "Taxa named by Anton Ausserer"],
	'Forster':["Forster", "Raymond Robert Forster", "Raymond Robert Forster", "Taxa named by Raymond Robert Forster"],
	'Kishida':["Kishida", "Kyukichi Kishida", "Kyukichi Kishida", "NULL"],
	'Westring':["Westring", "Niklas Westring", "Niklas Westring", "NULL"],
	'R. V. Chamberlin':["R. V. Chamberlin", "Ralph Vary Chamberlin", "Ralph Vary Chamberlin", "NULL"],
	'Karsch':["Karsch", "Ferdinand Anton Franz Karsch", "Ferdinand Karsch", "Taxa named by Ferdinand Karsch"],
	'Ivie':["Ivie", "Vaine Wilton Ivie", "Wilton Ivie", "NULL"],
	'Agnarsson':["Agnarsson", "Ingi Agnarsson", "NULL", "NULL"],
	'Archer':["Archer", "Allan Frost Archer", "Allan Frost Archer", "NULL"],
	'Audouin':["Audouin", "Jean Victoire Audouin", "Jean Victoire Audouin", "Taxa named by Jean Victoire Audouin"],
	'Banks':["Banks", "Nathan Banks", "Nathan Banks", "Taxa named by Nathan Banks"],
	'Beier':["Beier", "Max Beier", "Max Beier", "NULL"],
	'Benoit':["Benoit", "Pierre L.G. Benoit", "NULL", "NULL"],
	'Berland':["Berland", "Lucien Berland", "Lucien Berland", "Taxa named by Lucien Berland"],
	'Bertani':["Bertani", "RogÃ©rio_Bertani", "RogÃ©rio Bertani", "NULL"],
	'Bertkau':["Bertkau", "Philipp Bertkau", "Philipp Bertkau", "Taxa named by Philipp Bertkau"],
	'Blackwall':["Blackwall", "John Blackwall", "John Blackwall", "Taxa named by John Blackwall"],
	'Bond':["Bond", "Jason Bond", "Jason Bond", "NULL"],
	'Brady':["Brady", "Allen R. Brady", "NULL", "NULL"],
	'Brescovit':["Brescovit", "AntÃ´nio Domingos Brescovit", "AntÃ´nio Brescovit", "Taxa named by AntÃ´nio Brescovit"],
	'Brignoli':["Brignoli", "Paolo Marcello Brignoli", "Paolo Brignoli", "Taxa named by Paolo Brignoli"],
	'Bristowe':["Bristowe", "William Syer Bristowe", "W. S. Bristowe", "NULL"],
	'Butler':["Butler", "Arthur Gardiner Butler", "Arthur Gardiner Butler", "Taxa named by Arthur Gardiner Butler"],
	'Camargo':["Camargo", "HÃ©lio Ferraz de Almeida Camargo", "HÃ©lio Ferraz de Almeida Camargo", "NULL"],
	'Canestrini':["Canestrini", "Giovanni Canestrini", "Giovanni Canestrini", "Taxa named by Giovanni Canestrini"],
	'Caporiacco':["Caporiacco", "Lodovico di Caporiacco", "Lodovico di Caporiacco", "NULL"],
	'J. C. Chamberlin':["J. C. Chamberlin", "Joseph Conrad Chamberlin", "Joseph Conrad Chamberlin", "NULL"],
	'Charitonov':["Charitonov", "Dmitry Evstratievich Kharitonov", "Dmitry Kharitonov", "Taxa named by Dmitry Kharitonov"],
	'Chickering':["Chickering", "Arthur Merton Chickering", "Arthur M. Chickering", "NULL"],
	'Churchill':["Churchill", "Tracey Churchill", "NULL", "NULL"],
	'Clerck':["Clerck", "Carl Alexander Clerck", "Carl Alexander Clerck", "NULL"],
	'Coddington':["Coddington", "Jonathan A. Coddington", "Jonathan A. Coddington", "NULL"],
	'de Geer':["de Geer", "Charles De Geer", "Charles De Geer", "Taxa named by Charles De Geer"],
	'Deeleman-Reinhold':["Deeleman-Reinhold", "Christa Laetitia Deeleman-Reinhold", "Christa L. Deeleman-Reinhold", "NULL"],
	'Doleschall':["Doleschall", "Carl Ludwig Doleschall", "Carl Ludwig Doleschall", "NULL"],
	'G. B. Edwards':["G. B. Edwards", "Glavis Bernard Edwards", "G. B. Edwards (entomologist)", "NULL"],
	'Eichwald':["Eichwald", "Karl Eduard von Eichwald", "Karl Eichwald", "Taxa named by Karl Eichwald"],
	'Fabricius':["Fabricius", "Johan Christian Fabricius", "Johan Christian Fabricius", "Taxa named by Johan Christian Fabricius"],
	'Fet':["Fet", "Victor R. Fet", "NULL", "NULL"],
	'ForsskÃ¥l':["ForsskÃ¥l", "Peter ForsskÃ¥l", "Peter ForsskÃ¥l", "Taxa named by Peter ForsskÃ¥l"],
	'Forsskal':["Forsskal", "Peter ForsskÃ¥l", "Peter ForsskÃ¥l", "Taxa named by Peter ForsskÃ¥l"],
	'Fukushima':["Fukushima", "Caroline Sayuri Fukushima", "NULL", "NULL"],
	'Galiano':["Galiano", "MarÃ­a Elena Galiano", "MarÃ­a Elena Galiano", "NULL"],
	'GardziÅ„ska':["GardziÅ„ska", "Joanna GardziÅ„ska", "Joanna GardziÅ„ska", "NULL"],
	'Gardzinska':["Gardzinska", "Joanna GardziÅ„ska", "Joanna GardziÅ„ska", "NULL"],
	'GerstÃ¤cker':["GerstÃ¤cker", "Carl Eduard Adolph Gerstaecker", "Carl Eduard Adolph Gerstaecker", "Taxa named by Carl Eduard Adolph Gerstaecker"],
	'Gerstacker':["Gerstacker", "NULL", "Carl Eduard Adolph Gerstaecker", "Taxa named by Carl Eduard Adolph Gerstaecker"],
	'Goloboff':["Goloboff", "Pablo A. Goloboff", "NULL", "NULL"],
	'Graveley':["Graveley", "Frederic Henry Gravely", "F. H. Gravely", "NULL"],
	'Gray':["Gray", "Michael R. Gray", "NULL", "NULL"],
	'Hahn':["Hahn", "Carl Wilhelm Hahn", "Carl Wilhelm Hahn", "NULL"],
	'Harvey':["Harvey", "Mark Stephen Harvey", "Mark Harvey (arachnologist)", "NULL"],
	'Hentz':["Hentz", "Nicholas Marcellus Hentz", "Nicholas Marcellus Hentz", "NULL"],
	'A. S. Hirst':["A. S. Hirst", "A.S. Hirst", "NULL", "NULL"],
	'D. Hirst':["D. Hirst", "NULL", "David Hirst (arachnologist)", "NULL"],
	'Hogg':["Hogg", "Henry Roughton Hogg", "Henry Roughton Hogg", "NULL"],
	'Hormiga':["Hormiga", "Gustavo Hormiga", "NULL", "NULL"],
	'JÃ¤ger':["JÃ¤ger", "Peter JÃ¤ger", "Peter JÃ¤ger", "NULL"],
	'Jager':["Jager", "Peter JÃ¤ger", "Peter JÃ¤ger", "NULL"],
	'JocquÃ©':["JocquÃ©", "Rudy JocquÃ©", "NULL", "NULL"],
	'Jocque':["Jocque", "Rudy JocquÃ©", "NULL", "NULL"],
	'Kaderka':["Kaderka", "Radan Kaderka", "NULL", "NULL"],
	'Kaston':["Kaston", "Benjamin Julian Kaston", "B. J. Kaston", "NULL"],
	'Latreille':["Latreille", "Pierre AndrÃ© Latreille", "Pierre AndrÃ© Latreille", "Taxa named by Pierre AndrÃ© Latreille"],
	'Leach':["Leach", "William Elford Leach", "William Elford Leach", "Taxa named by William Elford Leach"],
	'Lenz':["Lenz", "Heinrich Lenz", "NULL", "NULL"],
	'Levi':["Levi", "Herbert Walter Levi", "Herbert Walter Levi", "NULL"],
	'Linnaeus':["Linnaeus", "Carl Linnaeus", "Carl Linnaeus", "Taxa named by Carl Linnaeus"],
	'Locht':["Locht", "Arturo Locht", "NULL", "NULL"],
	'Logunov':["Logunov", "Dmitri V. Logunov", "NULL", "NULL"],
	'Maddison':["Maddison", "Wayne Paul Maddison", "Wayne Maddison", "NULL"],
	'Main':["Main", "Barbara York Main", "Barbara York Main", "NULL"],
	'Marples':["Marples", "Brian John Marples", "Brian J. Marples", "NULL"],
	'Marusik':["Marusik", "Yuri M. Marusik", "NULL", "NULL"],
	'McCrone':["McCrone", "John D. McCrone", "NULL", "NULL"],
	'Mello-LeitÃ£o':["Mello-LeitÃ£o", "CÃ¢ndido Firmino de Mello-LeitÃ£o", "CÃ¢ndido Firmino de Mello-LeitÃ£o", "Taxa named by CÃ¢ndido Firmino de Mello-LeitÃ£o"],
	'Mello-Leitao':["Mello-Leitao", "CÃ¢ndido Firmino de Mello-LeitÃ£o", "CÃ¢ndido Firmino de Mello-LeitÃ£o", "Taxa named by CÃ¢ndido Firmino de Mello-LeitÃ£o"],
	'Mirza':["Mirza", "Zeeshan A. Mirza", "NULL", "NULL"],
	'Molur':["Molur", "Sanjay Molur", "NULL", "NULL"],
	'Panzer':["Panzer", "Georg Wolfgang Franz Panzer", "Georg Wolfgang Franz Panzer", "NULL"],
	'Patoleta':["Patoleta", "Barbara Maria Patoleta", "Barbara Maria Patoleta", "NULL"],
	'PÃ©rez-Miles':["PÃ©rez-Miles", "Fernando Pérez-Miles", "NULL", "NULL"],
	'Perez-Miles':["Perez-Miles", "Fernando PÃ©rez-Miles", "NULL", "NULL"],
	'Petrunkevitch':["Petrunkevitch", "Alexander Ivanovitch Petrunkevitch", "Alexander Petrunkevitch", "NULL"],
	'Purcell':["Purcell", "William Frederick Purcell", "William Frederick Purcell", "NULL"],
	'Raven':["Raven", "Robert John Raven", "Robert Raven", "NULL"],
	'Reimoser':["Reimoser", "Eduard Reimoser", "NULL", "NULL"],
	'Rix':["Rix", "Michael Gordon Rix", "Michael Gordon Rix", "NULL"],
	'Rossi':["Rossi", "Pietro Rossi", "Pietro Rossi (scientist)", "Taxa named by Pietro Rossi"],
	'Ruiz':["Ruiz", "Gustavo Rodrigo Sanches Ruiz", "NULL", "NULL"],
	'Sanap':["Sanap", "Rajesh V. Sanap", "NULL", "NULL"],
	'Schmidt':["Schmidt", "GÃ¼nter E. W. Schmidt", "GÃ¼nter Schmidt (arachnologist)", "Taxa named by Günter E. W. Schmidt"],
	'Schwendinger':["Schwendinger", "Peter J. Schwendinger", "Peter J. Schwendinger", "NULL"],
	'Scopoli':["Scopoli", "Giovanni Antonio Scopoli", "Giovanni Antonio Scopoli", "NULL"],
	'Siliwal':["Siliwal", "Manju Siliwal", "NULL", "NULL"],
	'Stoliczka':["Stoliczka", "Ferdinand Stoliczka", "Ferdinand Stoliczka", "NULL"],
	'Stumkat':["Stumkat", "Kylie S. Stumkat", "NULL", "NULL"],
	'Sulzer':["Sulzer", "Johann Heinrich Sulzer", "Johann Heinrich Sulzer", "Taxa named by Johann Heinrich Sulzer"],
	'Sundevall':["Sundevall", "Carl Jakob Sundevall", "Carl Jakob Sundevall", "Taxa named by Carl Jakob Sundevall"],
	'Szombathy':["Szombathy", "KÃ¡lmÃ¡n Szombathy", "NULL", "NULL"],
	'Taczanowski':["Taczanowski", "WÅ‚adysÅ‚aw Taczanowski", "WÅ‚adysÅ‚aw Taczanowski", "NULL"],
	'Templeton':["Templeton", "Robert Templeton", "Robert Templeton", "NULL"],
	'Tesmoingt':["Tesmoingt", "Marc Tesmoingt", "NULL", "NULL"],
	'Tikader':["Tikader", "Benoy Krishna Tikader", "B. K. Tikader", "NULL"],
	'Tullgren':["Tullgren", "Hugo Albert Tullgren", "Albert Tullgren", "NULL"],
	'Wagner':["Wagner", "Johann Andreas Wagner", "Johann Andreas Wagner", "Taxa named by Johann Andreas Wagner"],
	'Wanless':["Wanless", "Fred R. Wanless", "NULL", "NULL"],
	'WesoÅ‚owska':["WesoÅ‚owska", "Wanda WesoÅ‚owska", "Wanda WesoÅ‚owska", "Taxa named by Wanda WesoÅ‚owska"],
	'Wesolowska':["Wesolowska", "Wanda WesoÅ‚owska", "Wanda WesoÅ‚owska", "Taxa named by Wanda WesoÅ‚owska"],
	'Å»abka':["Å»abka", "Marek MichaÅ‚ Å»abka", "Marek MichaÅ‚ Å»abka", "NULL"],
	'Zabka':["Zabka", "Marek MichaÅ‚ Å»abka", "Marek MichaÅ‚ Å»abka", "NULL"],
	'Zamani':["Zamani", "Alireza Zamani", "Alireza Zamani", "NULL"],
	'Zhu':["Zhu", "Ming-Sheng Zhu", "NULL", "NULL"],
	'Chamberlin':["Chamberlin", "Ralph Vary Chamberlin", "Ralph Vary Chamberlin", "NULL"],
	'McCook':["McCook", "Henry Christopher McCook", "Henry Christopher McCook", "NULL"],
	'Hyatt':["Hyatt", "Alpheus Hyatt", "Alpheus_Hyatt", "NULL"],
	'B. Baehr':["B. Baehr", "Barbara Baehr", "Barbara_Baehr", "NULL"],
	'M. Baehr':["M. Baehr", "Martin Baehr", "Martin_Baehr", "NULL"],
	'Riechert, S. E.':["Riechert, S. E.", "Susan Riechert", "Susan_Riechert", "NULL"]
}
	}
</script>