// GIRL / PARTY PHOTO EVENTS
const _SICK_EVENT_MIN = 120;
const _DREAM_EVENT_MIN = 160;
const _ANKLE_EVENT_MIN = 180;
const _PHOTO_MIN = 200;
const _PROPOSE_MIN = 220;
const _PARTY_ATTEND_MIN = 160;

// NPC EVENTS
const _RICK_FIX_MIN = 31; // Meet + (5 gift/talk)
const _SPRITE_WINE_MIN = 50; // Meet + (14 gift/talk)
const _DUKE_WINE_MIN = 41; // Meet + (4 gift/talk) + (2 Grapes/talk)
const _BASIL_BERRY_MIN = 200;
const _SPRITE_SPAM_MAX = 21; 27

// RICK SHOP
const _PRICE_BLUE_FEATHER = 980;
const _PRICE_BOTTLE = 200;
const _PRICE_BRUSH = 500;
const _PRICE_CABINET = 2000;
const _PRICE_CARPET = 500;
const _PRICE_CLIPPERS = 1000;
const _PRICE_MILKER = 1800;
const _PRICE_OCARINA = 1200;
const _PRICE_VASE = 2000;

// BAKERY
const _PRICE_CAKE = 300;
const _PRICE_PIE = 350;
const _PRICE_COOKIE = 300;
const _PRICE_TEA = 200;

// BAR
const _PRICE_WINE = 300;
const _PRICE_LIQUOR = 300;
const _PRICE_BEER = 350;
const _PRICE_MILK = 150;

// POTION SHOP
const _PRICE_CURE_ALL = 1500;
const _PRICE_VITAMIN = 1000;
const _PRICE_VITAMIN_STRONG = 2000;

// FLOWER SHOP
const _PRICE_SEED_BLUE_MIST = 500;
const _PRICE_SEED_CABBAGE = 200;
const _PRICE_SEED_CORN = 300;
const _PRICE_SEED_EGGPLANT = 300;
const _PRICE_SEED_GRASS = 500;
const _PRICE_SEED_MOONDROP = 300;
const _PRICE_SEED_POTATO = 200;
const _PRICE_SEED_PINK_CAT_MINT = 300;
const _PRICE_SEED_STRAWBERRY = 500;
const _PRICE_SEED_TOMATO = 300;
const _PRICE_SEED_TURNIP = 200;

// RANCH
const _PRICE_COW = 6000;
const _PRICE_CHICKEN = 1500;
const _PRICE_FEED = 10;
const _PRICE_FODDER = 30;
const _PRICE_MEDICINE = 1000;
const _PRICE_MIRACLE_POTION = 3000;
const _PRICE_SHEEP = 4000;

// CUTSCENE AFFS
const _CUTSCENE_RICK_ANN_MIN = 40; // RICK
const _CUTSCENE_COOKFISH_MIN = 142; // ELLI
const _CUTSCENE_BEACH_MIN = 150; // ELLI
const _CUTSCENE_WATERMELON_MIN = 150; // ANN
const _CUTSCENE_RABBIT_MIN = 139; // CLIFF

// GIRL AFFS
const _SICK_EVENT_AFF = 10;
const _DREAM_EVENT_AFF = 8;
const _ANKLE_EVENT_AFF = 10;
const _PHOTO_EVENT_AFF = 10;
const _MUS_BOX_AFF = 6;

// CROP GROW DAYS
const _CABBAGE_GROW_DAYS = 8;
const _CORN_GROW_DAYS = 13;
const _EGGPLANT_GROW_DAYS = 7;
const _GRASS_GROW_DAYS = 9;
const _MOONDROP_GROW_DAYS = 6;
const _PINK_CAT_MINT_GROW_DAYS = 8;
const _POTATO_GROW_DAYS = 6;
const _STRAWBERRY_GROW_DAYS = 6;
const _TOMATO_GROW_DAYS = 9;
const _TURNIP_GROW_DAYS = 4;

// VARIOUS MULTI-DAY LENGTHS
const _BUILD_DAYS = 4;
const _BABY_BORN_DAYS = 60;
const _PREGNANT_SLEEPS = 30;
const _BABY_SLEEPS = 60;
const _CHICK_BORN_SLEEPS = 3;
const _CHICK_GROW_SLEEPS = 7;
const _COW_GROW_SLEEPS = 21;

