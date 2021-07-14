actions_photos_spr_y1a = function (a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id('ann');
	var basil_id = get_npc_id('basil');
	var chicken_id = get_npc_id('chicken');
	var cliff_id = get_npc_id('cliff');
	var dog_id = get_npc_id('dog');
	var elli_id = get_npc_id('elli');
	var grey_id = get_npc_id('grey');
	var horse_id = get_npc_id('horse');
	var kai_id = get_npc_id('kai');
	var karen_id = get_npc_id('karen');
	var maria_id = get_npc_id('maria');
	var may_id = get_npc_id('may');
	var mayor_id = get_npc_id('mayor');
	var popuri_id = get_npc_id('popuri');
	var rick_id = get_npc_id('rick');
	var sprite_id = get_npc_id('sprite');
	var musbox_id = get_npc_id('musbox');

	var dow = get_dow(d, true);
	var has_opener = false;
	var lumber_to_sprite = ((aff[sprite_id] >= _SPRITE_SPAM_MAX || d == 3) ? 0 : (((_SPRITE_SPAM_MAX - aff[sprite_id]) > 6) ? 6 : ((_SPRITE_SPAM_MAX - aff[sprite_id]))));
	var get_horse = (flags['horse'] == 0 && vars['chickens'] == 0 && g >= 1500 && dow != "THURS" && is_sunny == 1 && !is_festival(d));
	var visit_ranch = get_horse;
	var chicken_action = [];
	var reset = "";

	// Strength Berry on Spr 9
	if (flags['berry_strength'] == 0 && d == 9) {
		a.push({'desc':"No Stamina Use Today", 'imp':true});
		a.push({'desc':"Equip Fishing Rod", 'sr':true});
	}

	if (d == 29) {
		a.push({'desc':"Check Weather, if rainy tomorrow,", 'imp':true, 'iid':karen_id});
		a.push({'desc':"Dog Karen to YELLOW (Vineyard)", 'cid':karen_id, 'val':(150 - aff[karen_id]), 'sel':false, 'sr':true});
	}

	// Dog Affection
	if (flags['dog_inside'] == 1) {
		a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
	}

	if (d == 3) { // Spring 3
		a.push({'desc':"Equip hammer, Scythe to toolbox <b>[RT A DWN DWN A RT RT A UP A]</b>"}); // <b>[A UP A RT A DWN DWN A]</b>
		a.push({'desc':"Greet the Mayor", 'iid':mayor_id});
		a.push({'desc':"Till 3 x 3 square"});
	}
	if (d == 4) { // Spring 4
		if (is_sunny == 0) { reset = "No Rain on Spr 4"; }
		a.push({'desc':"Equip axe", 'iid':get_npc_id('stump')});
		a.push({'desc':"Chop One Stump", 'imp':true, 'val':6, 'cid':'v_lumber', 'sr':true});
		a.push({'desc':"Equip Watering Can, sell edible herb"});
	}
	if (d == 5 && is_sunny == 0) { reset = "No Rain on Spr 5"; }
	if (d == 7 && g < 1500) { reset = "Can't afford a chicken"; }

	if ([15, 19].includes(d)) { a.push({'desc':"Ignore Basil on the Farm", 'iid':basil_id}); }
	if (d == 18) { a.push({'desc':"Food to Cliff", 'cid':cliff_id, 'val':5}); }

	// New Chicken
	if (vars['new_chicken_days'].length > 0 && parseInt(vars['new_chicken_days'].substr(0,3)) == d) {
		a.push({'desc':"Big Chicken", 'iid':chicken_id, 'imp':(d == 26)});
		//if (d == 26) { a.push({'desc':"BRING OUTSIDE", 'sr':true}); }
	}

	// Bring Chicken Inside / Outside
	if (vars['chickens'] > 0 && (flags['chicken_outside'] == 0 || (is_sunny == 0 && !is_festival(d)))) {
		has_opener = true;
		if (is_sunny == 0) {
			if (vars['feed'] == 0 && dow != "THURS" && vars['gold'] > 0) {
				var tmp_seeds = (((10 - vars['feed']) < Math.floor(vars['gold'] / 10)) ? (10 - vars['feed']) : Math.floor(vars['gold'] / 10));
				if (tmp_seeds > 0) {
					a.push({'desc':"Buy " + tmp_seeds + " Feed", 'cid':['v_gold', 'v_feed'],
						'val':[-10 * tmp_seeds, tmp_seeds], 'iid':get_npc_id('doug'), 'sel':false
					});
					if (tmp_seeds > 3) { a.push({'desc':"Buy 3 Feed", 'cid':['v_gold', 'v_feed'], 'val':[-30, 3], 'sel':false, 'sr':true}); }
				}
			}
			if (flags['chicken_outside'] == 1) {
				a.push({'desc':"Bring Chicken Inside", 'val':-1, 'cid':'f_chicken_outside',
					'imp':(d < 12), 'sel':(d < 12), 'red':(d == 26), 'iid':chicken_id
				});
			}
			if (vars['feed'] > 0) {
				a.push({'desc':"Feed Chicken", 'cid':'v_feed', 'val':-1, 'sr':(flags['chicken_outside'] == 1),
					'imp':(flags['chicken_outside'] == 0), 'sel':false
				});
				if (flags['chicken_outside'] == 0) { a[a.length - 1]['iid'] = chicken_id; }
			}
		} else if (d != 26) {
			a.push({'desc':"Bring Chicken Outside", 'val':1, 'cid':'f_chicken_outside', 'imp':true});
		}
		if (vars['new_chicken_days'].length > 0 && parseInt(vars['new_chicken_days'].substr(0,3)) == d) {
			a[a.length - 1]['sr'] = true;
		} else {
			a[a.length - 1]['iid'] = chicken_id;
		}
	}

	if (is_festival(d)) {
		// Planting (Spr 8), Horse Race (Spr 17), Flower Fest (Spr 23)

		if (flags['chicken_inside'] == 1) {
			if (sell_stuff) { a.push({'desc':"Sell Stuff"}); }
			if (flags['old_mus_box'] == 0) {
				a.push({'desc':"Equip hoe", 'iid':musbox_id});
				a.push({'desc':"Dig Music Box", 'cid':'f_old_mus_box', 'val':1, 'sr':true});
				if (flags['berry_farm'] == 0) {
					a.push({'desc':"Dig a Berry", 'val':1, 'cid':'f_berry_farm', 'sr':true, 'sel':false});
				}
			}
			if (vars['watering_can_fill'] < 30) {
				a.push({'desc':"Equip Watering Can"});
				a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true});
			}
		}

		if (d == 8) { // Planting Fest
			if (vars['chickens'] > 0) {
				a.push({'desc':"Get Egg", 'imp':true, 'iid':chicken_id});
			}
		}

		if (d == 23) { // Flower Fest
			a.push({'desc':"Go to Town Square", 'iid':mayor_id, 'cid':'v_happiness', 'val':5, 'imp':true});
			a.push({'desc':"Buy a Power Nut", 'cid':['f_berry_flowerfest','v_gold'],
					'val':[1, -1000], 'iid':get_npc_id('salesman'), 'sel':false, 'red':true
			});
			a.push({'desc':"Talk", 'cid':rick_id, 'val':2});
			a.push({'desc':"Talk", 'cid':mayor_id, 'val':2});
			a.push({'desc':"Talk", 'cid':maria_id, 'val':2});
			a.push({'desc':"Dance",'cid':[maria_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance ", "Dance  "], 'sr':true});
			a.push({'desc':"Talk", 'cid':elli_id, 'val':2});
			a.push({'desc':"Dance ",'cid':[elli_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance", "Dance  "], 'sel':false, 'sr':true});
			a.push({'desc':"Talk", 'cid':ann_id, 'val':2});
			a.push({'desc':"Dance  ",'cid':[ann_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance", "Dance "], 'sel':false, 'sr':true});
		}
	} else { // Not a Festival

		// Chicken
		if (d > 8 && (dow == "MON" || [12, 19].includes(d) || (["TUES", "THURS"].includes(dow) && vars['chickens'] > 3))) {
			if (flags['new_chick'] == 1) {
				a.push({'desc':"SAVE EGG FOR INCUBATION", 'imp':true});
			}
			if ((dow == "MON" || (["TUES", "THURS"].includes(dow) && vars['chickens'] > 3)) && d > 15) {
				chicken_action.push({'desc':"Sell Chicken", 'cid':['v_chickens', 'v_gold'], 'val':[-1, 500], 'iid':get_npc_id('doug'),
						     'imp':(is_sunny == 1), 'sel':(is_sunny == 1)
				});
				if (vars['feed'] < 4) {
					var tmp_seeds = (((10 - vars['feed']) < Math.floor(vars['gold'] / 10)) ? (10 - vars['feed']) : Math.floor(vars['gold'] / 10));
					if (tmp_seeds > 0) {
						chicken_action.push({
							'desc':("Buy " + tmp_seeds + " Feed"), 'sr':true, 'sel':false,
							'cid':['v_gold', 'v_feed'], 'val':[10 * tmp_seeds, tmp_seeds]
						});
					}
				}
				visit_ranch = true;
			}
			if (flags['new_chick'] == 1) {
				chicken_action.push({'desc':"New Chick", 'iid':chicken_id, 'cid':["v_new_chicken_days", "f_new_chick"],
						'val':[d + _CHICK_GROW_SLEEPS, -1], 't0':"Incubate", 'imp':true, 'sr':(dow == "MON" && vars['chickens'] > 1)
				});
				chicken_action.push({'desc':"Incubate", 'cid':"f_new_chick", 'val':(_CHICK_BORN_SLEEPS + 1), 'sr':true});
			}
			if ([12, 15, 19].includes(d)) {
				a = a.concat(chicken_action);
				chicken_action = [];
			}
		} else {
			if (vars['chickens'] > 0 && flags['new_chick'] <= 1) {
				has_opener = true;
				if (flags['new_chick'] != 1 && vars['new_chicken_days'].length > 0 && parseInt(vars['new_chicken_days'].substr(0,3)) == d) {
					a.push({'desc':"Bring Chicken Outside", 'iid':chicken_id, 'sr':true, 'val':1, 'cid':'f_chicken_outside'});
				}

				// new chk | incubate
				if (flags['new_chick'] == 1) {
					a.push({'desc':"New Chick", 'iid':chicken_id, 'cid':["v_new_chicken_days", "f_new_chick"], 'sel':false,
							'val':[d + _CHICK_GROW_SLEEPS, -1], 't0':"Incubate", 'red':true
					});
				}
				a.push({'desc':"Incubate", 'cid':"f_new_chick", 'val':(_CHICK_BORN_SLEEPS + 1),
						'iid':chicken_id, 'sr':(flags['new_chick'] == 1), 'sel':(d == 9), 'red':(d > 12), 'imp':(d == 9)
				});
				if (flags['new_chick'] == 1) { a[a.length - 1]['t3'] = "New Chick"; }
			}
		}

		if (d == 4) {
			a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill'])});
			if (!flags['treasure_map']) {
				a.push({'desc':"Treasure Map", 'cid':'f_treasure_map', 'val':1, 'sr':true});
			}
		}

		if (lumber_to_sprite > 0) {
			a.push({'desc':("Get " + lumber_to_sprite + " Lumber from Bin"), 'imp':true, 'iid':get_npc_id('stump')});
		}

		if ((flags['potato_planted'] > 0 && d > 3) || d >= 6) {
			// Music Box Dig
			if (d > 4 && flags['old_mus_box'] == 0 && !get_horse && (dow != "SUN" || flags['new_mus_box'] == 0) && 
				(flags['berry_kappa'] == 1 || aff[rick_id] >= (_RICK_FIX_MIN - 6))) {
				has_opener = true;
				a.push({'desc':"Equip hoe", 'iid':musbox_id, 'red':(dow == "SUN" || d == 9)});
				if (!flags['treasure_map']) {
					a.push({'desc':"Treasure Map", 'cid':'f_treasure_map', 'val':1, 'sr':true});
				}
				a.push({'desc':"Dig Music Box", 'cid':'f_old_mus_box', 'val':1, 'sr':true, 'iid':musbox_id,
					'sel':((flags['berry_strength'] == 1 || d != 9) && is_sunny == 1 && !["WED", "SAT", "SUN"].includes(dow))
				});
				if (flags['berry_farm'] == 0) {
					a.push({'desc':"Dig a Berry", 'val':1, 'cid':'f_berry_farm', 'sr':true, 'sel':false});
				}
			}

			if (flags['potato_planted'] > 0 && vars['potato_waters'] < _POTATO_GROW_DAYS && is_sunny == 1) {
				if (d > 4) {
					a.push({'desc':"Equip Watering Can",
						'imp':((d - vars['potato_waters']) == 16),
						'red':(flags['berry_strength'] == 0 && d == 9)
					});
				}
				a.push({'desc':"Water Potatoes", 'sr':true,
					'cid':['v_potato_waters', 'v_watering_can_fill'], 'val':[1, -10],
					'sel':(((d - vars['potato_waters']) == 16) || (d < 7 && (flags['berry_strength'] == 1 || d != 9)))
				});
				if (d > 4) {
					a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true, 'sel':false});
				}
			}
		}

		// Supports multiple potato plots
		if (vars['potato_waters'] >= _POTATO_GROW_DAYS) {
			a.push({'desc':"Get Potato for Ann", 'iid':ann_id});
		}

		// Dog Karen on Spr 30?
		if (d == 30) {
			a.push({'desc':"Dog Karen to Pink (Beach / Carp House) [50%] [10 AM]", 'cid':karen_id, 'val':(208 - aff[karen_id]), 'sel':false});	
		}

		// Fishing Rod
		if (flags['fishing_rod'] == 0) {
			a.push({'desc':"Get Fishing Rod", 'val':1, 'cid':'f_fishing_rod', 'iid':get_npc_id('fisherman')});
		}

		// Kappa Berry
		if (d > 3 && !flags['berry_kappa'] && !get_horse) {
			a.push({'desc':"Large fish to Kappa", 'cid':'f_berry_kappa', 'val':1, 'iid':get_npc_id('kappa'), 'sel':(d == 9),
					'red':(get_horse || (vars['chickens'] == 0 && vars['gold'] < 1500))
			});
		}

		var musbox_to_ann = false;
		if (d == 3) {
			a.push({'desc':"ed, ber, flower, Catch Fish"});
			a.push({'desc':"Buy Potato Seeds", 'cid':['v_gold', 'v_potatoes_bought'], 'val':[-200, 1], 'iid':get_npc_id('lillia'), 'imp':true});
			a.push({'desc':"Meet", 'cid':elli_id, 'val':4});
			a.push({'desc':"Talk (Flower Shop)", 'cid':elli_id, 'val':1, 'sr':true});
			a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 't2':"M/L Fish", 'sr':true});
			a.push({'desc':"M/L Fish", 't2':"Gift ", 'sel':false, 'cid':[elli_id, 'v_happiness'], 'val':[3, 1], 'sr':true});
			a.push({'desc':"Equip Seeds + berry, Sell berry", 'imp':true});
			a.push({'desc':"Plant Potatoes", 'sr':true, 'cid':'f_potato_planted', 'val':1});
		} else if (d > 3 && !is_festival(d)) { // Skip Spr3 Y1 (WED)
			if (get_horse) {
				// Buy Chicken and get Horse
				var doug_id = get_npc_id('doug');

				a.push({'desc':"Equip Hammer, clear path to music box, Grab 1 Rock", 'imp':true});

				// Get Horse
				a.push({'desc':'Get Horse', 'cid':'f_horse', 'val':21, 'iid':horse_id, 'imp':true});
				a.push({'desc':"Rock Desc. for Fast Text Glitch", 'sr':true});

				// ANN
				// -1 sp " GIFT"
				// -1 sp " MUSBOX"
				if (aff[ann_id] == 0) { a.push({'desc':"Meet", 'cid':ann_id, 'val':4, 'sel':(dow != "SUN")}); }
				a.push({'desc':((dow == "SUN") ? "Talk (Ranch 50%)" : "Talk"), 'cid':ann_id, 'val':1, 'sr':(aff[ann_id] == 0), 'sel':(dow != "SUN")});
				if (flags['new_mus_box'] == 1) {
					musbox_to_ann = true;
					a[a.length - 1]['t2'] = " MusBox";
					a.push({'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':true, 't2':a[a.length - 1]['desc']});
				}
				a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':(vars['potatoes'] == 0 && dow != "SUN"), 't2':"Potato"});
				a.push({'desc':"Potato", 'cid':[ann_id, 'v_potatoes'], 'val':[3, -1], 'sr':true, 'sel':(vars['potatoes'] > 0 && dow != "SUN"), 't2':" Gift"});
				if (flags['recipe_ann'] == 0) {
					a[a.length - 1]['cid'] = ['f_recipe_ann', ann_id, 'v_potatoes'];
					a[a.length - 1]['val'] = [1, 6, -1];
				}

				// Cliff
				if (d > 17 && ["WED", "TUES"].includes(dow)) {
					if (aff[cliff_id] == 5 || aff[cliff_id] == 0) {
						// Cliff's intro gives affection to GRAY
						a.push({'desc':"Meet", 'cid':grey_id, 'val':4, 'sel':(dow == "WED"), 'iid':cliff_id});
					}
					a.push({
						'desc':("Talk (" + ((dow == "WED") ? "Ranch" : "Beach") + ")"),
						'cid':cliff_id, 'val':2, 'sel':false, 'sr':([0, 5].includes(aff[cliff_id]))
					});
					a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
					a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
				}

				// Buy a Chicken + Feed
				a.push({'desc':"Buy a Chicken", 'cid':['v_chickens', 'v_gold'], 'val':[1, -1500], 'iid':doug_id});
				var tmp_seeds = Math.floor((g - 1500) / 10);
				tmp_seeds = (tmp_seeds > 10) ? 10 : tmp_seeds;
				if (tmp_seeds > 0) {
					a.push({'desc':"Buy " + tmp_seeds + " Feed", 'cid':['v_gold', 'v_feed'], 'val':[10 * tmp_seeds, tmp_seeds], 'sr':true, 'sel':false});
				}
			}

			var tmp_spr_aff = aff[sprite_id];
			// SPRITE
			if (dow != "SUN") {
				if (lumber_to_sprite > 0) {
					var lum_desc = "";
					if (aff[sprite_id] < (21 - 6)) {
						a.push({'desc':"Flower", 'cid':sprite_id, 'val':1});
					}
					a.push({'desc':(lumber_to_sprite + " Lumber to Inner Sprite (Right Side)"), 'sr':(aff[sprite_id] < (21 - 6)),
							'cid':[sprite_id, 'v_lumber'], 'val':[lumber_to_sprite, -1 * lumber_to_sprite]
					});
					if (tmp_spr_aff >= 18) { a.push({'desc':"INNER SPRITE FIRST!", 'sr':true}); }
					tmp_spr_aff += lumber_to_sprite;
				}
				if (aff[sprite_id] % 7 == 0 && aff[sprite_id] < 35) {
					a.push({'desc':"Meet", 'cid':sprite_id, 'val':5, 'sel':(tmp_spr_aff > 18), 'red':tmp_spr_aff < 18});
					if (tmp_spr_aff > 18) { tmp_spr_aff += 5 };
				}
				a.push({'desc':"Talk", 'cid':sprite_id, 'val':1, 'sr':(aff[sprite_id] % 7 == 0 && aff[sprite_id] < 35),
						'sel':([6, 9].includes(d)), 'red':(aff[sprite_id] >= _SPRITE_WINE_MIN)
				});
				a.push({'desc':"Gift", 'cid':sprite_id, 'val':2, 'sr':true, 'sel':(a[a.length - 1]['sel'])});
				if (tmp_spr_aff > 18) { tmp_spr_aff += 3; }
			}

			if ((vars['chickens'] == 0 && g < 1500) || (dow == "MON" && is_sunny == 1) || d == 9) {
				// Mountain visit
				// No chicken yet || MONDAY

				// FORAGE
				if (dow != "SUN") {
					if (d < 15) {
						a.push({'desc':("cave all, ber, " + ((d == 4) ? "3 flowers, HOLD CLOVER" : "clover, 3 flowers"))});
					} else {
						a.push({'desc':"MTN forage, ed, ber, flower"});
					}
				}

				// Cliff
				if (d > 17 && ["THURS", "FRI", "SAT", "SUN"].includes(dow)) {
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

				// Strength Wish Power Berry
				if (flags['berry_strength'] == 0 && vars['chickens'] > 0) {
					a.push({'desc':"Wish for Strength (Middle)", 'cid':'f_berry_strength', 'val':1, 'iid':get_npc_id('goddess'), 'imp':(d == 9), 
							'sel':(d == 9 || (flags['old_mus_box'] == 1 && (vars['potato_waters'] >= _POTATO_GROW_DAYS || flags['potato_planted'] == 0)))
					});
				}
				// Blue Mist Flower
				if (flags['photo_popuri'] == 0) {
					if (d == 4) {
						a.push({'desc':"Water Flower by Pond", 'iid':popuri_id});
					} else if (d < 7) {
						a.push({
							'desc':((d == 6) ? "Leave/Re-enter Screen" : ("BMF Scene #" + (d - 3))),
							'iid':popuri_id, 'imp':(d == 6)
						});
					}
					a.push({'desc':"Blue Mist Flower Glitch", 'iid':popuri_id, 'cid':'f_photo_popuri', 'val':1, 'sel':(d == 6), 'sr':true});
				}
				if (tmp_spr_aff < _SPRITE_SPAM_MAX && d > 3) {
					a.push({'desc':"Equip Axe, Chop One Stump", 'imp':true, 'val':6, 'cid':'v_lumber', 'iid':get_npc_id('stump')});
					//if (d == 4) { a.push({'desc':"SELL CLOVER", 'sr':true}); }
				}

				if (dow == "MON" && is_sunny == 1) {
					// ELLI (in Mtns)
					if (aff[elli_id] == 0) { a.push({'desc':"Meet", 'cid':elli_id, 'val':4}); }
					a.push({'desc':"Talk (MTN)", 'cid':elli_id, 'val':1, 'sr':(aff[elli_id] == 0)});
					a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true,
						't2':((vars['chickens'] > 0) ? ["Egg", "M/L Fish"] : "M/L Fish"),
						'sel':(d != 24 && (vars['chickens'] == 0 || flags['new_chick'] == 1))
					});
					a.push({
						'desc':((vars['chickens'] > 0) ? "Egg" : "M/L Fish"), 'sr':true,
						't2':((vars['chickens'] > 0) ? ["Gift ", "M/L Fish"] : "Gift "),
						'sel':(d == 24 || (vars['chickens'] > 0 && flags['new_chick'] != 1)),
						'cid':((vars['chickens'] > 0) ? ((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id) : [elli_id, 'v_happiness']),
						'val':((vars['chickens'] > 0) ? ((flags['recipe_elli'] == 0) ? [1, 6] : 4) : [3, 1])
					});
					if (vars['chickens'] > 0) {
						a.push({'desc':"M/L Fish", 'sr':true, 't2':["Gift ", "Egg"],
								'cid':[elli_id, 'v_happiness'],
								'val':[3, 1], 'sel':false
						});
					}

					// MARIA
					if (aff[maria_id] == 0) { a.push({'desc':"Meet", 'cid':maria_id, 'val':4}); }
					a.push({'desc':"Talk (MTN / CHUR)", 'cid':maria_id, 'val':1, 'sr':(aff[maria_id] == 0),
							'sel':(aff[rick_id] < (_RICK_FIX_MIN - 6) || flags['new_mus_box'] == 0)});
					if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
						a[a.length - 1]['t2'] = "MusBox";
						a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
							'sel':(flags['new_mus_box'] == 1), 't2':a[a.length - 1]['desc']
						});
					}
					a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true});

					// Cliff
					if (d > 17) {
						if (aff[cliff_id] == 5 || aff[cliff_id] == 0) {
							// Cliff's intro gives affection to GRAY
							a.push({'desc':"Meet", 'cid':grey_id, 'val':4, 'iid':cliff_id, 'imp':true});
						}
						a.push({'desc':"Talk (Hot Springs)", 'cid':cliff_id, 'val':2, 'sel':false, 'sr':(aff[cliff_id] == 5 || aff[cliff_id] == 0),
							'sel':(aff[cliff_id] == 5 || aff[cliff_id] == 0), 'imp':true
						});
						a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':(a[a.length - 1]['sel'] && vars['chickens'] < 2), 't2':"   Egg   ", 'sr':true});
						a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':(a[a.length - 2]['sel'] && vars['chickens'] > 1), 't2':"   Gift   ", 'sr':true});
					}
				}

			} else if (!get_horse && dow != "SUN") { // End of [Mountain visit]
				a.push({'desc':("ed, ber, flower")}); // Quick gifts for villagers

				// Strength Wish Power Berry
				if (flags['berry_strength'] == 0 && vars['chickens'] > 0) {
					a.push({'desc':"Wish for Strength (Middle)", 'cid':'f_berry_strength', 'val':1, 'iid':get_npc_id('goddess'), 
							'sel':(flags['old_mus_box'] == 1 && (vars['potato_waters'] >= _POTATO_GROW_DAYS || flags['potato_planted'] == 0))
					});
				}
				// Blue Mist Flower
				if (flags['photo_popuri'] == 0) {
					if (flags['berry_strength'] == 1 || vars['chickens'] == 0) {
						a.push({'desc':"Water Flower by Pond", 'iid':popuri_id});
					}
					a.push({'desc':"Blue Mist Flower Glitch", 'iid':popuri_id, 'cid':'f_photo_popuri', 'val':1, 'sel':false, 'sr':true});
				}

				// Cliff
				if (d > 17 && ["FRI", "SAT"].includes(dow) && is_sunny == 1) {
					if (aff[cliff_id] == 5 || aff[cliff_id] == 0) {
						// Cliff's intro gives affection to GRAY
						a.push({'desc':"Meet", 'cid':grey_id, 'val':4, 'iid':cliff_id, 'sel':false});
					}
					a.push({'desc':"Talk (Fish Tent) [50%]", 'cid':cliff_id, 'val':2, 'sel':false, 'sr':(aff[cliff_id] == 5 || aff[cliff_id] == 0)});
					a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
					a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
				}
			}

			a = ((aff[may_id] < 50) ? elli_spry1a(a, d, g, is_sunny) : maria_spry1a(a, d, g, is_sunny));

			// MAYOR
			if (is_sunny == 1 && dow != "SUN") {
				if (aff[mayor_id] == 0) { a.push({'desc':"Meet", 'cid':mayor_id, 'val':4}); }
				a.push({'desc':((dow == "SAT") ? "Talk (Lib 50%)" : "Talk"), 'cid':mayor_id, 'val':3, 'sr':(aff[mayor_id] == 0), 'sel':(d == 6 || !["WED", "SAT"].includes(dow))});
				a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':((d < 7 || flags['horse_brush'] == 1 || g >= 600) && !["WED", "SAT"].includes(dow))});
			}

			// RICK (NO NEW BOX IN INVENTORY)
			// "Talk  " - 2 spaces
			// "Gift  " - 2 spaces
			if (is_sunny == 1 && !["WED", "SUN"].includes(dow)) {
				if (aff[rick_id] > 38 && flags['cutscene_rick'] == 0 && dow != "SAT") {
					a.push({'desc':"Enter / Exit to clear Rick / Ann cutscene", 'iid':rick_id, 'imp':true});
				}
				if (aff[rick_id] == 0) { a.push({'desc':"Meet", 'cid':rick_id, 'val':4, 'sel':(dow != "SAT"), 't3':"Talk  "}); }
				a.push({'desc':"Talk  ", 'sel':(dow != "SAT"), 'sr':(aff[rick_id] == 0),
					'cid':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [rick_id, 'f_cutscene_rick'] : rick_id),
					'val':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [3, 1] : 3)
				});
				a.push({'desc':"Gift  ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':(dow != "SAT" && (d < 7 || flags['horse_brush'] == 1 || g >= 600))});
				if (aff[rick_id] >= (_RICK_FIX_MIN - 6)) {
					a.push({'desc':"Rick Fix", 'sr':true, 'sel':(dow != "SAT"),
						'cid':['f_old_mus_box', 'f_new_mus_box'], 'val':[-1, 1], 't3':"Talk  "
					});
				}
				// Buy a Brush
				if (dow != "SAT" && vars['chickens'] > 0 && flags['horse_brush'] == 0) {
					a.push({'desc':"Buy Brush (600)", 'cid':['v_gold', 'f_horse_brush'], 'val':[-600, 1], 'sr':true, 'sel':(g >= 600)});
				}
				if (dow == "THURS") {
					// ANN in RICKs shop
					if (aff[ann_id] == 0 || (d > 23 && [2, 12].includes(aff[ann_id]))) {
						a.push({'desc':"Meet", 'cid':ann_id, 'val':4, 'sel':false});
					}
					a.push({'desc':"Talk (Ricks Shop)", 'cid':ann_id, 'val':1, 'sr':(aff[ann_id] == 0), 'sel':false, 't2':" MusBox"});
					a.push({'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 'sel':false, 't2':a[a.length - 1]['desc']});
					a.push({'desc':" Gift  ", 'cid':ann_id, 'val':1, 'sr':true, 'sel':false, 't2':"Potato"});
					a.push({'desc':"Potato", 'cid':[ann_id, 'v_potatoes'], 'val':[3, -1], 'sr':true, 'sel':false, 't2':" Gift  "});
					if (flags['recipe_ann'] == 0) {
						a[a.length - 1]['cid'] = ['f_recipe_ann', ann_id, 'v_potatoes'];
						a[a.length - 1]['val'] = [1, 6, -1];
					}
				}
			}

			if ([19, 20, 21, 22].includes(d)) { a.push({'desc':"Vote for Goddess", 'red':true, 'iid':get_npc_id('goddess')}); }

			a = ((aff[may_id] > 50) ? elli_spry1a(a, d, g, is_sunny) : maria_spry1a(a, d, g, is_sunny));

			// MAY
			if (aff[may_id] < 100 && is_sunny == 1 && dow == "SAT") {
				a.push({'desc':"Spam May (By Midwife) [83 Talks]", 'cid':may_id, 'val':255, 'sel':(d == 6), 'red':(dow == "SUN")});
			}

			// POTATOES
			if (vars['potatoes_bought'] == 0) {
				a.push({'desc':"Buy Potato Seeds", 'cid':['v_gold', 'v_potatoes_bought'], 'val':[-200, 1], 'iid':get_npc_id('lillia'), 'imp':true});
			}

			if (dow != "THURS" && !get_horse && !is_festival(d)) {
				if (is_sunny == 1 && flags['cutscene_cliff_farm'] == 0 && aff[cliff_id] > 90) {
					a.push({'desc':"RANCH CUTSCENE, Fast Text", 'imp':true, 'iid':cliff_id});
					a.push({'desc':"Cliff Cutscene", 'val':1, 'cid':"f_cutscene_cliff_farm", 'sr':true, 'sel':false});
				}

				// ANN
				musbox_to_ann = (dow == "MON" && aff[rick_id] >= 30);
				if (aff[ann_id] == 0 || (d > 23 && [2, 12].includes(aff[ann_id]))) {
					a.push({'desc':"Meet", 'cid':ann_id, 'val':4, 'sel':false});
				}
				a.push({'desc':("Talk (" + ((is_sunny == 0) ? "Barn)" : "Ranch) ")), 'cid':ann_id, 'val':1, 'sel':(is_sunny == 1 && dow == "MON" && !musbox_to_ann), 't2':" MusBox", 'sr':(aff[ann_id] == 0 || (d > 23 && [2, 12].includes(aff[ann_id])))});
				a.push({'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sel':(is_sunny == 1 && dow == "MON" && musbox_to_ann), 'sr':true, 't2':a[a.length - 1]['desc']});
				a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':(dow == "MON" && is_sunny == 1 && vars['potatoes'] <= 0), 't2':"Potato"});
				a.push({'desc':"Potato", 'cid':[ann_id, 'v_potatoes'], 'val':[3, -1], 'sr':true, 'sel':(dow == "MON" && is_sunny == 1 && vars['potatoes'] > 0), 't2':" Gift"});
				if (flags['recipe_ann'] == 0) {
					a[a.length - 1]['cid'] = ['f_recipe_ann', ann_id, 'v_potatoes'];
					a[a.length - 1]['val'] = [1, 6, -1];
				}
	
				// Cliff
				if (d > 17 && ["TUES", "WED"].includes(dow)) {
					if (aff[cliff_id] == 5 || aff[cliff_id] == 0) {
						// Cliff's intro gives affection to GRAY
						a.push({'desc':"Meet", 'cid':grey_id, 'val':4, 'iid':cliff_id, 'sel':(dow == "WED")});
					}
					a.push({
						'desc':("Talk (" + ((dow == "WED") ? "Ranch" : "Beach") + ")"),
						'cid':cliff_id, 'val':2, 'sel':false, 'sr':(aff[cliff_id] == 5 || aff[cliff_id] == 0)
					});
					a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"   Egg   ", 'sr':true});
					a.push({'desc':"   Egg   ", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
				}
				a = a.concat(chicken_action);
			}

			// Potatoes; Equip before entering farm screen
			if (vars['potatoes_bought'] == 0) { // || (d == 30 && is_sunny == 1)) {
				a.push({'desc':"Equip Seeds", 'imp':true});
				a.push({'desc':"Plant Potatoes", 'sr':true,
						'cid':((d == 30) ? 'v_potatoes' : 'f_potato_planted'),
						'val':((d == 30) ? 9 : 1)
				});
			}

			if (get_horse || (is_sunny == 1 && flags['chicken_inside'] == 1)) {
				a.push({'desc':"Chicken Outside", 'val':1, 'cid':'f_chicken_outside', 'imp':true, 'iid':chicken_id});
				if (get_horse && d == 7) {
					a.push({'desc':"Equip/Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true});
				}
			}

			if (dow != "SUN") {
				if (is_sunny == 1 && flags['berry_kappa'] == 0 && vars['chickens'] == 0) {
					a.push({'desc':"Dock fishing, then bar"});
					if (flags['berry_ocean'] == 0) {
						a.push({'desc':"Ocean Berry", 'cid':'f_berry_ocean', 'val':1, 'sel':false, 'sr':true});
					}
				}

				// BAR
				var duke_id = get_npc_id('bartender');
				if (aff[duke_id] == 0) { a.push({'desc':"Meet", 'cid':duke_id, 'val':3, 'imp':(d < 7), 'sel':(d < 7)}); }
				a.push({'desc':"Talk", 'cid':duke_id, 'val':3, 'sr':(aff[duke_id] == 0), 'imp':(d < 7), 'sel':(d < 7), 'red':(d > 7 && d != 30 && aff[duke_id] >= 27 && (dow != "MON" || (aff[karen_id] > 120 && flags['berry_kappa'] == 1)))});
				a.push({'desc':"Gift", 'cid':duke_id, 'val':3, 'sel':(a[a.length - 1]['sel']), 'sr':true});

				if (aff[karen_id] == 0 && !["MON", "TUES", "WED"].includes(dow)) {
					a.push({'desc':"Meet", 'cid':karen_id, 'val':4, 'sel':false, 'red':(d > 7 && dow != "MON")});
					a.push({'desc':"Talk", 'cid':karen_id, 'val':1, 'sel':false, 'sr':true});
				}
				if (d >= 18) { a.push({'desc':"Talk (In Bar)", 'cid':cliff_id, 'val':1, 'sel':false}); }

				if (d == 16) { a.push({'desc':"Keep food for Cliff", 'imp':true, 'iid':cliff_id}); }
			}
		} // End of if (d > 3)
	}

	if (flags['horse'] != 0 || get_horse) {
		if (flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"])) {
			a.push({'desc':"Equip Brush", 'iid':horse_id});
		}
		a.push({'desc':"Whistle Horse", 'val':1, 'cid':horse_id, 'sr':(flags['horse_brush'] == 1 && aff[horse_id] < (255 - 4 - flags["sustaining_carrot"]))});
		a.push({'desc':((flags['horse'] == 1) ? "Ride": "Talk"), 'val':1, 'cid':a[a.length - 1]['cid'], 'sr':true, 'sel':(!["WED", "SAT", "SUN"].includes(dow) && (!is_festival(d) || d == 8)) });
		if (aff[horse_id] < (255 - 4 - flags["sustaining_carrot"]) && !get_horse) {
			a.push({'desc':"Brush", 'val':2, 'cid':horse_id, 'sr':true, 'sel':false});
		}
	}

	// Dog
	if (d == 3) { a.push({'desc':"Whistle Dog", 'cid':dog_id, 'val':1}); }
	if (flags['dog_inside'] == 0) {
		a.push({'desc':"Bring Dog Inside", 'cid':'f_dog_inside', 'val':1, 'iid':dog_id, 'sr':(d == 3)});
	}
	a.push({'desc':"Feed Dog", 'cid':dog_id, 'val':2, 'sel':false, 'red':(vars['chickens'] == 0)});

	if (d == 30) {
		if (flags['potato_planted']) {
			a.push({'desc':"Plant or Pocket All Potatoes", 'imp':true});
		}
		if (is_sunny == 0) {
			a.push({'desc':"Sick Event", 'cid':[karen_id, 'f_sick_karen'], 'val':[_SICK_EVENT_AFF, 1]});
		}
		a.push({'desc':"Day Skipped", 'cid':['v_day', 'f_dontsave'], 'val':[1, 1], 'red':true, 'sel':false});
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

function elli_spry1a (a = [], d = vars['day'], g = vars['gold'], is_sunny = 1) {
	var elli_id = get_npc_id('elli');
	var rick_id = get_npc_id('rick');
	var dow = get_dow(d, true); 

	// ELLI
	// "Gift " <- one space
	// "Talk " <- one space
	var elli_sick_event = (is_sunny == 0 && aff[elli_id] >= _SICK_EVENT_MIN && flags['sick_elli'] == 0);
	if (!["SUN", "MON"].includes(dow)) {
		if (aff[elli_id] == 0) { a.push({'desc':"Meet", 'cid':elli_id, 'val':4}); }
		a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : "Talk (Bakery)"), 'cid':elli_id, 'val':1,
			'sr':(aff[elli_id] == 0), 't2':"MusBox ",
			'sel':([6, 9].includes(d) || (elli_sick_event && dow == "WED" && flags['new_mus_box'] == 0) ||
			       (!["WED", "SAT"].includes(dow) && is_sunny == 1 && aff[rick_id] < _RICK_FIX_MIN - 6))
		});
		a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
			'sel':((elli_sick_event && dow == "WED" && flags['new_mus_box'] == 1) ||
			       (is_sunny == 1 && aff[rick_id] >= (_RICK_FIX_MIN - 6) && !["SAT", "WED", "SUN"].includes(dow))),
			't2':a[a.length - 1]['desc']});
		a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true,
			't2':((vars['chickens'] > 0) ? ["Egg", "M/L Fish"] : "M/L Fish"),
			'sel':(d == 6 || (elli_sick_event && dow == "WED" && vars['chickens'] == 0) ||
			       (!["WED", "SAT"].includes(dow) && (is_sunny == 1 || d == 9) && ((vars['chickens'] < 1) || (d != 24 && (vars['chickens'] == 0 || flags['new_chick'] == 1 || d == 9)))))
		});
		a.push({
			'desc':((vars['chickens'] > 0) ? "Egg" : "M/L Fish"), 'sr':true,
			't2':((vars['chickens'] > 0) ? ["Gift ", "M/L Fish"] : "Gift "),
			'sel':(d != 9 && ((is_sunny == 1 && !["WED", "SAT"].includes(dow)) || (elli_sick_event && dow == "WED" && vars['chickens'] > 0)) &&
			       (d == 24 || (vars['chickens'] > 0 && flags['new_chick'] != 1))),
			'cid':((vars['chickens'] > 0) ? ((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id) : [elli_id, 'v_happiness']),
			'val':((vars['chickens'] > 0) ? ((flags['recipe_elli'] == 0) ? [1, 6] : 4) : [3, 1])
		});
		if (vars['chickens'] > 0) {
			a.push({'desc':"M/L Fish", 'sr':true, 't2':["Gift ", "Egg"],
					'cid':[elli_id, 'v_happiness'],
					'val':[3, 1], 'sel':false
			});
		}
	}
	if (elli_sick_event) {
		a.push({'desc':"Sick Event (Bakery)", 'cid':[elli_id, 'f_sick_elli'], 'val':[_SICK_EVENT_AFF, 1],
			'red':(aff[elli_id] >= 250), 'sel':(aff[elli_id] < 250)
		});
	}
	return a;
}

