get_actions_girl_photos_spr1 = function (a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id('ann');
	var chicken_id = get_npc_id('chicken');
	var dog_id = get_npc_id('dog');
	var duke_id = get_npc_id('bartender');
	var elli_id = get_npc_id('elli');
	var horse_id = get_npc_id('horse');
	var karen_id = get_npc_id('karen');
	var maria_id = get_npc_id('maria');
	var mayor_id = get_npc_id('mayor');
	var popuri_id = get_npc_id('popuri');
	var rick_id = get_npc_id('rick');
	var sprite_id = get_npc_id('sprite');

	var dow = get_dow(d, true);
	var lumber_to_sprite = ((aff[sprite_id] >= _SPRITE_SPAM_MAX || d == 3) ? 0 : (((_SPRITE_SPAM_MAX - aff[sprite_id]) > 6) ? 6 : ((_SPRITE_SPAM_MAX - aff[sprite_id]))));
	var reset = "";

	if (d < 31) { // Spring
		if (d == 3) { // Spring 3
			//a.push({'desc':"Equip hoe, Scythe to toolbox <b>[A UP A RT A DWN DWN A]</b>"});
			a.push({'desc':"Equip hoe"});
			a.push({'desc':"Greet the Mayor", 'iid':mayor_id});
			a.push({'desc':"Till 3 x 3 square"});

			a.push({'desc':"Get Fishing Rod", 'val':1, 'cid':'f_fishing_rod', 'iid':get_npc_id('fisherman')});
			a.push({'desc':"ed, ber, flower, Catch Fish"});
			a.push({'desc':"Buy Potato Seeds", 'cid':['v_gold', 'v_potatoes_bought'], 'val':[-200, 1], 'iid':get_npc_id('lillia'), 'imp':true});
			a.push({'desc':"Meet", 'cid':elli_id, 'val':4});
			a.push({'desc':"Talk (Flower Shop)", 'cid':elli_id, 'val':1, 'sr':true});
			a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 't2':"M/L Fish", 'sr':true});
			a.push({'desc':"M/L Fish", 't2':"Gift ", 'sel':false, 'cid':[elli_id, 'v_happiness'], 'val':[3, 1], 'sr':true});
			a.push({'desc':"Equip Seeds + berry, Sell berry", 'imp':true});
			a.push({'desc':"Plant Potatoes", 'sr':true, 'cid':'f_potato_planted', 'val':1});
		}
		if (d == 4) { // Spring 4
			a.push({'desc':"Equip axe", 'iid':get_npc_id('stump')});
			a.push({'desc':"Chop One Stump", 'val':6, 'cid':'v_lumber', 'sr':true});
			a.push({'desc':"Sell Fish", 'sr':true});
			
			a.push({'desc':"Equip Watering Can"});
			a.push({'desc':"Sell Herb", 'sr':true});
			a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true});
			if (!flags['treasure_map']) {
				a.push({'desc':"Treasure Map", 'cid':'f_treasure_map', 'val':1, 'sr':true});
			}
		}

		if ([15, 19].includes(d)) { a.push({'desc':"Ignore Basil on the Farm", 'iid':get_npc_id('basil')}); }
		if (d == 18) { a.push({'desc':"Ignore Cliff", 'iid':get_npc_id('cliff')}); }

		if (is_festival(d)) {
			// Planting (Spr 8), Horse Race (Spr 17), Flower Fest (Spr 23)
			if (flags['chicken_inside'] == 1) {
				if (flags['old_mus_box'] == 0) {
					a.push({'desc':"Equip hoe", 'iid':get_npc_id("musbox")});
					a.push({'desc':"Dig Music Box", 'cid':'f_old_mus_box', 'val':1, 'sr':true, 'sel':false});
					if (flags['berry_farm'] == 0) {
						a.push({'desc':"Dig a Berry", 'val':1, 'cid':'f_berry_farm', 'sr':true, 'sel':false});
					}
				}
				if (vars['watering_can_fill'] < 30) {
					a.push({'desc':"Equip Watering Can"});
					a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true, 'sel':false});
				}
			}

			// Incubate / New Chick
			if (vars['chickens'] == 1 && flags['new_chick'] == 0 && vars['new_chicken_days'].length == 0) {
				a.push({'desc':"Incubate", 'cid':"f_new_chick", 'val':(_CHICK_BORN_SLEEPS + 1), 'iid':chicken_id});
			}
			if (flags['new_chick'] == 1) {
				a.push({'desc':"New Chick", 'iid':chicken_id, 'cid':["v_new_chicken_days", "f_new_chick"], 'val':[d + _CHICK_GROW_SLEEPS, -1]});
			}

			if (d == 23) { // Flower Fest
				a.push({'desc':"Go to Town Square", 'iid':mayor_id, 'cid':'v_happiness', 'val':5, 'imp':true});
				a.push({'desc':"Talk", 'cid':rick_id, 'val':2, 'sel':false, 'red':true});
				a.push({'desc':"Talk", 'cid':maria_id, 'val':2});
				a.push({'desc':"Dance",'cid':[maria_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance ", "Dance  "], 'sr':true});
				a.push({'desc':"Talk", 'cid':elli_id, 'val':2});
				a.push({'desc':"Dance ",'cid':[elli_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance", "Dance  "], 'sel':false, 'sr':true});
				a.push({'desc':"Talk", 'cid':ann_id, 'val':2});
				a.push({'desc':"Dance  ",'cid':[ann_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance", "Dance "], 'sel':false, 'sr':true});
			}
		} else if (d > 3) { // Not a Festival
			if (flags['potato_planted'] > 0 && lumber_to_sprite == 0) {
				// Music Box Dig
				if (flags['old_mus_box'] == 0) {
					a.push({'desc':"Equip hoe", 'iid':get_npc_id("musbox"), 'red':(dow == "SUN")});
					if (!flags['treasure_map']) {
						a.push({'desc':"Treasure Map", 'cid':'f_treasure_map', 'val':1, 'sr':true});
					}
					a.push({'desc':"Dig Music Box", 'cid':'f_old_mus_box', 'val':1, 'sr':true, 'iid':get_npc_id("musbox"),
						'sel':(is_sunny == 1 && !["WED", "SUN"].includes(dow))
					});
				}

				// Incubate / New Chick
				if (vars['chickens'] == 1 && flags['new_chick'] == 0 && vars['new_chicken_days'].length == 0) {
					a.push({'desc':"Incubate", 'cid':"f_new_chick", 'val':(_CHICK_BORN_SLEEPS + 1), 'iid':chicken_id});
				}
				if (flags['new_chick'] == 1) {
					a.push({'desc':"New Chick", 'iid':chicken_id, 'cid':["v_new_chicken_days", "f_new_chick"], 'val':[d + _CHICK_GROW_SLEEPS, -1]});
				}

				// Bring Chicken Inside / Outside
				if (vars['chickens'] > 0 && (flags['chicken_outside'] == 0 || (is_sunny == 0 && !is_festival(d)))) {
					if (flags['chicken_outside'] == 1) {
						a.push({'desc':"Bring Chicken Inside", 'val':-1, 'cid':'f_chicken_outside', 'iid':chicken_id, 'sel':false});
					}
				} else if (vars['chickens'] > 0) {
					a.push({'desc':"Bring Chicken Outside", 'val':1, 'cid':'f_chicken_outside'});
				}

				// Water Potatoes
				if (flags['potato_planted'] > 0 && vars['potato_waters'] < _POTATO_GROW_DAYS && is_sunny == 1) {
					a.push({'desc':"Equip Watering Can"});
					a.push({'desc':("Water Potatoes (#" + (1 + vars['potato_waters']) + "/6)"),
						'cid':['v_potato_waters', 'v_watering_can_fill'], 'val':[1, -10], 'sr':true
					});
					a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true, 'sel':false});
				}
			}

			if (lumber_to_sprite > 0) {
				if (vars['potato_waters'] < _POTATO_GROW_DAYS && is_sunny == 1) {
					a.push({'desc':"Equip Watering Can"});
					a.push({'desc':("Water Potatoes (#" + (1 + vars['potato_waters']) + "/6)"),
						'cid':['v_potato_waters', 'v_watering_can_fill'], 'val':[1, -10], 'sr':true
					});
				}
				a.push({'desc':("Get " + lumber_to_sprite + " Lumber from Bin"), 'imp':true, 'iid':get_npc_id('stump')});
				a.push({'desc':"Fill Watering Can", 'cid':'v_watering_can_fill', 'val':(30 - vars['watering_can_fill']), 'sr':true});
			}

			// Fishing Rod
			if (flags['fishing_rod'] == 0) {
				a.push({'desc':"Get Fishing Rod", 'val':1, 'cid':'f_fishing_rod', 'iid':get_npc_id('fisherman')});
			}

			// FORAGE
			if (!["WED", "SUN"].includes(dow)) {
				if (lumber_to_sprite > 0) {
					a.push({'desc':("cave all, ber, " + ((d == 4) ? "3 flowers, HOLD CLOVER" : "clover, 3 flowers"))});
				} else {
					if ((vars['chickens'] == 0 && g < 1500) || (dow == "MON" && is_sunny == 1 && g < _PRICE_SEED_CORN)) {
						a.push({'desc':("MTN forage" + ((g < _PRICE_SEED_CORN) ? (" (" + (_PRICE_SEED_CORN - g) + "G Left)") : ""))});
					} else {
						a.push({'desc':"ed, ber, flower", 'red':(is_sunny == 0 && dow == "MON")});
					}
				}
			}

			// SPRITE
			if (flags['vineyard_restored'] == 0) {
				var tmp_spr_aff = aff[sprite_id];
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
						'sel':(aff[sprite_id] < _SPRITE_WINE_MIN && d > 5 && ((dow == "MON" && is_sunny == 1) || lumber_to_sprite > 0)),
						'red':(aff[sprite_id] >= _SPRITE_WINE_MIN || d <= 5 || ((dow != "MON" || is_sunny == 0) && lumber_to_sprite == 0))
				});
				a.push({'desc':"Gift", 'cid':sprite_id, 'val':2, 'sr':true, 'sel':(a[a.length - 1]['sel'])});
				if (tmp_spr_aff > 18) { tmp_spr_aff += 3; }
			}

			if ((vars['chickens'] == 0 && g < 1500) || (dow == "MON" && is_sunny == 1)) {
				// Mountain visit
				// No chicken yet || MONDAY

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
				}
			}

			// CHICKEN
			if (dow != "THURS" && vars['chickens'] == 0 && g >= 1500) {
				// Buy a Chicken + Feed
				a.push({'desc':"DONT ENTER RANCH FIELD", 'iid':ann_id, 'red':true});
				a.push({'desc':"Buy a Chicken", 'cid':['v_chickens', 'v_gold'], 'val':[1, -1500], 'iid':get_npc_id('doug')});
				var tmp_seeds = Math.floor((g - 1500) / 10);
				tmp_seeds = (tmp_seeds > 10) ? 10 : tmp_seeds;
				if (tmp_seeds > 0) {
					a.push({'desc':"Buy " + tmp_seeds + " Feed", 'cid':['v_gold', 'v_feed'], 'val':[10 * tmp_seeds, tmp_seeds], 'sr':true});
				}
			}

			// BUY POTATOES
			if (vars['potatoes_bought'] == 0) {
				a.push({'desc':"Buy Potato Seeds", 'cid':['v_gold', 'v_potatoes_bought'], 'val':[-200, 1], 'iid':get_npc_id('lillia'), 'imp':true});
			}

			// ELLI
			// "Gift " <- one space
			// "Talk " <- one space
			if (!["SUN", "MON"].includes(dow)) {
				if (aff[elli_id] == 0) { a.push({'desc':"Meet", 'cid':elli_id, 'val':4}); }
				a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : "Talk (Bakery)"),
					'cid':elli_id, 'val':1, 'sr':(aff[elli_id] == 0), 't2':"MusBox ", 'sel':(dow != "WED" && (flags['new_mus_box'] == 0 || is_sunny == 0))
				});
				a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1],
					'sr':true, 'sel':(dow != "WED" && flags['new_mus_box'] == 1 && is_sunny == 1), 't2':a[a.length - 1]['desc']
				});
				a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 'sel':(dow != "WED" && vars['chickens'] < 1),
					't2':((vars['chickens'] > 0) ? ["Egg", "M/L Fish"] : "M/L Fish")
				});
				a.push({
					'desc':((vars['chickens'] > 0) ? "Egg" : "M/L Fish"), 'sr':true,
					't2':((vars['chickens'] > 0) ? ["Gift ", "M/L Fish"] : "Gift "), 'sel':(dow != "WED" && vars['chickens'] > 0),
					'cid':((vars['chickens'] > 0) ? ((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id) : [elli_id, 'v_happiness']),
					'val':((vars['chickens'] > 0) ? ((flags['recipe_elli'] == 0) ? [1, 6] : 4) : [3, 1])
				});
				if (vars['chickens'] > 0) {
					a.push({'desc':"M/L Fish", 'sr':true, 't2':["Gift ", "Egg"],
							'cid':[elli_id, 'v_happiness'], 'sel':(dow != "WED"),
							'val':[3, 1], 'sel':false
					});
				}
			}

			// RICK
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
				a.push({'desc':"Gift  ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':(dow != "SAT" && flags['cutscene_rick'] == 0)});
				if (aff[rick_id] >= (_RICK_FIX_MIN - 6)) {
					a.push({'desc':"Rick Fix", 'sr':true, 'sel':(dow != "SAT"),
						'cid':['f_old_mus_box', 'f_new_mus_box'], 'val':[-1, 1],
						't0':"MusBox", 't3':"Talk  "
					});
					if (dow != "MON") { a[a.length - 1]['t1'] = "Talk (Library)"; }
				}
				if (dow == "THURS") {
					// ANN in RICKs shop
					if (vars['potatoes'] > 0) { a.push({'desc':"POTATO to Ann", 'imp':true}); }
					if (aff[ann_id] == 0) { a.push({'desc':"Meet", 'cid':ann_id, 'val':4, 'sel':false}); }
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

			// MARIA
			// " Talk" -1 spaces
			if (dow != "MON") {
				// Maria in library
				if (aff[maria_id] == 0) {
					a.push({'desc':"Meet", 'cid':maria_id, 'val':4, 'red':(dow == "SUN" && d != 7), 'sel':(!["SAT", "SUN", "WED"].includes(dow))});
				}
				a.push({'desc':"Talk (Library)", 'cid':maria_id, 'val':1, 'sr':(aff[maria_id] == 0),
					'sel':(!["WED", "SUN"].includes(dow) && (aff[rick_id] < (_RICK_FIX_MIN - 6) || (["MON", "SAT"].includes(dow) || (is_sunny == 0 && flags['new_mus_box'] == 0)))),
					'red':(["WED", "SUN"].includes(dow))
				});
				if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
					a[a.length - 1]['t2'] = "MusBox";
					a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':a[a.length - 1]['desc'],
						'sel':(!["MON", "WED", "SAT", "SUN"].includes(dow) && aff[rick_id] >= (_RICK_FIX_MIN - 6) && (is_sunny == 1 || flags['new_mus_box'] == 1)),
						'red':(["WED", "SUN"].includes(dow))       
					});
				}
				a.push({'desc':"Gift", 'cid':maria_id, 'val':2, 'sr':true, 'sel':(!["WED", "SUN"].includes(dow))});
			} else if (is_sunny == 0 && aff[maria_id] >= _SICK_EVENT_MIN && !flags["sick_maria"]) {
				// Sick Event
				a.push({'desc':"Sick Event", 'cid':[maria_id, "f_sick_maria"], 'val':[_SICK_EVENT_AFF, 1]});
			}

			// Bar
			if (dow != "SUN") {
				if (vars['chickens'] == 0 && g < 1500) {
					a.push({'desc':"Ed, ber, flow, Fishing"});	
				}
				var duke_id = get_npc_id('bartender');
				if (aff[duke_id] == 0) { a.push({'desc':"Meet", 'cid':duke_id, 'val':3, 'sel':(d < 7)}); }
				a.push({'desc':"Talk", 'cid':duke_id, 'val':3, 'sr':(aff[duke_id] == 0), 'sel':(d < 7), 'red':(d > 7 && aff[duke_id] >= 27 && (dow != "MON" || (aff[karen_id] > 120 && flags['berry_kappa'] == 1)))});
				a.push({'desc':"Gift", 'cid':duke_id, 'val':3, 'sel':(a[a.length - 1]['sel']), 'sr':true});

				if (aff[karen_id] == 0 && !["MON", "TUES", "WED"].includes(dow)) {
					if (aff[karen_id] == 0) { a.push({'desc':"Meet", 'cid':karen_id, 'val':4, 'sel':false, 'red':(d > 7 && dow != "MON")}); }
					a.push({'desc':"Talk", 'cid':karen_id, 'val':1, 'sel':false, 'sr':true});
				}
			}

			if (flags['dog_inside'] == 0) {
				a.push({'desc':"Bring Dog Inside", 'cid':'f_dog_inside', 'val':1, 'iid':dog_id, 'sr':(d == 3)});
			}
		} // End of (Not Festival)
	} // End of Spring
	return a;
}
