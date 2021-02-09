get_actions_girl_photos = function (d = 3, g = 300, is_sunny = 1) {
	//All Photos

	var a = [];
	var dow = get_dow(d, true);
	dontsave = false;

	if (is_festival(d)) {
		a.push({'desc':("<h4>" + festival_name(d).toUpperCase() + "</h4>")});
	}

	if (d <= 30) { // Spring Y1
		a = actions_girl_photos_spr1(a, d, g, is_sunny);
	}
	
	if (d > 30 && d <= 60) { // Summer Y1
		a = actions_girl_photos_sum1(a, d, g, is_sunny);
	}
	
	if (d > 60 && d <= 90) { // Fall Y1
		a = actions_girl_photos_fall1(a, d, g, is_sunny);
	}
	
	if (d > 90 && d <= 120) { // Winter Y1
		a = actions_girl_photos_win1(a, d, g, is_sunny);
	}
	
	if (d > 120) { // Spring Y2
		reset = true;
	}

	return a;
}
