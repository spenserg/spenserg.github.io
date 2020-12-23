actions_photos_win_y2 = function(a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id('ann');
	var cow_id = get_npc_id('cow');
	var dog_id = get_npc_id('dog');
	var doug_id = get_npc_id('doug');
	var elli_id = get_npc_id('elli');
	var horse_id = get_npc_id('horse');
	var karen_id = get_npc_id('karen');
	var mayor_id = get_npc_id('mayor');
	var rick_id = get_npc_id('rick');

	var dow = get_dow(d, true);
	var horse_action_ids = [];

	// Married Affection
	if (flags['photo_married'] == 1) {
		a.push({'desc':" Talk", 'val':1, 'cid':elli_id, 't2':"Musbox", 'sel':(flags['new_mus_box'] == 0)});
		a.push({'desc':"Musbox", 'val':[6, -1], 'cid':[elli_id, 'f_new_mus_box'], 'sel':(flags['new_mus_box'] == 1), 'sr':true, 't2':a[a.length - 1]['desc']})
		a.push({'desc':"  Gift  ", 'val':1, 'cid':elli_id, 'sr':true, 'sel':false, 't2':"Milk"});
		a.push({'desc':"Milk", 'val':4, 'cid':elli_id, 'sr':true, 't2':"  Gift  ", 'sel':(aff[elli_id] < 250 && vars['cows'] > 0)})
	}

/*
	if (is_sunny == 1) {
		a.push({'desc':"Scare birds", 'cid':'v_happiness', 'val':1, 'sel':false});
	}
*/
	if (d == 228 && flags['photo_dograce'] == 0) {
		a.push({'desc':"Enter Dog", 'cid':['f_dog_entered',doug_id], 'val':[1, 3], 'imp':true});
	}

	// Cows
	//a = cows(a, is_sunny);
	if ([227, 240].includes(d) || (vars['new_cow_days'].length > 0 && parseInt(vars['new_cow_days'].substr(0,3)) == d)) {
		if (d == 227) { a.push({'desc':"New Cow Born", 'iid':cow_id}); }
		a.push({'desc':"Equip Axe, Chop 3 stumps"});
		if (d == 240) {
			a.push({'desc':"Hatch Chick (Leave Inside)", 'iid':(get_npc_id('chicken')), 'cid':["v_new_chicken_days", "f_new_chick"],
				'val':[d + _CHICK_GROW_SLEEPS, -1], 'imp':true
			});
		}
		a.push({'desc':"Sell Cow", 'cid':['v_cows', 'v_gold'], 'val':[-1, ((d == 227) ? 8500 : 6500)], 'iid':doug_id, 'imp':true});
	}

	if (!is_festival(d)) {
		// Extensions
		if (dow != "TUES" && !is_festival(d)) {
			var add_ext_id = -1;
			for (var i = 0; i < extensions.length; i++) {
				if (flags[extensions[i][0]] == 0 && vars['gold'] >= extensions[i][1] && (i == (extensions.length - 1) || flags[extensions[i + 1][0]] == 1)) {
					add_ext_id = i;
				}
			}
			if (add_ext_id != -1 && (add_ext_id > 1 || d >= 229)) {
				a.push({'desc':("Buy " + extensions[add_ext_id][3] + " (" + extensions[add_ext_id][1] + " G)"),
						'cid':['v_gold', 'v_lumber', ('f_' + extensions[add_ext_id][0])],
						'val':[(-1 * extensions[add_ext_id][1]), (-1 * extensions[add_ext_id][2]), _BUILD_DAYS + 1],
						'sel':(dow != "TUES"), 'iid':get_npc_id('mas_carpenter'), 'imp':true
				});
				a.push({'desc':"(Opens 35 secs after leaving house)", 'sr':true});
			}
		}

		if (aff[rick_id] < _PARTY_ATTEND_MIN && ["MON", "TUES", "THURS", "FRI"].includes(dow)) {
			// RICK
			a.push({'desc':"Talk", 'cid':rick_id, 'val':3});
			a.push({'desc':"Gift", 'cid':rick_id, 'val':3, 'sr':true, 'sel':false});
		}

		if (aff[mayor_id] < _PARTY_ATTEND_MIN && dow != "SUN" && is_sunny == 1) {
			// MAYOR
			// "  Talk" <- -2 spaces
			// "  Gift" <- -2 spaces
			if (flags['cutscene_watermelon'] == 0 && aff[ann_id] >= 153) {
				// When Ann aff >= 153, Watermelon cutscene occurs with Maria on second village screen
				// 118 < trigger < 154
				a.push({'desc':"WARNING: Cutscene plays at 2nd Village Screen", 'imp':true});
				a.push({'desc':"Watermelon Cutscene", 'val':1, 'cid':'f_cutscene_watermelon', 'sr':true, 'sel':false});
			}
			a.push({'desc':"Talk (Rick Shop 50%)", 'cid':mayor_id, 'val':3, 'sel':false, 'red':(aff[mayor_id] >= _PARTY_ATTEND_MIN)});
			a.push({'desc':"  Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':false});
		}
	}

	if (d == 229) {
		// Dog Race, 500 LUM (Win 19)
		a.push({'desc':"Buy 1000 Lumber at Dog Race", 'cid':['v_lumber', 'v_medals'], 'val':[999, -1000], 'iid':mayor_id, 'imp':true});
		if (flags['dog_entered'] == 1) { a.push({'desc':"Win Dog Race", 'cid':'f_photo_dograce', 'val':1, 'imp':true, 'iid':dog_id}); }
		a = betting_table(a);
	} else if (flags['berry_pond'] == 0){
		// Get Frozen Pond Berry
		if (flags['golden_hammer'] == 0) {
			a.push({'desc':"Equip hammer, Clear rocks on farm"});
			a.push({'desc':"Golden Hammer", 'cid':'f_golden_hammer', 'val':1, 'sr':true, 't0':"Pond Rock Berry", 'sel':false});
		}
		a.push({'desc':"Pond Rock Berry", 'cid':'f_berry_pond', 'val':1, 'sel':(flags['golden_hammer'] == 1), 'iid':get_npc_id('kappa')});
		if (flags['golden_hammer'] == 0) { a[a.length - 1]['t3'] = "Golden Hammer"; }
	}

	// Dog Affection
	if (d != 229 || flags['dog_entered'] == 0) {
		if (flags['dog_inside'] == 1) {
			if (flags['photo_dograce'] == 1) {
				a.push({'desc':"Whistle", 'cid':dog_id, 'val':1, 'sel':(aff[dog_id] < 210)});
				a.push({'desc':"Pick Up", 'cid':dog_id, 'val':1, 'sr':true});
			} else {
				a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
			}
		} else {
			a.push({'desc':"Bring Dog Inside", 'cid':['f_dog_inside', dog_id], 'val':[1, 1]});
			a.push({'desc':"Whistle", 'val':1, 'sr':true});
		}
	}
	return a;
}
