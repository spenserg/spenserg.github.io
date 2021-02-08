get_actions_girl_photos = function (a = [], d = 3, g = 300, is_sunny = 1) {
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
			a.push({'desc':"Chop One Stump", 'imp':true, 'val':6, 'cid':'v_lumber', 'sr':true});
		}

		if ([15, 19].includes(d)) { a.push({'desc':"Ignore Basil on the Farm", 'iid':get_npc_id('basil')}); }
		if (d == 18) { a.push({'desc':"Ignore Cliff", 'iid':get_npc_id('cliff')}); }
		
		// Bring Chicken Inside / Outside
		if (vars['chickens'] > 0 && (flags['chicken_outside'] == 0 || (is_sunny == 0 && !is_festival(d)))) {
			if (flags['chicken_outside'] == 1) {
				a.push({'desc':"Bring Chicken Inside", 'val':-1, 'cid':'f_chicken_outside', 'iid':chicken_id, 'sel':false});
			}
		} else {
			a.push({'desc':"Bring Chicken Outside", 'val':1, 'cid':'f_chicken_outside'});
		}

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

			if (d == 8) { // Planting Fest
			}

			if (d == 23) { // Flower Fest
				a.push({'desc':"Go to Town Square", 'iid':mayor_id, 'cid':'v_happiness', 'val':5, 'imp':true});
				a.push({'desc':"Talk", 'cid':rick_id, 'val':2});
				a.push({'desc':"Talk", 'cid':maria_id, 'val':2});
				a.push({'desc':"Dance",'cid':[maria_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance ", "Dance  "], 'sr':true});
				a.push({'desc':"Talk", 'cid':elli_id, 'val':2});
				a.push({'desc':"Dance ",'cid':[elli_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance", "Dance  "], 'sel':false, 'sr':true});
				a.push({'desc':"Talk", 'cid':ann_id, 'val':2});
				a.push({'desc':"Dance  ",'cid':[ann_id, 'f_dontsave'], 'val':[10, 1], 't2':["Dance", "Dance "], 'sel':false, 'sr':true});
			}
		} else if (d > 3) { // Not a Festival
			if (lumber_to_sprite > 0) {
				a.push({'desc':("Get " + lumber_to_sprite + " Lumber from Bin"), 'imp':true, 'iid':get_npc_id('stump')});
			}

			// Fishing Rod
			if (flags['fishing_rod'] == 0) {
				a.push({'desc':"Get Fishing Rod", 'val':1, 'cid':'f_fishing_rod', 'iid':get_npc_id('fisherman')});
			}

			
		}
	} // End of Spring
	return a;
}
