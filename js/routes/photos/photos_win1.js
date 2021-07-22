actions_photos_win_y1 = function(a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id('ann');
	var chicken_id = get_npc_id('chicken');
	var cliff_id = get_npc_id('cliff');
	var cow_id = get_npc_id('cow');
	var dog_id = get_npc_id('dog');
	var elli_id = get_npc_id('elli');
	var horse_id = get_npc_id('horse');
	var jeff_id = get_npc_id('jeff');
	var karen_id = get_npc_id('karen');
	var maria_id = get_npc_id('maria');
	var mas_carp_id = get_npc_id('mas_carpenter');
	var mayor_id = get_npc_id('mayor');
	var rick_id = get_npc_id('rick');

	var dow = get_dow(d, true);
	var horse_action_ids = [];

	var tmp_gold_left = vars['gold'];
	//tmp_gold_left -= ((flags['kitchen'] == 0) ? 5000 : 0); // Kitchen
	//tmp_gold_left -= ((flags['bathroom'] == 0) ? 3000 : 0); // Bathroom
	tmp_gold_left -= ((4 - (vars['cows'] + (vars['new_cow_days'].length / 3))) * 6000); // Cows
	tmp_gold_left -= (4 * 500); // 4 grass
	tmp_gold_left -= ((1 - flags['milker']) * 1800);
	if (d < 102) { tmp_gold_left += 5000;
	} else if (d < 107) {
		// Hot Springs Work
		tmp_gold_left += ((107 - d) * 1000);
	}

	if (d > 16 && flags['photo_ann'] == 0) {
		a.push({'desc':"ANN PHOTO BEFORE WINTER 19", 'imp':true, 'iid':ann_id});	
	}

	if (d == 91) {
		// Ridiculously long "borrowing cows" cutscene
		a.push({'desc':"DONT GO OUTSIDE TODAY", 'imp':true});
		flags['dontsave'] = true;
	} else if (d == 92) {
		a.push({'desc':"RESET IF SNOWY TODAY AND TOMORROW", 'imp':true});	
	}
	if (d > 94 && aff[maria_id] >= _DREAM_EVENT_MIN && d > 94 && !is_festival(d)) {
		// Save the dream event for her summer photo
		a.push({'desc':"DONT ENTER LIBRARY", 'red':true});
	}

	if (flags['cow_steal_glitch'] > 0) {
		if (d == 112) { a.push({'desc':"Cows mature today", 'iid':cow_id}); }
		if (flags['cow_steal_glitch'] == 1) {
			if (vars['day'] > 94 && vars['day'] < 115) {
				a.push({'desc':"DONT VISIT COWS YET", 'red':true, 'sr':(d == 112)});
			} else if (flags['cows_hammered'] == 0 && d >= 115) {
				a.push({'desc':"Hammer cows", 'cid':'f_cows_hammered', 'val':1, 'iid':(get_npc_id('cow')), 'imp':true});
			}
		}
	}

	if (vars['day'] > 94 && flags['fishing_rod_stored'] == 0) {
		a.push({'desc':(((flags['photo_horserace'] == 1) ? "Brush and " : "") + "Fishing rod to toolbox"),
			'cid':'f_fishing_rod_stored', 'val':1, 'sr':false, 'sel':false
		});
	}

	if (d == 94 && flags['dream_maria'] == 0 && aff[maria_id] >= (_DREAM_EVENT_MIN - 3 - ((flags['new_mus_box'] == 1) ? _MUS_BOX_AFF : 0))) {
		// Cow Stealing
		a.push({'desc':"Cow Stealing Glitch", 'imp':true});
	}

	// Dog Affection
	if (flags['dog_inside'] == 1 && (d != 109 || flags['dog_entered'] == 0)) {
		a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
	} else if (flags['dog_inside'] == 0) {
		a.push({'desc':"Whistle", 'cid':dog_id, 'val':1});
		a.push({'desc':"Pick Up", 'cid':dog_id, 'val':1, 'sel':(![91, 117].includes(d)), 'sr':true});
		a.push({'desc':"Bring Inside", 'cid':'f_dog_inside', 'sel':(![91, 117].includes(d)), 'val':1, 'sr':true});
	}

	// Horse Affection
	if (flags['photo_horserace'] == 0) {
		if (flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"])) {
			a.push({'desc':"Equip Brush", 'iid':horse_id});
		}
		if (flags['horse'] != 0) {
			a.push({'desc':"Whistle Horse", 'val':1, 'cid':horse_id, 'sr':(flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"]))});
			a.push({'desc':((flags['horse'] == 1) ? "Ride": "Talk"), 'val':1, 'cid':a[a.length - 1]['cid'], 'sr':true, 'sel':false});
			horse_action_ids.push(a.length - 1);
		}
		if (flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"])) {
			a.push({'desc':"Brush", 'val':2, 'cid':horse_id, 'sr':true, 'sel':false});
			horse_action_ids.push(a.length - 1);
		}
	}

	// Stolen Cows fully grown on Win 22
	// Hopefully sick from starvation by Win 25
	// Carpenters should be done with kitchen on 24th (unless he was standing in front of the door)
	if (flags['cow_steal_glitch'] > 0 && d >= 112) {
		a = cows(a, is_sunny);
	}

	if (aff[cliff_id] > 50 && flags['incubate_last'] == 0 && vars['new_chicken_days'].length == 0 && flags['new_chick'] == 0) {
		a.push({'desc':"Incubate LAST", 'sr':true, 'sel':false,
			'cid':["f_new_chick", "f_incubate_last"],
			'val':[(_CHICK_BORN_SLEEPS + 1), 1]
		});
	}

	// ANN ANKLE
	if (flags['ankle_ann'] == 0 && aff[ann_id] >= (_ANKLE_EVENT_MIN - 10) && is_sunny == 1) {
		// ANKLE EVENT
		a.push({'desc':"ANKLE (Crossroads)", 'cid':[ann_id, 'f_ankle_ann'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':false});
	}

	if (is_festival(d)) {
		if (d == 109) {
			// Dog Race, 500 LUM (Win 19)
			a.push({'desc':"Buy 1000 Lumber at Dog Race", 'cid':['v_lumber', 'v_medals'], 'val':[999, -1000], 'iid':get_npc_id('mayor'), 'imp':true});
			if (flags['dog_entered'] == 1) { a.push({'desc':"Win Dog Race", 'cid':'f_photo_dograce', 'val':1, 'sel':false, 'sr':true}); }
			a = betting_table(a, 1, d);
			for (var z = 0; z < horse_action_ids.length; z++) {
				a[horse_action_ids[z]]['sel'] = true;
			}
		}
	} else {
		// Not festival

		// ANN
		if (dow != "THURS") {
			// ANN
			// -1 sp " GIFT"
			// -1 sp " MUSBOX"
			var ann_sick_event = (dow == "SUN" && is_sunny == 0 && flags['sick_ann'] == 0 && aff[ann_id] < _PHOTO_MIN &&
						aff[ann_id] >= (_SICK_EVENT_MIN - (4 + 1 + 5 * flags['new_mus_box'])));
			a.push({'desc':((dow == "SUN") ? "Talk (Ranch 50%)" : "Talk (Ranch)"), 'cid':ann_id,
				'sel':(ann_sick_event && flags['musbox'] == 0 || (d >= 102 && d <= 106 && d != 105)), 'val':1, 't2':" MusBox"
			});
			a.push({'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1],
				'sel':(ann_sick_event && flags['musbox'] == 1), 'sr':true, 't2':a[a.length - 1]['desc']
			});
			a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':false, 't2':"Potato"});
			a.push({'desc':"Potato", 'cid':[ann_id, 'v_potatoes'], 'val':[3, -1], 'sr':true, 't2':" Gift", 'sel':(ann_sick_event || (d >= 102 && d <= 106 && d != 105))});
			if (ann_sick_event) {
				a.push({'desc':"Sick Event", 'cid':[ann_id, 'f_sick_ann'], 'val':[_SICK_EVENT_AFF, 1], 'imp':true});
			}
		}
		if (d > 91 && is_sunny == 1 && flags['photo_ann'] == 0) {
			// Anns photo
			// Manna cutscene & Cliff leaving scene have priority over before Ann arriving for photo
			a.push({'desc':"Photo", 'cid':[ann_id, 'f_photo_ann', 'f_dontsave'], 'val':[_PHOTO_EVENT_AFF, 1, 1],
				'sel':(aff[ann_id] >= _PHOTO_MIN), 'imp':(aff[ann_id] >= _PHOTO_MIN)
			});
			//if (d >= 102 && d <= 106) { a[a.length - 1]['t2'] = "Hot Springs Work"; }
			//for (var z = 0; z < horse_action_ids.length; z++) {
				//a[horse_action_ids[z]]['sel'] = true;
			//}
		}

		if (d == 108) {
			a.push({'desc':"Enter Dog", 'cid':['f_dog_entered',get_npc_id('doug')], 'val':[1, 3], 'sel':(vars['medals'] >= 1000), 'imp':(vars['medals'] >= 1000), 'red':(vars['medals'] < 1000)});
			if (vars['medals'] >= 1000) {
				for (var z = 0; z < horse_action_ids.length; z++) {
					a[horse_action_ids[z]]['sel'] = true;
				}
			}
		} else if (d == 95 && flags['borrow_cows'] > 0) {
			a.push({'desc':"1000 G from Doug", 'cid':["v_gold", "f_borrow_cows"], 'val':[1000, -1], 'iid':get_npc_id('doug'), 'imp':true});
			for (var z = 0; z < horse_action_ids.length; z++) {
				a[horse_action_ids[z]]['sel'] = true;
			}
		}

		//  102, 103, 104, 105, 106
		// THURS,FRI, SAT, SUN, MON
		// OR Steal Cows on Win 4
		if (d == 94 || (d >= 102 && d <= 106)) {
			if (d == 94 || (d != 105 || vars['springs_days_worked'] == 2)) {
				// Don't visit horse on day skipping hot springs work
				for (var z = 0; z < horse_action_ids.length; z++) {
					a[horse_action_ids[z]]['sel'] = true;
				}
			}
			if (d != 94) {
				// Hot Springs
				a.push({'desc':"Hot Springs Work", 'iid':mas_carp_id, 'cid':['v_springs_days_worked', 'v_gold'], 'val':[1, 1000],
					'sel':(tmp_gold_left < 1000 || d != 105 || vars['springs_days_worked'] == 2),
					'imp':(d == 106 || vars['springs_days_worked'] == (d - 103) || tmp_gold_left < 1000),
					'red':(d == 105 && vars['springs_days_worked'] == 3 && tmp_gold_left >= 1000)
				});
				//if (is_sunny == 1 && flags['photo_ann'] == 0) { a[a.length - 1]['t2'] = "Photo"; }
				if (d == 106) {
					// Hot Springs Photo
					a[a.length - 1]['cid'].push('f_photo_springs');
					a[a.length - 1]['val'].push(1);
				}
				if (tmp_gold_left < ((d == 106 || vars['springs_days_worked'] == (d - 103)) ? 0 : 1000)) {
				    	var tmp_need = ((d == 106 || vars['springs_days_worked'] == (d - 103)) ? 0 : 1000) - tmp_gold_left;
					a.push({'desc':("Mine after work for $$ (need " + tmp_need + "G => " + (g + tmp_need) + "G Total)"),
						'imp':true, 'iid':get_npc_id('carpenter_top')});
				}
			}
		}

		// ELLI
		a.push({'desc':("Talk" + ((dow == "MON") ? " (MTN)" : "")), 'cid':elli_id, 'val':1, 'sel':false, 't2':"MusBox "});
		a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':false, 't2':a[a.length - 1]['desc'] });
		a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':[" Egg", "M/L Fish"], 'sel':false});
		a.push({'desc':" Egg", 'sr':true, 't2':["Gift ", "M/L Fish"], 'sel':false, 'cid':elli_id, 'val':4});
		a.push({'desc':"M/L Fish", 'sr':true, 't2':["Gift ", " Egg"], 'cid':[elli_id, 'v_happiness'], 'val':[3, 1], 'sel':false});

		// MAYOR
/*
		if (is_sunny == 1 || d == 94) {
			a.push({'desc':((dow == "SAT") ? "Talk (Rick Shop 50%)" : ((dow == "SUN") ? "Talk (Church)" : "Talk")),
				'cid':mayor_id, 'val':3, 'sel':false, 'red':(aff[mayor_id] >= _PARTY_ATTEND_MIN)
			});
			if (is_sunny != 1) { a[a.length - 1]['desc'] = "Talk (In House)"; }
			a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':false});
		}
*/

		// Cliff
		if (is_sunny == 1 && aff[cliff_id] > 50) {
			var cliff_loc = "Fish Tent 50%";
			if (dow == "MON") { cliff_loc = "Hot Springs"; }
			if (dow == "TUES") { cliff_loc = "Beach"; }
			if (dow == "WED") { cliff_loc = "Ranch"; }
			if (dow == "THURS") { cliff_loc = "Carp House 50%"; }
			a.push({'desc':("Talk (" + cliff_loc + ")"), 'cid':cliff_id, 'val':2, 'sel':false});
			a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true}); // TODO Recipe Bonus
			a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
		}

		// Pond Berry
		if (flags['berry_pond'] == 0 && !is_festival(d)){
			a.push({'desc':"Pond Rock Berry", 'cid':'f_berry_pond', 'val':1, 'iid':get_npc_id('kappa'),
				'sel':(flags['golden_hammer'] == 1 && d > 101)
			});
			if (flags['golden_hammer'] == 0) {
				a[a.length - 1]['t3'] = "Golden Hammer";
				a.push({'desc':"Golden Hammer", 'cid':'f_golden_hammer', 'val':1, 't0':"Pond Rock Berry", 'sel':false, 'sr':true});
			}
		}

		// ANN
		if (aff[ann_id] < _PHOTO_EVENT_AFF && flags['photo_ann'] == 0) {
			if (flags['chicken_outside'] == 1 && vars['chickens'] > 0) {
				a.push({'desc':"Bring Chicken Inside", 'val':-1, 'cid':'f_chicken_outside', 'imp':true});
				a.push({'desc':"Feed Chicken", 'cid':'v_feed', 'val':-1, 'sr':true});
			}

			if (aff[cliff_id] > 50) {
				for (var z = 0; z < horse_action_ids.length; z++) {
					a[horse_action_ids[z]]['sel'] = true;
				}
			}

			// Corn or Egg to Ann
			if (!["THURS", "SUN"].includes(dow)) {
				a.push({'desc':("Talk (" + ((is_sunny == 0) ? "Barn)" : "Ranch)")), 'cid':ann_id, 'val':1, 'sel':(flags['new_mus_box'] == 0)});
				a.push({'desc':"MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':(flags['new_mus_box'] == 1), 't2':a[a.length - 1]['desc']});
				a.push({'desc':" Gift  ", 'cid':ann_id, 'val':1, 'sr':true, 't2':"Corn / Potato"});
				a.push({'desc':"Corn / Potato", 'cid':ann_id, 'val':3, 'sr':true, 'sel':false, 't2':" Gift  "});
			}
		} else if (vars['chickens'] > 0 && dow != "THURS"){
			a.push({'desc':"Sell Chicken", 'cid':['v_chickens', 'v_gold'], 'val':[-1, 500], 'iid':get_npc_id('doug'), 'imp':true, 'sel':(d == 87)});
			for (var z = 0; z < horse_action_ids.length; z++) {
				a[horse_action_ids[z]]['sel'] = true;
			}
		}
		// ANN SICK
		if (dow == "SUN" && is_sunny == 0 && flags['sick_ann'] == 0) {
			a.push({'desc':"Sick Event", 'cid':[ann_id, 'f_sick_ann'], 'val':[_SICK_EVENT_AFF, 1],
					'sel':(aff[ann_id] < _PHOTO_EVENT_AFF), 'sr':(aff[ann_id] < _PHOTO_EVENT_AFF && flags['photo_ann'] == 0)});
		}

		// RICK (before dog race)
		// "Gift    " <- 4 spaces
		// "Talk    " <- 4 spaces
		if (d < 109 && is_sunny == 1 && !["WED", "SUN"].includes(dow)) {
			a.push({'desc':"Talk    ", 'cid':rick_id, 'val':3, 'sel':false});
			a.push({'desc':"Gift    ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':false});
			a.push({'desc':"Rick Fix", 'sr':true, 't3':"Talk    ", 'cid':['f_old_mus_box', 'f_new_mus_box'], 'val':[-1, 1], 'sel':false});
			if (dow != "SAT" && flags['milker'] == 0) {
				a.push({'desc':"Buy a Milker", 'cid':['v_gold', 'f_milker'], 'val':[-1800, 1], 'sr':true, 'sel':false});
			}

			// ANN in Ricks Shop
			// "Gift  " <- 2 spaces
			if (dow == "THURS") {
				a.push({'desc':"Talk (Ricks Shop)", 'cid':ann_id, 'val':1, 't2':"MusBox", 'sel':(d == 102), 'red':(aff[ann_id] >= _PHOTO_MIN)});
				a.push({'desc':"MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':"Talk (Ricks Shop)", 'sel':false});
				a.push({'desc':"Gift  ", 'cid':ann_id, 'val':1, 'sr':true, 't2':"Corn / Potato", 'sel':false});
				a.push({'desc':"Corn / Potato", 'cid':ann_id, 'val':3, 'sr':true, 't2':"Gift  ", 'sel':(d == 102)});
			}
		}

		if (d > 109) { // After Dog Race
			// Extensions
			if (dow != "TUES") {
				var tmp_getext = false;
				if (flags['kitchen'] == 0) {
					// Kitchen
					a.push({'desc':"Buy a Kitchen (5000 G)", 'iid':mas_carp_id,
							'cid':['v_gold', 'v_lumber', 'f_kitchen'],
							'val':[-5000, -450, _BUILD_DAYS + 1], 'sel':false
					});
					tmp_getext = true;
				}
				if (flags['bathroom'] == 0 && vars['gold'] >= 3000) {
					a[a.length - 1]['t2'] = "Buy a Bathroom (3000 G)";
					// Bathroom
					a.push({'desc':"Buy a Bathroom (3000 G)", 'iid':get_npc_id('mas_carpenter'),
						'cid':['v_gold', 'v_lumber', 'f_bathroom'], 'imp':true,
						'val':[-3000, -300, _BUILD_DAYS + 1], 'sel':false,
						'sr':(flags['kitchen'] == 0)
					});
					if (flags['kitchen'] == 0) {
						a[a.length - 1]['t2'] = "Buy a Kitchen (5000 G)";
					}
					tmp_getext = true;
				}
				if (tmp_getext) {
					a.push({'desc':"(Opens 35 secs after leaving house)", 'sr':true});
					if (aff[mas_carp_id] <= 25) {
						a.push({'desc':"Meet", 'cid':mas_carp_id, 'val':4, 'sr':false, 'sel':false, 'red':true});
					}
					a.push({'desc':"Talk", 'cid':mas_carp_id, 'val':3, 'sr':true, 'sel':false});
					a.push({'desc':"Gift", 'cid':mas_carp_id, 'val':3, 'sr':true, 'sel':false});
				}

				if (is_sunny == 0 && aff[cliff_id] > 50) {
					// Cliff in Carp House when its snowing
					a.push({'desc':"Talk (Carp House 50%)", 'cid':cliff_id, 'val':2, 'sel':false, 'red':(aff[cliff_id] >= 200)});
					a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
					a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
				}
			}

			// Buy Cow (s)
			if (((vars['cows'] + (vars['new_cow_days'].length / 3)) < (3 + ((flags['cow_steal_glitch'] > 0) ? 1 : 0))) && vars['gold'] >= (6000 + 1800 - (1800 * flags['milker']))) {
				// Buy Cows
				// Win 20, 21, 22
				// Fri, Sat, Sun
				for (var z = 0; z < horse_action_ids.length; z++) {
					a[horse_action_ids[z]]['sel'] = true;
				}

				a.push({'desc':('Buy Cow (#' + ((vars['new_cow_days'].length + 3) / 3) + ')'),
						'cid':['v_gold', 'v_new_cow_days'], 'iid':get_npc_id('doug'),
						'val':[-6000, d + _COW_GROW_SLEEPS]
				});
			}
			
			// RICK (after dog race)
			// "Gift    " <- 4 spaces
			// "Talk    " <- 4 spaces
			if (is_sunny == 1 && !["WED", "SUN"].includes(dow)) {
				a.push({'desc':"Talk    ", 'cid':rick_id, 'val':3, 'sel':(dow != "SAT" && flags['milker'] == 0 && aff[rick_id] < _PARTY_ATTEND_MIN),
					'red':(aff[rick_id] >= _PARTY_ATTEND_MIN && (dow == "SAT" || flags['milker'] == 1))
				});
				a.push({'desc':"Gift    ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':false});
				a.push({'desc':"Rick Fix", 'sr':true, 't3':"Talk    ", 'cid':['f_old_mus_box', 'f_new_mus_box'], 'val':[-1, 1], 'sel':false});
				if (dow != "SAT" && flags['milker'] == 0) {
					a.push({'desc':"Buy a Milker", 'cid':['v_gold', 'f_milker'], 'val':[-1800, 1], 'sr':true,
						'sel':(vars['new_cow_days'].length > 0), 'imp':(flags['cow_steal_glitch'] == 1 && vars['day'] == 113)
					});
				}

				// ANN in Ricks Shop
				// "Gift  " <- 2 spaces
				if (dow == "THURS") {
					a.push({'desc':"Talk (Ricks Shop)", 'cid':ann_id, 'val':1, 't2':"MusBox", 'sel':false, 'red':(aff[ann_id] >= _PHOTO_MIN)});
					a.push({'desc':"MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':"Talk (Ricks Shop)", 'sel':false});
					a.push({'desc':"Gift  ", 'cid':ann_id, 'val':1, 'sr':true, 't2':"Corn / Potato", 'sel':false});
					a.push({'desc':"Corn / Potato", 'cid':ann_id, 'val':3, 'sr':true, 't2':"Gift  ", 'sel':false});
				}
			}
/*
			if (!["WED", "SUN"].includes(dow) && is_sunny == 1) {
				// MAYOR
				a.push({'desc':"Talk (Village 50%)", 'cid':mayor_id, 'val':3, 'sel':false, 'red':(aff[mayor_id] >= _PARTY_ATTEND_MIN)});
				a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':false});
			} else if (dow == "SUN") {
				// MAYOR
				a.push({'desc':"Talk (Church)", 'cid':mayor_id, 'val':3, 'sel':false, 'red':(aff[mayor_id] >= _PARTY_ATTEND_MIN)});
				a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':false});
			}
*/
		} // End of After Dog Race

		if (d == 94 && flags['dream_maria'] == 0) {
			// Steal the Cows

			// Maria
			a.push({'desc':"Talk (CHURCH / HOUSE)", 'cid':maria_id, 'val':1, 't2':"MusBox", 'sel':(flags['new_mus_box'] == 0), 'imp':true});
			a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':(flags['new_mus_box'] == 1), 't2':"Talk (CHURCH / HOUSE)"});
			a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true});
			a.push({'desc':"Karen Dream Warp (Vineyard)", 'cid':[karen_id, 'f_dream_karen'], 'val':[_DREAM_EVENT_AFF, 1]});
		} else if (d < 94) {
			// Before Cow Stealing
			if (flags['new_mus_box'] == 1 && aff[maria_id] >= (_DREAM_EVENT_MIN - 1 - _MUS_BOX_AFF)) {
				a.push({'desc':"NO MUSBOX FOR MARIA", 'iid':maria_id, 'red':true});
			}
			a.push({'desc':"Talk", 'cid':maria_id, 'val':1, 'sel':false, 'red':(aff[maria_id] >= 157)});
			if (flags['new_mus_box'] == 1 || flags['old_mus_box'] == 1) {
				a[a.length - 1]['t2'] = "MusBox";
				a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						'sel':false, 't2':a[a.length - 1]['desc']
				});
			}
			a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true, 'sel':false});
		}
	}

	// Cow Stealing
	if (d == 94 && flags['dream_maria'] == 0) {
		// Jeff Spam
		a.push({'desc':"Jeff Spam (Bar) [21 talks]", 'cid':jeff_id, 'val':(21 * 8), 'imp':true});

		// Steal the Cows
		a.push({'desc':"Hammer rocks on farm / Dock Fishing"});
		a.push({'desc':"Ocean Berry", 'cid':"f_berry_ocean", 'val':1, 'sel':false, 'sr':true});
		a.push({'desc':"Stay Up All Night", cid:'f_cow_steal_glitch', 'val':5, 'imp':true});
	}

	if (tmp_gold_left < 0 && d > 97 && (d < 102 || d > 106)) { // Mine isnt open until Winter 8; Ignore hot springs work days
		// Mine Visit?
		//for (var z = 0; z < horse_action_ids.length; z++) {
			//a[horse_action_ids[z]]['sel'] = true;
		//}
		a.push({'desc':"Equip hoe, Visit Mine", 'iid':get_npc_id('carpenter_top'), 'imp':true});
		a.push({'desc':"Dig a Berry", 'sr':true, 'sel':false, 'val':1, 'cid':'f_berry_mine'});
		a.push({'desc':("(" + (-1 * tmp_gold_left) + "G Left)"), 'sr':true});
	}

	a.push({'desc':"Feed Dog", 'cid':dog_id, 'val':2, 'sel':false});
	return a;
}
