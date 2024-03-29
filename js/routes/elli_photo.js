get_actions_elli_photo = function (d = 3, g = 300, is_sunny = 1) {
	var a = [];
	var elli_id = get_npc_id("elli");
	var mayor_id = get_npc_id("mayor");
	var musbox_id = get_npc_id('musbox');
	var rick_id = get_npc_id("rick");
	var elli_mon_loc = (get_month(d) == 1) ? "BEACH" : "MTN";
	var dow = get_day_of_week(d, true);

	var elli_sick_event = (is_sunny == 0 && flags['sick_elli'] == 0 &&
		(aff[elli_id] >= (_SICK_EVENT_MIN - 1 - 3 - 5 * (1 - flags['new_mus_box']))));
	var elli_loc = ((dow == "MON") ? ((d > 30 && d < 61) ? " (Beach)" : " (MTNS)") : "");
	var skip = (is_sunny != 1 || (["WED", "SAT", "SUN"].includes(dow) && d != 69) || aff[elli_id] >= (200 - ((d == 69) ? 0 : 9)));
	var no_more_boxes = (aff[elli_id] >= 200 || (aff[elli_id] >= (200 - 9) && (flags['old_mus_box'] == 1 || flags['new_mus_box'] == 1)))
	var rick_skip = (aff[elli_id] >= (200 - 4 - 5 * (flags['new_mus_box'])));
	var fish_required = (d == 69 && aff[elli_id] < (200 - 7));

	// Boxes Left
	var tmp_aff_left = 200 - aff[elli_id];
	tmp_aff_left -= (_SICK_EVENT_AFF * (1 - flags['sick_elli']));
	tmp_aff_left -= (_ANKLE_EVENT_AFF * (1 - flags['ankle_elli']));
	tmp_aff_left -= (_DREAM_EVENT_AFF * (1 - flags['dream_elli']));
	tmp_aff_left -= ((d < 23) ? 12 : 0);
	var musboxes = Math.ceil((tmp_aff_left) / (6 + 3));

	if (d == 67) { flags['dontsave'] = true; }
	if (d == 68) { // Fall 8
		a.push({'desc':"Check Weather, RESET IF RAINY TOMORROW", 'imp':true});
	}
	if (d == 69) {
		if (aff[elli_id] < (200 - 4) && flags['new_mus_box'] == 0) {
			a.push({'desc':"RESET IF NO RICK, NEED FIXED BOX", 'iid':rick_id, 'imp':true});	
		}
	}

	if (d == 3) { // Spring 3
		a.push({'desc':"Greet the Mayor", 'iid':mayor_id});
	}

	if ((d % 120) == 23) {
		// Flower Festival, Spring 23
		a.push({'desc':"Go to Town Square", 'iid':mayor_id, 'imp':(d == 23)});
		a.push({'desc':"Talk", 'cid':rick_id, 'val':2, 'sel':(aff[rick_id] < _RICK_FIX_MIN)});
		a.push({'desc':"Talk", 'cid':elli_id, 'val':2});
		a.push({'desc':"Dance", 'cid':elli_id, 'val':10, 'sr':true});
	} 

	if (aff[elli_id] >= (200 - 9) && d < 69) {
		a.push({'desc':("Sleep to Fall 9 (" + (69 - d) + " days left)"), 'iid':elli_id, 'imp':true});
	} else {
		if (is_sunny != -1 && !is_festival(d) && dow != "SUN") {
			// Timer for Fishing
			if (d > 4) {
				a.push({'desc':"Leave the river 35 secs after leaving the house"});
			}

			// Music Box Dig
			if (d > 3 && flags['old_mus_box'] == 0) {
				a.push({'desc':"Equip hoe", 'iid':musbox_id, 'red':no_more_boxes});
				if (flags['treasure_map'] == 0) {
					a.push({'desc':'Treasure Map', 'sr':true, 'val':1, 'cid':'f_treasure_map'});	
				}
				a.push({'desc':"Dig Music Box", 'cid':'f_old_mus_box', 'val':1, 'sr':true, 'iid':musbox_id, 'sel':(!skip && !no_more_boxes)});
			}

			// Fishing Rod
			if (d > 3 && flags['fishing_rod'] == 0) {
				a.push({'desc':"Get Fishing Rod", 'val':1, 'cid':'f_fishing_rod', 'iid':get_npc_id('fisherman'), 'sel':(!skip), 'red':skip});
			}

			if (aff[rick_id] >= (_RICK_FIX_MIN - 6) && flags['new_mus_box'] == 0) {
				if (is_sunny == 1 && dow != "WED") {
					// RICK
					if (aff[rick_id] > 38 && flags['cutscene_rick'] == 0 && dow != "SAT") {
						a.push({'desc':"Enter / Exit to clear Rick / Ann cutscene", 'iid':rick_id, 'imp':true});
					}
					if (aff[rick_id] == 0) { a.push({'desc':"Meet", 'cid':rick_id, 'val':4, 'sel':(!skip), 't3':"Talk  "}); }
					a.push({'desc':"Talk  ", 'sel':(!skip && !rick_skip), 'sr':(aff[rick_id] == 0), 'red':(skip || rick_skip),
						'cid':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [rick_id, 'f_cutscene_rick'] : rick_id),
						'val':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [3, 1] : 3)
					});
					a.push({'desc':"Gift  ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':(!skip && !rick_skip && aff[rick_id] < _RICK_FIX_MIN)});
					if (aff[rick_id] >= (_RICK_FIX_MIN - 6)) {
						a.push({'desc':"Rick Fix", 'sr':true, 'sel':(!rick_skip && !skip),
							'cid':['f_old_mus_box', 'f_new_mus_box'], 'val':[-1, 1], 't3':"Talk  "
						});
					}
					a.push({'desc':"Weed  ", 'cid':rick_id, 'val':-2, 'sr':true, 'sel':false});
				}
			}

			// ELLI
			if (aff[elli_id] == 0) { a.push({'desc':"Meet", 'cid':elli_id, 'val':4, 'sel':(!skip), 'red':(skip)}); }
			a.push({'desc':("Talk" + elli_loc), 'cid':elli_id, 'val':1, 'sr':(aff[elli_id] == 0), 'red':(skip),
				'sel':((elli_sick_event && dow == "WED" && flags['new_mus_box'] == 0) || (!skip && aff[rick_id] < (_RICK_FIX_MIN - 6))),
				'red':(skip && !(elli_sick_event && dow == "WED"))
			});
			if (aff[rick_id] >= (_RICK_FIX_MIN - 6)) {
				a[a.length - 1]['t2'] = "MusBox ";
				a.push({'desc':"MusBox ", 'cid':[elli_id, 'f_new_mus_box'], 'val':[_MUS_BOX_AFF, -1], 'sr':true, 't2':a[a.length - 1]['desc'],
					'sel':(!skip || (elli_sick_event && dow == "WED" && flags['new_mus_box'] == 1))
				});
			}
			a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':"M/L Fish", 'sel':(!fish_required && (!skip || (elli_sick_event && dow == "WED")))});
			a.push({'desc':"M/L Fish", 'sr':true, 't2':"Gift ", 'cid':[elli_id, 'v_happiness'], 'val':[3, 1], 'sel':fish_required});
			if (fish_required) { a.push({'desc':"FISH REQUIRED", 'sr':true}); }
			else { a.push({'desc':("(" + musboxes + " Boxes Left)"), 'sr':true}); }

			if (is_sunny == 1) {
				if (flags['dream_elli'] == 0 && aff[elli_id] >= (_DREAM_EVENT_MIN - _MUS_BOX_AFF - 4)) {
					a.push({'desc':"DREAM (Village)", 'cid':[elli_id, 'f_dream_elli'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
				}
				if (flags['ankle_elli'] == 0 && aff[elli_id] >= (_ANKLE_EVENT_MIN - _MUS_BOX_AFF - 4)) {
					a.push({'desc':"ANKLE (MTN)", 'cid':[elli_id, 'f_ankle_elli'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':false,
					       'sr':(flags['dream_elli'] == 0 && aff[elli_id] >= (_DREAM_EVENT_MIN - _MUS_BOX_AFF - 4))
					});
				}
			} else if (elli_sick_event) {
				a.push({'desc':"Sick Event (Bakery)", 'cid':[elli_id, 'f_sick_elli'], 'val':[_SICK_EVENT_AFF, 1],
					'red':(aff[elli_id] >= 250), 'sel':(aff[elli_id] < 250)
				});
			}

			if (aff[rick_id] < (_RICK_FIX_MIN - 6) || flags['new_mus_box'] == 1) {
				if (is_sunny == 1 && dow != "WED") {
					// RICK
					if (aff[rick_id] > 38 && flags['cutscene_rick'] == 0 && dow != "SAT") {
						a.push({'desc':"Enter / Exit to clear Rick / Ann cutscene", 'iid':rick_id, 'imp':true});
					}
					if (aff[rick_id] == 0) { a.push({'desc':"Meet", 'cid':rick_id, 'val':4, 'sel':(!rick_skip && !skip), 't3':"Talk  "}); }
					a.push({'desc':"Talk  ", 'sel':(!rick_skip && !skip), 'sr':(aff[rick_id] == 0), 'red':(skip || rick_skip),
						'cid':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [rick_id, 'f_cutscene_rick'] : rick_id),
						'val':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [3, 1] : 3)
					});
					a.push({'desc':"Gift  ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':(!rick_skip && !skip && aff[rick_id] < _RICK_FIX_MIN)});
					if (aff[rick_id] >= (_RICK_FIX_MIN - 6)) {
						a.push({'desc':"Rick Fix", 'sr':true, 'sel':(!rick_skip && !skip),
							'cid':['f_old_mus_box', 'f_new_mus_box'], 'val':[-1, 1], 't3':"Talk  "
						});
					}
					a.push({'desc':"Weed  ", 'cid':rick_id, 'val':-2, 'sr':true, 'sel':false});
				}
			}
		}
	}

	// Photo
	if (d == 69) {
		a.push({'desc':'Elli Photo (6 PM)', 'cid':[elli_id, 'f_photo_elli'], 'val':[_PHOTO_EVENT_AFF, 1], 'imp':true});
	}

	return a;
}