function maria_spry1a (a = [], d = vars['day'], g = vars['gold'], is_sunny = 1) {
	var dow = get_dow(d, true);
	var maria_id = get_npc_id('maria');
	var rick_id = get_npc_id('rick');

	if (d == 9) { a.push({'desc':"MARIA FIRST", 'imp':true}); }

	// MARIA
	// " Talk" -1 spaces
	if (dow != "MON") {
		// Maria in library
		if (aff[maria_id] == 0) {
			a.push({'desc':"Meet", 'cid':maria_id, 'val':4, 'red':(dow == "SUN" && d != 7), 'sel':(!["SAT", "SUN", "WED"].includes(dow))});
		}
		a.push({'desc':"Talk (Library)", 'cid':maria_id, 'val':1, 'sr':(aff[maria_id] == 0), 'red':(dow == "SUN" && d != 7),
			'sel':((is_sunny == 1 || d == 6) && flags['new_mus_box'] == 0 && (d == 6 || !["WED", "SAT", "SUN"].includes(dow)))
		});
		if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
			a[a.length - 1]['t2'] = "MusBox";
			a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':a[a.length - 1]['desc'], 'sel':(flags['new_mus_box'] == 1)});
		}
		a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true, 'sel':((d == 6 || !["WED", "SAT", "SUN"].includes(dow)) && (d == 9 || is_sunny == 1 || vars['chickens'] < 1))});

		var may_id = get_npc_id('may');
		// MAY
		if (aff[may_id] < 100 && is_sunny == 0) {
			a.push({'desc':"Spam May (Library) [83 Talks]", 'cid':may_id, 'val':255, 'sel':false, 'red':true});
		}
	} else if (is_sunny == 0 && aff[maria_id] >= _SICK_EVENT_MIN && !flags["sick_maria"]) {
		// Sick Event
		a.push({'desc':"Sick Event", 'cid':[maria_id, "f_sick_maria"], 'val':[_SICK_EVENT_AFF, 1]});
	}
	return a;
}
