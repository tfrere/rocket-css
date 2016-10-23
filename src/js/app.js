import '../index.html';
import '../css/main.scss';
import $ 		from 'jquery';
import hljs 	from 'plugins/highlight';
import w3color 	from 'plugins/w3color';
import ntc 		from 'plugins/nameThatColor';


console.log(w3color);

ntc.init();
hljs.initHighlightingOnLoad();


let $nav = $('.doc--nav');
let $navLinks = $('.doc--nav ul li a');
let $content= $('.doc--content');


$('.doc--typo-heading').each(function(index){
	var values = $( this ).find('.heading').css("font-size");
	console.log(values);
	$(this).find('span').text(values);
});

$('.doc--typo-info .wrapper h2').each(function(index){
	var values = $( this ).css("font-family").match(/\"(.*)\"/g);
	$(this).text(values);
});

let colors = [];
let oldScrollValue = -1;

$(document).ready(function () {

	$('.doc--color .doc--color-first .doc--column').each(function(index){
		colors[index] = {};
		colors[index].hex = hexc($(this).css('backgroundColor'));
		var color = new w3color(colors[index].hex);
		colors[index].rgb = color.toRgbString();
		colors[index].hsl = color.toHslString();
		colors[index].cmyk = color.toCmykString();
		colors[index].name = ntc.name(colors[index].hex)[1];

		$(this).find('.hex').html(colors[index].hex);
		$(this).find('.rgb').html(colors[index].rgb);
		$(this).find('.hsb').html(colors[index].hsl);
		$(this).find('.cmyk').html(colors[index].cmyk);
		$(this).find('.name').html(colors[index].name);
	});


	$('.doc--color .doc--color-last .doc--column').each(function(index){
		console.log(1);
		colors[index] = {};
		colors[index].hex = hexc($(this).css('backgroundColor'));
		colors[index].name = ntc.name(colors[index].hex)[1];

		$(this).find('.name').html(colors[index].name);
	});



	console.log(colors);



//    $content.on("scroll", onScroll);
    
  //   $('a[href^="#"]').on('click', function (e) {
  //       e.preventDefault();
		// var target = this.hash;
		// smoothScroll(target);
  //   });

});

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    return '#' + parts.join('');
}


// var stickyNav = function($nav, navOffset, navEndOffset) {

// 	const scrollTop = $(window).scrollTop();
// 	const isScrollingUp = oldScrollValue > scrollTop;

// 	const fixed = scrollTop > navOffset && scrollTop < navEndOffset;

// 	if( fixed )
// 		$nav.addClass("fixed");
// 	else
// 		$nav.removeClass("fixed");

// }

// var activeNav = function($navLinks) {

//     var scrollPos = $content.scrollTop();

//    $navLinks.each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top - 100 <= scrollPos && refElement.position().top + refElement.height() - 100 > scrollPos) {
//            $navLinks.removeClass("active");
//             currLink.addClass("active");
//         }
//         else{
//             currLink.removeClass("active");
//         }
//     });
	
// }

// function onScroll(event){
	

// 	activeNav($navLinks);

// }


// var smoothScroll = function(target) {

// 	$target = $(target);

// 	$content.stop().animate(
// 	{
// 		'scrollTop': $target.offset().top + 50
// 	},
// 	500,
// 	'swing',
// 	function () {
// 		window.location.hash = target;
// 	});
// }


$("#toggleBaseline").click(function(){
	$("body").toggleClass("show-baseline");
});
$("#toggleNight").click(function(){
	$("body").toggleClass("dark");
	$("#toggleNight i").toggleClass("icon-moon");
	$("#toggleNight i").toggleClass("icon-sun");
});

$(".burger-menu").click(function(){
	$(".burger-menu").toggleClass("active");
});

$(".input-material input").focus(function(){
	$(".input-material").addClass("focus");
});

$(".input-material input").blur(function(){
	console.log($(".input-material input").val());
	if ($(".input-material input").val() == "")
		$(".input-material").removeClass("focus");
});