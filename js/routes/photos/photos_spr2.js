actions_photos_spr_y2 = function(a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id('ann');
	var basil_id = get_npc_id('basil');
	var cliff_id = get_npc_id('cliff');
	var cow_id = get_npc_id('cow');
	var dog_id = get_npc_id('dog');
	var elli_id = get_npc_id('elli');
	var horse_id = get_npc_id('horse');
	var kai_id = get_npc_id('kai');
	var karen_id = get_npc_id('karen');
	var rick_id = get_npc_id('rick');
	var maria_id = get_npc_id('maria');
	var mas_carp_id = get_npc_id('mas_carpenter');
	var may_id = get_npc_id('may');
	var mayor_id = get_npc_id('mayor');

	var dow = get_dow(d, true);
	var horse_today = false;
	var horse_action_ids = [];

	// Save dream warp for photo event
	if (!is_festival(d) && aff[maria_id] >= _DREAM_EVENT_MIN && flags['dream_maria'] == 0) {
		a.push({'desc':"DONT ENTER LIBRARY", 'red':true});
	}

	// Dog Affection
	if (flags['dog_inside'] == 1) {
		a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
	} else {
		a.push({'desc':"Whistle", 'cid':dog_id, 'val':1});
		a.push({'desc':"Pick Up", 'cid':dog_id, 'val':1, 'sr':true});
		a.push({'desc':"Bring Dog Inside", 'cid':'f_dog_inside', 'val':1, 'iid':dog_id, 'sr':true});
	}

	// Make room for grass seeds
	if (flags['fishing_rod_stored'] == 0) {
		a.push({'desc':(((flags['photo_horserace'] == 1) ? "Brush and " : "") + "Fishing rod to toolbox"),
			'cid':'f_fishing_rod_stored', 'val':1, 'sr':false, 'sel':false
		});
	}

	// Enter Horse Race
	if (d == 136) {
		// Horse Race Entry
		if (flags['photo_horserace'] == 0) {
			// Y2 Horse Race - Use Fall
			a.push({'desc':"Enter Horse", 'cid':['f_horse_entered', get_npc_id('doug')], 'val':[1, 3], 'sel':false});
		} else {
			// Not enough money to make it worth it.
			a.push({'desc':"Ignore Doug on Farm", 'red':true, 'iid':get_npc_id('doug')});
		}
	}

	// Horse Affection
	if (flags['photo_horserace'] == 0 && d != 137 && flags['horse_entered'] == 0) {
		a.push({'desc':"Whistle Horse", 'val':1, 'cid':horse_id});
		a.push({'desc':((flags['horse'] == 1) ? "Ride": "Talk"), 'val':1, 'cid':a[a.length - 1]['cid'], 'sr':true, 'sel':false});
		horse_action_ids.push(a.length - 1);
		if (aff[horse_id] < (255 - 4 - flags["sustaining_carrot"])) {
			a.push({'desc':"Brush", 'val':2, 'cid':horse_id, 'sr':true, 'sel':false});
			horse_action_ids.push(a.length - 1);
		}
	}

	if (is_festival(d)) {
		// 1 (121) - New Years
		// 8 (128) - Planting
		// 17 (137) - Horse
		// 23 (143) - Flower

		if (d == 121) {
			// New Years Festival
			a = cows(a);
			a.push({'desc':"Drink", 'iid':maria_id, 'red':true});
			a.push({'desc':'1', 'cid':maria_id, 'val':2, 'sel':false, 'sr':true, 't2':'1'});
			a.push({'desc':'2', 'cid':maria_id, 'val':4, 'sel':false, 'sr':true, 't2':'2'});
		} else if (d == 128 && flags["harvest_king"] == 1) {
			// Planting Festival (Spring 8)
			a = cows(a);
			horse_today = true;
			a.push({'desc':"Go to Town Square", 'iid':mayor_id, 'cid':['v_happiness', 'f_dontsave'], 'val':[5, 1], 'imp':true});
			a.push({'desc':"Ride with Maria", 'val':[1, 8, -1], 'cid':['f_photo_harvest', maria_id, 'f_harvest_king'], 't2':"Ride with Elli", 'imp':true});
			a.push({'desc':"Ride with Elli", 'val':[1, 8, -1], 'cid':['f_photo_harvest', elli_id, 'f_harvest_king'], 'sel':false, 't2':"Ride with Maria", 'red':true});
		} else if (d == 137) {
			// Horse Race (Spring 17)
			if (flags['horse_entered'] == 1) {
				a = cows(a);
				a.push({'desc':"Win Horse Race", 'cid':'f_photo_horserace','val':1, 'iid':get_npc_id('doug'), 'imp':true});
			} else {
				a.push({'desc':"DONT ATTEND HORSE RACE", 'red':true, 'iid':mayor_id});
				a = cows(a);
			}
			a = betting_table(a, 1, d);
		} else if (d == 143 && vars['gold'] >= 1000 && flags['berry_flowerfest'] == 0) {
			// Flower Festival (Spring 23)
			horse_today = true;
			a = cows(a);
			a.push({'desc':"Go to Town Square", 'iid':mayor_id, 'cid':'v_happiness', 'val':5});
			a.push({'desc':"Buy a Power Nut", 'cid':['f_berry_flowerfest','v_gold'], 'imp':true,
					'val':[1, -1000], 'iid':get_npc_id('salesman'), 'sel':(vars['gold'] >= 1000)
			});
			a.push({'desc':"Talk", 'cid':rick_id,  'val':2, 'sel':(aff[rick_id] < _PARTY_ATTEND_MIN)});
			if (aff[cliff_id] >= 50) {
				a.push({'desc':"Talk", 'cid':cliff_id,  'val':2, 'sel':(aff[cliff_id] < (160 - 8))});
			}
			if (aff[kai_id] >= 50) {
				a.push({'desc':"Talk", 'cid':kai_id,  'val':2, 'sel':(aff[kai_id] < (160 - 8))});
			}
			a.push({'desc':"Talk", 'cid':mayor_id, 'val':2, 'sel':(aff[mayor_id] < _PARTY_ATTEND_MIN)});
			a.push({'desc':"Talk", 'cid':maria_id, 'val':2, 'imp':true});
			a.push({'desc':"Dance",'cid':[maria_id, 'f_dontsave'], 'val':[10, 1], 't2':"Dance ", 'sr':true});
			a.push({'desc':"Talk", 'cid':elli_id, 'val':2});
			a.push({'desc':"Dance ",'cid':[elli_id, 'f_dontsave'], 'val':[10, 1], 't2':"Dance", 'sel':false, 'sr':true});
		}
	} else { // Not a festival
		// Kappa Berry
		if (!flags['berry_kappa']) {
			a.push({'desc':"Large fish to Kappa", 'cid':'f_berry_kappa', 'val':1,
				'iid':get_npc_id('kappa'), 'sel':false, 'red':true});
		}

		if (vars['grass_planted'] < 3 && vars['grass'] == 0 && is_sunny == 1) {
			a.push({'desc':"Equip hoe"});
			a.push({'desc':"Till four 3x3 squares by barn"});
			if (flags['berry_farm'] == 0) {
				a.push({'desc':"Dig a Berry", 'val':1, 'cid':'f_berry_farm', 'sr':true, 'sel':false});
			}

			if (aff[rick_id] < _PARTY_ATTEND_MIN || aff[mayor_id] < _PARTY_ATTEND_MIN) {
				a.push({'desc':"Dont go to Carp House Screen", 'imp':true});
				a.push({'desc':"ed, ber, flower"}); // Quick gifts for villagers
			}

			// Grass (and Milker)
			if (vars['grass_planted'] < 4) {
				var tmp_gold = (vars['gold'] + 1800 - (1800 * flags['milker']));
				var tmp_grass = ((tmp_gold >= 2000) ? 4 : Math.floor(tmp_gold / 500));
				tmp_grass -= vars['grass_planted'];
				tmp_grass = ((tmp_grass < 0) ? 0 : tmp_grass);
				if (tmp_grass > 0) {
					a.push({'desc':'Buy ' + tmp_grass + ' grass seeds', 'cid':['v_gold', 'v_grass'], 'val':[-500 * tmp_grass, tmp_grass], 'iid':get_npc_id('lillia')});
				}
			}

			// ELLI
			if (dow != "SUN") {
				if (is_sunny == 0 && aff[elli_id] >= _SICK_EVENT_MIN && flags['sick_elli'] == 0) {
					a.push({'desc':"Sick Event (Bakery)", 'cid':[elli_id, 'f_sick_elli'], 'val':[_SICK_EVENT_AFF, 1]});
				} else {
					a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : ((dow == "MON") ? "Talk (MTN)" : "Talk ")),
						'cid':elli_id, 'val':1, 'sel':(vars['grass_planted'] < 4 && aff[elli_id] < 250),
						't2':"MusBox ", 'red':(dow != "WED" && aff[elli_id] >= 250)
					});
					a.push({'desc':"MusBox ", 'sel':false, 't2':a[a.length - 1]['desc'],
						'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
					});
					a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"M/L Fish", 'sel':false});
					a.push({'desc':"M/L Fish", 'sr':true, 't2':"Gift ", 'cid':[elli_id, 'v_happiness'], 'val':[3, 1], 'sel':false});
					if (aff[cliff_id] > 50) {
						a[a.length - 1]['t2'] = ["Gift ", "Egg "];
						a[a.length - 2]['t2'] = ["M/L Fish", "Egg "];
						a.push({'desc':"Egg ", 'sr':true, 't2':"Gift ", 'sel':false, 't2':["M/L Fish", "Gift "],
							'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
							'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
						});
					}
				}
			}

			// RICK
			if (is_sunny == 1 && !["WED", "SUN"].includes(dow)) {
				a.push({
					'desc':"Talk  ", 'cid':rick_id, 'val':3,
					'sel':(dow != "SAT" && aff[rick_id] < _PARTY_ATTEND_MIN),
					'red':(aff[rick_id] >= _PARTY_ATTEND_MIN && flags['milker'] == 1)
				});
				a.push({'desc':"Gift  ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':(aff[rick_id] < _PARTY_ATTEND_MIN)});
				if (aff[rick_id] >= (_RICK_FIX_MIN - 6) && (aff[maria_id] < _PHOTO_MIN || flags['old_mus_box'] == 1)) {
					a.push({'desc':"Rick Fix", 'sel':false, 'sr':true,
						'cid':['f_old_mus_box', 'f_new_mus_box', rick_id], 'val':[-1, 1, 3], 't3':"Talk  "
					});
				}
				if (flags['milker'] == 0 && vars['gold'] >= 1800 && dow != "SAT") {
					// Buy Milker
					a.push({'desc':"Buy Milker", 'cid':['f_milker', 'v_gold'], 'val':[1, -1800], 'sr':true});	
				}
			}
/*
			// MAYOR
			// "  Talk" <- -2 spaces
			// "  Gift" <- -2 spaces
			if (is_sunny == 1 && dow != "SUN") {
				a.push({'desc':"Talk (Rick Shop 50%)", 'cid':mayor_id, 'val':3, 'sel':false, 'red':(aff[mayor_id] >= _PARTY_ATTEND_MIN)});
				a.push({'desc':"  Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':false});
				if (dow == "MON" && flags['cutscene_watermelon'] == 0 && aff[ann_id] >= 153) {
					// When Ann aff >= 153, Watermelon cutscene occurs with Maria on second village screen
					// 118 < trigger < 154
					a.push({'desc':"WARNING: Cutscene plays at 2nd Village Screen", 'imp':true});
					a.push({'desc':"Watermelon Cutscene", 'val':1, 'cid':'f_cutscene_watermelon', 'sr':true, 'sel':false});
				}
			}
*/
			if (dow != "MON") {
				// Maria in library
				// Dont go to screen if watermelon cutscene hasnt triggered
				if (flags['cutscene_watermelon'] == 0 && aff[ann_id] >= 153) {
					// When Ann aff >= 153, Watermelon cutscene occurs with Maria on second village screen
					// 118 < trigger < 154
					a.push({'desc':"WARNING: Cutscene plays at 2nd Village Screen", 'imp':true});
					a.push({'desc':"Watermelon Cutscene", 'val':1, 'cid':'f_cutscene_watermelon', 'sr':true, 'sel':false});
				}
				a.push({'desc':"Talk (Library)", 'cid':maria_id, 'val':1, 'red':(flags['cutscene_watermelon'] == 0 && is_sunny == 1),
					'sel':false, 't2':"MusBox"
				});
				a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
					't2':a[a.length - 1]['desc'], 'sel':false
				});
				a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true, 'sel':false});
			} else if (is_sunny == 0 && aff[maria_id] >= _SICK_EVENT_MIN && !flags["sick_maria"]) {
				// Sick Event
				a.push({'desc':"Sick Event", 'cid':[maria_id, "f_sick_maria"], 'val':[_SICK_EVENT_AFF, 1]});
			}

			// Plant Grass
			if (tmp_grass > 0) {
				a.push({'desc':"Equip Grass Seeds", 'imp':true});
				a.push({'desc':("Plant " + tmp_grass + " Grass"), 'cid':['v_grass', 'v_grass_planted'], 'val':[-1 * tmp_grass, tmp_grass], 'sr':true});
			}
		} else if (dow != "TUES" && !is_festival(d)) {
			// Extensions
			// var leftover_g = vars['gold'] - ((1800 - 1800 * flags['milker']) + (2000 - 500 * (4 - vars['grass_planted'])));
			var tmp_ext = [];
			var tmp_ext_names = [];
			var ext_in_progress = false;
			for (var i = (extensions.length - 1); i > 1; i--) {
				if (flags[extensions[i][0]] == 0) {
					tmp_ext.push(extensions[i]);
					tmp_ext_names.push(extensions[i][3]);
				} else if (flags[extensions[i][0]] != 1) {
					ext_in_progress = true;
				}
			}
			if (tmp_ext.length > 0) {
				if (is_sunny == 1 && flags['kitchen'] != 0 && flags['babybed'] != 0) {
					a.push({'desc':"Wait for Rainy Day", 'red':true, 'iid':get_npc_id('mas_carpenter')});
				}
				a.push({'desc':"Buy:", 'iid':get_npc_id('mas_carpenter'), 'red':(ext_in_progress || (is_sunny == 1 && flags['kitchen'] != 0 && flags['babybed'] != 0))});
				for (var i = 0; i < tmp_ext.length; i++) {
					a.push({'desc':tmp_ext[i][3], 'sr':true, 'sel':false,
						'cid':['v_gold', 'v_lumber', ('f_' + tmp_ext[i][0])],
						'val':[(-1 * tmp_ext[i][1]), (-1 * tmp_ext[i][2]), (_BUILD_DAYS + 1)]
					});
					if (tmp_ext.length > 1) {
						a[a.length - 1]['t2'] = tmp_ext_names.filter(function(value, index){ return index != i; });
					}
					if (!ext_in_progress && is_sunny == 0 && i == 0) {
						horse_today = true;
						a[a.length - 1]['sel'] = true;
					}
				}
				a.push({'desc':"(Opens 35 secs after leaving house)", 'sr':(tmp_ext.length < 3)});

				if (is_sunny == 0 && aff[cliff_id] > 50) {
					// Cliff in Carp House when its raining
					a.push({'desc':"Talk (Carp House 50%)", 'cid':cliff_id, 'val':2, 'sel':false});
					a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
					a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
				}
			}
		} // End of Buy Extensions
		a = cows(a, is_sunny);
	}

	// Plant Grass Seeds
	if (vars['grass'] > 0 && is_sunny == 1) {
		a.push({'desc':"Equip Grass Seeds", 'imp':true});
		a.push({'desc':"Plant " + vars['grass'] + " Grass", 'cid':['v_grass', 'v_grass_planted'], 'val':[-1 * vars['grass'], vars['grass']]});
		if (flags['berry_farm'] == 0) {
			a.push({'desc':"Dig a Berry", 'val':1, 'cid':'f_berry_farm', 'sr':true, 'sel':false});
		}
	}

	// Horse Affection
	if (horse_today) {
		for (var z = 0; z < horse_action_ids.length; z++) {
			a[horse_action_ids[z]]['sel'] = true;
		}
	}

	// Feed Dog
	a.push({'desc':"Feed Dog", 'cid':dog_id, 'val':2, 'sel':false});

	return a;
}
