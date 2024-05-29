/* =====================================
Template Name: 	Mediplus.
Author Name: Naimur Rahman
Website: http://wpthemesgrid.com/
Description: Mediplus - Doctor HTML Template.
Version:	1.1
========================================*/   
/*=======================================
[Start Activation Code]
=========================================
* Sticky Header JS
* Search JS
* Mobile Menu JS
* Hero Slider JS
* Testimonial Slider JS
* Portfolio Slider JS
* Clients Slider JS
* Single Portfolio Slider JS
* Accordion JS
* Nice Select JS
* Date Picker JS
* Counter Up JS
* Checkbox JS
* Right Bar JS
* Video Popup JS
* Wow JS
* Scroll Up JS
* Animate Scroll JS
* Stellar JS
* Google Maps JS
* Preloader JS
=========================================
[End Activation Code]
=========================================*/ 

const trigrams = {
	"111": 
		{
			"key": "1",
			"value": 1,
			"name": "天"
		}
	,
	"011": 
		{
			"key": "2",
			"value": 2,
			"name": "澤"
		}
	,
	"101": 
		{
			"key": "3",
			"value": 3,
			"name": "火"
		}
	,
	"001": 
		{
			"key": "4",
			"value": 4,
			"name": "雷"
		}
	,
	"110": 
		{
			"key": "5",
			"value": 5,
			"name": "風"
		}
	,
	"010": 
		{
			"key": "6",
			"value": 6,
			"name": "水"
		}
	,
	"100": 
		{
			"key": "7",
			"value": 7,
			"name": "山"
		}
	,
	"000": 
		{
			"key": "8",
			"value": 8,
			"name": "地"
		}
};

