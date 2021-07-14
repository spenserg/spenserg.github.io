actions_photos_spr_y1b = function (a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id('ann');
	var basil_id = get_npc_id('basil');
	var cliff_id = get_npc_id('cliff');
	var chicken_id = get_npc_id('chicken');
	var dog_id = get_npc_id('dog');
	var doug_id = get_npc_id('doug');
	var elli_id = get_npc_id('elli');
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

	var musboxes = musbox_count (aff[maria_id], aff[ann_id], aff[elli_id], d, flags['chicken_route']);
	
	if (d > 3 && d < 7 && flags['chicken_route'] == 1) {
		return actions_photos_spr_y1a(a, d, g, is_sunny);
	}

	if (d == 3) {
		flags['chicken_route'] = 1;
		a.push({'desc':"Chicken Route:", 'iid':chicken_id});
		a.push({'desc':"Yes", 'sr':true, 'sel':(flags['chicken_route'] == 1), 't1':"No", 't2':"No", 'cid':'f_chicken_route', 'val':(1 - flags['chicken_route'])});
		a.push({'desc':"No", 'sr':true, 'sel':(flags['chicken_route'] != 1), 't1':"Yes", 't2':"Yes", 'cid':'f_chicken_route', 'val':(0 - flags['chicken_route'])});
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
		a.push({'desc':"Hammer Rocks, Till 3 x 3 square"});
		a.push({'desc':"Equip Watering Can, Fill Watering Can"});
		a.push({'desc':"Treasure Map", 'cid':'f_treasure_map', 'val':1, 'sr':true});
		a.push({'desc':"ed, ber, flower"});
	} else if (d > 3 && d < 9 && is_sunny == 1) { // Spring 4 - 8
		a.push({'desc':"Equip Watering Can", 'imp':true});
		a.push({'desc':"Water 3 Potatoes", 'sr':true,'cid':['v_potato_waters', 'v_watering_can_fill'], 'val':[1, -10]});
	}
	if (d == 5 && is_sunny == 0) { reset = "No Rain on Spr 5"; }

	if ([15, 19].includes(d)) { a.push({'desc':"Ignore Basil on the Farm", 'iid':basil_id}); }

	if (is_festival(d)) {
		// Planting (Spr 8), Horse Race (Spr 17), Flower Fest (Spr 23)
		if (d == 23) { // Flower Fest
			a.push({'desc':"Go to Town Square", 'iid':mayor_id, 'cid':'v_happiness', 'val':5, 'imp':true});
			a.push({'desc':"Buy a Power Nut", 'cid':['f_berry_flowerfest','v_gold'],
					'val':[1, -1000], 'iid':get_npc_id('salesman'), 'sel':false, 'red':true
			});
			a.push({'desc':"Talk", 'cid':rick_id, 'val':2});
			a.push({'desc':"Talk", 'cid':mayor_id, 'val':2});
			a.push({'desc':"Talk", 'cid':kent_id, 'val':2});
			a.push({'desc':"Talk", 'cid':kai_id, 'val':2, 'sel':(aff[kai_id] >= 50)});
			a.push({'desc':"Talk", 'cid':maria_id, 'val':2});
			a.push({'desc':"Dance",'cid':[maria_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance ", "Dance  "], 'sr':true});
			a.push({'desc':"Talk", 'cid':elli_id, 'val':2});
			a.push({'desc':"Dance ",'cid':[elli_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance", "Dance  "], 'sel':false, 'sr':true});
			a.push({'desc':"Talk", 'cid':ann_id, 'val':2});
			a.push({'desc':"Dance  ",'cid':[ann_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance", "Dance "], 'sel':false, 'sr':true});
		}
	} else { // Not a Festival
		if (d > 8) {
			if (!flags['treasure_map']) {
				a.push({'desc':"Treasure Map", 'cid':'f_treasure_map', 'val':1,
					'sr':(lumber_to_sprite > 0 && dow == "MON" && is_sunny == 1),
					'sel':(!["SAT", "SUN", "WED"] && is_sunny == 1)
				});
			}

			// Music Box Dig
			if (flags['old_mus_box'] == 0 && !has_opener) {
				has_opener = true;
				a.push({'desc':"Equip hoe", 'iid':musbox_id, 'red':(is_sunny == 0 || ["WED", "SAT", "SUN"].includes(dow))});
				a.push({'desc':"Dig Music Box", 'cid':'f_old_mus_box', 'val':1, 'sr':true, 'iid':musbox_id,
					'sel':(is_sunny == 1 && !["WED", "SAT", "SUN"].includes(dow) && d > 9)
				});
				if (flags['berry_farm'] == 0) {
					a.push({'desc':"Dig a Berry", 'val':1, 'cid':'f_berry_farm', 'sr':true, 'sel':false});
				}
			}

			if (flags['potato_planted'] > 0 && is_sunny == 1) {
				a.push({'desc':"Equip Watering Can"});
				a.push({'desc':"Water Potatoes", 'sr':true, 'sel':false,
					'cid':['v_potato_waters', 'v_watering_can_fill'], 'val':[1, -10],
				});
			}
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
			if (d == 3) { a.push({'desc':"Catch/Sell Large Fish", 'sr':true}); }
		}

		if (d == 3) {
			a.push({'desc':"Buy Potato Seeds", 'cid':['v_gold', 'v_potatoes_bought'], 'val':[-200, 1], 'iid':get_npc_id('lillia'), 'imp':true});
			a.push({'desc':"Meet", 'cid':elli_id, 'val':4});
			a.push({'desc':"Talk (Flower Shop)", 'cid':elli_id, 'val':1, 'sr':true});
			a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 't2':"M/L Fish", 'sr':true});
			a.push({'desc':"M/L Fish", 't2':"Gift ", 'cid':[elli_id, 'v_happiness'], 'sel':false , 'val':[3, 1], 'sr':true});
			a.push({'desc':"Equip Seeds + berry, Sell berry", 'imp':true});
			a.push({'desc':"Plant Potatoes", 'sr':true, 'cid':'f_potato_planted', 'val':1});
			a.push({'desc':"Water 3 Potatoes", 'sr':true, 'cid':['v_potato_waters', 'v_watering_can_fill'], 'val':[1, -10]});
		} else if (d > 8 && !is_festival(d)) { // Skip days until Potatoes come in
			// Get Horse
			if (flags['horse'] == 0 && is_sunny == 1) {
				a.push({'desc':'Get Horse', 'cid':'f_horse', 'val':21, 'iid':horse_id,
					'sel':(d == 9 || (!is_festival(d) && !["SAT", "SUN", "WED", "THURS"].includes(dow))),
					'imp':(!is_festival(d) && !["SAT", "SUN", "WED", "THURS"].includes(dow))
				});
				a.push({'desc':"Fast Text Glitch", 'sr':true});
			}
			if (flags['chicken_route'] == 1 && vars['chickens'] == 0 && dow != "THURS") {
				a.push({'desc':"Get Chicken", 'cid':['v_gold', 'v_chickens'], 'val':[-1500, 1], 'iid':doug_id, 
					'sel':(is_sunny == 1 && (d == 9 || (!is_festival(d) && !["SAT", "SUN", "WED", "THURS"].includes(dow))))
				});
			}

			if (dow != "THURS") {
				// ANN
				// -1 sp " GIFT"
				// -1 sp " MUSBOX"
				var ann_sick_event = (dow == "SUN" && is_sunny == 0 && flags['sick_ann'] == 0 && aff[ann_id] < _PHOTO_MIN && d != 63 && 
						      aff[ann_id] >= (_SICK_EVENT_MIN - (4 + 1 + 5 * flags['new_mus_box'])));
				if (aff[ann_id] == 0) {
					a.push({'desc':"Meet", 'cid':ann_id, 'val':4,'sel':(!["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1)});
				}
				a.push({'desc':((dow == "SUN") ? "Talk (Ranch 50%)" : "Talk (Ranch)"), 'cid':ann_id, 'val':1,
					'sr':(aff[ann_id] == 0), 'sel':(!["SAT", "SUN", "WED"].includes(dow) && (is_sunny == 1 || d == 30))
				});
				a.push({'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':a[a.length - 1]['desc'],
					'sel':(flags['new_mus_box'] == 1 && !["SAT", "SUN", "WED"].includes(dow) && (is_sunny == 1 || d == 30))
				});
				a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':false, 't2':"Potato"});
				a.push({'desc':"Potato", 'cid':[ann_id, 'v_potatoes'], 'val':[3, -1], 'sr':true, 't2':" Gift",
					'sel':(flags['new_mus_box'] == 0 && !["SAT", "SUN", "WED"].includes(dow) && (is_sunny == 1 || d == 30))
				});
				if (flags['recipe_ann'] == 0) {
					a[a.length - 1]['cid'] = ['f_recipe_ann', ann_id, 'v_potatoes'];
					a[a.length - 1]['val'] = [1, 6, -1];
				}
				if (ann_sick_event) {
					a.push({'desc':"Sick Event", 'cid':[ann_id, 'f_sick_ann'], 'val':[_SICK_EVENT_AFF, 1], 'imp':true});
				}
				a.push({'desc':("(" + musboxes[1] + " Musboxes Left)"), 'sr':true});
			}

			// Dog Karen on Spr 30?
			if (d == 30) {
				a.push({'desc':"Dog Karen to Pink (Beach / Carp House) [50%] [10 AM]", 'cid':karen_id, 'val':(208 - aff[karen_id]), 'imp':true});	
			}

			// Kappa Berry
			if (!flags['berry_kappa']) {
				a.push({'desc':"Large fish to Kappa", 'cid':'f_berry_kappa', 'val':1, 'iid':get_npc_id('kappa'), 'sel':false, 'red':true});
			}

			var tmp_spr_aff = aff[sprite_id];
			// SPRITE
			if (lumber_to_sprite > 0) {
				var lum_desc = "";
				if (aff[sprite_id] < (21 - 6)) {
					a.push({'desc':"Flower", 'cid':sprite_id, 'val':1, 'sel':(d == 9 && is_sunny == 1)});
				}
				a.push({'desc':(lumber_to_sprite + " Gifts to Inner Sprite (Right Side)"), 'sr':(aff[sprite_id] < (21 - 6)),
					'cid':sprite_id, 'val':lumber_to_sprite, 'sel':(d == 9 && is_sunny == 1)
				});
				if (tmp_spr_aff >= 18) { a.push({'desc':"INNER SPRITE FIRST!", 'sr':true}); }
				tmp_spr_aff += lumber_to_sprite;
			}
			if (aff[sprite_id] % 7 == 0 && aff[sprite_id] < 35) {
				a.push({'desc':"Meet", 'cid':sprite_id, 'val':5, 'sel':false, 'red':(tmp_spr_aff < 18 || is_sunny == 0)});
				if (tmp_spr_aff > 18) { tmp_spr_aff += 5 };
			}
			a.push({'desc':"Talk", 'cid':sprite_id, 'val':1, 'sr':(aff[sprite_id] % 7 == 0 && aff[sprite_id] < 35),
					'sel':false, 'red':(aff[sprite_id] >= _SPRITE_WINE_MIN)
			});
			a.push({'desc':"Gift", 'cid':sprite_id, 'val':2, 'sr':true, 'sel':(a[a.length - 1]['sel'])});
			if (tmp_spr_aff > 18) { tmp_spr_aff += 3; }

			// Strength Wish Power Berry
			if (flags['berry_strength'] == 0) {
				a.push({'desc':"Wish for Strength (Middle)", 'cid':'f_berry_strength', 'val':1, 'iid':get_npc_id('goddess'), 'sel':false, 'red':true});
			}

			// Blue Mist Flower
			if (flags['photo_popuri'] == 0) {
				a.push({'desc':"Water Flower by Pond", 'iid':popuri_id});
				a.push({'desc':"Blue Mist Flower Glitch", 'cid':'f_photo_popuri', 'val':1, 'sel':false, 'sr':true});
			}

			if (dow == "MON" && is_sunny == 1) {
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
				a.push({'desc':"Talk (MTN / CHUR)", 'cid':maria_id, 'val':1, 'sr':(aff[maria_id] == 0),
						'sel':(aff[rick_id] < (_RICK_FIX_MIN - 6) || flags['new_mus_box'] == 0)
				});
				if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
					a[a.length - 1]['t2'] = "MusBox";
					a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						'sel':(flags['new_mus_box'] == 1), 't2':a[a.length - 1]['desc']
					});
				}
				a.push({'desc':" Gift  ", 'cid':maria_id, 'val':2, 'sr':true, 't2':"Cabbage"});
				a.push({'desc':"Cabbage", 'sel':false, 't2':" Gift  ", 'sr':true,
					'cid':((flags['recipe_maria'] == 0) ? [maria_id, 'f_recipe_maria'] : maria_id),
					'val':((flags['recipe_maria'] == 0) ? [5, 1] : 3)
				});
				a.push({'desc':("(" + musboxes[0] + " Musboxes Left)"), 'sr':true});
			}

			a.push({'desc':"ed, ber, flower, Fish/\ for Elli"}); // Quick gifts for villagers

			// KAI
			if (aff[kai_id] == 0) { a.push({'desc':"Meet", 'cid':kai_id, 'val':8, 'sel':false}); }
			a.push({'desc':"Talk (Vineyard)", 'cid':kai_id, 'val':2, 'sr':(aff[kai_id] == 0), 'sel':false});
			a.push({'desc':"Berry", 'sr':true, 'sel':false, 't2':"  Gift ", 'red':(dow == "MON"),
				'cid':((flags['recipe_kai'] == 0) ? [kai_id, 'f_recipe_kai'] : kai_id),
				'val':((flags['recipe_kai'] == 0) ? [5, 1] : 6),
			});
			a.push({'desc':"  Gift ", 'cid':kai_id, 'val':3, 'sr':true, 'sel':false, 't2':"Berry"});
		
			// ELLI
			// "Gift " <- one space
			// "Talk " <- one space
			var elli_sick_event = (is_sunny == 0 && aff[elli_id] >= _SICK_EVENT_MIN && flags['sick_elli'] == 0);
			if (!["SUN", "MON"].includes(dow)) {
				if (aff[elli_id] == 0) { a.push({'desc':"Meet", 'cid':elli_id, 'val':4, 'sel':(!["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1)}); }
				a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : "Talk (Bakery)"), 'cid':elli_id, 'val':1,
					'sr':(aff[elli_id] == 0), 't2':"MusBox ",
					'sel':((elli_sick_event && dow == "WED" && flags['new_mus_box'] == 0) || (!["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1))
				});
				a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
					'sel':(elli_sick_event && dow == "WED" && flags['new_mus_box'] == 1), 't2':a[a.length - 1]['desc']
				});
				a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"M/L Fish",
					'sel':((flags['chicken_route'] == 0 || d < 12) && is_sunny == 1 && !["WED", "SAT"].includes(dow))
				});
				a.push({'desc':"M/L Fish", 'sr':true, 't2':"Gift ", 'cid':[elli_id, 'v_happiness'], 'val':[3, 1], 'sel':false});
				if (flags['chicken_route'] == 1) {
					a[a.length - 1]['t2'] = ["Egg", "Gift "];
					a[a.length - 2]['t2'] = ["Egg", "M/L Fish"];
					a.push({'desc':"Egg", 'sr':true, 't2':["M/L Fish", "Gift "],
						'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
						'sel':((flags['chicken_route'] == 1 && d > 12) && is_sunny == 1 && !["WED", "SAT"].includes(dow)),
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

			a.push({'desc':"Buy Potato Seeds", 'cid':['v_gold', 'v_potatoes_bought'], 'val':[-200, 1], 'iid':get_npc_id('lillia'), 'sel':false});

			// MAYOR
			if (is_sunny == 1 && dow != "SUN") {
				if (aff[mayor_id] == 0) { a.push({'desc':"Meet", 'cid':mayor_id, 'val':4, 'sel':(is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow))}); }
				a.push({'desc':((dow == "SAT") ? "Talk (Lib 50%)" : "Talk"), 'cid':mayor_id, 'val':3, 'sr':(aff[mayor_id] == 0), 'sel':(d == 6 || !["WED", "SAT"].includes(dow))});
				a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':(!["WED", "SAT"].includes(dow) && is_sunny == 1)});
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
					a.push({'desc':"Potato", 'cid':[ann_id, 'v_potatoes'], 'val':[3, -1], 'sr':true, 'sel':false, 't2':" Gift"});
					if (flags['recipe_ann'] == 0) {
						a[a.length - 1]['cid'] = ['f_recipe_ann', ann_id, 'v_potatoes'];
						a[a.length - 1]['val'] = [1, 6, -1];
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
						'sel':(is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow)),
						'red':(is_sunny == 0 || ["SAT", "SUN", "WED"].includes(dow))
					});
				}
				a.push({'desc':"Talk (Library)", 'cid':maria_id, 'val':1, 'sr':(aff[maria_id] == 0),
					'sel':((is_sunny == 1 || d == 30) && !["SAT", "SUN", "WED"].includes(dow) && aff[rick_id] < (_RICK_FIX_MIN - 6)),
					'red':((is_sunny == 0 && d != 30) || ["SAT", "SUN", "WED"].includes(dow))
				});
				if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
					a[a.length - 1]['t2'] = "MusBox";
					a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1],
						'sr':true, 't2':a[a.length - 1]['desc'],
						'sel':(is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow) && aff[rick_id] >= (_RICK_FIX_MIN - 6))
					});
				}
				a.push({'desc':" Gift  ", 'cid':maria_id, 'val':2, 'sr':true, 'sel':((is_sunny == 1 || d == 30) && !["SAT", "SUN", "WED"].includes(dow)), 't2':"Cabbage"});
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
			} else if (is_sunny == 0 && aff[maria_id] >= _SICK_EVENT_MIN && !flags["sick_maria"]) {
				// Sick Event
				a.push({'desc':"Sick Event", 'cid':[maria_id, "f_sick_maria"], 'val':[_SICK_EVENT_AFF, 1]});
			}

			// MAY
			if (aff[may_id] < 100 && is_sunny == 1) { a.push({'desc':"Spam May [83 Talks]", 'cid':may_id, 'val':255, 'sel':false}); }

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

			if (dow != "SUN" && flags['wine_from_duke'] == 0) {
				// BAR
				var duke_id = get_npc_id('bartender');
				if (aff[duke_id] == 0) { a.push({'desc':"Meet", 'cid':duke_id, 'val':3, 'sel':(([9, 30].includes(d) || dow == "MON") && is_sunny == 1)}); }
				a.push({'desc':"Talk", 'cid':duke_id, 'val':3, 'sr':(aff[duke_id] == 0), 'sel':(([9, 30].includes(d) || dow == "MON") && is_sunny == 1)});
				a.push({'desc':"Gift", 'cid':duke_id, 'val':3, 'sel':(a[a.length - 1]['sel']), 'sr':true});
				if (aff[duke_id] < 40) {
					a.push({'desc':("(" + Math.ceil((40 - aff[duke_id]) / 6) + " visit" + ((Math.ceil((34 - aff[duke_id]) / 6) == 1) ? "" : "s") + " left)"), 'sr':true});
				}

				// KAI
				a.push({'desc':"Talk (In Bar)", 'cid':kai_id, 'val':2, 'sel':false});
			}
		} // End of if (d > 8)
	}

	if (flags['horse'] > 0 || (d >= 9 && is_sunny == 1 && !is_festival(d))) {
		if (flags['horse_brush'] == 1) { a.push({'desc':"Equip Brush", 'iid':horse_id}); }
		a.push({'desc':"Whistle Horse", 'val':1, 'cid':horse_id, 'sr':(flags['horse_brush'] == 1),
			'sel':(flags['horse'] > 0 || (!["WED", "SAT", "SUN", "THURS"].includes(dow) && !is_festival(d) && is_sunny == 1))
		});
		a.push({'desc':((flags['horse'] == 1) ? "Ride": "Talk"), 'val':1, 'cid':horse_id, 'sr':true,
			'sel':(!["WED", "SAT", "SUN"].includes(dow) && !is_festival(d) && is_sunny == 1 && (flags['horse'] > 0 || dow != "THURS"))
		});
		a.push({'desc':"Brush", 'val':2, 'cid':horse_id, 'sr':true, 'sel':false});
	}

	// Dog
	if (d == 3) { a.push({'desc':"Whistle Dog", 'cid':dog_id, 'val':1}); }
	if (flags['dog_inside'] == 0) {
		a.push({'desc':"Bring Dog Inside", 'cid':'f_dog_inside', 'val':1, 'iid':dog_id, 'sr':(d == 3)});
	}
	a.push({'desc':"Feed Dog", 'cid':dog_id, 'val':2, 'sel':false, 'red':(vars['chickens'] == 0)});

	if (d == 30) {
		if (flags['potato_planted']) {
			a.push({'desc':"Plant All Potatoes", 'imp':true});
		}
		if (is_sunny == 0 && flags['sick_karen'] == 0) {
			a.push({'desc':"Sick Event", 'cid':[karen_id, 'f_sick_karen'], 'val':[_SICK_EVENT_AFF, 1]});
		}
		a.push({'desc':"Day Skipped", 'cid':['v_day', 'f_dontsave'], 'val':[1, 1]});
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
