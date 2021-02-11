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

	// Music Box Dig
	if (flags['old_mus_box'] == 0 && is_sunny == 1) {
		if (d == 31) {
			a.push({'desc':"NO MUSIC BOX DIG (Farm visitors all day)", 'imp':true});
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

		if (is_sunny == 1 && d < 60 && flags['corn_planted'] == 1) {
			// Water Corn
			a.push({'desc':"Equip Watering Can"});
			a.push({'desc':"Water Corn", 'cid':['v_watering_can_fill', 'v_corn_waters'], 'val':[-10, 1], 'sr':true, 'sel':false});
			a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sel':false, 'sr':true});
			if (vars['corn_waters'] >= _CORN_GROW_DAYS && !is_festival(d)) {
				a.push({'desc':"Corn for Ann"});
			}
		}

		if (!is_festival(d)) {
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
						'sel':(flags['new_mus_box'] == 0 && !["WED", "SUN"].includes(dow)), 't2':" MusBox"
					});
					a.push({
						'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						'sel':(flags['new_mus_box'] == 1 && !["WED", "SUN"].includes(dow)), 't2':a[a.length - 1]['desc']
					});
					a.push({
						'desc':" Gift", 'cid':ann_id, 'sr':true,
						'val':((vars['day'] == 44) ? 3 : 1), 't2':"Corn / Potato",
						'sel':(!["WED", "SUN"].includes(dow) && vars['potatoes'] <= 0 && vars['corn_waters'] < _CORN_GROW_DAYS)
					});
					a.push({
						'desc':"Corn / Potato", 'cid':[ann_id, 'v_potatoes'], 'sr':true,
						'val':[((vars['day'] == 44) ? 5 : 3), -1], 't2':" Gift",
						'sel':(!["WED", "SUN"].includes(dow) && (vars['potatoes'] > 0 || vars['corn_waters'] >= _CORN_GROW_DAYS))
					});
				}
			} // End of NOT THURS

			if (!["MON", "THURS"].includes(dow) && is_sunny == 1) {
				a.push({'desc':"ed, flower, walnut"});
			} else {
				// MTN visit

				// SPRITE
				a.push({'desc':"Talk", 'cid':sprite_id, 'val':1, 'sel':(aff[sprite_id] < 45),
					'red':(aff[sprite_id] >= (_SPRITE_WINE_MIN - 1))
				});
				a.push({'desc':"Flower", 'cid':sprite_id, 'val':2, 'sr':true, 'sel':(a[a.length - 1]['sel'])});

				// MARIA
				a.push({'desc':"Talk (MTN / CHUR)", 'cid':maria_id, 'val':1, 't2':"MusBox",
						'sel':(!["SUN", "WED"].includes(dow)), 'red':(["SUN", "WED"].includes(dow))
				});
				a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						'sel':false, 't2':a[a.length - 1]['desc']
				});
				a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true, 'sel':(!["SAT", "SUN", "WED"].includes(dow))});

				// Blue Mist Flower
				if (flags['photo_popuri'] == 0) {
					a.push({'desc':"Blue Mist Flower Glitch", 'iid':popuri_id,
						'cid':['f_photo_popuri', 'v_openers'], 'val':[1, 1], 'imp':true
					});
				}
			} // End of MTN Visit
		}	
	}
}