const _FUNERAL_AFF_LOSS = 10;

var month_names = ["Spring", "Summer", "Fall", "Winter", "SPR", "SUM", "FALL", "WIN"];
var day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
				"SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT",
				"日", "月", "火", "水", "木", "金", "土"
];

// ORDER OF EXTENSIONS IS IMPORTANT!!
// DO NOT RE-ORDER THIS LIST
// (See All-Photos Spr Y3)
var extensions = [
	["greenhouse", 30000, 580, "Greenhouse"],
	["logterrace", 7000, 350, "Log Terrace"],
	["stairway", 2000, 250, "Stairway"],
	["bathroom", 3000, 300, "Bathroom"],
	["babybed", 1000, 150, "Baby Bed"],
	["kitchen", 5000, 450, "Kitchen"]
];

var route_names = ["All Photos (Karen)", "Elli", "Karen", "Popuri", "Elli Photo",
					"All Photos (Elli)", "All Berries", "Maria", "Ann Photo", "Karen Photo",
					"All Recipes", "Maria Photo", "Ann", "Extensions Photo", "Balloon Photo",
					"Horse Race", "Cow Photo", "Swim Photo", "Dog Race", "Party Photo"
];
var bet_colors = ["lightgray", "black", "red", "blue", "yellow", "green"];
var route_affs = [
	[], // 0 - Placeholder for All Photos (Karen) OBSOLETE
	['elli', 'rick'], // 1 - Elli marriage
	['karen'], // 2 - Karen marriage
	['popuri', 'rick'], // 3 - Popuri marriage
	['elli', 'rick'], // 4 - Elli Photo
	[3, 6, 8, 22, 23, 24, 32], // 5 - Placeholder for All Photos (Elli)
	[], // 6 - Placeholder for Berries
	['maria', 'rick'], // 7 - Maria marriage
	['ann', 'rick'], // 8 - Ann Photo
	['karen', 'bartender', 'sprite'], // 9 - Karen Photo
	['grey', 'cliff', 'gotz', 'sprite'], // 10 - All Recipes
	['maria', 'rick'], // 11 - Maria Photo
	['ann', 'rick'], // 12 - Ann marriage
	[], // 13 - Extensions Photo
	[], // 14 - Balloon Photo
	['horse'], // 15 - Horse Race Photo
	['cow'], // 16 - Cow Photo
	[], // 17 - Swim Fest Photo
	['dog'], // 18 - Dog Race Photo
	[] // 19 - Placeholder for Party Photo ONLY
];
var skip_to_list = [
	[3, 17, 64], // Photos (Karen) [OBSOLETE]
	[3, 23, 31], // Elli Marriage
	[3, 90, 102, 109, 110], // Karen Marriage
	[3], // Popuri Marriage
	[3, 31], // Elli Photo
	[4, 6, 8, 22, 23, 43, 44, 45], // Photos (Elli)
	[3], // Berries
	[3], // Maria Marriage
	[3], // Ann Photo
	[3], // Karen Photo
	[3, 83], // All Recipes
	[3], // 11 - Maria Photo
	[3], // 12 - Ann marriage
	[3], // 13 - Extensions Photo
	[3], // 14 - Balloon Photo
	[3], // 15 - Horse Race Photo
	[3], // 16 - Cow Photo
	[3], // 17 - Swim Fest Photo
	[3], // 18 - Dog Race Photo
	[3], // 19 - Placeholder for Party Photo ONLY
	[3], // 20 - Hot Springs Photo
	[3] // 21 - All Festivals
];

