get_actions_girl_photos_sum1 = function (a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id('ann');
	var chicken_id = get_npc_id('chicken');
	var duke_id = get_npc_id('bartender');
	var elli_id = get_npc_id('elli');
	var karen_id = get_npc_id('karen');
	var maria_id = get_npc_id('maria');
	var popuri_id = get_npc_id('popuri');
	var rick_id = get_npc_id('rick');
	var sprite_id = get_npc_id('sprite');

	var dow = get_dow(d, true);
	var reset = "";

	if (is_sunny == 1 && !is_festival(d + 1) && vars['chickens'] > 0 && d != 60) {
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

	if (d == 31) {
		a.push({'desc':"Equip Watering Can"});
		a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true});
	}

	// Music Box Dig
	if (flags['old_mus_box'] == 0 && is_sunny == 1) {
		if (d == 31) {
			a.push({'desc':"NO MUSIC BOX DIG", 'imp':true});
			// Blue Mist Flower
			if (flags['photo_popuri'] == 0) {
				a.push({'desc':"Blue Mist Flower Glitch", 'iid':popuri_id, 'cid':'f_photo_popuri', 'val':1,
						'sr':(vars['chickens'] > 0 && flags['berry_strength'] == 0), 'sel':false
				});
			}
		} else if (!is_festival(d)){
			// Dig music box
			a.push({'desc':"Equip hoe", 'iid':get_npc_id("musbox")});
			a.push({'desc':"Dig Music Box", 'cid':'f_old_mus_box', 'val':1, 'sr':true, 'sel':(!["SAT", "SUN", "WED"].includes(dow))});
		}
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
		}
		if (flags['chicken_outside'] == 0 && is_sunny == 1) {
			a[a.length - 1]['t1'] = "Chicken Outside";
			a[a.length - 1]['t2'] = "Chicken Outside";
			a.push({'desc':"Chicken Outside", 'cid':'f_chicken_outside', 'val':1, 'imp':true, 'sr':true,
				't1':"Feed Chicken", 't2':"Feed Chicken", 'sel':(is_sunny == 1)
			});
		}

		if (!is_festival(d)) {
			if (!["WED", "SUN"].includes(dow) && (is_sunny == 0 || (d > 40 && dow != "MON"))) {
				a.push({'desc':"ed, flower, walnut"});
			}

			// SPRITE
			a.push({'desc':"Talk", 'cid':sprite_id, 'val':1, 'sel':(aff[sprite_id] < 45 && (d == 31 || !["WED", "SUN"].includes(dow))),
				'red':(aff[sprite_id] >= (_SPRITE_WINE_MIN - 1))
			});
			a.push({'desc':"Flower", 'cid':sprite_id, 'val':2, 'sr':true, 'sel':(a[a.length - 1]['sel'])});

			// Blue Mist Flower
			if (flags['photo_popuri'] == 0) {
				a.push({'desc':"Blue Mist Flower Glitch", 'iid':popuri_id,
					'cid':['f_photo_popuri', 'v_openers'], 'val':[1, 1], 'imp':true
				});
			}

			if (d < 41 && ["TUES", "WED", "FRI", "SAT"].includes(dow) && is_sunny == 1) {
				a.push({'desc':"Look for Karen in MTNS", 'iid':karen_id, 'imp':true});	
			}

			// MARIA in MTNS
			if (is_sunny == 1 && (d <= 40 || dow == "MON")) {
				a.push({'desc':"Talk (MTN / CHUR)", 'cid':maria_id, 'val':1, 't2':"MusBox",
					'sel':(flags['new_mus_box'] == 0 && (!["SUN", "WED"].includes(dow) || d == 31)),
					'red':(d > 31 && ["SUN", "WED"].includes(dow))
				});
				a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1],
					'sel':(flags['new_mus_box'] == 1 && (!["SUN", "WED"].includes(dow) || d == 31)),
					'sr':true, 't2':a[a.length - 1]['desc']});
				a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true, 'sel':(d == 31 || !["SUN", "WED"].includes(dow))});
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
				if (is_sunny == 0 && aff[elli_id] >= _SICK_EVENT_MIN && flags['sick_elli'] == 0) {
					a.push({'desc':"Sick Event (Bakery)", 'cid':[elli_id, 'f_sick_elli'], 'val':[_SICK_EVENT_AFF, 1],
						'red':(aff[elli_id] >= _PHOTO_MIN), 'sel':(aff[elli_id] < _PHOTO_MIN)    
					});
				} else if (dow != "SUN") {
					a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : "Talk "), 'cid':elli_id,
						'val':1, 'sel':(d == 31 || !["WED", "SUN"].includes(dow)), 't2':"MusBox "
					});
					a.push({'desc':"MusBox ", 'sel':false, 't2':a[a.length - 1]['desc'],
						'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
					});
					a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true,
						't2':((vars['chickens'] > 0) ? "Egg " : "M/L Fish"), 'sel':false
					});
					a.push({'desc':"Egg ", 'sr':true, 't2':"Gift ", 'sel':(d == 31 || !["WED", "SUN"].includes(dow)),
						'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
						'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
					});
				}
			}
			// ELLI DREAM ANKLE
			if (is_sunny == 1 && flags['dream_elli'] == 0 && aff[elli_id] >= _DREAM_EVENT_MIN) {
				a.push({'desc':"DREAM (Village)", 'cid':[elli_id, 'f_dream_elli'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
			}
			if (flags['ankle_elli'] == 0 && aff[elli_id] >= (_ANKLE_EVENT_MIN - _MUS_BOX_AFF - 4)) {
				a.push({'desc':"ANKLE (Mtn)", 'cid':[elli_id, 'f_ankle_elli'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':false, 'sr':(flags['dream_elli'] == 0)});
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

			// MARIA
			if (is_sunny == 0 && dow == "MON" && aff[maria_id] < _PHOTO_MIN && aff[maria_id] >= _SICK_EVENT_MIN && flags['sick_maria'] == 0) {
				// SICK EVENT
				a.push({'desc':"Sick Event", 'cid':[maria_id, 'f_sick_maria'], 'val':[_SICK_EVENT_AFF, 1]});
			} else if (d > 40 && dow != "MON") {
				// MARIA
				a.push({'desc':"Talk (Library)", 'cid':maria_id, 'val':1, 't2':"MusBox",
					'sel':(!["SUN", "WED"].includes(dow)), 'red':(["SUN", "WED"].includes(dow))
				});
				a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						'sel':(!["SUN", "SAT", "WED"].includes(dow) && is_sunny == 1), 't2':a[a.length - 1]['desc']
				});
				a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true, 'sel':(!["SUN", "SAT", "WED"].includes(dow))});
			} else if (is_sunny == 0) {
				a.push({'desc':"Talk (Mayor House)", 'cid':maria_id, 'val':1, 't2':"MusBox", 'sel':(flags['new_mus_box'] == 0)});
				a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						'sel':(flags['new_mus_box'] == 1), 't2':a[a.length - 1]['desc']
				});
				a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true});
			}

			if (dow != "THURS") {
				if (dow == "SUN" && is_sunny == 0 && aff[ann_id] >= _SICK_EVENT_MIN && flags['sick_ann'] == 0 && aff[ann_id] < _PHOTO_MIN) {
					// ANN SICK EVENT
					a.push({'desc':"Sick Event", 'cid':[ann_id, 'f_sick_ann'], 'val':[_SICK_EVENT_AFF, 1]});
				} else if (aff[ann_id] < _PHOTO_MIN) {
					// ANN
					// " Talk" <- -1 spaces
					// " Gift" <- -1 spaces
					// " Musbox" <- -1 spaces
					a.push({
						'desc':(" Talk (" + ((is_sunny == 0) ? "Barn)" : "Ranch)")),
						'cid':ann_id, 'val':1, 'red':(dow == "SUN"),
						'sel':(flags['new_mus_box'] == 0 && (d == 31 || !["WED", "SUN"].includes(dow))), 't2':" MusBox"
					});
					a.push({
						'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						'sel':(flags['new_mus_box'] == 1 &&(d == 31 || !["WED", "SUN"].includes(dow))), 't2':a[a.length - 1]['desc']
					});
					a.push({
						'desc':" Gift", 'cid':ann_id, 'sr':true,
						'val':((vars['day'] == 44) ? 3 : 1), 't2':"Corn / Potato",
						'sel':((d == 31 || !["WED", "SUN"].includes(dow)) && vars['potatoes'] <= 0 && vars['corn_waters'] < _CORN_GROW_DAYS)
					});
					a.push({
						'desc':"Corn / Potato", 'cid':[ann_id, 'v_potatoes'], 'sr':true,
						'val':[((vars['day'] == 44) ? 5 : 3), -1], 't2':" Gift",
						'sel':((d == 31 || !["WED", "SUN"].includes(dow)) && (vars['potatoes'] > 0 || vars['corn_waters'] >= _CORN_GROW_DAYS))
					});
				}
			} // End of NOT THURS

			if (dow == "MON" && is_sunny == 1) {
				// Elli on Beach
				a.push({'desc':"Talk (Beach)", 'cid':elli_id, 'val':1, 't2':"MusBox "});
				a.push({'desc':"MusBox ", 'sel':false, 't2':a[a.length - 1]['desc'],
					'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
				});
				a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true,
					't2':((vars['chickens'] > 0) ? "Egg " : "M/L Fish"), 'sel':(vars['chickens'] == 0)
				});
				a.push({'desc':"Egg ", 'sr':true, 't2':"Gift ", 'sel':(vars['chickens'] > 0),
					'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
					'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
				});
			}

			if (is_sunny == 1 && d < 60 && flags['corn_planted'] == 1) {
				// Water Corn
				a.push({'desc':"Equip Watering Can", 'imp':true});
				a.push({'desc':"Water Corn", 'cid':['v_watering_can_fill', 'v_corn_waters'], 'val':[-10, 1], 'sr':true, 'sel':(!["WED", "SUN"].includes(dow))});
				a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sel':false, 'sr':true});
				if (vars['corn_waters'] >= _CORN_GROW_DAYS && !is_festival(d)) {
					a.push({'desc':"Corn for Ann"});
				}
			}

			if (d == 60 && aff[karen_id] < _DREAM_EVENT_AFF) {
				if (is_sunny == 1) {
					a.push({'desc':"Dog Karen to 255 (Vineyard)", 'cid':karen_id, 'val':(255 - aff[karen_id]), 'imp':true});
					a.push({'desc':"DONT SLEEP TONIGHT! STAY UP ALL NIGHT!", 'imp':true});
					a.push({'desc':"Day Skipped", 'cid':'v_day', 'val':1, 'sr':true});
				} else if (aff[karen_id] > (_DREAM_EVENT_AFF - _SICK_EVENT_AFF)) {
					a.push({'desc':"Sick Event", 'cid':[karen_id, 'f_sick_karen'], 'val':[_SICK_EVENT_AFF, 1]});
					a.push({'desc':"DONT SLEEP TONIGHT! STAY UP ALL NIGHT!", 'imp':true});
					a.push({'desc':"Day Skipped", 'cid':'v_day', 'val':1, 'sr':true});
				}
			}

			if (d == 31) { // Fireworks Festival
				// CORN
				a.push({'desc':"Equip Corn"});
				a.push({'desc':"Plant Corn", 'iid':get_npc_id('lillia'), 'cid':['v_gold', 'f_corn_planted'], 'val':[-300, 1], 'sr':true});
				a.push({'desc':"Equip Watering Can"});
				a.push({'desc':"Water Corn", 'cid':['v_watering_can_fill', 'v_corn_waters'], 'val':[-10, 1], 'sr':true});
				a.push({'desc':"Dog to Yellow (MTNS)", 'cid':karen_id, 'val':(156 - aff[karen_id]), 'sel':false});
				a = visit_bar(a, dow, is_sunny, true);
				a.push({'desc':"Fireworks (Ranch)", 'cid':[ann_id, 'f_dontsave'], 'val':[5, 1]});
				a.push({'desc':"FAST TEXT GLITCH", 'sr':true});
			} else if (dow != "SUN" && !(is_sunny == 1 && aff[maria_id] >= (_PHOTO_MIN - _DREAM_EVENT_AFF) && flags['dream_maria'] == 0)){
				if (flags['wine_from_duke'] == 0) {
					a = visit_bar_sum(a, dow, is_sunny, (d == 31));
				}
			}

			if (d == 60 && aff[karen_id] > _DREAM_EVENT_MIN) { a.push({'desc':"Harvest Corn", 'imp':true}); }
		} // End of !festival
	} // End of !Typhoon
	return a;
}

visit_bar_sum=function(tmp_act = [], dow = get_dow(vars['day'], true), is_sunny = 1, imp_visit = true) {
	var duke_id = get_npc_id('bartender');
	var karen_id = get_npc_id('karen');
	if (dow != "SUN") {
		if (["MON", "THURS", "FRI", "SAT"].includes(dow) && is_sunny == 1 && aff[karen_id] < 100) {
			tmp_act.push({'desc':"Bring Dog to Bar", 'iid':get_npc_id('dog'), 'imp':true});
			tmp_act.push({'desc':"Dog to Yellow (BAR)", 'cid':karen_id, 'val':(156 - aff[karen_id]), 'sel':false});
		}
		tmp_act.push({'desc':"Talk", 'cid':duke_id, 'val':3,
			      'sel':(imp_visit || ((dow == "MON" || (vars['day'] < 11 && (d == 31 || !["WED", "SUN"].includes(dow)))) && aff[duke_id] < 33)),
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
