var fam_ids = [1, 2, 3, 4, 136, 6, 7, 8, 9, 10, 120, 124, 11, 12, 13, 137, 14, 113, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 139, 32, 132, 33, 34, 35, 36, 37, 38, 127, 39, 40, 129, 42, 43, 44, 45, 133, 46, 47, 48, 49, 50, 51, 125, 52, 53, 54, 118, 130, 134, 56, 57, 58, 59, 131, 60, 61, 63, 64, 65, 66, 67, 68, 69, 121, 70, 72, 73, 74, 75, 76, 115, 119, 77, 78, 79, 80, 126, 82, 128, 138, 83, 84, 85, 86, 87, 88, 90, 135, 91, 92, 93, 94, 95, 96, 98, 99, 100, 101, 102, 103, 104, 122, 114, 105, 106, 107, 116, 108, 117, 123, 109, 112];
var fams = get_all_fams();

function get_fam_by_id(id = -1) {
    id = parseInt(id);
    if (!fam_ids.includes(id)) { return null; }
    var index = ((id >= fams.length) ? fams.length : id);

    // Index should be close to id
    while (index > 0 && index < fams.length) {
        if (fams[index][0] == id) { return fams[index]; }
        if (fams[index][0] > id) {
            index--;
        } else {
            index++;
        }
    }

    // Backup search (
    for(var i = 0; i < fams.length; i++) {
        if (fams[i][0] == id) { return fams[i]; }
    }
    return null;
}

function get_fam_by_name(name = "") {
    if (name.length < 2) { return null; }
    name = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
    for(var i = 0; i < fams.length; i++) {
      if (fams[index][1].localeCompare(name)) { return fams[index]; }
    }
    return null;
}

function get_next_fam(id = -1) {
    var index = fams.indexOf(id);
    if (id == -1) { return fams[1]; }
    return ((id == (fams.length - 1)) ? 1 : (id + 1));
}