var recipe_flags = [
	['Cream of Turnip Stew', 'turnip', 'mayors wife', 0],
	['Easy Tomato Soup', 'tomato', 'shipper', 0],
	['Tomato Rice', 'tomato', 'gotz wife', 0],
	['Tomato Soup', 'tomato', 'pastor', 0],
	['Corn Fritter', 'corn', 'doug', 0],
	['Corn Pasta', 'corn', 'basil', 0],
	['Mashed Potatoes', 'potato', 'ann', 0],
	['Fried Potatoes & Bacon', 'potato', 'mayor', 0],
	['Vegetable Tomato Stew', 'tomato', 'lillia', 0],
	['Garlic Potato Beef', 'potato', 'harris', 0],
	['Eggplant with Miso Paste', 'eggplant', 'midwife', 0],
	['Rolled Cabbage', 'cabbage', 'maria', 0],
	['Stuffed Omelet', 'egg', 'grey', 0],
	['Spa Poached Egg', 'egg', 'kent', 0],
	['Handmade Butter', ['milk s', 'milk m', 'milk l', 'milk g'], 'rick', 0],
	['Mushroom Rice', 'Mushroom', 'mas carpenter', 0],
	['Fried Char', 'Fish L', 'fisherman', 0],
	['Grilled Trout Cheese', ['Fish M', 'Fish L'], 'carpenter bot', 0],
	['Mushroom Stuffed Char', 'Mushroom', 'carpenter top', 0],
	['Steamed Clam with Wine', 'Grapes', 'gotz', 0],
	['Miso Soup with Sprouts', 'Edible', 'potion master', 0],
	['Sesame Dandelion Greens', 'Clover', 'saibara', 0],
	['Mushroom Salsa', 'Mushroom', 'sprite', 0],
	['Strawberry Dog', 'strawberry', 'stu', 0],
	['Walnut Cake', 'walnut', 'ellen', 0],
	['Bread Pudding', ['egg', 'milk s', 'milk m', 'milk l', 'milk g'], 'elli', 0],
	['Herb Rice Cake', 'Edible', 'old woman', 0],
	['Strawberry Jam', 'strawberry', 'popuri', 0],
	['Strawberry Champagne', 'strawberry', 'karen', 0],
	['Veryberry Wine', 'Berry', 'kai', 0],
	['Spice Tea', ['egg', 'milk s', 'milk m', 'milk l', 'milk g'], 'cliff', 0],
	['Hot Spicy Wine', 'Grapes', 'bartender', 0],
	['Cinnamon Milk Tea', ['milk s', 'milk m', 'milk l', 'milk g'], 'jeff', 0],
	['Pickled Turnips & Cabbage', 'turnip', 'old man', 0]
];

// 0 = vars; 1 = flags; 2 = aff
var save_slots = [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}], [{}, {}, {}]];
var actions = [];

var npcs = ["ann", "bartender", "basil", "carpenter bot", "carpenter top", "cliff", "doug",
			"ellen", "elli", "fisherman", "grey", "gotz", "gotz wife", "grey", "harris", "jeff",
			"kai", "karen", "kent", "lillia", "maria", "mas carpenter", "may", "mayor",
			"mayors wife", "midwife", "old man", "old woman", "pastor", "popuri",
			"potion master", "rick", "saibara", "salesman", "shipper", "sprite", "stu", "dog",
			"horse", "cow", "_baby", "chicken", "kappa", "goddess", "judge", "musbox", "stump",
			"cow1", "cow2", "cow3", "cow4", "cow5", "cow6"];
var npc_ids = {};
var not_villagers = [1, 3, 4, 9, 20, 23, 24, 32, 33, 34, 35, 36];
var recipes = [];

var crops = ["Edible", "Berry", "Clover", "Walnut", "Mango", "Grapes", "Mushroom", "Pois Mush",
				"Ore", "Moonlight", "Blue Rock", "Pontata", "Rare Metal",
				"Fish S", "Fish M", "Fish L", "turnip", "potato", "cabbage",
				"tomato", "corn", "eggplant", "strawberry",
				"egg", "milk s", "milk m", "milk l", "milk g"];
// SELL Prices
var crop_prices = [30, 40, 70, 40, 70, 50, 60, 100,
					100, 500, 700, 800, 1000,
					30, 100, 180, 60, 80, 90,
					90, 120, 300, 500,
					50, 100, 150, 300, 500];
// Seasons these crops appear
var crop_seasons =
 [[0, 1, 2], [0, 2, 3, 4], [0, 2, 5, 6, 7], [8, 9, 10, 11, 12]];

var vars = {};
var flags = {};
var aff = {};
var checklist = [];
var cur_slot = 0;

