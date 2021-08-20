get_actions_photos_aff = function (d = 3, g = 300, is_sunny = 1, a = []) {
	var ann_id = get_npc_id('ann');
	var basil_id = get_npc_id('basil');
	var cliff_id = get_npc_id('cliff');
	var chicken_id = get_npc_id('chicken');
	var cow_id = get_npc_id('cow');
	var dog_id = get_npc_id('dog');
	var doug_id = get_npc_id('doug');
	var elli_id = get_npc_id('elli');
	var grey_id = get_npc_id('grey');
	var harris_id = get_npc_id('harris');
	var horse_id = get_npc_id('horse');
	var jeff_id = get_npc_id('jeff');
	var kai_id = get_npc_id('kai');
	var karen_id = get_npc_id('karen');
	var kent_id = get_npc_id('kent');
	var maria_id = get_npc_id('maria');
	var mas_carp_id = get_npc_id('mas_carpenter');
	var may_id = get_npc_id('may');
	var mayor_id = get_npc_id('mayor');
	var midwife_id = get_npc_id('midwife');
	var pastor_id = get_npc_id('pastor');
	var popuri_id = get_npc_id('popuri');
	var rick_id = get_npc_id('rick');
	var sprite_id = get_npc_id('sprite');
	var musbox_id = get_npc_id('musbox');

	var dow = get_dow(d, true);

	var kai_maxed = (aff[kai_id] >= (160 - (((flags['ankle_karen'] == 0) ? 20 : 0) + 16 + 3))); // Two Swims and a Cow Win (other festival talks too, so there's a buffer)
	var kai_visits = Math.ceil((160 - (((flags['ankle_karen'] == 0) ? 20 : 0) + 16 + 3 + aff[kai_id])) / 8);

	var maria_done = (d > 90 || d == 71 || (aff[elli_id] > 200 && (aff[ann_id] > ((d > 101) ? 196 : 150))));
	var elli_done = (d > 90 || d == 71 || aff[elli_id] > 190);
	var ann_done = ((d > 90 && (d < 102 || d > 106)) || d == 71 || (aff[ann_id] > ((d > 101) ? 196 : 150)));
	var rick_done = (d == 71 || aff[rick_id] >= _PARTY_ATTEND_MIN);

	if (d == 265) {
		a.push({'desc':"Baby Born", 'iid':elli_id, 'imp':true, 'val':[1, 1, 30, 8, 5, 5],
			'cid':['f_dontsave', 'f_photo_baby', 'v_happiness', elli_id, midwife_id, pastor_id]
		});
		a.push({'desc':"(3 PM or Later)", 'sr':true});
	}

	if (d >= 120 && is_sunny == 1) {
		a.push({'desc':"Scare birb", 'cid':'v_happiness', 'val':1, 'sel':false});
	}

	// Rainy on day before evaluation
	if (d >= 269) { flags['dontsave'] = 1; }
	if (d == 270 && is_sunny == 0) {
		a.push({'desc':"RESET IF NO FEED- RANCH IS CLOSED", 'red':true});
		a.push({'desc':"Chicken Inside / Feed", 'imp':true, 'iid':chicken_id});
	}

	// Married Affection
	if (d > 175) {
		a.push({'desc':"MusBox ", 'cid':elli_id, 'val':_MUS_BOX_AFF, 't2':"Talk ", 'sel':false});
		a.push({'desc':"Talk ", 'cid':elli_id, 'val':1, 't2':"MusBox ", 'sr':true}); 
		a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':["Egg", "M/L Fish", "Milk"], 'sel':false});
		a.push({'desc':"M/L Fish", 'cid':[elli_id, 'v_happiness'], 'val':[3, 1], 'sr':true, 't2':["Egg", "Gift ", "Milk"], 'sel':false});
		a.push({'desc':"Egg", 'sr':true, 't2':["M/L Fish", "Gift ", "Milk"], 'sel':false,
				'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
				'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
		});
		a.push({'desc':"Milk", 'sr':true, 't2':["M/L Fish", "Gift ", "Egg"], 'sel':false,
				'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
				'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
		});
	}

	if (d > 131 && d < 210 && d != 175) {
		if (d == 132) { a.push({'desc':"Put Cows Outside", 'iid':cow_id, 'imp':(is_sunny == 1), 'red':(is_sunny == 0)}); }
		if (vars['cows'] > 0) {
			a.push({'desc':"Equip Milker", 'iid':cow_id});
			a.push({'desc':"Milk Cows", 'sr':true});
			if (vars['happiness'] > 0) {
				a.push({'desc':"Sick Cow", 'sr':true, 'cid':'v_happiness', 'val':(-1 * vars['happiness']), 'sel':false});
			}
		}
	}

	if (is_festival(d) || d == 175) {
		// Planting (Spr 8), Horse Race (Spr 17), Flower Fest (Spr 23)

		if (d != 175) { a.push({'desc':("<h4>" + festival_name(d).toUpperCase() + "</h4>")}); }

		if (d % 120 == 8 && flags["harvest_king"] == 1) {
			// Planting Festival (Spring 8)
			a.push({'desc':"Go to Town Square", 'iid':mayor_id, 'cid':['v_happiness', 'f_dontsave'], 'val':[5, 1], 'imp':true});
			a.push({'desc':"Ride with Maria", 'val':[1, 8, -1], 'cid':['f_photo_harvest', maria_id, 'f_harvest_king'], 't2':"Ride with Elli", 'imp':true});
			a.push({'desc':"Ride with Elli", 'val':[1, 8, -1], 'cid':['f_photo_harvest', elli_id, 'f_harvest_king'], 'sel':false, 't2':"Ride with Maria", 'red':true});
		} else if ((d % 120) == 23) { // Flower Fest
			if (d < 240 || flags['berry_flowerfest'] == 0) {
				a.push({'desc':"Go to Town Square", 'iid':mayor_id, 'cid':'v_happiness', 'val':5, 'imp':true});
				if (flags['berry_flowerfest'] == 0) {
					a.push({'desc':"Buy a Power Nut", 'cid':['f_berry_flowerfest','v_gold'],
							'val':[1, -1000], 'iid':get_npc_id('salesman'),
							'sel':(d > 23), 'red':(d == 23)
					});
				}
				a.push({'desc':"Talk", 'cid':rick_id, 'val':2, 'sel':(aff[rick_id] <= _PARTY_ATTEND_MIN), 'red':(aff[rick_id] > _PARTY_ATTEND_MIN)});
				if (aff[kai_id] > 25) {
					a.push({'desc':"Talk", 'cid':kai_id, 'val':2, 'sel':(aff[kai_id] >= 50), 'red':(aff[kai_id] > _PARTY_ATTEND_MIN)});
				}
				if (aff[cliff_id] > 25) {
					a.push({'desc':"Talk", 'cid':cliff_id, 'val':2, 'sel':(aff[cliff_id] >= 50), 'red':(aff[cliff_id] > _PARTY_ATTEND_MIN)});
				}
				a.push({'desc':"Talk", 'cid':maria_id, 'val':2, 'sel':(aff[maria_id] < _PHOTO_MIN), 'red':(aff[maria_id] >= _PHOTO_MIN)});
				a.push({'desc':"Dance",'cid':[maria_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance ", "Dance  "], 'sel':false, 'sr':true});
				a.push({'desc':"Talk", 'cid':elli_id, 'val':2, 'sel':(aff[elli_id] < 250), 'red':(aff[elli_id] >= 250)});
				a.push({'desc':"Dance ",'cid':[elli_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance", "Dance  "], 'sel':false, 'sr':true});
				a.push({'desc':"Talk", 'cid':ann_id, 'val':2, 'sel':(aff[ann_id] < _PHOTO_MIN), 'red':(aff[ann_id] >= _PHOTO_MIN)});
				a.push({'desc':"Dance  ",'cid':[ann_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance", "Dance "], 'sel':false, 'sr':true});
			}
		} else if ((d % 120) == 17 && d > 240 && flags['photo_horserace'] == 0) { // Horse Race
			a = betting_table(a, 3, d);
			if (flags['horse_entered'] == 1) {
				a.push({'desc':"Win Horse Race", 'cid':'f_photo_horserace','val':1, 'iid':doug_id, 'imp':true});
			}
		} else if ((d % 120) == 54) { // Sea Festival
			a.push({'desc':"Go to the Beach", 'imp':true});
			a.push({'desc':"Win Swim Festival", 'iid':mayor_id, 'imp':true,
					'cid':["f_photo_swimming", jeff_id, grey_id, harris_id, kai_id, cliff_id, 'v_happiness', 'f_dontsave'],
					'val':[(1 - flags['photo_swimming']), 8, 8, 8, 8, 8, 5, 1]
			});
		} else if (d == 72) { // Fall 12
			// Harvest Festival
			a.push({'desc':'Win Harvest King', 'iid':mayor_id, 'imp':true, 'val':[1, 5], 'cid':['f_harvest_king', 'v_happiness']});
			if (aff[kai_id] > 10) {
				a.push({'desc':"Talk", 'cid':kai_id, 'val':2, 'sel':(aff[kai_id] >= 50 && aff[kai_id] < _PARTY_ATTEND_MIN), 'red':(aff[kai_id] > _PARTY_ATTEND_MIN)});
			}
			if (aff[cliff_id] > 10) {
				a.push({'desc':"Talk", 'cid':cliff_id, 'val':2, 'sel':(aff[cliff_id] >= 50 && aff[cliff_id] < _PARTY_ATTEND_MIN), 'red':(aff[cliff_id] > _PARTY_ATTEND_MIN)});
			}
			a.push({'desc':"Talk", 'val':2, 'cid':ann_id, 'sel':(aff[ann_id] < (_DREAM_EVENT_MIN - 2)), 'red':(aff[ann_id] >= (_DREAM_EVENT_MIN - 12))});
			a.push({'desc':"Dance", 'val':10, 'cid':ann_id, 't2':["Dance ", " Dance"], 'sr':true, 'sel':(aff[ann_id] < (_DREAM_EVENT_MIN - 12))});
			a.push({'desc':"Talk", 'val':2, 'cid':maria_id});
			a.push({'desc':"Dance ", 'val':10, 'cid':maria_id, 'sr':true, 't2':["Dance", " Dance"], 'sel':(aff[ann_id] >= (_DREAM_EVENT_MIN - 12))});
			a.push({'desc':"Talk", 'val':2, 'cid':elli_id});
			a.push({'desc':" Dance", 'val':10, 'cid':elli_id, 'sel':false, 't2':["Dance", "Dance "], 'sr':true});
			a.push({'desc':"RESET IF NOT KING", 'imp':true});
		} else if (d % 120 == 80 && (flags['berry_ocean'] == 0 || flags['berry_farm'] == 0)) {
			// Egg Festival
			if (d == 80) { a.push({'desc':"Save Egg Festival for Year 2", 'red':true}); }
			a.push({
				'desc':'Win Egg Festival', 'iid':mayor_id, 'sel':(d > 120),
				'val':[1, 5], 'imp':(d > 120), 'red':(d < 120),
				'cid':['berry_eggfest', 'v_happiness']
			});
			a.push({'desc':"Talk", 'val':2, 'cid':elli_id, 'sel':(d > 120 && aff[elli_id] < 250), 'red':(d < 120)});
			a.push({'desc':"Talk", 'val':2, 'cid':maria_id, 'sel':false, 'red':(d < 120)});
			a.push({'desc':"Talk", 'val':2, 'cid':ann_id, 'sel':false, 'red':(d < 120)});
			a.push({'desc':"Talk", 'val':2, 'cid':rick_id, 'sel':false, 'red':(aff[rick_id] < _PARTY_ATTEND_MIN || d < 120)});
		} else if (d % 120 == 88) { // Fall 28
			// Horse Race
			a = betting_table(a, 3, d);
			if (flags['horse_entered'] == 1) {
				a.push({'desc':"Win Horse Race", 'cid':'f_photo_horserace','val':1, 'iid':doug_id, 'imp':true});
			}
		} else if (d % 120 == 109) {
			// Dog Race, 1000 LUM (Win 19)
			a.push({'desc':"Buy 1000 Lumber at Dog Race", 'cid':['v_lumber', 'v_medals'], 'val':[999, -1000], 'iid':mayor_id, 'imp':true});
			if (flags['dog_entered'] == 1) { a.push({'desc':"Win Dog Race", 'cid':'f_photo_dograce', 'val':1, 'sel':false, 'sr':true}); }
			a = betting_table(a, 3, d);
		} else if (d == 175) {
			a.push({'desc':"Wedding Day", 'iid':elli_id, 'cid':['f_photo_married', 'f_propose', 'v_happiness'], 'val':[1, -1, 30], 'imp':true});
		}
	} else if (is_sunny != -1) { // NOT FESTIVAL
		if (d == 29) {
			a.push({'desc':"Check Weather, Dog Karen to 159 if rainy Tomorrow", 'imp':true, 'iid':karen_id});
		} else if (d == 65 || d == 71 || (d == 82 && flags['sick_ann'] == 0 && aff[ann_id] < (_DREAM_EVENT_MIN - _SICK_EVENT_AFF))) { // Fall 5 & 11 & 22 (Ann Sick)
			flags['dontsave'] = true;
		} else if (d == 83 && flags['sick_ann'] == 0 && aff[ann_id] < (_DREAM_EVENT_MIN - _SICK_EVENT_AFF)) {
			a.push({'desc':"Check Weather, RESET IF SUNNY TOMORROW [Ann Sick Event]", 'imp':true, 'iid':ann_id});
		} else if (d == 66 || d == 68) { // Fall 6 & 8
			a.push({'desc':"Check Weather, RESET IF RAINY TOMORROW", 'imp':true});
		} else if (d == 70) {
			a.push({'desc':"Put Dog Outside for Manip", 'iid':dog_id, 'imp':true});
		} else if (d % 120 == 87) {
			// Horse Race Entry
			if (flags['photo_horserace'] == 0) {
				a.push({'desc':"Enter Horse", 'cid':['f_horse_entered', doug_id], 'val':[1, 3],
					'sel':(d > 120), 'red':(d < 120), 'imp':(d > 120)
				});
			} else {
				a.push({'desc':"Ignore Doug on Farm", 'imp':true, 'iid':doug_id});
			}
		} else if (d == 90) {
			// Winter Cows
			a.push({'desc':"Accept Cows", 'cid':'f_borrow_cows', 'val':1, 'iid':get_npc_id('doug'), 'imp':true});
		} else if (d % 120 == 108) {
			a.push({'desc':"Enter Dog", 'cid':['f_dog_entered', doug_id], 'val':[1, 3],
					'sel':(vars['medals'] >= 1000 || d > 120), 'imp':(d > 120), 'red':(d < 120 && vars['medals'] < 1000)
			});
		} else if (d == 183) {
			a.push({'desc':"Enter Cow", 'cid':'f_cow_entered', 'val':1, 'iid':doug_id, 'imp':true});
		}

		// Cow Photo
		if (flags['cow_entered'] == 1 && vars['grass_planted'] > 0 && is_sunny == 1 && d > 184 && flags['photo_cowfest'] == 0) {
			a.push({'desc':"Cow Photo", 'imp':true, 'cid':['f_photo_cowfest'], 'val':[1], 'iid':cow_id});
			a.push({'desc':"(Enter / Exit House Until Photo)", 'sr':true});
		}

		// Steal Cows
		if (d == 94) { a.push({'desc':"Cow Stealing Glitch", 'imp':true}); }
		if (flags['cow_steal_glitch'] > 0) {
			if (d == 112) { a.push({'desc':"Cows mature today", 'iid':cow_id}); vars['cows'] = 4; }
			if (flags['cow_steal_glitch'] == 1) {
				if (vars['day'] > 94 && vars['day'] < 115) {
					a.push({'desc':"DONT VISIT COWS YET", 'red':true, 'sr':(d == 112)});
				} else if (flags['cows_hammered'] == 0 && d >= 115) {
					a.push({'desc':"Hammer cows", 'cid':'f_cows_hammered', 'val':1, 'iid':cow_id, 'imp':true});
				}
			}
		}

		if (flags['ankle_ann'] == 0 && aff[ann_id] >= (_ANKLE_EVENT_MIN - 10) && is_sunny == 1 && flags['photo_ann'] == 0 && flags['married'] == 0) {
			// ANKLE EVENT
			a.push({'desc':"ANKLE (Crossroads)", 'cid':[ann_id, 'f_ankle_ann'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':false});
		}
		if (d >= 83 && d <= 87) {
			// Bridge Work
			// Fall 83, 84, 85, 86, 87
			//	    Sat Sun Mon Tue Wed
			a.push({'desc':"Bridge Work", 'iid':mas_carp_id,
				'cid':[mas_carp_id, get_npc_id('carpenter_top'), get_npc_id('carpenter_bot'), 'v_bridge_days_worked', 'v_gold'],
				'val':[5, 5, 5, 1, 1000]
			});
		}
		//  102, 103, 104, 105, 106
		// THURS,FRI, SAT, SUN, MON
		// OR Steal Cows on Win 4
		if (d >= 102 && d <= 106) {
			// Hot Springs
			a.push({'desc':"Hot Springs Work", 'iid':mas_carp_id, 'cid':['v_springs_days_worked', 'v_gold'], 'val':[1, 1000],
					'sel':(d != 105 || vars['springs_days_worked'] == 2),
					'imp':(d == 106 || vars['springs_days_worked'] == (d - 103)),
					'red':(d == 105 && vars['springs_days_worked'] == 3)
			});
			if (d != 105 && aff[jeff_id] < 100) {
				a.push({'desc':"Jeff Spam (Bar) [21 talks]", 'cid':jeff_id, 'val':(21 * 8), 'imp':(d != 105), 'sel':(d != 105)});
			}
			if (d == 106) {
				// Hot Springs Photo
				a[a.length - 1]['cid'].push('f_photo_springs');
				a[a.length - 1]['val'].push(1);
			}
		}

		// After Baby Born
		if (d > 265) {
			if (dow != "THURS") {
				if (aff[doug_id] < 160 && aff[gotz_id] < 160) {
					a.push({'desc':"Clear Mailbox", 'imp':true});
				}

				// DOUG
				if (aff[doug_id] < 160) {
					var tmp_doug_spam = Math.ceil((_PARTY_ATTEND_MIN - aff[doug_id]) / 2);
					a.push({'desc':("Spam Doug (Ranch) [" + tmp_doug_spam + " Times]"), 'cid':doug_id, 'val':200});
					if (g >= 1500) {
						a.push({'desc':"Buy a Chicken", 'sr':true, 'cid':['v_chickens', 'v_gold'], 'val':[1, -1500]});
					}
				}

				// GOTZ
				if (aff[gotz_id] < 160) {
					var tmp_gotz_spam = Math.ceil((_PARTY_ATTEND_MIN - aff[gotz_id]) / 2);
					var gotz_location = ((is_sunny == 1) ? "Vineyard" : "In House");
					a.push({'desc':("Spam Gotz (" + gotz_location + ") [" + tmp_gotz_spam + " Times]"), 'cid':gotz_id, 'val':200});
				}
			}
			if (vars['happiness'] < 250) {
				// Bathroom for Happiness
				var tmp_bathroom_uses = Math.ceil((250 - vars['happiness']) / 2);
				a.push({'desc':("Use Bathroom " + tmp_bathroom_uses + " Times"), 'imp':(d > 268),
					'cid':'v_happiness', 'val':(2 * tmp_bathroom_uses), 'sel':false
				});
			}
		}

		if (d > 240 && aff[kent_id] < _PARTY_ATTEND_MIN && is_sunny == 1) {
			var kent_loc = "(Church / Outside Bakery)";
			if (dow == "SAT") { kent_loc = "(Fish Tent / Fountain)"; }
			if (dow == "SUN") { kent_loc = "(Library / Carp House)"; }
			a.push({'desc':("Spam Kent with Chicken " + kent_loc + " [" + Math.ceil((_PARTY_ATTEND_MIN - aff[kent_id]) / 3) + " times]"),
				'cid':kent_id, 'sel':(d == 270), 'imp':(d == 270),
				'val':(_PARTY_ATTEND_MIN - aff[kent_id])
			});
			a.push({'desc':"Puppies Cutscene", 'cid':['f_cutscene_puppies', 'v_happiness'], 'val':[1, 20], 'iid':kent_id});
		}

		if (dow != "THURS" && flags['photo_ann'] == 0) {
			// ANN
			// -1 sp " GIFT"
			// -1 sp " MUSBOX"
			var ann_sick_event = (dow == "SUN" && is_sunny == 0 && flags['sick_ann'] == 0 && aff[ann_id] < _PHOTO_MIN && d != 63 && 
						      aff[ann_id] >= (_SICK_EVENT_MIN - 5));
			if (aff[ann_id] == 0) {
				a.push({'desc':"Meet", 'cid':ann_id, 'val':4, 'sel':(is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow)) });
			}
			if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
				a.push({'desc':" MusBox", 'cid':ann_id, 'val':_MUS_BOX_AFF, 'sr':(aff[ann_id] == 0),
						't2':((dow == "SUN") ? "Talk (Ranch 50%)" : "Talk (Ranch)"),
						'sel':false, 'red':(d < 109 && aff[ann_id] > ((d > 94) ? 196 : 156))
				});
			}
			a.push({'desc':((dow == "SUN") ? "Talk (Ranch 50%)" : "Talk (Ranch)"), 'cid':ann_id, 'val':1,
					'sr':(aff[ann_id] == 0 || aff[rick_id] >= _RICK_FIX_MIN - 6), 'red':(aff[ann_id] > 196),
					'sel':((!ann_done && ((is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow)) || d == 104)) ||
					       (ann_sick_event && (d > 94 || aff[ann_id] < (_PHOTO_MIN - _SICK_EVENT_AFF))))
			});
			if (aff[rick_id] >= _RICK_FIX_MIN - 6) { a[a.length - 1]['t2'] = " MusBox"; }
			a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':false, 't2':"Potato"});
			a.push({'desc':"Potato", 'cid':[ann_id, 'v_potatoes', 'v_potato_gifts'], 'val':[3, -1, 1], 'sr':true, 't2':" Gift",
					'sel':((!ann_done && ((is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow)) || d == 104)) ||
					       (ann_sick_event && (d > 94 || aff[ann_id] < (_PHOTO_MIN - _SICK_EVENT_AFF))))
			});
			if (flags['recipe_ann'] == 0) {
				a[a.length - 1]['cid'] = ['f_recipe_ann', ann_id];
				a[a.length - 1]['val'] = [1, 6];
			}
			if (ann_sick_event) {
				a.push({'desc':"Sick Event", 'cid':[ann_id, 'f_sick_ann'], 'val':[_SICK_EVENT_AFF, 1],
					'imp':(aff[ann_id] < (_DREAM_EVENT_MIN - _SICK_EVENT_AFF) || d > 94),
					'sel':(aff[ann_id] < (_DREAM_EVENT_MIN - _SICK_EVENT_AFF) || d > 94),
					'red':(aff[ann_id] >= (_DREAM_EVENT_MIN - _SICK_EVENT_AFF) && d < 94)
				});
			}
		}
		// ANN DREAM
		if (flags['dream_ann'] == 0 && aff[ann_id] >= _DREAM_EVENT_MIN && is_sunny == 1 && flags['photo_ann'] == 0) {
			a.push({'desc':"Ignore Ann if she is crouching", 'red':true});
			a.push({'desc':"DREAM (Cave)", 'cid':[ann_id, 'f_dream_ann'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
		}

		if (dow == "MON" && is_sunny == 1 && flags['photo_married'] == 0) {
			// ELLI (in Mtns / Beach)
			if ((d % 120) > 30 && (d % 120) < 61 && aff[elli_id] >= _CUTSCENE_BEACH_MIN && flags['cutscene_beach'] == 0) {
				// Beach cutscene between Karen and Elli occurs when Elli is >= 145-ish
				a.push({'desc':"WARNING: Cutscene plays at Beach", 'red':true});
				a.push({'desc':"Beach Cutscene", 'sr':true, 'sel':false, 'cid':'f_cutscene_beach', 'val':1});
			}
			var tmp_elli_loc = (((d % 120) > 30 && (d % 120) < 61) ? "Beach" : "MTN");
			if (aff[elli_id] == 0) { a.push({'desc':"Meet", 'cid':elli_id, 'val':4}); }
			if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
				a.push({'desc':"MusBox ", 'cid':elli_id, 'val':_MUS_BOX_AFF, 'sr':(aff[elli_id] == 0),
					'sel':false, 't2':("Talk (" + tmp_elli_loc + ")"),
					'red':((d % 120) > 30 && (d % 120) < 61 && aff[elli_id] >= _CUTSCENE_BEACH_MIN && flags['cutscene_beach'] == 0)
				});
			}
			a.push({'desc':("Talk (" + tmp_elli_loc + ")"), 'cid':elli_id, 'val':1, 'sr':(aff[elli_id] == 0 || aff[rick_id] >= _RICK_FIX_MIN - 6), 'sel':(!elli_done) });
			if (aff[rick_id] >= _RICK_FIX_MIN - 6) { a[a.length - 1]['t2'] = "MusBox "; }
			a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':["Egg", "M/L Fish"], 'sel':false});
			a.push({'desc':"M/L Fish", 'sr':true, 't2':["Egg", "Gift "], 'cid':[elli_id, 'v_happiness'], 'val':[3, 1], 'sel':(!elli_done) });
			a.push({'desc':"Egg", 'sr':true, 'sel':(d >= 12), 't2':["M/L Fish", "Gift "], 'sel':false,
					'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
					'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
			});
		}

		if (is_sunny == 1 && (dow == "MON" || (d % 120 > 30 && d % 120 < 41))  && flags['photo_maria'] == 0) {
			// MARIA
			if (aff[maria_id] == 0) { a.push({'desc':"Meet", 'cid':maria_id, 'val':4}); }
			if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
				a.push({'desc':"MusBox", 'cid':maria_id, 'val':_MUS_BOX_AFF, 'sr':(aff[maria_id] == 0), 'sel':false, 't2':"Talk (MTN / CHUR)" });
			}
			a.push({'desc':("Talk (MTN" + ((d % 120 > 30 && d % 120 < 41) ? "" : " / CHUR") + ")"),
				'cid':maria_id, 'val':1, 'sr':(aff[maria_id] == 0 || aff[rick_id] >= _RICK_FIX_MIN - 6),
				'sel':(!maria_done && is_sunny == 1 && !["WED", "SAT", "SUN"].includes(dow))
			});
			if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
				a[a.length - 1]['t2'] = "MusBox";
			}
			a.push({'desc':" Gift  ", 'cid':maria_id, 'val':2, 'sr':true, 't2':"Cabbage",
				'sel':(!maria_done && is_sunny == 1 && !["WED", "SAT", "SUN"].includes(dow))
			});
			a.push({'desc':"Cabbage", 'sel':false, 't2':" Gift  ", 'sr':true,
					'cid':((flags['recipe_maria'] == 0) ? [maria_id, 'f_recipe_maria'] : maria_id),
					'val':((flags['recipe_maria'] == 0) ? [5, 1] : 3)
			});
		}

		// ELLI
		// "Gift " <- one space
		// "Talk " <- one space
		var elli_sick_event = (is_sunny == 0 && aff[elli_id] >= _SICK_EVENT_MIN && flags['sick_elli'] == 0);
		if (flags['photo_married'] == 0) {
			if (!["SUN", "MON"].includes(dow)) {
				if (aff[elli_id] == 0) { a.push({'desc':"Meet", 'cid':elli_id, 'val':4, 'sel':(!["SAT", "WED"].includes(dow) && is_sunny == 1)}); }
				if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
					a.push({'desc':"MusBox ", 'cid':elli_id, 'val':_MUS_BOX_AFF, 'sr':(aff[elli_id] == 0),
							't2':((dow == "WED") ? "Talk (Flower Shop)" : "Talk (Bakery)"), 'sel':false
					});
				}
				a.push({'desc':((dow == "WED") ? "Talk (Flower Shop)" : "Talk (Bakery)"), 'cid':elli_id, 'val':1,
					'sr':(aff[elli_id] == 0 || aff[rick_id] >= _RICK_FIX_MIN - 6),
					'sel':(!elli_done && ((elli_sick_event && dow == "WED") || (!["SAT", "WED"].includes(dow) && is_sunny == 1)))
				});
				if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
					a[a.length - 1]['t2'] = "MusBox ";
				}
				a.push({'desc':"Gift ", 'cid':elli_id, 'val':1, 'sr':true, 't2':["Egg", "M/L Fish"], 'sel':false});
				a.push({'desc':"M/L Fish", 'sr':true, 't2':["Egg", "Gift "], 'cid':[elli_id, 'v_happiness'], 'val':[3, 1],
						'sel':(!elli_done && !["WED", "SAT"].includes(dow) && is_sunny == 1)
				});
				a.push({'desc':"Egg", 'sr':true, 't2':["M/L Fish", "Gift "], 'sel':false,
						'cid':((flags['recipe_elli'] == 0) ? ['f_recipe_elli', elli_id] : elli_id),
						'val':((flags['recipe_elli'] == 0) ? [1, 6] : 4)
				});
			}
			if (elli_sick_event) {
				a.push({'desc':"Sick Event (Bakery)", 'cid':[elli_id, 'f_sick_elli'], 'val':[_SICK_EVENT_AFF, 1],
					'red':(aff[elli_id] >= 250), 'sel':(aff[elli_id] < 250)
				});
			}
			// ELLI DREAM ANKLE
			if (flags['dream_elli'] == 0 && aff[elli_id] >= _DREAM_EVENT_MIN && flags['married'] == 0) {
				a.push({'desc':"DREAM (Village)", 'cid':[elli_id, 'f_dream_elli'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
			}
			if (flags['ankle_elli'] == 0 && aff[elli_id] >= (_ANKLE_EVENT_MIN - _MUS_BOX_AFF - 4) && flags['married'] == 0) {
				a.push({'desc':"ANKLE (Mtn)", 'cid':[elli_id, 'f_ankle_elli'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':false,
						'sr':(flags['dream_elli'] == 0 && aff[elli_id] >= _DREAM_EVENT_MIN
				)});
			}
		}

		if (is_sunny == 1 && !["SUN", "WED"].includes(dow)) {
			// RICK (Chicken Route)
			// "Talk  " - 2 spaces
			// "Gift  " - 2 spaces
			if (aff[rick_id] > 38 && flags['cutscene_rick'] == 0 && dow != "SAT") {
				a.push({'desc':"Enter / Exit to clear Rick / Ann cutscene", 'iid':rick_id, 'imp':true});
			}
			if (aff[rick_id] == 0) { a.push({'desc':"Meet", 'cid':rick_id, 'val':4, 'sel':(dow != "SAT"), 't3':"Talk  "}); }
			a.push({'desc':"Talk  ", 'sel':(dow != "SAT" && d < 90 && !rick_done), 'sr':(aff[rick_id] == 0),
				'cid':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [rick_id, 'f_cutscene_rick'] : rick_id),
				'val':((aff[rick_id] > 38 && flags['cutscene_rick'] == 0) ? [3, 1] : 3)
			});
			a.push({'desc':"Gift  ", 'cid':rick_id, 'val':3, 'sr':true, 'sel':(dow != "SAT" && d < 90 && !rick_done)});

			if (dow == "THURS" && flags['photo_ann'] == 0) {
				// ANN in RICKs shop
				if (aff[ann_id] == 0) { a.push({'desc':"Meet", 'cid':ann_id, 'val':4, 'sel':false}); }
				if (aff[rick_id] >= (_RICK_FIX_MIN - 6)) {
					a.push({'desc':" MusBox", 'cid':ann_id, 'val':_MUS_BOX_AFF, 'sr':(aff[ann_id] == 0), 'sel':false, 't2':"Talk (Ricks Shop)"});
				}
				a.push({'desc':"Talk (Ricks Shop)", 'cid':ann_id, 'val':1, 'sr':(aff[ann_id] == 0 || aff[rick_id] >= (_RICK_FIX_MIN - 6)), 'sel':false});
				if (aff[rick_id] >= (_RICK_FIX_MIN - 6)) {
					a[a.length - 1]['t2'] = " MusBox";
				}
				a.push({'desc':" Gift", 'cid':ann_id, 'val':1, 'sr':true, 'sel':false, 't2':"Potato"});
				a.push({'desc':"Potato", 'cid':[ann_id, 'v_potatoes', 'v_potato_gifts'], 'val':[3, -1, 1], 'sr':true, 'sel':false, 't2':" Gift"});
				if (flags['recipe_ann'] == 0) {
					a[a.length - 1]['cid'] = ['f_recipe_ann', ann_id];
					a[a.length - 1]['val'] = [1, 6];
				}
			}
		}

		// MARIA
		// " Talk" -1 spaces
		if (flags['photo_maria'] == 0) {
			if (dow != "MON" && (d % 120 <= 30 || d % 120 > 40)) { // Library Open
				if ((aff[maria_id] < _DREAM_EVENT_MIN || flags['dream_maria'] == 1) && (aff[maria_id] < _ANKLE_EVENT_MIN || flags['ankle_maria'] == 1)) {
					// Maria in library
					if (aff[maria_id] == 0) { a.push({'desc':"Meet", 'cid':maria_id, 'val':4, 'sel':(is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow)) }); }
					if (aff[rick_id] >= _RICK_FIX_MIN - 6) {
						a.push({'desc':"MusBox", 'cid':maria_id, 'val':_MUS_BOX_AFF,
							'sr':(aff[maria_id] == 0), 't2':"Talk (Library)", 'sel':false
						});
					}
					a.push({'desc':"Talk (Library)", 'cid':maria_id, 'val':1, 'sr':(aff[maria_id] == 0 || aff[rick_id] >= _RICK_FIX_MIN - 6),
							'sel':(is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow) && !maria_done)
					});
					if (aff[rick_id] >= _RICK_FIX_MIN - 6) { a[a.length - 1]['t2'] = "MusBox"; }
					a.push({'desc':" Gift  ", 'cid':maria_id, 'val':2, 'sr':true, 't2':"Cabbage",
							'sel':(is_sunny == 1 && !["SAT", "SUN", "WED"].includes(dow) && !maria_done)
					});
					a.push({'desc':"Cabbage", 'sel':false, 't2':" Gift  ", 'sr':true,
						'cid':((flags['recipe_maria'] == 0) ? [maria_id, 'f_recipe_maria'] : maria_id),
						'val':((flags['recipe_maria'] == 0) ? [5, 1] : 3)
					});
				} else if (d > 160 && flags['married'] == 0) {
					if (flags['ankle_maria'] == 0) {
						a.push({'desc':"Ankle", 'cid':[maria_id, 'f_ankle_maria'], 'val':[_ANKLE_EVENT_AFF, 1], 'sel':false, 'imp':(d == 173)});
						a.push({'desc':"(Reset to clear Invisible Wall)", 'sr':true});
					}
					if (flags['dream_maria'] == 0) {
						a[a.length - 2]['t2'] = "DREAM (Library)";
						a.push({'desc':"DREAM (Library)", 'cid':[maria_id, 'f_dream_maria'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
					} else if (flags['dream_karen'] == 0) {
						a[a.length - 2]['t2'] = "DREAM (Vineyard)";
						a.push({'desc':"DREAM (Vineyard)", 'cid':[karen_id, 'f_dream_karen'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false});
					}
					if (flags['ankle_maria'] == 0) { a[a.length - 1]['t2'] = "Ankle"; }
					a.push({'desc':"PHOTO at 6 PM", 'cid':[maria_id, 'f_photo_maria'], 'val':[_PHOTO_EVENT_AFF, 1], 'sel':false});
				}
			} else if (is_sunny == 0 && aff[maria_id] >= _SICK_EVENT_MIN && flags["sick_maria"] == 0 && flags['married'] == 0) {
				// Sick Event
				a.push({'desc':"Sick Event", 'cid':[maria_id, "f_sick_maria"], 'val':[_SICK_EVENT_AFF, 1], 'imp':true});
			}
		}

		// Dog Karen to Pink
		if (d > 28 && aff[karen_id] < _PHOTO_MIN) {
			var karen_loc = "(Carp House / Beach) [50%]";
			if (dow == "SUN") { karen_loc = "(Beach)"; }
			if (["MON", "THURS"].includes(dow)) {
				karen_loc = "(Vineyard)";
			}
			if (d == 29) {
				if (is_sunny == 0) { karen_loc = "(Bar)"; }
				a.push({'desc':("Dog Karen to 159 " + karen_loc + ((["MON", "THURS", "FRI", "SAT"].includes(dow) && is_sunny == 1) ? " / (BAR)" : "")),
					'cid':karen_id, 'val':(159 - aff[karen_id]), 'sel':false
				});
			} else if (is_sunny == 1) {
				a.push({'desc':("Dog Karen to Pink " + karen_loc + ((["MON", "THURS", "FRI", "SAT"].includes(dow)) ? " / (BAR)" : "")),
					'cid':karen_id, 'val':(240 - aff[karen_id]), 'imp':([30, 67].includes(d)), 'sel':([30, 67].includes(d))
				});
			}
			if (is_sunny == 0 && d == 30) { a.push({'desc':"Sick Event", 'cid':[karen_id, 'f_sick_karen'], 'val':[_SICK_EVENT_AFF, 1], 'imp':true}); }
		}

		// Decline Ankle
		if (flags['ankle_karen'] == 0 && d > 29 && is_sunny == 1 && flags['married'] == 0) {
			a.push({'desc':"Decline Ankle (Vineyard)", 'sel':false, 'cid':[karen_id, kai_id, 'f_ankle_karen'], 'val':[-30, 20, 1], 'red':(d == 30)});
		}

		// KAI
		var kai_gift = "Berry";
		if (d % 120 > 30) { kai_gift = "Berry/Mango"; }
		if (d % 120 > 60) { kai_gift = "Mango/Grapes"; }
		if (aff[kai_id] == 0) { a.push({'desc':"Meet", 'cid':kai_id, 'val':8, 'sel':false, 'red':(d == 30)}); }
		a.push({'desc':"Talk (Vineyard)", 'cid':kai_id, 'val':2, 'sr':(aff[kai_id] == 0), 'sel':false, 'red':(kai_visits < 1 || d == 30)});
		a.push({'desc':kai_gift, 'sr':true, 'sel':false, 't2':"  Gift ",
				'cid':((flags['recipe_kai'] == 0) ? [kai_id, 'f_recipe_kai'] : kai_id),
				'val':((flags['recipe_kai'] == 0) ? [5, 1] : 6)
		});
		a.push({'desc':"  Gift ", 'cid':kai_id, 'val':3, 'sr':true, 'sel':false, 't2':kai_gift});
		a.push({'desc':("(" + ((kai_visits < 0) ? 0 : kai_visits) + " Visits Left)"), 'sr':true});

		if (dow != "SUN") {
			// KAI
			a.push({'desc':"Talk (In Bar)", 'cid':kai_id, 'val':2, 'sel':false, 'red':(kai_visits < 1)});
		}

		// Sell Cow
		if (vars['cows'] > 0 && d < 210 && dow != "THURS") {
			a.push({'desc':"Sell Cow", 'cid':['v_cows', 'v_gold'], 'val':[-1, ((vars['cows'] == 1) ? 8500 : 7500)], 'iid':doug_id, 'sel':false});
		}

		if ([67, 69].includes(d) && is_sunny == 1) {
			if (aff[karen_id] >= _DREAM_EVENT_MIN && flags['dream_karen'] == 0) {
				a.push({'desc':"Dream Warp", 'cid':[karen_id, 'f_dream_karen'], 'val':[_DREAM_EVENT_AFF, 1], 'sel':false, 'red':true});
				a.push({'desc':"(Save for Cow Stealing)", 'sr':true});
			} else {
				a.push({'desc':"Equip Hammer, Clear the Farm"});
			}
			a.push({'desc':(((d == 67) ? "Karen" : "Elli") + " Photo at 6 PM"), 'imp':true, 'val':[_PHOTO_EVENT_AFF, 1, 1] });
			a[a.length - 1]['cid'] = ((d == 67) ? [get_npc_id('karen'), 'f_photo_karen', 'f_dontsave'] : [elli_id, 'f_photo_elli', 'f_dontsave']);
		}
		if (d > 90 && d < 121 && flags['photo_ann'] == 0) {
			// Ann Photo
			a.push({'desc':"Photo", 'cid':[ann_id, 'f_photo_ann', 'f_dontsave'], 'val':[_PHOTO_EVENT_AFF, 1, 1],
					'sel':(aff[ann_id] >= _PHOTO_MIN && is_sunny == 1), 'imp':(aff[ann_id] >= _PHOTO_MIN && is_sunny == 1)
			});
		}

		if (d == 94) {
			if (flags['dream_karen'] == 0) {
				a.push({'desc':"Karen Dream Warp (Vineyard)", 'cid':[karen_id, 'f_dream_karen'], 'val':[_DREAM_EVENT_AFF, 1]});
			}
			if (aff[jeff_id] < 100) {
				// Jeff Spam
				a.push({'desc':"Jeff Spam (Bar) [21 talks]", 'cid':jeff_id, 'val':(21 * 8), 'imp':true});
				a.push({'desc':"(Use Hot Springs days if not here)", 'sr':true});
			}
			// Steal the Cows
			a.push({'desc':"Hammer rocks on farm / Dock Fishing"});
			a.push({'desc':"Stay Up All Night", cid:'f_cow_steal_glitch', 'val':5, 'imp':true});
		}

		// Kai Wedding
		if (flags['photo_married'] == 1 && flags['wedding_cliff'] == 0) {
			a.push({'desc':"Kai Wedding", 'cid':['v_happiness', 'f_wedding_cliff'], 'val':[30, 1], 'sel':false, 'iid':kai_id});
		}

		if ([30, 60].includes(d)) {
			a.push({'desc':"Day Skipped", 'cid':['v_day', 'f_dontsave'], 'val':[1, 1], 'sel':(d != 60)});
		}
	}
	return a;
}
