get_actions_girl_photos_fall1 = function (a = [], d = 3, g = 300, is_sunny = 1) {
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
	var sprite_recipe_aff = 5;
	
	if (d == 65) { // Fall 5
		flags['dontsave'] = true;
	} else if (d == 66 || d == 68) { // Fall 6 & 8
		a.push({'desc':"Check Weather, RESET IF RAINY TOMORROW", 'imp':true});
	}
	if ([67, 69].includes(d) && is_sunny == 0) {
		a.push({'desc':"RESET: Rainy on Photo Day", 'red':true});
	}

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

	if (is_festival(d)){
		if (d == 72 && aff[ann_id] < _PHOTO_MIN) { // Fall 12
			// Harvest Festival
			a.push({'desc':"Dance with Ann", 'val':10, 'cid':ann_id});
			a.push({'desc':"Talk", 'val':2, 'cid':ann_id, 'sr':true});
		}
	} else {
		// Music Box Dig
		if (flags['old_mus_box'] == 0 && is_sunny == 1) {
			// Dig music box
			a.push({'desc':"Equip hoe", 'iid':get_npc_id("musbox"), 'red':(aff[ann_id] > _PHOTO_MIN && aff[elli_id] > _PHOTO_MIN)});
			a.push({'desc':"Dig Music Box", 'cid':'f_old_mus_box', 'val':1, 'sr':true,
					'sel':(flags['old_mus_box'] == 0 && !["SUN", "SAT", "WED"].includes(dow) && (aff[ann_id] < _PHOTO_MIN || aff[elli_id] < _PHOTO_MIN))
			});
			a.push({'desc':"Corn for Ann"});
		}

		// ANN ANKLE
		if (flags['ankle_ann'] == 0 && aff[ann_id] >= _ANKLE_EVENT_MIN && is_sunny == 1) {
			// ANKLE EVENT
			a.push({'desc':"ANKLE (Crossroads)", 'cid':[ann_id, 'f_ankle_ann'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':false});
		}

		if (d >= 83 && d <= 87) {
			// Bridge Work
			// Fall 83, 84, 85, 86, 87
			//	    Sat Sun Mon Tue Wed
			a.push({'desc':"Bridge Work", 'val':[5, 5, 5, 1, 1000], 'iid':get_npc_id('mas_carpenter'), 'sel':false,
					'cid':[get_npc_id('mas_carpenter'), get_npc_id('carpenter_top'), get_npc_id('carpenter_bot'), 'v_bridge_days_worked', 'v_gold'],
			});
		}

		// ANN DREAM
		if (flags['dream_ann'] == 0 && aff[ann_id] >= _DREAM_EVENT_MIN && is_sunny == 1) {
			a.push({'desc':"Ignore Ann if she is crouching", 'imp':true});
			a.push({'desc':"DREAM (Cave)", 'cid':[ann_id, 'f_dream_ann'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
		}

		if (flags['new_mus_box'] == 1) {
			a = ranch_gp_sumy1(a, d, g, is_sunny);
		}

		// SPRITE
		// "  Talk" <- -3 spaces
		// "  Gift" <- -3 spaces
		if (flags['vineyard_restored'] == 0 && d < 67) {
			a.push({'desc':"   Talk", 'cid':sprite_id, 'val':1, 'imp':(aff[sprite_id] >= (_SPRITE_WINE_MIN - 5))});
			a.push({'desc':"   Gift", 'cid':sprite_id, 'val':1, 'sr':true, 't2':"Mushroom", 'sel':false});
			a.push({'desc':"Mushroom", 't2':"   Gift", 'sr':true, 'sel':(aff[sprite_id] < (_SPRITE_WINE_MIN + 1)),
					'cid':((flags['recipe_sprite'] == 0 && aff[sprite_id] >= 30) ? ['f_recipe_sprite', sprite_id] : sprite_id),
					'val':((flags['recipe_sprite'] == 0 && aff[sprite_id] >= 30) ? [1, sprite_recipe_aff] : 2)
			});
		}

		// Grapes for Bartender on Fall 1
		if ([62, 65].includes(d) && flags['wine_from_duke'] == 0 && is_sunny == 1) {
			a.push({'desc':"Get Grapes for bartender", 'imp':true, 'iid':get_npc_id('bartender')});
		}

		// Goddess
		if (flags['vineyard_restored'] == 0 && flags['wine_from_duke'] == 1) {
			// Restore the Vineyard
			a.push({'desc':"Restore the Vineyard", 'cid':['f_vineyard_restored', 'f_dontsave'], 'val':[1, 1],
					'iid':get_npc_id('goddess'), 'imp':true, 'sel':(aff[sprite_id] >= (_SPRITE_WINE_MIN - 5))
			});
		} else if ([65, 67].includes(d)) {
			// Wish for Weather
			a.push({'desc':"Wish for Weather (Top)", 'iid':get_npc_id('goddess'), 'imp':true});
		}

		// Blue Mist Flower
		if (flags['photo_popuri'] == 0) {
			a.push({'desc':"Blue Mist Flower Glitch", 'iid':popuri_id, 'cid':'f_photo_popuri', 'val':1, 'sel':false});
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
						'val':1, 'sel':(aff[elli_id] < _PHOTO_MIN && (d == 31 || !["WED", "SUN"].includes(dow))), 't2':"MusBox ",
						'red':(aff[elli_id] > _PHOTO_MIN)
				});
				a.push({'desc':"MusBox ", 'sel':false, 't2':a[a.length - 1]['desc'],
						'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
				});
				a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"Egg ", 'sel':false});
				a.push({'desc':"Egg ", 'sr':true, 't2':"Gift ",
						'sel':(aff[elli_id] < _PHOTO_MIN && (d == 31 || !["WED", "SUN"].includes(dow))),
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
			if (flags['new_mus_box'] == 1) {
				a.push({'desc':"DONT TALK TO RICK WITH A FIXED MUSIC BOX!", 'imp':true, 'iid':rick_id});
			}
			if (dow == "THURS") {
				// ANN in Ricks shop
				// " Gift" <- -1 spaces
				// "Musbox  " <- 2 spaces
				a.push({'desc':"Talk (Rick Shop)", 'cid':ann_id, 'val':1, 't2':"MusBox  ", 'sel':false});
				a.push({'desc':"MusBox  ", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						't2':a[a.length - 1]['desc'], 'sel':(aff[ann_id] < _PHOTO_MIN)
				});
				a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':false, 't2':"Corn"});
				a.push({'desc':"Corn", 'cid':[ann_id, 'v_potatoes'], 'val':[3, -1],
						'sr':true, 't2':" Gift", 'sel':(aff[ann_id] < _PHOTO_MIN)
				});
			}
			if (!["WED", "SUN"].includes(dow)) {
				a.push({'desc':"Talk  ", 'cid':rick_id, 'val':3, 't0':"Rick Fix",
						'sel':(dow != "SAT" && (aff[ann_id] <= _PHOTO_MIN || aff[elli_id] <= _PHOTO_MIN)),
						'red':(aff[ann_id] > _PHOTO_MIN && aff[elli_id] > _PHOTO_MIN)
				});
				a.push({'desc':"Rick Fix", 'sr':true, 'sel':(dow != "SAT" && (aff[ann_id] <= _PHOTO_MIN || aff[elli_id] <= _PHOTO_MIN)),
						't3':"Talk  ", 'cid':['f_old_mus_box', 'f_new_mus_box'], 'val':[-1, 1]
				});
				a.push({'desc':"Gift", 'sr':true, 'sel':false, 'cid':rick_id, 'val':3});
			} else if (dow == "SUN") {
				a.push({'desc':"Talk (Town Square) ", 'cid':rick_id, 'val':3, 'sr':(aff[rick_id] == 0), 'sel':false, 't0':"Rick Fix"});
				a.push({'desc':"Rick Fix", 'sr':true, 'sel':false, 't3':"Talk (Town Square) ", 'cid':['f_old_mus_box', 'f_new_mus_box'], 'val':[-1, 1]});
				a.push({'desc':"Gift", 'sr':true, 'sel':false, 'cid':rick_id, 'val':3});
			}
		}

		if (flags['new_mus_box'] == 0) {
			a = ranch_gp_sumy1(a, d, g, is_sunny);
		}

		if ([65, 67, 69].includes(d) || (d < 63 && flags['wine_from_duke'] == 0)) {
			if (d == 69 && flags['dream_karen'] == 0) {
				a.push({'desc':"Dream Warp", 'cid':[karen_id, 'f_dream_karen'], 'val':[_DREAM_EVENT_AFF, 1], 'imp':true});
			}
			if (d == 67) {
				var kent_id = get_npc_id('kent');
				a.push({'desc':"Kent Spam (Fish Tent/Town Square)", 'cid':kent_id, 'val':255, 'imp':(is_sunny == 1), 'sel':(is_sunny == 1)});
				a.push({'desc':"Farm Warp Glitch", 'sr':true});
			}
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
			}
			if ([67, 69].includes(d)) {
				a.push({'desc':(((d == 67) ? "Karen" : "Elli") + " Photo at 6 PM"), 'imp':(is_sunny == 1), 'val':[_PHOTO_EVENT_AFF, 1, 1], 'sel':(is_sunny == 1)});
				a[a.length - 1]['cid'] = ((d == 67) ? [get_npc_id('karen'), 'f_photo_karen', 'f_dontsave'] : [elli_id, 'f_photo_elli', 'f_dontsave']);
			}
		}
	}
	return a;
}

ranch_gp_sumy1 = function(a = [], d = vars['day'], g = 0, is_sunny = 1) {
		var ann_id = get_npc_id('ann');
		var dow = get_dow(d, true);
		// ANN
		if (dow != "THURS") {
			if (dow == "SUN" && is_sunny == 0 && aff[ann_id] >= _SICK_EVENT_MIN && flags['sick_ann'] == 0 && aff[ann_id] < _PHOTO_MIN) {
				// ANN SICK EVENT
				a.push({'desc':"Sick Event", 'cid':[ann_id, 'f_sick_ann'], 'val':[_SICK_EVENT_AFF, 1]});
			} else {
				// ANN
				// " Talk" <- -1 spaces
				// " Gift" <- -1 spaces
				// " Musbox" <- -1 spaces
				a.push({
					'desc':(" Talk (" + ((is_sunny == 0) ? "Barn)" : "Ranch)")),
					'cid':ann_id, 'val':1, 'red':(dow == "SUN" || aff[ann_id] > _PHOTO_MIN), 'sel':false, 't2':" MusBox"
				});
				a.push({
					'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
					'sel':(aff[ann_id] < _PHOTO_MIN && !["WED", "SUN"].includes(dow)), 't2':a[a.length - 1]['desc']
				});
				a.push({'desc':" Gift", 'cid':ann_id, 'sr':true, 'val':1, 't2':"Corn", 'sel':false});
				a.push({
					'desc':"Corn", 'cid':ann_id, 'sr':true, 'val':3, 't2':" Gift",
					'sel':(aff[ann_id] < _PHOTO_MIN && !["WED", "SUN"].includes(dow))
				});
			}
			if (vars['chickens'] > 0 && ![63, 64].includes(d) && !is_festival(d)) {
				a.push({'desc':"Sell Chicken", 'iid':get_npc_id('doug'),
						'cid':['v_chickens', 'v_gold'], 'val':[-1, 1500],
						'sel':((d >= 69 || vars['chickens'] > 1) && is_sunny == 1 && !["WED", "SUN"].includes(dow))
				});
			}
		} // End of NOT THURS
		return a;
}