var route_id = 5;
var reset = false;
var sell_stuff = false;
var names_eng = ['Momoko', 'Moiti', 'Mota', "A", "5"];

var ucfirst = function (str) {
	return str.toLowerCase().replace(/^\w/, c => c.toUpperCase());
}

var MD5 = function (string) {

	function RotateLeft(lValue, iShiftBits) {
		return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
	}

	function AddUnsigned(lX,lY) {
		var lX4,lY4,lX8,lY8,lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			}
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
	}

   function F(x,y,z) { return (x & y) | ((~x) & z); }
   function G(x,y,z) { return (x & z) | (y & (~z)); }
   function H(x,y,z) { return (x ^ y ^ z); }
   function I(x,y,z) { return (y ^ (x | (~z))); }

   function FF(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function GG(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function HH(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function II(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function ConvertToWordArray(string) {
           var lWordCount;
           var lMessageLength = string.length;
           var lNumberOfWords_temp1=lMessageLength + 8;
           var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
           var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
           var lWordArray=Array(lNumberOfWords-1);
           var lBytePosition = 0;
           var lByteCount = 0;
           while ( lByteCount < lMessageLength ) {
                   lWordCount = (lByteCount-(lByteCount % 4))/4;
                   lBytePosition = (lByteCount % 4)*8;
                   lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
                   lByteCount++;
           }
           lWordCount = (lByteCount-(lByteCount % 4))/4;
           lBytePosition = (lByteCount % 4)*8;
           lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
           lWordArray[lNumberOfWords-2] = lMessageLength<<3;
           lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
           return lWordArray;
   };

   function WordToHex(lValue) {
           var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
           for (lCount = 0;lCount<=3;lCount++) {
                   lByte = (lValue>>>(lCount*8)) & 255;
                   WordToHexValue_temp = "0" + lByte.toString(16);
                   WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
           }
           return WordToHexValue;
   };

   function Utf8Encode(string) {

           string = string.replace(/\r\n/g,"\n");
           var utftext = "";

           for (var n = 0; n < string.length; n++) {

                   var c = string.charCodeAt(n);

                   if (c < 128) {
                           utftext += String.fromCharCode(c);
                   }
                   else if((c > 127) && (c < 2048)) {
                           utftext += String.fromCharCode((c >> 6) | 192);
                           utftext += String.fromCharCode((c & 63) | 128);
                   }
                   else {
                           utftext += String.fromCharCode((c >> 12) | 224);
                           utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                           utftext += String.fromCharCode((c & 63) | 128);
                   }

           }

           return utftext;
   };

   var x=Array();
   var k,AA,BB,CC,DD,a,b,c,d;
   var S11=7, S12=12, S13=17, S14=22;
   var S21=5, S22=9 , S23=14, S24=20;
   var S31=4, S32=11, S33=16, S34=23;
   var S41=6, S42=10, S43=15, S44=21;

   string = Utf8Encode(string);

   x = ConvertToWordArray(string);

   a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

   for (k=0;k<x.length;k+=16) {
           AA=a; BB=b; CC=c; DD=d;
           a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
           d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
           c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
           b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
           a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
           d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
           c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
           b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
           a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
           d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
           c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
           b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
           a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
           d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
           c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
           b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
           a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
           d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
           c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
           b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
           a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
           d=GG(d,a,b,c,x[k+10],S22,0x2441453);
           c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
           b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
           a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
           d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
           c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
           b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
           a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
           d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
           c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
           b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
           a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
           d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
           c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
           b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
           a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
           d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
           c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
           b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
           a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
           d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
           c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
           b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
           a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
           d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
           c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
           b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
           a=II(a,b,c,d,x[k+0], S41,0xF4292244);
           d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
           c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
           b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
           a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
           d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
           c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
           b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
           a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
           d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
           c=II(c,d,a,b,x[k+6], S43,0xA3014314);
           b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
           a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
           d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
           c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
           b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
           a=AddUnsigned(a,AA);
           b=AddUnsigned(b,BB);
           c=AddUnsigned(c,CC);
           d=AddUnsigned(d,DD);
   		}

   	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

   	return temp.toLowerCase();
}
