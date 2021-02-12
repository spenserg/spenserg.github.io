get_actions_girl_photos_win1 = function (a = [], d = 3, g = 300, is_sunny = 1) {
	var ann_id = get_npc_id("ann");
	var rick_id = get_npc_id("rick");
	var mayor_id = get_npc_id("mayor");

	// Save scum sick event for Winter 1 if no sick event earlier
	if (flags['sick_ann'] == 0 && aff[ann_id] < _PHOTO_MIN) {
		if (d == 89) {
			dont_save = true;
			a.push({'desc':"DONT SAVE TONIGHT", 'imp':true});
		} else if (d == 90) {
			a.push({'desc':"RESET IF NOT SNOWY TOMORROW", 'imp':true});
		}
	}

	if (d > 90 && flags['photo_ann'] == 0) {
		a.push({'desc':"Photo", 'cid':[ann_id, 'f_photo_ann'], 'val':[_PHOTO_EVENT_AFF, 1], 'sel':(aff[ann_id] >= _PHOTO_EVENT_AFF)});
	} else if (aff[ann_id] < _PHOTO_MIN) {
		if (dow == "THURS") {
			a.push({'desc':"Enter Carp Screen 54 seconds after leaving house [9 AM]"});
		} else {
			a.push({'desc':"Enter/Exit Barn 33 seconds after leaving house [8 AM]"});
		}
	}
	return a;
}
