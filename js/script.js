$(document).ready(function() {
	new_game(2);
});

function get_actions(rid = null, d = vars['day'], g = vars['gold'], is_sunny = 1) {
	if (reset == true) {
		return [{'desc':"RESET"}];
	} else {
		if (rid == 1) { return get_actions_elli(d, g, is_sunny); }
		if (rid == 2) { return get_actions_karen(d, g, is_sunny); }
		if (rid == 3) { return get_actions_popuri(d, g, is_sunny); }
	}
	return [];
}

function next_day(jump = false) {
	
	// Update variables
	for (var i = 0; i < actions.length; i++) {
		if ($("#ab_" + i).length != 0) {
			//element exists
			if ($("#ab_" + i).hasClass("btn-success")) {
				//element green
				if (!Array.isArray(actions[i]['cid'])) {
					calc_actions(actions[i]);
				} else {
					for (var j = 0; j < actions[i]['cid'].length; j++) {
						var new_row = {};
						for (key in actions[i]) {
							new_row[key] = (Array.isArray(actions[i][key])) ? actions[i][key][j] : actions[i][key];
						}
						calc_actions(new_row);
					}
				}
			}
		}
	}
	
	// Calculate G from sold items
	$("input[id^='for']").each(function(index) {
		vars['gold'] += (this.value * crop_prices[this.id.split("_")[1]]);
	});
	
	// Affection from 4 days bridge work
	if (vars['day'] == 87 && flags['bridge_days_worked'] == 4) {
		for (var i = 0; i < npcs.length; i++) {
			if (aff[i] !== undefined && !not_villagers.includes(i)) {
				aff[i] += 3;
			}
		}
	}
	
	// decrement flag counters
	for (var key in flags) {
		if (flags[key] > 1) { flags[key]--; }
	}
	
	// Increment flower waters if raining
	// POPURI RUN ONLY
	if ($('.rainy').hasClass('selected') && route_id == 3 && flags['moondrops_planted']) {
		vars['moondrop_waters']++;
	}

	// Begin next day
	update_day_gui(++vars['day'], jump);
	actions = get_actions(route_id, vars['day'], vars['gold'], 1);
	
	// Show or hide typhoon button
	$('.typhoon').show();
	if (get_month(vars['day']) != 1 || is_festival(vars['day'], false)) {
		$('.typhoon').hide();
	}
	
	// Weather button to Rain or Snow, depending on season
	$('.rainy').html((get_month(vars['day']) == 3) ? "SNOWY" : "RAINY");
	
	// Set forage values for next day
	for (var i = 0; i < actions.length; i++) {
		if (actions[i]['forage']) {
			for (var j = 0; j < actions[i]['forage_list'].length; j++) {
				$("#for_" + actions[i]['forage_list'][j][0]).val(actions[i]['forage_list'][j][1]);
			}
		}
	}
	
	$(".sunny").click();
	$('#hm64-content').html(to_html(actions));
}

function go_back() {
	// TODO
}

// [0] = day 3 actions
// [1] = day 4 actions
function go_forward() {
	// TODO
}

function skip_to(d = null) {
	if (d == null) { return; }
	new_game(route_id);
	if (d == 3) { return; }

	vars['day'] = d - 1;
	actions = [];
	if (route_id == 2) { // Karen marriage
		// [90, 102, 109, 110]
		if (d > 109) { vars['lumber'] = 500; }
		if (d > 102) { vars['gold'] += 5000; }
		if (d > 90) { flags['borrow_cows'] = 1; vars['gold'] += 1000; }
	}
	next_day(true);
}

