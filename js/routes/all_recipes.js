get_actions_all_recipes = function (d = 3, g = 300, is_sunny = 1) {
	var a = [];
	var dow = get_day_of_week(d, true);
	var reset_reason = "";

	var cliff_id = get_npc_id('cliff');
	var doug_id = get_npc_id('doug');
	var ellen_id = get_npc_id('ellen');
	var gotz_id = get_npc_id('gotz');
	var grey_id = get_npc_id('grey');
	var kai_id = get_npc_id('kai');
	var mayor_id = get_npc_id('mayor');
	var potion_master_id = get_npc_id('potion_master');
	var saibara_id = get_npc_id('saibara');
	var sprite_id = get_npc_id('sprite');

	// SINGLE ACTIVITY DAYS
	if (d == 3) {
		a.push({'desc':"Meet the Mayor", 'iid':mayor_id});
	} else if (d == 54 || d == 174) { // Swim Festival
		a.push({'desc':"Win Swim Fest", 'iid':mayor_id, 'cid':[grey_id, cliff_id], 'val':[8, 8]});
	} else if (d == 83 || d == 84) {
		if (aff[gotz_id] == 0) { a.push({'desc':"Meet",'cid':gotz_id, 'val':2, 'sel':(is_sunny == 1 || (d == 84 && vars['chickens'] == 0))}); }
		a.push({'desc':"Talk",'cid':gotz_id, 'val':3, 'sr':(aff[gotz_id] == 0), 'sel':(is_sunny == 1 || (d == 84 && vars['chickens'] == 0))});
		a.push({'desc':"Grapes",'cid':gotz_id, 'val':3, 'sr':true, 'sel':(is_sunny == 1 || (d == 84 && vars['chickens'] == 0))});
		a.push({'desc':"Bridge Work", 'iid':get_npc_id('mas_carpenter'), 'cid':['v_bridge_days_worked', 'v_gold'], 'val':[1, 1000], 'sel':(is_sunny == 1 || (d == 84 && vars['chickens'] == 0))});
		a.push({'desc':"get grapes"});
		if (is_sunny == 1) {
			a.push({'desc':("Talk (MTNS)"), 'cid':cliff_id, 'val':2, 'sel':false});
			a.push({'desc':"Gift", 'cid':cliff_id, 'val':4, 'sr':true, 'sel':false});
		}
		if (g >= 500 && vars['chickens'] == 0) {
			a.push({'desc':"Buy a Chicken", 'iid':doug_id, 'cid':['v_gold', 'v_chickens'], 'val':[1500, 1], 'sel':(is_sunny == 1 || (d == 84 && vars['chickens'] == 0))});
		}
		a.push({'desc':("Talk (" + ((is_sunny == 1) ? "RANCH" : "BARN") + ")"), 'cid':grey_id, 'val':2, 'sel':(is_sunny == 1 || (d == 84 && vars['chickens'] == 0))});
		a.push({'desc':"Flower", 'cid':grey_id, 'val':2, 'sr':true, 'sel':(is_sunny == 1 || (d == 84 && vars['chickens'] == 0))});
	} else if (d == 85) { // Fall l25 MON
		a.push({'desc':"Talk",'cid':gotz_id, 'val':3, 'sr':(aff[gotz_id] == 0), 'sel':(is_sunny == 1)});
		a.push({'desc':"Grapes",'cid':gotz_id, 'val':3, 'sr':true, 'sel':(is_sunny == 1)});
		a.push({'desc':"Bridge Work", 'iid':get_npc_id('mas_carpenter'), 'cid':['v_bridge_days_worked', 'v_gold'], 'val':[1, 1000], 'sel':(is_sunny == 1 || (d == 84 && vars['chickens'] == 0))});
		if (is_sunny == 1) {
			a.push({'desc':"up ramp to get grapes"});
			a.push({'desc':("Talk (3 stumps)"), 'cid':cliff_id, 'val':2});
			a.push({'desc':"Gift ", 'cid':cliff_id, 'val':4, 'sr':true, 't2':"Egg "});
			a.push({'desc':"Egg ", 'cid':cliff_id, 'val':8, 'sr':true, 'sel':false, 't2':"Gift "});
		} else {
			a.push({'desc':"get grapes"});
			a.push({'desc':("Talk (In Carp House)"), 'cid':cliff_id, 'val':2, 'sel':false});
			a.push({'desc':"Gift ", 'cid':cliff_id, 'val':4, 'sr':true, 'sel':false, 't2':"Egg "});
			a.push({'desc':"Egg ", 'cid':cliff_id, 'val':8, 'sr':true, 'sel':false,'t2':"Gift "});
		}
	} else if (d == 109) {
		// Dog Race, 1000 LUM (Win 19)	
		a.push({'desc':"Buy 1000 Lumber at Dog Race", 'cid':['v_lumber', 'v_medals'], 'val':[999, -1000], 'iid':mayor_id, 'imp':true});
		a = betting_table(a);
	}

	// Sum Thurs Y1
	if (d > 31 && d < 60 && is_sunny == 1 && dow == "THURS" && flags['recipe_ellen'] == 0) {
		a.push({'desc':"ignore Basil, ed, flower, fishing rod"});
		a.push({'desc':"all goddess pond gifts"});
		if (aff[grey_id] == 0) { a.push({'desc':"Meet", 'cid':grey_id, 'val':4}); }
		a.push({'desc':("Talk (MTNS)"), 'cid':grey_id, 'val':2, 'sr':(aff[grey_id] == 0)});
		a.push({'desc':"Flower", 'cid':grey_id, 'val':2, 'sr':true});
		a.push({'desc':"grab mango"});
		a.push({'desc':("9 Gifts to Inner Sprite (Right Side)"), 'cid':sprite_id, 'val':9});
		a.push({'desc':"ed, 2 clover, 2 walnuts"});
		if (aff[gotz_id] == 0) { a.push({'desc':"Meet",'cid':gotz_id, 'val':2}); }
		a.push({'desc':"Talk",'cid':gotz_id, 'val':3, 'sr':(aff[gotz_id] == 0)});
		
		// Town Recipes
		if (flags['recipe_ellen'] == 0) {
			a.push({'desc':"Meet", 'iid':ellen_id, 'imp':true}); 
			a.push({'desc':"Walnut (Recipe)", 'cid':'f_recipe_ellen', 'val':1, 'sr':true});
		}
		if (flags['recipe_saibara'] == 0) {
			a.push({'desc':"Meet", 'iid':saibara_id});
			a.push({'desc':"Clover (Recipe)", 'cid':'recipe_saibara', 'val':1, 'sr':true});
		}
		if (flags['recipe_potion_master'] == 0) {
			a.push({'desc':"Meet", 'iid':potion_master_id});
			a.push({'desc':"Edible Herb (Recipe)", 'cid':'recipe_potion_master', 'val':1, 'sr':true});
		}
		a.push({'desc':"Feed Cliff", 'cid':cliff_id, 'val':5, 'imp':true});
	} else if (d == 60 && flags['recipe_ellen'] == 0) {
		// Must get in Summer 1
		a.push({'desc':"Meet", 'iid':ellen_id, 'imp':true}); 
		a.push({'desc':"Walnut (Recipe)", 'cid':'f_recipe_ellen', 'val':1, 'sr':true});
	}

	// Fall Thurs until bridge work
	if (d > 60 && d < 83 && is_sunny == 1 && dow == "THURS") {
		a.push({'desc':"mush, ed, grape at top of mtn, over bridge"});
		a.push({'desc':"mush, into cave, 2 clov, ed"});
		var sprite_gifts = ((21 - aff[sprite_id]) > 0 ? (21 - aff[sprite_id]) : 0);
		if (sprite_gifts > 6) { sprite_gifts = 6; }
		if (sprite_gifts > 0) {
			a.push({'desc':(sprite_gifts + " Gifts to Inner Sprite (Right Side)"), 'cid':sprite_id, 'val':sprite_gifts});
		}
		if ((21 - aff[sprite_id]) > -1) {
			a.push({'desc':"Meet", 'cid':sprite_id, 'val':5, 'sel':((21 - aff[sprite_id]) < 7), 'red':((21 - aff[sprite_id]) >= 7)});
		}
		a.push({'desc':"Talk", 'cid':sprite_id, 'val':1, 'sel':((21 - aff[sprite_id]) < 7), 'sr':((21 - aff[sprite_id]) > -1)});
		a.push({'desc':"Gift", 'cid':sprite_id, 'val':2, 'sel':((21 - aff[sprite_id]) < 7), 'sr':true});
		a.push({'desc':"grab grapes, 2 pois mush to sell"});
		a.push({'desc':("Talk (MTNS)"), 'cid':cliff_id, 'val':2});
		a.push({'desc':"Gift", 'cid':cliff_id, 'val':4, 'sr':true});
		a.push({'desc':("Talk (MTNS)"), 'cid':grey_id, 'val':2});
		a.push({'desc':"Gift", 'cid':grey_id, 'val':2, 'sr':true});
		if (aff[gotz_id] == 0) { a.push({'desc':"Meet",'cid':gotz_id, 'val':2}); }
		a.push({'desc':"Talk",'cid':gotz_id, 'val':3, 'sr':(aff[gotz_id] == 0)});
		a.push({'desc':"Grapes",'cid':gotz_id, 'val':3, 'sr':true});
		if (flags['recipe_kai'] == 0) {
			a.push({'desc':"Meet", 'iid':kai_id});
			a.push({'desc':"Grapes (Recipe)", 'cid':'f_recipe_kai', 'val':1, 'sr':true});
		}
	}

	if (reset_reason.length > 0) {
		a.push({'desc':"RESET", 'red':true, 'sel':false});
		a.push({'desc':reset_reason});
	}
	return a;
}
