actions_photos_spr_y1b = function (a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id('ann');
	var basil_id = get_npc_id('basil');
	var cliff_id = get_npc_id('cliff');
	var chicken_id = get_npc_id('chicken');
	var dog_id = get_npc_id('dog');
	var doug_id = get_npc_id('doug');
	var elli_id = get_npc_id('elli');
	var goddess_id = get_npc_id('goddess');
	var grey_id = get_npc_id('grey');
	var horse_id = get_npc_id('horse');
	var kai_id = get_npc_id('kai');
	var karen_id = get_npc_id('karen');
	var kent_id = get_npc_id('kent');
	var maria_id = get_npc_id('maria');
	var may_id = get_npc_id('may');
	var mayor_id = get_npc_id('mayor');
	var popuri_id = get_npc_id('popuri');
	var rick_id = get_npc_id('rick');
	var sprite_id = get_npc_id('sprite');
	var musbox_id = get_npc_id('musbox');

	var dow = get_dow(d, true);
	var has_opener = false;
	var lumber_to_sprite = ((aff[sprite_id] >= _SPRITE_SPAM_MAX) ? 0 : (((_SPRITE_SPAM_MAX - aff[sprite_id]) > 6) ? 6 : ((_SPRITE_SPAM_MAX - aff[sprite_id]))));
	var reset = "";

	var kai_maxed = (aff[kai_id] >= (160 - (((flags['ankle_karen'] == 0) ? 20 : 0) + 16 + 3))); // Two Swims and a Cow Win (other festival talks too, so there's a buffer)
	var kai_visits = Math.ceil((160 - (((flags['ankle_karen'] == 0) ? 20 : 0) + 16 + 3 + aff[kai_id])) / 8);

	var musboxes = musbox_count (aff[maria_id], aff[ann_id], aff[elli_id], d, flags['chicken_route']);

	if (d == 3) {
		flags['chicken_route'] = 1;
		a.push({'desc':"Chicken Route:", 'iid':chicken_id});
		a.push({'desc':"Yes", 'sr':true, 'sel':(flags['chicken_route'] == 1), 'cid':'f_chicken_route', 'val':(1 - flags['chicken_route']),
			't1':"No", 't2':"No"
		});
		a.push({'desc':"No", 'sr':true, 'sel':(flags['chicken_route'] != 1), 'cid':'f_chicken_route', 'val':(0 - flags['chicken_route']), 't1':"Yes", 't2':"Yes"});
	}
	if (d == 10 && vars['chickens'] > 0) { a.push({'desc':"Grab 1 Egg", 'iid':chicken_id, 'imp':true}); }
	if (d == 11 && vars['chickens'] > 0) { a.push({'desc':"No Work Before Strength Berry", 'iid':goddess_id, 'imp':true}); }
	if (d == 29 && flags['chicken_route'] == 0) {
		a.push({'desc':"Check Weather, if rainy tomorrow,", 'imp':true, 'iid':karen_id});
		a.push({'desc':"Dog Karen to YELLOW (Vineyard)", 'cid':karen_id, 'val':(150 - aff[karen_id]), 'sel':false, 'sr':true});
	}

	// Dog Affection
	if (flags['dog_inside'] == 1) {
		a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
	}

	if (d == 3) { // Spring 3
		a.push({'desc':"Equip hammer, Scythe to toolbox <b>[RT A DWN DWN A RT RT A UP A UP DWN A LEFT A]</b>"}); // <b>[A UP A RT A DWN DWN A]</b>
		a.push({'desc':"Greet the Mayor", 'iid':mayor_id});
		a.push({'desc':"Hammer Rocks, Till 3 x 3 square"});
		a.push({'desc':"Equip axe, chop 1 stump", 'iid':get_npc_id('stump'), 'imp':true});
		a.push({'desc':"ed, ber, flower"});
	} else if (d < 8) { // Spring 4 - 8
		if (flags['chicken_route'] == 1 && [4, 5].includes(d) && is_sunny == 0 && g < 1500) { reset = ("No Rain on Spr " + d); }
		if (g > 1500 && is_sunny == 1) {
			a.push({'desc':"Equip Watering Can", 'imp':true});
			a.push({'desc':"Water Potatoes", 'sr':true, 'cid':['v_potato_waters', 'v_watering_can_fill'], 'val':[1, -10]});
		}
	}

	if ([15, 19].includes(d)) { a.push({'desc':"Ignore Basil on the Farm", 'iid':basil_id}); }
	if (d == 18) { a.push({'desc':"Food to Cliff", 'cid':cliff_id, 'val':5, 'sel':false}); }

	if (is_festival(d)) {
		// Planting (Spr 8), Horse Race (Spr 17), Flower Fest (Spr 23)
		if (d == 8) { // Planting Fest
			if (flags['potato_planted'] > 0 && is_sunny == 1) {
				a.push({'desc':"Equip Watering Can", 'imp':true});
				a.push({'desc':"Water Potatoes", 'sr':true, 'cid':['v_potato_waters', 'v_watering_can_fill'], 'val':[1, -10]});
				a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true, 'sel':false});
			}
		}
		if (d == 23) { // Flower Fest
			a.push({'desc':"Go to Town Square", 'iid':mayor_id, 'cid':'v_happiness', 'val':5, 'imp':true});
			a.push({'desc':"Buy a Power Nut", 'cid':['f_berry_flowerfest','v_gold'],
					'val':[1, -1000], 'iid':get_npc_id('salesman'), 'sel':false, 'red':true
			});
			a.push({'desc':"Talk", 'cid':rick_id, 'val':2});
			// a.push({'desc':"Talk", 'cid':mayor_id, 'val':2});
			a.push({'desc':"Talk", 'cid':kent_id, 'val':2});
			if (aff[kai_id] > 20) {
				a.push({'desc':"Talk", 'cid':kai_id, 'val':2, 'sel':(aff[kai_id] >= 50)});
			}
			if (aff[cliff_id] > 20) {
				a.push({'desc':"Talk", 'cid':cliff_id, 'val':2, 'sel':(aff[cliff_id] >= 50)});
			}
			a.push({'desc':"Talk", 'cid':maria_id, 'val':2});
			a.push({'desc':"Dance",'cid':[maria_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance ", "Dance  "], 'sr':true, 'sel':false});
			a.push({'desc':"Talk", 'cid':elli_id, 'val':2});
			a.push({'desc':"Dance ",'cid':[elli_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance", "Dance  "], 'sel':false, 'sr':true, 'sel':(flags['chicken_route'] == 0)});
			a.push({'desc':"Talk", 'cid':ann_id, 'val':2});
			a.push({'desc':"Dance  ",'cid':[ann_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance", "Dance "], 'sel':(flags['chicken_route'] == 1), 'sr':true});
		}
	} else { // Not a Festival
		if (d > 8 || (flags['chicken_route'] == 1 && d > 3 && g < 1500)) {
			if (!flags['treasure_map']) {
				a.push({'desc':"Treasure Map", 'cid':'f_treasure_map', 'val':1,
					'sr':(lumber_to_sprite > 0 && dow == "MON" && is_sunny == 1),
					'sel':(!["SAT", "SUN", "WED"] && is_sunny == 1)
				});
			}

			if (vars['chickens'] > 0 && flags['new_chick'] < 2) {
				if (flags['new_chick'] == 1) {
					a.push({'desc':"New Chick", 'iid':chicken_id, 't0':"Incubate", 'iid':chicken_id,
						'cid':["v_new_chicken_days", "f_new_chick"], 'val':[d + _CHICK_GROW_SLEEPS, -1], 'sel':false,
						'imp':(is_sunny == 1 && vars['chickens'] < 3 && ["MON", "TUES", "THURS", "FRI"].includes(dow))
					});
				}
				a.push({'desc':"Incubate", 'cid':"f_new_chick", 'val':(_CHICK_BORN_SLEEPS + 1),
					'sr':(flags['new_chick'] == 1), 'iid':chicken_id, 'red':(d == 10),
					'sel':(d == 11 && vars['new_chicken_days'].length == 0),
					'imp':(d == 11 && vars['new_chicken_days'].length == 0)
				});
			}

			// Music Box Dig
			if (flags['old_mus_box'] == 0 && d > 8) {
				has_opener = true;
				if (d == 9 && flags['chicken_route'] == 1 && is_sunny == 1) { a.push({'desc':"Equip Hammer, Clear Path to Musbox"}); }
				a.push({'desc':"Equip hoe", 'iid':musbox_id, 'red':(is_sunny == 0 || ["WED", "SAT", "SUN"].includes(dow))});
				a.push({'desc':"Dig Music Box", 'cid':'f_old_mus_box', 'val':1, 'sr':true, 'iid':musbox_id,
					'sel':(is_sunny == 1 && !["WED", "SAT", "SUN"].includes(dow))
				});
				if (flags['berry_farm'] == 0) {
					a.push({'desc':"Dig a Berry", 'val':1, 'cid':'f_berry_farm', 'sr':true, 'sel':false});
				}
			}

			if (flags['potato_planted'] > 0 && is_sunny == 1) {
				if (!(flags['chicken_route'] == 1 && vars['chickens'] > 0 && ([12, 15].includes(d) || (dow == "MON" && d > 15)))) {
					a.push({'desc':"Equip Watering Can", 'imp':(d < 9)});
					a.push({'desc':"Water Potatoes", 'sr':true, 'sel':(d < 9),
						'cid':['v_potato_waters', 'v_watering_can_fill'], 'val':[1, -10]
					});
					a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true, 'sel':false});
				}
			}
		}
		if (flags['potato_planted'] > 0 && is_sunny == 1 && d < 9 && flags['chicken_route'] == 0) {
			a.push({'desc':"Equip Watering Can", 'imp':(d < 9)});
			a.push({'desc':"Water Potatoes", 'sr':true, 'sel':(d < 9),
				'cid':['v_potato_waters', 'v_watering_can_fill'], 'val':[1, -10]
			});
			a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true, 'sel':false});
		}

		// Supports multiple potato plots
		if (vars['potato_waters'] >= _POTATO_GROW_DAYS) {
			a.push({'desc':"Get Potato for Ann", 'iid':ann_id});
		}

		// Fishing Rod
		if (flags['fishing_rod'] == 0) {
			a.push({'desc':"Get Fishing Rod", 'val':1, 'cid':'f_fishing_rod', 'iid':get_npc_id('fisherman'),
				'sel':((d == 3 || d > 8) && is_sunny == 1), 'red':(d != 3 && d <= 8 || is_sunny == 0)
			});
			if (d == 3) { a.push({'desc':"Catch Large Fish", 'sr':true}); }
		}

		if (d == 3) {
			var stump_id = get_npc_id('stump');
			//a.push({'desc':"Equip Axe, Cross Bridge, Chop 1 Stump, Grab Flower", 'imp':true, 'iid':stump_id});
			a.push({'desc':"Buy Potato Seeds", 'cid':['v_gold', 'v_potatoes_bought'], 'val':[-200, 1], 'iid':get_npc_id('lillia')});
			a.push({'desc':"Meet", 'cid':elli_id, 'val':4});
			a.push({'desc':"Talk (Flower Shop)", 'cid':elli_id, 'val':1, 'sr':true});
			a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 't2':"M/L Fish", 'sr':true});
			a.push({'desc':"M/L Fish", 't2':"Gift ", 'cid':[elli_id, 'v_happiness'], 'sel':false , 'val':[3, 1], 'sr':true});
			a.push({'desc':"Meet", 'cid':maria_id, 'val':4, 'sel':false, 'red':true});
			a.push({'desc':"Talk", 'cid':maria_id, 'val':1, 'sr':true, 'sel':false});
			a.push({'desc':"Flower", 'cid':maria_id, 'val':2, 'sr':true, 'sel':false});
			a.push({'desc':"Equip Seeds + Fish, Sell Fish", 'imp':true});
			a.push({'desc':"Plant Potatoes", 'sr':true, 'cid':'f_potato_planted', 'val':1});
			a.push({'desc':"Equip Watering Can"});
			a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true});
			a.push({'desc':"Treasure Map", 'cid':'f_treasure_map', 'val':1, 'sr':true});
			a.push({'desc':"Get 6 Lumber for Sprites", 'imp':true, 'iid':stump_id});
			a.push({'desc':"Water 3 Potatoes", 'cid':['v_potato_waters', 'v_watering_can_fill'], 'val':[1, -10]});
		} else if ((d > 8 || (flags['chicken_route'] == 1 && d < 7 && g < 1500)) && !is_festival(d)) { // Skip days until Potatoes come in
			// Get Horse
			if (flags['horse'] == 0 && is_sunny == 1 && d > 8) {
				a.push({'desc':'Get Horse', 'cid':'f_horse', 'val':21, 'iid':horse_id,
					'sel':(d == 9 || (!is_festival(d) && !["SAT", "SUN", "WED", "THURS"].includes(dow))),
					'imp':(!is_festival(d) && !["SAT", "SUN", "WED", "THURS"].includes(dow))
				});
				a.push({'desc':"Fast Text Glitch", 'sr':true});
			}
			if (flags['chicken_route'] == 1 && vars['chickens'] == 0 && g >= 1500 && dow != "THURS") {
				a.push({'desc':"Get Chicken", 'cid':['v_gold', 'v_chickens'], 'val':[-1500, 1], 'iid':doug_id, 
					'sel':(is_sunny == 1 && (d == 9 || (!is_festival(d) && !["SAT", "SUN", "WED", "THURS"].includes(dow))))
				});
			}

			if (dow != "THURS") {
				if (is_sunny == 1 && flags['cutscene_cliff_farm'] == 0 && aff[cliff_id] > 90) {
					a.push({'desc':"RANCH CUTSCENE, Fast Text", 'imp':true, 'iid':cliff_id});
					a.push({'desc':"Cliff Cutscene", 'val':1, 'cid':"f_cutscene_cliff_farm", 'sr':true, 'sel':false});
				}

				// ANN
				// -1 sp " GIFT"
				// -1 sp " MUSBOX"
				var ann_sick_event = (dow == "SUN" && is_sunny == 0 && flags['sick_ann'] == 0 && aff[ann_id] < _PHOTO_MIN && d != 63 && 
						      aff[ann_id] >= (_SICK_EVENT_MIN - (4 + 1 + 5 * flags['new_mus_box'])));
				if (aff[ann_id] == 0) {
					a.push({'desc':"Meet", 'cid':ann_id, 'val':4, 'red':(d < 7),
						'sel':(["MON", "TUES", "FRI"].includes(dow) && is_sunny == 1 && d > 8),
					});
				}
				a.push({'desc':((dow == "SUN") ? "Talk (Ranch 50%)" : "Talk (Ranch)"), 'cid':ann_id, 'val':1, 'red':(d < 7), 'sr':(aff[ann_id] == 0),
					'sel':(flags['new_mus_box'] == 0 && ["MON", "TUES", "FRI"].includes(dow) && d > 8 && (is_sunny == 1 || d == 30))
				});
				a.push({'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':a[a.length - 1]['desc'],
					'sel':(flags['new_mus_box'] == 1 && ["MON", "TUES", "FRI"].includes(dow) && d > 8 && (is_sunny == 1 || d == 30))
				});
				a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':false, 't2':"Potato"});
				a.push({'desc':"Potato", 'cid':[ann_id, 'v_potatoes', 'v_potato_gifts'], 'val':[3, -1, 1], 'sr':true, 't2':" Gift",
					'sel':(["MON", "TUES", "FRI"].includes(dow) && d > 8 && (is_sunny == 1 || d == 30))
				});
				if (flags['recipe_ann'] == 0) {
					a[a.length - 1]['cid'] = ['f_recipe_ann', ann_id, 'v_potatoes', 'v_potato_gifts'];
					a[a.length - 1]['val'] = [1, 5, -1, 1];
				}
				if (ann_sick_event) {
					a.push({'desc':"Sick Event", 'cid':[ann_id, 'f_sick_ann'], 'val':[_SICK_EVENT_AFF, 1], 'imp':true});
				}
				a.push({'desc':("(" + musboxes[1] + " Musboxes Left)"), 'sr':true});

				if (flags['chicken_route'] == 1 && vars['chickens'] > 0) {
					a.push({'desc':"Sell Chicken", 'cid':['v_chickens', 'v_gold'], 'val':[-1, 500], 'iid':get_npc_id('doug'), 'sel':(dow == "MON" && d > 15)});
				}

				// Cliff
				if (d > 17 && ["WED", "TUES"].includes(dow) && is_sunny == 1) {
					if (aff[cliff_id] == 5 || aff[cliff_id] == 0) {
						// Cliff's intro gives affection to GRAY
						a.push({'desc':"Meet", 'cid':grey_id, 'val':4, 'sel':false, 'iid':cliff_id});
					}
					a.push({
						'desc':("Talk (" + ((dow == "WED") ? "Ranch" : "Beach") + ")"),
						'cid':cliff_id, 'val':2, 'sel':false, 'sr':([0, 5].includes(aff[cliff_id]))
					});
					a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
					a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
				}
			}
			
			// Dog Karen on Spr 30?
			if (d == 30 && flags['dream_karen'] == 0) {
				if (is_sunny == 1) {
					a.push({'desc':"Dog Karen to 240 (Beach / Carp House) [50%] [10 AM]", 'sel':(flags['chicken_route'] == 0),
						'cid':karen_id, 'val':(240 - aff[karen_id]), 'imp':(flags['chicken_route'] == 0), 'red':(flags['chicken_route'] == 1)
					});
				} else {
					a.push({'desc':"Sick Event", 'cid':[karen_id, 'f_sick_karen'], 'val':[_SICK_EVENT_AFF, 1],
						'sel':(flags['chicken_route'] == 0), 'imp':(flags['chicken_route'] == 0)
					});
				}
			}

			// Kappa Berry
			if (!flags['berry_kappa']) {
				a.push({'desc':"Large fish to Kappa", 'cid':'f_berry_kappa', 'val':1, 'iid':get_npc_id('kappa'), 'sel':false, 'red':(flags['chicken_route'] == 1 && vars['chickens'] == 0)});
			}
			// Strength Wish Power Berry
			var str_berry = (flags['berry_strength'] == 0 && vars['chickens'] > 0 && aff[rick_id] < _RICK_FIX_MIN && d > 10 && is_sunny == 1 && !["WED", "SAT", "SUN"].includes(dow))
			if (flags['berry_strength'] == 0 && (vars['chickens'] > 0 || vars['potato_waters'] >= _POTATO_GROW_DAYS)) {
				a.push({'desc':"Wish for Strength (Middle)", 'cid':'f_berry_strength', 'val':1, 'iid':goddess_id,
					'sel':(vars['chickens'] > 0 && aff[rick_id] < _RICK_FIX_MIN && d > 10 && is_sunny == 1 && !["WED", "SAT", "SUN"].includes(dow)),
					'imp':(vars['chickens'] > 0 && aff[rick_id] < _RICK_FIX_MIN && d > 10 && is_sunny == 1 && !["WED", "SAT", "SUN"].includes(dow)),
					'red':(aff[rick_id] >= _RICK_FIX_MIN || flags['chicken_route'] == 0 || d <= 10)
				});
			}

			// Blue Mist Flower
			if (d != 4 && flags['photo_popuri'] == 0) {
				a.push({'desc':"Water Flower by Pond", 'iid':popuri_id, 'red':str_berry, 'imp':(!str_berry && flags['chicken_route'] == 1 && d == 6)});
				a.push({'desc':"Blue Mist Flower Glitch", 'cid':'f_photo_popuri', 'val':1, 'sr':true,
					'sel':(flags['chicken_route'] == 1 && d == 6 && !str_berry),
				});
			}

			var tmp_spr_aff = aff[sprite_id];
			// SPRITE
			if (lumber_to_sprite > 0) {
				var lum_desc = "";
				if (aff[sprite_id] < (21 - 6)) {
					a.push({'desc':"Flower", 'cid':sprite_id, 'val':1, 'sel':(flags['chicken_route'] == 1 && d < 7)});
				}
				a.push({'desc':(lumber_to_sprite + " Gifts to Inner Sprite (Right Side)"), 'sr':(aff[sprite_id] < (21 - 6)),
					'cid':sprite_id, 'val':lumber_to_sprite, 'sel':(flags['chicken_route'] == 1 && d < 7)
				});
				if (tmp_spr_aff >= 18) { a.push({'desc':"INNER SPRITE FIRST!", 'sr':true}); }
				tmp_spr_aff += lumber_to_sprite;
			}
			if (aff[sprite_id] % 7 == 0 && aff[sprite_id] < 35) {
				a.push({'desc':"Meet", 'cid':sprite_id, 'val':5, 'sel':(flags['chicken_route'] == 1 && d == 6 && aff[sprite_id] >= 14),
					'red':(tmp_spr_aff < 18 || is_sunny == 0)
				});
				if (tmp_spr_aff > 18) { tmp_spr_aff += 5 };
			}
			a.push({'desc':"Talk", 'cid':sprite_id, 'val':1, 'sr':(aff[sprite_id] % 7 == 0 && aff[sprite_id] < 35),
					'sel':(str_berry || (flags['chicken_route'] == 1 && d == 6)), 'red':(aff[sprite_id] >= _SPRITE_WINE_MIN)
			});
			a.push({'desc':"Gift", 'cid':sprite_id, 'val':2, 'sr':true, 'sel':(a[a.length - 1]['sel'])});
			if (tmp_spr_aff > 18) { tmp_spr_aff += 3; }
			if (aff[sprite_id] > 20) {
				a.push({'desc':("(" + Math.ceil((50 - aff[sprite_id]) / 3) + " Visits Left)"), 'sr':true})
			}

			// Flower
			if (d == 4 && flags['photo_popuri'] == 0) {
				a.push({'desc':"Water Flower by Pond", 'iid':popuri_id});
				a.push({'desc':"Blue Mist Flower Glitch", 'cid':'f_photo_popuri', 'val':1, 'sr':true, 'sel':false});
			}

			// Cliff
			if (d > 17 && ["THURS", "FRI", "SAT", "SUN"].includes(dow) && is_sunny == 1) {
				var cliff_loc = " (Fish Tent) [50%]";
				if (dow == "THURS") { cliff_loc = " (Carp House)"; }
				if (dow == "SUN") { cliff_loc = " (Carp House) [50%]"; }
				if (aff[cliff_id] == 5 || aff[cliff_id] == 0) {
					// Cliff's intro gives affection to GRAY
					a.push({'desc':"Meet", 'cid':grey_id, 'val':4, 'iid':cliff_id, 'sel':false});
				}
				a.push({
					'desc':("Talk" + cliff_loc), 'cid':cliff_id, 'val':2, 'sel':false, 'sr':(aff[cliff_id] == 5 || aff[cliff_id] == 0)
				});
				a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
				a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
			}

			if (dow == "MON" && is_sunny == 1) {
				// Cliff
				if (d > 17) {
					if (aff[cliff_id] == 5 || aff[cliff_id] == 0) {
						// Cliff's intro gives affection to GRAY
						a.push({'desc':"Meet", 'cid':grey_id, 'val':4, 'iid':cliff_id, 'sel':false});
					}
					a.push({'desc':"Talk (Hot Springs)", 'cid':cliff_id, 'val':2, 'sel':false, 'sr':(aff[cliff_id] == 5 || aff[cliff_id] == 0)});
					a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
					a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
				}

				// ELLI (in Mtns)
				if (aff[elli_id] == 0) { a.push({'desc':"Meet", 'cid':elli_id, 'val':4}); }
				a.push({'desc':"Talk (MTN)", 'cid':elli_id, 'val':1, 'sr':(aff[elli_id] == 0)});
				if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
					a[a.length - 1]['t2'] = "MusBox ";
					a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						'sel':false, 't2':a[a.length - 1]['desc']
					});
				}
				a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"M/L Fish", 'sel':(flags['chicken_route'] == 0 || d < 12)});
				a.push({'desc':"M/L Fish", 'sr':true, 't2':"Gift ", 'cid':[elli_id, 'v_happiness'], 'val':[3, 1], 'sel':false});
				if (flags['chicken_route'] == 1) {
					a[a.length - 1]['t2'] = ["Egg", "Gift "];
					a[a.length - 2]['t2'] = ["Egg", "M/L Fish"];
					a.push({'desc':"Egg", 'sr':true, 'sel':(d >= 12), 't2':["M/L Fish", "Gift "],
						'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
						'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
					});
				}
				a.push({'desc':("(" + musboxes[2] + " Musboxes Left)"), 'sr':true});

				// MARIA
				if (aff[maria_id] == 0) { a.push({'desc':"Meet", 'cid':maria_id, 'val':4}); }
				a.push({'desc':"Talk (MTN / CHUR)", 'cid':maria_id, 'val':1, 'sr':(aff[maria_id] == 0), 'sel':(flags['new_mus_box'] == 0 || flags['chicken_route'] == 1)});
				if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
					a[a.length - 1]['t2'] = "MusBox";
					a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						'sel':(flags['new_mus_box'] == 1 && flags['chicken_route'] == 0), 't2':a[a.length - 1]['desc']
					});
				}
				a.push({'desc':" Gift  ", 'cid':maria_id, 'val':2, 'sr':true, 't2':"Cabbage"});
				a.push({'desc':"Cabbage", 'sel':false, 't2':" Gift  ", 'sr':true,
					'cid':((flags['recipe_maria'] == 0) ? [maria_id, 'f_recipe_maria'] : maria_id),
					'val':((flags['recipe_maria'] == 0) ? [5, 1] : 3)
				});
				a.push({'desc':("(" + musboxes[0] + " Musboxes Left)"), 'sr':true});
			}

			// a.push({'desc':"ed, ber, flower, Fish for Elli"}); // Quick gifts for villagers

			// KAI
			if (flags['karen_ankle'] == 0 && flags['chicken_route'] == 0 && d == 30 && is_sunny == 1) {
				a.push({'desc':"DONT VISIT VINEYARD, KAREN ANKLE", 'red':true, 'iid':karen_id});
			}
			if (aff[kai_id] == 0) { a.push({'desc':"Meet", 'cid':kai_id, 'val':8, 'sel':false, 'red':([5, 6].includes(d) && flags['chicken_route'] == 1)}); }
			a.push({'desc':"Talk (Vineyard)", 'cid':kai_id, 'val':2, 'sr':(aff[kai_id] == 0), 'sel':false, 'red':(kai_maxed || (d == 30 && flags['chicken_route'] == 0))});
			a.push({'desc':"Berry", 'sr':true, 'sel':false, 't2':"  Gift ",
				'cid':((flags['recipe_kai'] == 0) ? [kai_id, 'f_recipe_kai'] : kai_id),
				'val':((flags['recipe_kai'] == 0) ? [5, 1] : 6)
			});
			a.push({'desc':"  Gift ", 'cid':kai_id, 'val':3, 'sr':true, 'sel':false, 't2':"Berry"});
			if (d > 6) { a.push({'desc':("(" + kai_visits + " Visits Left)"), 'sr':true}); }

			// ELLI
			// "Gift " <- one space
			// "Talk " <- one space
			var elli_sick_event = (is_sunny == 0 && aff[elli_id] >= _SICK_EVENT_MIN && flags['sick_elli'] == 0);
			if (!["SUN", "MON"].includes(dow)) {
				if (aff[elli_id] == 0) { a.push({'desc':"Meet", 'cid':elli_id, 'val':4, 'sel':(!["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1)}); }
				a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : "Talk (Bakery)"), 'cid':elli_id, 'val':1,
					'sr':(aff[elli_id] == 0), 't2':"MusBox ",
					'sel':((elli_sick_event && dow == "WED" && flags['new_mus_box'] == 0) ||
						(flags['chicken_route'] == 1 && (d == 6 || (is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow)))))
				});
				a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':a[a.length - 1]['desc'],
					'sel':((flags['chicken_route'] == 0 && is_sunny == 1 && !["SAT", "WED"].includes(dow) && aff[rick_id] >= _RICK_FIX_MIN) ||
						(flags['chicken_route'] == 0 && elli_sick_event && dow == "WED" && flags['new_mus_box'] == 1)),
				});
				a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"M/L Fish",
					'sel':((flags['chicken_route'] == 0 || vars['chickens'] == 0) && (d == 6 || (is_sunny == 1 && !["WED", "SAT"].includes(dow))))
				});
				a.push({'desc':"M/L Fish", 'sr':true, 't2':"Gift ", 'cid':[elli_id, 'v_happiness'], 'val':[3, 1], 'sel':false});
				if (flags['chicken_route'] == 1) {
					a[a.length - 1]['t2'] = ["Egg", "Gift "];
					a[a.length - 2]['t2'] = ["Egg", "M/L Fish"];
					a.push({'desc':"Egg", 'sr':true, 't2':["M/L Fish", "Gift "],
						'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
						'sel':(vars['chickens'] > 0 && is_sunny == 1 && !["WED", "SAT"].includes(dow)),
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

			a.push({'desc':"Buy Potato Seeds", 'cid':['v_gold', 'v_potatoes_bought'], 'val':[-200, 1], 'iid':get_npc_id('lillia'),
				'sel':false, 'red':(flags['chicken_route'] == 1 && vars['chickens'] == 0 && g < 1500)
			});
/*
			// MAYOR
			if (is_sunny == 1 && dow != "SUN") {
				if (aff[mayor_id] == 0) { a.push({'desc':"Meet", 'cid':mayor_id, 'val':4, 'sel':(is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow))}); }
				a.push({'desc':((dow == "SAT") ? "Talk (Lib 50%)" : "Talk"), 'cid':mayor_id, 'val':3, 'sr':(aff[mayor_id] == 0), 'sel':(d == 6 || !["WED", "SAT"].includes(dow))});
				a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':(!["WED", "SAT"].includes(dow) && is_sunny == 1)});
			}
*/
			// RICK (Chicken Route)
			// "Talk  " - 2 spaces
			// "Gift  " - 2 spaces
			if (flags['chicken_route'] == 0 && is_sunny == 1 && !["WED", "SUN"].includes(dow)) {
				if (aff[rick_id] > 38 && flags['cutscene_rick'] == 0 && dow != "SAT") {
					a.push({'desc':"Enter / Exit to clear Rick / Ann cutscene", 'iid':rick_id, 'imp':true});
				}
				if (aff[rick_id] == 0) { a.push({'desc':"Meet", 'cid':rick_id, 'val':4, 'sel':(dow != "SAT"), 't3':"Talk  "}); }
				a.push({'desc':"Talk  ", 'sel':(dow != "SAT"), 'sr':(aff[rick_id] == 0),
					'cid':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [rick_id, 'f_cutscene_rick'] : rick_id),
					'val':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [3, 1] : 3)
				});
				a.push({'desc':"Gift  ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':(dow != "SAT")});
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

			if ([19, 20, 21, 22].includes(d)) { a.push({'desc':"Vote for Goddess", 'red':true, 'iid':get_npc_id('goddess')}); }

			// MARIA
			// " Talk" -1 spaces
			if (dow != "MON") {
				// Maria in library
				if (aff[maria_id] == 0) {
					a.push({'desc':"Meet", 'cid':maria_id, 'val':4,
						'sel':((is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow)) || (d == 30 && flags['chicken_route'] == 0 && flags['sick_karen'] == 0 && is_sunny == 0) || d == 6),
						'red':((is_sunny == 0 || ["SAT", "SUN", "WED"].includes(dow)) && (d != 30 || flags['chicken_route'] == 1 || flags['sick_karen'] == 1) && d != 6)
					});
				}
				a.push({'desc':"Talk (Library)", 'cid':maria_id, 'val':1, 'sr':(aff[maria_id] == 0),
					'sel':((is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow)) || (d == 30 && flags['chicken_route'] == 0 && flags['sick_karen'] == 0 && is_sunny == 0) || d == 6),
					'red':((is_sunny == 0 || ["SAT", "SUN", "WED"].includes(dow)) && (d != 30 || flags['chicken_route'] == 1 || flags['sick_karen'] == 1) && d != 6)
				});
				if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
					a[a.length - 1]['t2'] = "MusBox";
					a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1],
						'sr':true, 't2':a[a.length - 1]['desc'], 'sel':false
					});
				}
				a.push({'desc':" Gift  ", 'cid':maria_id, 'val':2, 'sr':true, 't2':"Cabbage",
					'sel':((is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow)) || (d == 30 && flags['chicken_route'] == 0 && flags['sick_karen'] == 0 && is_sunny == 0) || d == 6)
				});
				a.push({'desc':"Cabbage", 'sel':false, 't2':" Gift  ", 'sr':true,
					'cid':((flags['recipe_maria'] == 0) ? [maria_id, 'f_recipe_maria'] : maria_id),
					'val':((flags['recipe_maria'] == 0) ? [5, 1] : 3)
				});
				a.push({'desc':("(" + musboxes[0] + " Musboxes Left)"), 'sr':true});

				// MAY
				if (aff[may_id] < 100 && is_sunny == 0) {
					var may_spam_count = Math.ceil((160 - ((aff[may_id] == 0) ? 7 : 3)) / 3);
					a.push({'desc':"Spam May (Library) [" + may_spam_count + " Talks]",
						'cid':may_id, 'val':(may_spam_count * 3), 'sel':false, 'red':true
					});
				}
			} else if (is_sunny == 0 && aff[maria_id] >= _SICK_EVENT_MIN && !flags["sick_maria"]) {
				// Sick Event
				a.push({'desc':"Sick Event", 'cid':[maria_id, "f_sick_maria"], 'val':[_SICK_EVENT_AFF, 1]});
			}

			// RICK (Chicken Route)
			// "Talk  " - 2 spaces
			// "Gift  " - 2 spaces
			if (flags['chicken_route'] == 1 && is_sunny == 1 && !["WED", "SUN"].includes(dow)) {
				if (aff[rick_id] > 38 && flags['cutscene_rick'] == 0 && dow != "SAT") {
					a.push({'desc':"Enter / Exit to clear Rick / Ann cutscene", 'iid':rick_id, 'imp':true});
				}
				if (aff[rick_id] == 0) { a.push({'desc':"Meet", 'cid':rick_id, 'val':4, 'sel':(dow != "SAT"), 't3':"Talk  "}); }
				a.push({'desc':"Talk  ", 'sel':(dow != "SAT"), 'sr':(aff[rick_id] == 0),
					'cid':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [rick_id, 'f_cutscene_rick'] : rick_id),
					'val':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [3, 1] : 3)
				});
				a.push({'desc':"Gift  ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':(dow != "SAT")});
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

			// MAY
			if (aff[may_id] < 100 && is_sunny == 1) {
				var may_spam_count = Math.ceil((160 - (aff[may_id] + ((aff[may_id] == 0) ? 7 : 3))) / 3);
				var may_loc = ((dow == "SAT") ? "By Library" : "Church");
				a.push({'desc':"Spam May (" + may_loc + ") [" + may_spam_count + " Talks]",
					'cid':may_id, 'val':(may_spam_count * 3), 'sel':false, 'red':(dow != "SAT")
				});
			}

			// POTATOES
			if (vars['potatoes_bought'] == 0) {
				a.push({'desc':"Buy Potato Seeds", 'cid':['v_gold', 'v_potatoes_bought'], 'val':[-200, 1], 'iid':get_npc_id('lillia'), 'imp':true});
			}

			// Potatoes; Equip before entering farm screen
			if (vars['potatoes_bought'] == 0) { // || (d == 30 && is_sunny == 1)) {
				a.push({'desc':"Equip Seeds", 'imp':true});
				a.push({'desc':"Plant Potatoes", 'sr':true,
						'cid':((d == 30) ? 'v_potatoes' : 'f_potato_planted'),
						'val':((d == 30) ? 9 : 1)
				});
			}

			if (flags['chicken_route'] == 1 && d < 7) {
				a.push({'desc':"Fishing, then Bar"});
				if (flags['berry_ocean'] == 0) { a.push({'desc':"Ocean Berry", 'cid':'f_berry_ocean', 'val':1, 'sel':false, 'sr':true}); }
			}

			if (dow != "SUN" && flags['wine_from_duke'] == 0) {
				// BAR
				var duke_id = get_npc_id('bartender');
				if (aff[duke_id] == 0) {
					a.push({'desc':"Meet", 'cid':duke_id, 'val':3, 'imp':(flags['chicken_route'] == 1 && d < 7),
						'sel':((flags['chicken_route'] == 0 && d == 30) || (flags['chicken_route'] == 1 && d < 7))
					});
				}
				if (flags['wine_from_duke'] == 0) {
					var duke_visits_left = Math.ceil((40 - aff[duke_id]) / 6);
					if (duke_visits_left < 0) { duke_visits_left = 0; }
					a.push({'desc':"Talk", 'cid':duke_id, 'val':3, 'sr':(aff[duke_id] == 0), 'imp':(flags['chicken_route'] == 1 && d < 7),
						'sel':(d == 30 || (flags['chicken_route'] == 1 && d < 7)), 'red':(duke_visits_left < 2 && d < 30)
					});
					a.push({'desc':"Gift", 'cid':duke_id, 'val':3, 'sel':(a[a.length - 1]['sel']), 'sr':true});
					a.push({'desc':"Get Wine", 'cid':'f_wine_from_duke', 'val':1, 'sr':true, 'sel':false});
					a.push({'desc':("(" + duke_visits_left + " visit" + ((Math.ceil((34 - aff[duke_id]) / 6) == 1) ? "" : "s") + " left)"), 'sr':true});
				}

				// KAI
				a.push({'desc':"Talk (In Bar)", 'cid':kai_id, 'val':2, 'sel':false});

				// Cliff
				if (d >= 18) { a.push({'desc':"Talk (In Bar)", 'cid':cliff_id, 'val':1, 'sel':false}); }
				if (d == 16) { a.push({'desc':"Keep food for Cliff", 'imp':(aff[kai_id] < 20), 'iid':cliff_id}); }
			}
		} // End of if (d > 8)
	}

	if (flags['horse'] > 0 || (d >= 9 && is_sunny == 1 && !is_festival(d))) {
		if (flags['horse_brush'] == 1) { a.push({'desc':"Equip Brush", 'iid':horse_id}); }
		a.push({'desc':"Whistle Horse", 'val':1, 'cid':horse_id, 'sr':(flags['horse_brush'] == 1),
			'sel':(flags['horse'] > 0 || (!["WED", "SAT", "SUN", "THURS"].includes(dow) && !is_festival(d) && is_sunny == 1))
		});
		a.push({'desc':((flags['horse'] == 1) ? "Ride": "Talk"), 'val':1, 'cid':horse_id, 'sr':true, 'sel':false});
		a.push({'desc':"Brush", 'val':2, 'cid':horse_id, 'sr':true, 'sel':false});
	}

	// Dog
	if (d == 3) { a.push({'desc':"Whistle Dog", 'cid':dog_id, 'val':1}); }
	if (flags['dog_inside'] == 0) {
		a.push({'desc':"Bring Dog Inside", 'cid':'f_dog_inside', 'val':1, 'iid':dog_id, 'sr':(d == 3)});
	}
	a.push({'desc':"Feed Dog", 'cid':dog_id, 'val':2, 'sel':false, 'red':(vars['chickens'] == 0)});

	if (d == 30) {
		a.push({'desc':(((flags['chicken_route'] == 0) ? "Plant" : "Pocket") + " All Potatoes"), 'imp':true});
		if (is_sunny == 0 && flags['sick_karen'] == 0) {
			a.push({'desc':"Sick Event", 'cid':[karen_id, 'f_sick_karen'], 'val':[_SICK_EVENT_AFF, 1]});
		}
		a.push({'desc':"Day Skipped", 'cid':['v_day', 'f_dontsave'], 'val':[1, 1], 'sel':(flags['chicken_route'] == 0), 'red':(flags['chicken_route'] == 1)});
	}
	if (reset.length > 0) {
		flags['dontsave'] = false;
		a = [{'desc':"RESET", 'red':true}, {'desc':("REASON: " + reset)}];
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