function calc_actions(a = null) {
	if (a !== null && a['cid'] !== undefined) {
		if (!Number.isInteger(a['cid'])) {
			if (a['cid'].charAt(0).toLowerCase() == 'f') {
				//flag change
				if (flags[a['cid'].substring(2)] === undefined) {
					console.log("undefined flag: " + a['cid']);
				} else {
					if (a['val'] !== undefined) {
						flags[a['cid'].substring(2)] += a['val'];
					}
				}
			} else {
				//var change
				if (vars[a['cid'].substring(2)] === undefined) {
					console.log("undefined var: " + a['cid']);
				} else {
					if (a['val'] !== undefined) {
						vars[a['cid'].substring(2)] += a['val'];
					}
				}
			}
		} else {
			if (a['val'] !== undefined) {
				if (aff[a['cid']] === undefined) {
					aff[a['cid']] = 0;
				}
				aff[a['cid']] += a['val'];
			}
		}
	}
}

function fish() {
	return { 'desc':'Fish', 'forage':true, forage_list:[[get_crop_id('fish s'), 0], [get_crop_id('fish m'), 0], [get_crop_id('fish l'), 0]] };
}

function betting_table(a = []) {
	a.push({
		'desc':'<div class="ml-3">GOLD:&nbsp;&nbsp;<input type="number" id="b_gold" value="' + vars['gold'] + '" style="margin-right:20px" onchange="calc_bets()" /></div>' +
			'<div class="ml-3">NEED:&nbsp;&nbsp;<input type="number" id="b_need" onchange="calc_bets()" style="margin-right:20px" value="' + (((500 - vars['medals']) < 0) ? 0 : (500 - vars['medals'])) + '" /></div>' +
			'<div class="ml-3">HAVE:&nbsp;&nbsp;<input type="number" id="b_have" onchange="calc_bets()" value="' + vars['medals'] + '" /></div>'
	});
	for (var i = 0; i < 6; i++) {
		a.push({'desc':'odds', 'b_table':true, 'b_id':i});
	}
	a.push({'desc':'Race #:&nbsp;&nbsp;<input type="number" id="b_race" onchange="calc_bets()" value="1" />'});
	return a;
}

function new_game(id = null) {
	if (id == null) {
	  id = $('#ngid').val();
	}
	route_id = id;
	reset_vars();
	vars['day'] = 2;
	document.title = route_names[route_id] + " - HM64 Router";

	// Set affection of all characters to 0, display at top
	// Characters listed based on route
	var aff_html = [];
	$('.status_row').remove();
	for (let key in route_affs[route_id]) {
		var npc_id = get_npc_id(route_affs[route_id][key]);
		aff[npc_id] = 0;
		aff_html.push('<div class="p-1 display_main">' +  route_affs[route_id][key].toUpperCase() + ': <span id="npc_' + npc_id + '">0</span></div>');
	}

	var tmp_html = '<div class="p-1 display_main">GOLD: <span id="disp_gold">300</span></div>';
	if (aff_html.length <= 3) {
		$('#status_row1').html(tmp_html + aff_html.join(""));
	} else {
		$('#status_row1').html(tmp_html + aff_html[0] + aff_html[1] + aff_html[2]);
		for (var i = 3; i < aff_html.length; i++) {
			//TODO
			// Multiple affections to track
			// Put on multiple rows; four per row
		}
	}

	// Custom skip options
	var html_list = [];
	html_list.push('<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Skip to</a>');
	html_list.push('<div class="dropdown-menu" aria-labelledby="navbarDropdown2">');
	for (var i = 0; i < skip_to_list[route_id].length; i++) {
		html_list.push('<span class="dropdown-item ' + get_month_name(skip_to_list[route_id][i]).toLowerCase() +
			'" onclick="skip_to(' + skip_to_list[route_id][i] +
			')">' + get_month_name(skip_to_list[route_id][i], true) + ' ' + get_day(skip_to_list[route_id][i]) +
			' (' + get_day_of_week(skip_to_list[route_id][i], true).toUpperCase() + ')</span>');
	}
	$('#skip_to_menu').html(html_list.join("") + '</div>');

	// Custom flags for particular run
	if (route_id == 3) { // Popuri marriage
		flags['moondrops_bought'] = 0;
		flags['moondrops_planted'] = 0;
		vars['moondrop_waters'] = 0;
	}

	next_day(true);
}

