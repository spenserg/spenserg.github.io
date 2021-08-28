actions_photos_win_y2 = function(a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id('ann');
	var cliff_id = get_npc_id('cliff');
	var cow_id = get_npc_id('cow');
	var dog_id = get_npc_id('dog');
	var doug_id = get_npc_id('doug');
	var elli_id = get_npc_id('elli');
	var horse_id = get_npc_id('horse');
	var kai_id = get_npc_id('kai');
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

	if (d == 228 && flags['photo_dograce'] == 0) {
		a.push({'desc':"Enter Dog", 'cid':['f_dog_entered',doug_id], 'val':[1, 3], 'imp':true});
	}

	if (!is_festival(d)) {
		if (vars['cows'] > 1) {
			a.push({'desc':"Sell Cow", 'cid':['v_cows', 'v_gold'], 'val':[-1, 8500], 'iid':doug_id});
		}
		// Extensions
		if (dow != "TUES" && !is_festival(d)) {
			var tmp_ext = [];
			var tmp_ext_names = [];
			for (var i = ((d > 229) ? 0 : 2); i < extensions.length; i++) {
				if (flags[extensions[i][0]] == 0) {
					tmp_ext.push(extensions[i]);
					tmp_ext_names.push(extensions[i][3]);
				}
			}
			if (tmp_ext.length > 0) {
				a.push({'desc':"Buy:", 'iid':get_npc_id('mas_carpenter')});
				for (var i = 0; i < tmp_ext.length; i++) {
					a.push({'desc':tmp_ext[i][3], 'sel':false, 'sr':true,
						'cid':['v_gold', 'v_lumber', ('f_' + tmp_ext[i][0])],
						'val':[(-1 * tmp_ext[i][1]), (-1 * tmp_ext[i][2]), (_BUILD_DAYS + 1)]
					});
					if (tmp_ext.length > 1) {
						a[a.length - 1]['t2'] = tmp_ext_names.filter(function(value, index){ return index != i; });
					}
				}
				a.push({'desc':"(Opens 35 secs after leaving house)", 'sr':(tmp_ext.length < 3)});
			}
		}

		if (aff[rick_id] < _PARTY_ATTEND_MIN && ["MON", "TUES", "THURS", "FRI"].includes(dow)) {
			// RICK
			a.push({'desc':"Talk", 'cid':rick_id, 'val':3, 'sel':false});
			a.push({'desc':"Gift", 'cid':rick_id, 'val':3, 'sr':true, 'sel':false});
		}

		if (aff[mayor_id] > 50 && aff[mayor_id] < _PARTY_ATTEND_MIN && dow != "SUN" && is_sunny == 1) {
			// MAYOR
			// "  Talk" <- -2 spaces
			// "  Gift" <- -2 spaces
			a.push({'desc':"Talk (Rick Shop 50%)", 'cid':mayor_id, 'val':3, 'sel':false, 'red':(aff[mayor_id] < 50 || aff[mayor_id] >= _PARTY_ATTEND_MIN)});
			a.push({'desc':"  Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':false});
		}
	}

	if (d == 229) {
		// Dog Race, 500 LUM (Win 19)
		a.push({'desc':"Buy 1000 Lumber at Dog Race", 'cid':['v_lumber', 'v_medals'], 'val':[999, -1000], 'iid':mayor_id, 'imp':true});
		if (flags['dog_entered'] == 1) { a.push({'desc':"Win Dog Race", 'cid':'f_photo_dograce', 'val':1, 'imp':true, 'iid':dog_id}); }
		a = betting_table(a, 1, d);
	} else if (flags['berry_pond'] == 0){
		// Get Frozen Pond Berry
		if (flags['golden_hammer'] == 0) {
			a.push({'desc':"Golden Hammer", 'cid':'f_golden_hammer', 'val':1, 't0':"Pond Rock Berry", 'sel':false, 'iid':get_npc_id('kappa')});
		}
		a.push({'desc':"Pond Rock Berry", 'cid':'f_berry_pond', 'val':1, 'sel':false, 'iid':get_npc_id('kappa'), 'sr':(flags['golden_hammer'] == 0)});
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
	if (is_sunny == 1) {
		a.push({'desc':"Scare birds", 'cid':'v_happiness', 'val':1, 'sel':false, 'sr':(d != 229 || flags['dog_entered'] == 0)});
	}

	// Cliff / Kai Wedding
	if (flags['photo_married'] == 1 && flags['wedding_cliff'] == 0) {
		a.push({'desc':(((aff[cliff_id] > aff[kai_id]) ? "Cliff" : "Kai") + " Wedding"),
			'iid':((aff[cliff_id] > aff[kai_id]) ? cliff_id : kai_id),
			'cid':['v_happiness', 'f_wedding_cliff'], 'val':[30, 1], 'sel':false
		});
	}
	return a;
}
