import 					'../index.html';
import 					'../css/main.scss';
import $ 				from 'jquery';
import Clipboard 				from 'clipboard';

$.fn.sticky 	  = 	require('semantic-ui-sticky');
$.fn.accordion  = 	require('semantic-ui-accordion');
$.fn.visibility = 	require('semantic-ui-visibility');
$.fn.popup      = 	require('semantic-ui-popup');

import hljs 		from 'plugins/highlight';
import w3color 	from 'plugins/w3color';
import ntc 			from 'plugins/nameThatColor';

const showAsFloat = (value) => {
	return !isNaN(+value) ? (+value).toFixed(2) : value;
}

const hexc = (colorval) => {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    return '#' + parts.join('');
}

const $headers = $('.content header');

$headers.each(function(index) {
	$(this).css("z-index", 999 + index);
});

const $menuLinks = $('nav ul a[href]');
const $accordions = $('.accordion');
const $sectionHeaders = $('section');
const $blocs = $('.bloc');
const $popup = $('.button-popup');

$accordions.accordion({
	exclusive: true,
	collapsible: false,
  selector: {
    trigger: '.title2'
  }
});

$sectionHeaders.visibility({
	observeChanges: true,
	once: false,
	offset: 175,
	onTopPassed: function() {
		const currentHeader = $(this).attr("id");
		console.log(currentHeader);
		$accordions.each(function(index) {
			if (currentHeader == $(this).attr("id").replace('nav-', ''))
				$(this).accordion("open", 0);
			else
				$(this).accordion("close", 0);
		});
	},
	onBottomPassedReverse: function() {
		const currentHeader = $(this).attr("id");
		console.log(currentHeader);
		$accordions.each(function(index) {
			if (currentHeader == $(this).attr("id").replace('nav-', ''))
				$(this).accordion("open", 0);
			else
				$(this).accordion("close", 0);
		});
	}
});

$blocs.visibility({
	observeChanges: true,
	once: false,
	offset: 50,
	onTopPassed: function() {
		const currentBloc = $(this);
		$menuLinks.each(function() {
			if($(this).attr('href').replace('#', '') == currentBloc.attr("id"))
				$(this).parent().addClass("active");
			else
				$(this).parent().removeClass("active");
		});
	},
	onTopPassedReverse: function() {
		const currentBloc = $(this);
		$menuLinks.each(function() {
			if($(this).attr('href').replace('#', '') == currentBloc.attr("id"))
				$(this).parent().addClass("active");
			else
				$(this).parent().removeClass("active");
		});
	}
});


$menuLinks.on('click', function(event) {
	var
	id       = $(this).attr('href').replace('#', ''),
	$element = $('#' + id),
	position = $element.offset().top + 10
	;

	$('html, body').animate({
		scrollTop: position
	}, 500);

	window.location.hash = '#' + id;
	event.stopImmediatePropagation();
	event.preventDefault();
	return false;
});

hljs.configure({
  tabReplace: '  '
});

ntc.init();
hljs.initHighlightingOnLoad();
var clipboard = new Clipboard('.copy-button');

clipboard.on('success', function(e) {
		console.log(1);
		$(".toggle-copy-success").addClass("visible");
		window.setTimeout(function(){
			$(".toggle-copy-success").removeClass("visible");
		}, 550);
    e.clearSelection();
});

clipboard.on('error', function(e) {
		console.log(2);
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});


let $nav = $('.nav');
let $navLinks = $('.nav ul li a');
let $content= $('.content');

let colors = [];