function update_day_gui(d = vars['day'], jump = false) {
	var m = get_month_name(d);
	if (d % 30 == 1 || jump) {
		// Only update "month" on the first of the month
		// or if jumped to this day
		$('.display_main.season').removeClass('spring').removeClass('summer').removeClass('fall').removeClass('winter').addClass(m.toLowerCase());
	}
	$('.display_main.season').html(m.charAt(0).toUpperCase() + m.toLowerCase().substr(1));
	$('.display_main.day').html(get_day(d));
	$('.display_main.dow').html(get_day_of_week(d, true));
	$('.display_main.day.japanese').html(get_day_of_week(d, false, true));
	$('#disp_gold').html(vars['gold']);
	for (let key in aff) {
		$("#npc_" + key).html(aff[key]);
		if (is_bachelorette(key)) {
			$("#npc_" + key).parent().css('background-color', get_heart_color(aff[key]));
		}
	}

	var html = "";
	//Seasonal Foragables
	tmp_cs = crop_seasons[get_month(d)];
	for (var i = 0; i < tmp_cs.length; i++) {
		html += '<div class="ml-3"><img class="forageDisp" src="/img/item/' + crops[tmp_cs[i]].toLowerCase().replace(" ", "_") + '.png" />&nbsp;';
		html += '<input style="width:40px" type="number" value="0" id="for_' + tmp_cs[i] + '" /></div>';
	}
	
	//Fish
	for (var i = 13; i < 16; i++) {
		html += '<div class="ml-3"><img class="forageDisp" src="/img/item/' + crops[i].toLowerCase().replace(" ", "_") + '.png" />&nbsp;';
		html += '<input style="width:40px" type="number" value="0" id="for_' + i + '" /></div>';
	}
	$('#forage_display').html(html);
	
	// Prev and Next Day buttons
	$("#jump_prev").attr("disabled", (vars['day'] <= 3));
	$("#jump_next").attr("disabled", (vars['day'] >= actions_all.length - 3));
	
}

function reset_vars() {
	aff = {};
	actions = [];
	actions_all = [];
	reset = false;
	vars = { "chickens":0, "gold":300, "lumber":0, "day":3, "medals":0,
			"bridge_days_worked":0, "springs_days_worked":0 };
	flags = { "treasure_map" : 0, "new_mus_box" : 0, "old_mus_box" : 0,
			"new_chick" : 0, "new_chicken" : 0,
			"ankle_elli" : 0, "dream_elli" : 0, "sick_elli" : 0, "recipe_elli" : 0,
			"ankle_karen" : 0,
			"ankle_popuri" : 0, "dream_popuri" : 0, "sick_popuri" : 0, "recipe_popuri" : 0,
			"kitchen" : 0, "blue_feather" : 0, "propose" : 0,
			"borrow_cows" : 0 };
}

function to_html(a = actions) {
	var html = "";
	for (var i = 0; i < a.length; i++) {
		if (a[i]['sr'] === undefined || !a[i]['sr']) {
			if (i != 0) { html += "</div>"; }
			html += '<div class="d-flex justify-content-start" style="margin-bottom:5px">';
		}
		if (a[i]['val'] === undefined) {
			if (!a[i]['b_table']) {
				if (a[i]['cid'] !== undefined || a[i]['iid'] !== undefined) {
					html += '<span class="mr-2">' + ((a[i]['iid'] === undefined) ? get_npc_img(a[i]['cid']) : get_npc_img(a[i]['iid'])) + '</span>';
				}
				html += '<span>' + a[i]["desc"] + '</span>';
			} else {
				// Bet table
				// {'desc':'odds', 'b_table':true, 'b_id':i}
				
				html += '<span style="border:3px solid ' + bet_colors[a[i]['b_id']];
				html += ';width:30px;height:30px;margin:5px;text-align:center">' + (parseInt(a[i]['b_id']) + 1) + '</span>';
				html += 'x&nbsp;<input class="oddsInput" type="number" id="b_' + a[i]['b_id'] + '" value="1" onchange="calc_bets()" />';
				html += '<input id="bg_' + a[i]['b_id'] + '" value="';
				html += Math.floor(vars['gold'] / (6 * 50));
				html += '" disabled=true style="border:1px solid black"/>';
			}
		} else {
			if (a[i]['sr']) {
				html += '<div class="ml-3">';
			} else {
				html += '<span class="mr-2">' + ((a[i]['iid'] === undefined) ? get_npc_img(a[i]['cid']) : get_npc_img(a[i]['iid'])) + '</span>';
			}
			html += '<button type="button" class="btn btn-' + ((a[i]["sel"] === false) ? 'danger' : 'success');
			html += ' action-button" id="ab_' + i + '" onclick="toggle_color(this)">' + a[i]['desc'] + '</button>';
			if (a[i]['sr']) {
				html += '</div>';
			}
		}
	}
	return html + ((html.length > 0) ? '</div><br/>' : '') +
		'<button type="button" class="btn btn-primary" onclick="next_day()">Sleep</button>';
}

