actions_photos_sum_y2 = function(a, d, g, is_sunny) {
	var ann_id = get_npc_id('ann');
	var dog_id = get_npc_id('dog');
	var elli_id = get_npc_id('elli');
	var horse_id = get_npc_id('horse');
	var karen_id = get_npc_id('karen');
	var rick_id = get_npc_id('rick');
	var maria_id = get_npc_id('maria');
	var mayor_id = get_npc_id('mayor');
	var cow_id = get_npc_id('cow');

	var dow = get_dow(d, true);
	var horse_today = false;
	var horse_action_ids = [];
	
	// Sell Cow + Blue Feather + Ankle
	var sell_cow = (!is_festival(d) && (d > 160 && flags['ankle_maria'] == 0 && aff[maria_id] >= 180 && dow != "MON") &&
				(!["WED", "SAT", "SUN", "THURS"].includes(dow) && is_sunny == 1 && flags['blue_feather'] == 0 && dow != "SAT" &&
				 	flags['propose'] == 0 && flags['photo_married'] == 0 && flags['kitchen'] == 1));
	// Sell Cow + Propose + Maria Dream + Maria Photo
	sell_cow = (sell_cow || (d > 168 && !is_festival(d) && !["SUN", "MON", "THURS"].includes(dow) && is_sunny == 1 && flags['ankle_maria'] == 1));

	if (flags['propose'] == 1) {
		a.push({'desc':"Wedding Day", 'iid':elli_id, 'cid':['f_photo_married', 'f_propose'], 'val':[1, -1], 'imp':true});
	} else {
		// Save dream warp for photo event
		if (!is_festival && aff[maria_id] >= _DREAM_EVENT_MIN && aff['maria_id'] < (_PHOTO_MIN - _MUS_BOX_AFF - 1) && flags['dream_maria'] == 0) {
			a.push({'desc':"DONT ENTER LIBRARY", 'red':true});
		}

		// Married Affection
		if (flags['photo_married'] == 1) {
			a.push({'desc':" Talk", 'val':1, 'cid':elli_id, 't2':"Musbox", 'sel':(flags['new_mus_box'] == 0)});
			a.push({'desc':"Musbox", 'val':[6, -1], 'cid':[elli_id, 'f_new_mus_box'], 'sel':(flags['new_mus_box'] == 1), 'sr':true, 't2':a[a.length - 1]['desc']})
			a.push({'desc':"  Gift  ", 'val':1, 'cid':elli_id, 'sr':true, 'sel':false, 't2':"Milk"});
			a.push({'desc':"Milk", 'val':4, 'cid':elli_id, 'sr':true, 't2':"  Gift  ", 'sel':(aff[elli_id] < 250 && vars['cows'] > 0)})
		}

		// Dog Affection
		if (flags['dog_inside'] == 0) {
			if (is_sunny != -1) {
				a.push({'desc':"Bring Dog Inside", 'cid':['f_dog_inside', dog_id], 'val':[1, 1], 'imp':true});
			}
			a.push({'desc':"Whistle", 'cid':dog_id, 'val':1, 'sr':(is_sunny != -1)});
		} else {
			a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
		}

		if (is_sunny != -1) {
			// Not a Typhoon
			a = cows(a, is_sunny, sell_cow);

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
				// Cutscene with Cliff + Ann when Cliff >= 143 affection
				if (dow != "TUES") {
					// Extensions on rainy days to avoid cutscenes if Cliff aff >= 143

					if (flags['kitchen'] == 0 && vars['gold'] >= 5000) {
						// Kitchen
						horse_today = true;
						a.push({'desc':"Buy a Kitchen (5000 G)", 'iid':get_npc_id('mas_carpenter'),
								'cid':['v_gold', 'v_lumber', 'f_kitchen'],
								'val':[-5000, -450, _BUILD_DAYS + 1]
						});
					} else if (flags['kitchen'] == 1) {
						if (flags['babybed'] == 0 && g >= 1000) {
							// Babybed
							horse_today = true;
							a.push({'desc':"Buy a Baby Bed (1000 G)", 'iid':get_npc_id('mas_carpenter'),
								'cid':['v_gold', 'v_lumber', 'f_babybed'],
								'val':[-1000, -150, _BUILD_DAYS + 1]
							});
						} else if (flags['babybed'] == 1) {
							if (flags['stairway'] == 0 && g >= 2000) {
								// Stairway
								horse_today = true;
								a.push({'desc':"Buy a Stairway (2000 G)", 'iid':get_npc_id('mas_carpenter'),
									'cid':['v_gold', 'v_lumber', 'f_stairway'],
									'val':[-2000, -250, _BUILD_DAYS + 1], 'sel':(is_sunny == 0)
								});
								if (is_sunny == 1) {
									a.push({'desc':"(Wait for rain to skip cutscenes)", 'sr':true});
								}
							}
						}
					}

					if (is_sunny == 1 && (dow == "MON" || d < 160)) {
						// MARIA
						a.push({'desc':"Talk (MTN / CHUR)", 'cid':maria_id, 'val':1, 'sel':false, 't2':"MusBox", 'red':(aff[maria_id] >= 180)});
						a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
								'sel':false, 't2':"MusBox"
						});
						a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true, 'sel':false});
					}
				} // End of Buy Extensions

				// ELLI
				if (dow != "SUN" && flags['photo_married'] == 0) {
					if (is_sunny == 0 && aff[elli_id] >= _SICK_EVENT_MIN && flags['sick_elli'] == 0) {
						a.push({'desc':"Sick Event (Bakery)", 'cid':[elli_id, 'f_sick_elli'], 'val':[_SICK_EVENT_AFF, 1]});
					} else {
						a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : ((dow == "MON") ? "Talk (MTN)" : "Talk ")), 'cid':elli_id, 'val':1, 'sel':false, 't2':"MusBox ", 'red':(dow != "WED" && aff[elli_id] >= 250)});
						a.push({'desc':"MusBox ", 'sel':false, 't2':a[a.length - 1]['desc'],
							'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						});
						a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true,
							't2':"Egg ", 'sel':false
						});
						a.push({'desc':"Egg ", 'sr':true, 't2':"Gift ", 'sel':false,
							'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
							'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
						});
					}
				}

				// RICK
				if (is_sunny == 1 && !["WED", "SUN"].includes(dow)) {
					a.push({
						'desc':"Talk  ", 'cid':rick_id, 'val':3,
						'sel':(dow != "SAT" && aff[rick_id] < _PARTY_ATTEND_MIN),
						'red':(aff[rick_id] >= _PARTY_ATTEND_MIN && (dow == "SAT" || flags['blue_feather'] == 1 || flags['propose'] > 0 || flags['photo_married'] == 1))
					});
					a.push({'desc':"Gift  ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':(aff[rick_id] < _PARTY_ATTEND_MIN)});
					a.push({'desc':"Rick Fix", 'sel':false, 'sr':true,
						'cid':['f_old_mus_box', 'f_new_mus_box', rick_id], 'val':[-1, 1, 3], 't3':"Talk  "
					});
					if (flags['blue_feather'] == 0 && dow != "SAT" && flags['propose'] == 0 && flags['photo_married'] == 0 && flags['kitchen'] == 1) {
						// Buy Blue Feather
						a.push({'desc':"Buy Blue Feather", 'cid':['v_gold', 'f_blue_feather'], 'val':[-980, 1], 'sr':true, 'sel':sell_cow});	
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
				if (d > 160 && flags['ankle_maria'] == 0 && aff[maria_id] >= 180 && dow != "MON") {
					a.push({'desc':"Ankle", 'cid':[maria_id, 'f_ankle_maria'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':sell_cow});
					a.push({'desc':"(Reset to clear Invisible Wall)", 'sr':true});
				}

				if (is_sunny == 1 && d > 168) {
					if (flags['photo_married'] == 0 && flags['propose'] == 0) {
						// Propose to Elli
						a.push({'desc':"Propose at Bakery", 'cid':['f_blue_feather', 'f_propose'], 'val':[-1, (next_sunday(d + 1) - d + 1)],
							'iid':elli_id, 'sel':(!["SUN", "MON"].includes(dow) && sell_cow), 'red':(["SUN", "MON"].includes(dow))});
					}

					// Maria Dream/Photo
					if (flags['photo_maria'] == 0) {
						// WARP TO PHOTO
						if (flags['dream_maria'] == 0) {
							a.push({'desc':"DREAM (Library)", 'cid':[maria_id, 'f_dream_maria'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':sell_cow, 'red':(["SUN", "MON"].includes(dow))});
						} else if (flags['dream_karen'] == 0) {
							a.push({'desc':"DREAM (Vineyard)", 'cid':[karen_id, 'f_dream_karen'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':sell_cow});
						}
						a.push({'desc':"PHOTO at 6 PM", 'cid':[maria_id, 'f_photo_maria'], 'val':[_PHOTO_EVENT_AFF, 1], 'sel':sell_cow});
					}
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

			// Feed Dog
			a.push({'desc':"Feed Dog", 'cid':dog_id, 'val':2, 'sel':false, 'red':(aff[dog_id] > 250)});
		} // End of if (!typhoon)

		if (d == 151) {
			// Fireworks Festival
			if (flags['dream_karen'] == 0) {
				a.push({'desc':"DREAM WARP (Vineyard)", 'cid':[karen_id, 'f_dream_karen'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
			} else if (flags['photo_married'] == 0) {
				a.push({'desc':"NIGHT WARP (Bakery)", 'cid':['v_happiness'], 'val':[10], 'sel':false, 'red':(aff[elli_id] < 240), 'iid':elli_id});
				a.push({'desc':"(Need 250 Aff for Elli)", 'sr':true});
			}
			a.push({'desc':"Fireworks (Town Square)", 'cid':maria_id, 'val':5, 'sel':false, 'red':(aff[elli_id] < 240)});
		}
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
