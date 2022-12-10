actions_photos_sum_y1b = function(a = [], d = 3, g = 300, is_sunny = 1) {
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
	var lumber_to_sprite = ((aff[sprite_id] >= _SPRITE_SPAM_MAX) ? 0 : (((_SPRITE_SPAM_MAX - aff[sprite_id]) > 6) ? 6 : ((_SPRITE_SPAM_MAX - aff[sprite_id]))));
	var musboxes = musbox_count (aff[maria_id], aff[ann_id], aff[elli_id], d, flags['chicken_route']);
	var kai_maxed = (aff[kai_id] >= (160 - (((flags['ankle_karen'] == 0) ? 20 : 0) + ((d < 55) ? 8 : 0) + 8 + 3))); // Two Swims and a Cow Win (other festival talks too, so there's a buffer)
	var kai_visits = Math.ceil((160 - (((flags['ankle_karen'] == 0) ? 20 : 0) + 16 + 3 + aff[kai_id])) / 8);
	kai_visits = ((kai_visits < 0) ? 0 : kai_visits);
	var weather_check = (!is_festival(d + 1) && ([31, 55].includes(d) || ["MON", "TUES", "FRI"].includes(dow) || (dow == "THURS" && ![46, 60].includes(d))));

	var elli_sick_event = (is_sunny == 0 && aff[elli_id] >= (_SICK_EVENT_MIN - ((dow == "WED") ? ((flags['chicken_route'] == 0) ? 2 : 5) : 0)) && flags['sick_elli'] == 0 && dow != "MON");
	var maria_sick_event = (dow == "MON" && is_sunny == 0 && aff[maria_id] >= _SICK_EVENT_MIN && flags['sick_maria'] == 0);
	var ann_sick_event = (dow == "SUN" && is_sunny == 0 && flags['sick_ann'] == 0 && aff[ann_id] < _PHOTO_MIN && d != 63 && 
							      aff[ann_id] >= (_SICK_EVENT_MIN - (4 + 1 + 5 * flags['new_mus_box'])));
	weather_check = (weather_check || elli_sick_event || maria_sick_event || ann_sick_event);

	// Weather Check
	if (flags['chicken_route'] == 1 && is_sunny != -1) {
		a.push({'desc':(((!weather_check) ? "DONT " : "") + "Check Weather"),
			'imp':weather_check, 'red':(!weather_check)
		});
		flags['dontsave'] = ((!weather_check && !is_festival(d + 1) && ![46, 60].includes(d)) ? true : false);
	}

	// Dog Affection
	if (flags['dog_inside'] == 1) {
		a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
	} else {
		a.push({'desc':"Whistle", 'cid':dog_id, 'val':1});
		a.push({'desc':"Bring Dog Inside", 'cid':[dog_id, 'f_dog_inside'], 'val':[1, 1], 'iid':dog_id, 'sr':true, 'sel':false});
	}

	if (is_sunny == -1) {
		// Horse Affection
		a.push({'desc':"Whistle Horse", 'val':1, 'cid':horse_id});
	} else {
		// No Typhoon
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
			// Music Box Dig
			if (flags['old_mus_box'] == 0) {
				a.push({'desc':"Equip hoe", 'iid':musbox_id, 'red':(is_sunny == 0 || ["WED", "SAT", "SUN"].includes(dow))});
				a.push({'desc':"Dig Music Box", 'cid':'f_old_mus_box', 'val':1, 'sr':true, 'iid':musbox_id,
					'sel':(is_sunny == 1 && !["WED", "SAT", "SUN"].includes(dow))
				});
				if (flags['berry_farm'] == 0) {
					a.push({'desc':"Dig a Berry", 'val':1, 'cid':'f_berry_farm', 'sr':true, 'sel':false});
				}
			}

			if (vars['chickens'] > 0 && flags['incubate_last'] == 0) {
				a.push({'desc':"New Chick", 'iid':chicken_id, 'cid':["v_new_chicken_days", "f_new_chick"],
					'val':[d + _CHICK_GROW_SLEEPS, -1], 't0':"Incubate", 'sel':false
				});
				a.push({'desc':"Incubate", 'cid':"f_new_chick", 'val':(_CHICK_BORN_SLEEPS + 1), 'sr':true, 'sel':false, 't2':"Incubate LAST"});
				a.push({'desc':"Incubate LAST", 'cid':["f_new_chick", "f_incubate_last"], 'val':[(_CHICK_BORN_SLEEPS + 1), 1], 'sr':true, 't2':"Incubate", 'sel':false});
			}

			// ANN ANKLE
			if (flags['ankle_ann'] == 0 && aff[ann_id] >= (_ANKLE_EVENT_MIN - 10) && is_sunny == 1) {
				// ANKLE EVENT
				a.push({'desc':"ANKLE (Crossroads)", 'cid':[ann_id, 'f_ankle_ann'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':false});
			}
			if (flags['new_mus_box'] == 1 || flags['chicken_route'] == 0) {
				if (is_sunny == 1 && flags['cutscene_cliff_farm'] == 0 && aff[cliff_id] > 90) {
					a.push({'desc':"RANCH CUTSCENE, Fast Text", 'imp':true, 'iid':cliff_id});
					a.push({'desc':"Cliff Cutscene", 'val':1, 'cid':"f_cutscene_cliff_farm", 'sr':true, 'sel':false});
				}

				// Cliff
				if (aff[cliff_id] > 20) {
					if (["TUES", "WED"].includes(dow) && is_sunny == 1) {
						if (dow == "TUES" && aff[elli_id] >= _CUTSCENE_BEACH_MIN && flags['cutscene_beach'] == 0) {
							a.push({'desc':"WARNING: Cutscene plays at Beach", 'red':true});
							a.push({'desc':"Beach Cutscene", 'sr':true, 'sel':false, 'cid':'f_cutscene_beach', 'val':1});
						}
						a.push({
							'desc':("Talk (" + ((dow == "WED") ? "Ranch" : "Beach") + ")"), 'cid':cliff_id, 'val':2, 'sel':false,
							'red':(dow == "TUES" && aff[elli_id] >= _CUTSCENE_BEACH_MIN && flags['cutscene_beach'] == 0),
						});
						a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':(vars['day'] < 41 && vars['chickens'] <= 1), 't2':"   Egg   ", 'sr':true});
						a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':(vars['day'] < 41 && vars['chickens'] > 1), 't2':"   Gift   ", 'sr':true});
					}
				}

				// ANN
				if (dow != "THURS") {
					// ANN
					// -1 sp " GIFT"
					// -1 sp " MUSBOX"
					a.push({'desc':((dow == "SUN") ? "Talk (Ranch 50%)" : "Talk (Ranch)"), 'cid':ann_id, 'val':1, 't2':" MusBox",
						'sel':(((!["WED", "SAT", "SUN"].includes(dow) && is_sunny == 1 && aff[ann_id] < 160) || ann_sick_event) && flags['new_mus_box'] == 0 && flags['chicken_route'] == 0)
					});
					a.push({'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':a[a.length - 1]['desc'], 'sel':false});
					a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':false, 't2':"Potato"});
					a.push({'desc':"Potato", 'cid':[ann_id, 'v_potatoes', 'v_potato_gifts'], 'val':[3, -1, 1], 'sr':true, 't2':" Gift",
						'sel':(ann_sick_event || (!["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1 && aff[ann_id] < 160))
					});
					if (flags['recipe_ann'] == 0) {
						a[a.length - 1]['cid'] = ['f_recipe_ann', ann_id, 'v_potatoes', 'v_potato_gifts'];
						a[a.length - 1]['val'] = [1, 6, -1, 1];
					}
					if (ann_sick_event) {
						a.push({'desc':"Sick Event", 'cid':[ann_id, 'f_sick_ann'], 'val':[_SICK_EVENT_AFF, 1], 'imp':true});
					}
					a.push({'desc':("(" + musboxes[1] + " Musboxes Left)"), 'sr':true});
				}

				if (is_sunny == 1 && dow == "MON") {
					// ELLI Beach
					// "Gift " <- 1 space
					if (aff[elli_id] >= _CUTSCENE_BEACH_MIN && flags['cutscene_beach'] == 0) {
						// Beach cutscene between Karen and Elli occurs when Elli is >= 145-ish
						a.push({'desc':"WARNING: Cutscene plays at Beach", 'red':true});
						a.push({'desc':"Beach Cutscene", 'sr':true, 'sel':false, 'cid':'f_cutscene_beach', 'val':1});
						a.push({'desc':"Talk (Beach)", 'cid':elli_id, 'val':1, 't2':"MusBox ", 'red':true, 'sel':false, 't3':"Beach Cutscene"});
						a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':false, 't2':a[a.length - 1]['desc'], 't3':"Beach Cutscene"});
					} else {
						a.push({'desc':"Talk (Beach)", 'cid':elli_id, 'val':1, 't2':"MusBox "});
						a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':false, 't2':a[a.length - 1]['desc']});
					}
					a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"M/L Fish", 'sel':false});
					a.push({'desc':"M/L Fish", 'sr':true, 't2':"Gift ", 'cid':elli_id, 'val':3, 'sel':false});
					if (flags['chicken_route'] == 1) {
						a[a.length - 1]['t2'] = ["Egg", "Gift "];
						a[a.length - 2]['t2'] = ["Egg", "M/L Fish"];
						a.push({'desc':"Egg", 'sr':true, 't2':["M/L Fish", "Gift "],
							'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
							'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
						});
					}
					a.push({'desc':("(" + musboxes[2] + " Musboxes Left)"), 'sr':true});
				}
			}

			// Kappa Berry
			if (!flags['berry_kappa']) {
				a.push({'desc':"Large fish to Kappa", 'cid':'f_berry_kappa', 'val':1, 'iid':get_npc_id('kappa'), 'sel':false, 'red':(is_sunny == 0)});
			}

			var tmp_spr_aff = aff[sprite_id];
			// SPRITE
			if (flags['vineyard_restored'] == 0) {
				if (lumber_to_sprite > 0) {
					var lum_desc = "";
					if (aff[sprite_id] < (21 - 6)) {
						a.push({'desc':"Flower", 'cid':sprite_id, 'val':1, 'sel':false, 'red':(is_sunny == 0)});
					}
					a.push({'desc':(lumber_to_sprite + " Gifts to Inner Sprite (Right Side)"), 'sr':(aff[sprite_id] < (21 - 6)),
						'cid':sprite_id, 'val':lumber_to_sprite, 'sel':false, 'red':(is_sunny == 0)
					});
					if (tmp_spr_aff >= 18) { a.push({'desc':"INNER SPRITE FIRST!", 'sr':true}); }
					tmp_spr_aff += lumber_to_sprite;
				}
				if (aff[sprite_id] % 7 == 0 && aff[sprite_id] < 35) {
					a.push({'desc':"Meet", 'cid':sprite_id, 'val':5,
						'sel':(tmp_spr_aff > 18 && ((dow == "MON" || [4, 5].includes(d)) && is_sunny == 1)),
						'red':(tmp_spr_aff < 18 && ((dow != "MON" && ![4, 5].includes(d)) || is_sunny == 0))
					});
					if (tmp_spr_aff > 18) { tmp_spr_aff += 5 };
				}
				a.push({'desc':"   Talk ", 'cid':sprite_id, 'val':1, 'sr':(aff[sprite_id] % 7 == 0 && aff[sprite_id] < 35),
					'sel':(d == 31 && aff[sprite_id] < (_SPRITE_WINE_MIN - 5)),
					'red':(aff[sprite_id] >= (_SPRITE_WINE_MIN - 5) && flags['wine_from_duke'] == 0)
				});
				a.push({'desc':"   Gift ", 'cid':sprite_id, 'val':2, 'sr':true, 'sel':(a[a.length - 1]['sel'])});
				if (tmp_spr_aff > 18) { tmp_spr_aff += 3; }
				var sprite_visits_left = 0;
				if (aff[sprite_id] > 20) {
					if (aff[sprite_id] < 45) {
						sprite_visits_left = Math.ceil((45 - aff[sprite_id]) / 3);
					}
					a.push({'desc':("(" + sprite_visits_left + " visits left)"), 'sr':true});
				}
			}
			// ANN DREAM
			if (flags['dream_ann'] == 0 && aff[ann_id] >= (_DREAM_EVENT_MIN - 9) && is_sunny == 1) {
				a.push({'desc':"Ignore Ann if she is crouching", 'red':true});
				a.push({'desc':"DREAM (Cave)", 'cid':[ann_id, 'f_dream_ann'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
			}

			// Strength Wish Power Berry
			if (flags['berry_strength'] == 0) {
				a.push({'desc':"Wish for Strength (Middle)", 'cid':'f_berry_strength', 'val':1, 'iid':get_npc_id('goddess'),
					'sel':(elli_sick_event || ann_sick_event || maria_sick_event),
					'imp':(elli_sick_event || ann_sick_event || maria_sick_event),
					'red':(!elli_sick_event && !ann_sick_event && !maria_sick_event)
				});
			}

			// Blue Mist Flower
			if (flags['photo_popuri'] == 0) {
				a.push({'desc':"Water Flower by Pond", 'iid':popuri_id, 'red':(d < 30 || dow != "MON" || is_sunny == 0)});
				a.push({'desc':"Blue Mist Flower Glitch", 'cid':'f_photo_popuri', 'val':1, 'sel':false, 'sr':true});
			}

			if (vars['chickens'] == 0) {
				if (!(dow == "MON" || [4, 5].includes(d)) && !["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1) {
					a.push({'desc':"ed, flower, walnut, Fish for Elli", 'imp':true});
				}
			}

			// Cliff
			if (aff[cliff_id] > 20) {
				if (!["TUES", "WED"].includes(dow)) {
					var cliff_loc = " (Fish Tent) [50%]";
					if (dow == "THURS") { cliff_loc = " (Carp House)"; }
					if (dow == "SUN") { cliff_loc = " (Carp House) [50%]"; }
					if (dow == "MON") { cliff_loc = " (Hot Springs)"; }
					a.push({'desc':("Talk" + cliff_loc), 'cid':cliff_id, 'val':2, 'sel':false});
					a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
					a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
				}
			}

			if (aff[kai_id] > 20) {
				// Decline Ankle
				if (flags['ankle_karen'] == 0 && aff[karen_id] > 180 && is_sunny == 1) {
					a.push({'desc':"Decline Ankle (Vineyard)", 'sel':false, 'cid':[karen_id, kai_id, 'f_ankle_karen'], 'val':[-30, 20, 1]});
				}
				// KAI
				if (is_sunny == 1 || aff[karen_id] < 160 || flags['ankle_karen'] != 0) {
					if (aff[kai_id] == 0) { a.push({'desc':"Meet", 'cid':kai_id, 'val':8, 'sel':false}); }
					a.push({'desc':("Talk (" + ((is_sunny == 1) ? "Vineyard" : "Wine Cellar") + ")"), 'cid':kai_id, 'val':2,
						'sr':(aff[kai_id] == 0), 'sel':(d == 31 && kai_visits > 0), 'red':kai_maxed});
					a.push({'desc':"Berry/Mango", 'sr':true, 'sel':(d == 31 && kai_visits > 0), 't2':"  Gift ", 'red':(dow == "MON"),
						'cid':((flags['recipe_kai'] == 0) ? [kai_id, 'f_recipe_kai'] : kai_id),
						'val':((flags['recipe_kai'] == 0) ? [5, 1] : 6),
					});
					a.push({'desc':"  Gift ", 'cid':kai_id, 'val':3, 'sr':true, 'sel':false, 't2':"Berry/Mango"});
					a.push({'desc':("(" + kai_visits + " Visits Left)"), 'sr':true});
				} else {
					a.push({'desc':"WINE CELLAR ACTIVATES KARENS DREAM", 'red':true, 'iid':kai_id});
					a.push({'desc':"Karen Dream", 'cid':[karen_id, 'f_dream_karen'], 'val':[_DREAM_EVENT_AFF, 1], 'sr':true, 'sel':false});
				}
			}

			if (dow == "MON" || d < 41) {
				// MARIA
				if (aff[maria_id] >= (_DREAM_EVENT_MIN - 1 - _MUS_BOX_AFF)) {
					a.push({'desc':"NO MUSBOX FOR MARIA", 'iid':maria_id, 'red':true});
				}
				a.push({'desc':("Talk (" + ((is_sunny == 1) ? "MTN / CHUR" : "In House") + ")"), 'cid':maria_id, 'val':1, 't2':"MusBox",
					'sel':((d == 31 || d > 40) && aff[maria_id] < (_DREAM_EVENT_MIN - 1) && (!["SAT", "SUN", "WED"].includes(dow) || d == 31) && is_sunny == 1),
					'red':(aff[maria_id] >= (_DREAM_EVENT_MIN - 1))
				});
				if (aff[maria_id] < (_DREAM_EVENT_MIN - 1 - _MUS_BOX_AFF)) {
					a[a.length - 1]['t2'] = "MusBox";
					a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						'sel':false, 't2':a[a.length - 1]['desc']
					
					});
				}
				if (aff[maria_id] < (_DREAM_EVENT_MIN - 1 - 2)) {
					a.push({'desc':" Gift  ", 'cid':maria_id, 'val':2, 'sr':true, 't2':"Cabbage",
						'sel':((d == 31 || d > 40) && aff[maria_id] < (_DREAM_EVENT_MIN - 2) && (!["SAT", "SUN", "WED"].includes(dow) || d == 31) && is_sunny == 1)
					});
					a.push({'desc':"Cabbage", 'sel':false, 't2':" Gift  ", 'sr':true,
						'cid':((flags['recipe_maria'] == 0) ? [maria_id, 'f_recipe_maria'] : maria_id),
						'val':((flags['recipe_maria'] == 0) ? [5, 1] : 3)
					});
				}
				a.push({'desc':("(" + musboxes[0] + " Musboxes Left)"), 'sr':true});
			}

			// CORN
			if (d == 31) {
				a.push({'desc':"Buy Corn", 'iid':get_npc_id('lillia'), 'imp':true, 'sel':true, 'val':-300, 'cid':'v_gold'});
			}

			// ELLI
			// "Gift " <- one space
			// "Talk " <- one space
			if (!["SUN", "MON"].includes(dow)) {
				a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : "Talk (Bakery)"), 'cid':elli_id, 'val':1, 't2':"MusBox ",
					'sel':(d == 31 || (elli_sick_event && dow == "WED" && flags['new_mus_box'] == 0) || (!["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1))
				});
				a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
					'sel':(elli_sick_event && dow == "WED" && flags['new_mus_box'] == 1), 't2':a[a.length - 1]['desc']
				});
				a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"M/L Fish",
					'sel':(flags['chicken_route'] == 0 && !["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1)
				});
				a.push({'desc':"M/L Fish", 'sr':true, 't2':"Gift ", 'cid':[elli_id, 'v_happiness'], 'val':[3, 1], 'sel':false});
				if (flags['chicken_route'] == 1) {
					a[a.length - 1]['t2'] = ["Egg", "Gift "];
					a[a.length - 2]['t2'] = ["Egg", "M/L Fish"];
					a.push({'desc':"Egg", 'sr':true, 't2':["M/L Fish", "Gift "],
						'sel':(d == 31 || (is_sunny == 1 && !["WED", "SAT"].includes(dow)) || (dow == "WED" && elli_sick_event)),
						'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
						'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
					});
				}
				a.push({'desc':("(" + musboxes[2] + " Musboxes Left)"), 'sr':true});
			}
			if (elli_sick_event) {
				a.push({'desc':"Sick Event (Bakery)", 'cid':[elli_id, 'f_sick_elli'], 'val':[_SICK_EVENT_AFF, 1],
					'red':(aff[elli_id] >= 250), 'sel':(aff[elli_id] < 250)
				});
			}
			// ELLI DREAM ANKLE
			if (flags['dream_elli'] == 0 && aff[elli_id] >= _DREAM_EVENT_MIN) {
				a.push({'desc':"DREAM (Village)", 'cid':[elli_id, 'f_dream_elli'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
			}
			if (flags['ankle_elli'] == 0 && aff[elli_id] >= (_ANKLE_EVENT_MIN - _MUS_BOX_AFF - 4)) {
				a.push({'desc':"ANKLE (Mtn)", 'cid':[elli_id, 'f_ankle_elli'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':false, 'sr':(flags['dream_elli'] == 0)});
			}

/*
			// MAYOR
			if (is_sunny == 1 && dow != "SUN") {
				if (aff[mayor_id] == 0) { a.push({'desc':"Meet", 'cid':mayor_id, 'val':4, 'sel':(is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow))}); }
				a.push({'desc':((dow == "SAT") ? "Talk (Lib 50%)" : "Talk"), 'cid':mayor_id, 'val':3, 'sr':(aff[mayor_id] == 0), 'sel':(d == 6 || !["WED", "SAT"].includes(dow))});
				a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':(!["WED", "SAT"].includes(dow) && is_sunny == 1)});
			}
*/
			// RICK
			// "Talk  " - 2 spaces
			// "Gift  " - 2 spaces
			if (is_sunny == 1 && !["WED", "SUN"].includes(dow)) {
				var num_rick_fixes = musboxes.reduce((a, b) => a + b, 0);
				if (aff[rick_id] > 38 && flags['cutscene_rick'] == 0 && dow != "SAT") {
					a.push({'desc':"Enter / Exit to clear Rick / Ann cutscene", 'iid':rick_id, 'imp':true});
				}
				if (aff[rick_id] == 0) { a.push({'desc':"Meet", 'cid':rick_id, 'val':4, 'sel':(dow != "SAT"), 't3':"Talk  "}); }
				a.push({'desc':"Talk  ", 'sel':(dow != "SAT"), 'sr':(aff[rick_id] == 0),
					'cid':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [rick_id, 'f_cutscene_rick'] : rick_id),
					'val':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [3, 1] : 3)
				});
				a.push({'desc':"Gift  ", 'cid':rick_id, 'val':3, 'sr':true,
					'sel':(dow != "SAT" && ((aff[rick_id] + (num_rick_fixes * 3)) < 160))
				});
				if (aff[rick_id] >= (_RICK_FIX_MIN - 6)) {
					a.push({'desc':"Rick Fix", 'sr':true, 'sel':(dow != "SAT"),
						'cid':['f_old_mus_box', 'f_new_mus_box'], 'val':[-1, 1], 't3':"Talk  "
					});
				}
				// Buy a Brush
				if (dow != "SAT" && flags['horse_brush'] == 0) {
					a.push({'desc':"Buy Brush (600)", 'cid':['v_gold', 'f_horse_brush'], 'val':[-600, 1], 'sr':true, 'sel':false});
				}
				if (dow == "THURS") {
					// ANN in RICKs shop
					// -1 sp " GIFT"
					// -1 sp " MUSBOX"
					if (aff[ann_id] == 0 || (d > 23 && [2, 12].includes(aff[ann_id]))) {
						a.push({'desc':"Meet", 'cid':ann_id, 'val':4, 'sel':false});
					}
					a.push({'desc':"Talk (Ricks Shop)", 'cid':ann_id, 'val':1, 'sr':(aff[ann_id] == 0), 'sel':false, 't2':" MusBox"});
					a.push({'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':false, 't2':a[a.length - 1]['desc']});
					a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':false, 't2':"Potato"});
					a.push({'desc':"Potato", 'cid':[ann_id, 'v_potatoes', 'v_potato_gifts'], 'val':[3, -1, 1], 'sr':true, 'sel':false, 't2':" Gift"});
					if (flags['recipe_ann'] == 0) {
						a[a.length - 1]['cid'] = ['f_recipe_ann', ann_id, 'v_potatoes', 'v_potato_gifts'];
						a[a.length - 1]['val'] = [1, 6, -1, 1];
					}
					a.push({'desc':("(" + musboxes[1] + " Musboxes Left)"), 'sr':true});
				}
			}

			// MARIA
			// " Talk " 1/2 spaces
			if (dow != "MON" && d > 40) {
				// Maria in library
				if (aff[maria_id] == 0) {
					a.push({'desc':"Meet", 'cid':maria_id, 'val':4,
						'sel':(is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow)),
						'red':(is_sunny == 0 || ["SAT", "SUN", "WED"].includes(dow))
					});
				}
				a.push({'desc':"Talk (Library)", 'cid':maria_id, 'val':1, 'sr':(aff[maria_id] == 0),
					'sel':((is_sunny == 1 || d == 30) && !["SAT", "SUN", "WED"].includes(dow)),
					'red':((is_sunny == 0 && d != 30) || ["SAT", "SUN", "WED"].includes(dow))
				});
				if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
					a[a.length - 1]['t2'] = "MusBox";
					a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1],
						'sr':true, 't2':a[a.length - 1]['desc'], 'sel':false
					});
				}
				a.push({'desc':" Gift  ", 'cid':maria_id, 'val':2, 'sr':true, 't2':"Cabbage",
					'sel':((is_sunny == 1 || d == 30) && !["SAT", "SUN", "WED"].includes(dow))
				});
				a.push({'desc':"Cabbage", 'sel':false, 't2':" Gift  ", 'sr':true,
					'cid':((flags['recipe_maria'] == 0) ? [maria_id, 'f_recipe_maria'] : maria_id),
					'val':((flags['recipe_maria'] == 0) ? [5, 1] : 3)
				});
				a.push({'desc':("(" + musboxes[0] + " Musboxes Left)"), 'sr':true});

				var may_id = get_npc_id('may');
				// MAY
				if (aff[may_id] < 100 && is_sunny == 0) {
					a.push({'desc':"Spam May (Library) [83 Talks]", 'cid':may_id, 'val':255, 'sel':false});
				}
			} else if (dow == "MON" && is_sunny == 0 && aff[maria_id] >= _SICK_EVENT_MIN && !flags["sick_maria"]) {
				// Sick Event
				a.push({'desc':"Sick Event", 'cid':[maria_id, "f_sick_maria"], 'val':[_SICK_EVENT_AFF, 1]});
/*
				a.push({'desc':"Talk (In House)", 'cid':mayor_id, 'val':3});
				a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':false});
*/
			}

			// Dog Karen to Pink
			if (aff[karen_id] < _PHOTO_MIN && is_sunny == 1) {
				var karen_loc = "(Carp House / Beach) [50%]";
				if (dow == "SUN") { karen_loc = "(Beach)"; }
				if (["MON", "THURS"].includes(dow)) {
					karen_loc = "(Vineyard / BAR)";
				} else if (aff[elli_id] >= _CUTSCENE_BEACH_MIN && flags['cutscene_beach'] == 0) {
					a.push({'desc':"WARNING: Cutscene plays at Beach", 'red':true});
					a.push({'desc':"Beach Cutscene", 'sr':true, 'sel':false, 'cid':'f_cutscene_beach', 'val':1});
				}
				a.push({'desc':("Dog Karen " + karen_loc + ((["FRI", "SAT"].includes(dow)) ? " / (BAR)" : "")),
					'imp':(d == 60), 'sel':(d == 60), 'red':(d != 60), 'iid':karen_id
				});
				if (aff[karen_id] < 158) {
					a.push({'desc':"158", 'cid':karen_id, 'val':((aff[karen_id] < 158) ? (158 - aff[karen_id]) : 0), 'sr':true, 'sel':false, 't2':["208", "240"]});
				}
				a.push({'desc':"208", 'cid':karen_id, 'val':((aff[karen_id] < 208) ? (208 - aff[karen_id]) : 0), 'sr':true, 'sel':false, 't2':["240"]});
				a.push({'desc':"240", 'cid':karen_id, 'val':((aff[karen_id] < 240) ? (240 - aff[karen_id]) : 0), 'sr':true, 'sel':false, 't2':["208"]});
				if (aff[karen_id] < 158) {
					a[a.length - 1]['t2'].push("158");
					a[a.length - 2]['t2'].push("158");
				}
			}
			if (flags['ankle_karen'] == 0 && aff[kai_id] > 20) {
				a.push({'desc':"Ankle to Kai", 'sel':false, 'red':(d != 60),
					'cid':[karen_id, kai_id, 'f_ankle_karen'],
					'val':[-30, 20, 1]
				});
			}

			if (flags['new_mus_box'] == 0 && flags['chicken_route'] == 1) {
				// ANN
				if (dow != "THURS") {
					// ANN
					// -1 sp " GIFT"
					// -1 sp " MUSBOX"
					a.push({'desc':((dow == "SUN") ? "Talk (Ranch 50%)" : "Talk (Ranch)"),
						'cid':ann_id, 'val':1, 't2':" MusBox",
						'sel':(d == 31 || ann_sick_event || (!["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1 && aff[ann_id] < 160))
					});
					a.push({'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':a[a.length - 1]['desc'], 'sel':false});
					a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 't2':"Potato/Corn",
					       'sel':(d == 31 || ann_sick_event || (!["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1 && aff[ann_id] < 160))
					});
					a.push({'desc':"Potato/Corn", 'cid':[ann_id, 'v_potatoes', 'v_potato_gifts'], 'val':[3, -1, 1], 'sr':true, 't2':" Gift", 'sel':false});
					if (flags['recipe_ann'] == 0) {
						a[a.length - 1]['cid'] = ['f_recipe_ann', ann_id, 'v_potatoes', 'v_potato_gifts'];
						a[a.length - 1]['val'] = [1, 6, -1, 1];
					}
					if (ann_sick_event) {
						a.push({'desc':"Sick Event", 'cid':[ann_id, 'f_sick_ann'], 'val':[_SICK_EVENT_AFF, 1], 'imp':true});
					}
					a.push({'desc':("(" + musboxes[1] + " Musboxes Left)"), 'sr':true});

					if (vars['chickens'] > 0) {
						a.push({'desc':"Sell Chicken", 'cid':['v_chickens', 'v_gold'], 'val':[-1, 500], 'iid':get_npc_id('doug'), 'sel':false});
					}
				}

				if (is_sunny == 1 && dow == "MON") {
					// ELLI Beach
					// "Gift " <- 1 space
					if (aff[elli_id] >= _CUTSCENE_BEACH_MIN && flags['cutscene_beach'] == 0 && aff[karen_id] > 100) {
						// Beach cutscene between Karen and Elli occurs when Elli is >= 145-ish
						a.push({'desc':"WARNING: Cutscene plays at Beach", 'red':true});
						a.push({'desc':"Beach Cutscene", 'sr':true, 'sel':false, 'cid':'f_cutscene_beach', 'val':1});
						a.push({'desc':"Talk (Beach)", 'cid':elli_id, 'val':1, 't2':"MusBox ", 'red':true, 'sel':false, 't3':"Beach Cutscene"});
						a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':false, 't2':a[a.length - 1]['desc'], 't3':"Beach Cutscene"});
					} else {
						a.push({'desc':"Talk (Beach)", 'cid':elli_id, 'val':1, 't2':"MusBox "});
						a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':false, 't2':a[a.length - 1]['desc']});
					}
					a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"M/L Fish", 'sel':false});
					a.push({'desc':"M/L Fish", 'sr':true, 't2':"Gift ", 'cid':elli_id, 'val':3, 'sel':false});
					if (flags['chicken_route'] == 1) {
						a[a.length - 1]['t2'] = ["Egg", "Gift "];
						a[a.length - 2]['t2'] = ["Egg", "M/L Fish"];
						a.push({'desc':"Egg", 'sr':true, 't2':["M/L Fish", "Gift "],
							'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
							'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4),
							'sel':(aff[elli_id] < _CUTSCENE_BEACH_MIN || flags['cutscene_beach'] == 1)
						});
					}
					a.push({'desc':("(" + musboxes[2] + " Musboxes Left)"), 'sr':true});
				}
			}

			// Restore the Vineyard
			if (flags['vineyard_restored'] == 0 && flags['wine_from_duke'] != 0) {
				// Restore the Vineyard
				a.push({'desc':"Restore the Vineyard", 'cid':['f_vineyard_restored', 'f_dontsave'], 'val':[1, 1], 'iid':get_npc_id('goddess'), 'sel':false});
			}

			if (d == 31) {	
				// CORN
				a.push({'desc':"Equip Corn", 'imp':true});
				a.push({'desc':"Plant Corn", 'iid':get_npc_id('lillia'), 'cid':['v_gold', 'f_corn_planted'], 'val':[-300, 1], 'sr':true});
				a.push({'desc':"Equip Watering Can"});
				a.push({'desc':"Water Corn", 'cid':['v_watering_can_fill', 'v_corn_waters'], 'val':[-10, 1], 'sr':true});
				a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true, 'sel':false});
			}

			// BAR
			if (dow != "SUN" && flags['wine_from_duke'] == 0) {
				var duke_id = get_npc_id('bartender');
				a.push({'desc':"Talk", 'cid':duke_id, 'val':3, 'sr':(aff[duke_id] == 0), 'sel':(d == 31) });
				a.push({'desc':"Gift", 'cid':duke_id, 'val':3, 'sel':(a[a.length - 1]['sel']), 'sr':true});
				a.push({'desc':"Get Wine", 'cid':'f_wine_from_duke', 'val':1, 'sr':true, 'sel':false});
				if (aff[duke_id] < 40) {
					a.push({'desc':("(" + Math.ceil((40 - aff[duke_id]) / 6) + " visit" + ((Math.ceil((34 - aff[duke_id]) / 6) == 1) ? "" : "s") + " left)"), 'sr':true});
				}

				if (aff[kai_id] > 20) { a.push({'desc':"Talk (In Bar)", 'cid':kai_id, 'val':2, 'sel':false}); }
			}

			if (d == 31) { // Fireworks Festival
				a.push({'desc':"Fireworks (Ranch)", 'cid':[ann_id, 'f_dontsave'], 'val':[5, 1], 'imp':true});
				a.push({'desc':"FAST TEXT GLITCH", 'sr':true});
				if (aff[ann_id] >= 55) {
					// Bonus Sparkler Scene at 55 aff or higher
					a[a.length - 2]['cid'].push('v_happiness');
					a[a.length - 2]['val'].push(5);
				}
			}
		} // End !festival

		// Horse Affection
		a.push({'desc':"Whistle Horse", 'val':1, 'cid':horse_id});
		a.push({'desc':((flags['horse'] == 1) ? "Ride": "Talk"), 'val':1, 'cid':a[a.length - 1]['cid'], 'sr':true, 'sel':false});
		a.push({'desc':"Brush", 'val':2, 'cid':horse_id, 'sr':true, 'sel':false});

		// Feed dog
		a.push({'desc':"Feed Dog", 'cid':dog_id, 'val':2, 'sel':false});
	} // End !typhoon

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
