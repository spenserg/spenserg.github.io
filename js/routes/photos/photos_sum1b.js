actions_photos_sum_y1b = function(a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id('ann');
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

	// Dog Affection
	if (flags['dog_inside'] == 1) {
		a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
	} else {
		a.push({'desc':"Whistle", 'cid':dog_id, 'val':1});
		a.push({'desc':"Bring Dog Inside", 'cid':[dog_id, 'f_dog_inside'], 'val':[1, 1], 'iid':dog_id, 'sr':true, 'sel':false});
	}

	if (is_sunny != -1) { // No Typhoon
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

			// ANN
			if (dow != "THURS") {
				// ANN
				// -1 sp " GIFT"
				// -1 sp " MUSBOX"
				var ann_sick_event = (dow == "SUN" && is_sunny == 0 && flags['sick_ann'] == 0 && aff[ann_id] < _PHOTO_MIN && d != 63 && 
						      aff[ann_id] >= (_SICK_EVENT_MIN - (4 + 1 + 5 * flags['new_mus_box'])));
				a.push({'desc':((dow == "SUN") ? "Talk (Ranch 50%)" : "Talk (Ranch)"), 'cid':ann_id, 'val':1,
					'sel':(flags['new_mus_box'] == 0 && !["SAT", "SUN", "WED"].includes(dow) && (is_sunny == 1 || d == 30))
				});
				a.push({'desc':" MusBox", 'cid':[ann_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':a[a.length - 1]['desc'],
					'sel':(flags['new_mus_box'] == 1 && !["SAT", "SUN", "WED"].includes(dow) && (is_sunny == 1 || d == 30))
				});
				a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':false, 't2':"Potato"});
				a.push({'desc':"Potato", 'cid':[ann_id, 'v_potatoes'], 'val':[3, -1], 'sr':true, 't2':" Gift",
					'sel':(!["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1)
				});
				if (flags['recipe_ann'] == 0) {
					a[a.length - 1]['cid'] = ['f_recipe_ann', ann_id, 'v_potatoes'];
					a[a.length - 1]['val'] = [1, 6, -1];
				}
				if (ann_sick_event) {
					a.push({'desc':"Sick Event", 'cid':[ann_id, 'f_sick_ann'], 'val':[_SICK_EVENT_AFF, 1], 'imp':true});
				}
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
				a.push({'desc':"M/L Fish", 'sr':true, 't2':"Gift ", 'cid':elli_id, 'val':3});
				a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"M/L Fish", 'sel':false});
			}

			// Kappa Berry
			if (!flags['berry_kappa']) {
				a.push({'desc':"Large fish to Kappa", 'cid':'f_berry_kappa', 'val':1, 'iid':get_npc_id('kappa'), 'sel':false, 'red':(is_sunny == 0)});
			}

			var tmp_spr_aff = aff[sprite_id];
			// SPRITE
			if (lumber_to_sprite > 0) {
				var lum_desc = "";
				if (aff[sprite_id] < (21 - 6)) {
					a.push({'desc':"Flower", 'cid':sprite_id, 'val':1,
						'sel':((dow == "MON" || [4, 5].includes(d)) && is_sunny == 1),
						'red':((dow != "MON" && ![4, 5].includes(d)) || is_sunny == 0)
					 });
				}
				a.push({'desc':(lumber_to_sprite + " Lumber to Inner Sprite (Right Side)"), 'sr':(aff[sprite_id] < (21 - 6)),
					'cid':[sprite_id, 'v_lumber'], 'val':[lumber_to_sprite, -1 * lumber_to_sprite],
					'sel':((dow == "MON" || [4, 5].includes(d)) && is_sunny == 1),
					'red':((dow != "MON" && ![4, 5].includes(d)) || is_sunny == 0)
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
			a.push({'desc':"Talk", 'cid':sprite_id, 'val':1, 'sr':(aff[sprite_id] % 7 == 0 && aff[sprite_id] < 35),
				'sel':(tmp_spr_aff > 18 && ((dow == "MON" || [4, 5].includes(d)) && is_sunny == 1)),
				'red':(aff[sprite_id] >= _SPRITE_WINE_MIN || !((dow == "MON" || [4, 5].includes(d)) && is_sunny == 1)),
			});
			a.push({'desc':"Gift", 'cid':sprite_id, 'val':2, 'sr':true, 'sel':(a[a.length - 1]['sel'])});
			if (tmp_spr_aff > 18) { tmp_spr_aff += 3; }

			// Strength Wish Power Berry
			if (flags['berry_strength'] == 0) {
				a.push({'desc':"Wish for Strength (Middle)", 'cid':'f_berry_strength', 'val':1, 'iid':get_npc_id('goddess'), 'sel':false, 'red':true});
			}

			// Blue Mist Flower
			if (flags['photo_popuri'] == 0) {
				a.push({'desc':"Water Flower by Pond", 'iid':popuri_id, 'red':(d < 30 || dow != "MON" || is_sunny == 0)});
				a.push({'desc':"Blue Mist Flower Glitch", 'cid':'f_photo_popuri', 'val':1, 'sel':false, 'sr':true});
			}

			// Lumber for Sprites
			if ((d == 30 || dow == "MON") && tmp_spr_aff < _SPRITE_SPAM_MAX && d > 3) {
				a.push({'desc':"Equip Axe, Chop One Stump", 'imp':true, 'val':6, 'cid':'v_lumber', 'iid':get_npc_id('stump')});
			}

			if (!(dow == "MON" || [4, 5].includes(d)) && !["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1) {
				a.push({'desc':"ed, flower, walnut, Fish for Elli", 'imp':true});
			}

			// Decline Ankle
			if (flags['ankle_karen'] == 0 && aff[karen_id] > 180 && is_sunny == 1) {
				a.push({'desc':"Decline Ankle (Vineyard)", 'sel':false, 'cid':[karen_id, kai_id, 'f_ankle_karen'], 'val':[-30, 20, 1]});
			}
			// KAI
			if (aff[kai_id] == 0) { a.push({'desc':"Meet", 'cid':kai_id, 'val':8, 'sel':false}); }
			a.push({'desc':"Talk (Vineyard)", 'cid':kai_id, 'val':2, 'sr':(aff[kai_id] == 0), 'sel':false});
			a.push({'desc':"Berry/Mango", 'sr':true, 'sel':false, 't2':"  Gift ", 'red':(dow == "MON"),
				'cid':((flags['recipe_kai'] == 0) ? [kai_id, 'f_recipe_kai'] : kai_id),
				'val':((flags['recipe_kai'] == 0) ? [5, 1] : 6),
			});
			a.push({'desc':"  Gift ", 'cid':kai_id, 'val':3, 'sr':true, 'sel':false, 't2':"Berry/Mango"});

			if (dow == "MON" || d < 41) {
				// MARIA
				if (aff[maria_id] >= (_DREAM_EVENT_MIN - 1 - _MUS_BOX_AFF)) {
					a.push({'desc':"NO MUSBOX FOR MARIA", 'iid':maria_id, 'red':true});
				}
				a.push({'desc':"Talk (MTN / CHUR)", 'cid':maria_id, 'val':1, 't2':"MusBox",
					'sel':(aff[maria_id] < (_DREAM_EVENT_MIN - 1) && !["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1),
					'red':(aff[maria_id] >= (_DREAM_EVENT_MIN - 1))
				});
				if (aff[maria_id] < (_DREAM_EVENT_MIN - 1 - _MUS_BOX_AFF)) {
					a[a.length - 1]['t2'] = "MusBox";
					a.push({'desc':"MusBox", 'cid':[maria_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
						'sel':false, 't2':a[a.length - 1]['desc']
					
					});
				}
				if (aff[maria_id] < (_DREAM_EVENT_MIN - 1 - 2)) {
					a.push({'desc':" Gift  ", 'cid':maria_id, 'val':2, 'sr':true, 't2':"Cabbage", 'sel':(!["SAT", "SUN", "WED"].includes(dow)), 't2':"Cabbage"});
					a.push({'desc':"Cabbage", 'sel':false, 't2':" Gift  ", 'sr':true,
						'cid':((flags['recipe_maria'] == 0) ? [maria_id, 'f_recipe_maria'] : maria_id),
						'val':((flags['recipe_maria'] == 0) ? [5, 1] : 3)
					});
				}
			}

			// ELLI
			// "Gift " <- one space
			// "Talk " <- one space
			var elli_sick_event = (is_sunny == 0 && aff[elli_id] >= _SICK_EVENT_MIN && flags['sick_elli'] == 0);
			if (!["SUN", "MON"].includes(dow)) {
				a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : "Talk (Bakery)"), 'cid':elli_id, 'val':1, 't2':"MusBox ",
					'sel':((elli_sick_event && dow == "WED" && flags['new_mus_box'] == 0) || (!["SAT", "SUN", "WED"].includes(dow) && is_sunny == 1))
				});
				a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true,
					'sel':(elli_sick_event && dow == "WED" && flags['new_mus_box'] == 1), 't2':a[a.length - 1]['desc']
				});
				a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"M/L Fish", 'sel':false});
				a.push({'desc':"M/L Fish", 'sr':true, 't2':"Gift ", 'cid':[elli_id, 'v_happiness'], 'val':[3, 1],
					'sel':(is_sunny == 1 && !["WED", "SAT"].includes(dow)),
				});
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
			if (dow != "MON" && d > 40) {
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
				a.push({'desc':" Gift  ", 'cid':maria_id, 'val':2, 'sr':true, 't2':"Cabbage",
					'sel':((is_sunny == 1 || d == 30) && !["SAT", "SUN", "WED"].includes(dow))
				});
				a.push({'desc':"Cabbage", 'sel':false, 't2':" Gift  ", 'sr':true,
					'cid':((flags['recipe_maria'] == 0) ? [maria_id, 'f_recipe_maria'] : maria_id),
					'val':((flags['recipe_maria'] == 0) ? [5, 1] : 3)
				});

				var may_id = get_npc_id('may');
				// MAY
				if (aff[may_id] < 100 && is_sunny == 0) {
					a.push({'desc':"Spam May (Library) [83 Talks]", 'cid':may_id, 'val':255, 'sel':false});
				}
			} else if (dow == "MON" && is_sunny == 0 && aff[maria_id] >= _SICK_EVENT_MIN && !flags["sick_maria"]) {
				// Sick Event
				a.push({'desc':"Sick Event", 'cid':[maria_id, "f_sick_maria"], 'val':[_SICK_EVENT_AFF, 1]});
				a.push({'desc':"Talk", 'cid':mayor_id, 'val':3});
				a.push({'desc':"Gift", 'cid':mayor_id, 'val':3, 'sr':true, 'sel':(aff[mayor_id] < aff[rick_id])});
			}

			if (dow != "SUN") {
				// BAR
				var duke_id = get_npc_id('bartender');
				a.push({'desc':"Talk", 'cid':duke_id, 'val':3, 'sr':(aff[duke_id] == 0), 'sel':((d == 30 || dow == "MON") && is_sunny == 1)});
				a.push({'desc':"Gift", 'cid':duke_id, 'val':3, 'sel':(a[a.length - 1]['sel']), 'sr':true});
				if (flags['wine_from_duke'] == 0) {
					a.push({'desc':"Get Wine", 'cid':'f_wine_from_duke', 'val':1, 'sr':true, 'sel':false});
				}
				if (aff[duke_id] < 33) {
					a.push({'desc':("(" + Math.round((33 - aff[duke_id]) / 6) + " visits left)"), 'sr':true});
				}

				a.push({'desc':"Talk (In Bar)", 'cid':kai_id, 'val':2, 'sel':false});
			}
		} // End !festival

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