function get_all_fams() {
  return [
[1, "Actinopodidae", "Simon, 1892", "NULL", "Actinopodidae"],
[2, "Agelenidae", "C. L. Koch, 1837", "funnel weavers", "Agelenidae"],
[3, "Amaurobiidae", "Thorell, 1870", "tangled nest spiders", "Amaurobiidae"],
[4, "Ammoxenidae", "Simon, 1893", "termite hunters", "Ammoxenidae"],
[6, "Anapidae", "Simon, 1895", "NULL", "Anapidae"],
[7, "Antrodiaetidae", "Gertsch, 1940", "folding trapdoor spiders", "Antrodiaetidae"],
[8, "Anyphaenidae", "Bertkau, 1878", "anyphaenid sac spiders", "Anyphaenidae"],
[9, "Araneidae", "Clerck, 1757", "orb-weaver spiders", "Orb-weaver_spider"],
[10, "Archaeidae", "C. L. Koch & Berendt, 1854", "assassin spiders", "Archaeidae"],
[11, "Atypidae", "Thorell, 1870", "purseweb spiders", "Atypical tarantula"],
[12, "Austrochilidae", "Zapfe, 1955", "NULL", "Austrochilidae"],
[13, "Barychelidae", "Simon, 1889", "brushed trapdoor spiders", "Barychelidae"],
[14, "Caponiidae", "Simon, 1890", "NULL", "Caponiidae"],
[16, "Cithaeronidae", "Simon, 1893", "NULL", "Cithaeronidae"],
[17, "Clubionidae", "Wagner, 1887", "sac spiders", "Sac_spider"],
[18, "Corinnidae", "Karsch, 1880", "corinnid sac spiders", "Corinnidae"],
[19, "Ctenidae", "Keyserling, 1877", "wandering spiders", "Wandering_spider"],
[20, "Ctenizidae", "Thorell, 1887", "trapdoor spiders", "Ctenizidae"],
[21, "Cyatholipidae", "Simon, 1894", "NULL", "Cyatholipidae"],
[22, "Cybaeidae", "Banks, 1892", "NULL", "Cybaeidae"],
[23, "Cycloctenidae", "Simon, 1898", "NULL", "Cycloctenidae"],
[24, "Cyrtaucheniidae", "Simon, 1889", "wafer trapdoor spiders", "Wafer_trapdoor_spider"],
[25, "Deinopidae", "C. L. Koch, 1850", "net-casting spiders", "Deinopidae"],
[26, "Desidae", "Pocock, 1895", "intertidal spiders", "Desidae"],
[27, "Dictynidae", "O. Pickard-Cambridge, 1871", "NULL", "Dictynidae"],
[28, "Diguetidae", "F. O. Pickard-Cambridge, 1899", "coneweb spiders", "Coneweb_spider"],
[29, "Dipluridae", "Simon, 1889", "curtain web spiders", "Dipluridae"],
[30, "Drymusidae", "Simon, 1893", "false violin spiders", "Drymusa"],
[31, "Dysderidae", "C. L. Koch, 1837", "woodlouse hunting spiders", "Dysderidae"],
[32, "Eresidae", "C. L. Koch, 1845", "velvet spiders", "Velvet_spider"],
[33, "Euctenizidae", "Raven, 1985", "NULL", "Euctenizidae"],
[34, "Filistatidae", "Ausserer, 1867", "crevice weavers", "Crevice_weaver"],
[35, "Gallieniellidae", "Millot, 1947", "NULL", "Gallieniellidae"],
[36, "Gnaphosidae", "Pocock, 1898", "ground spiders", "Ground_spider"],
[37, "Gradungulidae", "Forster, 1955", "large-clawed spiders", "Gradungulidae"],
[38, "Hahniidae", "Bertkau, 1878", "dwarf sheet spiders", "Dwarf_sheet_spider"],
[39, "Hersiliidae", "Thorell, 1870", "tree trunk spiders", "Tree_trunk_spider"],
[40, "Hexathelidae", "Simon, 1892", "funnel-web spiders", "Hexathelidae"],
[42, "Homalonychidae", "Simon, 1893", "NULL", "Homalonychus"],
[43, "Huttoniidae", "Simon, 1893", "NULL", "Huttonia"],
[44, "Hypochilidae", "Marx, 1888", "lampshade spiders", "Lampshade_spider"],
[45, "Idiopidae", "Simon, 1889", "armored trapdoor spiders", "Idiopidae"],
[46, "Lamponidae", "Simon, 1893", "white tailed spiders", "Lamponidae"],
[47, "Leptonetidae", "Simon, 1890", "leptonetids", "Leptonetidae"],
[48, "Linyphiidae", "Blackwall, 1859", "sheet weavers", "Linyphiidae"],
[49, "Liocranidae", "Simon, 1897", "liocranid sac spiders", "Liocranidae"],
[50, "Liphistiidae", "Thorell, 1869", "tube-dwelling spiders", "Liphistiidae"],
[51, "Lycosidae", "Sundevall, 1833", "wolf spiders", "Wolf_spider"],
[52, "Malkaridae", "Davies, 1980", "shield spiders", "Malkaridae"],
[53, "Mecicobothriidae", "Holmberg, 1882", "dwarf tarantulas", "Dwarf_tarantula"],
[54, "Mecysmaucheniidae", "Simon, 1895", "NULL", "Mecysmaucheniidae"],
[56, "Microstigmatidae", "Roewer, 1942", "NULL", "Microstigmatidae"],
[57, "Migidae", "Simon, 1889", "tree trapdoor spiders", "Migidae"],
[58, "Mimetidae", "Simon, 1881", "pirate spiders", "Pirate_spider"],
[59, "Miturgidae", "Simon, 1886", "long-legged sac spiders", "Miturgidae"],
[60, "Mysmenidae", "Petrunkevitch, 1928", "spurred orb-weavers", "Mysmenidae"],
[61, "Nemesiidae", "Simon, 1889", "funnel-web tarantulas", "Nemesiidae"],
[63, "Nesticidae", "Simon, 1894", "scaffold web spiders", "Scaffold_web_spider"],
[64, "Nicodamidae", "Simon, 1897", "red and black spiders", "Nicodamidae"],
[65, "Ochyroceratidae", "Fage, 1912", "midget ground weavers", "Ochyroceratidae"],
[66, "Oecobiidae", "Blackwall, 1862", "disc web spiders", "Oecobiidae"],
[67, "Oonopidae", "Simon, 1890", "goblin spiders", "Oonopidae"],
[68, "Orsolobidae", "Cooke, 1965", "NULL", "Orsolobidae"],
[69, "Oxyopidae", "Thorell, 1870", "lynx spiders", "Lynx_spider"],
[70, "Palpimanidae", "Thorell, 1870", "palp-footed spiders", "Palpimanidae"],
[72, "Paratropididae", "Simon, 1889", "baldlegged spiders", "Paratropididae"],
[73, "Penestomidae", "Simon, 1903", "NULL", "Penestomus"],
[74, "Periegopidae", "Simon, 1893", "six-eyed spiders", "Periegops"],
[75, "Philodromidae", "Thorell, 1870", "running crab spiders", "Philodromidae"],
[76, "Pholcidae", "C. L. Koch, 1850", "cellar spiders", "Pholcidae"],
[77, "Phyxelididae", "Lehtinen, 1967", "NULL", "Phyxelididae"],
[78, "Pimoidae", "Wunderlich, 1986", "NULL", "Pimoidae"],
[79, "Pisauridae", "Simon, 1890", "nursery web spiders", "Nursery_web_spider"],
[80, "Plectreuridae", "Simon, 1893", "plectreurid spiders", "Plectreuridae"],
[82, "Psechridae", "Simon, 1890", "NULL", "Psechridae"],
[83, "Salticidae", "Blackwall, 1841", "jumping spiders", "Jumping_spider"],
[84, "Scytodidae", "Blackwall, 1864", "spitting spiders", "Spitting_spider"],
[85, "Segestriidae", "Simon, 1893", "tube dwelling spiders", "Tube-dwelling_spider"],
[86, "Selenopidae", "Simon, 1897", "wall spiders", "Selenopidae"],
[87, "Senoculidae", "Simon, 1890", "NULL", "Senoculus"],
[88, "Sicariidae", "Keyserling, 1880", "recluse spider", "Sicariidae"],
[90, "Sparassidae", "Bertkau, 1872", "huntsman spiders", "Huntsman_spider"],
[91, "Stenochilidae", "Thorell, 1873", "NULL", "Stenochilidae"],
[92, "Stiphidiidae", "Dalmas, 1917", "sheetweb spiders", "Stiphidiidae"],
[93, "Symphytognathidae", "Hickman, 1931", "dwarf orb-weavers", "Symphytognathidae"],
[94, "Synaphridae", "Wunderlich, 1986", "NULL", "Synaphridae"],
[95, "Synotaxidae", "Simon, 1894", "NULL", "Synotaxus"],
[96, "Telemidae", "Fage, 1913", "long-legged cave spiders", "Telemidae"],
[98, "Tetrablemmidae", "O. Pickard-Cambridge, 1873", "NULL", "Tetrablemmidae"],
[99, "Tetragnathidae", "Menge, 1866", "long-jawed orb-weavers", "Long-jawed_orb_weaver"],
[100, "Theraphosidae", "Thorell, 1869", "tarantulas", "Tarantula"],
[101, "Theridiidae", "Sundevall, 1833", "tangle-web spiders", "Theridiidae"],
[102, "Theridiosomatidae", "Simon, 1881", "ray spiders", "Ray_spider"],
[103, "Thomisidae", "Sundevall, 1833", "crab spiders", "Thomisidae"],
[104, "Titanoecidae", "Lehtinen, 1967", "NULL", "Titanoecidae"],
[105, "Trechaleidae", "Simon, 1890", "NULL", "Trechaleidae"],
[106, "Trochanteriidae", "Karsch, 1879", "flat spiders", "Trochanteriidae"],
[107, "Trogloraptoridae", "Griswold, Audisio & Ledford, 2012", "NULL", "Trogloraptor"],
[108, "Uloboridae", "Thorell, 1869", "cribellate orb-weavers", "Uloboridae"],
[109, "Zodariidae", "Thorell, 1881", "ant spiders", "Ant_spider"],
[112, "Zoropsidae", "Bertkau, 1882", "false wolf spiders", "Zoropsidae"],
[113, "Cheiracanthiidae", "Wagner, 1887", "NULL", "Cheiracanthiidae"],
[114, "Trachelidae", "Simon, 1897", "NULL", "Trachelidae"],
[115, "Phrurolithidae", "Banks, 1892", "NULL", "Phrurolithidae"],
[116, "Udubidae", "Griswold & Polotow, 2015", "NULL", "Udubidae"],
[117, "Viridasiidae", "Lehtinen, 1967", "NULL", "Viridasiidae"],
[118, "Megadictynidae", "Lehtinen, 1967", "NULL", "Megadictynidae"],
[119, "Physoglenidae", "Petrunkevitch, 1928", "NULL", "Physoglenidae"],
[120, "Arkyidae", "L. Koch, 1872", "NULL", "Arkyidae"],
[121, "Pacullidae", "Simon, 1894", "NULL", "Pacullidae"],
[122, "Toxopidae", "Hickman, 1940", "NULL", "Toxopidae"],
[123, "Xenoctenidae", "RamÃ­rez & Silva-DÃ¡vila, 2017", "NULL", "Xenoctenidae"],
[124, "Atracidae", "Hogg, 1901", "Australian funnel web spiders", "Australian_funnel-web_spider"],
[125, "Macrothelidae", "Simon, 1892", "NULL", "Macrothele"],
[126, "Porrhothelidae", "Hedin, Derkarabetian, Ramírez, Vink & Bond, 2018", "NULL", "Porrhothele"],
[127, "Halonoproctidae", "Pocock, 1901", "NULL", "Halonoproctidae"],
[128, "Psilodercidae", "Machado, 1951", "NULL", "Psilodercidae"],
[129, "Hexurellidae", "Hedin & Bond, 2019", "NULL", "Hexurella"],
[130, "Megahexuridae", "Hedin & Bond, 2019", "NULL", "Megahexura"],
[131, "Myrmecicultoridae", "Ramírez, Grismado & Ubick, 2019", "NULL", "Myrmecicultor"],
[132, "Euagridae", "Raven, 1979", "NULL", "Euagridae"],
[133, "Ischnothelidae", "F. O. Pickard-Cambridge, 1897", "NULL", "Ischnothelidae"],
[134, "Microhexuridae", "Bond, Opatova & Hedin, 2020", "NULL", "Microhexura"],
[135, "Stasimopidae", "Bond, Opatova & Hedin, 2020", "NULL", "Stasimopus"],
[136, "Anamidae", "Simon, 1889", "NULL", "Anamidae"],
[137, "Bemmeridae", "Simon, 1903", "NULL", "Bemmeridae"],
[138, "Pycnothelidae", "Chamberlin, 1917", "NULL", "Pycnothelidae"],
[139, "Entypesidae", "Bond, Opatova & Hedin, 2020", "NULL", "Entypesidae"]
];
}
