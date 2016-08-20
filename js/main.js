$(document).ready(function(){
	
	'use-strict';

	$('.post-slide').slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  arrows:false,
	  dots:true,
	   responsive: [
		{
		  breakpoint: 2,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
	});
	
	//Slick One Per Slide Testimonials
	$('.testimonial-slider').slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1000,
		speed: 1000,
		arrows: false,
		slidesToShow: 1
	});
	// Accordion
	var icons = {
		header: "fa fa-plus",
		activeHeader: "fa fa-minus"
	};
		$( "#accordion" ).accordion({
			icons: icons
		});
	$( "#toggle" ).button().on('click',function() {
		if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
			$( "#accordion" ).accordion( "option", "icons", null );
		} else {
			$( "#accordion" ).accordion( "option", "icons", icons );
	}
	});
	// Popup Gallery
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	  disableOn: 700,
	  type: 'iframe',
	  mainClass: 'mfp-fade',
	  removalDelay: 160,
	  preloader: false,
	  fixedContentPos: false
	});
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		}
	});
	//Boostrap Rating
	//http://dreyescat.github.io/bootstrap-rating/
	 $('input.check').on('change', function () {
          alert('Rating: ' + $(this).val());
        });
        $('#programmatically-set').on('click' , function () {
          $('#programmatically-rating').rating('rate', $('#programmatically-value').val());
        });
        $('#programmatically-get').on('click' , function () {
          alert($('#programmatically-rating').rating('rate'));
        });
        $('.rating-tooltip').rating({
          extendSymbol: function (rate) {
            $(this).tooltip({
              container: 'body',
              placement: 'bottom',
              title: 'Rate ' + rate
            });
          }
        });
        $('.rating-tooltip-manual').rating({
          extendSymbol: function () {
            var title;
            $(this).tooltip({
              container: 'body',
              placement: 'bottom',
              trigger: 'manual',
              title: function () {
                return title;
              }
            });
            $(this).on('rating.rateenter', function (e, rate) {
              title = rate;
              $(this).tooltip('show');
            })
            .on('rating.rateleave', function () {
              $(this).tooltip('hide');
            });
          }
        });
        $('.rating').each(function () {
          $('<span class="label label-default"></span>')
            .text($(this).val() || ' ')
            .insertAfter(this);
        });
        $('.rating').on('change', function () {
          $(this).next('.label').text($(this).val());
        });
	// Popup Form
	$(".signUpClick").on('click' , function() {  
		$('.siginincontainer').fadeOut();
		$('.forgetpasswordcontainer').fadeOut();
		$('.siginupcontainer').fadeIn();
	 });
	$(".signInClick").on('click' , function() {  
		$('.forgetpasswordcontainer').fadeOut();
		$('.siginupcontainer').fadeOut();
		$('.siginincontainer').fadeIn();
	 });
	$(".forgetPasswordClick").on('click' , function() { 
		$('.siginupcontainer').fadeOut();
		$('.siginincontainer').fadeOut(); 
		$('.forgetpasswordcontainer').fadeIn();

	 });
	$(".cancelClick").on('click' , function() { 
		$('.siginupcontainer').fadeOut();
		$('.forgetpasswordcontainer').fadeOut();
		$('.siginincontainer').fadeIn(); 

	 });
	 // Mapbox 
	$(window).load(function(){
	
		$(window).resize(function () {
			console.log($(this).width())
			if ($(this).width() < 781) {
					$('.mobilemap').removeAttr('id');
					$('.mobilemap').removeClass('md-modal');
					$('.mobilemap').removeClass('md-effect-3');
					$('.mobilelink').removeClass('md-trigger');
					$('.mobile-map-space .md-overlayi').removeClass('md-overlay');
					$('.listing-container-right .md-overlayi').removeClass('md-overlay');
					$(".mobilelink").on('click' , function() {  
						if($('.mobilemap').hasClass('map-open')) {
							$('.mobilemap').removeClass("map-open"); 
							$('.mobilemap .mapbilemap-content').css({"opacity":"0","margin-top":"-520px"});
							$("a.mobilelink").text("View on map");
						}
						else{   
							$('.mobilemap').addClass("map-open"); 
							$('.mobilemap .mapbilemap-content').css({"opacity":"1","margin-top":"0px"});
							$("a.mobilelink").text("Close map");
						}
				    });
					$(".claimformtrigger").on('click' , function() { 
						if($('.claimform').hasClass('claimform-open')) {
							$('.claimform').removeClass("claimform-open");
							$('.claimform').slideUp(600); 
							
							}
						else{
							$('.claimform').addClass("claimform-open"); 
							$('.claimform').slideDown(600);
						}
					});
					$(".quickformtrigger").on('click' , function() { 
						if($('.quickform').hasClass('quickform-open')) {
							$('.quickform').removeClass("quickform-open");
							$('.quickform').slideUp(600); 
							
							}
						else{
							$('.quickform').addClass("quickform-open"); 
							$('.quickform').slideDown(600);
						}
					});
			} else {
					var headertop = $('header').height();
					$('.section-fixed').css('padding-top',headertop+'px');
		
			}
			  
		}).resize();//triggcurrentColorer the event manually when the page is loaded

		$('.search-row').fadeTo( 600 , 1);
		$('.listing-sidebar-left .form-inline').fadeTo( 600 , 1);
		$('.post-with-map-container .form-inline').fadeTo( 600 , 1);
		$('.lp-search-bar').fadeTo( 600 , 1);
		var LogoHeight = jQuery('.lp-logo img') .height();
		var LogowithSpace = parseInt(LogoHeight,10)+parseInt(44,10); 
		$('.lp-menu-container .lp-menu > ul > li > a').css('line-height',LogowithSpace+'px');
		$('.lp-menu-container .lp-add-listing-btn > ul > li > a').css('line-height',LogowithSpace+'px');
		$('#menu').css('display','block');
		$('.spinner').css("display","none");
		$('.single-page-slider-container').css("opacity","1");
		
		 if ($('#map').is('.mapSidebar,.listingmap')) {
			 	L.HtmlIcon = L.Icon.extend({
				options: {
					/*
					html: (String) (required)
					iconAnchor: (Point)
					popupAnchor: (Point)
					*/
				},

				initialize: function(options) {
					L.Util.setOptions(this, options);
				},

				createIcon: function() {
					var div = document.createElement('div');
					div.innerHTML = this.options.html;
					if (div.classList)
						div.classList.add('leaflet-marker-icon');
					else
						div.className += ' ' + 'leaflet-marker-icon';
					return div;
				},

				createShadow: function() {
					return null;
				}
		});
				L.mapbox.accessToken = 'pk.eyJ1IjoibGlzdGluZ3BybyIsImEiOiJjaWxhaGZjNWgwMDB1d25tMm1uZThub2wyIn0.UF5krbL-hVDhMcARAZmDGQ';
				 
				var map = L.mapbox.map('map', 'mapbox.streets')
					.setView([51.495728, -0.108773], 14);
				var markers = new L.MarkerClusterGroup();

				var addressPointss = [    
					[51.495091, -0.087155, '<div class="map-post"><div class="map-post-thumb"><a href="post-detail.html"><img src="images/grid/post245x150-1.jpg" alt="post245x150-1"></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="post-detail.html">The Dorchester grill</a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> Brighton, The City of Brighton</p></div></div></div>','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADaklEQVRoQ+1aQVbbMBD9013YlJ6gUS9AOAHKCZoscRZNT0B6AuAENSdoukhYAiewOQHhAlU4QWEDu07fKLZxDI4jm5S2T14ltjTSn5k/kr5NemKuiNDBK1wMnMeB6ueHlvnI/3igdl3uU3dq+BUwZENGgaL8+Ol8XO9nQIodNw2u7oTLAHogTSPmI1LCKZ9aPrUSD3iOeI40JUNJf59aPrV8aq32wAqOzKRnFKilo0V3asru2937X7eyuyZA6hAPxNVzxfZlqeVq9zEikx9zEL1ngor31dzVUJ32+tS0iWHAfBMNPrTr2Ej75FMrBrDHhG68r+T3xi99ajQxIgCXUaB03QFzdq5JT01IwAEzjuOBOqpr1KWfnpgjIhwycBIHauTSd0mQmJqIAC1zFyA9As6aesdlMqlyw0A/DtS5S9+0rZ6YIRG+AXzHLWqTPjPb9MBzgN7+CZ5k/EgmEPfVrQuQ7tTsMTAioGdBEPWEElaKyYX6exyooYth17Z6asYEfHJNZZ2kUTYe8w2DevFA2YVyAcRWEZ4lUdkY6R/JaT3ZcamSaXVixgVE2Buocd6JmTimp0bC9ZWBOVrYdQ15VWQkhfGAKwLaDHyJAxVW9ck/r1p3iirfohQzZthC96XAWBD3iBJptlbJdQKyID4EzA4DMVroNwVTAHHNLeg6Np2AWL4sg5mD0U8J5ZIKSRHpgHAm6QSgNgix5QwkBYN7jInwUf4zY4w3OF6XnFI88AuHRLAV0BJ0C8M6kShuRco06iWOFD2+WHQ4lGqWTEhKnYC6KIJKJi/AZaFKzhJ8x0yjYoVxjWztiCxtAxZEHRF4KJvLBNBtPFDvltpNzE8ibNt7ixo/xhbCJlGoXbWqPKUnpkME+yKmTN5nxm5dTq0avxZH6hisGqjKSVXPq+yv5Mhzxl31qKoJrvvcAynzlI/IujlU0s6nlk+tgsjcMKOy7j61/uvUym1RrktE5p1/YouSCQfP6FGZPgZsRMB4MY7oiTkgQphIME+EgyUBgyFb95OXInqjbXxyUpRUkVOeCBNWo2XG57LzxaNoBlgRgxESYRYF6rIpKOeIlH6/JWcMolGVMmiVS+YwPbvkAYioUfwOa12AzkCSN0M7yQCX1rOLD8ScpE0BBEDkWInkXmLvSZFwAPLsG6u0/288R19KOGbU8gAAAABJRU5ErkJggg==','1'],
					[51.499449, -0.097283, '<div class="map-post"><div class="map-post-thumb"><a href="post-detail.html"><img src="images/grid/post245x150-2.jpg" alt="post245x150-2"></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="post-detail.html">3 Bed Detached House</a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> Brighton, The City of Brighton</p></div></div></div>','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACVElEQVRoQ+3YvXnbMBAG4O9Ku4kyAiaIvAG4QVJGKiJvYE+SbGClEFtlA2EDyxNghNhNVCIPIEKmGJIHKgDFAu5s0gTeOxz+CAl/5FbPcMAWBjPcolBfxGuq5ijVhx3iD3ZEmNs2jME+JSYdZKOfjwjzdgwWfbAYtRR3KYKXBCI3+okIK4swhqRjkFEVZq2W4j42JjqkiVBLsbedlhs9T4mJCulC+OhzmKLUpi1Tu4Vg+8m+EDoEOEQI5uqQUASH8RCfgebvfUH974y8I9wUe+drgsvkcZjhuZqa3QQgS70m4NvoEFnqBwK+V525V0ux5gD153KjV0R4cv8PPKqF+GExaiFW9m+jZOSsEwaDEbVh9o5pfCc5JBaCwySFxEb0YZo1E63YUyH6MEWp1W4h3O4gCiQ1oguDW/wK2TUHTb+y1J8J2Fazy08/q3BRuvS5H1KuPUKhvgrFfYuF2PkecNvxmQGSI06ZqdYUY2DPMAW3PvVCroW4BNMJuTZiKKYVMhXEEMw/kKkhQjFnkDrCfiDkHMDNJjGf+5W+bQI4QZqXBVOGVJvUs8sMB2kgXgB8mjjE9bF+M0NNhLmBpAN+TxlibvCRDrCL5AlD8nRtgxeLsNuBIbvOmDXAfaveL5uAOoaq7cDcI4YeaLjGYz5vBthjDLBvXUcuyUjXxQEHGTIz9vUrQ5qRHprFoe9zQz56RkKHSoZ07DhyRnKNVBHINZJrhFuaLxwqeWjloZWHVn8Eco3kGsk1kmukMwKjHnUnebAKLI/RX2sLVu/BavQeBjbYBvkLODEBNn2o34UAAAAASUVORK5CYII=','2'],
					[51.496286, -0.101746, '<div class="map-post"><div class="map-post-thumb"><a href="post-detail.html"><img src="images/grid/post245x150-3.jpg" alt="post245x150-3"></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="post-detail.html">Photography</a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> Brighton, The City of Brighton</p></div></div></div>','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEXUlEQVRoQ+1ZTVrbSBB9xWrMJswJQs8FhpwgrRPELCMvQk4QcwIyJ4g5AWRhZYlyAjcnIFxgmpxgzCbJipqv2mohbP20bIn444MlVv+8rupXr14TnsgfPREceAaybZHsJSL6wu7hFz7gDkMiHLQBzYxv2EGKP3BqDtU8dGznQByIH5i1BbC8YQdoF1EomO6BJHZCwAeAb5loaN4qE3qq8p3+YjUxpwC9YODUxGocMr4UiE7sjABdNQEDqYnV4fLv+ovdJ4aV/zPjlRmpbyGbWJlnag+IcOXmISjzVt00zVMKJEosNw2cxWplrJ7aj0Q4YeCzidVR0xx1v+vEnhPwjhn/mJH62DTX6mYS+46AcxlYttkQkAwcmlilTYs3ABkScFF6d0rIIAeip/YAhAsC9rPB17NYrTBOlFjJ+dc1mygdtw6oKLGSmn+XjWXGHIT3/sAcEAcCjmn2mPEVhPNNT3SdjYeMETLAHcZEeOPuUBZ9cnT5E1cSidB8DFmw72/01B4R4cxFZheK/AUFcDmLVSVTbbIxYTPc4Q0IQzD2fI1xtYIwByPFDr6GsFNxH3pqU4mMBIB8zhcvqAsf48wNkjxsWQv8Ytk8J3VUXtwYAwaM41DaXtQczORAJCL/ubsxwJ++iurEWn/pGbgxsVJtI6IT+4mArJjxLYOExVIwbvxGM4IRchkSeChFMMv7iYnVcciankUlIq5mFKk2Sv6d+0nB/H02+sszWePc2Z0T9tOuujNNsItJk9TIpM2YiMdZVTcY4LBpXC0QF7I7drWEd+ioTWrdqwIHQoemSZ6Orqqz8WBMrKK606sF0njsFR/oos4a0H7TaVatI9Ghn3wTorc6B+IvXpZOrSOxDEruTx6ZGt3WPZBMaHZZiwrazVSlWKdA7lUv3/IGKbUSlWKKVajgboEkdkzApy5U7woYr4KBYxOryfLvnQIpK6rrEkYJEK+CS5VHp0D01F6J7NikmapksKzJkuptRupV3xFZKapdRUTmKSvafv5OI1K3UBeAHhOIa4D6TC0AVY2ey4ZSrdX2FJ/OZX8q9OsLou/W1tVYZQURP2Bdm/EYBTFjFmdK9CFR6rrXTllLgCxEHq5cVICorXwvE40FQ6TS7OsciAOTyfhNUyxrshYp1WCb9gJkKcXWikzRmgoxRHoDsmiKIP253Jc5djAJeSIoPEWIZ7UnIHiAYRNx9AYkb1nzbtEZ2hKdlICUge9F84GAlwwMnQGxACCmW7AL3zuQAgGI9K6zWIv3/JIZ4zZEUQSykBeEqI3J0Kb6O4OOxfJxJy+n7v3cawBzeaYAIW1t0GW+lsiX3GmsevNos+HH/tY7Ns5pfOBYMN6bkXI20Lb/ee/XmR0D2l+48YnN3yIkMgRMZrG63EYwUWJfMyCttaTpvRtfYBmxLc9zh3EbUTzYk7Nhjx68j+RgFi+ywuOCtvSBZQvwXbO490s2bOevur8L6DOQ33XyVes+R+Q5Ij2dwP9TYAKAKNjkVAAAAABJRU5ErkJggg==','3'],
					[51.498293, -0.110157, '<div class="map-post"><div class="map-post-thumb"><a href="post-detail.html"><img src="images/grid/post245x150-4.jpg" alt="post245x150-4"></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="post-detail.html">Hotel Rammizine</a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> Brighton, The City of Brighton</p></div></div></div>','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACWUlEQVRoQ+1ZvXnbMBB95zKN5REwQZQJAk0QuwxZRJnAHsEj2BNYKciUsScQNrAzAUZI0qQ0/IEy80E0IQIgKOhTwE68H9w7HN7hKMLAw79LrlXEZyb6VFPL25hoEEgt1w2Qgi16gSSW7wTCKznHCT5BYU7AuVZWwD0IT3jGQ2OcUC5K9tRNqnVHeC1XBHwxDRTwTRRsqd+lljsD0YqLWmrk71+Nfq4LNjcdpJabsew8I7ySvwjqz6a06FSU7Mw0Ti13AsJ/yBn+4kqU7LoppUpe4x1uxAX73fxOLHcqreawA5cAzokwG2K2fciVgk7gPYBbp8POK7kkwt0+ggtdQyl8FSVbWUtL7wQRHl/p9hYKqz70oQGMsWuqhLCkTaVAKXwwY9s67C2lKr19Bbsas/BUtryWNxqM2Qr0WttANEsRZl20UwUV4retGn1mTBbdArKopdLO1wUbvLqEBBHLpi9OJyC8ko9E2GqGbVD66iIKdtHpL5PqBwNpDW0Z7e7gvvTNdZ12xFZyh/T+/wRyDKWlp8OPfUCUwoMoWTOztM+illPrv2FXp9KKRZux/ASzVqwAYvkJBpL7iGULYvWd3EdsmTyE906sta8rh2+fCimtqfuCr//cR2K1gCh+ch85psPeOwLneaTzTSBGQnIf+ffxIc8j4UwcTL/hS05jGQwkzyN5HtlkwIeWvej3EOYOG0AvIGPmBZcMj/HvCmT0vDAAZLR/JyC+JOpT276+R5WW72IZiGPGghuio3/z26/XtT+G/+M+I74ZSqW/63OQlQZTBWtbt/t3xgvz/SNvFqVEmwAAAABJRU5ErkJggg==','4'],
					[51.505077, -0.113366, '<div class="map-post"><div class="map-post-thumb"><a href="post-detail.html"><img src="images/grid/post245x150-5.jpg" alt="post245x150-1"></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="post-detail.html">5th Generation Laptop</a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> Brighton, The City of Brighton</p></div></div></div>','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABYUlEQVRoQ+1Y0VGDQBTcTQNqBYoVxA6wAv01aUIr0SbUX60glJAKgqnA0IDrQEYnAnKTOcgdmccv947dt3vvmCVG/nDk+GEEQitoCkSpQPqaX0B4hJCSOA0JUsIGRAbiIbtLPupYGhYqwVPIQ4Ju+3ZFZIKrOokmgef8jcRNbARKPBLes3lyu4utjcBnaNv817xShWyenHUSuH7JtbtgMUuCTioXngY4V8GhreXCYwSGVsQUsEPs6TGzkFnILNT9Z2AXmadDnOU2hWwKOU3SvcAsZBYyC+19ka02AE88GzdQuYrF7PJPTnWEsUqkwRagQuTUGWyV2lfR4heeSKXh7aRCYoYJ7lujxfpFMZB5B9uWR0Ag5qnjEE5aM404zHX5rgx7uY3TtQx/WF1w6++3U6m6B36nDjQFeb7vVgddL60FLn+mUtDkuQ/iRqCPLvrsYQr4dK+PWlOgjy767DF6Bb4BAAIIyCXX8RcAAAAASUVORK5CYII=','5'],
					[51.502893, -0.117325, '<div class="map-post"><div class="map-post-thumb"><a href="post-detail.html"><img src="images/grid/post245x150-6.jpg" alt="post245x150-2"></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="post-detail.html">Takai Car 2000 </a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> Brighton, The City of Brighton</p></div></div></div>','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADRUlEQVRoQ+1YzXnaQBB941PkS0gF8VZgXIGXCoyPgYPtCkIHcSoIqSD4gHzErkByBRYNZJ0OnIu5efLNIhHCh5C0K4jjaC/wgTRv37z52yW8kkWvhAcaIi9NyUaRRpEteaAJrS051tlso4iz67b0YmVF9Ni0AXwE0CVCy3VfDNwAuIp7Sj69VyUiemzOifDNG3XJADNGcV9d+NosTURfmwM8415UYOArCMP4g3pYt4FOaFh+j3pqrX09MS3McE7AF3mOGRdxX418yJQnEpqIAM2M27ivuptAi4hk72YKM+MRQCfuq8SVTCkiv0OKf3JAB/GpEuDcVZaIGNChGRFwxowE++gU2c4DLSRiw+AJxoZUyRCoRGRiWjRDDODQJ1+KiaQeA3AX9ZQuI30VIlaVsWkTcQzQ27LOWt3HRiL62mhiRDYhCSovuVeNViWSkrEV0TVf/iBie8QeTsCQXtGS5C6jwDaeYSAGQ6piQoSEA0w35Y8lkpbWCZEl8GKXVYsglS0hRhz11W22WVpOZjD/YKIbSAXZwwPeIHGtIj7esI4FpG9pEA5IvgPHqzZtpYPtQQnp0AxpPnLccYDu39h4WdLLBAl8DqL3VqV9KNJjI926zYwjn4ZUdjN1PqfH5oYIJwxckUuFqXMzPrbmZRv3EmL/NBFxQibE/0NEh+YMjEFWmm2lkMm3p658wiLv3ap4hYqkZTnK6y2+Q94qEVe8YiJpNUt7ywCBHeyAGTQxD9PSl8R9dVSHMln1rIq3kchibJcGuU/t1d4i3qMnTlIy3ociH7wlIt8f06lz0UcWvQU4zTtT69B0CZhUmYpz8yLrZRXxsvIrKkpDvCTCp3UgHOBdXqeXLksMU0dYZTZc8ZjxeT40Cpm05S9vzNWwK7nKeBL6ILm8uFx7HumERhL7mCtK7UqgDrz1txzptQ8DDwhwtC7ZMcO9TKWuJ7pl0otLCA+83BNiJzQyIh8KGWIMeA9TAadnHDJBJmYZradRT9VyhvHFyyViS2x6KZATMlMOoOsa+33xii8f5mE2EHVSQlNmDH0v1DaUYie8QiKuCbzr9xoiu/Z4EV6jSJGHdv1/o8iuPV6E1yhS5KFd/98osmuPF+H9AkKsIa0CLZEmAAAAAElFTkSuQmCC','6'],
					[51.507194, -0.129685, '<div class="map-post"><div class="map-post-thumb"><a href="post-detail.html"><img src="images/grid/post245x150-7.jpg" alt="post245x150-3"></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="post-detail.html">Suny Mobile for sale </a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> Brighton, The City of Brighton</p></div></div></div>','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACCElEQVRoQ+1awVUCMRD94QYnSzBWoBW4VCAcXQ5qBWIH2IFWIB5Yj0IFmw60g0AHevE6voRdRR7LMtkFfLzhCEMyf/6fCeGvwoG81IHggABxTEYjewvgWimcVmGWgCmAMZq4N139EbJWECPRqz3CF9KqAJYTJoID0TY9/c4FEwZkZN/mIOiTSPXRwji0kp7ZFxspwgDAuQfTguauxwYSjayT0lMGIgqpXlG124k1HgzwaGLd57ASAsSzQcCdifUDZ7Oy2IyZ1PWMibUui1/8nA2knVhyC5CCNpd6Gv3IjLPt31gCxibWXfduvn4aa1ZurOBVG+Ubh8OYfzNPfO9AuBXMgS8nLkC4kqirgsJIQeVra3bpkWycy9TKpCbSqioFmVoytZYqIAdigSTqKoxMLZlaW+o5kZZIS6S1/gooPSI9Ij0iPbK6AnX9yJOLlVystjRl/q20uH+9LsdXPZfqONm9y1QFCBEmpqc7e/VHygBEib1yMSbWz2WxuwYy9/kIN6anh+uS+/UbgY3i56ZoCqJZ2js53gR4HsOWVp6cd18bOHP2W9GGbCCJTRUQ7cQMzejPWXG++AANTIoAOTBeWmvYayfWObkDB8K7xU11vHV72iWVPTAwVAoXHPrLY71vH2R5s6W1mExW7U5lQEQzUso9wjHgMhHcI+VV3U9EJUb2k/LqXQ8GyDfcDKhRa+yP+gAAAABJRU5ErkJggg==','7'],
					[51.494902, -0.120741, '<div class="map-post"><div class="map-post-thumb"><a href="post-detail.html"><img src="images/grid/post245x150-8.jpg" alt="post245x150-4"></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="post-detail.html">Luxury Spa in London </a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> Brighton, The City of Brighton</p></div></div></div>','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACcElEQVRoQ+1awXXTQBD9kxsnQgV4KyAdsK4Ac4xywFQQpwN3gKmA+GBxTKiApYKECjZUAJy4MbxZbD/i7GqkjZB5ZHX0jFb/z/wZ7Y5MaLhs7V8BmIBhiXDY5Nu3jYEbMBwOsHTHxmnrU8zBXvhD/MAFAVZbYAg7AwtXmbOmZ8WJrPwVEY4A/s5MMxzAuWNzMwTozTPsyh+JGoh4BtBjBt66ysxSGO4QsSs/JcK7QOIRjdxL821IArvPEkJEuJLfmTBOySxG5JIIL5jx2p2Y86FJ2NpPAJyKrJkhQbwE8CRgApauMtMYphiRr1LYTDCDy6n2MwLepIInDcBVxrQiMq49i+PHykTr529lyL73I2L4ICHgzFVmsW46cwJON89N4boDdm9Ear8QwDH5jGsv7fd5U4DJbjvU7VgPnZE/wXbNOjOuaVz7awDPdm/eA5Eg6czr8z8jLU3Smr0QyZRA8jYt4pq9ZKRkJBEBTTqavUirSKtIq3kzW2qk1EipkVIjwx51tTe3Zle71nraON0M6xiQY+e5q8wyJvdM/wnJRLNhVpBNhAEZu8jBfxQDHEaawByET8HO4Ux9b//UyTSbyBY88xcGzWXaGH77CUvgOYieRhtQpv/voWB6epNNhBkfZDiWGtKtJ5KStTDduK+/BlSzqzXS94svtZ4GVLM/HCKZXahrlytdayPVpLRK10p8itC6nFbMmv3hFHtpvx0joElHs///0uoY0N7c+9w0br8O9Yau5UKyX3MnJmznd6/O0srdC7XEmu1WiHRNbXaoW95YMlIy0lIqXd16l1ZXAH37t/7nQ0P73dv7ZYOp6T3zC1HtqHqb2BmDAAAAAElFTkSuQmCC','8'],    
					[51.506925, -0.096853, '<div class="map-post"><div class="map-post-thumb"><a href="post-detail.html"><img src="images/grid/post245x150-9.jpg" alt="post245x150-1"></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="post-detail.html">Dream Home </a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> Brighton, The City of Brighton</p></div></div></div>','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACVElEQVRoQ+3YvXnbMBAG4O9Ku4kyAiaIvAG4QVJGKiJvYE+SbGClEFtlA2EDyxNghNhNVCIPIEKmGJIHKgDFAu5s0gTeOxz+CAl/5FbPcMAWBjPcolBfxGuq5ijVhx3iD3ZEmNs2jME+JSYdZKOfjwjzdgwWfbAYtRR3KYKXBCI3+okIK4swhqRjkFEVZq2W4j42JjqkiVBLsbedlhs9T4mJCulC+OhzmKLUpi1Tu4Vg+8m+EDoEOEQI5uqQUASH8RCfgebvfUH974y8I9wUe+drgsvkcZjhuZqa3QQgS70m4NvoEFnqBwK+V525V0ux5gD153KjV0R4cv8PPKqF+GExaiFW9m+jZOSsEwaDEbVh9o5pfCc5JBaCwySFxEb0YZo1E63YUyH6MEWp1W4h3O4gCiQ1oguDW/wK2TUHTb+y1J8J2Fazy08/q3BRuvS5H1KuPUKhvgrFfYuF2PkecNvxmQGSI06ZqdYUY2DPMAW3PvVCroW4BNMJuTZiKKYVMhXEEMw/kKkhQjFnkDrCfiDkHMDNJjGf+5W+bQI4QZqXBVOGVJvUs8sMB2kgXgB8mjjE9bF+M0NNhLmBpAN+TxlibvCRDrCL5AlD8nRtgxeLsNuBIbvOmDXAfaveL5uAOoaq7cDcI4YeaLjGYz5vBthjDLBvXUcuyUjXxQEHGTIz9vUrQ5qRHprFoe9zQz56RkKHSoZ07DhyRnKNVBHINZJrhFuaLxwqeWjloZWHVn8Eco3kGsk1kmukMwKjHnUnebAKLI/RX2sLVu/BavQeBjbYBvkLODEBNn2o34UAAAAASUVORK5CYII=','9'],
					[51.507756, -0.111616, '<div class="map-post"><div class="map-post-thumb"><a href="post-detail.html"><img src="images/grid/post245x150-10.jpg" alt="post245x150-2"></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="post-detail.html">Buy now 10 shots </a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> Brighton, The City of Brighton</p></div></div></div>','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEXUlEQVRoQ+1ZTVrbSBB9xWrMJswJQs8FhpwgrRPELCMvQk4QcwIyJ4g5AWRhZYlyAjcnIFxgmpxgzCbJipqv2mohbP20bIn444MlVv+8rupXr14TnsgfPREceAaybZHsJSL6wu7hFz7gDkMiHLQBzYxv2EGKP3BqDtU8dGznQByIH5i1BbC8YQdoF1EomO6BJHZCwAeAb5loaN4qE3qq8p3+YjUxpwC9YODUxGocMr4UiE7sjABdNQEDqYnV4fLv+ovdJ4aV/zPjlRmpbyGbWJlnag+IcOXmISjzVt00zVMKJEosNw2cxWplrJ7aj0Q4YeCzidVR0xx1v+vEnhPwjhn/mJH62DTX6mYS+46AcxlYttkQkAwcmlilTYs3ABkScFF6d0rIIAeip/YAhAsC9rPB17NYrTBOlFjJ+dc1mygdtw6oKLGSmn+XjWXGHIT3/sAcEAcCjmn2mPEVhPNNT3SdjYeMETLAHcZEeOPuUBZ9cnT5E1cSidB8DFmw72/01B4R4cxFZheK/AUFcDmLVSVTbbIxYTPc4Q0IQzD2fI1xtYIwByPFDr6GsFNxH3pqU4mMBIB8zhcvqAsf48wNkjxsWQv8Ytk8J3VUXtwYAwaM41DaXtQczORAJCL/ubsxwJ++iurEWn/pGbgxsVJtI6IT+4mArJjxLYOExVIwbvxGM4IRchkSeChFMMv7iYnVcciankUlIq5mFKk2Sv6d+0nB/H02+sszWePc2Z0T9tOuujNNsItJk9TIpM2YiMdZVTcY4LBpXC0QF7I7drWEd+ioTWrdqwIHQoemSZ6Orqqz8WBMrKK606sF0njsFR/oos4a0H7TaVatI9Ghn3wTorc6B+IvXpZOrSOxDEruTx6ZGt3WPZBMaHZZiwrazVSlWKdA7lUv3/IGKbUSlWKKVajgboEkdkzApy5U7woYr4KBYxOryfLvnQIpK6rrEkYJEK+CS5VHp0D01F6J7NikmapksKzJkuptRupV3xFZKapdRUTmKSvafv5OI1K3UBeAHhOIa4D6TC0AVY2ey4ZSrdX2FJ/OZX8q9OsLou/W1tVYZQURP2Bdm/EYBTFjFmdK9CFR6rrXTllLgCxEHq5cVICorXwvE40FQ6TS7OsciAOTyfhNUyxrshYp1WCb9gJkKcXWikzRmgoxRHoDsmiKIP253Jc5djAJeSIoPEWIZ7UnIHiAYRNx9AYkb1nzbtEZ2hKdlICUge9F84GAlwwMnQGxACCmW7AL3zuQAgGI9K6zWIv3/JIZ4zZEUQSykBeEqI3J0Kb6O4OOxfJxJy+n7v3cawBzeaYAIW1t0GW+lsiX3GmsevNos+HH/tY7Ns5pfOBYMN6bkXI20Lb/ee/XmR0D2l+48YnN3yIkMgRMZrG63EYwUWJfMyCttaTpvRtfYBmxLc9zh3EbUTzYk7Nhjx68j+RgFi+ywuOCtvSBZQvwXbO490s2bOevur8L6DOQ33XyVes+R+Q5Ij2dwP9TYAKAKNjkVAAAAABJRU5ErkJggg==','10'],
					[51.489085, -0.094793, '<div class="map-post"><div class="map-post-thumb"><a href="post-detail.html"><img src="images/grid/post245x150-11.jpg" alt="post245x150-3"></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="post-detail.html">Cabet Bar in Brighton </a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> Brighton, The City of Brighton</p></div></div></div>','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADaklEQVRoQ+1aQVbbMBD9013YlJ6gUS9AOAHKCZoscRZNT0B6AuAENSdoukhYAiewOQHhAlU4QWEDu07fKLZxDI4jm5S2T14ltjTSn5k/kr5NemKuiNDBK1wMnMeB6ueHlvnI/3igdl3uU3dq+BUwZENGgaL8+Ol8XO9nQIodNw2u7oTLAHogTSPmI1LCKZ9aPrUSD3iOeI40JUNJf59aPrV8aq32wAqOzKRnFKilo0V3asru2937X7eyuyZA6hAPxNVzxfZlqeVq9zEikx9zEL1ngor31dzVUJ32+tS0iWHAfBMNPrTr2Ej75FMrBrDHhG68r+T3xi99ajQxIgCXUaB03QFzdq5JT01IwAEzjuOBOqpr1KWfnpgjIhwycBIHauTSd0mQmJqIAC1zFyA9As6aesdlMqlyw0A/DtS5S9+0rZ6YIRG+AXzHLWqTPjPb9MBzgN7+CZ5k/EgmEPfVrQuQ7tTsMTAioGdBEPWEElaKyYX6exyooYth17Z6asYEfHJNZZ2kUTYe8w2DevFA2YVyAcRWEZ4lUdkY6R/JaT3ZcamSaXVixgVE2Buocd6JmTimp0bC9ZWBOVrYdQ15VWQkhfGAKwLaDHyJAxVW9ck/r1p3iirfohQzZthC96XAWBD3iBJptlbJdQKyID4EzA4DMVroNwVTAHHNLeg6Np2AWL4sg5mD0U8J5ZIKSRHpgHAm6QSgNgix5QwkBYN7jInwUf4zY4w3OF6XnFI88AuHRLAV0BJ0C8M6kShuRco06iWOFD2+WHQ4lGqWTEhKnYC6KIJKJi/AZaFKzhJ8x0yjYoVxjWztiCxtAxZEHRF4KJvLBNBtPFDvltpNzE8ibNt7ixo/xhbCJlGoXbWqPKUnpkME+yKmTN5nxm5dTq0avxZH6hisGqjKSVXPq+yv5Mhzxl31qKoJrvvcAynzlI/IujlU0s6nlk+tgsjcMKOy7j61/uvUym1RrktE5p1/YouSCQfP6FGZPgZsRMB4MY7oiTkgQphIME+EgyUBgyFb95OXInqjbXxyUpRUkVOeCBNWo2XG57LzxaNoBlgRgxESYRYF6rIpKOeIlH6/JWcMolGVMmiVS+YwPbvkAYioUfwOa12AzkCSN0M7yQCX1rOLD8ScpE0BBEDkWInkXmLvSZFwAPLsG6u0/288R19KOGbU8gAAAABJRU5ErkJggg==','11'],
					[51.502741, -0.098484, '<div class="map-post"><div class="map-post-thumb"><a href="post-detail.html"><img src="images/grid/post245x150-12.jpg" alt="post245x150-4"></a></div><div class="map-post-des"><div class="map-post-title"><h5><a href="post-detail.html">5 Star Moon Hotel </a></h5></div><div class="map-post-address"><p><i class="fa fa-map-marker"></i> Brighton, The City of Brighton</p></div></div></div>','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACWUlEQVRoQ+1ZvXnbMBB95zKN5REwQZQJAk0QuwxZRJnAHsEj2BNYKciUsScQNrAzAUZI0qQ0/IEy80E0IQIgKOhTwE68H9w7HN7hKMLAw79LrlXEZyb6VFPL25hoEEgt1w2Qgi16gSSW7wTCKznHCT5BYU7AuVZWwD0IT3jGQ2OcUC5K9tRNqnVHeC1XBHwxDRTwTRRsqd+lljsD0YqLWmrk71+Nfq4LNjcdpJabsew8I7ySvwjqz6a06FSU7Mw0Ti13AsJ/yBn+4kqU7LoppUpe4x1uxAX73fxOLHcqreawA5cAzokwG2K2fciVgk7gPYBbp8POK7kkwt0+ggtdQyl8FSVbWUtL7wQRHl/p9hYKqz70oQGMsWuqhLCkTaVAKXwwY9s67C2lKr19Bbsas/BUtryWNxqM2Qr0WttANEsRZl20UwUV4retGn1mTBbdArKopdLO1wUbvLqEBBHLpi9OJyC8ko9E2GqGbVD66iIKdtHpL5PqBwNpDW0Z7e7gvvTNdZ12xFZyh/T+/wRyDKWlp8OPfUCUwoMoWTOztM+illPrv2FXp9KKRZux/ASzVqwAYvkJBpL7iGULYvWd3EdsmTyE906sta8rh2+fCimtqfuCr//cR2K1gCh+ch85psPeOwLneaTzTSBGQnIf+ffxIc8j4UwcTL/hS05jGQwkzyN5HtlkwIeWvej3EOYOG0AvIGPmBZcMj/HvCmT0vDAAZLR/JyC+JOpT276+R5WW72IZiGPGghuio3/z26/XtT+G/+M+I74ZSqW/63OQlQZTBWtbt/t3xgvz/SNvFqVEmwAAAABJRU5ErkJggg==','12'],
				];
				for (var i = 0; i < addressPointss.length; i++) {
					
				var a = addressPointss[i];
					var markerLocation = new L.LatLng(a[0], a[1]); // London

					var CustomHtmlIcon = L.HtmlIcon.extend({
						options : {
							html : "<div class='lpmap-icon-shape pin card"+a[4]+"'><div class='lpmap-icon-contianer'><img src='"+a[3]+"' alt='hotels' /></div></div>",
						}
					});

					var customHtmlIcon = new CustomHtmlIcon(); 

					var marker = new L.Marker(markerLocation, {icon: customHtmlIcon}).bindPopup(a[2]).addTo(map);
					markers.addLayer(marker);
				}
					map.scrollWheelZoom.disable();
				map.addLayer(markers);
			
		 }else if($('#map').is('.contactmap')) {
			 	L.HtmlIcon = L.Icon.extend({
				options: {
					/*
					html: (String) (required)
					iconAnchor: (Point)
					popupAnchor: (Point)
					*/
				},

				initialize: function(options) {
					L.Util.setOptions(this, options);
				},

				createIcon: function() {
					var div = document.createElement('div');
					div.innerHTML = this.options.html;
					if (div.classList)
						div.classList.add('leaflet-marker-icon');
					else
						div.className += ' ' + 'leaflet-marker-icon';
					return div;
				},

				createShadow: function() {
					return null;
				}
		});
			L.mapbox.accessToken = 'pk.eyJ1IjoibGlzdGluZ3BybyIsImEiOiJjaWxhaGZjNWgwMDB1d25tMm1uZThub2wyIn0.UF5krbL-hVDhMcARAZmDGQ';
				 
				var map = L.mapbox.map('map', 'mapbox.streets')
					.setView([51.516576, -0.137508], 14);
				var markers = new L.MarkerClusterGroup();

				var addressPointss = [    
					[51.516576, -0.137508, '','images/pins/lp-logo.png'],
				];
				for (var i = 0; i < addressPointss.length; i++) {
					
				var a = addressPointss[i];
					var markerLocation = new L.LatLng(a[0], a[1]); // London

					var CustomHtmlIcon = L.HtmlIcon.extend({
						options : {
							html : "<div class='lpmap-icon-shape pin '><div class='lpmap-icon-contianer'><img src='"+a[3]+"' alt='hotels' /></div></div>",
						}
					});

					var customHtmlIcon = new CustomHtmlIcon(); 

					var marker = new L.Marker(markerLocation, {icon: customHtmlIcon}).bindPopup(a[2]).addTo(map);
					markers.addLayer(marker);
				}
					map.scrollWheelZoom.disable();
				map.addLayer(markers);
			
		}else if($('#map').is('.singlebigpost')) {
		
			 	L.HtmlIcon = L.Icon.extend({
				options: {
					/*
					html: (String) (required)
					iconAnchor: (Point)
					popupAnchor: (Point)
					*/
				},

				initialize: function(options) {
					L.Util.setOptions(this, options);
				},

				createIcon: function() {
					var div = document.createElement('div');
					div.innerHTML = this.options.html;
					if (div.classList)
						div.classList.add('leaflet-marker-icon');
					else
						div.className += ' ' + 'leaflet-marker-icon';
					return div;
				},

				createShadow: function() {
					return null;
				}
		});
			L.mapbox.accessToken = 'pk.eyJ1IjoibGlzdGluZ3BybyIsImEiOiJjaWxhaGZjNWgwMDB1d25tMm1uZThub2wyIn0.UF5krbL-hVDhMcARAZmDGQ';
				 
				var map = L.mapbox.map('map', 'mapbox.streets')
					.setView([40.6700,-73.9400], 14);
				var markers = new L.MarkerClusterGroup();

				var addressPointss = [    
					[40.6700,-73.9400, '','images/pins/lp-logo.png'],
				];
				for (var i = 0; i < addressPointss.length; i++) {
					
				var a = addressPointss[i];
					var markerLocation = new L.LatLng(a[0], a[1]); // London

					var CustomHtmlIcon = L.HtmlIcon.extend({
						options : {
							html : "<div class='lpmap-icon-shape pin '><div class='lpmap-icon-contianer'><img src='"+a[3]+"' alt='hotels' /></div></div>",
						}
					});

					var customHtmlIcon = new CustomHtmlIcon(); 

					var marker = new L.Marker(markerLocation, {icon: customHtmlIcon}).bindPopup(a[2]).addTo(map);
					markers.addLayer(marker);
				}
					map.scrollWheelZoom.disable();
				map.addLayer(markers);
		}
		

	});
				
		
	// Autocomplete
	
    $.widget( "custom.combobox", {
      _create: function() {
        this.wrapper = $( "<span>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );
 
        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
      },
      _createAutocomplete: function() {
        var selected = this.element.children( ":selected" ),
          value = selected.val() ? selected.text() : "";
 
        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left lp-search-input location_input lp-home-locaton-input" )
          .autocomplete({
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" )
          })
		  .tooltip({
            tooltipClass: "ui-state-highlight"
          });
 
      },
 
      _createShowAllButton: function() {
        var input = this.input,
          wasOpen = false;
 
        $( "<a>" )
          .attr( "tabIndex", -1 )
          .attr( "title", "Show All Items" )
          .tooltip()
          .appendTo( this.wrapper )
          .button({
            icons: {
              primary: "ui-icon-triangle-1-s"
            },
            text: false
          })
          .removeClass( "ui-corner-all" )
          .addClass( "custom-combobox-toggle ui-corner-right" )
          .mousedown(function() {
            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
          })
          .on('click' , function() {
            input.focus();
 
            // Close if already visible
            if ( wasOpen ) {
              return;
            }
 
            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
          });
      },
 
      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children( "option" ).map(function() {
          var text = $( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this
            };
        }) );
      },
 
      _removeIfInvalid: function( event, ui ) {
 
        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
 
        // Found a match, nothing to do
        if ( valid ) {
          return;
        }
 
        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " didn't match any item" )
          .tooltip( "open" );
        this.element.val( "" );
        this._delay(function() {
          this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
        this.input.autocomplete( "instance" ).term = "";
      },
 
      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      }
    });
	
    $( ".comboboxs" ).combobox();
		$( "#toggle" ).on('click' , function(){
		$( ".comboboxs" ).toggle();
    });	
    $( "#comboboxCategory" ).combobox();
		$( "#toggle" ).on('click' , function(){
		$( "#comboboxCategory" ).toggle();
    });	
    $( ".ui-autocomplete" ).autocomplete({
	  appendTo: ".input-group"
	});    
	$('.custom-combobox-input').autocomplete({ minLength: 0 });
	$('.custom-combobox-input').on( "click", function()
	{
		$(this).autocomplete("search", "");
	});
	
	
		  
	// Location Placeholder
	$(".location_input").attr("placeholder", "Your Location");
	$(".comboboxCategory .location_input").attr("placeholder", "Food");
	$(".postSubmitCat .location_input").attr("placeholder", "Chose one or more than one categories");
	

	
	// Popup Data
	$('.md-trigger').on('click' , function(){
		// variables
		var LPtitle  = $(this).closest('.lp-grid-box-contianer').data("title");
		var LPreviews  = $(this).closest('.lp-grid-box-contianer').data("reviews");
		var LPlattitue  = $(this).closest('.lp-grid-box-contianer').data("lattitue");
		var LPlongitute  = $(this).closest('.lp-grid-box-contianer').data("longitute");
		var LPnumber  = $(this).closest('.lp-grid-box-contianer').data("number");
		var LPemail  = $(this).closest('.lp-grid-box-contianer').data("email");
		var LPwebsite  = $(this).closest('.lp-grid-box-contianer').data("website");
		var LPprice  = $(this).closest('.lp-grid-box-contianer').data("price");
		var LPpricetext  = $(this).closest('.lp-grid-box-contianer').data("pricetext");
		var LPdescription  = $(this).closest('.lp-grid-box-contianer').data("description");
		var LPuserimage  = $(this).closest('.lp-grid-box-contianer').data("userimage");
		var LPusername  = $(this).closest('.lp-grid-box-contianer').data("username");
		var LPfb  = $(this).closest('.lp-grid-box-contianer').data("fb");
		var LPgplus  = $(this).closest('.lp-grid-box-contianer').data("gplus");
		var LPlinkedin  = $(this).closest('.lp-grid-box-contianer').data("linkedin");
		var LPinstagram  = $(this).closest('.lp-grid-box-contianer').data("instagram");
		var LPtwitter  = $(this).closest('.lp-grid-box-contianer').data("twitter");
		var LPuserlisting  = $(this).closest('.lp-grid-box-contianer').data("userlisting");
		var LPposturl  = $(this).closest('.lp-grid-box-contianer').data("posturl");
		var LPauthorurl  = $(this).closest('.lp-grid-box-contianer').data("authorurl");
		var reviewbox = '';
		var LPnumberCondition = '';
		var LPemailCondition = '';
		var LPwebsiteCondition = '';
		var LPpriceCondition = '';
		var LPdescriptionCondition = '';
		var LPuserimageCondition = '';
		var LPusernameCondition = '';
		var LPfbCondition = '';
		var LPgplusCondition = '';
		var LPlinkedinCondition = '';
		var LPinstagramCondition = '';
		var LPtwitterCondition = '';
		// Stars
		if (LPreviews == 1){
			var stars = '<span class="reviews-stars"><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></span>';
		}else if (LPreviews == 2){
			var stars = '<span class="reviews-stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></span>';
		}else if (LPreviews == 3){
			var stars = '<span class="reviews-stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></span>';
		}else if (LPreviews == 4){
			var stars = '<span class="reviews-stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i></span>';
		}else if (LPreviews == 5){
			var stars = '<span class="reviews-stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>';
		}else{
			var stars = '';
		}
		if (typeof LPreviews && LPnumber && LPemail && LPprice && LPdescription && LPuserimage && LPusernameCondition !== typeof undefined ) {
			
			var reviewbox =	'<li class="reviews"><span class="reviews-quantity">'+stars+'('+LPreviews+')</span></li>';
			var LPnumberCondition =	'<li><span class="phone-icon"><img class="icon icons8-Phone" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEbElEQVRoQ81a4XnUMAy1vEC7QekEwASUCWgnoEzQY4FE9gLQCWgnoJ2AMgF0AtoJgAUivpdPyefzJU6cC5fcv/Z8iZ71JD3JJpP4MPO5iJTGmFfGmCcicsx8k/rNUt9R14uZ+VhEPhljLuPviegtMz8sZXDfe3eAKIhv8IKI/LXWMjN/ZuaNgoNnXjPznzWB2QLCzDAeIOCRR2vtJTP/bAwuiuInEb00xtw55y5WCaQDxFm868z8QkR+AQARXTDz3VrA1B5RA3+oJ26ttZs+6hRFwUSEBPCHiE7XQjGKYuLee38+tMsNxUTk2nu/GVp/iO+pKIrPRHSlMbFDp56shliCB0GxVWQxKssSnH+Ra1BAsVVkMQAR7KxzrrOmpGixJoqBWtjREw3cpxw+a6ZbBcUA5IGI3kxNpyHFnHOnORsx51oAqdPpPhmooecUr84FBum3yUBPU3ZU0/fvqXE2GxA8KIiT7FTaaDAR+e69P5vLsNzn1JkqoNet935H8fY9VL2B9H2cm75zDR1a30gUiMSaHjk8DzZgUW/UdgfK9oaI3ovIKK9EAjKbkkM7nPt9CyQyDP1GK9+7HlqW5VdjDDrIUcBzDctdv1XNg5rw4Jx7m4iNUGtBAWcV0lwjx6yPG6vjqqpQ6Y+I6CM6wx7ROGrdGAPmWtPV6oIuoA36DVCsc7d1MIF1q1DAnUKxKIo7InpnjElSLGqyEPDJuJpr97ue0ztFqaoK/fmJiDjvPfcZURRFne2MMVgPMIsMJXqlOzOf6SAiSR0UxaqqIDwxlFgMTLIHiaiTipfFwQw2U0G8JHcbdUjpeLSEZwaBRNRJzrOgpJVmAAO6YWR0kJgZBIIgj3b7xjn3IVUsAzAHi5lRQBRMu9upYhmvPRTNRgNRAy9F5IsWwQ+pyXxEs9GeAZUx1cmtSVlAJoBBAkBxbVIzwHcWTVUKV8aYpjmDVML6UZP/bCATwISpGbIHCaA1TusVRrB93SUGiDiXSSaNSUAmgoFBUABGRNhae6uHSHVHqkcYmDnXB0lBDcOfg96ZDCQXTIdxbeKDDLLW4gxma9c1ziCBQE18er2zF5ApYEAljZsjEbnXyX+ynxnjnb2BxGBEZOO9v04p3SmZacg7swCJwRhjkkVzHznf553ZgDRgqqoCjyFRkHaRPmeXKLF38J5ZgfRUdaTb/9LTbx1t7OPmhN4KC+FO7Zjzne3cec6Hhs9S1YzUiZa5rh3eezfn+4Jx7ePs1IoNjYIT0h5xszfVwlNoqIX/DkTjpq0dmM6od5Ipeih96xkmjsvrAeFBgCgYaK6Watp4YXaWNXmJTqFxqaE+wD0YkGaHoXI1RZ/o/wAOonAU3cqyRBuBduLZWvuqSe8HBxJ4Z6MXDxqMqDvXfbK9444MPNF6cxEggXeQpnH0V6ti/cAzdyLyYK19hKdU6uO2UnPRZwsEfrcokAAQusLLqqrgpYZyO/GulxrOu2i4CiBR/cFsANdI0GjhIgOmnc/wkl656pQ8/wC3pFkyvejV7AAAAABJRU5ErkJggg==" alt="phone-icon" ></span><span class="phone-number">'+LPnumber+'</span></li>';
			var LPemailCondition = '<li><span class="email-icon">@</span><span class="email-address">'+LPemail+'</span></li>';
			var LPwebsiteCondition = '<li><span class="website-link-icon"><img class="icon icons8-Globe" src="data:image/png;base64,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" /></span><a href="'+LPwebsite+'" target="_blank"><span class="website-link">'+LPwebsite+'</span></a></li>';
			var LPpriceCondition = '<div class="popup-post-price-container"><p class="popup-post-price-line"><span class="popup-post-price">'+LPprice+'</span><span class="popup-post-price-text">'+LPpricetext+'</span></p></div><!-- ../popup-post-price-containe -->';
			var LPdescriptionCondition = '<p>'+LPdescription+'</p>';
			var LPuserimageCondition = '<div class="user-thumb"><img src="'+LPuserimage+'" alt="user-thumb" /></div>';
			var LPfbCondition = '<li><a href="#"><!-- Facebook icon by Icons8 --><img class="icon icons8-Facebook" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADEklEQVRoQ+1a7XHbMAwFNEE6QZIJmk5Qd4N4gmaDOAtQEBaoM0HTCepOEGeCuhPU3aBdgOiBJX10LFmMYsl0T7zLj9i0xAc8fEgPCA3LGPMREScAcOX/mrYO8fkKAFYismDmb3U3xOcfEtG1iHwCgIshTtjhHmtEvCOiRfzbLSBlWSqAmW4QkV9FUcwBYElEapGjLSJSVkystTNEPPcHmVdVdRcOtQFijJkj4q1+4REriOwWEc08Y9TY98zsDO+AeDp99SDeHdsDbdZTD4nId3/eqdLMASnL8qfGRM6eqInl4Jl1VVWXSEQ3IvJZY4KZcw3wWicZYzTwzxFxisaYB0TUVKuZIMu4aKJaiBcR+YJlWSrXrhAx+9iooVeIlZUCEd1QVdVOTWkLuhy+D+c/ChDfNVz7jiGOyyUArEVkVRTFU0r2PAoQnzY1zacmFZeR9nl+cCAexCMAnInIU1EUDwCwIKLf4aBEpL3dhbV2ogkohfKDAwlJRTMMM9+0xVdq7A4KJHQOL6lVWQLpUqtyBbJExPeI+IGINDNtFhFpzJQAoFlsJwm0lYVBqbXPusFbTTFzMkA2Fq3xVltC8A2vK+iDFMR9HkmNhSZQ2VAreyDhgLEl6/hety/+DSK+iYvmc8/07pFDATl6sL+GMtqqiMijtjLMrG1L4xrMI20WrTuhMYYQsUxpZ3IH4p5aRaRiZjpljzR2AicZ7Ih4SUTrLDzSNf2KyB9mPmur7r3HSHyAsbK3uePfy8Wx10qw0/aWkVoJJhuplWCknS0jtRKsNlIrwUgjtV5jpP/n5YMxZoWIb/sUevrKWkEUFZEfg0hvPQJxgqiT3iJpulWL6MLh+CXavrcoXR6JIzV66uS2SB3tRRDtwyOREOrU6EEGBg4NpHFgwHtlM8IhIjNmvu9Kpabn6kNQyxhzi4hORt8Z4Qg3judRvCg5TxUlU56ruwJRD1hrVZbQuRMnPcQg9P/aMSdrrXonTOEcyjEHuY6fWprtHXOK76TZzFrrJGStMwc5RceLaJ3QwbOiKFQ83ZrTCpf8CzG2NErUDo89AAAAAElFTkSuQmCC" alt="facebook"></a></li>';
			var LPgplusCondition = '<li><a href="#"><!-- Google Plus icon by Icons8 --><img class="icon icons8-Google-Plus" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEh0lEQVRoQ+1a4VnUQBDdWQpQKhAqECsQKxAqACsQC2Azuw2oFXhUIFagViBWAFQAFkDG762z+fZCcknOSy5+n/kDHLlk3s7szHszS6blYuYDETkxxhwYYw7b7pvo82/GmCsiumDmq6Z3Uv1DBfB+Bsa3rdE3InpXB7QEhJmPROSTMeapiPwyxiystZfMjBXZ2sXMh2VZHhljTonoiTHmnojeMPNlMqoCwsynCsKIyIW19oyZ77dmfcOLmflpWZYfiAghb4joOIGJQJh5T0R+wBOKdDEnAA3hnxYdnnnBzDcRSFEUX7En4IkQwumcQSTbnHOXRPTaGHPpvT8m9cY19oS1dm9u4bQiqyLMbrBniGifnHOIubci8jGEcPYveCPzSmU7gCCdvSSiV9vOTkMXEdlMRL6KyHcqiuIOm3zoQ2Z2/z2AyMyMWsucCoj3/lGVX+uJE38pOeI/kIkXvvV1/z0yF08kO/7aI86510QEOrOnmqURI3K8tZbHqlFrA9Ei9EkpzQdjzE2NYgMQRNA70O02IbQpz64FJFF9rHIIYUk1QpCVZQmWAL2Aa+G9f7Mpg9ueMxhIIpeqAxrpDDOfiQjUZbymoD2DgWS02awqns45MNJnACIiX0IIUHajXYOB5FSmA0hkpGr5jfd+fzQUf7RUpFi9KntimVnI7LbpFtX9n9O9Y1OfvwVSaeX6auegm5LCpr0zCAhenofWKklcA+JDCNzH+DoL7+vJwUCcc4vUvdCMBNH/qFmWpehB0nkyINqKiRpZVxhFD2m4ahnhHnRjRGTXWns4pBhOBgTGo5aUZYnuxXMFAxALfGatjQ00EbnF72jR9AmpdM+kQNJLkZnKskRlR18YvbAEDEWwMeS6QG0FSG7UOul2XXndlAAGb/a2Fc1brZoE0GAGmWy95goE+wYbPyUBAFhJGGcH5Pz8/CWsttbCA9gv+fUoq7Vt7K79s4olrBVamrVOiAgZCoOgW+gRfRF+HtU80wqmbvxkm905VxBRrNIi4q21i3qKVU2CwlllMdzbp7pPAqQoCgx/Ype+K71q4YTAqmqN9363K3xGB1IbAPVqdCsYhFXUJeiWdxXI0YEURXGtDYZBii9fgC4v1kkp/t44acxXaoh0zTrlv0IIozXJe2ct5xzGW7FG9N24ysuifh97ClYBSYa2ubJG3wEKjLdx1p1xMbBgzC32x5yCKdu+Q2uqc9DTQN/vRYSttRjeP5r6akjBEwAxiMp3Zbb6/5cGPX1Gb1of0FSIlVwvgLgSkTiDJyJU9th1nGq8nduOYShejNE0wgZpsnW2roN71JODWtFDhb+y1gIUDhgM0iJDPaF7EOGLjAoZ8SIOd9IcsYvsrfPCsb6TinRqcFQHBhKDRfyHEPxYBmziuYkuaf/5oDowoK7COZTUjwJfgq6Y3REObckmurR8hCNLm5CwABEPriQ9vrOz83NboJA1Hx4enqeeQDrwY609bTxUk4GBUAKYPENtIiI28gydtwDEUkJpneRqyo0ZSrNUrgA3YlSfh+hxKxRgZEVIh8Zi/BvU1cKW0t95DwAAAABJRU5ErkJggg==" alt="google-plus"></a></li>';
			var LPlinkedinCondition = '<li><a href="#"><!-- LinkedIn icon by Icons8 --><img class="icon icons8-LinkedIn" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEBUlEQVRoQ+1a7VEbMRDVqgHoAKgAUwFOBTEVBCoAGtCt1EBMBZgKMBUEKohTAaSCkAa0mXeRPPL5PmQP3MGMb4Y/Rnfa1dt9+yVSDY8x5hsRjZVSo/DXtLSP3xdKqYWIPDrn7uo2pOqPzDwRke9KqcM+JNxijxciumbmefruiiJFUUCBKywQkV9a65lS6pGZcSKDPcwMqxh778+J6DgIMrXWXkehlooYY6ZEdCkif7XWzMzTwSRv2ZiZr7z3TER7InLjnCsPvlQkmNN9UGI8NAJdBwiERORnqQDRGcysVKQoimf4RLC9D4lEjS9fBV9+sdYeETOfi8gtfMI5B1v8NI8xZgGfASpkjJkREagWTPAp0IgnDX8BKiJyR0VRwNZGRHTS5BshpsCpImLg9GkTp/cFaeIrCygi2NhauxZTgv/cKqXOG4SbWWsv+hK8bp8of6siCXSgZCASg9DEew+63iOiC2ZGvBnkyVIkMbuS4lJJI0kgdbDWngyixX/GLS2qFZE2s2PmfRH502aWfSiXpYgx5jWYzxEzv1QQORSRZwRR59x+H0Jv7SORmuEb1tqz9ENFUdwrpZBg3jnnmsjg3fXLQoSZD733CDp7SikgsnR2ZAIhpRlV0Xp36ZMNshQJedjIez8nooNUQBH5rbWeDJ2XZSuSRFGk0Si0lNZ6UWWxPlGomHgWa5VRv0PI0n8iVeesZeaxiHxFjZF8/zVUgXOt9UOuuWYhEhd1nTaygty1wc8mHd98DSmQ7dp7I0Va0pdlepOR6pRr8YAklFJTrfU8+hjiUqgCJ0hiw1IQzRdmBlq1z2CKhBIaxVujcEgGvfePgS3XqH8bH+lKKLMRQe0QiKJViYRcltTfls/1jkiXrdf9P8nnyipw68iea/epszf5UxTCGFMQETIBtJteRGSmtb5pMjVjDNo/B7E2ryozCCItFN3o1MYYdEyKtGMyqI8ktc0yIwgpELKGYxGxzjmunniIOT9E5Mk5VwbkQRVJapuVQiy2oprqmqRcqPWT3k2rzd828cWPgEgjle8UeYtSFxCnJ/kWp5qTCu1MCyeQc1I7RCom2paG1B3ojn7rompOrrWLIx2mtzOtnWm1jC/egroxsYrjq7VBT25nZJMuShuFdlWR1XfjoAd9gNbRmzEGDYDTtg1E5ME5N9lkbfV72767Mnr7KHOOLjQaAmUcG56V47akLv40A9G04nTOHa5cGFBKYR6ChtigVza60Gm8MBBQKa9wQBkRYefcTdcHh/i/MeaSiMox+toVjqRVE5XBTxhBo1XzNDRCofN4GtpIZVO92lWpveYUJrYr85AhTr9uzzCXuWq95pS+CDYL8xBcJohXiwbRB3ECFqK1xpWr2lH4PxVzvVlIavAKAAAAAElFTkSuQmCC" alt="linkedin"></a></li>';
			var LPinstagramCondition = '<li><a href="#"><!-- Instagram icon by Icons8 --><img class="icon icons8-Instagram" src="data:image/png;base64,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" alt="instagram"></a></li>';
			var LPtwitterCondition = '<li><a href="#"><!-- Tumblr icon by Icons8 --><img class="icon icons8-Tumblr" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADxUlEQVRoQ+1a4VXbMBDWaYHSCYAJoBOQDUomKExAGAD5pAUKExQmIExQmKDJBE0ngC6g6/v8pDzF2LETm8Tpi97Ln8iS7tPdfTrdiVRFM8Z8I6KBUuo0/Ko+3cT/E6XURETGzrmnsgWp+Cczn4vId6XU0SYkXGONGRFdM/M4HbsAJMsyABjhAxH5o7W+VUo9MzN2ZGuNmWEVA+/9iIgOgyC31trrKNQciDHmloiu0BEQA0TvGjOPgsVgs++cc/nG50CCOT0GEF+2rYG63YOGRORXkHcIM8uBZFn2Gz7RZ02U+HLUzMxae0zMfCEiP+ATzrm+OnipkowxcPxDIhqSMeaeiEC1YIJe+kWVqUV/EZEHyrIMtnZKRK19wxjDRJQVF06dss7+V+lPfGUCIILB1tp3Z8oqkwZfe1VKHZSN62L+snmj/J0BYeYDEXkVkb/OuTmYLjdqU0AQETyKyItzDqFN3nYOSBVp7BSQ6HQwK631ETO/7ZxGgm+A+Y5ExDrnOLXlndAIM0N4hDYIGabOOQR3C633QMJ9BQco2GqqtR6kJlU0rSVUfm+tvVyV6ovzr0y/wR8Q7ufMJCJPWuuLMhDoN8Y8E9HZMkHbnDFrnyMxwAz3FWbm+7a7uS0gXUYCredqo5HWi3dJzXsgcQcKfjG21g4rYqGfkRiqfGkrPpLe7VPBqoSpAD4firuEc+6iLWGsTL+rHni9PxCbOuweSENbW5u19qbVwVX6Q2+IdT5Q19/Qgio/25vW3kf2PrLcizbmI8aYCRGdID9bLM5ARGYeiMgVET2U9deRQWdAEkFLU65JPeNNRJBBR+IZmX/c78+TytibtfZzneBVPto61jLGjInoKxFdVt0WY86rTEjcNGMVap0ouDONJBnxJ+ccdri0oZjkvY8amCmlZlrrMYpKbc6aLoHkOV9IT0THzAwhV2q9AAKJE9OpvGAtQ9YbIEjUee/BTp+UUo3zVIGxUE8Bcy1k8ZuqdG5adazTdEII5b2H4wPMTERYaz1NC6s3NzdnRHQQHiLExwjIjSFnjNzYQu28bu0k5zzttPSGiQOYWAtfKgsYCxpEPb8qwbdsgoXSW1KazqujdbvQpB8F1sBQg6ChfBhSq9AWnmNExmoyX9U3STV6mJfbkurozhREE23k1ej/68FA0Mr8CQdCCefcXRu1f9RYYwzisryM/u4JR1y0kLMC89xqrV+2/aQjkAgYD+9O8kcNxZJ36TMn7z2004h5Pmrnq+YNVYDR0mdO6eAkNsJjgpNNC5yuF9guMl3pWfMPzOt9SgN4YEwAAAAASUVORK5CYII=" alt="tumblr"></a></li>';
			var LPusernameCondition = '<div class="user-text"><label class="user-name"><a href="'+LPauthorurl+'">'+LPusername+'</a></label><br><label class="user-position">'+LPuserlisting+' Listings</label><ul class="social-icons post-socials">'+LPfbCondition+''+LPgplusCondition+''+LPlinkedinCondition+''+LPinstagramCondition+''+LPtwitterCondition+'</ul></div>';
		}
		var addhtml = '<div class="popup-post-left-upper lp-border-bottom">\
								<h1><a href="'+LPposturl+'">'+LPtitle+'</a></h1>\
								<ul class="post-stat">\
									'+reviewbox+' '+LPnumberCondition+' '+LPemailCondition+' '+LPwebsiteCondition+'\
								</ul><!-- ../post-stat -->\
								'+LPpriceCondition+'\
						</div>\
							<div class="popup-post-left-bottom">\
								'+LPdescriptionCondition+'\
								<div class="user-info">\
									'+LPuserimageCondition+'\
									'+LPusernameCondition+'\
								</div><!-- ../user-info -->\
							</div><!-- ../popup-post-left-bottom -->';
								
		$(".lp-insert-data").html(addhtml);	
		
	
	//Popup Quick Map
	var latlng = new google.maps.LatLng(LPlattitue,LPlongitute);
       var myOptions = {
         zoom: 16,
         center: latlng,
         mapTypeId: google.maps.MapTypeId.ROADMAP
       };
       var map = new google.maps.Map(document.getElementById("quickmap"), myOptions);
       function initialize() {
         var marker = new google.maps.Marker({
            draggable: true,
           position: latlng,
			icon: 'images/pins/pin.png',
           map: map
         });
      }

      initialize();
		
	});
	
	//href Smooth Scroll
	
	// handle links with @href started with '#' only
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	var userlink = $('body').data('userlink');
	var userimg = $('body').data('userimg');
	$('#menu').mmenu({
			navbar: {
				title: ""
			},
			navbars		: {
				height 	: 3,
				content :  [ 
					'<a href="about.html" class="iconsmall iconsmalltext"><i class="fa fa-info"></i></a>',
					'<a href="'+userlink+'" class="userimage"><img class="icon icons8-Contacts" src="'+userimg+'" alt="user"></a>',
					'<a href="contact.html" class="iconsmall"><img class="icon icons8-Message" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADjElEQVRoge1YPWgUQRROkcIiRZCAERQVUlwhKGIghT/vTQotLCxSCFpYREkhGEQhhUVAwZAg6bQ88HbehGtSWKSwuMIihYVIiCHmdt5IikMiWJygKBKLnd3bS/budu+SrB77wVYz++77dud977vt6cmQIUOGDGkAibe74eo+IWmfjHbRvUKAOJc2qaQA4lxUj1TA4ZG0ycUFKPc8ElcaNXsZFz7fTZtkKwgy40D6U2SzC8X50DGbTJtsIwDxJJL5jcTbglhFNjsQTwXCiOfTJh0GlEq9gni+9uDNk56eJq4Fjh5D4h+eGFOAUqk3PfqWU3G1TxAvelzNb5B8219rar8g+QYSv7drhAv6zIGztxCFjXModdFy+QDS3Ayvt5wj1trYrq9BoTx0cPQth0J5CInXLAeOGhGxBiIUeRDJvEvDnuvt1byDIg9G7Ys92aG42ieUeW0LVoH4+v7Rt7/puNeQTNWaziIUV/sa7U0UUYDWB5DMrBXzFUk/2nv6PjHzAIm/2N+aBVofaL6/jawFUj8M2d/c3lCvQRA/C2aZ1A/j3NN2aBSKJwITUPxCSH2ifeoeLr0yp1CZF35TC8UTce/tKP0CuReQzJZ9/W8hz/3J6dtanqG8tbW2gNwLSe7vOMZbV/GzzhooPpm4BnEOldkIjpNyzyet0dkbKZSHkMzKjsBZSUKk/q36l1lJOq/aFhK2RiSzAsS5WniLZ89A+lYo+C16w9efV6YKjntt34RAqdQL0p0OhUoV9nehzFyQhYinojKaV0M/DiXul/4+yPOhugQu3ek4OS/ZHMlzPxIv1UJbtDWC1Pf8J43Ea+DoMaD1AaD1Ae9NBvltG4inImuQHg/VWGplJPEnu+SzoYasQIGhqWjiqxj65xZxfWt1/MDhkaCGMhuwUD7dkRB7lqt2ZiyDs3GsGYHgvjz3g3SnUfGy19BmCxUvC2XmGmWmXTWKPIjEpVrv6VuJhYySPiIkz6Din4LMHyT9/JIqH49DYC9xsWCOIulZJP6Fin8KyTOjpI+E9zQUctlxh1EZ6U9ZkHz/oAXshO29suVElx132F+LFOINObMZiGhjQO0XQPLZIBqR2fS57RJS7xbmTavUmQa8FB5yT9Lju4TYxe+C9NN/UYSPK8XNwyD1k9pQ3vk5iPgjSv7nv2n5EErfAeKPEUerSz6Zpk2qXXSvkP/96h4hGTJkyJAhDfwFrL5XNwpoE2kAAAAASUVORK5CYII=" alt="contactus"></a>'
				]
			}
		});
	//Tags Container 
	var $tags = $('.chosen-select').chosen(),
		LPnewTags = function() {
                    $('.LPtagsContainer').empty();
                    $tags.find(':selected').each(function(i, obj) {
                        $('<div class="active-tag">' + obj.value + '<div class="remove-tag"><i class="fa fa-times"></i></div></div>').appendTo('.LPtagsContainer').on('click', function() {
                            $(this).remove();
                            $(obj).attr('selected', false);
                            $tags.trigger("chosen:updated");
                            $('.LPtagsContainer input[value="' + obj.value + '"]').remove();
                        });

                        $('<input type="hidden" name="select_tag" value="' + obj.value + '" />').appendTo('.LPtagsContainer');
                    });
                };

            $tags.on('change', LPnewTags);
	
		/* Social Share */
		$('.sbutton').on('click', function(event) {
		  event.preventDefault();
		  $('.smenu').toggleClass('share');
		});
		/* Pins Hover */

		$(document).on('mouseenter','.lp-grid-box-contianer',function() {
			var cardID  = $(this).data("id");
				cardclass= '.lpmap-icon-shape.card'+cardID+'';
			if($(cardclass).hasClass('cardHighlight')) {
				$(cardclass).removeClass("cardHighlight"); 
			 }
			 else{   
				$(cardclass).addClass("cardHighlight"); 
			 }
		  });
		  $(document).on('mouseleave','.lp-grid-box-contianer',function() {
				$(cardclass).removeClass("cardHighlight"); 			 
		  });
		  
	 /* Select Category */
	 $('.postsubmitSelect').on('change', function(){
		 $('.featuresDataRow').show();
		var cvalue =	$(this).val() ;
		$('.featuresData').css({'opacity':'0','visibility':'hidden','display':'none'});
		$('.featuresDataContainer').find('.featuresData'+cvalue).css({'opacity':'1','visibility':'visible','display':'block'});
	});
	
});
$(document).on('change', '.btn-file :file', function() {
  var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [numFiles, label]);
});
