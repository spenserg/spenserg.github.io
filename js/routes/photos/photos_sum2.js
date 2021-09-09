actions_photos_sum_y2 = function(a, d, g, is_sunny) {
	var ann_id = get_npc_id('ann');
	var cliff_id = get_npc_id('cliff');
	var dog_id = get_npc_id('dog');
	var elli_id = get_npc_id('elli');
	var horse_id = get_npc_id('horse');
	var kai_id = get_npc_id('kai');
	var karen_id = get_npc_id('karen');
	var rick_id = get_npc_id('rick');
	var maria_id = get_npc_id('maria');
	var mayor_id = get_npc_id('mayor');
	var cow_id = get_npc_id('cow');

	var dow = get_dow(d, true);
	var horse_today = false;
	var horse_action_ids = [];

	// Maria needs more affection if < 182 in Sum Y2
	var maria_too_low = (aff[maria_id] < (_PHOTO_MIN - (((flags['ankle_maria'] == 0) ? _ANKLE_EVENT_AFF : 0) + ((flags['dream_maria'] == 0) ? _DREAM_EVENT_AFF : 0))));

	if (flags['ankle_maria'] == 0 && aff[maria_id] >= _ANKLE_EVENT_MIN) {
		if (d < 170) {
			a.push({'desc':"Wait for Ankle", 'iid':maria_id, 'red':true});
			if (dow != "MON" && is_sunny != -1 && d > 160) {
				a.push({'desc':"Ankle", 'cid':[maria_id, 'f_ankle_maria'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':false, 'sr':true});
			}
		}
		if (d == 170) { a.push({'desc':"RESET to Clear Ankle Wall", 'imp':true}); }
	}
	if (is_sunny == 0 && flags['blue_feather'] == 0 && flags['propose'] == 0) {
		// Need to buy blue feather before Sum 23
		if (d == 171) {
			a.push({'desc':"DONT SAVE TONIGHT [Blue Feather]", 'imp':true});
			flags['dontsave'] = 1;
		}
		if (d == 172) { a.push({'desc':"Check Weather, RESET IF RAINY TOMORROW", 'imp':true}); }
	}

	if (flags['propose'] == 1) {
		a.push({'desc':"Wedding Day", 'cid':[elli_id, 'f_photo_married', 'f_propose', 'v_happiness'], 'val':[9, 1, -1, 30], 'imp':true});
	} else {
		// Save dream warp for photo event
		if (!is_festival && aff[maria_id] >= _DREAM_EVENT_MIN && aff['maria_id'] < (_PHOTO_MIN - _MUS_BOX_AFF - 1) && flags['dream_maria'] == 0) {
			a.push({'desc':"DONT ENTER LIBRARY", 'red':true});
		}

		// Married Affection
		if (flags['photo_married'] == 1) {
			a.push({'desc':" Talk", 'val':1, 'cid':elli_id, 't2':"Musbox", 'sel':(flags['new_mus_box'] == 0)});
			a.push({'desc':"Musbox", 'val':[6, -1], 'cid':[elli_id, 'f_new_mus_box'], 'sel':(flags['new_mus_box'] == 1), 'sr':true, 't2':a[a.length - 1]['desc']})
			a.push({'desc':"  Gift  ", 'val':1, 'cid':elli_id, 'sr':true, 'sel':false, 't2':"Egg/Milk"});
			a.push({'desc':"Egg/Milk", 'sr':true, 't2':"  Gift  ", 'sel':(aff[elli_id] < 250 && vars['cows'] > 0),
				'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
				'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
			})
		}

		// Dog Affection
		if (flags['dog_inside'] == 1) {
			a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
		} else {
			a.push({'desc':"Whistle", 'cid':dog_id, 'val':1});
			if (is_sunny != -1) {
				a.push({'desc':"Bring Dog Inside", 'cid':['f_dog_inside', dog_id], 'val':[1, 1], 'iid':dog_id, 'sr':true, 'sel':false});
			} else {
				a.push({'desc':"Pick Up", 'cid':dog_id, 'val':1, 'sr':true, 'sel':false});
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

		if (is_sunny != -1) {
			// Not a Typhoon
			a = cows(a, is_sunny, false); // sell_cow);

			if (is_festival(d)) {
				// 9 = Veggie Fest
				// 24 = Sea Fest
				if (d == 174) { // Swim Fest
					a.push({'desc':"Go to the Beach", 'imp':true});
					a.push({'desc':"Win Swim Festival", 'iid':mayor_id, 'imp':true,
						'cid':["f_photo_swimming", "v_lumber", get_npc_id('jeff'), get_npc_id('grey'), get_npc_id('harris'), get_npc_id('kai'), get_npc_id('cliff'), 'v_happiness', 'f_dontsave'],
						'val':[1, 150, 8, 8, 8, 8, 8, 5, 1]
					});
				}
			} else { // Not Festival
				// Extensions
				if (dow != "TUES" && !is_festival(d)) {
					var tmp_ext = [];
					var tmp_ext_names = [];
					var ext_in_progress = false;
					for (var i = ((d > 229) ? 0 : 2); i < extensions.length; i++) {
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
							a.push({'desc':tmp_ext[i][3], 'sr':true, 'sel':(!ext_in_progress && is_sunny == 0 && i == (tmp_ext.length - 1)),
								'cid':['v_gold', 'v_lumber', ('f_' + tmp_ext[i][0])],
								'val':[(-1 * tmp_ext[i][1]), (-1 * tmp_ext[i][2]), (_BUILD_DAYS + 1)]
							});
							if (tmp_ext.length > 1) {
								a[a.length - 1]['t2'] = tmp_ext_names.filter(function(value, index){ return index != i; });
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

				// Maria Sum 1-10
				if (flags['photo_maria'] == 0) {
					if (is_sunny == 0 && dow == "MON" && aff[maria_id] >= _SICK_EVENT_MIN && flags['sick_maria'] == 0) {
						// Sick Event
						a.push({'desc':"Sick Event", 'cid':[maria_id, 'f_sick_maria'], 'val':[_SICK_EVENT_AFF, 1], 'sel':maria_too_low, 'red':(!maria_too_low)});
						a.push({'desc':"Talk", 'cid':mayor_id, 'val':3, 'sel':(maria_too_low && aff[mayor_id] < 160)});
						a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':(maria_too_low && aff[mayor_id] < 160)});
					} else if (dow == "MON" || d < 161) {
						// Library Closed
						a.push({'desc':("Talk (" + ((d < 161) ? "Carp House / Goddess Pond" : "MTN / CHURCH") + ")"),
							'cid':maria_id, 'val':1, 'sel':maria_too_low, 't2':"MusBox", 'red':(!maria_too_low)
						});
						a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
								'sel':false, 't2':"MusBox"
						});
						a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true, 'sel':maria_too_low});
					}
				}

				// RICK
				if (is_sunny == 1 && !["WED", "SUN"].includes(dow)) {
					a.push({
						'desc':"Talk  ", 'cid':rick_id, 'val':3, 'imp':(d == 170 && flags['propose'] == 0 && flags['blue_feather'] == 0),
						'sel':(dow != "SAT" && aff[rick_id] < _PARTY_ATTEND_MIN),
						'red':(aff[rick_id] >= _PARTY_ATTEND_MIN && (dow == "SAT" || flags['blue_feather'] == 1 || flags['propose'] > 0 || flags['photo_married'] == 1))
					});
					a.push({'desc':"Gift  ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':(aff[rick_id] < _PARTY_ATTEND_MIN), 't2':"Milk  "});
					a.push({'desc':"Milk  ", 'sel':false, 'sr':true, 't2':"Gift  ",
						'cid':((flags['recipe_rick'] == 0) ? [rick_id, 'f_recipe_rick'] : rick_id),
						'val':((flags['recipe_rick'] == 0) ? [8, 1] : 6)
					});
					a.push({'desc':"Rick Fix", 'sel':false, 'sr':true,
						'cid':['f_old_mus_box', 'f_new_mus_box', rick_id], 'val':[-1, 1, 3], 't3':"Talk  "
					});
					if (flags['blue_feather'] == 0 && dow != "SAT" && flags['propose'] == 0 && flags['photo_married'] == 0 && flags['kitchen'] == 1) {
						// Buy Blue Feather
						a.push({'desc':"Buy Blue Feather", 'cid':['v_gold', 'f_blue_feather'], 'val':[-980, 1], 'sr':true, 'sel':(d > 169)});	
					}
				}

				// MAYOR
				// "  Talk" <- -2 spaces
				// "  Gift" <- -2 spaces
				if (is_sunny == 1 && dow != "SUN") {
					if (flags['cutscene_watermelon'] == 0 && aff[ann_id] >= 153) {
						// When Ann aff >= 153, Watermelon cutscene occurs with Maria on second village screen
						// 118 < trigger < 154
						a.push({'desc':"WARNING: Cutscene plays at 2nd Village Screen", 'imp':true});
						a.push({'desc':"Watermelon Cutscene", 'val':1, 'cid':'f_cutscene_watermelon', 'sr':true, 'sel':false});
					}
					a.push({'desc':"Talk (Rick Shop 50%)", 'cid':mayor_id, 'val':3, 'sel':false, 'red':(aff[mayor_id] >= _PARTY_ATTEND_MIN)});
					a.push({'desc':"  Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':false});
				}

				// Maria Ankle
				if (d > 169 && flags['ankle_maria'] == 0 && aff[maria_id] >= 180 && dow != "MON" && flags['photo_maria'] == 0) {
					a.push({'desc':"Ankle", 'cid':[maria_id, 'f_ankle_maria'], 'val':[_ANKLE_EVENT_AFF, 1], 'imp':(d > 169)});
					a.push({'desc':"(Reset to clear Invisible Wall)", 'sr':true});
				}

				// ELLI
				if (dow != "SUN" && flags['photo_married'] == 0) {
					if (is_sunny == 0 && aff[elli_id] >= _SICK_EVENT_MIN && flags['sick_elli'] == 0) {
						a.push({'desc':"Sick Event (Bakery)", 'cid':[elli_id, 'f_sick_elli'], 'val':[_SICK_EVENT_AFF, 1]});
					} else {
						a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : ((dow == "MON") ? "Talk (MTN)" : "Talk ")),
							'cid':elli_id, 'val':1, 't2':"MusBox ", 'red':(dow != "WED" && aff[elli_id] >= 250), 'sel':false
						});
						a.push({'desc':"MusBox ", 'sel':false, 't2':a[a.length - 1]['desc'],
							'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						});
						a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true,
							't2':"Egg/Milk", 'sel':false
						});
						a.push({'desc':"Egg/Milk", 'sr':true, 't2':"Gift ", 'sel':false,
							'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
							'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
						});
					}
					if (d > 170 && flags['photo_married'] == 0 && flags['propose'] == 0 && dow != "SUN") {
						// Propose to Elli
						a.push({'desc':("Propose at " + ((dow == "WED") ? "Flower Shop" : "Bakery")),
							'cid':['f_blue_feather', 'f_propose'], 'val':[-1, (next_sunday(d + 1) - d + 1)],
							'iid':elli_id, 'sel':(d == 173 || (dow != "MON" && is_sunny == 1))
						});
					}
					
				}

				if (is_sunny == 1 && d > 169 && flags['photo_maria'] == 0 && dow != "MON") {
					// Maria Dream/Photo
					// WARP TO PHOTO
					if (flags['dream_maria'] == 0) {
						a.push({'desc':"DREAM (Library)", 'cid':[maria_id, 'f_dream_maria'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':(flags['ankle_maria'] == 0 && d > 170), 'red':(dow == "SUN" || flags['ankle_maria'] == 0)});
					} else if (flags['dream_karen'] == 0) {
						a.push({'desc':"DREAM (Vineyard)", 'cid':[karen_id, 'f_dream_karen'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
					}
					a.push({'desc':"PHOTO at 6 PM", 'cid':[maria_id, 'f_photo_maria'], 'val':[_PHOTO_EVENT_AFF, 1], 'sel':(flags['ankle_maria'] == 0 && d > 170), 'red':(dow == "SUN" || flags['ankle_maria'] == 0)});
				}
			} // End of if (!festival)

			// Plant Grass Seeds
			if (vars['grass'] > 0) {
				a.push({'desc':"Equip Grass Seeds"});
				a.push({'desc':"Plant All Grass Seeds", 'cid':['v_grass', 'v_grass_planted'], 'val':[-1 * vars['grass'], vars['grass']], 'sr':true, 'sel':false});
				if (flags['berry_farm'] == 0) {
					a.push({'desc':"Dig a Berry", 'val':1, 'cid':'f_berry_farm', 'sr':true, 'sel':false});
				}
			}

			if (d == 151) {
				// Fireworks Festival
				if (flags['dream_karen'] == 0) {
					a.push({'desc':"DREAM WARP (Vineyard)", 'cid':[karen_id, 'f_dream_karen'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
				} else if (flags['photo_married'] == 0) {
					a.push({'desc':"NIGHT WARP (Bakery)", 'cid':['v_happiness'], 'val':[10], 'sel':false, 'red':true, 'iid':elli_id});
					a.push({'desc':"(Need 250 Aff for Elli)", 'sr':true});
				}
				a.push({'desc':"Fireworks (Town Square)", 'cid':maria_id, 'val':5, 'sel':false, 'red':true});
			}

			// Feed Dog
			a.push({'desc':"Feed Dog", 'cid':dog_id, 'val':2, 'sel':false, 'red':(aff[dog_id] > 250)});
		} // End of if (!typhoon)
	}

	// Cliff / Kai Wedding
	if (!is_festival(d) && flags['photo_married'] == 1 && flags['wedding_cliff'] == 0) {
		a.push({'desc':(((aff[cliff_id] > aff[kai_id]) ? "Cliff" : "Kai") + " Wedding"),
			'iid':((aff[cliff_id] > aff[kai_id]) ? cliff_id : kai_id),
			'cid':['v_happiness', 'f_wedding_cliff'], 'val':[30, 1], 'sel':false
		});
	}

	if (horse_today) {
		for (var z = 0; z < horse_action_ids.length; z++) {
			if (a[horse_action_ids[z]]['desc'] != "Brush") {
				a[horse_action_ids[z]]['sel'] = true;
			}
		}
	}
	return a;
}