function get_npc_img(img_id = null) {

	console.log(img_id);

	var img_html = "";
	
	// If array of value is given, loop through and send back first non-empty result
	if (Array.isArray(img_id)) {
		for (var i = 0; i < img_id.length; i++) {
			var x = get_npc_img(img_id[i]);
			if (x !== "") { return x; }
		}
		return "";
	}
	
	// Only accept numbers; ignore 'v_xyz' and 'f_xyz' for flag and variable values
	if (Number.isInteger(parseInt(img_id)) && img_id > 0 && img_id < npcs.length) {
		img_html = '<img class="forageDisp" src="/img/' +
			(npcs[img_id] === npcs[img_id].toLowerCase() ? 'default' : ('npc/' + npcs[img_id].toLowerCase())) + '.png">';
	}
	return img_html;
}

function calc_bets() {
	var g = ($('#b_gold').val() === undefined) ? vars['gold'] : $('#b_gold').val();
	var need = ($('#b_need').val() === undefined) ? 500 - vars['medals'] : $('#b_need').val();
	need -= ($('#b_have').val() === undefined) ? 0 : $('#b_have').val();
	
	// If you already have enough medals, set bet values to zero
	if (need <= 0) {
		$("input[id^='bg_']").val(0);
		return;
	}

	// Gather odds and calculate max G required
	var odds = [];
	var bets = [];
	var max_required = 0;
	for (var i = 0; i < 6; i++) {
		var cur_need = Math.ceil(need / parseInt($('#b_' + i).val()));
		max_required += (cur_need > 99) ? 99 : cur_need;
		odds.push([parseInt($('#b_' + i).val()), i, cur_need, 0]);
	}

	// If you can afford it, minimum required medals to achieve goal for all
	if (max_required * 50 <= g) {
		$("input[id^='bg_']").each(function(i) {
			$(this).val((Math.ceil(need / odds[i][0]) > 99) ? 99 : Math.ceil(need / odds[i][0]));
		});
		return;
	}
	
	// Fill from largest odds to smallest
	// until need can't be met with remaining G
	odds.sort(function(a, b){ return b[0] - a[0] });
	var buy_amt = Math.floor(g / 50);
	var i = 0;
	while ((odds[i][2] > 99 ? 99 : odds[i][2]) <= buy_amt && i < 6) {
		odds[i][3] = (odds[i][2] > 99 ? 99 : odds[i][2]);
		buy_amt -= odds[i][3];
		i++;
	}

	// Distribute remaining G as evenly as possible
	var div_factor = 0;
	for (var j = i; j < odds.length; j++) {
		div_factor += odds[i][0] / odds[j][0];
	}
	odds[i][3] = Math.floor(buy_amt / div_factor);
	for (var j = i + 1; j < odds.length; j++) {
		odds[j][3] = Math.floor(((buy_amt * odds[i][0]) / div_factor) / odds[j][0]);
		buy_amt -= odds[j][3];
	}
	odds[i][3] += buy_amt;

	// Display values
	for (var i = 0; i < odds.length; i++) {
		$("#bg_" + odds[i][1]).val(odds[i][3]);
	}
}