const hexagram = {
    "111111": {
        "key": "11",
        "value": 1,
        "fullName": "天天",
        "name": "天天"
    },
    "000000": 
        {
            "key": "88",
            "value": 2,
            "fullName": "地地",
            "name": "地地"
        }
    ,
    "010001": 
        {
            "key": "64",
            "value": 3,
            "fullName": "水雷屯",
            "name": "屯"
        }
    ,
    "100010": 
        {
            "key": "76",
            "value": 4,
            "fullName": "山水蒙",
            "name": "蒙"
        }
    ,
    "010111": 
        {
            "key": "61",
            "value": 5,
            "fullName": "水天需",
            "name": "需"
        }
    ,
    "111010": 
        {
            "key": "16",
            "value": 6,
            "fullName": "天水訟",
            "name": "訟"
        }
    ,
    "000010": 
        {
            "key": "86",
            "value": 7,
            "fullName": "地水師",
            "name": "師"
        }
    ,
    "010000": 
        {
            "key": "68",
            "value": 8,
            "fullName": "水地比",
            "name": "比"
        }
    ,
    "110111": 
        {
            "key": "51",
            "value": 9,
            "fullName": "風天小畜",
            "name": "小畜"
        }
    ,
    "111011": 
        {
            "key": "12",
            "value": 10,
            "fullName": "天澤履",
            "name": "履"
        }
    ,
    "000111": 
        {
            "key": "81",
            "value": 11,
            "fullName": "地天泰",
            "name": "泰"
        }
    ,
    "111000": 
        {
            "key": "18",
            "value": 12,
            "fullName": "天地否",
            "name": "否"
        }
    ,
    "111101": 
        {
            "key": "13",
            "value": 13,
            "fullName": "天火同人",
            "name": "同人"
        }
    ,
    "101111": 
        {
            "key": "31",
            "value": 14,
            "fullName": "火天大有",
            "name": "大有"
        }
    ,
    "000100": 
        {
            "key": "87",
            "value": 15,
            "fullName": "地山謙",
            "name": "謙"
        }
    ,
    "001000": 
        {
            "key": "48",
            "value": 16,
            "fullName": "雷地豫",
            "name": "豫"
        }
    ,
    "011001": 
        {
            "key": "24",
            "value": 17,
            "fullName": "澤雷隨",
            "name": "隨"
        }
    ,
    "100110": 
        {
            "key": "75",
            "value": 18,
            "fullName": "山風蠱",
            "name": "蠱"
        }
    ,
    "000011": 
        {
            "key": "82",
            "value": 19,
            "fullName": "地澤臨",
            "name": "臨"
        }
    ,
    "110000": 
        {
            "key": "58",
            "value": 20,
            "fullName": "風地觀",
            "name": "觀"
        }
    ,
    "101001": 
        {
            "key": "34",
            "value": 21,
            "fullName": "火雷噬",
            "name": "噬嗑"
        }
    ,
    "100101": 
        {
            "key": "73",
            "value": 22,
            "fullName": "山火賁",
            "name": "賁"
        }
    ,
    "100000": 
        {
            "key": "78",
            "value": 23,
            "fullName": "山地剝",
            "name": "剝"
        }
    ,
    "000001": 
        {
            "key": "84",
            "value": 24,
            "fullName": "地雷復",
            "name": "復"
        }
    ,
    "111001": 
        {
            "key": "14",
            "value": 25,
            "fullName": "天雷無妄",
            "name": "無妄"
        }
    ,
    "100111": 
        {
            "key": "71",
            "value": 26,
            "fullName": "山天大畜",
            "name": "大畜"
        }
    ,
    "100001": 
        {
            "key": "74",
            "value": 27,
            "fullName": "山雷頤",
            "name": "頤"
        }
    ,
    "011110": 
        {
            "key": "25",
            "value": 28,
            "fullName": "澤風大過",
            "name": "大過"
        }
    ,
    "010010": 
        {
            "key": "66",
            "value": 29,
            "fullName": "水水",
            "name": "水水"
        }
    ,
    "101101": 
        {
            "key": "33",
            "value": 30,
            "fullName": "火火",
            "name": "火火"
        }
    ,
    "011100": 
        {
            "key": "27",
            "value": 31,
            "fullName": "澤山咸",
            "name": "咸"
        }
    ,
    "001110": 
        {
            "key": "45",
            "value": 32,
            "fullName": "雷風恆",
            "name": "恆"
        }
    ,
    "111100": 
        {
            "key": "17",
            "value": 33,
            "fullName": "天山遯",
            "name": "遯"
        }
    ,
    "001111": 
        {
            "key": "41",
            "value": 34,
            "fullName": "雷天大壯",
            "name": "大壯"
        }
    ,
    "101000": 
        {
            "key": "38",
            "value": 35,
            "fullName": "火地晉",
            "name": "晉"
        }
    ,
    "000101": 
        {
            "key": "83",
            "value": 36,
            "fullName": "地火明夷",
            "name": "明夷"
        }
    ,
    "110101": 
        {
            "key": "53",
            "value": 37,
            "fullName": "風火家人",
            "name": "家人"
        }
    ,
    "101011": 
        {
            "key": "32",
            "value": 38,
            "fullName": "火澤睽",
            "name": "睽"
        }
    ,
    "010100": 
        {
            "key": "67",
            "value": 39,
            "fullName": "水山蹇",
            "name": "蹇"
        }
    ,
    "001010": 
        {
            "key": "46",
            "value": 40,
            "fullName": "雷水解",
            "name": "解"
        }
    ,
    "100011": 
        {
            "key": "72",
            "value": 41,
            "fullName": "山澤損",
            "name": "損"
        }
    ,
    "110001": 
        {
            "key": "54",
            "value": 42,
            "fullName": "風雷益",
            "name": "益"
        }
    ,
    "011111": 
        {
            "key": "21",
            "value": 43,
            "fullName": "澤天夬",
            "name": "夬"
        }
    ,
    "111110": 
        {
            "key": "15",
            "value": 44,
            "fullName": "天風姤",
            "name": "姤"
        }
    ,
    "011000": 
        {
            "key": "28",
            "value": 45,
            "fullName": "澤地萃",
            "name": "萃"
        }
    ,
    "000110": 
        {
            "key": "85",
            "value": 46,
            "fullName": "地風升",
            "name": "升"
        }
    ,
    "011010": 
        {
            "key": "26",
            "value": 47,
            "fullName": "澤水困",
            "name": "困"
        }
    ,
    "010110": 
        {
            "key": "65",
            "value": 48,
            "fullName": "水風井",
            "name": "井"
        }
    ,
    "011101": 
        {
            "key": "23",
            "value": 49,
            "fullName": "澤火革",
            "name": "革"
        }
    ,
    "101110": 
        {
            "key": "35",
            "value": 50,
            "fullName": "火風鼎",
            "name": "鼎"
        }
    ,
    "001001": 
        {
            "key": "44",
            "value": 51,
            "fullName": "雷雷",
            "name": "雷雷"
        }
    ,
    "100100": 
        {
            "key": "77",
            "value": 52,
            "fullName": "山山",
            "name": "山山"
        }
    ,
    "110100": 
        {
            "key": "57",
            "value": 53,
            "fullName": "風山漸",
            "name": "漸"
        }
    ,
    "001011": 
        {
            "key": "42",
            "value": 54,
            "fullName": "雷澤歸妹",
            "name": "歸妹"
        }
    ,
    "001101": 
        {
            "key": "43",
            "value": 55,
            "fullName": "雷火豐",
            "name": "豐"
        }
    ,
    "101100": 
        {
            "key": "37",
            "value": 56,
            "fullName": "火山旅",
            "name": "旅"
        }
    ,
    "110110": 
        {
            "key": "55",
            "value": 57,
            "fullName": "風風",
            "name": "風風"
        }
    ,
    "011011": 
        {
            "key": "22",
            "value": 58,
            "fullName": "澤澤",
            "name": "澤澤"
        }
    ,
    "110010": 
        {
            "key": "56",
            "value": 59,
            "fullName": "風水渙",
            "name": "渙"
        }
    ,
    "010011": 
        {
            "key": "62",
            "value": 60,
            "fullName": "水澤節",
            "name": "節"
        }
    ,
    "110011": 
        {
            "key": "52",
            "value": 61,
            "fullName": "風澤中孚",
            "name": "中孚"
        }
    ,
    "001100": 
        {
            "key": "47",
            "value": 62,
            "fullName": "雷山小過",
            "name": "小過"
        }
    ,
    "010101": 
        {
            "key": "63",
            "value": 63,
            "fullName": "水火既濟",
            "name": "既濟"
        }
    ,
    "101010": 
        {
            "key": "36",
            "value": 64,
            "fullName": "火水未濟",
            "name": "未濟"
        }
    
};

