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

//var trigrams = '[{"111": [{"key": "1", "value": 1, "name": "天"}]}, {"011": [{"key":"2", "value": 2, "name": "澤"}]},{"101": [{"key": "3", "value": 3, "name": "火"}]}, {"001": [{"key": "4","value": 4,"name": "雷"}]}, {"110": [{"key": "5","value": 5,"name": "風"}]}, {"010": [{"key": "6","value": 6,"name": "水"}]},{"100": [{"key": "7","value": 7,"name": "山"}]},{"000": [{"key": "8","value": 8,"name": "地"}]}]';

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
        "fullName": "亁為天",
        "name": "天天"
    },
    "000000": 
        {
            "key": "88",
            "value": 2,
            "fullName": "坤為地",
            "name": "地"
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
            "name": "嗑"
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
            "fullName": "坎為水",
            "name": "水水"
        }
    ,
    "101101": 
        {
            "key": "33",
            "value": 30,
            "fullName": "離為火",
            "name": "火"
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
            "fullName": "震為雷",
            "name": "雷雷"
        }
    ,
    "100100": 
        {
            "key": "77",
            "value": 52,
            "fullName": "艮為山",
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
            "fullName": "巽為風",
            "name": "風風"
        }
    ,
    "011011": 
        {
            "key": "22",
            "value": 58,
            "fullName": "兌為澤",
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
    "0101011": 
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
		
		

		
		
		$('#btn_preview').click(function () {
			const trigramsPrimaryList = [];
			const trigramsSecondaryList = [];
			$('#form_trigrams_8_preview > .form-radio-inline').addClass('d-none');
			console.log('btn_preview');
			var formDomTrigrams8 = $('#form_trigrams_8');			
			formDomTrigrams8.find('input:radio').each(function () {
				if ($(this).prop('checked')) {
					//urls.push('<div class="' + id + '">' + url + '</div>');
					console.log($(this).val());
					console.log('#chked_'+$(this).val());
					var arrItem = $(this).val().split("_");
					trigramsPrimaryList.push(arrItem[1]);
					console.log(arrItem);					
					$('#chked_'+$(this).val()).removeClass('d-none');					
				} 
				else {
					var arrItem = $(this).val().split("_");
					trigramsSecondaryList.push(arrItem[1]);
				}
				$('#btn_execute').removeClass('d-none');
			});
			console.log("=== 原卦 8~1 ===");
			console.log(trigramsPrimaryList);

			console.log("=== 副卦 8~1 ===");
			console.log(trigramsSecondaryList);
			//console.log("=== 1~8 ===");
			//trigramsList.reverse();
			//console.log(trigramsList);
			getHexagramPrimary(trigramsPrimaryList, trigramsSecondaryList);
		});

		function getHexagramPrimary(trigramsPrimaryList, trigramsSecondaryList) {
			console.log(1);
			console.log(trigramsPrimaryList);

			//Primary
			var hexagramPrimaryIdx1 = trigramsPrimaryList[2] + trigramsPrimaryList[3] + trigramsPrimaryList[4];
			var hexagramPrimaryIdx2 = trigramsPrimaryList[5] + trigramsPrimaryList[6] + trigramsPrimaryList[7];
			$('#hexagram_p_idx_1').text(getShowTrigramsText(hexagramPrimaryIdx1));
			$('#hexagram_p_idx_2').text(getShowTrigramsText(hexagramPrimaryIdx2));
			//hexagram_p_12
			var hexagramPrimaryText_12 = getShowHexagramText(hexagramPrimaryIdx1 + hexagramPrimaryIdx2);
			$('#hexagram_p_12').text(hexagramPrimaryText_12);

			var hexagramPrimaryIdx3 = trigramsPrimaryList[1] + trigramsPrimaryList[2] + trigramsPrimaryList[3];
			var hexagramPrimaryIdx4 = trigramsPrimaryList[4] + trigramsPrimaryList[5] + trigramsPrimaryList[6];
			$('#hexagram_p_idx_3').text(getShowTrigramsText(hexagramPrimaryIdx3));
			$('#hexagram_p_idx_4').text(getShowTrigramsText(hexagramPrimaryIdx4));
			//hexagram_p_34
			var hexagramPrimaryText_34 = getShowHexagramText(hexagramPrimaryIdx3 + hexagramPrimaryIdx4);
			$('#hexagram_p_34').text(hexagramPrimaryText_34);

			var hexagramPrimaryIdx5 = trigramsPrimaryList[0] + trigramsPrimaryList[1] + trigramsPrimaryList[2];
			var hexagramPrimaryIdx6 = trigramsPrimaryList[3] + trigramsPrimaryList[4] + trigramsPrimaryList[5];
			$('#hexagram_p_idx_5').text(getShowTrigramsText(hexagramPrimaryIdx5));
			$('#hexagram_p_idx_6').text(getShowTrigramsText(hexagramPrimaryIdx6));
			//hexagram_p_56
			var hexagramPrimaryText_56 = getShowHexagramText(hexagramPrimaryIdx5 + hexagramPrimaryIdx6);
			$('#hexagram_p_56').text(hexagramPrimaryText_56);
			
			//Secondary
			var hexagramSecondaryIdx1 = trigramsSecondaryList[2] + trigramsSecondaryList[3] + trigramsSecondaryList[4];
			var hexagramSecondaryIdx2 = trigramsSecondaryList[5] + trigramsSecondaryList[6] + trigramsSecondaryList[7];
			$('#hexagram_s_idx_1').text(getShowTrigramsText(hexagramSecondaryIdx1));
			$('#hexagram_s_idx_2').text(getShowTrigramsText(hexagramSecondaryIdx2));
			//hexagram_s_12
			var hexagramSecondaryText_12 = getShowHexagramText(hexagramSecondaryIdx1 + hexagramSecondaryIdx2);
			$('#hexagram_s_12').text(hexagramSecondaryText_12);

			var hexagramSecondaryIdx3 = trigramsSecondaryList[1] + trigramsSecondaryList[2] + trigramsSecondaryList[3];
			var hexagramSecondaryIdx4 = trigramsSecondaryList[4] + trigramsSecondaryList[5] + trigramsSecondaryList[6];
			$('#hexagram_s_idx_3').text(getShowTrigramsText(hexagramSecondaryIdx3));
			$('#hexagram_s_idx_4').text(getShowTrigramsText(hexagramSecondaryIdx4));
			//hexagram_s_34
			var hexagramSecondaryText_34 = getShowHexagramText(hexagramSecondaryIdx3 + hexagramSecondaryIdx4);
			$('#hexagram_s_34').text(hexagramSecondaryText_34);

			var hexagramSecondaryIdx5 = trigramsSecondaryList[0] + trigramsSecondaryList[1] + trigramsSecondaryList[2];
			var hexagramSecondaryIdx6 = trigramsSecondaryList[3] + trigramsSecondaryList[4] + trigramsSecondaryList[5];
			$('#hexagram_s_idx_5').text(getShowTrigramsText(hexagramSecondaryIdx5));
			$('#hexagram_s_idx_6').text(getShowTrigramsText(hexagramSecondaryIdx6));
			//hexagram_s_12
			var hexagramSecondaryText_56 = getShowHexagramText(hexagramSecondaryIdx5 + hexagramSecondaryIdx6);
			$('#hexagram_s_56').text(hexagramSecondaryText_56);
		}

	});

	function fetchJSONData() {
		fetch("./data/yichin.json")
			.then((res) => {
				if (!res.ok) {
					throw new Error
						(`HTTP error! Status: ${res.status}`);
				}
				return res.json();
			})
			.then((data) => 
			console.log(data))
			.catch((error) => 
			console.error("Unable to fetch data:", error));
	}
	
	let trigramsMap = new Map(Object.entries(trigrams));
	function getShowTrigramsText(trigramsData) {
		console.log(trigramsMap);
		var showText = trigramsMap.get(trigramsData).value;
		return showText;
	}

	let hexagramMap = new Map(Object.entries(hexagram));
	function getShowHexagramText(trigramsData) {
		var showText = hexagramMap.get(trigramsData).fullName;
		console.log(showText);
		return showText;
	}
  

	/*====================
		Preloader JS
	======================*/
	$(window).on('load', function() {
		$('.preloader').addClass('preloader-deactivate');
	});
	
	
})(jQuery);