function toggle_color(t, toggle_id = null) {
	if ($(t).hasClass("btn-danger")) {
		$(t).removeClass("btn-danger").addClass("btn-success");
	} else {
		$(t).addClass("btn-danger").removeClass("btn-success");
	}
	if (toggle_id != null) {
		if ($.isArray(toggle_id)) {
			for(var i = 0; i < toggle_id.length; i++) {
				toggle_color($("#ab_" + toggle_id[i].replace("ab_", "")));
			}
		} else { toggle_color($("#ab_" + toggle_id[i].replace("ab_", ""))); }
	}
}

function get_npc_id(n = null) {
	if (!n) { return null; }
	for (var i = 0; i < npcs.length; i++) {
		if (n.toLowerCase().replace("'", "").localeCompare(npcs[i].toLowerCase()) === 0) {
			return i;
		}
	}
	return null;
}

function get_crop_id(n = null) {
	if (!n) { return null; }
	for (var i = 0; i < crops.length; i++) {
		if (n.toLowerCase().replace("'", "").localeCompare(crops[i].toLowerCase()) === 0) {
			return i;
		}
	}
	return null;
}

function weather_change() {
	update_day_gui();
	var z = $('.weather.selected');
	actions = (z.hasClass('typhoon')) ? [] : get_actions(route_id, vars['day'], vars['gold'], (z.hasClass('sunny')));
	
	//Set forage values for next day
	for (var i = 0; i < actions.length; i++) {
		if (actions[i]['forage']) {
			for (var j = 0; j < actions[i]['forage_list'].length; j++) {
				$("#for_" + actions[i]['forage_list'][j][0]).val(actions[i]['forage_list'][j][1]);
			}
		}
	}
	$('#hm64-content').html(to_html(actions));
}

function is_festival (d = vars['day'], store_close_only = true) {
	//Days where everything is closed, ignoring holidays where shops keep normal hours
	/*
	 * New Year, Planting, Horse Race, Flower, Vegetable
	 * Swimming, Cow, Harvest, Egg, Horse Race, Dog Race
	 */
	var hol = [1, 8, 17, 23, 39, 54, 64, 72, 80, 88, 109];
	if (!store_close_only) {
		// Festival days where shops remain open
		// Used for weather restrictions
		// Fireworks, Firefly, Thanksgiving, Starry Night]
		hol = hol.concat([31, 47, 100, 114]);
	}
	return hol.includes(d % 120);
}

function day_is (d = vars['day'], name = null) {
	if (name === null) { return null; }
	if ($.isArray(name)) {
		for (var i = 0; i < name.length; i++) {
			if (name[i].toLowerCase().localeCompare(get_day_of_week(d).toLowerCase()) === 0) {
				return true;
			}
		}
		return false;
	}
	return (name.toLowerCase().localeCompare(get_day_of_week(d).toLowerCase()) === 0);
}

function array_convert(a = actions) {
	for (var i = 0; i < a.length; i++) {
		if (a['cid'] !== undefined && !Array.isArray(a['cid'])) {
			a['cid'] = [a['cid']];
			a['val'] = [a['val']];
		}
	}
	return a;
}

function get_heart_color(num = 0) {
	if (num > 219) { return 'lightblue'; }
	if (num > 207) { return 'pink'; }
	if (num > 155) { return 'yellow'; }
	if (num > 103) { return 'lightgreen'; }
	if (num > 51) { return 'cyan'; }
	return 'white';
}

function is_bachelorette(gid = null) {
	return (gid == get_npc_id('elli') || gid == get_npc_id('karen') || gid == get_npc_id('ann') || gid == get_npc_id('popuri') || gid == get_npc_id('maria'));
}

function get_month (num = null) {
	if (num === null) { return null; }
	return Math.floor((num - 1) / 30) % 4;
}

function get_month_name (num = null, short_name = false) {
	if (num === null) { return null; }
	return month_names[get_month(num) + (short_name ? 4 : 0)];
}

