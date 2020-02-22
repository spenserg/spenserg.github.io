function get_actions_karen_photo (d = 3, g = 300, is_sunny = 1) {
	//Karen photo

	/* REQUIREMENTS:
	 * - Karen at 200+ affection
	 * - Duke at 38+ affection
	 * - Sprite 50+ affection
	 * - Egg into Goddess Pond
	 * - 6:00 PM on Fall 7
	 * 
	 * NOTES:
	 * +3/+3 ~ Duke		9, 15, 21, 27, 33, 39
	 * 					9, 15, 21, 31, 39
	 * 				in/co/g, co/g, co/g, co/grap rec, co/grap
	 * +1/+5 ~ Sprite
	 * 		right spr: 4 gifts, 4 g, 4 g, 3 g, 3 g, 3 g
	 * 
	 * 6 days total
	 * Play when Karen might be outside carp house
	 * TUES / WED / FRI / SAT
	 * 
	 * Go through as few screens as possible
	 */

	var a = [];
	var dow = get_day_of_week(d, true);
	var karen_id = get_npc_id('karen');
	var sprite_id = get_npc_id('sprite');
	var duke_id = get_npc_id('bartender');
	var dog_id = get_npc_id('dog');

	if (d > 67) {
		if (flags['photo_karen'] == 0) {
			a.push({'desc':"RESET", 'red':true});
		} else {
			a.push({'desc':"Get Photo from Mailbox"});
			a.push({'desc':"Album Page 4", 'imp':true, 'iid':karen_id});
		}
	} else if (d > 30 && vars['turnip_waters'] < _TURNIP_GROW_DAYS) {
		a.push({'desc':"RESET (Turnips not done)", 'red':true});
	} else if (d <= 30) {
		// If days left are same as turnip waters required, then water them manually
		if (flags['turnips_planted'] == 1 && vars['turnip_waters'] < _TURNIP_GROW_DAYS) {
			a.push({'desc':("[" + (_TURNIP_GROW_DAYS - vars['turnip_waters']) + " rainy days left]")});
		}

		// First Day
		if (d == 3) {
			a.push({'desc':"Equip axe"});
			a.push({'desc':"[Start A A Right A A Right A A B]", 'sr':true, 'imp':true});
			a.push({'desc':"Greet the Mayor", 'iid':get_npc_id('mayor')});
			a.push({'desc':"Chop 1 Stump, Collect 6 Lumber from Bin", 'iid':get_npc_id('stump')});
			a.push({'desc':"Equip hoe, till one square", 'imp':true});
		} else if (d == 30) {
			a.push({'desc':"Reset if Turnips are not done", 'red':true});
		} else if ((_TURNIP_GROW_DAYS - vars['turnip_waters']) == (30 - d)) {
			// Not enough rainy days left; must water turnips
			a.push({'desc':"Equip Watering Can", 'imp':true});
			a.push({'desc':"Fill Watering Can", 'sr':true});
			a.push({'desc':"Water Turnips", 'cid':'v_turnip_waters', 'val':1, 'sr':true});
		}

		// Mountain Visit Days
		if ((aff[sprite_id] < 33 || (d <= 30 && vars['turnip_waters'] >= _TURNIP_GROW_DAYS && vars['turnip_waters'] < 90)) && ((["TUES", "WED", "FRI", "SAT"].includes(dow) && is_sunny == 1) || (aff[karen_id] >= 100 || d == 4))) {

			// Plant Turnips
			if (d > 3 && flags['turnips_planted'] == 0) {
				a.push({'desc':"Equip Turnip Seeds"});
				a.push({'desc':"Plant Turnip Seeds", 'cid':'f_turnips_planted', 'val':1, 'sr':true});
			}

			// Bring Dog to Karen
			if (aff[karen_id] < 100 && is_sunny == 1 && d > 3) {
				a.push({'desc':("Dog to " + ((d == 4) ? "CROSSROADS" : "MTNS")), 'iid':dog_id, 'imp':(d == 4)});
			}

			// SPRITE
			if (d == 3) {
				a.push({'desc':"6 Lumber to Inner Sprite + ed ber", 'val':8, 'cid':sprite_id});
				a.push({'desc':"2 Clovers to Inner Sprite", 'val':2, 'cid':sprite_id, 'imp':true});
				a.push({'desc':"Goddess Pond + MTN Gifts to Inner Sprite [9]", 'val':9, 'cid':sprite_id});
				a.push({'desc':"Meet", 'cid':sprite_id, 'val':5});
				a.push({'desc':"Talk", 'cid':sprite_id, 'val':1, 'sr':true});
				a.push({'desc':"Gift", 'cid':sprite_id, 'val':2, 'sr':true});
			} else if (aff[sprite_id] < 30 || (vars['turnip_waters'] >= _TURNIP_GROW_DAYS) || (d == 30 && aff[sprite_id] == 30)) {
				// Combine Gathering turnips and last sprite visit
				if ((is_sunny == 0 && ((_TURNIP_GROW_DAYS - vars['turnip_waters']) == 1)) || (d == 30)) {
					a.push({'desc':"Gather Turnips", 'imp':true, 'cid':'v_turnip_waters', 'val':99});
				}
				a.push({'desc':"Enter cave 35 seconds after leaving house"});
				a.push({'desc':"Talk", 'cid':sprite_id, 'val':1, 'sr':(d == 3)});
				a.push({'desc':"Gift", 'cid':sprite_id, 'val':2, 'sr':true});
			}

			if (aff[karen_id] < 170 && d > 3) {
				if (d == 4) {
					a.push({'desc':"Dog Karen (Vineyard)", 'cid':karen_id, 'val':183});
					a.push({'desc':"ANKLE", 'cid':[karen_id, 'f_ankle_karen'], 'val':[_ANKLE_EVENT_AFF, 1], 'sr':true});
				} else if (d > 4) {
					a.push({'desc':"Dog Karen (MTN) 50% [10 AM]", 'cid':karen_id, 'val':183, 'sel':false});
				}
				a.push({'desc':"25 Talks after Yellow Heart", 'iid':karen_id, 'imp':true});
			}

			// First Day after Mountain
			if (d == 3) {
				a.push({'desc':"Gift for Bartender", 'imp':true, 'iid':duke_id});
				a.push({'desc':"Buy Turnip Seeds", 'iid':get_npc_id('lillia')});
			}

			// DUKE
			if (aff[duke_id] < 16) {
				if (d > 4 && aff[karen_id] > 160 && aff[karen_id] < 190 && flags['ankle_karen'] == 0) {
					a.push({'desc':"ANKLE", 'cid':[karen_id, 'f_ankle_karen'], 'val':[_ANKLE_EVENT_AFF, 1]});
				}
				if (d == 3) { a.push({'desc':"Meet", 'cid':duke_id, 'val':4}); }
				a.push({'desc':"Talk", 'cid':duke_id, 'val':3, 'sr':(d == 3)});
				a.push({'desc':"Gift", 'cid':duke_id, 'val':3, 'sr':true});
			}
			if (d == 3) {
				// Dont plant seeds the first day
				a.push({'desc':"Equip Turnip Seeds", 'sr':true});
				a.push({'desc':"Plant Turnip Seeds", 'cid':'f_turnips_planted', 'val':1, 'sel':false});
			}
		}
	} else if ([61, 62, 65, 66].includes(d)) {
		// Soonest before Photo Event that you can clear the mailbox without time loss
		if (d == 65) { a.push({'desc':"Clear Mailbox", 'imp':true}); }

		// SPRITE
		a.push({'desc':"Enter cave 35 seconds after leaving house"});
		a.push({'desc':"Talk", 'cid':sprite_id, 'val':1});
		a.push({'desc':"Mushroom", 'cid':sprite_id, 'val':((d == 61) ? 5 : 2), 'sr':true});

		// Last Minute Karen Dogging
		if (aff[karen_id] < 100 && is_sunny == 1 && ["TUES", "WED", "FRI", "SAT"].includes(dow)) {
			a.push({'desc':"Dog to MTNS"});
			a.push({'desc':"Dog Karen (MTN / BEACH) 50% [10 AM]", 'cid':karen_id, 'val':200, 'sel':false});
		}
		if (d == 66) {
			a.push({'desc':"Restore Vineyard with Turnip", 'cid':"f_vineyard_restored", 'val':1, 'iid':get_npc_id('goddess')});
		}
/*
 * No time to do sick event
 * Either initial dog affection isn't enough for ankle event OR would have to do it on a Sprite-Only day / hope for Fall rain
 * 
		if (flags['sick_karen'] == 0) {
			// Karen sick event OR last 10 aff at bar
			if (is_sunny == 0 && flags['wine_from_duke'] == 0) {
				a.push({'desc':"SICK Event (Vineyard House)", 'cid':[karen_id, 'f_sick_karen'], 'val':[_SICK_EVENT_AFF, 1], 'imp':true});
			} else if (d == 62) {
				a.push({'desc':"Dog to Bar", 'iid':dog_id, 'imp':true});
				a.push({'desc':"Talk 10 times", 'cid':karen_id, 'val':10, 'imp':true});
			}
		}
*/
		if (flags['wine_from_duke'] == 0) {
			// Late Ankle
			if (flags['ankle_karen'] == 0) {
				a.push({'desc':"ANKLE", 'cid':[karen_id, 'f_ankle_karen'], 'val':[_ANKLE_EVENT_AFF, 1]});
			}

			// DUKE
			a.push({'desc':"Talk", 'cid':duke_id, 'val':3});
			a.push({'desc':"Grapes", 'cid':duke_id, 'val':((d == 61) ? 10 : 7), 'sr':true});
			a.push({'desc':"Get Wine", 'cid':'f_wine_from_duke', 'val':1, 'sr':true, 'sel':(aff[duke_id] >= 38)});
		}
	} else if (d == 67) {
		// FALL 7
		if (is_sunny == 0 || flags['vineyard_restored'] == 0) {
			a.push({'desc':("RESET (" + ((is_sunny == 0) ? "No Photo on Rainy Day" : "Vineyard not restored") + ")"), 'red':true});
		} else {
			a.push({'desc':"Enter Wine Cellar 55 seconds after leaving house", 'imp':true});
			a.push({'desc':"DREAM", 'cid':[karen_id, 'f_dream_karen'], 'val':[_DREAM_EVENT_AFF, 1]});
			a.push({'desc':"PHOTO", 'cid':[karen_id, 'f_photo_karen'], 'val':[_PHOTO_EVENT_AFF, 1]});
		}
	}
	return a;
}