(function($) {
    "use strict";
     $(document).on('ready', function() {
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		/*====================================
			Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});
		
		$('.pro-features .get-pro').on( "click", function(){
			$('.pro-features').toggleClass('active');
		});
		
		/*====================================
			Search JS
		======================================*/ 
		$('.search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});
		
		/*====================================
			Mobile Menu
		======================================*/ 	
		// $('.menu').slicknav({
		// 	prependTo:".mobile-nav",
		// 	duration: 300,
		// 	closeOnClick:true,
		// });
		
		/*===============================
			Hero Slider JS
		=================================*/ 
		$(".hero-slider").owlCarousel({
			loop:true,
			autoplay:true,
			smartSpeed: 500,
			autoplayTimeout:3500,
			singleItem: true,
			autoplayHoverPause:true,
			items:1,
			nav:true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
			dots:false,
		});

		/*===============================
			Testimonial Slider JS
		=================================*/ 
		$('.testimonial-slider').owlCarousel({
			items:3,
			autoplay:true,
			autoplayTimeout:4500,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:false,
			dots:true,
			responsive:{
				1: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:2,
				},
				1170: {
					items:3,
				},
			}
		});
		
		/*===============================
			Portfolio Slider JS
		=================================*/ 
		$('.portfolio-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4000,
			margin:15,
			smartSpeed:300,
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:2,
				},
				1170: {
					items:4,
				},
			}
		});
		
		/*=====================================
			Counter Up JS
		======================================*/
		$('.counter').counterUp({
			delay:20,
			time:2000
		});
		
		/*===============================
			Clients Slider JS
		=================================*/ 
		$('.clients-slider').owlCarousel({
			items:5,
			autoplay:true,
			autoplayTimeout:3500,
			margin:15,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			nav:false,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:5,
				},
			}
		});
		
		/*====================================
			Single Portfolio Slider JS
		======================================*/ 
		$('.pf-details-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			loop:true,
			merge:true,
			nav:true,
			dots:false,
			navText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
		});
		
		/*===================
			Accordion JS
		=====================*/ 
		$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
		$('.accordion a').on('click', function(j) {
			var dropDown = $(this).closest('li').find('p');
			$(this).closest('.accordion').find('p').not(dropDown).slideUp(300);
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
			}
			dropDown.stop(false, true).slideToggle(300);
			j.preventDefault();
		});
		
		/*====================================
			Nice Select JS
		======================================*/ 	
		$('select').niceSelect();
		
		/*=====================================
			Date Picker JS
		======================================*/ 
		$( function() {
			$( "#datepicker" ).datepicker();
		} );
		
		
		
		/*===============================
			Checkbox JS
		=================================*/  
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		/*===============================
			Right Bar JS
		=================================*/ 
		$('.right-bar .bar').on( "click", function(){
			$('.sidebar-menu').addClass('active');
		});
		$('.sidebar-menu .cross').on( "click", function(){
			$('.sidebar-menu').removeClass('active');
		});
		
		/*=====================
			Video Popup JS
		=======================*/ 
		$('.video-popup').magnificPopup({
			type: 'video',	
		});
		
		/*================
			Wow JS
		==================*/		
		var window_width = $(window).width();   
			if(window_width > 767){
            new WOW().init();
		}
	
		/*===================
			Scroll Up JS
		=====================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		}); 

		/*=======================
			Animate Scroll JS
		=========================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 100
				}, 1000);
			e.preventDefault();
		});
		
		/*=======================
			Stellar JS
		=========================*/
		$.stellar({
		  horizontalOffset: 0,
		  verticalOffset: 0
		});

		/*====================
			Google Maps JS
		======================*/
		// var map = new GMaps({
		// 		el: '#map',
		// 		lat: 23.011245,
		// 		lng: 90.884780,
		// 		scrollwheel: false,
		// 	});
		// 	map.addMarker({
		// 		lat: 23.011245,
		// 		lng: 90.884780,
		// 		title: 'Marker with InfoWindow',
		// 		infoWindow: {
		// 		content: '<p>welcome to Medipro</p>'
		// 	}
		
		// });
		
		
		//八顆
        $('#btn_preview_trigrams_8').click(function () {
			var trigramsPrimaryList = [];
			var trigramsSecondaryList = [];
			$('#form_trigrams_8_preview > .form-radio-inline').addClass('d-none');
			console.log('btn_preview_trigrams_8');
			var formDomTrigrams = $('#form_trigrams_8');			
			formDomTrigrams.find('input:radio').each(function () {
				if ($(this).prop('checked')) {
					// console.log($(this).val());
					// console.log('#chked_'+$(this).val());
					var arrItem = $(this).val().split("_");
					trigramsPrimaryList.push(arrItem[1]);
					$('#chked_'+$(this).val()).removeClass('d-none');
				} 
				else {
					var arrItem = $(this).val().split("_");
					trigramsSecondaryList.push(arrItem[1]);
					$('#chked_'+$(this).val()).addClass('d-none');
				}
			});

			if (trigramsPrimaryList.length<8) {
				$('#form_trigrams_8_preview .form-radio-inline').addClass('d-none');
				alert("請選滿8顆");
				return false;
			}
			// console.log("=== 原卦 8~1 ===");
			// console.log(trigramsPrimaryList);
			// console.log("=== 副卦 8~1 ===");
			// console.log(trigramsSecondaryList);
			
			getHexagramPrimary(8, trigramsPrimaryList, trigramsSecondaryList);
			$('#btn_execute_trigrams_8').removeClass('d-none');
		});

        //九顆
		$('#btn_preview_trigrams_9').click(function () {
			var trigramsPrimaryList = [];
			var trigramsSecondaryList = [];
			$('#form_trigrams_9_preview > .form-radio-inline').addClass('d-none');
			console.log('btn_preview_trigrams_9');
			var formDomTrigrams= $('#form_trigrams_9');			
			formDomTrigrams.find('input:radio').each(function () {
				if ($(this).prop('checked')) {
					// console.log($(this).val());
					// console.log('#chked_'+$(this).val());
					var arrItem = $(this).val().split("_");
					trigramsPrimaryList.push(arrItem[1]);
					$('#chked_'+$(this).val()).removeClass('d-none');
				} 
				else {
					var arrItem = $(this).val().split("_");
					trigramsSecondaryList.push(arrItem[1]);
					$('#chked_'+$(this).val()).addClass('d-none');
				}
			});

			if (trigramsPrimaryList.length<8) {
				$('#form_trigrams_9_preview .form-radio-inline').addClass('d-none');
				alert("請選滿9顆");
				return false;
			}
			console.log("=== 原卦 9~1 ===");
			console.log(trigramsPrimaryList);
			console.log("=== 副卦 9~1 ===");
            console.log(trigramsSecondaryList);
			
			getHexagramPrimary(9, trigramsPrimaryList, trigramsSecondaryList);
			$('#btn_execute_trigrams_9').removeClass('d-none');
		});

		$('#btn_execute_trigrams_8, #btn_execute_trigrams_9').click(function () {
			console.log('btn_execute');
			$('#hexagram_result').removeClass('d-none');
			goResult();

		});

		function goResult() {
			$('html,body').animate({
				scrollTop: $('#hexagram_result').offset().top
			}, 'show');
			return false;
		}

		function getHexagramPrimary(trigramsType, trigramsPrimaryList, trigramsSecondaryList) {
            var index = 0;
            if (parseInt(trigramsType)===9) {
                index = 1;
            }
			//Primary
			var arrHexagramPrimary = [];
            //hexagram_p_12
			arrHexagramPrimary[1] = trigramsPrimaryList[2+index] + trigramsPrimaryList[3+index] + trigramsPrimaryList[4+index];
			arrHexagramPrimary[2] = trigramsPrimaryList[5+index] + trigramsPrimaryList[6+index] + trigramsPrimaryList[7+index];
			$('#hexagram_p_idx_1').text(getShowTrigramsText(arrHexagramPrimary[1]));
			$('#hexagram_p_idx_2').text(getShowTrigramsText(arrHexagramPrimary[2]));
			var hexagramPrimaryText_12 = getShowHexagramText(arrHexagramPrimary[1], arrHexagramPrimary[2], 'fullName');
			$('#hexagram_p_12').text(hexagramPrimaryText_12);

            //hexagram_p_34
			arrHexagramPrimary[3] = trigramsPrimaryList[1+index] + trigramsPrimaryList[2+index] + trigramsPrimaryList[3+index];
			arrHexagramPrimary[4] = trigramsPrimaryList[4+index] + trigramsPrimaryList[5+index] + trigramsPrimaryList[6+index];
			$('#hexagram_p_idx_3').text(getShowTrigramsText(arrHexagramPrimary[3]));
			$('#hexagram_p_idx_4').text(getShowTrigramsText(arrHexagramPrimary[4]));
			var hexagramPrimaryText_34 = getShowHexagramText(arrHexagramPrimary[3], arrHexagramPrimary[4], 'fullName');
			$('#hexagram_p_34').text(hexagramPrimaryText_34);

            //hexagram_p_56
			arrHexagramPrimary[5] = trigramsPrimaryList[0+index] + trigramsPrimaryList[1+index] + trigramsPrimaryList[2+index];
			arrHexagramPrimary[6] = trigramsPrimaryList[3+index] + trigramsPrimaryList[4+index] + trigramsPrimaryList[5+index];
			$('#hexagram_p_idx_5').text(getShowTrigramsText(arrHexagramPrimary[5]));
			$('#hexagram_p_idx_6').text(getShowTrigramsText(arrHexagramPrimary[6]));
			var hexagramPrimaryText_56 = getShowHexagramText(arrHexagramPrimary[5], arrHexagramPrimary[6], 'fullName');
			$('#hexagram_p_56').text(hexagramPrimaryText_56);
            
            if (parseInt(trigramsType)===9) {
                //hexagram_p_78
                arrHexagramPrimary[7] = trigramsPrimaryList[0] + trigramsPrimaryList[1] + trigramsPrimaryList[2];
                arrHexagramPrimary[8] = trigramsPrimaryList[3] + trigramsPrimaryList[4] + trigramsPrimaryList[5];
                $('#hexagram_p_idx_7').text(getShowTrigramsText(arrHexagramPrimary[7]));
                $('#hexagram_p_idx_8').text(getShowTrigramsText(arrHexagramPrimary[8]));
                var hexagramPrimaryText_78 = getShowHexagramText(arrHexagramPrimary[7], arrHexagramPrimary[8], 'fullName');
                $('#hexagram_p_78').text(hexagramPrimaryText_78);
            }
			
			//Secondary
			var arrHexagramSecondary = [];
            //hexagram_s_12
			arrHexagramSecondary[1] = trigramsSecondaryList[2+index] + trigramsSecondaryList[3+index] + trigramsSecondaryList[4+index];
			arrHexagramSecondary[2] = trigramsSecondaryList[5+index] + trigramsSecondaryList[6+index] + trigramsSecondaryList[7+index];
			$('#hexagram_s_idx_1').text(getShowTrigramsText(arrHexagramSecondary[1]));
			$('#hexagram_s_idx_2').text(getShowTrigramsText(arrHexagramSecondary[2]));
			var hexagramSecondaryText_12 = getShowHexagramText(arrHexagramSecondary[1], arrHexagramSecondary[2], 'fullName');
			$('#hexagram_s_12').text(hexagramSecondaryText_12);

            //hexagram_s_34
			arrHexagramSecondary[3] = trigramsSecondaryList[1+index] + trigramsSecondaryList[2+index] + trigramsSecondaryList[3+index];
			arrHexagramSecondary[4] = trigramsSecondaryList[4+index] + trigramsSecondaryList[5+index] + trigramsSecondaryList[6+index];
			$('#hexagram_s_idx_3').text(getShowTrigramsText(arrHexagramSecondary[3]));
			$('#hexagram_s_idx_4').text(getShowTrigramsText(arrHexagramSecondary[4]));
			var hexagramSecondaryText_34 = getShowHexagramText(arrHexagramSecondary[3], arrHexagramSecondary[4], 'fullName');
			$('#hexagram_s_34').text(hexagramSecondaryText_34);

            //hexagram_s_56
			arrHexagramSecondary[5] = trigramsSecondaryList[0+index] + trigramsSecondaryList[1+index] + trigramsSecondaryList[2+index];
			arrHexagramSecondary[6] = trigramsSecondaryList[3+index] + trigramsSecondaryList[4+index] + trigramsSecondaryList[5+index];
			$('#hexagram_s_idx_5').text(getShowTrigramsText(arrHexagramSecondary[5]));
			$('#hexagram_s_idx_6').text(getShowTrigramsText(arrHexagramSecondary[6]));
			var hexagramSecondaryText_56 = getShowHexagramText(arrHexagramSecondary[5], arrHexagramSecondary[6], 'fullName');
			$('#hexagram_s_56').text(hexagramSecondaryText_56);

            if (parseInt(trigramsType)===9) {
                //hexagram_s_78
                arrHexagramSecondary[7] = trigramsSecondaryList[0] + trigramsSecondaryList[1] + trigramsSecondaryList[2];
                arrHexagramSecondary[8] = trigramsSecondaryList[3] + trigramsSecondaryList[4] + trigramsSecondaryList[5];
                $('#hexagram_s_idx_7').text(getShowTrigramsText(arrHexagramSecondary[7]));
                $('#hexagram_s_idx_8').text(getShowTrigramsText(arrHexagramSecondary[8]));
                var hexagramSecondaryText_78 = getShowHexagramText(arrHexagramSecondary[7], arrHexagramSecondary[8], 'fullName');
                $('#hexagram_s_78').text(hexagramSecondaryText_78);
            }

			//hexagram_p_remix
			getHexagramFirstPartResult(trigramsType, 'Primary', arrHexagramPrimary);
			//hexagram_s_remix
			getHexagramFirstPartResult(trigramsType, 'Secondary', arrHexagramSecondary);
			//hexagram_ps_remix
			getHexagramSecondPartResult(trigramsType, 'Primary', arrHexagramPrimary, arrHexagramSecondary);
			//hexagram_sp_remix
			getHexagramSecondPartResult(trigramsType, 'Secondary', arrHexagramSecondary, arrHexagramPrimary);
		}

	});
	
	let trigramsMap = new Map(Object.entries(trigrams));
	function getShowTrigramsText(trigramsData) {
		// console.log(trigramsMap);
		var showText = trigramsMap.get(trigramsData).value;
		return showText;
	}

	let hexagramMap = new Map(Object.entries(hexagram));
	function getShowHexagramText(trigramsIdx1, trigramsIdx2, showType='name') {
		var trigramsData = trigramsIdx1 + trigramsIdx2;
		var hexagramObj = hexagramMap.get(trigramsData)
		var showText = "";
		if (showType==='name') {
			showText = hexagramObj.name;
		} else {
			showText = hexagramObj.fullName;
		}

		return showText;
	}

	function getHexagramFirstPartResult(trigramsType, showType, arrHexagram) {
		var typeKey = "p";
		if (showType==='Secondary') {
			typeKey = "s";
		}
	
		var arrGroup = [
			[[1, 3], [1, 5], [1, 2], [1, 4], [1, 6]],
			[[3, 1], [3, 5], [3, 2], [3, 4], [3, 6]],
			[[5, 1], [5, 3], [5, 2], [5, 4], [5, 6]],
			[[2, 1], [2, 3], [2, 5], [2, 4], [2, 6]],
			[[4, 1], [4, 3], [4, 5], [4, 2], [4, 6]],
			[[6, 1], [6, 3], [6, 5], [6, 2], [6, 4]],
		];

        if (parseInt(trigramsType)===9) {
            arrGroup = [
                [[1, 3], [1, 5], [1, 7], [1, 2], [1, 4], [1, 6], [1, 8]],
                [[3, 1], [3, 5], [3, 7], [3, 2], [3, 4], [3, 6], [3, 8]],
                [[5, 1], [5, 3], [5, 7], [5, 2], [5, 4], [5, 6], [5, 8]],
                [[7, 1], [7, 3], [7, 5], [7, 2], [7, 4], [7, 6], [7, 8]],
                [[2, 1], [2, 3], [2, 5], [2, 7], [2, 4], [2, 6], [2, 8]],
                [[4, 1], [4, 3], [4, 5], [4, 7], [4, 2], [4, 6], [4, 8]],
                [[6, 1], [6, 3], [6, 5], [6, 7], [6, 2], [6, 4], [6, 8]],
                [[8, 1], [8, 3], [8, 5], [8, 7], [8, 2], [8, 4], [8, 6]],
            ];
        }
		
		for (let groupIdx = 0; groupIdx < arrGroup.length; groupIdx++) {
			var arrSubGroup = arrGroup[groupIdx];
			for (var index = 0; index < arrSubGroup.length; index++) {
				var idx1 = arrSubGroup[index][0];
				var idx2 = arrSubGroup[index][1];
				var hexagramTextRemix= getShowHexagramText(arrHexagram[idx1], arrHexagram[idx2]);
				$('#hexagram_' + typeKey + '_remix_' + idx1 + '_' + idx2).text(hexagramTextRemix);
			}
		}
	}

	function getHexagramSecondPartResult(trigramsType, showType, arrHexagram1, arrHexagram2) {
		var typeKey = "ps";
		if (showType==='Secondary') {
			typeKey = "sp";
		}
	
		var arrGroup = [
			[[1, 1], [1, 3], [1, 5], [1, 2], [1, 4], [1, 6]],
			[[3, 1], [3, 3], [3, 5], [3, 2], [3, 4], [3, 6]],
			[[5, 1], [5, 3], [5, 5], [5, 2], [5, 4], [5, 6]],
			[[2, 1], [2, 3], [2, 5], [2, 2], [2, 4], [2, 6]],
			[[4, 1], [4, 3], [4, 5], [4, 2], [4, 4], [4, 6]],
			[[6, 1], [6, 3], [6, 5], [6, 2], [6, 4], [6, 6]],
		];

        if (parseInt(trigramsType)===9) {
            arrGroup = [
                [[1, 1], [1, 3], [1, 5], [1, 7], [1, 2], [1, 4], [1, 6], [1, 8]],
                [[3, 1], [3, 3], [3, 5], [3, 7], [3, 2], [3, 4], [3, 6], [3, 8]],
                [[5, 1], [5, 3], [5, 5], [5, 7], [5, 2], [5, 4], [5, 6], [5, 8]],
                [[7, 1], [7, 3], [7, 5], [7, 7], [7, 2], [7, 4], [7, 6], [7, 8]],
                [[2, 1], [2, 3], [2, 5], [2, 7], [2, 2], [2, 4], [2, 6], [2, 8]],
                [[4, 1], [4, 3], [4, 5], [4, 7], [4, 2], [4, 4], [4, 6], [4, 8]],
                [[6, 1], [6, 3], [6, 5], [6, 7], [6, 2], [6, 4], [6, 6], [6, 8]],
                [[8, 1], [8, 3], [8, 5], [8, 7], [8, 2], [8, 4], [8, 6], [8, 8]],
            ];
        }
		
		for (let groupIdx = 0; groupIdx < arrGroup.length; groupIdx++) {
			var arrSubGroup = arrGroup[groupIdx];
			for (var index = 0; index < arrSubGroup.length; index++) {
				var idx1 = arrSubGroup[index][0];
				var idx2 = arrSubGroup[index][1];
				var hexagramTextRemix= getShowHexagramText(arrHexagram1[idx1], arrHexagram2[idx2]);
				$('#hexagram_' + typeKey + '_remix_' + idx1 + '_' + idx2).text(hexagramTextRemix);
			}
		}
	}

	
	/*====================
		Preloader JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
	
	
})(jQuery);

//列印功能
function printHtml(html) {
	var bodyHtml = document.body.innerHTML;
	document.body.innerHTML = html;
	window.print();
	document.body.innerHTML = bodyHtml;
	window.location.reload(); //列印輸出後更新頁面
}

function onPrint() {
	//去除超連結設置
	$('a').each(function(index) {
		$(this).replaceWith($(this).html());
	});
	var html = $("#printArea").html();
	printHtml(html);
}