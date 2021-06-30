actions_photos_fall_y2 = function(a = [], d = 3, g = 300, is_sunny = 1) {
	var cliff_id = get_npc_id('cliff');
	var dog_id = get_npc_id('dog');
	var doug_id = get_npc_id('doug');
	var elli_id = get_npc_id('elli');
	var horse_id = get_npc_id('horse');
	var karen_id = get_npc_id('karen');
	var rick_id = get_npc_id('rick');
	var mayor_id = get_npc_id('mayor');
	var cow_id = get_npc_id('cow');

	var dow = get_dow(d, true);
	var horse_action_ids = [];
	var horse_today = false;

	if ([205, 206, 207].includes(d)) {
		a.push({'desc':"DONT ENTER BARN", 'red':true, 'iid':cow_id});
	} else if (d == 208) {
		a.push({'desc':"Enter Barn, New Cow Born", 'iid':cow_id, 'imp':true});
	}

	// Married Affection
	if (flags['photo_married'] == 1) {
		a.push({'desc':" Talk", 'val':1, 'cid':elli_id, 't2':"Musbox", 'sel':(flags['new_mus_box'] == 0)});
		a.push({'desc':"Musbox", 'val':[6, -1], 'cid':[elli_id, 'f_new_mus_box'], 'sel':(flags['new_mus_box'] == 1), 'sr':true, 't2':a[a.length - 1]['desc']})
		a.push({'desc':"  Gift  ", 'val':1, 'cid':elli_id, 'sr':true, 'sel':false, 't2':"Milk"});
		a.push({'desc':"Milk", 'val':4, 'cid':elli_id, 'sr':true, 't2':"  Gift  ", 'sel':(aff[elli_id] < 250 && vars['cows'] > 0)})
	}

	// Dog Affection
	if (flags['dog_inside'] == 1) {
		a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
	} else {
		a.push({'desc':"Bring Dog Inside", 'cid':['f_dog_inside', dog_id], 'val':[1, 1], 'sel':(is_sunny != -1)});
		a.push({'desc':"Whistle", 'val':1, 'sr':true});
	}

	// Horse Affection
	if (flags['photo_horserace'] == 0) {
		if (is_sunny != -1 && flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"])) {
			a.push({'desc':"Equip Brush", 'iid':horse_id});
		}
		if (flags['horse'] != 0) {
			a.push({'desc':"Whistle Horse", 'val':1, 'cid':horse_id, 'sr':(flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"]))});
			a.push({'desc':((flags['horse'] == 1) ? "Ride": "Talk"), 'val':1, 'cid':a[a.length - 1]['cid'], 'sr':true, 'sel':false});
			horse_action_ids.push(a.length - 1);
		}
		if (flags['horse_brush'] == 1 && is_sunny != -1) {
			a.push({'desc':"Brush", 'val':2, 'cid':horse_id, 'sr':true, 'sel':false});
			if (aff[horse_id] < (255 - 4 - flags["sustaining_carrot"])) {
				horse_action_ids.push(a.length - 1);
			}
		}
	}
	a = cows(a, is_sunny);

	if (is_festival(d)) {
		// 4  (184) Cow Fest
		// 12 (192) Harvest Fest
		// 20 (200) Egg Fest
		// 28 (208) Horse Race

		// Cow Festival
		if (d == 184) {
			a.push({'desc':"Go to Ranch", 'imp':true, 'iid':mayor_id});
			a.push({'desc':"[RELEASE STICK OR YOU CANT MOVE AT FESTIVAL]", 'sr':true});
			a.push({'desc':"Talk", 'cid':rick_id, 'val':2, 'sel':(aff[rick_id] < _PARTY_ATTEND_MIN)});
			a.push({'desc':"Talk", 'cid':mayor_id, 'val':2, 'sel':(aff[mayor_id] < _PARTY_ATTEND_MIN)});
			a.push({'desc':"Win Cow Festival", 'iid':get_npc_id('doug'), 'imp':true,
					'cid':['v_happiness', get_npc_id('ann'), get_npc_id('grey'),
						get_npc_id('doug'), get_npc_id('kent'), karen_id, get_npc_id('elli'),
						get_npc_id('popuri'), get_npc_id('maria'), get_npc_id('kai'), get_npc_id('jeff'),
						cliff_id, get_npc_id('harris'), get_npc_id('potion master'), rick_id,
						mayor_id, get_npc_id('judge'), 'f_dontsave'],
					'val':[5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
			});
			horse_today = true;
		}

		// Egg Festival
		if (d == 200 && (flags['berry_ocean'] + flags['berry_farm'] + flags['berry_basil'] + flags['berry_eggfest']) < 2) {
			a.push({'desc':"Go to Village Screen", 'imp':true});
			a.push({'desc':"Egg Festival Berry", 'cid':["f_berry_eggfest", mayor_id, 'v_happiness'], 'val':[1, 2, 5], 'imp':true});
			a.push({'desc':"Talk", 'cid':rick_id, 'val':2, 'sel':(aff[rick_id] < _PARTY_ATTEND_MIN)});
			a.push({'desc':"Talk", 'cid':cliff_id, 'val':2, 'sel':(aff[cliff_id] < _PARTY_ATTEND_MIN)});
			horse_today = true;
		}

		// Horse Race
		if (d == 208) {
			a = betting_table(a, 1, d);
			if (flags['horse_entered'] == 1) {
				// 2 boosts per 10 affection
				a.push({'desc':"Win Horse Race", 'cid':'f_photo_horserace','val':1, 'iid':get_npc_id('doug'), 'imp':true});
				a.push({'desc':(2 * Math.floor(aff[horse_id] / 10) + " Boosts")});
			}
			horse_today = true;
		}
	} else {
		// Cow Photo
		if (flags['cow_entered'] == 1 && vars['grass_planted'] > 0 && is_sunny == 1 && flags['cows_outside'] == 1 && d > 184 && flags['photo_cowfest'] == 0) {
			a.push({'desc':"Cow Photo", 'imp':true, 'cid':['f_photo_cowfest'], 'val':[1], 'iid':cow_id});
			a.push({'desc':"(Enter / Exit House Until Photo)", 'sr':true});
			horse_today = true;
		}

		// Enter Horse
		if (d == 207) {
			if (flags['photo_horserace'] == 0) {
				a.push({'desc':"Enter Horse", 'cid':['f_horse_entered', get_npc_id('doug')], 'val':[1, 3], 'imp':true});
				horse_today = true
			}
		}

		// Enter Cow
		if (d == 183) {
			if (flags['miracle_potion'] == 1) {
				a.push({'desc':"Use Potion", 'iid':cow_id, 'imp':true, 'cid':"v_new_cow_days", 'val':"205"});
			}
			a.push({'desc':"Enter Cow", 'cid':'f_cow_entered', 'val':1, 'iid':get_npc_id('doug'), 'imp':true});
			horse_today = true;
			if (flags['stairway'] == 0) {
				// Stairway
				a.push({'desc':"Buy a Stairway (2000 G)", 'iid':get_npc_id('mas_carpenter'),
					'cid':['v_gold', 'v_lumber', 'f_stairway'],
					'val':[-2000, -250, _BUILD_DAYS + 1]
				});
				a.push({'desc':"Chop 1 Stump", 'sr':true});
			}
		}

		if (d == 205 || (vars['new_cow_days'].length > 0 && parseInt(vars['new_cow_days'].substr(0,3)) == d)) {
			horse_today = true;
			//a.push({'desc':"New Cow Born", 'iid':cow_id});
			a.push({'desc':"Equip Axe, Chop 3 stumps"});
			a.push({'desc':"Buy Miracle Potion", 'cid':['f_miracle_potion', 'v_gold'], 'val':[1, (-1 * _PRICE_MIRACLE_POTION)], 'iid':doug_id});
			a.push({'desc':"Use Potion", 'iid':cow_id, 'imp':true, 'cid':"v_new_cow_days", 'val':"227"});
		}

	}

	// Feed Dog
	a.push({'desc':"Feed Dog", 'cid':dog_id, 'val':2, 'sel':false, 'red':(aff[dog_id] > 250)});

	// Cliff Wedding
	if (flags['photo_married'] == 1 && flags['wedding_cliff'] == 0) {
		a.push({'desc':"Cliff Wedding", 'cid':['v_happiness', 'f_wedding_cliff'], 'val':[30, 1], 'sel':false, 'iid':cliff_id});
	}

	if (horse_today) {
		for (var z = 0; z < horse_action_ids.length; z++) {
			a[horse_action_ids[z]]['sel'] = true;
		}
	}
	return a;
}
