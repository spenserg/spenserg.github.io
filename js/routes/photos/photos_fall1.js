actions_photos_fall_y1 = function(a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id('ann');
	var chicken_id = get_npc_id('chicken');
	var cliff_id = get_npc_id('cliff');
	var dog_id = get_npc_id('dog');
	var duke_id = get_npc_id('bartender');
	var elli_id = get_npc_id('elli');
	var grey_id = get_npc_id('grey');
	var horse_id = get_npc_id('horse');
	var karen_id = get_npc_id('karen');
	var kent_id = get_npc_id('kent');
	var maria_id = get_npc_id('maria');
	var mas_carp_id = get_npc_id('mas_carpenter');
	var mayor_id = get_npc_id('mayor');
	var rick_id = get_npc_id('rick');
	var sprite_id = get_npc_id('sprite');
	var musbox_id = get_npc_id('musbox');

	var sprite_recipe_aff = 5;

	var dow = get_dow(d, true);
	var chicken_actions = [];
	var reset = "";

	var skip_to_bridge = ((d < 83 && aff[ann_id] >= _DREAM_EVENT_MIN && aff[maria_id] >= 145) ||
			      (d > 88 && flags['new_mus_box'] == 1 && flags['old_mus_box'] == 1 && aff[ann_id] > 180 && aff[maria_id] > 150));
/*
Need ~4000 G (3800 ish)
	var tmp_gold_left = vars['gold'];
	tmp_gold_left -= ((flags['kitchen'] == 0) ? 5000 : 0); // Kitchen
	tmp_gold_left -= ((flags['bathroom'] == 0) ? 3000 : 0); // Bathroom
	tmp_gold_left -= (4 * 500); // 4 grass
	tmp_gold_left -= ((1 - flags['milker']) * 1800);
	tmp_gold_left += 4000; // Hot Springs Work
	// Bridge Work
	if (d <= 83) { tmp_gold_left += 4000; 
	} else { tmp_gold_left += (1000 * (87 - d)); }
*/

	if (d == 65 || d == 71) { // Fall 5 & 11
		flags['dontsave'] = true;
	} else if (d == 66 || d == 68) { // Fall 6 & 8
		a.push({'desc':"Check Weather, RESET IF RAINY TOMORROW", 'imp':true});
	} else if (flags['berry_strength'] == 0 && d >= 83 && d <= 87) {
		a.push({'desc':"No Stamina Use for Strength Berry", 'imp':true});
	} else if (d == 87) {
		// Horse Race Entry
		if (flags['photo_horserace'] == 0) {
			a.push({'desc':"Enter Horse", 'cid':['f_horse_entered', get_npc_id('doug')], 'val':[1, 3], 'imp':true});
		} else {
			a.push({'desc':"Ignore Doug on Farm", 'imp':true, 'iid':get_npc_id('doug')});
		}
	} else if (d == 90) {
		// Winter Cows
		a.push({'desc':"Accept Cows", 'cid':'f_borrow_cows', 'val':1, 'iid':get_npc_id('doug'), 'imp':true});
	}

	// Dog Affection
	if (flags['dog_inside'] == 1) {
		a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
	} else {
		a.push({'desc':"Whistle", 'cid':dog_id, 'val':1});
		a.push({'desc':"Bring Dog Inside", 'cid':[dog_id, 'f_dog_inside'], 'val':[1, 1], 'iid':dog_id, 'sr':true, 'sel':false});
	}

	if (flags['old_mus_box'] == 0) {
		// Music Box Dig
		a.push({'desc':"Equip hoe", 'iid':musbox_id, 'red':(is_sunny == 0 || (is_festival(d) && d != 88)), 'imp':(d == 88)});
		a.push({'desc':"Dig Music Box", 'cid':'f_old_mus_box', 'val':1, 'sr':true,
			'sel':(![65, 71].includes(d) && (!["WED", "SAT", "SUN"].includes(dow) || d == 69) && !skip_to_bridge &&
			       is_sunny == 1 && (!is_festival(d) || d == 88))});
		if (flags['berry_farm'] == 0) {
			a.push({'desc':"Dig a Berry", 'val':1, 'cid':'f_berry_farm', 'sr':true, 'sel':false});
		}
	}

	// Chickens
	if (dow != "THURS" && vars['chickens'] > 0) {
		var need_to_sell = (vars['chickens'] == (91 - d) || (d < 88 && (vars['chickens'] == (90 - d))));
		chicken_actions.push({'desc':"Sell Chicken", 'cid':['v_chickens', 'v_gold'], 'val':[-1, 500], 'iid':get_npc_id('doug'),
					'sel':(need_to_sell || ((!["SAT", "SUN", "WED"].includes(dow) || (d == 66 && flags['vineyard_restored'] == 0)) && d != 65 && !skip_to_bridge &&
					       (vars['chickens'] > 2 || (aff[maria_id] > 150 && aff[ann_id] > 180)))),
					'imp':need_to_sell
		});
		chicken_actions.push({'desc':"New Chick", 'iid':chicken_id, 'cid':["v_new_chicken_days", "f_new_chick"], 'sel':false,
					'val':[d + _CHICK_GROW_SLEEPS, -1], 'sr':(dow != "THURS" && vars['chickens'] > 0)
		});
		if (flags['incubate_last'] == 0) {
			chicken_actions[chicken_actions.length - 1]['t0'] = "Incubate LAST";
			chicken_actions.push({'desc':"Incubate LAST", 'sr':true, 'sel':false,
					      'cid':["f_new_chick", "f_incubate_last"],
					      'val':[(_CHICK_BORN_SLEEPS + 1), 1]
			});
		}
		//chicken_actions.push({'desc':"Chick Outside", 'sr':true});
	}

	if (is_festival(d) || d == 71) {
		// 4, 12, 20, 28
		// Cow Fest, Harvest Fest, Egg Fest, Horse Fest
		// 71 is day before Harvest Festival

		if (d == 72) { // Fall 12
			// Harvest Festival
			a.push({'desc':'Win Harvest King', 'iid':mayor_id, 'imp':true, 'val':[1, 5], 'cid':['f_harvest_king', 'v_happiness']});
			a.push({'desc':"Talk", 'cid':mayor_id, 'val':2});
			if (aff[cliff_id] >= 100) { a.push({'desc':"Talk", 'cid':cliff_id, 'val':2}); }
			a.push({'desc':"Dance", 'val':10, 'cid':ann_id, 'sel':(aff[ann_id] < _PHOTO_MIN), 't2':["Dance ", " Dance"]});
			a.push({'desc':"Talk", 'val':2, 'cid':ann_id, 'sr':true, 'red':(aff[maria_id] > 157)});

			// Maria
			if (flags['dream_maria'] == 0) {
				if (aff[maria_id] >= (_DREAM_EVENT_MIN - 2)) {
					a.push({'desc':"DONT TALK TO MARIA", 'imp':true});
				} else if (aff[maria_id] >= (_DREAM_EVENT_MIN - 10)) {
					a.push({'desc':"DONT DANCE WITH MARIA", 'imp':true});
				}
				a.push({
					'desc':"Dance ", 'val':10, 'cid':maria_id,
					'sel':(aff[ann_id] >= _PHOTO_MIN && aff[maria_id] < (_DREAM_EVENT_MIN - 12)),
					'red':(aff[maria_id] >= (_DREAM_EVENT_MIN - 12)),
					't2':["Dance", " Dance"]
				});
				a.push({'desc':"Talk", 'val':2, 'cid':maria_id, 'sr':true, 'sel':(aff[maria_id] < (_DREAM_EVENT_MIN - 6))});
			}
			a.push({'desc':" Dance", 'val':10, 'cid':elli_id, 'sel':(aff[ann_id] >= _PHOTO_MIN && aff[maria_id] >= _PHOTO_MIN), 't2':["Dance", "Dance "]});
			a.push({'desc':"Talk", 'val':2, 'cid':elli_id, 'sr':true});
			a.push({'desc':"RESET IF NOT KING", 'imp':true});
		} else if (d == 80 && flags['berry_ocean'] == 0) {
			// Egg Festival
			a.push({'desc':"Save Egg Festival for Year 2", 'imp':true});
			a.push({
				'desc':'Win Egg Festival', 'iid':mayor_id, 'sel':false,
				'val':[1, 5],
				'cid':['berry_eggfest', 'v_happiness']
			});
			if (aff[maria_id] >= (_DREAM_EVENT_MIN - 5)) {
				a.push({'desc':"DONT TALK TO MARIA", 'red':true});
			}
			a.push({'desc':"Talk", 'val':2, 'cid':maria_id, 'sel':false, 'red':(aff[maria_id] >= (_DREAM_EVENT_MIN - 5))});
			a.push({'desc':"Talk", 'val':2, 'cid':ann_id, 'sel':false});
			a.push({'desc':"Talk", 'val':2, 'cid':cliff_id, 'sel':false});
			a.push({'desc':"Talk", 'val':2, 'cid':rick_id, 'sel':false});
			a.push({'desc':"Talk", 'val':2, 'cid':mayor_id, 'sel':false});
		} else if (d == 88 && (flags['horse_entered'] == 1 || vars['medals'] < 600)) { // Fall 28
			// Horse Race
			a = betting_table(a, 1, d);
			if (flags['horse_entered'] == 1) {
				a.push({'desc':"Win Horse Race", 'cid':'f_photo_horserace','val':1, 'iid':get_npc_id('doug'), 'imp':true});
			}
		}
	} else { // Not a festival
		// ANN ANKLE
		if (flags['ankle_ann'] == 0 && aff[ann_id] >= (_ANKLE_EVENT_MIN - 10) && is_sunny == 1) {
			// ANKLE EVENT
			a.push({'desc':"ANKLE (Crossroads)", 'cid':[ann_id, 'f_ankle_ann'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':false});
		}

		if (d >= 83 && d <= 87) {
			// Bridge Work
			// Fall 83, 84, 85, 86, 87
			//	    Sat Sun Mon Tue Wed
			a.push({'desc':"Bridge Work", 'iid':mas_carp_id,
				'cid':[mas_carp_id, get_npc_id('carpenter_top'), get_npc_id('carpenter_bot'), 'v_bridge_days_worked', 'v_gold'],
				'val':[5, 5, 5, 1, 1000],
				'imp':(d != 84 || aff[maria_id] > 156),
				'sel':(d != 84 || aff[maria_id] > 156)
			});

			if (d == 87 && vars['bridge_days_worked'] == 4 && aff[kent_id] < 3) {
				// Intro to Kent if doing all five bridge work days
				if (aff[kent_id] == 0) { a.push({'desc':"Meet", 'cid':kent_id, 'val':3, 'sel':false, 'imp':true}); }
				a.push({'desc':("Talk (" + ((is_sunny == 1) ? "By Bakery" : "Potion Shop") + ")"),
					'cid':kent_id, 'val':3, 'sr':true, 'sel':false, 'imp':true
				});
			}
		} else if (flags['new_mus_box'] == 1) {
			a = ranch_stuff_fall(a, dow, is_sunny, chicken_actions, skip_to_bridge);
		}

		if (is_sunny == 1) {
			a.push({'desc':"Mushroom, edible herb"});

			if (!["TUES", "WED"].includes(dow)) {
				// Cliff
				// At the ranch on Tues/Wed
				var cliff_loc = " (Fish Tent) [50%]";
				if (dow == "THURS") { cliff_loc = " (Carp House)"; }
				if (dow == "SUN") { cliff_loc = " (Carp House) [50%]"; }
				if (dow == "MON") { cliff_loc = " (Hot Springs)"; }
				a.push({'desc':("Talk" + cliff_loc), 'cid':cliff_id, 'val':2, 'sel':false, 'red':(aff[cliff_id] >= 200)});
				a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
				a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
			}

			// ANN DREAM
			if (flags['dream_ann'] == 0 && aff[ann_id] >= _DREAM_EVENT_MIN && is_sunny == 1) {
				a.push({'desc':"Ignore Ann if she is crouching", 'red':true});
				a.push({'desc':"DREAM (Cave)", 'cid':[ann_id, 'f_dream_ann'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':(d >= 83), 'red':(d < 83)});
				if (d < 83) { a.push({'desc':"Wait for Bridge Work", 'sr':true}); }
			}
		} else {
			a.push({'desc':"Talk (Carp House / Cave)", 'cid':cliff_id, 'val':2, 'sel':false, 'red':(aff[cliff_id] >= 200)});
			a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
			a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
		}

		// Grapes for Bartender on Fall 1
		if (d == 61 && flags['wine_from_duke'] == 0 && is_sunny == 1) {
			a.push({'desc':"Get Grapes for bartender", 'imp':true, 'iid':get_npc_id('bartender')});
		}

		// Goddess
		if (flags['vineyard_restored']) {
			if ([65, 67].includes(d) && is_sunny == 1) {
				// Wish for Weather
				a.push({'desc':"Wish for Weather (Top)", 'iid':get_npc_id('goddess')});
			} else if (flags['berry_strength'] == 0) {
				// Strength Wish Power Berry
				a.push({'desc':"Wish for Strength (Middle)", 'cid':'f_berry_strength', 'val':1,
					'iid':get_npc_id('goddess'), 'sel':(d >= 83 && d <= 87), 'imp':(d >= 83 && d <= 87)
				});
			}
		}

		// ELLI IN MTNS
		if (dow == "MON" && is_sunny == 1) {
			a.push({'desc':"Talk (MTNS)", 'cid':elli_id, 'val':1, 'sel':(flags['new_mus_box'] == 0 && !skip_to_bridge), 't2':"MusBox "});
			a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
				'sel':(aff[elli_id] < 250 && !skip_to_bridge), 't2':a[a.length - 1]['desc']
			});
			a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"Egg ",
				'sel':(aff[elli_id] < 250 && vars['chickens'] == 0 && !skip_to_bridge)
			});
			a.push({
				'desc':"Egg ", 'sr':true, 't2':"Gift ",
				'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
				'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4),
				'sel':(aff[elli_id] < 250 && vars['chickens'] > 0 && !skip_to_bridge)
			});
		}

		if (dow == "MON") {
			// SPRITE
			// "  Talk" <- -3 spaces
			// "  Gift" <- -3 spaces
			if (flags['vineyard_restored'] == 0 && d < 67) {
				a.push({'desc':"   Talk", 'cid':sprite_id, 'val':1,
					'sel':(aff[sprite_id] < (_SPRITE_WINE_MIN - 5) || d == 66),
					'imp':(aff[sprite_id] < (_SPRITE_WINE_MIN - 5) || d == 66)
				});
				a.push({'desc':"   Gift", 'cid':sprite_id, 'val':1, 'sr':true, 't2':"Mushroom", 'sel':false});
				a.push({'desc':"Mushroom", 't2':"   Gift", 'sr':true, 'sel':(a[a.length - 2]['sel']),
					'cid':((flags['recipe_sprite'] == 0 && aff[sprite_id] >= 30) ? ['f_recipe_sprite', sprite_id] : sprite_id),
					'val':((flags['recipe_sprite'] == 0 && aff[sprite_id] >= 30) ? [1, sprite_recipe_aff] : 2)
				});
			}
		}
		
		if (flags['cutscene_watermelon'] == 0 && aff[ann_id] >= (_CUTSCENE_WATERMELON_MIN - 7) && aff[maria_id] >= (_CUTSCENE_WATERMELON_MIN - 8)) {
			a.push({'desc':"WARNING: Cutscene plays at 2nd Village Screen", 'red':true});
			a.push({'desc':"Watermelon Cutscene", 'val':1, 'cid':'f_cutscene_watermelon', 'sr':true, 'sel':false});
		}

		// MARIA
		if (aff[maria_id] > 150) {
			a.push({'desc':"NO MUSBOX FOR MARIA", 'iid':maria_id, 'red':true});
		}
		if (dow == "MON") {
			// MARIA SICK EVENT
			if (is_sunny == 0 && aff[maria_id] >= _SICK_EVENT_MIN && flags['sick_maria'] == 0 && aff[maria_id] < (_DREAM_EVENT_MIN - _SICK_EVENT_AFF)) {
				a.push({'desc':"Sick Event", 'cid':[maria_id, 'f_sick_maria'], 'val':[_SICK_EVENT_AFF, 1]});
				a.push({'desc':"Talk", 'cid':mayor_id, 'val':3});
				a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':(aff[mayor_id] < aff[rick_id])});
			} else {
				a.push({'desc':"Talk (MTN / CHURCH)", 'cid':maria_id, 'val':1, 'sel':false, 'red':(aff[maria_id] >= (_DREAM_EVENT_MIN - 3))});
				if (aff[maria_id] < (_DREAM_EVENT_MIN - 1 - _MUS_BOX_AFF)) {
					a[a.length - 1]['t2'] = "MusBox";
					a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
							'sel':false, 't2':"Talk (MTN / CHURCH)"
					});
				}
				if (aff[maria_id] < (_DREAM_EVENT_MIN - 3)) {
					a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true, 'sel':false});
				}
				a.push({'desc':"Weed", 'cid':maria_id, 'val':-2, 'sr':true, 'sel':false});
			}
		} else {
			a.push({'desc':"Talk (Library)", 'cid':maria_id, 'val':1,
				'sel':(((!["SAT", "SUN", "WED"].includes(dow) || d == 69) || (d == 66 && flags['vineyard_restored'] == 0)) &&
				       d != 65 && !skip_to_bridge && aff[maria_id] < 156 && (flags['new_mus_box'] == 0 || aff[maria_id] >= 145)),
				'red':(aff[maria_id] == (_DREAM_EVENT_MIN - 1)
			)});
			if (aff[maria_id] < (_DREAM_EVENT_MIN - 1 - _MUS_BOX_AFF)) {
				a[a.length - 1]['t2'] = "MusBox";
				a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':"Talk (Library)",
					'sel':(((!["SAT", "SUN", "WED"].includes(dow) || d == 69) || (d == 66 && flags['vineyard_restored'] == 0)) &&
					       d != 65 && !skip_to_bridge && flags['new_mus_box'] == 1 && aff[maria_id] < 145),
				});
			}
			if (aff[maria_id] < (_DREAM_EVENT_MIN - 1 - 2)) {
				a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true,
					'sel':(((!["SAT", "SUN", "WED"].includes(dow) || d == 69) || (d == 66 && flags['vineyard_restored'] == 0)) && d != 65 && !skip_to_bridge && aff[maria_id] < 155)
				});
			}
			a.push({'desc':"Weed", 'cid':maria_id, 'val':-2, 'sr':true, 'sel':false});
		}

		// MAYOR
		// "  Talk" <- -2 spaces
		// "  Gift" <- -2 spaces
		if (is_sunny == 1 && dow != "SUN") {
			a.push({'desc':"Talk (Rick Shop 50%)", 'cid':mayor_id, 'val':3,
				'sel':(((!["SAT", "SUN", "WED"].includes(dow) || d == 69) || (d == 66 && flags['vineyard_restored'] == 0)) && d != 65 && !skip_to_bridge),
				'red':(aff[mayor_id] >= _PARTY_ATTEND_MIN)});
			a.push({'desc':"  Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':false});
		}

		// ELLI
		// "Gift " <- one space
		// "Talk " <- one space
		if (!["SUN", "MON"].includes(dow)) {
			var elli_sick_event = (is_sunny == 0 && aff[elli_id] >= _SICK_EVENT_MIN && flags['sick_elli'] == 0);
			var elli_cutscene_plays = (dow != "WED" && aff[elli_id] >= 250 && flags['cutscene_elli'] == 0);
			if (elli_cutscene_plays) {
				a.push({'desc':([67, 69].includes(d) ? "WARNING: Cutscene plays in Bakery" : "ELLI SKIP (Enter Bakery at Noon or later)"),
					'red':(![67, 69].includes(d)), 'imp':([67, 69].includes(d))
				});
				a.push({'desc':"Elli Cutscene", 'val':1, 'cid':'f_cutscene_elli', 'sr':true, 'sel':([67, 69].includes(d))});
			}
			a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : "Talk "), 'cid':elli_id, 'val':1,
				'sel':(d != 65 && !skip_to_bridge &&
				       ((!["SAT", "SUN", "WED"].includes(dow) || d == 69) || (elli_sick_event && dow == "WED") || (d == 66 && flags['vineyard_restored'] == 0))),
				'red':(aff[elli_id] >= 250 && !elli_cutscene_plays)
			});
			a[a.length - 1]['t2'] = "MusBox ";
			a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
				'sel':((flags['new_mus_box'] == 1 && d < 86) && !skip_to_bridge && (dow == "THURS" || aff[ann_id] >= 175) && aff[maria_id] >= 145), 't2':a[a.length - 1]['desc']
			}); // Extra musboxes usually go to Ann
			a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"Egg ",
				'sel':(((!["SAT", "SUN", "WED"].includes(dow) || d == 69) || (elli_sick_event && dow == "WED") || (d == 66 && flags['vineyard_restored'] == 0)) &&
				       aff[elli_id] < 250 && !skip_to_bridge && d != 65 && vars['chickens'] == 0)
			});
			a.push({
				'desc':"Egg ", 'sr':true, 't2':"Gift ",
				'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
				'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4),
				'sel':(vars['chickens'] > 0 && d != 65 && aff[elli_id] < 250 && !skip_to_bridge &&
				       ((!["SAT", "SUN", "WED"].includes(dow) || d == 69) || (elli_sick_event && dow == "WED") || (d == 66 && flags['vineyard_restored'] == 0)))
			});
			if (is_sunny == 1) {
				if (flags['dream_elli'] == 0 && aff[elli_id] >= (_DREAM_EVENT_MIN - _MUS_BOX_AFF - 4)) {
					a.push({'desc':"DREAM (Village)", 'cid':[elli_id, 'f_dream_elli'], 'val':[_DREAM_EVENT_AFF, 1], 'sr':true, 'sel':false});
				}
				if (flags['ankle_elli'] == 0 && aff[elli_id] >= (_ANKLE_EVENT_MIN - _MUS_BOX_AFF - 4)) {
					a.push({'desc':"ANKLE (MTN)", 'cid':[elli_id, 'f_ankle_elli'], 'val':[_ANKLE_EVENT_AFF, 1], 'sr':true, 'sel':false});
				}
			} else if (elli_sick_event) {
				a.push({'desc':"Sick Event (Bakery)", 'cid':[elli_id, 'f_sick_elli'], 'val':[_SICK_EVENT_AFF, 1],
					'red':(aff[elli_id] >= 250), 'sel':(aff[elli_id] < 250)
				});
			}
		}

		// RICK
		// "Gift    " <- 4 spaces
		// "Talk    " <- 4 spaces
		if (is_sunny == 1 && (!["SUN", "WED"].includes(dow) || d == 69)) {
			if (d >= 83 && flags['new_mus_box'] == 0 && (aff[maria_id] < (_DREAM_EVENT_MIN - 3))) {
				a.push({'desc':"Need a Fixed Musbox for Cow Stealing", 'imp':true});
			}
			if (flags['new_mus_box'] == 1) {
				a.push({'desc':"DONT TALK TO RICK WITH A FIXED MUSIC BOX!", 'imp':true, 'iid':rick_id});
			}
			a.push({'desc':"Talk    ", 'cid':rick_id, 'val':3, 'sel':(dow != "SAT" && !skip_to_bridge && d != 65 && aff[ann_id] < _PHOTO_MIN)});
			a.push({'desc':"Gift    ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':false});
			a.push({'desc':"Rick Fix", 'sr':true, 't3':"Talk    ", 'cid':['f_old_mus_box', 'f_new_mus_box'], 'val':[-1, 1],
				'sel':(dow != "SAT" && d != 65 && !skip_to_bridge)
			});
			if (vars['gold'] >= 600 && flags['horse_brush'] == 0) {
				a.push({'desc':"Buy Brush", 'cid':['v_gold', 'f_horse_brush'], 'val':[-600, 1], 'sr':true, 'sel':false});
			}

			// ANN in Ricks Shop
			// "Gift  " <- 2 spaces
			if (dow == "THURS") {
				a.push({'desc':"Talk (Ricks Shop)", 'cid':ann_id, 'val':1, 't2':"  MusBox", 'sel':false, 'red':(aff[ann_id] >= _PHOTO_MIN)});
				a.push({'desc':"  MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':"Talk (Ricks Shop)", 'sel':false});
				a.push({'desc':"Gift  ", 'cid':ann_id, 'val':1, 'sr':true, 't2':"Corn / Potato", 'sel':false});
				a.push({'desc':"Corn / Potato", 'cid':ann_id, 'val':3, 'sr':true, 't2':"Gift  ", 'sel':false});
			}

		}

		// ANN
		if (flags['new_mus_box'] == 0) {
			a = ranch_stuff_fall(a, dow, is_sunny, chicken_actions, skip_to_bridge);
		}

		// Dog Karen to Pink
		if (aff[karen_id] < _PHOTO_MIN && is_sunny == 1) {
			// Includes actual photo day (must be sunny)
			var karen_loc = "(Carp House / Beach) [50%]";
			if (dow == "SUN") { karen_loc = "(Beach)"; }
			if (["MON", "THURS"].includes(dow)) {
				karen_loc = "(Vineyard)";
			} else if (aff[elli_id] >= _CUTSCENE_BEACH_MIN && flags['cutscene_beach'] == 0) {
				a.push({'desc':"WARNING: Cutscene plays at Beach", 'red':true});
				a.push({'desc':"Beach Cutscene", 'sr':true, 'sel':false, 'cid':'f_cutscene_beach', 'val':1});
			}
			a.push({'desc':("Dog Karen to Pink " + karen_loc + ((["MON", "THURS", "FRI", "SAT"].includes(dow)) ? " / (BAR)" : "")),
				'cid':karen_id, 'val':(205 - aff[karen_id]), 'imp':(d == 67), 'sel':(d == 67)
			});
		}

		if ([65, 67, 69].includes(d) || (d < 63 && flags['wine_from_duke'] == 0)) {
			if (d < 66 && ![63, 64].includes(d) && flags['wine_from_duke'] == 0) {
				if (d == 65 && flags['wine_from_duke'] == 0 && is_sunny == 0) {
					reset = "Last Wine Day; Can't get wine in the rain";
				} else {
					// BAR
					a.push({'desc':"Talk", 'cid':duke_id, 'val':3, 'imp':(is_sunny == 1), 'sel':(is_sunny == 1), 'red':(is_sunny == 0)});
					a.push({'desc':"Grapes", 'sr':true, 'sel':(is_sunny == 1),
						'cid':((flags['recipe_duke'] == 0) ? [duke_id, 'f_recipe_duke'] : duke_id),
						'val':((flags['recipe_duke'] == 0) ? [7, 1] : 5)
					});
					a.push({'desc':"Get Wine", 'cid':'f_wine_from_duke', 'val':1, 'sr':true, 'sel':(is_sunny == 1)});
				}
			} else if ([67, 69].includes(d)) {
				if (aff[karen_id] >= _DREAM_EVENT_MIN && flags['dream_karen'] == 0) {
					a.push({'desc':"Dream Warp", 'cid':[karen_id, 'f_dream_karen'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false, 'red':true});
					a.push({'desc':"(Save for Cow Stealing)", 'sr':true});
				} else {
					a.push({'desc':"Equip Hammer, Clear the Farm"});
				}
				a.push({'desc':(((d == 67) ? "Karen" : "Elli") + " Photo at 6 PM"), 'imp':true, 'val':[_PHOTO_EVENT_AFF, 1, 1] });
				a[a.length - 1]['cid'] = ((d == 67) ? [get_npc_id('karen'), 'f_photo_karen', 'f_dontsave'] : [elli_id, 'f_photo_elli', 'f_dontsave']);
			}
		}
		if (d == 87) { a.push({'desc':"Sell Everything; Horse Race is Tomorrow!", 'imp':true}); }

		if (dow != "MON") {
			// SPRITE
			// "  Talk" <- -3 spaces
			// "  Gift" <- -3 spaces
			if (flags['vineyard_restored'] == 0 && d < 67) {
				a.push({'desc':"   Talk", 'cid':sprite_id, 'val':1,
					'sel':(aff[sprite_id] < (_SPRITE_WINE_MIN - 5) || d > 65),
					'imp':(aff[sprite_id] < (_SPRITE_WINE_MIN - 5) || d == 66)
				});
				a.push({'desc':"   Gift", 'cid':sprite_id, 'val':1, 'sr':true, 't2':"Mushroom", 'sel':false});
				a.push({'desc':"Mushroom", 't2':"   Gift", 'sr':true, 'sel':(a[a.length - 2]['sel']),
					'cid':((flags['recipe_sprite'] == 0 && aff[sprite_id] >= 30) ? ['f_recipe_sprite', sprite_id] : sprite_id),
					'val':((flags['recipe_sprite'] == 0 && aff[sprite_id] >= 30) ? [1, sprite_recipe_aff] : 2)
				});
			}
		}

		// Goddess
		if (flags['vineyard_restored'] == 0 && flags['wine_from_duke'] == 1 && aff[sprite_id] >= (_SPRITE_WINE_MIN - ((flags['recipe_sprite'] == 1 || aff[sprite_id] < 31) ? 2 : sprite_recipe_aff))) {
			// Restore the Vineyard
			a.push({'desc':"Restore the Vineyard", 'iid':get_npc_id('goddess'), 'sel':(d > 65), 'imp':(d == 66),
				'cid':['f_vineyard_restored', 'f_dontsave'], 'val':[1, 1]
			});
		}
	} // End of if !festival

	// Horse Affection
	if (flags['photo_horserace'] == 0) {
		if ((d != 88 || flags['horse_entered'] == 0) && flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"])) {
			a.push({'desc':"Equip Brush", 'iid':horse_id, 'sel':false});
		}
		if (flags['horse'] != 0) {
			a.push({'desc':"Whistle Horse", 'val':1, 'cid':horse_id, 'sr':((d != 88 || flags['horse_entered'] == 0) && flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"]))});
			if (d != 88 || flags['horse_entered'] == 0) {
				a.push({'desc':((flags['horse'] == 1) ? "Ride": "Talk"), 'val':1, 'cid':a[a.length - 1]['cid'], 'sr':true, 'sel':false});
			}
		}
		if (flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"])) {
			if (d != 88 || flags['horse_entered'] == 0) {
				a.push({'desc':"Brush", 'val':2, 'cid':horse_id, 'sr':true, 'sel':false});
			}
		}
	}

	// Feed dog
	a.push({'desc':"Feed Dog", 'cid':dog_id, 'val':2, 'sel':false});

	if (reset.length > 0) {
		flags['dontsave'] = false;
		a = [{'desc':"RESET", 'red':true}, {'desc':("REASON: " + reset)}];
	}

	// Money Needed going into Winter
	var tmp_gl = (g - (vars['bridge_days_worked'] * 1000)) + 4000 + 4000; // Bridge + Hot Springs Work
	tmp_gl -= (6000 + 5000 + 2000 + 1800); // Cow, Kitchen, 4 Grass, Milker
	if (tmp_gl < 0) {
		a.push({'desc':((-1 * tmp_gl) + " G Needed"), 'red':true });
	}

	// If no new music box, enacting music box for one girl will deactivate all other music boxes
	if (flags['new_mus_box'] == 0 && aff[rick_id] >= _RICK_FIX_MIN - 6) {
		var musbox_dups = [];
		for (var i = 0; i < a.length; i++) {
			if (a[i]['desc'].includes("MusBox")) {
				musbox_dups.push(i);
			}
		}
		for (var i = 0; i < musbox_dups.length; i++) {
			var tmp_t2 = [a[musbox_dups[i] - 1]['desc']];
			for (var j = 0; j < musbox_dups.length; j++) {
				if (i != j) {
					tmp_t2.push(a[musbox_dups[j]]['desc']);
				}
			}
			a[musbox_dups[i]]['t2'] = tmp_t2;
		}
	}
	return a;
}

function ranch_stuff_fall (tmp_act = [], dow = get_dow(vars['day']), is_sunny = 1, chicken_actions = [], skip_to_bridge = false) {
	if (dow != "THURS") {
		var ann_id = get_npc_id('ann');
		var elli_id = get_npc_id('elli');
		var cliff_id = get_npc_id('cliff');
		var grey_id = get_npc_id('grey');
		var maria_id = get_npc_id('maria');
		var d = vars['day'];

		var ann_sick_event = (dow == "SUN" && is_sunny == 0 && flags['sick_ann'] == 0 && aff[ann_id] < _PHOTO_MIN && d != 63 && 
						      aff[ann_id] >= (_SICK_EVENT_MIN - (4 + 1 + 5 * flags['new_mus_box'])));

		if (is_sunny == 1 && flags['cutscene_cliff_farm'] == 0 && aff[cliff_id] > 90) {
			tmp_act.push({'desc':"RANCH CUTSCENE, Fast Text", 'imp':true, 'iid':cliff_id});
			tmp_act.push({'desc':"Cliff Cutscene", 'val':1, 'cid':"f_cutscene_cliff_farm", 'sr':true, 'sel':false});
		}

		//if (aff[ann_id] < _PHOTO_MIN) {
			// ANN
			// " Talk" <- -1 spaces
			// " Gift" <- -1 spaces
			// " Musbox" <- -1 spaces
			tmp_act.push({
				'desc':(" Talk (" + ((is_sunny == 0) ? "Barn)" : "Ranch)")),
				'cid':ann_id, 'val':1, 'red':(dow == "SUN" && !ann_sick_event),
				'sel':(aff[ann_id] < _PHOTO_MIN && !skip_to_bridge && d != 86 &&
				 		((ann_sick_event && flags['new_mus_box'] == 0) ||
							(is_sunny == 1 && d != 65 && flags['new_mus_box'] == 0 &&
				       			((!["SAT", "SUN", "WED"].includes(dow) || d == 69) || (d == 66 && flags['vineyard_restored'] == 0))
						)
					)
				),
				't2':" MusBox", 'red':(aff[ann_id] >= _PHOTO_MIN)
			});
			tmp_act.push({
				'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
				'sel':(aff[ann_id] < _PHOTO_MIN && !skip_to_bridge && d != 86 &&
				       ((ann_sick_event && flags['new_mus_box'] == 1) ||
						(is_sunny == 1 && d != 65 && flags['new_mus_box'] == 1 &&
				       		((!["SAT", "SUN", "WED"].includes(dow) || d == 69) || (d == 66 && flags['vineyard_restored'] == 0)))
					)
				),
				't2':tmp_act[tmp_act.length - 1]['desc']
			});
			tmp_act.push({
				'desc':" Gift", 'cid':ann_id, 'sr':true,
				'val':((vars['day'] == 44) ? 3 : 1), 't2':"Corn / Potato",
				'sel':(aff[ann_id] < _PHOTO_MIN && !skip_to_bridge && d != 86 &&
						((ann_sick_event && vars['potatoes'] <= 0 && vars['corn_waters'] < _CORN_GROW_DAYS) ||
							(is_sunny == 1 && d != 65 && vars['potatoes'] <= 0 && vars['corn_waters'] < _CORN_GROW_DAYS &&
				       			((!["SAT", "SUN", "WED"].includes(dow) || d == 69) || (d == 66 && flags['vineyard_restored'] == 0)))
						)
				)
			}); 
			tmp_act.push({
				'desc':"Corn / Potato", 'cid':[ann_id, 'v_potatoes'], 'sr':true,
				'val':[((vars['day'] == 44) ? 5 : 3), -1], 't2':" Gift",
				'sel':(aff[ann_id] < _PHOTO_MIN && !skip_to_bridge && d != 86 &&
						((ann_sick_event && (vars['potatoes'] > 0 || vars['corn_waters'] >= _CORN_GROW_DAYS)) ||
							(is_sunny == 1 && d != 65 && (vars['potatoes'] > 0 || vars['corn_waters'] >= _CORN_GROW_DAYS) &&
				       			((!["SAT", "SUN", "WED"].includes(dow) || d == 69) || (d == 66 && flags['vineyard_restored'] == 0)))
						)
				)
			});

			// Cliff
			if (["WED", "TUES"].includes(dow) && is_sunny == 1) {
				var beach_cutscene = (aff[elli_id] >= _CUTSCENE_BEACH_MIN && flags['cutscene_beach'] == 0);
				if (dow == "TUES" && beach_cutscene) {
					tmp_act.push({'desc':"WARNING: Cutscene plays at Beach", 'red':true});
					tmp_act.push({'desc':"Beach Cutscene", 'sr':true, 'sel':false, 'cid':'f_cutscene_beach', 'val':1});
				}
				if (aff[cliff_id] == 5 || aff[cliff_id] == 0) {
					// Cliff's intro gives affection to GRAY
					tmp_act.push({'desc':"Meet", 'cid':grey_id, 'val':4,
						      'sel':(d == 66 && flags['vineyard_restored'] == 0 && !skip_to_bridge),
						      'iid':cliff_id, 'red':(dow == "TUES" && beach_cutscene)
					});
				}
				tmp_act.push({
					'desc':("Talk (" + ((dow == "WED") ? "Ranch" : "Beach") + ")"),
					'cid':cliff_id, 'val':2, 'sr':(aff[cliff_id] == 5 || aff[cliff_id] == 0),
					'sel':(d == 66 && flags['vineyard_restored'] == 0 && !skip_to_bridge),
					'red':(dow == "TUES" && beach_cutscene),
				});
				tmp_act.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 't2':"   Egg   ", 'sr':true,
					      'sel':(!skip_to_bridge && d != 86 && (dow != "TUES" || !beach_cutscene) &&
						     (dow != "WED" || (d == 66 && flags['vineyard_restored'] == 0)) && vars['chickens'] <= 1)
				});
				tmp_act.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 't2':"   Gift   ", 'sr':true,
					      'sel':(!skip_to_bridge && d != 86 && (dow != "TUES" || !beach_cutscene) &&
						     (dow != "WED" || (d == 66 && flags['vineyard_restored'] == 0)) && vars['chickens'] > 1)
				});
			}
		//}
		if (ann_sick_event) {
			// ANN SICK EVENT
			tmp_act.push({'desc':"Sick Event", 'cid':[ann_id, 'f_sick_ann'], 'val':[_SICK_EVENT_AFF, 1]});
		}
		tmp_act = tmp_act.concat(chicken_actions);
	}
	return tmp_act;
}
