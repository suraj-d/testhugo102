(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  // navigation
  $(window).scroll(function () {
    if ($('.navigation').offset().top > 1) {
      $('.navigation').addClass('nav-bg');
    } else {
      $('.navigation').removeClass('nav-bg');
    }
  });


  // video modal popup
  var $videoSrc;
  $('.video-modal').click(function () {
    $videoSrc = $(this).data("src");
  });
  $('#videoModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  $('#videoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc);
  })
  $('#videoModal2').on('shown.bs.modal', function (e) {
    $("#video2").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })
  $('#videoModal2').on('hide.bs.modal', function (e) {
    $("#video2").attr('src', $videoSrc);
  })
  $("#dismissBtn").click(function() { 
    $("#videoModal").modal('hide'); 
  });
  $("#dismissBtn").click(function() { 
    $("#videoModal2").modal('hide'); 
  });
  $('#videoModal').each(function(){
    var src = $(this).find('iframe').attr('src');
      $(this).on('click', function(){
        $(this).find('iframe').attr('src', '');
        $(this).find('iframe').attr('src', src);
    });
  });

  // testimonial slider
  $('.testimonial-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  // product Slider
  $('.product-slider').slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data('image');
      return '<img class="img-fluid" src="' + image + '" alt="product-img">';
    }
  });
  

  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
  });

  // Form send to whatsapp
$('.contactUs').click(function () {
    var name, location, message,contactNumber, url
    
    name = $('#name').val();
    location = $('#location').val();
    message = $('#message').val();
    contactNumber = 9820927720;
    url ="https://wa.me/91"+contactNumber+"?text=Hi, ";

    if (name != "" || location != "" || message != "") {
           
      if(name != ""){
        url += "I am "+name;
      }
      
      if(location != "" && name == ""){
        url += "I am from "+location;
      }else if(location != "" && name !=""){
        url += " from "+location;
      }
           
      if (message != "") {
        url += "%0A"+message;
      }
      
      //open in new page
      window.open(url,"_blank"); 
      
      //clear text field
      $('#name').val("");
      $('#location').val("");
      $('#message').val("");

    }else{
      alert("Enter your name, location and message.")
    }

  })

  //copy description
   $('.copyText').click(function () {
    //get text from desc
    var copyText = document.querySelector('.content').innerText
    //create new text area
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = copyText;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
    $('#copyButton').html('Description Copied');
  
   })

   //bulk image download from textilezone.in
  /*  function download_as_now(){
		var images = new Array();
		jQuery.each(jQuery('.woocommerce-product-gallery__image a'), function(index, val) {
			var link = document.createElement('a');
			console.log(jQuery(this).attr('href'));
			images.push(jQuery(this).attr('href'));
			link.href = jQuery(this).attr('href');
			var url = jQuery(this).attr('href');
			link.download = url.substring(url.lastIndexOf('/')+1);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		});
		if(jQuery('.woocommerce-product-gallery__image a').length == 0){
			jQuery.each(jQuery('.gallery-item a'), function(index, val) {
				var link = document.createElement('a');
				console.log(jQuery(this).attr('href'));
				images.push(jQuery(this).attr('href'));
				link.href = jQuery(this).attr('href');
				var url = jQuery(this).attr('href');
				link.download = url.substring(url.lastIndexOf('/')+1);
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			});
		}
  }
  
  */

})(jQuery);
