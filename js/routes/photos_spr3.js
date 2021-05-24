actions_photos_spr_y3 = function(a = [], d = 3, g = 300, is_sunny = 1) {
	var chicken_id = get_npc_id('chicken');
	var cliff_id = get_npc_id('cliff');
	var cow_id = get_npc_id('cow');
	var dog_id = get_npc_id('dog');
	var doug_id = get_npc_id('doug');
	var elli_id = get_npc_id('elli');
	var gotz_id = get_npc_id('gotz');
	var karen_id = get_npc_id('karen');
	var kent_id = get_npc_id('kent');
	var midwife_id = get_npc_id('midwife');
	var pastor_id = get_npc_id('pastor');

	var dow = get_dow(d, true);

	// Married Affection
	if (flags['photo_married'] == 1) {
		a.push({'desc':" Talk", 'val':1, 'cid':elli_id, 't2':"Musbox", 'sel':(flags['new_mus_box'] == 0)});
		a.push({'desc':"Musbox", 'val':[6, -1], 'cid':[elli_id, 'f_new_mus_box'], 'sel':(flags['new_mus_box'] == 1), 'sr':true, 't2':a[a.length - 1]['desc']})
		a.push({'desc':"  Gift  ", 'val':1, 'cid':elli_id, 'sr':true, 'sel':false, 't2':"Milk"});
		a.push({'desc':"Milk", 'val':4, 'cid':elli_id, 'sr':true, 't2':"  Gift  ", 'sel':(aff[elli_id] < 250 && vars['cows'] > 0)})
	}

	if (d >= 265) { // Baby Born and After
		if (vars['grass'] > 0 || vars['grass_planted'] < 43) {
			a.push({'desc':"Equip hoe, Clear Field & Plant Grass", 'imp':(d > 268)});
			a.push({'desc':"Plant All Grass", 'sel':false, 'sr':true, 'cid':['v_grass_planted', 'v_grass'], 'val':[vars['grass'], -1 * vars['grass']]});
			if (flags['berry_farm'] == 0) {
				a.push({'desc':"Dig a Berry", 'val':1, 'cid':'f_berry_farm', 'sr':true, 'sel':false});
			}
		}
		if (d == 265) {
			a.push({'desc':"Baby Born", 'iid':elli_id, 'cid':['f_dontsave', 'f_photo_baby', 'v_happiness', elli_id, midwife_id, pastor_id], 'val':[1, 1, 30, 8, 5, 5], 'imp':true});
			a.push({'desc':"(3 PM or Later)", 'sr':true});
		}
	}

	if (!is_festival(d)) {
		if (d == 242) { // Spring 2
			a.push({'desc':"Equip hoe, Till 6 Rows down from Grass"});
			a.push({'desc':("Buy 20 Grass Seeds"), 'cid':['v_grass', 'v_gold'], 'val':[20, (-500 * 20)], 'iid':get_npc_id('lillia')});
			a.push({'desc':"Equip Grass"});
			a.push({'desc':"Plant 8 Grass", 'sr':true, 'cid':['v_grass_planted', 'v_grass'], 'val':[8, -8]});
		}

		if (d == 262) {
			a.push({'desc':"Equip hoe, Till 6 Rows left of Grass"});
			a.push({'desc':"Sell Cow", 'cid':['v_cows', 'v_gold'], 'val':[-1, 6500], 'iid':doug_id, 'imp':true});
			a.push({'desc':"Talk (Ranch)", 'cid':cliff_id, 'val':2, 'sel':false});
			a.push({'desc':"   Gift   ", 'cid':cliff_id, 'val':4, 'sel':false, 't2':"Egg/Milk", 'sr':true});
			a.push({'desc':"Egg/Milk", 'cid':cliff_id, 'val':8, 'sel':false, 't2':"   Gift   ", 'sr':true});
			a.push({'desc':("Buy 20 Grass Seeds"), 'cid':['v_grass', 'v_gold'], 'val':[20, (-500 * 20)], 'iid':get_npc_id('lillia')});
		}

		if (dow != "TUES" && !is_festival(d)) {
			var add_ext_id = -1;
			for (var i = 0; i < extensions.length; i++) {
				if (flags[extensions[i][0]] == 0 && vars['gold'] >= extensions[i][1] && (i == (extensions.length - 1) || flags[extensions[i + 1][0]] == 1)) {
					add_ext_id = i;
				}
			}
			if (add_ext_id != -1) {
				if (is_sunny == 1 && flags['cutscene_bug'] == 0) {
					// Cutscene will play between Maria and Karen (Spring Only)
					a.push({'desc':"WARNING: Cutscene plays at Carp House Screen", 'red':true});
					a.push({'desc':"Bug in Karens Hair Cutscene", 'val':1, 'cid':'f_cutscene_bug', 'sr':true, 'sel':false});
				}
				a.push({'desc':("Buy " + extensions[add_ext_id][3] + "(" + extensions[add_ext_id][1] + " G)"),
						'cid':['v_gold', 'v_lumber', ('f_' + extensions[add_ext_id][0])],
						'val':[(-1 * extensions[add_ext_id][1]), (-1 * extensions[add_ext_id][2]), _BUILD_DAYS + 1],
						'sel':(is_sunny == 0 || flags['cutscene_bug'] == 1 || d >= (269 - (_BUILD_DAYS + 1) * add_ext_id)),
						'imp':(is_sunny == 0), 'iid':get_npc_id('mas_carpenter')
				});
				a.push({'desc':"(Opens 35 secs after leaving house)", 'sr':true});
			}
		}

		// Spring 7
		if (d > 246 && aff[kent_id] < 100 && is_sunny == 1 && !["SUN"].includes(dow)) {
			a.push({'desc':"Equip hoe, Till 6 Rows down from Seeds"});
			a.push({'desc':"Till 4 Squares in Corner"});
			a.push({'desc':"Enter Coop, Equip Seeds", 'iid':chicken_id});
			a.push({'desc':"Bring Chicken Outside", 'cid':'f_chicken_outside', 'val':1, 'sr':true});
			a.push({'desc':"Plant 12 Grass", 'cid':['v_grass_planted', 'v_grass'], 'val':[12, -12]});
			a.push({'desc':"Spam Kent with Chicken (In Church) [83 times]", 'imp':true, 'cid':kent_id, 'val':200});
			a.push({'desc':"Puppies Cutscene", 'cid':['f_cutscene_puppies', 'v_happiness'], 'val':[1, 20], 'iid':kent_id});
		}

		// Baby Spam
		// If you already have a chicken, otherwise do it when you go to buy one
		if (d > 265 && dow != "THURS") {
			if (aff[doug_id] < 160 && aff[gotz_id] < 160) {
				a.push({'desc':"Clear Mailbox", 'imp':true});
			}

			// DOUG
			if (aff[doug_id] < 160) {
				var tmp_doug_spam = Math.ceil((160 - aff[doug_id]) / 2);
				a.push({'desc':("Spam Doug (Ranch) [" + tmp_doug_spam + " Times]"), 'cid':doug_id, 'val':200});
				if (vars['chickens'] == 0 && g >= 1500) {
					a.push({'desc':"Buy a Chicken", 'sr':true, 'cid':['v_chickens', 'v_gold'], 'val':[1, -1500]});
				}
			}

			// GOTZ
			if (aff[gotz_id] < 160) {
				var tmp_gotz_spam = Math.ceil((160 - aff[gotz_id]) / 2);
				var gotz_location = ((is_sunny == 1) ? "Vineyard" : "In House");
				a.push({'desc':("Spam Gotz (" + gotz_location + ") [" + tmp_gotz_spam + " Times]"), 'cid':gotz_id, 'val':200});
			}
		}
	}

	// Bathroom for Happiness
	if (flags['photo_baby'] == 1 && vars['happiness'] < 250) {
		var tmp_bathroom_uses = Math.ceil((250 - vars['happiness']) / 2);
		a.push({'desc':("Use Bathroom " + tmp_bathroom_uses + " Times"), 'imp':(d > 268),
			'cid':'v_happiness', 'val':(2 * tmp_bathroom_uses), 'sel':(aff[doug_id] > 100 && aff[gotz_id] > 100)
		});
	}

	// Dog Affection
	if (flags['dog_inside'] == 1) {
		if (flags['photo_dograce'] == 1) {
			a.push({'desc':"Whistle", 'cid':dog_id, 'val':1, 'sel':(aff[dog_id] < 210)});
			a.push({'desc':"Pick Up", 'cid':dog_id, 'val':1, 'sr':true});
		} else {
			a.push({'desc':"Whistle / Pick up Dog", 'cid':dog_id, 'val':2});
		}
	} else {
		a.push({'desc':"Bring Dog Inside", 'cid':['f_dog_inside', dog_id], 'val':[1, 1]});
		a.push({'desc':"Whistle", 'val':1, 'sr':true});
	}
	if (is_sunny == 1) {
		a.push({'desc':"Scare birds", 'cid':'v_happiness', 'val':1, 'sel':false, 'sr':true});
	}

	// Cliff Wedding
	if (flags['photo_married'] == 1 && flags['wedding_cliff'] == 0) {
		a.push({'desc':"Cliff Wedding", 'cid':['v_happiness', 'f_wedding_cliff'], 'val':[30, 1], 'sel':false, 'iid':cliff_id});
	}
	return a;
}