$(document).ready(function () {

	setTimeout(function () {

		$('.heading-wrapper').each(function(index) {
			var values = $( this ).find('.heading').css("font-size");
			console.log(showAsFloat(values));
			$(this).find('span').text(showAsFloat(values));
		});

		$('.typo .info h2').each(function(index){
			console.log($( this ).css("font-family"));
			let values = $( this ).css("font-family").match(/^([a-zA-Z "]*),/g)[0];
			$(this).text(values.slice(0, -1));
		});

		$('.color .-first .column').each(function(index){

			colors[index] = {};
			colors[index].hex = hexc($(this).css('backgroundColor'));

			var color = new w3color(colors[index].hex);
			colors[index].rgb = color.toRgbString();
			colors[index].hsl = color.toHslString();
			colors[index].cmyk = color.toCmykString();
			colors[index].name = ntc.name(colors[index].hex)[1];

			$(this).find('.hex').html(colors[index].hex.slice(1));
			$(this).find('.rgb').html(colors[index].rgb.slice(4, -1));
			$(this).find('.hsb').html(colors[index].hsl.slice(4, -1));
			$(this).find('.cmyk').html(colors[index].cmyk.slice(5, -1));
			$(this).find('.name').html(colors[index].name);
		});

		$('.color .-last .column').each(function(index){
			colors[index] = {};
			colors[index].hex = hexc($(this).css('backgroundColor'));
			colors[index].name = ntc.name(colors[index].hex)[1];
			$(this).find('.name').html(colors[index].name);
		});

	}, 1000);


});

$("#toggleBaseline").click(function(){
	$(".toggle-baseline").toggleClass("show-baseline");
	$("#toggleBaseline").toggleClass("-active");
});
$("#toggleNight").click(function(){
	$("body").toggleClass("dark");
	$("#toggleNight").toggleClass("-active");
	$("#toggleNight i").toggleClass("-moon");
	$("#toggleNight i").toggleClass("-sun");
});

$(".burger-menu").click(function(){
	$(".burger-menu").toggleClass("active");
});



// modal

$(".open-modal").click(function(){
	$(".modal").addClass("-opening");
	window.setTimeout(function(){
		$(".modal").addClass("-open");
		$(".modal").removeClass("-opening");
	}, 350);

});

$(".close-modal").click(function(){
	$(".modal").addClass("-closing");
	window.setTimeout(function(){
		$(".modal").removeClass("-open");
		$(".modal").removeClass("-closing");
	}, 350);

});

$(".open-panel").click(function(){
	$(".panel").addClass("-opening");
	window.setTimeout(function(){
		$(".panel").addClass("-open");
		$(".panel").removeClass("-opening");
	}, 350);

});

$(".close-panel").click(function(){
	$(".panel").addClass("-closing");
	window.setTimeout(function(){
		$(".panel").removeClass("-open");
		$(".panel").removeClass("-closing");
	}, 350);

});



// Progress

var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


window.setInterval(function(){

	// $(".toggle-level").each(function(i){
	// 	var that = $(this);
	// 	$(this).removeClass("level-6");
	// 	console.log("1", that);
	// 	window.setTimeout(function(){
	// 		console.log("2", that);
	// 		that.addClass("level-6");
	// 	}, 150 * i);
	// });

	$(".toggle-loading").each(function(){
		if (!$(this).hasClass("loading"))
			$(this).addClass("loading");
		else {
			if($(this).hasClass("toggle-success") && !$(this).hasClass("-valid")) {
				$(this).addClass("-valid");
			}
			else if($(this).hasClass("toggle-fail") && !$(this).hasClass("-invalid")) {
				$(this).addClass("-invalid");
			}
			else {
				$(this).removeClass("loading");
				$(this).removeClass("-valid");
				$(this).removeClass("-invalid");
			}
		}
	});

	$(".progress .bar").each(function() {
		let progressValue = getRandomInt(0,100);
		$(this).css("width",  progressValue+ "%");
		$(this).find("span").text(progressValue+"%");
	});

}, 3000);


$(function(){
	var elem, d, x, y;
	$(".touch, .button:not(.-loading):not([disabled])").click(function(e){
    if($(this).find(".touch-elem").length === 0)
      $(this).prepend("<div class='touch-elem'></div>");

    elem = $(this).find(".touch-elem");
    elem.removeClass("animate");

    if(!elem.height() && !elem.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        elem.css({height: d, width: d});
    }

    x = e.pageX - $(this).offset().left - elem.width()/2;
    y = e.pageY - $(this).offset().top - elem.height()/2;

    elem.css({top: y + 'px', left: x + 'px'}).addClass("animate");
	});
});


$(".input-material input").focus(function(){
	$(".input-material").addClass("focus");
});

$(".input-material input").blur(function(){
	console.log($(".input-material input").val());
	if ($(".input-material input").val() == "")
		$(".input-material").removeClass("focus");
});


var img = $('.rotate-img');
if(img.length > 0){
    var offset = img.offset();
    function mouse(evt){
        var center_x = (offset.left) + (img.width()/2);
        var center_y = (offset.top) + (img.height()/2);
        var mouse_x = evt.pageX; var mouse_y = evt.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (180 / Math.PI) * -1) + 90;
        img.css('transform', 'translateX('+mouse_x/100+'px) translateY('+mouse_y/1000+'px)');
				// rotate('+degree/100+'deg)
    }
    $(document).mousemove(mouse);
}

//
// $('#typo-head')
//   .sticky({
//     context: '#typography'
//   })
// ;
// $('#color-head')
//   .sticky({
//     context: '#color'
//   })
// ;
// $('#atom-head')
//   .sticky({
//     context: '#atom'
//   })
// ;
