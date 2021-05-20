actions_photos_sum_y1 = function(a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id('ann');
	var chicken_id = get_npc_id('chicken');
	var cliff_id = get_npc_id('cliff');
	var dog_id = get_npc_id('dog');
	var elli_id = get_npc_id('elli');
	var harris_id = get_npc_id('harris');
	var horse_id = get_npc_id('horse');
	var grey_id = get_npc_id('grey');
	var jeff_id = get_npc_id('jeff');
	var kai_id = get_npc_id('kai');
	var karen_id = get_npc_id('karen');
	var maria_id = get_npc_id('maria');
	var mayor_id = get_npc_id('mayor');
	var popuri_id = get_npc_id('popuri');
	var rick_id = get_npc_id('rick');
	var sprite_id = get_npc_id('sprite');
	var musbox_id = get_npc_id('musbox');

	var dow = get_dow(d, true);
	var cur_maria_aff = aff[maria_id];
	var mtn_visit = ((d < 41 || dow == "MON") && aff[maria_id] < (_DREAM_EVENT_MIN - 1) && is_sunny); // DONT TRIGGER DREAM EVENT
	var photo_maria_disp = false;
	var chicken_actions = [];

	if (is_sunny == 1 && !is_festival(d + 1) && vars['chickens'] > 0 && flags['chicken_funeral'] == 0 && d != 60) {
		// Check Tomorrows Weather (if valid)
		a.push({'desc':"Check Weather: "});
		var tmp_weather = ["Sunny", "Rainy", "Typhoon"];
		for (var i = 0; i < tmp_weather.length; i++) {
			a.push({'desc':tmp_weather[i], 'cid':'f_good_weather', 'val':(0 - i), 'sr':true, 'sel':(i == 0),
					't2':tmp_weather.filter(function(val){ return val.localeCompare(tmp_weather[i]) != 0; })
			});
			if (is_sunny == 1) {
				if (i != 0) { a[a.length - 1]['t3'] = []; }
				if (flags['chicken_outside'] == 0) {
					if (i == 0) { a[a.length - 1]['t3'] = []; }
					a[a.length - 1]['t' + Math.floor(3 - (.2 * i))].push("Chicken Outside");
				}
				a[a.length - 1]['t' + Math.floor(2.8 + (.3 * i))].push((flags['chicken_outside'] == 1) ? "Chicken Inside / Feed" : "Feed Chicken");
			}
		}
	}

	if (flags['chicken_funeral'] == 1) {
		a.push({'desc':"Chicken Funeral", 'iid':get_npc_id('pastor'), 'val':-1, 'cid':'f_chicken_funeral'});
	} else {
		// Dog Affection
		if (flags['dog_inside'] == 1) {
			a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
		}

		// Music Box Dig
		if (flags['old_mus_box'] == 0 && is_sunny == 1) {
			if (d == 31) {
				a.push({'desc':"NO MUSIC BOX DIG (Farm visitors all day)", 'imp':true});
				// Strength Wish Power Berry
				if (vars['chickens'] > 0 && flags['berry_strength'] == 0) {
					a.push({'desc':"Wish for Strength (Middle)", 'cid':'f_berry_strength', 'val':1, 'iid':get_npc_id('goddess'), 'imp':true});
				}
				// Blue Mist Flower
				if (flags['photo_popuri'] == 0) {
					a.push({'desc':"Blue Mist Flower Glitch", 'iid':popuri_id, 'cid':'f_photo_popuri', 'val':1,
							'sr':(vars['chickens'] > 0 && flags['berry_strength'] == 0), 'sel':false
					});
				}
			} else if (!is_festival(d)){
				// Dig music box
				a.push({'desc':"Equip hoe", 'iid':musbox_id});
				a.push({'desc':"Dig Music Box", 'cid':'f_old_mus_box', 'val':1, 'sr':true, 'sel':(!["SAT", "SUN", "WED"].includes(dow))});
				if (flags['berry_farm'] == 0) {
					a.push({'desc':"Dig a Berry", 'val':1, 'cid':'f_berry_farm', 'sr':true, 'sel':false});
				}
			}
		}

		// New Chicken
		if (vars['new_chicken_days'].length > 0 && parseInt(vars['new_chicken_days'].substr(0,3)) == d) {
			a.push({'desc':"New Chicken", 'iid':chicken_id});
		}

		if (is_sunny != -1) { // No Typhoon

			// Chicken Inside / Feed or Chicken Outside
			if (vars['chickens'] > 0) {
				a.push({'desc':((flags['chicken_outside'] == 1) ? "Chicken Inside / Feed" : "Feed Chicken"),
						'cid':((flags['chicken_outside'] == 1) ? ['f_chicken_outside', 'v_feed'] : 'v_feed'),
						'val':((flags['chicken_outside'] == 1) ? [-1, -1] : -1), 'iid':chicken_id,
						'imp':(is_sunny != flags['chicken_outside']), 'sel':false,
						'sr':(vars['new_chicken_days'].length > 0 && parseInt(vars['new_chicken_days'].substr(0,3)) == d)
				});
				if (flags['chicken_outside'] == 0 && is_sunny == 1) {
					a[a.length - 1]['t1'] = "Chicken Outside";
					a[a.length - 1]['t2'] = "Chicken Outside";
					a.push({'desc':"Chicken Outside", 'cid':'f_chicken_outside', 'val':1, 'imp':true, 'sr':true,
							't1':"Feed Chicken", 't2':"Feed Chicken", 'sel':(is_sunny == 1)
					});
				}
			}

			// Chicken
			if (dow == "MON") {
				if (flags['new_chick'] == 1) {
					a.push({'desc':"SAVE EGG FOR INCUBATION", 'imp':true});
				}
				chicken_actions.push({'desc':"Sell Chicken", 'cid':['v_chickens', 'v_gold'], 'val':[-1, 500], 'iid':get_npc_id('doug'), 'imp':true});
				if (vars['feed'] < 4) {
					var tmp_seeds = (((10 - vars['feed']) < Math.floor(vars['gold'] / 10)) ? (10 - vars['feed']) : Math.floor(vars['gold'] / 10));
					if (tmp_seeds > 0) {
						chicken_actions.push({'desc':"Buy " + tmp_seeds + " Feed", 'cid':['v_gold', 'v_feed'], 'val':[10 * tmp_seeds, tmp_seeds], 'sr':true});
					}
				}
				if (flags['new_chick'] == 1) {
					chicken_actions.push({'desc':"New Chick", 'iid':chicken_id, 'cid':["v_new_chicken_days", "f_new_chick"],
							'val':[d + _CHICK_GROW_SLEEPS, -1], 't0':"Incubate", 'imp':true, 'sr':(dow == "MON" && vars['chickens'] > 1)
					});
					chicken_actions.push({'desc':"Incubate", 'cid':"f_new_chick", 'val':(_CHICK_BORN_SLEEPS + 1), 'sr':true});
				}
			} else {
				if (vars['chickens'] > 0 && flags['new_chick'] <= 1) {
					if (flags['new_chick'] != 1 && vars['new_chicken_days'].length > 0 && parseInt(vars['new_chicken_days'].substr(0,3)) == d) {
						a.push({'desc':"Bring Chicken Outside", 'iid':chicken_id, 'sr':true, 'val':1, 'cid':'f_chicken_outside'});
					}

					// new chk | incubate
					if (flags['new_chick'] == 1) {
						chicken_actions.push({'desc':"New Chick", 'iid':chicken_id, 'cid':["v_new_chicken_days", "f_new_chick"], 'sel':false,
								'val':[d + _CHICK_GROW_SLEEPS, -1], 't0':"Incubate", 'red':true
						});
					}
					chicken_actions.push({'desc':"Incubate", 'cid':"f_new_chick", 'val':(_CHICK_BORN_SLEEPS + 1),
							'iid':chicken_id, 'sr':(flags['new_chick'] == 1), 'sel':(d == 9), 'red':(d > 12), 'imp':(d == 9)
					});
					if (flags['new_chick'] == 1) { chicken_actions[chicken_actions.length - 1]['t3'] = "New Chick"; }
				}
			}
			if (dow != "MON") {
				a = a.concat(chicken_actions);
			}

			if (is_sunny == 1 && d < 60 && flags['corn_planted'] == 1) {
				// Water Corn
				a.push({'desc':"Equip Watering Can"});
				a.push({'desc':"Water Corn", 'cid':['v_watering_can_fill', 'v_corn_waters'], 'val':[-10, 1], 'sr':true, 'sel':false});
				a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sel':false, 'sr':true});
				if (vars['corn_waters'] >= _CORN_GROW_DAYS && !is_festival(d)) {
					a.push({'desc':"Corn for Ann"});
				}
			}

			if (is_festival(d)) {
				// 9 / 39 -  Veg Fest
				// 24 / 54 - Sea Fest

				// Sea Festival
				if (d == 54) { // Swim Fest
					a.push({'desc':"Go to the Beach", 'imp':true});
					a.push({'desc':"Win Swim Festival", 'iid':mayor_id, 'imp':true,
							'cid':["f_photo_swimming", jeff_id, grey_id, harris_id, kai_id, cliff_id, 'v_happiness', 'f_dontsave'],
							'val':[1, 8, 8, 8, 8, 8, 5, 1]
					});
				}
			} else {
				// ANN
				a = ranch_stuff_sum(a, dow, is_sunny, chicken_actions);

				// Gifts for Villagers
				if (!mtn_visit) {
					a.push({'desc':"ed, flower, walnut"});
					// Cliff
					if (["FRI", "SAT"].includes(dow) && is_sunny == 1) {
						if (aff[cliff_id] == 5 || aff[cliff_id] == 0) {
							// Cliff's intro gives affection to GRAY
							a.push({'desc':"Meet", 'cid':grey_id, 'val':4, 'iid':cliff_id, 'sel':false});
						}
						a.push({'desc':"Talk (Fish Tent) [50%]", 'cid':cliff_id, 'val':2, 'sel':false, 'sr':(aff[cliff_id] == 5 || aff[cliff_id] == 0)});
						a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
						a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
					}

					// SPRITE
					a.push({'desc':"Talk", 'cid':sprite_id, 'val':1, 'sel':false, 'red':(aff[sprite_id] >= (_SPRITE_WINE_MIN - 1))});
					a.push({'desc':"Flower", 'cid':sprite_id, 'val':2, 'sel':false, 'sr':true});
				} else {
					// Library closed; Mountain Visit

					// Strength Wish Power Berry
					if (vars['chickens'] > 0 && flags['berry_strength'] == 0 && d != 31) {
						a.push({'desc':"Wish for Strength (Middle Option)", 'cid':'f_berry_strength', 'val':1, 'iid':get_npc_id('goddess'), 'sel':false});
					}
					// Blue Mist Flower
					if (flags['photo_popuri'] == 0) {
						a.push({'desc':"Blue Mist Flower Glitch", 'iid':popuri_id,
							'cid':['f_photo_popuri', 'v_openers'], 'val':[1, 1], 'imp':true
						});
					}

					// SPRITE
					a.push({'desc':"Talk", 'cid':sprite_id, 'val':1, 'sel':(!["SAT", "SUN"].includes(dow) && aff[sprite_id] < 45), 'red':(aff[sprite_id] >= (_SPRITE_WINE_MIN - 1))});
					a.push({'desc':"Flower", 'cid':sprite_id, 'val':2, 'sr':true, 'sel':(a[a.length - 1]['sel'])});

					// MARIA
					if (aff[maria_id] >= (_DREAM_EVENT_MIN - 1 - _MUS_BOX_AFF)) {
						a.push({'desc':"NO MUSBOX FOR MARIA", 'iid':maria_id, 'red':true});
					}
					a.push({'desc':"Talk (MTN / CHUR)", 'cid':maria_id, 'val':1, 't2':"MusBox",
							'sel':(aff[maria_id] < (_DREAM_EVENT_MIN - 1) && !["SAT", "SUN", "WED"].includes(dow)),
							'red':(aff[maria_id] >= (_DREAM_EVENT_MIN - 1))});
					if (aff[maria_id] < (_DREAM_EVENT_MIN - 1 - _MUS_BOX_AFF)) {
						a[a.length - 1]['t2'] = "MusBox";
						a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
								'sel':false, 't2':a[a.length - 1]['desc']
						});
					}
					if (aff[maria_id] < (_DREAM_EVENT_MIN - 1 - 2)) {
						a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true, 'sel':(!["SAT", "SUN", "WED"].includes(dow))});
					}

					// ANN
					if (dow == "SUN") {
						a.push({'desc':"Talk (MTN)", 'cid':ann_id, 'val':1, 'sel':false, 't2':" MusBox"});
						a.push({'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':false, 't2':a[a.length - 1]['desc']});
						a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':false, 't2':"Corn / Potato"});
						a.push({'desc':"Corn / Potato", 'cid':[ann_id, 'v_potatoes'], 'val':[3, -1], 'sr':true, 'sel':false, 't2':" Gift"});
					}
					
					// Cliff
					if (!["TUES", "WED"].includes(dow)) {
						var cliff_loc = " (Fish Tent) [50%]";
						if (dow == "THURS") { cliff_loc = " (Carp House)"; }
						if (dow == "SUN") { cliff_loc = " (Carp House) [50%]"; }
						if (dow == "MON") { cliff_loc = " (Hot Springs)"; }
						if (aff[cliff_id] == 5 || aff[cliff_id] == 0) {
							// Cliff's intro gives affection to GRAY
							a.push({'desc':"Meet", 'cid':grey_id, 'val':4, 'iid':cliff_id, 'sel':false, 'imp':true});
						}
						a.push({
							'desc':("Talk" + cliff_loc), 'cid':cliff_id, 'val':2, 'sel':false,
							'sr':(aff[cliff_id] == 5 || aff[cliff_id] == 0), 'imp':(dow == "MON")
						});
						a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
						a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
					}
				}

				// CORN
				if (d == 31) {
					a.push({'desc':"Buy Corn", 'iid':get_npc_id('lillia'), 'imp':true});
				}

				// ELLI
				// "Gift " <- one space
				// "Talk " <- one space
				// "Musbox " <- one space
				if (dow != "MON") {
					var elli_sick_event = (is_sunny == 0 && aff[elli_id] >= _SICK_EVENT_MIN && flags['sick_elli'] == 0);
					if (dow != "SUN" && ((!elli_sick_event) || dow == "WED")) {
						a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : "Talk "), 'cid':elli_id, 'val':1, 't2':"MusBox ",
							'sel':(d == 31 || (is_sunny == 1 && (!["SAT", "SUN", "WED"].includes(dow) || (elli_sick_event && dow == "WED"))))
						});
						a.push({'desc':"MusBox ", 'sel':false, 't2':a[a.length - 1]['desc'],
							'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						});
						a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true,
							't2':((vars['chickens'] > 0) ? "Egg " : "M/L Fish"), 'sel':false
						});
						a.push({'desc':"Egg ", 'sr':true, 't2':"Gift ",
							'sel':(d == 31 || (is_sunny == 1 && (!["SAT", "SUN", "WED"].includes(dow) || (elli_sick_event && dow == "WED")))),
							'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
							'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
						});
					}
					if (elli_sick_event) {
						a.push({'desc':"Sick Event (Bakery)", 'cid':[elli_id, 'f_sick_elli'], 'val':[_SICK_EVENT_AFF, 1],
							'red':(aff[elli_id] >= ((route_id == 0) ? _PHOTO_MIN : 250)),
							'sel':(aff[elli_id] < ((route_id == 0) ? _PHOTO_MIN : 250))
						});
					}
				}
				// ELLI DREAM ANKLE
				if (flags['dream_elli'] == 0 && aff[elli_id] >= _DREAM_EVENT_MIN) {
					a.push({'desc':"DREAM (Village)", 'cid':[elli_id, 'f_dream_elli'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
				}
				if (flags['ankle_elli'] == 0 && aff[elli_id] >= (_ANKLE_EVENT_MIN - _MUS_BOX_AFF - 4)) {
					a.push({'desc':"ANKLE (Mtn)", 'cid':[elli_id, 'f_ankle_elli'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':false, 'sr':(flags['dream_elli'] == 0)});
				}

				// MAYOR
				if (dow == "SUN") {
					a.push({'desc':"Talk (Church)", 'cid':mayor_id, 'val':3, 'sel':false, 'red':true});
					a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':false});
					// Affection should keep up with Ricks.
					// If greater, gifts to the mayor arent required.
				} else if (is_sunny) {
					if (flags['cutscene_watermelon'] == 0 && aff[ann_id] >= _CUTSCENE_WATERMELON_MIN && aff[maria_id] >= _CUTSCENE_WATERMELON_MIN) {
						a.push({'desc':"WARNING: Cutscene plays at 2nd Village Screen", 'red':true});
						a.push({'desc':"Watermelon Cutscene", 'val':1, 'cid':'f_cutscene_watermelon', 'sr':true, 'sel':false});
					}
					a.push({'desc':"Talk", 'cid':mayor_id, 'val':3,
						'sel':((d == 31 || !["SAT", "SUN", "WED"].includes(dow)) && aff[mayor_id] < _PARTY_ATTEND_MIN),
						'red':(dow == "SUN" || aff[mayor_id] >= _PARTY_ATTEND_MIN)
					});
					if (dow == "SAT") {
						a[a.length - 1]['desc'] += " (" + ((d >= 42) ? "Lib" : "Ricks Shop") + " 50%)";
						a[a.length - 1]['sel'] = false;
					}
					a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true,
						'sel':((d == 31 || !["SAT", "SUN", "WED"].includes(dow)) && aff[mayor_id] < aff[rick_id])
					});
				}

				// RICK
				// "Talk  " <- two spaces
				if (is_sunny == 1) {
					if (dow == "THURS") {
						// ANN in Ricks shop
						// " Gift" <- -1 spaces
						// "Musbox  " <- 2 spaces
						a.push({'desc':"Talk (Rick Shop)", 'cid':ann_id, 'val':1, 'sel':false, 't2':"MusBox  "});
						a.push({'desc':"MusBox  ", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':false, 't2':a[a.length - 1]['desc']});
						a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':false});
						a.push({'desc':"Corn / Potato", 'cid':[ann_id, 'v_potatoes'], 'val':[3, -1], 'sr':true, 't2':" Gift", 'sel':false});
					}
					if (!["WED", "SUN"].includes(dow)) {
						a.push({'desc':"Talk  ", 'cid':rick_id, 'val':3, 'sel':(dow != "SAT"), 't0':"Rick Fix"});
						a.push({'desc':"Rick Fix", 'sr':true, 'sel':(dow != "SAT"), 't3':"Talk  ", 'cid':['f_old_mus_box', 'f_new_mus_box'], 'val':[-1, 1]});
						a.push({'desc':"Gift", 'sr':true, 'sel':false, 'cid':rick_id, 'val':3});
					} else if (dow == "SUN") {
						if (flags['new_mus_box'] == 1) {
							a.push({'desc':"DONT TALK TO RICK WITH A FIXED MUSIC BOX!", 'imp':true, 'iid':rick_id});
						}
						a.push({'desc':"Talk (Town Square) ", 'cid':rick_id, 'val':3, 'sr':(aff[rick_id] == 0), 'sel':false, 't0':"Rick Fix"});
						a.push({'desc':"Rick Fix", 'sr':true, 'sel':false, 't3':"Talk (Town Square) ", 'cid':['f_old_mus_box', 'f_new_mus_box'], 'val':[-1, 1]});
						a.push({'desc':"Gift", 'sr':true, 'sel':false, 'cid':rick_id, 'val':3});
					}
				}

				// MARIA SICK EVENT
				if (is_sunny == 0 && dow == "MON" && aff[maria_id] >= _SICK_EVENT_MIN && flags['sick_maria'] == 0 && aff[maria_id] < (_DREAM_EVENT_MIN - _SICK_EVENT_AFF)) {
					a.push({'desc':"Sick Event", 'cid':[maria_id, 'f_sick_maria'], 'val':[_SICK_EVENT_AFF, 1]});
					a.push({'desc':"Talk", 'cid':mayor_id, 'val':3});
					a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':(aff[mayor_id] < aff[rick_id])});
					cur_maria_aff += _SICK_EVENT_AFF;
				} else if (!mtn_visit) {
					// MARIA
					if (aff[maria_id] >= (_DREAM_EVENT_MIN - 1 - _MUS_BOX_AFF)) {
						a.push({'desc':"NO MUSBOX FOR MARIA", 'iid':maria_id, 'imp':true});
					}
					a.push({'desc':"Talk (Library)", 'cid':maria_id, 'val':1, 't2':"MusBox", 'sel':false, 'red':(aff[maria_id] == (_DREAM_EVENT_MIN - 1))});
					if (aff[maria_id] < (_DREAM_EVENT_MIN - 1 - _MUS_BOX_AFF)) {
						a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
								'sel':false, 't2':a[a.length - 1]['desc']
						});
					}
					if (aff[maria_id] < (_DREAM_EVENT_MIN - 1 - 2)) {
						a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true, 'sel':false});
					}
				}

				if (d == 60 && aff[karen_id] < 200 && is_sunny == 1) {
					a.push({'desc':"Dog Karen to 255 (Vineyard)", 'cid':karen_id, 'val':(255 - aff[karen_id]), 'sel':false});
					//a.push({'desc':"DONT SLEEP TONIGHT! STAY UP ALL NIGHT!", 'imp':true});
					a.push({'desc':"Day Skipped", 'cid':['v_day', 'f_dontsave'], 'val':[1, 1], 'sr':true, 'sel':false});
				}

				if (d == 31) { // Fireworks Festival
					// CORN
					a.push({'desc':"Equip Corn"});
					a.push({'desc':"Plant Corn", 'iid':get_npc_id('lillia'), 'cid':['v_gold', 'f_corn_planted'], 'val':[-300, 1], 'sr':true});
					a.push({'desc':"Equip Watering Can"});
					a.push({'desc':"Water Corn", 'cid':['v_watering_can_fill', 'v_corn_waters'], 'val':[-10, 1], 'sr':true});
					a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true, 'sel':false});
					a = visit_bar(a, dow, is_sunny, true);
					a.push({'desc':"Fireworks (Ranch)", 'cid':[ann_id, 'f_dontsave'], 'val':[5, 1]});
					a.push({'desc':"FAST TEXT GLITCH", 'sr':true});
					if (aff[ann_id] >= 55) {
						// Bonus Sparkler Scene at 55 aff or higher
						a[a.length - 2]['cid'].push('v_happiness');
						a[a.length - 2]['val'].push(5);
					}
				} else if (dow != "SUN" && !(is_sunny == 1 && aff[maria_id] >= (_PHOTO_MIN - _DREAM_EVENT_AFF) && flags['dream_maria'] == 0)){
					if (flags['wine_from_duke'] == 0) {
						a = visit_bar(a, dow, is_sunny, false);
					}
				}
			}

			// Horse Affection
			if (flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"])) {
				a.push({'desc':"Equip Brush", 'iid':horse_id});
			}
			a.push({'desc':"Whistle Horse", 'val':1, 'cid':horse_id, 'sr':(flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"]))});
			a.push({'desc':((flags['horse'] == 1) ? "Ride": "Talk"), 'val':1, 'cid':a[a.length - 1]['cid'], 'sr':true, 'sel':false});
			if (flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"])) {
				a.push({'desc':"Brush", 'val':2, 'cid':horse_id, 'sr':true, 'sel':false});
			}

			// Feed dog
			a.push({'desc':"Feed Dog", 'cid':dog_id, 'val':2, 'sel':false});
		
			if (d == 60 && aff[karen_id] > _DREAM_EVENT_MIN) { a.push({'desc':"Harvest Corn", 'imp':true}); }
		} else {
			// Today is a Typhoon
			if (vars['chickens'] > 0) {
				a.push({'desc':"Chickens Outside?", 'val':[1, -1 * vars['chickens']], 'cid':['f_chicken_funeral', 'v_chickens'], 'sel':(flags['chicken_outside'] == 1), 'iid':chicken_id});
			}
		}
	} // End of Not Chicken Funeral

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

function ranch_stuff_sum(tmp_act = [], dow = get_dow(vars['day']), is_sunny = 1, chicken_actions = []) {
	if (dow != "THURS") {
		var ann_id = get_npc_id('ann');
		var elli_id = get_npc_id('elli');
		var cliff_id = get_npc_id('cliff');

		if (aff[ann_id] < _PHOTO_MIN) {
			// ANN
			// " Talk" <- -1 spaces
			// " Gift" <- -1 spaces
			// " Musbox" <- -1 spaces
			tmp_act.push({
				'desc':(" Talk (" + ((is_sunny == 0) ? "Barn)" : "Ranch)")),
				'cid':ann_id, 'val':1, 'red':(dow == "SUN"),
				'sel':(is_sunny == 1 && flags['new_mus_box'] == 0 && !["WED", "SAT", "SUN"].includes(dow)), 't2':" MusBox"
			});
			tmp_act.push({
				'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
				'sel':(is_sunny == 1 && flags['new_mus_box'] == 1 && !["WED", "SAT", "SUN"].includes(dow)), 't2':tmp_act[tmp_act.length - 1]['desc']
			});
			tmp_act.push({
				'desc':" Gift", 'cid':ann_id, 'sr':true,
				'val':((vars['day'] == 44) ? 3 : 1), 't2':"Corn / Potato",
				'sel':(is_sunny == 1 && vars['potatoes'] <= 0 && vars['corn_waters'] < _CORN_GROW_DAYS && !["WED", "SAT", "SUN"].includes(dow))
			}); 
			tmp_act.push({
				'desc':"Corn / Potato", 'cid':[ann_id, 'v_potatoes'], 'sr':true,
				'val':[((vars['day'] == 44) ? 5 : 3), -1], 't2':" Gift",
				'sel':(is_sunny == 1 && !["WED", "SAT", "SUN"].includes(dow) && (vars['potatoes'] > 0 || vars['corn_waters'] >= _CORN_GROW_DAYS))
			});
			if (dow == "SUN" && is_sunny == 0 && aff[ann_id] >= _SICK_EVENT_MIN && flags['sick_ann'] == 0 && aff[ann_id] < _PHOTO_MIN) {
				// ANN SICK EVENT
				tmp_act.push({'desc':"Sick Event", 'cid':[ann_id, 'f_sick_ann'], 'val':[_SICK_EVENT_AFF, 1]});
			}

			// Cliff
			if (["WED", "TUES"].includes(dow) && is_sunny == 1) {
				var no_beach = (dow == "WED");
				if (dow == "TUES" && aff[elli_id] >= _CUTSCENE_BEACH_MIN && flags['cutscene_beach'] == 0) {
					tmp_act.push({'desc':"WARNING: Cutscene plays at Beach", 'red':true});
					tmp_act.push({'desc':"Beach Cutscene", 'sr':true, 'sel':false, 'cid':'f_cutscene_beach', 'val':1});
					no_beach = true;
				}
				if (aff[cliff_id] == 5 || aff[cliff_id] == 0) {
					// Cliff's intro gives affection to GRAY
					tmp_act.push({'desc':"Meet", 'cid':grey_id, 'val':4, 'sel':false, 'iid':cliff_id, 'red':no_beach});
				}
				tmp_act.push({
					'desc':("Talk (" + ((dow == "WED") ? "Ranch" : "Beach") + ")"), 'red':(no_beach && dow != "WED"),
					'cid':cliff_id, 'val':2, 'sel':(!no_beach && vars['day'] < 41), 'sr':(aff[cliff_id] == 5 || aff[cliff_id] == 0)
				});
				tmp_act.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':(vars['day'] < 41 && !no_beach && vars['chickens'] <= 1), 't2':"   Egg   ", 'sr':true});
				tmp_act.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':(vars['day'] < 41 && !no_beach && vars['chickens'] > 1), 't2':"   Gift   ", 'sr':true});
			}

			// DOUG
			tmp_act = tmp_act.concat(chicken_actions);
			if (dow != "MON" && vars['chickens'] > 0) {
				tmp_act.push({'desc':"Sell Chicken", 'cid':['v_chickens', 'v_gold'], 'val':[-1, 500], 'iid':get_npc_id('doug'), 'sel':(vars['chickens'] > 3), 'red':true});
			}

			if (is_sunny == 1 && dow == "MON") {
				// ELLI Beach
				// "Gift " <- 1 space
				if (aff[elli_id] >= _CUTSCENE_BEACH_MIN && flags['cutscene_beach'] == 0) {
					// Beach cutscene between Karen and Elli occurs when Elli is >= 145-ish
					tmp_act.push({'desc':"WARNING: Cutscene plays at Beach", 'red':true});
					tmp_act.push({'desc':"Beach Cutscene", 'sr':true, 'sel':false, 'cid':'f_cutscene_beach', 'val':1});
					tmp_act.push({'desc':"Talk (Beach)", 'cid':elli_id, 'val':1, 't2':"MusBox ", 'red':true, 'sel':false, 't3':"Beach Cutscene"});
					tmp_act.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':false, 't2':tmp_act[tmp_act.length - 1]['desc'], 't3':"Beach Cutscene"});
				} else {
					tmp_act.push({'desc':"Talk (Beach)", 'cid':elli_id, 'val':1, 't2':"MusBox "});
					tmp_act.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':false, 't2':tmp_act[tmp_act.length - 1]['desc']});
				}
				tmp_act.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 
					't2':((vars['chickens'] > 0) ? "Egg " : "M/L Fish"),
					'sel':((aff[elli_id] < _CUTSCENE_BEACH_MIN || flags['cutscene_beach'] == 1) && (vars['chickens'] == 0 || flags['new_chick'] < 2))
				});
				tmp_act.push({
					'desc':((vars['chickens'] > 0) ? "Egg " : "M/L Fish"), 'sr':true, 't2':"Gift ",
					'sel':((aff[elli_id] < _CUTSCENE_BEACH_MIN || flags['cutscene_beach'] == 1) && (vars['chickens'] > 0 && flags['new_chick'] >= 2)),
					'cid':((vars['chickens'] > 0 && flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
					'val':((vars['chickens'] > 0) ? (flags['recipe_elli'] ? 4 : [1, 6]) : 3)
				});
			}
		}
	}
	return tmp_act;
}

function visit_bar(tmp_act = [], dow = get_dow(vars['day'], true), is_sunny = 1, imp_visit = true) {
	var duke_id = get_npc_id('bartender');
	var duke_exists = false;
	var karen_id = get_npc_id('karen');
	for (let key in tmp_act) {
		duke_exists = (duke_exists || tmp_act[key]['cid'] == duke_id);
	}
	if (dow != "SUN" && !duke_exists) {
		tmp_act.push({'desc':("Talk"), 'cid':duke_id, 'val':3,
			      'sel':(imp_visit || ((dow == "MON" || (vars['day'] < 11 && !["SAT", "WED"].includes(dow))) && aff[duke_id] < 33)),
			      'imp':(imp_visit || (vars['day'] >= 57 && aff[duke_id] < 33))
		});
		tmp_act.push({'desc':"Gift", 'cid':duke_id, 'val':3, 'sel':(tmp_act[tmp_act.length - 1]['sel']), 'sr':true});
		if (flags['wine_from_duke'] == 0) {
			tmp_act.push({'desc':"Get Wine", 'cid':'f_wine_from_duke', 'val':1, 'sr':true, 'sel':false});
		}
		if (aff[duke_id] < 33) {
			tmp_act.push({'desc':("(" + Math.round((33 - aff[duke_id]) / 6) + " visits left)"), 'sr':true});
		}
	}
	return tmp_act;
}
