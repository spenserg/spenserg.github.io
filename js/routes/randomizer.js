get_actions_randomizer = function (d = 3, g = 300, is_sunny = 1) {
	var a = [];
	var dow = get_dow(d, true);
	var horse_id = get_npc_id('horse');
	var pm_id = get_npc_id('potion master');

	if (d == 3) {
		// Temp flags
		flags['ocarina'] = 0;
		flags['play_in_spirit_fest'] = 0;
		flags['recipe_pm'] = 0;
	}
	if (d == 71) { flags['dontsave'] = true; return []; } // Fall 11 Y1

	if ([70, 71, 72].includes(d)) {
		
	}

	if (is_festival(d) || d == 117) {
		// New Year Day
		if (d == 121) {
			a.push({'desc':"Out Drink Everyone", 'imp':true, 'iid':get_npc_id('karen')});
		}

		// Veggie Fest Y2
		if (d == 159) {
			a.push({'desc':"Enter Corn in Festival", 'imp':true, 'iid':get_npc_id('mayor')});
		}

		// Egg Festival
		if (d == 80 || d == 200) {
			a.push({'desc':"Go to Village Screen", 'imp':true});
		}

		// Spirit Fest
		if (d == 117) {
			a.push({'desc':"Play in Spirit Fest", 'imp':true, 'iid':pm_id});
		}
	} else {
		if (flags['horse'] == 0 && is_sunny == 1 && dow != "THURS") {
			// Get Horse
			a.push({'desc':'Get Horse', 'cid':'f_horse', 'val':21, 'iid':horse_id, 'sel':false});
			a.push({'desc':"Fast Text Glitch", 'sr':true});
		}

		// Potion Shop Master
		if (flags['play_in_spirit_fest'] == 0) {
			if (aff[pm_id] == 0) {
				a.push({'desc':"Meet", 'cid':pm_id, 'val':4, 'sel':false});
			}
			a.push({'desc':"Talk", 'cid':pm_id, 'val':3, 'red':(aff[pm_id] >= 50), 'sr':(aff[pm_id] == 0)});
			a.push({'desc':"Gift ", 'cid':pm_id, 'val':3, 'sel':false, 'sr':true, 't2':"Ed Herb"});
			a.push({'desc':"Ed Herb", 'sel':false, 't2':"Gift ", 'sr':true,
					'cid':((flags['recipe_pm'] == 0) ? [pm_id, 'f_recipe_pm'] : pm_id),
					'val':((flags['recipe_pm'] == 0) ? [7, 1] : 5)
			});
		}
	}
	return a;
}