function get_day_of_week (num = null, short_name = false, jap_name = false) {
	if (num === null) { return null; }
	return day_names[num % 7 + (short_name ? 7 : (jap_name ? 14 : 0))];
}

function get_day (num = null) {
	if (num === null) { return null; }
	if (num < 3) { return 0; }
	return (num % 30 == 0) ? 30 : num % 30;
}

function forage(need = 0, g = vars['gold'], d = vars['day']) {
	var f_amt = need - g;
	var m = get_month(d);
	var forage_list = [];
	var d = "";
	
	if (f_amt <= 0) { return null; }
	if (m == 3) { // Winter
		forage_list = ['mine', ["Ore", 0], ["Moonlight", 0], ["Blue Rock", 0], ["Pontata", 0], ["Rare Metal", 0]];
	} else {
		if (f_amt <= 30) { forage_list = ['edible', [get_crop_id('edible'), 1]]; }
	}
	if (m == 0) { //Spring
		if (f_amt <= 40) {
			forage_list = [[get_crop_id('berry'), 1]];
			d = 'berry';
		} else if (f_amt <= 70) {
			forage_list = [[get_crop_id('edible'), 1], [get_crop_id('berry'), 1]];
			d = 'ber/ed';
		} else if (f_amt <= 110) {
			forage_list = [[get_crop_id('edible'), 1], [get_crop_id('berry'), 2]];
			d = 'ber/ed, berry';
		} else if (f_amt <= 150) {
			forage_list = [[get_crop_id('edible'), 1], [get_crop_id('berry'), 3]];
			d = 'ber/ed, berry, pond berry'
		} else if (f_amt <= 180) {
			forage_list = [[get_crop_id('edible'), 1], [get_crop_id('berry'), 2], [get_crop_id('clover'), 1]];
			d = 'ber/ed, pond berry, clover';
		} else if (f_amt <= 220) {
			forage_list = [[get_crop_id('edible'), 1], [get_crop_id('berry'), 3], [get_crop_id('clover'), 1]];
			d = 'ber/ed, berry, pond all';
		} else if (f_amt <= 240) {
			forage_list = [[get_crop_id('edible'), 2], [get_crop_id('berry'), 1], [get_crop_id('clover'), 2]];
			d = 'ber/ed, cave all';
		} else if (f_amt <= 280) {
			forage_list = [[get_crop_id('edible'), 2], [get_crop_id('berry'), 2], [get_crop_id('clover'), 2]];
			d = 'ber/ed, cave all, berry';
		} else if (f_amt <= 320) {
			forage_list = [[get_crop_id('edible'), 2], [get_crop_id('berry'), 3], [get_crop_id('clover'), 2]];
			d = 'ber/ed, cave all, berry, pond berry';
		} else { // Full Forage
			forage_list = [[get_crop_id('edible'), 2], [get_crop_id('berry'), 3], [get_crop_id('clover'), 3]];
			d = 'ber/ed, cave all, berry, pond all';
		}
	}

	if (m == 1) { //Summer
		if (f_amt <= 40) {
			forage_list = [[get_crop_id('walnut'), 1]];
			d = 'walnut';
		} else if (f_amt <= 70) {
			forage_list = [[get_crop_id('edible'), 1], [get_crop_id('walnut'), 1]];
			d = 'ed/wal';
		}  else if (f_amt <= 110) {
			forage_list = [[get_crop_id('edible'), 1], [get_crop_id('walnut'), 2]];
			d = 'ed/wal, wal';
		} else if (f_amt <= 180) {
			forage_list = [[get_crop_id('edible'), 1], [get_crop_id('walnut'), 2], [get_crop_id('mango'), 1]];
			d = 'ed/wal, wal, mango';
		} else if (f_amt <= 250) {
			forage_list = [[get_crop_id('edible'), 1], [get_crop_id('walnut'), 2], [get_crop_id('mango'), 1], [get_crop_id('clover'), 1]];
			d = 'ed/wal, wal, mango, pond clover';
		} else if (f_amt <= 290) {
			forage_list = [[get_crop_id('edible'), 1], [get_crop_id('walnut'), 3], [get_crop_id('clover'), 1], [get_crop_id('mango'), 1]];
			d = 'ed/wal, wal, mango, pond all';
		} else if (f_amt <= 320) {
			forage_list = [[get_crop_id('edible'), 1], [get_crop_id('walnut'), 2], [get_crop_id('clover'), 2], [get_crop_id('mango'), 1]];
			d = 'ed/wal, wal, mango, cave clovers';
		} else if (f_amt <= 350) {
			forage_list = [[get_crop_id('edible'), 2], [get_crop_id('walnut'), 2], [get_crop_id('clover'), 2], [get_crop_id('mango'), 1]];
			d = 'ed/wal, wal, cave all, mango';
		} else { //Full Forage
			forage_list = [[get_crop_id('edible'), 2], [get_crop_id('walnut'), 2], [get_crop_id('clover'), 3], [get_crop_id('mango'), 1]];
			d = 'ed/wal, wal, cave all, mango, pond all';
		}
	}
		
	if (m == 2) {
		if (f_amt <= 60) {
			forage_list = [[get_crop_id('mushroom'), 1]];
			d = 'mushroom';
		} else if (f_amt <= 90) {
			forage_list = [[get_crop_id('mushroom'), 1], [get_crop_id('edible'), 1]];
			d = 'mush/ed';
		} else if (f_amt <= 150) {
			forage_list = [[get_crop_id('mushroom'), 2], [get_crop_id('edible'), 1]];
			d = 'mush/ed, mush';
		} else if (f_amt <= 250) {
			forage_list = ['mush/ed, mush, pois', [get_crop_id('mushroom'), 2], [get_crop_id('edible'), 1], [get_crop_id('pois mush'), 1]];
		} else if (f_amt <= 300) {
			forage_list = [[get_crop_id('mushroom'), 2], [get_crop_id('edible'), 1], [get_crop_id('pois mush'), 1], [get_crop_id('grapes'), 1]];
			d = 'mush/ed, mush, pois, grapes';
		} else if (f_amt <= 320) {
			forage_list = [[get_crop_id('mushroom'), 2], [get_crop_id('edible'), 1], [get_crop_id('pois mush'), 1], [get_crop_id('clover'), 1]];
			d = 'mush/ed, mush, pois, pond clover';
		} else if (f_amt <= 380) {
			forage_list = [[get_crop_id('mushroom'), 3], [get_crop_id('edible'), 1], [get_crop_id('pois mush'), 1], [get_crop_id('clover'), 1]];
			d = 'mush/ed, mush, pois, pond all';
		} else if (f_amt <= 430) {
			forage_list = [[get_crop_id('mushroom'), 3], [get_crop_id('edible'), 1], [get_crop_id('pois mush'), 1], [get_crop_id('clover'), 1], [get_crop_id('grapes'), 1]];
			d = 'mush/ed, mush, grape/pois, pond all';
		} else if (f_amt <= 570) {
			forage_list = [[get_crop_id('mushroom'), 2], [get_crop_id('edible'), 2], [get_crop_id('pois mush'), 2], [get_crop_id('clover'), 2], [get_crop_id('grapes'), 1]];
			d = 'mush/ed, mush, cave all, grape/pois';
		} else if (f_amt <= 640) {
			forage_list = [[get_crop_id('mushroom'), 2], [get_crop_id('edible'), 2], [get_crop_id('pois mush'), 2], [get_crop_id('clover'), 3], [get_crop_id('grapes'), 1]];
			d = 'mush/ed, mush, cave all, grape/pois, pond clover';
		} else {
			forage_list = [[get_crop_id('mushroom'), 3], [get_crop_id('edible'), 2], [get_crop_id('pois mush'), 2], [get_crop_id('clover'), 3], [get_crop_id('grapes'), 1]];
			d = 'mush/ed, mush, cave all, grape/pois, pond all';
		}
	}

	return { 'desc':d, 'forage':true, 'forage_list':forage_list };
}